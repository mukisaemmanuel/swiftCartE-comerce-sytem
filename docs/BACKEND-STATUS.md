# SwiftCart Backend Status Report (Stage B2)

**Date**: 2026-11-18  
**Branch**: `backend`  
**Data Mode**: Mock (`VITE_DATA_SOURCE=mock`) by default; toggleable to `firebase`.

---

## 1. Summary of Backend & Hardening Implementation

### A. Firebase & Infrastructure Layout
- `firebase.json`: Configured with Cloud Functions v2 (`nodejs22`), Firestore rules & indexes, Cloud Storage rules, security headers (CSP, `nosniff`, frame denial), and local emulator suite (`auth: 9099`, `firestore: 8080`, `storage: 9199`, `functions: 5001`, `ui: 4000`).
- `firestore.rules`: 16+ collections & sub-collections secured with custom-claim role checks (`buyer`, `seller`, `rider`, `hub`, `admin`, `super-admin`). Monetary, payout hold, and state transition fields are strictly server-only.
- `storage.rules`: User-scoped storage paths with mime-type checks and size limits.
- `firestore.indexes.json`: Composite indexes for orders, dispatches, payout holds, and catalog queries.
- `functions/`: Cloud Functions 2nd Gen (`api` and `scheduledPayoutHoldRelease`) with explicit `esbuild` dependency in `functions/package.json` producing an ESM bundle at `functions/dist/index.js`.

### B. Tamper-Proof Payment Pipeline & Delivery Security (`server/`)
- **Payment Confirmation Hardening (`server/core/payments.ts`, `server/core/checkout.ts`)**:
  - `checkout.ts` writes `paymentTracking/{orderTrackingId}` index documents and integer `totalUGX` totals.
  - `handlePaymentIpn` ignores `OrderMerchantReference` in request query/body and resolves orders strictly from Firestore via `orderTrackingId`. Unknown tracking IDs return `200 ACKNOWLEDGED` without modifying Firestore.
  - Shared `reconcilePesapalTransaction` enforces `statusResult.merchantReference === orderId`, `currency === 'UGX'`, and integer `statusResult.amount === order.totalUGX`. Mismatches flag payment `MISMATCH`, leave the order unpaid, alert `ADMIN_ALERT`, and write `PAYMENT_VERIFICATION_MISMATCH` to `auditLog`.
  - Updates execute atomically inside `dbAdmin.runTransaction`; duplicate `COMPLETED` callbacks are idempotent and `FAILED`/`PENDING` callbacks never downgrade a `PAID` order.
  - `handlePaymentStatusPoll` applies identical checks.
  - `handleRefund` verifies purchasing buyer ownership (`buyerId === req.user.uid`) or admin role, requires `PAID` status, caps integer `amountUGX <= paidAmountUGX`, and uses an atomic `REFUND_PENDING` lock so refunds execute once.
- **Delivery OTP & Payout Hold Fixes (`server/core/deliverySecurity.ts`)**:
  - Fixed transaction rollback bug on wrong attempts: wrong 6-digit attempts commit incremented `attemptCount` and `LOCKED` status on attempt 5 before throwing `423 OTP_LOCKED`.
  - Updated `payoutHolds` query inside transaction so `holdReleaseDueAt` is applied to all order payout holds created at checkout.
- **Strict Type Safety & Bundle Split (`tsconfig.json`, `vite.config.ts`, `server/express.d.ts`)**:
  - Zero ESLint errors/warnings (removed all `any` types and `eslint-disable` comments).
  - Switched client Firestore repositories (`src/data/firestore/*`) to `firebase/firestore/lite` and split Firebase Vite chunks so every production asset is under 300 KB.

---

## 2. Verification Results (Real Pasted Outputs)

### A. ESLint Verification (`pnpm lint`)
```
$ eslint .
```
*Result: Exit code 0 (0 errors, 0 warnings).*

### B. Cloud Functions Install & Build (`cd functions && pnpm install && pnpm build`)
```
Already up to date
Done in 7.2s using pnpm v11.24.0
$ esbuild src/index.ts --bundle --platform=node --format=esm --target=node22 --outfile=dist/index.js --packages=external

  dist\index.js  94.0kb

Done in 34ms
```
*Result: Exit code 0; exports verified cleanly in Node v22 (`api`, `appUrl`, `pesapalConsumerKey`, `pesapalConsumerSecret`, `pesapalEnv`, `pesapalIpnId`, `scheduledPayoutHoldRelease`).*

