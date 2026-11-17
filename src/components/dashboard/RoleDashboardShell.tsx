import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../shared/Icon';
import { useDashboardTheme } from '../../context/ThemeContext';

export type DashboardRole = 'seller' | 'admin' | 'super-admin' | 'rider' | 'hub';

export interface NavItem {
  label: string;
  icon: string;
  path: string;
  badge?: string | number;
}

export interface RoleNavConfig {
  role: DashboardRole;
  title: string;
  subtitle: string;
  hasDrawer: boolean;
  drawerItems: NavItem[];
  bottomBarItems: NavItem[];
  desktopSidebarHeader: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  desktopNavItems: NavItem[];
  desktopMoreItems: NavItem[];
  desktopHeaderConfig: {
    brandTitle: string;
    brandSub: string;
    searchPlaceholder: string;
    pills: { icon?: string; label: string; highlight?: boolean }[];
    user: { name: string; roleLabel: string; initials: string };
  };
}

export const ROLE_NAV_CONFIGS: Record<DashboardRole, RoleNavConfig> = {
  seller: {
    role: 'seller',
    title: 'Seller Operations',
    subtitle: 'Live Ops • Kampala Central',
    hasDrawer: true,
    drawerItems: [
      { label: 'Overview', icon: 'grid_view', path: '/seller/overview-seller' },
      { label: 'Orders', icon: 'local_mall', path: '/seller/orders-seller' },
      { label: 'Riders', icon: 'two_wheeler', path: '/seller/riders-seller' },
      { label: 'Returns & Disputes', icon: 'assignment_return', path: '/seller/returns-disputes-seller' },
      { label: 'Products', icon: 'inventory_2', path: '/seller/products-seller' },
      { label: 'Add Product Flow', icon: 'add_photo_alternate', path: '/seller/add-product-step-1-photos-seller' },
      { label: 'Discounts & Ads', icon: 'campaign', path: '/seller/discounts-ads-seller' },
      { label: 'Wallet & Payouts', icon: 'account_balance_wallet', path: '/seller/seller-wallet-payouts' },
      { label: 'Analytics', icon: 'monitoring', path: '/seller/analytics-seller' },
      { label: 'Store Profile', icon: 'storefront', path: '/seller/store-profile-seller' },
      { label: 'Help & Support', icon: 'support_agent', path: '/help-centre' },
      { label: 'Log Out', icon: 'logout', path: '/' },
    ],
    bottomBarItems: [
      { label: 'Overview', icon: 'grid_view', path: '/seller/overview-seller' },
      { label: 'Orders', icon: 'local_mall', path: '/seller/orders-seller' },
      { label: 'Products', icon: 'inventory_2', path: '/seller/products-seller' },
      { label: 'Riders', icon: 'two_wheeler', path: '/seller/riders-seller' },
      { label: 'Profile', icon: 'storefront', path: '/seller/store-profile-seller' },
    ],
    desktopSidebarHeader: {
      title: 'Seller Hub',
      subtitle: 'SoundCore Uganda Official',
      badge: 'URSB',
    },
    desktopNavItems: [
      { label: 'Overview', icon: 'grid_view', path: '/seller/overview-seller' },
      { label: 'Orders', icon: 'local_shipping', path: '/seller/orders-seller', badge: '14 Pending' },
      { label: 'Products & Inventory', icon: 'inventory_2', path: '/seller/products-seller', badge: '2 Low' },
      { label: 'Riders & Logistics', icon: 'two_wheeler', path: '/seller/riders-seller', badge: '6 Active' },
      { label: 'Returns & Disputes', icon: 'gavel', path: '/seller/returns-disputes-seller', badge: '1 Case' },
      { label: 'Wallet & Payouts', icon: 'account_balance_wallet', path: '/seller/seller-wallet-payouts', badge: '14.8M UGX' },
      { label: 'Analytics & Heatmaps', icon: 'insights', path: '/seller/analytics-seller' },
      { label: 'Discounts & Ads', icon: 'campaign', path: '/seller/discounts-ads-seller' },
      { label: 'Store Profile & KYC', icon: 'verified_user', path: '/seller/store-profile-seller', badge: 'check_circle' },
      { label: 'Settings', icon: 'settings', path: '/seller/store-profile-seller' },
    ],
    desktopMoreItems: [
      { label: 'Add Product Flow', icon: 'add_photo_alternate', path: '/seller/add-product-step-1-photos-seller' },
      { label: 'AI Photo Studio', icon: 'auto_fix_high', path: '/seller/add-product-step-2-ai-photo-studio-seller' },
      { label: 'Catalog Preview', icon: 'visibility', path: '/seller/add-product-step-5-buyer-preview-submit-seller' },
      { label: 'Inspect Return', icon: 'fact_check', path: '/seller/merchant-return-inspection-acceptance' },
      { label: 'Help & Support', icon: 'support_agent', path: '/help-centre' },
      { label: 'Log Out', icon: 'logout', path: '/' },
    ],
    desktopHeaderConfig: {
      brandTitle: 'SwiftCart',
      brandSub: 'Seller Portal',
      searchPlaceholder: 'Search products, orders, payouts...',
      pills: [
        { icon: 'verified', label: 'SoundCore Uganda Official', highlight: true },
        { label: 'MTN & Airtel Rails Active' },
      ],
      user: { name: 'Kizito Ronald', roleLabel: 'Store General Manager (KR)', initials: 'KR' },
    },
  },
  admin: {
    role: 'admin',
    title: 'Admin Oversight',
    subtitle: 'Platform Governance',
    hasDrawer: true,
    drawerItems: [
      { label: 'Overview', icon: 'dashboard', path: '/admin/overview-admin' },
      { label: 'Seller Applications & KYC', icon: 'badge', path: '/admin/sellers-directory-admin-1', badge: 14 },
      { label: 'Sellers Directory', icon: 'storefront', path: '/admin/sellers-directory-admin-2' },
      { label: 'Riders (Couriers)', icon: 'two_wheeler', path: '/admin/riders-couriers-admin' },
      { label: 'Orders Oversight', icon: 'shopping_cart_checkout', path: '/admin/orders-oversight-admin', badge: 189 },
      { label: 'Product Moderation', icon: 'fact_check', path: '/admin/product-moderation-admin' },
      { label: 'Escrow & Disputes', icon: 'gavel', path: '/admin/escrow-disputes-admin', badge: 6 },
      { label: 'Payout Queue', icon: 'payments', path: '/admin/payout-queue-admin' },
      { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/admin/overpayments-refunds-admin' },
      { label: 'Commission Rates', icon: 'percent', path: '/admin/commission-rates-earnings-admin' },
      { label: 'Locked Dispatches', icon: 'local_shipping', path: '/admin/locked-dispatches-admin' },
      { label: 'Homepage & Ads', icon: 'campaign', path: '/admin/homepage-ads-admin' },
      { label: 'Audit Log', icon: 'manage_history', path: '/admin/audit-log-admin-1' },
      { label: 'Exit', icon: 'logout', path: '/' },
    ],
    bottomBarItems: [
      { label: 'Overview', icon: 'space_dashboard', path: '/admin/overview-admin' },
      { label: 'KYC', icon: 'how_to_reg', path: '/admin/sellers-directory-admin-1' },
      { label: 'Orders', icon: 'inventory_2', path: '/admin/orders-oversight-admin' },
      { label: 'Disputes', icon: 'shield_with_heart', path: '/admin/escrow-disputes-admin' },
      { label: 'Payouts', icon: 'account_balance_wallet', path: '/admin/payout-queue-admin' },
    ],
    desktopSidebarHeader: {
      title: 'Admin Console',
      subtitle: 'Platform Governance',
      badge: 'UG-KLA',
    },
    desktopNavItems: [
      { label: 'Overview', icon: 'dashboard', path: '/admin/overview-admin' },
      { label: 'Seller Applications', icon: 'storefront', path: '/admin/sellers-directory-admin-1', badge: '14' },
      { label: 'Sellers Directory', icon: 'verified', path: '/admin/sellers-directory-admin-2' },
      { label: 'Riders Fleet', icon: 'two_wheeler', path: '/admin/riders-couriers-admin' },
      { label: 'Product Moderation', icon: 'fact_check', path: '/admin/product-moderation-admin', badge: '8' },
      { label: 'Orders Oversight', icon: 'local_shipping', path: '/admin/orders-oversight-admin', badge: '189' },
      { label: 'Escrow & Disputes', icon: 'shield', path: '/admin/escrow-disputes-admin', badge: '6' },
      { label: 'Payout Queue', icon: 'payments', path: '/admin/payout-queue-admin' },
      { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/admin/overpayments-refunds-admin' },
      { label: 'Commission Rates', icon: 'percent', path: '/admin/commission-rates-earnings-admin' },
      { label: 'Platform Settings', icon: 'tune', path: '/super-admin/platform-settings-super-admin' },
      { label: 'Users & Roles', icon: 'admin_panel_settings', path: '/super-admin/users-roles-super-admin' },
      { label: 'Homepage & Ads', icon: 'ad_units', path: '/admin/homepage-ads-admin' },
      { label: 'Audit Log', icon: 'history', path: '/admin/audit-log-admin-1' },
    ],
    desktopMoreItems: [
      { label: 'Locked Dispatches', icon: 'local_shipping', path: '/admin/locked-dispatches-admin' },
      { label: 'Order Detail Oversight', icon: 'receipt_long', path: '/admin/admin-order-detail-oversight' },
      { label: 'Freeze Seller', icon: 'ac_unit', path: '/admin/freeze-seller-admin' },
      { label: 'Commission Matrix', icon: 'tune', path: '/admin/edit-category-commission-modal-with-date-picker' },
      { label: 'Audit Log Ledger', icon: 'history_edu', path: '/admin/audit-log-admin-2' },
      { label: 'Exit Portal', icon: 'logout', path: '/' },
    ],
    desktopHeaderConfig: {
      brandTitle: 'SwiftCart',
      brandSub: 'Admin Console',
      searchPlaceholder: 'Search orders, sellers, ESCROW IDs, riders... (Press ⌘K)',
      pills: [
        { icon: 'radio_button_checked', label: 'Kampala Central: 12ms', highlight: true },
        { label: 'MTN MoMo: 99.98%' },
        { label: 'Airtel Money: 100%' },
      ],
      user: { name: 'Kizito Ronald', roleLabel: 'Super Admin', initials: 'KR' },
    },
  },
  'super-admin': {
    role: 'super-admin',
    title: 'Super-Admin Master Control',
    subtitle: 'Full Operations Command',
    hasDrawer: true,
    drawerItems: [
      { label: 'Overview', icon: 'dashboard', path: '/super-admin/overview-super-admin' },
      { label: 'Users & Roles', icon: 'manage_accounts', path: '/super-admin/users-roles-super-admin' },
      { label: 'Platform Settings', icon: 'tune', path: '/super-admin/platform-settings-super-admin' },
      { label: 'Seller Applications & KYC', icon: 'badge', path: '/admin/sellers-directory-admin-1', badge: 14 },
      { label: 'Sellers Directory', icon: 'storefront', path: '/admin/sellers-directory-admin-2' },
      { label: 'Riders (Couriers)', icon: 'two_wheeler', path: '/admin/riders-couriers-admin' },
      { label: 'Orders Oversight', icon: 'shopping_cart_checkout', path: '/admin/orders-oversight-admin', badge: 189 },
      { label: 'Product Moderation', icon: 'fact_check', path: '/admin/product-moderation-admin' },
      { label: 'Escrow & Disputes', icon: 'gavel', path: '/admin/escrow-disputes-admin', badge: 6 },
      { label: 'Payout Queue', icon: 'payments', path: '/admin/payout-queue-admin' },
      { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/admin/overpayments-refunds-admin' },
      { label: 'Commission Rates', icon: 'percent', path: '/admin/commission-rates-earnings-admin' },
      { label: 'Locked Dispatches', icon: 'local_shipping', path: '/admin/locked-dispatches-admin' },
      { label: 'Homepage & Ads', icon: 'campaign', path: '/admin/homepage-ads-admin' },
      { label: 'Audit Log', icon: 'manage_history', path: '/super-admin/audit-log-super-admin' },
      { label: 'Exit', icon: 'logout', path: '/' },
    ],
    bottomBarItems: [
      { label: 'Overview', icon: 'space_dashboard', path: '/super-admin/overview-super-admin' },
      { label: 'KYC', icon: 'how_to_reg', path: '/admin/sellers-directory-admin-1' },
      { label: 'Orders', icon: 'inventory_2', path: '/admin/orders-oversight-admin' },
      { label: 'Disputes', icon: 'shield_with_heart', path: '/admin/escrow-disputes-admin' },
      { label: 'Governance', icon: 'admin_panel_settings', path: '/super-admin/platform-settings-super-admin' },
    ],
    desktopSidebarHeader: {
      title: 'Super Admin Console',
      subtitle: 'Full Operations Command',
      badge: 'ROOT',
    },
    desktopNavItems: [
      { label: 'Overview', icon: 'space_dashboard', path: '/super-admin/overview-super-admin' },
      { label: 'Users & Roles', icon: 'admin_panel_settings', path: '/super-admin/users-roles-super-admin' },
      { label: 'Platform Settings', icon: 'tune', path: '/super-admin/platform-settings-super-admin' },
      { label: 'Orders Oversight', icon: 'receipt_long', path: '/admin/orders-oversight-admin' },
      { label: 'Riders Fleet', icon: 'two_wheeler', path: '/admin/riders-couriers-admin' },
      { label: 'Seller Applications', icon: 'how_to_reg', path: '/admin/sellers-directory-admin-1', badge: '14' },
      { label: 'Sellers Directory', icon: 'storefront', path: '/admin/sellers-directory-admin-2' },
      { label: 'Product Moderation', icon: 'verified', path: '/admin/product-moderation-admin', badge: '8' },
      { label: 'Escrow & Disputes', icon: 'shield_lock', path: '/admin/escrow-disputes-admin', badge: '6' },
      { label: 'Payout Queue', icon: 'payments', path: '/admin/payout-queue-admin' },
      { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/admin/overpayments-refunds-admin' },
      { label: 'Commission Rates', icon: 'percent', path: '/admin/commission-rates-earnings-admin' },
      { label: 'Homepage & Ads', icon: 'view_carousel', path: '/admin/homepage-ads-admin' },
      { label: 'Audit Log', icon: 'history', path: '/super-admin/audit-log-super-admin' },
    ],
    desktopMoreItems: [
      { label: 'Danger Zone', icon: 'warning', path: '/super-admin/danger-zone-role-change-super-admin' },
      { label: 'Locked Dispatches', icon: 'local_shipping', path: '/admin/locked-dispatches-admin' },
      { label: 'Exit Portal', icon: 'logout', path: '/' },
    ],
    desktopHeaderConfig: {
      brandTitle: 'SwiftCart',
      brandSub: 'Super Admin Control Center',
      searchPlaceholder: 'Search users, system logs, security keys... (Press ⌘K)',
      pills: [
        { icon: 'sync', label: 'Node: 99.98% Live', highlight: true },
        { label: 'Kampala Central: 12ms' },
        { label: 'MTN & Airtel Rails Synced' },
      ],
      user: { name: 'Kizito Ronald', roleLabel: 'Super Admin', initials: 'KR' },
    },
  },
  rider: {
    role: 'rider',
    title: 'Boda Rider Console',
    subtitle: 'On Duty • Active Dispatch',
    hasDrawer: false,
    drawerItems: [
      { label: 'Overview & Fleet Map', icon: 'map', path: '/rider/overview-rider' },
      { label: 'Active Task & OTP Simulation', icon: 'pin', path: '/rider/boda-rider-delivery-task-execution-code-entry' },
      { label: 'Reverse Handover & Inspection', icon: 'swap_horizontal_circle', path: '/rider/boda-rider-reverse-pickup-package-inspection' },
      { label: 'Security Locked & Exceptions', icon: 'gshield', path: '/rider/rider-code-locked-security' },
      { label: 'Earnings & Telecom MoMo', icon: 'account_balance_wallet', path: '/rider/earnings-rider' },
      { label: 'Deliveries', icon: 'package_2', path: '/rider/deliveries-rider' },
      { label: 'Rider Map', icon: 'location_on', path: '/rider/rider-map-rider' },
      { label: 'Profile', icon: 'person', path: '/rider/profile-support-rider' },
      { label: 'Exit', icon: 'logout', path: '/' },
    ],
    bottomBarItems: [
      { label: 'Overview', icon: 'dashboard', path: '/rider/overview-rider' },
      { label: 'Deliveries', icon: 'package_2', path: '/rider/deliveries-rider' },
      { label: 'Map', icon: 'location_on', path: '/rider/rider-map-rider' },
      { label: 'Earnings', icon: 'account_balance_wallet', path: '/rider/earnings-rider' },
      { label: 'Profile', icon: 'person', path: '/rider/profile-support-rider' },
    ],
    desktopSidebarHeader: {
      title: 'Dispatch Command Navigation',
      subtitle: 'Boda Sim Ops',
      badge: 'BODA',
    },
    desktopNavItems: [
      { label: 'Overview & Fleet Map', icon: 'map', path: '/rider/overview-rider' },
      { label: 'Active Task & OTP Simulation', icon: 'pin', path: '/rider/boda-rider-delivery-task-execution-code-entry' },
      { label: 'Security Locked & Exceptions', icon: 'gshield', path: '/rider/rider-code-locked-security' },
      { label: 'Earnings & Telecom MoMo', icon: 'account_balance_wallet', path: '/rider/earnings-rider' },
    ],
    desktopMoreItems: [
      { label: 'Deliveries', icon: 'package_2', path: '/rider/deliveries-rider' },
      { label: 'Rider Map', icon: 'location_on', path: '/rider/rider-map-rider' },
      { label: 'Reverse Inspection', icon: 'swap_horizontal_circle', path: '/rider/boda-rider-reverse-pickup-package-inspection' },
      { label: 'Profile & Support', icon: 'person', path: '/rider/profile-support-rider' },
      { label: 'Exit Portal', icon: 'logout', path: '/' },
    ],
    desktopHeaderConfig: {
      brandTitle: 'SwiftCart Uganda',
      brandSub: 'Dispatch & Sim Ops',
      searchPlaceholder: 'Search active tasks, dispatch pins, route corridors...',
      pills: [
        { icon: 'hub', label: 'Kampala Central Hub #04', highlight: true },
        { icon: 'phone_iphone', label: 'Tecno Camon 20' },
        { icon: 'signal_cellular_alt_2_bar', label: 'Edge / 2.5G' },
        { icon: 'battery_horiz_075', label: '84%' },
      ],
      user: { name: 'Kigozi Ronald', roleLabel: 'Boda #412', initials: 'KR' },
    },
  },
  hub: {
    role: 'hub',
    title: 'Work Hub Operations',
    subtitle: 'Central Sorting • Station 01',
    hasDrawer: true,
    drawerItems: [
      { label: 'Overview', icon: 'dashboard', path: '/hub/overview-hub-agent' },
      { label: 'Intake & Sorting Station', icon: 'warehouse', path: '/hub/hub-intake-sorting-station-work-hub' },
      { label: 'Intake Station', icon: 'move_to_inbox', path: '/hub/hub-intake-station-work-hub' },
      { label: 'Sorting Station', icon: 'filter_alt', path: '/hub/hub-sorting-station-work-hub' },
      { label: 'Storage & Aging Matrix', icon: 'inventory_2', path: '/hub/hub-storage-aging-matrix-hub' },
      { label: 'Courier Bag Staging & Dispatch', icon: 'local_shipping', path: '/hub/rider-dispatch-courier-bag-staging-hub-agent' },
      { label: 'Linehaul Transit Manifest', icon: 'alt_route', path: '/hub/line-haul-transit-manifest-creation-hub-agent' },
      { label: 'Regional Linehaul Handover', icon: 'local_shipping', path: '/hub/regional-linehaul-transit-handover-work-hub' },
      { label: 'Damaged Parcel Quarantine Bay', icon: 'fact_check', path: '/hub/damaged-parcel-quarantine-bay-intake-hub-agent' },
      { label: 'Escrow Ledger & Shared System', icon: 'account_balance_wallet', path: '/hub/swiftcart-work-hub-shared-system-components' },
      { label: 'Field Support', icon: 'help_center', path: '/help-centre' },
      { label: 'Sign Out', icon: 'logout', path: '/' },
    ],
    bottomBarItems: [
      { label: 'Overview', icon: 'dashboard', path: '/hub/overview-hub-agent' },
      { label: 'Intake', icon: 'move_to_inbox', path: '/hub/intake-hub-agent' },
      { label: 'Scan', icon: 'qr_code_scanner', path: '/hub/scan-hub-agent' },
      { label: 'Pickup', icon: 'front_hand', path: '/hub/pickup-hub-agent' },
      { label: 'More', icon: 'widgets', path: '/hub/more-hub-agent' },
    ],
    desktopSidebarHeader: {
      title: 'UG-KLA Hub Ops Portal',
      subtitle: 'Sorting Node #04',
      badge: 'HUB #04',
    },
    desktopNavItems: [
      { label: 'Station Overview', icon: 'hub', path: '/hub/overview-hub-agent' },
      { label: 'Inbound Intake & Scan', icon: 'barcode_scanner', path: '/hub/hub-intake-sorting-station-work-hub' },
      { label: 'Rider Dispatch & Staging', icon: 'two_wheeler', path: '/hub/rider-dispatch-courier-bag-staging-hub-agent' },
      { label: 'Storage & Aging Matrix', icon: 'shelves', path: '/hub/hub-storage-aging-matrix-hub' },
      { label: 'Line-Haul Manifests', icon: 'local_shipping', path: '/hub/line-haul-transit-manifest-creation-hub-agent' },
      { label: 'Customer Pickup', icon: 'countertops', path: '/hub/pickup-hub-agent' },
      { label: 'Damaged & Quarantine Bay', icon: 'gavel', path: '/hub/damaged-parcel-quarantine-bay-intake-hub-agent' },
      { label: 'Returns & RTO', icon: 'replay', path: '/hub/returns-damaged-goods-quarantine-bay-work-hub' },
    ],
    desktopMoreItems: [
      { label: 'Intake Station', icon: 'move_to_inbox', path: '/hub/hub-intake-station-work-hub' },
      { label: 'Sorting Station', icon: 'filter_alt', path: '/hub/hub-sorting-station-work-hub' },
      { label: 'Barcode Scanner Desk', icon: 'qr_code_scanner', path: '/hub/scan-hub-agent' },
      { label: 'Regional Linehaul Handover', icon: 'alt_route', path: '/hub/regional-linehaul-transit-handover-work-hub' },
      { label: 'Shared Operations Components', icon: 'account_balance_wallet', path: '/hub/swiftcart-work-hub-shared-system-components' },
      { label: 'Exit Portal', icon: 'logout', path: '/' },
    ],
    desktopHeaderConfig: {
      brandTitle: 'SwiftCart',
      brandSub: 'Hub Operations Node',
      searchPlaceholder: 'Scan or search parcel tracking, bag barcode, line-haul manifest...',
      pills: [
        { icon: 'location_on', label: 'Kampala Central Hub #04 - William St', highlight: true },
        { icon: 'conveyor_belt', label: 'Belt #2 Speed: 1.4 m/s (Nominal)' },
        { icon: 'qr_code_scanner', label: 'Honeywell Xenon 1950g Ready' },
        { icon: 'schedule', label: '14:38:09 EAT' },
      ],
      user: { name: 'Brian Mukasa', roleLabel: 'Hub Lead Supervisor', initials: 'BM' },
    },
  },
};

// Route-to-heading map for exact mockup heading matching
export const ROUTE_HEADING_MAP: Record<string, string> = {
  // Seller
  '/seller/overview-seller': 'Manifest Runs',
  '/seller': 'Manifest Runs',
  '/seller/orders-seller': 'Orders',
  '/seller/riders-seller': 'My Couriers & Boda Fleet',
  '/seller/returns-disputes-seller': 'Returns & Disputes',
  '/seller/products-seller': 'Inventory & Catalog',
  '/seller/add-product-step-1-photos-seller': 'Add Product',
  '/seller/add-product-step-2-ai-photo-studio-seller': 'AI Studio Enhancer',
  '/seller/add-product-step-3-ai-description-seller': 'AI Product Details',
  '/seller/add-product-step-4-catalog-details-seller': 'Catalog Specifications',
  '/seller/add-product-step-5-buyer-preview-submit-seller': 'Preview & Publish',
  '/seller/assign-rider-bottom-sheet-modal-seller': 'Assign Delivery Rider',
  '/seller/discounts-ads-seller': 'Discounts & Ads',
  '/seller/edit-existing-product-seller': 'Edit Product',
  '/seller/invite-courier-bottom-sheet-modal-seller': 'Invite Boda Courier',
  '/seller/merchant-return-inspection-acceptance': 'Inspect Return Tamper Bag',
  '/seller/seller-analytics-seller': 'Store Analytics',
  '/seller/analytics-seller': 'Store Analytics',
  '/seller/seller-dispute-response-1': 'Dispute Response',
  '/seller/seller-dispute-response-2': 'Dispute Settlement',
  '/seller/seller-notifications': 'Seller Notifications',
  '/seller/seller-order-detail-seller': 'Order Details',
  '/seller/store-profile-seller': 'Store Profile',
  '/seller/seller-wallet-payouts': 'Wallet & Payouts',

  // Admin
  '/admin/overview-admin': 'Escrow Ledger',
  '/admin': 'Escrow Ledger',
  '/admin/admin-order-detail-oversight': 'Order Oversight Detail',
  '/admin/audit-log-admin-1': 'Audit Log',
  '/admin/audit-log-admin-2': 'Security Ledger',
  '/admin/commission-rates-earnings-admin': 'Commission Matrix',
  '/admin/edit-category-commission-modal-with-date-picker': 'Commission Schedule',
  '/admin/escrow-disputes-admin': 'Escrow Disputes',
  '/admin/freeze-seller-admin': 'Freeze Seller',
  '/admin/homepage-ads-admin': 'Homepage & Ads',
  '/admin/locked-dispatches-admin': 'Locked Dispatches',
  '/admin/orders-oversight-admin': 'Orders',
  '/admin/overpayments-refunds-admin': 'Overpayments & Refunds',
  '/admin/payout-queue-admin': 'Payout Queue',
  '/admin/product-moderation-admin': 'Product Moderation',
  '/admin/riders-couriers-admin': 'Riders (Couriers)',
  '/admin/sellers-directory-admin-1': 'Sellers Directory',
  '/admin/sellers-directory-admin-2': 'Sellers Directory',

  // Super-Admin
  '/super-admin/overview-super-admin': 'System Infrastructure',
  '/super-admin': 'System Infrastructure',
  '/super-admin/users-roles-super-admin': 'Users & Roles',
  '/super-admin/platform-settings-super-admin': 'Platform Settings Swiftcart Admin',
  '/super-admin/audit-log-super-admin': 'Audit Log Swiftcart Admin',
  '/super-admin/danger-zone-role-change-super-admin': 'Danger Zone',

  // Rider
  '/rider/overview-rider': 'Overview',
  '/rider': 'Overview',
  '/rider/deliveries-rider': 'Deliveries',
  '/rider/rider-map-rider': 'Rider Map',
  '/rider/earnings-rider': 'Earnings',
  '/rider/profile-support-rider': 'Profile',
  '/rider/boda-rider-delivery-task-execution-code-entry': 'Boda Rider Delivery',
  '/rider/boda-rider-reverse-pickup-package-inspection': 'Operational Workflow',
  '/rider/failed-delivery-modal-rider': 'Failed Delivery',
  '/rider/offline-mode-error-states-for-boda-rider-app': 'Boda Offline Error',
  '/rider/rider-code-locked-security': 'Security Lockout',
  '/rider/rider-return-pickup-rider': 'Return Pickup Task',
  '/rider/rider-seller-pickup-delivery-detail': 'Rider Seller Pickup Confirmation',

  // Hub
  '/hub/overview-hub-agent': 'Station #04 Desk',
  '/hub': 'Station #04 Desk',
  '/hub/intake-hub-agent': 'Intake',
  '/hub/scan-hub-agent': 'Scan',
  '/hub/pickup-hub-agent': 'Dennis Mukasa',
  '/hub/more-hub-agent': 'More Hub Controls',
  '/hub/courier-bag-qr-scan-confirmation-modal-work-hub': 'High Velocity Scan',
  '/hub/damaged-parcel-quarantine-bay-intake-hub-agent': 'Discrepancy Report',
  '/hub/hub-intake-sorting-station-work-hub': 'Hub Intake Sorting',
  '/hub/hub-intake-station-work-hub': 'Intake',
  '/hub/hub-sorting-station-work-hub': 'Sorting',
  '/hub/hub-storage-aging-matrix-hub': 'Hub Storage & Aging',
  '/hub/line-haul-transit-manifest-creation-hub-agent': 'Package Detail',
  '/hub/regional-linehaul-transit-handover-work-hub': 'Route #LH-UG-04',
  '/hub/returns-damaged-goods-quarantine-bay-work-hub': 'Quarantine Bay 03',
  '/hub/rider-dispatch-courier-bag-staging-hub-agent': 'Package Detail',
  '/hub/swiftcart-work-hub-shared-system-components': 'Field Operations KPIs',
};

export interface RoleDashboardShellProps {
  role: DashboardRole;
  currentPath: string;
  onNavigate: (path: string) => void;
  title?: string;
  children: React.ReactNode;
}

export const RoleDashboardShell: React.FC<RoleDashboardShellProps> = ({
  role,
  currentPath,
  onNavigate,
  title,
  children,
}) => {
  const { theme, toggleTheme } = useDashboardTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navConfig = ROLE_NAV_CONFIGS[role] || ROLE_NAV_CONFIGS.seller;
  const normalizedPath = currentPath.toLowerCase().replace(/\/+$/, '') || '/';
  const displayHeading = title || ROUTE_HEADING_MAP[normalizedPath] || navConfig.title;

  // Auto-close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [currentPath]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-surface text-on-surface flex flex-col overflow-x-hidden" data-role-shell={role}>
      {/* 1. SHARED TOP BAR */}
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 lg:left-72 z-40 h-16 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-highest/30 shadow-sm select-none"
        data-testid="shared-dashboard-header"
      >
        <div className="h-16 px-4 lg:px-6 flex items-center justify-between gap-2 lg:gap-4 w-full">
          {/* Left: Mobile/Tablet Hamburger & Title (Hidden on desktop where sidebar provides branding) */}
          <div className="lg:hidden flex items-center gap-2 min-w-0 flex-1 pr-2">
            {navConfig.hasDrawer && (
              <button
                type="button"
                className="sidebar-hamburger-btn w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all active:scale-95 shrink-0"
                aria-label="Open menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Icon name="menu" className="text-[24px]" />
              </button>
            )}

            <img
              src="/brand/swiftcart-logo-icon.png"
              alt="SwiftCart"
              className="h-8 w-auto object-contain cursor-pointer shrink-0"
              onClick={() => onNavigate(navConfig.bottomBarItems[0]?.path || '/')}
            />

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse shrink-0" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary truncate">
                  {navConfig.subtitle}
                </span>
              </div>
              <h1 className="font-headline-sm text-[16px] sm:text-headline-sm text-on-surface leading-tight tracking-tight truncate">
                {displayHeading}
              </h1>
            </div>
          </div>

          {/* Tablet Horizontal Nav for Admin, Rider, Hub (Tablet only: md:flex lg:hidden) */}
          {(role === 'admin' || role === 'rider' || role === 'hub') && (
            <nav
              className="hidden md:flex lg:hidden flex-1 min-w-0 items-center justify-center gap-1 overflow-x-auto scrollbar-none mx-2"
              data-testid="dashboard-tablet-top-nav"
              aria-label="Tablet navigation tabs"
            >
              {navConfig.bottomBarItems.map((item) => {
                const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
                const isParentActive = item.path !== '/' && normalizedPath.startsWith(item.path.toLowerCase().replace(/\/+$/, ''));
                const isActive = isExactActive || isParentActive;

                return (
                  <a
                    key={item.path + item.label}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary shadow-sm font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon name={item.icon} className="text-[16px]" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          )}

          {/* Desktop Left/Center: Command Search Bar matching desktop mockups */}
          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative flex items-center bg-surface-container-low border border-surface-container-highest/50 rounded-xl px-3 py-2 text-xs text-on-surface-variant hover:border-primary/50 transition-colors w-full cursor-text">
              <Icon name="search" className="text-[18px] mr-2 text-on-surface-variant/70 shrink-0" />
              <span className="truncate flex-1">{navConfig.desktopHeaderConfig.searchPlaceholder}</span>
              <kbd className="ml-2 px-1.5 py-0.5 rounded bg-surface-container text-[10px] font-mono font-bold text-on-surface-variant border border-surface-container-highest/60 shrink-0">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Right: Telemetry Status Pill + Theme Toggle + Notifications + User Profile */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Desktop Telemetry Status Pill (first pill matching mockup) */}
            <div className="hidden xl:flex items-center gap-2">
              {navConfig.desktopHeaderConfig.pills.slice(0, 1).map((pill, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${
                    pill.highlight
                      ? 'bg-tertiary-container/20 text-tertiary border border-tertiary-container/30'
                      : 'bg-surface-container-low text-on-surface-variant border border-surface-container-highest/40'
                  }`}
                >
                  {pill.icon && <Icon name={pill.icon} className="text-[15px]" />}
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>

            {/* Sync / Refresh Action Button (from mobile/tablet mockups) */}
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 transition-all active:scale-95 shrink-0"
              aria-label="Sync status"
              title="Sync Status"
              onClick={() => {}}
            >
              <Icon name="sync_alt" className="text-[18px]" />
            </button>

            {/* Exactly ONE theme toggle in the header: ALWAYS visible across mobile, tablet, and desktop */}
            <button
              type="button"
              className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 transition-all active:scale-95 shrink-0"
              aria-label="Toggle Theme"
              title="Toggle Theme"
              onClick={() => toggleTheme()}
            >
              {theme === 'dark' ? (
                <Icon name="light_mode" className="text-[20px]" />
              ) : (
                <Icon name="dark_mode" className="text-[20px]" />
              )}
            </button>

            {/* Desktop Notifications Button */}
            <button
              type="button"
              className="hidden lg:flex w-9 h-9 relative items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 transition-colors"
              aria-label="Notifications"
            >
              <Icon name="notifications" className="text-[20px]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
            </button>

            {/* Mobile/Tablet User Icon Button */}
            <button
              type="button"
              onClick={() => onNavigate(navConfig.bottomBarItems[0]?.path || '/')}
              className="lg:hidden w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)] text-on-primary transition-transform active:scale-95 shrink-0"
              aria-label="User Profile"
            >
              <Icon name="person" className="text-[18px]" />
            </button>

            {/* Desktop User Profile Block */}
            <div className="hidden lg:flex items-center gap-2.5 pl-3 border-l border-surface-container-highest/40">
              <div className="w-8 h-8 rounded-full bg-primary-container text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                {navConfig.desktopHeaderConfig.user.initials}
              </div>
              <div className="flex flex-col text-left leading-tight min-w-0 max-w-[130px]">
                <span className="text-xs font-bold text-on-surface truncate">
                  {navConfig.desktopHeaderConfig.user.name}
                </span>
                <span className="text-[10px] text-on-surface-variant truncate">
                  {navConfig.desktopHeaderConfig.user.roleLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HAMBURGER DRAWER (Modal / Slide-out) */}
      {navConfig.hasDrawer && (
        <>
          {/* Backdrop */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
              onClick={() => setIsDrawerOpen(false)}
              data-testid="drawer-backdrop"
              aria-hidden="true"
            />
          )}

          {/* Aside Drawer */}
          <aside
            className={`fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] flex flex-col pt-safe pb-safe shadow-2xl transition-transform duration-300 ease-in-out ${
              isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            } ${theme === 'dark' ? 'bg-[#0d1225] border-r border-[#2f3448]/60 text-slate-100' : 'bg-white border-r border-slate-200 text-slate-900'}`}
            id={`${role}-drawer`}
            data-testid="dashboard-drawer"
            aria-label={`${navConfig.title} navigation`}
          >
            {/* Drawer Header */}
            <div className="p-4 flex items-center justify-between border-b border-surface-container-highest/40 bg-surface-container-low">
              <div className="flex items-center gap-2.5 min-w-0">
                <img src="/brand/swiftcart-logo-icon.png" alt="SwiftCart" className="h-8 w-auto object-contain" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-[14px] truncate leading-tight">{navConfig.title}</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-escrow inline-block" />
                    <span className="text-[10px] uppercase tracking-wider text-tertiary font-bold">Verified Portal</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="sidebar-close-btn w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors active:scale-95"
                aria-label="Close menu"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {navConfig.drawerItems.map((item) => {
                const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
                const isParentActive = item.path !== '/' && normalizedPath.startsWith(item.path.toLowerCase().replace(/\/+$/, ''));
                const isActive = isExactActive || isParentActive;

                return (
                  <a
                    key={item.path + item.label}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                      setIsDrawerOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-[14px] transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-container to-primary text-white font-bold shadow-md'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon name={item.icon} className={`text-[20px] ${isActive ? 'text-white' : ''}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold flex items-center justify-center ${
                          isActive ? 'bg-white/20 text-white' : 'bg-primary-container/20 text-primary-container'
                        }`}
                      >
                        {typeof item.badge === 'string' && (item.badge === 'check_circle' || item.badge.includes('_')) ? (
                          <Icon name={item.badge} className="text-[14px]" />
                        ) : (
                          item.badge
                        )}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-3 border-t border-surface-container-highest/40 bg-surface-container-low/60 flex items-center justify-between">
              <span className="text-[11px] text-on-surface-variant font-medium">
                {role === 'admin' ? 'v2.4.1 (UG-Cluster)' : role === 'seller' ? 'SwiftCart Seller v1.2' : role === 'hub' ? 'Station #01 • William St' : 'Master Control • Kampala'}
              </span>
              <span className="text-[10px] text-tertiary font-bold uppercase tracking-wider">
                Active Session
              </span>
            </div>
          </aside>
        </>
      )}

      {/* 2b. TABLET 72PX LEFT RAIL (Seller & Super-Admin) - Icon-only with tooltip */}
      {(role === 'seller' || role === 'super-admin') && (
        <aside
          className="hidden md:flex lg:hidden flex-col fixed top-16 bottom-0 left-0 z-30 w-[72px] bg-surface-container-low border-r border-surface-container-highest/40 py-3 items-center gap-2 select-none overflow-y-auto scrollbar-none"
          data-testid="dashboard-tablet-rail"
          aria-label={`${navConfig.title} rail navigation`}
        >
          {navConfig.drawerItems.slice(0, 8).map((item) => {
            const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
            const isParentActive = item.path !== '/' && normalizedPath.startsWith(item.path.toLowerCase().replace(/\/+$/, ''));
            const isActive = isExactActive || isParentActive;

            return (
              <a
                key={item.path + item.label}
                href={item.path}
                title={item.label}
                aria-label={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon name={item.icon} className="text-[22px]" />
              </a>
            );
          })}
        </aside>
      )}

      {/* 2c. DESKTOP 288PX FIXED LEFT SIDEBAR (lg:flex) */}
      <aside
        className="hidden lg:flex fixed top-0 bottom-0 left-0 z-30 w-72 flex-col bg-surface-container-low border-r border-surface-container-highest/40 select-none overflow-hidden"
        data-testid="dashboard-desktop-sidebar"
        aria-label={`${navConfig.title} desktop navigation`}
      >
        {/* Sidebar Header with Mockup Logo & Title */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-surface-container-highest/40 bg-surface-container-low">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/brand/swiftcart-logo-icon.png"
              alt="SwiftCart"
              className="h-8 w-auto object-contain cursor-pointer shrink-0"
              onClick={() => onNavigate(navConfig.desktopNavItems[0]?.path || '/')}
            />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[14px] text-on-surface truncate leading-tight tracking-tight">
                {navConfig.desktopSidebarHeader.title}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-escrow inline-block animate-pulse shrink-0" />
                <span className="text-[10px] uppercase tracking-wider text-tertiary font-bold truncate">
                  {navConfig.desktopSidebarHeader.subtitle}
                </span>
              </div>
            </div>
          </div>
          {navConfig.desktopSidebarHeader.badge && (
            <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-mono font-bold text-on-surface-variant shrink-0 border border-surface-container-highest/60">
              {navConfig.desktopSidebarHeader.badge}
            </span>
          )}
        </div>

        {/* Sidebar Navigation Items in EXACT mockup order */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navConfig.desktopNavItems.map((item) => {
            const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
            const isParentActive = item.path !== '/' && normalizedPath.startsWith(item.path.toLowerCase().replace(/\/+$/, ''));
            const isActive = isExactActive || isParentActive;

            return (
              <a
                key={item.path + item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-xl font-medium text-[13px] transition-all ${
                  isActive
                    ? 'bg-primary-container text-white font-bold shadow-md'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon name={item.icon} className={`text-[19px] ${isActive ? 'text-white' : ''}`} />
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-primary-container/20 text-primary-container'
                    }`}
                  >
                    {typeof item.badge === 'string' && (item.badge === 'check_circle' || item.badge.includes('_')) ? (
                      <Icon name={item.badge} className="text-[13px]" />
                    ) : (
                      item.badge
                    )}
                  </span>
                )}
              </a>
            );
          })}

          {/* More Operations / Sub-routes Section */}
          {navConfig.desktopMoreItems.length > 0 && (
            <div className="pt-3 mt-3 border-t border-surface-container-highest/40 space-y-1">
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/70 block mb-1">
                More Operations
              </span>
              {navConfig.desktopMoreItems.map((item) => {
                const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
                const isActive = isExactActive;

                return (
                  <a
                    key={item.path + item.label}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-surface-container text-primary font-bold'
                        : 'text-on-surface-variant/80 hover:bg-surface-container/60 hover:text-on-surface'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon name={item.icon} className="text-[16px]" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-surface-container-highest/40 bg-surface-container-lowest/60 flex flex-col gap-2">
          <div className="bg-surface-container-low p-2.5 rounded-xl shadow-inner flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant">Live Ops Channel</span>
              <span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
            </div>
            <span className="text-[11px] text-tertiary font-mono">Uganda Node #EAT-KLA-01</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-on-surface-variant px-1">
            <span>SwiftCart v2.8</span>
            <span className="font-semibold text-tertiary">Active</span>
          </div>
        </div>
      </aside>

      {/* 3. SCREEN CHILDREN (Rendered inside main container) */}
      <div
        className={`flex-1 flex flex-col w-full relative ${
          role === 'seller' || role === 'super-admin' ? 'md:pl-[72px] lg:pl-72' : 'lg:pl-72'
        } ${navConfig.bottomBarItems.length > 0 ? 'pb-20 md:pb-6' : 'pb-6'} min-h-screen`}
      >
        {children}
      </div>

      {/* 4. SHARED BOTTOM BAR (Phone only: md:hidden) */}
      {navConfig.bottomBarItems.length > 0 && (
        <nav
          className="md:hidden fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl border-t border-surface-container-highest/40 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] select-none"
          data-testid="shared-dashboard-bottom-bar"
          aria-label="Bottom tab navigation"
        >
          <div className="h-16 px-2 flex items-center justify-around max-w-md mx-auto w-full">
            {navConfig.bottomBarItems.map((item) => {
              const isExactActive = normalizedPath === item.path.toLowerCase().replace(/\/+$/, '');
              const isParentActive = item.path !== '/' && item.path !== '/hub/more-hub-agent' && normalizedPath.startsWith(item.path.toLowerCase().replace(/\/+$/, ''));
              const isGovernance = item.label === 'Governance' && (normalizedPath === '/super-admin/users-roles-super-admin' || normalizedPath === '/super-admin/platform-settings-super-admin');
              const isActive = isExactActive || isParentActive || isGovernance;
              const isMore = item.label === 'More';

              return (
                <a
                  key={item.path + item.label}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isMore) {
                      setIsDrawerOpen(true);
                    } else {
                      onNavigate(item.path);
                    }
                  }}
                  className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                    isActive
                      ? 'text-primary-container font-bold scale-105'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon name={item.icon} className="text-[22px]" />
                  <span className="text-[11px] font-medium tracking-tight mt-0.5 whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default RoleDashboardShell;
