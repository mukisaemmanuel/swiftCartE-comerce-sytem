// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_inbound_return_tamper_inspection_swiftcart_desktop/code.html
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
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest z-40 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm bg-surface-container-lowest"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/3f10b645d293fcfe.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container/20 text-primary uppercase ml-1">Seller</span></div><div className="px-space-md py-space-sm"><div className="bg-surface-container-low rounded-xl p-space-md"><div className="flex items-center gap-space-xs text-tertiary mb-1"><Icon name="verified" className="text-[16px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">URSB Verified Merchant</span></div><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant truncate">Nakasero Flagship Hub</p></div></div><nav className="px-space-md py-space-sm space-y-space-md" data-active-classes="bg-surface-container text-primary font-bold"><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Daily Operations</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="grid_view" className="text-[20px]" /><span className="font-label-md text-label-md">Overview</span></div></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span className="font-label-md text-label-md">Orders</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-bold">14 Pending</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-label-md text-label-md">Products &amp; Inventory</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-error/20 text-error font-bold">2 Low</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-label-md text-label-md">Riders &amp; Logistics</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-bold">6 Active</span></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Post-Purchase</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px]" /><span className="font-label-md text-label-md">Returns &amp; Disputes</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-bold">1 Case</span></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Business &amp; Finance</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-label-md text-label-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary font-bold">14.8M UGX</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="monitoring" className="text-[20px]" /><span className="font-label-md text-label-md">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="campaign" className="text-[20px]" /><span className="font-label-md text-label-md">Discounts &amp; Ads</span></div></a></div><div className="space-y-1"><span className="px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Settings</span><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px]" /><span className="font-label-md text-label-md">Store Profile &amp; KYC</span></div><Icon name="check_circle" className="text-[16px] text-tertiary" /></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-label-md text-label-md">Settings</span></div></a></div></nav></div><div className="p-space-md"><div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-sm"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span></span><div className="leading-tight min-w-0"><p className="font-label-sm text-label-sm text-on-surface truncate font-bold">Kampala Hub Node</p><p className="font-body-sm text-body-sm text-tertiary truncate">Direct Escrow Active</p></div></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/80 backdrop-blur-xl z-30 flex items-center justify-between px-space-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" /><input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm" placeholder="Search orders (UGX), package OTPs, buyer phone, or SKU..." type="text" /></div></div><div className="flex items-center gap-space-md"><button aria-label="Theme Switcher" className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="relative"><button aria-label="Notifications" className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /></button><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-action-gradient-start"></span></div><div className="h-8 w-px bg-surface-container-high mx-1"></div><div className="flex items-center gap-space-sm pl-2"><div className="text-right hidden sm:block"><p className="font-label-md text-label-md text-on-surface font-bold leading-none">Kizito Ronald</p><p className="font-body-sm text-body-sm text-on-surface-variant leading-none mt-1">Store Manager (KR)</p></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex items-center justify-between rounded-xl mb-space-lg shadow-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-amber-warning">
<Icon name="verified_user" className="text-[18px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider">Field Ledger Custody</span>
</div>
<div className="h-3 w-px bg-surface-container-high"></div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
        Ledger Transaction Locked in Nakasero Multi-Sig Escrow Vault
      </p>
</div>
<div className="flex items-center gap-space-sm text-tertiary font-label-sm text-label-sm">
<Icon name="sync_alt" className="text-[16px]" />
<span>Live Node Synced: Kampala Prime GMT+3</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-1">
<nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Post-Purchase</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface">Returns &amp; Disputes</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Inbound Inspection #RTN-4491</span>
</nav>
<div className="flex items-center gap-space-md flex-wrap mt-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Inbound Return &amp; Tamper Seal Inspection</h1>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-md text-label-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span>Physical Inspection Active • Nakasero Flagship Hub #UG-04</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<div className="bg-surface-container-low px-space-md py-2 rounded-xl flex items-center gap-space-sm">
<Icon name="qr_code_scanner" className="text-[18px] text-primary" />
<div className="text-left">
<p className="font-label-sm text-label-sm text-on-surface-variant leading-none">Package Tracking</p>
<p className="font-code-display text-body-sm font-bold text-on-surface tracking-wider leading-tight">#SC-PKG-88219-UG</p>
</div>
</div>
<button className="h-10 px-space-md rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-highest transition-colors shadow-sm" id="btn-print-sheet" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
<span>Print Inspection Sheet</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-surface-container-high text-danger-penalty font-label-md text-label-md flex items-center gap-2 hover:bg-danger-penalty/10 transition-colors shadow-sm" id="btn-escalate" onClick={() => alertToast('Action triggered')}>
<Icon name="priority_high" className="text-[18px]" />
<span>Escalate to Senior Inspector</span>
</button>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-lg mb-space-xl shadow-md">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">