### C. TypeScript Typecheck & Production Build (`pnpm build`)
```
$ tsc --noEmit && vite build
vite v6.4.6 building for production...
transforming...
✓ 790 modules transformed.
...
dist/assets/firebase-core-Cy7J3AWo.js       58.95 kB │ gzip: 15.43 kB
dist/assets/firebase-firestore-D0Toaeuv.js 105.01 kB │ gzip: 23.36 kB
dist/assets/firebase-auth-D-l28Yt6.js      124.98 kB │ gzip: 25.46 kB
dist/assets/index-BYai53-c.js              124.09 kB │ gzip: 26.20 kB
dist/assets/react-vendor-CfDz6BDZ.js       142.93 kB │ gzip: 45.78 kB
dist/assets/icons-1-znjlFFVO.js            198.89 kB │ gzip: 59.55 kB
✓ built in 55.59s
```
*Result: Exit code 0; every JS/CSS asset in `dist/` is under 300 KB.*

### D. Full Vitest Test Suite (`pnpm test`)
```
 ✓ tests/backend/state-machines.test.ts (16 tests) 22ms
 ✓ tests/backend/pesapal.test.ts (6 tests) 15ms
 ✓ tests/backend/payment-security.test.ts (9 tests) 605ms
 ✓ tests/buyer-storefront.test.tsx (14 tests) 1470ms
 ✓ tests/banned-copy.test.ts (1 test) 9091ms
 ✓ tests/backend/delivery-security.test.ts (6 tests) 108ms
 ✓ tests/backend/api-routes.test.ts (12 tests) 268ms
 ✓ tests/components-smoke.test.tsx (12 tests) 762ms
 ✓ tests/stage2-security-codes.test.ts (2 tests) 3124ms
 ✓ tests/stage2-checkout-orders.test.tsx (6 tests) 1348ms
 ✓ tests/banner-responsive.test.tsx (4 tests) 561ms
 ✓ tests/placeholders.test.ts (2 tests) 2356ms
 ✓ tests/icons.test.ts (2 tests) 2364ms
 ✓ tests/bundle-size.test.ts (1 test) 718ms
 ✓ tests/no-classname-comments.test.ts (1 test) 643ms
 ✓ tests/encoding.test.ts (1 test) 790ms
 ✓ tests/routes-smoke.test.tsx (3 tests) 3242ms
 ✓ tests/breakpoint.test.ts (1 test) 7ms
 ✓ tests/dev-ui-gate.test.tsx (1 test) 218ms
 ✓ tests/stage2-buyer-routes.test.tsx (3 tests) 5573ms
 ✓ tests/seller-dashboard.test.tsx (5 tests) 4663ms

 Test Files  21 passed (21)
      Tests  108 passed (108)
```

Payment security suite details (`npx vitest run tests/backend/payment-security.test.ts --reporter=verbose`):
```
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (a1) cheap-order tracking id with expensive-order OrderMerchantReference does NOT mark expensive order paid
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (a2) cross-order merchantReference mismatch returned from gateway is rejected as MISMATCH
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (b) amount mismatch is rejected, marks payment MISMATCH, writes audit & alerts admin
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (c) wrong currency (USD instead of UGX) is rejected and flagged MISMATCH
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (d) unknown tracking id returns 200 ACKNOWLEDGED and changes nothing in Firestore
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (e) duplicate IPN is idempotent and FAILED callback after PAID never moves order backwards
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (f) valid payment marks the right order PAID once and ignores spoofed merchant reference
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (g) polling endpoint enforces amount/currency checks and prevents tampering
 ✓ tests/backend/payment-security.test.ts > Payment Tamper-Proof Security Tests (Stage B2 Part A) > (h) refund endpoint enforces ownership, paid status, amount cap, and single execution
```

### E. Firebase Emulators (Auth, Firestore, Functions, Storage) Security Rules Suite
Command: `npx firebase emulators:exec --only auth,firestore,functions,storage "npx tsx scripts/test-rules.ts"`
```
i  emulators: Starting emulators: auth, functions, firestore, storage
Initializing Firestore Rules Test Environment...
Executing 26 Firestore Security Rules Test Cases across 16 Collections:
  ✓ [Users] signed-out visitor cannot read user profile
  ✓ [Users] buyer can read and update own profile allow-listed fields
  ✓ [Users] buyer cannot update role or status
  ✓ [Users] buyer cannot read another user profile
  ✓ [Users] admin can read any user profile and list users
  ✓ [SellerProfiles] public can read seller profile
  ✓ [SellerProfiles] owning seller can update store name and description
  ✓ [SellerProfiles] seller cannot update balance or status
  ✓ [Products] public can read approved products
  ✓ [Products] owning seller can create DRAFT product
  ✓ [Products] seller cannot directly mark product APPROVED
  ✓ [Products] other seller cannot update or delete product
  ✓ [Categories] public can read categories, only admin can write
  ✓ [Carts] user can read and write own cart, other users denied
  ✓ [Orders] client direct write is strictly blocked
  ✓ [Orders] buyer and seller can read their own order, unauthorized denied
  ✓ [Payments] buyer can read own payment record; client write denied
  ✓ [PayoutHolds] seller can read own hold; client write denied
  ✓ [Payouts] seller can read own payouts; client write denied
  ✓ [Deliveries] rider and seller can read assigned delivery; client write denied
  ✓ [Couriers] seller can read own couriers; client direct write denied
  ✓ [Hubs] public can read hubs; only admin can write
  ✓ [Returns and Disputes] parties can read; direct client write denied
  ✓ [Reviews] public can read reviews; client direct write denied
  ✓ [Notifications] recipient can read and update read flag; create/delete denied
  ✓ [AuditLog] admin can read; client direct write strictly denied
---------------------------------------------------------
Firestore Rules Test Suite: 26 passed, 0 failed (Total: 26)
---------------------------------------------------------
```

