// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_inbound_return_tamper_inspection_tablet_light/code.html
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
      <aside className="fixed left-0 top-0 h-full w-[72px] bg-surface-container-lowest z-50 flex flex-col items-center py-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-surface-container-high"><div className="flex flex-col items-center mb-6"><a className="group flex flex-col items-center justify-center p-1 rounded-xl hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><img alt="swiftcart-logo-final.png" className="h-8 w-8 object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-label-sm text-label-sm text-primary font-bold mt-1 tracking-tighter">SWIFT</span></a></div><nav className="flex-1 w-full px-2 flex flex-col items-center gap-2" data-active-classes="bg-primary-container text-on-primary font-bold shadow-sm"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group relative" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_shipping" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="disputes-returns" href="#" title="Disputes & Returns" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="wallet" href="#" title="Wallet & Escrow" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="insights" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group relative" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-surface-container-lowest">4</span></a></nav><div className="w-full px-2 flex flex-col items-center gap-2 pt-2 border-t border-surface-container-high"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[22px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-[60px] bg-surface-container-lowest z-40 flex items-center justify-between px-space-lg shadow-[0_1px_4px_rgba(0,0,0,0.03)] border-b border-surface-container-high"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-low rounded-lg border border-surface-container cursor-pointer hover:bg-surface-container transition-colors"><Icon name="storefront" className="text-primary text-[18px]" /><div className="flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface leading-tight">Victoria Tech Supplies</span><span className="font-label-sm text-label-sm text-secondary leading-none">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-secondary text-[16px] ml-1" /></div></div><div className="flex-1 max-w-sm mx-space-md"><div className="relative flex items-center w-full"><Icon name="search" className="absolute left-3 text-secondary text-[18px]" /><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search orders, SKUs, disputes..." type="text" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center p-0.5 bg-surface-container rounded-lg border border-surface-container-high"><button className="p-1 rounded-md bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[16px]" /></button><button className="p-1 rounded-md text-secondary hover:text-on-surface flex items-center justify-center" title="Dark Mode" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[16px]" /></button></div><a className="relative p-1.5 text-secondary hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors" data-path="notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-container-lowest"></span></a><div className="flex items-center gap-space-xs pl-2 border-l border-surface-container-high"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface">VT Admin</span><span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>Verified</span></div></div></div></header><div className="fixed top-[60px] left-[72px] right-0 h-7 bg-surface-container-low border-b border-surface-container-high z-30 px-space-lg flex items-center justify-between text-on-secondary-container"><div className="flex items-center gap-space-xs font-label-sm text-label-sm overflow-hidden text-ellipsis whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-semibold text-on-surface">Nakasero Mesh Relay Active</span><span className="text-outline">|</span><span>Last synced 12s ago via MTN MoMo Gateway</span><span className="text-outline">|</span><span className="text-tertiary font-semibold flex items-center gap-0.5"><Icon name="verified_user" className="text-[13px]" /> Escrow Enforced</span></div><div className="font-label-sm text-label-sm text-secondary font-mono tracking-wide">Hub Node UG-OPS-04</div></div><main className="w-full pt-[88px] min-h-screen bg-surface px-space-lg py-space-md"><div className="flex flex-col w-full gap-space-md">

<section className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-container text-on-primary">
<Icon name="sync_alt" className="text-[20px]" />
</span>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Inbound Reverse Logistics</span>
<span className="text-outline text-xs">•</span>
<span className="font-label-md text-label-md font-extrabold text-on-surface">Return #RT-309</span>
<span className="bg-tertiary text-on-tertiary px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-surface animate-ping"></span>
              In Transit via Boda
            </span>
</div>
<span className="font-body-sm text-body-sm text-secondary">SwiftCart Anti-Tamper Intake Terminal • Protocol 4.2 Activated</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1.5 rounded-lg text-on-surface-variant font-label-sm text-label-sm font-semibold">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
          Escrow Shield Active
        </div>
<div className="flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed-variant px-3 py-1.5 rounded-lg font-label-sm text-label-sm font-bold">
<Icon name="schedule" className="text-[16px] animate-pulse" />
          Rider Arrival ETA: 12 Mins
        </div>