<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<Icon name="headphones" className="text-[16px] text-primary" />
<span>Order #SC-97810 • Dispute #DSP-88219</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC Wireless</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 truncate">
<span>Matte Black</span>
<span>•</span>
<span className="font-code-display text-primary tracking-wide">SN-ANK-994182-EAT</span>
</p>
</div>

<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<Icon name="alt_route" className="text-[16px] text-tertiary" />
<span>Logistics Node Flow</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md truncate">
<span>Nakasero Hub</span>
<Icon name="arrow_forward" className="text-[14px] text-on-surface-variant" />
<span>Kololo Terrace #4</span>
</div>
<div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant truncate">
<Icon name="two_wheeler" className="text-[16px] text-mtn-yellow" />
<span>Boda #412 (Brian Kizito)</span>
<span className="font-code-display text-xs text-on-surface-variant">07•• ••• 419</span>
</div>
</div>

<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<Icon name="inventory" className="text-[16px] text-emerald-escrow" />
<span>Tamper Polybag Seal</span>
</div>
<p className="font-code-display text-body-md font-bold text-tertiary tracking-wider truncate">#SWIFT-BAG-99201-KC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
<span>Verified Intake: Today, 14:02 EAT</span>
</p>
</div>

<div className="flex flex-col justify-between bg-surface-container rounded-lg p-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">E-Waybill Barcode</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-bold">MATCHED</span>
</div>

<div className="flex items-center justify-center gap-0.5 py-1 text-on-surface opacity-85">
<div className="h-7 w-1 bg-current"></div>
<div className="h-7 w-0.5 bg-current"></div>
<div className="h-7 w-2 bg-current"></div>
<div className="h-7 w-0.5 bg-current"></div>
<div className="h-7 w-1.5 bg-current"></div>
<div className="h-7 w-1 bg-current"></div>
<div className="h-7 w-0.5 bg-current"></div>
<div className="h-7 w-2 bg-current"></div>
<div className="h-7 w-1 bg-current"></div>
<div className="h-7 w-0.5 bg-current"></div>
<div className="h-7 w-1 bg-current"></div>
<div className="h-7 w-2 bg-current"></div>
<div className="h-7 w-0.5 bg-current"></div>
<div className="h-7 w-1.5 bg-current"></div>
<div className="h-7 w-1 bg-current"></div>
</div>
<span className="font-code-display text-center text-xs text-on-surface-variant tracking-widest block">RTN-4491-UG-KLA</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<section className="lg:col-span-7 flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="h-7 w-7 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-md">5</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Physical Verification Pipeline</h2>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-2 py-1 rounded">Protocol v3.4 Active</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm transition-all hover:bg-surface-container">
<div className="flex items-start justify-between gap-space-md mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center font-bold text-label-md">01</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">External SwiftCart Tamper Polybag Seal</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous vacuum heat-seam and void-ink telemetry inspection</p>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[14px]" />
<span>PASSED - INTACT</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-md mt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span>Void pattern: <strong className="text-on-surface">No Exposure Detected</strong></span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="qr_code_2" className="text-tertiary text-[18px]" />
<span>Polybag SN: <strong className="text-on-surface font-code-display text-xs">#SWIFT-BAG-99201-KC</strong></span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm transition-all hover:bg-surface-container">
<div className="flex items-start justify-between gap-space-md mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center font-bold text-label-md">02</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Retail Packaging &amp; Barcode Hologram</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manufacturer shrinkwrap integrity and Anker holographic anti-counterfeit seal</p>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[14px]" />
<span>FLAGGED - OPENED SEAL</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-md mt-space-sm flex flex-col gap-2 font-body-sm text-body-sm">
<p className="text-on-surface">Retail box shrinkwrap cleanly unsealed at customer home. Anker security hologram sticker slit horizontally along top box flap.</p>
<div className="flex items-center gap-2 text-on-surface-variant text-xs">
<Icon name="info" className="text-amber-warning text-[16px]" />
<span>Requires Open-Box grade verification under SwiftCart RMA rules.</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm transition-all hover:bg-surface-container">
<div className="flex items-start justify-between gap-space-md mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center font-bold text-label-md">03</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Hardware Serial Number Verification</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Physical headset laser-etched serial against outbound dispatch manifest</p>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="fact_check" className="text-[14px]" />
<span>100% MATCH</span>
</div>
</div>
<div className="mt-space-sm space-y-space-sm">
<div className="relative w-full">
<Icon name="check" className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-[20px]" />
<input className="w-full h-11 pl-10 pr-24 rounded-lg bg-surface-container-lowest text-tertiary font-code-display text-body-md font-bold focus:outline-none" readOnly={true} type="text" value="SN-ANK-994182-EAT" />
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">Scanned 14:04</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Original Outbound Dispatch Log: <span className="text-on-surface font-semibold">2024-10-18 09:12 EAT by Dispatch Node Kampala #01</span></p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-bold text-label-md">04</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Physical Hardware &amp; Accessories Inventory</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Checklist verification for all in-box accessories and aesthetic state</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">5/5 Verified</span>
</div>
<div className="space-y-space-xs mt-space-sm">
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md text-on-surface">Headphones Unit</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded bg-tertiary/10">Present • Pristine • 0 Scratches</span>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md text-on-surface">3.5mm AUX Audio Cable</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded bg-tertiary/10">Present • Sealed Original Twist-Tie</span>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md text-on-surface">Braided USB-C Fast Charging Cable</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded bg-tertiary/10">Present • Factory Band Intact</span>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md text-on-surface">SoundCore Travel Pouch</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded bg-tertiary/10">Present • Flawless Velvet</span>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md text-on-surface">User Manual &amp; Safety Guide</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded bg-tertiary/10">Present • Pristine Fold</span>
</label>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center font-bold text-label-md">05</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface">Power-On &amp; Diagnostic Quick Check</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Bluetooth bench test &amp; acoustic hardware frequency sweep</p>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="electric_bolt" className="text-[14px]" />
<span>DIAGNOSTICS HEALTHY</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-sm">

