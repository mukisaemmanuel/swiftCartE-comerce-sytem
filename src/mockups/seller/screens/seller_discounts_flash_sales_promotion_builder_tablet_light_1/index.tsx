// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_discounts_flash_sales_promotion_builder_tablet_light_1/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/logo-full.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span><span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">Open</span></div><span className="font-body-sm text-body-sm text-secondary truncate">Pioneer Mall G-14 • Kampala</span></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container-low"><span className="font-label-sm text-label-sm text-secondary uppercase">Escrow:</span><span className="font-label-md text-label-md text-on-surface font-bold">UGX 14,850,000</span></div><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-primary-fixed/40"><span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase">Today:</span><span className="font-label-md text-label-md text-on-primary-fixed font-bold">28 Dispatches</span></div><button aria-label="Theme indicator" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><div className="relative"><button aria-label="Notifications" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /></button><span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto h-11 border-t border-outline-variant/30 pt-1 pb-1" data-active-classes="bg-primary-container text-on-primary font-bold shadow-[0_2px_6px_rgba(255,87,34,0.35)]"><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders (6)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products (48)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="ai-studio" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet (4)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes (1)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="wallet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a></nav></div></header>
<main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full pb-16">

<div className="w-full bg-surface-container-lowest shadow-sm mb-space-lg">
<div className="max-w-[1440px] mx-auto px-gutter-desktop py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Promotions, Flash Deals &amp; Sponsored Ads</h1>
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> Live Gateway
          </span>
</div>
<p className="font-body-md text-body-md text-secondary">
          1 Campaign Active • 2 Scheduled • <span className="font-semibold text-on-surface">UGX 2,450,000</span> Boosted Revenue
        </p>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0">
<button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="history" className="text-[18px]" />
          Audit Log
        </button>
<button className="px-space-lg py-2 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 active:scale-98 flex items-center gap-2 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="add_circle" className="text-[20px]" />
          + Create New Campaign
        </button>
</div>
</div>
</div>
<div className="max-w-[1440px] mx-auto w-full px-gutter-desktop flex flex-col gap-space-lg">

<div className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-md overflow-hidden relative">
<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="p-space-lg md:p-space-xl flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg relative z-10">
<div className="flex flex-col gap-space-xs max-w-xl">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-2.5 py-1 rounded bg-black/25 text-white font-label-sm text-label-sm tracking-wide uppercase flex items-center gap-1">
<Icon name="bolt" className="text-[14px] text-amber-300" />
              ACTIVE FLASH SALE
            </span>
<span className="text-white/80 font-body-sm text-body-sm flex items-center gap-1">
<Icon name="timer" className="text-[16px]" />
              Ends in <strong className="text-white font-label-md text-label-md tracking-wider">14h 32m 08s</strong>
</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-white font-bold leading-tight mt-1">
            Kampala Tech Week Flash Sale
          </h2>
<p className="font-body-sm text-body-sm text-white/90">
            Automated SafeBoda express routing enabled • SoundCore flagship SKUs discounted across Central &amp; Nakawa divisions.
          </p>

<div className="flex items-center gap-space-xs flex-wrap mt-2">
<span className="text-white/80 font-label-sm text-label-sm mr-1">Active items:</span>
<span className="px-2 py-1 rounded-lg bg-white/15 text-white font-label-sm text-label-sm backdrop-blur-sm">
              Space One ANC <strong className="text-amber-200">(-15%)</strong>
</span>
<span className="px-2 py-1 rounded-lg bg-white/15 text-white font-label-sm text-label-sm backdrop-blur-sm">
              Liberty 4 NC <strong className="text-amber-200">(-12%)</strong>
</span>
<span className="px-2 py-1 rounded-lg bg-white/15 text-white font-label-sm text-label-sm backdrop-blur-sm">
              Anker 65W GaN <strong className="text-amber-200">(-10%)</strong>
