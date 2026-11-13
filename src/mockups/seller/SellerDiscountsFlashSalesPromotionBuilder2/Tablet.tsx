// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_discounts_flash_sales_promotion_builder_tablet_light_2/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-container-high shadow-[0_2px_12px_rgba(13,28,47,0.04)]">

<div className="px-5 py-2.5 flex items-center justify-between gap-3">

<div className="flex items-center gap-3 min-w-0">
<img alt="SwiftCart Uganda" className="h-[38px] w-auto object-contain flex-shrink-0" src={`${assetBase}/images/1c4eb0924c9c9129.webp`} />
<div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-bold text-[15px] text-on-surface tracking-tight truncate">SoundCore Uganda Official</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary text-[11px] font-bold border border-emerald-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Open
            </span>
</div>
<span className="text-[12px] text-secondary truncate">Pioneer Mall G-14 • Kampala Central</span>
</div>
</div>

<div className="flex items-center gap-2.5 flex-shrink-0">
<div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low border border-slate-200/70">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Escrow:</span>
<span className="text-[13px] font-bold text-on-surface">UGX 14,850,000</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200/70">
<span className="text-[11px] font-semibold text-primary uppercase tracking-wider">Today:</span>
<span className="text-[13px] font-bold text-primary">28 Dispatches</span>
</div>
<button aria-label="Theme indicator" className="w-8 h-8 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant flex items-center justify-center transition-colors border border-slate-200/60" type="button" onClick={() => toggleTheme()}>
<Icon name="light_mode" className="text-[18px]" />
</button>
<div className="relative">
<button aria-label="Notifications" className="w-8 h-8 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant flex items-center justify-center transition-colors border border-slate-200/60" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="notifications" className="text-[18px]" />
</button>
<span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-primary-container text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">3</span>
</div>
<div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm ring-2 ring-primary/20">
<Icon name="person" className="text-[19px]" />
</div>
</div>
</div>

<nav className="flex items-center gap-1 px-5 overflow-x-auto no-scrollbar border-t border-slate-100 py-1.5 bg-slate-50/70">
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders <span className="text-xs text-secondary/80">(6)</span></a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products <span className="text-xs text-secondary/80">(48)</span></a>
<a className="px-3 py-1.5 rounded-lg text-primary font-semibold hover:bg-white text-[13px] whitespace-nowrap transition-all flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="auto_awesome" className="text-[15px]" /> AI Studio
      </a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet <span className="text-xs text-secondary/80">(4)</span></a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes <span className="text-xs text-secondary/80">(1)</span></a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics</a>

<a className="px-3 py-1.5 rounded-lg bg-primary-container text-white font-bold text-[13px] whitespace-nowrap shadow-sm flex items-center gap-1.5" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="campaign" className="text-[16px]" /> Discounts &amp; Ads
      </a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-white text-[13px] font-medium whitespace-nowrap transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a>
</nav>
</header>
<main className="flex-1 w-full max-w-[834px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">

<div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 flex-wrap">
<h1 className="text-[17px] font-extrabold text-on-surface tracking-tight">Promotions, Flash Deals &amp; Sponsored Ads</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-tertiary text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> Live Gateway
          </span>
</div>
<p className="text-[12.5px] text-secondary">
          1 Campaign Active • 2 Scheduled • <span className="font-bold text-on-surface">UGX 2,450,000</span> Boosted Revenue
        </p>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl border border-slate-200 bg-surface-container-low hover:bg-slate-100 text-on-surface text-[12.5px] font-semibold flex items-center justify-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="history" className="text-[17px] text-secondary" />
          Audit Log
        </button>
