import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { logAuditEvent } from './audit';
import { logger } from './logger';
import { notificationProvider, NotificationTemplates } from './notifications';
import { PAYOUT_STATUS, PAYMENT_HOLD_STATUS } from '../../shared/statuses';

export interface PayoutDisbursementParams {
  payoutId: string;
  sellerId: string;
  sellerName: string;
  amountUGX: number;
  beneficiaryPhone: string;
  beneficiaryName: string;
  payoutMethod: 'MOBILE_MONEY' | 'BANK_TRANSFER';
}

export interface PayoutDisbursementResult {
  success: boolean;
  transactionId?: string;
  provider: string;
  error?: string;
}

export interface PayoutProvider {
  readonly name: string;
  disbursePayout(params: PayoutDisbursementParams): Promise<PayoutDisbursementResult>;
}

export class ManualPayoutProvider implements PayoutProvider {
  public readonly name = 'MANUAL_DISBURSEMENT';

  async disbursePayout(params: PayoutDisbursementParams): Promise<PayoutDisbursementResult> {
    const transactionId = `MANUAL_TX_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    logger.info(`[Manual Payout] Queued for manual bank/telecom transfer: ${params.payoutId}`, {
      amountUGX: params.amountUGX,
      sellerId: params.sellerId,
      beneficiaryPhone: params.beneficiaryPhone,
      transactionId,
    });
    return {
      success: true,
      transactionId,
      provider: this.name,
    };
  }
}

export const payoutProvider: PayoutProvider = new ManualPayoutProvider();

/**
 * Retrieves platform commission rate (defaults to 10% if not configured)
 */
export async function getCommissionRatePercent(category?: string): Promise<number> {
  try {
    const settingsDoc = await dbAdmin.collection('settings').doc('commission').get();
    if (settingsDoc.exists) {
      const data = settingsDoc.data() || {};
      if (category && data.categoryRates && typeof data.categoryRates[category] === 'number') {
        return data.categoryRates[category];
      }
      if (typeof data.defaultRatePercent === 'number') {
        return data.defaultRatePercent;
      }
    }
  } catch (err) {
    logger.warn('[Commission] Failed to read commission settings, using default 10%', { err });
  }
  return 10; // Default 10% marketplace commission
}

/**
 * Scheduled / trigger job: Evaluates payout holds whose return window has ended
 * and generates seller payout records if no disputes/returns exist.
 */
export async function releaseEligiblePayoutHolds(): Promise<{ releasedCount: number }> {
  const now = new Date().toISOString();
  const snapshot = await dbAdmin
    .collection('payoutHolds')
    .where('status', '==', PAYMENT_HOLD_STATUS.HELD)
    .where('holdReleaseDueAt', '<=', now)
    .get();

  let releasedCount = 0;

  for (const doc of snapshot.docs) {
    const hold = doc.data();
    const orderId = hold.orderId;
    const sellerId = hold.sellerId;

    // Check if there is an active return or dispute on this order
    const returnsSnap = await dbAdmin
      .collection('returns')
      .where('orderId', '==', orderId)
      .where('status', 'in', ['REQUESTED', 'APPROVED', 'IN_TRANSIT'])
      .get();

    const disputesSnap = await dbAdmin
      .collection('disputes')
      .where('orderId', '==', orderId)
      .where('status', 'in', ['OPENED', 'UNDER_REVIEW'])
      .get();

    if (!returnsSnap.empty || !disputesSnap.empty) {
      // Freeze hold if return or dispute exists
      await doc.ref.update({
        status: PAYMENT_HOLD_STATUS.DISPUTED,
        frozenReason: 'ACTIVE_RETURN_OR_DISPUTE',
        updatedAt: now,
      });
      continue;
    }

    // Calculate payout
    const grossAmount = Number(hold.grossAmountUGX || hold.amountUGX || 0);
    const commissionPercent = await getCommissionRatePercent(hold.category);
    const commissionAmount = Math.round((grossAmount * commissionPercent) / 100);
    const netPayoutAmount = grossAmount - commissionAmount;

    const payoutRef = dbAdmin.collection('payouts').doc();
    const payoutRecord = {
      id: payoutRef.id,
      holdId: doc.id,
      orderId,
      sellerId,
      grossAmountUGX: grossAmount,
      commissionPercent,
      commissionAmountUGX: commissionAmount,
      netAmountUGX: netPayoutAmount,
      status: PAYOUT_STATUS.PENDING,
      beneficiaryPhone: hold.beneficiaryPhone || '',
      beneficiaryName: hold.beneficiaryName || '',
      createdAt: now,
      updatedAt: now,
    };

    await payoutRef.set(payoutRecord);
    await doc.ref.update({
      status: PAYMENT_HOLD_STATUS.RELEASED,
      payoutId: payoutRef.id,
      releasedAt: now,
      updatedAt: now,
    });

    await logAuditEvent({
      actorUid: 'SYSTEM_SCHEDULER',
      actorRole: 'SYSTEM',
      action: 'PAYOUT_HOLD_RELEASED',
      targetId: doc.id,
      targetType: 'PAYOUT_HOLD',
      after: { payoutId: payoutRef.id, netPayoutAmount },
    });

    releasedCount++;
  }

  return { releasedCount };
}

/**
 * Admin approves a pending payout for seller disbursement
 */
export async function approveSellerPayout(
  payoutId: string,
  adminUid: string
): Promise<{ success: boolean; transactionId?: string }> {
  const payoutRef = dbAdmin.collection('payouts').doc(payoutId);
  const payoutDoc = await payoutRef.get();

  if (!payoutDoc.exists) {
    throw AppError.notFound(`Payout ${payoutId} not found`);
  }

  const payout = payoutDoc.data()!;
  if (payout.status !== PAYOUT_STATUS.PENDING) {
    throw AppError.badRequest(`Payout is already in ${payout.status} state`);
  }

  const disbursement = await payoutProvider.disbursePayout({
    payoutId,
    sellerId: payout.sellerId,
    sellerName: payout.beneficiaryName || 'SwiftCart Seller',
    amountUGX: payout.netAmountUGX,
    beneficiaryPhone: payout.beneficiaryPhone || '+256700000000',
    beneficiaryName: payout.beneficiaryName || 'SwiftCart Seller',
    payoutMethod: 'MOBILE_MONEY',
  });

  const now = new Date().toISOString();
  await payoutRef.update({
    status: PAYOUT_STATUS.APPROVED,
    disbursedAt: now,
    disbursementTransactionId: disbursement.transactionId || null,
    approvedBy: adminUid,
    updatedAt: now,
  });

  // Notify seller
  const template = NotificationTemplates.payoutApproved(payoutId, payout.netAmountUGX, payout.beneficiaryName || 'Seller');
  await notificationProvider.sendInApp({
    userId: payout.sellerId,
    title: template.title,
    body: template.body,
    type: 'PAYOUT',
    metadata: { payoutId, netAmountUGX: payout.netAmountUGX },
  });

  await logAuditEvent({
    actorUid: adminUid,
    actorRole: 'ADMIN',
    action: 'PAYOUT_APPROVED',
    targetId: payoutId,
    targetType: 'PAYOUT',
    after: { netAmountUGX: payout.netAmountUGX, transactionId: disbursement.transactionId },
  });

  return { success: true, transactionId: disbursement.transactionId };
}
