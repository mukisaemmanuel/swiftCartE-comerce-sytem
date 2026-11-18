import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';

type DocData = Record<string, unknown>;

interface MockDocSnap {
  id: string;
  exists: boolean;
  ref: MockDocRef;
  data: () => DocData | undefined;
}

interface MockDocRef {
  id: string;
  path: string;
  get: () => Promise<MockDocSnap>;
  set: (data: DocData, opts?: { merge?: boolean }) => Promise<void>;
  update: (data: DocData) => Promise<void>;
  collection: (sub: string) => MockCollectionRef;
}

interface MockQuery {
  where: (field: string, op: string, value: unknown) => MockQuery;
  limit: (n: number) => MockQuery;
  get: () => Promise<{ empty: boolean; docs: MockDocSnap[] }>;
}

interface MockCollectionRef extends MockQuery {
  doc: (id?: string) => MockDocRef;
}

const stores = vi.hoisted(() => ({
  orders: new Map<string, DocData>(),
  payments: new Map<string, DocData>(),
  paymentTracking: new Map<string, DocData>(),
  notifications: new Map<string, DocData>(),
  auditLog: new Map<string, DocData>(),
  autoIdSeq: 1,
  authTokens: new Map<string, { uid: string; email?: string; role: string }>(),
}));

vi.mock('../../server/core/firebaseAdmin', () => {
  function getStore(collectionName: string): Map<string, DocData> {
    if (collectionName === 'orders') return stores.orders;
    if (collectionName === 'payments') return stores.payments;
    if (collectionName === 'paymentTracking') return stores.paymentTracking;
    if (collectionName === 'notifications') return stores.notifications;
    if (collectionName === 'auditLog' || collectionName === 'audit_logs') return stores.auditLog;
    return new Map<string, DocData>();
  }

  function makeDocRef(collectionName: string, docId: string): MockDocRef {
    const store = getStore(collectionName);
    const ref: MockDocRef = {
      id: docId,
      path: `${collectionName}/${docId}`,
      get: async () => {
        const val = store.get(docId);
        return {
          id: docId,
          exists: val !== undefined,
          ref,
          data: () => (val ? { ...val } : undefined),
        };
      },
      set: async (data: DocData, opts?: { merge?: boolean }) => {
        if (opts?.merge) {
          const prev = store.get(docId) || {};
          store.set(docId, { ...prev, ...data });
        } else {
          store.set(docId, { ...data });
        }
      },
      update: async (data: DocData) => {
        const prev = store.get(docId);
        if (!prev) {
          throw new Error(`Document ${collectionName}/${docId} does not exist`);
        }
        store.set(docId, { ...prev, ...data });
      },
      collection: (sub: string) => makeCollectionRef(`${collectionName}/${docId}/${sub}`),
    };
    return ref;
  }

  function makeCollectionRef(collectionName: string): MockCollectionRef {
    const filters: Array<{ field: string; value: unknown }> = [];
    let limitCount: number | undefined;

    const queryObj: MockCollectionRef = {
      doc: (id?: string) => makeDocRef(collectionName, id || `auto_${stores.autoIdSeq++}`),
      where: (field: string, _op: string, value: unknown) => {
        filters.push({ field, value });
        return queryObj;
      },
      limit: (n: number) => {
        limitCount = n;
        return queryObj;
      },
      get: async () => {
        const store = getStore(collectionName);
        const matches: MockDocSnap[] = [];
        for (const [id, data] of store.entries()) {
          const ok = filters.every((f) => data[f.field] === f.value);
          if (ok) {
            const ref = makeDocRef(collectionName, id);
            matches.push({
              id,
              exists: true,
              ref,
              data: () => ({ ...data }),
            });
          }
        }
        const sliced = limitCount !== undefined ? matches.slice(0, limitCount) : matches;
        return { empty: sliced.length === 0, docs: sliced };
      },
    };
    return queryObj;
  }

  const dbAdmin = {
    collection: (name: string) => makeCollectionRef(name),
    runTransaction: async <T>(fn: (tx: {
      get: (ref: MockDocRef) => Promise<MockDocSnap>;
      set: (ref: MockDocRef, data: DocData, opts?: { merge?: boolean }) => void;
      update: (ref: MockDocRef, data: DocData) => void;
    }) => Promise<T>): Promise<T> => {
      const stagedWrites: Array<() => Promise<void>> = [];
      const tx = {
        get: (ref: MockDocRef) => ref.get(),
        set: (ref: MockDocRef, data: DocData, opts?: { merge?: boolean }) => {
          stagedWrites.push(() => ref.set(data, opts));
        },
        update: (ref: MockDocRef, data: DocData) => {
          stagedWrites.push(() => ref.update(data));
        },
      };
      const result = await fn(tx);
      for (const write of stagedWrites) {
        await write();
      }
      return result;
    },
  };

  const authAdmin = {
    verifyIdToken: async (token: string) => {
      const user = stores.authTokens.get(token);
      if (!user) {
        throw new Error('Invalid Firebase ID token');
      }
      return {
        uid: user.uid,
        email: user.email,
        role: user.role,
        email_verified: true,
      };
    },
  };

  return {
    dbAdmin,
    adminDb: dbAdmin,
    authAdmin,
    adminAuth: authAdmin,
    storageAdmin: {},
    adminApp: {},
  };
});

