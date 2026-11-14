// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_returns_disputes_console_swiftcart_desktop_light/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="px-space-xl py-space-md bg-surface border-b border-surface-container-high flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Post-Purchase</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Returns &amp; Disputes</span>
</div>
<div className="flex items-center gap-space-md">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Returns, Claims &amp; Escrow Disputes</h1>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-error-container text-on-error-container shadow-sm">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide">1 Active Dispute • Escrow Hold</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md h-10 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="download" className="text-[18px]" />
        Export Disputes CSV
      </button>
<button className="px-space-md h-10 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="gavel" className="text-[18px]" />
        Arbitration SLA Policy
      </button>
</div>
</div>

<div className="flex-1 p-space-xl flex flex-col lg:flex-row gap-space-xl items-start">

<div className="w-full lg:w-96 shrink-0 flex flex-col gap-space-md">

<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase">Frozen in Escrow</span>
<Icon name="lock_clock" className="text-primary text-[16px]" />
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-on-surface leading-tight">UGX 342k</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> 1 Claim Active
            </div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase">Arbitration Win</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-tertiary leading-tight">92.4%</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">SoundCore Hub</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
<div className="relative">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-low transition-all" placeholder="Search dispute ID, buyer, order #..." type="text" />
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-nowrap">
<button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>All (19)</button>
<button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary-container shadow-sm" onClick={() => alertToast('Action triggered')}>Under Review (1)</button>
<button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>Inspection (3)</button>
<button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>Resolved (14)</button>
<button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>Arbitrated (1)</button>
</div>
</div>

<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low shadow-md relative overflow-hidden cursor-pointer">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-center justify-between pl-1">
<span className="font-label-sm text-label-sm text-primary-container font-extrabold tracking-wider">#DSP-88219</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="alarm" className="text-[13px]" />
              14h left
            </span>
</div>
<div className="mt-2 pl-1">
<p className="font-label-md text-label-md text-on-surface font-bold">SoundCore Space One ANC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-97810 • Matte Black</p>
</div>
<div className="mt-2 pl-1 flex items-center justify-between text-body-sm">
<div className="flex items-center gap-1 text-on-surface">
<Icon name="person" className="text-[16px] text-on-surface-variant" />
<span className="font-medium text-body-sm">Nantongo Grace</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">UGX 342,000</span>
</div>
<div className="mt-2 pl-1">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container-highest text-on-error-container font-label-sm text-label-sm leading-tight">
<Icon name="report_problem" className="text-[14px] text-error" />
              Tamper Seal Broken / Refused Handover
            </span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#DSP-88204</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-semibold">Inspection Approved</span>
</div>
<div className="mt-2">
<p className="font-label-md text-label-md text-on-surface">Anker Prime 67W GaN Wall Charger</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-97645 • Kampala Serena Hotel</p>
</div>
<div className="mt-2 flex items-center justify-between text-body-sm">
<span className="font-body-sm text-on-surface-variant">Buyer: Mukasa Denis</span>
<span className="font-label-md text-label-md text-on-surface">UGX 165,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#DSP-88190</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">Swapped via SafeBoda</span>
</div>
<div className="mt-2">
<p className="font-label-md text-label-md text-on-surface">SoundCore Life P3 Earbuds (Navy)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-97512 • SafeBoda #412 Hub Run</p>
</div>
<div className="mt-2 flex items-center justify-between text-body-sm">
<span className="font-body-sm text-on-surface-variant">Buyer: Sandra Ainembabazi</span>
<span className="font-label-md text-label-md text-on-surface">UGX 240,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">#DSP-88162</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">URSB Won • Released</span>
</div>
<div className="mt-2">
<p className="font-label-md text-label-md text-on-surface">Oraimo FreePods 4 ANC Wireless</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-97420 • Counterfeit Claim Dismissed</p>
</div>
<div className="mt-2 flex items-center justify-between text-body-sm">
<span className="font-body-sm text-on-surface-variant">Buyer: Katende Arthur</span>
<span className="font-label-md text-label-md text-on-surface">UGX 115,000</span>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full space-y-space-lg">

