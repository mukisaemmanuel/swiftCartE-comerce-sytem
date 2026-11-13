// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_overview_swiftcart_desktop/code.html
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
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface z-50 flex flex-col justify-between py-space-md border-r border-surface-container-highest/60 select-none"><div className="flex flex-col gap-space-md"><div className="px-space-md flex items-center justify-between pb-space-sm border-b border-surface-container-highest/40"><div className="flex items-center gap-space-xs"><Icon name="electric_moped" className="text-action-gradient-start text-[20px]" /><span className="font-label-lg text-label-lg tracking-wider text-on-surface uppercase">SwiftCart</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase font-bold tracking-tight">Uganda</span></div><nav className="flex flex-col gap-space-sm px-space-sm overflow-y-auto" data-active-classes="bg-surface-container-high text-on-surface font-label-md font-bold rounded-lg border-l-2 border-action-gradient-start"><div className="px-space-sm pt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Daily Operations</span></div><a aria-current="page" className="group flex items-center justify-between px-space-sm py-2 transition-all bg-surface-container-high text-on-surface font-label-md font-bold rounded-lg border-l-2 border-action-gradient-start" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="dashboard" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shopping_bag" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">14 Pending</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-1.5 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">2 Low</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">6 Active</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Post-Purchase</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="warning" className="text-[19px] text-danger-penalty group-hover:text-error" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">1 Case</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Business &amp; Finance</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">14.8M</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="bar_chart" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_offer" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Settings</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="verified" className="text-emerald-escrow text-[16px]" /></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings-notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Settings</span></div></a></nav></div><div className="px-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-highest/40 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kampala Hub Node</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Direct Escrow Active</span></div></div><Icon name="lock" className="text-on-surface-variant text-[16px]" /></div></div></aside>
<div className="pl-60 min-h-screen bg-surface-dark flex flex-col"><header className="fixed top-0 left-60 right-0 h-16 bg-surface/90 backdrop-blur-md z-40 px-space-xl flex items-center justify-between border-b border-surface-container-highest/60"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="px-2 py-0.5 rounded bg-surface-container-high text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-widest">Seller Portal</span><div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant pl-space-sm border-l border-surface-container-highest/60"><Icon name="verified" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">SoundCore Uganda Official</span><span className="font-label-sm text-label-sm text-on-surface-variant/80">URSB Verified • Nakasero Flagship</span></div></div></div><div className="flex items-center gap-space-lg"><div className="relative hidden md:block w-72"><Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" /><input className="w-full h-10 bg-surface-container-low rounded-lg pl-9 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-highest/50" placeholder="Search SKU, Order ID, Rider..." type="text" /></div><div className="flex items-center gap-space-sm"><div className="flex items-center p-1 rounded-lg bg-surface-container-low border border-surface-container-highest/50"><button className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[15px]" />Dark</button><button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[15px]" />Light</button></div><button className="relative p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors border border-surface-container-highest/50" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-airtel-red ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-sm border-l border-surface-container-highest/60"><div className="relative flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs">KR</div><span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow ring-2 ring-surface"></span></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Store Manager</span></div></div></div></div></header><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full gap-space-lg pb-12">

<div className="w-full bg-surface-container-low rounded-xl px-space-md py-space-xs flex flex-wrap items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span>
</span>
<span className="font-label-md text-label-md text-on-surface">Kampala Core Logistics Grid Sync: Online</span>
<span className="text-on-surface-variant/40">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="flash_on" className="text-[16px] text-action-gradient-start" />
        Instant SafeBoda Priority Staging Active
      </span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
        URSB Verified Escrow Vault Active
      </span>
<span className="font-code-display text-label-sm text-on-surface-variant/70">EAT 15:42:19</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg bg-surface-container-low rounded-2xl p-space-xl shadow-md relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-1 z-10">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-action-gradient-start font-bold">Nakasero Flagship Hub #UG-04</span>
<span className="text-on-surface-variant/50">•</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[14px]" />
          Tier 1 Merchant
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
        Welcome back, Kizito Ronald
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        Store Online • Instant SafeBoda Dispatch Active across Kampala Central &amp; Nakawa
      </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm z-10">
<button className="h-11 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add_box" className="text-[18px] text-action-gradient-start" />
        Add Product
      </button>
