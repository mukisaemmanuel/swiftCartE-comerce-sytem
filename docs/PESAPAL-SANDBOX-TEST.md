# Pesapal 3.0 Sandbox Testing Guide (Uganda)

This guide documents end-to-end testing of payments on SwiftCart Uganda using Pesapal API v3.0 Sandbox.

---

## 1. Pesapal Sandbox Merchant Account Setup

1. **Visit Sandbox Registration**: Navigate to [https://cybqa.pesapal.com/](https://cybqa.pesapal.com/).
2. **Register a Test Account**:
   - Provide email, business name (e.g. `SwiftCart Test Store`), country: **Uganda**, and currency: **UGX**.
   - Verify your test account via confirmation email.
3. **Retrieve API Credentials**:
   - Log into the Cybqa dashboard.
   - Navigate to **Settings** > **API Credentials**.
   - Copy your **Consumer Key** and **Consumer Secret**.

---

## 2. Environment Configuration

Add the sandbox credentials to your local `.env` and `functions/.env`:

```bash
# Pesapal Configuration
PESAPAL_ENVIRONMENT=sandbox
PESAPAL_CONSUMER_KEY=your_sandbox_consumer_key_here
PESAPAL_CONSUMER_SECRET=your_sandbox_consumer_secret_here
PESAPAL_IPN_ID=your_registered_ipn_id_here
PESAPAL_BASE_URL=https://cybqa.pesapal.com/pesapalv3
PESAPAL_CALLBACK_URL=http://localhost:5173/checkout/complete
```

---

## 3. IPN (Instant Payment Notification) Registration

Pesapal v3 requires each IPN callback URL to be registered once via the API to receive an `ipn_id`.

### Programmatic Registration

When the server initializes or using a test script, register your webhook URL:

```bash
# Registering IPN via curl against Pesapal Sandbox (after obtaining auth token)
curl -X POST "https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN" \
  -H "Authorization: Bearer <AUTH_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-public-ngrok-or-cloud-run-domain.com/api/payments/ipn",
    "ipn_notification_type": "POST"
  }'
```

The response will return:
```json
{
  "url": "https://...",
  "created_date": "2026-11-18T...",
  "ipn_id": "e44d5010-3b1e-44e9-92e1-400d1039fea0",
  "status": "200"
}
```

Copy the returned `ipn_id` into your `PESAPAL_IPN_ID` environment variable.

For local development webhooks, expose your local backend (port 3001) using Ngrok:
```bash
ngrok http 3001
# Use: https://<your-subdomain>.ngrok-free.app/api/payments/ipn
```

---

## 4. Simulating Payments in Uganda

Pesapal provides simulated payment instruments in Cybqa:

### A. MTN Mobile Money (Uganda)
- **Phone Number Format**: `077XXXXXXX` or `078XXXXXXX`
- **Simulation**: In the Cybqa iframe, select **MTN Mobile Money**, enter the test number, click **Pay Now**.
- On the Cybqa simulation screen, select **Approve Payment** to simulate successful USSD PIN approval, or **Decline** to test payment cancellation.

### B. Airtel Money (Uganda)
- **Phone Number Format**: `070XXXXXXX` or `075XXXXXXX`
- **Simulation**: Select **Airtel Money**, enter the test number, click **Pay Now**.
- Select **Approve** on the mock prompt.

### C. Visa / MasterCard Test Cards
- **Card Number**: `4012 0000 0000 0000` (Visa) or `5105 1051 0510 5100` (MasterCard)
- **Expiry**: Any future date (e.g. `12/28`)
- **CVV**: `123`
- **3D Secure OTP**: Enter test OTP `123456` when prompted.

---

## 5. Webhook & State Verification

When a transaction is approved or rejected in the sandbox:
1. Pesapal calls your backend: `POST /api/payments/ipn?OrderTrackingId=...&OrderMerchantReference=...`.
2. SwiftCart queries `GET /api/Transactions/GetTransactionStatus?orderTrackingId=...` directly to Pesapal using basic auth token to prevent spoofed callbacks.
3. Upon confirming `COMPLETED` (`status_code: 1`):
   - Order `paymentStatus` transitions to `PAID`.
   - Order `status` transitions to `PAID`.
   - Sub-orders transition to `PAID`.
   - `paymentHoldStatus` set to `HELD` (held until delivery confirmation).
   - In-app and SMS notifications triggered to buyer and vendor.
4. Response to Pesapal returns:
   ```json
   {
     "orderNotificationType": "IPN",
     "orderTrackingId": "...",
     "orderMerchantReference": "...",
     "status": 200
   }
   ```

---

## 6. Testing Failure and Timeout Scenarios

- **Declined PIN / Insufficient Balance**:
  - In Cybqa simulation, click **Decline**.
  - Assert backend records `PAYMENT_STATUS = FAILED`.
  - Assert order is marked `FAILED` with retry option for buyer.
- **Timeout / No IPN Callback**:
  - SwiftCart includes client status polling: `GET /api/payments/status/:orderId`.
  - The status polling endpoint queries Pesapal authoritative status as a fallback when IPN callbacks are delayed by network jitter.
