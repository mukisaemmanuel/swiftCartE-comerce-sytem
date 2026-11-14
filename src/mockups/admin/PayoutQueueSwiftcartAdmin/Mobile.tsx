// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/payout_queue_swiftcart_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface PayoutQueueSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PayoutQueueSwiftcartAdmin: React.FC<PayoutQueueSwiftcartAdminProps> = (props) => {
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
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="px-margin pt-space-md pb-space-xs flex items-center justify-between"><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">Payout Queue</h1><span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Live MTN/Airtel</span></div><div className="flex-1 w-full px-margin"><div className="flex flex-col w-full space-y-space-md pb-space-xl">

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Escrow Liquidity • UG-X</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
<Icon name="assured_workload" className="text-[14px]" />
        BOU NPS Regulated
      </span>
</div>

<div className="space-y-1">
<p className="font-body-sm text-body-sm text-secondary">Pending Approval Batch</p>
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-1.5">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">UGX</span>
<span className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight font-extrabold">18,420,000</span>
</div>
<span className="px-2 py-1 rounded-lg bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md flex items-center gap-1">
<Icon name="hourglass_top" className="text-[15px]" />
          12 Queued
        </span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary">Today Disbursed</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-sm text-label-sm text-tertiary font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">45.2M</span>
</div>
<div className="flex items-center gap-1 mt-1 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[14px]" />
<span>100% Cleared</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary">Automated Net Fee</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-sm text-label-sm text-primary-container font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">1.47M</span>
</div>
<div className="flex items-center gap-1 mt-1 text-secondary font-label-sm text-label-sm">
<Icon name="analytics" className="text-[14px]" />
<span>8% Flat Comm.</span>
</div>
</div>
</div>

<div className="space-y-1 pt-1">
<div className="flex justify-between items-center text-secondary font-label-sm text-label-sm">
<span>Payout Stream Velocity (Last 6 Hours)</span>
<span className="font-bold text-on-surface">38 txns/hr</span>
</div>
<svg className="w-full h-7 text-tertiary" fill="none" viewBox="0 0 320 28">
<path d="M0 22C24 22 36 8 60 12C84 16 96 26 120 18C144 10 156 4 180 5C204 6 216 20 240 14C264 8 280 2 320 3" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 22C24 22 36 8 60 12C84 16 96 26 120 18C144 10 156 4 180 5C204 6 216 20 240 14C264 8 280 2 320 3V28H0V22Z" fill="currentColor" fillOpacity="0.08"></path>
</svg>
</div>
</section>

<section className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-margin px-margin">
<button className="shrink-0 flex items-center gap-1.5 px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="pending_actions" className="text-[16px]" />
<span>Pending Approval</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary-container text-on-primary font-bold text-[11px]">12</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
<span>Approved</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-bold text-[11px]">5</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
<span>Paid / Settled</span>
</button>
<button className="shrink-0 flex items-center gap-1.5 px-space-md py-2 rounded-full bg-error-container text-on-error-container font-label-md text-label-md active:scale-95 transition-transform" type="button">
<Icon name="warning" className="text-[16px] text-error" />
<span>Failed with Retry</span>
<span className="px-1.5 py-0.2 rounded-full bg-error text-on-error font-bold text-[11px]">1</span>
</button>
</section>

<section className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md shadow-md space-y-space-sm">
<div className="flex items-center justify-between">
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<div className="relative flex items-center justify-center">
<input checked={true} className="peer sr-only" id="selectAllCheckbox" type="checkbox" />
<div className="w-5 h-5 rounded bg-surface-container-lowest peer-checked:bg-primary-container flex items-center justify-center transition-colors">
<Icon name="check" className="text-on-primary text-[16px] font-bold" />
</div>
</div>
<span className="font-label-lg text-label-lg font-bold">Select All (12 queued)</span>
</label>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold tracking-wide">UGX 18,420,000</span>
</div>
<button className="w-full h-12 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-all" type="button">
<Icon name="bolt" className="text-[20px]" />
<span>Approve Selected Payouts (UGX 18.42M)</span>
</button>
<div className="flex items-center justify-between text-[11px] font-body-sm text-surface-variant/80 pt-0.5">
<span className="flex items-center gap-1">
<Icon name="lock" className="text-[13px] text-tertiary-fixed-dim" />
        2-Factor Staff Confirmation active
      </span>