<button className="h-11 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="price_change" className="text-[18px] text-secondary" />
        Bulk Price Update
      </button>
<button className="h-11 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px] text-on-surface-variant" />
        Print Manifest
      </button>
<button className="h-11 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center gap-2 shadow-lg shadow-action-gradient-end/30 hover:scale-[1.02] active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="account_balance_wallet" className="text-[19px]" />
        Withdraw Payout
      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Today's Gross Revenue</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold mt-1">UGX 4,820,000</span>
</div>
<div className="w-10 h-10 rounded-xl bg-action-gradient-start/15 flex items-center justify-center text-action-gradient-start">
<Icon name="payments" className="text-[22px]" />
</div>
</div>

<div className="flex items-end justify-between mt-space-md pt-space-xs">
<div className="flex items-center gap-1.5 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<Icon name="trending_up" className="text-[16px] text-tertiary font-bold" />
<span className="font-label-sm text-label-sm text-tertiary font-bold">+18.4% vs yday</span>
</div>

<svg className="w-24 h-7 text-action-gradient-start overflow-visible" fill="none" viewBox="0 0 100 28">
<path d="M0 24 L18 20 L38 22 L55 12 L75 16 L95 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0 24 L18 20 L38 22 L55 12 L75 16 L95 2 L95 28 L0 28 Z" fill="currentColor" fillOpacity="0.12"></path>
</svg>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Escrow Pending Clearance</span>
<span className="font-price-display text-price-display text-tertiary font-extrabold mt-1">UGX 12,450,000</span>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary">
<Icon name="shield_with_heart" className="text-[22px]" />
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">28 orders in transit / OTP pending</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
          Guaranteed
        </span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Orders Shipped Today</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">42</span>
<span className="font-label-md text-label-md text-on-surface-variant">Parcels</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
<Icon name="moped" className="text-[22px]" />
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="timer" className="text-[15px] text-amber-warning" />
<span>Avg pickup: <strong className="text-on-surface">18 mins</strong></span>
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold">Central Div</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Catalog Health</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">98.5%</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Optimal</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="inventory" className="text-[22px]" />
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">48 Active SKUs</span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="warning" className="text-[12px]" />
          2 Low Stock
        </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 flex flex-col gap-space-lg">

<div className="bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-md pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-primary-container/20 text-action-gradient-start">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Orders Dispatch Stream</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active Kampala metro pipeline &amp; cryptographic escrow locks</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-action-gradient-start animate-ping"></span>
              4 Updates Streamed
            </span>
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-dark flex-shrink-0" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte black luxury audio packaging studio product render" src={`${assetBase}/images/467d02405b2d2eb8.webp`} />
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-md text-on-surface font-extrabold tracking-wider">#SC-98241</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-semibold">SafeBoda #412</span>
<span className="text-on-surface-variant/40 text-xs">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">14 mins ago</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC</span>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="person" className="text-[15px] text-on-surface-variant" />
                    Ronald M. (07•• ••• 419)
                  </span>
<span>•</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="pin_drop" className="text-[15px] text-action-gradient-start" />
                    Nakawa Div.
                  </span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg flex-shrink-0">
<div className="flex flex-col text-left md:text-right">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 380,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center md:justify-end gap-1 font-semibold">
<Icon name="lock" className="text-[14px]" /> Escrow Secured
                </span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1.5 shadow-sm">
<Icon name="cyclone" className="text-[16px] animate-spin" />
                  In Transit (ETA 14m)
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rider: Brian K.</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-dark flex-shrink-0" data-alt="Anker Prime 67W GaN multi-port fast wall charger with folding prongs dark background high end electronics shot" src={`${assetBase}/images/7e09f9ce7c6f5b43.webp`} />
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-md text-on-surface font-extrabold tracking-wider">#SC-98239</span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning animate-pulse"></span>
                    Ready for Courier Staging
                  </span>
<span className="text-on-surface-variant/40 text-xs">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">22 mins ago</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface truncate">Anker Prime 67W GaN Wall Charger</span>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="person" className="text-[15px]" />
                    Sarah N. (07•• ••• 882)
                  </span>
<span>•</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="pin_drop" className="text-[15px] text-action-gradient-start" />
                    Kololo Terrace
                  </span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-md flex-shrink-0">
