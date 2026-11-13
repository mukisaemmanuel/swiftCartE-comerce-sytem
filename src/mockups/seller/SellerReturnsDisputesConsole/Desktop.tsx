// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_returns_disputes_console_swiftcart_desktop/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest z-40 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm bg-surface-container-lowest"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/3f10b645d293fcfe.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container/20 text-primary uppercase ml-1">Seller</span></div><div className="px-space-md py-space-sm"><div className="bg-surface-container-low rounded-xl p-space-md"><div className="flex items-center gap-space-xs text-tertiary mb-1"><Icon name="verified" className="text-[16px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">URSB Verified Merchant</span></div><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant truncate">Nakasero Flagship Hub</p></div></div><nav className="px-space-md py-space-sm space-y-space-md" data-active-classes="bg-surface-container text-primary font-bold"><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Daily Operations</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="grid_view" className="text-[20px]" /><span className="font-label-md text-label-md">Overview</span></div></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span className="font-label-md text-label-md">Orders</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-bold">14 Pending</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-label-md text-label-md">Products &amp; Inventory</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-error/20 text-error font-bold">2 Low</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-label-md text-label-md">Riders &amp; Logistics</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-bold">6 Active</span></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Post-Purchase</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px]" /><span className="font-label-md text-label-md">Returns &amp; Disputes</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-bold">1 Case</span></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Business &amp; Finance</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-label-md text-label-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary font-bold">14.8M UGX</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="monitoring" className="text-[20px]" /><span className="font-label-md text-label-md">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="campaign" className="text-[20px]" /><span className="font-label-md text-label-md">Discounts &amp; Ads</span></div></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Settings</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px]" /><span className="font-label-md text-label-md">Store Profile &amp; KYC</span></div><Icon name="check_circle" className="text-[16px] text-tertiary" /></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-label-md text-label-md">Settings</span></div></a></div></nav></div><div className="p-space-md"><div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-sm"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span></span><div className="leading-tight min-w-0"><p className="font-label-sm text-label-sm text-on-surface truncate font-bold">Kampala Hub Node</p><p className="font-body-sm text-body-sm text-tertiary truncate">Direct Escrow Active</p></div></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/80 backdrop-blur-xl z-30 flex items-center justify-between px-space-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" /><input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm" placeholder="Search orders (UGX), package OTPs, buyer phone, or SKU..." type="text" /></div></div><div className="flex items-center gap-space-md"><button aria-label="Theme Switcher" className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="relative"><button aria-label="Notifications" className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /></button><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-action-gradient-start"></span></div><div className="h-8 w-px bg-surface-container-high mx-1"></div><div className="flex items-center gap-space-sm pl-2"><div className="text-right hidden sm:block"><p className="font-label-md text-label-md text-on-surface font-bold leading-none">Kizito Ronald</p><p className="font-body-sm text-body-sm text-on-surface-variant leading-none mt-1">Store Manager (KR)</p></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<div className="flex flex-col gap-space-xs mb-space-lg">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Post-Purchase</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Returns &amp; Disputes</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md mt-1">
<div className="flex items-center gap-space-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Returns, Claims &amp; Escrow Disputes</h1>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-md text-label-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger-penalty opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-danger-penalty"></span>
</span>
          1 Active Dispute • Escrow Hold
        </div>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="sim_card_download" className="text-[18px]" />
          Export Disputes CSV
        </button>
<button className="flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="verified_user" className="text-[18px]" />
          Arbitration SLA Policy
        </button>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md mb-space-lg shadow-sm flex flex-col lg:flex-row gap-space-md lg:items-center lg:justify-between">
