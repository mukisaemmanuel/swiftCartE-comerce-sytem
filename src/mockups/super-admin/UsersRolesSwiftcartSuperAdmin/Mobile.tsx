// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/users_roles_swiftcart_super_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface UsersRolesSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const UsersRolesSwiftcartSuperAdmin: React.FC<UsersRolesSwiftcartSuperAdminProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      {drawerOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setDrawerOpen(false)} />}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col ml-space-xs"><div className="flex items-center gap-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider leading-none font-bold">Root Gateway</span><span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-[9px] leading-tight"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse mr-1"></span>SYNCED</span></div><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[150px]">SwiftCart SuperAdmin</span></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" title="Toggle theme" type="button"><Icon name="routine" className="text-[20px]" /></button><button className="w-11 h-11 relative flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary-container rounded-full"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm text-on-primary font-bold text-label-sm ring-2 ring-primary-fixed">SA</div></div></div></header>
<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className={`fixed top-0 left-0 bottom-0 w-[310px] max-w-[85vw] bg-surface-container-lowest z-50  transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14)] fixed z-50 select-none ${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`} id="admin-drawer"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="p-space-lg bg-surface-container-low"><div className="flex items-start justify-between"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-inverse-surface text-on-primary flex items-center justify-center font-headline-sm text-headline-sm ring-2 ring-primary-container shadow-md"><Icon name="shield_person" className="text-[22px] text-primary-fixed" /></div><div><h2 className="font-label-lg text-label-lg text-on-surface leading-tight font-bold">Superadmin Controller</h2><p className="font-body-sm text-body-sm text-secondary">Root Platform Governance</p></div></div><button className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-variant" type="button" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="mt-space-md flex items-center justify-between"><span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold tracking-wider shadow-sm"><Icon name="security" className="text-[13px] mr-1" />SUPER ADMIN</span><span className="font-label-sm text-label-sm text-secondary font-semibold">UG-CORE-01</span></div></div><div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md"><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Overview</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => setDrawerOpen(false)}><Icon name="dashboard" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Overview</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold flex items-center gap-1"><Icon name="admin_panel_settings" className="text-[14px]" />Governance</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="users-roles" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_accounts" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Users &amp; Roles</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="platform-settings" href="#" onClick={() => setDrawerOpen(false)}><Icon name="tune" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Platform Settings</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Sellers</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="seller-applications-kyc" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Seller Applications &amp; KYC</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">14</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="sellers-directory" href="#" onClick={() => setDrawerOpen(false)}><Icon name="storefront" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Sellers Directory</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Riders</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="riders-couriers" href="#" onClick={() => setDrawerOpen(false)}><Icon name="two_wheeler" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Riders (Couriers)</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Orders</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="orders" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="shopping_cart_checkout" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">189</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Products</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="product-moderation" href="#" onClick={() => setDrawerOpen(false)}><Icon name="fact_check" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Product Moderation</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Payments</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="escrow-disputes" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Escrow &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">6</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="payout-queue" href="#" onClick={() => setDrawerOpen(false)}><Icon name="payments" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Payout Queue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overpayments-refunds" href="#" onClick={() => setDrawerOpen(false)}><Icon name="currency_exchange" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Overpayments &amp; Refunds</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="commission" href="#" onClick={() => setDrawerOpen(false)}><Icon name="percent" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Commission</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Logistics</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="locked-dispatches" href="#" onClick={() => setDrawerOpen(false)}><Icon name="local_shipping" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Locked Dispatches</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Storefront</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="homepage-ads" href="#" onClick={() => setDrawerOpen(false)}><Icon name="campaign" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Homepage &amp; Ads</span></a></div><div className="space-y-space-xs pb-space-sm"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">System</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="audit-log" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_history" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Audit Log</span></a></div></div><div className="p-space-md bg-surface-container-low flex items-center justify-between"><span className="font-body-sm text-body-sm text-secondary">SwiftCart Uganda</span><button className="text-error font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => setDrawerOpen(false)}><Icon name="logout" className="text-[16px]" />Exit</button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full">
<div className="w-full bg-surface-container-high px-margin py-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs text-secondary">
<Icon name="admin_panel_settings" className="text-[15px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Governance</span>
<Icon name="chevron_right" className="text-[13px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Users &amp; Roles</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-space-xs py-0.5 rounded font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
      LIVE REPLICA
    </span>
