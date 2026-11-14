// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_dispute_response_tablet_dark/code.html
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
      <aside className="fixed z-50 left-0 top-0 bottom-0 w-[72px] bg-container-dark-low z-50 flex flex-col items-center py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="h-12 w-12 flex items-center justify-center mb-space-md rounded-xl bg-surface-container-high"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /></div><nav className="flex-1 flex flex-col gap-space-xs items-center w-full px-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]"><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="receipt_long" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[24px]" /></a><a aria-current="page" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]" data-path="returns-and-disputes" href="#" title="Returns & Disputes" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="wallet" href="#" title="Escrow & Wallet" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[24px]" /></a></nav><div className="flex flex-col gap-space-xs items-center w-full px-space-xs pt-space-xs"><a className="relative w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-airtel-red"></span></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[24px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-16 bg-surface-dark/95 backdrop-blur-xl z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.3)]"><div className="flex items-center gap-space-md min-w-0"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex items-center gap-space-xs bg-container-dark-low px-space-md py-1.5 rounded-xl"><Icon name="store" className="text-primary text-[18px]" /><div className="flex flex-col min-w-0"><span className="font-label-md text-on-surface truncate">Victoria Tech Supplies</span><span className="font-label-sm text-on-surface-variant truncate">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-on-surface-variant text-[18px] ml-space-xs" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center bg-container-dark-low px-space-md py-1.5 rounded-xl w-56"><Icon name="search" className="text-on-surface-variant text-[18px] mr-space-xs" /><span className="font-body-sm text-on-surface-variant select-none">Search orders, SKUs...</span></div><button className="w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-airtel-red text-on-primary-container font-label-sm flex items-center justify-center px-1">4</span></button><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-on-primary">VT</div></div></div></header><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-container-dark-low px-space-md py-2 flex items-center justify-between text-on-surface-variant font-label-sm">
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="tracking-wide uppercase">Kampala Arbitrations Server #UG-KLA-02: Live Sync Active</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant">
<Icon name="shield" className="text-[14px]" />
<span>Ledger Hash: 0x9AF8...771B</span>
</div>
</div>
<div className="p-space-lg md:p-space-xl flex flex-col gap-space-lg max-w-[1280px] mx-auto w-full">

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-xl relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-56 h-56 bg-gradient-to-br from-primary-container/15 via-transparent to-transparent rounded-full pointer-events-none blur-2xl"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md relative z-10">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">Arbitration Desk</span>
<span className="font-label-sm text-on-surface-variant">/</span>
<span className="font-label-sm font-semibold text-primary">Nakasero Electronics Cluster</span>
</div>
<div className="flex items-baseline gap-space-md flex-wrap">
<h1 className="font-headline-md text-on-surface tracking-tight">Dispute Case #DSP-104 Response</h1>
<span className="font-label-md text-on-surface-variant">Ref: Order #SC-9912</span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">

<div className="flex items-center gap-space-xs bg-amber-warning/15 px-space-md py-1.5 rounded-xl">
<Icon name="timelapse" className="text-amber-warning text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm uppercase text-amber-warning">SLA Auto-Ruling In</span>
<span className="font-label-md text-on-surface font-bold">18h 42m Remaining</span>
</div>
</div>

