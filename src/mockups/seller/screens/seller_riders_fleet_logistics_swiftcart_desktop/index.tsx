// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_riders_fleet_logistics_swiftcart_desktop/code.html
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
      <aside className={`fixed z-50 left-0 top-0 h-full w-60 bg-surface z-50 flex flex-col justify-between py-space-md border-r border-surface-container-highest/60 select-none ${drawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`}><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col gap-space-md"><div className="px-space-md flex items-center justify-between pb-space-sm border-b border-surface-container-highest/40"><div className="flex items-center gap-space-xs"><Icon name="electric_moped" className="text-action-gradient-start text-[20px]" /><span className="font-label-lg text-label-lg tracking-wider text-on-surface uppercase">SwiftCart</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase font-bold tracking-tight">Uganda</span></div><nav className="flex flex-col gap-space-sm px-space-sm overflow-y-auto" data-active-classes="bg-surface-container-high text-on-surface font-label-md font-bold rounded-lg border-l-2 border-action-gradient-start"><div className="px-space-sm pt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Daily Operations</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="dashboard" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shopping_bag" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">14 Pending</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-1.5 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">2 Low</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">6 Active</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Post-Purchase</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="warning" className="text-[19px] text-danger-penalty group-hover:text-error" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">1 Case</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Business &amp; Finance</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">14.8M</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="bar_chart" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_offer" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Settings</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="verified" className="text-emerald-escrow text-[16px]" /></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings-notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Settings</span></div></a></nav></div><div className="px-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-highest/40 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kampala Hub Node</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Direct Escrow Active</span></div></div><Icon name="lock" className="text-on-surface-variant text-[16px]" /></div></div></aside>
<div className="pl-0 lg:pl-60 min-h-screen bg-surface-dark flex flex-col"><header className="fixed top-0 left-0 lg:left-60 right-0 h-16 bg-surface/90 backdrop-blur-md z-40 px-space-xl flex items-center justify-between border-b border-surface-container-highest/60"><div className="flex items-center gap-space-md"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="px-2 py-0.5 rounded bg-surface-container-high text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-widest">Seller Portal</span><div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant pl-space-sm border-l border-surface-container-highest/60"><Icon name="verified" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">SoundCore Uganda Official</span><span className="font-label-sm text-label-sm text-on-surface-variant/80">URSB Verified • Nakasero Flagship</span></div></div></div><div className="flex items-center gap-space-lg"><div className="relative hidden md:block w-72"><Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" /><input className="w-full h-10 bg-surface-container-low rounded-lg pl-9 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-highest/50" placeholder="Search SKU, Order ID, Rider..." type="text" /></div><div className="flex items-center gap-space-sm"><div className="flex items-center p-1 rounded-lg bg-surface-container-low border border-surface-container-highest/50"><button className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[15px]" />Dark</button><button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[15px]" />Light</button></div><button className="relative p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors border border-surface-container-highest/50" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-airtel-red ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-sm border-l border-surface-container-highest/60"><div className="relative flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs">KR</div><span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow ring-2 ring-surface"></span></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Store Manager</span></div></div></div></div></header><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full gap-space-lg select-none">

<div className="w-full bg-surface-container-high/90 backdrop-blur-md rounded-xl p-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-md">
<div className="flex items-center gap-space-sm min-w-0">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Kampala Central Dispatch Node</span>
<span className="text-on-surface-variant font-body-sm text-body-sm hidden sm:inline">• Uptime: 99.98% • MTN &amp; Airtel Dual Cellular Uplink Live</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm font-semibold bg-surface-container px-2.5 py-1 rounded-full text-tertiary">
<Icon name="security" className="text-[15px]" />
        Escrow Protected Delivery Route
      </div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Synced 12s ago</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riders &amp; Dedicated Courier Fleet</h1>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-widest">
          Kampala Metro
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
        Real-time telemetry, stage assignments, and boda courier dispatch for Nakasero Flagship Hub.
      </p>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<button className="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<Icon name="assessment" className="text-[18px]" />
        Courier Performance Report
      </button>
<button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold flex items-center gap-2 shadow-lg shadow-action-gradient-end/25 hover:brightness-110 active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_link" className="text-[18px]" />
        + Invite Courier via SMS Link
      </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Store Couriers</span>
