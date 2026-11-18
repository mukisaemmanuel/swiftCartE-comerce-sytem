import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { pesapalClient } from './pesapal';
import { logAuditEvent } from './audit';
import { notificationProvider, NotificationTemplates } from './notifications';
import { ORDER_STATUS, PAYMENT_STATUS, PAYMENT_HOLD_STATUS, DISPATCH_STATUS } from '../../shared/statuses';

export const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1, 'Product ID is required'),
        variantId: z.string().optional(),
        quantity: z.number().int().min(1, 'Quantity must be at least 1').max(20, 'Max quantity per line is 20'),
      })
    )
    .min(1, 'Cart items cannot be empty')
    .max(50, 'Cannot checkout more than 50 distinct items'),
  deliveryType: z.enum(['DOORSTEP', 'PICKUP_STATION']),
  deliveryAddress: z.object({
    recipientName: z.string().min(1, 'Recipient name is required').max(100),
    phone: z.string().regex(/^\+?256[0-9]{9}$|^0[0-9]{9}$/, 'Must be a valid Ugandan phone number (+256...)'),
    addressLine: z.string().max(200).optional(),
    city: z.string().max(100).default('Kampala'),
    district: z.string().max(100).default('Kampala Central'),
    pickupStationId: z.string().optional(),
    landmark: z.string().max(140).optional(),
  }),
  idempotencyKey: z.string().min(1, 'Idempotency key required').max(128),
  callbackUrl: z.string().url().optional(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

interface FirestoreProductRecord {
  id: string;
  title?: string;
  status?: string;
  stock?: number;
  price?: number;
  sellerId?: string;
  sellerName?: string;
  image?: string;
  images?: string[];
}

interface ValidatedOrderItem {
  productId: string;
  title: string;
  sellerId: string;
  sellerName: string;
  price: number;
  quantity: number;
  total: number;
  image: string | null;
}

export async function handleCheckout(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required to checkout'));
    }

    const buyerId = req.user.uid;
    const { items, deliveryType, deliveryAddress, idempotencyKey, callbackUrl } = req.body as CheckoutInput;

    // 1. Idempotency Check
    const existingOrderSnap = await dbAdmin
      .collection('orders')
      .where('buyerId', '==', buyerId)
      .where('idempotencyKey', '==', idempotencyKey)
      .limit(1)
      .get();

    if (!existingOrderSnap.empty) {
      const existing = existingOrderSnap.docs[0].data();
      return res.status(200).json({
        success: true,
        orderId: existing.id,
        orderTrackingId: existing.pesapalOrderTrackingId,
        redirectUrl: existing.pesapalRedirectUrl,
        reused: true,
      });
    }

    // 2. Fetch all products from Firestore to re-verify prices & inventory (NEVER TRUST CLIENT)
    const productIds = Array.from(new Set(items.map((i) => i.productId)));
    const productDocs = await Promise.all(productIds.map((pid) => dbAdmin.collection('products').doc(pid).get()));

    const productMap = new Map<string, FirestoreProductRecord>();
    for (const pDoc of productDocs) {
      if (!pDoc.exists) {
        return next(AppError.notFound(`Product with ID "${pDoc.id}" no longer exists`));
      }
      productMap.set(pDoc.id, { id: pDoc.id, ...(pDoc.data() as Omit<FirestoreProductRecord, 'id'>) });
    }

    // 3. Re-calculate order items and partition by seller
    let subtotalUGX = 0;
    const validatedItems: ValidatedOrderItem[] = [];
    const sellerSubOrderMap = new Map<string, ValidatedOrderItem[]>();

    for (const item of items) {
      const prod = productMap.get(item.productId);
      if (!prod) {
        return next(AppError.notFound(`Product with ID "${item.productId}" not found`));
      }
      const statusUpper = String(prod.status || '').toUpperCase();
      if (statusUpper !== 'APPROVED' && statusUpper !== 'ACTIVE') {
        return next(AppError.badRequest(`Product "${prod.title || item.productId}" is currently unavailable for purchase`));
      }

      if (typeof prod.stock === 'number' && prod.stock < item.quantity) {
        return next(AppError.badRequest(`Insufficient stock for "${prod.title || item.productId}". Only ${prod.stock} available.`));
      }

      const unitPrice = Math.round(Number(prod.price || 0));
      if (!Number.isInteger(unitPrice) || unitPrice <= 0) {
        return next(AppError.badRequest(`Product "${prod.title || item.productId}" has invalid price configuration`));
      }

      const lineTotal = unitPrice * item.quantity;
      subtotalUGX += lineTotal;

      const itemRecord: ValidatedOrderItem = {
        productId: prod.id,
        title: prod.title || 'SwiftCart Product',
        sellerId: prod.sellerId || 'seller_default',
        sellerName: prod.sellerName || 'Verified Seller',
        price: unitPrice,
        quantity: item.quantity,
        total: lineTotal,
        image: prod.image || (Array.isArray(prod.images) ? prod.images[0] : null) || null,
      };

      validatedItems.push(itemRecord);

      const sellerGroup = sellerSubOrderMap.get(itemRecord.sellerId) || [];
      sellerGroup.push(itemRecord);
      sellerSubOrderMap.set(itemRecord.sellerId, sellerGroup);
    }

    // 4. Calculate Delivery Fees based on delivery type
    // Flat delivery fee: Doorstep in Kampala: UGX 5,000; Pickup station: UGX 2,500
    const deliveryFeeUGX = deliveryType === 'PICKUP_STATION' ? 2500 : 5000;
    const totalUGX = Math.round(subtotalUGX + deliveryFeeUGX);

    const orderRef = dbAdmin.collection('orders').doc();
    const orderId = orderRef.id;
    const nowIso = new Date().toISOString();

    // 5. Initiate Pesapal Payment Request
    const resolvedCallbackUrl =
      callbackUrl ||
      `${process.env.APP_URL || 'http://localhost:5173'}/checkout-one-flow-payment-waiting?orderId=${orderId}`;

    const pesapalRes = await pesapalClient.submitOrder({
      merchantReference: orderId,
      amountUGX: totalUGX,
      description: `SwiftCart Order #${orderId}`,
      callbackUrl: resolvedCallbackUrl,
      billingAddress: {
        emailAddress: req.user.email || 'buyer@swiftcart.ug',
        phoneNumber: deliveryAddress.phone,
        firstName: deliveryAddress.recipientName.split(' ')[0] || 'SwiftCart',
        lastName: deliveryAddress.recipientName.split(' ').slice(1).join(' ') || 'Buyer',
      },
    });

    // 6. Create Order Document and Sub-Orders
    const primarySellerId = validatedItems[0]?.sellerId || 'seller_default';
    const orderData = {
      id: orderId,
      buyerId,
      sellerId: primarySellerId,
      buyerName: deliveryAddress.recipientName,
      buyerPhone: deliveryAddress.phone,
      items: validatedItems,
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotalUGX,
      deliveryFeeUGX,
      totalUGX,
      currency: 'UGX',
      status: ORDER_STATUS.PENDING_PAYMENT,
      paymentStatus: PAYMENT_STATUS.PENDING,
      paymentHoldStatus: PAYMENT_HOLD_STATUS.HELD,
      dispatchStatus: DISPATCH_STATUS.PENDING,
      deliveryType,
      deliveryAddress,
      idempotencyKey,
      pesapalOrderTrackingId: pesapalRes.orderTrackingId,
      pesapalRedirectUrl: pesapalRes.redirectUrl,
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    const batch = dbAdmin.batch();
    batch.set(orderRef, orderData);

    // Save sub-orders per seller
    for (const [sellerId, sellerItems] of sellerSubOrderMap.entries()) {
      const subOrderId = `${orderId}_${sellerId}`;
      const subOrderRef = orderRef.collection('sub_orders').doc(subOrderId);
      const subTotal = sellerItems.reduce((acc, curr) => acc + curr.total, 0);

      batch.set(subOrderRef, {
        id: subOrderId,
        orderId,
        sellerId,
        sellerName: sellerItems[0]?.sellerName || 'Verified Seller',
        items: sellerItems,
        subTotalUGX: subTotal,
        status: ORDER_STATUS.PENDING_PAYMENT,
        createdAt: nowIso,
        updatedAt: nowIso,
      });

      // Initialize payout hold entry
      const holdRef = dbAdmin.collection('payoutHolds').doc(`hold_${subOrderId}`);
      batch.set(holdRef, {
        id: `hold_${subOrderId}`,
        orderId,
        subOrderId,
        sellerId,
        buyerId,
        grossAmountUGX: subTotal,
        status: PAYMENT_HOLD_STATUS.HELD,
        createdAt: nowIso,
        updatedAt: nowIso,
      });
    }

    // Save Payment Record & Tracking Index Document
    const paymentRef = dbAdmin.collection('payments').doc(`pay_${orderId}`);
    batch.set(paymentRef, {
      id: `pay_${orderId}`,
      orderId,
      buyerId,
      amountUGX: totalUGX,
      currency: 'UGX',
      provider: 'PESAPAL',
      orderTrackingId: pesapalRes.orderTrackingId,
      status: PAYMENT_STATUS.PENDING,
      createdAt: nowIso,
      updatedAt: nowIso,
    });

    const trackingIndexRef = dbAdmin.collection('paymentTracking').doc(pesapalRes.orderTrackingId);
    batch.set(trackingIndexRef, {
      orderTrackingId: pesapalRes.orderTrackingId,
      orderId,
      buyerId,
      totalUGX,
      currency: 'UGX',
      createdAt: nowIso,
    });

    await batch.commit();

    // Notify buyer
    const template = NotificationTemplates.orderPlaced(orderId, totalUGX);
    await notificationProvider.sendInApp({
      userId: buyerId,
      title: template.title,
      body: template.body,
      type: 'ORDER',
      link: `/order-confirmation?orderId=${orderId}`,
    });

    await logAuditEvent({
      actorUid: buyerId,
      actorRole: 'BUYER',
      action: 'CHECKOUT_ORDER_CREATED',
      targetId: orderId,
      targetType: 'ORDER',
      metadata: { totalUGX, orderTrackingId: pesapalRes.orderTrackingId },
    });

    return res.status(201).json({
      success: true,
      orderId,
      orderTrackingId: pesapalRes.orderTrackingId,
      redirectUrl: pesapalRes.redirectUrl,
      totalUGX,
    });
  } catch (err) {
    return next(err);
  }
}