</div>
<div className="px-margin pt-space-md pb-space-sm bg-gradient-to-b from-surface-container-high to-surface">
<div className="p-space-sm rounded-xl bg-inverse-surface text-inverse-on-surface flex items-start gap-space-sm shadow-md"><div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0"><Icon name="admin_panel_settings" className="text-[20px]" /></div><div className="flex-1 min-w-0"><div className="flex items-center gap-space-xs flex-wrap"><span className="bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase px-1.5 py-0.5 rounded tracking-wider shadow-sm">SUPER ADMIN</span><span className="text-tertiary-fixed font-label-sm text-label-sm font-semibold tracking-wide">Role Management</span></div><p className="font-body-sm text-body-sm text-secondary-fixed-dim mt-0.5 leading-snug">Super Admin Role Management: Changing staff permissions requires an audit reason and SMS verification code.</p></div></div>
</div>
<div className="px-margin py-space-xs space-y-space-sm">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-space-sm flex items-center pointer-events-none text-secondary">
<Icon name="person_search" className="text-[20px]" />
</div>
<input className="w-full pl-10 pr-10 py-3 bg-surface-container-lowest text-on-surface placeholder:text-secondary rounded-xl text-body-md font-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all" id="user-search-input" placeholder="Search 142k users (Buyers, Sellers, Riders, Hub Agents, Admins)..." type="text" />
<button className="absolute inset-y-0 right-0 pr-space-sm flex items-center text-primary-container" title="Scan QR Identity" type="button">
<Icon name="qr_code_scanner" className="text-[20px]" />
</button>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5">
<button className="filter-chip active shrink-0 px-space-sm py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1 transition-transform active:scale-95" data-filter="all">
<span className="">All</span>
<span className="bg-primary-container/70 text-on-primary px-1.5 py-0.2 rounded-full text-[9px]">142k</span>
</button>
<button className="filter-chip shrink-0 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:bg-surface-container-highest transition-colors" data-filter="admin">
<span className="">Admins</span>
<span className="bg-surface-variant text-on-surface px-1.5 py-0.2 rounded-full text-[9px]">8</span>
</button>
<button className="filter-chip shrink-0 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:bg-surface-container-highest transition-colors" data-filter="hub">
<span className="">Hub Agents</span>
<span className="bg-surface-variant text-on-surface px-1.5 py-0.2 rounded-full text-[9px]">34</span>
</button>
<button className="filter-chip shrink-0 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:bg-surface-container-highest transition-colors" data-filter="seller">
<span className="">Sellers</span>
<span className="bg-surface-variant text-on-surface px-1.5 py-0.2 rounded-full text-[9px]">142</span>
</button>
<button className="filter-chip shrink-0 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:bg-surface-container-highest transition-colors" data-filter="rider">
<span className="">Riders</span>
<span className="bg-surface-variant text-on-surface px-1.5 py-0.2 rounded-full text-[9px]">86</span>
</button>
<button className="filter-chip shrink-0 px-space-sm py-1.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1 hover:brightness-95 transition-colors" data-filter="suspended">
<Icon name="block" className="text-[13px]" />
<span className="">Suspended</span>
<span className="bg-error text-on-error px-1.5 py-0.2 rounded-full text-[9px]">19</span>
</button>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-semibold">Active Directory</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary font-bold">4 Showing</span>
</div>
<button className="h-10 px-space-md rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-md hover:brightness-105 active:scale-95 flex items-center gap-1 transition-all" type="button">
<Icon name="person_add" className="text-[18px]" />
<span className="">+ Invite Staff / Hub Agent</span>
</button>
</div>
</div>
<div className="px-margin py-space-xs">
<div className="p-space-sm rounded-xl bg-secondary-container text-on-secondary-fixed flex items-start gap-space-sm shadow-sm">
<Icon name="verified_user" className="text-[22px] text-primary shrink-0 mt-0.5" />
<div className="flex-1">
<p className="font-label-sm text-label-sm font-extrabold uppercase tracking-wide text-primary">
          SECURITY ESCALATION PROTOCOL
        </p>
