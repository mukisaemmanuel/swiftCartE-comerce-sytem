// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_overview_dashboard_tablet_light_2/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md min-w-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain flex-shrink-0" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span><span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">Open</span></div><span className="font-body-sm text-body-sm text-secondary truncate">Pioneer Mall G-14 • Kampala</span></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container-low"><span className="font-label-sm text-label-sm text-secondary uppercase">Escrow:</span><span className="font-label-md text-label-md text-on-surface font-bold">UGX 14,850,000</span></div><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-primary-fixed/40"><span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase">Today:</span><span className="font-label-md text-label-md text-on-primary-fixed font-bold">28 Dispatches</span></div><button aria-label="Theme indicator" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><div className="relative"><button aria-label="Notifications" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /></button><span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto h-11 border-t border-outline-variant/30 pt-1 pb-1" data-active-classes="bg-primary-container text-on-primary font-bold shadow-[0_2px_6px_rgba(255,87,34,0.35)]"><a aria-current="page" className="px-space-md py-1 rounded-lg whitespace-nowrap transition-all bg-primary-container text-on-primary font-bold shadow-[0_2px_6px_rgba(255,87,34,0.35)]" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders (6)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products (48)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="ai-studio" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet (4)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes (1)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="wallet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a></nav></div></header>
<main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full">

<div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 space-y-5">

<div className="w-full bg-surface-container-low rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
<div className="flex items-center gap-2.5 min-w-0">
<div className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
<span className="absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</div>
<div className="flex items-center gap-2 truncate">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Kampala Mesh Relay:</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Central Division Boda nodes responding under <strong className="text-on-surface font-semibold">42ms</strong></span>
</div>
<span className="hidden sm:inline-block text-outline-variant font-label-sm">•</span>
<span className="hidden sm:inline-block font-body-sm text-body-sm text-secondary">Zero queued offline receipts</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wide">
<Icon name="sync" className="text-[14px]" />
          Sync Active
        </span>
<span className="font-label-sm text-label-sm text-secondary font-mono px-2 py-0.5 rounded bg-surface-container-high/60">NODE-KLA-04</span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 pointer-events-none blur-3xl"></div>
<div className="absolute -right-6 bottom-0 w-48 h-48 rounded-full bg-tertiary/5 pointer-events-none blur-2xl"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="space-y-2.5 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Good afternoon, Sarah Namubiru</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[14px]" />
              Verified Merchant
            </span>
</div>
<p className="font-body-md text-body-md text-secondary flex items-center gap-2 flex-wrap">
<span className="font-semibold text-on-surface">SoundCore Uganda Official</span>
<span className="text-outline">•</span>
<span>Tier 1 Verified Merchant</span>
<span className="text-outline">•</span>
<span className="inline-flex items-center gap-1">
<Icon name="store" className="text-[16px] text-primary-container" />
              Pioneer Mall G-14 (Kampala Central)
            </span>
</p>
<div className="pt-1 flex items-center gap-3 flex-wrap">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span><strong>Live Boda Network:</strong> Kampala Central Fast Dispatch Active</span>
<span className="hidden md:inline text-secondary">• Dynamic routing via William St &amp; Pioneer corridors</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-secondary-container/60 text-on-secondary-fixed font-label-sm text-label-sm">
              Avg. pickup: <strong>14 mins</strong>
</span>
</div>
</div>

<div className="flex flex-wrap lg:flex-col xl:flex-row items-center gap-2.5 flex-shrink-0">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow transition-all active:scale-[0.98]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add_box" className="text-[18px]" />
            + Add New Product
          </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[18px]" />
            Print Staging Manifest
          </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="payments" className="text-[18px] text-tertiary" />
            Request MoMo Cash-out
          </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">TODAY'S SALES</span>
<span className="w-8 h-8 rounded-lg bg-primary-fixed/40 flex items-center justify-center text-primary-container">
<Icon name="point_of_sale" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-price-display text-price-display text-on-surface">UGX 4,820,000</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="trending_up" className="text-[14px]" />
              +18.4%
            </span>
<span className="font-body-sm text-body-sm text-secondary">vs yesterday</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-secondary font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-lg">
<span>Completed &amp; In-transit:</span>
<span className="font-bold text-on-surface">28 Orders</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">PENDING DISPATCHES</span>
<span className="w-8 h-8 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<Icon name="two_wheeler" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-price-display text-price-display text-on-surface">6 Orders</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="handshake" className="text-[15px] text-primary-container" />
<span>Requires driver handshake</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-secondary font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-lg">
<span className="text-error font-semibold">3 Wait Rider</span>
<span className="text-outline">•</span>
<span className="text-on-surface font-semibold">3 Packing</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">ESCROW IN-TRANSIT</span>
<span className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
<Icon name="lock" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-price-display text-price-display text-on-surface">UGX 14,850,000</div>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-body-sm text-tertiary font-semibold">
<Icon name="shield" className="text-[14px]" />
<span>SwiftCart Custody Safe</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-secondary font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-lg">
<span>Release Mechanism:</span>
<span className="font-bold text-on-surface font-mono">Blind 6-Digit OTP</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">STORE RATING &amp; SLA</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<Icon name="stars" className="text-[18px]" />
</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-price-display text-price-display text-on-surface">4.9</span>
<div className="flex text-amber-500 text-sm">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
</div>
<div className="flex items-center gap-1 mt-1 text-secondary font-body-sm text-body-sm">
<span>99.4% On-time Boda SLA</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-secondary font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-lg">
<span>Dispute Ratio:</span>
<span className="font-bold text-tertiary">0.4% Low Risk</span>
</div>
</div>
</div>

