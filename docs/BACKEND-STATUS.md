# SwiftCart Backend Status Report (Stage B1)

**Date**: 2026-11-18  
**Branch**: `backend`  
**Data Mode**: Mock (`VITE_DATA_SOURCE=mock`) by default; toggleable to `firebase`.

---

## 1. What Was Built & Ported

### A. Firebase & Infrastructure Layout
- `firebase.json`: Configured with Cloud Functions v2 (`nodejs22`), Firestore rules & indexes, Cloud Storage rules, security headers (CSP, nosniff, frame denial), and local emulator suite (Auth 9099, Firestore 8080, Storage 9199, Functions 5001, Hub 4400).
- `firestore.rules`: 17 collections secured with granular role checks (`buyer`, `seller`, `rider`, `hub`, `admin`, `super-admin`). Monetary, payout hold, and state transition fields are strictly protected against client tampering.
- `storage.rules`: Scoped storage paths with mime-type checks and 10MB size limits.
- `firestore.indexes.json`: Composite indexes for orders, dispatches, payout holds, and catalog queries.
- `functions/`: Cloud Functions 2nd Gen setup exporting Express HTTP REST API (`api`) and scheduled hourly payout hold release job (`scheduledPayoutHoldRelease`). Bundled via `esbuild`.

### B. Core Server Modules (`server/core/`)
- `firebaseAdmin.ts`: Firebase Admin SDK initialized for server and emulator contexts.
- `errors.ts`: `AppError` class and centralized Express error handler with standardized JSON output.
- `validation.ts`: Zod schema validation middleware for request bodies, queries, and params.
- `authMiddleware.ts`: Zero-bypass Firebase ID token validation and custom claims normalization.
- `rateLimiter.ts`: IP-based tiered rate limiting (`standardRateLimiter`, `sensitiveRateLimiter`, `publicRateLimiter`).
- `logger.ts`: Structured JSON logger with automatic PII masking (phone numbers, secrets).
- `audit.ts`: Immutable audit logging to `auditLog` Firestore collection.
- `stateMachines.ts`: Transition validation across all 8 status domains (`ORDER_STATUS`, `PAYMENT_STATUS`, `PAYMENT_HOLD_STATUS`, `DISPATCH_STATUS`, `RETURN_STATUS`, `SELLER_STATUS`, `PRODUCT_STATUS`, `PAYOUT_STATUS`).
- `deliverySecurity.ts`: Cryptographic 6-digit handover OTP generation, SHA-256 + salt hashing, timing-safe verification, expiry, 5-attempt lockout, and Admin unlock/reissue.
- `pesapal.ts`: Official Pesapal 3.0 API client (`RequestToken`, `RegisterIPN`, `SubmitOrderRequest`, `GetTransactionStatus`, `RefundRequest`).
- `notifications.ts`: Modular notification provider interface with `ConsoleNotificationProvider` for local dev/testing, with 6 lifecycle notification templates.
- `payouts.ts`: Vendor payout holds management, automated eligibility checking after return window, and Admin maker-checker payout approvals with `ManualPayoutProvider`.
- `checkout.ts`: Server-side price recalculation from Firestore products, sub-orders creation, delivery fee calculation, and Pesapal order submission.
- `payments.ts`: Idempotent Pesapal IPN callback handler with authoritative status verification, polling endpoint, and refund handler.
- `couriersHubs.ts`: Courier listing/creation, hub listing, dispatch generation, buyer delivery code display, and rider code verification.
- `returnsDisputes.ts`: Customer return requests, seller/admin return reviews, and dispute creation with payout hold freezing.
- `server/app.ts`: Complete Express server wiring with CORS allowlist, security headers, rate limits, routes, and error handling.
- `server/dev.ts`: Local backend runner listening on port 3001.

### C. Client Firestore Repositories (`src/data/firestore/`)
Matching domain repository interfaces, activated when `VITE_DATA_SOURCE=firebase`:
- `firestoreCatalog.repository.ts` (implements `CatalogRepository`)
- `firestoreCart.repository.ts` (implements `CartRepository`)
- `firestoreWishlist.repository.ts` (implements `WishlistRepository`)
- `firestoreOrders.repository.ts` (implements `OrdersRepository`)
- `firestoreAccount.repository.ts` (implements `AccountRepository`)
- `firestoreAuth.repository.ts` (implements `AuthRepository`)

