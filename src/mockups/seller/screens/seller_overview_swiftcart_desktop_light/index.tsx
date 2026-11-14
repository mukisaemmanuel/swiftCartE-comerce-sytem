// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_overview_swiftcart_desktop_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a aria-current="page" className="flex items-center justify-between px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">
<div className="p-space-lg lg:p-space-xl space-y-space-lg max-w-[1600px] mx-auto w-full">

<div className="flex flex-wrap items-center justify-between gap-space-sm px-space-md py-space-xs rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Live Node
        </span>
<span className="font-label-md text-label-md text-on-surface">Nakasero Flagship Hub #UG-04</span>
<span className="text-on-surface-variant">•</span>
<div className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="verified" className="text-[14px]" />
          Tier 1 Merchant
        </div>
<span className="text-on-surface-variant hidden sm:inline">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Kampala CBD Escrow Clearinghouse Node</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span className="font-body-sm text-body-sm flex items-center gap-1">
<Icon name="lock" className="text-tertiary text-[16px]" />
          UGX 41.2M Bond Protected
        </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded">EAT UTC+3</span>
</div>
</div>

<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Welcome back, Kizito Ronald</h2>
<span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Store Online
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<Icon name="bolt" className="text-primary text-[18px]" />
          Instant SafeBoda Dispatch Active across Kampala Central &amp; Nakawa Divisions
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:scale-95" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add_circle" className="text-[18px]" />
          Add Product
        </button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="currency_exchange" className="text-[18px]" />
          Bulk Price Update
        </button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
          Print Manifest
        </button>
<button className="px-space-lg py-2.5 rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-label-md text-label-md transition-all flex items-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="payments" className="text-[18px]" />
          Withdraw Payout
        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Today's Gross Revenue</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface">4,820,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<Icon name="trending_up" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-1 text-tertiary font-label-md text-label-md">
<Icon name="north_east" className="text-[16px]" />
<span>+18.4%</span>
<span className="text-on-surface-variant font-body-sm text-body-sm ml-1">vs yesterday</span>
</div>

<svg className="w-20 h-7 text-primary overflow-visible" fill="none" viewBox="0 0 100 30">
<path d="M0 25 Q 15 28, 30 18 T 60 12 T 85 8 T 100 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 25 Q 15 28, 30 18 T 60 12 T 85 8 T 100 2 L 100 30 L 0 30 Z" fill="currentColor" fillOpacity="0.12"></path>
</svg>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="space-y-1">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow Pending Clearance</span>
<Icon name="shield" className="text-tertiary text-[14px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface">12,450,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<Icon name="lock_clock" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface">28 orders</span> in transit / OTP pending
          </span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">Guaranteed</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dispatched Today</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-on-surface">42</span>
<span className="font-label-md text-label-md text-on-surface-variant">Parcels</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="schedule" className="text-primary text-[15px]" />
<span>Avg pickup: <strong className="text-on-surface font-label-md">18 mins</strong></span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container px-2 py-0.5 rounded">Kampala Central</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Catalog Health</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-tertiary">98.5%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Optimal</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<Icon name="inventory" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-on-surface font-label-md">48</strong> Active SKUs
          </span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
            2 Low Stock
          </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-8 space-y-space-lg">

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Live Orders Dispatch Stream</h3>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm animate-pulse">4 Realtime</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active Kampala metro pipeline protected by SwiftCart cryptographic escrow release</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>All (28)</button>
<button className="px-space-sm py-1 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>In Transit</button>
<button className="px-space-sm py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>Needs Action</button>
</div>
</div>

<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm relative">
<Icon name="headphones" className="text-primary text-[24px]" />
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98241</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="moped" className="text-[13px] text-primary" /> SafeBoda #412
                    </span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
<Icon name="enhanced_encryption" className="text-[12px]" /> Escrow Secured
                    </span>