<div className="bg-error-container/40 rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-xl bg-error/10 text-error flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="notification_important" className="text-[24px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 flex-wrap">
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">2 Orders Need Immediate Courier Staging</h2>
<span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm uppercase tracking-wide font-extrabold animate-pulse">
              Action Window: 8m
            </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
<strong className="text-on-surface font-semibold">#SC-ORD-9488</strong> (Space One ANC • Plot 14 Acacia Ave Kololo) and
            <strong className="text-on-surface font-semibold">#SC-ORD-9492</strong> (Anker 65W GaN • Makerere Univ Gate)
          </p>
</div>
</div>
<button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold whitespace-nowrap shadow-sm hover:shadow transition-all active:scale-[0.98]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="sports_motorsports" className="text-[18px]" />
        Assign Vetted SafeBoda Rider
      </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

<div className="lg:col-span-7 space-y-4">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Fulfillment Queue</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-bold">4 active</span>
</div>
<a className="font-label-sm text-label-sm text-primary-container hover:text-primary font-bold flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
            View All Orders (6)
            <Icon name="arrow_forward" className="text-[14px]" />
</a>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow space-y-3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">#SC-ORD-9488</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" /> Escrow Locked
              </span>
<span className="px-2 py-0.5 rounded bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                1-Hour Boda
              </span>
</div>
<div className="font-label-lg text-label-lg font-bold text-on-surface font-mono text-right">
              UGX 248,500
            </div>
</div>
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte jet black finish with plush memory foam earcups set on a crisp modern studio backdrop with warm orange ambient lighting accents" src={`${assetBase}/images/871d3f3112a454bf.webp`} />
</div>
<div className="space-y-0.5 min-w-0">
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Space One ANC (Jet Black)</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Customer: Dennis Mukasa • Plot 14 Acacia Ave Kololo</p>
<div className="flex items-center gap-2 text-tertiary font-body-sm text-body-sm">
<Icon name="two_wheeler" className="text-[16px]" />
<span className="truncate">Courier Mukasa Brian en route to Kololo • <strong>ETA 14 mins</strong></span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low px-3 py-2 rounded-lg">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>Barcoded &amp; Scanned at G-14</span>
</div>
<button className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
              Track Rider GPS
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow space-y-3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">#SC-ORD-9490</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" /> Escrow Locked
              </span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                Acacia Hub Locker
              </span>
</div>
<div className="font-label-lg text-label-lg font-bold text-on-surface font-mono text-right">
              UGX 280,000
            </div>
</div>
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Liberty 4 NC true wireless earbuds in pearl white charging case with subtle metallic chrome hinge accents photographed in clean high key retail studio lighting with warm reflections" src={`${assetBase}/images/d0be807754802e6f.webp`} />
</div>
<div className="space-y-0.5 min-w-0">
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Liberty 4 NC Earbuds (Pearl White)</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Customer: Patricia K. • Acacia Mall Locker Compartment #4B</p>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="inventory_2" className="text-[16px] text-primary-container" />
<span>Packed, Bagged &amp; Barcoded</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low px-3 py-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary">Awaiting Hub Driver Pickup</span>
<button className="px-3.5 py-1.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm transition-all active:scale-[0.98] flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="pin" className="text-[16px]" />
              Handover OTP
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow space-y-3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">#SC-ORD-9491</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" /> Escrow Locked
              </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                Standard Delivery
              </span>
</div>
<div className="font-label-lg text-label-lg font-bold text-on-surface font-mono text-right">
              UGX 315,000
            </div>
</div>
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Motion plus 30W hi res portable wireless Bluetooth speaker in rugged textured black grille angled dynamically on minimalist tabletop with soft ambient glow" src={`${assetBase}/images/f0ac44b04a782744.webp`} />
</div>
<div className="space-y-0.5 min-w-0">
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Motion+ 30W Hi-Res Speaker</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Customer: David O. • Ntinda Ministers' Village</p>
<div className="flex items-center gap-1.5 text-primary-container font-body-sm text-body-sm font-semibold">
<Icon name="schedule" className="text-[16px]" />
<span>New Order received 9 mins ago</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low px-3 py-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary">Step 1: Item staging required</span>
<button className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[16px]" />
              Print Shipping Tag
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow space-y-3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">#SC-ORD-9493</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" /> Escrow Locked
              </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                Line-Haul Express
              </span>
</div>
<div className="font-label-lg text-label-lg font-bold text-on-surface font-mono text-right">
              UGX 185,000
            </div>
</div>
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-lg bg-surface-container-low flex-shrink-0 overflow-hidden flex items-center justify-center">
<div className="w-full h-full bg-surface-container flex items-center justify-center text-secondary">
<Icon name="headphones" className="text-[24px]" />
</div>
</div>
<div className="space-y-0.5 min-w-0">
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Life Q30 Hybrid ANC Over-Ear</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Customer: Grace A. • Entebbe Golf Club Junction</p>
<div className="flex items-center gap-1.5 text-secondary font-body-sm text-body-sm">
<Icon name="local_shipping" className="text-[16px] text-tertiary" />
<span>Dispatched on Entebbe Road Corridor</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low px-3 py-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary font-mono">VAN-TRK-7729</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">In-Transit via Expressway</span>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-4">

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="moped" className="text-primary-container text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Assigned Couriers</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">3 Active</span>
</div>
<div className="space-y-3">

<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-primary/10 text-primary-container flex items-center justify-center font-bold font-label-md text-label-md flex-shrink-0">
                  MB
                </div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-bold truncate">Mukasa Brian</div>
<div className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer <span className="font-mono font-semibold text-on-surface">UEF 842X</span></div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="inline-block px-2 py-0.5 rounded bg-primary-fixed/40 text-on-primary-fixed font-label-sm text-label-sm font-bold">
                  Delivering
                </span>
<div className="font-body-sm text-body-sm text-secondary mt-0.5">14m away</div>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold font-label-md text-label-md flex-shrink-0">
                  SJ
                </div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-bold truncate">Ssewankambo John</div>
<div className="font-body-sm text-body-sm text-secondary truncate">Pioneer Mall Stage Stage-01</div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="inline-block px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">
                  Idle &amp; Ready
                </span>
<div className="font-body-sm text-body-sm text-secondary mt-0.5">0m (On-site)</div>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold font-label-md text-label-md flex-shrink-0">
                  KR
                </div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-bold truncate">Kato Ronald</div>
<div className="font-body-sm text-body-sm text-secondary truncate">William St Central Hub</div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Staging parcel
                </span>
<div className="font-body-sm text-body-sm text-secondary mt-0.5">Hub Bay 2</div>
</div>
</div>
</div>
<div className="pt-1">
<button className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[16px]" />
              Ping Pioneer Boda Marshall
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="warning" className="text-primary-container text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Low Stock Warnings</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">2 SKUs Critical</span>
</div>
<div className="space-y-3.5">

<div className="space-y-1.5">
<div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
<span className="font-semibold truncate">SoundCore Space One (Jet Black)</span>
<span className="text-primary-container font-bold flex-shrink-0">4 units left</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"18%"}}></div>
</div>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
<span>Safe reorder threshold: 12 units</span>
<span className="font-mono text-label-sm text-label-sm">SKU-SC-SO-BLK</span>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
<span className="font-semibold truncate">Anker 65W GaN Dual Wall Charger</span>
<span className="text-error font-bold flex-shrink-0">2 units left</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
<div className="h-full bg-error rounded-full" style={{"width":"8%"}}></div>
</div>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
<span>Safe reorder threshold: 15 units</span>
<span className="font-mono text-label-sm text-label-sm">SKU-ANK-65W-WHT</span>
</div>
</div>
</div>
<button className="w-full py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1.5" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>
<Icon name="inventory" className="text-[18px]" />
            Update Stock &amp; Inventory
          </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 rounded-2xl bg-tertiary-container/20 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="account_balance_wallet" className="text-[28px]" />
</div>
<div className="space-y-0.5 min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">AVAILABLE FOR INSTANT WITHDRAWAL</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">Instant Settlement</span>
</div>
<div className="font-price-display text-price-display text-on-surface">
            UGX 6,240,000
          </div>
<div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm">
<span>Payout Account:</span>
<span className="font-semibold text-on-surface flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              MTN MoMo +256 772 ••• 456 (Sarah Namubiru)
            </span>
</div>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
<button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:shadow transition-all active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="currency_exchange" className="text-[20px]" />
          Instant Withdraw
        </button>
</div>
</div>
</div>
</div></main>
<footer className="w-full bg-surface-container-lowest py-space-md mt-auto shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="w-full px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm text-secondary font-body-sm text-body-sm"><div className="flex items-center gap-space-md flex-wrap"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span><span>Latency: 28ms</span></div><span>•</span><span>William St Central Hub: 99.8% Online</span><span>•</span><span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Bank of Uganda Escrow Regulated</span></div><div><span>© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span></div></div></footer>
    </div>
  );
};

export default Screen;