### D. Tooling & Scripts
- `scripts/set-super-admin-claim.ts`: CLI utility to grant `super-admin` claim to any Firebase user.
- `scripts/test-rules.ts`: Automated rules test suite using `@firebase/rules-unit-testing`.
- `scripts/seed-emulator.ts`: Automated emulator seed script populating 6 test role users, 7 categories, 6 sellers, 8 products, 7 pickup stations, and 4 reviews.

---

## 2. Test Verification & Real Outputs

### A. ESLint Verification (`npm run lint`)
```
> swiftcart-uganda@0.1.0 lint
> eslint .

✖ 34 problems (0 errors, 34 warnings)
```
*Result: 0 errors.*

### B. TypeScript Typecheck (`npm run typecheck`)
```
> swiftcart-uganda@0.1.0 typecheck
> tsc --noEmit
```
*Result: 0 errors.*

### C. Vitest Test Suite (`npx vitest run`)
```
 RUN  v2.1.9 C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem

 ✓ tests/backend/state-machines.test.ts (16 tests) 22ms
 ✓ tests/backend/pesapal.test.ts (6 tests) 38ms
 ✓ tests/banned-copy.test.ts (1 test) 4163ms
 ✓ tests/buyer-storefront.test.tsx (14 tests) 2057ms
 ✓ tests/backend/api-routes.test.ts (12 tests) 488ms
 ✓ tests/components-smoke.test.tsx (12 tests) 536ms
 ✓ tests/backend/delivery-security.test.ts (6 tests) 1265ms
 ✓ tests/stage2-security-codes.test.ts (2 tests) 1055ms
 ✓ tests/stage2-checkout-orders.test.tsx (6 tests) 1164ms
 ✓ tests/banner-responsive.test.tsx (4 tests) 1059ms
 ✓ tests/placeholders.test.ts (2 tests) 3314ms
 ✓ tests/icons.test.ts (2 tests) 1460ms
 ✓ tests/bundle-size.test.ts (1 test) 1100ms
 ✓ tests/no-classname-comments.test.ts (1 test) 3462ms
 ✓ tests/encoding.test.ts (1 test) 2392ms
 ✓ tests/routes-smoke.test.tsx (3 tests) 6161ms
 ✓ tests/dev-ui-gate.test.tsx (1 test) 192ms
 ✓ tests/seller-dashboard.test.tsx (5 tests) 8295ms

 Test Files  20 passed (20)
      Tests  99 passed (99)
```
*Result: 20 test files passed, 99 tests passed, 0 failures.*

### D. Firestore Rules Emulator Tests (`scripts/test-rules.ts`)
```
i  emulators: Starting emulators: firestore
Initializing Firestore Rules Test Environment...
  ✓ [Users] buyer can read and write own profile
  ✓ [Users] buyer cannot update role or status
  ✓ [Users] buyer cannot read another user profile
  ✓ [Users] admin can read any user profile
  ✓ [Products] anyone can read active products
  ✓ [Products] seller can create and update own products
  ✓ [Products] seller cannot update another seller product
  ✓ [Products] seller cannot self-verify a product
  ✓ [Orders] buyer can read own orders
  ✓ [Orders] seller can read orders containing their sellerId
  ✓ [Orders] buyer cannot read another buyer order
  ✓ [Orders] buyer cannot directly update paymentStatus or paymentHoldStatus
  ✓ [Deliveries] rider assigned to delivery can read delivery record
  ✓ [Deliveries] unassigned rider cannot read delivery record
  ✓ [Deliveries] rider cannot directly modify status or secret hashes
  ✓ [PayoutHolds] regular user direct read is denied
  ✓ [PayoutHolds] client direct create/update is strictly denied
  ✓ [PayoutHolds] admin can read payout holds
  ✓ [Payouts] admin can read and update payouts
  ✓ [Payouts] regular seller cannot read global payouts collection
  ✓ [ReturnRequests] buyer can create return request for own order
  ✓ [ReturnRequests] buyer cannot create return for another buyer order
  ✓ [Disputes] buyer can create dispute for own order
  ✓ [AuditLog] admin can read; client direct write strictly denied

---------------------------------------------------------
Firestore Rules Test Suite: 26 passed, 0 failed (Total: 26)
---------------------------------------------------------
+  Script exited successfully (code 0)
```
*Result: 26 rules tests passed in live emulator.*