</div>
<p className="font-body-md text-body-md text-on-surface truncate">SoundCore Space One ANC Headphones (Matte Black)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
<span>Rider: <strong className="text-on-surface">Brian Katende</strong></span>
<span>•</span>
<span className="flex items-center gap-1 text-primary font-medium">
<Icon name="navigation" className="text-[14px]" /> In Transit (ETA 14m to Kololo)
                    </span>
</p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="text-right">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<p className="font-price-display text-price-display text-on-surface">380,000</p>
<span className="font-label-sm text-label-sm text-tertiary">MTN MoMo Rails</span>
</div>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="location_searching" className="text-[16px]" />
                  Track
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm">
<Icon name="power" className="text-secondary text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98239</span>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm flex items-center gap-1">
<Icon name="hourglass_top" className="text-[13px]" /> Staging Area
                    </span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                      MoMo Paid
                    </span>
</div>
<p className="font-body-md text-body-md text-on-surface truncate">Anker Prime 67W GaN Wall Charger (Triple Port)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Nakasero Outpost Bay 3 • Packed &amp; Tamper-Sealed by Store
                  </p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="text-right">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<p className="font-price-display text-price-display text-on-surface">165,000</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Instant Payout eligible</span>
</div>
<button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm hover:brightness-110 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="sports_motorsports" className="text-[16px]" />
                  Assign Rider
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm relative">
<Icon name="lock_reset" className="text-tertiary text-[24px]" />
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary-container border-2 border-surface-container-lowest animate-ping"></span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98234</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">SafeBoda #108</span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
                      Airtel Money Escrow
                    </span>
</div>
<p className="font-body-md text-body-md text-on-surface truncate">SoundCore Life P3 Noise Cancelling Earbuds (Navy)</p>
<p className="font-body-sm text-body-sm text-primary font-medium flex items-center gap-1">
<Icon name="pin" className="text-[14px]" /> Awaiting Customer 4-Digit Escrow OTP (Rider at Customer Gate)
                  </p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="text-right">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<p className="font-price-display text-price-display text-on-surface">240,000</p>
<span className="font-label-sm text-label-sm text-tertiary">SafeRelease Lock</span>
</div>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="call" className="text-[16px]" />
                  Rider Contact
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-tertiary">
<Icon name="task_alt" className="text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98228</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check_circle" className="text-[13px]" /> Locker Verified
                    </span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                      Settled to Payout
                    </span>
</div>
<p className="font-body-md text-body-md text-on-surface truncate">Anker SoundCore 2 Outdoor Bluetooth Speaker</p>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
<Icon name="done_all" className="text-[14px]" /> OTP Confirmed • Escrow Released to Kampala Merchant Balance
                  </p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="text-right">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<p className="font-price-display text-price-display text-tertiary">195,000</p>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Settled</span>
</div>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt" className="text-[16px]" />
                  Invoice
                </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Weekly Revenue &amp; Kampala Delivery Velocity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sector breakdown across active urban dispatch zones</p>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary"></span> Revenue (UGX)</span>
<span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-secondary"></span> Avg Velocity (Mins)</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm pt-space-xs">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-1 bg-primary"></div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Central / Nakasero</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Hub Sector #1</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold">124 Pkts</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 16.4M</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ETA</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">14 mins</span>
</div>
</div>

<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"95%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-1 bg-primary/80"></div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Nakawa / Bugolobi</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">East Transit Corridor</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold">92 Pkts</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 11.2M</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ETA</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">19 mins</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"75%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-1 bg-primary/60"></div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Kololo / Kamwokya</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">North Belt</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold">71 Pkts</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 9.8M</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ETA</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">16 mins</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"60%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-1 bg-primary/40"></div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Kawempe / Ntinda</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Outer Arterial</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold">58 Pkts</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 7.1M</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ETA</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">25 mins</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"48%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-1 bg-primary/30"></div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Makindye / Muyenga</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">South Ridge</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold">46 Pkts</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 5.3M</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ETA</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">28 mins</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"35%"}}></div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="speed" className="text-primary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface">
                Kampala Metro Dispatch SLA: <strong className="text-on-surface font-label-md">94.2% delivered under 30 minutes</strong> via SafeBoda express routing.
              </span>
