import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { logAuditEvent } from './audit';
import { createDeliverySecurity, verifyDeliveryCode, adminReissueDeliveryCode } from './deliverySecurity';
import { notificationProvider, NotificationTemplates } from './notifications';
import { DISPATCH_STATUS, ORDER_STATUS } from '../../shared/statuses';

export const addCourierSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^\+?256[0-9]{9}$|^0[0-9]{9}$/, 'Must be valid Ugandan phone number'),
  plateNumber: z.string().max(20).optional(),
  vehicleType: z.enum(['BODA_BODA', 'MATATU_CARGO', 'VAN', 'BICYCLE']).default('BODA_BODA'),
});

export const createDispatchSchema = z.object({
  orderId: z.string().min(1),
  courierType: z.enum(['REGISTERED', 'SAFEBODA', 'MATATU_LOGISTICS', 'REGIONAL_DISPATCH']).default('SAFEBODA'),
  riderId: z.string().optional(),
  courierName: z.string().max(100).optional(),
  courierPhone: z.string().max(30).optional(),
  plateNumber: z.string().max(30).optional(),
  sellerNotes: z.string().max(500).optional(),
});

export const verifyCodeSchema = z.object({
  code: z.string().length(6, 'Delivery code must be exactly 6 digits'),
});

// ---------------------------------------------------------------------------
// 1. COURIERS
// ---------------------------------------------------------------------------
export async function handleListCouriers(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));

    const sellerId = req.user.sellerId || req.user.uid;
    const snap = await dbAdmin.collection('couriers').where('sellerId', '==', sellerId).get();
    const couriers = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

    return res.status(200).json({ success: true, couriers });
  } catch (err) {
    return next(err);
  }
}

export async function handleAddCourier(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));
    const { name, phone, plateNumber, vehicleType } = req.body;
    const sellerId = req.user.sellerId || req.user.uid;

    const courierRef = dbAdmin.collection('couriers').doc();
    const nowIso = new Date().toISOString();

    const courierRecord = {
      id: courierRef.id,
      sellerId,
      name,
      phone,
      plateNumber: plateNumber || null,
      vehicleType,
      status: 'ACTIVE',
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    await courierRef.set(courierRecord);

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: 'COURIER_ADDED',
      targetId: courierRef.id,
      targetType: 'COURIER',
      after: courierRecord,
    });

    return res.status(201).json({ success: true, courier: courierRecord });
  } catch (err) {
    return next(err);
  }
}

// ---------------------------------------------------------------------------
// 2. HUBS & PICKUP STATIONS
// ---------------------------------------------------------------------------
export async function handleListHubs(_req: Request, res: Response, next: NextFunction) {
  try {
    const snap = await dbAdmin.collection('hubs').get();
    const hubs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return res.status(200).json({ success: true, hubs });
  } catch (err) {
    return next(err);
  }
}

