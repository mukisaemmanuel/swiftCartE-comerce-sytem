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

---

## 6. Tablet Navigation Architecture (768px–1023px, Tested at 834x1112)

On tablet viewports, the mobile bottom bar is hidden (`md:hidden`), and navigation transitions to either a 72px left rail or a top header horizontal nav:

### Seller Tablet Navigation
- **72px Left Rail** (`data-testid="dashboard-tablet-rail"`): Overview (`/seller/overview-seller`), Orders (`/seller/orders-seller`), Riders (`/seller/riders-seller`), Returns (`/seller/returns-disputes-seller`), Products (`/seller/products-seller`), Discounts (`/seller/discounts-ads-seller`), Wallet (`/seller/seller-wallet-payouts`), Store Profile (`/seller/store-profile-seller`).
- **Drawer Menu**: Full 12-item menu accessible via hamburger button in top bar.
- **Tablet Mockup Folders & Routes**:
  - `seller_add_product_with_ai_studio_tablet_dark` &rarr; `/seller/seller-add-product-with-ai-studio`
  - `seller_analytics_performance_heatmaps_tablet_light_1` &rarr; `/seller/seller-analytics-performance-heatmaps-1`
  - `seller_analytics_performance_heatmaps_tablet_light_2` &rarr; `/seller/seller-analytics-performance-heatmaps-2`
  - `seller_applications_kyc_verification_tablet` &rarr; `/seller/seller-applications-kyc-verification`
  - `seller_discounts_flash_sales_promotion_builder_tablet_light_1` &rarr; `/seller/seller-discounts-flash-sales-promotion-builder-1`
  - `seller_discounts_flash_sales_promotion_builder_tablet_light_2` &rarr; `/seller/seller-discounts-flash-sales-promotion-builder-2`
  - `seller_dispute_response_tablet_dark` &rarr; `/seller/seller-dispute-response`
  - `seller_edit_product_with_ai_studio_tablet_dark` &rarr; `/seller/seller-edit-product-with-ai-studio`
  - `seller_inbound_return_tamper_inspection_tablet_dark` &rarr; `/seller/seller-inbound-return-tamper-inspection`
  - `seller_notifications_center_tablet_light` &rarr; `/seller/seller-notifications-center`
  - `seller_orders_master_detail_tablet_light_2` &rarr; `/seller/seller-orders-master-detail-2`
  - `seller_overview_dashboard_tablet_dark` &rarr; `/seller/seller-overview-dashboard`
  - `seller_overview_dashboard_tablet_light_1` &rarr; `/seller/seller-overview-dashboard-1`
  - `seller_overview_dashboard_tablet_light_2` &rarr; `/seller/seller-overview-dashboard-2`
  - `seller_products_batch_pricing_tablet_dark` &rarr; `/seller/seller-products-batch-pricing`
  - `seller_products_bulk_price_update_tablet_dark` &rarr; `/seller/seller-products-bulk-price-update`
  - `seller_riders_fleet_logistics_tablet_dark` &rarr; `/seller/seller-riders-fleet-logistics`
  - `seller_wallet_payouts_tablet_dark` &rarr; `/seller/seller-wallet-payouts`

### Admin Tablet Navigation
- **Top Header Horizontal Nav** (`data-testid="dashboard-tablet-top-nav"`): Overview (`/admin/overview-admin`), KYC (`/admin/sellers-directory-admin-1`), Sellers (`/admin/sellers-directory-admin-2`), Riders (`/admin/riders-couriers-admin`), Orders (`/admin/orders-oversight-admin`), Disputes (`/admin/escrow-disputes-admin`), Payouts (`/admin/payout-queue-admin`).
- **Drawer Menu**: Full 14-item governance menu accessible via hamburger button.
- **Tablet Mockup Folders & Routes**:
  - `audit_log_security_ledger_tablet_dark` &rarr; `/admin/audit-log-security-ledger`
  - `homepage_ads_management_tablet_dark` &rarr; `/admin/homepage-ads-management`
  - `locked_dispatches_pin_overrides_tablet_dark` &rarr; `/admin/locked-dispatches-pin-overrides`
  - `orders_oversight_detail_tablet` &rarr; `/admin/orders-oversight-detail`
  - `overpayments_refunds_tablet_light` &rarr; `/admin/overpayments-refunds`
  - `payout_queue_commission_matrix_tablet` &rarr; `/admin/payout-queue-commission-matrix`
  - `product_moderation_catalog_review_tablet_dark` &rarr; `/admin/product-moderation-catalog-review`
  - `riders_fleet_directory_tablet_dark` &rarr; `/admin/riders-fleet-directory`
  - `sellers_directory_with_freeze_drawer_tablet` &rarr; `/admin/sellers-directory-with-freeze-drawer`