</div>
<a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-bold" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
              View Heatmap Analytics <Icon name="arrow_forward" className="text-[14px]" />
</a>
</div>
</div>
</div>

<div className="xl:col-span-4 space-y-space-lg">

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Urgent Alerts</h3>
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">3 Active</span>
</div>
<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-error-container/25 space-y-space-xs">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-1.5 text-error">
<Icon name="gavel" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold">Dispute #SC-97810</span>
</div>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error/10 text-error font-bold">Escrow Held</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
                Tamper Bag Inspection Pending. Customer reported unsealed outer box in Kololo.
              </p>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-currency-code text-currency-code text-error font-bold">UGX 310,000</span>
<button className="px-space-sm py-1 rounded-lg bg-surface-container-lowest text-error font-label-sm text-label-sm hover:bg-error hover:text-on-error transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
                  Review Evidence
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-1.5 text-primary">
<Icon name="inventory_2" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold">Inventory Depletion</span>
</div>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">3 Units Left</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
                SoundCore Space One (Black) critical threshold reached at Nakasero Hub.
              </p>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Daily velocity: 11 units/day</span>
<button className="px-space-sm py-1 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all" type="button" onClick={() => alertToast('Action triggered')}>
                  Restock SKU
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-1.5 text-tertiary">
<Icon name="schedule_send" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold">MTN MoMo Batch Payout</span>
</div>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold">18:00 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
                Auto-release of <strong className="text-on-surface">UGX 8,600,000</strong> from 34 completed deliveries to registered merchant wallet.
              </p>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> +256 772 ••• 419
                </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">KYC Tier 3 Verified</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SafeBoda Fleet</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Assigned Kampala hub riders</p>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">3 Active</span>
</div>
<div className="space-y-space-sm">

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-label-md">
                  BK
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Brian Katende</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">#412</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="star" className="text-[12px] text-amber-500 fill-current" /> 4.97
                    </span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Pro</span>
</div>
</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Call Rider" className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="call" className="text-[16px]" />
</button>
<button aria-label="Dispatch Parcel" className="w-8 h-8 rounded-lg bg-primary-fixed hover:bg-primary text-on-primary-fixed hover:text-on-primary flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="send_to_mobile" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-label-md">
                  JM
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Joshua Mukasa</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">#108</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="star" className="text-[12px] text-amber-500 fill-current" /> 4.92
                    </span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Gold</span>
</div>
</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Call Rider" className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="call" className="text-[16px]" />
</button>
<button aria-label="Dispatch Parcel" className="w-8 h-8 rounded-lg bg-primary-fixed hover:bg-primary text-on-primary-fixed hover:text-on-primary flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="send_to_mobile" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-label-md">
                  EK
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Emma Kalyango</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">#729</span>
</div>
<p className="font-body-sm text-body-sm text-tertiary">Staging at Nakasero Hub</p>
</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Call Rider" className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="call" className="text-[16px]" />
</button>
<button aria-label="Dispatch Parcel" className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="two_wheeler" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Store Reputation</h3>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Verified Partner</span>
</div>
<div className="flex items-center gap-space-lg">

<div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">

<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>

<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm text-on-surface leading-none">99.4%</span>
<span className="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold mt-0.5">Trust</span>
</div>
</div>

<div className="space-y-space-xs flex-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Counterfeit Strikes</span>
<span className="font-label-md text-label-md text-tertiary font-bold">0 Clean</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Avg Delivery Velocity</span>
<span className="font-label-md text-label-md text-on-surface font-bold">21 mins</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Return / Dispute Rate</span>
<span className="font-label-md text-label-md text-on-surface font-bold">0.3%</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Escrow Release Speed</span>
<span className="font-label-md text-label-md text-tertiary font-bold">&lt; 4 mins OTP</span>
</div>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<Icon name="verified_user" className="text-tertiary text-[16px]" />
              Level 4 Swift Seller Benefits Unlocked
            </span>
<Icon name="chevron_right" className="text-on-surface-variant text-[16px]" />
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
