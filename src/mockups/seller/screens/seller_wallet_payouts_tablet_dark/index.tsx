// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_wallet_payouts_tablet_dark/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface-dark/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"><div className="h-28 w-full px-margin flex flex-col justify-between py-space-sm"><div className="flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface tracking-tight">SwiftCart Seller Hub</span><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[280px]">SoundCore Uganda Official • Pioneer Mall G-14</span><span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>Open</span></div></div></div><div className="flex items-center gap-space-sm"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container-high"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Reserve</span><span className="font-label-lg text-label-lg text-emerald-escrow">UGX 14,850,000</span></div></div><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container"><Icon name="local_shipping" className="text-action-gradient-start text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Today Orders</span><span className="font-label-lg text-label-lg text-on-surface">28 Dispatches</span></div></div><button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="relative"><button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /></button><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto py-1" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg"><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">6</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">48</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="ai-studio" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">4</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes<span className="px-1.5 py-0.2 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm">1</span></a><a aria-current="page" className="px-space-md py-1.5 transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-bold rounded-lg" data-path="wallet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="analytics-and-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics &amp; Settings</a></nav></div></header>
<main className="w-full pt-28 pb-14 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="px-margin pt-space-md pb-space-xs">
<div className="flex items-center justify-between px-space-md py-2 rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="relative flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping absolute opacity-75"></span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow relative"></span>
</div>
<span className="font-label-md text-label-md text-on-surface">Telecom API Gateway: Active</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• MTN Mobile Money E-Float &amp; Airtel Payout Switch Synced</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-bold">Latency: 14ms</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Last Reconciled: 14:38 EAT</span>
</div>
</div>
</div>
<div className="px-margin py-space-sm space-y-space-lg">

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md">
<div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-action-gradient-start/10 blur-2xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between gap-2 mb-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="account_balance_wallet" className="text-[18px] text-action-gradient-start" />
              Available for Instant MoMo
            </span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold uppercase tracking-wide">
              0% Cash-out Fee
            </span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight" id="dispAvailableBalance">6,240,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Direct payout to verified merchant MoMo float.</p>
</div>
<div className="mt-space-md">
<button className="w-full h-11 px-space-md rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:opacity-95 active:scale-[0.98] transition-all" id="quickWithdrawTrigger" onClick={() => alertToast('Action triggered')}>
<Icon name="send_to_mobile" className="text-[18px]" />
<span>Withdraw to MTN MoMo (*714)</span>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md">
<div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-emerald-escrow/10 blur-xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between gap-2 mb-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="gavel" className="text-[18px] text-emerald-escrow" />
              Escrow Reserve (Protected)
            </span>
<span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px] text-emerald-escrow" /> Tier-1 Vault
            </span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-emerald-escrow tracking-tight">14,850,000</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="lock" className="text-[16px] text-emerald-escrow" />
<span>Releases on 6-digit delivery OTP verification</span>
</div>
</div>
<div className="mt-space-md pt-2">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Bank of Uganda NPS Safe Custody</span>
<span className="text-tertiary font-bold">18 Active Orders</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-1.5 overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md">
<div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-amber-warning/10 blur-xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between gap-2 mb-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="schedule" className="text-[18px] text-amber-warning" />
              Pending Settlement Batch
            </span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">
              18:00 EAT Cycle
            </span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">2,180,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Auto-clears at 18:00 EAT to registered telecom account.
          </p>
</div>
<div className="mt-space-md flex items-center justify-between pt-2">
<div className="flex items-center gap-2">
<Icon name="autorenew" className="text-[20px] text-on-surface-variant" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Automatic Evening Payout Sweep</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">3h 22m left</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col space-y-space-md">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-space-sm">
<Icon name="receipt_long" className="text-[22px] text-action-gradient-start" />
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Ledger &amp; Payout Audit Stream</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Direct BoU compliant escrow settlement logs</p>
</div>
</div>
<div className="flex items-center gap-1.5 self-start sm:self-auto">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="file_download" className="text-[15px]" />
<span>CSV Statement</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[15px]" />
<span>Tax Invoice</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm shadow-sm">
<div className="flex flex-col sm:flex-row gap-space-sm items-center">

<div className="relative w-full sm:flex-1">
<Icon name="search" className="absolute left-3 top-2.5 text-[18px] text-on-surface-variant" />
<input className="w-full h-10 bg-surface-container pl-10 pr-3 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-action-gradient-start" id="ledgerSearchInput" placeholder="Search reference, order #, or phone..." type="text" />
</div>

