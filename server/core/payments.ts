import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { pesapalClient, PesapalTransactionStatus } from './pesapal';
import { logAuditEvent } from './audit';
import { logger } from './logger';
import { notificationProvider, NotificationTemplates } from './notifications';
import { ORDER_STATUS, PAYMENT_STATUS } from '../../shared/statuses';
import { canTransition, PAYMENT_STATUS_TRANSITIONS, ORDER_STATUS_TRANSITIONS } from './stateMachines';

export const ipnQuerySchema = z.object({
  OrderTrackingId: z.string().optional(),
  orderTrackingId: z.string().optional(),
  OrderMerchantReference: z.string().optional(),
  orderMerchantReference: z.string().optional(),
  OrderNotificationType: z.string().optional(),
});

export interface ReconcileResult {
  action:
    | 'UPDATED_PAID'
    | 'UPDATED_FAILED'
    | 'UPDATED_REFUNDED'
    | 'MISMATCH'
    | 'NOOP_ALREADY_PAID'
    | 'NOOP_PROTECTED_PAID'
    | 'NOOP_TERMINAL'
    | 'NOOP_UNCHANGED'
    | 'ORDER_NOT_FOUND';
  orderId: string;
  paymentStatus: string;
  orderStatus: string;
  statusResult: PesapalTransactionStatus;
  mismatchReason?: string;
}

/**
 * Resolves an orderId ONLY from Firestore using Pesapal's orderTrackingId.
 * Never reads or trusts OrderMerchantReference from the HTTP request.
 */
async function resolveOrderIdByTrackingId(orderTrackingId: string): Promise<string | null> {
  // 1. Direct lookup via paymentTracking index doc (written at checkout)
  const trackingDoc = await dbAdmin.collection('paymentTracking').doc(orderTrackingId).get();
  if (trackingDoc.exists) {
    const indexedOrderId = trackingDoc.data()?.orderId;
    if (typeof indexedOrderId === 'string' && indexedOrderId.length > 0) {
      return indexedOrderId;
    }
  }

  // 2. Fallback query on orders collection by stored pesapalOrderTrackingId
  const ordersSnap = await dbAdmin
    .collection('orders')
    .where('pesapalOrderTrackingId', '==', orderTrackingId)
    .limit(1)
    .get();
  if (!ordersSnap.empty) {
    return ordersSnap.docs[0].id;
  }

  // 3. Fallback query on payments collection by stored orderTrackingId
  const paymentsSnap = await dbAdmin
    .collection('payments')
    .where('orderTrackingId', '==', orderTrackingId)
    .limit(1)
    .get();
  if (!paymentsSnap.empty) {
    const paymentOrderId = paymentsSnap.docs[0].data()?.orderId;
    if (typeof paymentOrderId === 'string' && paymentOrderId.length > 0) {
      return paymentOrderId;
    }
  }

  return null;
}

/**
 * Shared tamper-proof transaction reconciliation used by both IPN webhook and status polling.
 */
