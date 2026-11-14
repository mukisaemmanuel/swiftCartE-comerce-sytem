// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/super-admin/overview_swiftcart_super_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSuperAdmin: React.FC<OverviewSwiftcartSuperAdminProps> = (props) => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-white.png" /><div className="flex flex-col ml-space-xs"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[200px]">SwiftCart Super Admin</span><span className="font-label-sm text-label-sm text-secondary font-semibold">Kampala, Uganda</span></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" title="Toggle theme" type="button"><Icon name="routine" className="text-[20px]" /></button><button className="w-11 h-11 relative flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary-container rounded-full"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm text-on-primary font-bold text-label-sm ring-2 ring-primary-fixed">SA</div></div></div></header>
<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className={`fixed top-0 left-0 bottom-0 w-[310px] max-w-[85vw] bg-surface-container-lowest z-50  transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14)] fixed z-50 select-none ${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`} id="admin-drawer"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="p-space-lg bg-surface-container-low"><div className="flex items-start justify-between"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-inverse-surface text-on-primary flex items-center justify-center font-headline-sm text-headline-sm ring-2 ring-primary-container shadow-md"><Icon name="shield_person" className="text-[22px] text-primary-fixed" /></div><div><h2 className="font-label-lg text-label-lg text-on-surface leading-tight font-bold">Superadmin Controller</h2><p className="font-body-sm text-body-sm text-secondary">Root Platform Governance</p></div></div><button className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-variant" type="button" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="mt-space-md flex items-center justify-between"><span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold tracking-wider shadow-sm"><Icon name="security" className="text-[13px] mr-1" />SUPER ADMIN</span><span className="font-label-sm text-label-sm text-secondary font-semibold">UG-CORE-01</span></div></div><div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md"><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Overview</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => setDrawerOpen(false)}><Icon name="dashboard" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Overview</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold flex items-center gap-1"><Icon name="admin_panel_settings" className="text-[14px]" />Governance</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="users-roles" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_accounts" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Users &amp; Roles</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="platform-settings" href="#" onClick={() => setDrawerOpen(false)}><Icon name="tune" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Platform Settings</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Sellers</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="seller-applications-kyc" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Seller Applications &amp; KYC</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">14</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="sellers-directory" href="#" onClick={() => setDrawerOpen(false)}><Icon name="storefront" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Sellers Directory</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Riders</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="riders-couriers" href="#" onClick={() => setDrawerOpen(false)}><Icon name="two_wheeler" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Riders (Couriers)</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Orders</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="orders" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="shopping_cart_checkout" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">189</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Products</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="product-moderation" href="#" onClick={() => setDrawerOpen(false)}><Icon name="fact_check" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Product Moderation</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Payments</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="escrow-disputes" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Escrow &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">6</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="payout-queue" href="#" onClick={() => setDrawerOpen(false)}><Icon name="payments" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Payout Queue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overpayments-refunds" href="#" onClick={() => setDrawerOpen(false)}><Icon name="currency_exchange" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Overpayments &amp; Refunds</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="commission" href="#" onClick={() => setDrawerOpen(false)}><Icon name="percent" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Commission</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Logistics</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="locked-dispatches" href="#" onClick={() => setDrawerOpen(false)}><Icon name="local_shipping" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Locked Dispatches</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Storefront</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="homepage-ads" href="#" onClick={() => setDrawerOpen(false)}><Icon name="campaign" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Homepage &amp; Ads</span></a></div><div className="space-y-space-xs pb-space-sm"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">System</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="audit-log" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_history" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Audit Log</span></a></div></div><div className="p-space-md bg-surface-container-low flex items-center justify-between"><span className="font-body-sm text-body-sm text-secondary">v3.0.0 (SuperCluster)</span><button className="text-error font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => setDrawerOpen(false)}><Icon name="logout" className="text-[16px]" />Exit</button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full">
<div className="flex flex-col gap-space-md px-margin pb-space-xl">