<button className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl bg-primary-container hover:bg-primary text-white text-[12.5px] font-bold shadow-sm active:scale-95 flex items-center justify-center gap-1.5 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="add_circle" className="text-[18px]" />
          + Create New Campaign
        </button>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[#c23600] to-primary-container text-white shadow-md p-4 sm:p-5">
<div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
<div className="flex flex-col gap-3 relative z-10">

<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/35 backdrop-blur-md text-amber-300 font-extrabold text-[11px] tracking-wider uppercase border border-white/15">
<Icon name="bolt" className="text-[14px]" />
              ACTIVE FLASH SALE
            </span>
<div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[12px] font-semibold text-white">
<Icon name="timer" className="text-[14px]" />
<span>08h : 42m : 15s remaining</span>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/40 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            SafeBoda Express Telemetry Live
          </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h2 className="text-[20px] font-extrabold text-white tracking-tight leading-snug">Kampala Tech Week Flash Sale</h2>
<p className="text-[12.5px] text-white/85">Automated geo-push blasts active across Nakasero, Kololo &amp; Makerere corridors.</p>
</div>

<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-1 rounded-lg bg-white/20 text-white text-[11px] font-bold backdrop-blur-sm border border-white/20">
              Space One ANC <strong className="text-amber-200">(-15%)</strong>
</span>
<span className="px-2 py-1 rounded-lg bg-white/20 text-white text-[11px] font-bold backdrop-blur-sm border border-white/20">
              Liberty 4 NC <strong className="text-amber-200">(-12%)</strong>
</span>
<span className="px-2 py-1 rounded-lg bg-white/20 text-white text-[11px] font-bold backdrop-blur-sm border border-white/20">
              Motion+ <strong className="text-amber-200">(-10%)</strong>
</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/20">
<div className="bg-black/25 backdrop-blur-sm rounded-xl p-2.5 flex flex-col">
<span className="text-[11px] font-medium text-white/75 uppercase tracking-wide">Orders Generated</span>
<span className="text-[20px] font-black text-white leading-tight">42</span>
</div>
<div className="bg-black/25 backdrop-blur-sm rounded-xl p-2.5 flex flex-col">
<span className="text-[11px] font-medium text-white/75 uppercase tracking-wide">GMV (UGX)</span>
<span className="text-[20px] font-black text-white leading-tight">9.84M</span>
</div>
<div className="bg-black/25 backdrop-blur-sm rounded-xl p-2.5 flex flex-col">
<span className="text-[11px] font-medium text-white/75 uppercase tracking-wide">Push Pings Sent</span>
<span className="text-[20px] font-black text-white leading-tight">1,420</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

<section className="md:col-span-7 flex flex-col gap-4">
<div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col gap-4">

<div className="flex items-center justify-between border-b border-slate-100 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-lg bg-orange-100 text-primary font-extrabold text-[12px] flex items-center justify-center">
                01
              </span>
<div>
<h3 className="text-[15px] font-bold text-on-surface">Campaign Configuration</h3>
<p className="text-[11.5px] text-secondary">Craft flash deals, store vouchers, or SafeBoda subsidies</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-low text-[11px] font-mono font-semibold text-secondary border border-slate-200">
              UGANDA_ZONE_01
            </span>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="text-[11.5px] font-bold text-on-surface uppercase tracking-wider">Step 1 • Select Promotion Engine</label>
<span className="text-[11px] text-primary font-semibold">1 Selected</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

<label className="border border-slate-200 rounded-xl p-3 bg-surface-container-lowest hover:border-slate-300 hover:bg-slate-50/50 cursor-pointer transition-all flex flex-col justify-between gap-2">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center">
<Icon name="confirmation_number" className="text-[19px]" />
</div>
<input className="accent-primary-container w-4 h-4" name="promo_engine" type="radio" />
</div>
<div>
<h4 className="text-[13px] font-bold text-on-surface">Storewide Voucher</h4>
<p className="text-[11px] text-secondary leading-snug mt-0.5">E.g., UGX 15,000 OFF on carts above UGX 100k</p>
</div>
</label>

<label className="border-2 border-primary-container rounded-xl p-3 bg-orange-50/40 shadow-sm cursor-pointer transition-all flex flex-col justify-between gap-2 relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1.5">
<div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center shadow-xs">
<Icon name="bolt" className="text-[19px]" />
</div>
<span className="px-1.5 py-0.5 rounded bg-primary text-white text-[9.5px] font-extrabold uppercase">Active Choice</span>
</div>
<input checked={true} className="accent-primary-container w-4 h-4" name="promo_engine" type="radio" />
</div>
<div>
<h4 className="text-[13px] font-bold text-primary">Flash Sale SKU Discount</h4>
<p className="text-[11px] text-on-surface-variant leading-snug mt-0.5">Time-sensitive high-velocity markdown (% or UGX)</p>
</div>
</label>

<label className="border border-slate-200 rounded-xl p-3 bg-surface-container-lowest hover:border-slate-300 hover:bg-slate-50/50 cursor-pointer transition-all flex flex-col justify-between gap-2">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-tertiary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[19px]" />
</div>
<input className="accent-primary-container w-4 h-4" name="promo_engine" type="radio" />
</div>
<div>
<h4 className="text-[13px] font-bold text-on-surface">Free Boda Delivery</h4>
<p className="text-[11px] text-secondary leading-snug mt-0.5">Subsidize SafeBoda UGX 5,000 for Kololo &amp; Nakasero</p>
</div>
</label>

<label className="border border-slate-200 rounded-xl p-3 bg-surface-container-lowest hover:border-slate-300 hover:bg-slate-50/50 cursor-pointer transition-all flex flex-col justify-between gap-2">
<div className="flex items-start justify-between">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
<Icon name="campaign" className="text-[19px]" />
</div>
<input className="accent-primary-container w-4 h-4" name="promo_engine" type="radio" />
</div>
<div>
<h4 className="text-[13px] font-bold text-on-surface">Sponsored Search Ad</h4>
<p className="text-[11px] text-secondary leading-snug mt-0.5">Priority #1 Kampala search carousel banner</p>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-3 pt-1 border-t border-slate-100">
<label className="text-[11.5px] font-bold text-on-surface uppercase tracking-wider">Step 2 • Parameters &amp; Schedule</label>

<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Campaign Name</span>
<input className="w-full px-3 py-2 text-[13px] rounded-xl bg-surface-container-low border border-slate-200 text-on-surface font-medium focus:bg-white focus:border-primary-container focus:ring-0 transition-all" type="text" value="SoundCore Friday Rush - Kampala Edition" />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Discount Mechanism</span>
<div className="flex items-center p-1 bg-surface-container-low border border-slate-200 rounded-xl">
<button className="flex-1 py-1 rounded-lg bg-white font-bold text-[12px] text-primary shadow-xs border border-slate-200/50" type="button" onClick={() => alertToast('Action triggered')}>
                    Percentage (%)
                  </button>
<button className="flex-1 py-1 rounded-lg font-medium text-[12px] text-secondary hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
                    Fixed UGX Cut
                  </button>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Discount Value</span>
<div className="relative flex items-center">
<input className="w-full px-3 py-1.5 text-[13px] rounded-xl bg-surface-container-low border border-slate-200 text-on-surface font-bold pr-12 focus:bg-white focus:border-primary-container focus:ring-0" type="text" value="15" />
<span className="absolute right-3 text-[12px] font-bold text-primary">% OFF</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Min Cart Threshold</span>
<div className="relative flex items-center">
<span className="absolute left-3 text-[11px] font-bold text-secondary">UGX</span>
<input className="w-full pl-12 pr-3 py-1.5 text-[13px] rounded-xl bg-surface-container-low border border-slate-200 text-on-surface font-medium focus:bg-white focus:border-primary-container focus:ring-0" type="text" value="150,000" />
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Target Audience</span>
<select className="w-full px-3 py-1.5 text-[12.5px] rounded-xl bg-surface-container-low border border-slate-200 text-on-surface font-medium focus:bg-white focus:border-primary-container focus:ring-0">
<option selected={true}>All Kampala Shoppers (Geofenced)</option>
<option>Store Followers Only (1,420 Users)</option>
<option>SafeBoda Repeat Customers</option>
</select>
</div>
</div>

<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-secondary">Effective Promotion Window</span>
<div className="p-2.5 rounded-xl bg-surface-container-low border border-slate-200 flex items-center justify-between gap-2 text-[12px]">
<div className="flex items-center gap-1.5 font-medium text-on-surface">
<Icon name="calendar_today" className="text-[17px] text-primary" />
<span>Friday 28 Feb, 2025</span>
</div>
<div className="flex items-center gap-1.5 font-mono text-[11.5px] text-secondary">
<span className="bg-white px-2 py-0.5 rounded border border-slate-200 text-on-surface font-semibold">00:00 EAT</span>
<span>→</span>
<span className="bg-white px-2 py-0.5 rounded border border-slate-200 text-on-surface font-semibold">23:59 EAT</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-1 border-t border-slate-100">
<div className="flex items-center justify-between">
<label className="text-[11.5px] font-bold text-on-surface uppercase tracking-wider">Step 3 • Select Enrolled SKUs (4 items)</label>
<span className="text-[11px] text-tertiary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Stock Synced • Pioneer Mall Hub
              </span>
</div>
<div className="flex flex-col gap-2">

<div className="p-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-primary-container/40 flex items-center justify-between gap-2 transition-all">
<div className="flex items-center gap-2.5 min-w-0">
<input checked={true} className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-11 h-11 rounded-lg object-cover bg-slate-100 flex-shrink-0 border border-slate-200/60" data-alt="SoundCore Space One active noise cancelling over ear headphones in matte black finish on sleek studio backdrop with high key lighting" src={`${assetBase}/images/1ae29b49b89621fc.webp`} />
<div className="min-w-0 flex flex-col">
<span className="text-[12.5px] font-bold text-on-surface truncate">SoundCore Space One ANC</span>
<span className="text-[11px] text-secondary truncate">Jet Black • 24 in stock</span>
</div>
</div>
<div className="flex items-center gap-2 text-right flex-shrink-0">
<div className="flex flex-col">
<span className="text-[11px] line-through text-secondary">UGX 248,500</span>
<span className="text-[13px] font-extrabold text-primary">UGX 211,225</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-tertiary border border-emerald-200 text-[11px] font-black">
                    -15%
                  </span>
</div>
</div>

<div className="p-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-primary-container/40 flex items-center justify-between gap-2 transition-all">
<div className="flex items-center gap-2.5 min-w-0">
<input checked={true} className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-11 h-11 rounded-lg object-cover bg-slate-100 flex-shrink-0 border border-slate-200/60" data-alt="SoundCore Liberty 4 NC wireless earbuds in white charging case studio product shot soft shadow lighting" src={`${assetBase}/images/c98bcd103cb7c327.webp`} />
<div className="min-w-0 flex flex-col">
<span className="text-[12.5px] font-bold text-on-surface truncate">SoundCore Liberty 4 NC Earbuds</span>
<span className="text-[11px] text-secondary truncate">Pearl White • 18 in stock</span>
</div>
</div>
<div className="flex items-center gap-2 text-right flex-shrink-0">
<div className="flex flex-col">
<span className="text-[11px] line-through text-secondary">UGX 195,000</span>
<span className="text-[13px] font-extrabold text-primary">UGX 165,750</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-tertiary border border-emerald-200 text-[11px] font-black">
                    -15%
                  </span>
</div>
</div>

<div className="p-2.5 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-between gap-2 opacity-80">
<div className="flex items-center gap-2.5 min-w-0">
<input className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-11 h-11 rounded-lg object-cover bg-slate-200 flex-shrink-0 border border-slate-200" data-alt="Anker Motion Plus waterproof Bluetooth outdoor portable speaker with metal grill and dark rugged finish" src={`${assetBase}/images/9282e88b74a991d6.webp`} />
<div className="min-w-0 flex flex-col">
<span className="text-[12.5px] font-bold text-on-surface truncate">Anker SoundCore Motion+ 30W</span>
<span className="text-[11px] text-secondary truncate">SKU: SC-MOT-30W • 9 in stock</span>
</div>
</div>
<div className="flex items-center gap-2 text-right flex-shrink-0">
<div className="flex flex-col">
<span className="text-[12px] font-bold text-secondary">UGX 320,000</span>
<span className="text-[10.5px] text-secondary">Regular</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-slate-200/80 text-secondary text-[11px] font-semibold">
                    Inactive
                  </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low border border-slate-200/90 p-3.5 flex flex-col gap-2.5">
<div className="flex items-center justify-between border-b border-slate-200 pb-2">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Step 4 • Settlement &amp; Net Margin Simulator</span>
<span className="text-tertiary text-[11px] font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" /> Instant MoMo Escrow
              </span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]">
