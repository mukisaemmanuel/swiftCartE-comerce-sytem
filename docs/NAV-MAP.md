# SwiftCart Mobile Navigation Map

This document establishes the single, unified navigation architecture for each operational dashboard role (**Seller**, **Admin**, **Super-Admin**, **Rider**, and **Hub**).
All menu labels, icons, and structures are derived directly from the most complete Stitch phone mockups.

---

## 1. Seller Dashboard (`role: "seller"`)

### Primary Navigation Architecture
- **Header Top Bar**: SwiftCart Brand Icon, Role Title ("Seller Operations"), Sun/Moon Theme Toggle, Hamburger Button.
- **Hamburger Drawer Menu** (Derived from the 11 drawer mockups, e.g. `add_product_step_1_photos_swiftcart_seller`):
  1. **Overview** (`grid_view`) &rarr; `/seller/overview-seller` (alias: `/seller`)
  2. **Orders** (`local_mall`) &rarr; `/seller/orders-seller`
  3. **Riders** (`two_wheeler`) &rarr; `/seller/riders-seller`
  4. **Returns & Disputes** (`assignment_return`) &rarr; `/seller/returns-disputes-seller`
  5. **Products** (`inventory_2`) &rarr; `/seller/products-seller`
  6. **Add Product Flow** (`add_photo_alternate`) &rarr; `/seller/add-product-step-1-photos-seller`
  7. **Discounts & Ads** (`campaign`) &rarr; `/seller/discounts-ads-seller`
  8. **Wallet & Payouts** (`account_balance_wallet`) &rarr; `/seller/seller-wallet-payouts`
  9. **Analytics** (`monitoring`) &rarr; `/seller/analytics-seller`
  10. **Store Profile** (`storefront`) &rarr; `/seller/store-profile-seller`
  11. **Help & Support** (`support_agent`) &rarr; `/help-centre`
  12. **Log Out** (`logout`) &rarr; `/`
- **Bottom Bar** (Sticky on phone view):
  1. **Overview** (`grid_view`) &rarr; `/seller/overview-seller`
  2. **Orders** (`local_mall`) &rarr; `/seller/orders-seller`
  3. **Products** (`inventory_2`) &rarr; `/seller/products-seller`
  4. **Riders** (`two_wheeler`) &rarr; `/seller/riders-seller`
  5. **Profile** (`storefront`) &rarr; `/seller/store-profile-seller`

### Screens Not in the Main Menu and How to Reach Them
- `/seller/add-product-step-2-ai-photo-studio-seller`: Click "Next / AI Studio" button from Step 1 (`/seller/add-product-step-1-photos-seller`).
- `/seller/add-product-step-3-ai-description-seller`: Click "Next / AI Description" from Step 2.
- `/seller/add-product-step-4-catalog-details-seller`: Click "Next / Details" from Step 3.
- `/seller/add-product-step-5-buyer-preview-submit-seller`: Click "Next / Preview" from Step 4.
- `/seller/assign-rider-bottom-sheet-modal-seller`: Click "Assign Rider" button on order item in Orders (`/seller/orders-seller`).
- `/seller/invite-courier-bottom-sheet-modal-seller`: Click "Invite Courier / Add Rider" button in Riders (`/seller/riders-seller`).
- `/seller/edit-existing-product-seller`: Click "Edit" action button on product card in Products (`/seller/products-seller`).
- `/seller/merchant-return-inspection-acceptance`: Click "Inspect Return" button in Returns & Disputes (`/seller/returns-disputes-seller`).
- `/seller/seller-dispute-response-1`: Click "Respond to Dispute #1" in Returns & Disputes (`/seller/returns-disputes-seller`).
- `/seller/seller-dispute-response-2`: Click "Respond to Dispute #2" in Returns & Disputes.
- `/seller/seller-order-detail-seller`: Click order row or "View Order" in Orders (`/seller/orders-seller`).
- `/seller/seller-notifications`: Click Notification Bell in Top Bar.

---

## 2. Admin Dashboard (`role: "admin"`)