<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase">Battery Health</span>
<Icon name="battery_charging_90" className="text-[18px] text-tertiary" />
</div>
<p className="font-headline-md text-headline-md text-on-surface font-bold mt-2">88%</p>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Li-Po Cells Balanced
            </p>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase">ANC Toggle</span>
<Icon name="noise_aware" className="text-[18px] text-primary" />
</div>
<p className="font-headline-md text-headline-md text-on-surface font-bold mt-2">Operational</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
<span>Dual Mic Arrays OK</span>
</p>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase">Bluetooth Node</span>
<Icon name="bluetooth_connected" className="text-[18px] text-secondary" />
</div>
<p className="font-headline-md text-headline-md text-on-surface font-bold mt-2">BT 5.3 Active</p>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-1">
<span>LDAC Codec Passed</span>
</p>
</div>
</div>
</div>
</section>

<section className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Inspection Camera Feed</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">High-Res physical evidence captured by Kizito Ronald</p>
</div>
<Icon name="photo_camera" className="text-primary text-[20px]" />
</div>

<div className="grid grid-cols-2 gap-space-sm mb-space-sm">

<div className="col-span-2 relative h-48 rounded-lg overflow-hidden group shadow-inner">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Macro close-up photograph of black SoundCore Space One over-ear noise-cancelling headphones resting on an anti-static blue electronics inspection bench in Nakasero Kampala. Clear lighting highlights the flawless matte black earcups and laser etched logo under neutral workbench illumination." src={`${assetBase}/images/53b9a9868a5d0e4f.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent flex items-end p-space-sm">
<div className="flex items-center justify-between w-full">
<span className="font-label-sm text-label-sm text-on-surface font-bold bg-surface-container-low/90 px-2 py-0.5 rounded backdrop-blur">Frame #01: Headphone Cradle &amp; Cushions</span>
<span className="font-label-sm text-label-sm text-tertiary">Passed</span>
</div>
</div>
</div>

<div className="relative h-32 rounded-lg overflow-hidden group shadow-inner">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Close up detailed shot of retail product packaging box seal for audio headphones. An Anker holographic security sticker is cleanly sliced across the cardboard seam, showing broken shrinkwrap with holographic reflections under indoor LED light." src={`${assetBase}/images/6549d0f5cd6878ec.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent flex items-end p-2">
<span className="font-label-sm text-label-sm text-amber-warning bg-surface-dark/80 px-1.5 py-0.5 rounded">Frame #02: Sliced Seal</span>
</div>
</div>

<div className="relative h-32 rounded-lg overflow-hidden group shadow-inner">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Crisp macro detail photo of a white paper product serial number barcode sticker on the side of a black electronics box. Text clearly reads SN-ANK-994182-EAT sharp and legible in high focus." src={`${assetBase}/images/0fed8702ca601407.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent flex items-end p-2">
<span className="font-label-sm text-label-sm text-tertiary bg-surface-dark/80 px-1.5 py-0.5 rounded">Frame #03: Serial Barcode</span>
</div>
</div>
</div>
<button className="w-full py-2 bg-surface-container rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="add_a_photo" className="text-[16px]" />
<span>Attach Secondary Macro Image (Optional)</span>
</button>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Restockability Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Determine downstream warehouse destination &amp; buyer re-sale grade</p>
<div className="space-y-space-sm" id="disposition-selector">

