// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_analytics_performance_heatmaps_swiftcart_desktop_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span>Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span>Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span>Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span>Returns &amp; Disputes</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">1 Case</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet &amp; Payouts</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics &amp; Heatmaps</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile &amp; KYC</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Settings</a></nav><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full flex items-center"><Icon name="search" className="absolute left-3 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-12 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /><kbd className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/30">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Theme Toggle (Light Active)" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-primary hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications (3 unread)" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px] leading-[18px] text-center font-bold ring-2 ring-surface-container-lowest shadow-sm">3</span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md">KR</div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<section className="w-full px-space-xl py-space-md flex flex-wrap items-center justify-between gap-y-3">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span className="hover:text-primary transition-colors cursor-pointer">Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-primary transition-colors cursor-pointer">Business &amp; Finance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="font-label-md text-label-md text-on-surface">Analytics &amp; Heatmaps</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm">

<div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-lowest shadow-[0_1px_4px_rgba(14,27,77,0.04)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-tertiary tracking-wide uppercase">BoU NPS Sandbox Live</span>
<span className="font-label-sm text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">ID: KLA-MERCH-8821B</span>
</div>

<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-[0_1px_4px_rgba(14,27,77,0.04)] hover:bg-surface-container transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="calendar_month" className="text-[16px] text-primary" />
<span>Last 30 Days</span>
<Icon name="expand_more" className="text-[14px] text-on-surface-variant" />
</button>

<button className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-[0_1px_4px_rgba(14,27,77,0.04)] hover:bg-surface-container transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="hub" className="text-[16px] text-secondary" />
<span>All Kampala Hubs</span>
<Icon name="expand_more" className="text-[14px] text-on-surface-variant" />
</button>

<button className="flex items-center gap-2 px-space-lg py-2 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="file_download" className="text-[16px]" />
<span>Export Report (PDF/CSV)</span>
</button>
</div>
</section>

<section className="w-full px-space-xl pb-space-lg">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest to-surface-container-low p-space-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)]">
<div className="absolute -right-8 -top-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
<div className="space-y-1">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Merchant Analytics &amp; Velocity Heatmaps</h1>
<span className="flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Real-Time Telematics
            </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Kampala metropolitan trade velocity, rider corridor SLAs, and escrow settlement performance across MTN MoMo and Airtel Money infrastructure.
          </p>
</div>

<div className="flex items-center gap-3 self-start md:self-auto bg-surface-container/60 p-2 rounded-xl">
<div className="px-3 py-1 bg-surface-container-lowest rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">SafeBoda Corridors</span>
<span className="font-label-lg text-label-lg text-tertiary flex items-center gap-1">
<Icon name="bolt" className="text-[16px]" /> 94.8% SLA
            </span>
</div>
<div className="px-3 py-1 bg-surface-container-lowest rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Escrow Release</span>
<span className="font-label-lg text-label-lg text-primary flex items-center gap-1">
<Icon name="lock_clock" className="text-[16px]" /> T+0 Instant
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-space-xl pb-space-lg grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(14,27,77,0.08)] transition-all">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Gross Merchandise Value</span>
<span className="w-8 h-8 rounded-lg bg-primary-fixed/50 text-primary flex items-center justify-center">
<Icon name="payments" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">52,480,000</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
<Icon name="trending_up" className="text-[14px]" /> +22.4% vs last period
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1,434 orders</span>
</div>
</div>

<div className="pt-space-md">
<svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<defs>
<linearGradient id="gmvGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#da3700" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#da3700" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M0,18 Q15,16 30,19 T60,11 T85,6 L100,2 L100,24 L0,24 Z" fill="url(#gmvGrad)"></path>
<path d="M0,18 Q15,16 30,19 T60,11 T85,6 L100,2" fill="none" stroke="#da3700" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(14,27,77,0.08)] transition-all">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Net Settled Revenue</span>
<span className="w-8 h-8 rounded-lg bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
<Icon name="verified_user" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">50,684,200</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
<Icon name="shield" className="text-[12px]" /> Escrow cleared via MoMo Rails
          </span>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">96.5% Net Yield</span>