<div className="flex items-center gap-space-xs bg-emerald-escrow/15 px-space-md py-1.5 rounded-xl">
<Icon name="lock" className="text-emerald-escrow text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm uppercase text-emerald-escrow">Escrow Custody</span>
<span className="font-label-md text-on-surface font-extrabold tracking-tight">UGX 380,000 Locked</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex items-start gap-space-md shadow-md">
<div className="w-10 h-10 rounded-xl bg-danger-penalty/20 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="assignment_late" className="text-danger-penalty text-[22px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-md text-on-surface font-bold">Action Required from Victoria Tech Supplies</span>
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
<span className="font-label-sm text-on-surface-variant">Buyer Claim Logged</span>
</div>
<p className="font-body-md text-on-surface-variant">
          Customer <span className="font-semibold text-on-surface">David O.</span> (Buyer ID <span className="font-mono text-on-surface">07•• ••• 419</span>) requested a return and 100% Mobile Money refund for <span className="font-semibold text-on-surface">Order #SC-9912</span>. Claim Reason: <em className="text-on-surface not-italic font-medium">"Wrong Cable Type in Box &amp; Packaging Seal Tampered"</em>. Review buyer dossier below and elect your arbitration response before auto-ruling expires.
        </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-start">

<div className="flex flex-col gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-lg">
<div className="flex items-center justify-between pb-space-sm bg-container-dark-high/40 p-space-sm rounded-lg">
<div className="flex items-center gap-space-xs">
<Icon name="folder_open" className="text-primary text-[20px]" />
<span className="font-label-md uppercase tracking-wider text-on-surface">Dispute Dossier</span>
</div>
<span className="font-label-sm bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface-variant">Dispatch Protocol: Nakasero Hub</span>
</div>
<div className="grid grid-cols-2 gap-space-md text-on-surface">
<div className="bg-surface-container rounded-lg p-space-sm">
<span className="font-label-sm text-on-surface-variant block mb-1">Product Dispatched</span>
<p className="font-label-md font-bold text-on-surface truncate">Anker 65W GaN III Multiport</p>
<span className="font-body-sm text-on-surface-variant">SKU: ANK-GAN65-BLK</span>
</div>
<div className="bg-surface-container rounded-lg p-space-sm">
<span className="font-label-sm text-on-surface-variant block mb-1">Delivery Route</span>
<p className="font-label-md font-bold text-on-surface">Rider Kizito Brian</p>
<span className="font-body-sm text-on-surface-variant">Boda Reg: UFF 912K • Nakasero</span>
</div>
<div className="bg-surface-container rounded-lg p-space-sm">
<span className="font-label-sm text-on-surface-variant block mb-1">Delivery Confirmation</span>
<p className="font-label-md font-bold text-on-surface">2 Days Ago (14:38 EAT)</p>
<span className="font-body-sm text-tertiary">Cryptographic OTP Validated</span>
</div>
<div className="bg-surface-container rounded-lg p-space-sm">
<span className="font-label-sm text-on-surface-variant block mb-1">Escrow Balance</span>
<p className="font-label-md font-bold text-emerald-escrow">UGX 380,000</p>
<span className="font-body-sm text-on-surface-variant">MTN MoMo Gateway Hold</span>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-primary">Buyer Sworn Statement</span>
<span className="font-label-sm text-on-surface-variant">Logged 18h ago</span>
</div>
<blockquote className="font-body-md text-on-surface italic pl-3 border-l-2 border-primary-container">
              "Opened the sealed Anker 65W GaN box and found a generic USB-A to Micro-USB cable instead of the official 100W braided C-to-C cable that comes standard. The tamper sticker on the bottom of the packaging was sliced and restuck with normal stationery tape."
            </blockquote>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-on-surface font-bold">Buyer Submitted Evidence (2 Files)</span>
<span className="font-label-sm text-tertiary flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> GPS &amp; EXIF Verified
              </span>
</div>
<div className="grid grid-cols-2 gap-space-md">

<div className="group relative rounded-xl overflow-hidden bg-surface-container-high flex flex-col">
<div className="relative h-44 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High contrast macro photograph of an Anker electronics cardboard box with sliced transparent circular tamper seal tape that has been sloppily re-taped over with clear stationery cellophane tape, resting on a wooden table in bright indoor lighting in Kampala Uganda" src={`${assetBase}/images/46a449ec000bbeac.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent pointer-events-none"></div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-surface-dark/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-primary-container transition-colors" title="Inspect Full Resolution" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="zoom_in" className="text-[18px]" />
</button>
<span className="absolute bottom-2 left-2 font-label-sm bg-container-dark-low/90 backdrop-blur px-2 py-0.5 rounded text-on-surface">Photo 01: Sliced Box Seal</span>
</div>
<div className="p-space-sm flex flex-col gap-0.5 bg-surface-container text-on-surface-variant font-label-sm">
<span>EXIF: TECNO Camon 20 Pro</span>
<span className="text-on-surface">Timestamp: 14 Oct 2024, 15:02 EAT</span>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-surface-container-high flex flex-col">
<div className="relative h-44 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close up photograph showing an unpacked black generic plastic USB-A to Micro-USB cable lying next to an authentic white 65W GaN multiport wall charger brick, displaying mismatched hardware and low-grade wire finishing, captured on a desk under ambient daylight" src={`${assetBase}/images/fbc1b01b505b388f.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent pointer-events-none"></div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-surface-dark/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-primary-container transition-colors" title="Inspect Full Resolution" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="zoom_in" className="text-[18px]" />
</button>
<span className="absolute bottom-2 left-2 font-label-sm bg-container-dark-low/90 backdrop-blur px-2 py-0.5 rounded text-on-surface">Photo 02: Discrepant Cable</span>
</div>
<div className="p-space-sm flex flex-col gap-0.5 bg-surface-container text-on-surface-variant font-label-sm">
<span>EXIF: TECNO Camon 20 Pro</span>
<span className="text-on-surface">Timestamp: 14 Oct 2024, 15:04 EAT</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-sm">
                  PN
                </div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-escrow ring-2 ring-container-dark-low"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm uppercase tracking-wider text-primary">Assigned Neutral Arbitrator</span>
<span className="font-label-md font-bold text-on-surface truncate">Officer Patricia Namubiru</span>
<span className="font-body-sm text-on-surface-variant truncate">Fair Commerce Lead • Kampala Operations Desk</span>
</div>
</div>
<button className="px-space-md py-2 rounded-xl bg-container-dark-high hover:bg-surface-bright text-on-surface font-label-md flex items-center gap-space-xs transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px] text-tertiary" />
<span>Direct Chat</span>
</button>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-md">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Dispatch Chain-of-Custody</span>
<div className="flex items-center justify-between text-on-surface font-label-sm py-1">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
<span>Packed at Victoria Tech (Nakasero)</span>
</div>
<span className="text-on-surface-variant">14 Oct, 11:20</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm py-1">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
<span>Boda Handover (Rider Kizito B.)</span>
</div>
<span className="text-on-surface-variant">14 Oct, 12:45</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm py-1">
<div className="flex items-center gap-2">
<Icon name="help_center" className="text-amber-warning text-[16px]" />
<span>Doorstep OTP Claim Raised</span>
</div>
<span className="text-amber-warning font-semibold">14 Oct, 14:38</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md">
<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col gap-space-lg shadow-xl">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="how_to_reg" className="text-primary text-[20px]" />
<span className="font-label-md uppercase tracking-wider text-on-surface">Merchant Response Protocol</span>
</div>
<span className="font-label-sm text-tertiary font-semibold">Step 2 of 2</span>
</div>

<div className="flex flex-col gap-space-sm" id="response-options-group">

<label className="cursor-pointer bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded-xl flex items-start gap-space-md">
<input className="mt-1 accent-primary-container w-4 h-4" name="dispute_decision" type="radio" value="refund" />
<div className="flex-1 flex flex-col min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-on-surface font-bold">Accept Return &amp; Release Escrow</span>
<span className="font-label-sm bg-emerald-escrow/15 text-emerald-escrow px-2 py-0.5 rounded font-semibold">0 Penalty Points</span>
</div>
<p className="font-body-sm text-on-surface-variant mt-1">
                  Full release of UGX 380,000 back to buyer's MTN/Airtel wallet. SwiftCart dispatches reverse Boda pickup to retrieve the unit back to Nakasero Hub.
                </p>
</div>
</label>

<label className="cursor-pointer bg-surface-container hover:bg-surface-container-high transition-colors p-space-md rounded-xl flex items-start gap-space-md">
<input className="mt-1 accent-primary-container w-4 h-4" name="dispute_decision" type="radio" value="replacement" />
<div className="flex-1 flex flex-col min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-on-surface font-bold">Dispatch Immediate Replacement</span>
<span className="font-label-sm bg-secondary-container text-secondary px-2 py-0.5 rounded font-semibold">Doorstep Swap</span>
</div>
<p className="font-body-sm text-on-surface-variant mt-1">
                  Commit a verified 100W braided C-to-C cable pack immediately via express courier. Escrow remains held until buyer confirms swap.
                </p>
</div>
</label>

<label className="cursor-pointer bg-surface-container-high p-space-md rounded-xl flex flex-col gap-space-md shadow-md ring-1 ring-primary-container/40">
<div className="flex items-start gap-space-md">
<input checked={true} className="mt-1 accent-primary-container w-4 h-4" name="dispute_decision" type="radio" value="contest" />
<div className="flex-1 flex flex-col min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-primary font-bold">Contest Dispute &amp; Submit Counter-Evidence</span>
<span className="font-label-sm bg-primary-container/20 text-primary px-2 py-0.5 rounded font-bold">Formal Arbitration</span>
</div>
<p className="font-body-sm text-on-surface mt-1">
                    Assert that goods left Victoria Tech packing station intact with hologram seal intact. Officer Namubiru will review cross-evidence.
                  </p>
</div>
</div>

<div className="flex flex-col gap-space-md pt-space-sm pl-7">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm uppercase tracking-wider text-on-surface-variant">Outbound Packing Station Video / CCTV Proof</label>
<span className="font-label-sm text-tertiary">Verified Match</span>
</div>

<div className="bg-surface-container p-space-sm rounded-xl flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
<Icon name="videocam" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-surface font-semibold truncate">Packing_Record_SC9912_Cam03.mp4</span>
<span className="font-body-sm text-on-surface-variant">4.2 MB • Recorded 14 Oct 11:18 EAT (Tamper Seal Zoom Included)</span>
</div>
</div>
<div className="flex items-center gap-1 shrink-0">
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface transition-colors" title="Play Video Preview" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="play_arrow" className="text-[18px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-danger-penalty/10 hover:bg-danger-penalty/20 flex items-center justify-center text-danger-penalty transition-colors" title="Remove Attachment" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container/60 hover:bg-surface-container rounded-xl p-space-md flex flex-col items-center justify-center text-center cursor-pointer transition-colors">
<Icon name="cloud_upload" className="text-on-surface-variant text-[28px] mb-1" />
<span className="font-label-md text-on-surface font-medium">Attach Additional Inbound Manifest or High-Res Photo</span>
<span className="font-body-sm text-on-surface-variant">Drag files or click to browse (Max 25MB • MP4, JPG, PNG)</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm uppercase tracking-wider text-on-surface-variant">Merchant Counter-Statement</label>
<span className="font-label-sm text-on-surface-variant">214 / 600 characters</span>
</div>
<textarea className="w-full bg-surface-container rounded-xl p-space-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container resize-none" placeholder="State your factual packaging and serial details..." rows={4}>All Anker 65W chargers dispatched from Victoria Tech are scanned by barcode and sealed with official hologram tamper seal #UG-7721. Packing Cam 03 verifies the high-spec 100W C-to-C braided wire was inside the carton when handed to Rider Kizito Brian.</textarea>
</div>

<div className="grid grid-cols-2 gap-space-sm bg-surface-container p-space-sm rounded-xl">
<div>
<span className="font-label-sm text-on-surface-variant block">Outbound Seal ID</span>
<span className="font-mono font-bold text-on-surface text-[13px]">#UG-7721-ANK</span>
</div>
<div>
<span className="font-label-sm text-on-surface-variant block">Dispatched Serial</span>
<span className="font-mono font-bold text-on-surface text-[13px]">SN: A2668-88310-KLA</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<label className="flex items-start gap-space-xs text-on-surface font-body-sm cursor-pointer select-none">
<input checked={true} className="mt-0.5 accent-primary-container rounded w-4 h-4" type="checkbox" />
<span>I confirm under penalty of platform de-listing that all Anker products originate from verified Anker EMEA distribution dockets.</span>
</label>
<label className="flex items-start gap-space-xs text-on-surface font-body-sm cursor-pointer select-none">
<input checked={true} className="mt-0.5 accent-primary-container rounded w-4 h-4" type="checkbox" />
<span>I authorize SwiftCart Arbitration Officer Patricia Namubiru to examine the Boda transit segment telematics.</span>
</label>
</div>
</div>
</label>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full h-[52px] bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary-container font-label-lg rounded-xl flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.99] transition-all" id="submit-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="gavel" className="text-[20px]" />
<span>Submit Counter-Evidence to Arbitration Desk</span>
</button>
<div className="flex items-center gap-space-sm">
<button className="flex-1 h-[44px] bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md rounded-xl flex items-center justify-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[18px]" />
<span>Save Draft Response</span>
</button>
<button className="px-space-md h-[44px] bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md rounded-xl flex items-center justify-center transition-colors" title="Print Case Summary" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container/40 p-space-sm rounded-lg flex items-center gap-space-xs text-on-surface-variant font-label-sm">
<Icon name="info" className="text-[16px] text-amber-warning shrink-0" />
<span>Frivolous counter-claims that are ruled against after CCTV forensic review incur a UGX 45,000 arbitration processing fee and 2 merchant trust demerits.</span>
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
