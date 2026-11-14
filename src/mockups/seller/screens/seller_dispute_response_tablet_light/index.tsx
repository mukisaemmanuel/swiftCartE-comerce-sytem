// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_dispute_response_tablet_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-[72px] bg-surface-container-lowest z-50 flex flex-col items-center py-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-surface-container-high"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col items-center mb-6"><a className="group flex flex-col items-center justify-center p-1 rounded-xl hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><img alt="SwiftCart" className="h-8 w-8 object-contain" src="/brand/logo-full.png" /><span className="font-label-sm text-label-sm text-primary font-bold mt-1 tracking-tighter">SWIFT</span></a></div><nav className="flex-1 w-full px-2 flex flex-col items-center gap-2" data-active-classes="bg-primary-container text-on-primary font-bold shadow-sm"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group relative" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_shipping" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="disputes-returns" href="#" title="Disputes & Returns" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="wallet" href="#" title="Wallet & Escrow" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="insights" className="text-[22px]" /></a><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all group relative" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-surface-container-lowest">4</span></a></nav><div className="w-full px-2 flex flex-col items-center gap-2 pt-2 border-t border-surface-container-high"><a className="w-12 h-12 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[22px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-[60px] bg-surface-container-lowest z-40 flex items-center justify-between px-space-lg shadow-[0_1px_4px_rgba(0,0,0,0.03)] border-b border-surface-container-high"><div className="flex items-center gap-space-md"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-low rounded-lg border border-surface-container cursor-pointer hover:bg-surface-container transition-colors"><Icon name="storefront" className="text-primary text-[18px]" /><div className="flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface leading-tight">Victoria Tech Supplies</span><span className="font-label-sm text-label-sm text-secondary leading-none">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-secondary text-[16px] ml-1" /></div></div><div className="flex-1 max-w-sm mx-space-md"><div className="relative flex items-center w-full"><Icon name="search" className="absolute left-3 text-secondary text-[18px]" /><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-secondary border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search orders, SKUs, disputes..." type="text" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center p-0.5 bg-surface-container rounded-lg border border-surface-container-high"><button className="p-1 rounded-md bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[16px]" /></button><button className="p-1 rounded-md text-secondary hover:text-on-surface flex items-center justify-center" title="Dark Mode" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[16px]" /></button></div><a className="relative p-1.5 text-secondary hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors" data-path="notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-container-lowest"></span></a><div className="flex items-center gap-space-xs pl-2 border-l border-surface-container-high"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md font-bold text-on-surface">VT Admin</span><span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>Verified</span></div></div></div></header><div className="fixed top-[60px] left-[72px] right-0 h-7 bg-surface-container-low border-b border-surface-container-high z-30 px-space-lg flex items-center justify-between text-on-secondary-container"><div className="flex items-center gap-space-xs font-label-sm text-label-sm overflow-hidden text-ellipsis whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-semibold text-on-surface">Nakasero Mesh Relay Active</span><span className="text-outline">|</span><span>Last synced 12s ago via MTN MoMo Gateway</span><span className="text-outline">|</span><span className="text-tertiary font-semibold flex items-center gap-0.5"><Icon name="verified_user" className="text-[13px]" /> Escrow Enforced</span></div><div className="font-label-sm text-label-sm text-secondary font-mono tracking-wide">Hub Node UG-OPS-04</div></div><main className="w-full pt-[88px] min-h-screen bg-surface px-space-lg py-space-md"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-md relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-space-sm relative z-10">

<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-bold text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Arbitration Desk
          </span>
