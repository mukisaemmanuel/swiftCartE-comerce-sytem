// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_orders_master_detail_swiftcart_desktop_light/code.html
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
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a aria-current="page" className="flex items-center justify-between px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="p-space-lg lg:p-space-xl pb-space-sm space-y-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Merchant Operations</span>
<span className="text-on-surface-variant font-label-sm">/</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala Express Deliveries</span>
<div className="flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          SafeBoda Direct V2.4 Connected
        </div>
</div>
<div className="flex items-center gap-space-md">
<div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="sync" className="text-[16px] text-tertiary" />
          Auto-syncing (every 10s)
        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Zone: EAT (UTC+3)</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">

<div className="md:col-span-5 relative">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full h-11 pl-10 pr-10 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container shadow-[0_1px_4px_rgba(14,27,77,0.03)]" placeholder="Search SKU, Order ID, Customer name or phone..." type="text" value="SC-9824" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" title="Clear search" onClick={() => alertToast('Action triggered')}>
<Icon name="cancel" className="text-[16px]" />
</button>
</div>

<div className="md:col-span-3 flex items-center justify-between px-space-md h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] cursor-pointer hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm truncate">
<Icon name="calendar_today" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface truncate">Today - Oct 24, 2025</span>
</div>
<Icon name="expand_more" className="text-on-surface-variant text-[16px]" />
</div>

<div className="md:col-span-2 flex items-center justify-between px-space-md h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] cursor-pointer hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm truncate">
<Icon name="storefront" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface truncate">Nakasero Flagship Hub</span>
</div>
<Icon name="expand_more" className="text-on-surface-variant text-[16px]" />
</div>

<div className="md:col-span-2">
<button className="w-full h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center gap-space-xs font-label-md text-label-md transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
          Export CSV
        </button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 pt-1 no-scrollbar">
<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md whitespace-nowrap shadow-[0_1px_2px_rgba(14,27,77,0.02)] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<span>All Orders</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">142</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md whitespace-nowrap shadow-[0_1px_2px_rgba(14,27,77,0.02)] transition-all" onClick={() => alertToast('Action triggered')}>
<span>Pending Dispatch</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">6</span>
</button>

<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md whitespace-nowrap shadow-[0_2px_8px_rgba(218,55,0,0.25)] transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="moped" className="text-[16px]" />
<span>In Transit</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-lowest text-primary font-bold text-[11px]">14</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md whitespace-nowrap shadow-[0_1px_2px_rgba(14,27,77,0.02)] transition-all" onClick={() => alertToast('Action triggered')}>
<span>Awaiting OTP Code</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">8</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md whitespace-nowrap shadow-[0_1px_2px_rgba(14,27,77,0.02)] transition-all" onClick={() => alertToast('Action triggered')}>
<span>Delivered &amp; Released</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">110</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md whitespace-nowrap shadow-[0_1px_2px_rgba(14,27,77,0.02)] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Returns/Disputes</span>
<span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-bold">4</span>
</button>
</div>
</div>

<div className="px-space-lg lg:px-space-xl pb-space-xl">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<section aria-label="Order Feed" className="xl:col-span-5 space-y-space-sm">

<div className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<Icon name="sensors" className="text-[18px]" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold leading-tight">Live Kampala Manifest</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Direct API • 6 of 14 Active</p>
</div>
</div>
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm px-2 py-1 bg-surface-container-low rounded-lg">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Real-time GPS
          </div>
</div>

<div className="space-y-space-sm">

<article className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_4px_16px_rgba(218,55,0,0.08)] relative overflow-hidden cursor-pointer transition-all hover:bg-surface-container-lowest">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="pl-space-xs space-y-space-xs">

<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-tight">#SC-98241</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14:22 EAT</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-label-sm text-label-sm text-primary font-bold">18m ago</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  In Transit
                </span>
</div>

<div className="flex items-baseline justify-between pt-1">
<div className="min-w-0 pr-2">
<h3 className="font-label-md text-label-md text-on-surface truncate">Ronald M. (07•••••419)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate flex items-center gap-1">
<Icon name="location_on" className="text-[14px]" />
                    Portbell Rd near MUBS, Nakawa
                  </p>
