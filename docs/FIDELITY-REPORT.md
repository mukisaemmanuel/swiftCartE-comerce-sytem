# SwiftCart Visual Fidelity Report (Honest Audit)

Generated: 2026-11-17T02:48:32.340Z

## Summary by Role and Screen Size

| Role / Size | OK (<=12%) | CHECK (12-25%) | BAD (>25%) | Wrong Page Rendered | Total Screens |
|---|---|---|---|---|---|
| **admin / desktop** | 10 | 1 | 7 | 0 | 18 |
| **admin / mobile** | 6 | 12 | 1 | 0 | 19 |
| **admin / tablet** | 6 | 7 | 0 | 0 | 13 |
| **buyer / desktop** | 21 | 2 | 2 | 0 | 25 |
| **buyer / mobile** | 22 | 19 | 1 | 0 | 42 |
| **buyer / tablet** | 19 | 5 | 1 | 0 | 25 |
| **hub / desktop** | 11 | 4 | 2 | 0 | 17 |
| **hub / mobile** | 2 | 13 | 4 | 0 | 19 |
| **hub / tablet** | 13 | 6 | 2 | 0 | 21 |
| **rider / desktop** | 1 | 0 | 3 | 0 | 4 |
| **rider / mobile** | 3 | 8 | 3 | 0 | 14 |
| **rider / tablet** | 3 | 0 | 5 | 0 | 8 |
| **seller / desktop** | 20 | 3 | 2 | 0 | 25 |
| **seller / mobile** | 9 | 11 | 2 | 0 | 22 |
| **seller / tablet** | 6 | 6 | 8 | 0 | 20 |
| **super-admin / desktop** | 0 | 0 | 2 | 0 | 2 |
| **super-admin / mobile** | 1 | 3 | 2 | 0 | 6 |
| **super-admin / tablet** | 4 | 1 | 0 | 0 | 5 |
| **TOTAL** | **157** | **101** | **47** | **0** | **305** |

## 20 Worst Screens (Top Discrepancies & Wrong Pages)

| Route | Role | Size | Screen Folder | Diff % | Status | Expected Heading | Text Diff (Missing Headings / Buttons) | Side-by-Side |
|---|---|---|---|---|---|---|---|---|
| `/seller/overview-seller` | seller | mobile | `overview_swiftcart_seller_dark` | **93.06%** | **BAD** | "SoundCore Uganda" | Missing Btn: sync_alt | [View Side-by-Side](fidelity-images/mobile-seller-overview_swiftcart_seller_dark.png) |
| `/hub/overview-hub-agent` | hub | mobile | `overview_swiftcart_hub_agent_dark` | **92.88%** | **BAD** | "Isaac Kato" | Missing H: Hub Scanner; Missing Btn: sync_alt, arrow_forward | [View Side-by-Side](fidelity-images/mobile-hub-overview_swiftcart_hub_agent_dark.png) |
| `/admin/admin-command-overview` | admin | desktop | `admin_command_overview_swiftcart_desktop_dark` | **92.83%** | **BAD** | "Platform Operations Command Overview" | Missing Btn: light_mode, notifications, tune, more_vert | [View Side-by-Side](fidelity-images/desktop-admin-admin_command_overview_swiftcart_desktop_dark.png) |
| `/seller/seller-applications-kyc-verification` | seller | tablet | `seller_applications_kyc_verification_tablet` | **91.95%** | **BAD** | "Kampala Sound Hub Ltd" | Missing Btn: dark_mode, notifications4, fullscreen | [View Side-by-Side](fidelity-images/tablet-seller-seller_applications_kyc_verification_tablet.png) |
| `/admin/sellers-directory-account-governance` | admin | desktop | `sellers_directory_account_governance_swiftcart_desktop_dark` | **91.83%** | **BAD** | "Verified Merchants Directory & Account Actions" | Missing Btn: light_mode, notifications, filter_alt_off | [View Side-by-Side](fidelity-images/desktop-admin-sellers_directory_account_governance_swiftcart_desktop_dark.png) |
| `/admin/product-moderation-catalog-review` | admin | desktop | `product_moderation_catalog_review_swiftcart_desktop_dark` | **91.24%** | **BAD** | "Product Catalog Moderation & Brand Safety Desk" | Missing Btn: light_mode, notifications, Pending High 3, sort | [View Side-by-Side](fidelity-images/desktop-admin-product_moderation_catalog_review_swiftcart_desktop_dark.png) |
| `/rider/overview-rider` | rider | mobile | `overview_swiftcart_rider_dark` | **90.7%** | **BAD** | "Rider Shortcuts" | Missing H: Fleet Dispatch; Missing Btn: sync_alt, turn_right | [View Side-by-Side](fidelity-images/mobile-rider-overview_swiftcart_rider_dark.png) |
| `/hub/hub-returns-rto-bay` | hub | desktop | `hub_returns_rto_bay_swiftcart_desktop_dark` | **90.26%** | **BAD** | "Returns & Return-To-Origin (RTO) Processing Bay" | None | [View Side-by-Side](fidelity-images/desktop-hub-hub_returns_rto_bay_swiftcart_desktop_dark.png) |
| `/super-admin/overview-super-admin` | super-admin | mobile | `overview_swiftcart_super_admin_dark` | **90.16%** | **BAD** | "" | Missing H: Escrow Ledger; Missing Btn: sync_alt | [View Side-by-Side](fidelity-images/mobile-super-admin-overview_swiftcart_super_admin_dark.png) |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | desktop | `hub_damaged_goods_quarantine_bay_swiftcart_desktop_dark` | **90.08%** | **BAD** | "Damaged Goods & Quarantine Bay Intake" | None | [View Side-by-Side](fidelity-images/desktop-hub-hub_damaged_goods_quarantine_bay_swiftcart_desktop_dark.png) |
| `/seller/edit-existing-product-seller` | seller | mobile | `edit_existing_product_swiftcart_seller` | **89.92%** | **BAD** | "Live Catalog Node: William St." | Missing Btn: arrow_back_ios_new, close, more_vert | [View Side-by-Side](fidelity-images/mobile-seller-edit_existing_product_swiftcart_seller.png) |
| `/hub/hub-storage-aging-matrix-hub` | hub | mobile | `hub_storage_aging_matrix_swiftcart_hub` | **89.58%** | **BAD** | "William St Central Hub #04" | Missing Btn: arrow_back_ios_new, filter_list | [View Side-by-Side](fidelity-images/mobile-hub-hub_storage_aging_matrix_swiftcart_hub.png) |
| `/seller/seller-overview-dashboard` | seller | tablet | `seller_overview_dashboard_tablet_dark` | **87.46%** | **BAD** | "Live Order Stream & Fulfillment Queue" | Missing H: Seller Command Overview; Missing Btn: keyboard_double_arrow_right, menu, dark_mode, notifications | [View Side-by-Side](fidelity-images/tablet-seller-seller_overview_dashboard_tablet_dark.png) |
| `/rider/rider-seller-pickup-delivery-detail` | rider | mobile | `rider_seller_pickup_delivery_detail` | **85.21%** | **BAD** | "Dispatch Progress" | Missing Btn: arrow_back_ios_new, call | [View Side-by-Side](fidelity-images/mobile-rider-rider_seller_pickup_delivery_detail.png) |
| `/admin/sellers-directory-account-governance` | admin | desktop | `sellers_directory_account_governance_swiftcart_desktop_light` | **82.29%** | **BAD** | "Verified Merchants Directory & Account Actions" | Missing H: Merchant Account Governance Action: Kampala Phone Hub (SC-UG-8821); Missing Btn: dark_mode, notifications, restart_alt, chevron_left, chevron_right | [View Side-by-Side](fidelity-images/desktop-admin-sellers_directory_account_governance_swiftcart_desktop_light.png) |
| `/seller/seller-add-product-with-ai-studio` | seller | tablet | `seller_add_product_with_ai_studio_tablet_dark` | **80.37%** | **BAD** | "AI Enhancement Complete" | Missing Btn: dark_modeDark, zoom_in, compare, restart_alt, Raw Original Upload | [View Side-by-Side](fidelity-images/tablet-seller-seller_add_product_with_ai_studio_tablet_dark.png) |
| `/admin/admin-command-overview` | admin | desktop | `admin_command_overview_swiftcart_desktop_light` | **76.97%** | **BAD** | "Platform Operations Command Overview" | Missing Btn: dark_mode, notifications, open_in_new | [View Side-by-Side](fidelity-images/desktop-admin-admin_command_overview_swiftcart_desktop_light.png) |
| `/rider/rider-reverse-pickup-return-inspection` | rider | tablet | `rider_reverse_pickup_return_inspection_tablet` | **70.2%** | **BAD** | "Arbitration Complaint Profile" | None | [View Side-by-Side](fidelity-images/tablet-rider-rider_reverse_pickup_return_inspection_tablet.png) |
| `/rider/rider-delivery-task-execution-code-entry` | rider | tablet | `rider_delivery_task_execution_code_entry_tablet` | **67.48%** | **BAD** | "Dennis Mukasa" | Missing Btn: C Clear | [View Side-by-Side](fidelity-images/tablet-rider-rider_delivery_task_execution_code_entry_tablet.png) |
| `/admin/product-moderation-catalog-review` | admin | desktop | `product_moderation_catalog_review_swiftcart_desktop_light` | **67.04%** | **BAD** | "Product Catalog Moderation & Brand Safety Desk" | Missing Btn: dark_mode, notifications, filter_list | [View Side-by-Side](fidelity-images/desktop-admin-product_moderation_catalog_review_swiftcart_desktop_light.png) |

## Screens with Visible Text Differences (294)

