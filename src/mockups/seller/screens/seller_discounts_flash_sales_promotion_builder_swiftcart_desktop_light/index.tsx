// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_discounts_flash_sales_promotion_builder_swiftcart_desktop_light/code.html
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

<div className="w-full bg-surface-container px-space-xl py-space-xs text-on-surface-variant flex items-center justify-between shadow-sm overflow-hidden select-none">
<div className="flex items-center gap-space-sm min-w-0">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-extrabold shrink-0">Live Ad Node</span>
<p className="font-body-sm text-body-sm text-on-surface truncate">
        Kampala Central Ad Node: High bid competition active. Flash sale slots refreshing in real-time.
        <span className="mx-space-xs text-outline/40">|</span>
<span className="text-on-surface-variant font-label-md text-label-md">MTN-Uganda Ads FastPath Active</span>
<span className="mx-space-xs text-outline/40">|</span>
<span className="text-tertiary font-label-md text-label-md">Airtel Money Escrow Sync Ready</span>
</p>
</div>
<div className="hidden xl:flex items-center gap-space-md shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg. Ad CPC: <span className="text-on-surface font-bold">UGX 145</span></span>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-sm">Auction Latency: 18ms</span>
</div>
</div>
<div className="px-space-xl py-space-lg space-y-space-lg max-w-[1600px] w-full mx-auto">

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md pb-space-xs">
<div className="space-y-1">
<nav className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span className="hover:text-primary transition-colors cursor-pointer">Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-primary transition-colors cursor-pointer">Business &amp; Finance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Discounts &amp; Ads</span>
</nav>
<div className="flex items-baseline gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Discounts, Flash Deals &amp; Promotions</h1>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase">KLA-Q4 Corridor</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Create high-converting promotions, configure Kampala Flash Sales, and monitor ROAS across dynamic corridors.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="h-10 px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-xl font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.01]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span>Campaign Guidelines &amp; SLA</span>
</button>
<button className="h-10 px-space-lg bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded-xl font-label-lg text-label-lg flex items-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] transition-all transform active:scale-95" id="open-builder-btn" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="add_circle" className="text-[20px]" />
<span>+ Create New Campaign</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Active Campaigns</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="campaign" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface">4 Running</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-surface-container-low px-1.5 py-0.5 rounded-full">+1 Scheduled</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">2 Flash Sales • 1 Voucher • 1 SafeBoda Bogo</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1 rounded-lg">
<span>Total Pipeline</span>
<span className="font-bold text-on-surface">7 Campaigns Created</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Attributed Revenue</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
<Icon name="payments" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-on-surface">16,840,000</span>
</div>
<p className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 font-bold">
<Icon name="trending_up" className="text-[16px]" />
            +32.1% of total monthly gross GMV
          </p>
</div>
<div className="mt-space-md space-y-1">
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"32.1%"}}></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Promo Share of Store GMV</span>
<span className="font-bold text-on-surface">32.1% Target</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Blended Promotion ROAS</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="auto_graph" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-primary-container">4.6x</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-surface-container-low px-2 py-0.5 rounded-full">High Efficiency</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Spend: UGX 3,660,869 • +0.8x vs last cycle</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-1 rounded-lg">
<span>Target Benchmark</span>
<span className="font-bold text-tertiary">3.5x (+31% Outperform)</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Vouchers Redeemed</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<Icon name="confirmation_number" className="text-[18px]" />
</span>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface">642 Claims</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Claim Rate: 71.3%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Avg basket lift: <span className="font-bold text-on-surface">+UGX 42,000</span></p>
</div>
<div className="mt-space-md space-y-1">
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"85%"}}></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>642 of 750 Authorized</span>
<span className="font-bold text-primary">85.6% Cap</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 xl:col-span-8 space-y-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
<button className="px-space-md py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all shrink-0" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
              All Campaigns (7)
            </button>
<button className="px-space-md py-1.5 rounded-lg font-label-sm text-label-sm bg-primary-container text-on-primary-container shadow-sm font-bold shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
              Active (4)
            </button>
<button className="px-space-md py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
              Scheduled (2)
            </button>
<button className="px-space-md py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container transition-all shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
              Expired (1)
            </button>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<Icon name="search" className="absolute left-2.5 top-2 text-on-surface-variant text-[16px]" />
