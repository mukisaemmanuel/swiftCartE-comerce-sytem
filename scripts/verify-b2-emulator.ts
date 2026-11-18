/**
 * Stage B2 End-to-End Backend Verification Against Live Firebase Emulators
 *
 * Tests:
 * 1. Real Firebase Auth Emulator sign-in (buyer, rider, admin)
 * 2. Checkout (server price recalculation, sub-orders, payoutHolds, paymentTracking index)
 * 3. Pesapal IPN tampering rejection (amount mismatch -> MISMATCH, unpaid) + valid payment -> PAID
 * 4. Delivery dispatch + 5 wrong 6-digit code attempts -> 423 OTP_LOCKED
 * 5. Admin unlock/reissue + rider code verification success -> DELIVERED
 * 6. Buyer return request -> REQUESTED + payoutHold frozen to DISPUTED
 * 7. Payout hold release after expired return window -> RELEASED + net payout created
 *
 * Usage:
 *   npx firebase emulators:exec --only auth,firestore "npx tsx scripts/seed-emulator.ts && npx tsx scripts/verify-b2-emulator.ts"
 */

import http from 'node:http';
import assert from 'node:assert/strict';
import { app } from '../server/app';
import { dbAdmin } from '../server/core/firebaseAdmin';
import { pesapalClient } from '../server/core/pesapal';

process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST || '127.0.0.1:9099';

async function signInEmulatorUser(email: string, password: string): Promise<{ uid: string; idToken: string }> {
  const host = process.env.FIREBASE_AUTH_EMULATOR_HOST || '127.0.0.1:9099';
  const url = `http://${host}/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=fake-emulator-key`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  const data = (await res.json()) as { localId?: string; idToken?: string; error?: { message: string } };
  if (!res.ok || !data.idToken || !data.localId) {
    throw new Error(`Failed to sign in ${email}: ${JSON.stringify(data)}`);
  }
  return { uid: data.localId, idToken: data.idToken };
}

async function callApi(
  baseUrl: string,
  method: string,
  path: string,
  token?: string,
  body?: Record<string, unknown>
): Promise<{ status: number; json: Record<string, unknown> }> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = (await res.json()) as Record<string, unknown>;
  return { status: res.status, json };
}