<div className="flex items-center gap-1 w-full sm:w-auto">
<div className="h-10 px-3 rounded-lg bg-surface-container flex items-center gap-2 text-on-surface font-label-sm text-label-sm w-full sm:w-auto justify-between">
<Icon name="calendar_today" className="text-[16px] text-on-surface-variant" />
<span>Feb 10 - Feb 17, 2025</span>
<Icon name="expand_more" className="text-[16px] text-on-surface-variant" />
</div>
</div>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto pb-1" id="filterTabs">
<button className="px-3 py-1.5 rounded-lg bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold whitespace-nowrap" data-filter="all" onClick={() => alertToast('Action triggered')}>All Settlements (24)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap" data-filter="release" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Order Escrow Releases (18)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap" data-filter="withdrawal" onClick={() => alertToast('Action triggered')}>Instant Withdrawals (4)</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap" data-filter="dispute" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Dispute Holds (1)</button>
</div>
</div>

<div className="space-y-space-sm" id="ledgerContainer">

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Release: Order #SC-ORD-9485</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">Cleared</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">SoundCore Motion+ • Buyer Dennis M. verified OTP (*4912)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">Today 14:22 EAT • Gateway Switch: MoMo Pay Rails</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-emerald-escrow font-bold">+UGX 315,000</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Fee: UGX 0 (Promo)</p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-container/15 text-action-gradient-start flex items-center justify-center shrink-0 mt-0.5">
<Icon name="phone_android" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Instant MoMo Payout</span>
<span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold">Completed (Instant)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Payout to Sarah Namubiru (+256 772 ••• 456)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">Today 12:15 EAT • MTN Ref: MTN-TX-88914</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-on-surface font-bold">-UGX 2,500,000</span>
<p className="font-label-sm text-label-sm text-emerald-escrow font-semibold">Net Received (0% fee)</p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Release: Order #SC-ORD-9478</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">Cleared</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Anker 65W GaN Charger • Delivery confirmed in Nakasero</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">Today 10:45 EAT • Boda Rider #BODA-4402</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-emerald-escrow font-bold">+UGX 140,000</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Fee: UGX 0</p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<Icon name="percent" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Platform Commission Deduction</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Invoiced</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">8% Standard Merchant Tier • SoundCore Store Account</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">Yesterday 17:30 EAT • Invoice #INV-2025-02</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-on-surface font-bold">-UGX 198,400</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Withholding tax applied</p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0 mt-0.5">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Release: Order #SC-ORD-9466</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">Cleared</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Space One ANC Headphones • Buyer validated via SMS pin</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">Yesterday 15:10 EAT • Pioneer Mall Central Hub</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-emerald-escrow font-bold">+UGX 248,500</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Fee: UGX 0</p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-danger-penalty/15 text-danger-penalty flex items-center justify-center shrink-0 mt-0.5">
<Icon name="shield_lock" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-danger-penalty font-bold">Dispute Payout Freeze #DSP-8910-KLA</span>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold">Held in Escrow Vault</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Package unboxing claim under seller-buyer conciliation</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-1">12 Feb 2025 • SwiftCart Legal Mediation Team</span>
</div>
</div>
<div className="text-right sm:self-center shrink-0 pl-12 sm:pl-0">
<span className="font-price-display text-price-display text-danger-penalty font-bold">-UGX 235,000</span>
<p className="font-label-sm text-label-sm text-danger-penalty">Disputed amount isolated</p>
</div>
</div>
</div>

<div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-low rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 6 of 142 total transaction ledger records</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors disabled:opacity-40" disabled={true} onClick={() => alertToast('Action triggered')}>Previous</button>
<span className="px-2 font-label-sm text-label-sm text-on-surface font-bold">Page 1 of 24</span>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>Next</button>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col space-y-space-md">

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-action-gradient-start/15 text-action-gradient-start flex items-center justify-center">
<Icon name="payments" className="text-[19px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Instant MoMo Cash-out</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>Direct USSD
            </span>
</div>

<div>
<label className="block font-label-md text-label-md text-on-surface mb-2">Select Registered Payout Rail</label>
<div className="space-y-space-xs" id="railSelectorGroup">

<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between cursor-pointer ring-1 ring-action-gradient-start transition-all" id="rail-mtn">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-mtn-yellow/20 flex items-center justify-center shrink-0">
<Icon name="sim_card" className="text-mtn-yellow text-[22px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">MTN Mobile Money</span>
<span className="px-1.5 py-0.2 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm">Primary</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 772 ••• 456 (Sarah Namubiru)</span>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-action-gradient-start flex items-center justify-center">
<Icon name="check" className="text-white text-[14px]" />
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container/60 hover:bg-surface-container flex items-center justify-between cursor-pointer transition-all opacity-80 hover:opacity-100" id="rail-airtel">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-airtel-red/20 flex items-center justify-center shrink-0">
<Icon name="cell_tower" className="text-airtel-red text-[22px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Airtel Money Uganda</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant #4009</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 755 ••• 789 (Pioneer Mall Store)</span>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center">
<Icon name="check" className="text-transparent text-[14px]" />
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-md text-label-md text-on-surface">Cash-out Amount</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Max: UGX 6,240,000</span>
</div>
<div className="relative">
<span className="absolute left-3.5 top-3.5 font-label-md text-label-md text-on-surface-variant font-bold">UGX</span>
<input className="w-full h-12 bg-surface-container pl-14 pr-4 rounded-xl font-headline-sm text-headline-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-action-gradient-start font-bold" id="withdrawInput" type="text" value="6,240,000" />
</div>