<div className="flex flex-col text-left md:text-right">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 165,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center md:justify-end gap-1 font-semibold">
<Icon name="lock" className="text-[14px]" /> MTN MoMo Paid
                </span>
</div>
<button className="h-10 px-space-md rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-md shadow-action-gradient-end/20 hover:scale-105 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="electric_moped" className="text-[17px]" />
                Assign Rider
              </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-dark flex-shrink-0" data-alt="SoundCore Life P3 noise cancelling earbuds with charging case resting on slate stone desk high resolution photography" src={`${assetBase}/images/a139875ea48e41f0.webp`} />
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-md text-on-surface font-extrabold tracking-wider">#SC-98234</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">SafeBoda #108</span>
<span className="text-on-surface-variant/40 text-xs">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">41 mins ago</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Life P3 Earbuds</span>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="person" className="text-[15px]" />
                    David K. (07•• ••• 904)
                  </span>
<span>•</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="pin_drop" className="text-[15px] text-action-gradient-start" />
                    Bugolobi Flats
                  </span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg flex-shrink-0">
<div className="flex flex-col text-left md:text-right">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 240,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center md:justify-end gap-1 font-semibold">
<Icon name="lock_clock" className="text-[14px]" /> Airtel Money Escrow
                </span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-3 py-1.5 rounded-lg bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="pin" className="text-[16px]" />
                  Awaiting Escrow OTP
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rider at Customer Gate</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-space-md">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-dark flex-shrink-0" data-alt="Anker SoundCore 2 portable bluetooth waterproof speaker dark blue finish clean studio lighting tech merchandise" src={`${assetBase}/images/9944bf04216891aa.webp`} />
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-code-display text-label-md text-on-surface font-extrabold tracking-wider">#SC-98228</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">Locker Verified</span>
<span className="text-on-surface-variant/40 text-xs">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h 12m ago</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface truncate">Anker SoundCore 2 Speaker</span>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="person" className="text-[15px]" />
                    Grace A. (07•• ••• 631)
                  </span>
<span>•</span>
<span className="flex items-center gap-1 text-on-surface">
<Icon name="lock" className="text-[15px] text-action-gradient-start" />
                    Nakasero Hub Locker #08
                  </span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg flex-shrink-0">
<div className="flex flex-col text-left md:text-right">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 195,000</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center md:justify-end gap-1 font-semibold">
<Icon name="check_circle" className="text-[14px]" /> Settled to Payout
                </span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-3 py-1.5 rounded-lg bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[16px]" />
                  Delivered • Escrow Released
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">OTP Matched 4719</span>
</div>
</div>
</div>
</div>
<div className="pt-space-xs flex justify-between items-center text-on-surface-variant">
<span className="font-body-sm text-body-sm">Showing 4 of 42 dispatches today</span>
<a className="font-label-md text-label-md text-action-gradient-start hover:underline flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
            View Complete Manifest
            <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Weekly Revenue &amp; Kampala Delivery Velocity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Order fulfillment intensity across 5 Kampala municipal sectors</p>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded bg-action-gradient-start"></span> High Density (&gt;15 runs)
            </span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded bg-surface-container-highest"></span> Low Density
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm pt-2">
<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Central / Nakasero</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">14m Avg</span>
</div>
<div className="h-20 w-full rounded-lg bg-surface-container-high flex flex-col justify-end p-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[85%] bg-gradient-to-t from-action-gradient-end to-action-gradient-start rounded-lg"></div>
<span className="relative z-10 font-label-sm text-label-sm text-on-primary-container font-extrabold">124 Pkts</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">UGX 16.4M</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Nakawa / Bugolobi</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">19m Avg</span>
</div>
<div className="h-20 w-full rounded-lg bg-surface-container-high flex flex-col justify-end p-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-action-gradient-end to-action-gradient-start opacity-90 rounded-lg"></div>
<span className="relative z-10 font-label-sm text-label-sm text-on-primary-container font-extrabold">92 Pkts</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">UGX 11.2M</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Kololo / Kamwokya</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">16m Avg</span>
</div>
<div className="h-20 w-full rounded-lg bg-surface-container-high flex flex-col justify-end p-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[52%] bg-gradient-to-t from-action-gradient-end to-action-gradient-start opacity-80 rounded-lg"></div>
<span className="relative z-10 font-label-sm text-label-sm text-on-primary-container font-extrabold">71 Pkts</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">UGX 9.8M</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Makindye / Muyenga</span>
<span className="font-label-sm text-label-sm text-amber-warning font-bold">28m Avg</span>
</div>
<div className="h-20 w-full rounded-lg bg-surface-container-high flex flex-col justify-end p-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[38%] bg-gradient-to-t from-action-gradient-end to-action-gradient-start opacity-70 rounded-lg"></div>
<span className="relative z-10 font-label-sm text-label-sm text-on-primary-container font-extrabold">46 Pkts</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">UGX 5.3M</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Kawempe / Ntinda</span>
<span className="font-label-sm text-label-sm text-amber-warning font-bold">25m Avg</span>
</div>
<div className="h-20 w-full rounded-lg bg-surface-container-high flex flex-col justify-end p-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[44%] bg-gradient-to-t from-action-gradient-end to-action-gradient-start opacity-75 rounded-lg"></div>
<span className="relative z-10 font-label-sm text-label-sm text-on-primary-container font-extrabold">58 Pkts</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">UGX 7.1M</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="notification_important" className="text-danger-penalty text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Urgent Actions &amp; Alerts</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-extrabold">3 Active</span>
</div>
<div className="flex flex-col gap-3">

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 border-l-4 border-l-danger-penalty">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold uppercase tracking-wider">Dispute Under Review</span>
<span className="font-code-display text-label-sm text-on-surface-variant">#SC-97810</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold">
              Tamper Bag Inspection Pending: Customer reported unsealed box.
            </p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Held: UGX 310,000</span>