// ---------------------------------------------------------------------------
// 3. DISPATCH & 6-DIGIT DELIVERY CODE
// ---------------------------------------------------------------------------
export async function handleCreateDispatch(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));
    const { orderId, courierType, riderId, courierName, courierPhone, plateNumber, sellerNotes } = req.body;

    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();
    if (!orderDoc.exists) {
      return next(AppError.notFound('Order not found'));
    }

    const order = orderDoc.data()!;
    const isSeller = req.user.role === 'seller' && (order.sellerId === req.user.uid || order.sellerId === req.user.sellerId);
    const isAdmin = req.user.role === 'admin' || req.user.role === 'super-admin';
    const isHubAgent = req.user.role === 'hub';

    if (!isSeller && !isAdmin && !isHubAgent) {
      return next(AppError.forbidden('Only owning seller, hub agent, or admin can dispatch this order'));
    }

    if (order.status !== ORDER_STATUS.PAID && order.status !== ORDER_STATUS.CONFIRMED && order.status !== ORDER_STATUS.PROCESSING) {
      return next(AppError.badRequest(`Cannot dispatch order in "${order.status}" status. Order must be PAID or CONFIRMED.`));
    }

    const deliveryRef = dbAdmin.collection('deliveries').doc();
    const deliveryId = deliveryRef.id;
    const nowIso = new Date().toISOString();

    // Generate security record with hash only
    const { plaintextCode, expiresAt } = await createDeliverySecurity(deliveryId);

    const deliveryRecord = {
      id: deliveryId,
      orderId,
      sellerId: order.sellerId || req.user.uid,
      buyerId: order.buyerId,
      riderId: riderId || null,
      courierType,
      courierName: courierName || 'SafeBoda Dispatch',
      courierPhone: courierPhone || null,
      plateNumber: plateNumber || null,
      sellerNotes: sellerNotes || null,
      status: DISPATCH_STATUS.IN_TRANSIT,
      codeExpiresAt: expiresAt,
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    await deliveryRef.set(deliveryRecord);

    await orderDoc.ref.update({
      dispatchId: deliveryId,
      dispatchStatus: DISPATCH_STATUS.IN_TRANSIT,
      status: ORDER_STATUS.IN_TRANSIT,
      courierType,
      courierName: deliveryRecord.courierName,
      courierPhone: deliveryRecord.courierPhone,
      updatedAt: nowIso,
    });

    // Notify buyer with 6-digit delivery code
    const template = NotificationTemplates.dispatchedWithCode(orderId, plaintextCode, deliveryRecord.courierName);
    if (order.buyerId) {
      await notificationProvider.sendInApp({
        userId: order.buyerId,
        title: template.title,
        body: template.body,
        type: 'DELIVERY',
        metadata: { orderId, deliveryId },
      });
    }

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: 'DISPATCH_CREATED',
      targetId: deliveryId,
      targetType: 'DELIVERY',
      metadata: { orderId, courierType, courierName },
    });

    return res.status(201).json({
      success: true,
      deliveryId,
      status: DISPATCH_STATUS.IN_TRANSIT,
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Buyer retrieves their 6-digit delivery confirmation code for an order.
 * Since DB stores only the hash, we can return the code if order belongs to buyer
 * and verification is still pending.
 */
export async function handleGetBuyerDeliveryCode(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));
    const orderId = String(req.params.orderId);

    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();
    if (!orderDoc.exists) return next(AppError.notFound('Order not found'));

    const order = orderDoc.data()!;
    if (order.buyerId !== req.user.uid && req.user.role !== 'admin' && req.user.role !== 'super-admin') {
      return next(AppError.forbidden('Only the purchasing buyer can view their delivery confirmation code'));
    }

    if (!order.dispatchId) {
      return next(AppError.badRequest('Order has not yet been dispatched'));
    }

    const deliveryDoc = await dbAdmin.collection('deliveries').doc(order.dispatchId).get();
    if (!deliveryDoc.exists) return next(AppError.notFound('Delivery record not found'));

    return res.status(200).json({
      success: true,
      orderId,
      deliveryId: order.dispatchId,
      status: order.dispatchStatus || order.status,
      expiresAt: deliveryDoc.data()?.codeExpiresAt,
      instructions: 'Read this 6-digit code to the rider ONLY when your package has been delivered and inspected.',
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Rider verifies the 6-digit OTP code given by the buyer upon handover
 */
export async function handleVerifyRiderDeliveryCode(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));
    const deliveryId = String(req.params.deliveryId);
    const { code } = req.body;

    const result = await verifyDeliveryCode(deliveryId, code, req.user.uid);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Admin unlocks or reissues a locked delivery code
 */
export async function handleAdminUnlockDelivery(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) return next(AppError.unauthorized('Authentication required'));
    const deliveryId = String(req.params.deliveryId);
    const { reason = 'Admin code reset' } = req.body;

    const result = await adminReissueDeliveryCode(deliveryId, req.user.uid, reason);
    return res.status(200).json({
      success: true,
      deliveryId,
      expiresAt: result.expiresAt,
      reissuedCode: result.plaintextCode,
    });
  } catch (err) {
    return next(err);
  }
}
