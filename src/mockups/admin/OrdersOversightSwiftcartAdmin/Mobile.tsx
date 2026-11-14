// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/orders_oversight_swiftcart_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OrdersOversightSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrdersOversightSwiftcartAdmin: React.FC<OrdersOversightSwiftcartAdminProps> = (props) => {
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
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="px-margin pt-space-md pb-space-xs flex items-center justify-between"><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">Orders</h1><span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Live MTN/Airtel</span></div><div className="flex-1 w-full px-margin"><div className="flex flex-col w-full pb-8 space-y-space-md">

<div className="flex flex-col space-y-space-sm">
<div className="relative flex items-center w-full">
<Icon name="search" className="absolute left-3.5 text-secondary text-[20px]" />
<input className="w-full h-11 pl-11 pr-10 rounded-xl bg-surface-container-high text-on-surface placeholder:text-secondary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="Search by Order #SC-..., Merchant, or District" type="text" />
<button className="absolute right-2.5 w-7 h-7 flex items-center justify-center rounded-lg bg-surface-container text-secondary hover:text-on-surface" type="button">
<Icon name="tune" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto py-1 no-scrollbar">
<button className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">All (189)</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md whitespace-nowrap">Processing (24)</button>
<button className="px-space-md py-1.5 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md whitespace-nowrap flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
        In Transit (42)
      </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md whitespace-nowrap">Escrow Held (189)</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-low text-secondary hover:bg-surface-container font-label-md text-label-md whitespace-nowrap">Delivered (117)</button>
<button className="px-space-md py-1.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md whitespace-nowrap flex items-center gap-1">
<Icon name="flag" className="text-[14px]" /> Flagged (6)
      </button>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">

<div className="p-space-md bg-surface-container-low flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-md bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider">#SC-9941</span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
            In Transit
          </span>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface" title="Print Dispatch Waybill">