<input className="w-full h-8 pl-8 pr-3 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search campaign, SKU, code..." type="text" />
</div>
<button className="h-8 px-2.5 bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface font-label-sm text-label-sm flex items-center gap-1 shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Filter</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg hover:shadow-md transition-all space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-md bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-extrabold tracking-wider uppercase flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
                FLASH DEAL
              </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Ends in 2d 14h 22m
              </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-space-sm py-0.5 rounded-md flex items-center gap-1 self-start sm:self-auto font-semibold">
<Icon name="rocket_launch" className="text-[16px]" />
              Live Traffic Boost Active
            </span>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-space-md">
<div className="relative w-20 h-20 rounded-xl overflow-hidden bg-surface-container shrink-0">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless over ear obsidian black headphones displayed in a studio setting with soft warm orange side lighting, crisp product photography style." src={`${assetBase}/images/bc3845e3e1a170db.webp`} />
<span className="absolute bottom-1 right-1 bg-primary text-on-primary font-label-sm text-[9px] px-1 rounded font-bold">-10%</span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Tech Week Mega Sale</h2>
<Icon name="verified" className="text-primary text-[18px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">SoundCore Space One ANC (Obsidian) • SKU: SC-SP1-BLK</p>
<div className="flex items-baseline gap-2 pt-0.5">
<span className="font-label-md text-label-md text-primary font-bold">10% OFF</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 306,000</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 340,000</span>
</div>
</div>
<div className="w-full md:w-56 bg-surface-container-low p-space-sm rounded-xl space-y-1.5 shrink-0">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Budget Velocity</span>
<span className="font-bold text-on-surface">84% Utilized</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"84%"}}></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>UGX 1.0M spent</span>
<span>Cap: 1.2M</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Attributed GMV</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">UGX 9,450,000</p>
<span className="font-label-sm text-[10px] text-tertiary">31 orders fulfilled</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Realized ROAS</span>
<p className="font-label-md text-label-md font-bold text-tertiary mt-0.5">7.8x</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">+2.1x over bench</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">MTN Ads Clickthrough</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">5.14% CTR</p>
<span className="font-label-sm text-[10px] text-tertiary">Top 5% of Hub</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">SafeBoda Conversion</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">92.4%</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">Same-day arrival</span>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Flash Quota Depletion</span>
<span className="font-bold text-primary">84 / 100 units claimed (16 units left)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"84%"}}></div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 self-start sm:self-auto">
<Icon name="date_range" className="text-[16px] text-on-surface-variant" />
              Active: Oct 20 – Oct 27, 2025
            </span>
<div className="flex items-center gap-space-xs self-end sm:self-auto">
<button className="px-space-md py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
                View Analytics
              </button>
<button className="px-space-md py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
                Pause Campaign
              </button>
<button className="px-space-md py-1 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:opacity-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
                Edit Promotion
              </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg hover:shadow-md transition-all space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-extrabold tracking-wider uppercase flex items-center gap-1">
<Icon name="confirmation_number" className="text-[14px]" />
                STORE VOUCHER
              </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Verified Buyer Exclusive
              </span>
</div>
<div className="flex items-center gap-1.5 self-start sm:self-auto">
<span className="font-label-sm text-label-sm text-on-surface-variant">Coupon Code:</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-mono font-bold text-on-surface tracking-wider text-body-sm select-all">SOUNDKLA15</span>
<button className="text-on-surface-variant hover:text-primary transition-colors" title="Copy code" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
</div>
<div className="space-y-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface">SoundCore Flagship Launch Voucher</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              15% OFF Entire Cart • Minimum Order Value: <span className="font-bold text-on-surface">UGX 200,000</span> • Automatically applied at MTN &amp; Airtel checkout.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Claims &amp; Redemptions</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">214 / 300</p>
<span className="font-label-sm text-[10px] text-tertiary">71% conversion rate</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Attributed Cart GMV</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">UGX 4,200,000</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">Avg Basket: UGX 260K</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Target Audience</span>
<p className="font-label-md text-label-md font-bold text-secondary mt-0.5">Kampala + Wakiso</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">Direct MoMo Push</span>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Redemption Allowance</span>
<span className="font-bold text-secondary">214 of 300 claims taken | 86 remaining</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"71.3%"}}></div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 self-start sm:self-auto">
<Icon name="event" className="text-[16px] text-on-surface-variant" />
              Active: Oct 15 – Nov 05, 2025
            </span>
<div className="flex items-center gap-space-xs self-end sm:self-auto">
<button className="px-space-md py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>
                View Details
              </button>
