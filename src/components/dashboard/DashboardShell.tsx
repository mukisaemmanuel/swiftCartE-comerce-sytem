import React, { useState, useEffect } from 'react';
import Logo from '../brand/Logo';
import { useDashboardTheme } from '../../context/ThemeContext';

export type DashboardRole = 'seller' | 'admin' | 'super-admin';

export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  badge?: string | number;
}

export const ROLE_MENUS: Record<DashboardRole, MenuItem[]> = {
  seller: [
    { label: 'Overview', icon: 'grid_view', path: '/seller' },
    { label: 'Orders', icon: 'receipt_long', path: '/seller/orders' },
    { label: 'Products', icon: 'inventory_2', path: '/seller/products' },
    { label: 'Riders', icon: 'two_wheeler', path: '/seller/riders' },
    { label: 'Wallet & Payouts', icon: 'account_balance_wallet', path: '/seller/wallet' },
    { label: 'Analytics', icon: 'analytics', path: '/seller/analytics' },
    { label: 'Discounts & Ads', icon: 'campaign', path: '/seller/discounts' },
    { label: 'Returns & Disputes', icon: 'assignment_return', path: '/seller/returns' },
    { label: 'Store Profile', icon: 'storefront', path: '/seller/profile' },
  ],
  admin: [
    { label: 'Overview', icon: 'grid_view', path: '/admin' },
    { label: 'Seller Applications & KYC', icon: 'badge', path: '/admin/kyc' },
    { label: 'Sellers Directory', icon: 'store', path: '/admin/sellers' },
    { label: 'Riders', icon: 'two_wheeler', path: '/admin/riders' },
    { label: 'Orders', icon: 'receipt_long', path: '/admin/orders' },
    { label: 'Product Moderation', icon: 'gavel', path: '/admin/moderation' },
    { label: 'Escrow & Disputes', icon: 'verified_user', path: '/admin/disputes' },
    { label: 'Payout Queue', icon: 'payments', path: '/admin/payouts' },
    { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/admin/refunds' },
    { label: 'Commission', icon: 'percent', path: '/admin/commission' },
    { label: 'Locked Dispatches', icon: 'lock', path: '/admin/locked-dispatches' },
    { label: 'Homepage & Ads', icon: 'view_carousel', path: '/admin/homepage-ads' },
    { label: 'Audit Log', icon: 'history', path: '/admin/audit-log' },
  ],
  'super-admin': [
    { label: 'Overview', icon: 'grid_view', path: '/super-admin' },
    { label: 'Seller Applications & KYC', icon: 'badge', path: '/super-admin/kyc' },
    { label: 'Sellers Directory', icon: 'store', path: '/super-admin/sellers' },
    { label: 'Riders', icon: 'two_wheeler', path: '/super-admin/riders' },
    { label: 'Orders', icon: 'receipt_long', path: '/super-admin/orders' },
    { label: 'Product Moderation', icon: 'gavel', path: '/super-admin/moderation' },
    { label: 'Escrow & Disputes', icon: 'verified_user', path: '/super-admin/disputes' },
    { label: 'Payout Queue', icon: 'payments', path: '/super-admin/payouts' },
    { label: 'Overpayments & Refunds', icon: 'currency_exchange', path: '/super-admin/refunds' },
    { label: 'Commission', icon: 'percent', path: '/super-admin/commission' },
    { label: 'Locked Dispatches', icon: 'lock', path: '/super-admin/locked-dispatches' },
    { label: 'Homepage & Ads', icon: 'view_carousel', path: '/super-admin/homepage-ads' },
    { label: 'Audit Log', icon: 'history', path: '/super-admin/audit-log' },
    { label: 'Users & Roles', icon: 'manage_accounts', path: '/super-admin/users-roles' },
    { label: 'Platform Settings', icon: 'tune', path: '/super-admin/settings' },
  ],
};

export interface DashboardShellProps {
  role: DashboardRole;
  currentPath: string;
  onNavigate: (path: string) => void;
  title?: string;
  userName?: string;
  userEmail?: string;
  notificationCount?: number;
  children: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({
  role,
  currentPath,
  onNavigate,
  title,
  userName = 'Operations Manager',
  userEmail = 'manager@swiftcart.ug',
  notificationCount = 3,
  children,
}) => {
  const { theme, toggleTheme } = useDashboardTheme();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isTabletRailCollapsed, setIsTabletRailCollapsed] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = ROLE_MENUS[role] || ROLE_MENUS.seller;

  // Derive current screen title if not provided
  const activeItem = menuItems.find((item) => item.path === currentPath);
  const displayTitle = title || activeItem?.label || 'Overview';

  // Handle ESC key for search overlay & drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSearchOverlayOpen) setIsSearchOverlayOpen(false);
        if (isMobileDrawerOpen) setIsMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOverlayOpen, isMobileDrawerOpen]);

  const roleLabel =
    role === 'super-admin' ? 'Super Admin' : role === 'admin' ? 'Admin Portal' : 'Merchant Portal';

  return (
    <div className="min-h-screen bg-[var(--d-bg)] text-[var(--d-text-primary)] flex">
      {/* 1. MOBILE DRAWER OVERLAY */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsMobileDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. SIDEBAR / DRAWER */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-[var(--d-sidebar-bg)] border-r border-[var(--d-border)] transition-all duration-300
          /* Mobile Drawer: hidden offscreen unless opened */
          ${isMobileDrawerOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'}
          /* Tablet Collapsible Rail */
          ${isTabletRailCollapsed ? 'md:w-20' : 'md:w-64'}
          /* Desktop Fixed Sidebar */
          lg:w-64
        `}
      >
        {/* Drawer Header: Logo + Close Button (Carefully positioned to never overlap logo or menu items) */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-[var(--d-border)] shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            {theme === 'dark' ? (
              <Logo
                variant={isTabletRailCollapsed ? 'icon-white' : 'white'}
                height={isTabletRailCollapsed ? 32 : 28}
              />
            ) : (
              <Logo
                variant={isTabletRailCollapsed ? 'icon' : 'full'}
                height={isTabletRailCollapsed ? 32 : 28}
              />
            )}
          </div>

          {/* Mobile close button: positioned on the right with full 48px touch target */}
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(false)}
            className="md:hidden touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors"
            aria-label="Close navigation drawer"
          >
            <span className="material-symbols-rounded text-[22px]">close</span>
          </button>

          {/* Tablet rail collapse/expand toggle button */}
          <button
            type="button"
            onClick={() => setIsTabletRailCollapsed(!isTabletRailCollapsed)}
            className="hidden md:flex lg:hidden touch-target p-1.5 rounded-lg text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors"
            aria-label={isTabletRailCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <span className="material-symbols-rounded text-[20px]">
              {isTabletRailCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
        </div>

        {/* Role Badge */}
        <div className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#FF8A1F] border-b border-[var(--d-border)]/50 ${isTabletRailCollapsed ? 'md:hidden' : 'block'}`}>
          {roleLabel}
        </div>

        {/* Navigation Menu Items */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1.5" aria-label="Portal Navigation">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;

            return (
              <button
                key={item.path}
                type="button"
                onClick={() => {
                  onNavigate(item.path);
                  setIsMobileDrawerOpen(false);
                }}
                className={`touch-target w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-[14px] font-semibold transition-all relative ${
                  isActive
                    ? 'bg-[var(--d-sidebar-active)] text-[var(--d-sidebar-text-active)] shadow-sm'
                    : 'text-[var(--d-sidebar-text)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)]'
                }`}
                title={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="material-symbols-rounded text-[22px] shrink-0" aria-hidden="true">
                  {item.icon}
                </span>

                <span
                  className={`truncate text-left flex-1 ${
                    isTabletRailCollapsed ? 'md:hidden' : 'inline'
                  }`}
                >
                  {item.label}
                </span>

                {item.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[12px] font-bold bg-[#FF8A1F] text-white shrink-0 ${
                      isTabletRailCollapsed ? 'md:hidden' : 'inline'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Card at Bottom */}
        <div className="p-3 border-t border-[var(--d-border)] shrink-0">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[var(--d-surface-container)]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF8A1F] to-[#DA3700] flex items-center justify-center text-white font-bold text-[14px] shrink-0">
              {userName.charAt(0)}
            </div>
            <div className={`flex flex-col min-w-0 ${isTabletRailCollapsed ? 'md:hidden' : 'block'}`}>
              <span className="text-[14px] font-bold truncate text-[var(--d-text-primary)]">
                {userName}
              </span>
              <span className="text-[12px] text-[var(--d-text-muted)] truncate">
                {userEmail}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300
          /* Offset for sidebar */
          md:pl-64
          ${isTabletRailCollapsed ? 'md:pl-20' : 'md:pl-64'}
          lg:pl-64
        `}
      >
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 h-16 bg-[var(--d-header-bg)] border-b border-[var(--d-border)] px-4 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="md:hidden touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-rounded text-[24px]">menu</span>
            </button>

            {/* Current View Title */}
            <h1 className="text-[18px] lg:text-[20px] font-bold text-[var(--d-text-primary)] tracking-tight truncate">
              {displayTitle}
            </h1>
          </div>

          {/* Top Bar Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOverlayOpen(true)}
              className="touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors flex items-center gap-2"
              aria-label="Open search dialog"
            >
              <span className="material-symbols-rounded text-[22px]">search</span>
              <span className="hidden xl:inline text-[14px] text-[var(--d-text-muted)] pr-2">
                Quick Search...
              </span>
            </button>

            {/* Theme Toggle (ONE sun/moon toggle) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-rounded text-[22px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Notifications Button */}
            <button
              type="button"
              className="touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] transition-colors relative"
              aria-label={`Notifications (${notificationCount} unread)`}
            >
              <span className="material-symbols-rounded text-[22px]">notifications</span>
              {notificationCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ED1C24] ring-2 ring-[var(--d-header-bg)]" />
              )}
            </button>
          </div>
        </header>

        {/* SEARCH OVERLAY (Can ALWAYS be closed) */}
        {isSearchOverlayOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 px-4 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-label="Global Search Overlay"
          >
            {/* Click backdrop to close */}
            <div
              className="absolute inset-0"
              onClick={() => setIsSearchOverlayOpen(false)}
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-2xl bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] shadow-2xl overflow-hidden flex flex-col">
              {/* Search Input Bar */}
              <div className="p-4 border-b border-[var(--d-border)] flex items-center gap-3">
                <span className="material-symbols-rounded text-[24px] text-[#FF8A1F]">
                  search
                </span>
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search orders, products, sellers, riders..."
                  className="flex-1 bg-transparent text-[16px] text-[var(--d-text-primary)] placeholder-[var(--d-text-muted)] focus:outline-none"
                />
                {/* Prominent, ALWAYS closeable button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOverlayOpen(false)}
                  className="touch-target px-3 py-1.5 rounded-lg bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] text-[14px] font-semibold transition-colors flex items-center gap-1"
                  aria-label="Close search overlay"
                >
                  <span className="material-symbols-rounded text-[18px]">close</span>
                  <span>ESC</span>
                </button>
              </div>

              {/* Suggestions / Results */}
              <div className="p-4 max-h-96 overflow-y-auto text-[14px] space-y-2">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--d-text-muted)]">
                  Quick Links
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {menuItems.slice(0, 6).map((item) => (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => {
                        onNavigate(item.path);
                        setIsSearchOverlayOpen(false);
                      }}
                      className="touch-target flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] transition-colors text-left"
                    >
                      <span className="material-symbols-rounded text-[20px] text-[#FF8A1F]">
                        {item.icon}
                      </span>
                      <span className="font-medium truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardShell;