<label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container cursor-pointer transition-all">
<input checked={true} className="mt-1 accent-action-gradient-start" name="disposition_choice" type="radio" value="open_box" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Restock as 'Open Box - Verified Pristine'</span>
<span className="font-label-sm text-label-sm text-tertiary px-1.5 py-0.5 rounded bg-tertiary/15">Recommended</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Deduct 5% promotional re-tag fee. Item returns to active Nakasero flagship store stock immediately.</p>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
<input className="mt-1 accent-action-gradient-start" name="disposition_choice" type="radio" value="factory_rma" />
<div className="flex-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Return to Anker Factory Depot / Warranty RMA</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Route to Kampala Industrial Area distribution consolidation hub for regional RMA return.</p>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
<input className="mt-1 accent-action-gradient-start" name="disposition_choice" type="radio" value="reject" />
<div className="flex-1">
<span className="font-label-lg text-label-lg text-danger-penalty font-bold">Reject Return (Misuse or Item Swap)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Deny escrow release to customer. Initiate fraud investigation with SwiftCart Risk Dept.</p>
</div>
</label>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Financial Disposition</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated ledger resolution via SwiftCart Escrow Smart-Lock</p>
</div>
<span className="font-label-sm text-label-sm px-2 py-1 rounded bg-emerald-escrow/10 text-emerald-escrow font-bold flex items-center gap-1">
<Icon name="lock_open" className="text-[14px]" />
<span>ESCROW READY</span>
</span>
</div>
<div className="space-y-space-sm mb-space-md">
<div className="flex items-center justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Original Item Value</span>
<span className="font-price-display text-body-lg text-on-surface font-bold">UGX 342,000</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md">
<span className="text-on-surface-variant flex items-center gap-1">
<span>Restocking &amp; Re-bagging Fee</span>
<Icon name="info" className="text-[14px] text-tertiary" />
</span>
<span className="font-label-md text-label-md text-tertiary">- UGX 10,000 <span className="text-xs text-on-surface-variant">(Fund Covered)</span></span>
</div>
<div className="h-px bg-surface-container-high my-space-xs"></div>
<div className="flex items-center justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface">Net Buyer Refund</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
<span>MTN Mobile Money Instant Payout</span>
</p>
</div>
<span className="font-price-display text-price-display text-emerald-escrow font-bold">UGX 342,000</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest mt-space-sm flex items-start gap-2">
<Icon name="add_shopping_cart" className="text-tertiary text-[18px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
<strong className="text-on-surface">Merchant Inventory Balance:</strong> Nakasero store balance will be credited with +1 Unit (Open Box) upon submission.
            </p>
</div>
</div>

<div className="pt-space-sm space-y-space-md">
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-label-md text-label-md">
              KR
            </div>
<div className="flex-1 min-w-0">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Inspector Authorization</p>
<p className="font-label-md text-label-md text-on-surface truncate font-bold">Kizito Ronald</p>
<p className="font-body-sm text-body-sm text-tertiary truncate">Store General Manager • Nakasero Flagship</p>
</div>
<Icon name="verified" className="text-tertiary text-[20px]" />
</div>

<div className="flex flex-col gap-space-sm">
<button className="w-full h-12 rounded-xl text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-action-gradient-end/30 bg-gradient-to-r from-action-gradient-start to-action-gradient-end" id="btn-confirm-verdict" onClick={() => alertToast('Action triggered')}>
<Icon name="check_circle" className="text-[20px]" />
<span>Confirm Inspection &amp; Release Escrow</span>
</button>
<button className="w-full h-10 rounded-lg bg-surface-container-high text-danger-penalty font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-danger-penalty/10 transition-colors" id="btn-arbitrate" onClick={() => alertToast('Action triggered')}>
<Icon name="gavel" className="text-[18px]" />
<span>Flag Discrepancy &amp; Route to Arbitration</span>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="fixed bottom-6 right-6 bg-surface-container-high text-on-surface p-space-md rounded-xl shadow-2xl flex items-center gap-space-md transition-all duration-300 translate-y-24 opacity-0 pointer-events-none z-50" id="toast-modal">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="task_alt" className="text-[20px]" />
</div>
<div>
<p className="font-label-md text-label-md font-bold" id="toast-title">Inspection Confirmed</p>
<p className="font-body-sm text-body-sm text-on-surface-variant" id="toast-desc">UGX 342,000 released to buyer via MTN MoMo.</p>
</div>
</div>

</div></main></div>
    </div>
  );
};

export default Screen;