</span>
</div>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col items-start xl:items-end gap-space-md flex-shrink-0">
<div className="grid grid-cols-3 gap-3 bg-black/20 p-space-md rounded-xl backdrop-blur-sm">
<div className="flex flex-col">
<span className="text-white/70 font-label-sm text-label-sm uppercase">Orders</span>
<span className="font-price-display text-price-display text-white">42</span>
</div>
<div className="flex flex-col border-l border-white/20 pl-3">
<span className="text-white/70 font-label-sm text-label-sm uppercase">GMV (UGX)</span>
<span className="font-price-display text-price-display text-white">9.84M</span>
</div>
<div className="flex flex-col border-l border-white/20 pl-3">
<span className="text-white/70 font-label-sm text-label-sm uppercase">Push Pings</span>
<span className="font-price-display text-price-display text-white">1,420</span>
</div>
</div>
<div className="flex items-center gap-space-xs flex-wrap">
<button className="px-space-md py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-label-md text-label-md backdrop-blur-sm transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[16px]" />
              Edit Prices
            </button>
<button className="px-space-md py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-label-md text-label-md backdrop-blur-sm transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="pause_circle" className="text-[16px]" />
              Pause Sale
            </button>
<button className="px-space-md py-2 rounded-xl bg-white text-on-surface font-label-md text-label-md shadow hover:bg-surface-bright transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="monitoring" className="text-[16px] text-primary" />
              Live Telemetry
            </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-lg">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold text-label-sm">
                01
              </span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Campaign Configuration</h3>
<p className="font-body-sm text-body-sm text-secondary">Craft flash deals, store vouchers, or SafeBoda subsidies</p>
</div>
</div>
<span className="px-space-sm py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-mono">
              UGANDA_ZONE_01
            </span>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Step 1 • Select Promotion Engine</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<Icon name="confirmation_number" className="text-primary text-[24px]" />
<input className="accent-primary-container" name="promo_type" type="radio" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Storewide Voucher</h4>
<p className="font-body-sm text-body-sm text-secondary">E.g., UGX 15,000 OFF on carts above UGX 100k</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-primary-fixed/30 shadow-sm cursor-pointer transition-all flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<Icon name="bolt" className="text-primary text-[24px]" />
<span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">Active Choice</span>
</div>
<input checked={true} className="accent-primary-container" name="promo_type" type="radio" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-primary-fixed">Flash Sale SKU Discount</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Time-sensitive high-velocity markdown (% or UGX)</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<Icon name="two_wheeler" className="text-tertiary text-[24px]" />
<input className="accent-primary-container" name="promo_type" type="radio" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Free Boda Delivery</h4>
<p className="font-body-sm text-body-sm text-secondary">Subsidize SafeBoda UGX 5,000 for Kololo &amp; Nakasero</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<Icon name="campaign" className="text-secondary text-[24px]" />
<input className="accent-primary-container" name="promo_type" type="radio" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Sponsored Search Ad</h4>
<p className="font-body-sm text-body-sm text-secondary">Priority #1 Kampala search carousel banner</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Step 2 • Parameters &amp; Schedule</label>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Campaign Name</span>
<input className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-white focus:outline-none transition-colors" type="text" value="SoundCore Friday Rush - Kampala Edition" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Discount Mechanism</span>
<div className="flex items-center p-1 bg-surface-container-low rounded-xl">
<button className="flex-1 py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
                    Percentage (%)
                  </button>
<button className="flex-1 py-1.5 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
                    Fixed UGX Cut
                  </button>
