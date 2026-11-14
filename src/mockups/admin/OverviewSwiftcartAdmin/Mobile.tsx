// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/overview_swiftcart_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartAdmin: React.FC<OverviewSwiftcartAdminProps> = (props) => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col ml-space-xs"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider leading-none">Uganda Staff</span><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[130px]">SwiftCart Admin</span></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><button className="w-11 h-11 relative flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary-container rounded-full"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className={`fixed top-0 left-0 bottom-0 w-[310px] max-w-[85vw] bg-surface-container-lowest z-50  transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14)] fixed z-50 select-none ${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`} id="admin-drawer"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="p-space-lg bg-surface-container-low"><div className="flex items-start justify-between"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">PN</div><div><h2 className="font-label-lg text-label-lg text-on-surface leading-tight">Patricia Namubiru</h2><p className="font-body-sm text-body-sm text-secondary">Operations Lead</p></div></div><button className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-variant" type="button" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="mt-space-md flex items-center justify-between"><span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>Admin (Read/Decide Only)</span><span className="font-label-sm text-label-sm text-secondary">KLA HQ</span></div></div><div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md"><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Overview</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => setDrawerOpen(false)}><Icon name="dashboard" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Overview</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Sellers</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="seller-applications-kyc" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Seller Applications &amp; KYC</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">14</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="sellers-directory" href="#" onClick={() => setDrawerOpen(false)}><Icon name="storefront" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Sellers Directory</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Riders</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="riders-couriers" href="#" onClick={() => setDrawerOpen(false)}><Icon name="two_wheeler" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Riders (Couriers)</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Orders</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="orders" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="shopping_cart_checkout" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">189</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Products</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="product-moderation" href="#" onClick={() => setDrawerOpen(false)}><Icon name="fact_check" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Product Moderation</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Payments</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="escrow-disputes" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Escrow &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">6</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="payout-queue" href="#" onClick={() => setDrawerOpen(false)}><Icon name="payments" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Payout Queue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overpayments-refunds" href="#" onClick={() => setDrawerOpen(false)}><Icon name="currency_exchange" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Overpayments &amp; Refunds</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="commission" href="#" onClick={() => setDrawerOpen(false)}><Icon name="percent" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Commission</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Logistics</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="locked-dispatches" href="#" onClick={() => setDrawerOpen(false)}><Icon name="local_shipping" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Locked Dispatches</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Storefront</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="homepage-ads" href="#" onClick={() => setDrawerOpen(false)}><Icon name="campaign" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Homepage &amp; Ads</span></a></div><div className="space-y-space-xs pb-space-sm"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">System</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="audit-log" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_history" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Audit Log</span></a></div></div><div className="p-space-md bg-surface-container-low flex items-center justify-between"><span className="font-body-sm text-body-sm text-secondary">v2.4.1 (UG-Cluster)</span><button className="text-error font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => setDrawerOpen(false)}><Icon name="logout" className="text-[16px]" />Exit</button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="px-margin pt-space-md pb-space-xs flex items-center justify-between"><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">Overview</h1><span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Live MTN/Airtel</span></div><div className="flex-1 w-full px-margin"><div className="flex flex-col w-full pb-6 space-y-space-md">

<div className="w-full bg-surface-container-high rounded-xl p-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="relative flex items-center justify-center w-2.5 h-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface truncate font-bold">Kampala Hub (EAT)</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm text-[9px] uppercase tracking-wider font-bold">All Operational</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Sync 99.8% • MTN &amp; Airtel Gateways active</span>
</div>
</div>
<div className="text-right shrink-0 pl-space-xs">
<span className="font-label-md text-label-md text-on-surface tabular-nums font-bold" id="live-time-display">14:42:08</span>
<span className="block font-label-sm text-label-sm text-secondary">EAT UTC+3</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs px-0.5">
<div className="flex items-center gap-1.5">
<Icon name="monitoring" className="text-[18px] text-primary" />
<h2 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">Telemetry &amp; Velocity</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Swipe 6 cards →</span>
</div>