### Super-Admin Tablet Navigation
- **72px Left Rail** (`data-testid="dashboard-tablet-rail"`): Overview (`/super-admin/overview-super-admin`), Users & Roles (`/super-admin/users-roles-super-admin`), Platform Settings (`/super-admin/platform-settings-super-admin`), KYC (`/admin/sellers-directory-admin-1`), Orders (`/admin/orders-oversight-admin`), Audit Log (`/super-admin/audit-log-super-admin`).
- **Drawer Menu**: Full control menu accessible via hamburger button.
- **Tablet Mockup Folders & Routes**:
  - `admin_super_admin_command_overview_tablet` &rarr; `/super-admin/admin-super-admin-command-overview`
  - `platform_settings_fee_matrix_tablet_dark` &rarr; `/super-admin/platform-settings-fee-matrix`
  - `super_admin_operational_overview_tablet_dark` &rarr; `/super-admin/super-admin-operational-overview`
  - `users_roles_with_role_change_tablet_dark` &rarr; `/super-admin/users-roles-with-role-change`

### Rider Tablet Navigation
- **Top Header Horizontal Nav** (`data-testid="dashboard-tablet-top-nav"`): Overview (`/rider/overview-rider`), Deliveries (`/rider/deliveries-rider`), Map (`/rider/rider-map-rider`), Earnings (`/rider/earnings-rider`), Profile (`/rider/profile-support-rider`).
- **Drawer Menu**: Accessible via top bar menu button.
- **Tablet Mockup Folders & Routes**:
  - `rider_deliveries_master_detail_tablet` &rarr; `/rider/rider-deliveries-master-detail`
  - `rider_delivery_task_execution_code_entry_tablet` &rarr; `/rider/rider-delivery-task-execution-code-entry`
  - `rider_failed_delivery_code_locked_state_tablet_light` &rarr; `/rider/rider-failed-delivery-code-locked-state`
  - `rider_map_live_dispatch_navigation_tablet_dark` &rarr; `/rider/rider-map-live-dispatch-navigation`
  - `rider_offline_mode_cached_manifest_tablet_dark` &rarr; `/rider/rider-offline-mode-cached-manifest`
  - `rider_overview_dispatch_map_tablet` &rarr; `/rider/rider-overview-dispatch-map`
  - `rider_reverse_pickup_return_inspection_tablet` &rarr; `/rider/rider-reverse-pickup-return-inspection`

### Hub Tablet Navigation
- **Top Header Horizontal Nav** (`data-testid="dashboard-tablet-top-nav"`): Overview (`/hub/overview-hub-agent`), Intake (`/hub/intake-hub-agent`), Scan (`/hub/scan-hub-agent`), Pickup (`/hub/pickup-hub-agent`), Storage (`/hub/hub-storage-aging-matrix-hub`), Dispatch (`/hub/rider-dispatch-courier-bag-staging-hub-agent`).
- **Drawer Menu**: Full station menu accessible via hamburger button.
- **Tablet Mockup Folders & Routes**:
  - `hub_damaged_goods_quarantine_bay_tablet` &rarr; `/hub/hub-damaged-goods-quarantine-bay`
  - `hub_damaged_goods_quarantine_bay_tablet_light_1` &rarr; `/hub/hub-damaged-goods-quarantine-bay-1`
  - `hub_damaged_goods_quarantine_bay_tablet_light_2` &rarr; `/hub/hub-damaged-goods-quarantine-bay-2`
  - `hub_intake_high_speed_barcode_scanner_tablet` &rarr; `/hub/hub-intake-high-speed-barcode-scanner`
  - `hub_line_haul_transit_manifest_handover_tablet` &rarr; `/hub/hub-line-haul-transit-manifest-handover`
  - `hub_line_haul_transit_manifest_handover_tablet_light_1` &rarr; `/hub/hub-line-haul-transit-manifest-handover-1`
  - `hub_line_haul_transit_manifest_handover_tablet_light_2` &rarr; `/hub/hub-line-haul-transit-manifest-handover-2`
  - `hub_pickup_handover_console_tablet_dark` &rarr; `/hub/hub-pickup-handover-console`
  - `hub_returns_quarantine_bay_tablet_dark` &rarr; `/hub/hub-returns-quarantine-bay`
  - `hub_rider_dispatch_courier_staging_tablet_dark` &rarr; `/hub/hub-rider-dispatch-courier-staging`
  - `hub_station_command_overview_tablet` &rarr; `/hub/hub-station-command-overview`
  - `hub_station_command_overview_tablet_light_1` &rarr; `/hub/hub-station-command-overview-1`
  - `hub_station_command_overview_tablet_light_2` &rarr; `/hub/hub-station-command-overview-2`
  - `hub_station_settings_shift_handover_tablet_dark` &rarr; `/hub/hub-station-settings-shift-handover`
  - `hub_storage_aging_matrix_tablet_dark` &rarr; `/hub/hub-storage-aging-matrix`
  - `rider_profile_support_hub_tablet_light` &rarr; `/hub/rider-profile-support-hub`