</div>
<div className="text-right shrink-0">
<span className="font-currency-code text-currency-code text-on-surface-variant mr-1">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold">380,000</span>
</div>
</div>

<div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm truncate">
<Icon name="headphones" className="text-secondary text-[16px]" />
<span className="truncate">1x SoundCore Space One ANC</span>
</div>
<div className="flex items-center gap-space-xs shrink-0 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="sports_motorsports" className="text-primary text-[14px]" />
<span>Brian K. (UEF 842X)</span>
<span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-bold text-[10px]">14m ETA</span>
</div>
</div>
</div>
</article>

<article className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:shadow-md cursor-pointer transition-all hover:bg-surface-container-low/50">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-98240</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14:05 EAT (35m ago)</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
<Icon name="pin" className="text-[12px]" />
                  Awaiting OTP Code
                </span>
</div>
<div className="flex items-baseline justify-between pt-1">
<div className="min-w-0 pr-2">
<h3 className="font-label-md text-label-md text-on-surface truncate">Nantongo Grace</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate flex items-center gap-1">
<Icon name="apartment" className="text-[14px]" />
                    Acacia Mall Offices, Kololo
                  </p>
</div>
<div className="text-right shrink-0">
<span className="font-currency-code text-currency-code text-on-surface-variant mr-1">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-bold">195,000</span>
</div>
</div>
<div className="mt-space-xs pt-space-xs bg-surface-container-low/60 p-space-sm rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="bolt" className="text-[16px]" />
<span className="truncate">1x Anker 65W GaN Fast Charger</span>
</div>
<div className="flex items-center gap-space-xs shrink-0 text-on-surface-variant font-label-sm text-label-sm">
<span>Rider Hamza Ssemwanga</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface text-[10px]">At Destination</span>
</div>
</div>
</div>
</article>

<article className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:shadow-md cursor-pointer transition-all hover:bg-surface-container-low/50">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-98239</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">13:48 EAT</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[12px]" />
                  Delivered &amp; Released
                </span>
</div>
<div className="flex items-baseline justify-between pt-1">
<div className="min-w-0 pr-2">
<h3 className="font-label-md text-label-md text-on-surface truncate">Mbabazi Denis</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate flex items-center gap-1">
<Icon name="location_on" className="text-[14px]" />
                    Village Mall Residences, Bugolobi
                  </p>
</div>
<div className="text-right shrink-0">
<span className="font-currency-code text-currency-code text-on-surface-variant mr-1">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-bold">740,000</span>
</div>
</div>
<div className="mt-space-xs pt-space-xs bg-surface-container-low/60 p-space-sm rounded-xl flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Rider: Patrick Oloya</span>
<span className="text-tertiary flex items-center gap-1 font-semibold">
<Icon name="account_balance_wallet" className="text-[14px]" />
                  MTN MoMo Settled
                </span>
</div>
</div>
</article>

<article className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:shadow-md cursor-pointer transition-all hover:bg-surface-container-low/50">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-98238</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">13:15 EAT</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  In Transit
                </span>
</div>
<div className="flex items-baseline justify-between pt-1">
<div className="min-w-0 pr-2">
<h3 className="font-label-md text-label-md text-on-surface truncate">Ainebyoona Ivan</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate flex items-center gap-1">
<Icon name="location_on" className="text-[14px]" />
                    Ministers Village, Ntinda
                  </p>
</div>
<div className="text-right shrink-0">
<span className="font-currency-code text-currency-code text-on-surface-variant mr-1">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-bold">510,000</span>
</div>
</div>
<div className="mt-space-xs pt-space-xs bg-surface-container-low/60 p-space-sm rounded-xl flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Rider: Simon Peter Kato</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px]">ETA 28m</span>
</div>
</div>
</article>

<article className="p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:shadow-md cursor-pointer transition-all hover:bg-error-container/20">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">#SC-98237</span>
<span className="text-on-surface-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12:50 EAT</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<Icon name="warning" className="text-[14px]" />
                  Dispute Opened
                </span>
</div>
<div className="flex items-baseline justify-between pt-1">
<div className="min-w-0 pr-2">
<h3 className="font-label-md text-label-md text-on-surface truncate">Tumusiime Brenda</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate flex items-center gap-1">
<Icon name="location_on" className="text-[14px]" />
                    Tank Hill Rd, Muyenga
                  </p>
