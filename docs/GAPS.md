# SwiftCart Technical & Feature Gaps

Features visible in UI mockups or storefront flows that require backend implementation, cloud infrastructure, or third-party integrations (to be implemented in later stages):

## 1. Live Rider GPS Tracking
- **Description:** Real-time boda rider position streaming on map interfaces during dispatch and delivery.
- **Requirement:** WebSocket / Server-Sent Events (SSE) or Firestore real-time listener paired with background rider mobile geolocation telemetry.
- **Current Front-end State:** Mocked delivery estimates, static district coordinates, and scheduled delivery times.

## 2. SMS and Push Notifications
- **Description:** Transactional SMS delivery for 6-digit delivery codes, payment confirmations, and order status milestone alerts across MTN Uganda and Airtel Uganda networks.
- **Requirement:** SMS provider: not chosen yet. Firebase Cloud Messaging (FCM) for web push service.
- **Current Front-end State:** In-app notification bell drawer and UI state banners.

## 3. Vouchers & Promotion Engine
- **Description:** Dynamic coupon verification, single-use validation, seller-subsidized vs. platform-subsidized discounts, minimum spend thresholds, and expiry enforcement.
- **Requirement:** Backend validation endpoint and coupon ledger database in Express/Firestore.
- **Current Front-end State:** Client-side mock repository supporting `SWIFT10` (10% off) and `FREESHIP` (UGX 5,000 off) with local state recalculation.

## 4. AI Photo & Description Helper
- **Description:** Automated merchant product description generation, category classification, and image background cleanup for Ugandan arcade stalls and merchants.
- **Requirement:** Gemini API multimodal vision and text generation endpoints hosted in Firebase Cloud Functions.
- **Current Front-end State:** Placeholder SVG images and mock product catalog.

## 5. Payments & Escrow Processing
- **Description:** Payments use Pesapal (MTN MoMo, Airtel Money, Visa/Mastercard); webhook and escrow handled by the backend ported from the previous project.
- **Requirement:** Pesapal API integration and webhook listeners hosted in Firebase Cloud Functions to lock and release escrow funds upon order completion.
- **Current Front-end State:** Payment protection copy ("Your payment is held safely by SwiftCart until you confirm delivery") and cart total breakdown in integer UGX.

## 6. Proximity-Based Boda Dispatch
- **Description:** Automated dispatch assignment matching nearby verified boda riders to vendor pickup locations across Kampala divisions, Entebbe, Mukono, and Jinja.
- **Requirement:** Geospatial routing engine and rider dispatch queue manager in Express backend.
- **Current Front-end State:** Fixed standard delivery fee of UGX 5,000 per vendor group.

## 7. 6-Digit Delivery Handover Code
- **Description:** 6-digit delivery authentication code shared by the buyer upon physical package receipt and entered by the rider to confirm delivery and trigger escrow release.
- **Requirement:** Secure cryptographically random code generation by the backend upon payment confirmation, with rate-limited verification.
- **Current Front-end State:** Marked as mock data in buyer order confirmation and order detail; never visible to riders, sellers, or admins.