<div className="grid grid-cols-3 gap-2 mt-2">
<button className="py-1.5 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors quick-val" data-val="1,000,000" onClick={() => alertToast('Action triggered')}>
                +UGX 1,000,000
              </button>
<button className="py-1.5 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors quick-val" data-val="3,000,000" onClick={() => alertToast('Action triggered')}>
                +UGX 3,000,000
              </button>
<button className="py-1.5 px-2 rounded-lg bg-action-gradient-start/15 hover:bg-action-gradient-start/25 text-action-gradient-start font-label-sm text-label-sm font-bold transition-colors quick-val" data-val="6,240,000" onClick={() => alertToast('Action triggered')}>
                Max All (100%)
              </button>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md space-y-2">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Gross Withdrawal Amount</span>
<span className="text-on-surface font-bold" id="dispGross">UGX 6,240,000</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
                Telecom Network Fee
                <Icon name="info" className="text-[14px] text-tertiary" />
</span>
<div className="flex items-center gap-1.5">
<span className="line-through text-on-surface-variant/60 font-body-sm text-body-sm">UGX 12,500</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-emerald-escrow/20 text-emerald-escrow font-bold">UGX 0 (Covered)</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Speed &amp; Protocol</span>
<span className="text-on-surface font-semibold flex items-center gap-1">
<Icon name="bolt" className="text-action-gradient-start text-[14px]" /> Instant Push (&lt; 10s)
              </span>
</div>
<div className="border-t border-surface-variant/40 pt-2 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Net Credit to Mobile Wallet</span>
<span className="font-price-display text-price-display text-emerald-escrow font-bold" id="dispNet">UGX 6,240,000</span>
</div>
</div>

<div className="space-y-2 pt-1">
<button className="w-full h-13 py-3.5 px-space-md rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_22px_rgba(218,55,0,0.4)] active:scale-[0.98] transition-all" id="btnConfirmCashout" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="account_balance_wallet" className="text-[20px]" />
<span id="btnLabel">Confirm Instant Cash-out: UGX 6,240,000</span>
</button>
<p className="font-label-sm text-label-sm text-center text-on-surface-variant/70">
              By confirming, an encrypted USSD PIN prompt will trigger on Sarah Namubiru's SIM.
            </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm relative overflow-hidden">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="account_balance" className="text-[22px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface">Bank of Uganda Statutory Escrow</h4>
<span className="px-1.5 py-0.2 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">NPS 2020</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                All platform funds are ring-fenced inside Stanbic Bank Uganda Escrow Trust Accounts under the National Payment Systems Act 2020. Guaranteed 100% merchant solvency regardless of network liquidity.
              </p>
<div className="pt-2 flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-emerald-escrow">
<Icon name="verified" className="text-[15px]" />
                  Audited Weekly by PwC Kampala
                </span>
<span className="text-outline-variant">•</span>
<span className="font-code-display text-label-sm text-on-surface-variant">TRUST-AC-889012</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm">
<h4 className="font-label-md text-label-md text-on-surface mb-space-sm flex items-center gap-1.5">
<Icon name="hub" className="text-[17px] text-action-gradient-start" />
<span>How SwiftCart Protected Settlement Works</span>
</h4>
<div className="grid grid-cols-3 gap-2 text-center">
<div className="bg-surface-container p-2.5 rounded-lg flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-action-gradient-start/15 text-action-gradient-start flex items-center justify-center font-bold text-xs mb-1">1</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Buyer Pays</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Funds lock in BoU Escrow</span>
</div>
<div className="bg-surface-container p-2.5 rounded-lg flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-emerald-escrow/15 text-emerald-escrow flex items-center justify-center font-bold text-xs mb-1">2</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">6-Digit OTP</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Driver inputs buyer code</span>
</div>
<div className="bg-surface-container p-2.5 rounded-lg flex flex-col items-center">
<div className="w-7 h-7 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center font-bold text-xs mb-1">3</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Instant MoMo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Auto-credit to merchant</span>
</div>
</div>
</div>
</div>
</div>
</div>


</div></main>
<footer className="fixed bottom-0 left-0 right-0 h-10 bg-surface-container-lowest/95 backdrop-blur-md z-40 px-margin flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm"><div className="flex items-center gap-space-sm"><span className="flex items-center gap-1.5 text-tertiary"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>William St Central Hub Connection: 99.8%</span><span className="text-outline-variant">•</span><span className="text-on-surface-variant">Lat: 18ms</span></div><div className="flex items-center gap-space-xs text-on-surface-variant"><Icon name="account_balance" className="text-[15px] text-emerald-escrow" /><span>Bank of Uganda Escrow Compliance Custody Tier-1 Verified</span></div></footer>
    </div>
  );
};

export default Screen;
