import { describe, it, expect } from 'vitest';
import {
  generateSecure6DigitCode,
  hashDeliveryCode,
  verifyCodeTimingSafe,
  DeliveryOtpSecret,
} from '../../server/core/deliverySecurity';

describe('Delivery Security & 6-Digit Code Unit Tests', () => {
  it('generates a 6-digit numeric string', () => {
    for (let i = 0; i < 50; i++) {
      const code = generateSecure6DigitCode();
      expect(code).toMatch(/^[0-9]{6}$/);
      expect(code.length).toBe(6);
    }
  });

  it('generates distinct cryptographic hashes with unique salts', () => {
    const code = '123456';
    const salt1 = 'salt111111111111';
    const salt2 = 'salt222222222222';

    const hash1 = hashDeliveryCode(code, salt1);
    const hash2 = hashDeliveryCode(code, salt2);

    expect(hash1).not.toBe(code);
    expect(hash1).not.toBe(hash2);
    expect(hash1.length).toBe(64); // SHA-256 hex length
  });

  it('timing-safe verification correctly validates match and detects mismatch', () => {
    const code = '789123';
    const salt = 'random_hex_salt_32_bytes';
    const expectedHash = hashDeliveryCode(code, salt);

    expect(verifyCodeTimingSafe('789123', salt, expectedHash)).toBe(true);
    expect(verifyCodeTimingSafe('789124', salt, expectedHash)).toBe(false);
    expect(verifyCodeTimingSafe('000000', salt, expectedHash)).toBe(false);
    expect(verifyCodeTimingSafe('78912', salt, expectedHash)).toBe(false);
  });

  describe('Verification Logic Rules', () => {
    function simulateVerify(
      secret: DeliveryOtpSecret,
      deliveryStatus: string,
      providedCode: string
    ): { status: 'SUCCESS' | 'OTP_INVALID' | 'OTP_LOCKED' | 'OTP_EXPIRED' | 'ALREADY_USED'; remainingAttempts?: number } {
      if (secret.isUsed || deliveryStatus === 'DELIVERED') {
        return { status: 'ALREADY_USED' };
      }
      if (secret.attemptCount >= secret.maxAttempts || deliveryStatus === 'LOCKED') {
        return { status: 'OTP_LOCKED' };
      }
      if (new Date(secret.expiresAt).getTime() < Date.now()) {
        return { status: 'OTP_EXPIRED' };
      }

      const isValid = verifyCodeTimingSafe(providedCode, secret.salt, secret.codeHash);
      if (!isValid) {
        secret.attemptCount += 1;
        if (secret.attemptCount >= secret.maxAttempts) {
          return { status: 'OTP_LOCKED' };
        }
        return { status: 'OTP_INVALID', remainingAttempts: secret.maxAttempts - secret.attemptCount };
      }

      secret.isUsed = true;
      return { status: 'SUCCESS' };
    }

    it('locks delivery after 5 wrong attempts', () => {
      const code = '654321';
      const salt = 'mysalt';
      const secret: DeliveryOtpSecret = {
        codeHash: hashDeliveryCode(code, salt),
        salt,
        expiresAt: new Date(Date.now() + 3600000).toISOString(),
        attemptCount: 0,
        maxAttempts: 5,
        isUsed: false,
      };

      // 4 wrong attempts
      for (let i = 1; i <= 4; i++) {
        const res = simulateVerify(secret, 'OUT_FOR_DELIVERY', '000000');
        expect(res.status).toBe('OTP_INVALID');
        expect(res.remainingAttempts).toBe(5 - i);
      }

      // 5th wrong attempt triggers lock
      const res5 = simulateVerify(secret, 'OUT_FOR_DELIVERY', '000000');
      expect(res5.status).toBe('OTP_LOCKED');
      expect(secret.attemptCount).toBe(5);

      // Subsequent attempt even with correct code is locked
      const resLocked = simulateVerify(secret, 'LOCKED', code);
      expect(resLocked.status).toBe('OTP_LOCKED');
    });

    it('rejects expired delivery codes', () => {
      const code = '112233';
      const salt = 'mysalt';
      const expiredSecret: DeliveryOtpSecret = {
        codeHash: hashDeliveryCode(code, salt),
        salt,
        expiresAt: new Date(Date.now() - 1000).toISOString(), // 1s in past
        attemptCount: 0,
        maxAttempts: 5,
        isUsed: false,
      };

      const res = simulateVerify(expiredSecret, 'OUT_FOR_DELIVERY', code);
      expect(res.status).toBe('OTP_EXPIRED');
    });

    it('rejects replay of already verified code', () => {
      const code = '998877';
      const salt = 'mysalt';
      const secret: DeliveryOtpSecret = {
        codeHash: hashDeliveryCode(code, salt),
        salt,
        expiresAt: new Date(Date.now() + 3600000).toISOString(),
        attemptCount: 0,
        maxAttempts: 5,
        isUsed: false,
      };

      const firstVerify = simulateVerify(secret, 'OUT_FOR_DELIVERY', code);
      expect(firstVerify.status).toBe('SUCCESS');
      expect(secret.isUsed).toBe(true);

      const replay = simulateVerify(secret, 'DELIVERED', code);
      expect(replay.status).toBe('ALREADY_USED');
    });
  });
});
