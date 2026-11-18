# SwiftCart Uganda — Open Questions & Third-Party Technical Clarifications

This document outlines architectural decisions and outstanding questions regarding external integrations (disbursements and SMS notifications) in Uganda.

---

## 1. Pesapal B2C Disbursements (Openfloat)

### What is Documented by Pesapal
- **Service Name**: Pesapal Openfloat.
- **Functionality**: B2C (Business-to-Customer) bulk disbursements and single-recipient payouts to Mobile Money (MTN Mobile Money & Airtel Money Uganda) and Ugandan bank accounts via EFT.
- **Workflow**:
  1. Merchant registers a dedicated Openfloat account with Pesapal Uganda.
  2. Merchant pre-funds the float account via direct bank deposit or collection allocation.
  3. API-driven disbursement requests require Maker-Checker authorization (either programmatic or dashboard-approved).

### Outstanding Questions to Clarify with Pesapal Account Manager
1. **API Endpoints**: Does Pesapal v3 provide direct REST endpoints for triggering B2C mobile money payouts programmatically in Uganda without manual dashboard approval for verified sellers, or is dual authorization mandatory for every API batch?
2. **Transaction Fees**: What is the exact per-transaction tariff for B2C payouts to MTN vs Airtel Money in UGX (e.g. flat UGX 500–1,000 per transfer or percentage-based)?
3. **KYC & Regulatory Compliance**: Does Bank of Uganda require individual vendor national ID (NIN) submission alongside recipient mobile numbers for automated payouts over UGX 1,000,000?

---

## 2. Uganda SMS Gateways Comparison

Transactional SMS is critical for SwiftCart to notify buyers of their 6-digit delivery handover codes, out-for-delivery status, and order updates.

| Provider | Uganda Coverage | API & SDK Quality | Uganda Sender ID Process | Notes & Viability |
| :--- | :--- | :--- | :--- | :--- |
| **Africa's Talking** | Direct interconnect with MTN and Airtel Uganda | Highly mature REST API, official Node.js SDK, full sandbox environment | Requires UCC approval documentation submitted via AT portal (takes 1–2 weeks) | **Recommended Primary Provider**: established sandbox, reliable delivery reporting, developer documentation. |
| **EgoSMS / Pahappa Ltd** | Local Ugandan aggregator (Kampala) | JSON REST API (`https://comms.egosms.co/api/v1/json/`) | Fast local registration through local office in Kampala | **Viable Local Alternative / Secondary Fallback**: competitive bulk SMS pricing in UGX (approx UGX 25–35 per SMS). |
| **SMSOne Uganda** | Enterprise carrier direct | Enterprise SOAP / REST API | Managed carrier setup | Suited for high-volume enterprise contracts; heavier onboarding requirements. |

### Regulatory Requirement (Uganda Communications Commission - UCC)
- Under UCC guidelines, all transactional SMS with custom alphanumeric sender IDs (e.g. `SwiftCart`) must be registered with both MTN Uganda and Airtel Uganda to prevent spam filtering.
- Until a registered sender ID is approved, SMS will deliver from a shared shortcode or standard numeric pool.

### Next Steps for Implementation
1. Register developer account on Africa's Talking Uganda portal.
2. Implement Africa's Talking SMS driver in `server/core/notifications.ts` implementing `NotificationProvider`.
3. Provide fallback to EgoSMS if Africa's Talking experiences telecom route degradation.
