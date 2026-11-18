import { dbAdmin } from './firebaseAdmin';
import { logger } from './logger';

export interface NotificationPayload {
  userId: string;
  title: string;
  body: string;
  type?: 'ORDER' | 'PAYMENT' | 'DELIVERY' | 'RETURN' | 'PAYOUT' | 'SYSTEM';
  link?: string;
  metadata?: Record<string, any>;
}

export interface NotificationProvider {
  name: string;
  sendSms(to: string, message: string): Promise<{ success: boolean; messageId?: string; error?: string }>;
  sendInApp(notification: NotificationPayload): Promise<{ success: boolean; id: string }>;
}

export class ConsoleNotificationProvider implements NotificationProvider {
  public readonly name = 'CONSOLE_EMULATOR';

  async sendSms(to: string, message: string): Promise<{ success: boolean; messageId?: string }> {
    const messageId = `sms_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    logger.info(`[SMS Driver (${this.name})] To: ${to} | Msg: ${message}`, { messageId });
    return { success: true, messageId };
  }

  async sendInApp(notification: NotificationPayload): Promise<{ success: boolean; id: string }> {
    const docRef = dbAdmin.collection('notifications').doc();
    const now = new Date().toISOString();

    const record = {
      id: docRef.id,
      userId: notification.userId,
      title: notification.title,
      body: notification.body,
      type: notification.type || 'SYSTEM',
      link: notification.link || null,
      read: false,
      metadata: notification.metadata || {},
      createdAt: now,
      updatedAt: now,
    };

    await docRef.set(record);
    logger.info(`[InApp Notification] To: ${notification.userId} | Title: ${notification.title}`);
    return { success: true, id: docRef.id };
  }
}

export const notificationProvider: NotificationProvider = new ConsoleNotificationProvider();

// ---------------------------------------------------------------------------
// NOTIFICATION TEMPLATES
// ---------------------------------------------------------------------------
export const NotificationTemplates = {
  orderPlaced(orderId: string, totalUGX: number) {
    return {
      title: 'Order Placed Successfully',
      body: `Your SwiftCart order #${orderId} of UGX ${totalUGX.toLocaleString()} has been received. Please complete payment via Pesapal.`,
      sms: `SwiftCart: Order #${orderId} received (UGX ${totalUGX.toLocaleString()}). Complete payment through Pesapal to begin fulfillment.`,
    };
  },

  paymentConfirmed(orderId: string, amountUGX: number) {
    return {
      title: 'Payment Confirmed',
      body: `Payment of UGX ${amountUGX.toLocaleString()} for order #${orderId} confirmed via Pesapal. The seller has been notified to prepare your items.`,
      sms: `SwiftCart: Payment of UGX ${amountUGX.toLocaleString()} for order #${orderId} confirmed via Pesapal. Fulfillment in progress.`,
    };
  },

  dispatchedWithCode(orderId: string, deliveryCode: string, courierName?: string) {
    return {
      title: 'Order Dispatched — Delivery Code Ready',
      body: `Your order #${orderId} is on the way${courierName ? ` with ${courierName}` : ''}! Your 6-digit delivery confirmation code is ${deliveryCode}. Read this code to the rider ONLY when your package is handed over.`,
      sms: `SwiftCart: Order #${orderId} is out for delivery! Your 6-digit handover code is ${deliveryCode}. Share with the rider ONLY after inspecting package.`,
    };
  },

  delivered(orderId: string) {
    return {
      title: 'Order Delivered',
      body: `Order #${orderId} has been confirmed delivered. Your 3-day inspection window is now active. If anything is wrong, open a return before the window ends.`,
      sms: `SwiftCart: Delivery confirmed for #${orderId}. Your 3-day return/dispute window is now active. Thank you for shopping with SwiftCart!`,
    };
  },

  returnOpened(orderId: string, reason: string) {
    return {
      title: 'Return Request Opened',
      body: `A return request has been submitted for order #${orderId} (${reason}). Payment hold is frozen pending resolution.`,
      sms: `SwiftCart: Return request opened for order #${orderId}. Payment hold is frozen pending inspection and mediation.`,
    };
  },

  payoutApproved(payoutId: string, netAmountUGX: number, sellerName: string) {
    return {
      title: 'Payout Approved',
      body: `Payout #${payoutId} for UGX ${netAmountUGX.toLocaleString()} to ${sellerName} has been approved for disbursement.`,
      sms: `SwiftCart: Payout #${payoutId} of UGX ${netAmountUGX.toLocaleString()} approved. Processing to your registered mobile money account.`,
    };
  },
};