<div className="flex gap-space-sm overflow-x-auto pb-1 -mx-margin px-margin snap-x snap-mandatory scroll-smooth">

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="payments" className="text-[18px]" />
</div>
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm text-[10px] font-bold">
<Icon name="trending_up" className="text-[11px]" />+14.2%
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">GMV Today</span>
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight block">UGX 42,850,000</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">vs UGX 37.5M yest.</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-primary-container h-full w-[84%] rounded-full"></div>
</div>
</div>

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
<Icon name="local_shipping" className="text-[18px]" />
</div>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm text-[10px]">
          Live
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Orders Today</span>
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight block">318 Orders</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">42 active dispatch</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-primary h-full w-[65%] rounded-full"></div>
</div>
</div>

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="badge" className="text-[18px]" />
</div>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-secondary-container font-label-sm text-label-sm text-[10px] font-bold">
          Queue
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Pending KYC</span>
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight block">7 Sellers</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">Awaiting inspection</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-secondary h-full w-[45%] rounded-full"></div>
</div>
</div>

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
<Icon name="gavel" className="text-[18px]" />
</div>
<span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm text-[10px] font-bold animate-pulse">
          &lt; 6h Left
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Open Disputes</span>
<span className="font-headline-sm text-headline-sm text-error tracking-tight block">4 Active</span>
<span className="font-body-sm text-body-sm text-error mt-0.5 block truncate">1 urgent escalation</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-error h-full w-[90%] rounded-full"></div>
</div>
</div>

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="account_balance_wallet" className="text-[18px]" />
</div>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm text-[10px]">
          12 Batches
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Payouts Waiting</span>
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight block">UGX 18,420,000</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">Ready to sign</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-tertiary-container h-full w-[70%] rounded-full"></div>
</div>
</div>

<div className="snap-start shrink-0 w-[172px] bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<Icon name="lock_reset" className="text-[18px]" />
</div>
<span className="px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm text-[10px] font-bold">
          Attention
        </span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Dispatches</span>
<span className="font-headline-sm text-headline-sm text-primary tracking-tight block">3 Locked</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">OTP / Route delay</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-primary h-full w-[80%] rounded-full"></div>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="priority_high" className="text-[20px] text-error" />
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Action Needed (Triage)</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">5 Urgent</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Ordered by resolution priority. Tap item to view context &amp; decide.</p>
</div>

<div className="space-y-space-xs" id="triage-container">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="gavel" className="text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold uppercase tracking-wider text-[9px]">Critical • 6h Freeze</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">#RT-309</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1 leading-snug">Escrow Dispute: Kampala Smart Hub vs. Buyer</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-1">Item reported damaged screen on UGX 1,450,000 tablet delivery.</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-md text-label-md text-error font-bold">4h 18m left</span>
<Icon name="expand_more" className="text-secondary text-[20px] mt-1 transition-transform chevron-icon" />
</div>
</div>

<div className="hidden triage-details mt-space-sm pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex items-center justify-between text-body-sm text-on-surface">
<span className="text-secondary">Buyer claim: Package dropped</span>
<span className="font-bold">UGX 1,450,000</span>
</div>
<div className="flex items-center gap-2 mt-space-sm">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold text-center active:scale-95 shadow-sm" type="button">Review &amp; Arbitrate</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md text-center active:scale-95" type="button">Freeze 24h</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<Icon name="alt_route" className="text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[9px]">Logistics Lock</span>
<span className="font-label-sm text-label-sm text-secondary">3 Handover alerts</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1 leading-snug">Nakawa Corridor Delivery Paralyzed</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-1">Repeated OTP failures (3x) + Rider deviation off Jinja Rd sector.</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-md text-label-md text-primary font-bold">Action req.</span>
<Icon name="expand_more" className="text-secondary text-[20px] mt-1 transition-transform chevron-icon" />
</div>
</div>

<div className="hidden triage-details mt-space-sm pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="space-y-1 text-body-sm text-secondary">
<p><span className="font-bold text-on-surface">Rider Kato Ronald:</span> Stalled at Spear Motors for 43m.</p>
<p><span className="font-bold text-on-surface">Merchant:</span> ElectroPoint Uganda.</p>
</div>
<div className="flex items-center gap-2 mt-space-sm">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold text-center active:scale-95 shadow-sm" type="button">Send Dispatch Override</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md text-center active:scale-95" type="button">Call Courier</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider text-[9px]">High Value KYC</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Tier 2 Merchant</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1 leading-snug">Ssenyonga Electronics Wholesale</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-1">UGX 50,000,000 declared initial catalog stock • URA TIN verified.</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-md text-label-md text-tertiary font-bold">Ready</span>
<Icon name="expand_more" className="text-secondary text-[20px] mt-1 transition-transform chevron-icon" />
</div>
</div>

