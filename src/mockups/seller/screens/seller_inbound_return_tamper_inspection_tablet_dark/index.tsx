// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_inbound_return_tamper_inspection_tablet_dark/code.html
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
      <aside className="fixed left-0 top-0 bottom-0 w-[72px] bg-container-dark-low z-50 flex flex-col items-center py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="h-12 w-12 flex items-center justify-center mb-space-md rounded-xl bg-surface-container-high"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /></div><nav className="flex-1 flex flex-col gap-space-xs items-center w-full px-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]"><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="receipt_long" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[24px]" /></a><a aria-current="page" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]" data-path="returns-and-disputes" href="#" title="Returns & Disputes" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="wallet" href="#" title="Escrow & Wallet" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[24px]" /></a></nav><div className="flex flex-col gap-space-xs items-center w-full px-space-xs pt-space-xs"><a className="relative w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-airtel-red"></span></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[24px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-16 bg-surface-dark/95 backdrop-blur-xl z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.3)]"><div className="flex items-center gap-space-md min-w-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex items-center gap-space-xs bg-container-dark-low px-space-md py-1.5 rounded-xl"><Icon name="store" className="text-primary text-[18px]" /><div className="flex flex-col min-w-0"><span className="font-label-md text-on-surface truncate">Victoria Tech Supplies</span><span className="font-label-sm text-on-surface-variant truncate">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-on-surface-variant text-[18px] ml-space-xs" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center bg-container-dark-low px-space-md py-1.5 rounded-xl w-56"><Icon name="search" className="text-on-surface-variant text-[18px] mr-space-xs" /><span className="font-body-sm text-on-surface-variant select-none">Search orders, SKUs...</span></div><button className="w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-airtel-red text-on-primary-container font-label-sm flex items-center justify-center px-1">4</span></button><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-on-primary">VT</div></div></div></header><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="px-space-md py-space-md flex flex-col gap-space-lg w-full max-w-[1240px] mx-auto">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-container-dark-low p-space-md rounded-xl shadow-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-label-sm uppercase tracking-wider text-primary font-bold">Inbound Reverse Logistics</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface">
<Icon name="local_shipping" className="text-[14px] text-amber-warning" />
<span className="font-label-sm">Return #RT-309 • In Transit via Boda</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm">
<Icon name="verified" className="text-[13px]" />
            Escrow Shield Active
          </span>