<div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Case Docket #DSP-88219</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-extrabold">Action Required</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Order Ref: SC-97810</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 flex-wrap">
<span>Transit: SwiftCart Dedicated Logistics</span>
<span>•</span>
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px] text-primary" /> SafeBoda Run #SB-412</span>
<span>•</span>
<span>Courier: Brian Kizito (+256 788 331 092)</span>
</p>
</div>
<div className="flex flex-col sm:items-end">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Disputed Amount</span>
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">UGX 342,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Escrow Hold</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-md">
<Icon name="account_balance" className="text-primary text-[22px] mt-0.5" />
<div className="flex-1 text-on-surface">
<p className="font-label-md text-label-md font-bold">Bank of Uganda FinTech Sandbox Escrow Node 04</p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-0.5">
              Funds are held under digital vault escrow. Automatic release or reverse-debit occurs only upon mutual merchant-buyer confirmation or adjudication by SwiftCart URSB-certified legal arbitrators.
            </p>
</div>
<Icon name="format_image_left" className="text-tertiary text-[20px]" />
</div>

<div className="px-space-md py-space-sm rounded-xl bg-error-container text-on-error-container flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-space-sm">
<Icon name="schedule" className="text-error text-[20px] animate-spin" />
<span className="font-label-md text-label-md font-bold">Merchant Response Window: 14 hours 22 minutes remaining</span>
</div>
<span className="font-body-sm text-body-sm">Unresponsive cases trigger auto-refund tomorrow at 03:00 EAT</span>
</div>
</div>

<div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md space-y-space-lg">
<div className="flex items-center justify-between pb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-sm">
<Icon name="assignment_late" className="text-primary text-[22px]" />
            Customer Claim &amp; Handover Incident
          </h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Filed Today at 11:24 EAT</span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-[16px] font-bold">
                NG
              </div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Nantongo Grace</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
<Icon name="verified" className="text-[12px]" /> Verified Buyer
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kampala Central • 14 Successful SwiftCart Orders</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[16px]" /> Chat History
            </a>
</div>
<div className="p-space-md rounded-lg bg-surface-container-lowest text-on-surface shadow-sm">
<p className="font-body-md text-body-md italic leading-relaxed text-on-surface">
              “Package arrived with torn outer tamper tape. I unsealed the exterior brown pouch in front of rider Brian K. and immediately noticed the product retail shrink-wrap was slit along the base seam. I refused to provide the 6-digit delivery release OTP code until SoundCore confirms warranty validity.”
            </p>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Attached Incident Evidence (3 High-Res Photos)</span>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[14px]" /> Inspect Full-Res EXIF
            </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">

<div className="group relative rounded-xl overflow-hidden shadow-sm bg-surface-container aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Macro close up photo of broken tamper evident orange sticker on an electronics package showing torn paper fibers and adhesive residue in clean daylight lighting" src={`${assetBase}/images/75d5bafe75a90d06.webp`} />
<div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-on-surface/80 to-transparent flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm font-bold">1. Torn Tamper Tape</span>
<Icon name="zoom_in" className="text-[16px]" />
</div>
</div>

<div className="group relative rounded-xl overflow-hidden shadow-sm bg-surface-container aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Clear high definition photo of SoundCore audio headphone packaging box showing a clean straight slit along the plastic shrink wrap packaging in soft office lighting" src={`${assetBase}/images/130ddb789a34ab89.webp`} />
<div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-on-surface/80 to-transparent flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm font-bold">2. Retail Box Seam</span>
<Icon name="zoom_in" className="text-[16px]" />
</div>
</div>