<div className="hidden triage-details mt-space-sm pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="text-body-sm text-secondary">
<p>National ID / Trading license attached from Kikuubo Arcade, Kampala.</p>
</div>
<div className="flex items-center gap-2 mt-space-sm">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold text-center active:scale-95 shadow-sm" type="button">Review Documents</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md text-center active:scale-95" type="button">Flag</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<Icon name="send_money" className="text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[9px]">MTN MoMo Batch</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">Batch #UG-882</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1 leading-snug">Payout Batch: UGX 12,800,000</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-1">8 verified merchants • Escrow release conditions satisfied.</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-md text-label-md text-on-surface font-bold">8 Stores</span>
<Icon name="expand_more" className="text-secondary text-[20px] mt-1 transition-transform chevron-icon" />
</div>
</div>

<div className="hidden triage-details mt-space-sm pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex items-center justify-between text-body-sm text-secondary">
<span>MTN Disbursal API ping: OK (12ms)</span>
<span className="text-tertiary font-bold">Passed Fraud Check</span>
</div>
<div className="flex items-center gap-2 mt-space-sm">
<button className="flex-1 py-2 px-3 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md font-bold text-center active:scale-95 shadow-sm" type="button">Authorize Disbursal</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md text-center active:scale-95" type="button">Inspect</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm active:scale-[0.99] transition-transform cursor-pointer relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
<Icon name="inventory" className="text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider text-[9px]">Moderation</span>
<span className="font-label-sm text-label-sm text-secondary">Health • Tech</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1 leading-snug">14 Catalog Moderation Submissions</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-1">Requires NDA approval check for medical devices &amp; imported radios.</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-md text-label-md text-secondary font-bold">14 Items</span>
<Icon name="expand_more" className="text-secondary text-[20px] mt-1 transition-transform chevron-icon" />
</div>
</div>

<div className="hidden triage-details mt-space-sm pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="text-body-sm text-secondary">
<p>8 items from Ntinda Mart, 6 items from Apex Pharmaceuticals KLA.</p>
</div>
<div className="flex items-center gap-2 mt-space-sm">
<button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold text-center active:scale-95 shadow-sm" type="button">Moderate Queue</button>
<button className="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md text-center active:scale-95" type="button">Auto-Verify Tech</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-xs pt-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="history_toggle_off" className="text-[20px] text-tertiary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Recent System Activity</h2>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5" type="button">
<Icon name="refresh" className="text-[14px]" />Live Feed
      </button>
</div>
<p className="font-body-sm text-body-sm text-secondary">Tamper-evident audit log streams directly from cluster workers.</p>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md" id="audit-feed">

<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Patricia Namubiru (Operations)</p>
<span className="font-label-sm text-label-sm text-secondary shrink-0 font-mono">2m ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Approved batch payout to Airtel Money for <span className="font-bold text-on-surface">UGX 4,200,000</span> (Ggaba Market stores).</p>
</div>
</div>

<div className="h-px w-full bg-surface-container-high"></div>

<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="warning" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">SafeBoda Courier #B-201</p>
<span className="font-label-sm text-label-sm text-secondary shrink-0 font-mono">11m ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Reported broken security tamper seal on Parcel <span className="font-bold text-on-surface">#SC-8921</span> at Lugogo Mall checkpoint.</p>
</div>
</div>

<div className="h-px w-full bg-surface-container-high"></div>

<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="upload_file" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Mukono Depot Central</p>
<span className="font-label-sm text-label-sm text-secondary shrink-0 font-mono">24m ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Submitted merchant KYC renewal documents for 3 agro-chemical distributors.</p>
</div>
</div>

<div className="h-px w-full bg-surface-container-high"></div>

<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<Icon name="fingerprint" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Fraud Sentinel Agent #4</p>
<span className="font-label-sm text-label-sm text-secondary shrink-0 font-mono">48m ago</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Auto-flagged duplicate bank account registration between two seller storefronts in Rubaga.</p>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface font-bold">Duty Officer: Patricia N.</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1" type="button">
<Icon name="picture_as_pdf" className="text-[16px]" />Export EOD
      </button>
<button className="px-2.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-all flex items-center gap-1" type="button">
<Icon name="flash_on" className="text-[16px]" />Emergency Stop
      </button>
</div>
</div>
</div>
</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 py-1 transition-colors text-primary-container font-bold" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="payout-queue" href="#"><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Payouts</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartAdmin;