export async function reconcilePesapalTransaction(
  orderId: string,
  orderTrackingId: string,
  sourceActorUid: string = 'PESAPAL_IPN'
): Promise<ReconcileResult> {
  const statusResult = await pesapalClient.getTransactionStatus(orderTrackingId);

  const orderRef = dbAdmin.collection('orders').doc(orderId);
  const paymentRef = dbAdmin.collection('payments').doc(`pay_${orderId}`);

  const desc = String(statusResult.paymentStatusDescription || '').toUpperCase();
  const isCompleted = statusResult.statusCode === 1 || desc === 'COMPLETED';
  const isFailed = statusResult.statusCode === 2 || desc === 'FAILED';
  const isReversed = statusResult.statusCode === 3 || desc === 'REVERSED';

  let buyerIdForNotify: string | undefined;
  let totalUGXForNotify = 0;

  const txOutcome = await dbAdmin.runTransaction(async (transaction) => {
    const orderDoc = await transaction.get(orderRef);
    const paymentDoc = await transaction.get(paymentRef);

    if (!orderDoc.exists) {
      return {
        action: 'ORDER_NOT_FOUND' as const,
        paymentStatus: PAYMENT_STATUS.PENDING,
        orderStatus: ORDER_STATUS.PENDING_PAYMENT,
        expectedTotalUGX: 0,
      };
    }

    const orderData = orderDoc.data()!;
    const currentPaymentStatus = String(orderData.paymentStatus || PAYMENT_STATUS.PENDING);
    const currentOrderStatus = String(orderData.status || ORDER_STATUS.PENDING_PAYMENT);
    const storedTrackingId = orderData.pesapalOrderTrackingId;
    const expectedTotalUGX = Number(orderData.totalUGX);
    const existingPaymentData = paymentDoc.exists ? paymentDoc.data()! : {};
    buyerIdForNotify = typeof orderData.buyerId === 'string' ? orderData.buyerId : undefined;
    totalUGXForNotify = expectedTotalUGX;

    // Terminal state: REFUNDED cannot change
    if (currentPaymentStatus === PAYMENT_STATUS.REFUNDED || currentOrderStatus === ORDER_STATUS.REFUNDED) {
      return {
        action: 'NOOP_TERMINAL' as const,
        paymentStatus: currentPaymentStatus,
        orderStatus: currentOrderStatus,
        expectedTotalUGX,
      };
    }

    // Verify tracking id actually belongs to this order
    if (storedTrackingId && storedTrackingId !== orderTrackingId) {
      return {
        action: 'MISMATCH' as const,
        paymentStatus: PAYMENT_STATUS.MISMATCH,
        orderStatus: currentOrderStatus,
        expectedTotalUGX,
        mismatchReason: `Tracking ID mismatch: expected "${storedTrackingId}", got "${orderTrackingId}"`,
      };
    }

    // Strict 3-point integrity check: merchantReference, currency === 'UGX', integer amount === order.totalUGX
    const merchantMatches = statusResult.merchantReference === orderId;
    const currencyUpper = String(statusResult.currency || '').toUpperCase();
    const currencyMatches = currencyUpper === 'UGX';
    const resultAmountNum = Number(statusResult.amount);
    const amountMatches =
      Number.isInteger(resultAmountNum) &&
      Number.isInteger(expectedTotalUGX) &&
      resultAmountNum === expectedTotalUGX;

    if (!merchantMatches || !currencyMatches || !amountMatches) {
      const reasons: string[] = [];
      if (!merchantMatches) {
        reasons.push(`merchantReference mismatch (expected ${orderId}, got ${String(statusResult.merchantReference)})`);
      }
      if (!currencyMatches) {
        reasons.push(`currency mismatch (expected UGX, got ${String(statusResult.currency)})`);
      }
      if (!amountMatches) {
        reasons.push(`amount mismatch (expected ${expectedTotalUGX}, got ${String(statusResult.amount)})`);
      }
      const mismatchReason = reasons.join('; ');
      const nowIso = new Date().toISOString();

      // Do not mark paid; protect already-paid orders from being overwritten backwards
      const safeOrderPaymentStatus =
        currentPaymentStatus === PAYMENT_STATUS.PAID ? PAYMENT_STATUS.PAID : PAYMENT_STATUS.MISMATCH;

      if (currentPaymentStatus !== PAYMENT_STATUS.PAID) {
        transaction.update(orderRef, {
          paymentStatus: PAYMENT_STATUS.MISMATCH,
          paymentVerificationError: mismatchReason,
          updatedAt: nowIso,
        });
      }

      transaction.set(
        paymentRef,
        {
          id: existingPaymentData.id || `pay_${orderId}`,
          orderId,
          buyerId: orderData.buyerId || null,
          orderTrackingId,
          status: safeOrderPaymentStatus === PAYMENT_STATUS.PAID ? PAYMENT_STATUS.PAID : PAYMENT_STATUS.MISMATCH,
          mismatchDetected: true,
          mismatchDetails: {
            expectedOrderId: orderId,
            actualMerchantReference: statusResult.merchantReference || null,
            expectedCurrency: 'UGX',
            actualCurrency: statusResult.currency || null,
            expectedAmountUGX: expectedTotalUGX,
            actualAmount: statusResult.amount,
            reason: mismatchReason,
          },
          updatedAt: nowIso,
        },
        { merge: true }
      );

      return {
        action: 'MISMATCH' as const,
        paymentStatus: safeOrderPaymentStatus,
        orderStatus: currentOrderStatus,
        expectedTotalUGX,
        mismatchReason,
      };
    }

    // Already PAID guards (idempotent duplicate COMPLETED; block backwards FAILED/PENDING; allow REVERSED)
    if (currentPaymentStatus === PAYMENT_STATUS.PAID) {
      if (isCompleted) {
        return {
          action: 'NOOP_ALREADY_PAID' as const,
          paymentStatus: currentPaymentStatus,
          orderStatus: currentOrderStatus,
          expectedTotalUGX,
        };
      }

      if (isReversed) {
        if (!canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PAID, PAYMENT_STATUS.REFUNDED)) {
          return {
            action: 'NOOP_UNCHANGED' as const,
            paymentStatus: currentPaymentStatus,
            orderStatus: currentOrderStatus,
            expectedTotalUGX,
          };
        }
        const nowIso = new Date().toISOString();
        const nextOrderStatus = canTransition(
          ORDER_STATUS_TRANSITIONS,
          currentOrderStatus as keyof typeof ORDER_STATUS_TRANSITIONS,
          ORDER_STATUS.REFUNDED
        )
          ? ORDER_STATUS.REFUNDED
          : currentOrderStatus;

        transaction.update(orderRef, {
          paymentStatus: PAYMENT_STATUS.REFUNDED,
          status: nextOrderStatus,
          refundedAt: nowIso,
          updatedAt: nowIso,
        });

        transaction.set(
          paymentRef,
          {
            orderId,
            orderTrackingId,
            status: PAYMENT_STATUS.REFUNDED,
            confirmationCode: statusResult.confirmationCode || existingPaymentData.confirmationCode || null,
            paymentMethod: statusResult.paymentMethod || existingPaymentData.paymentMethod || 'PESAPAL',
            amountUGX: expectedTotalUGX,
            currency: 'UGX',
            verifiedViaIpn: true,
            updatedAt: nowIso,
          },
          { merge: true }
        );

        return {
          action: 'UPDATED_REFUNDED' as const,
          paymentStatus: PAYMENT_STATUS.REFUNDED,
          orderStatus: nextOrderStatus,
          expectedTotalUGX,
        };
      }

      // Never move a PAID order backwards on FAILED or PENDING
      return {
        action: 'NOOP_PROTECTED_PAID' as const,
        paymentStatus: currentPaymentStatus,
        orderStatus: currentOrderStatus,
        expectedTotalUGX,
      };
    }

    // Order is not yet PAID (PENDING / PENDING_PAYMENT / FAILED / MISMATCH / REVIEW)
    if (isCompleted) {
      const nextOrderStatus =
        currentOrderStatus === ORDER_STATUS.PENDING || currentOrderStatus === ORDER_STATUS.PENDING_PAYMENT
          ? ORDER_STATUS.PAID
          : currentOrderStatus;
      const nowIso = new Date().toISOString();

      transaction.update(orderRef, {
        paymentStatus: PAYMENT_STATUS.PAID,
        status: nextOrderStatus,
        paymentConfirmationCode: statusResult.confirmationCode || null,
        paymentMethod: statusResult.paymentMethod || 'PESAPAL',
        paidAmountUGX: expectedTotalUGX,
        paidAt: nowIso,
        updatedAt: nowIso,
      });

      transaction.set(
        paymentRef,
        {
          id: existingPaymentData.id || `pay_${orderId}`,
          orderId,
          buyerId: orderData.buyerId || null,
          orderTrackingId,
          status: PAYMENT_STATUS.PAID,
          confirmationCode: statusResult.confirmationCode || null,
          paymentMethod: statusResult.paymentMethod || 'PESAPAL',
          amountUGX: expectedTotalUGX,
          currency: 'UGX',
          verifiedViaIpn: true,
          paidAt: nowIso,
          updatedAt: nowIso,
        },
        { merge: true }
      );

      return {
        action: 'UPDATED_PAID' as const,
        paymentStatus: PAYMENT_STATUS.PAID,
        orderStatus: nextOrderStatus,
        expectedTotalUGX,
      };
    }

    if (isFailed && currentPaymentStatus !== PAYMENT_STATUS.FAILED) {
      const nowIso = new Date().toISOString();
      transaction.update(orderRef, {
        paymentStatus: PAYMENT_STATUS.FAILED,
        updatedAt: nowIso,
      });

      transaction.set(
        paymentRef,
        {
          id: existingPaymentData.id || `pay_${orderId}`,
          orderId,
          buyerId: orderData.buyerId || null,
          orderTrackingId,
          status: PAYMENT_STATUS.FAILED,
          paymentMethod: statusResult.paymentMethod || 'PESAPAL',
          amountUGX: expectedTotalUGX,
          currency: 'UGX',
          updatedAt: nowIso,
        },
        { merge: true }
      );

      return {
        action: 'UPDATED_FAILED' as const,
        paymentStatus: PAYMENT_STATUS.FAILED,
        orderStatus: currentOrderStatus,
        expectedTotalUGX,
      };
    }

    if (isReversed) {
      const nowIso = new Date().toISOString();
      transaction.update(orderRef, {
        paymentStatus: PAYMENT_STATUS.REFUNDED,
        status: ORDER_STATUS.REFUNDED,
        refundedAt: nowIso,
        updatedAt: nowIso,
      });

      transaction.set(
        paymentRef,
        {
          id: existingPaymentData.id || `pay_${orderId}`,
          orderId,
          buyerId: orderData.buyerId || null,
          orderTrackingId,
          status: PAYMENT_STATUS.REFUNDED,
          confirmationCode: statusResult.confirmationCode || null,
          paymentMethod: statusResult.paymentMethod || 'PESAPAL',
          amountUGX: expectedTotalUGX,
          currency: 'UGX',
          verifiedViaIpn: true,
          updatedAt: nowIso,
        },
        { merge: true }
      );

      return {
        action: 'UPDATED_REFUNDED' as const,
        paymentStatus: PAYMENT_STATUS.REFUNDED,
        orderStatus: ORDER_STATUS.REFUNDED,
        expectedTotalUGX,
      };
    }

    return {
      action: 'NOOP_UNCHANGED' as const,
      paymentStatus: currentPaymentStatus,
      orderStatus: currentOrderStatus,
      expectedTotalUGX,
    };
  });

  // Side effects run outside the Firestore transaction so transaction retries cannot duplicate them
  if (txOutcome.action === 'MISMATCH') {
    logger.warn('[Pesapal Reconciliation] Verification mismatch detected', {
      orderId,
      orderTrackingId,
      mismatchReason: txOutcome.mismatchReason,
    });

    await notificationProvider.sendInApp({
      userId: 'ADMIN_ALERT',
      title: `Payment Verification Mismatch — Order #${orderId}`,
      body: `Verification failed for tracking ${orderTrackingId}: ${txOutcome.mismatchReason}. Payment placed in MISMATCH review state.`,
      type: 'PAYMENT',
      metadata: {
        orderId,
        orderTrackingId,
        expectedAmountUGX: txOutcome.expectedTotalUGX,
        actualAmount: statusResult.amount,
        actualCurrency: statusResult.currency,
        actualMerchantReference: statusResult.merchantReference,
      },
    });

    await logAuditEvent({
      actorUid: sourceActorUid,
      actorRole: 'SYSTEM',
      action: 'PAYMENT_VERIFICATION_MISMATCH',
      targetId: orderId,
      targetType: 'ORDER',
      after: {
        paymentStatus: PAYMENT_STATUS.MISMATCH,
        trackingId: orderTrackingId,
        mismatchReason: txOutcome.mismatchReason,
        expectedTotalUGX: txOutcome.expectedTotalUGX,
        reportedAmount: statusResult.amount,
        reportedCurrency: statusResult.currency,
        reportedMerchantReference: statusResult.merchantReference,
      },
    });
  } else if (txOutcome.action === 'UPDATED_PAID') {
    if (buyerIdForNotify) {
      const template = NotificationTemplates.paymentConfirmed(orderId, totalUGXForNotify);
      await notificationProvider.sendInApp({
        userId: buyerIdForNotify,
        title: template.title,
        body: template.body,
        type: 'PAYMENT',
      });
    }

    await logAuditEvent({
      actorUid: sourceActorUid,
      actorRole: 'SYSTEM',
      action: 'PAYMENT_STATUS_UPDATED',
      targetId: orderId,
      targetType: 'ORDER',
      after: {
        paymentStatus: txOutcome.paymentStatus,
        orderStatus: txOutcome.orderStatus,
        trackingId: orderTrackingId,
      },
    });
  } else if (txOutcome.action === 'UPDATED_FAILED' || txOutcome.action === 'UPDATED_REFUNDED') {
    await logAuditEvent({
      actorUid: sourceActorUid,
      actorRole: 'SYSTEM',
      action: 'PAYMENT_STATUS_UPDATED',
      targetId: orderId,
      targetType: 'ORDER',
      after: {
        paymentStatus: txOutcome.paymentStatus,
        orderStatus: txOutcome.orderStatus,
        trackingId: orderTrackingId,
      },
    });
  }

  return {
    action: txOutcome.action,
    orderId,
    paymentStatus: txOutcome.paymentStatus,
    orderStatus: txOutcome.orderStatus,
    statusResult,
    mismatchReason: 'mismatchReason' in txOutcome ? txOutcome.mismatchReason : undefined,
  };
}