<div className="group relative rounded-xl overflow-hidden shadow-sm bg-surface-container aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Exterior documentary photograph of delivery motorcycle helmet and parcel handover at residential gate in Kololo Kampala on a bright sunny equatorial afternoon" src={`${assetBase}/images/07d1f21489b202b3.webp`} />
<div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-on-surface/80 to-transparent flex items-center justify-between text-on-primary">
<span className="font-label-sm text-label-sm font-bold">3. Rider Handover Gate</span>
<Icon name="zoom_in" className="text-[16px]" />
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-primary">
<Icon name="moped" className="text-[20px]" />
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Courier Field Note: Brian Kizito (SafeBoda #412)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="location_on" className="text-[14px] text-tertiary" />
                GPS Matched: Kololo Hill Rd • 11:21 EAT
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              “Picked parcel sealed from SoundCore Nakasero Hub. Buyer inspected parcel at gate before OTP handover. Item remained with me; parcel is securely sealed in my rear SafeBoda insulated transit case awaiting dispatch return ticket.”
            </p>
</div>
</div>
</div>

<div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md space-y-space-lg">
<div>
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-sm">
<Icon name="tune" className="text-primary text-[22px]" />
              Select Merchant Resolution Pathway
            </h2>
<span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">Standard Mediation Flow</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Select an automated resolution method to settle this escrow hold within SLA requirements.</p>
</div>

<div className="space-y-space-md">

<label className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-md cursor-pointer hover:bg-surface-container transition-all relative overflow-hidden">
<input checked={true} className="mt-1 w-5 h-5 text-primary accent-primary cursor-pointer shrink-0" name="resolution_choice" type="radio" />
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">Option A: Accept Return &amp; Authorize Full Refund</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Recommended • 0% Penalty</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Refund: UGX 342,000</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                SafeBoda courier returns package immediately to Nakasero Flagship Hub. Customer receives an automated instant mobile money refund on MTN/Airtel upon barcode scan. Seller inventory automatically marks 1 unit as <span className="text-on-surface font-semibold">“Quarantine / Inspection Status”</span>.
              </p>
</div>
</label>

<label className="p-space-lg rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-sm flex items-start gap-space-md cursor-pointer transition-all">
<input className="mt-1 w-5 h-5 text-primary accent-primary cursor-pointer shrink-0" name="resolution_choice" type="radio" />
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Option B: Send Brand New Sealed Replacement</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">Priority Dispatch &lt; 45m</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Escrow Released on Swap</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Dispatch an unopened factory unit directly from Nakasero Hub. SafeBoda rider conducts a doorstep simultaneous swap at the customer’s Kololo address before releasing the merchant payout.
              </p>
</div>
</label>

<label className="p-space-lg rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-sm flex items-start gap-space-md cursor-pointer transition-all">
<input className="mt-1 w-5 h-5 text-primary accent-primary cursor-pointer shrink-0" name="resolution_choice" type="radio" />
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Option C: Contest Claim &amp; Escalate to SwiftCart Arbitration</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">Formal Review</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Review Turnaround: 24h</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Contest the claim by providing packing table CCTV footage. Assigned SwiftCart Arbitration Officer: <span className="text-on-surface font-medium">Patricia Namubiru (Lead Dispute Counsel, URSB Accredited)</span>.
              </p>
</div>
</label>
</div>

<div className="pt-space-md space-y-space-md">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="merchant-note">
              Merchant Response Note &amp; Courier Instructions
            </label>
<span className="font-label-sm text-label-sm text-on-surface-variant">148 / 500 characters</span>
</div>
<textarea className="w-full h-24 p-space-md rounded-xl bg-surface-container text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-low transition-all resize-none shadow-inner" id="merchant-note">We apologize for the inconvenience, Nantongo. We have authorized the SafeBoda return ticket. Please return the headset with all accessories to rider Brian K.</textarea>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-2">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="px-space-md h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="videocam" className="text-[18px]" />
                Attach CCTV Footage
              </button>
<button className="px-space-md h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px] text-tertiary" />
                Masked WhatsApp Call
              </button>
</div>
<button className="w-full sm:w-auto px-space-xl h-12 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="assignment_turned_in" className="text-[20px]" />
              Submit Response &amp; Issue SafeBoda Return Ticket
            </button>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
