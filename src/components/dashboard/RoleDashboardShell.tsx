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
  },
};

// Route-to-heading map for exact mockup heading matching
export const ROUTE_HEADING_MAP: Record<string, string> = {
  // Seller
  '/seller/overview-seller': 'Manifest Runs',
  '/seller': 'Manifest Runs',
  '/seller/orders-seller': 'Orders',
  '/seller/riders-seller': 'My Couriers & Boda Fleet',
  '/seller/returns-disputes-seller': 'Returns And Disputes',
  '/seller/products-seller': 'Products',
  '/seller/add-product-step-1-photos-seller': 'Add Product',
  '/seller/add-product-step-2-ai-photo-studio-seller': 'Make Photos Look Professional',
  '/seller/add-product-step-3-ai-description-seller': 'Write My Description',
  '/seller/add-product-step-4-catalog-details-seller': 'Pricing & Earnings',
  '/seller/add-product-step-5-buyer-preview-submit-seller': 'Media Enhancement',
  '/seller/analytics-seller': 'Analytics',
  '/seller/assign-rider-bottom-sheet-modal-seller': 'Assign Dedicated Rider',
  '/seller/discounts-ads-seller': 'Discounts And Ads',
  '/seller/edit-existing-product-seller': 'Seller Edit Product',
  '/seller/invite-courier-bottom-sheet-modal-seller': 'Invite Dedicated Courier',
  '/seller/merchant-return-inspection-acceptance': 'Inspect Returned Item',
  '/seller/seller-dispute-response-1': 'Dispute Resolution',
  '/seller/seller-dispute-response-2': 'Dispute Resolution',
  '/seller/seller-notifications': 'Seller Notifications',
  '/seller/seller-order-detail-seller': 'Seller Order Detail',
  '/seller/store-profile-seller': 'Kikuubo Sound & Gadgets Hub',
  '/seller/seller-wallet-payouts': 'Wallet & Payouts',

  // Admin
  '/admin/overview-admin': 'Overview',
  '/admin': 'Overview',
  '/admin/admin-order-detail-oversight': 'Admin Order Detail',
  '/admin/audit-log-admin-1': 'Audit Log',
  '/admin/audit-log-admin-2': 'Audit Log',
  '/admin/commission-rates-earnings-admin': 'Commission',
  '/admin/edit-category-commission-modal-with-date-picker': 'Kill Switch Confirmation',
  '/admin/escrow-disputes-admin': 'Escrow & Disputes',
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
        <div className="h-16 px-4 flex items-center justify-between gap-2 w-full">
          {/* Left: Hamburger + Logo + Heading */}
          <div className="flex items-center gap-2 min-w-0 shrink-0 max-w-[260px] md:max-w-xs">
            {navConfig.hasDrawer && (
              <button
                type="button"
                className="lg:hidden sidebar-hamburger-btn w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all active:scale-95 shrink-0"
                aria-label="Open menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Icon name="menu" className="text-[24px]" />
              </button>
            )}

            <img
              src="/brand/swiftcart-logo-icon.png"
              alt="SwiftCart"
              className="lg:hidden h-8 w-auto object-contain cursor-pointer shrink-0"
              onClick={() => onNavigate(navConfig.bottomBarItems[0]?.path || '/')}
            />

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse shrink-0" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary truncate">
                  {navConfig.subtitle}
                </span>
              </div>
              <h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight truncate whitespace-nowrap">
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

          {/* Right: Theme Toggle + Sync/User Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 transition-all active:scale-95"
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

            <button
              type="button"
              onClick={() => onNavigate(navConfig.bottomBarItems[0]?.path || '/')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)] text-on-primary transition-transform active:scale-95 shrink-0"
              aria-label="User Profile"
            >
              <Icon name="person" className="text-[18px]" />
            </button>
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
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-primary-container/20 text-primary-container'
                        }`}
                      >
                        {item.badge}
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
        {/* Sidebar Header with Logo and Brand */}
        <div className="h-16 px-5 flex items-center gap-3 border-b border-surface-container-highest/40 bg-surface-container-low">
          <img
            src="/brand/swiftcart-logo-icon.png"
            alt="SwiftCart"
            className="h-8 w-auto object-contain cursor-pointer shrink-0"
            onClick={() => onNavigate(navConfig.bottomBarItems[0]?.path || '/')}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-[14px] text-on-surface truncate leading-tight tracking-tight">
              {navConfig.title}
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-escrow inline-block animate-pulse shrink-0" />
              <span className="text-[10px] uppercase tracking-wider text-tertiary font-bold truncate">
                {navConfig.subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
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
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-[13px] transition-all ${
                  isActive
                    ? 'bg-primary-container text-white font-bold shadow-md'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon name={item.icon} className={`text-[20px] ${isActive ? 'text-white' : ''}`} />
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-primary-container/20 text-primary-container'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
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