<button className="px-space-md py-1 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>
                Manage Caps
              </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg hover:shadow-md transition-all space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-extrabold tracking-wider uppercase flex items-center gap-1">
<Icon name="two_wheeler" className="text-[14px]" />
                LOGISTICS SUBSIDY
              </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<Icon name="handshake" className="text-[14px]" />
                Corridor Co-Pay Active
              </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-space-sm py-0.5 rounded-md self-start sm:self-auto font-bold">
              +41% East Kampala Corridors
            </span>
</div>
<div className="space-y-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Bugolobi &amp; Kololo SafeBoda Free Delivery Subsidy</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              Delivery Fee Co-Payment • Merchant covers: <span className="font-bold text-on-surface">UGX 2,000</span> • SwiftCart Platform covers: <span className="font-bold text-tertiary">UGX 1,500</span> • Consumer pays: <span className="font-bold text-tertiary">UGX 0</span>.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Subsidized Trips</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">388 Boda Runs</p>
<span className="font-label-sm text-[10px] text-tertiary">Avg 22 mins SLA</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Outlay</span>
<p className="font-label-md text-label-md font-bold text-primary mt-0.5">UGX 776,000</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">Generated UGX 3.19M</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Corridor Geo-fence</span>
<p className="font-label-md text-label-md font-bold text-on-surface mt-0.5">Central &amp; East</p>
<span className="font-label-sm text-[10px] text-on-surface-variant">Bugolobi, Kololo, Nakasero</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-2">
<Icon name="location_on" className="text-tertiary text-[18px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Geofence: <strong>Bugolobi, Kololo, Nakasero &amp; Lugogo Bypass</strong></span>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-auto">
<button className="px-space-md py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>
                Adjust Geo-Fence
              </button>
<button className="px-space-md py-1 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>
                Corridor Heatmap
              </button>
</div>
</div>
</div>

<div className="bg-surface-container p-space-lg rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="space-y-1 max-w-xl">
<div className="flex items-center gap-2">
<Icon name="explore" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kampala Prime Flash Windows</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Lunch-hour orders (12:00 – 14:30) in Nakasero &amp; Kololo peak with highest basket sizes when paired with 30-min guaranteed Boda express delivery.
            </p>
</div>

<div className="flex items-center gap-1.5 shrink-0 bg-surface-container-lowest p-2 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded">08h</span>
<span className="font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded">10h</span>
<span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-bold px-2 py-0.5 rounded animate-pulse">12h - 14h PEAK</span>
<span className="font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded">16h</span>
<span className="font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded">18h</span>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4 space-y-space-md">

<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(14,27,77,0.06)] p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Instant Flash Deal Builder</h2>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded-full font-bold">V4 Engine</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Deploy high-velocity flash offers directly into consumer feed carousels.
              </p>
</div>
<Icon name="flash_on" className="text-primary text-[24px]" />
</div>
<form className="space-y-space-md" id="promo-builder-form" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold block">1. Select Mechanism</label>
<div className="grid grid-cols-1 gap-2">

<label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all">
<div className="flex items-center gap- space-sm">
<input checked={true} className="w-4 h-4 text-primary-container focus:ring-primary-container accent-primary-container" name="promo_type" type="radio" value="flash" />
<div className="ml-2">
<span className="font-label-md text-label-md text-on-surface block font-bold">Flash Sale (Countdown)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Timed badge with limited stock counter</span>
</div>
</div>
<Icon name="timer" className="text-primary text-[20px]" />
</label>

<label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
<div className="flex items-center gap-space-sm">
<input className="w-4 h-4 text-primary-container focus:ring-primary-container accent-primary-container" name="promo_type" type="radio" value="voucher" />
<div className="ml-2">
<span className="font-label-md text-label-md text-on-surface block font-bold">Order Threshold Voucher</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">e.g. Save UGX 20K on 150K spend</span>
</div>
</div>
<Icon name="sell" className="text-secondary text-[20px]" />
</label>

<label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest hover:bg-surface-container cursor-pointer transition-all">
<div className="flex items-center gap-space-sm">
<input className="w-4 h-4 text-primary-container focus:ring-primary-container accent-primary-container" name="promo_type" type="radio" value="delivery" />
<div className="ml-2">
<span className="font-label-md text-label-md text-on-surface block font-bold">Free Boda Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant + Platform shared subsidy</span>
</div>
</div>
<Icon name="moped" className="text-tertiary text-[20px]" />
</label>
</div>
</div>