<section className="bg-inverse-surface rounded-xl p-space-md shadow-md text-inverse-on-surface"><div className="flex items-center justify-between gap-space-xs mb-space-sm"><div className="flex items-center gap-space-xs"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm"><Icon name="dns" className="text-[13px]" />Server: kampala-prod-01</span><span className="px-2 py-0.5 rounded-full bg-surface-container-highest/20 text-inverse-on-surface font-label-sm text-label-sm tracking-tight">Cloud Platform • Healthy</span></div><div className="flex items-center gap-1.5"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span></span><span className="font-label-sm text-label-sm text-tertiary-fixed font-bold tracking-wider uppercase">Online</span></div></div><div className="flex items-end justify-between pt-space-xs"><div className="flex flex-col"><span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Kampala Central (EAT)</span><span className="font-headline-sm text-headline-sm text-inverse-on-surface font-extrabold tracking-tight" id="live-eat-clock">09:04:06 EAT</span></div><div className="flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-highest/15"><Icon name="check_circle" className="text-tertiary-fixed-dim text-[16px]" /><span className="font-label-sm text-label-sm text-surface-container-highest">All Systems Operational</span></div></div></section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="vital_signs" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">System Infrastructure</h2>
<p className="font-body-sm text-body-sm text-secondary">Real-Time Core Telemetry</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          Operational
        </span>
</div>

<div className="grid grid-cols-2 gap-space-sm">

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">MTN &amp; Airtel MoMo</span>
<Icon name="account_balance_wallet" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">99.98%</span>
<span className="font-label-sm text-label-sm text-tertiary">Live</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">0.3s avg latency</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">SMS &amp; OTP Rails</span>
<Icon name="sms" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">99.4%</span>
<span className="font-label-sm text-label-sm text-secondary">Delivered</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">1.8s OTP latency</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">Errors (24h)</span>
<Icon name="bug_report" className="text-primary text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">14 Handled</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-semibold truncate">0 Fatal Unhandled</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider truncate">Pipeline Queues</span>
<Icon name="pending_actions" className="text-primary-container text-[16px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-label-lg text-label-lg font-extrabold text-primary-container">26 Total</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">12 P • 7 K • 3 L • 4 D</span>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Platform Velocity</h3>
<span className="font-label-sm text-label-sm text-primary font-bold">24H Live View</span>
</div>

<div className="flex gap-space-sm overflow-x-auto pb-1 -mx-margin px-margin no-scrollbar">

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Gross Merchandise Value</span>
<span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<Icon name="payments" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">42,850,000</span>
</div>
<div className="flex items-center gap-1">
<Icon name="trending_up" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold">+14.2%</span>
<span className="font-body-sm text-body-sm text-secondary">vs yesterday</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Net Take-Rate Rev</span>
<span className="w-7 h-7 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="percent" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">3,428,000</span>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex px-1.5 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">8.2%</span>
<span className="font-body-sm text-body-sm text-secondary">blended commission</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Escrow Liquidity</span>
<span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center">
<Icon name="lock" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-label-sm text-label-sm text-secondary block">Stanbic Custody</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">384.5M</span>
</div>
<div className="flex items-center gap-1 text-secondary">
<Icon name="account_balance" className="text-[14px]" />
<span className="font-body-sm text-body-sm">Fully Backed &amp; Ringfenced</span>
</div>
</div>