### E. Emulator Seeding Test (`scripts/seed-emulator.ts`)
```
--- Starting SwiftCart Emulator Seeding ---
Seeding Auth users and custom claims...
  ✓ User superadmin@swiftcart.ug (super-admin) seeded.
  ✓ User admin@swiftcart.ug (admin) seeded.
  ✓ User seller@swiftcart.ug (seller) seeded.
  ✓ User rider@swiftcart.ug (rider) seeded.
  ✓ User hub@swiftcart.ug (hub) seeded.
  ✓ User buyer@swiftcart.ug (buyer) seeded.
Seeding 7 categories...
  ✓ Categories seeded.
Seeding 6 sellers...
  ✓ Sellers seeded.
Seeding 8 products...
  ✓ Products seeded.
Seeding 7 pickup stations...
  ✓ Pickup stations seeded.
Seeding 4 reviews...
  ✓ Reviews seeded.
--- Emulator Seeding Complete ---
+  Script exited successfully (code 0)
```
*Result: 6 users, 7 categories, 6 sellers, 8 products, 7 pickup stations, 4 reviews seeded.*

### F. Production Web Build (`npm run build`)
```
> swiftcart-uganda@0.1.0 build
> tsc --noEmit && vite build

vite v6.4.6 building for production...
✓ 791 modules transformed.
✓ built in 1m 17s
```
*Result: Clean production web bundle.*

### G. Cloud Functions Build (`npm --prefix functions run build`)
```
> swiftcart-functions@1.0.0 build
> esbuild src/index.ts --bundle --platform=node --target=node22 --outfile=dist/index.js --packages=external

  dist\index.js  72.9kb
Done in 391ms
```
*Result: Clean Cloud Functions bundle.*

---

## 3. What is NOT Done (Awaiting Subsequent Stages or External Credentials)

1. **Front-End Default**: `VITE_DATA_SOURCE=mock` remains active by default as requested. Flipping to `firebase` will occur in the next integration stage.
2. **Seller / Admin Dashboard Firestore Repos**: Buyer repos are complete in `src/data/firestore/`; seller dashboard repository classes (`sellerOrders`, `sellerProducts`, `sellerWallet`, etc.) currently use mock stores until the seller portal migration stage.
3. **External Provider Production Credentials**:
   - Live Pesapal Consumer Key / Consumer Secret and registered IPN ID.
   - Live Africa's Talking / EgoSMS API Key and UCC-approved Sender ID.
   - Live Firebase production project creation and deployment.

---

## 4. Manual Developer Actions (Cannot Be Automated)

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/) and create `swiftcart-uganda`.
   - Upgrade to the Blaze (Pay-as-you-go) plan to enable Cloud Functions and Secret Manager.
2. **Register Pesapal Sandbox / Live**:
   - Follow instructions in `docs/PESAPAL-SANDBOX-TEST.md`.
   - Register IPN webhook URL and obtain `PESAPAL_IPN_ID`.
3. **Register Uganda SMS Provider**:
   - Create account on Africa's Talking Uganda or EgoSMS.
   - Submit business documentation to telecom operators for custom alphanumeric sender ID (`SWIFTCART`).
4. **Deploy Security Rules & Functions**:
   ```bash
   firebase deploy --only firestore:rules,storage,functions
   ```
5. **Set Production Secrets**:
   ```bash
   firebase functions:secrets:set PESAPAL_CONSUMER_KEY
   firebase functions:secrets:set PESAPAL_CONSUMER_SECRET
   firebase functions:secrets:set PESAPAL_IPN_ID
   ```
6. **Assign Initial Super-Admin Claim**:
   ```bash
   npx tsx scripts/set-super-admin-claim.ts <initial-superadmin-uid>
   ```