<span className="text-on-surface font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded">Payout ready</span>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(14,27,77,0.08)] transition-all">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kampala Metro SLA</span>
<span className="w-8 h-8 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">94.8%</span>
<span className="font-label-md text-label-md text-tertiary font-bold">On-Time</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="speed" className="text-[14px] text-primary" /> Avg SafeBoda Speed: <strong className="text-on-surface">21 mins</strong>
</span>
</div>
</div>
<div className="pt-space-md">
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden flex">
<div className="bg-tertiary h-2 rounded-full" style={{"width":"94.8%"}}></div>
<div className="bg-error-container h-2 rounded-full" style={{"width":"5.2%"}}></div>
</div>
<div className="flex justify-between items-center pt-1 font-body-sm text-[10px] text-on-surface-variant">
<span>Target 90%</span>
<span>Urban Corridors</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(14,27,77,0.08)] transition-all">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Store Conversion Rate</span>
<span className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center">
<Icon name="shopping_cart_checkout" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">4.12%</span>
<span className="font-label-md text-label-md text-tertiary font-bold">+0.8% QoQ</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm text-on-surface-variant">
<span>34,810 Visits</span>
<Icon name="arrow_forward" className="text-[12px]" />
<span className="font-label-md text-on-surface">1,434 Orders</span>
</div>
</div>
<div className="pt-space-md flex items-center gap-2">
<div className="flex-1 bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full" style={{"width":"68%"}}></div>
</div>
<span className="font-label-sm text-[10px] text-on-surface font-semibold">Top 5% Hub</span>
</div>
</div>
</section>

<section className="w-full px-space-xl pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-space-lg">

<div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex flex-wrap items-center justify-between gap-3 pb-space-lg">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Revenue &amp; Sales Velocity</h2>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Gross UGX</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Daily escrow billing volume across Kampala hubs &amp; online checkout</p>
</div>

<div className="flex items-center p-1 rounded-xl bg-surface-container font-label-md text-label-md">
<button className="px-3 py-1 rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>Hourly</button>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(14,27,77,0.06)] font-bold" onClick={() => alertToast('Action triggered')}>Daily</button>
<button className="px-3 py-1 rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>Weekly</button>
</div>
</div>

<div className="relative w-full h-64 my-2">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
<div className="border-b border-surface-container-high w-full flex justify-between"><span className="font-label-sm text-[10px] text-on-surface-variant">UGX 5.0M</span></div>
<div className="border-b border-surface-container-high w-full flex justify-between"><span className="font-label-sm text-[10px] text-on-surface-variant">UGX 3.75M</span></div>
<div className="border-b border-surface-container-high w-full flex justify-between"><span className="font-label-sm text-[10px] text-on-surface-variant">UGX 2.5M</span></div>
<div className="border-b border-surface-container-high w-full flex justify-between"><span className="font-label-sm text-[10px] text-on-surface-variant">UGX 1.25M</span></div>
<div className="border-b border-surface-container-high w-full flex justify-between"><span className="font-label-sm text-[10px] text-on-surface-variant">0</span></div>
</div>

<div className="absolute left-[66%] top-3 -translate-x-1/2 z-20 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(218,55,0,0.18)] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<div>
<p className="font-label-sm text-[10px] uppercase text-primary font-bold">Oct 24 Peak Day</p>
<p className="font-label-md text-label-md text-on-surface">UGX 4,820,000 <span className="text-on-surface-variant text-[11px] font-normal">(126 Orders)</span></p>
<p className="font-label-sm text-[9px] text-tertiary">MTN Rails: UGX 3.1M | Airtel: 1.7M</p>
</div>
</div>

<svg className="w-full h-full pt-4 pb-2" preserveAspectRatio="none" viewBox="0 0 700 210">
<defs>
<linearGradient id="areaGlow" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ff8a1f" stopOpacity="0.32"></stop>
<stop offset="85%" stopColor="#da3700" stopOpacity="0.02"></stop>
<stop offset="100%" stopColor="#da3700" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<rect fill="#f3ede7" height="60" rx="3" width="18" x="25" y="140"></rect>
<rect fill="#f3ede7" height="75" rx="3" width="18" x="110" y="125"></rect>
<rect fill="#f3ede7" height="90" rx="3" width="18" x="195" y="110"></rect>
<rect fill="#f3ede7" height="110" rx="3" width="18" x="280" y="90"></rect>
<rect fill="#f3ede7" height="130" rx="3" width="18" x="365" y="70"></rect>
<rect fill="#ffdbd1" height="175" rx="3" width="18" x="450" y="25"></rect>
<rect fill="#f3ede7" height="125" rx="3" width="18" x="535" y="75"></rect>
<rect fill="#f3ede7" height="140" rx="3" width="18" x="620" y="60"></rect>