<div className="flex justify-between py-0.5 text-secondary border-b border-dashed border-slate-200">
<span>Regular Retail (MSRP):</span>
<span className="font-mono font-medium text-on-surface">UGX 248,500</span>
</div>
<div className="flex justify-between py-0.5 text-primary font-medium border-b border-dashed border-slate-200">
<span>Flash Sale Cut (-15%):</span>
<span className="font-mono font-bold">-UGX 37,275</span>
</div>
<div className="flex justify-between py-0.5 text-secondary border-b border-dashed border-slate-200">
<span>SwiftCart Platform Fee (8%):</span>
<span className="font-mono text-error font-medium">-UGX 16,898</span>
</div>
<div className="flex justify-between py-0.5 text-secondary border-b border-dashed border-slate-200">
<span>Escrow &amp; SafeBoda Levy:</span>
<span className="font-mono text-tertiary font-medium">UGX 0 (Subsidized)</span>
</div>
<div className="flex justify-between py-1 text-on-surface font-semibold bg-white/70 px-2 rounded">
<span>Buyer Purchase Price:</span>
<span className="font-mono font-bold text-on-surface">UGX 211,225</span>
</div>
<div className="flex justify-between py-1 text-on-surface font-bold bg-emerald-50 border border-emerald-200 px-2 rounded">
<span className="text-tertiary">Merchant MoMo Net:</span>
<span className="font-mono text-tertiary font-black text-[13px]">UGX 194,327</span>
</div>
</div>
<p className="text-[10.5px] text-secondary italic leading-tight pt-1">
              * Funds release automatically to MTN Mobile Money / Airtel Money merchant code 910443 upon delivery OTP confirmation.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
