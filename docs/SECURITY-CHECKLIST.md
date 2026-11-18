# SwiftCart Security Checklist & Production Hardening Audit

This document serves as the security compliance verification for the SwiftCart backend and production infrastructure.

---

## 1. Secrets Scan & Key Hygiene
- [x] **Zero Hard-Coded Secrets**: Scanned repository files and full `main..backend` git diff history for real Firebase API keys (`AIzaSy...`), PEM private keys, AWS keys, GitHub/Slack tokens, and merchant secrets (`0` hits found).
- [x] **Environment Variable Template**: `.env.example` provides explicit variable definitions with blank or non-sensitive sample values.
- [x] **Secret Storage in Production**: Production credentials must be stored exclusively in Google Cloud Secret Manager or Firebase Secrets (`firebase functions:secrets:set PESAPAL_CONSUMER_KEY`, etc.). See [PESAPAL-GO-LIVE.md](./PESAPAL-GO-LIVE.md).

---

## 1A. Tamper-Proof Payment Verification & Refund Controls (Stage B2)
- [x] **Firestore-Only Order Resolution**: Pesapal IPN (`/api/payments/ipn`) completely ignores `OrderMerchantReference` in the HTTP request and resolves orders exclusively via the `pesapalOrderTrackingId` (`paymentTracking` index / `orders` query) stored at checkout. Unknown tracking IDs return `200 ACKNOWLEDGED` with zero database writes.
- [x] **3-Point Integrity Assertion**: Both IPN reconciliation and status polling (`/api/payments/status/:orderId`) enforce `statusResult.merchantReference === orderId`, `currency === 'UGX'`, and integer `statusResult.amount === order.totalUGX`. Mismatches mark payment `MISMATCH`, keep the order unpaid, alert admins (`ADMIN_ALERT`), and write `PAYMENT_VERIFICATION_MISMATCH` to `auditLog`.
- [x] **Atomic Idempotency**: Order and payment state updates execute inside a single `dbAdmin.runTransaction`; duplicate `COMPLETED` callbacks change nothing and `FAILED`/`PENDING` callbacks cannot move a `PAID` order backward.
- [x] **Protected Refunds**: `/api/orders/:orderId/refund` requires Firebase authentication, restricts calls to the purchasing buyer (`order.buyerId === req.user.uid`) or `admin`/`super-admin`, requires `PAID` status, caps refund amount as an integer `<= paidAmountUGX`, and acquires an atomic `REFUND_PENDING` lock to block double refunds.

---

## 2. Firebase API Key Restrictions (Google Cloud Console)
Firebase Web API keys (`apiKey` in client configuration) are technically public identifiers. However, they must be restricted in Google Cloud Console to prevent misuse:
- **Application Restriction**: Restrict key usage to **HTTP referrers**:
  - `https://swiftcart.ug/*`
  - `https://*.swiftcart.ug/*`
  - Authorized development domains (e.g. `localhost:5173/*` for dev keys).
- **API Restrictions**: Restrict the key to only required Google APIs:
  - Identity Toolkit API (Firebase Authentication)
  - Cloud Firestore API
  - Cloud Storage for Firebase API
  - Firebase App Check API

---

## 3. Content Security Policy (CSP) & Security Headers
Configured in `firebase.json` for all static hosting assets and in `server/app.ts` for Express API endpoints:
- `X-Content-Type-Options: nosniff` (Prevents MIME sniffing attacks)
- `X-Frame-Options: DENY` (Mitigates clickjacking)
- `Referrer-Policy: strict-origin-when-cross-origin` (Protects user navigation privacy)
- **Content Security Policy (CSP)**:
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-inline' https://apis.google.com https://*.firebaseapp.com`
  - `connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://cybqa.pesapal.com https://pay.pesapal.com`
  - `img-src 'self' data: https: blob:`
  - `frame-ancestors 'none'`

---