<Icon name="badge" className="text-secondary text-[20px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">8</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">100% Vetted</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">Dedicated SoundCore roster</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">SafeBoda Direct</span>
<Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">5 Active</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 8 online</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">Connected via SafeBoda API</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Avg Pickup Time</span>
<Icon name="timer" className="text-tertiary text-[20px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">16 mins</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">↓ 3m</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">Kampala Central corridor</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Handover Rate</span>
<Icon name="verified_user" className="text-emerald-escrow text-[20px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-emerald-escrow font-bold">99.1%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">7-day avg</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1">Blind QR verification code</span>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-8 flex flex-col gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="hub" className="text-action-gradient-start text-[22px]" />
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Kampala Metro Stage Telemetry</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live positioning across Kololo, Nakasero, Nakawa &amp; Acacia corridors</span>
</div>
</div>
<div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-container">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold" onClick={() => alertToast('Action triggered')}>All Stages (4)</button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>Idle Only (2)</button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>En Route (2)</button>
</div>
</div>

<div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner group">
<div className="w-full h-full bg-cover bg-center" data-location="Kampala, Uganda" style={{"backgroundImage":"url('/images/0ffd6166b0528ae3.webp')"}}></div>
<div className="absolute inset-0 bg-surface-dark/40 backdrop-blur-[1px] pointer-events-none"></div>