<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold block" htmlFor="sku-select">2. Target Product SKU</label>
<div className="relative">
<select className="w-full h-11 px-space-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-pointer" id="sku-select">
<option selected={true} value="space-one">SoundCore Space One ANC (Obsidian) - UGX 340,000</option>
<option value="q45">SoundCore Space Q45 Ultra (Navy) - UGX 480,000</option>
<option value="liberty4">SoundCore Liberty 4 NC Earbuds - UGX 260,000</option>
<option value="flare2">SoundCore Flare 2 360° Speaker - UGX 195,000</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-3 text-on-surface-variant pointer-events-none text-[18px]" />
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant px-1">
<span>Base Retail: <strong className="text-on-surface">UGX 340,000</strong></span>
<span className="text-tertiary font-bold">Current Hub Stock: 42 Units</span>
</div>
</div>

<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold block">3. Discount Percentage</label>
<div className="grid grid-cols-2 gap-space-sm">
<div className="relative">
<span className="absolute left-3 top-3 font-bold text-on-surface-variant font-label-md text-label-md">%</span>
<input className="w-full h-11 pl-8 pr-3 rounded-xl bg-surface-container-low text-on-surface font-headline-sm text-headline-sm outline-none focus:ring-2 focus:ring-primary-container" id="discount-input" max="60" min="1" type="number" value="10" />
</div>
<div className="bg-surface-container-low px-space-md py-1.5 rounded-xl flex flex-col justify-center">
<span className="font-label-sm text-[10px] uppercase text-on-surface-variant">New Customer Price</span>
<div className="font-headline-sm text-headline-sm text-primary font-bold" id="calculated-price">UGX 306,000</div>
</div>
</div>

<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm mt-1">
<Icon name="format_image_left" className="text-tertiary text-[16px]" />
<span>Margin Guardrail: <strong className="text-tertiary">19.4% retained net margin</strong> [PASSED]</span>
</div>
</div>

<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold block">4. Campaign Window</label>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<span className="font-label-sm text-[10px] text-on-surface-variant block mb-1">Start Date</span>
<input className="w-full h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary-container" type="date" value="2025-10-25" />
</div>
<div>
<span className="font-label-sm text-[10px] text-on-surface-variant block mb-1">End Date</span>
<input className="w-full h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary-container" type="date" value="2025-10-29" />
</div>
</div>
<label className="flex items-center gap-2 mt-1.5 cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Display countdown ticker on product page</span>
</label>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low space-y-2">
<label className="flex items-start gap-2.5 cursor-pointer">
<input checked={true} className="w-4 h-4 mt-0.5 text-primary-container accent-primary-container" type="checkbox" />
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold block">Featured Search Placement</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Top-of-search Category Pin + Home screen carousel prominence (+UGX 50,000 / day).
                  </p>
</div>
</label>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-1 px-1">
<span className="text-on-surface-variant">Estimated Extra Reach:</span>
<span className="font-bold text-tertiary">+14,500 Kampala Buyers</span>
</div>
</div>

<div className="space-y-space-xs pt-space-xs">
<button className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] transition-all transform active:scale-95" id="deploy-btn" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="rocket_launch" className="text-[20px]" />
<span>Launch Campaign to Storefront</span>
</button>
<p className="font-label-sm text-label-sm text-center text-on-surface-variant">
                Escrow deduction auto-calculates after campaign completion.
              </p>
</div>
</form>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-high space-y-space-sm shadow-sm">
<div className="flex items-center gap-2">
<Icon name="lightbulb" className="text-primary text-[20px]" />
<h3 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Flash Velocity Insight</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Flash sales paired with SafeBoda 45-minute delivery tags see <strong className="text-on-surface">3.2x higher conversion</strong> in Kampala Central during the 12:00 – 14:00 lunch rush.
          </p>
<div className="flex items-center gap-space-sm pt-1">
<div className="w-10 h-10 rounded-lg overflow-hidden bg-surface-container shrink-0">
<img className="w-full h-full object-cover" data-alt="A portrait of a friendly Ugandan SafeBoda motorcycle delivery courier wearing an orange helmet and safety jacket in Kampala, smiling with confidence." src={`${assetBase}/images/645c6f2e23c6cb56.webp`} />
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold block truncate">SafeBoda Kampala Express</span>
<span className="font-label-sm text-label-sm text-tertiary">98.4% SLA Delivery Guarantee</span>
</div>
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