<p className="font-body-sm text-body-sm text-on-secondary-fixed-variant leading-tight mt-0.5">Elevation to Admin requires a typed justification and 6-digit confirmation code sent to your phone.</p>
</div>
</div>
</div>
<div className="px-margin py-space-sm space-y-space-md">
<div className="user-card rounded-2xl bg-surface-container-lowest p-space-md shadow-md space-y-space-sm" data-category="admin">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative shrink-0"><div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm shadow-inner">PN</div><span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-tertiary-container rounded-full ring-2 ring-surface-container-lowest"></span></div>
<div className="min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Patricia Namubiru</h3>
<span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-primary/10 text-primary font-label-sm text-[10px] font-extrabold tracking-wider">
                ADMIN
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Operations Lead • patricia.n@swiftcart.ug</p>
</div>
</div>
<span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          Active • Online Now
        </span>
</div>
<div className="grid grid-cols-1 gap-1.5 p-space-sm rounded-xl bg-surface-container-low font-body-sm text-body-sm text-secondary"><div className="flex items-center justify-between"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold"><Icon name="verified" className="text-[14px]" />Active • Operations Lead</span><span className="flex items-center gap-1 text-tertiary font-semibold"><Icon name="vpn_key" className="text-[14px]" />2FA Active</span><span className="flex items-center gap-1 text-secondary"><Icon name="schedule" className="text-[15px]" />Last login: 3 mins ago</span></div></div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-10 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1" type="button">
<Icon name="security_update_warning" className="text-[18px] text-primary" />
<span className="">Change Role</span>
</button>
<button className="h-10 px-3 rounded-xl bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1" title="Force Logout" type="button">
<Icon name="logout" className="text-[18px]" />
<span className="hidden sm:inline">Force Logout</span>
</button>
<button className="h-10 px-3 rounded-xl bg-error-container/60 text-error hover:bg-error-container font-label-md text-label-md font-semibold flex items-center justify-center" title="Suspend Account" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</div>
<div className="user-card rounded-2xl bg-surface-container-lowest p-space-md shadow-md space-y-space-sm" data-category="seller">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative shrink-0"><div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold text-headline-sm shadow-inner">RS</div></div>
<div className="min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Ronald Ssenyonga</h3>
<span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                SELLER
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Kikuubo Gadget Zone • UGX 84.2M GMV</p>
</div>
</div>
<span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
          Active
        </span>
</div>
<div className="flex items-center gap-space-xs flex-wrap"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold"><Icon name="verified" className="text-[14px]" />Verified Seller</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"><Icon name="phone_iphone" className="text-[14px] text-primary" />MoMo *165# Active</span><span className="font-body-sm text-body-sm text-secondary ml-auto">Last login: 14 mins ago</span></div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-10 rounded-xl bg-inverse-surface text-inverse-on-surface font-label-md text-label-md font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1" type="button">
<Icon name="storefront" className="text-[18px]" />
<span className="">Inspect Store</span>
</button>
<button className="h-10 px-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1" type="button">
<Icon name="manage_accounts" className="text-[18px]" />
<span className="">Change Role</span>
</button>
<button className="h-10 px-3 rounded-xl bg-error-container/50 text-error font-label-md text-label-md font-semibold flex items-center justify-center" title="Suspend Merchant" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</div>
<div className="user-card rounded-2xl bg-surface-container-lowest p-space-md shadow-md space-y-space-sm" data-category="rider">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative shrink-0"><div className="w-12 h-12 rounded-xl bg-surface-variant text-on-surface flex items-center justify-center font-bold text-headline-sm shadow-inner">KB</div><span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-tertiary rounded-full ring-2 ring-surface-container-lowest"></span></div>
<div className="min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Kizito Brian</h3>
<span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[10px] font-bold">
                RIDER
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Boda Express • Plate UEX 419P</p>
</div>
</div>
<span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
          Trip in Progress
        </span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm"><div className="flex items-center gap-1 text-on-surface"><Icon name="two_wheeler" className="text-[17px] text-tertiary" /><span className="font-semibold">Active Boda Rider</span></div><div className="flex items-center gap-1 text-secondary"><Icon name="speed" className="text-[16px] text-primary-container" /><span className="">31 km/h • Jinja Rd</span></div></div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-10 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1" type="button">