<label className="flex items-center gap-2 cursor-pointer text-secondary hover:text-on-surface">
<input checked={true} className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<span className="text-[12px] font-medium flex items-center gap-1">
<Icon name="verified" className="text-tertiary text-[16px]" />
                1,420 Push notifications queued for blast
              </span>
</label>
<button className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-white font-bold text-[13px] shadow-sm hover:shadow active:scale-95 transition-all flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="rocket_launch" className="text-[19px]" />
              Launch Campaign &amp; Notify Followers
            </button>
</div>
</div>
</section>

<aside className="md:col-span-5 flex flex-col gap-4">

<div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between border-b border-slate-100 pb-2">
<div className="flex items-center gap-1.5">
<Icon name="confirmation_number" className="text-primary text-[20px]" />
<h3 className="text-[14px] font-bold text-on-surface">Live Vouchers &amp; Coupons</h3>
</div>
<button className="text-[11.5px] font-bold text-primary hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
              Manage All
            </button>
</div>
<div className="flex flex-col gap-2.5">

<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-white text-on-surface font-mono font-bold text-[12px] tracking-wider border border-slate-200">
                  KAMPALAFIRST
                </span>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-bold text-[10.5px] border border-emerald-200">
                  Active
                </span>
</div>
<p className="text-[13px] font-bold text-on-surface">UGX 15,000 OFF Storewide</p>
<div className="flex items-center justify-between text-secondary text-[11px] pt-0.5 border-t border-slate-200/60">
<span>68 claims • UGX 1,020,000 cut</span>
<span className="text-tertiary font-bold">ROI: 7.4x</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-white text-on-surface font-mono font-bold text-[12px] tracking-wider border border-slate-200">
                  BODAFREE
                </span>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-bold text-[10.5px] border border-emerald-200">
                  Active
                </span>
