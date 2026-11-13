// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_discounts_flash_sales_promotion_builder_swiftcart_desktop/code.html
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
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest/40 backdrop-blur-sm"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/3f10b645d293fcfe.webp`} /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">SwiftCart</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Uganda Merchant</span></div></div><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm">UGX B2B</span></div><nav className="px-space-md py-space-md flex flex-col gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-label-md"><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Daily Operations</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="space_dashboard" className="text-[20px]" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="products-and-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-and-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">6 Active</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Post-Purchase</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="assignment_return" className="text-[20px]" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-2 py-0.5 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm">1 Case</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Business &amp; Finance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics-and-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="query_stats" className="text-[20px]" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="campaign" className="text-[20px]" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Settings &amp; Governance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="store-profile-and-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="verified" className="text-[20px]" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="check_circle" className="text-[16px] text-tertiary" /></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-body-md text-body-md">Settings</span></div></a></div></nav></div><div className="p-space-md"><div className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-xs shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><span className="font-label-md text-label-md text-emerald-escrow">Swift Escrow Protected</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Settlements secured under Bank of Uganda National Payments Systems sandbox.</p></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="relative w-96 flex items-center"><Icon name="search" className="absolute left-3 text-outline text-[20px]" /><input className="w-full h-10 pl-10 pr-12 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search orders, SKU, phone numbers..." type="text" /><span className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm">⌘K</span></div><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-mtn-yellow animate-pulse"></span><span className="w-2 h-2 rounded-full bg-airtel-red animate-pulse"></span></div><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Toggle theme" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Notifications" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Store General Manager (KR)</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-amber-warning/15 px-space-xl py-2 flex items-center justify-between">
<div className="flex items-center gap-space-sm text-amber-warning font-label-md text-label-md">
<Icon name="wifi_tethering" className="text-[18px]" />
<span>Kampala Central Ad Node: High bid competition active. Flash sale slots refreshing in real-time.</span>
</div>
<div className="flex items-center gap-space-lg text-amber-warning font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> MTNN-Uganda Ads FastPath</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Airtel Money Escrow Sync</span>
</div>
</div>
<div className="px-space-xl py-space-lg flex flex-col gap-space-xl">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Business &amp; Finance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Discounts &amp; Ads</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Discounts, Flash Deals &amp; Promotions</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Create high-converting promotions, configure Kampala Flash Sales, and monitor ROAS across dynamic corridors.</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-10 px-4 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-md text-label-md flex items-center gap-2 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="verified_user" className="text-[18px] text-tertiary" />
<span>Campaign Guidelines &amp; SLA</span>
</button>
<button className="h-10 px-5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md text-label-md flex items-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-95 transition-transform" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="add_circle" className="text-[20px]" />
<span>+ Create New Campaign</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-action-gradient-start/5 rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active Campaigns</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> Live Now
          </span>
</div>
<div className="mt-space-md">
<div className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">4 Running</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1.5 flex-wrap">
<span className="text-primary font-bold">2 Flash Sales</span>
<span className="text-outline">•</span>
<span>1 Voucher</span>
<span className="text-outline">•</span>
<span className="text-tertiary">1 SafeBoda Bogo</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-outline font-label-sm text-label-sm">
<span>Total Pipeline: 7 created</span>
<Icon name="bolt" className="text-[16px] text-tertiary" />
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary/5 rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Attributed Campaign Revenue</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">UGX Rails</span>
</div>
<div className="mt-space-md">
<div className="font-price-display text-price-display text-emerald-escrow font-extrabold tracking-tight">UGX 16,840,000</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
<span className="text-tertiary font-bold">+32.1%</span> of total monthly gross GMV
          </div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-2">
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"32.1%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">32.1% share</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary/5 rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Promotion ROAS</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary-fixed font-label-sm text-label-sm">High Efficiency</span>
</div>
<div className="mt-space-md">
<div className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight">4.6x</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Weighted across sponsored listing corridor
          </div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-outline font-label-sm text-label-sm">