import { app } from '../../server/app';
import { pesapalClient } from '../../server/core/pesapal';

describe('Payment Tamper-Proof Security Tests (Stage B2 Part A)', () => {
  beforeEach(() => {
    stores.orders.clear();
    stores.payments.clear();
    stores.paymentTracking.clear();
    stores.notifications.clear();
    stores.auditLog.clear();
    stores.authTokens.clear();
    stores.autoIdSeq = 1;
    vi.restoreAllMocks();

    // Seed cheap & expensive orders
    stores.orders.set('ord-cheap', {
      id: 'ord-cheap',
      buyerId: 'buyer-1',
      totalUGX: 15000,
      currency: 'UGX',
      status: 'PENDING_PAYMENT',
      paymentStatus: 'PENDING',
      pesapalOrderTrackingId: 'trk-cheap',
    });
    stores.payments.set('pay_ord-cheap', {
      id: 'pay_ord-cheap',
      orderId: 'ord-cheap',
      buyerId: 'buyer-1',
      amountUGX: 15000,
      currency: 'UGX',
      orderTrackingId: 'trk-cheap',
      status: 'PENDING',
    });
    stores.paymentTracking.set('trk-cheap', {
      orderTrackingId: 'trk-cheap',
      orderId: 'ord-cheap',
      buyerId: 'buyer-1',
      totalUGX: 15000,
      currency: 'UGX',
    });

    stores.orders.set('ord-expensive', {
      id: 'ord-expensive',
      buyerId: 'buyer-1',
      totalUGX: 950000,
      currency: 'UGX',
      status: 'PENDING_PAYMENT',
      paymentStatus: 'PENDING',
      pesapalOrderTrackingId: 'trk-expensive',
    });
    stores.payments.set('pay_ord-expensive', {
      id: 'pay_ord-expensive',
      orderId: 'ord-expensive',
      buyerId: 'buyer-1',
      amountUGX: 950000,
      currency: 'UGX',
      orderTrackingId: 'trk-expensive',
      status: 'PENDING',
    });
    stores.paymentTracking.set('trk-expensive', {
      orderTrackingId: 'trk-expensive',
      orderId: 'ord-expensive',
      buyerId: 'buyer-1',
      totalUGX: 950000,
      currency: 'UGX',
    });

    stores.authTokens.set('token-buyer-1', { uid: 'buyer-1', email: 'buyer1@swiftcart.ug', role: 'buyer' });
    stores.authTokens.set('token-buyer-2', { uid: 'buyer-2', email: 'buyer2@swiftcart.ug', role: 'buyer' });
    stores.authTokens.set('token-admin', { uid: 'admin-1', email: 'admin@swiftcart.ug', role: 'admin' });
  });

  it('(a1) cheap-order tracking id with expensive-order OrderMerchantReference does NOT mark expensive order paid', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-cheap',
      paymentMethod: 'MTN',
      amount: 15000,
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'MOMO-CHEAP-1',
      merchantReference: 'ord-cheap',
    });

    // Attacker calls IPN supplying trk-cheap with spoofed OrderMerchantReference=ord-expensive
    const res = await request(app)
      .post('/api/payments/ipn')
      .query({
        OrderTrackingId: 'trk-cheap',
        OrderMerchantReference: 'ord-expensive',
      });

    expect(res.status).toBe(200);
    // Expensive order MUST remain PENDING_PAYMENT / PENDING
    const expensiveOrder = stores.orders.get('ord-expensive');
    expect(expensiveOrder?.paymentStatus).toBe('PENDING');
    expect(expensiveOrder?.status).toBe('PENDING_PAYMENT');

    // Handler ignored request OrderMerchantReference and resolved trk-cheap -> ord-cheap
    expect(res.body.orderMerchantReference).toBe('ord-cheap');
    const cheapOrder = stores.orders.get('ord-cheap');
    expect(cheapOrder?.paymentStatus).toBe('PAID');
  });

  it('(a2) cross-order merchantReference mismatch returned from gateway is rejected as MISMATCH', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'MTN',
      amount: 950000,
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'MOMO-TAMPER',
      merchantReference: 'ord-cheap', // mismatch vs ord-expensive!
    });

    const res = await request(app)
      .post('/api/payments/ipn')
      .query({ OrderTrackingId: 'trk-expensive' });

    expect(res.status).toBe(200);
    expect(res.body.verificationStatus).toBe('MISMATCH');

    const expensiveOrder = stores.orders.get('ord-expensive');
    expect(expensiveOrder?.paymentStatus).toBe('MISMATCH');
    expect(expensiveOrder?.status).toBe('PENDING_PAYMENT');

    const payDoc = stores.payments.get('pay_ord-expensive');
    expect(payDoc?.status).toBe('MISMATCH');
  });

  it('(b) amount mismatch is rejected, marks payment MISMATCH, writes audit & alerts admin', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'AIRTEL',
      amount: 15000, // expected 950000
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'AIRTEL-999',
      merchantReference: 'ord-expensive',
    });

    const res = await request(app)
      .post('/api/payments/ipn')
      .send({ OrderTrackingId: 'trk-expensive' });

    expect(res.status).toBe(200);
    expect(res.body.verificationStatus).toBe('MISMATCH');

    const order = stores.orders.get('ord-expensive');
    expect(order?.status).toBe('PENDING_PAYMENT');
    expect(order?.paymentStatus).toBe('MISMATCH');

    const payment = stores.payments.get('pay_ord-expensive');
    expect(payment?.status).toBe('MISMATCH');

    const audits = Array.from(stores.auditLog.values());
    expect(audits.some((a) => a.action === 'PAYMENT_VERIFICATION_MISMATCH' && a.targetId === 'ord-expensive')).toBe(true);

    const notifs = Array.from(stores.notifications.values());
    expect(notifs.some((n) => n.userId === 'ADMIN_ALERT' && n.type === 'PAYMENT')).toBe(true);
  });

  it('(c) wrong currency (USD instead of UGX) is rejected and flagged MISMATCH', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'VISA',
      amount: 950000,
      currency: 'USD', // Wrong currency
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'VISA-123',
      merchantReference: 'ord-expensive',
    });

    const res = await request(app)
      .post('/api/payments/ipn')
      .send({ OrderTrackingId: 'trk-expensive' });

    expect(res.status).toBe(200);
    expect(res.body.verificationStatus).toBe('MISMATCH');

    const order = stores.orders.get('ord-expensive');
    expect(order?.status).toBe('PENDING_PAYMENT');
    expect(order?.paymentStatus).toBe('MISMATCH');

    const payment = stores.payments.get('pay_ord-expensive');
    expect(payment?.status).toBe('MISMATCH');

    const audits = Array.from(stores.auditLog.values());
    expect(audits.some((a) => a.action === 'PAYMENT_VERIFICATION_MISMATCH')).toBe(true);

    const notifs = Array.from(stores.notifications.values());
    expect(notifs.some((n) => n.userId === 'ADMIN_ALERT')).toBe(true);
  });

  it('(d) unknown tracking id returns 200 ACKNOWLEDGED and changes nothing in Firestore', async () => {
    const spyStatus = vi.spyOn(pesapalClient, 'getTransactionStatus');

    const res = await request(app)
      .post('/api/payments/ipn')
      .query({
        OrderTrackingId: 'trk-does-not-exist',
        OrderMerchantReference: 'ord-expensive',
      });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ACKNOWLEDGED');
    expect(spyStatus).not.toHaveBeenCalled();

    expect(stores.orders.get('ord-expensive')?.paymentStatus).toBe('PENDING');
    expect(stores.orders.get('ord-cheap')?.paymentStatus).toBe('PENDING');
    expect(stores.auditLog.size).toBe(0);
    expect(stores.notifications.size).toBe(0);
  });

  it('(e) duplicate IPN is idempotent and FAILED callback after PAID never moves order backwards', async () => {
    const statusMock = vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'MTN',
      amount: 950000,
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'MOMO-OK-99',
      merchantReference: 'ord-expensive',
    });

    // First IPN call marks PAID
    const res1 = await request(app).post('/api/payments/ipn').query({ OrderTrackingId: 'trk-expensive' });
    expect(res1.status).toBe(200);
    expect(stores.orders.get('ord-expensive')?.paymentStatus).toBe('PAID');
    expect(stores.orders.get('ord-expensive')?.status).toBe('PAID');
    expect(stores.auditLog.size).toBe(1);
    expect(stores.notifications.size).toBe(1);

    // Second duplicate COMPLETED IPN does nothing
    const res2 = await request(app).post('/api/payments/ipn').query({ OrderTrackingId: 'trk-expensive' });
    expect(res2.status).toBe(200);
    expect(stores.auditLog.size).toBe(1);
    expect(stores.notifications.size).toBe(1);

    // Late/spoofed FAILED IPN cannot move paid order backwards
    statusMock.mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'MTN',
      amount: 950000,
      currency: 'UGX',
      statusCode: 2,
      paymentStatusDescription: 'FAILED',
      merchantReference: 'ord-expensive',
    });

    const res3 = await request(app).post('/api/payments/ipn').query({ OrderTrackingId: 'trk-expensive' });
    expect(res3.status).toBe(200);
    expect(stores.orders.get('ord-expensive')?.paymentStatus).toBe('PAID');
    expect(stores.orders.get('ord-expensive')?.status).toBe('PAID');
    expect(stores.auditLog.size).toBe(1);
  });

  it('(f) valid payment marks the right order PAID once and ignores spoofed merchant reference', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'MTN_MOMO',
      amount: 950000,
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      confirmationCode: 'MOMO-VALID-001',
      merchantReference: 'ord-expensive',
    });

    const res = await request(app)
      .get('/api/payments/ipn')
      .query({
        OrderTrackingId: 'trk-expensive',
        OrderMerchantReference: 'ord-cheap', // spoofed param must be ignored
      });

    expect(res.status).toBe(200);
    expect(res.body.orderMerchantReference).toBe('ord-expensive');

    const paidOrder = stores.orders.get('ord-expensive');
    expect(paidOrder?.paymentStatus).toBe('PAID');
    expect(paidOrder?.status).toBe('PAID');
    expect(paidOrder?.paymentConfirmationCode).toBe('MOMO-VALID-001');

    // Cheap order untouched
    expect(stores.orders.get('ord-cheap')?.paymentStatus).toBe('PENDING');
  });

  it('(g) polling endpoint enforces amount/currency checks and prevents tampering', async () => {
    vi.spyOn(pesapalClient, 'getTransactionStatus').mockResolvedValue({
      orderTrackingId: 'trk-expensive',
      paymentMethod: 'MTN',
      amount: 500, // tampered low amount
      currency: 'UGX',
      statusCode: 1,
      paymentStatusDescription: 'COMPLETED',
      merchantReference: 'ord-expensive',
    });

    const res = await request(app).get('/api/payments/status/ord-expensive');
    expect(res.status).toBe(409);
    expect(res.body.paymentStatus).toBe('MISMATCH');
    expect(stores.orders.get('ord-expensive')?.status).toBe('PENDING_PAYMENT');
  });

  it('(h) refund endpoint enforces ownership, paid status, amount cap, and single execution', async () => {
    const refundSpy = vi.spyOn(pesapalClient, 'requestRefund').mockResolvedValue({
      status: '200',
      message: 'Refund accepted',
    });

    // 1. Unpaid order cannot be refunded
    const resUnpaid = await request(app)
      .post('/api/orders/ord-expensive/refund')
      .set('Authorization', 'Bearer token-buyer-1')
      .send({ remarks: 'Changed mind' });
    expect(resUnpaid.status).toBe(400);

    // Mark ord-expensive PAID directly
    const existing = stores.orders.get('ord-expensive')!;
    stores.orders.set('ord-expensive', {
      ...existing,
      status: 'PAID',
      paymentStatus: 'PAID',
      paidAmountUGX: 950000,
      paymentConfirmationCode: 'MOMO-CONF-777',
    });
    const existingPay = stores.payments.get('pay_ord-expensive')!;
    stores.payments.set('pay_ord-expensive', {
      ...existingPay,
      status: 'PAID',
      amountUGX: 950000,
      confirmationCode: 'MOMO-CONF-777',
    });

    // 2. Different buyer cannot refund another user's order
    const resOtherBuyer = await request(app)
      .post('/api/orders/ord-expensive/refund')
      .set('Authorization', 'Bearer token-buyer-2')
      .send({ remarks: 'Hijack attempt' });
    expect(resOtherBuyer.status).toBe(403);

    // 3. Amount exceeding paid amount is rejected
    const resTooHigh = await request(app)
      .post('/api/orders/ord-expensive/refund')
      .set('Authorization', 'Bearer token-buyer-1')
      .send({ amountUGX: 1200000, remarks: 'Over-refund attempt' });
    expect(resTooHigh.status).toBe(400);

    // 4. Valid buyer refund up to paid amount succeeds once
    const resValid = await request(app)
      .post('/api/orders/ord-expensive/refund')
      .set('Authorization', 'Bearer token-buyer-1')
      .send({ amountUGX: 950000, remarks: 'Item out of stock' });
    expect(resValid.status).toBe(200);
    expect(resValid.body.paymentStatus).toBe('REFUNDED');
    expect(refundSpy).toHaveBeenCalledTimes(1);

    // 5. Second refund attempt is rejected cleanly with 409
    const resSecond = await request(app)
      .post('/api/orders/ord-expensive/refund')
      .set('Authorization', 'Bearer token-buyer-1')
      .send({ amountUGX: 950000, remarks: 'Double refund attempt' });
    expect(resSecond.status).toBe(409);
    expect(refundSpy).toHaveBeenCalledTimes(1);
  });
});