</div>
<p className="text-[13px] font-bold text-on-surface">Free SafeBoda Delivery Express</p>
<div className="flex items-center justify-between text-secondary text-[11px] pt-0.5 border-t border-slate-200/60">
<span>114 claims • Subsidy UGX 570k</span>
<span className="text-tertiary font-bold">ROI: 9.1x</span>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 opacity-70 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-white text-secondary font-mono font-bold text-[11px] line-through border border-slate-200">
                  NEWYEAR25
                </span>
<span className="px-2 py-0.5 rounded-full bg-slate-200 text-secondary font-semibold text-[10px]">
                  Expired 31 Jan
                </span>
</div>
<p className="text-[12px] font-semibold text-secondary">10% OFF Storewide</p>
<div className="flex items-center justify-between text-secondary text-[10.5px]">
<span>182 claims • UGX 2.8M GMV</span>
<span>Archived</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between border-b border-slate-100 pb-2">
<div className="flex items-center gap-1.5">
<Icon name="ads_click" className="text-primary text-[20px]" />
<h3 className="text-[14px] font-bold text-on-surface">Sponsored Ad Inventory</h3>
</div>
<span className="px-2 py-0.5 rounded bg-orange-100 text-primary font-bold text-[10.5px]">
              Live Bidding
            </span>