| Route | Role | Size | Missing Headings | Extra Headings | Missing Buttons | Extra Buttons |
|---|---|---|---|---|---|---|
| `/seller/overview-seller` | seller | mobile | - | - | sync_alt | - |
| `/hub/overview-hub-agent` | hub | mobile | Hub Scanner | Station #04 Desk | sync_alt; arrow_forward | - |
| `/admin/admin-command-overview` | admin | desktop | - | Admin Oversight | light_mode; notifications; tune; more_vert | - |
| `/seller/seller-applications-kyc-verification` | seller | tablet | - | Seller Operations | dark_mode; notifications4; fullscreen | - |
| `/admin/sellers-directory-account-governance` | admin | desktop | - | Admin Oversight | light_mode; notifications; filter_alt_off | - |
| `/admin/product-moderation-catalog-review` | admin | desktop | - | Admin Oversight | light_mode; notifications; Pending High 3; sort | Pending High3; Request Proof of Authenticity |
| `/rider/overview-rider` | rider | mobile | Fleet Dispatch | Overview | sync_alt; turn_right | - |
| `/hub/hub-returns-rto-bay` | hub | desktop | - | Work Hub Operations | - | - |
| `/super-admin/overview-super-admin` | super-admin | mobile | Escrow Ledger | System Infrastructure | sync_alt | - |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | desktop | - | Work Hub Operations | - | - |
| `/seller/edit-existing-product-seller` | seller | mobile | - | - | arrow_back_ios_new; close; more_vert | - |
| `/hub/hub-storage-aging-matrix-hub` | hub | mobile | - | - | arrow_back_ios_new; filter_list | - |
| `/seller/seller-overview-dashboard` | seller | tablet | Seller Command Overview | Seller Operations | keyboard_double_arrow_right; menu; dark_mode; notifications | - |
| `/rider/rider-seller-pickup-delivery-detail` | rider | mobile | - | - | arrow_back_ios_new; call | Report Merchant Issue / Sealed Box Tampered |
| `/admin/sellers-directory-account-governance` | admin | desktop | Merchant Account Governance Action: Kampala Phone Hub (SC-UG-8821) | Admin Oversight | dark_mode; notifications; restart_alt; chevron_left; chevron_right | - |
| `/seller/seller-add-product-with-ai-studio` | seller | tablet | - | Seller Operations | dark_modeDark; zoom_in; compare; restart_alt; Raw Original Upload | RawOriginal Upload; ActiveClean Studio; AI SceneKampala Cafe; AlphaCutout PNG; Background RemovalNeutral Studio Tone |
| `/admin/admin-command-overview` | admin | desktop | - | Admin Oversight | dark_mode; notifications; open_in_new | - |
| `/rider/rider-reverse-pickup-return-inspection` | rider | tablet | - | Boda Rider Console | - | Retake / Add Extra AngleOptional; SEAL RETURN BAG & INITIATE TRANSIT TO HUB |
| `/rider/rider-delivery-task-execution-code-entry` | rider | tablet | - | Boda Rider Console | C Clear | CClear |
| `/admin/product-moderation-catalog-review` | admin | desktop | - | Admin Oversight | dark_mode; notifications; filter_list | - |
| `/seller/seller-products-batch-pricing` | seller | tablet | - | Seller Operations | dark_mode; notifications4; sort; edit_note; more_vert | - |
| `/rider/rider-deliveries-master-detail` | rider | tablet | - | Boda Rider Console | apps All Tasks 5; two_wheeler Out for Delivery 2; warehouse Ready for Pickup 1; assignment_return Reverse Returns 1; task_alt Completed 12 | All Tasks5; Out for Delivery2; Ready for Pickup1; Reverse Returns1; Completed12 |
| `/seller/seller-dispute-response` | seller | tablet | - | Seller Operations | dark_mode; notifications4; zoom_in; play_arrow; delete | - |
| `/rider/rider-offline-mode-cached-manifest` | rider | tablet | - | Boda Rider Console | - | Confirm Offline Handover & Save to Sync Queue |
| `/hub/hub-line-haul-transit-manifest-handover-1` | hub | tablet | - | Work Hub Operations | photo_camera | SEAL TRUCK, SIGN MANIFEST & RELEASE DISPATCH |
| `/seller/seller-edit-product-with-ai-studio` | seller | tablet | - | Seller Operations | dark_mode; notifications4; history; content_copy; add | - |
| `/hub/hub-station-command-overview` | hub | tablet | - | Work Hub Operations | Bay A1 34 Acacia Mall P2P; Bay A2 28 Wampewo Ave; Bay A3 26 Nakasero Hill; Bay B1 22 Luwum St Route; Bay B2 25 William St Node | Bay A134Acacia Mall P2P; Bay A228Wampewo Ave; Bay A326Nakasero Hill; Bay B122Luwum St Route; Bay B225William St Node |
| `/super-admin/users-roles-management-super-admin` | super-admin | desktop | - | Super-Admin Master Control | dark_mode; notifications; close | - |
| `/super-admin/users-roles-management-super-admin` | super-admin | desktop | - | Super-Admin Master Control | light_mode; notifications; manage_accounts; more_vert; chevron_left | - |
| `/seller/seller-products-bulk-price-update` | seller | tablet | - | Seller Operations | dark_modeDark; close; chevron_left; chevron_right | - |
| `/live-boda-rider-tracking` | buyer | desktop | - | - | add; remove; help_outline; call; chat | - |
| `/` | buyer | mobile | Fashion & Commute • From $14.99 | - | notifications; photo_camera; mic; LIVE DEMO 4K play_arrow Watch in Action 0:45; Claim 40% Off arrow_forward | LIVE DEMO4KWatch in Action0:45 |
| `/admin/commission-rates-fee-matrix` | admin | desktop | - | Admin Oversight | light_mode; dark_mode; notifications; close | - |
| `/seller/seller-applications-kyc` | seller | desktop | - | Seller Operations | light_mode; notifications; All Applications 42; Pending Review 14; Approved 24 | All Applications42; Pending Review14; Approved24; Request More Info3; Rejected1 |
| `/rider/rider-simulator-overview-fleet-map` | rider | desktop | - | Boda Rider Console | lock_clock Hold Escrow Release LOCKED | Send Haptic Urgent Alert; Hold Escrow ReleaseLOCKED; Simulate Dropped Signal |
| `/seller/seller-products-bulk-price-update` | seller | desktop | - | Seller Operations | light_mode; notifications; close | - |
| `/rider/rider-overview-dispatch-map` | rider | tablet | - | Boda Rider Console | my_location; chat | - |
| `/order-delivered-write-review` | buyer | desktop | - | - | add_a_photo Add Photo Max 5MB | Add PhotoMax 5MB; Submit Verified Review (+Earn 250 SwiftCoins) |
| `/wishlist` | buyer | tablet | Ugandan Buyer Guarantee; Hassle-Free Returns; Help & Support; Accepted In Uganda | - | photo_camera; close; delete | Add All In-Stock to Cart (UGX 2,393,500) |
| `/seller/seller-riders-fleet-logistics` | seller | tablet | - | Seller Operations | dark_mode; notifications; call; chat; close | - |
| `/rider/rider-simulator-reverse-handover-inspection` | rider | desktop | - | Boda Rider Console | arrow_back | - |
| `/rider/rider-simulator-active-task-otp-simulation` | rider | desktop | - | Boda Rider Console | arrow_back; sos; backspace | - |
| `/super-admin/users-roles-super-admin` | super-admin | mobile | Superadmin Controller | Users & Roles | menu; routine; notifications; close; logoutExit | All142k; Admins8; Hub Agents34; Sellers142; Riders86 |
| `/hub/damaged-parcel-quarantine-bay-intake-hub-agent` | hub | mobile | - | - | arrow_back; close; qr_code_scanner | Suspected Missing Contents / Discrepancy; Counterfeit / Irregular Serial Number; Escalate to Patricia (Lead Arbitrator) |
| `/admin/homepage-ads-admin` | admin | mobile | - | - | arrow_back; routine; Hero Banners 3; Categories 6; Ads Boosts 4 | Hero Banners3; Categories6; Ads Boosts4 |
| `/rider/rider-seller-pickup-delivery-detail` | rider | mobile | - | Rider Seller Pickup Confirmation | chevron_left; phone_enabled | Report Merchant Issue / Sealed Box Tampered |
| `/hub/hub-intake-sorting-station-work-hub` | hub | mobile | - | - | dark_mode; notifications; alt_route; fact_check | Assign Boda: Brian Kizito (UEF 842X) |
| `/hub/rider-dispatch-courier-bag-staging-hub-agent` | hub | mobile | - | - | arrow_back; Ready Staged (3); Awaiting Rider (4); Dispatched (18) | Ready Staged(3); Awaiting Rider(4); Dispatched(18); +14 additional general merchandise parcels; Authorize DispatchHandover Bag #044 to Kizito B. |
| `/hub/courier-bag-qr-scan-confirmation-modal-work-hub` | hub | mobile | - | - | arrow_back; flash_on; close | Bind Tamper Seal & Release for Courier Handover |
| `/live-boda-rider-tracking` | buyer | tablet | - | - | search; add; remove | - |
| `/admin/product-moderation-admin` | admin | mobile | - | - | arrow_back; routine; close | - |
| `/hub/hub-damaged-goods-quarantine-bay-2` | hub | tablet | - | Work Hub Operations | - | Capture Additional Bench Microscope Angle |
| `/rider/boda-rider-reverse-pickup-package-inspection` | rider | mobile | - | - | arrow_back | Report Handover Issue / Customer Mismatch |
| `/rider/overview-rider` | rider | mobile | - | - | ONLINE; notifications; light_mode; power_settings_new | - |
| `/seller/seller-notifications` | seller | mobile | - | - | arrow_back; more_vert; All 12; New Orders 4; Returns & Disputes 2 | All12; New Orders4; Returns & Disputes2; Payouts3; KYC & Account3 |
| `/admin/orders-oversight-detail` | admin | tablet | - | Admin Oversight | dark_mode; notifications; cancel; policy Quarantine Order BoU AML/CFT flagging | Emergency HoldStop handover & freeze OTP; Reassign CourierHand over to bay marshal; Quarantine OrderBoU AML/CFT flagging; Add Cryptographic Internal Note |
| `/order-tracking-milestone-timeline` | buyer | tablet | - | - | search; fullscreen | - |
| `/rider/profile-support-rider` | rider | mobile | - | - | ONLINE; notifications; light_mode | - |
| `/rider/earnings-rider` | rider | mobile | - | - | ONLINE; notifications; light_mode | Withdraw to MTN MoMo / Airtel Money0% Fee |
| `/hub/line-haul-transit-manifest-creation-hub-agent` | hub | mobile | - | - | arrow_back; swap_horiz; photo_camera; edit | Seal Manifest & Print Waybill (84 Parcels) |
| `/super-admin/audit-log-super-admin` | super-admin | mobile | - | - | arrow_back; routine; picture_as_pdf Signed PDF BOU compliance stamped; tune | CSV / JSON HashSHA-256 manifest chained; Signed PDFBOU compliance stamped |
| `/super-admin/platform-settings-super-admin` | super-admin | mobile | - | - | arrow_back; routine | - |
| `/cart` | buyer | mobile | - | - | delete_outline; close | - |
| `/hub/overview-hub-agent-light-mode` | hub | mobile | Overview | Work Hub Operations | dark_mode; notifications; checklist Direct Shelf Audit Bay A to H; print Print Shelf Labels Zebra Thermal; picture_as_pdf Shift Docket Export Daily | Direct Shelf AuditBay A to H; Print Shelf LabelsZebra Thermal; Shift DocketExport Daily |
| `/hub/regional-linehaul-transit-handover-work-hub` | hub | mobile | - | - | flashlight_on; volume_up | - |
| `/seller/add-product-step-1-photos-seller` | seller | mobile | - | Add Product | arrow_back; menu; notifications3; dark_modelight_mode; close | Serial BarcodeIncreases trust; Top ViewSlot 6 of 8; Side ViewSlot 7 of 8; Specification TagSlot 8 of 8 |
| `/admin/sellers-directory-with-freeze-drawer` | admin | tablet | - | Admin Oversight | dark_mode; notifications4; chevron_left; chevron_right | - |
| `/search-categories` | buyer | tablet | - | - | mic; search; close; favorite; arrow_upward | - |
| `/hub/hub-sorting-station-work-hub` | hub | mobile | - | - | notifications; routine | - |
| `/seller/seller-discounts-flash-sales-promotion-builder-2` | seller | tablet | Live Vouchers & Coupons; Sponsored Ad Inventory; Kampala Merchant Velocity Tip | Seller Operations | light_mode; notifications; Manage All; add_chart Boost Ad Spend • Auto-Optimize | - |
| `/messages-notifications` | buyer | mobile | - | - | arrow_back; tune; Seller Chats 2; Order Updates 3; Promos & Vouchers 1 | Seller Chats2; Order Updates3; Promos & Vouchers1 |
| `/submit-dispute-photos` | buyer | mobile | - | - | arrow_back; close; add_a_photo + Add Photo Max 5 photos | + Add PhotoMax 5 photos |
| `/admin/audit-log-security-ledger` | admin | desktop | - | Admin Oversight | light_mode; notifications; refresh; chevron_left; chevron_right | Re-Verify Against Stanbic Anchor |
| `/hub/hub-intake-station-work-hub` | hub | mobile | - | - | notifications; routine; flashlight_on; flip_camera_android | - |
| `/hub/scan-hub-agent` | hub | mobile | - | Scan | notifications; dark_mode; flashlight_on; volume_up; photo_camera | - |
| `/admin/homepage-ads-management` | admin | tablet | - | Admin Oversight | open_in_new | - |
| `/seller/seller-orders-master-detail-2` | seller | tablet | - | Seller Operations | light_mode; notifications; qr_code_scanner; Action Required 6; Disputed 1 | Action Required6; Disputed1 |
| `/admin/admin-order-detail-oversight` | admin | mobile | Admin Order Detail | Order Oversight Detail | arrow_back_ios_new; call; gavel Emergency Dispatch Hold HALT VAULT | Reassign Boda Courier; Emergency Dispatch HoldHALT VAULT |
| `/sign-in-register` | buyer | mobile | - | Buyer Sign In; Welcome Back | arrow_back; Create Account; Use email instead; Send Verification Code arrow_forward; Edit number | Phone Number; Email Address |
| `/hub/swiftcart-work-hub-shared-system-components` | hub | mobile | - | - | search; notifications3; dark_modelight_mode; Retry; arrow_back | - |
| `/seller/analytics-seller` | seller | mobile | - | - | arrow_back_ios_new; dark_modelight_mode | - |
| `/hub/hub-storage-aging-matrix` | hub | desktop | - | Work Hub Operations | - | - |
| `/admin/product-moderation-catalog-review` | admin | tablet | - | Admin Oversight | tune | - |
| `/super-admin/admin-super-admin-command-overview` | super-admin | tablet | - | Super-Admin Master Control | dark_mode; notifications4 | - |
| `/hub/hub-inbound-intake-barcode-scan` | hub | desktop | #SC-98241 | 0.85 kg; Current Batch Intake Register (Auto-syncing to Kampala Primary Ledger) | Work Hub Operations; #SC-98241| 0.85 kg; Current Batch Intake Register(Auto-syncing to Kampala Primary Ledger) | - | Complete Inbound Batch & Reconcile Manifest |
| `/seller/assign-rider-bottom-sheet-modal-seller` | seller | mobile | - | Assign Delivery Rider | menu; search; notifications3; dark_modelight_mode; close | - |
| `/rider/rider-return-pickup-rider` | rider | mobile | - | - | arrow_back | - |
| `/admin/freeze-seller-admin` | admin | mobile | - | - | arrow_back; close | - |
| `/seller/seller-analytics-performance-heatmaps-2` | seller | tablet | - | Seller Operations | light_mode; notifications | - |
| `/hub/pickup-hub-agent` | hub | mobile | - | - | notifications; dark_mode; Queue 12; In Storage 142; Ready at Counter 4 | Queue12; In Storage142; Ready at Counter4; Collected Today68; Customer Not Ready • Return to Shelf B-04 |
| `/rider/rider-code-locked-security` | rider | mobile | - | - | arrow_back | Supervisor Emergency Override Token; Initiate Return to William St Hub if Buyer Leaves |
| `/admin/edit-category-commission-modal-with-date-picker` | admin | mobile | Kill Switch Confirmation | Commission Schedule | close; remove; add | - |
| `/followed-stores-2` | buyer | mobile | - | - | arrow_back; search; All 12; Official Stores (8); Arcade Stalls (4) | All12; Official Stores(8); Arcade Stalls(4) |
| `/seller/seller-inbound-return-tamper-inspection` | seller | tablet | - | Seller Operations | light_mode; dark_mode | Capture Additional Angle (Camera Sync); Confirm Inbound Acceptance & Release Resolution |
| `/followed-stores` | buyer | mobile | Order Tracking | Followed Stores | arrow_back; help_outline; search | - |
| `/hub/overview-hub-agent` | hub | mobile | Throughput Pipeline; Station Tools & Audit | William St Central Hub #04; Station Throughput Matrix; RTO Quarantine Area; Hub Utilities; Recent Hub Activity | notifications; dark_mode; phone_in_talk Call Customer; qr_code_scanner Inspect; fact_check Direct Shelf Audit | Audit (14); Inspect Docket & Verify Uganda ID; Direct Shelf AuditBay A to H; Print Shelf LabelsZebra Thermal; Shift DocketExport Daily |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | tablet | - | Work Hub Operations | - | Capture Additional Bench Microscope Angle |
| `/hub/intake-hub-agent` | hub | mobile | - | Intake | notifications; dark_mode; photo_camera; All Inbound (116); two_wheeler Boda Drops (82) | All Inbound(116); Boda Drops(82); Linehaul Trucks(34) |
| `/hub/hub-damaged-goods-quarantine-bay-1` | hub | tablet | - | Work Hub Operations | - | Capture Additional Bench Microscope Angle |
| `/checkout-delivery-code` | buyer | mobile | - | - | arrow_back_ios_new; share | - |
| `/seller-application-status` | buyer | mobile | - | - | arrow_back; help_outline | - |
| `/order-tracking-delivery-code` | buyer | mobile | - | - | arrow_back; support_agent; close | - |
| `/hub/hub-rider-dispatch-courier-staging` | hub | tablet | - | Work Hub Operations | more_vert; close | - |
| `/admin/payout-queue-admin` | admin | mobile | Patricia Namubiru | - | menu; routine; notifications; close; logoutExit | Pending Approval12; Approved5; Failed with Retry1 |
| `/admin/riders-couriers-admin` | admin | mobile | - | - | arrow_back; routine; All 86; Online 54; On Delivery 18 | All86; Online54; On Delivery18; Offline14; Flagged2 |
| `/admin/overpayments-refunds-admin` | admin | mobile | - | - | arrow_back; routine; close | Approve Immediate MoMo Refund (UGX 365,000) |
| `/account` | buyer | mobile | - | - | notifications; settings; notifications_active; sell Vouchers 3 Active UGX 35k off; stars Lvl 3 Swift Points 420 pts ≈ UGX 4,200 | Vouchers3 ActiveUGX 35k off; Lvl 3Swift Points420 pts≈ UGX 4,200; Escrow2 OrdersSafe release; Language & Trade HubEnglish • Kampala Central Hub |
| `/checkout-one-flow-payment-waiting` | buyer | mobile | SoundCore Space One ANC Headphones | - | arrow_back; more_vert; Edit; refresh Resend Prompt (0:38); Change Method | + Add New Address; Kampala Central; Nakawa; Kololo; Wakiso |
| `/terms-of-service-privacy` | buyer | mobile | - | - | arrow_back_ios_new; expand_less | - |
| `/hub/hub-returns-quarantine-bay` | hub | tablet | - | Work Hub Operations | - | Release to Victoria Tech (Sign Required) |
| `/seller/riders-seller` | seller | mobile | - | - | menu; search; notifications3; dark_modelight_mode; close | - |
| `/seller/products-seller` | seller | mobile | Filter Catalog | Inventory & Catalog | menu; search; notifications3; dark_modelight_mode; close | - |
| `/admin/homepage-ads-management` | admin | tablet | - | Admin Oversight | notifications; layers Hero Carousel Slots 3 Active; flash_on Flash Sale Lightning Deals 12 SKUs; storefront Featured Stores 4 Slots | Hero Carousel Slots3 Active; Flash Sale Lightning Deals12 SKUs; Featured Stores4 Slots |
| `/seller/add-product-step-4-catalog-details-seller` | seller | mobile | - | Catalog Specifications | menu; notifications3; dark_modelight_mode; close; logoutLog Out | - |
| `/seller/seller-add-product-5-step-ai-flow` | seller | desktop | - | Seller Operations | dark_modeDark; light_modeLight; notifications | Proceed to Step 3: AI Description & Specs |
| `/rider/boda-rider-delivery-task-execution-code-entry` | rider | mobile | - | - | dark_mode; notifications; backspace | Report Delivery Issue / Damaged Item |
| `/seller/seller-edit-existing-product` | seller | desktop | - | Seller Operations | dark_modeDark; light_modeLight; notifications; archive | - |
| `/store-page-soundcore-official-1` | buyer | desktop | - | - | search; share; grid_view; view_list; favorite_border | - |
| `/hub/delivery-addresses-hubs` | hub | desktop | Active Destinations 3 Locations | Work Hub Operations; Active Destinations3 Locations | searchSearch | - |
| `/seller/seller-dispute-response` | seller | tablet | - | Seller Operations | light_mode; dark_mode; play_circle; delete | Submit Counter-Evidence to Arbitration Desk |
| `/admin/payout-queue-commission-matrix` | admin | tablet | - | Admin Oversight | dark_mode; notifications | Authorize Manual Escrow Sweep (UGX 37,360,000); Stage Rate Change & Publish Notice |
| `/hub/hub-storage-aging-matrix` | hub | desktop | - | Work Hub Operations | - | - |
| `/order-confirmation-delivery-code` | buyer | mobile | - | - | arrow_back; more_vert | Order Summary1 Item from SoundCore Uganda |
| `/admin/audit-log-security-ledger` | admin | tablet | - | Admin Oversight | - | - |
| `/super-admin/overview-super-admin` | super-admin | mobile | Superadmin Controller | - | menu; routine; notifications; close; logoutExit | - |
| `/hub/hub-pickup-handover-console` | hub | tablet | - | Work Hub Operations | - | Confirm Handover & Release Escrow (UGX 248,500) |
| `/order-delivered-completed` | buyer | mobile | - | - | close; star | - |
| `/seller/orders-seller` | seller | mobile | - | Orders | menu; search; notifications3; dark_modelight_mode; close | New3; Processing5; Ready for Pickup4; Shipped8; Delivered32 |
| `/rider/rider-map-rider` | rider | mobile | - | - | ONLINE; notifications; light_mode; traffic; add | - |
| `/seller/seller-order-detail-seller` | seller | mobile | Seller Order Detail | Order Details | arrow_back_ios_new | - |
| `/admin/admin-order-detail-oversight` | admin | mobile | - | Order Oversight Detail | chevron_left | - |
| `/admin/overview-admin` | admin | mobile | - | - | sync_alt; tune | - |
| `/forgot-password-buyer` | buyer | mobile | - | - | arrow_back; more_vert; visibility | - |
| `/seller/seller-riders-fleet-logistics` | seller | desktop | Assign Courier to Order | Seller Operations | dark_modeDark; light_modeLight; notifications; fullscreen; close | - |
| `/hub/hub-storage-aging-matrix-hub` | hub | mobile | - | Hub Storage & Aging | chevron_left; barcode_scanner; tune | - |
| `/admin/orders-oversight-admin` | admin | mobile | Patricia Namubiru | - | menu; routine; notifications; close; logoutExit | - |
| `/admin/locked-dispatches-admin` | admin | mobile | - | - | arrow_back; routine; call Call Stage Chair Direct Dispatch Link | Reroute to Central William St Hub; Cancel & Escalate to Dispute Desk; Call Stage ChairDirect Dispatch Link; Masked Phone AlertOverride Silence State |
| `/help-centre-support` | buyer | tablet | - | - | search; close | How do I share my 6-Digit Delivery Release Code?; What if the rider is delayed in Kampala traffic?; Who pays for the boda courier on a return? |
| `/my-orders` | buyer | mobile | - | - | arrow_back; tune; To Pay 1 | To Pay1 |
| `/seller/returns-disputes-seller` | seller | mobile | Returns And Disputes | Returns & Disputes | arrow_back_ios_new; dark_modelight_mode; Requests 2; In Dispute 1; Resolved 14 | Requests2; In Dispute1; Resolved14; Offer Replacement Item (Direct Swap); Submit Dispute Response & Photos |
| `/admin/overview-admin` | admin | mobile | Patricia Namubiru | Escrow Ledger | menu; routine; notifications; close; logoutExit | - |
| `/help-centre-support` | buyer | mobile | - | - | arrow_back; share | Escrow OfficerLive dispute handlingLaunch Chat |
| `/my-orders-order-detail` | buyer | mobile | - | - | tune; Active 2; Completed 14; Returns & Disputes 1; star | Active2; Completed14; Returns & Disputes1 |
| `/seller/add-product-step-3-ai-description-seller` | seller | mobile | - | AI Product Details | arrow_back; menu; notifications3; dark_modelight_mode; close | LugandaBeta Soon |
| `/live-rider-tracking-boda-map` | buyer | mobile | - | - | arrow_back; emergency; my_location; layers; explore | Chat in App1 |
| `/pickup-station-chooser` | buyer | tablet | - | - | search; add; remove; near_me; traffic | - |
| `/seller/seller-analytics-performance-heatmaps-1` | seller | tablet | - | Seller Operations | light_mode; notifications | - |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | desktop | - | Work Hub Operations | - | - |
| `/hub/hub-station-command-overview` | hub | desktop | - | Work Hub Operations | - | - |
| `/empty-error-states-suite` | buyer | mobile | - | - | arrow_back_ios_new | Change Payment Method (Airtel / Visa) |
| `/pickup-station-chooser` | buyer | desktop | - | - | search; my_location; add; remove; explore | - |
| `/seller/seller-notifications-center` | seller | desktop | - | Seller Operations | light_mode; All Notifications 38; Orders & Dispatch 16; Escrow & Payouts 8; Returns & Disputes 4 Urgent | Orders & Dispatch16; Escrow & Payouts8; Returns & Disputes4 Urgent; Security & KYC6 |
| `/admin/locked-dispatches-pin-overrides` | admin | desktop | - | Admin Oversight | dark_mode; notifications4 | - |
| `/followed-stores-buyer` | buyer | tablet | - | - | photo_camera; tune | - |
| `/escrow-dispute-return-request` | buyer | mobile | - | - | arrow_back; add_a_photo Add Photo or 15s Video; qr_code_scanner Scan Box S/N Tamper seal | Add Photoor 15s Video; Scan Box S/NTamper seal |
| `/seller/seller-order-detail-seller` | seller | mobile | - | Order Details | chevron_left; close; content_copy | - |
| `/hub/hub-line-haul-transit-manifest` | hub | desktop | - | Work Hub Operations | - | - |
| `/admin/audit-log-admin-1` | admin | mobile | - | - | arrow_back; routine | - |
| `/sign-in-2` | buyer | desktop | - | - | visibility | - |
| `/hub/hub-station-settings-shift-handover` | hub | tablet | - | Work Hub Operations | - | Execute Shift Handover & Lock Morning Docket |
| `/my-orders-order-detail` | buyer | desktop | - | - | All Orders 8; Processing 2; In-Transit SafeBoda 1; Delivered 4 | All Orders8; Processing2; In-Transit SafeBoda1; Delivered4; Disputes & Escrow Holds1 |
| `/super-admin/danger-zone-role-change-super-admin` | super-admin | mobile | - | - | arrow_back | - |
| `/seller/add-product-step-5-buyer-preview-submit-seller` | seller | mobile | - | Preview & Publish | arrow_back; menu; notifications3; dark_modelight_mode; close | Submit for ReviewEstimated approval < 2 hours |
| `/seller/seller-wallet-payouts` | seller | tablet | - | Wallet & Payouts | dark_mode; notifications | Confirm Instant Cash-out: UGX 6,240,000 |
| `/search-results-filter-drawer` | buyer | tablet | - | - | photo_camera; grid_view; view_list; favorite; add_shopping_cart | - |
| `/seller/seller-notifications-center` | seller | tablet | - | Seller Operations | light_mode; dark_mode; New Orders 4; Returns & Disputes 2; call | New Orders4; Returns & Disputes2 |
| `/buyer-account-profile` | buyer | tablet | - | - | search | - |
| `/rider/failed-delivery-modal-rider` | rider | mobile | - | - | arrow_back | Confirm Failed Delivery & Route to Hub; Cancel & Continue Delivery Attempt |
| `/admin/product-moderation-catalog-review` | admin | tablet | - | Admin Oversight | dark_mode; notifications4; pending_actions Pending Review 14; warning Flagged by AI/Users 6; block Rejected 24 | Pending Review14; Flagged by AI/Users6; Rejected24; Approved Today52 |
| `/admin/sellers-directory-admin-1` | admin | mobile | - | - | arrow_back; routine; tune | - |
| `/hub/hub-rider-dispatch-courier-staging` | hub | desktop | - | Work Hub Operations | - | Seal Bag & Authorize Courier Dispatch |
| `/seller/seller-store-profile-kyc` | seller | desktop | - | Seller Operations | light_mode; notifications3; content_copy; visibility; sync | - |
| `/seller/invite-courier-bottom-sheet-modal-seller` | seller | mobile | - | Invite Boda Courier | menu; search; notifications3; dark_modelight_mode; close | - |
| `/hub/hub-line-haul-transit-manifest` | hub | desktop | - | Work Hub Operations | - | - |
| `/mtn-momo-ussd-pin-prompt` | buyer | tablet | - | - | search; close | Switch to Airtel Money or Visa / Mastercard |
| `/product-detail-soundcore-space-one-1` | buyer | desktop | - | - | search; favorite_border; Customer Reviews 420; chevron_left; chevron_right | Customer Reviews420 |
| `/seller/store-profile-seller` | seller | mobile | - | Store Profile | menu; search; notifications3; dark_modelight_mode; logoutLog Out | - |
| `/categories` | buyer | mobile | - | - | notifications; tune; add_shopping_cart | - |
| `/seller/seller-analytics-performance-heatmaps` | seller | desktop | - | Seller Operations | dark_mode; notifications3 | - |
| `/seller/seller-discounts-flash-sales-promotion-builder` | seller | desktop | - | Seller Operations | light_mode; notifications3; content_copy | - |
| `/hub/returns-damaged-goods-quarantine-bay-work-hub` | hub | mobile | - | - | flashlight_on; volume_up; close; shield_person | Scan New Damaged Parcel into Quarantine |
| `/admin/escrow-disputes-admin` | admin | mobile | Patricia Namubiru | Escrow Disputes | menu; routine; notifications; close; logoutExit | Refund Buyer in FullUGX 280,000; Release Escrow to SellerFull Payout; Authorize Partial Refund SplitCustom UGX |
| `/seller/seller-dispute-response-1` | seller | mobile | Dispute Resolution | Dispute Response | arrow_back | - |
| `/admin/riders-fleet-directory` | admin | tablet | - | Admin Oversight | notifications; All Couriers 248; check_circle SafeBoda Stage Verified 192; navigation In-Transit 184; warning Exception / Flagged 3 | All Couriers248; SafeBoda Stage Verified192; In-Transit184; Exception / Flagged3; Standby Nakasero Hub26 |
| `/seller/seller-dispute-response-2` | seller | mobile | Dispute Resolution | Dispute Settlement | arrow_back | - |
| `/register-2` | buyer | desktop | - | - | visibility | - |
| `/search-results-2` | buyer | desktop | - | - | search; grid_view; view_list | - |
| `/returns-disputes` | buyer | mobile | - | - | arrow_back; support_agent | - |
| `/hub/more-hub-agent` | hub | mobile | - | More Hub Controls | notifications; dark_mode; badge | End Shift & Handover Station Docket |
| `/seller/seller-inbound-return-tamper-inspection` | seller | desktop | - | Seller Operations | dark_mode; notifications | Attach Secondary Macro Image (Optional) |
| `/seller/seller-inbound-return-tamper-inspection` | seller | tablet | - | Seller Operations | dark_mode; notifications4 | Capture Additional Angle (Camera Sync); Confirm Inbound Acceptance & Release Resolution |
| `/privacy-policy-buyer` | buyer | mobile | - | - | arrow_back; more_vert | - |
| `/scan-qr-handover` | buyer | mobile | - | - | arrow_back; emergency; close | - |
| `/become-a-seller-4-steps` | buyer | tablet | - | - | notifications; photo_camera | - |
| `/sign-in-register` | buyer | tablet | - | - | visibility; MoMo MTN MoMo ID | MoMoMTN MoMo ID |
| `/hub/hub-rider-dispatch-courier-staging` | hub | desktop | - | Work Hub Operations | - | Seal Bag & Authorize Courier Dispatch |
| `/admin/overpayments-refunds` | admin | tablet | - | Admin Oversight | All Queue 18; Pending Approval 6; Dispatched to MoMo 8; Settled Today 32; Failed / Re-try 4 | All Queue18; Pending Approval6; Dispatched to MoMo8; Settled Today32; Failed / Re-try4 |
| `/hub/hub-returns-quarantine-bay` | hub | tablet | - | Work Hub Operations | - | Seal in Quarantine & Submit Forensic Docket; Release to Victoria Tech (Sign Required) |
| `/admin/audit-log-admin-2` | admin | mobile | Audit Log | Security Ledger | - | - |
| `/admin/commission-rates-earnings-admin` | admin | mobile | - | - | arrow_back; routine | - |
| `/seller-application-status` | buyer | tablet | - | - | notifications; photo_camera | - |
| `/checkout-step-by-step-flow` | buyer | mobile | - | - | arrow_back_ios_new; share; close | - |
| `/rider/rider-offline-mode-cached-manifest` | rider | tablet | - | Boda Rider Console | - | CONFIRM OFFLINE HANDOVER & SAVE TO SYNC QUEUE |
| `/hub/hub-line-haul-transit-manifest-handover-2` | hub | tablet | - | Work Hub Operations | photo_camera | SEAL TRUCK, SIGN MANIFEST & RELEASE DISPATCH |
| `/hub/hub-station-command-overview` | hub | desktop | - | Work Hub Operations | qr_code_scanner Inbound Intake Scan F2; inventory_2 Stage Bag F4; local_shipping Line-Haul F7; receipt_long Shift Handover F9 | Inbound Intake ScanF2; Stage BagF4; Line-HaulF7; Shift HandoverF9 |
| `/seller/seller-overview` | seller | desktop | - | Seller Operations | dark_modeDark; light_modeLight; notifications; tune; call | - |
| `/admin/riders-fleet-directory` | admin | desktop | - | Admin Oversight | dark_mode; notifications4; restart_alt; emergency; block | - |
| `/seller/discounts-ads-seller` | seller | mobile | Discounts And Ads | Discounts & Ads | arrow_back_ios_new; dark_modelight_mode; content_copy; pause_circle; edit | - |
| `/admin/riders-fleet-directory` | admin | desktop | - | Admin Oversight | light_mode; notifications; visibility; alt_route; block | - |
| `/vouchers-discounts` | buyer | mobile | - | - | arrow_back; help_outline; cancel; Active 4; Used (6) | Active4; Used(6); Expired(2) |
| `/phone-verification-buyer-auth` | buyer | mobile | - | - | arrow_back_ios_new | - |
| `/admin/locked-dispatches-pin-overrides` | admin | desktop | - | Admin Oversight | light_mode; notifications; All Exceptions 6; Buyer Phone Dead / Unreachable 3; Wrong Code Entered 3x 2 | All Exceptions6; Buyer Phone Dead / Unreachable3; Wrong Code Entered 3x2; Tamper Seal Disputed1 |
| `/categories-mega-directory-1` | buyer | desktop | - | - | search; close | - |
| `/admin/overpayments-refunds-console` | admin | desktop | - | Admin Oversight | dark_mode; notifications; close; chevron_left; chevron_right | Authorize Immediate MTN MoMo Reversal |
| `/seller/seller-discounts-flash-sales-promotion-builder-1` | seller | tablet | - | Seller Operations | light_mode; notifications | - |
| `/notifications` | buyer | desktop | - | - | All Alerts 8; electric_moped Orders & Delivery 4; lock Escrow & Payments 2; local_offer Price Drops & Deals 2; content_copy | All Alerts8; Orders & Delivery4; Escrow & Payments2; Price Drops & Deals2 |
| `/seller/seller-edit-existing-product` | seller | desktop | - | Seller Operations | light_mode; notifications; more_vert | - |
| `/rider/deliveries-rider` | rider | mobile | - | - | ONLINE; notifications; light_mode; close | - |
| `/admin/orders-oversight-master-detail` | admin | desktop | - | Admin Oversight | dark_mode; notifications4 | - |
| `/hub/hub-rider-dispatch-courier-staging` | hub | tablet | - | Work Hub Operations | Staged Bags 8; Available Couriers 14; more_vert | Staged Bags8; Available Couriers14 |
| `/notifications-buyer` | buyer | mobile | - | - | arrow_back; more_vert | - |
| `/hub/hub-pickup-handover-console` | hub | tablet | - | Work Hub Operations | - | Confirm Handover & Release Escrow (UGX 248,500) |
| `/seller/seller-orders-master-detail` | seller | desktop | - | Seller Operations | light_mode; notifications; cancel; All Orders 142; Pending Dispatch 6 | All Orders142; Pending Dispatch6; In Transit14; Awaiting OTP Code8; Delivered & Released110 |
| `/seller/add-product-step-2-ai-photo-studio-seller` | seller | mobile | - | AI Studio Enhancer | arrow_back; menu; notifications3; dark_modelight_mode; close | - |
| `/my-orders-order-detail` | buyer | tablet | - | - | search; All Orders 8; Active / In-Transit 2; Completed 5; Returns & Disputes 1 | All Orders8; Active / In-Transit2; Completed5; Returns & Disputes1 |
| `/seller/seller-applications-kyc` | seller | desktop | Uganda Tech Gadgets Ltd; Kampala Organic Harvest; Victoria Apparel & Footwear; Pearl Solar Systems | Seller Operations | dark_mode; notifications | - |
| `/admin/locked-dispatches-pin-overrides` | admin | tablet | - | Admin Oversight | - | - |
| `/order-confirmation-delivery-code` | buyer | tablet | - | - | search | - |
| `/hub/hub-customer-pickup-handover-console` | hub | desktop | - | Work Hub Operations | Arrived at Counter 3; Ready for Collection 39; timer Expiring Today 8 | Arrived at Counter3; Ready for Collection39; Expiring Today8; Release Goods & Confirm Escrow Disbursement |
| `/seller/seller-discounts-flash-sales-promotion-builder` | seller | desktop | - | Seller Operations | dark_mode; notifications3 | - |
| `/admin/audit-log-security-ledger` | admin | desktop | - | Admin Oversight | dark_mode; chevron_left; chevron_right | Download Cryptographic Certificate (PDF); Re-Verify Block Against Stanbic Trust Anchor |
| `/seller/seller-notifications-center` | seller | desktop | - | Seller Operations | dark_mode; All Notifications 38; local_shipping Orders & Dispatch 16; account_balance_wallet Escrow & Payouts 8; assignment_return Returns & Disputes 4 Urgent | Orders & Dispatch16; Escrow & Payouts8; Returns & Disputes4 Urgent; Security & KYC6; Platform Updates4 |
| `/seller/seller-orders-master-detail` | seller | desktop | - | Seller Operations | dark_modeDark; light_modeLight; notifications; All Orders 142; Pending Dispatch 6 | All Orders142; Pending Dispatch6; In Transit14; Awaiting OTP Code8; Delivered & Released110 |
| `/payment-methods-1` | buyer | mobile | - | - | arrow_back; help_outline; more_vert; close; MoMo MTN Uganda 077 / 078 | + Add Bank CardVisa, Mastercard with 3D-Secure; MoMoMTN Uganda077 / 078; airtelAirtel Uganda070 / 075 |
| `/product-detail-soundcore-space-one` | buyer | tablet | - | - | mic; search; favorite; check Jet Black UGX 248,500; Cream White UGX 248,500 | Jet BlackUGX 248,500; Cream WhiteUGX 248,500; Sky BlueUGX 255,000 |
| `/product-detail-soundcore-space-one-2` | buyer | desktop | - | - | search; favorite_border; Customer Reviews 420; chevron_left; chevron_right | Customer Reviews420 |
| `/hub/rider-profile-support-hub` | hub | tablet | - | Work Hub Operations | - | How SwiftCart Escrow Protects Your Rider Fee; Cash-On-Delivery (COD) vs Escrow Flow; Sign Out & Close Shift (Terminal #UFE219K) |
| `/delivery-addresses` | buyer | mobile | - | - | arrow_back; share; help_outline | - |
| `/hub/hub-storage-aging-matrix` | hub | tablet | - | Work Hub Operations | Bay A 38 pcs Electronics & Small; Bay B (Active) 54 pcs Audio & Accessories; Bay C 36 pcs Bulky / Heavy Goods; shield Vault H 14 pcs Flagships & Gold | Bay A38 pcsElectronics & Small; Bay B (Active)54 pcsAudio & Accessories; Bay C36 pcsBulky / Heavy Goods; Vault H14 pcsFlagships & Gold; Stage for Return-to-Merchant (RTO) |
| `/super-admin/super-admin-operational-overview` | super-admin | tablet | - | Super-Admin Master Control | tune | - |
| `/seller/seller-overview` | seller | desktop | - | Seller Operations | light_mode; notifications; call; send_to_mobile; two_wheeler | - |
| `/hub/hub-intake-high-speed-barcode-scanner` | hub | tablet | - | Work Hub Operations | backspace | Suspend Scan Session & Hold Courier Bag |
| `/hub/hub-customer-pickup-handover-console` | hub | desktop | Customer Pickup Counter & Handover Station | Work Hub Operations | Arrived at Counter 3 | Arrived at Counter3 |
| `/search` | buyer | mobile | - | - | arrow_back; mic; photo_camera; close | - |
| `/admin/payout-queue-telecom-settlements` | admin | desktop | - | Admin Oversight | dark_mode; notifications; All Settlements 484; tune; close | All Settlements484 |
| `/rider/rider-failed-delivery-code-locked-state` | rider | tablet | - | Boda Rider Console | - | - |
| `/seller/seller-returns-disputes-console` | seller | desktop | - | Seller Operations | light_mode; notifications | Submit Response & Issue SafeBoda Return Ticket |
| `/seller/seller-returns-disputes-console` | seller | desktop | - | Seller Operations | dark_mode; notifications; Under Review 1 | Under Review1; Submit Response & Issue SafeBoda Return Ticket |
| `/search-results-1` | buyer | desktop | - | - | search; grid_view; view_list | - |
| `/rider/rider-simulator-security-locked-exceptions` | rider | desktop | Delivery PIN Locked (3 Failed Attempts) | Boda Rider Console; Delivery PIN Locked(3 Failed Attempts) | refresh | Authorize Remote PIN Reset & Unlock Deadbolt; Order Immediate Return to Station #04 |
| `/home-marketplace-1` | buyer | desktop | - | - | search | - |
| `/seller/merchant-return-inspection-acceptance` | seller | mobile | Inspect Returned Item | Inspect Return Tamper Bag | arrow_back | - |
| `/hub/hub-intake-high-speed-barcode-scanner` | hub | tablet | - | Work Hub Operations | backspace | Suspend Scan Session & Hold Courier Bag |
| `/pickup-station-chooser` | buyer | mobile | - | - | arrow_back; more_vert; mic; All 18 | All18 |
| `/admin/riders-fleet-operations-live-dispatch` | admin | desktop | - | Admin Oversight | light_mode; notifications; my_location; add; remove | - |
| `/hub/hub-returns-rto-bay` | hub | desktop | - | Work Hub Operations | drive_file_move; qr_code_scanner | - |
| `/phone-verification-1` | buyer | desktop | - | - | Resend Code in 44s | Resend Code in 45s |
| `/hub/hub-station-command-overview-1` | hub | tablet | - | Work Hub Operations | Bay A1 34 Acacia Mall P2P; Bay A2 28 Wampewo Ave; Bay A3 26 Nakasero Hill; Bay B1 22 Luwum St Route; Bay B2 25 William St Node | Bay A134Acacia Mall P2P; Bay A228Wampewo Ave; Bay A326Nakasero Hill; Bay B122Luwum St Route; Bay B225William St Node |
| `/sign-in-buyer` | buyer | mobile | - | - | arrow_back; more_vert; visibility | - |
| `/categories-mega-directory-2` | buyer | desktop | - | - | search; close | - |
| `/seller/seller-analytics-performance-heatmaps` | seller | desktop | - | Seller Operations | light_mode; notifications3 | - |
| `/super-admin/platform-settings-fee-matrix` | super-admin | tablet | - | Super-Admin Master Control | dark_mode; edit | - |
| `/seller/seller-overview-dashboard-2` | seller | tablet | - | Seller Operations | light_mode; notifications | - |
| `/help-centre-faq` | buyer | desktop | - | - | apps All Help Topics 15; local_shipping Buying & SafeBoda Ordering 3; payments MTN & Airtel MoMo Rails 3; verified_user SwiftCart Escrow Guarantee 3; assignment_return Returns & Rapid Reversal 3 | All Help Topics15; Buying & SafeBoda Ordering3; MTN & Airtel MoMo Rails3; SwiftCart Escrow Guarantee3; Returns & Rapid Reversal3 |
| `/admin/locked-dispatches-pin-overrides` | admin | tablet | - | Admin Oversight | notifications; filter_list | - |
| `/super-admin/super-admin-operational-overview` | super-admin | tablet | - | Super-Admin Master Control | dark_mode; notifications4 | - |
| `/hub/hub-inbound-intake-barcode-scan` | hub | desktop | #SC-98241 | 0.85 kg; Current Batch Intake Register (Auto-syncing to Kampala Primary Ledger) | Work Hub Operations; #SC-98241| 0.85 kg; Current Batch Intake Register(Auto-syncing to Kampala Primary Ledger) | - | Complete Inbound Batch & Reconcile Manifest |
| `/checkout-step-flow` | buyer | desktop | - | - | search | - |
| `/payment-methods-2` | buyer | mobile | - | - | arrow_back; help_outline; more_vert; close; MTN 077 / 078 | Add Bank CardVisa, Mastercard with 3D Secure; MTN077 / 078; Airtel070 / 075 |
| `/delivery-addresses-vouchers` | buyer | tablet | - | - | search; content_copy | - |
| `/hub/hub-storage-aging-matrix` | hub | tablet | - | Work Hub Operations | Bay A 38 pcs Electronics & Small; Bay B 54 pcs Audio & Accessories; Bay C 36 pcs Bulky Logistics; Vault H 14 pcs Flagships / High Val | Bay A38 pcsElectronics & Small; Bay B54 pcsAudio & Accessories; Bay C36 pcsBulky Logistics; Vault H14 pcsFlagships / High Val |
| `/` | buyer | desktop | - | - | search | How does SwiftCart Escrow work in Uganda?; What is the 6-digit delivery confirmation code?; How fast is SafeBoda delivery in Kampala?; Can I pay directly with MTN MoMo or Airtel Money? |
| `/admin/audit-log-security-ledger` | admin | tablet | - | Admin Oversight | notifications; filter_alt_off; chevron_left; chevron_right; content_copy | - |
| `/hub/hub-station-command-overview-2` | hub | tablet | - | Work Hub Operations | Bay A1 34 Acacia Mall P2P; Bay A2 28 Wampewo Ave; Bay A3 26 Nakasero Hill; Bay B1 22 Luwum St Route; Bay B2 25 William St Node | Bay A134Acacia Mall P2P; Bay A228Wampewo Ave; Bay A326Nakasero Hill; Bay B122Luwum St Route; Bay B225William St Node |
| `/dispute-evidence-form` | buyer | mobile | - | - | arrow_back; help_outline; delete | - |
| `/super-admin/users-roles-with-role-change` | super-admin | tablet | - | Super-Admin Master Control | dark_mode; notifications4; filter_list; history; more_vert | - |
| `/admin/overpayments-refunds-console` | admin | desktop | - | Admin Oversight | light_mode; dark_mode; notifications; chevron_left; chevron_right | - |
| `/register-buyer` | buyer | tablet | - | - | visibility | - |
| `/rider/offline-mode-error-states-for-boda-rider-app` | rider | mobile | - | - | arrow_back | - |
| `/seller/seller-wallet-automated-payouts` | seller | desktop | - | Seller Operations | light_mode; notifications; chevron_right | - |
| `/hub/hub-line-haul-transit-manifest-handover` | hub | tablet | - | Work Hub Operations | photo_camera | SEAL TRUCK, SIGN MANIFEST & RELEASE DISPATCH |
| `/product-detail` | buyer | mobile | - | - | arrow_back_ios_new; share; favorite_border; search; shopping_cart | - |
| `/rider/rider-map-live-dispatch-navigation` | rider | tablet | - | Boda Rider Console | volume_up; my_location; close | - |
| `/seller/seller-overview-dashboard-1` | seller | tablet | Seller Command Overview | Seller Operations | keyboard_double_arrow_left; menu; light_mode; notifications | - |
| `/sign-in-1` | buyer | desktop | - | - | smartphone Mobile Number Uganda Fav; visibility | Mobile NumberUganda Fav |
| `/seller/seller-store-profile-kyc` | seller | desktop | - | Seller Operations | dark_mode; notifications3; content_copy | - |
| `/seller/seller-riders-fleet-logistics` | seller | desktop | Pending Hub Orders; Order #SC-98239 | Seller Operations | light_mode; notifications; fullscreen; two_wheeler Assign Courier Now; View All 14 Pending Store Orders → | - |
| `/escrow-dispute-return-request` | buyer | tablet | - | - | search | - |
| `/cart-multi-vendor` | buyer | desktop | - | - | search | - |
| `/add-money-bottom-sheet` | buyer | mobile | - | - | MoMo MTN Uganda *165# Instant; airtel Airtel Money *185# USSD | MoMoMTN Uganda*165# Instant; airtelAirtel Money*185# USSD |
| `/mtn-momo-ussd-165-pin-prompt` | buyer | mobile | - | - | arrow_back; backspace | - |
| `/cart-multi-vendor` | buyer | tablet | - | - | search | - |
| `/mtn-momo-ussd-pin-prompt` | buyer | desktop | - | - | search | - |
| `/seller/seller-products-bulk-price-update` | seller | desktop | - | Seller Operations | dark_modeDark; light_modeLight; notifications; tune; more_vert | Flat UGX ReductionDeduct exact Shillings amount |

## Complete Screen Fidelity Breakdown

| Route | Role | Size | Diff % | Status | Expected Heading | Mockup Folder | Side-by-Side Comparison |
|---|---|---|---|---|---|---|---|
| `/seller/overview-seller` | seller | mobile | 93.06% | **BAD** | "SoundCore Uganda" | `overview_swiftcart_seller_dark` | [View Image](fidelity-images/mobile-seller-overview_swiftcart_seller_dark.png) |
| `/hub/overview-hub-agent` | hub | mobile | 92.88% | **BAD** | "Isaac Kato" | `overview_swiftcart_hub_agent_dark` | [View Image](fidelity-images/mobile-hub-overview_swiftcart_hub_agent_dark.png) |
| `/admin/admin-command-overview` | admin | desktop | 92.83% | **BAD** | "Platform Operations Command Overview" | `admin_command_overview_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-admin_command_overview_swiftcart_desktop_dark.png) |
| `/seller/seller-applications-kyc-verification` | seller | tablet | 91.95% | **BAD** | "Kampala Sound Hub Ltd" | `seller_applications_kyc_verification_tablet` | [View Image](fidelity-images/tablet-seller-seller_applications_kyc_verification_tablet.png) |
| `/admin/sellers-directory-account-governance` | admin | desktop | 91.83% | **BAD** | "Verified Merchants Directory & Account Actions" | `sellers_directory_account_governance_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-sellers_directory_account_governance_swiftcart_desktop_dark.png) |
| `/admin/product-moderation-catalog-review` | admin | desktop | 91.24% | **BAD** | "Product Catalog Moderation & Brand Safety Desk" | `product_moderation_catalog_review_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-product_moderation_catalog_review_swiftcart_desktop_dark.png) |
| `/rider/overview-rider` | rider | mobile | 90.7% | **BAD** | "Rider Shortcuts" | `overview_swiftcart_rider_dark` | [View Image](fidelity-images/mobile-rider-overview_swiftcart_rider_dark.png) |
| `/hub/hub-returns-rto-bay` | hub | desktop | 90.26% | **BAD** | "Returns & Return-To-Origin (RTO) Processing Bay" | `hub_returns_rto_bay_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_returns_rto_bay_swiftcart_desktop_dark.png) |
| `/super-admin/overview-super-admin` | super-admin | mobile | 90.16% | **BAD** | "" | `overview_swiftcart_super_admin_dark` | [View Image](fidelity-images/mobile-super-admin-overview_swiftcart_super_admin_dark.png) |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | desktop | 90.08% | **BAD** | "Damaged Goods & Quarantine Bay Intake" | `hub_damaged_goods_quarantine_bay_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_damaged_goods_quarantine_bay_swiftcart_desktop_dark.png) |
| `/seller/edit-existing-product-seller` | seller | mobile | 89.92% | **BAD** | "Live Catalog Node: William St." | `edit_existing_product_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-edit_existing_product_swiftcart_seller.png) |
| `/hub/hub-storage-aging-matrix-hub` | hub | mobile | 89.58% | **BAD** | "William St Central Hub #04" | `hub_storage_aging_matrix_swiftcart_hub` | [View Image](fidelity-images/mobile-hub-hub_storage_aging_matrix_swiftcart_hub.png) |
| `/seller/seller-overview-dashboard` | seller | tablet | 87.46% | **BAD** | "Live Order Stream & Fulfillment Queue" | `seller_overview_dashboard_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_overview_dashboard_tablet_dark.png) |
| `/rider/rider-seller-pickup-delivery-detail` | rider | mobile | 85.21% | **BAD** | "Dispatch Progress" | `rider_seller_pickup_delivery_detail` | [View Image](fidelity-images/mobile-rider-rider_seller_pickup_delivery_detail.png) |
| `/admin/sellers-directory-account-governance` | admin | desktop | 82.29% | **BAD** | "Verified Merchants Directory & Account Actions" | `sellers_directory_account_governance_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-sellers_directory_account_governance_swiftcart_desktop_light.png) |
| `/seller/seller-add-product-with-ai-studio` | seller | tablet | 80.37% | **BAD** | "AI Enhancement Complete" | `seller_add_product_with_ai_studio_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_add_product_with_ai_studio_tablet_dark.png) |
| `/admin/admin-command-overview` | admin | desktop | 76.97% | **BAD** | "Platform Operations Command Overview" | `admin_command_overview_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-admin_command_overview_swiftcart_desktop_light.png) |
| `/rider/rider-reverse-pickup-return-inspection` | rider | tablet | 70.2% | **BAD** | "Arbitration Complaint Profile" | `rider_reverse_pickup_return_inspection_tablet` | [View Image](fidelity-images/tablet-rider-rider_reverse_pickup_return_inspection_tablet.png) |
| `/rider/rider-delivery-task-execution-code-entry` | rider | tablet | 67.48% | **BAD** | "Dennis Mukasa" | `rider_delivery_task_execution_code_entry_tablet` | [View Image](fidelity-images/tablet-rider-rider_delivery_task_execution_code_entry_tablet.png) |
| `/admin/product-moderation-catalog-review` | admin | desktop | 67.04% | **BAD** | "Product Catalog Moderation & Brand Safety Desk" | `product_moderation_catalog_review_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-product_moderation_catalog_review_swiftcart_desktop_light.png) |
| `/seller/seller-products-batch-pricing` | seller | tablet | 64.34% | **BAD** | "Products & Inventory" | `seller_products_batch_pricing_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_products_batch_pricing_tablet_dark.png) |
| `/rider/rider-deliveries-master-detail` | rider | tablet | 62.62% | **BAD** | "" | `rider_deliveries_master_detail_tablet` | [View Image](fidelity-images/tablet-rider-rider_deliveries_master_detail_tablet.png) |
| `/seller/seller-dispute-response` | seller | tablet | 61.24% | **BAD** | "Dispute Case #DSP-104 Response" | `seller_dispute_response_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_dispute_response_tablet_dark.png) |
| `/rider/rider-offline-mode-cached-manifest` | rider | tablet | 55.22% | **BAD** | "Sarah Namubiru (#SC-9952)" | `rider_offline_mode_cached_manifest_tablet_dark` | [View Image](fidelity-images/tablet-rider-rider_offline_mode_cached_manifest_tablet_dark.png) |
| `/hub/hub-line-haul-transit-manifest-handover-1` | hub | tablet | 52.75% | **BAD** | "Route Leg 01: William St Central Hub → Jinja Logistics Hub" | `hub_line_haul_transit_manifest_handover_tablet_light_1` | [View Image](fidelity-images/tablet-hub-hub_line_haul_transit_manifest_handover_tablet_light_1.png) |
| `/seller/seller-edit-product-with-ai-studio` | seller | tablet | 51.27% | **BAD** | "SoundCore Space One ANC" | `seller_edit_product_with_ai_studio_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_edit_product_with_ai_studio_tablet_dark.png) |
| `/hub/hub-station-command-overview` | hub | tablet | 49.75% | **BAD** | "Active Inbound Bags" | `hub_station_command_overview_tablet` | [View Image](fidelity-images/tablet-hub-hub_station_command_overview_tablet.png) |
| `/super-admin/users-roles-management-super-admin` | super-admin | desktop | 49.1% | **BAD** | "Staff Users & Role Governance" | `users_roles_management_super_admin_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-super-admin-users_roles_management_super_admin_swiftcart_desktop_dark.png) |
| `/super-admin/users-roles-management-super-admin` | super-admin | desktop | 45.53% | **BAD** | "Staff Users & Role Governance" | `users_roles_management_super_admin_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-super-admin-users_roles_management_super_admin_swiftcart_desktop_light.png) |
| `/seller/seller-products-bulk-price-update` | seller | tablet | 43.59% | **BAD** | "Products & Inventory Catalog" | `seller_products_bulk_price_update_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_products_bulk_price_update_tablet_dark.png) |
| `/live-boda-rider-tracking` | buyer | desktop | 42.31% | **BAD** | "SoundCore Space One ANC Headphones" | `live_boda_rider_tracking_desktop` | [View Image](fidelity-images/desktop-buyer-live_boda_rider_tracking_desktop.png) |
| `/` | buyer | mobile | 37.89% | **BAD** | "Mega Brand Sale • Up to 70% Off" | `home_swiftcart_marketplace_2` | [View Image](fidelity-images/mobile-buyer-home_swiftcart_marketplace_2.png) |
| `/admin/commission-rates-fee-matrix` | admin | desktop | 36.98% | **BAD** | "Commission Rates & Fee Matrix" | `commission_rates_fee_matrix_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-commission_rates_fee_matrix_swiftcart_desktop_light.png) |
| `/seller/seller-applications-kyc` | seller | desktop | 36.72% | **BAD** | "Seller Applications & Business KYC Dossier Review" | `seller_applications_kyc_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-seller-seller_applications_kyc_swiftcart_desktop_dark.png) |
| `/rider/rider-simulator-overview-fleet-map` | rider | desktop | 35.98% | **BAD** | "SECURED" | `rider_simulator_overview_fleet_map_swiftcart_desktop` | [View Image](fidelity-images/desktop-rider-rider_simulator_overview_fleet_map_swiftcart_desktop.png) |
| `/seller/seller-products-bulk-price-update` | seller | desktop | 34.6% | **BAD** | "Bulk Price Update" | `seller_products_bulk_price_update_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_products_bulk_price_update_swiftcart_desktop_light.png) |
| `/rider/rider-overview-dispatch-map` | rider | tablet | 31.71% | **BAD** | "Mesh Telematics Active: 4G LTE High-Precision GPS Mode" | `rider_overview_dispatch_map_tablet` | [View Image](fidelity-images/tablet-rider-rider_overview_dispatch_map_tablet.png) |
| `/order-delivered-write-review` | buyer | desktop | 30.66% | **BAD** | "Handover Confirmed" | `order_delivered_write_review_desktop` | [View Image](fidelity-images/desktop-buyer-order_delivered_write_review_desktop.png) |
| `/wishlist` | buyer | tablet | 30.58% | **BAD** | "My Wishlist" | `wishlist_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-wishlist_swiftcart_buyer_tablet.png) |
| `/seller/seller-riders-fleet-logistics` | seller | tablet | 29.82% | **BAD** | "Assign Courier to Order" | `seller_riders_fleet_logistics_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_riders_fleet_logistics_tablet_dark.png) |
| `/rider/rider-simulator-reverse-handover-inspection` | rider | desktop | 29.62% | **BAD** | "Reverse Pickup & Tamper Bag Inspection" | `rider_simulator_reverse_handover_inspection_swiftcart_desktop` | [View Image](fidelity-images/desktop-rider-rider_simulator_reverse_handover_inspection_swiftcart_desktop.png) |
| `/rider/rider-simulator-active-task-otp-simulation` | rider | desktop | 28.58% | **BAD** | "Grace Nantongo" | `rider_simulator_active_task_otp_simulation_swiftcart_desktop` | [View Image](fidelity-images/desktop-rider-rider_simulator_active_task_otp_simulation_swiftcart_desktop.png) |
| `/super-admin/users-roles-super-admin` | super-admin | mobile | 27.79% | **BAD** | "Patricia Namubiru" | `users_roles_swiftcart_super_admin` | [View Image](fidelity-images/mobile-super-admin-users_roles_swiftcart_super_admin.png) |
| `/hub/damaged-parcel-quarantine-bay-intake-hub-agent` | hub | mobile | 26.62% | **BAD** | "Damaged Parcel Intake" | `damaged_parcel_quarantine_bay_intake_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-damaged_parcel_quarantine_bay_intake_swiftcart_hub_agent.png) |
| `/admin/homepage-ads-admin` | admin | mobile | 25.96% | **BAD** | "Hero Carousel Manager" | `homepage_ads_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-homepage_ads_swiftcart_admin.png) |
| `/rider/rider-seller-pickup-delivery-detail` | rider | mobile | 25.81% | **BAD** | "Escrow Locked: UGX 340,000" | `rider_seller_pickup_delivery_detail_light` | [View Image](fidelity-images/mobile-rider-rider_seller_pickup_delivery_detail_light.png) |
| `/hub/hub-intake-sorting-station-work-hub` | hub | mobile | 25.06% | **BAD** | "#SC-9941-KLA" | `hub_intake_sorting_station_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-hub_intake_sorting_station_swiftcart_work_hub.png) |
| `/hub/rider-dispatch-courier-bag-staging-hub-agent` | hub | mobile | 24.83% | **CHECK** | "Kizito Brian" | `rider_dispatch_courier_bag_staging_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-rider_dispatch_courier_bag_staging_swiftcart_hub_agent.png) |
| `/hub/courier-bag-qr-scan-confirmation-modal-work-hub` | hub | mobile | 24.61% | **CHECK** | "Courier Bag QR Scan & Tamper Lock" | `courier_bag_qr_scan_confirmation_modal_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-courier_bag_qr_scan_confirmation_modal_swiftcart_work_hub.png) |
| `/live-boda-rider-tracking` | buyer | tablet | 24.56% | **CHECK** | "Mukasa Brian" | `live_boda_rider_tracking_tablet` | [View Image](fidelity-images/tablet-buyer-live_boda_rider_tracking_tablet.png) |
| `/admin/product-moderation-admin` | admin | mobile | 24.1% | **CHECK** | "Oraimo FreePods 4 ANC Edition" | `product_moderation_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-product_moderation_swiftcart_admin.png) |
| `/hub/hub-damaged-goods-quarantine-bay-2` | hub | tablet | 23.81% | **CHECK** | "SoundCore Space One ANC Headphones" | `hub_damaged_goods_quarantine_bay_tablet_light_2` | [View Image](fidelity-images/tablet-hub-hub_damaged_goods_quarantine_bay_tablet_light_2.png) |
| `/rider/boda-rider-reverse-pickup-package-inspection` | rider | mobile | 22.33% | **CHECK** | "Alex Kato" | `boda_rider_reverse_pickup_tamper_bag_inspection` | [View Image](fidelity-images/mobile-rider-boda_rider_reverse_pickup_tamper_bag_inspection.png) |
| `/rider/overview-rider` | rider | mobile | 21.62% | **CHECK** | "YOU ARE ONLINE" | `overview_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-overview_swiftcart_rider.png) |
| `/seller/seller-notifications` | seller | mobile | 20.98% | **CHECK** | "Seller Notifications" | `seller_notifications_swiftcart` | [View Image](fidelity-images/mobile-seller-seller_notifications_swiftcart.png) |
| `/admin/orders-oversight-detail` | admin | tablet | 20.43% | **CHECK** | "" | `orders_oversight_detail_tablet` | [View Image](fidelity-images/tablet-admin-orders_oversight_detail_tablet.png) |
| `/order-tracking-milestone-timeline` | buyer | tablet | 20.32% | **CHECK** | "Tracking Delivery #SC-ORD-9488" | `order_tracking_milestone_timeline_tablet` | [View Image](fidelity-images/tablet-buyer-order_tracking_milestone_timeline_tablet.png) |
| `/rider/profile-support-rider` | rider | mobile | 20.27% | **CHECK** | "Kizito Brian" | `profile_support_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-profile_support_swiftcart_rider.png) |
| `/rider/earnings-rider` | rider | mobile | 20.19% | **CHECK** | "Rider Earnings & Wallet" | `earnings_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-earnings_swiftcart_rider.png) |
| `/hub/line-haul-transit-manifest-creation-hub-agent` | hub | mobile | 19.96% | **CHECK** | "Downstream Hub Waypoints" | `line_haul_transit_manifest_creation_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-line_haul_transit_manifest_creation_swiftcart_hub_agent.png) |
| `/super-admin/audit-log-super-admin` | super-admin | mobile | 19.86% | **CHECK** | "ROLE_ELEVATION_AUTHORIZED" | `audit_log_swiftcart_super_admin` | [View Image](fidelity-images/mobile-super-admin-audit_log_swiftcart_super_admin.png) |
| `/super-admin/platform-settings-super-admin` | super-admin | mobile | 19.67% | **CHECK** | "Global Maintenance Mode" | `platform_settings_swiftcart_super_admin` | [View Image](fidelity-images/mobile-super-admin-platform_settings_swiftcart_super_admin.png) |
| `/cart` | buyer | mobile | 19.6% | **CHECK** | "Shopping Cart" | `cart_multi_vendor_grouped` | [View Image](fidelity-images/mobile-buyer-cart_multi_vendor_grouped.png) |
| `/hub/overview-hub-agent-light-mode` | hub | mobile | 19.21% | **CHECK** | "William St Central Hub #04" | `overview_swiftcart_hub_agent_light_mode` | [View Image](fidelity-images/mobile-hub-overview_swiftcart_hub_agent_light_mode.png) |
| `/hub/regional-linehaul-transit-handover-work-hub` | hub | mobile | 18.85% | **CHECK** | "Route #LH-UG-04" | `regional_linehaul_transit_handover_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-regional_linehaul_transit_handover_swiftcart_work_hub.png) |
| `/seller/add-product-step-1-photos-seller` | seller | mobile | 18.41% | **CHECK** | "Kampala Seller Photo Checklist" | `add_product_step_1_photos_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-add_product_step_1_photos_swiftcart_seller.png) |
| `/admin/sellers-directory-with-freeze-drawer` | admin | tablet | 18.33% | **CHECK** | "DIRECTORY & ESCROW ENFORCEMENT" | `sellers_directory_with_freeze_drawer_tablet` | [View Image](fidelity-images/tablet-admin-sellers_directory_with_freeze_drawer_tablet.png) |
| `/search-categories` | buyer | tablet | 17.97% | **CHECK** | "SoundCore Space One Active Noise Cancelling Headphones" | `search_categories_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-search_categories_swiftcart_tablet.png) |
| `/hub/hub-sorting-station-work-hub` | hub | mobile | 17.93% | **CHECK** | "Kampala Metro • East Corridor" | `hub_sorting_station_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-hub_sorting_station_swiftcart_work_hub.png) |
| `/seller/seller-discounts-flash-sales-promotion-builder-2` | seller | tablet | 17.75% | **CHECK** | "Promotions, Flash Deals & Sponsored Ads" | `seller_discounts_flash_sales_promotion_builder_tablet_light_2` | [View Image](fidelity-images/tablet-seller-seller_discounts_flash_sales_promotion_builder_tablet_light_2.png) |
| `/messages-notifications` | buyer | mobile | 17.58% | **CHECK** | "Live Seller Chats" | `messages_notifications_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-messages_notifications_swiftcart_uganda.png) |
| `/submit-dispute-photos` | buyer | mobile | 17.52% | **CHECK** | "SoundCore Space One ANC Headphones" | `submit_dispute_photos_swiftcart` | [View Image](fidelity-images/mobile-buyer-submit_dispute_photos_swiftcart.png) |
| `/admin/audit-log-security-ledger` | admin | desktop | 17.52% | **CHECK** | "Security Ledger & Forensic Audit" | `audit_log_security_ledger_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-audit_log_security_ledger_swiftcart_desktop_light.png) |
| `/hub/hub-intake-station-work-hub` | hub | mobile | 17.45% | **CHECK** | "KLA-CENTRAL" | `hub_intake_station_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-hub_intake_station_swiftcart_work_hub.png) |
| `/hub/scan-hub-agent` | hub | mobile | 17.23% | **CHECK** | "SoundCore Space One ANC" | `scan_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-scan_swiftcart_hub_agent.png) |
| `/admin/homepage-ads-management` | admin | tablet | 17.18% | **CHECK** | "Storefront & Marketplace Ads" | `homepage_ads_management_tablet_light` | [View Image](fidelity-images/tablet-admin-homepage_ads_management_tablet_light.png) |
| `/seller/seller-orders-master-detail-2` | seller | tablet | 17.02% | **CHECK** | "Order #SC-ORD-9488" | `seller_orders_master_detail_tablet_light_2` | [View Image](fidelity-images/tablet-seller-seller_orders_master_detail_tablet_light_2.png) |
| `/admin/admin-order-detail-oversight` | admin | mobile | 16.88% | **CHECK** | "" | `admin_order_detail_oversight` | [View Image](fidelity-images/mobile-admin-admin_order_detail_oversight.png) |
| `/sign-in-register` | buyer | mobile | 16.73% | **CHECK** | "+256" | `sign_in_register_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-sign_in_register_swiftcart_uganda.png) |
| `/hub/swiftcart-work-hub-shared-system-components` | hub | mobile | 16.73% | **CHECK** | "Field Operations KPIs" | `swiftcart_work_hub_shared_system_components_dark_light` | [View Image](fidelity-images/mobile-hub-swiftcart_work_hub_shared_system_components_dark_light.png) |
| `/seller/analytics-seller` | seller | mobile | 16.49% | **CHECK** | "Store Metrics" | `analytics_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-analytics_swiftcart_seller.png) |
| `/hub/hub-storage-aging-matrix` | hub | desktop | 16.32% | **CHECK** | "Storage & Aging Matrix" | `hub_storage_aging_matrix_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_storage_aging_matrix_swiftcart_desktop_light.png) |
| `/admin/product-moderation-catalog-review` | admin | tablet | 16.27% | **CHECK** | "SoundCore Space One Wireless ANC Headphones" | `product_moderation_catalog_review_tablet_light` | [View Image](fidelity-images/tablet-admin-product_moderation_catalog_review_tablet_light.png) |
| `/super-admin/admin-super-admin-command-overview` | super-admin | tablet | 16.24% | **CHECK** | "" | `admin_super_admin_command_overview_tablet` | [View Image](fidelity-images/tablet-super-admin-admin_super_admin_command_overview_tablet.png) |
| `/hub/hub-inbound-intake-barcode-scan` | hub | desktop | 16.08% | **CHECK** | "#SC-98241 | 0.85 kg" | `hub_inbound_intake_barcode_scan_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_inbound_intake_barcode_scan_swiftcart_desktop_light.png) |
| `/seller/assign-rider-bottom-sheet-modal-seller` | seller | mobile | 16.05% | **CHECK** | "Assign Dedicated Rider" | `assign_rider_bottom_sheet_modal_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-assign_rider_bottom_sheet_modal_swiftcart_seller.png) |
| `/rider/rider-return-pickup-rider` | rider | mobile | 15.61% | **CHECK** | "Dennis Mukasa" | `rider_return_pickup_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-rider_return_pickup_swiftcart_rider.png) |
| `/admin/freeze-seller-admin` | admin | mobile | 15.54% | **CHECK** | "Freeze Seller & Listings" | `freeze_seller_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-freeze_seller_swiftcart_admin.png) |
| `/seller/seller-analytics-performance-heatmaps-2` | seller | tablet | 15.51% | **CHECK** | "Store Analytics & Performance Intelligence" | `seller_analytics_performance_heatmaps_tablet_light_2` | [View Image](fidelity-images/tablet-seller-seller_analytics_performance_heatmaps_tablet_light_2.png) |
| `/hub/pickup-hub-agent` | hub | mobile | 15.45% | **CHECK** | "Dennis Mukasa" | `pickup_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-pickup_swiftcart_hub_agent.png) |
| `/rider/rider-code-locked-security` | rider | mobile | 15.4% | **CHECK** | "DELIVERY CODE LOCKED" | `rider_code_locked_swiftcart_security` | [View Image](fidelity-images/mobile-rider-rider_code_locked_swiftcart_security.png) |
| `/admin/edit-category-commission-modal-with-date-picker` | admin | mobile | 15.38% | **CHECK** | "Edit Category Commission Rate" | `edit_category_commission_modal_with_date_picker` | [View Image](fidelity-images/mobile-admin-edit_category_commission_modal_with_date_picker.png) |
| `/followed-stores-2` | buyer | mobile | 15.3% | **CHECK** | "SoundCore Uganda Official" | `followed_stores_swiftcart_uganda_2` | [View Image](fidelity-images/mobile-buyer-followed_stores_swiftcart_uganda_2.png) |
| `/order-confirmation-delivery-code` | buyer | desktop | 15.28% | **CHECK** | "Payment Authorized!" | `order_confirmation_delivery_code_desktop` | [View Image](fidelity-images/desktop-buyer-order_confirmation_delivery_code_desktop.png) |
| `/seller/seller-inbound-return-tamper-inspection` | seller | tablet | 15.2% | **CHECK** | "Tamper Bag Security Check" | `seller_inbound_return_tamper_inspection_tablet_light` | [View Image](fidelity-images/tablet-seller-seller_inbound_return_tamper_inspection_tablet_light.png) |
| `/followed-stores` | buyer | mobile | 15.07% | **CHECK** | "SoundCore Uganda Official" | `followed_stores_swiftcart_uganda_1` | [View Image](fidelity-images/mobile-buyer-followed_stores_swiftcart_uganda_1.png) |
| `/hub/overview-hub-agent` | hub | mobile | 15.06% | **CHECK** | "Station #04 Desk" | `overview_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-overview_swiftcart_hub_agent.png) |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | tablet | 15% | **CHECK** | "SoundCore Space One ANC Headphones" | `hub_damaged_goods_quarantine_bay_tablet` | [View Image](fidelity-images/tablet-hub-hub_damaged_goods_quarantine_bay_tablet.png) |
| `/hub/intake-hub-agent` | hub | mobile | 14.98% | **CHECK** | "Active Inbound Stream • Dock Gate 2" | `intake_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-intake_swiftcart_hub_agent.png) |
| `/hub/hub-damaged-goods-quarantine-bay-1` | hub | tablet | 14.89% | **CHECK** | "SoundCore Space One ANC Headphones" | `hub_damaged_goods_quarantine_bay_tablet_light_1` | [View Image](fidelity-images/tablet-hub-hub_damaged_goods_quarantine_bay_tablet_light_1.png) |
| `/checkout-delivery-code` | buyer | mobile | 14.88% | **CHECK** | "SwiftShield Guarantee" | `checkout_delivery_code_swiftcart` | [View Image](fidelity-images/mobile-buyer-checkout_delivery_code_swiftcart.png) |
| `/seller-application-status` | buyer | mobile | 14.83% | **CHECK** | "Kikuubo Tech World" | `seller_application_status` | [View Image](fidelity-images/mobile-buyer-seller_application_status.png) |
| `/order-tracking-delivery-code` | buyer | mobile | 14.82% | **CHECK** | "Sula Ssemwogerere" | `order_tracking_delivery_code_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-order_tracking_delivery_code_swiftcart_uganda.png) |
| `/hub/hub-rider-dispatch-courier-staging` | hub | tablet | 14.81% | **CHECK** | "" | `hub_rider_dispatch_courier_staging_tablet_dark` | [View Image](fidelity-images/tablet-hub-hub_rider_dispatch_courier_staging_tablet_dark.png) |
| `/admin/payout-queue-admin` | admin | mobile | 14.75% | **CHECK** | "Payout Queue" | `payout_queue_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-payout_queue_swiftcart_admin.png) |
| `/admin/riders-couriers-admin` | admin | mobile | 14.75% | **CHECK** | "Kizito Brian" | `riders_couriers_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-riders_couriers_swiftcart_admin.png) |
| `/admin/overpayments-refunds-admin` | admin | mobile | 14.42% | **CHECK** | "Case #REF-1049" | `overpayments_refunds_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-overpayments_refunds_swiftcart_admin.png) |
| `/account` | buyer | mobile | 14.31% | **CHECK** | "Joshua Kato Mukasa" | `account_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-account_swiftcart_uganda.png) |
| `/checkout-one-flow-payment-waiting` | buyer | mobile | 14.2% | **CHECK** | "SoundCore Space One ANC Headphones" | `checkout_one_flow_payment_waiting` | [View Image](fidelity-images/mobile-buyer-checkout_one_flow_payment_waiting.png) |
| `/terms-of-service-privacy` | buyer | mobile | 14.16% | **CHECK** | "Legal & Privacy Policies" | `terms_of_service_privacy_swiftcart` | [View Image](fidelity-images/mobile-buyer-terms_of_service_privacy_swiftcart.png) |
| `/hub/hub-returns-quarantine-bay` | hub | tablet | 14.04% | **CHECK** | "Forensic Tamper Inspection Matrix" | `hub_returns_quarantine_bay_tablet_light` | [View Image](fidelity-images/tablet-hub-hub_returns_quarantine_bay_tablet_light.png) |
| `/seller/riders-seller` | seller | mobile | 13.95% | **CHECK** | "My Couriers & Boda Fleet" | `riders_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-riders_swiftcart_seller.png) |
| `/seller/products-seller` | seller | mobile | 13.9% | **CHECK** | "SoundCore Space One Wireless Headphones" | `products_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-products_swiftcart_seller.png) |
| `/admin/homepage-ads-management` | admin | tablet | 13.87% | **CHECK** | "Storefront Merchandising & Campaign Engine" | `homepage_ads_management_tablet_dark` | [View Image](fidelity-images/tablet-admin-homepage_ads_management_tablet_dark.png) |
| `/seller/add-product-step-4-catalog-details-seller` | seller | mobile | 13.81% | **CHECK** | "Pricing & Earnings" | `add_product_step_4_catalog_details_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-add_product_step_4_catalog_details_swiftcart_seller.png) |
| `/seller/seller-add-product-5-step-ai-flow` | seller | desktop | 13.81% | **CHECK** | "Add New Product to Store Catalog" | `seller_add_product_5_step_ai_flow_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-seller-seller_add_product_5_step_ai_flow_swiftcart_desktop_dark.png) |
| `/rider/boda-rider-delivery-task-execution-code-entry` | rider | mobile | 13.78% | **CHECK** | "Ronald K." | `boda_rider_delivery_task_execution_code_entry` | [View Image](fidelity-images/mobile-rider-boda_rider_delivery_task_execution_code_entry.png) |
| `/seller/seller-edit-existing-product` | seller | desktop | 13.73% | **CHECK** | "SoundCore Space One ANC Wireless" | `seller_edit_existing_product_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-seller-seller_edit_existing_product_swiftcart_desktop_dark.png) |
| `/store-page-soundcore-official-1` | buyer | desktop | 13.61% | **CHECK** | "Hear Every Detail.SoundCore Uganda." | `store_page_soundcore_uganda_official_desktop_1` | [View Image](fidelity-images/desktop-buyer-store_page_soundcore_uganda_official_desktop_1.png) |
| `/hub/delivery-addresses-hubs` | hub | desktop | 13.56% | **CHECK** | "Delivery Addresses & Kampala Pickup Stations" | `delivery_addresses_hubs_swiftcart_desktop` | [View Image](fidelity-images/desktop-hub-delivery_addresses_hubs_swiftcart_desktop.png) |
| `/seller/seller-dispute-response` | seller | tablet | 13.5% | **CHECK** | "Action Required from Victoria Tech Supplies" | `seller_dispute_response_tablet_light` | [View Image](fidelity-images/tablet-seller-seller_dispute_response_tablet_light.png) |
| `/admin/payout-queue-commission-matrix` | admin | tablet | 13.38% | **CHECK** | "MoMo Settlement Stream" | `payout_queue_commission_matrix_tablet` | [View Image](fidelity-images/tablet-admin-payout_queue_commission_matrix_tablet.png) |
| `/hub/hub-storage-aging-matrix` | hub | desktop | 13.38% | **CHECK** | "Storage & Aging Matrix" | `hub_storage_aging_matrix_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_storage_aging_matrix_swiftcart_desktop_dark.png) |
| `/order-confirmation-delivery-code` | buyer | mobile | 13.35% | **CHECK** | "Order Placed Successfully!" | `order_confirmation_delivery_code` | [View Image](fidelity-images/mobile-buyer-order_confirmation_delivery_code.png) |
| `/admin/audit-log-security-ledger` | admin | tablet | 13.3% | **CHECK** | "Audit Log & Security Governance Ledger" | `audit_log_security_ledger_tablet_light` | [View Image](fidelity-images/tablet-admin-audit_log_security_ledger_tablet_light.png) |
| `/super-admin/overview-super-admin` | super-admin | mobile | 13.23% | **CHECK** | "System Infrastructure" | `overview_swiftcart_super_admin` | [View Image](fidelity-images/mobile-super-admin-overview_swiftcart_super_admin.png) |
| `/hub/hub-pickup-handover-console` | hub | tablet | 13.21% | **CHECK** | "Zebra DS3678" | `hub_pickup_handover_console_tablet_dark` | [View Image](fidelity-images/tablet-hub-hub_pickup_handover_console_tablet_dark.png) |
| `/order-delivered-completed` | buyer | mobile | 13.18% | **CHECK** | "Order Delivered & Escrow Released!" | `order_delivered_completed` | [View Image](fidelity-images/mobile-buyer-order_delivered_completed.png) |
| `/seller/orders-seller` | seller | mobile | 13.13% | **CHECK** | "Kikuubo Dispatch Stream" | `orders_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-orders_swiftcart_seller.png) |
| `/rider/rider-map-rider` | rider | mobile | 12.99% | **CHECK** | "Choose External GPS" | `rider_map_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-rider_map_swiftcart_rider.png) |
| `/seller/seller-order-detail-seller` | seller | mobile | 12.92% | **CHECK** | "#SC-ORD-9488" | `seller_order_detail_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-seller_order_detail_swiftcart_seller.png) |
| `/admin/admin-order-detail-oversight` | admin | mobile | 12.78% | **CHECK** | "sync" | `admin_order_detail_oversight_light` | [View Image](fidelity-images/mobile-admin-admin_order_detail_oversight_light.png) |
| `/admin/overview-admin` | admin | mobile | 12.7% | **CHECK** | "Platform Pulse" | `overview_swiftcart_admin_dark` | [View Image](fidelity-images/mobile-admin-overview_swiftcart_admin_dark.png) |
| `/forgot-password-buyer` | buyer | mobile | 12.7% | **CHECK** | "Reset Password" | `forgot_password_swiftcart_buyer` | [View Image](fidelity-images/mobile-buyer-forgot_password_swiftcart_buyer.png) |
| `/seller/seller-riders-fleet-logistics` | seller | desktop | 12.67% | **CHECK** | "Riders & Dedicated Courier Fleet" | `seller_riders_fleet_logistics_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_riders_fleet_logistics_swiftcart_desktop.png) |
| `/hub/hub-storage-aging-matrix-hub` | hub | mobile | 12.62% | **CHECK** | "GRID SYNC ACTIVE" | `hub_storage_aging_matrix_swiftcart_hub_light` | [View Image](fidelity-images/mobile-hub-hub_storage_aging_matrix_swiftcart_hub_light.png) |
| `/admin/orders-oversight-admin` | admin | mobile | 12.58% | **CHECK** | "Orders" | `orders_oversight_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-orders_oversight_swiftcart_admin.png) |
| `/admin/locked-dispatches-admin` | admin | mobile | 12.57% | **CHECK** | "3 Dispatches Currently Locked" | `locked_dispatches_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-locked_dispatches_swiftcart_admin.png) |
| `/help-centre-support` | buyer | tablet | 12.48% | **CHECK** | "How can we help you today in Uganda?" | `help_centre_support_tablet` | [View Image](fidelity-images/tablet-buyer-help_centre_support_tablet.png) |
| `/my-orders` | buyer | mobile | 12.46% | **CHECK** | "SoundCore Space One ANC Headphones" | `my_orders_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-my_orders_swiftcart_uganda.png) |
| `/seller/returns-disputes-seller` | seller | mobile | 12.34% | **CHECK** | "Seller Dispute Response" | `returns_disputes_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-returns_disputes_swiftcart_seller.png) |
| `/admin/overview-admin` | admin | mobile | 12.27% | **CHECK** | "Overview" | `overview_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-overview_swiftcart_admin.png) |
| `/help-centre-support` | buyer | mobile | 12.27% | **CHECK** | "Swift Escrow Protection" | `help_centre_support_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-help_centre_support_swiftcart_uganda.png) |
| `/my-orders-order-detail` | buyer | mobile | 12.24% | **CHECK** | "SoundCore Space One ANC Headphones" | `my_orders_order_detail_swiftcart` | [View Image](fidelity-images/mobile-buyer-my_orders_order_detail_swiftcart.png) |
| `/seller/add-product-step-3-ai-description-seller` | seller | mobile | 12.16% | **CHECK** | "Write My Description" | `add_product_step_3_ai_description_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-add_product_step_3_ai_description_swiftcart_seller.png) |
| `/live-rider-tracking-boda-map` | buyer | mobile | 12.13% | **CHECK** | "Kizito Brian" | `live_rider_tracking_boda_map_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-live_rider_tracking_boda_map_swiftcart_uganda.png) |
| `/pickup-station-chooser` | buyer | tablet | 12.01% | **CHECK** | "William Street Central Hub" | `pickup_station_chooser_tablet` | [View Image](fidelity-images/tablet-buyer-pickup_station_chooser_tablet.png) |
| `/seller/seller-analytics-performance-heatmaps-1` | seller | tablet | 12.01% | **CHECK** | "Store Analytics & Performance Intelligence" | `seller_analytics_performance_heatmaps_tablet_light_1` | [View Image](fidelity-images/tablet-seller-seller_analytics_performance_heatmaps_tablet_light_1.png) |
| `/hub/hub-damaged-goods-quarantine-bay` | hub | desktop | 11.95% | **OK** | "Damaged Goods & Quarantine Bay Intake" | `hub_damaged_goods_quarantine_bay_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_damaged_goods_quarantine_bay_swiftcart_desktop_light.png) |
| `/hub/hub-station-command-overview` | hub | desktop | 11.87% | **OK** | "Kampala Central Sorting & Handover Hub" | `hub_station_command_overview_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_station_command_overview_swiftcart_desktop_light.png) |
| `/empty-error-states-suite` | buyer | mobile | 11.85% | **OK** | "Your Shopping Cart is Empty" | `empty_error_states_suite_swiftcart` | [View Image](fidelity-images/mobile-buyer-empty_error_states_suite_swiftcart.png) |
| `/pickup-station-chooser` | buyer | desktop | 11.84% | **OK** | "Select a Verified SwiftCart Pickup Station in Greater Kampala" | `pickup_station_chooser_desktop` | [View Image](fidelity-images/desktop-buyer-pickup_station_chooser_desktop.png) |
| `/seller/seller-notifications-center` | seller | desktop | 11.75% | **OK** | "Merchant Notification & Activity Center" | `seller_notifications_center_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_notifications_center_swiftcart_desktop_light.png) |
| `/admin/locked-dispatches-pin-overrides` | admin | desktop | 11.67% | **OK** | "Locked Dispatches & Supervisory PIN Overrides" | `locked_dispatches_pin_overrides_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-locked_dispatches_pin_overrides_swiftcart_desktop_dark.png) |
| `/followed-stores-buyer` | buyer | tablet | 11.57% | **OK** | "Followed Stores (8 Verified Merchants)" | `followed_stores_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-followed_stores_swiftcart_buyer_tablet.png) |
| `/escrow-dispute-return-request` | buyer | mobile | 11.54% | **OK** | "SoundCore Space One ANC Headphones" | `escrow_dispute_return_request_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-escrow_dispute_return_request_swiftcart_uganda.png) |
| `/seller/seller-order-detail-seller` | seller | mobile | 11.48% | **OK** | "SoundCore Space One ANC Headphones" | `seller_order_detail_swiftcart_seller_light` | [View Image](fidelity-images/mobile-seller-seller_order_detail_swiftcart_seller_light.png) |
| `/hub/hub-line-haul-transit-manifest` | hub | desktop | 11.47% | **OK** | "4 Main Corridors Operational" | `hub_line_haul_transit_manifest_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_line_haul_transit_manifest_swiftcart_desktop_light.png) |
| `/admin/audit-log-admin-1` | admin | mobile | 11.46% | **OK** | "No Audit Records Found" | `audit_log_swiftcart_admin_1` | [View Image](fidelity-images/mobile-admin-audit_log_swiftcart_admin_1.png) |
| `/sign-in-2` | buyer | desktop | 11.45% | **OK** | "Welcome Back to Uganda's Premier Marketplace" | `sign_in_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-sign_in_swiftcart_desktop_2.png) |
| `/hub/hub-station-settings-shift-handover` | hub | tablet | 11.41% | **OK** | "Nakasero Central Bay" | `hub_station_settings_shift_handover_tablet_dark` | [View Image](fidelity-images/tablet-hub-hub_station_settings_shift_handover_tablet_dark.png) |
| `/my-orders-order-detail` | buyer | desktop | 11.29% | **OK** | "My Orders & Escrow Purchases" | `my_orders_order_detail_desktop` | [View Image](fidelity-images/desktop-buyer-my_orders_order_detail_desktop.png) |
| `/super-admin/danger-zone-role-change-super-admin` | super-admin | mobile | 11.25% | **OK** | "Role Management" | `danger_zone_role_change_swiftcart_super_admin` | [View Image](fidelity-images/mobile-super-admin-danger_zone_role_change_swiftcart_super_admin.png) |
| `/seller/add-product-step-5-buyer-preview-submit-seller` | seller | mobile | 11.21% | **OK** | "Media Enhancement" | `add_product_step_5_buyer_preview_submit_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-add_product_step_5_buyer_preview_submit_swiftcart_seller.png) |
| `/seller/seller-wallet-payouts` | seller | tablet | 11.19% | **OK** | "Ledger & Payout Audit Stream" | `seller_wallet_payouts_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_wallet_payouts_tablet_dark.png) |
| `/search-results-filter-drawer` | buyer | tablet | 11.17% | **OK** | "Wireless Noise Cancelling Headphones" | `search_results_filter_drawer_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-search_results_filter_drawer_swiftcart_tablet.png) |
| `/seller/seller-notifications-center` | seller | tablet | 11.11% | **OK** | "Seller Notifications & Alerts" | `seller_notifications_center_tablet_light` | [View Image](fidelity-images/tablet-seller-seller_notifications_center_tablet_light.png) |
| `/buyer-account-profile` | buyer | tablet | 11.06% | **OK** | "My Account" | `buyer_account_profile_tablet` | [View Image](fidelity-images/tablet-buyer-buyer_account_profile_tablet.png) |
| `/rider/failed-delivery-modal-rider` | rider | mobile | 11.04% | **OK** | "Report Failed Delivery" | `failed_delivery_modal_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-failed_delivery_modal_swiftcart_rider.png) |
| `/admin/product-moderation-catalog-review` | admin | tablet | 11.01% | **OK** | "Product Moderation Queue" | `product_moderation_catalog_review_tablet_dark` | [View Image](fidelity-images/tablet-admin-product_moderation_catalog_review_tablet_dark.png) |
| `/admin/sellers-directory-admin-1` | admin | mobile | 10.99% | **OK** | "SoundCore Uganda Official" | `sellers_directory_swiftcart_admin_1` | [View Image](fidelity-images/mobile-admin-sellers_directory_swiftcart_admin_1.png) |
| `/hub/hub-rider-dispatch-courier-staging` | hub | desktop | 10.98% | **OK** | "SafeBoda Couriers" | `hub_rider_dispatch_courier_staging_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_rider_dispatch_courier_staging_swiftcart_desktop_dark.png) |
| `/seller/seller-store-profile-kyc` | seller | desktop | 10.98% | **OK** | "Store Profile & Official Business KYC" | `seller_store_profile_kyc_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_store_profile_kyc_swiftcart_desktop_light.png) |
| `/seller/invite-courier-bottom-sheet-modal-seller` | seller | mobile | 10.91% | **OK** | "Invite Dedicated Courier" | `invite_courier_bottom_sheet_modal_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-invite_courier_bottom_sheet_modal_swiftcart_seller.png) |
| `/hub/hub-line-haul-transit-manifest` | hub | desktop | 10.85% | **OK** | "4 Main Corridors Operational" | `hub_line_haul_transit_manifest_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_line_haul_transit_manifest_swiftcart_desktop_dark.png) |
| `/mtn-momo-ussd-pin-prompt` | buyer | tablet | 10.82% | **OK** | "Authorize Payment on Your Phone" | `mtn_momo_ussd_pin_prompt_tablet` | [View Image](fidelity-images/tablet-buyer-mtn_momo_ussd_pin_prompt_tablet.png) |
| `/product-detail-soundcore-space-one-1` | buyer | desktop | 10.72% | **OK** | "SoundCore Space One Wireless Active Noise Cancelling (ANC) Over-Ear Headphones" | `product_detail_soundcore_space_one_desktop_1` | [View Image](fidelity-images/desktop-buyer-product_detail_soundcore_space_one_desktop_1.png) |
| `/seller/store-profile-seller` | seller | mobile | 10.65% | **OK** | "Kikuubo Sound & Gadgets Hub" | `store_profile_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-store_profile_swiftcart_seller.png) |
| `/categories` | buyer | mobile | 10.63% | **OK** | "Explore Categories" | `categories_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-categories_swiftcart_uganda.png) |
| `/seller/seller-analytics-performance-heatmaps` | seller | desktop | 10.63% | **OK** | "Merchant Analytics & Velocity Heatmaps" | `seller_analytics_performance_heatmaps_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_analytics_performance_heatmaps_swiftcart_desktop.png) |
| `/seller/seller-discounts-flash-sales-promotion-builder` | seller | desktop | 10.63% | **OK** | "Discounts, Flash Deals & Promotions" | `seller_discounts_flash_sales_promotion_builder_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_discounts_flash_sales_promotion_builder_swiftcart_desktop_light.png) |
| `/hub/returns-damaged-goods-quarantine-bay-work-hub` | hub | mobile | 10.59% | **OK** | "Quarantine Bay 03" | `returns_damaged_goods_quarantine_bay_swiftcart_work_hub` | [View Image](fidelity-images/mobile-hub-returns_damaged_goods_quarantine_bay_swiftcart_work_hub.png) |
| `/admin/escrow-disputes-admin` | admin | mobile | 10.56% | **OK** | "Escrow & Disputes" | `escrow_disputes_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-escrow_disputes_swiftcart_admin.png) |
| `/seller/seller-dispute-response-1` | seller | mobile | 10.52% | **OK** | "Choose Merchant Action" | `seller_dispute_response_swiftcart_uganda_1` | [View Image](fidelity-images/mobile-seller-seller_dispute_response_swiftcart_uganda_1.png) |
| `/admin/riders-fleet-directory` | admin | tablet | 10.51% | **OK** | "Fleet Operations & Couriers Roster" | `riders_fleet_directory_tablet_dark` | [View Image](fidelity-images/tablet-admin-riders_fleet_directory_tablet_dark.png) |
| `/seller/seller-dispute-response-2` | seller | mobile | 10.5% | **OK** | "Choose Merchant Action" | `seller_dispute_response_swiftcart_uganda_2` | [View Image](fidelity-images/mobile-seller-seller_dispute_response_swiftcart_uganda_2.png) |
| `/register-2` | buyer | desktop | 10.45% | **OK** | "Shop fearlessly with protected Kampala checkout." | `register_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-register_swiftcart_desktop_2.png) |
| `/search-results-2` | buyer | desktop | 10.44% | **OK** | "Results for “SoundCore Space One ANC”" | `search_results_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-search_results_swiftcart_desktop_2.png) |
| `/returns-disputes` | buyer | mobile | 10.4% | **OK** | "UGX 265,000 Frozen in Escrow" | `returns_disputes_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-returns_disputes_swiftcart_uganda.png) |
| `/hub/more-hub-agent` | hub | mobile | 10.31% | **OK** | "Isaac Kato" | `more_swiftcart_hub_agent` | [View Image](fidelity-images/mobile-hub-more_swiftcart_hub_agent.png) |
| `/seller/seller-inbound-return-tamper-inspection` | seller | desktop | 10.29% | **OK** | "Inbound Return & Tamper Seal Inspection" | `seller_inbound_return_tamper_inspection_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_inbound_return_tamper_inspection_swiftcart_desktop.png) |
| `/seller/seller-inbound-return-tamper-inspection` | seller | tablet | 10.04% | **OK** | "Inbound Return Inspection & Acceptance" | `seller_inbound_return_tamper_inspection_tablet_dark` | [View Image](fidelity-images/tablet-seller-seller_inbound_return_tamper_inspection_tablet_dark.png) |
| `/privacy-policy-buyer` | buyer | mobile | 10% | **OK** | "Privacy Policy" | `privacy_policy_swiftcart_buyer` | [View Image](fidelity-images/mobile-buyer-privacy_policy_swiftcart_buyer.png) |
| `/scan-qr-handover` | buyer | mobile | 9.99% | **OK** | "Delivery Handover" | `scan_qr_handover_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-scan_qr_handover_swiftcart_uganda.png) |
| `/become-a-seller-4-steps` | buyer | tablet | 9.97% | **OK** | "Grow Your Business on SwiftCart Uganda" | `become_a_seller_4_steps_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-become_a_seller_4_steps_swiftcart_tablet.png) |
| `/sign-in-register` | buyer | tablet | 9.94% | **OK** | "Buy Safely with SwiftCart Escrow." | `sign_in_register_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-sign_in_register_swiftcart_tablet.png) |
| `/hub/hub-rider-dispatch-courier-staging` | hub | desktop | 9.93% | **OK** | "SafeBoda Couriers" | `hub_rider_dispatch_courier_staging_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_rider_dispatch_courier_staging_swiftcart_desktop_light.png) |
| `/splash-first-open` | buyer | mobile | 9.92% | **OK** | "SwiftCart" | `splash_first_open_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-splash_first_open_swiftcart_uganda.png) |
| `/admin/overpayments-refunds` | admin | tablet | 9.79% | **OK** | "Case #REF-8842 Breakdown" | `overpayments_refunds_tablet_light` | [View Image](fidelity-images/tablet-admin-overpayments_refunds_tablet_light.png) |
| `/hub/hub-returns-quarantine-bay` | hub | tablet | 9.71% | **OK** | "" | `hub_returns_quarantine_bay_tablet_dark` | [View Image](fidelity-images/tablet-hub-hub_returns_quarantine_bay_tablet_dark.png) |
| `/admin/audit-log-admin-2` | admin | mobile | 9.69% | **OK** | "Activity Ledger" | `audit_log_swiftcart_admin_2` | [View Image](fidelity-images/mobile-admin-audit_log_swiftcart_admin_2.png) |
| `/admin/commission-rates-earnings-admin` | admin | mobile | 9.64% | **OK** | "Category Matrix" | `commission_rates_earnings_swiftcart_admin` | [View Image](fidelity-images/mobile-admin-commission_rates_earnings_swiftcart_admin.png) |
| `/seller-application-status` | buyer | tablet | 9.6% | **OK** | "Application Under Review • Tier 2 Verification" | `seller_application_status_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-seller_application_status_swiftcart_tablet.png) |
| `/checkout-step-by-step-flow` | buyer | mobile | 9.53% | **OK** | "Live" | `checkout_step_by_step_flow` | [View Image](fidelity-images/mobile-buyer-checkout_step_by_step_flow.png) |
| `/rider/rider-offline-mode-cached-manifest` | rider | tablet | 9.52% | **OK** | "Cached Manifest" | `rider_offline_mode_cached_manifest_tablet_light` | [View Image](fidelity-images/tablet-rider-rider_offline_mode_cached_manifest_tablet_light.png) |
| `/hub/hub-line-haul-transit-manifest-handover-2` | hub | tablet | 9.5% | **OK** | "Route Leg 01: William St Central Hub → Jinja Logistics Hub" | `hub_line_haul_transit_manifest_handover_tablet_light_2` | [View Image](fidelity-images/tablet-hub-hub_line_haul_transit_manifest_handover_tablet_light_2.png) |
| `/hub/hub-station-command-overview` | hub | desktop | 9.45% | **OK** | "Kampala Central Sorting & Handover Hub" | `hub_station_command_overview_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_station_command_overview_swiftcart_desktop_dark.png) |
| `/seller/seller-overview` | seller | desktop | 9.45% | **OK** | "Welcome back, Kizito Ronald" | `seller_overview_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_overview_swiftcart_desktop.png) |
| `/admin/riders-fleet-directory` | admin | desktop | 9.42% | **OK** | "Riders & Courier Fleet Operations Directory" | `riders_fleet_directory_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-riders_fleet_directory_swiftcart_desktop_dark.png) |
| `/seller/discounts-ads-seller` | seller | mobile | 9.34% | **OK** | "Promotions & Ads" | `discounts_ads_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-discounts_ads_swiftcart_seller.png) |
| `/admin/riders-fleet-directory` | admin | desktop | 9.29% | **OK** | "Riders & Courier Fleet Operations Directory" | `riders_fleet_directory_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-riders_fleet_directory_swiftcart_desktop_light.png) |
| `/vouchers-discounts` | buyer | mobile | 9.22% | **OK** | "100% Free Boda Delivery" | `vouchers_discounts_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-vouchers_discounts_swiftcart_uganda.png) |
| `/phone-verification-buyer-auth` | buyer | mobile | 9.19% | **OK** | "Welcome to SwiftCart" | `phone_verification_buyer_auth_swiftcart` | [View Image](fidelity-images/mobile-buyer-phone_verification_buyer_auth_swiftcart.png) |
| `/admin/locked-dispatches-pin-overrides` | admin | desktop | 9.16% | **OK** | "Locked Dispatches & Supervisory PIN Overrides" | `locked_dispatches_pin_overrides_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-locked_dispatches_pin_overrides_swiftcart_desktop_light.png) |
| `/categories-mega-directory-1` | buyer | desktop | 9.13% | **OK** | "Explore All 14 Departments & 120+ Categories in Uganda" | `categories_mega_directory_swiftcart_desktop_1` | [View Image](fidelity-images/desktop-buyer-categories_mega_directory_swiftcart_desktop_1.png) |
| `/admin/overpayments-refunds-console` | admin | desktop | 9.11% | **OK** | "Ledger Overpayments & Auto-Reversals" | `overpayments_refunds_console_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-overpayments_refunds_console_swiftcart_desktop_dark.png) |
| `/seller/seller-discounts-flash-sales-promotion-builder-1` | seller | tablet | 9.09% | **OK** | "Promotions, Flash Deals & Sponsored Ads" | `seller_discounts_flash_sales_promotion_builder_tablet_light_1` | [View Image](fidelity-images/tablet-seller-seller_discounts_flash_sales_promotion_builder_tablet_light_1.png) |
| `/notifications` | buyer | desktop | 9.09% | **OK** | "Notifications & Order Alerts" | `notifications_swiftcart_desktop` | [View Image](fidelity-images/desktop-buyer-notifications_swiftcart_desktop.png) |
| `/seller/seller-edit-existing-product` | seller | desktop | 9% | **OK** | "SoundCore Space One ANC Wireless" | `seller_edit_existing_product_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_edit_existing_product_swiftcart_desktop.png) |
| `/rider/deliveries-rider` | rider | mobile | 8.97% | **OK** | "Customer 6-Digit Delivery Code" | `deliveries_swiftcart_rider` | [View Image](fidelity-images/mobile-rider-deliveries_swiftcart_rider.png) |
| `/admin/orders-oversight-master-detail` | admin | desktop | 8.95% | **OK** | "Platform Orders Oversight & Real-Time Dispatch Stream" | `orders_oversight_master_detail_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-orders_oversight_master_detail_swiftcart_desktop_dark.png) |
| `/hub/hub-rider-dispatch-courier-staging` | hub | tablet | 8.92% | **OK** | "Courier Bag #BAG-KLA-04" | `hub_rider_dispatch_courier_staging_tablet_light` | [View Image](fidelity-images/tablet-hub-hub_rider_dispatch_courier_staging_tablet_light.png) |
| `/notifications-buyer` | buyer | mobile | 8.89% | **OK** | "Order Out for Delivery" | `notifications_swiftcart_buyer` | [View Image](fidelity-images/mobile-buyer-notifications_swiftcart_buyer.png) |
| `/hub/hub-pickup-handover-console` | hub | tablet | 8.86% | **OK** | "Waybill #SC-9952" | `hub_pickup_handover_console_tablet_light` | [View Image](fidelity-images/tablet-hub-hub_pickup_handover_console_tablet_light.png) |
| `/admin/sellers-directory-admin-2` | admin | mobile | 8.85% | **OK** | "SoundCore Uganda Official" | `sellers_directory_swiftcart_admin_2` | [View Image](fidelity-images/mobile-admin-sellers_directory_swiftcart_admin_2.png) |
| `/seller/seller-orders-master-detail` | seller | desktop | 8.79% | **OK** | "#SC-98241" | `seller_orders_master_detail_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_orders_master_detail_swiftcart_desktop_light.png) |
| `/seller/add-product-step-2-ai-photo-studio-seller` | seller | mobile | 8.75% | **OK** | "Make Photos Look Professional" | `add_product_step_2_ai_photo_studio_swiftcart_seller` | [View Image](fidelity-images/mobile-seller-add_product_step_2_ai_photo_studio_swiftcart_seller.png) |
| `/my-orders-order-detail` | buyer | tablet | 8.73% | **OK** | "SoundCore Space One ANC Headphones" | `my_orders_order_detail_tablet` | [View Image](fidelity-images/tablet-buyer-my_orders_order_detail_tablet.png) |
| `/seller/seller-applications-kyc` | seller | desktop | 8.73% | **OK** | "Seller Applications & Business KYC Dossier Review" | `seller_applications_kyc_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_applications_kyc_swiftcart_desktop_light.png) |
| `/admin/locked-dispatches-pin-overrides` | admin | tablet | 8.67% | **OK** | "Locked Dispatches & Delivery PIN Override Desk" | `locked_dispatches_pin_overrides_tablet_light` | [View Image](fidelity-images/tablet-admin-locked_dispatches_pin_overrides_tablet_light.png) |
| `/order-confirmation-delivery-code` | buyer | tablet | 8.65% | **OK** | "Your 6-Digit Delivery Release Code" | `order_confirmation_delivery_code_tablet` | [View Image](fidelity-images/tablet-buyer-order_confirmation_delivery_code_tablet.png) |
| `/hub/hub-customer-pickup-handover-console` | hub | desktop | 8.63% | **OK** | "Customer Pickup Counter & Handover Station" | `hub_customer_pickup_handover_console_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_customer_pickup_handover_console_swiftcart_desktop_dark.png) |
| `/seller/seller-discounts-flash-sales-promotion-builder` | seller | desktop | 8.63% | **OK** | "Discounts, Flash Deals & Promotions" | `seller_discounts_flash_sales_promotion_builder_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_discounts_flash_sales_promotion_builder_swiftcart_desktop.png) |
| `/admin/audit-log-security-ledger` | admin | desktop | 8.58% | **OK** | "14,892" | `audit_log_security_ledger_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-audit_log_security_ledger_swiftcart_desktop_dark.png) |
| `/seller/seller-notifications-center` | seller | desktop | 8.57% | **OK** | "Merchant Notification & Activity Center" | `seller_notifications_center_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_notifications_center_swiftcart_desktop.png) |
| `/seller/seller-orders-master-detail` | seller | desktop | 8.56% | **OK** | "" | `seller_orders_master_detail_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_orders_master_detail_swiftcart_desktop.png) |
| `/privacy-policy-terms-buyer` | buyer | tablet | 8.53% | **OK** | "Privacy Policy & Data Safeguards" | `privacy_policy_terms_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-privacy_policy_terms_swiftcart_buyer_tablet.png) |
| `/payment-methods-1` | buyer | mobile | 8.52% | **OK** | "Mobile Money Accounts" | `payment_methods_swiftcart_uganda_1` | [View Image](fidelity-images/mobile-buyer-payment_methods_swiftcart_uganda_1.png) |
| `/product-detail-soundcore-space-one` | buyer | tablet | 8.43% | **OK** | "SoundCore Space One Wireless Active Noise Cancelling Headphones - 2X Voice Reduction & 55H Playtime" | `product_detail_soundcore_space_one_tablet` | [View Image](fidelity-images/tablet-buyer-product_detail_soundcore_space_one_tablet.png) |
| `/product-detail-soundcore-space-one-2` | buyer | desktop | 8.43% | **OK** | "SoundCore Space One Wireless Active Noise Cancelling (ANC) Over-Ear Headphones" | `product_detail_soundcore_space_one_desktop_2` | [View Image](fidelity-images/desktop-buyer-product_detail_soundcore_space_one_desktop_2.png) |
| `/hub/rider-profile-support-hub` | hub | tablet | 8.34% | **OK** | "Kizito Brian" | `rider_profile_support_hub_tablet_light` | [View Image](fidelity-images/tablet-hub-rider_profile_support_hub_tablet_light.png) |
| `/delivery-addresses` | buyer | mobile | 8.32% | **OK** | "Swift Boda Landmark Routing" | `delivery_addresses_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-delivery_addresses_swiftcart_uganda.png) |
| `/hub/hub-storage-aging-matrix` | hub | tablet | 8.32% | **OK** | "SoundCore Space One ANC Headphones" | `hub_storage_aging_matrix_tablet_dark` | [View Image](fidelity-images/tablet-hub-hub_storage_aging_matrix_tablet_dark.png) |
| `/super-admin/super-admin-operational-overview` | super-admin | tablet | 8.32% | **OK** | "Kampala Metro Command Grid" | `super_admin_operational_overview_tablet_light` | [View Image](fidelity-images/tablet-super-admin-super_admin_operational_overview_tablet_light.png) |
| `/seller/seller-overview` | seller | desktop | 8.27% | **OK** | "Welcome back, Kizito Ronald" | `seller_overview_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_overview_swiftcart_desktop_light.png) |
| `/hub/hub-intake-high-speed-barcode-scanner` | hub | tablet | 8.26% | **OK** | "Active Intake Manifest" | `hub_intake_high_speed_barcode_scanner_tablet` | [View Image](fidelity-images/tablet-hub-hub_intake_high_speed_barcode_scanner_tablet.png) |
| `/hub/hub-customer-pickup-handover-console` | hub | desktop | 8.26% | **OK** | "Today Station Pickups" | `hub_customer_pickup_handover_console_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_customer_pickup_handover_console_swiftcart_desktop_light.png) |
| `/search` | buyer | mobile | 8.24% | **OK** | "Recent Searches" | `search_experience_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-search_experience_swiftcart_uganda.png) |
| `/admin/payout-queue-telecom-settlements` | admin | desktop | 8.16% | **OK** | "Disbursals & Telecom Settlement Rail" | `payout_queue_telecom_settlements_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-admin-payout_queue_telecom_settlements_swiftcart_desktop_dark.png) |
| `/rider/rider-failed-delivery-code-locked-state` | rider | tablet | 8.07% | **OK** | "SoundCore Space One ANC" | `rider_failed_delivery_code_locked_state_tablet_light` | [View Image](fidelity-images/tablet-rider-rider_failed_delivery_code_locked_state_tablet_light.png) |
| `/seller/seller-returns-disputes-console` | seller | desktop | 8.07% | **OK** | "Returns, Claims & Escrow Disputes" | `seller_returns_disputes_console_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_returns_disputes_console_swiftcart_desktop_light.png) |
| `/seller/seller-returns-disputes-console` | seller | desktop | 8.03% | **OK** | "Returns, Claims & Escrow Disputes" | `seller_returns_disputes_console_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_returns_disputes_console_swiftcart_desktop.png) |
| `/search-results-1` | buyer | desktop | 8.02% | **OK** | "Results for “SoundCore Space One ANC”" | `search_results_swiftcart_desktop_1` | [View Image](fidelity-images/desktop-buyer-search_results_swiftcart_desktop_1.png) |
| `/rider/rider-simulator-security-locked-exceptions` | rider | desktop | 8% | **OK** | "Delivery PIN Locked (3 Failed Attempts)" | `rider_simulator_security_locked_exceptions_swiftcart_desktop` | [View Image](fidelity-images/desktop-rider-rider_simulator_security_locked_exceptions_swiftcart_desktop.png) |
| `/home-marketplace-1` | buyer | desktop | 7.96% | **OK** | "SoundCore Space One ANC" | `home_marketplace_swiftcart_desktop_1` | [View Image](fidelity-images/desktop-buyer-home_marketplace_swiftcart_desktop_1.png) |
| `/seller/merchant-return-inspection-acceptance` | seller | mobile | 7.95% | **OK** | "SoundCore Space One ANC" | `merchant_return_inspection_acceptance` | [View Image](fidelity-images/mobile-seller-merchant_return_inspection_acceptance.png) |
| `/hub/hub-intake-high-speed-barcode-scanner` | hub | tablet | 7.95% | **OK** | "Active Intake Manifest" | `hub_intake_high_speed_barcode_scanner_tablet_light` | [View Image](fidelity-images/tablet-hub-hub_intake_high_speed_barcode_scanner_tablet_light.png) |
| `/pickup-station-chooser` | buyer | mobile | 7.94% | **OK** | "Pickup Stations" | `pickup_station_chooser_swiftcart` | [View Image](fidelity-images/mobile-buyer-pickup_station_chooser_swiftcart.png) |
| `/admin/riders-fleet-operations-live-dispatch` | admin | desktop | 7.93% | **OK** | "Kampala Corridor Fleet Command" | `riders_fleet_operations_live_dispatch_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-riders_fleet_operations_live_dispatch_swiftcart_desktop_light.png) |
| `/hub/hub-returns-rto-bay` | hub | desktop | 7.9% | **OK** | "Returns & Return-To-Origin (RTO) Processing Bay" | `hub_returns_rto_bay_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-hub-hub_returns_rto_bay_swiftcart_desktop_light.png) |
| `/phone-verification-1` | buyer | desktop | 7.86% | **OK** | "Two-Factor Account Protection" | `phone_verification_swiftcart_desktop_1` | [View Image](fidelity-images/desktop-buyer-phone_verification_swiftcart_desktop_1.png) |
| `/hub/hub-station-command-overview-1` | hub | tablet | 7.67% | **OK** | "Active Inbound Bags" | `hub_station_command_overview_tablet_light_1` | [View Image](fidelity-images/tablet-hub-hub_station_command_overview_tablet_light_1.png) |
| `/splash-welcome` | buyer | mobile | 7.64% | **OK** | "Fast delivery across Uganda" | `splash_welcome_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-splash_welcome_swiftcart_uganda.png) |
| `/sign-in-buyer` | buyer | mobile | 7.63% | **OK** | "Welcome Back" | `sign_in_swiftcart_buyer` | [View Image](fidelity-images/mobile-buyer-sign_in_swiftcart_buyer.png) |
| `/categories-mega-directory-2` | buyer | desktop | 7.6% | **OK** | "Explore All 14 Departments & 120+ Categories in Uganda" | `categories_mega_directory_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-categories_mega_directory_swiftcart_desktop_2.png) |
| `/seller/seller-analytics-performance-heatmaps` | seller | desktop | 7.53% | **OK** | "Merchant Analytics & Velocity Heatmaps" | `seller_analytics_performance_heatmaps_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_analytics_performance_heatmaps_swiftcart_desktop_light.png) |
| `/super-admin/platform-settings-fee-matrix` | super-admin | tablet | 7.52% | **OK** | "Platform Settings & Marketplace Rules" | `platform_settings_fee_matrix_tablet_dark` | [View Image](fidelity-images/tablet-super-admin-platform_settings_fee_matrix_tablet_dark.png) |
| `/seller/seller-overview-dashboard-2` | seller | tablet | 7.48% | **OK** | "Good afternoon, Sarah Namubiru" | `seller_overview_dashboard_tablet_light_2` | [View Image](fidelity-images/tablet-seller-seller_overview_dashboard_tablet_light_2.png) |
| `/help-centre-faq` | buyer | desktop | 7.4% | **OK** | "How can we help you in Kampala today?" | `help_centre_faq_swiftcart_desktop` | [View Image](fidelity-images/desktop-buyer-help_centre_faq_swiftcart_desktop.png) |
| `/admin/locked-dispatches-pin-overrides` | admin | tablet | 7.38% | **OK** | "Locked Dispatches & PIN Overrides" | `locked_dispatches_pin_overrides_tablet_dark` | [View Image](fidelity-images/tablet-admin-locked_dispatches_pin_overrides_tablet_dark.png) |
| `/super-admin/super-admin-operational-overview` | super-admin | tablet | 7.28% | **OK** | "Welcome back, Sarah (Super Admin)" | `super_admin_operational_overview_tablet_dark` | [View Image](fidelity-images/tablet-super-admin-super_admin_operational_overview_tablet_dark.png) |
| `/hub/hub-inbound-intake-barcode-scan` | hub | desktop | 7.24% | **OK** | "#SC-98241 | 0.85 kg" | `hub_inbound_intake_barcode_scan_swiftcart_desktop_dark` | [View Image](fidelity-images/desktop-hub-hub_inbound_intake_barcode_scan_swiftcart_desktop_dark.png) |
| `/checkout-step-flow` | buyer | desktop | 7.23% | **OK** | "Delivery Address in Uganda" | `checkout_step_flow_desktop` | [View Image](fidelity-images/desktop-buyer-checkout_step_flow_desktop.png) |
| `/payment-methods-2` | buyer | mobile | 7.19% | **OK** | "Mobile Money Accounts" | `payment_methods_swiftcart_uganda_2` | [View Image](fidelity-images/mobile-buyer-payment_methods_swiftcart_uganda_2.png) |
| `/delivery-addresses-vouchers` | buyer | tablet | 7.16% | **OK** | "Addresses & Saved Vouchers" | `delivery_addresses_vouchers_tablet` | [View Image](fidelity-images/tablet-buyer-delivery_addresses_vouchers_tablet.png) |
| `/hub/hub-storage-aging-matrix` | hub | tablet | 7.16% | **OK** | "SoundCore Space One ANC Headphones" | `hub_storage_aging_matrix_tablet_light` | [View Image](fidelity-images/tablet-hub-hub_storage_aging_matrix_tablet_light.png) |
| `/notifications-buyer` | buyer | tablet | 7.14% | **OK** | "Boda Rider Kizito Brian is 6 mins away with Order #SC-9488" | `notifications_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-notifications_swiftcart_buyer_tablet.png) |
| `/` | buyer | desktop | 7.11% | **OK** | "Up to 40% Off Genuine Audio & Gadgets" | `home_marketplace_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-home_marketplace_swiftcart_desktop_2.png) |
| `/admin/audit-log-security-ledger` | admin | tablet | 7.02% | **OK** | "Immutable Operational Audit Ledger" | `audit_log_security_ledger_tablet_dark` | [View Image](fidelity-images/tablet-admin-audit_log_security_ledger_tablet_dark.png) |
| `/hub/hub-station-command-overview-2` | hub | tablet | 7.02% | **OK** | "Active Inbound Bags" | `hub_station_command_overview_tablet_light_2` | [View Image](fidelity-images/tablet-hub-hub_station_command_overview_tablet_light_2.png) |
| `/dispute-evidence-form` | buyer | mobile | 7% | **OK** | "SoundCore Space One Wireless ANC" | `dispute_evidence_form_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-dispute_evidence_form_swiftcart_uganda.png) |
| `/super-admin/users-roles-with-role-change` | super-admin | tablet | 6.99% | **OK** | "Staff Governance & RBAC" | `users_roles_with_role_change_tablet_dark` | [View Image](fidelity-images/tablet-super-admin-users_roles_with_role_change_tablet_dark.png) |
| `/admin/overpayments-refunds-console` | admin | desktop | 6.95% | **OK** | "Ledger Overpayments & Auto-Reversals" | `overpayments_refunds_console_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-admin-overpayments_refunds_console_swiftcart_desktop_light.png) |
| `/register-buyer` | buyer | tablet | 6.93% | **OK** | "Join Uganda's Verified Marketplace" | `register_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-register_swiftcart_buyer_tablet.png) |
| `/rider/offline-mode-error-states-for-boda-rider-app` | rider | mobile | 6.8% | **OK** | "Pioneer Mall G-14" | `offline_mode_error_states_for_boda_rider_app` | [View Image](fidelity-images/mobile-rider-offline_mode_error_states_for_boda_rider_app.png) |
| `/seller/seller-wallet-automated-payouts` | seller | desktop | 6.79% | **OK** | "Merchant Wallet & Automated Payouts" | `seller_wallet_automated_payouts_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_wallet_automated_payouts_swiftcart_desktop_light.png) |
| `/hub/hub-line-haul-transit-manifest-handover` | hub | tablet | 6.68% | **OK** | "Route Leg 01: William St Central Hub → Jinja Logistics Hub" | `hub_line_haul_transit_manifest_handover_tablet` | [View Image](fidelity-images/tablet-hub-hub_line_haul_transit_manifest_handover_tablet.png) |
| `/checkout-step-flow` | buyer | tablet | 6.6% | **OK** | "Select Delivery Option" | `checkout_step_flow_tablet` | [View Image](fidelity-images/tablet-buyer-checkout_step_flow_tablet.png) |
| `/product-detail` | buyer | mobile | 6.57% | **OK** | "SoundCore Space One Active Noise Cancelling Headphones" | `product_detail_soundcore_space_one_2` | [View Image](fidelity-images/mobile-buyer-product_detail_soundcore_space_one_2.png) |
| `/rider/rider-map-live-dispatch-navigation` | rider | tablet | 6.39% | **OK** | "Turn Right onto Acacia Ave" | `rider_map_live_dispatch_navigation_tablet_dark` | [View Image](fidelity-images/tablet-rider-rider_map_live_dispatch_navigation_tablet_dark.png) |
| `/seller/seller-overview-dashboard-1` | seller | tablet | 6.39% | **OK** | "Good afternoon, Sarah Namubiru" | `seller_overview_dashboard_tablet_light_1` | [View Image](fidelity-images/tablet-seller-seller_overview_dashboard_tablet_light_1.png) |
| `/sign-in-1` | buyer | desktop | 6.38% | **OK** | "Welcome Back to Uganda's Premier Marketplace" | `sign_in_swiftcart_desktop_1` | [View Image](fidelity-images/desktop-buyer-sign_in_swiftcart_desktop_1.png) |
| `/seller/seller-store-profile-kyc` | seller | desktop | 6.33% | **OK** | "Store Profile & Official Business KYC" | `seller_store_profile_kyc_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_store_profile_kyc_swiftcart_desktop.png) |
| `/seller/seller-riders-fleet-logistics` | seller | desktop | 6.25% | **OK** | "Riders & Dedicated Courier Fleet" | `seller_riders_fleet_logistics_swiftcart_desktop_light` | [View Image](fidelity-images/desktop-seller-seller_riders_fleet_logistics_swiftcart_desktop_light.png) |
| `/escrow-dispute-return-request` | buyer | tablet | 5.98% | **OK** | "Select Disputed Items" | `escrow_dispute_return_request_tablet` | [View Image](fidelity-images/tablet-buyer-escrow_dispute_return_request_tablet.png) |
| `/splash-welcome` | buyer | tablet | 5.76% | **OK** | "Uganda's Fastest Multi-Vendor Marketplace" | `splash_welcome_swiftcart_tablet` | [View Image](fidelity-images/tablet-buyer-splash_welcome_swiftcart_tablet.png) |
| `/cart-multi-vendor` | buyer | desktop | 5.74% | **OK** | "Customer Service" | `cart_multi_vendor_desktop` | [View Image](fidelity-images/desktop-buyer-cart_multi_vendor_desktop.png) |
| `/add-money-bottom-sheet` | buyer | mobile | 5.73% | **OK** | "Add Mobile Money Wallet" | `add_mobile_money_bottom_sheet_swiftcart_uganda` | [View Image](fidelity-images/mobile-buyer-add_mobile_money_bottom_sheet_swiftcart_uganda.png) |
| `/mtn-momo-ussd-165-pin-prompt` | buyer | mobile | 5.36% | **OK** | "SoundCore Space One ANC Headphones" | `mtn_momo_ussd_165_pin_prompt` | [View Image](fidelity-images/mobile-buyer-mtn_momo_ussd_165_pin_prompt.png) |
| `/cart-multi-vendor` | buyer | tablet | 4.51% | **OK** | "Order Summary" | `cart_multi_vendor_tablet` | [View Image](fidelity-images/tablet-buyer-cart_multi_vendor_tablet.png) |
| `/terms-of-service-privacy` | buyer | desktop | 4.48% | **OK** | "Terms of Service & Privacy Policy" | `terms_of_service_privacy_swiftcart_desktop` | [View Image](fidelity-images/desktop-buyer-terms_of_service_privacy_swiftcart_desktop.png) |
| `/mtn-momo-ussd-pin-prompt` | buyer | desktop | 4.08% | **OK** | "Check Your Phone for the MTN MoMo Prompt" | `mtn_momo_ussd_pin_prompt_desktop` | [View Image](fidelity-images/desktop-buyer-mtn_momo_ussd_pin_prompt_desktop.png) |
| `/phone-verification-buyer` | buyer | tablet | 3.93% | **OK** | "Verify Your Phone Number" | `phone_verification_swiftcart_buyer_tablet` | [View Image](fidelity-images/tablet-buyer-phone_verification_swiftcart_buyer_tablet.png) |
| `/seller/seller-products-bulk-price-update` | seller | desktop | 3.16% | **OK** | "Products & Inventory Catalog" | `seller_products_bulk_price_update_swiftcart_desktop` | [View Image](fidelity-images/desktop-seller-seller_products_bulk_price_update_swiftcart_desktop.png) |
| `/phone-verification-2` | buyer | desktop | 1.74% | **OK** | "Verify Your Mobile Number" | `phone_verification_swiftcart_desktop_2` | [View Image](fidelity-images/desktop-buyer-phone_verification_swiftcart_desktop_2.png) |