<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-surface-container-high/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
<span className="w-2.5 h-2.5 rounded-full bg-action-gradient-start animate-ping"></span>
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Nakasero Flagship Hub</span>
<span className="font-label-sm text-label-sm text-action-gradient-start">Warehouse Origin</span>
</div>
</div>
<div className="absolute top-1/4 right-1/4 flex items-center gap-1.5 bg-surface-dark/90 px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
<Icon name="moped" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Brian K. (#412)</span>
<span className="text-tertiary font-label-sm text-label-sm font-bold">En Route</span>
</div>
<div className="absolute bottom-1/4 left-1/2 flex items-center gap-1.5 bg-surface-dark/90 px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Ronald O. (#108)</span>
<span className="text-emerald-escrow font-label-sm text-label-sm">0.4 km</span>
</div>

<div className="absolute bottom-3 right-3 flex items-center gap-2">
<span className="px-2 py-1 rounded bg-surface-dark/85 text-on-surface-variant font-label-sm text-label-sm backdrop-blur-sm">
              Live SafeBoda GPS • 4G Stream
            </span>
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest shadow-md" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up professional portrait of an East African motorcycle courier wearing a clean branded orange helmet and reflective jacket, smiling confidently in bright morning sun Kampala Uganda." src={`${assetBase}/images/bb5ff7ef53e6bacb.webp`} />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Brian Kizito</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold">SafeBoda #412 • Bajaj Boxer UEF 842X</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia / Nakasero Stage</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[14px]" />
                4.92
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">28 trips today</span>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/40 p-2.5 rounded-lg flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2 h-2 rounded-full bg-action-gradient-start animate-pulse flex-shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface truncate">
                Delivering Order <span className="text-primary font-bold">#SC-98241</span>
</span>
</div>
<span className="px-2 py-0.5 rounded bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold flex-shrink-0">
              In Transit
            </span>
</div>
<div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<Icon name="location_on" className="text-[16px]" /> Kololo Terrace (ETA 8m)
            </span>
<button className="text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
              Track GPS <Icon name="chevron_right" className="text-[14px]" />
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container/60 transition-all border-l-4 border-l-emerald-escrow">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an experienced Ugandan male logistics courier in a dark blue vest and motorcycle protective gear with a warm focused expression, natural outdoor light in Kampala urban backdrop." src={`${assetBase}/images/9d28bdafcef011af.webp`} />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Ronald Okello</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold">SafeBoda #108 • TVS HLX UET 319K</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kalerwe Stage</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[14px]" />
                4.88
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">19 trips today</span>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/40 p-2.5 rounded-lg flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2 h-2 rounded-full bg-emerald-escrow flex-shrink-0"></span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold truncate">
                Idle at Nakasero Hub
              </span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex-shrink-0">
              Available Now
            </span>
</div>
<div className="mt-space-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="near_me" className="text-[16px] text-emerald-escrow" /> 0.4 km from showroom
            </span>
<button className="px-3 py-1 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-action-gradient-start font-label-sm text-label-sm font-bold transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
              Dispatch to Order
            </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of a young male delivery rider in Kampala wearing helmet and safety glasses, sitting on a red Bajaj Boxer motorbike, focused expression in soft tropical afternoon shade." src={`${assetBase}/images/49ed1ffbc616ce3d.webp`} />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Moses Ssempa</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold">SafeBoda #554 • Bajaj Boxer UER 761M</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakawa MUBS Stage</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[14px]" />
                4.95
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">24 trips today</span>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/40 p-2.5 rounded-lg flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<Icon name="arrow_forward" className="text-secondary text-[16px] animate-bounce" />
<span className="font-label-md text-label-md text-on-surface truncate">
                En Route to Store for Pickup
              </span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-bold flex-shrink-0">
              Pickup Ready
            </span>
</div>
<div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<Icon name="schedule" className="text-[16px]" /> Arriving in ~4 mins
            </span>
<button className="text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
              Order #SC-98236 <Icon name="arrow_outward" className="text-[14px]" />
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container/60 transition-all">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of an energetic East African courier driver wearing high-visibility gear holding motorbike keys, Kampala city street scene in the blurred background." src={`${assetBase}/images/110f7591d5e62d82.webp`} />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Patrick Kato</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold">SafeBoda #220 • TVS Neo UEN 902L</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kololo Stage</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[14px]" />
                4.81
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">16 trips today</span>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/40 p-2.5 rounded-lg flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-2 h-2 rounded-full bg-emerald-escrow flex-shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface-variant font-bold truncate">
                Idle • Standby at Kololo
              </span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex-shrink-0">
              Ready
            </span>
</div>
<div className="mt-space-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="pin_drop" className="text-[16px]" /> 1.2 km away
            </span>
<button className="px-3 py-1 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-action-gradient-start font-label-sm text-label-sm font-bold transition-colors" onClick={() => alertToast('Action triggered')}>
              Assign Next
            </button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="p-1.5 rounded-lg bg-primary-container/20 text-action-gradient-start">
<Icon name="notifications_active" className="text-[20px]" />
</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Pending Hub Orders</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">
            3 Need Rider
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Packed at Nakasero showroom and sealed with tamper-evident SwiftCart tape. Escrow locked.
        </p>

<div className="mt-2 p-space-md rounded-xl bg-surface-container-high shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-action-gradient-start font-bold">#SC-98239</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px]" /> UGX 165,000 Escrow
            </span>
</div>
<div className="flex items-start gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Matte black compact GaN multi-port fast wall charger with foldable pins in retail packaging, clean minimalist studio product photography." src={`${assetBase}/images/74f9aea1a3a22d71.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Anker Prime 67W GaN Charger</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="location_on" className="text-[15px] text-action-gradient-start" />
                Acacia Residences, Kololo (2.8 km)
              </span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Client: Sarah N. (07•• ••• 654)</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Boda: UGX 3,500</span>
</div>
<button className="mt-1 w-full py-2.5 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-md hover:brightness-110 active:scale-98 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="two_wheeler" className="text-[18px]" />
            Assign Courier Now
          </button>
</div>

<div className="p-space-sm rounded-lg bg-surface-container/60 flex items-center justify-between hover:bg-surface-container transition-all">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="package_2" className="text-on-surface-variant text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">#SC-98244 • Soundcore Q30</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Lugogo Bypass • UGX 340,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Wait: 6m</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container/60 flex items-center justify-between hover:bg-surface-container transition-all">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="package_2" className="text-on-surface-variant text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">#SC-98247 • Anker Soundcore 2</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Bukoto Market Rd • UGX 180,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Wait: 2m</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Kampala Courier Rules</span>
<div className="flex items-start gap-2.5">
<Icon name="verified_user" className="text-emerald-escrow text-[18px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>Escrow Auto-Settlement:</strong> Funds release instantly to your seller balance when customer enters rider's secret 4-digit blind handover PIN.
          </p>
</div>
<div className="flex items-start gap-2.5">
<Icon name="qr_code_scanner" className="text-action-gradient-start text-[18px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>Tamper Tape Rule:</strong> Do not release high-value electronics without matching QR tamper-sticker serial verification.
          </p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-surface-dark/80 backdrop-blur-sm z-50 transition-opacity duration-300 opacity-0 pointer-events-none" id="drawer-backdrop"></div>

<aside className="fixed right-0 top-0 h-full w-full max-w-xl bg-surface-container-high z-50 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out overflow-hidden" id="assign-rider-drawer">

<div className="p-space-lg bg-surface-container flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-xl bg-primary-container/20 text-action-gradient-start">
<Icon name="two_wheeler" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Assign Courier to Order</h2>
<span className="px-2 py-0.5 rounded bg-action-gradient-start/20 text-action-gradient-start font-code-display text-[14px] font-bold">#SC-98239</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Flagship Hub → Kololo Express Delivery</span>
</div>
</div>
<button className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="p-space-lg flex-1 overflow-y-auto flex flex-col gap-space-lg">

<div className="p-space-md rounded-xl bg-surface-container shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Target Order Summary</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" /> Payment in Escrow
          </span>
</div>
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container-low overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="High quality studio shot of Anker Prime 67W GaN wall charger showing matte black finish and triple charging ports on clean neutral background." src={`${assetBase}/images/9082cc2aab2076da.webp`} />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Anker Prime 67W GaN</span>
<span className="font-price-display text-price-display text-on-surface">UGX 165,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SKU: ANK-67W-GAN-BLK • Item Count: 1</span>
<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="pin_drop" className="text-[16px] text-action-gradient-start" />
                Acacia Residences, Kololo
              </span>
<span className="text-tertiary font-semibold">Est. Dist: 2.8 km</span>
<span className="text-on-surface font-bold">Fare: UGX 3,500</span>
</div>
</div>
</div>

<div className="mt-2 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="person" className="text-secondary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Sarah Nabukenya</span>
<span className="font-code-display text-[13px] text-on-surface-variant tracking-wider">07•• ••• 654 (Masked Relay Active)</span>
</div>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-secondary font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[14px]" />
            Proxy Call
          </button>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
            Recommended Available Couriers (Proximity Ranked)
          </span>
<span className="font-label-sm text-label-sm text-action-gradient-start font-semibold">Kampala Hub GPS Live</span>
</div>

<label className="relative p-space-md rounded-xl bg-surface-container cursor-pointer transition-all flex flex-col gap-space-xs ring-2 ring-action-gradient-start shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<input checked={true} className="accent-action-gradient-start w-4 h-4" name="selected_rider" type="radio" value="ronald" />
<div className="relative w-10 h-10 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up face of a confident Ugandan male courier in high visibility motorcycle gear, natural lighting, Kampala." src={`${assetBase}/images/11c54871053c8afd.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">1. Ronald Okello</span>
<span className="px-1.5 py-0.2 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Top Proximity</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">SafeBoda #108 • TVS HLX UET 319K</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[13px]" />
                4.88
              </div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold mt-0.5">0.4 km away</span>
</div>
</div>
<div className="ml-9 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-1">
<span className="text-emerald-escrow flex items-center gap-1 font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span> Idle at Nakasero Hub
            </span>
<span className="font-label-sm text-label-sm text-on-surface bg-surface-container-high px-2 py-0.5 rounded">Arrival ~2 mins</span>
</div>
</label>

<label className="relative p-space-md rounded-xl bg-surface-container hover:bg-surface-container-highest cursor-pointer transition-all flex flex-col gap-space-xs shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<input className="accent-action-gradient-start w-4 h-4" name="selected_rider" type="radio" value="patrick" />
<div className="relative w-10 h-10 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an experienced African male motorcycle courier in urban Kampala with street background." src={`${assetBase}/images/90579e4186ec9bfa.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">2. Patrick Kato</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">SafeBoda #220</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">TVS Neo UEN 902L • Kololo Stage</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="star" className="text-[13px]" />
                4.81
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">1.2 km away</span>
</div>
</div>
<div className="ml-9 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-1">
<span className="text-on-surface-variant">Standby at Kololo</span>
<span className="font-label-sm text-label-sm text-on-surface bg-surface-container-high px-2 py-0.5 rounded">Arrival ~6 mins</span>
</div>
</label>

<label className="relative p-space-md rounded-xl bg-surface-container hover:bg-surface-container-highest cursor-pointer transition-all flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<input className="accent-action-gradient-start w-4 h-4" name="selected_rider" type="radio" value="broadcast" />
<div className="w-10 h-10 rounded-xl bg-action-gradient-start/20 flex items-center justify-center text-action-gradient-start flex-shrink-0">
<Icon name="wifi_tethering" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">3. SafeBoda Metro Broadcast</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-pair nearest verified rider within 3 mins radius</span>
</div>
</div>
<Icon name="podcasts" className="text-action-gradient-start text-[20px]" />
</label>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3 shadow-inner">
<Icon name="security" className="text-action-gradient-start text-[22px] flex-shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Mandatory Handover Verification</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Rider will verify tamper seal tape at Nakasero showroom before receiving package and scanning QR barcode. Ensure blind OTP match prior to delivery sign-off.
          </p>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container shadow-2xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface">
<span className="text-on-surface-variant">Selected Courier:</span>
<span className="text-action-gradient-start font-bold">Ronald Okello (SafeBoda #108)</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<button className="h-[52px] rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Cancel
        </button>
<button className="h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-action-gradient-end/35 hover:brightness-110 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="check_circle" className="text-[20px]" />
          Confirm Rider
        </button>
</div>
</div>
</aside>
</div>
</main></div>
    </div>
  );
};

export default Screen;
