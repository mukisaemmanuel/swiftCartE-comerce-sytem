import { describe, it, expect } from 'vitest';
import {
  ORDER_STATUS_TRANSITIONS,
  PAYMENT_STATUS_TRANSITIONS,
  PAYMENT_HOLD_STATUS_TRANSITIONS,
  DISPATCH_STATUS_TRANSITIONS,
  RETURN_STATUS_TRANSITIONS,
  SELLER_STATUS_TRANSITIONS,
  PRODUCT_STATUS_TRANSITIONS,
  PAYOUT_STATUS_TRANSITIONS,
  canTransition,
  assertTransition,
} from '../../server/core/stateMachines';
import {
  ORDER_STATUS,
  PAYMENT_STATUS,
  PAYMENT_HOLD_STATUS,
  DISPATCH_STATUS,
  RETURN_STATUS,
  SELLER_STATUS,
  PRODUCT_STATUS,
  PAYOUT_STATUS,
} from '../../shared/statuses';
import { AppError } from '../../server/core/errors';

describe('Server State Machines Unit Tests', () => {
  describe('Order Status State Machine', () => {
    it('allows valid forward transitions', () => {
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.PENDING, ORDER_STATUS.PAID)).toBe(true);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.PAID, ORDER_STATUS.PROCESSING)).toBe(true);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.PROCESSING, ORDER_STATUS.SHIPPED)).toBe(true);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.SHIPPED, ORDER_STATUS.IN_TRANSIT)).toBe(true);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.IN_TRANSIT, ORDER_STATUS.DELIVERED)).toBe(true);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.DELIVERED, ORDER_STATUS.RETURN_REQUESTED)).toBe(true);
    });

    it('rejects invalid backwards transitions', () => {
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.DELIVERED, ORDER_STATUS.PENDING)).toBe(false);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.SHIPPED, ORDER_STATUS.PENDING_PAYMENT)).toBe(false);
      expect(canTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.CANCELLED, ORDER_STATUS.PAID)).toBe(false);
    });

    it('assertTransition throws AppError with STATE_TRANSITION_INVALID', () => {
      expect(() =>
        assertTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.CANCELLED, ORDER_STATUS.PAID, 'Order')
      ).toThrow(AppError);

      try {
        assertTransition(ORDER_STATUS_TRANSITIONS, ORDER_STATUS.CANCELLED, ORDER_STATUS.PAID, 'Order');
      } catch (err: unknown) {
        expect(err).toBeInstanceOf(AppError);
        const appErr = err as AppError;
        expect(appErr.code).toBe('STATE_TRANSITION_INVALID');
        expect(appErr.statusCode).toBe(400);
      }
    });
  });

  describe('Payment Status State Machine', () => {
    it('allows PENDING -> PAID or SUCCESSFUL', () => {
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PENDING, PAYMENT_STATUS.PAID)).toBe(true);
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PENDING, PAYMENT_STATUS.SUCCESSFUL)).toBe(true);
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PENDING, PAYMENT_STATUS.FAILED)).toBe(true);
    });

    it('allows PAID -> REFUND_PENDING and REFUNDED', () => {
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PAID, PAYMENT_STATUS.REFUND_PENDING)).toBe(true);
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.PAID, PAYMENT_STATUS.REFUNDED)).toBe(true);
    });

    it('terminal states have no outgoing transitions', () => {
      expect(PAYMENT_STATUS_TRANSITIONS[PAYMENT_STATUS.FAILED]).toEqual([]);
      expect(PAYMENT_STATUS_TRANSITIONS[PAYMENT_STATUS.REFUNDED]).toEqual([]);
      expect(canTransition(PAYMENT_STATUS_TRANSITIONS, PAYMENT_STATUS.REFUNDED, PAYMENT_STATUS.PAID)).toBe(false);
    });
  });

  describe('Payment Hold Status State Machine', () => {
    it('allows HELD -> RELEASED or REFUNDED or DISPUTED', () => {
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.HELD, PAYMENT_HOLD_STATUS.RELEASED)).toBe(true);
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.HELD, PAYMENT_HOLD_STATUS.REFUNDED)).toBe(true);
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.HELD, PAYMENT_HOLD_STATUS.DISPUTED)).toBe(true);
    });

    it('allows DISPUTED -> RELEASED or REFUNDED', () => {
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.DISPUTED, PAYMENT_HOLD_STATUS.RELEASED)).toBe(true);
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.DISPUTED, PAYMENT_HOLD_STATUS.REFUNDED)).toBe(true);
    });

    it('blocks transitions from RELEASED', () => {
      expect(canTransition(PAYMENT_HOLD_STATUS_TRANSITIONS, PAYMENT_HOLD_STATUS.RELEASED, PAYMENT_HOLD_STATUS.HELD)).toBe(false);
    });
  });

  describe('Dispatch Status State Machine', () => {
    it('allows courier lifecycle progression', () => {
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.PENDING, DISPATCH_STATUS.ASSIGNED)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.ASSIGNED, DISPATCH_STATUS.PICKED_UP)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.PICKED_UP, DISPATCH_STATUS.IN_TRANSIT)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.IN_TRANSIT, DISPATCH_STATUS.OUT_FOR_DELIVERY)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.OUT_FOR_DELIVERY, DISPATCH_STATUS.DELIVERED)).toBe(true);
    });

    it('allows locking and unlocking after admin resolution', () => {
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.OUT_FOR_DELIVERY, DISPATCH_STATUS.LOCKED)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.LOCKED, DISPATCH_STATUS.OUT_FOR_DELIVERY)).toBe(true);
      expect(canTransition(DISPATCH_STATUS_TRANSITIONS, DISPATCH_STATUS.LOCKED, DISPATCH_STATUS.ASSIGNED)).toBe(true);
    });
  });

  describe('Return Status State Machine', () => {
    it('allows REQUESTED -> APPROVED -> IN_TRANSIT -> RECEIVED_RESALEABLE -> REFUNDED', () => {
      expect(canTransition(RETURN_STATUS_TRANSITIONS, RETURN_STATUS.REQUESTED, RETURN_STATUS.APPROVED)).toBe(true);
      expect(canTransition(RETURN_STATUS_TRANSITIONS, RETURN_STATUS.APPROVED, RETURN_STATUS.IN_TRANSIT)).toBe(true);
      expect(canTransition(RETURN_STATUS_TRANSITIONS, RETURN_STATUS.IN_TRANSIT, RETURN_STATUS.RECEIVED_RESALEABLE)).toBe(true);
      expect(canTransition(RETURN_STATUS_TRANSITIONS, RETURN_STATUS.RECEIVED_RESALEABLE, RETURN_STATUS.REFUNDED)).toBe(true);
    });
  });

  describe('Seller Status State Machine', () => {
    it('handles review and suspension lifecycle', () => {
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.PENDING, SELLER_STATUS.UNDER_REVIEW)).toBe(true);
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.UNDER_REVIEW, SELLER_STATUS.APPROVED)).toBe(true);
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.APPROVED, SELLER_STATUS.SUSPENDED)).toBe(true);
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.SUSPENDED, SELLER_STATUS.ACTIVE)).toBe(true);
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.ACTIVE, SELLER_STATUS.BANNED)).toBe(true);
    });

    it('BANNED is strictly terminal', () => {
      expect(SELLER_STATUS_TRANSITIONS[SELLER_STATUS.BANNED]).toEqual([]);
      expect(canTransition(SELLER_STATUS_TRANSITIONS, SELLER_STATUS.BANNED, SELLER_STATUS.ACTIVE)).toBe(false);
    });
  });

  describe('Product Status State Machine', () => {
    it('handles product moderation flow', () => {
      expect(canTransition(PRODUCT_STATUS_TRANSITIONS, PRODUCT_STATUS.DRAFT, PRODUCT_STATUS.UNDER_REVIEW)).toBe(true);
      expect(canTransition(PRODUCT_STATUS_TRANSITIONS, PRODUCT_STATUS.UNDER_REVIEW, PRODUCT_STATUS.APPROVED)).toBe(true);
      expect(canTransition(PRODUCT_STATUS_TRANSITIONS, PRODUCT_STATUS.APPROVED, PRODUCT_STATUS.UNDER_REVIEW)).toBe(true);
      expect(canTransition(PRODUCT_STATUS_TRANSITIONS, PRODUCT_STATUS.UNDER_REVIEW, PRODUCT_STATUS.REJECTED)).toBe(true);
    });
  });

  describe('Payout Status State Machine', () => {
    it('handles payout approval lifecycle', () => {
      expect(canTransition(PAYOUT_STATUS_TRANSITIONS, PAYOUT_STATUS.PENDING, PAYOUT_STATUS.APPROVED)).toBe(true);
      expect(canTransition(PAYOUT_STATUS_TRANSITIONS, PAYOUT_STATUS.APPROVED, PAYOUT_STATUS.PAID)).toBe(true);
      expect(canTransition(PAYOUT_STATUS_TRANSITIONS, PAYOUT_STATUS.PENDING, PAYOUT_STATUS.REJECTED)).toBe(true);
      expect(canTransition(PAYOUT_STATUS_TRANSITIONS, PAYOUT_STATUS.PAID, PAYOUT_STATUS.PENDING)).toBe(false);
    });
  });
});