### Primary Navigation Architecture
- **Header Top Bar**: SwiftCart Brand Icon, Role Title ("Admin Oversight"), Sun/Moon Theme Toggle, Hamburger Button.
- **Hamburger Drawer Menu** (Derived from `escrow_disputes_swiftcart_admin`, `orders_oversight_swiftcart_admin`, etc.):
  1. **Overview** (`dashboard`) &rarr; `/admin/overview-admin` (alias: `/admin`)
  2. **Seller Applications & KYC** (`badge`) &rarr; `/admin/sellers-directory-admin-1`
  3. **Sellers Directory** (`storefront`) &rarr; `/admin/sellers-directory-admin-2`
  4. **Riders (Couriers)** (`two_wheeler`) &rarr; `/admin/riders-couriers-admin`
  5. **Orders Oversight** (`shopping_cart_checkout`) &rarr; `/admin/orders-oversight-admin`
  6. **Product Moderation** (`fact_check`) &rarr; `/admin/product-moderation-admin`
  7. **Escrow & Disputes** (`gavel`) &rarr; `/admin/escrow-disputes-admin`
  8. **Payout Queue** (`payments`) &rarr; `/admin/payout-queue-admin`
  9. **Overpayments & Refunds** (`currency_exchange`) &rarr; `/admin/overpayments-refunds-admin`
  10. **Commission Rates** (`percent`) &rarr; `/admin/commission-rates-earnings-admin`
  11. **Locked Dispatches** (`local_shipping`) &rarr; `/admin/locked-dispatches-admin`
  12. **Homepage & Ads** (`campaign`) &rarr; `/admin/homepage-ads-admin`
  13. **Audit Log** (`manage_history`) &rarr; `/admin/audit-log-admin-1`
  14. **Exit** (`logout`) &rarr; `/`
- **Bottom Bar**:
  1. **Overview** (`space_dashboard`) &rarr; `/admin/overview-admin`
  2. **KYC** (`how_to_reg`) &rarr; `/admin/sellers-directory-admin-1`
  3. **Orders** (`inventory_2`) &rarr; `/admin/orders-oversight-admin`
  4. **Disputes** (`shield_with_heart`) &rarr; `/admin/escrow-disputes-admin`
  5. **Payouts** (`account_balance_wallet`) &rarr; `/admin/payout-queue-admin`

### Screens Not in the Main Menu and How to Reach Them
- `/admin/admin-order-detail-oversight`: Click on an order card or "Inspect Order" in Orders Oversight (`/admin/orders-oversight-admin`).
- `/admin/audit-log-admin-2`: Click "Detailed Security View / Ledger" in Audit Log (`/admin/audit-log-admin-1`).
- `/admin/edit-category-commission-modal-with-date-picker`: Click "Edit Rate" action button in Commission Rates (`/admin/commission-rates-earnings-admin`).
- `/admin/freeze-seller-admin`: Click "Freeze Seller / Risk Action" in Sellers Directory (`/admin/sellers-directory-admin-2`).

---

## 3. Super-Admin Dashboard (`role: "super-admin"`)

### Primary Navigation Architecture
- **Header Top Bar**: SwiftCart Brand Icon, Role Title ("Super-Admin Master Control"), Sun/Moon Theme Toggle, Hamburger Button.
- **Hamburger Drawer Menu** (Derived from `overview_swiftcart_super_admin` & `users_roles_swiftcart_super_admin`):
  1. **Overview** (`dashboard`) &rarr; `/super-admin/overview-super-admin` (alias: `/super-admin`)
  2. **Users & Roles** (`manage_accounts`) &rarr; `/super-admin/users-roles-super-admin`
  3. **Platform Settings** (`tune`) &rarr; `/super-admin/platform-settings-super-admin`
  4. **Seller Applications & KYC** (`badge`) &rarr; `/admin/sellers-directory-admin-1`
  5. **Sellers Directory** (`storefront`) &rarr; `/admin/sellers-directory-admin-2`
  6. **Riders (Couriers)** (`two_wheeler`) &rarr; `/admin/riders-couriers-admin`
  7. **Orders Oversight** (`shopping_cart_checkout`) &rarr; `/admin/orders-oversight-admin`
  8. **Product Moderation** (`fact_check`) &rarr; `/admin/product-moderation-admin`
  9. **Escrow & Disputes** (`gavel`) &rarr; `/admin/escrow-disputes-admin`
  10. **Payout Queue** (`payments`) &rarr; `/admin/payout-queue-admin`
  11. **Overpayments & Refunds** (`currency_exchange`) &rarr; `/admin/overpayments-refunds-admin`
  12. **Commission Rates** (`percent`) &rarr; `/admin/commission-rates-earnings-admin`
  13. **Locked Dispatches** (`local_shipping`) &rarr; `/admin/locked-dispatches-admin`
  14. **Homepage & Ads** (`campaign`) &rarr; `/admin/homepage-ads-admin`
  15. **Audit Log** (`manage_history`) &rarr; `/super-admin/audit-log-super-admin`
  16. **Exit** (`logout`) &rarr; `/`
- **Bottom Bar**:
  1. **Overview** (`space_dashboard`) &rarr; `/super-admin/overview-super-admin`
  2. **KYC** (`how_to_reg`) &rarr; `/admin/sellers-directory-admin-1`
  3. **Orders** (`inventory_2`) &rarr; `/admin/orders-oversight-admin`
  4. **Disputes** (`shield_with_heart`) &rarr; `/admin/escrow-disputes-admin`
  5. **Governance** (`admin_panel_settings`) &rarr; `/super-admin/platform-settings-super-admin`