## 4. Firebase App Check Plan
For production launch, Firebase App Check must be enabled to prevent billing abuse, bot scrapers, and unauthorized API traffic:
- **Web Clients**: Register site key with **reCAPTCHA Enterprise** or **reCAPTCHA v3**.
- **Enforcement Mode**:
  - Enable monitoring mode initially to verify legitimate client attestation.
  - Transition Firestore, Cloud Storage, and Cloud Functions to **Enforce** mode once attestation rate reaches >99%.

---

## 5. Input Validation & Data Sanitization
- [x] **Zod Schema Validation**: All incoming requests to endpoints (`/api/checkout`, `/api/deliveries/*`, `/api/returns/*`, `/api/couriers`, etc.) are validated using strict Zod schemas.
- [x] **Strict Stripping**: Unknown or malicious fields are stripped automatically.
- [x] **Standardized Error Formatting**: Validation failures return a consistent JSON payload (`{ success: false, error: { code: 'VALIDATION_ERROR', message: '...', details: [...] } }`) without exposing server stack traces.

---

## 6. Rate Limiting
Configured using `express-rate-limit` with IP-based throttling in `server/core/rateLimiter.ts`:
- **Standard Endpoints**: 100 requests per 15-minute window.
- **Sensitive Endpoints** (OTP generation, delivery code verification, admin unlock): 10 requests per 15-minute window.
- **Public Polling Endpoints** (payment status check, hubs list): 60 requests per minute.
- **Delivery Code Lockout**: 5 consecutive failed attempts lock the delivery immediately, requiring manual Admin intervention.

---

## 7. Audit Logging
- [x] **Immutable Audit Trail**: All privileged and financial actions are written to the `auditLog` Firestore collection via `server/core/audit.ts`.
- [x] **Tracked Events**:
  - Payout hold releases and approvals
  - Delivery code unlocks and overrides
  - Dispute status changes and resolution
  - Refund issuances
  - Custom claim grants (Super-Admin CLI)
- [x] **PII Scrubbing**: Log outputs mask phone numbers (e.g. `+256***1234`) and exclude customer secrets.

---

## 8. Least-Privilege IAM & Cloud Functions
The Cloud Functions runtime service account (`swiftcart-uganda@appspot.gserviceaccount.com`) should only have the minimal IAM roles:
- `Cloud Datastore User` (Firestore read/write)
- `Storage Object Admin` (Cloud Storage operations)
- `Secret Manager Secret Accessor` (Reading Pesapal keys)
- **Prohibited**: Do NOT grant `Project Owner` or `Project Editor` to the runtime service account.

---

## 9. Dependency Vulnerability Audit (`pnpm audit`)
- **Execution Date**: 2026-11-18
- **Results**: 22 vulnerabilities found (2 low | 14 moderate | 3 high | 3 critical).
- **Analysis**:
  - The critical and high vulnerabilities originate strictly from dev-only dependencies: `vitest` / `tinypool` prototype pollution in test worker threads and Vite dev-server HMR middleware.
  - Production runtime dependencies (`express`, `zod`, `firebase-admin`, `firebase-functions`, `express-rate-limit`) have zero critical vulnerabilities.
- **Remediation**:
  - Keep test runner isolated in local and CI environments.
  - Upgrade `vitest` to `>=3.2.6` once Vite 6 peer dependency is updated in upstream plugin ecosystem.

---

## 10. Manual Developer Tasks (Cannot Be Automated)

1. **Pesapal Production Merchant Onboarding**:
   - Register commercial entity with Pesapal Uganda.
   - Execute B2C Openfloat float agreement for mobile money disbursements.
   - Obtain live Consumer Key, Consumer Secret, and register production IPN URL.
2. **UCC Alphanumeric Sender ID Registration**:
   - Submit Certificate of Incorporation and SwiftCart branding documents to Africa's Talking / MTN / Airtel Uganda for sender ID approval (`SWIFTCART`).
3. **Google Cloud Console Restrictions**:
   - Apply HTTP referrer restriction to Firebase Web API keys.
   - Configure billing alerts on Google Cloud project.
4. **Initial Super-Admin Grant**:
   - Run `npx tsx scripts/set-super-admin-claim.ts <admin-uid>` against the live Firebase project once the initial owner account is registered.