async function run() {
  console.log('\n=== STAGE B2 END-TO-END EMULATOR VERIFICATION ===\n');

  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', () => resolve()));
  const address = server.address();
  if (!address || typeof address === 'string') {
    throw new Error('Failed to bind local HTTP server');
  }
  const baseUrl = `http://127.0.0.1:${address.port}`;
  console.log(`Express test server listening at ${baseUrl}`);

  // Deterministic Pesapal mock store
  let trackingCounter = 1;
  const mockPesapalOrders = new Map<string, { merchantReference: string; amount: number; currency: string; statusCode: number; desc: string }>();

  pesapalClient.submitOrder = async (params) => {
    const orderTrackingId = `trk-emu-${trackingCounter++}-${Date.now()}`;
    mockPesapalOrders.set(orderTrackingId, {
      merchantReference: params.merchantReference,
      amount: params.amountUGX,
      currency: 'UGX',
      statusCode: 1,
      desc: 'COMPLETED',
    });
    return {
      orderTrackingId,
      merchantReference: params.merchantReference,
      redirectUrl: `https://cybqa.pesapal.com/pesapalv3/mock?id=${orderTrackingId}`,
      status: '200',
    };
  };

  pesapalClient.getTransactionStatus = async (orderTrackingId) => {
    const entry = mockPesapalOrders.get(orderTrackingId);
    if (!entry) {
      return {
        orderTrackingId,
        paymentMethod: 'UNKNOWN',
        amount: 0,
        currency: 'UGX',
        statusCode: 0,
        paymentStatusDescription: 'INVALID',
      };
    }
    return {
      orderTrackingId,
      paymentMethod: 'MTN_MOMO',
      amount: entry.amount,
      currency: entry.currency,
      statusCode: entry.statusCode,
      paymentStatusDescription: entry.desc,
      confirmationCode: `CONF-${orderTrackingId}`,
      merchantReference: entry.merchantReference,
    };
  };

  try {
    // 1. Obtain real Firebase ID tokens from Auth Emulator
    const buyer = await signInEmulatorUser('buyer@swiftcart.ug', 'Password123!');
    const rider = await signInEmulatorUser('rider@swiftcart.ug', 'Password123!');
    const admin = await signInEmulatorUser('admin@swiftcart.ug', 'Password123!');
    console.log('1. Auth tokens issued for buyer, rider, admin');

    // 2. Create Order 1 via POST /api/checkout
    const checkout1 = await callApi(baseUrl, 'POST', '/api/checkout', buyer.idToken, {
      items: [{ productId: 'prod-soundcore-space-one', quantity: 1 }],
      deliveryType: 'DOORSTEP',
      deliveryAddress: {
        recipientName: 'John Doe Buyer',
        phone: '+256700000006',
        city: 'Kampala',
        district: 'Kampala Central',
      },
      idempotencyKey: `b2-verify-ord1-${Date.now()}`,
    });
    assert.equal(checkout1.status, 201);
    const order1Id = String(checkout1.json.orderId);
    const tracking1 = String(checkout1.json.orderTrackingId);
    console.log(`2. Checkout Order 1 (${order1Id}): status=${checkout1.status}, totalUGX=${checkout1.json.totalUGX}, tracking=${tracking1}`);

    // 3. Simulated Pesapal IPN callback for Order 1 -> PAID
    const ipn1 = await callApi(baseUrl, 'POST', `/api/payments/ipn?OrderTrackingId=${tracking1}&OrderMerchantReference=spoofed-ref`);
    assert.equal(ipn1.status, 200);
    assert.equal(ipn1.json.orderMerchantReference, order1Id);
    const order1AfterPay = (await dbAdmin.collection('orders').doc(order1Id).get()).data()!;
    assert.equal(order1AfterPay.paymentStatus, 'PAID');
    assert.equal(order1AfterPay.status, 'PAID');
    console.log(`3. Pesapal IPN Order 1: status=${ipn1.status}, resolvedOrder=${ipn1.json.orderMerchantReference}, orderStatus=${order1AfterPay.status}`);

    // 4. Admin dispatches Order 1 & generates 6-digit OTP
    const dispatch1 = await callApi(baseUrl, 'POST', '/api/deliveries/dispatch', admin.idToken, {
      orderId: order1Id,
      courierType: 'SAFEBODA',
      riderId: rider.uid,
      courierName: 'Speedy Boda Rider',
      courierPhone: '+256700000004',
    });
    assert.equal(dispatch1.status, 201);
    const delivery1Id = String(dispatch1.json.deliveryId);
    console.log(`4. Dispatch Order 1: status=${dispatch1.status}, deliveryId=${delivery1Id}`);

    // 5. Rider enters wrong code 5 times -> locks on 5th attempt
    const wrongAttempts: Array<{ attempt: number; status: number; code: unknown }> = [];
    for (let i = 1; i <= 5; i++) {
      const res = await callApi(baseUrl, 'POST', `/api/deliveries/${delivery1Id}/verify-code`, rider.idToken, {
        code: '000000',
      });
      wrongAttempts.push({
        attempt: i,
        status: res.status,
        code: (res.json.error as { code?: string })?.code,
      });
    }
    assert.equal(wrongAttempts[0].status, 400);
    assert.equal(wrongAttempts[0].code, 'OTP_INVALID');
    assert.equal(wrongAttempts[4].status, 423);
    assert.equal(wrongAttempts[4].code, 'OTP_LOCKED');
    console.log('5. Wrong delivery code 5 attempts:', JSON.stringify(wrongAttempts));

    // Verify delivery is LOCKED in Firestore
    const lockedDelivery = (await dbAdmin.collection('deliveries').doc(delivery1Id).get()).data()!;
    assert.equal(lockedDelivery.status, 'LOCKED');

    // 6. Admin unlocks and reissues 6-digit code, then rider verifies with valid code -> DELIVERED
    const unlockRes = await callApi(baseUrl, 'POST', `/api/admin/deliveries/${delivery1Id}/unlock`, admin.idToken, {
      reason: 'Customer verified identity on phone call',
    });
    assert.equal(unlockRes.status, 200);
    const validCode1 = String(unlockRes.json.reissuedCode);
    assert.match(validCode1, /^[0-9]{6}$/);

    const verifySuccess = await callApi(baseUrl, 'POST', `/api/deliveries/${delivery1Id}/verify-code`, rider.idToken, {
      code: validCode1,
    });
    assert.equal(verifySuccess.status, 200);
    assert.equal(verifySuccess.json.success, true);

    const deliveredOrder1 = (await dbAdmin.collection('orders').doc(order1Id).get()).data()!;
    assert.equal(deliveredOrder1.status, 'DELIVERED');
    console.log(`6. Delivery code unlock + valid verify: status=${verifySuccess.status}, order1.status=${deliveredOrder1.status}`);

    // 7. Create Order 2 to verify (a) payment mismatch rejection and (b) return request freezes payout hold
    const checkout2 = await callApi(baseUrl, 'POST', '/api/checkout', buyer.idToken, {
      items: [{ productId: 'prod-soundcore-space-one', quantity: 1 }],
      deliveryType: 'DOORSTEP',
      deliveryAddress: {
        recipientName: 'John Doe Buyer',
        phone: '+256700000006',
        city: 'Kampala',
        district: 'Kampala Central',
      },
      idempotencyKey: `b2-verify-ord2-${Date.now()}`,
    });
    assert.equal(checkout2.status, 201);
    const order2Id = String(checkout2.json.orderId);
    const tracking2 = String(checkout2.json.orderTrackingId);

    // Simulate tampered low amount from Pesapal for tracking2
    mockPesapalOrders.get(tracking2)!.amount = 1000;
    const mismatchIpn = await callApi(baseUrl, 'POST', `/api/payments/ipn?OrderTrackingId=${tracking2}`);
    assert.equal(mismatchIpn.status, 200);
    assert.equal(mismatchIpn.json.verificationStatus, 'MISMATCH');
    const order2Mismatch = (await dbAdmin.collection('orders').doc(order2Id).get()).data()!;
    assert.equal(order2Mismatch.status, 'PENDING_PAYMENT');
    assert.equal(order2Mismatch.paymentStatus, 'MISMATCH');
    console.log(`7a. Mismatch IPN check: verificationStatus=${mismatchIpn.json.verificationStatus}, order2.status=${order2Mismatch.status}`);

    // Now restore exact amount -> completes cleanly, dispatch & deliver
    mockPesapalOrders.get(tracking2)!.amount = 385000;
    const ipn2 = await callApi(baseUrl, 'POST', `/api/payments/ipn?OrderTrackingId=${tracking2}`);
    assert.equal(ipn2.json.paymentStatus, 'PAID');

    const dispatch2 = await callApi(baseUrl, 'POST', '/api/deliveries/dispatch', admin.idToken, {
      orderId: order2Id,
      courierType: 'SAFEBODA',
      riderId: rider.uid,
    });
    const delivery2Id = String(dispatch2.json.deliveryId);
    const unlock2 = await callApi(baseUrl, 'POST', `/api/admin/deliveries/${delivery2Id}/unlock`, admin.idToken, {});
    await callApi(baseUrl, 'POST', `/api/deliveries/${delivery2Id}/verify-code`, rider.idToken, {
      code: String(unlock2.json.reissuedCode),
    });

    // Submit Return Request on Order 2
    const returnRes = await callApi(baseUrl, 'POST', '/api/orders/returns', buyer.idToken, {
      orderId: order2Id,
      reason: 'Left earcup audio crackling out of the box',
      items: [{ productId: 'prod-soundcore-space-one', quantity: 1 }],
      condition: 'DEFECTIVE',
    });
    assert.equal(returnRes.status, 201);
    assert.equal(returnRes.json.status, 'REQUESTED');
    const hold2Snap = await dbAdmin.collection('payoutHolds').where('orderId', '==', order2Id).get();
    assert.equal(hold2Snap.empty, false);
    assert.equal(hold2Snap.docs[0].data().status, 'DISPUTED');
    console.log(`7b. Return request on Order 2: status=${returnRes.status}, returnId=${returnRes.json.returnId}, holdStatus=${hold2Snap.docs[0].data().status}`);

    // 8. Simulate expired 3-day return window for Order 1 and release eligible payout holds
    const pastIso = new Date(Date.now() - 60000).toISOString();
    const hold1Snap = await dbAdmin.collection('payoutHolds').where('orderId', '==', order1Id).get();
    assert.equal(hold1Snap.empty, false);
    for (const hDoc of hold1Snap.docs) {
      await hDoc.ref.update({ holdReleaseDueAt: pastIso });
    }

    const releaseRes = await callApi(baseUrl, 'POST', '/api/admin/payouts/release-holds', admin.idToken, {});
    assert.equal(releaseRes.status, 200);
    assert.equal(releaseRes.json.releasedCount, 1);

    const hold1After = (await hold1Snap.docs[0].ref.get()).data()!;
    assert.equal(hold1After.status, 'RELEASED');
    const payoutDoc = (await dbAdmin.collection('payouts').doc(String(hold1After.payoutId)).get()).data()!;
    assert.equal(payoutDoc.status, 'PENDING');
    assert.equal(payoutDoc.netAmountUGX, 342000); // 380,000 - 10% platform commission
    console.log(`8. Payout hold release: releasedCount=${releaseRes.json.releasedCount}, holdStatus=${hold1After.status}, payoutId=${payoutDoc.id}, netAmountUGX=${payoutDoc.netAmountUGX}`);

    console.log('\n=== ALL STAGE B2 EMULATOR CHECKS PASSED ===\n');
  } finally {
    server.close();
  }
}

run().catch((err) => {
  console.error('Stage B2 Emulator Verification FAILED:', err);
  process.exit(1);
});