<button className="px-2.5 py-1 rounded bg-danger-penalty/20 hover:bg-danger-penalty/30 text-danger-penalty font-label-sm text-label-sm font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
                Review Evidence
              </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 border-l-4 border-l-amber-warning">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-amber-warning font-bold uppercase tracking-wider">Inventory Depletion</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Nakasero Hub</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-semibold">
              SoundCore Space One (Black) has only <strong className="text-amber-warning">3 units</strong> left in local depot.
            </p>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Depletion ETA: 4.5 hours</span>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-bold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
                Restock SKU
              </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 border-l-4 border-l-mtn-yellow">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-mtn-yellow font-bold uppercase tracking-wider">MTN MoMo Batch Payout</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Auto-Release</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 8,600,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">18:00 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Escrow cleared from 34 completed deliveries. Scheduled direct settlement to Registered Merchant PIN.
            </p>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">SafeBoda Dedicated Fleet</h3>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">3 Active Boda Drivers</span>
</div>
<div className="flex flex-col gap-2.5">

<div className="p-2.5 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary text-sm">
                  BK
                </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Brian Katende (#412)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Pro • 4.97 ★ (1,840 trips)</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-action-gradient-start transition-colors" title="Masked Relay Call" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[17px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant transition-colors" title="Live Telematics Track" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="near_me" className="text-[17px]" />
</button>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary text-sm">
                  JM
                </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Joshua Mukasa (#108)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Gold • 4.92 ★ (942 trips)</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-action-gradient-start transition-colors" title="Masked Relay Call" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[17px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant transition-colors" title="Live Telematics Track" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="near_me" className="text-[17px]" />
</button>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-on-surface text-sm">
                  EK
                </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-amber-warning"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Emma Kalyango (#729)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Staging at Nakasero Hub Hub</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-action-gradient-start transition-colors" title="Masked Relay Call" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[17px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant transition-colors" title="Live Telematics Track" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="near_me" className="text-[17px]" />
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Store Reputation</h3>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" />
            URSB Certified
          </span>
</div>
<div className="flex items-center gap-space-lg bg-surface-container p-space-md rounded-xl">

<div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-emerald-escrow stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="99.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute flex flex-col items-center">
<span className="font-label-md text-label-md font-extrabold text-on-surface">99.4%</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Platform Trust Score</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">0 counterfeit strikes • 0 OTP bypass incidents recorded</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1 mt-0.5">
<Icon name="workspace_premium" className="text-[15px]" />
              Eligible for Instant MoMo Settlement
            </span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm text-center">
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Avg Delivery Time</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">21 mins</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Return Rate</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold mt-1">0.3%</span>
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