<Icon name="share_location" className="text-[18px] text-tertiary" />
<span className="">View Telematics</span>
</button>
<button className="h-10 px-4 rounded-xl bg-error-container/60 text-error hover:bg-error-container font-label-md text-label-md font-bold flex items-center justify-center gap-1" type="button">
<Icon name="pause_circle" className="text-[18px]" />
<span className="">Suspend</span>
</button>
</div>
</div>
<div className="user-card rounded-2xl bg-surface-container-lowest p-space-md shadow-md space-y-space-sm border-l-4 border-error" data-category="suspended hub">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center font-bold text-headline-sm">
              MK
            </div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Moses Kasirye</h3>
<span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] font-bold">
                HUB AGENT
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Central William St Station #4</p>
</div>
</div>
<span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold shadow-sm">
          Policy Breach
        </span>
</div>
<div className="p-space-sm rounded-xl bg-error-container/40 text-on-error-container text-body-sm font-body-sm flex items-start gap-space-xs"><Icon name="warning" className="text-[18px] text-error shrink-0" /><div className=""><span className="font-bold">Suspension Trigger:</span> Customer reported missing package items on Order #SC-99824. Account temporarily paused pending review.</div></div>
<div className="pt-1">
<button className="w-full h-11 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-md" type="button">
<Icon name="published_with_changes" className="text-[18px]" />
<span className="">Reinstate User (Confirm with reason)</span>
</button>
</div>
</div>
</div>
<div className="px-margin pt-space-lg pb-space-xl">
<div className="rounded-2xl p-space-lg bg-surface-container-low shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm text-error">
<div className="w-9 h-9 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="emergency_home" className="text-[22px]" />
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-error font-extrabold leading-none">Danger Zone</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">High-impact SuperAdmin irreversible operational controls</p>
</div>
</div>

</div>
<div className="space-y-space-sm pt-space-xs"><button className="w-full min-h-[48px] p-space-sm rounded-xl bg-error text-on-error font-label-md text-label-md font-bold flex items-center justify-between shadow-md hover:brightness-110 active:scale-98 transition-all" type="button"><div className="flex items-center gap-space-xs text-left"><Icon name="power_settings_new" className="text-[20px]" /><span className="">Emergency Sign Out All Sessions</span></div><span className="text-label-sm opacity-80 uppercase tracking-wider">Force Logout</span></button><button className="w-full min-h-[48px] p-space-sm rounded-xl bg-surface-container-highest text-error font-label-md text-label-md font-bold flex items-center justify-between hover:bg-error-container transition-all" type="button"><div className="flex items-center gap-space-xs text-left"><Icon name="delete_sweep" className="text-[20px]" /><span className="">Deactivate Inactive Test Accounts</span></div></button></div>
</div>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/70 backdrop-blur-sm hidden" id="escalation-modal">
<div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-space-lg shadow-xl space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
<Icon name="vpn_key" className="text-[24px]" />
</div>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container" type="button" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div>
<span className="font-label-sm text-label-sm text-primary font-extrabold uppercase tracking-wider">Step 1 of 2: Hardware Confirmation</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Role Escalation Protocol</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1" id="escalation-user-desc">
          Escalating target account privileges to privileged administrative tiers requires FIDO2/WebAuthn approval.
        </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low space-y-space-xs text-body-sm font-body-sm">