<path d="M 20 160 
                     C 80 145, 140 125, 200 115 
                     C 260 105, 310 80, 370 72 
                     C 420 65, 440 28, 460 22 
                     C 480 18, 520 82, 550 78 
                     C 600 70, 640 45, 680 40 
                     L 680 200 L 20 200 Z" fill="url(#areaGlow)"></path>

<path d="M 20 160 
                     C 80 145, 140 125, 200 115 
                     C 260 105, 310 80, 370 72 
                     C 420 65, 440 28, 460 22 
                     C 480 18, 520 82, 550 78 
                     C 600 70, 640 45, 680 40" fill="none" stroke="#da3700" strokeLinecap="round" strokeWidth="3.5"></path>

<circle cx="20" cy="160" fill="#ffffff" r="4.5" stroke="#da3700" strokeWidth="2.5"></circle>
<circle cx="200" cy="115" fill="#ffffff" r="4.5" stroke="#da3700" strokeWidth="2.5"></circle>
<circle cx="370" cy="72" fill="#ffffff" r="4.5" stroke="#da3700" strokeWidth="2.5"></circle>
<circle cx="460" cy="22" fill="#da3700" r="7" stroke="#ffffff" strokeWidth="3"></circle>
<circle cx="550" cy="78" fill="#ffffff" r="4.5" stroke="#da3700" strokeWidth="2.5"></circle>
<circle cx="680" cy="40" fill="#ffffff" r="4.5" stroke="#da3700" strokeWidth="2.5"></circle>
</svg>
</div>

<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm px-2 pt-2 border-t border-surface-container-high/60">
<span>Oct 01</span>
<span>Oct 05</span>
<span>Oct 10</span>
<span>Oct 15</span>
<span>Oct 20</span>
<span className="text-primary font-bold">Oct 24 (Peak)</span>
<span>Oct 28</span>
<span>Oct 31</span>
</div>

<div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-md font-label-md text-label-md">
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-on-surface">Daily Revenue (UGX)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded bg-surface-container-highest"></span>
<span className="text-on-surface-variant">Dispatched Parcels (Units)</span>
</div>
</div>
<div className="flex items-center gap-2 text-tertiary">
<Icon name="verified" className="text-[16px]" />
<span className="font-label-sm text-label-sm uppercase">Ledger Reconciled: BoU Sandbox Verified</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-lg">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Kampala Urban Delivery Heatmap</h2>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Live Dispatch
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rider route concentration, congestion indexing, and drop-off fulfillment density</p>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm bg-surface-container px-3 py-1.5 rounded-xl text-on-surface">
<Icon name="moped" className="text-[16px] text-primary" />
<span>Active Fleet: <strong>42 Bodas En Route</strong></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">

<div className="md:col-span-7 relative h-72 rounded-xl bg-surface-container-low overflow-hidden p-3 shadow-inner flex flex-col justify-between">

<div className="absolute inset-0 opacity-15">
<svg className="w-full h-full" viewBox="0 0 400 300">

<line stroke="#907067" strokeDasharray="4 2" strokeWidth="3" x1="50" x2="350" y1="50" y2="250"></line>
<line stroke="#907067" strokeWidth="2" x1="350" x2="50" y1="60" y2="240"></line>
<circle cx="200" cy="150" fill="none" opacity="0.4" r="120" stroke="#da3700" strokeWidth="1"></circle>
<circle cx="200" cy="150" fill="none" opacity="0.7" r="60" stroke="#da3700" strokeWidth="1"></circle>
</svg>
</div>

<div className="absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="absolute w-24 h-24 rounded-full bg-primary/20 animate-ping"></span>
<span className="absolute w-16 h-16 rounded-full bg-primary/35"></span>
<span className="relative w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-[11px] flex items-center justify-center shadow-lg">
                  482
                </span>
</div>
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded shadow-sm text-center">
<p className="font-label-sm text-[10px] text-on-surface font-bold leading-tight">Central CBD</p>
<p className="font-body-sm text-[9px] text-primary">Avg 14 min</p>
</div>
</div>

<div className="absolute top-[35%] right-[16%] text-center group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="absolute w-16 h-16 rounded-full bg-primary/25"></span>
<span className="relative w-7 h-7 rounded-full bg-primary text-on-primary font-bold text-[10px] flex items-center justify-center shadow-md">
                  348
                </span>
</div>
<div className="mt-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm text-center">
<p className="font-label-sm text-[10px] text-on-surface font-bold">Bugolobi</p>
<p className="font-body-sm text-[9px] text-primary">Avg 19 min</p>
</div>
</div>

<div className="absolute top-[16%] left-[38%] text-center group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="absolute w-12 h-12 rounded-full bg-secondary/20"></span>
<span className="relative w-6 h-6 rounded-full bg-secondary text-on-secondary font-bold text-[10px] flex items-center justify-center shadow">
                  284
                </span>
</div>
<div className="mt-0.5 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm text-center">
<p className="font-label-sm text-[10px] text-on-surface font-bold">Kololo</p>
<p className="font-body-sm text-[9px] text-secondary">Avg 16 min</p>
</div>
</div>

<div className="absolute top-[18%] left-[12%] text-center group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-[9px] flex items-center justify-center shadow">
                  192
                </span>
</div>
<div className="mt-0.5 bg-surface-container-lowest/90 px-1 py-0.5 rounded shadow-sm text-center">
<p className="font-label-sm text-[9px] text-on-surface font-medium">Makerere</p>
</div>
</div>

<div className="absolute bottom-[10%] right-[32%] text-center group cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-[9px] flex items-center justify-center shadow">
                  128
                </span>
</div>
<div className="mt-0.5 bg-surface-container-lowest/90 px-1 py-0.5 rounded shadow-sm text-center">
<p className="font-label-sm text-[9px] text-on-surface font-medium">Muyenga</p>
</div>
</div>

<div className="z-10 flex items-center justify-between w-full">
<span className="font-label-sm text-[10px] bg-surface-container-lowest/80 backdrop-blur px-2 py-1 rounded text-on-surface-variant font-semibold">
                Kampala Metropolitan Boundary
              </span>
<div className="flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur px-2 py-1 rounded text-[9px] text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span> High Heat
                <span className="w-2 h-2 rounded-full bg-secondary inline-block ml-1"></span> Moderate
                <span className="w-2 h-2 rounded-full bg-surface-container-highest inline-block ml-1"></span> Normal
              </div>
</div>
</div>

<div className="md:col-span-5 space-y-2">
<div className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Central / Nakasero
                </p>
<p className="font-body-sm text-[11px] text-on-surface-variant">482 deliveries • Avg 14 mins</p>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">98.2% SLA</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Nakawa / Bugolobi
                </p>
<p className="font-body-sm text-[11px] text-on-surface-variant">348 deliveries • Avg 19 mins</p>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">95.0% SLA</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Kololo / Kamwokya
                </p>
<p className="font-body-sm text-[11px] text-on-surface-variant">284 deliveries • Avg 16 mins</p>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">96.4% SLA</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                  Kawempe / Makerere
                </p>
<p className="font-body-sm text-[11px] text-on-surface-variant">192 deliveries • Avg 24 mins</p>
</div>
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed/40 px-2 py-0.5 rounded">89.1% SLA</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                  Makindye / Muyenga
                </p>
<p className="font-body-sm text-[11px] text-on-surface-variant">128 deliveries • Avg 26 mins</p>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded">91.8% SLA</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-gradient-to-r from-surface-container to-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
<Icon name="route" className="text-[20px]" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Jinja Road Express Dispatch Corridor</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">SafeBoda Priority Channel: 100% blind OTP verification active</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
              Density: 14 Riders / Sq Km
            </span>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-tertiary text-on-tertiary">
              Transit: Optimal
            </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-space-lg">

<div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Top SKU Leaderboard</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">By GMV</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Highest volume revenue drivers this period</p>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-lg bg-surface-container-lowest shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain rounded" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte black finish on clean studio tabletop with warm ambient lighting" src={`${assetBase}/images/34e61a0ae82589d4.webp`} />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 20.5M</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">SKU: SND-ANC-01 • 60 sold</p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-[10px] text-tertiary">Conv. 5.4%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant flex items-center gap-0.5">
<Icon name="star" className="text-[12px] text-amber-500 fill-1" /> 4.9 (42)
              </span>
</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-lg bg-surface-container-lowest shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain rounded" data-alt="Anker Prime compact fast GaN multi-port wall charger brick with metallic pins on pristine neutral background" src={`${assetBase}/images/cf23a0f291d5d7d5.webp`} />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface truncate">Anker Prime 67W GaN</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 11.2M</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">SKU: ANK-67W-GN • 68 sold</p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-[10px] text-tertiary">Conv. 4.8%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant flex items-center gap-0.5">
<Icon name="star" className="text-[12px] text-amber-500 fill-1" /> 4.8 (31)
              </span>
</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-lg bg-surface-container-lowest shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain rounded" data-alt="Oraimo FreePods true wireless stereo earbuds case with LED battery indicator in soft cinematic lighting" src={`${assetBase}/images/a4fa440cd61acdda.webp`} />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface truncate">Oraimo FreePods 4</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 7.36M</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">SKU: ORM-FP4-UG • 64 sold</p>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-[10px] text-tertiary">Conv. 3.9%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant flex items-center gap-0.5">
<Icon name="star" className="text-[12px] text-amber-500 fill-1" /> 4.7 (58)
              </span>
</div>
</div>
</div>
<button className="w-full py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
          View All 48 Product Listings
        </button>
</div>

<div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-md">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Channels &amp; Payment Rails</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Buyer acquisition origin and telecom escrow settlement</p>

<div className="space-y-1.5">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Traffic Source</span>
<span className="text-primary font-bold">App Dominant (72%)</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden flex">
<div className="bg-primary h-2.5" style={{"width":"72%"}} title="Mobile App 72%"></div>
<div className="bg-secondary h-2.5" style={{"width":"24%"}} title="Web 24%"></div>
<div className="bg-tertiary h-2.5" style={{"width":"4%"}} title="WhatsApp Direct 4%"></div>
</div>
<div className="flex justify-between font-body-sm text-[10px] text-on-surface-variant">
<span>Mobile App 72%</span>
<span>Web 24%</span>
<span>WhatsApp 4%</span>
</div>
</div>

<div className="space-y-1.5 pt-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Payment Rails Settlement</span>
<span className="text-tertiary font-bold">MTN MoMo Lead (64%)</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden flex">
<div className="bg-[#F59E0B] h-2.5" style={{"width":"64%"}} title="MTN MoMo 64%"></div>
<div className="bg-[#ba1a1a] h-2.5" style={{"width":"31%"}} title="Airtel Money 31%"></div>
<div className="bg-secondary h-2.5" style={{"width":"5%"}} title="Visa/Card 5%"></div>
</div>
<div className="flex justify-between font-body-sm text-[10px] text-on-surface-variant">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span> MTN MoMo (64%)</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span> Airtel (31%)</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Card (5%)</span>
</div>
</div>

<div className="mt-2 p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="verified_user" className="text-[18px] text-tertiary" />
<div>
<p className="font-label-sm text-label-sm text-on-surface">Return &amp; Dispute Rate</p>
<p className="font-body-sm text-[10px] text-on-surface-variant">Escrow holdback threshold safe</p>
</div>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-tertiary">0.6%</span>
<span className="block font-label-sm text-[9px] text-tertiary uppercase font-bold">&lt; 2.0% Safe</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-sm">
<div className="flex items-center gap-2">
<Icon name="smart_toy" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">AI Merchant Insights</h2>
<span className="ml-auto font-label-sm text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full uppercase">SwiftEngine ML</span>
</div>
<div className="space-y-3 pt-space-xs">

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all space-y-1">
<div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm">
<Icon name="auto_graph" className="text-[14px]" />
<span>Basket Optimization</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              Bundle <strong>SoundCore Space One</strong> with <strong>67W GaN Charger</strong> to expand average cart basket size by +14%.
            </p>
<div className="pt-1">
<button className="font-label-sm text-[11px] text-primary hover:underline flex items-center gap-0.5" onClick={() => alertToast('Action triggered')}>
                Generate 1-Click Bundle <Icon name="chevron_right" className="text-[12px]" />
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all space-y-1">
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm">
<Icon name="local_shipping" className="text-[14px]" />
<span>Logistics Route Surge</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              SafeBoda express delivery badge in <strong>Bugolobi corridor</strong> drives +28% checkout completion during evening transit peak (5 PM - 8 PM).
            </p>
<div className="pt-1">
<button className="font-label-sm text-[11px] text-primary hover:underline flex items-center gap-0.5" onClick={() => alertToast('Action triggered')}>
                Prioritize Bugolobi Hub <Icon name="chevron_right" className="text-[12px]" />
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main></div>
    </div>
  );
};

export default Screen;