<div className="flex-1 max-w-lg relative">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-11 pr-4 rounded-xl bg-surface-container text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm" placeholder="Search by Dispute ID (#DSP), Order ID (#SC), or Serial No..." type="text" />
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
<button className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        All Claims (19)
      </button>
<button className="px-3.5 py-2 rounded-xl bg-action-gradient-start/20 text-primary font-label-md text-label-md whitespace-nowrap flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Under Review</span>
<span className="px-1.5 py-0.2 rounded bg-action-gradient-start text-on-primary font-bold text-[10px]">1</span>
</button>
<button className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        Inspection Pending (3)
      </button>
<button className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        Resolved &amp; Released (14)
      </button>
<button className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        Escalated to Arbitration (1)
      </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">Frozen in Escrow</span>
<Icon name="lock" className="text-[16px] text-amber-warning" />
</div>
<p className="font-headline-sm text-headline-sm text-amber-warning">UGX 342,000</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 Claim active</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-center justify-between text-on-surface-variant mb-1">
<span className="font-label-sm text-label-sm uppercase">Arbitration Win Rate</span>
<Icon name="military_tech" className="text-[16px] text-tertiary" />
</div>
<p className="font-headline-sm text-headline-sm text-tertiary">92.4%</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">SoundCore Kampala Hub</span>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-space-lg relative cursor-pointer shadow-md transition-all hover:bg-surface-container-high">

<div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-action-gradient-start"></div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm pl-1">
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary tracking-wide">#DSP-88219</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Order #SC-97810</span>
</div>
<p className="font-label-md text-label-md text-on-surface font-bold mt-0.5">Nantongo Grace <span className="font-normal text-on-surface-variant">(+256 702 ••• 419)</span></p>
</div>
<span className="font-label-sm text-label-sm px-2 py-1 rounded bg-amber-warning/20 text-amber-warning font-bold whitespace-nowrap flex items-center gap-1">
<Icon name="timer" className="text-[14px]" />
            14h remaining
          </span>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-xl bg-surface-container-low mb-space-sm pl-2">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<Icon name="headphones" className="text-primary text-[24px]" />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC (Matte Black)</p>
<p className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">UGX 342,000</p>
</div>
</div>
<div className="pl-1 space-y-1.5">
<div className="flex items-start gap-1.5 text-danger-penalty">
<Icon name="warning" className="text-[16px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm font-bold">Tamper Seal Broken / Customer Unsealed Box at Gate</p>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-1">
<span className="flex items-center gap-1 text-tertiary">
<Icon name="lock_clock" className="text-[14px]" />
              UGX 342,000 Frozen in Escrow Node
            </span>
<span>Today, 11:24 EAT</span>
</div>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-2xl p-space-md transition-colors cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">#DSP-88204</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• #SC-96541</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Anker Prime 67W GaN Wall Charger</p>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-bold">
            Inspection Approved
          </span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container/50 px-space-sm py-1.5 rounded-lg text-body-sm text-on-surface-variant">
<span>UGX 165,000</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="warehouse" className="text-[14px] text-tertiary" />
            Received at Nakasero Hub
          </span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-2xl p-space-md transition-colors cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">#DSP-88190</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• #SC-95210</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">SoundCore Life P3 ANC Earbuds</p>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container/60 text-secondary font-bold">
            Resolved &amp; Swapped
          </span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container/50 px-space-sm py-1.5 rounded-lg text-body-sm text-on-surface-variant">
<span>UGX 240,000</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="two_wheeler" className="text-[14px] text-secondary" />
            Delivered via SafeBoda #412
          </span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container rounded-2xl p-space-md transition-colors cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">#DSP-88162</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• #SC-94002</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Oraimo FreePods 4 ENC</p>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary-fixed font-bold">
            URSB Arbitrated: Won
          </span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container/50 px-space-sm py-1.5 rounded-lg text-body-sm text-on-surface-variant">
<span>UGX 115,000</span>
<span className="text-on-surface-variant">Funds Released to Merchant</span>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Case Docket #DSP-88219</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-bold uppercase tracking-wider">
                Action Required
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              SwiftCart Transit Ledger • SafeBoda Run #SB-412 • Courier: Brian Kizito
            </p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Disputed Amount</span>
<span className="font-price-display text-price-display text-primary">UGX 342,000</span>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex items-start gap-space-sm">
<Icon name="shield_lock" className="text-emerald-escrow text-[22px] shrink-0 mt-0.5" />
<div className="text-body-sm text-on-surface">
<span className="font-bold text-emerald-escrow">Direct Bank of Uganda Escrow Sandbox Hold:</span>
<span> Funds are locked safely in Node 04. Automatic release or reverse-debit occurs only through mutual signoff or URSB dispute arbitrator resolution.</span>
</div>
</div>

<div className="bg-action-gradient-start/15 rounded-xl p-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm text-primary">
<Icon name="alarm" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold">14 hours 22 minutes remaining to respond</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Auto-refund will trigger at tomorrow 03:00 EAT</span>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Customer Claim &amp; Handover Incident</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Submitted via SwiftCart Buyer App</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[11px]">NG</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Nantongo Grace</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified Buyer (14 orders)</span>
</div>
<span className="font-body-sm text-body-sm">11:24 EAT</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed mt-1">
            “Package arrived with torn outer tamper tape. I opened the retail box in front of rider Brian K. and noticed the ear cup plastic wrap was missing. I refused the blind handover code.”
          </p>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Photo Evidence from Buyer &amp; Rider (3 Files)</span>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="open_in_full" className="text-[14px]" />
              Inspect Full-Res
            </button>
</div>
<div className="grid grid-cols-3 gap-space-sm">
<div className="relative group rounded-xl overflow-hidden bg-surface-container-high h-28 cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="A close up detailed macro photograph showing a ripped serialized tamper evident security tape on a black electronics package box, high contrast studio lighting on dark slate surface" src={`${assetBase}/images/1dbde10d40d0aae3.webp`} />
<div className="absolute inset-0 bg-surface-dark/40 flex items-end p-2">
<span className="font-label-sm text-label-sm text-on-primary-container bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">Torn Seal</span>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden bg-surface-container-high h-28 cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Close up photograph of a retail headphones box seam pried open showing internal cardboard tabs slightly crushed with matte black texture in natural outdoor daylight" src={`${assetBase}/images/36345573f09a2e8d.webp`} />
<div className="absolute inset-0 bg-surface-dark/40 flex items-end p-2">
<span className="font-label-sm text-label-sm text-on-primary-container bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">Retail Box Seam</span>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden bg-surface-container-high h-28 cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Street view photo outside a residential gate in Kampala showing an orange helmeted SafeBoda rider holding a cardboard shipping carton with buyer hands visible examining the opened carton" src={`${assetBase}/images/e9988128b94c3381.webp`} />
<div className="absolute inset-0 bg-surface-dark/40 flex items-end p-2">
<span className="font-label-sm text-label-sm text-on-primary-container bg-surface-container-lowest/80 px-1.5 py-0.5 rounded">Rider Handover Gate</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0">
<Icon name="sports_motorsports" className="text-[18px]" />
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface font-bold">Courier Field Note: Brian Kizito (SafeBoda #412)</span>
<span className="font-label-sm text-label-sm text-tertiary">GPS Matched: Kololo Hill Rd</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              “Buyer verified box arrived sealed from Nakasero Hub, but requested inspection before reading out the 6-digit OTP code.”
            </p>
</div>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Choose Merchant Resolution Pathway</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 1 of 1</span>
</div>
<div className="grid grid-cols-1 gap-space-sm">

<label className="relative flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-high cursor-pointer transition-all">
<div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-action-gradient-start"></div>
<input checked={true} className="mt-1 accent-action-gradient-start h-4 w-4" name="claim_resolution" type="radio" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Option A: Accept Return &amp; Authorize Full Refund</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-bold">Recommended • 0% Penalty</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                SafeBoda courier returns package to Nakasero Flagship Hub. Customer is refunded UGX 342,000 immediately upon barcode intake scan. Seller inventory count automatically increments to quarantine status.
              </p>
</div>
</label>

<label className="relative flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all">
<input className="mt-1 accent-action-gradient-start h-4 w-4" name="claim_resolution" type="radio" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Option B: Send Brand New Sealed Replacement</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Priority Dispatch &lt;45m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Dispatch an unopened factory unit directly from Nakasero Hub. SafeBoda performs doorstep simultaneous swap at buyer address before releasing escrow payout.
              </p>
</div>
</label>

<label className="relative flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-all">
<input className="mt-1 accent-action-gradient-start h-4 w-4" name="claim_resolution" type="radio" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Option C: Contest Claim &amp; Escalate to SwiftCart Arbitration</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-danger-penalty/20 text-danger-penalty font-bold">Formal Review</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Contest the claim by providing packing table CCTV footage. Assigned SwiftCart Arbitration Officer: <strong className="text-on-surface">Patricia Namubiru (Lead Dispute Counsel)</strong>.
              </p>
</div>
</label>
</div>

<div className="flex flex-col gap-1.5 mt-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold">Merchant Response Note (Transmitted to Buyer &amp; Hub Dispatch)</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Plain text • No personal phone numbers</span>
</div>
<textarea className="w-full p-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" rows={3}>We apologize for the inconvenience. Our Nakasero hub packs all items in serialized tamper polybags. We accept return for physical inspection.</textarea>
</div>

<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<button className="h-12 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="videocam" className="text-[18px]" />
              Upload CCTV
            </button>
<button className="h-12 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-tertiary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
              Masked WhatsApp
            </button>
</div>
<button className="h-[52px] px-6 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="assignment_turned_in" className="text-[20px]" />
            Submit Response &amp; Issue SafeBoda Return Ticket
          </button>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