</div>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Discount Value</span>
<div className="relative flex items-center">
<input className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md pr-10 focus:bg-white focus:outline-none" type="text" value="15" />
<span className="absolute right-3 font-label-md text-label-md text-secondary">% OFF</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Min Cart Threshold (Optional)</span>
<div className="relative flex items-center">
<input className="w-full pl-12 pr-space-md py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-white focus:outline-none" type="text" value="150,000" />
<span className="absolute left-3 font-label-sm text-label-sm text-secondary font-bold">UGX</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Target Audience</span>
<select className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-white focus:outline-none">
<option selected={true}>All Kampala Shoppers (Geofenced)</option>
<option>Store Followers Only (1,420 Users)</option>
<option>SafeBoda Repeat Customers</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary">Effective Promotion Window</span>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
<Icon name="calendar_today" className="text-[18px] text-primary" />
<span>Friday 28 Feb, 2025</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm font-mono text-on-surface">00:00 EAT</span>
<span className="text-secondary">→</span>
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm font-mono text-on-surface">23:59 EAT</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Step 3 • Select Enrolled SKUs (4)</label>
<span className="text-tertiary font-label-sm text-label-sm font-semibold">Stock Synced • Pioneer Mall Hub</span>
</div>
<div className="flex flex-col gap-2">

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-all">
<div className="flex items-center gap-space-sm min-w-0">
<input checked={true} className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="SoundCore Space One active noise cancelling over ear headphones in matte black finish on sleek studio backdrop with high key lighting" src={`${assetBase}/images/1ae29b49b89621fc.webp`} />
<div className="min-w-0 flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-secondary">SKU: SC-SPO-BLK • 24 in stock</span>
</div>
</div>
<div className="flex items-center gap-space-md text-right flex-shrink-0">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm line-through text-secondary">UGX 248,500</span>
<span className="font-label-lg text-label-lg font-bold text-primary">UGX 211,225</span>
</div>
<span className="px-2 py-1 rounded-md bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                    -15%
                  </span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-all">
<div className="flex items-center gap-space-sm min-w-0">
<input checked={true} className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="SoundCore Liberty 4 NC wireless earbuds in white charging case studio product shot soft shadow lighting" src={`${assetBase}/images/c98bcd103cb7c327.webp`} />
<div className="min-w-0 flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Liberty 4 NC Earbuds</span>
<span className="font-body-sm text-body-sm text-secondary">SKU: SC-LIB4-WHT • 18 in stock</span>
</div>
</div>
<div className="flex items-center gap-space-md text-right flex-shrink-0">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm line-through text-secondary">UGX 195,000</span>
<span className="font-label-lg text-label-lg font-bold text-primary">UGX 165,750</span>
</div>
<span className="px-2 py-1 rounded-md bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                    -15%
                  </span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-all">
<div className="flex items-center gap-space-sm min-w-0">
<input className="accent-primary-container w-4 h-4 rounded" type="checkbox" />
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Anker Motion Plus waterproof Bluetooth outdoor portable speaker with metal grill and dark rugged finish" src={`${assetBase}/images/9282e88b74a991d6.webp`} />
<div className="min-w-0 flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Anker SoundCore Motion+ 30W</span>
<span className="font-body-sm text-body-sm text-secondary">SKU: SC-MOT-30W • 9 in stock</span>
</div>
</div>
<div className="flex items-center gap-space-md text-right flex-shrink-0">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">UGX 320,000</span>
<span className="font-label-sm text-label-sm text-secondary">Regular</span>
</div>
<span className="px-2 py-1 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm">
                    Inactive
                  </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Step 4 • Settlement &amp; Net Margin Simulator</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="bolt" className="text-[14px]" /> Instant MoMo Escrow
              </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col gap-1.5 font-body-sm text-body-sm">
<div className="flex justify-between text-secondary">
<span>Regular Retail (MSRP):</span>
<span className="font-mono text-on-surface">UGX 248,500</span>
</div>
<div className="flex justify-between text-primary font-medium">
<span>Flash Sale Cut (-15%):</span>
<span className="font-mono">-UGX 37,275</span>
</div>
<div className="flex justify-between text-on-surface font-semibold pt-1 border-t border-outline-variant/30">
<span>Buyer Purchase Price:</span>
<span className="font-mono">UGX 211,225</span>
</div>
</div>
<div className="flex flex-col gap-1.5 font-body-sm text-body-sm">
<div className="flex justify-between text-secondary">
<span>SwiftCart Platform Fee (8%):</span>
<span className="font-mono text-error">-UGX 16,898</span>
</div>
<div className="flex justify-between text-secondary">
<span>Escrow &amp; SafeBoda Levy:</span>
<span className="font-mono text-tertiary">UGX 0 (Subsidized)</span>
</div>
<div className="flex justify-between text-on-surface font-bold pt-1 border-t border-outline-variant/30">
<span>Merchant MoMo Net:</span>
<span className="font-mono text-tertiary text-label-lg font-bold">UGX 194,327</span>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary text-xs italic mt-1">
              * Funds release automatically to MTN Mobile Money / Airtel Money merchant code 910443 as soon as rider confirms customer 6-digit handover OTP.
            </p>