<span>/</span>
<span>Nakasero Electronics Cluster</span>
<span>/</span>
<span className="font-mono font-bold text-primary">Case #DSP-104</span>
<span className="text-secondary">(Ref: Order #SC-9912)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md font-bold">
<Icon name="timer" className="text-[16px] animate-pulse" />
            SLA Auto-Ruling: 18h 42m Remaining
          </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
<Icon name="lock" className="text-tertiary text-[16px]" />
            Escrow Locked: UGX 380,000
          </span>
</div>
</div>

<div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="warning" className="text-[20px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<h1 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
              Action Required from Victoria Tech Supplies
            </h1>
<span className="px-2 py-0.5 rounded bg-error/15 text-error font-label-sm text-label-sm font-bold uppercase tracking-wider">High Priority</span>
</div>
<p className="font-body-md text-body-md text-secondary mt-1">
<span className="font-bold text-on-surface">Buyer Claim Logged:</span> Customer David O. requested return and 100% Mobile Money refund for Order #SC-9912.
            <span className="font-semibold text-primary">Reason: Wrong Cable Type in Box &amp; Packaging Seal Tampered</span>.
          </p>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start w-full">

<div className="lg:col-span-5 flex flex-col gap-space-md w-full">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="inventory_2" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Product Dispatched</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
            SKU: ANK-GAN65-BLK
          </span>
</div>
<div className="flex gap-space-md items-center">
<div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up studio shot of Anker 65W GaN III Multiport fast wall charger with sleek matte black finish, crisp gold pin contacts, angled soft commercial lighting against clean neutral white background." src={`${assetBase}/images/edd03ccdbacc383a.webp`} />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-[16px] text-on-surface font-bold truncate">Anker 65W GaN III Multiport</h2>
<p className="font-body-sm text-body-sm text-secondary truncate">Triple Outlet (2x USB-C 65W Max, 1x USB-A)</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-md text-label-md font-bold text-on-surface">UGX 380,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> MTN MoMo Paid
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary block">Assigned Courier</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate block">Kizito Brian (UFF 912K)</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary block">Delivery Status</span>
<span className="font-label-md text-label-md font-bold text-tertiary flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Validated (2d ago)
            </span>
</div>
<div className="col-span-2 pt-1">
<span className="font-label-sm text-label-sm text-secondary block">Custody Security</span>
<span className="font-body-sm text-body-sm text-on-surface font-mono">Cryptographic OTP #8819 Verified by Buyer</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="record_voice_over" className="text-error text-[20px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Buyer Sworn Statement</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Logged 6h ago</span>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low relative mb-space-md">
<Icon name="format_quote" className="absolute top-2 right-2 text-surface-container-highest text-[32px] select-none pointer-events-none" />
<p className="font-body-md text-body-md text-on-surface italic relative z-10">
            “I opened the package immediately upon the rider leaving. The outer plastic wrap had been cleanly re-sliced with a razor blade. Inside the Anker retail box, instead of the 100W braided silicone cable, there was a worn USB-A to micro-USB white cable with yellowed ends. I demand an immediate reversal of my UGX 380,000.”
          </p>
<div className="flex items-center gap-2 mt-2 pt-2 text-secondary font-label-sm text-label-sm">
<span className="font-bold text-on-surface">David O.</span>
<span>•</span>
<span>Buyer Trust Score: 98.4% (34 Completed Orders)</span>
</div>
</div>

<div>
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider block mb-space-xs">
            Buyer Submitted Evidence (2 Images)
          </span>
<div className="grid grid-cols-2 gap-space-sm">

<div className="group relative rounded-lg overflow-hidden bg-surface-container">
<div className="aspect-[4/3] w-full">
<img className="w-full h-full object-cover" data-alt="High angle macro documentary shot of a cardboard retail electronics packaging box showing a sliced security sticker seal with peeling transparent tape under harsh fluorescent room lighting." src={`${assetBase}/images/284c46ab4beb0eec.webp`} />
</div>
<div className="p-1.5 bg-surface-container-lowest">
<span className="font-label-sm text-label-sm font-bold text-on-surface block truncate">Photo 01: Sliced Box Seal</span>
<span className="font-label-sm text-[10px] text-secondary font-mono">EXIF: 14:22 EAT • Geo: Nakasero</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container">
<div className="aspect-[4/3] w-full">
<img className="w-full h-full object-cover" data-alt="Clear high detail product photo of a cheap discolored yellow white micro USB cable uncoiled next to an Anker black GaN charger box on a glass table top." src={`${assetBase}/images/33c9670eb2f4410c.webp`} />
</div>
<div className="p-1.5 bg-surface-container-lowest">
<span className="font-label-sm text-label-sm font-bold text-on-surface block truncate">Photo 02: Discrepant Cable</span>
<span className="font-label-sm text-[10px] text-secondary font-mono">EXIF: 14:24 EAT • Device: SM-G998</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-label-lg shrink-0">
            PN
          </div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-secondary block">Assigned Neutral Arbitrator</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface block truncate">Officer Patricia Namubiru</span>
<span className="font-label-sm text-[11px] text-tertiary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Fair Commerce Chamber Lead
            </span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md font-bold text-on-surface flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[16px]" />
          Direct Chat
        </button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<span className="font-label-md text-label-md font-bold text-on-surface block mb-space-sm">
          Dispatch Chain-of-Custody Log
        </span>
<div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
<div className="flex items-start gap-space-sm">
<div className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></div>
<div className="flex-1">
<span className="font-bold text-on-surface">Sealed &amp; Packaged at Hub Bay #4</span>
<p className="text-secondary text-[11px]">Victoria Tech Supplies • 12 Oct 11:15 EAT (Cam 03 Active)</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></div>
<div className="flex-1">
<span className="font-bold text-on-surface">Handed to Rider Kizito Brian</span>
<p className="text-secondary text-[11px]">Boda Bag Tamper-Seal #7721 verified • 12 Oct 11:40 EAT</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-2 h-2 rounded-full bg-primary-container mt-1.5 shrink-0"></div>
<div className="flex-1">
<span className="font-bold text-on-surface">Delivered &amp; OTP Confirmed</span>
<p className="text-secondary text-[11px]">Kisasi Commercial Rd • 12 Oct 13:02 EAT</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-md w-full">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">

<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block">Merchant Protocol</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Arbitration Defense Response</h2>
</div>
<div className="flex items-center gap-1 bg-surface-container-low px-3 py-1 rounded-full font-label-sm text-label-sm font-bold text-secondary">
<span>Step</span>
<span className="text-primary-container font-extrabold text-[14px]">2</span>
<span>of 2 (Final Submission)</span>
</div>
</div>

<div className="flex flex-col gap-space-sm mb-space-lg">
<label className="font-label-md text-label-md font-bold text-on-surface">Select Seller Resolution Pathway</label>

<label className="flex items-center gap-space-md p-space-md rounded-xl bg-surface cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="w-4 h-4 text-primary-container focus:ring-primary-container" name="dispute_path" type="radio" value="refund" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Accept Return &amp; Release Escrow</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">0 Penalty Points</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Instantly refund UGX 380,000 to buyer's MTN Mobile Money wallet upon courier receipt.</p>
</div>
</label>

<label className="flex items-center gap-space-md p-space-md rounded-xl bg-surface cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="w-4 h-4 text-primary-container focus:ring-primary-container" name="dispute_path" type="radio" value="replace" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Dispatch Immediate Replacement</span>
<span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">Doorstep Swap</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Send verified sealed unit via express courier within 4 hours; return item collected simultaneously.</p>
</div>
</label>

<label className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low cursor-pointer shadow-sm">
<input checked={true} className="w-4 h-4 text-primary-container focus:ring-primary-container" name="dispute_path" type="radio" value="contest" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-primary">Contest Dispute &amp; Submit Counter-Evidence</span>
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">Formal Arbitration</span>
</div>
<Icon name="gavel" className="text-primary text-[20px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-0.5">
                Maintain that goods were dispatched 100% genuine, sealed, and intact. Request neutral tribunal review.
              </p>
</div>
</label>
</div>

<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-2">
<Icon name="videocam" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">Outbound Packing Station Video / CCTV Proof</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm font-bold">Verified Match</span>
</div>

<div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
<Icon name="smart_display" className="text-[24px]" />
</div>
<div className="truncate">
<span className="font-label-md text-label-md font-bold text-on-surface block truncate">Packing_Record_SC9912_Cam03.mp4</span>
<span className="font-label-sm text-label-sm text-secondary">4.2 MB • Captured 12 Oct, 11:14:02 EAT • HD 1080p</span>
</div>
</div>
<div className="flex items-center gap-1 shrink-0">
<button className="p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Preview Video" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="play_circle" className="text-[20px]" />
</button>
<button className="p-2 rounded-lg text-error hover:bg-error-container/30 transition-colors" title="Remove File" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[20px]" />
</button>
</div>
</div>

<div className="mt-space-sm p-space-md rounded-xl bg-surface-container-lowest text-center cursor-pointer hover:bg-surface-container transition-colors flex flex-col items-center justify-center">
<Icon name="cloud_upload" className="text-secondary text-[28px] mb-1" />
<span className="font-label-md text-label-md font-bold text-on-surface">Attach Additional High-Resolution Photos or Lab Serial Logs</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Drag and drop PNG, JPG, or PDF (Max 15MB each)</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="seller_statement">
                Merchant Sworn Counter-Statement
              </label>
<span className="font-label-sm text-label-sm text-secondary font-mono">214 / 600 characters</span>
</div>
<textarea className="w-full p-space-md rounded-xl bg-surface font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest shadow-inner" id="seller_statement" placeholder="State your operational counter-facts clearly..." rows={4}>All our Anker inventory is direct-sourced from official regional distributors with tamper-proof holographic tape intact. Camera 03 at 11:14 EAT clearly records packing technician Juliet placing the original factory-sealed unit with Anker braided black 100W cable into pouch #7721.</textarea>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Outbound Seal Security ID</span>
<span className="font-label-md text-label-md font-mono font-bold text-on-surface block mt-0.5">#UG-7721-ANK</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Recorded Serial Number</span>
<span className="font-label-md text-label-md font-mono font-bold text-on-surface block mt-0.5">A2668-88310-KLA</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<label className="flex items-start gap-2.5 cursor-pointer">
<input checked={true} className="w-4 h-4 mt-0.5 text-primary-container rounded focus:ring-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">
                I hereby certify under penalty of merchant account suspension that the counter-evidence submitted is unedited and represents the exact parcel dispatched for Order #SC-9912.
              </span>
</label>
<label className="flex items-start gap-2.5 cursor-pointer">
<input checked={true} className="w-4 h-4 mt-0.5 text-primary-container rounded focus:ring-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">
                I accept the final binding resolution rendered by the Nakasero Cluster Arbitration Council within 24 hours.
              </span>
</label>
</div>

<div className="flex items-center gap-space-md pt-space-sm">
<button className="flex-1 h-12 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="shield" className="text-[20px]" />
              Submit Counter-Evidence to Arbitration Desk
            </button>
<button className="h-12 px-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Save Draft
            </button>
</div>

<div className="flex items-center gap-2 p-space-sm rounded-lg bg-surface-container-low text-secondary font-label-sm text-label-sm">
<Icon name="info" className="text-outline text-[16px]" />
<span>Note: If counter-evidence is verified fraudulent, merchant will incur a 250 penalty score &amp; automated UGX 100,000 tribunal processing surcharge.</span>
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