</div>
<div className="text-right shrink-0">
<span className="font-currency-code text-currency-code text-on-surface-variant mr-1">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-bold">125,000</span>
</div>
</div>
<div className="mt-space-xs pt-space-xs bg-error-container/30 p-space-sm rounded-xl flex items-center justify-between text-on-error-container font-label-sm text-label-sm">
<span>Rider: Godfrey Walusimbi</span>
<span className="font-bold flex items-center gap-1">
<Icon name="gavel" className="text-[14px]" />
                  Seal Tampered Claim
                </span>
</div>
</div>
</article>
</div>
</section>

<section aria-label="Order Details View" className="xl:col-span-7 space-y-space-md">

<div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] flex flex-wrap items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight font-extrabold">#SC-98241</h1>
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm uppercase font-extrabold tracking-wider flex items-center gap-1">
<Icon name="electric_moped" className="text-[14px]" />
                SafeBoda Express
              </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                In Safe Hands
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
<Icon name="schedule" className="text-[16px]" />
              Placed Today 14:04 EAT • Dispatched via Nakasero Hub Relay 1
            </p>
</div>

<div className="flex items-center gap-space-xs">
<button className="w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="Copy Order Reference" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="content_copy" className="text-[18px]" />
</button>
<button className="w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="Order QR Verification Code" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="qr_code_2" className="text-[18px]" />
</button>
<button className="w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="Print Shipping Slip" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
</button>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-gradient-to-r from-tertiary-fixed/40 via-surface-container-lowest to-surface-container-low shadow-[0_2px_12px_rgba(0,105,71,0.06)] relative overflow-hidden">
<div className="flex items-start justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="lock" className="text-[18px]" />
</div>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 380,000 Escrow Custody</span>
<span className="ml-2 px-2 py-0.5 rounded-full bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-bold shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  Bank of Uganda Sandbox
                </span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed max-w-2xl">
                Funds are secured and will release automatically when buyer <strong className="font-bold text-on-surface">Ronald M.</strong> inspects the package and delivers the cryptographically signed 6-digit OTP delivery token to SafeBoda courier <strong className="font-bold text-on-surface">Brian Kizito</strong>.
              </p>
</div>
<div className="hidden sm:flex flex-col items-end shrink-0 text-right">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Escrow Status</span>
<span className="font-label-md text-label-md text-tertiary font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[16px]" />
                Pledged &amp; Locked
              </span>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] space-y-space-md">
<div className="flex items-center justify-between border-b border-surface-container-high pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-12 h-12 rounded-xl object-cover shadow-sm" data-alt="Close up realistic portrait photograph of a confident young Ugandan courier driver wearing a bright orange SafeBoda branded helmet and reflector jacket against a sunny Kampala street background, cinematic natural daylight." src={`${assetBase}/images/fd984065c420cbda.webp`} />
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Brian Kizito</h4>
<div className="flex items-center text-on-surface-variant font-label-sm text-label-sm">
<Icon name="star" className="text-amber-500 text-[16px]" />
<span className="font-bold text-on-surface ml-0.5">4.92</span>
<span className="text-on-surface-variant">(1,480 rides)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
<span>Bajaj Boxer • <strong className="text-on-surface">UEF 842X</strong></span>
<span>•</span>
<span className="text-tertiary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                    Live GPS Telemetry
                  </span>
</p>
</div>
</div>

<div className="flex items-center gap-space-xs">
<a className="h-10 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-primary text-[18px]" />
<span className="hidden sm:inline">Call Courier</span>
</a>
</div>
</div>

<div className="w-full h-44 rounded-xl relative overflow-hidden bg-surface-container flex flex-col justify-end p-space-md shadow-inner" data-alt="Satellite hybrid digital map rendering of Lugogo Bypass and Nakawa Kampala showing a delivery motorcycle routing trajectory with glowing orange route lines and pulse location marker on a clean modern map tile interface." data-location="Lugogo Bypass, Kampala, Uganda" style={{"backgroundImage":"url('/images/c608d1d3a6e36bf5.webp')"}}>

