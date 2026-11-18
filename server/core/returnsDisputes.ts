import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { logAuditEvent } from './audit';
import { notificationProvider, NotificationTemplates } from './notifications';
import { RETURN_STATUS, PAYMENT_HOLD_STATUS, ORDER_STATUS } from '../../shared/statuses';

export const createReturnSchema = z.object({
  orderId: z.string().min(1),
  reason: z.string().min(5).max(500),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().int().min(1),
  })).min(1),
  condition: z.enum(['UNOPENED', 'DEFECTIVE', 'WRONG_ITEM', 'DAMAGED_IN_TRANSIT']).default('DEFECTIVE'),
  evidenceUrls: z.array(z.string().url()).optional(),
});

export const reviewReturnSchema = z.object({
  action: z.enum(['APPROVE', 'REJECT']),
  notes: z.string().max(500).optional(),
});

export const createDisputeSchema = z.object({
  orderId: z.string().min(1),
  reason: z.string().min(10).max(1000),
  claimType: z.enum(['NON_DELIVERY', 'DAMAGED_ITEM', 'INCORRECT_SPECIFICATION', 'SELLER_UNRESPONSIVE']),
  evidenceUrls: z.array(z.string().url()).optional(),
});

export async function handleCreateReturnRequest(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    const { orderId, reason, items, condition, evidenceUrls } = req.body;
    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();

    if (!orderDoc.exists) {
      return next(AppError.notFound('Order not found'));
    }

    const orderData = orderDoc.data()!;
    if (orderData.buyerId !== req.user.uid) {
      return next(AppError.forbidden('You can only request returns for your own orders'));
    }

    if (orderData.status !== ORDER_STATUS.DELIVERED) {
      return next(AppError.badRequest('Returns can only be requested after the order has been delivered'));
    }

    // Verify return window
    if (orderData.returnWindowEndsAt && new Date(orderData.returnWindowEndsAt).getTime() < Date.now()) {
      return next(AppError.badRequest('The 3-day inspection/return window for this order has expired'));
    }

    const returnRef = dbAdmin.collection('returns').doc();
    const returnId = returnRef.id;
    const nowIso = new Date().toISOString();

    const returnRecord = {
      id: returnId,
      orderId,
      buyerId: req.user.uid,
      sellerId: orderData.sellerId || (orderData.items?.[0]?.sellerId),
      items,
      reason,
      condition,
      evidenceUrls: evidenceUrls || [],
      status: RETURN_STATUS.REQUESTED,
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    const batch = dbAdmin.batch();
    batch.set(returnRef, returnRecord);

    // Freeze payout hold
    const holdSnap = await dbAdmin.collection('payoutHolds').where('orderId', '==', orderId).get();
    for (const hDoc of holdSnap.docs) {
      batch.update(hDoc.ref, {
        status: PAYMENT_HOLD_STATUS.DISPUTED,
        frozenReason: `RETURN_REQUESTED_${returnId}`,
        updatedAt: nowIso,
      });
    }

    batch.update(orderDoc.ref, {
      status: ORDER_STATUS.RETURN_REQUESTED,
      activeReturnId: returnId,
      updatedAt: nowIso,
    });

    await batch.commit();

    // Send notifications
    const template = NotificationTemplates.returnOpened(orderId, reason);
    if (orderData.sellerId) {
      await notificationProvider.sendInApp({
        userId: orderData.sellerId,
        title: template.title,
        body: template.body,
        type: 'RETURN',
      });
    }

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: 'BUYER',
      action: 'RETURN_REQUESTED',
      targetId: returnId,
      targetType: 'RETURN',
      metadata: { orderId, reason },
    });

    return res.status(201).json({
      success: true,
      returnId,
      status: RETURN_STATUS.REQUESTED,
    });
  } catch (err) {
    return next(err);
  }
}

export async function handleReviewReturn(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    const returnId = String(req.params.returnId);
    const { action, notes } = req.body;

    const returnDoc = await dbAdmin.collection('returns').doc(returnId).get();
    if (!returnDoc.exists) {
      return next(AppError.notFound('Return request not found'));
    }

    const returnData = returnDoc.data()!;
    const isSeller = req.user.role === 'seller' && (returnData.sellerId === req.user.uid || returnData.sellerId === req.user.sellerId);
    const isAdmin = req.user.role === 'admin' || req.user.role === 'super-admin';

    if (!isSeller && !isAdmin) {
      return next(AppError.forbidden('Only the owning seller or admin can review return requests'));
    }

    const newStatus = action === 'APPROVE' ? RETURN_STATUS.APPROVED : RETURN_STATUS.REJECTED;
    const nowIso = new Date().toISOString();

    await returnDoc.ref.update({
      status: newStatus,
      reviewNotes: notes || null,
      reviewedBy: req.user.uid,
      reviewedAt: nowIso,
      updatedAt: nowIso,
    });

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: `RETURN_${action}D`,
      targetId: returnId,
      targetType: 'RETURN',
      metadata: { action, notes },
    });

    return res.status(200).json({
      success: true,
      returnId,
      status: newStatus,
    });
  } catch (err) {
    return next(err);
  }
}

export async function handleCreateDispute(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    const { orderId, reason, claimType, evidenceUrls } = req.body;
    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();

    if (!orderDoc.exists) {
      return next(AppError.notFound('Order not found'));
    }

    const orderData = orderDoc.data()!;
    const disputeRef = dbAdmin.collection('disputes').doc();
    const disputeId = disputeRef.id;
    const nowIso = new Date().toISOString();

    const disputeRecord = {
      id: disputeId,
      orderId,
      buyerId: req.user.uid,
      sellerId: orderData.sellerId,
      claimType,
      reason,
      evidenceUrls: evidenceUrls || [],
      status: 'OPENED',
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    const batch = dbAdmin.batch();
    batch.set(disputeRef, disputeRecord);

    // Freeze payout hold
    const holdSnap = await dbAdmin.collection('payoutHolds').where('orderId', '==', orderId).get();
    for (const hDoc of holdSnap.docs) {
      batch.update(hDoc.ref, {
        status: PAYMENT_HOLD_STATUS.DISPUTED,
        frozenReason: `DISPUTE_OPENED_${disputeId}`,
        updatedAt: nowIso,
      });
    }

    batch.update(orderDoc.ref, {
      status: ORDER_STATUS.DISPUTED,
      activeDisputeId: disputeId,
      updatedAt: nowIso,
    });

    await batch.commit();

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: 'DISPUTE_OPENED',
      targetId: disputeId,
      targetType: 'DISPUTE',
      metadata: { orderId, claimType, reason },
    });

    return res.status(201).json({
      success: true,
      disputeId,
      status: 'OPENED',
    });
  } catch (err) {
    return next(err);
  }
}