<Icon name="receipt_long" className="text-[18px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface" title="Copy Link">
<Icon name="share" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-tertiary/10">
<div className="flex items-center gap-space-xs">
<Icon name="verified_user" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-tertiary font-bold">Escrow Custody Active</span>
<span className="font-body-sm text-body-sm text-on-surface">MTN MoMo Prepaid (Escrow ID: #ESC-4019)</span>
</div>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 365,000</span>
</div>
</div>
</div>

<div className="px-space-md py-space-sm bg-inverse-surface text-inverse-on-surface flex items-start gap-space-sm">
<Icon name="security" className="text-primary-container text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">Zero-Trust Operational Guardrail</span>
<p className="font-body-sm text-body-sm leading-tight text-surface-variant">
          6-digit delivery release OTP is <span className="text-surface-bright font-bold">NEVER visible</span> to Admin, Support, or William St. Hub. Exclusively verified in-person between customer <strong className="text-surface-bright">Ronald K.</strong> and courier at handover.
        </p>
</div>
</div>
<div className="p-space-md space-y-space-lg">

<div className="flex flex-col space-y-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Parties Involved</span>
<div className="grid grid-cols-1 gap-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<Icon name="storefront" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kikuubo Sound Hub</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Shop B-14, Equatorial Mall</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">Merchant</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<Icon name="person_pin_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Ronald K.</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Nakawa Division • Phone: 07••••••492</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Buyer</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary shrink-0">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kizito Brian</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer • Reg: UEF 842X</span>
</div>
</div>
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm">Dispatched</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Consignment Manifest</span>
<span className="font-label-sm text-label-sm text-secondary">2 unique items</span>
</div>
<div className="space-y-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Black premium SoundCore Space One active noise cancelling wireless headphones resting on retail packaging against a clean minimal studio backdrop." src="/images/d3778df86e338a3d.webp" />
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-secondary">Qty: 1 • Color: Jet Black</span>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 280,000</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Compact white Baseus 65W GaN fast charger wall plug adapter with multiple USB ports placed on a dark sleek architectural desk surface." src="/images/52a88d9185b24a63.webp" />
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Baseus 65W GaN Fast Charger</span>
<span className="font-body-sm text-body-sm text-secondary">Qty: 1 • Dual Type-C</span>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 85,000</span>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary">
<span>Items Subtotal</span>
<span>UGX 365,000</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary">
<span>Standard Courier (SwiftBoda Zone 2)</span>
<span className="text-tertiary font-medium">Free Promo</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface font-bold pt-1">
<span>Total Value In Escrow</span>
<span className="text-primary font-extrabold">UGX 365,000</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Immutable Audit Trail</span>
<div className="relative pl-6 space-y-space-md before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">

<div className="relative">
<div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-tertiary flex items-center justify-center">
<Icon name="check" className="text-on-tertiary text-[10px]" />
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Order Placed &amp; Escrow Funded</span>
<span className="font-label-sm text-label-sm text-secondary">10:14 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Auto-approved via MTN Mobile Money Instant Push (Trans ID: #MOM-88319).</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-tertiary flex items-center justify-center">
<Icon name="check" className="text-on-tertiary text-[10px]" />
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Merchant Packed &amp; Tagged</span>
<span className="font-label-sm text-label-sm text-secondary">10:30 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Kikuubo Sound Hub confirmed packaging. Barcode SC-9941 applied.</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-tertiary flex items-center justify-center">
<Icon name="check" className="text-on-tertiary text-[10px]" />
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Hub Intake Scanned</span>
<span className="font-label-sm text-label-sm text-secondary">11:05 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Kampala William Street Logistics Node (Operator: J. Mugisha).</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-primary-container flex items-center justify-center animate-bounce">
<span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-md text-label-md text-primary font-bold">Boda Courier Dispatched</span>
<span className="font-label-sm text-label-sm text-primary font-bold">11:20 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Courier Kizito Brian is moving toward Nakawa (ETA 18 mins). Real-time GPS sync pinged 4 mins ago.</p>
</div>

<div className="relative opacity-50">
<div className="absolute -left-[27px] top-0.5 w-3.5 h-3.5 rounded-full bg-surface-variant flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-md text-label-md text-on-surface">Delivery &amp; Escrow Release</span>
<span className="font-label-sm text-label-sm text-secondary">Awaiting OTP</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Administrative Controls</span>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="sticky_note_2" className="text-[18px] text-secondary" />
<span className="font-label-md text-label-md font-bold">Internal Ops Log</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Staff Only</span>
</div>

<div className="space-y-space-xs" id="notes-container">
<div className="p-2 rounded bg-surface-container text-on-surface">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Patricia Namubiru (Lead)</span>
<span className="font-label-sm text-label-sm">11:12 AM</span>
</div>
<p className="font-body-sm text-body-sm mt-0.5">Customer requested call before rider reaches shell gas station Nakawa. Rider informed.</p>
</div>
</div>

<div className="flex flex-col space-y-1.5 pt-1">
<textarea className="w-full p-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-sm text-body-sm focus:outline-none focus:ring-0 resize-none shadow-sm" id="staff-note-input" placeholder="Write internal memo regarding this dispatch..." rows={2}></textarea>
<div className="flex items-center justify-end">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
<Icon name="add_comment" className="text-[16px]" />
                Add Note
              </button>
</div>
</div>
</div>

<div className="pt-space-xs">
<button className="w-full h-11 rounded-xl bg-error-container text-on-error-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs hover:bg-error/20 active:scale-[0.99] transition-all shadow-sm" type="button">
<Icon name="gavel" className="text-[20px]" />
            Flag Order for Audit / Freeze Dispatch
          </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-space-xs pt-space-xs">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Other Active Queue Orders</span>
<span className="font-label-sm text-label-sm text-primary font-bold">View all 189</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col space-y-space-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider">#SC-9938</span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Processing
          </span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">UGX 120,000</span>
</div>
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Neat arrangement of organic Ugandan shea butter cosmetics in minimalist amber glass jars on a bright natural wood tabletop." src="/images/1c9a419d3cbd28ca.webp" />
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kampala Organic Shea Butter (2x 500ml)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Merchant: Nile Heritage Naturals • Buyer: Agnes M. (Entebbe)</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm text-secondary">
<div className="flex items-center gap-1 text-tertiary">
<Icon name="lock" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-semibold">Escrow Secured: Airtel Money</span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-0.5">
          Inspect <Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-center justify-center p-space-md" id="audit-modal">
<div className="w-full max-w-sm bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg flex flex-col space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="warning" className="text-[24px]" />
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center hover:bg-surface-variant" type="button" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">Freeze Dispatch &amp; Audit #SC-9941?</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">
          This immediately alerts rider Kizito Brian to pause delivery, halts MTN MoMo escrow release, and flags the transaction for fraud investigation.
        </p>
</div>

<div className="space-y-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Investigation Reason</label>
<select className="w-full h-10 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none">
<option>Suspected Identity Fraud / Stolen MoMo Account</option>
<option>Seller Stock Discrepancy Reported</option>
<option>Delivery Route Deviation Detected</option>
<option>Buyer Request for Cancellation in Transit</option>
<option>Manual Review Flagged by Supervisor</option>
</select>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 h-11 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold" type="button">
          Cancel
        </button>
<button className="flex-1 h-11 rounded-xl bg-error text-on-error font-label-md text-label-md font-bold shadow-md" type="button">
          Freeze Order
        </button>
</div>
</div>
</div>
</div>
</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 py-1 transition-colors text-primary-container font-bold" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="payout-queue" href="#"><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Payouts</span></a></div></nav>
    </div>
  );
};

export default OrdersOversightSwiftcartAdmin;