<div className="bg-surface/95 backdrop-blur-md p-space-sm rounded-xl flex items-center justify-between shadow-sm max-w-md">
<div className="flex items-center gap-space-sm">
<Icon name="navigation" className="text-primary-container text-[20px] animate-bounce" />
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Current Waypoint</p>
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Lugogo Bypass Junction (Speed: 38 km/h)</p>
</div>
</div>
<span className="px-2 py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-extrabold whitespace-nowrap">
                14 mins left
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-sm bg-surface-container-low rounded-xl">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant font-bold">14:12 EAT</span>
</div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Departed Nakasero Hub</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Package sealed &amp; scanned</p>
</div>
<div className="p-space-sm bg-primary-fixed/30 rounded-xl relative">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-primary font-bold">Active Right Now</span>
</div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Lugogo Bypass Junction</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">In transit smoothly</p>
</div>
<div className="p-space-sm bg-surface-container-low rounded-xl opacity-75">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant font-bold">Estimated 14:36 EAT</span>
</div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Portbell Rd near MUBS</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customer Doorstep</p>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Items in Manifest (1)</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">Packaged in Tamper-Proof PolyBag #PB-449</span>
</div>
<div className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded-xl">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-lowest shadow-sm" data-alt="Professional studio product shot of Soundcore Space One over-ear active noise cancelling headphones in matte black finish against an elegant subtle off-white background with crisp dynamic lighting." src={`${assetBase}/images/2290e0db7c12faba.webp`} />
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-space-sm">
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</h4>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">1 x</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold ml-1">UGX 380,000</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Color: Matte Black • SKU: <span className="font-mono text-on-surface">SC-SP1-BLK</span></p>
<div className="flex items-center gap-space-sm mt-1">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<Icon name="verified" className="text-[14px]" />
                  URSB Tax Compliant
                </span>
<span className="text-on-surface-variant font-label-sm">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1 Year Official Warranty</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-[0_1px_4px_rgba(14,27,77,0.03)] space-y-space-sm">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Financial Settlement Summary</h3>
<div className="space-y-space-xs text-body-sm font-body-sm pt-space-xs">
<div className="flex justify-between items-center text-on-surface">
<span>Item Subtotal</span>
<span className="font-semibold">UGX 380,000</span>
</div>
<div className="flex justify-between items-center text-on-surface">
<span className="flex items-center gap-1">
                SafeBoda Subsidized Express Delivery
                <span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-bold">Campaign</span>
</span>
<div className="flex items-center gap-2">
<span className="line-through text-on-surface-variant text-[12px]">UGX 3,500</span>
<span className="text-tertiary font-bold">Promo Free</span>
</div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Platform Escrow Fee (3.0%)</span>
<span className="text-error">-UGX 11,400</span>
</div>
<div className="pt-space-sm mt-space-xs border-t border-surface-container flex justify-between items-baseline">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-extrabold">Net Merchant Payout</p>
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm mt-0.5">
<Icon name="bolt" className="text-[14px]" />
                  Automated Payout to MTN MoMo: 0772 ••• 456
                </div>
</div>
<div className="text-right">
<span className="font-currency-code text-currency-code text-primary mr-1 font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary font-black">368,600</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-high/60 flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<Icon name="password" className="text-[20px]" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">6-Digit Blind Handshake OTP</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Rider inputs token provided in-person by Ronald M. (<span className="font-mono tracking-widest font-bold text-on-surface">••••••</span>)
              </p>
</div>
</div>
<span className="px-space-sm py-1 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap font-semibold shadow-sm">
            Pending Handover
          </span>
</div>

<div className="space-y-space-sm pt-space-xs">

<button className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.99] transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[20px]" />
            Contact Buyer via Masked WhatsApp (+256 70•••••419)
          </button>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<button className="h-11 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-[0_1px_4px_rgba(14,27,77,0.03)] transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-secondary text-[18px]" />
              Reassign Courier
            </button>
<button className="h-11 rounded-xl bg-surface-container-lowest hover:bg-error-container hover:text-on-error-container text-error font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-[0_1px_4px_rgba(14,27,77,0.03)] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="flag" className="text-[18px]" />
              Report Delivery Issue
            </button>
</div>
</div>
</section>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