</div>

<div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-space-md">
<span className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
<Icon name="verified" className="text-tertiary text-[18px]" />
              1,420 Push notifications queued for blast
            </span>
<button className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg shadow hover:shadow-md active:scale-98 transition-all flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="rocket_launch" className="text-[20px]" />
              Launch Campaign &amp; Notify Followers
            </button>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="confirmation_number" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Live Vouchers</h3>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
              Manage All
            </button>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono font-bold text-label-md tracking-wider">
                  KAMPALAFIRST
                </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">
                  Active
                </span>
</div>
<p className="font-label-md text-label-md text-on-surface">UGX 15,000 OFF Storewide</p>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-1">
<span>68 claims • UGX 1,020,000 cut</span>
<span className="text-tertiary font-semibold">ROI: 7.4x</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono font-bold text-label-md tracking-wider">
                  BODAFREE
                </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">
                  Active
                </span>
</div>
<p className="font-label-md text-label-md text-on-surface">Free SafeBoda Delivery Express</p>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-1">
<span>114 claims • SafeBoda Subsidy UGX 570k</span>
<span className="text-tertiary font-semibold">ROI: 9.1x</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low opacity-70 flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-mono font-bold text-label-md line-through">
                  NEWYEAR25
                </span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                  Expired 31 Jan
                </span>
</div>
<p className="font-label-md text-label-md text-secondary">10% OFF Storewide</p>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-1">
<span>182 claims • UGX 2.8M GMV</span>
<span>Archived</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="ads_click" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sponsored Ad Inventory</h3>
</div>
<span className="px-2 py-0.5 rounded bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm">
              Live Bidding
            </span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="search" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">“ANC Headphones”</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                  Rank #1
                </span>
</div>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-1">
<span>Bid: <strong className="text-on-surface">UGX 450</strong> / click</span>
<span>94 Clicks Today</span>
</div>

<div className="w-full pt-1">
<svg className="w-full h-8 text-primary overflow-visible" fill="none" viewBox="0 0 200 30">
<path d="M0,25 Q30,22 60,15 T120,8 T160,18 T200,4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="fill-primary-container" cx="200" cy="4" r="3.5"></circle>
</svg>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="category" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">Audio &amp; Sound Banner</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                  3.8x ROAS
                </span>
</div>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-1">
<span>Daily Budget: <strong className="text-on-surface">UGX 25,000</strong></span>
<span>12.4k Impressions</span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_chart" className="text-[18px] text-primary" />
              Boost Ad Spend • Auto-Optimize
            </button>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-tertiary/10 via-surface-container-low to-tertiary/5 p-space-lg flex items-start gap-space-md shadow-sm">
<div className="w-10 h-10 rounded-xl bg-tertiary flex items-center justify-center flex-shrink-0 text-on-tertiary">
<Icon name="lightbulb" className="text-[22px]" />
</div>
<div className="flex flex-col gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Kampala Merchant Velocity Tip</h4>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
              Offering <strong className="text-on-surface">Free SafeBoda Delivery</strong> within Central Division (Nakasero, Kololo, Kamwokya) increases checkout completion rate by <strong className="text-tertiary font-bold">+28%</strong> on electronic accessories.
            </p>
</div>
</div>
</div>
</div>
</div>
</div></main>
<footer className="w-full bg-surface-container-lowest py-space-md mt-auto shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="w-full px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm text-secondary font-body-sm text-body-sm"><div className="flex items-center gap-space-md flex-wrap"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span><span>Latency: 28ms</span></div><span>•</span><span>William St Central Hub: 99.8% Online</span><span>•</span><span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Bank of Uganda Escrow Regulated</span></div><div><span>© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span></div></div></footer>
    </div>
  );
};

export default Screen;