<span>MTN/Airtel API Gateway: 99.98%</span>
</div>
</section>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Merchants in Batch</h2>
<span className="text-secondary font-body-sm text-body-sm">(3 prioritized)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Auto-refreshes in 42s</span>
</div>

<div className="space-y-space-md">

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative transition-all">

<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<label className="mt-0.5 relative flex items-center justify-center cursor-pointer">
<input checked={true} className="peer sr-only queue-checkbox" data-amount="5280000" type="checkbox" />
<div className="w-5 h-5 rounded bg-surface-container-high peer-checked:bg-primary-container flex items-center justify-center transition-colors">
<Icon name="check" className="text-on-primary text-[15px] font-bold" />
</div>
</label>
<div className="w-11 h-11 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Vibrant Ugandan electronics store front in Kikuubo market Kampala with neatly stacked audio gadgets, modern smartphones, and digital sound gear bathed in bright daylight and high visual clarity" src="/images/bb1d57b33e9cb36c.webp" />
</div>
<div className="min-w-0 flex flex-col">
<div className="flex items-center gap-1.5">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kikuubo Sound &amp; Gadgets Hub</h3>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm text-secondary">#VND-8821</span>
<span className="w-1 h-1 rounded-full bg-secondary"></span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[11px]" />
                Tier 2 Active
              </span>
</div>
</div>
</div>
<span className="shrink-0 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
          08:30 AM
        </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-space-xs">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-secondary">Net Disbursable Amount:</span>
