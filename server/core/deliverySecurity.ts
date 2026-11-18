import crypto from 'crypto';
import { dbAdmin } from './firebaseAdmin';
import { AppError } from './errors';
import { logAuditEvent } from './audit';
import { DISPATCH_STATUS, ORDER_STATUS } from '../../shared/statuses';
import { DEFAULT_RETURN_WINDOW_DAYS } from '../../shared/constants';

export interface DeliveryOtpSecret {
  codeHash: string;
  salt: string;
  expiresAt: string;
  attemptCount: number;
  maxAttempts: number;
  isUsed: boolean;
  usedAt?: string;
}

export function generateSecure6DigitCode(): string {
  // Generates cryptographically secure 6-digit numeric string (100000 - 999999)
  return crypto.randomInt(100000, 1000000).toString();
}

export function hashDeliveryCode(code: string, salt: string): string {
  return crypto.createHash('sha256').update(`${code}:${salt}`).digest('hex');
}

export function verifyCodeTimingSafe(providedCode: string, salt: string, expectedHash: string): boolean {
  const calculatedHash = hashDeliveryCode(providedCode, salt);
  const bufA = Buffer.from(calculatedHash, 'hex');
  const bufB = Buffer.from(expectedHash, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Creates dispatch delivery security record with ONLY the code hash.
 * Returns the plaintext code ONCE so caller can notify the buyer.
 */
export async function createDeliverySecurity(
  deliveryId: string,
  expiresInHours: number = 72
): Promise<{ plaintextCode: string; expiresAt: string }> {
  const plaintextCode = generateSecure6DigitCode();
  const salt = crypto.randomBytes(16).toString('hex');
  const codeHash = hashDeliveryCode(plaintextCode, salt);
  const expiresAt = new Date(Date.now() + expiresInHours * 3600 * 1000).toISOString();

  const secret: DeliveryOtpSecret = {
    codeHash,
    salt,
    expiresAt,
    attemptCount: 0,
    maxAttempts: 5,
    isUsed: false,
  };

  await dbAdmin
    .collection('deliveries')
    .doc(deliveryId)
    .collection('secure')
    .doc('code_secret')
    .set(secret);

  return { plaintextCode, expiresAt };
}

/**
 * Verifies the 6-digit delivery code entered by the rider.
 * Enforces:
 * 1. Replay prevention (cannot reuse used code)
 * 2. Attempt lockout (locks after 5 failures)
 * 3. Expiration check
 * 4. Timing-safe verification
 */
export async function verifyDeliveryCode(
  deliveryId: string,
  providedCode: string,
  actorUid: string
): Promise<{ success: boolean; remainingAttempts?: number }> {
  const secretRef = dbAdmin
    .collection('deliveries')
    .doc(deliveryId)
    .collection('secure')
    .doc('code_secret');

  const deliveryRef = dbAdmin.collection('deliveries').doc(deliveryId);

  return await dbAdmin.runTransaction(async (transaction) => {
    const secretDoc = await transaction.get(secretRef);
    if (!secretDoc.exists) {
      throw AppError.notFound('Delivery code security record not found');
    }

    const secret = secretDoc.data() as DeliveryOtpSecret;
    const deliveryDoc = await transaction.get(deliveryRef);
    if (!deliveryDoc.exists) {
      throw AppError.notFound('Delivery record not found');
    }
    const delivery = deliveryDoc.data()!;

    // 1. Replay check
    if (secret.isUsed || delivery.status === DISPATCH_STATUS.DELIVERED) {
      throw AppError.badRequest('Delivery has already been confirmed. Code cannot be reused.', 'ALREADY_EXISTS');
    }

    // 2. Lockout check
    if (secret.attemptCount >= secret.maxAttempts || delivery.status === DISPATCH_STATUS.LOCKED) {
      throw AppError.badRequest(
        'Delivery code is locked due to too many failed attempts. Contact admin to unlock or reissue.',
        'OTP_LOCKED'
      );
    }

    // 3. Expiration check
    if (new Date(secret.expiresAt).getTime() < Date.now()) {
      throw AppError.badRequest('Delivery code has expired. Request a code reissue.', 'OTP_EXPIRED');
    }

    // 4. Verification
    const isValid = verifyCodeTimingSafe(providedCode.trim(), secret.salt, secret.codeHash);

    if (!isValid) {
      const newAttemptCount = secret.attemptCount + 1;
      const isNowLocked = newAttemptCount >= secret.maxAttempts;

      transaction.update(secretRef, {
        attemptCount: newAttemptCount,
        updatedAt: new Date().toISOString(),
      });

      if (isNowLocked) {
        transaction.update(deliveryRef, {
          status: DISPATCH_STATUS.LOCKED,
          lockReason: 'EXCEEDED_CODE_ATTEMPTS',
          lockedAt: new Date().toISOString(),
        });

        // Mirror status to orders if orderId linked
        if (delivery.orderId) {
          const orderRef = dbAdmin.collection('orders').doc(delivery.orderId);
          transaction.update(orderRef, {
            dispatchStatus: DISPATCH_STATUS.LOCKED,
            updatedAt: new Date().toISOString(),
          });
        }
      }

      await logAuditEvent({
        actorUid,
        actorRole: 'RIDER',
        action: isNowLocked ? 'DELIVERY_CODE_LOCKED' : 'DELIVERY_CODE_FAILED_ATTEMPT',
        targetId: deliveryId,
        targetType: 'DELIVERY',
        metadata: {
          attemptCount: newAttemptCount,
          maxAttempts: secret.maxAttempts,
          isLocked: isNowLocked,
        },
      });

      if (isNowLocked) {
        throw AppError.badRequest('Delivery code locked after 5 failed attempts.', 'OTP_LOCKED');
      }

      const remainingAttempts = secret.maxAttempts - newAttemptCount;
      throw AppError.badRequest(
        `Invalid 6-digit delivery code. ${remainingAttempts} attempts remaining.`,
        'OTP_INVALID',
        { remainingAttempts }
      );
    }

    // SUCCESS: Mark used, set status to DELIVERED, start return window
    const nowIso = new Date().toISOString();
    const returnWindowDays = DEFAULT_RETURN_WINDOW_DAYS;
    const returnWindowEndsAt = new Date(Date.now() + returnWindowDays * 24 * 3600 * 1000).toISOString();

    transaction.update(secretRef, {
      isUsed: true,
      usedAt: nowIso,
      updatedAt: nowIso,
    });

    transaction.update(deliveryRef, {
      status: DISPATCH_STATUS.DELIVERED,
      deliveredAt: nowIso,
      updatedAt: nowIso,
    });

    if (delivery.orderId) {
      const orderRef = dbAdmin.collection('orders').doc(delivery.orderId);
      transaction.update(orderRef, {
        status: ORDER_STATUS.DELIVERED,
        deliveredAt: nowIso,
        returnWindowDays,
        returnWindowEndsAt,
        updatedAt: nowIso,
      });

      // Update payout hold due date: returnWindowEndsAt
      if (delivery.sellerId) {
        const holdRef = dbAdmin.collection('payoutHolds').doc(`hold_${delivery.orderId}`);
        transaction.set(
          holdRef,
          {
            orderId: delivery.orderId,
            sellerId: delivery.sellerId,
            status: 'HELD',
            holdReleaseDueAt: returnWindowEndsAt,
            deliveredAt: nowIso,
            updatedAt: nowIso,
          },
          { merge: true }
        );
      }
    }

    await logAuditEvent({
      actorUid,
      actorRole: 'RIDER',
      action: 'DELIVERY_CONFIRMED_VIA_CODE',
      targetId: deliveryId,
      targetType: 'DELIVERY',
      metadata: { orderId: delivery.orderId, returnWindowEndsAt },
    });

    return { success: true };
  });
}

/**
 * Admin action: unlock or reissue delivery code
 */
export async function adminReissueDeliveryCode(
  deliveryId: string,
  adminUid: string,
  reason: string
): Promise<{ plaintextCode: string; expiresAt: string }> {
  const deliveryRef = dbAdmin.collection('deliveries').doc(deliveryId);
  const deliveryDoc = await deliveryRef.get();
  if (!deliveryDoc.exists) {
    throw AppError.notFound('Delivery not found');
  }

  const { plaintextCode, expiresAt } = await createDeliverySecurity(deliveryId);

  await deliveryRef.update({
    status: DISPATCH_STATUS.OUT_FOR_DELIVERY,
    lockedAt: null,
    lockReason: null,
    updatedAt: new Date().toISOString(),
  });

  await logAuditEvent({
    actorUid: adminUid,
    actorRole: 'ADMIN',
    action: 'DELIVERY_CODE_REISSUED',
    targetId: deliveryId,
    targetType: 'DELIVERY',
    metadata: { reason, expiresAt },
  });

  return { plaintextCode, expiresAt };
}