### F. Live Emulator Seed + End-to-End API Verification
Command: `npx firebase emulators:exec --project demo-swiftcart-uganda --only auth,firestore "npx tsx scripts/seed-emulator.ts && npx tsx scripts/verify-b2-emulator.ts"`
```
--- Starting SwiftCart Emulator Seeding ---
  ✓ User superadmin@swiftcart.ug (super-admin) seeded.
  ✓ User admin@swiftcart.ug (admin) seeded.
  ✓ User seller@swiftcart.ug (seller) seeded.
  ✓ User rider@swiftcart.ug (rider) seeded.
  ✓ User hub@swiftcart.ug (hub) seeded.
  ✓ User buyer@swiftcart.ug (buyer) seeded.
  ✓ Categories seeded (7).
  ✓ Sellers seeded (6).
  ✓ Products seeded (8).
  ✓ Pickup stations seeded (7).
  ✓ Reviews seeded (4).
--- Emulator Seeding Complete ---

=== STAGE B2 END-TO-END EMULATOR VERIFICATION ===

Express test server listening at http://127.0.0.1:59505
1. Auth tokens issued for buyer, rider, admin
2. Checkout Order 1 (O9OOR2R1XAtEVqUo5g0Z): status=201, totalUGX=385000, tracking=trk-emu-1-1794980155721
3. Pesapal IPN Order 1: status=200, resolvedOrder=O9OOR2R1XAtEVqUo5g0Z, orderStatus=PAID
4. Dispatch Order 1: status=201, deliveryId=NtIUxgbC1uRoyE6knjEp
5. Wrong delivery code 5 attempts: [{"attempt":1,"status":400,"code":"OTP_INVALID"},{"attempt":2,"status":400,"code":"OTP_INVALID"},{"attempt":3,"status":400,"code":"OTP_INVALID"},{"attempt":4,"status":400,"code":"OTP_INVALID"},{"attempt":5,"status":423,"code":"OTP_LOCKED"}]
6. Delivery code unlock + valid verify: status=200, order1.status=DELIVERED
7a. Mismatch IPN check: verificationStatus=MISMATCH, order2.status=PENDING_PAYMENT
7b. Return request on Order 2: status=201, returnId=Mtf9S941dluC4oF1Jwnz, holdStatus=DISPUTED
8. Payout hold release: releasedCount=1, holdStatus=RELEASED, payoutId=DycM6o68EwG2yQxCRY8G, netAmountUGX=342000

=== ALL STAGE B2 EMULATOR CHECKS PASSED ===
```

---

## 3. What Remains Open (External Credentials / Later Stages)

1. `VITE_DATA_SOURCE=mock` remains the default in the UI until the integration switchover stage.
2. Seller/admin repository implementations (`sellerOrders`, `sellerProducts`, `sellerWallet`, etc.) remain mock-backed until their backend migration stage.
3. Live **Pesapal** and **Uganda SMS** credentials require external business registration — see [PESAPAL-GO-LIVE.md](./PESAPAL-GO-LIVE.md) and [OPEN-QUESTIONS.md](./OPEN-QUESTIONS.md).

---

## 4. Manual Developer Steps

1. Follow [PESAPAL-GO-LIVE.md](./PESAPAL-GO-LIVE.md) to create a Pesapal sandbox merchant, store `PESAPAL_CONSUMER_KEY` / `PESAPAL_CONSUMER_SECRET` in Firebase secrets, register `/api/payments/ipn`, verify sandbox payments, and promote to live.
2. Assign initial `super-admin` custom claim via `npx tsx scripts/set-super-admin-claim.ts <uid>` once the live Firebase project is active.