/**
 * Handles Pesapal IPN (Instant Payment Notification).
 * STRICT SECURITY RULES:
 * 1. Ignores OrderMerchantReference in the request completely. Resolves order ONLY by
 *    looking up orderTrackingId in Firestore.
 * 2. Re-queries Pesapal GetTransactionStatus and enforces exact merchantReference, currency (UGX),
 *    and integer totalUGX equality inside an atomic Firestore transaction.
 * 3. Idempotent: duplicate callbacks make zero changes after initial transition.
 */
export async function handlePaymentIpn(req: Request, res: Response, next: NextFunction) {
  try {
    const trackingId =
      req.query.OrderTrackingId ||
      req.query.orderTrackingId ||
      req.body?.OrderTrackingId ||
      req.body?.orderTrackingId;

    if (!trackingId) {
      logger.warn('[Pesapal IPN] Missing OrderTrackingId in callback query/body');
      return res.status(400).json({ error: 'OrderTrackingId is required' });
    }

    const orderTrackingId = String(trackingId).trim();
    logger.info(`[Pesapal IPN] Received notification for tracking ID: ${orderTrackingId}`);

    // Resolve order ONLY from Firestore using orderTrackingId
    const orderId = await resolveOrderIdByTrackingId(orderTrackingId);
    if (!orderId) {
      logger.warn('[Pesapal IPN] Unknown tracking ID; ignoring callback without changes', {
        orderTrackingId,
      });
      return res.status(200).json({ status: 'ACKNOWLEDGED', orderTrackingId });
    }

    const result = await reconcilePesapalTransaction(orderId, orderTrackingId, 'PESAPAL_IPN');

    if (result.action === 'ORDER_NOT_FOUND') {
      logger.warn(`[Pesapal IPN] Indexed order #${orderId} missing in orders collection`);
      return res.status(200).json({ status: 'ACKNOWLEDGED', orderTrackingId });
    }

    if (result.action === 'MISMATCH') {
      return res.status(200).json({
        orderNotificationType: 'IPNCHANGE',
        orderTrackingId,
        orderMerchantReference: orderId,
        verificationStatus: 'MISMATCH',
        status: 200,
      });
    }

    // Pesapal standard response format
    return res.status(200).json({
      orderNotificationType: 'IPNCHANGE',
      orderTrackingId,
      orderMerchantReference: orderId,
      paymentStatus: result.paymentStatus,
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Polls the current live status of an order payment and runs the exact same
 * tamper-proof verification checks as the IPN handler.
 */
export async function handlePaymentStatusPoll(req: Request, res: Response, next: NextFunction) {
  try {
    const orderId = String(req.params.orderId);
    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();

    if (!orderDoc.exists) {
      return next(AppError.notFound('Order not found'));
    }

    const orderData = orderDoc.data()!;
    const trackingId = orderData.pesapalOrderTrackingId;

    if (!trackingId) {
      return res.status(200).json({
        success: true,
        orderId,
        paymentStatus: orderData.paymentStatus || PAYMENT_STATUS.PENDING,
        orderStatus: orderData.status,
      });
    }

    const result = await reconcilePesapalTransaction(orderId, String(trackingId), 'PAYMENT_POLL');

    if (result.action === 'MISMATCH') {
      return res.status(409).json({
        success: false,
        orderId,
        paymentStatus: PAYMENT_STATUS.MISMATCH,
        orderStatus: result.orderStatus,
        error: {
          code: 'PAYMENT_VERIFICATION_MISMATCH',
          message: 'Payment verification mismatch detected; flagged for admin review.',
        },
      });
    }

    return res.status(200).json({
      success: true,
      orderId,
      paymentStatus: result.paymentStatus,
      orderStatus: result.orderStatus,
      livePesapalStatus: {
        statusCode: result.statusResult.statusCode,
        statusDescription: result.statusResult.paymentStatusDescription,
        confirmationCode: result.statusResult.confirmationCode,
        amount: result.statusResult.amount,
        currency: result.statusResult.currency,
      },
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Initiates a refund request via Pesapal.
 * Security checks:
 * 1. Caller must be the purchasing buyer OR an admin/super-admin.
 * 2. Order must be PAID and not previously refunded (idempotent single refund lock).
 * 3. Currency must be UGX and requested refund amount must be an integer <= paid amount.
 */
export async function handleRefund(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    const orderId = String(req.params.orderId);
    const remarks = String(req.body?.remarks || 'Customer refund').slice(0, 500);

    const orderRef = dbAdmin.collection('orders').doc(orderId);
    const paymentRef = dbAdmin.collection('payments').doc(`pay_${orderId}`);

    // Step 1: Atomic pre-check and refund lock acquisition
    const lockResult = await dbAdmin.runTransaction(async (transaction) => {
      const orderDoc = await transaction.get(orderRef);
      if (!orderDoc.exists) {
        throw AppError.notFound('Order not found');
      }

      const orderData = orderDoc.data()!;
      const paymentDoc = await transaction.get(paymentRef);
      const paymentData = paymentDoc.exists ? paymentDoc.data()! : {};

      const isOwner = orderData.buyerId === req.user!.uid;
      const isAdmin = req.user!.role === 'admin' || req.user!.role === 'super-admin';
      if (!isOwner && !isAdmin) {
        throw AppError.forbidden('You can only request a refund for your own orders');
      }

      if (
        orderData.paymentStatus === PAYMENT_STATUS.REFUNDED ||
        orderData.paymentStatus === PAYMENT_STATUS.REFUND_PENDING ||
        orderData.status === ORDER_STATUS.REFUNDED ||
        Boolean(orderData.refundedAt)
      ) {
        throw AppError.conflict('Order has already been refunded or a refund is in progress', 'ALREADY_EXISTS');
      }

      if (
        orderData.paymentStatus !== PAYMENT_STATUS.PAID &&
        orderData.paymentStatus !== PAYMENT_STATUS.SUCCESSFUL
      ) {
        throw AppError.badRequest('Only paid orders can be refunded', 'FAILED_PRECONDITION');
      }

      const currency = String(paymentData.currency || orderData.currency || 'UGX').toUpperCase();
      if (currency !== 'UGX') {
        throw AppError.badRequest('Unsupported currency for refund');
      }

      const paidAmountUGX = Number(paymentData.amountUGX || orderData.paidAmountUGX || orderData.totalUGX || 0);
      const requestedAmountRaw =
        req.body?.amountUGX !== undefined ? Number(req.body.amountUGX) : paidAmountUGX;

      if (
        !Number.isInteger(requestedAmountRaw) ||
        requestedAmountRaw <= 0 ||
        !Number.isInteger(paidAmountUGX) ||
        requestedAmountRaw > paidAmountUGX
      ) {
        throw AppError.badRequest(
          `Invalid refund amount: must be an integer between 1 and UGX ${paidAmountUGX}`,
          'INVALID_ARGUMENT'
        );
      }

      const confirmationCode = paymentData.confirmationCode || orderData.paymentConfirmationCode;
      if (!confirmationCode) {
        throw AppError.badRequest(
          'Cannot process automated refund: no Pesapal confirmation code found for order'
        );
      }

      const nowIso = new Date().toISOString();
      transaction.update(orderRef, {
        paymentStatus: PAYMENT_STATUS.REFUND_PENDING,
        updatedAt: nowIso,
      });

      return {
        confirmationCode: String(confirmationCode),
        refundAmountUGX: requestedAmountRaw,
        paidAmountUGX,
        previousStatus: String(orderData.status),
      };
    });

    // Step 2: Call Pesapal official RefundRequest API
    let refundResult;
    try {
      refundResult = await pesapalClient.requestRefund({
        confirmationCode: lockResult.confirmationCode,
        amountUGX: lockResult.refundAmountUGX,
        username: req.user.email || req.user.uid,
        remarks,
      });
    } catch (pesapalErr) {
      // Release lock back to PAID if Pesapal gateway call failed
      await orderRef.update({
        paymentStatus: PAYMENT_STATUS.PAID,
        updatedAt: new Date().toISOString(),
      });
      throw pesapalErr;
    }

    // Step 3: Commit final REFUNDED state atomically
    const nowIso = new Date().toISOString();
    await dbAdmin.runTransaction(async (transaction) => {
      transaction.update(orderRef, {
        status: ORDER_STATUS.REFUNDED,
        paymentStatus: PAYMENT_STATUS.REFUNDED,
        refundedAmountUGX: lockResult.refundAmountUGX,
        refundRemarks: remarks,
        refundedAt: nowIso,
        updatedAt: nowIso,
      });

      transaction.set(
        paymentRef,
        {
          orderId,
          status: PAYMENT_STATUS.REFUNDED,
          refundedAmountUGX: lockResult.refundAmountUGX,
          refundRemarks: remarks,
          refundedAt: nowIso,
          updatedAt: nowIso,
        },
        { merge: true }
      );
    });

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: 'ORDER_REFUND_REQUESTED',
      targetId: orderId,
      targetType: 'ORDER',
      metadata: {
        remarks,
        confirmationCode: lockResult.confirmationCode,
        refundAmountUGX: lockResult.refundAmountUGX,
        refundResult,
      },
    });

    return res.status(200).json({
      success: true,
      orderId,
      refundAmountUGX: lockResult.refundAmountUGX,
      paymentStatus: PAYMENT_STATUS.REFUNDED,
      refundResult,
    });
  } catch (err) {
    return next(err);
  }
}
