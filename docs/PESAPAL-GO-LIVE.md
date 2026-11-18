# Pesapal Go-Live Runbook (SwiftCart Uganda)

Follow these exact steps to take SwiftCart Uganda from local sandbox development to live mobile money & card production payments via **Pesapal API v3.0**.

---

## Step 1: Create Your Pesapal Sandbox Merchant Account

1. Go to the Pesapal v3 Sandbox portal: [https://cybqa.pesapal.com/](https://cybqa.pesapal.com/) (or [https://developer.pesapal.com/](https://developer.pesapal.com/)).
2. Register a sandbox merchant account with:
   - **Country**: `Uganda`
   - **Currency**: `UGX`
   - **Business Name**: e.g. `SwiftCart Uganda Sandbox`
3. Log in to the sandbox merchant dashboard and open **Settings -> API Credentials** (or **Integrations -> API v3**).
4. Copy your sandbox **Consumer Key** and **Consumer Secret** (never commit these to git or paste them into source files).

---

## Step 2: Store Consumer Key & Consumer Secret in Firebase Secret Manager

Store secrets directly in Google Cloud Secret Manager via the Firebase CLI (referenced by `functions/src/index.ts` via `defineSecret`):

```bash
# Authenticate and select your Firebase project
firebase login
firebase use <your-firebase-project-id>

# Set sandbox credentials (you will be prompted interactively for the value)
firebase functions:secrets:set PESAPAL_CONSUMER_KEY
firebase functions:secrets:set PESAPAL_CONSUMER_SECRET
```

For local emulator testing without deploying to Cloud Functions, place them only in git-ignored `functions/.secret.local` and `.env`:

```bash
# .env and functions/.secret.local (NEVER commit either file)
PESAPAL_ENV=sandbox
PESAPAL_CONSUMER_KEY=your_sandbox_consumer_key
PESAPAL_CONSUMER_SECRET=your_sandbox_consumer_secret
PESAPAL_IPN_ID=your_registered_sandbox_ipn_id
```

---

## Step 3: Deploy the API Endpoint & Register the IPN URL

Pesapal v3 requires each Instant Payment Notification (IPN) listener URL to be pre-registered to obtain a `PESAPAL_IPN_ID`.

### 3a. Deploy Cloud Functions + Hosting (so `/api/payments/ipn` is reachable over HTTPS)

```bash
cd functions && pnpm install && pnpm build && cd ..
firebase deploy --only functions,firestore:rules,storage
```

Your public IPN URL will be:
- Firebase Hosting domain: `https://<your-domain>/api/payments/ipn`
- Or Cloud Function URL: `https://<region>-<project-id>.cloudfunctions.net/api/api/payments/ipn`

### 3b. Request a Sandbox Auth Token and Register the IPN URL

1. Authenticate with your Consumer Key & Secret:

```bash
curl -X POST "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "consumer_key": "<YOUR_SANDBOX_CONSUMER_KEY>",
    "consumer_secret": "<YOUR_SANDBOX_CONSUMER_SECRET>"
  }'
```

2. Use the returned `token` to register your IPN callback URL:

```bash
curl -X POST "https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer <TOKEN_FROM_STEP_3b_1>" \
  -d '{
    "url": "https://<your-domain>/api/payments/ipn",
    "ipn_notification_type": "POST"
  }'
```

3. Copy the returned `ipn_id` UUID from the JSON response and save it in Firebase Secret Manager:

```bash
firebase functions:secrets:set PESAPAL_IPN_ID
# Paste the ipn_id UUID when prompted
```

---

## Step 4: Run the End-to-End Sandbox Test

1. Re-deploy functions so the `PESAPAL_IPN_ID` secret binding is active:
   ```bash
   firebase deploy --only functions
   ```
2. Set `PESAPAL_ENV=sandbox` in `functions/.env` (or Firebase runtime parameter `PESAPAL_ENV`) and set `VITE_DATA_SOURCE=firebase`.
3. Place a test checkout order via the storefront or `POST /api/checkout`:
   - Confirm the server calculates `totalUGX` from Firestore product prices (never trusting client totals).
   - Confirm you are redirected to `https://cybqa.pesapal.com/pesapalv3/...`.
4. Complete the simulated **MTN Mobile Money** (`077...`) or **Airtel Money** (`070...`) payment on Pesapal's sandbox checkout screen.
5. Verify in Firestore (`orders/{orderId}`, `payments/pay_{orderId}`, and `auditLog`):
   - `order.paymentStatus === "PAID"`
   - `order.status === "PAID"`
   - `auditLog` shows `PAYMENT_STATUS_UPDATED`
6. Test security edge cases:
   - Poll `GET /api/payments/status/{orderId}` and confirm it returns `PAID`.
   - Call `POST /api/payments/ipn` with an invalid or forged `OrderMerchantReference` and confirm only the `pesapalOrderTrackingId` stored in Firestore is used and any mismatch flags `MISMATCH` without marking any order `PAID`.

---

## Step 5: Switch to Live (Production)

Once sandbox checkout, IPN, status polling, and refunds pass:

1. Complete commercial KYB onboarding with **Pesapal Uganda** to activate your live merchant account at [https://pay.pesapal.com/](https://pay.pesapal.com/).
2. Obtain your **Live Consumer Key** and **Live Consumer Secret** from your live merchant dashboard (`pay.pesapal.com/v3` base URL).
3. Register your **production IPN URL** against the live auth & IPN endpoints:
   - Auth URL: `https://pay.pesapal.com/v3/api/Auth/RequestToken`
   - RegisterIPN URL: `https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN`
4. Overwrite the Firebase secrets with live production values:
   ```bash
   firebase functions:secrets:set PESAPAL_CONSUMER_KEY
   firebase functions:secrets:set PESAPAL_CONSUMER_SECRET
   firebase functions:secrets:set PESAPAL_IPN_ID
   ```
5. Switch `PESAPAL_ENV` from `sandbox` to `live` in your Cloud Functions parameters / `functions/.env.<project-id>`, verify `APP_URL=https://swiftcart.ug`, and configure `ALLOWED_ORIGINS` with your exact production origins.
6. Verify CSP `connect-src` in `firebase.json` includes `https://pay.pesapal.com` (already configured) and redeploy:
   ```bash
   pnpm build
   cd functions && pnpm install && pnpm build && cd ..
   firebase deploy --only hosting,functions,firestore:rules,firestore:indexes,storage
   ```
7. Perform one live **UGX 1,000** smoke purchase via MTN/Airtel Mobile Money and verify `/api/payments/ipn`, `orders/{orderId}`, and audit logs before opening public traffic.