<label className="font-label-sm text-label-sm text-secondary uppercase font-bold block">Assigned Role Tier</label>
<select className="w-full p-2.5 rounded-lg bg-surface-container-lowest text-on-surface outline-none font-label-md text-label-md">
<option>Super Administrator (Tier 0 Full Root)</option>
<option selected={true}>Operations Lead Admin (Tier 1)</option>
<option>Finance &amp; Escrow Admin (Tier 1)</option>
<option>Logistics Regional Dispatcher (Tier 2)</option>
</select>
</div>
<div className="p-space-sm rounded-xl bg-primary-fixed/30 text-on-primary-fixed-variant text-body-sm font-body-sm flex items-center gap-2">
<Icon name="phonelink_lock" className="text-[18px] text-primary shrink-0 animate-pulse" />
<span className="">Touch your YubiKey hardware token or enter master OTP.</span>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-11 rounded-xl bg-surface-container text-secondary font-label-md text-label-md font-bold" type="button">Cancel</button>
<button className="flex-1 h-11 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:brightness-110 active:scale-95" type="button">Verify &amp; Mutate</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/70 backdrop-blur-sm hidden" id="invite-modal">
<div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-space-lg shadow-xl space-y-space-md">
<div className="flex items-start justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Invite Staff or Agent</h3>
<p className="font-body-sm text-body-sm text-secondary">A cryptographically signed onboarding link will be dispatched.</p>
</div>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container" type="button" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="space-y-space-sm">
<div>
<label className="font-label-sm text-label-sm text-secondary uppercase font-bold block mb-1">Official Email Address</label>
<input className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none" placeholder="agent@swiftcart.ug" type="email" />
</div>
<div>
<label className="font-label-sm text-label-sm text-secondary uppercase font-bold block mb-1">Platform Role</label>
<select className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md outline-none">
<option>Hub Station Agent (Parcel Reception)</option>
<option>Fleet Logistics Controller</option>
<option>KYC Compliance Reviewer</option>
<option>Customer Support Specialist</option>
</select>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 h-11 rounded-xl bg-surface-container text-secondary font-label-md text-label-md font-bold" type="button">Cancel</button>
<button className="flex-1 h-11 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-md hover:brightness-105 active:scale-95" type="button">Send Invite</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/70 backdrop-blur-sm hidden" id="reinstate-modal">
<div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-space-lg shadow-xl space-y-space-md">
<div className="flex items-center gap-space-xs text-tertiary">
<Icon name="verified" className="text-[24px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Confirm Reinstatement</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary" id="reinstate-desc">
        Provide audit justification to reactivate this Hub Agent and restore William St locker access.
      </p>
<textarea className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none resize-none" id="reinstate-reason" placeholder="Enter NIRA verified clarification and supervisor sign-off notes..." rows={3}></textarea>
<div className="flex items-center gap-space-xs">
<button className="flex-1 h-11 rounded-xl bg-surface-container text-secondary font-label-md text-label-md font-bold" type="button">Dismiss</button>
<button className="flex-1 h-11 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-bold shadow-md hover:brightness-105" type="button">Reinstate Now</button>
</div>
</div>
</div>
<div className="fixed bottom-20 left-4 right-4 z-50 p-space-sm rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center gap-space-sm transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="super-toast">
<Icon name="task_alt" className="text-[20px] text-primary-fixed" />
<span className="font-body-sm text-body-sm flex-1" id="toast-message">Action executed successfully.</span>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="users-roles" href="#"><Icon name="admin_panel_settings" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Governance</span></a></div></nav>
    </div>
  );
};

export default UsersRolesSwiftcartSuperAdmin;