</div>
<h1 className="font-headline-md text-on-surface tracking-tight">Inbound Return Inspection &amp; Acceptance</h1>
</div>
<div className="flex items-center gap-space-md self-start lg:self-center">
<div className="bg-surface-container px-space-md py-2 rounded-lg flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-amber-warning animate-ping"></div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant">Live Dispatch SLA</span>
<span className="font-label-lg text-amber-warning">Rider Arrival ETA: 12 Mins</span>
</div>
</div>
<div className="bg-surface-container-high px-space-md py-2 rounded-lg flex items-center gap-2">
<Icon name="pin_drop" className="text-primary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant">Arrival Hub</span>
<span className="font-label-md text-on-surface">Nakasero Bay Hub</span>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-high rounded-xl p-space-md shadow-md">
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md items-center">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0">
<img className="w-12 h-12 object-contain rounded-lg" data-alt="High-end SoundCore Space One active noise cancelling wireless headphones in matte charcoal black folded neatly inside its retail packaging with accessories, shot on a dark industrial surface with high-contrast commercial lighting." src={`${assetBase}/images/16bf4468d333df9c.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface-variant uppercase">Order Ref #SC-9488</span>
<span className="font-label-lg text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-price-display text-primary-fixed-dim mt-0.5">UGX 248,500</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-container-dark-low p-space-sm rounded-lg">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface-variant">Courier Assigned</span>
<span className="font-label-md text-on-surface truncate">Kizito Brian</span>
<span className="font-body-sm text-on-surface-variant truncate">Bajaj Boxer • #UFE 219K</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-container-dark-low p-space-sm rounded-lg">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<Icon name="location_on" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-on-surface-variant">Origin Point</span>
<span className="font-label-md text-on-surface truncate">Buyer Kololo Terrace</span>
<span className="font-body-sm text-on-surface-variant truncate">Buyer: 07•• ••• 123 (Masked)</span>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-md">
<div className="flex flex-col text-right">
<span className="font-label-sm text-on-surface-variant">Return Reason</span>
<span className="font-label-md text-primary">Buyer remorse / sealed</span>
</div>
<div className="px-3 py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow flex items-center gap-1.5 font-label-md shrink-0">
<Icon name="lock" className="text-[16px]" />
            UGX Locked
          </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-start">

<div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-space-md w-full">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="security" className="text-primary text-[22px]" />
<h2 className="font-headline-sm text-on-surface">SwiftCart Tamper Bag Security Check</h2>
</div>
<span className="font-label-sm text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded-full">Protocol 4.2</span>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Step 1: Inbound Barcode Serial</span>
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm bg-emerald-escrow/10 px-2 py-0.5 rounded-full">
<Icon name="check_circle" className="text-[12px]" />
                Verified Matching Security Serial
              </span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<div className="flex-1 bg-container-dark-high px-space-md py-2.5 rounded-lg flex items-center justify-between">
<span className="font-code-display text-on-surface tracking-widest text-[16px]">TB-KLA-8820-91X</span>
<Icon name="qr_code_scanner" className="text-emerald-escrow text-[20px]" />
</div>
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-container-dark-high text-on-surface font-label-md flex items-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="document_scanner" className="text-[18px]" />
                Rescan
              </button>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Step 2: Physical Seal Condition</span>
<div className="grid grid-cols-2 gap-space-sm" id="seal-toggle-group">
<button className="h-12 rounded-lg bg-emerald-escrow/15 text-emerald-escrow font-label-lg flex items-center justify-center gap-2 transition-all" id="seal-intact-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check_box" className="text-[20px]" />
                Intact &amp; Sealed
              </button>
<button className="h-12 rounded-lg bg-surface-container-high hover:bg-container-dark-high text-on-surface-variant font-label-lg flex items-center justify-center gap-2 transition-all" id="seal-broken-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="report_problem" className="text-[20px]" />
                Broken / Tampered
              </button>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Step 3: Contents Inventory Manifest</span>
<div className="flex flex-col gap-1.5">
<label className="flex items-center gap-space-sm p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input checked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-action-gradient-start cursor-pointer" type="checkbox" />
<div className="flex flex-col">
<span className="font-body-md text-on-surface font-semibold">Original Headset Present</span>
<span className="font-body-sm text-on-surface-variant">SoundCore ANC driver chassis matching serial #SC-ANC-8802</span>
</div>
</label>
<label className="flex items-center gap-space-sm p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input checked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-action-gradient-start cursor-pointer" type="checkbox" />
<div className="flex flex-col">
<span className="font-body-md text-on-surface font-semibold">Audio Jack &amp; USB-C Cable Intact</span>
<span className="font-body-sm text-on-surface-variant">Braided nylon charging cable in original plastic ties</span>
</div>
</label>
<label className="flex items-center gap-space-sm p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input checked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-action-gradient-start cursor-pointer" type="checkbox" />
<div className="flex flex-col">
<span className="font-body-md text-on-surface font-semibold">Original Retail Box &amp; Protective Foam</span>
<span className="font-body-sm text-on-surface-variant">Uncut inner blister tray and bilingual user guide</span>
</div>
</label>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="photo_camera" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-on-surface">Captured Inspection Evidence</h3>
</div>
<span className="font-label-sm text-on-surface-variant">2 Photos Attached</span>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="relative group rounded-xl overflow-hidden bg-surface-container-lowest">
<img className="w-full h-36 object-cover transition-transform group-hover:scale-105" data-alt="Close up detailed inspection macro photograph of a transparent tamper-evident security plastic bag with unbroken red holographic micro-print numbered seal TB-KLA-8820-91X, clean laboratory inspection bench in background." src={`${assetBase}/images/eba3c3dcd07aef25.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent flex flex-col justify-end p-2.5">
<span className="font-label-sm text-on-surface truncate">Front_Seal_Inspection.jpg</span>
<span className="font-body-sm text-tertiary">Verified Tamper Ribbon</span>
</div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-surface-dark/80 text-[10px] font-label-sm text-on-surface">1.8 MB</div>
</div>
<div className="relative group rounded-xl overflow-hidden bg-surface-container-lowest">
<img className="w-full h-36 object-cover transition-transform group-hover:scale-105" data-alt="Macro photo showing the engraved laser serial number on the inner headband of SoundCore wireless headphones matching official product documentation on dark matte workbench with yellow safety lighting." src={`${assetBase}/images/29b8970bdfffe825.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent flex flex-col justify-end p-2.5">
<span className="font-label-sm text-on-surface truncate">Serial_Number_Match.jpg</span>
<span className="font-body-sm text-tertiary">Hardware Hash Aligned</span>
</div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-surface-dark/80 text-[10px] font-label-sm text-on-surface">2.4 MB</div>
</div>
</div>
<button className="w-full h-11 rounded-lg bg-surface-container-high hover:bg-container-dark-high text-on-surface font-label-md flex items-center justify-center gap-2 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_a_photo" className="text-[18px]" />
            Capture Additional Angle (Camera Sync)
          </button>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Physical Condition Grade</span>
<span className="font-label-sm text-primary">Victoria Tech QA Specs</span>
</div>
<div className="grid grid-cols-1 gap-2" id="condition-rating-group">
<div className="condition-pill p-3 rounded-lg bg-primary-container/20 text-on-primary-container cursor-pointer flex items-center justify-between transition-all" data-grade="A">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-action-gradient-start"></span>
<div className="flex flex-col">
<span className="font-label-lg">Like New / Resellable (Grade A)</span>
<span className="font-body-sm text-on-surface-variant">Immediate shelf reintegration; zero cosmetic marks</span>
</div>
</div>
<span className="font-label-sm font-bold px-2 py-0.5 rounded bg-primary-container text-white">Full Refund</span>
</div>
<div className="condition-pill p-3 rounded-lg bg-surface-container-high text-on-surface cursor-pointer flex items-center justify-between transition-all opacity-80 hover:opacity-100" data-grade="B">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-amber-warning"></span>
<div className="flex flex-col">
<span className="font-label-lg">Opened Packaging Only (Grade B)</span>
<span className="font-body-sm text-on-surface-variant">Requires re-shrink wrap; unit untouched</span>
</div>
</div>
<span className="font-label-sm px-2 py-0.5 rounded bg-surface-container text-amber-warning">10% Restock</span>
</div>
<div className="condition-pill p-3 rounded-lg bg-surface-container-high text-on-surface cursor-pointer flex items-center justify-between transition-all opacity-80 hover:opacity-100" data-grade="C">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-danger-penalty"></span>
<div className="flex flex-col">
<span className="font-label-lg">Damaged / Missing Parts</span>
<span className="font-body-sm text-on-surface-variant">Accessories absent, scratches, or moisture exposure</span>
</div>
</div>
<span className="font-label-sm px-2 py-0.5 rounded bg-surface-container text-danger-penalty">Dispute Escrow</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-space-md w-full">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="account_balance" className="text-emerald-escrow text-[22px]" />
<h2 className="font-headline-sm text-on-surface">Escrow Disposition &amp; Release</h2>
</div>
<div className="flex items-center gap-1 text-on-tertiary-fixed font-label-sm bg-tertiary-container px-2 py-0.5 rounded-full">
<Icon name="lock_clock" className="text-[13px]" />
              MTN / Airtel Trust Link
            </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex justify-between items-start">
<div>
<span className="font-label-sm text-on-surface-variant uppercase">Current Escrow Balance Locked</span>
<div className="font-price-display text-emerald-escrow text-[28px] mt-1">UGX 248,500</div>
</div>
<div className="text-right">
<span className="font-label-sm text-on-surface-variant">Hold Vault ID</span>
<span className="font-code-display text-on-surface block text-[13px] mt-1">ESC-UG-2024-991</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"100%"}}></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm pt-1">
<span>Protection: SwiftCart Buyer-Merchant Guarantee</span>
<span className="text-emerald-escrow font-label-sm">Safe to Disburse</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Recommended Resolution Action</span>
<div className="flex flex-col gap-2" id="resolution-options">
<label className="p-3.5 rounded-xl bg-surface-container-high cursor-pointer flex items-start gap-3 transition-all hover:bg-container-dark-high">
<input checked={true} className="mt-1 w-4 h-4 text-action-gradient-start accent-action-gradient-start cursor-pointer" name="escrow-resolution" type="radio" />
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-on-surface">Accept Item &amp; Authorize Buyer Escrow Refund</span>
<span className="font-label-md text-emerald-escrow">UGX 248,500 Refund</span>
</div>
<span className="font-body-sm text-on-surface-variant mt-0.5">Physical goods certified Grade A. Buyer refunded to original MTN MoMo wallet within 15 minutes.</span>
</div>
</label>
<label className="p-3.5 rounded-xl bg-surface-container-low cursor-pointer flex items-start gap-3 transition-all hover:bg-container-dark-high opacity-85">
<input className="mt-1 w-4 h-4 text-action-gradient-start accent-action-gradient-start cursor-pointer" name="escrow-resolution" type="radio" />
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-on-surface">Deduct 10% Restocking Fee for Opened Seal</span>
<span className="font-label-md text-amber-warning">UGX 24,850 Retained</span>
</div>
<span className="font-body-sm text-on-surface-variant mt-0.5">Deducts UGX 24,850 compensation credited to Victoria Tech Supplies balance; balance UGX 223,650 returned to buyer.</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Hub Inventory Staging Destination</span>
<div className="relative">
<select className="w-full h-12 bg-surface-container-high text-on-surface font-body-md rounded-lg px-space-md pr-10 appearance-none focus:outline-none focus:ring-1 focus:ring-primary">
<option selected={true} value="shelf-b4">Return to Victoria Tech Staging Shelf B4 - Ready for Sale</option>
<option value="quarantine">Quarantine Bay for Vendor Hardware Testing</option>
<option value="bulk-warehouse">Central Industrial Warehouse - Namanve Distribution Staging</option>
<option value="writeoff">Damaged Goods Scrap Quarantine (RTV Protocol)</option>
</select>
<Icon name="expand_more" className="text-on-surface-variant absolute right-3 top-3 pointer-events-none text-[22px]" />
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant font-bold">QA Inspector Authorization</span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> Verified Terminal
              </span>
</div>
<div className="flex items-center gap-space-sm bg-container-dark-high p-2.5 rounded-lg">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md shrink-0">
                MS
              </div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-on-surface truncate">Michael Sserwadda</span>
<span className="font-body-sm text-on-surface-variant truncate">Victoria Tech Quality Desk Officer • Staff ID #VT-044</span>
</div>
<div className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-primary-fixed-dim font-code-display text-[13px]">
                PIN: • • • •
              </div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-2">
<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 transition-all" id="confirm-inbound-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="assignment_turned_in" className="text-[20px]" />
              Confirm Inbound Acceptance &amp; Release Resolution
            </button>
<button className="w-full h-[48px] rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty font-label-md flex items-center justify-center gap-2 transition-all" id="dispute-btn" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="gavel" className="text-[18px]" />
              Report Tamper Violation to Dispute Officer Patricia
            </button>
</div>
<div className="flex items-center justify-center gap-2 text-on-surface-variant font-body-sm pt-1">
<Icon name="lock" className="text-[14px]" />
            Cryptographic ledger stamp will be recorded on SwiftCart Settlement Block #89201
          </div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