<div className="flex items-baseline gap-1 text-primary">
<span className="font-label-sm text-label-sm font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">5,280,000</span>
</div>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary pt-0.5">
<span>Gross Escrow: UGX 5,740,000</span>
<span className="text-on-surface-variant font-medium">Platform Fee (8%): -UGX 460,000</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span>MTN Mobile Money (*165#)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="gpp_good" className="text-[13px]" />
            URSB Match
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary tracking-wide">
          MSISDN: <span className="font-bold text-on-surface">+256 772 ••• 419</span>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Registered Entity: <strong className="text-on-surface">Kikuubo Gadgets Ltd</strong> (Tax TIN: 1009482110)
        </p>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-1">
<button className="col-span-1 h-10 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button">
<Icon name="done" className="text-[17px]" />
<span>Approve</span>
</button>
<button className="col-span-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button">
<Icon name="pause_circle" className="text-[17px] text-secondary" />
<span>Hold Audit</span>
</button>
<button className="col-span-1 h-10 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[17px]" />
<span>Reject</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm relative transition-all">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<label className="mt-0.5 relative flex items-center justify-center cursor-pointer">
<input checked={true} className="peer sr-only queue-checkbox" data-amount="3450000" type="checkbox" />
<div className="w-5 h-5 rounded bg-surface-container-high peer-checked:bg-primary-container flex items-center justify-center transition-colors">
<Icon name="check" className="text-on-primary text-[15px] font-bold" />
</div>
</label>
<div className="w-11 h-11 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="High-end sound accessories retail boutique in Kampala Uganda showing wireless earbuds, Bluetooth boomboxes on minimalist wooden shelving under warm ambient illumination" src="/images/6f0d152658632c7c.webp" />
</div>
<div className="min-w-0 flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Uganda Official</h3>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">#VND-4109 • Tier 1 Verified</span>
</div>
</div>
<div className="text-right shrink-0">
<div className="flex items-baseline gap-0.5 justify-end">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">3,450,000</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Net Payout</span>
</div>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span>
<span className="font-semibold text-on-surface">Airtel Money</span>
<span className="text-secondary">+256 701 ••• 882</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Matched Name</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
          Requested 09:12 AM EAT
        </span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container active:scale-95 transition-transform" type="button">
            Details
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold active:scale-95 transition-transform" type="button">
            Approve Single
          </button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm relative">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-5 h-5 rounded bg-error-container text-error flex items-center justify-center shrink-0 mt-0.5">
<Icon name="sync_problem" className="text-[15px] font-bold" />
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Busy urban technology repair and accessories counter in Wandegeya Kampala with technician tools, laptop components, and computer screens in sharp focus with clean atmospheric lighting" src="/images/c7cc7f7bbce0a831.webp" />
</div>
<div className="min-w-0 flex flex-col">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Wandegeya Tech Hub</h3>
<span className="font-body-sm text-body-sm text-secondary truncate">#VND-1943 • Escrow Batch #821</span>
</div>
</div>
<div className="text-right shrink-0">
<div className="flex items-baseline gap-0.5 justify-end">
<span className="font-label-sm text-label-sm text-error font-bold">UGX</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">850,000</span>
</div>
<span className="font-label-sm text-label-sm text-error font-semibold">Dispatch Failed</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-error-container text-on-error-container space-y-1">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm font-bold">
<Icon name="error" className="text-[16px] text-error" />
<span>Telecom Error: USSD Carrier Timeout (Code #504)</span>
</div>
<p className="font-body-sm text-body-sm text-on-error-container/90">
          Airtel Money gateway timed out at 09:41 AM. Escrow balance remains locked in SwiftCart safety reserve. No double-debit registered.
        </p>
</div>

<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary">Last attempt: 4 mins ago</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold active:scale-95 transition-transform" type="button">
            View USSD Log
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md font-bold flex items-center gap-1 active:scale-95 transition-transform" type="button">
<Icon name="refresh" className="text-[16px]" />
<span>Retry Payout</span>
</button>
</div>
</div>
</article>
</div>

<section className="bg-surface-container rounded-xl p-space-md space-y-space-sm">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="policy" className="text-[20px] text-primary" />
<h3 className="font-label-lg text-label-lg font-bold">Bank of Uganda (BOU) Compliance Note</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
      In accordance with the National Payment Systems (NPS) Act 2020, all merchant dispatches exceeding UGX 5,000,000 undergo automated URSB registration matching and instantaneous sanction screening before telecom broadcast.
    </p>
<div className="flex items-center justify-between pt-1 text-[11px] font-label-sm text-label-sm text-secondary">
<span>Escrow Custody: Stanbic Bank Uganda</span>
<span className="font-bold text-on-surface">Audit Hash: #BOU-9942-KYC</span>
</div>
</section>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-margin opacity-0 pointer-events-none transition-opacity duration-200" id="rejectModal">
<div className="bg-surface-container-lowest w-full max-w-sm rounded-xl p-space-lg space-y-space-md shadow-2xl transition-transform duration-200 translate-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-error">
<Icon name="gavel" className="text-[22px]" />
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Reject Payout</h3>
</div>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container" type="button" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="space-y-1">
<p className="font-body-sm text-body-sm text-secondary">Select an audited reason for rejecting payment to <strong className="text-on-surface" id="modalMerchantName">Merchant</strong>:</p>
<div className="space-y-space-xs pt-2">
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="accent-primary-container" name="rejectReason" type="radio" />
<span className="font-body-sm text-body-sm text-on-surface">URSB / Name Mismatch on SIM</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low cursor-pointer">
<input className="accent-primary-container" name="rejectReason" type="radio" />
<span className="font-body-sm text-body-sm text-on-surface">Pending Buyer Return / Dispute</span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low cursor-pointer">
<input className="accent-primary-container" name="rejectReason" type="radio" />
<span className="font-body-sm text-body-sm text-on-surface">Suspected Order Velocity Gaming</span>
</label>
</div>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold" type="button">
          Cancel
        </button>
<button className="flex-1 h-10 rounded-lg bg-error text-on-error font-label-md text-label-md font-bold" type="button">
          Confirm Rejection
        </button>
</div>
</div>
</div>

<div className="fixed bottom-20 left-4 right-4 z-50 transform translate-y-16 opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center" id="payoutToast">
<div className="bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm font-label-md text-label-md">
<Icon name="verified" className="text-tertiary-fixed text-[20px]" />
<span id="toastMessage">Payout instructions dispatched to Telecom API</span>
</div>
</div>
</div>
</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 py-1 transition-colors text-primary-container font-bold" data-path="payout-queue" href="#"><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Payouts</span></a></div></nav>
    </div>
  );
};

export default PayoutQueueSwiftcartAdmin;