### Screens Not in the Main Menu and How to Reach Them
- `/super-admin/danger-zone-role-change-super-admin`: Click "Emergency Role Action / Demote / Promote" button on user row in Users & Roles (`/super-admin/users-roles-super-admin`).

---

## 4. Rider Dashboard (`role: "rider"`)

### Primary Navigation Architecture
- **Header Top Bar**: SwiftCart Brand Icon, Role Title ("Boda Rider Console"), Live Status Indicator, Sun/Moon Theme Toggle.
- **Bottom Bar** (Standard 5-tab mobile app navigation derived from `deliveries_swiftcart_rider`, `overview_swiftcart_rider`, etc.):
  1. **Overview** (`dashboard`) &rarr; `/rider/overview-rider` (alias: `/rider`)
  2. **Deliveries** (`package_2`) &rarr; `/rider/deliveries-rider`
  3. **Map** (`location_on`) &rarr; `/rider/rider-map-rider`
  4. **Earnings** (`account_balance_wallet`) &rarr; `/rider/earnings-rider`
  5. **Profile** (`person`) &rarr; `/rider/profile-support-rider`

### Screens Not in the Main Menu and How to Reach Them
- `/rider/boda-rider-delivery-task-execution-code-entry`: Click "Execute Delivery / Enter Code" button in Deliveries (`/rider/deliveries-rider`).
- `/rider/boda-rider-reverse-pickup-package-inspection`: Click "Inspect Return Tamper Bag" in Deliveries.
- `/rider/failed-delivery-modal-rider`: Click "Report Delivery Issue / Failed" in Task Execution.
- `/rider/offline-mode-error-states-for-boda-rider-app`: Shown automatically when connection status indicates offline.
- `/rider/rider-code-locked-security`: Shown when secure PIN lockout is triggered.
- `/rider/rider-return-pickup-rider`: Click "Pickup Return" task item in Deliveries.
- `/rider/rider-seller-pickup-delivery-detail`: Click delivery detail card in Deliveries.

---

## 5. Hub Dashboard (`role: "hub"`)

### Primary Navigation Architecture
- **Header Top Bar**: SwiftCart Brand Icon, Role Title ("Work Hub Operations"), Sun/Moon Theme Toggle, Hamburger Button.
- **Bottom Bar** (Fast operator access derived from `overview_swiftcart_hub_agent`, `scan_swiftcart_hub_agent`, etc.):
  1. **Overview** (`dashboard`) &rarr; `/hub/overview-hub-agent` (alias: `/hub`)
  2. **Intake** (`move_to_inbox`) &rarr; `/hub/intake-hub-agent`
  3. **Scan** (`qr_code_scanner`) &rarr; `/hub/scan-hub-agent`
  4. **Pickup** (`front_hand`) &rarr; `/hub/pickup-hub-agent`
  5. **More** (`widgets`) &rarr; Toggles Hub Drawer (also links to `/hub/more-hub-agent`)
- **Hamburger Drawer Menu** (Derived from `swiftcart_work_hub_shared_system_components_dark_light` & hub station mockups):
  1. **Overview** (`dashboard`) &rarr; `/hub/overview-hub-agent`
  2. **Intake & Sorting Station** (`warehouse`) &rarr; `/hub/hub-intake-sorting-station-work-hub`
  3. **Intake Station** (`move_to_inbox`) &rarr; `/hub/hub-intake-station-work-hub`
  4. **Sorting Station** (`filter_alt`) &rarr; `/hub/hub-sorting-station-work-hub`
  5. **Storage & Aging Matrix** (`inventory_2`) &rarr; `/hub/hub-storage-aging-matrix-hub`
  6. **Courier Bag Staging & Dispatch** (`local_shipping`) &rarr; `/hub/rider-dispatch-courier-bag-staging-hub-agent`
  7. **Linehaul Transit Manifest** (`alt_route`) &rarr; `/hub/line-haul-transit-manifest-creation-hub-agent`
  8. **Regional Linehaul Handover** (`local_shipping`) &rarr; `/hub/regional-linehaul-transit-handover-work-hub`
  9. **Damaged Parcel Quarantine Bay** (`fact_check`) &rarr; `/hub/damaged-parcel-quarantine-bay-intake-hub-agent`
  10. **Escrow Ledger & System Components** (`account_balance_wallet`) &rarr; `/hub/swiftcart-work-hub-shared-system-components`
  11. **Field Support** (`help_center`) &rarr; `/help-centre`
  12. **Sign Out** (`logout`) &rarr; `/`

### Screens Not in the Main Menu and How to Reach Them
- `/hub/courier-bag-qr-scan-confirmation-modal-work-hub`: Triggered by scanning bag barcode in Scan (`/hub/scan-hub-agent`).
- `/hub/returns-damaged-goods-quarantine-bay-work-hub`: Click "Quarantine Details" in Intake Station.
- `/hub/overview-hub-agent-light-mode`: Theme toggle to light mode on `/hub/overview-hub-agent`.
