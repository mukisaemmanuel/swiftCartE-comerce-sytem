import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { pesapalClient } from './pesapal';
import { logAuditEvent } from './audit';
import { logger } from './logger';
import { notificationProvider, NotificationTemplates } from './notifications';
import { ORDER_STATUS, PAYMENT_STATUS } from '../../shared/statuses';

export const ipnQuerySchema = z.object({
  OrderTrackingId: z.string().optional(),
  orderTrackingId: z.string().optional(),
  OrderMerchantReference: z.string().optional(),
  orderMerchantReference: z.string().optional(),
  OrderNotificationType: z.string().optional(),
});

/**
 * Handles Pesapal IPN (Instant Payment Notification).
 * STRICT RULES:
 * 1. Idempotent: duplicate callbacks for the same tracking ID do not re-process.
 * 2. Never trust the IPN query parameters alone: ALWAYS re-query Pesapal's
 *    authoritative GetTransactionStatus endpoint before updating payment or order state.
 */
export async function handlePaymentIpn(req: Request, res: Response, next: NextFunction) {
  try {
    const trackingId =
      req.query.OrderTrackingId ||
      req.query.orderTrackingId ||
      req.body?.OrderTrackingId ||
      req.body?.orderTrackingId;

    const merchantRef =
      req.query.OrderMerchantReference ||
      req.query.orderMerchantReference ||
      req.body?.OrderMerchantReference ||
      req.body?.orderMerchantReference;

    if (!trackingId) {
      logger.warn('[Pesapal IPN] Missing OrderTrackingId in callback query/body');
      return res.status(400).json({ error: 'OrderTrackingId is required' });
    }

    const orderTrackingId = String(trackingId);
    logger.info(`[Pesapal IPN] Received notification for tracking ID: ${orderTrackingId}`);

    // Call Pesapal Authoritative Transaction Status Endpoint
    const statusResult = await pesapalClient.getTransactionStatus(orderTrackingId);
    const orderId = String(merchantRef || statusResult.merchantReference || '');

    if (!orderId) {
      logger.warn('[Pesapal IPN] Cannot resolve orderId for tracking ID', { orderTrackingId });
      return res.status(200).json({ status: 'ACKNOWLEDGED' });
    }

    const orderRef = dbAdmin.collection('orders').doc(orderId);
    const paymentRef = dbAdmin.collection('payments').doc(`pay_${orderId}`);

    await dbAdmin.runTransaction(async (transaction) => {
      const orderDoc = await transaction.get(orderRef);
      if (!orderDoc.exists) {
        logger.warn(`[Pesapal IPN] Order #${orderId} not found in Firestore`);
        return;
      }

      const orderData = orderDoc.data()!;
      const currentPaymentStatus = orderData.paymentStatus;

      // Map Pesapal status code: 1 = COMPLETED, 2 = FAILED, 3 = REVERSED
      let targetPaymentStatus: string = PAYMENT_STATUS.PENDING;
      let targetOrderStatus: string = orderData.status;

      if (statusResult.statusCode === 1 || statusResult.paymentStatusDescription === 'COMPLETED') {
        targetPaymentStatus = PAYMENT_STATUS.PAID;
        if (orderData.status === ORDER_STATUS.PENDING || orderData.status === ORDER_STATUS.PENDING_PAYMENT) {
          targetOrderStatus = ORDER_STATUS.PAID;
        }
      } else if (statusResult.statusCode === 2 || statusResult.paymentStatusDescription === 'FAILED') {
        targetPaymentStatus = PAYMENT_STATUS.FAILED;
      } else if (statusResult.statusCode === 3 || statusResult.paymentStatusDescription === 'REVERSED') {
        targetPaymentStatus = PAYMENT_STATUS.REFUNDED;
        targetOrderStatus = ORDER_STATUS.REFUNDED;
      }

      // Idempotency: If status has already been recorded, exit early
      if (currentPaymentStatus === targetPaymentStatus) {
        logger.info(`[Pesapal IPN] Order #${orderId} already in status ${targetPaymentStatus}, skipping update.`);
        return;
      }

      const nowIso = new Date().toISOString();

      transaction.update(orderRef, {
        paymentStatus: targetPaymentStatus,
        status: targetOrderStatus,
        paymentConfirmationCode: statusResult.confirmationCode || null,
        paymentMethod: statusResult.paymentMethod || 'PESAPAL',
        updatedAt: nowIso,
      });

      transaction.set(
        paymentRef,
        {
          orderId,
          orderTrackingId,
          status: targetPaymentStatus,
          confirmationCode: statusResult.confirmationCode || null,
          paymentMethod: statusResult.paymentMethod || 'PESAPAL',
          amountUGX: statusResult.amount,
          verifiedViaIpn: true,
          updatedAt: nowIso,
        },
        { merge: true }
      );

      // If PAID, notify buyer
      if (targetPaymentStatus === PAYMENT_STATUS.PAID && orderData.buyerId) {
        const template = NotificationTemplates.paymentConfirmed(orderId, orderData.totalUGX || statusResult.amount);
        await notificationProvider.sendInApp({
          userId: orderData.buyerId,
          title: template.title,
          body: template.body,
          type: 'PAYMENT',
        });
      }

      await logAuditEvent({
        actorUid: 'PESAPAL_IPN',
        actorRole: 'SYSTEM',
        action: 'PAYMENT_STATUS_UPDATED',
        targetId: orderId,
        targetType: 'ORDER',
        after: {
          paymentStatus: targetPaymentStatus,
          orderStatus: targetOrderStatus,
          trackingId: orderTrackingId,
        },
      });
    });

    // Pesapal standard response format
    return res.status(200).json({
      orderNotificationType: 'IPNCHANGE',
      orderTrackingId,
      orderMerchantReference: orderId,
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Polls the current live status of an order payment.
 */
export async function handlePaymentStatusPoll(req: Request, res: Response, next: NextFunction) {
  try {
    const { orderId } = req.params;
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

    // Query authoritative status from Pesapal
    const status = await pesapalClient.getTransactionStatus(trackingId);

    return res.status(200).json({
      success: true,
      orderId,
      paymentStatus: orderData.paymentStatus,
      orderStatus: orderData.status,
      livePesapalStatus: {
        statusCode: status.statusCode,
        statusDescription: status.paymentStatusDescription,
        confirmationCode: status.confirmationCode,
        amount: status.amount,
      },
    });
  } catch (err) {
    return next(err);
  }
}

/**
 * Initiates an official refund request via Pesapal
 */
export async function handleRefund(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    const { orderId } = req.params;
    const { remarks = 'Customer refund' } = req.body;

    const orderDoc = await dbAdmin.collection('orders').doc(orderId).get();
    if (!orderDoc.exists) {
      return next(AppError.notFound('Order not found'));
    }

    const orderData = orderDoc.data()!;
    const paymentDoc = await dbAdmin.collection('payments').doc(`pay_${orderId}`).get();
    const paymentData = paymentDoc.exists ? paymentDoc.data()! : {};

    const confirmationCode = paymentData.confirmationCode || orderData.paymentConfirmationCode;
    if (!confirmationCode) {
      return next(AppError.badRequest('Cannot process automated refund: no Pesapal confirmation code found for order'));
    }

    const refundResult = await pesapalClient.requestRefund({
      confirmationCode,
      amountUGX: orderData.totalUGX,
      username: req.user.email || 'admin@swiftcart.ug',
      remarks,
    });

    const nowIso = new Date().toISOString();
    await orderDoc.ref.update({
      status: ORDER_STATUS.REFUNDED,
      paymentStatus: PAYMENT_STATUS.REFUNDED,
      refundRemarks: remarks,
      refundedAt: nowIso,
      updatedAt: nowIso,
    });

    await logAuditEvent({
      actorUid: req.user.uid,
      actorRole: req.user.role,
      action: 'ORDER_REFUND_REQUESTED',
      targetId: orderId,
      targetType: 'ORDER',
      metadata: { remarks, confirmationCode, refundResult },
    });

    return res.status(200).json({
      success: true,
      orderId,
      refundResult,
    });
  } catch (err) {
    return next(err);
  }
}