<div className="hidden sm:flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<Icon name="warehouse" className="text-[16px]" />
          Arrival Hub: Nakasero Bay Hub
        </div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-space-md items-center">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Order Reference</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-1">
          #SC-9488
          <Icon name="verified" className="text-[16px] text-tertiary" />
</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SoundCore Space One ANC</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Secured Escrow Value</span>
<span className="font-label-lg text-label-lg font-extrabold text-primary">UGX 248,500</span>
<span className="font-label-sm text-label-sm text-tertiary font-medium">Locked in SwiftVault</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Designated Courier</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px] text-secondary" />
          Kizito Brian
        </span>
<span className="font-body-sm text-body-sm text-secondary">Bajaj Boxer #UFE 219K</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Origin Location</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Kololo Terrace</span>
<span className="font-body-sm text-body-sm text-secondary">Residential Drop Node 3</span>
</div>
<div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col justify-center bg-surface-container-low p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Claim Type</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Buyer Remorse / Sealed</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Pre-authorized Return</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-6 rounded-full bg-primary-container inline-block"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Tamper Bag Security Check</h2>
</div>
<span className="bg-surface-container px-2.5 py-1 rounded-md font-label-sm text-label-sm font-bold text-secondary">Protocol 4.2</span>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Step 1: Inbound Barcode &amp; Bag Serial</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
              Verified Matching Security Serial
            </span>
</div>
<div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-lg mt-1">
<div className="flex items-center gap-3">
<Icon name="qr_code_scanner" className="text-secondary text-[24px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-mono font-bold tracking-wider text-on-surface">TB-KLA-8820-91X</span>
<span className="font-body-sm text-body-sm text-secondary">Verified by Hub Scanner #04 at 14:31 EAT</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[16px]" />
              Rescan
            </button>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface">Step 2: Physical Security Seal Condition</span>
<div className="grid grid-cols-2 gap-space-sm">
<label className="flex items-center justify-between p-space-md rounded-xl bg-tertiary text-on-tertiary cursor-pointer shadow-sm">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Intact &amp; Sealed</span>
<span className="font-label-sm text-label-sm opacity-90">Micro-ribbon unbroken</span>
</div>
</div>
<input checked={true} className="w-4 h-4 accent-surface" name="seal_status" type="radio" />
</label>
<label className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<Icon name="gpp_bad" className="text-[20px] text-error" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Broken / Tampered</span>
<span className="font-label-sm text-label-sm text-secondary">Trigger dispute intake</span>
</div>
</div>
<input className="w-4 h-4 accent-primary" name="seal_status" type="radio" />
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Step 3: Contents Inventory Manifest</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">3 of 3 Verified</span>
</div>
<div className="space-y-2">
<label className="flex items-center justify-between p-space-sm px-space-md rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Original SoundCore Space One ANC Unit Present</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-surface-container-lowest px-2 py-0.5 rounded">Serial Validated</span>
</label>
<label className="flex items-center justify-between p-space-sm px-space-md rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md font-semibold text-on-surface">3.5mm Audio Cable &amp; Braided USB-C Cord</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold bg-surface-container-lowest px-2 py-0.5 rounded">Factory Tied</span>
</label>
<label className="flex items-center justify-between p-space-sm px-space-md rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<Icon name="check_box" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Original Retail Outer Sleeve &amp; Molded Inner Foam</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold bg-surface-container-lowest px-2 py-0.5 rounded">Undamaged</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Captured Inspection Evidence</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">Sync Relay ID: CAM-T8-02</span>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
<div className="relative h-32 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="High contrast crisp photo of a tamper evident security bag seal with printed barcode and green verification stripe on a clean stainless steel retail intake desk under bright inspection warehouse lights" src={`${assetBase}/images/7a91a5ccb8c19272.webp`} />
<div className="absolute top-2 left-2 bg-inverse-surface/80 text-inverse-on-surface px-2 py-0.5 rounded font-label-sm text-label-sm">
                  Bag Front Seal
                </div>
</div>
<div className="p-2 flex items-center justify-between bg-surface-container-lowest">
<span className="font-label-sm text-label-sm font-mono text-on-surface">Front_Seal_Inspection.jpg</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Passed</span>
</div>
</div>
<div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
<div className="relative h-32 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Close up macro photograph of a serial number sticker on electronics packaging showing clean typography TB-KLA-8820-91X matching verification documents on a bright desktop" src={`${assetBase}/images/353a6f8c638c1b18.webp`} />
<div className="absolute top-2 left-2 bg-inverse-surface/80 text-inverse-on-surface px-2 py-0.5 rounded font-label-sm text-label-sm">
                  Serial Number Match
                </div>