<div className="min-w-[240px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Orders &amp; Courier Fleet</span>
<span className="w-7 h-7 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center">
<Icon name="two_wheeler" className="text-[16px]" />
</span>
</div>
<div className="my-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">318 Orders</span>
<span className="font-body-sm text-body-sm text-primary block font-semibold">42 in dispatch right now</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
<span className="">54 Bodas Online</span>
<span className="">4 Hubs Active</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Urgent Superadmin Triage</h3>
<span className="w-5 h-5 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-sm text-label-sm font-bold">4</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Sort: Urgency</span>
</div>
<div className="flex flex-col gap-space-sm"><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-extrabold uppercase">Customer Dispute</span><span className="font-label-sm text-label-sm text-secondary">#RT-309</span></div><span className="inline-flex items-center text-error font-label-sm text-label-sm font-bold"><Icon name="timer" className="text-[14px] mr-0.5" />4h 18m left</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">Sony ANC WH-1000XM5</p><p className="font-body-sm text-body-sm text-secondary">Disputed Claim: Counterfeit packaging • UGX 280,000</p></div><button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95" type="button">Review Dispute</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-secondary-fixed-variant font-label-sm text-label-sm font-extrabold uppercase">Dispatch Stalled</span><span className="font-label-sm text-label-sm text-secondary">Nakawa Corridor</span></div><span className="font-label-sm text-label-sm text-primary font-bold">Delivery Issue</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">3 Handover Deadlocks</p><p className="font-body-sm text-body-sm text-secondary">Customer inaccessible • Courier idle &gt; 25 mins</p></div><button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold active:scale-95" type="button">Override</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-on-tertiary-container font-label-sm text-label-sm font-extrabold uppercase">Payout Queue</span><span className="font-label-sm text-label-sm text-secondary">12 Merchants</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">Sign-Off Req.</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">UGX 18,420,000 Payouts</p><p className="font-body-sm text-body-sm text-secondary">Automated fraud checks passed • Ready for payout</p></div><button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95" type="button">Approve Batch</button></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs active:scale-[0.99] transition-transform cursor-pointer"><div className="flex items-start justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-extrabold uppercase">Seller Verification</span><span className="font-label-sm text-label-sm text-secondary">Wholesale</span></div><span className="font-label-sm text-label-sm text-secondary font-bold">Verified Merchant</span></div><div className="flex items-center justify-between mt-1"><div><p className="font-label-lg text-label-lg text-on-surface font-bold">Ssenyonga Electronics</p><p className="font-body-sm text-body-sm text-secondary">UGX 50,000,000 inventory cap request • TIN: 1004829104</p></div><button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold active:scale-95" type="button">Review</button></div></div></div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><Icon name="manage_history" className="text-primary text-[20px]" /><h3 className="font-headline-sm text-headline-sm text-on-surface">Activity Log</h3></div><span className="font-label-sm text-label-sm text-secondary">Recent Actions</span></div><div className="flex flex-col gap-space-sm mt-1"><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="security" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">SuperAdmin updated commission fee</span><span className="font-label-sm text-label-sm text-secondary shrink-0">12m ago</span></div><span className="font-body-sm text-body-sm text-secondary">Consumer Electronics category rate changed by 0.5%</span></div></div><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="person_remove" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Seller Account Suspended: Kisekka Spares Hub</span><span className="font-label-sm text-label-sm text-secondary shrink-0">43m ago</span></div><span className="font-body-sm text-body-sm text-secondary">Flagged for multiple duplicate IMEI counterfeit listings</span></div></div><div className="flex items-start gap-space-sm"><div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-secondary mt-0.5"><Icon name="payments" className="text-[15px]" /></div><div className="flex flex-col flex-1 min-w-0"><div className="flex items-baseline justify-between gap-1"><span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Daily Payout Batch Approved</span><span className="font-label-sm text-label-sm text-secondary shrink-0">1h 14m ago</span></div><span className="font-body-sm text-body-sm text-secondary">UGX 142,000,000 settlements matched and cleared</span></div></div></div></section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md ring-1 ring-error/20"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shadow-sm"><Icon name="warning" className="text-[20px]" /></div><div><h3 className="font-headline-sm text-headline-sm text-error font-extrabold tracking-tight">Danger Zone</h3><p className="font-body-sm text-body-sm text-secondary">Sensitive platform administration actions</p></div></div><div className="flex flex-col gap-space-md"><div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="construction" className="text-primary text-[20px]" /><span className="font-label-lg text-label-lg font-bold text-on-surface">Storewide Maintenance Mode</span></div><button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-transform" type="button">Enable Maintenance Mode</button></div><p className="font-body-sm text-body-sm text-secondary">Pauses buyer checkout while keeping admin and seller dashboards active.</p></div><div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center gap-2"><Icon name="person_off" className="text-error text-[20px]" /><span className="font-label-lg text-label-lg font-bold text-on-surface">Suspend a User</span></div><p className="font-body-sm text-body-sm text-secondary">Requires a verified reason and approval code sent to Super Admin.</p><div className="flex items-center gap-2 mt-1"><input className="flex-1 px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm" placeholder="Enter User ID or Email address" type="text" /><button className="px-3 py-2 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-bold shadow-sm active:scale-95 shrink-0" type="button">Suspend User</button></div></div></div><div className="pt-2 text-center"><span className="font-label-sm text-label-sm text-secondary font-semibold">SwiftCart Uganda</span></div></section>
</div>


</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="users-roles" href="#"><Icon name="admin_panel_settings" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Governance</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartSuperAdmin;