<span>Spend: UGX 3,660,869</span>
<span className="text-tertiary font-bold flex items-center gap-0.5"><Icon name="trending_up" className="text-[14px]" /> +0.8x vs last cycle</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-sm">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-mtn-yellow/5 rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Vouchers Redeemed</span>
<Icon name="confirmation_number" className="text-outline text-[18px]" />
</div>
<div className="mt-space-md">
<div className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">642 Vouchers</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Avg basket lift: <span className="text-tertiary font-bold">+UGX 42,000</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-outline font-label-sm text-label-sm">
<span>Claim Rate: 71.3%</span>
<span className="text-secondary-fixed">Target: 600</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-1 bg-surface-container-high/60 p-1 rounded-lg">
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>All Campaigns (7)</button>
<button className="px-3 py-1.5 rounded-md bg-primary-container text-on-primary-container font-label-md text-label-md shadow-sm" onClick={() => alertToast('Action triggered')}>Active (4)</button>
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}>Scheduled (2)</button>
<button className="px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}>Expired (1)</button>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative">
<Icon name="search" className="absolute left-2.5 top-2 text-[18px] text-outline" />
<input className="h-8 pl-8 pr-3 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container w-48 xl:w-60" placeholder="Search campaign, SKU, code..." type="text" />
</div>
<button className="h-8 px-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant font-label-sm text-label-sm flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Filter</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-md relative overflow-hidden transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-sm text-label-sm font-extrabold tracking-wide uppercase shadow-[0_2px_10px_rgba(218,55,0,0.3)] flex items-center gap-1">
<Icon name="local_fire_department" className="text-[14px]" />
<span>FLASH DEAL</span>
</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Kampala Tech Week Mega Sale</h3>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="timer" className="text-[14px]" />
<span>Ends in 2d 14h 22m</span>
</span>
<span className="px-2.5 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">Live Traffic Boost</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center bg-surface-container-high/40 p-space-md rounded-xl">
<div className="md:col-span-4 flex items-center gap-space-md">
<img className="w-16 h-16 rounded-lg object-cover bg-surface-container" data-alt="High-end sleek wireless over-ear noise-cancelling headphones in matte obsidian black with metallic copper accents on an aesthetic minimal dark podium" src={`${assetBase}/images/173319729967c396.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-outline truncate">+ Anker Prime 67W GaN (3 SKUs)</span>
<div className="mt-1 flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-primary-container/30 text-primary font-label-sm text-label-sm font-bold">10% OFF</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">UGX 340,000</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">UGX 306,000</span>
</div>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-3 gap-space-sm pl-0 md:pl-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Budget Velocity</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">84% Utilized</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">UGX 1.0M / 1.2M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Attributed GMV</span>
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold mt-0.5">UGX 9,450,000</span>
<span className="font-body-sm text-body-sm text-tertiary">31 orders fulfilled</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Campaign ROAS</span>
<span className="font-headline-sm text-headline-sm text-primary font-extrabold mt-0.5">7.8x</span>
<span className="font-body-sm text-body-sm text-tertiary">+2.1x over bench</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Flash Quota: 84 / 100 units claimed</span>
<span className="text-amber-warning font-bold">16 units remaining before auto-close</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-action-gradient-start to-action-gradient-end h-full rounded-full" style={{"width":"84%"}}></div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
<Icon name="calendar_today" className="text-[16px]" />
<span>Active: Oct 20 – Oct 27, 2025</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-9 px-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<Icon name="monitoring" className="text-[16px]" />
<span>View Analytics</span>
</button>
<button className="h-9 px-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="pause_circle" className="text-[16px]" />
<span>Pause Campaign</span>
</button>
<button className="h-9 px-4 rounded-lg bg-surface-bright hover:bg-surface-variant text-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="edit" className="text-[16px]" />
<span>Edit Promotion</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-md relative overflow-hidden transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-fixed"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-2.5 py-1 rounded-md bg-secondary-container/40 text-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wide flex items-center gap-1">
<Icon name="confirmation_number" className="text-[14px]" />
<span>STORE VOUCHER</span>
</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">SoundCore Flagship Launch Voucher</h3>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" />
<span>Verified Buyer Exclusive</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center bg-surface-container-high/40 p-space-md rounded-xl">
<div className="md:col-span-5 flex items-center gap-space-md">
<div className="flex flex-col items-center justify-center p-space-sm bg-surface-container rounded-lg px-4">
<span className="font-label-sm text-label-sm text-outline uppercase">Promo Code</span>
<span className="font-code-display text-code-display text-primary tracking-widest mt-0.5">SOUNDKLA15</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface">15% OFF Entire Cart</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Min. Order Value: UGX 200,000</span>
<span className="font-body-sm text-body-sm text-emerald-escrow mt-0.5">Applies automatically on checkout</span>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-3 gap-space-sm pl-0 md:pl-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Claims Redemptions</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">214 / 300</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">71% conversion</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Attributed GMV</span>
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold mt-0.5">UGX 4,200,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Avg Basket: UGX 260K</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Target Audience</span>
<span className="font-label-lg text-label-lg text-secondary-fixed font-bold mt-0.5">Kampala + Wakiso</span>
<span className="font-body-sm text-body-sm text-tertiary">B2C Retail</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Redemption Allowance: 214 of 300 claims taken</span>
<span className="text-secondary-fixed">86 vouchers remaining</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-secondary-fixed h-full rounded-full" style={{"width":"71.3%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
<Icon name="schedule" className="text-[16px]" />
<span>Active: Oct 15 – Nov 05, 2025</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-9 px-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="monitoring" className="text-[16px]" />
<span>View Details</span>
</button>
<button className="h-9 px-4 rounded-lg bg-surface-bright hover:bg-surface-variant text-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Manage Caps</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-md relative overflow-hidden transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-2.5 py-1 rounded-md bg-tertiary-container/40 text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wide flex items-center gap-1">
<Icon name="two_wheeler" className="text-[14px]" />
<span>LOGISTICS SUBSIDY</span>
</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Bugolobi &amp; Kololo SafeBoda Free Delivery Subsidy</h3>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">Corridor Co-Pay</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center bg-surface-container-high/40 p-space-md rounded-xl">
<div className="md:col-span-5 flex items-center gap-space-md">
<div className="w-14 h-14 rounded-lg bg-action-gradient-start/15 flex items-center justify-center text-action-gradient-start">
<Icon name="moped" className="text-[32px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface">Delivery Fee Co-Payment</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant covers: <strong className="text-on-surface">UGX 2,000</strong></span>
<span className="font-body-sm text-body-sm text-tertiary">SwiftCart covers: <strong>UGX 1,500</strong></span>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-3 gap-space-sm pl-0 md:pl-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Corridor Volume Lift</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-extrabold mt-0.5">+41%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">East Kampala Corridors</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Deliveries Subsidized</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">388 Trips</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Avg 22 mins SLA</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Merchant Outlay</span>
<span className="font-label-lg text-label-lg text-amber-warning font-bold mt-0.5">UGX 776,000</span>
<span className="font-body-sm text-body-sm text-tertiary">Generated UGX 3.19M</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
<Icon name="location_on" className="text-[16px]" />
<span>Active Zones: Bugolobi, Kololo, Nakasero &amp; Lugogo Bypass</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-9 px-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="map" className="text-[16px]" />
<span>View Corridor Heatmap</span>
</button>
<button className="h-9 px-4 rounded-lg bg-surface-bright hover:bg-surface-variant text-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_location" className="text-[16px]" />
<span>Adjust Geo-Fence</span>
</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
<div className="flex flex-col gap-1 max-w-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Geo-Targeting Intelligence</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Kampala Prime Flash Windows</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Lunch-hour orders (12:00 - 14:30) in Nakasero &amp; Kololo peak with highest basket sizes when paired with 30-min guaranteed Boda express delivery.</p>
</div>

<div className="flex items-end gap-2 h-20 w-full md:w-64 pt-2">
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-surface-container-high rounded-t" style={{"height":"35%"}}></div>
<span className="font-label-sm text-label-sm text-outline">08h</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-surface-container-high rounded-t" style={{"height":"50%"}}></div>
<span className="font-label-sm text-label-sm text-outline">10h</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-action-gradient-start rounded-t" style={{"height":"95%"}}></div>
<span className="font-label-sm text-label-sm text-primary font-bold">12h</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-action-gradient-end rounded-t" style={{"height":"85%"}}></div>
<span className="font-label-sm text-label-sm text-primary font-bold">14h</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-surface-container-high rounded-t" style={{"height":"45%"}}></div>
<span className="font-label-sm text-label-sm text-outline">16h</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-surface-container-high rounded-t" style={{"height":"70%"}}></div>
<span className="font-label-sm text-label-sm text-outline">18h</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-lg" id="quick-builder">

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl border border-white/5 relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-action-gradient-start animate-pulse"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Instant Flash Deal Builder</h2>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">V4 Engine</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Deploy high-velocity flash offers directly into the SwiftCart consumer app homepage carousel.</p>
<form className="flex flex-col gap-space-md mt-space-xs" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Promotion Type</label>
<div className="grid grid-cols-1 gap-2">
<label className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5">
<input checked={true} className="text-primary-container focus:ring-0" name="promo_type" type="radio" value="flash" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Flash Sale (Countdown)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Timed badge with limited stock counter</span>
</div>
</div>
<Icon name="timer" className="text-[18px] text-action-gradient-start" />
</label>
<label className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5">
<input className="text-primary-container focus:ring-0" name="promo_type" type="radio" value="voucher" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Order Threshold Voucher</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">e.g., Save UGX 20K on 150K spend</span>
</div>
</div>
<Icon name="sell" className="text-[18px] text-secondary-fixed" />
</label>
<label className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2.5">
<input className="text-primary-container focus:ring-0" name="promo_type" type="radio" value="boda" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Free Boda Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant + Platform shared subsidy</span>
</div>
</div>
<Icon name="two_wheeler" className="text-[18px] text-tertiary" />
</label>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Target Product SKU</label>
<div className="relative">
<input className="w-full h-11 pl-3 pr-10 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md focus:outline-none focus:ring-1 focus:ring-primary-container" type="text" value="SoundCore Space One ANC (Obsidian)" />
<Icon name="check_circle" className="absolute right-3 top-3 text-[18px] text-emerald-escrow" />
</div>
<div className="flex items-center justify-between text-outline font-label-sm text-label-sm px-1">
<span>Base Retail: UGX 340,000</span>
<span>Current Stock: 42 Units</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Discount Mechanism</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<span className="absolute left-3 top-3 font-label-md text-label-md text-outline">%</span>
<input className="w-full h-11 pl-8 pr-3 rounded-lg bg-surface-container text-on-surface font-headline-sm text-headline-sm font-bold focus:outline-none focus:ring-1 focus:ring-primary-container" id="discount-val" max="90" min="1" type="number" value="10" />
</div>
<div className="h-11 px-3 rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span>New Price:</span>
<span className="text-emerald-escrow font-bold" id="calculated-price">UGX 306,000</span>
</div>
</div>

<div className="rounded-lg bg-surface-container p-2.5 flex items-center justify-between mt-1">
<div className="flex items-center gap-2">
<Icon name="shield" className="text-[18px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Merchant Margin Guardrail</span>
<span className="font-body-sm text-body-sm text-tertiary" id="margin-feedback">Safe margin: 19.4% retained</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold">PASSED</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Campaign Window</label>
<div className="grid grid-cols-2 gap-2">
<div>
<span className="font-label-sm text-label-sm text-outline block mb-1">Start Date</span>
<input className="w-full h-10 px-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" type="date" value="2025-10-25" />
</div>
<div>
<span className="font-label-sm text-label-sm text-outline block mb-1">End Date</span>
<input className="w-full h-10 px-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" type="date" value="2025-10-29" />
</div>
</div>

<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container/60 cursor-pointer mt-1">
<span className="font-body-sm text-body-sm text-on-surface">Display countdown ticker on product page</span>
<input checked={true} className="rounded text-primary-container focus:ring-0" type="checkbox" />
</label>
</div>

<div className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-sm border border-action-gradient-start/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="campaign" className="text-[20px] text-action-gradient-start" />
<span className="font-label-md text-label-md text-on-surface font-bold">Featured Placement Booster</span>
</div>
<input checked={true} className="rounded text-action-gradient-end focus:ring-0" id="boost-toggle" type="checkbox" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Top-of-search Category Pin + Home screen carousel prominence (+UGX 50,000 / day).</p>
<div className="flex items-center justify-between font-label-sm text-label-sm text-outline pt-1">
<span>Estimated Extra Reach:</span>
<span className="text-tertiary font-bold">+14,500 Kampala Buyers</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-space-xs">
<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-all flex items-center justify-center gap-2" id="submit-btn" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="rocket_launch" className="text-[20px]" />
<span>Launch Campaign to Storefront</span>
</button>
<span className="font-label-sm text-label-sm text-center text-outline">Escrow deduction auto-calculates after completion</span>
</div>
</form>
</div>

<div className="rounded-xl bg-gradient-to-br from-surface-container to-surface-container-low p-space-lg flex flex-col gap-space-md shadow-md border border-white/5 relative overflow-hidden">
<div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
<Icon name="lightbulb" className="text-[20px]" />
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Corridor Growth Insight</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Lunch-Hour Flash Velocity</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
              Flash sales with <strong className="text-tertiary">SafeBoda delivery badges</strong> see <span className="text-primary font-extrabold text-body-lg">3.2x higher conversion</span> in Kampala Central during the <strong>12:00 – 14:00</strong> lunch rush.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Vibrant modern street photography of a Kampala boda rider with branded helmet and cargo container navigating Kampala business district with sunny sky" src={`${assetBase}/images/e1109bbaab6e25fe.webp`} />
<div className="flex flex-col text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm text-on-surface font-bold">SafeBoda Direct Fulfillment</span>
<span>Guaranteed 35-minute drop-offs across Nakasero &amp; Kololo.</span>
</div>
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