</div>
<div className="flex flex-col gap-2.5">

<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-[12.5px] font-bold text-on-surface">
<Icon name="search" className="text-primary text-[16px]" />
<span>“ANC Headphones”</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-tertiary text-[10.5px] font-extrabold">
                  Rank #1
                </span>
</div>
<div className="flex items-center justify-between text-secondary text-[11.5px]">
<span>Bid: <strong className="text-on-surface">UGX 450</strong> / click</span>
<span className="font-semibold text-on-surface">94 Clicks Today</span>
</div>

<div className="w-full pt-1">
<svg className="w-full h-6 text-primary" fill="none" viewBox="0 0 200 30">
<path d="M0,24 Q30,22 60,14 T120,8 T160,16 T200,4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="fill-primary" cx="200" cy="4" r="3.5"></circle>
</svg>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-[12.5px] font-bold text-on-surface">
<Icon name="category" className="text-secondary text-[16px]" />
<span>Audio &amp; Sound Banner</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-tertiary text-[10.5px] font-extrabold">
                  3.8x ROAS
                </span>
</div>
<div className="flex items-center justify-between text-secondary text-[11.5px]">
<span>Daily Budget: <strong className="text-on-surface">UGX 25,000</strong></span>
<span>12.4k Impressions</span>
</div>
</div>

<button className="w-full py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-bold text-[12.5px] border border-slate-200 transition-all flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_chart" className="text-[17px] text-primary" />
              Boost Ad Spend • Auto-Optimize
            </button>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-surface-container-low to-emerald-100/40 border border-emerald-200/80 p-3.5 flex items-start gap-3 shadow-xs">
<div className="w-8 h-8 rounded-xl bg-tertiary flex items-center justify-center flex-shrink-0 text-white shadow-xs">
<Icon name="lightbulb" className="text-[19px]" />
</div>
<div className="flex flex-col gap-0.5">
<h4 className="text-[12.5px] font-bold text-on-surface">Kampala Merchant Velocity Tip</h4>
<p className="text-[11.5px] text-secondary leading-relaxed">
              Offering <strong className="text-on-surface">Free SafeBoda Delivery</strong> within Central Division (Nakasero, Kololo, Kamwokya) increases checkout completion rate by <strong className="text-tertiary font-bold">+28%</strong> on electronic accessories.
            </p>
</div>
</div>
</aside>
</div>
</main>
<footer className="w-full bg-white border-t border-slate-200 py-3 mt-6">
<div className="max-w-[834px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-secondary text-[11.5px]">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-tertiary font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Latency: 28ms
        </span>
<span>•</span>
<span>William St Central Hub: 99.8% Online</span>
<span>•</span>
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Bank of Uganda Escrow Regulated</span>
</div>
<div>
<span>© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span>
</div>
</div>
</footer>
    </div>
  );
};

export default Tablet;
