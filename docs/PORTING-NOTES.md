# SwiftCart Backend Porting Notes & Architecture Audit

This document records the exact changes, ported modules, dropped legacy code, and security improvements implemented during Stage B1 from `../swiftCart-old` to the clean repository architecture.

---

## 1. Ported Modules & Core Files

| Old Path (`../swiftCart-old`) | New Path | Port Status | Notes & Changes |
| :--- | :--- | :--- | :--- |
| `server/core/stateMachines.ts` | `server/core/stateMachines.ts` | **Ported & Enhanced** | Retained state transition validation for 8 domains; updated escrow status to `paymentHoldStatus`. |
| `server/core/deliverySecurity.ts` | `server/core/deliverySecurity.ts` | **Ported & Hardened** | Cryptographic 6-digit OTP generation, SHA-256 + salt hashing, timing-safe equality, 5-attempt lockout, replay guard, and admin unlock. |
| `server/core/pesapal.ts` | `server/core/pesapal.ts` | **Ported & Verified** | Strictly aligned with Pesapal 3.0 specs: token management, IPN registration, order submission, transaction status check, and refunds. |
| `server/core/notifications.ts` | `server/core/notifications.ts` | **Ported & Cleaned** | Modular notification provider interface with `ConsoleNotificationProvider` for dev/emulator, plus lifecycle templates. |
| `shared/statuses.ts` | `shared/statuses.ts` | **Ported & Cleaned** | Escrow statuses replaced with payment hold statuses (`HELD`, `RELEASE_ELIGIBLE`, `RELEASED`, `REFUNDED`, `DISPUTED`). |
| `functions/src/index.ts` | `functions/src/index.ts` | **Rewritten (v2)** | Upgraded to Firebase Cloud Functions 2nd Gen with Express REST API and scheduled payout hold release cron. |
| `firestore.rules` | `firestore.rules` | **Rewritten & Verified** | 17 collection match rules. Prohibits client modification of monetary/payout/status fields. 26 rules tests passing in emulator. |
| `storage.rules` | `storage.rules` | **Rewritten** | Enforces user-scoped storage paths, size limits, and content-type validation. |

---

## 2. Key Architecture & Business Logic Changes

### A. Escrow → Payout Hold Architecture
- **Old System**: Used legacy "escrow" terminology and escrow accounts implying banking/financial custodianship.
- **New Architecture**:
  - All buyer funds flow directly through **Pesapal** as the licensed payment service provider.
  - SwiftCart maintains internal **payout holds** (`paymentHoldStatus: HELD`).
  - Upon buyer confirming delivery via the 6-digit handover code, the delivery is marked `DELIVERED` and an automated return window (default 3 days) begins.
  - When the return window elapses without return request or dispute, the hold transitions to `RELEASE_ELIGIBLE`.
  - Admin/Super-Admin approves payout to vendor via Mobile Money (Pesapal Openfloat or manual payout provider).

### B. Security Removals (Zero-Bypass Policy)
- **Removed `dev-mock-<uid>` Token Bypass**:
  - In `../swiftCart-old`, the auth middleware accepted fake Authorization headers like `Bearer dev-mock-admin-uid` to bypass Firebase Auth checks.
  - **Status**: **Completely removed**. All requests must present a cryptographically verified Firebase ID token issued by Firebase Auth or the local Auth emulator. No bypass tokens exist in any environment.
- **Removed Fake Phone Code / Stub Onboarding**:
  - In `../swiftCart-old`, phone verification had hard-coded test code bypasses.
  - **Status**: **Removed**. All phone verification requires genuine Firebase phone authentication or 6-digit OTP validation against securely salted hashes.
- **Removed `PAYMENTS_MODE` Mismatch**:
  - In `../swiftCart-old`, conflicting environment flags (`PAYMENTS_MODE=mock` vs `PESAPAL_SANDBOX=true`) caused erratic behavior where payments would bypass the Pesapal client.
  - **Status**: Resolved. Unified under `PESAPAL_ENVIRONMENT=sandbox|production` with clean dependency injection.

---

## 3. Dropped Legacy Items

1. **Legacy Escrow Ledger Collections**: Dropped `escrowLedgers` and `escrowAccounts` in favor of `payoutHolds` and `payouts`.
2. **Insecure In-Memory User Bypasses**: Dropped mock user impersonation routes.
3. **Hard-Coded Secrets**: Scanned and purged all hard-coded merchant credentials and keys found in previous prototypes.