</div>
<div className="p-2 flex items-center justify-between bg-surface-container-lowest">
<span className="font-label-sm text-label-sm font-mono text-on-surface">Serial_Number_Match.jpg</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Passed</span>
</div>
</div>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-colors mt-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[18px]" />
            Capture Additional Angle (Camera Sync)
          </button>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface">Physical Condition Grading</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<div className="p-3 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex flex-col justify-between cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-extrabold">Grade A</span>
<Icon name="check_circle" className="text-[18px]" />
</div>
<span className="font-label-sm text-label-sm font-bold mt-1">Like New / Resellable</span>
<span className="font-body-sm text-body-sm text-on-primary-fixed-variant mt-0.5 opacity-90">100% Escrow Refund to Buyer</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col justify-between cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-secondary">Grade B</span>
<Icon name="radio_button_unchecked" className="text-[18px] text-secondary" />
</div>
<span className="font-label-sm text-label-sm font-bold mt-1">Opened Packaging Only</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">10% Restock Deducted</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col justify-between cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-secondary">Grade C</span>
<Icon name="radio_button_unchecked" className="text-[18px] text-secondary" />
</div>
<span className="font-label-sm text-label-sm font-bold mt-1">Damaged / Missing Parts</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Escrow Dispute Freeze</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-6 rounded-full bg-tertiary-container inline-block"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Escrow Disposition</h2>
</div>
<span className="bg-surface-container px-2.5 py-1 rounded-md font-label-sm text-label-sm font-mono font-bold text-secondary">Vault ESC-UG-2024-991</span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Current Escrow Balance Locked</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold bg-surface-container-lowest px-2 py-0.5 rounded">
<Icon name="lock" className="text-[14px]" />
              Protected
            </span>
</div>
<div className="font-price-display text-price-display text-tertiary font-extrabold tracking-tight">
            UGX 248,500
          </div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
            MTN MoMo Escrow Lock guarantee active. Safe to disburse upon inbound scan completion.
          </p>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface">Recommended Resolution Action</span>
<label className="p-space-md rounded-xl bg-surface-container cursor-pointer flex flex-col gap-1 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="radio_button_checked" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md font-extrabold text-on-surface">Accept Item &amp; Authorize Buyer Escrow Refund</span>
</div>
<span className="font-label-md text-label-md font-extrabold text-primary">UGX 248,500</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pl-7">
              Full automated buyer release. Zero merchant dispute points incurred.
            </p>
</label>
<label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex flex-col gap-1 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="radio_button_unchecked" className="text-secondary text-[20px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">Deduct 10% Restocking Fee</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">UGX 24,850 Retained</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pl-7">
              Deduct fee for package opening; remit UGX 223,650 to buyer.
            </p>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="shelf-dest">
            Hub Inventory Staging Destination
          </label>
<div className="relative">
<select className="w-full h-11 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md font-semibold appearance-none focus:outline-none focus:bg-surface-container-lowest" id="shelf-dest">
<option selected={true}>Return to Victoria Tech Staging Shelf B4 - Ready for Sale</option>
<option>Quarantine Bay 02 - Detailed Tech Diagnostics</option>
<option>Return to Distributor RMA Palette UG-09</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-3 text-secondary pointer-events-none text-[18px]" />
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-sm text-label-sm font-bold">MS</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface leading-none">Michael Sserwadda</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">Victoria Tech Quality Desk Officer • Staff ID #VT-902</span>
</div>
</div>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">QA Level 3</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">Officer Fast PIN Authentication</span>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<button className="w-full py-3.5 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-[0.99]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="task_alt" className="text-[20px]" />
            Confirm Inbound Acceptance &amp; Release Resolution
          </button>
<button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-lowest hover:bg-error-container text-error font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="report_problem" className="text-[18px]" />
            Report Tamper Violation to Dispute Officer Patricia
          </button>
</div>

<div className="flex items-center justify-between pt-2 text-secondary font-label-sm text-label-sm font-mono">
<span>TXID: 0x9AF8...20B</span>
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Immutable Escrow Audit Enforced
          </span>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
