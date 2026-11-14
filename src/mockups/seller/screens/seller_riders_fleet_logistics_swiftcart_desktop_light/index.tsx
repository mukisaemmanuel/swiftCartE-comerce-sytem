// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_riders_fleet_logistics_swiftcart_desktop_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="p-space-xl space-y-space-xl max-w-[1600px] mx-auto w-full">

<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="space-y-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riders &amp; Dedicated Courier Fleet</h1>
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Kampala Metro
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<Icon name="cell_tower" className="text-[14px] text-tertiary" />
            SafeBoda API v2.4 Live
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time telemetry, stage assignments, and boda courier dispatch for Nakasero Flagship Hub.</p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="h-12 px-space-lg rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg flex items-center gap-space-xs transition-all shadow-[0_2px_8px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<Icon name="summarize" className="text-[18px] text-on-surface-variant" />
<span>Courier Performance Report</span>
</button>
<button className="h-12 px-space-lg rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-on-primary font-label-lg text-label-lg flex items-center gap-space-xs transition-all shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sms" className="text-[20px]" />
<span>+ Invite Courier via SMS Link</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Store Couriers</p>
<p className="font-headline-lg text-headline-lg text-on-surface mt-1">8</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<Icon name="badge" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>100% Vetted • Dedicated SoundCore roster</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">SafeBoda Direct</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">5 Active</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ 8 online</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-container">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Connected via SafeBoda Fleet API</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Avg Pickup Time</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">16 mins</span>
<span className="font-label-md text-label-md text-tertiary flex items-center font-bold">
<Icon name="arrow_downward" className="text-[14px]" /> 3m
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<Icon name="schedule" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="check" className="text-tertiary text-[14px]" />
<span>Kampala Central corridor standard</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Handover Rate</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">99.1%</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">Top Tier</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
<Icon name="verified_user" className="text-[22px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="qr_code_2" className="text-tertiary text-[14px]" />
<span>Blind QR verification code required</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<section className="lg:col-span-8 space-y-space-xl">

<div className="rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">

<div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Kampala Metro Stage Telemetry</h2>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  Live SafeBoda GPS
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Flagship Hub • Acacia Avenue • Kololo • Nakawa corridor</p>
</div>

<div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface shadow-[0_1px_2px_rgba(14,27,77,0.04)] transition-all" type="button" onClick={() => alertToast('Action triggered')}>All Stages (4)</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>Idle Only (2)</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>En Route (2)</button>
<button aria-label="Expand Telemetry Screen" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[18px]" />
</button>
</div>
</div>

<div className="relative w-full h-80 bg-surface-container-high overflow-hidden" data-location="Kampala, Uganda" style={{}}>
<div className="absolute inset-0 bg-cover bg-center" data-alt="Stylized top-down interactive transit map of Kampala Uganda showing Nakasero, Kololo, and Acacia Avenue with soft sunlight road overlays, orange waypoints, and clean GPS tracking pins" style={{"backgroundImage":"url('/images/6a8cdfe93cfdeb6b.webp')"}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
<div className="px-space-sm py-1 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-lg flex items-center gap-1">
<Icon name="store" className="text-primary text-[14px]" />
<span>Nakasero Hub (Origin)</span>
</div>
<div className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface-container-lowest shadow-md animate-pulse mt-0.5"></div>
</div>

<div className="absolute top-1/4 right-1/4 z-10 flex flex-col items-center">
<div className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-md flex items-center gap-1">
<Icon name="two_wheeler" className="text-primary text-[13px]" />
<span>Brian K. (#412) • En Route</span>
</div>
<div className="w-3.5 h-3.5 rounded-full bg-primary ring-2 ring-surface-container-lowest shadow"></div>
</div>

<div className="absolute bottom-1/3 left-1/3 z-10 flex flex-col items-center">
<div className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Ronald O. (#108) • 0.4 km</span>
</div>
<div className="w-3.5 h-3.5 rounded-full bg-tertiary ring-2 ring-surface-container-lowest shadow"></div>
</div>

<div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-1.5 rounded-xl shadow-md flex items-center gap-space-md text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="navigation" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md">Yusuf Lule Rd: Free Flow</span>
</div>
<span className="text-surface-container-highest">|</span>
<div className="flex items-center gap-1.5">
<Icon name="signal_cellular_alt" className="text-primary text-[16px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">4G Latency: 24ms</span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px- space-sm py-1 rounded-lg text-on-surface-variant font-label-sm text-label-sm">
              SafeBoda Telemetry Stream • 2s refresh
            </div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Active Courier Roster</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated riders connected to Nakasero geo-fence &amp; dispatch terminal</p>
</div>
<span className="font-label-md text-label-md text-primary font-bold">4 Riders in Vicinity</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of professional Ugandan motorcycle courier Brian Kizito smiling in branded orange helmet and high-visibility courier jacket in Kampala" src={`${assetBase}/images/1d5655cad080aeec.webp`} />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Brian Kizito</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.92</strong> • 28 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase">
                #412
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> Bajaj Boxer UEF 842X</span>
<span className="font-label-sm text-label-sm text-on-surface">Acacia / Nakasero Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-primary-container font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  Delivering Order #SC-98241
                </span>
<span className="text-on-surface-variant">Kololo Terrace (ETA 8m)</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">In Transit</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline" type="button" onClick={() => alertToast('Action triggered')}>
                Track GPS Live <Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Ugandan delivery rider Ronald Okello wearing orange logistics uniform and reflective vest in Kampala morning sun" src={`${assetBase}/images/288d5a9fb901ef02.webp`} />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Ronald Okello</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.88</strong> • 19 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #108
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> TVS HLX UET 319K</span>
<span className="font-label-sm text-label-sm text-on-surface">Kalerwe Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-tertiary font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  Idle at Nakasero Hub
                </span>
<span className="text-on-surface-variant font-label-sm">0.4 km from showroom</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Available Now</span>
<button className="h-9 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1 hover:opacity-90 transition-all shadow-[0_2px_8px_rgba(218,55,0,0.25)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="send" className="text-[16px]" />
<span>Dispatch to Order</span>
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of senior Kampala motorcycle dispatcher Moses Ssempa wearing clean protective riding gear with SafeBoda and SwiftCart emblems" src={`${assetBase}/images/7f9a00eb737fbb17.webp`} />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Moses Ssempa</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.95</strong> • 24 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #554
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> Bajaj Boxer UER 761M</span>
<span className="font-label-sm text-label-sm text-on-surface">Nakawa MUBS Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-secondary font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  En Route to Store for Pickup
                </span>
<span className="text-on-surface-variant">Arriving in ~4 mins</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">Pickup Ready</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
                Order #SC-98236 <Icon name="open_in_new" className="text-[16px]" />
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between space-y-space-md group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of energetic young Ugandan express boda rider Patrick Kato in modern protective urban riding apparel against blurred Kampala city skyline" src={`${assetBase}/images/79f310ede535b512.webp`} />
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg text-on-surface">Patrick Kato</h4>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="star" className="text-[#F59E0B] text-[15px]" />
<strong className="text-on-surface font-label-md">4.81</strong> • 16 trips today
                  </p>
</div>
</div>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold uppercase">
                #220
              </span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="two_wheeler" className="text-[15px]" /> TVS Neo UEN 902L</span>
<span className="font-label-sm text-label-sm text-on-surface">Kololo Stage</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-on-surface font-label-md flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                  Standby at Kololo
                </span>
<span className="text-on-surface-variant font-label-sm">1.2 km away</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">Idle</span>
<button className="h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span>Assign Next</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-4 space-y-space-xl">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pending Hub Orders</h3>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">3 Need Rider</span>
</div>
<Icon name="package_2" className="text-primary text-[20px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Packed at Nakasero showroom and sealed with tamper-evident SwiftCart tape. Escrow locked.
          </p>

<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm relative overflow-hidden shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed uppercase tracking-wider font-bold">
                Priority Dispatch
              </span>
<span className="font-currency-code text-currency-code text-primary">UGX 165,000 Escrow</span>
</div>
<div className="pt-1">
<div className="flex items-baseline justify-between">
<h4 className="font-label-lg text-label-lg text-on-surface">Order #SC-98239</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">2.8 km away</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium">Anker Prime 67W GaN Charger</p>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-1">
<Icon name="location_on" className="text-[14px]" />
<span>Acacia Residences, Apt 4B, Kololo</span>
</div>
</div>

<div className="flex items-center justify-between pt-1 border-t-0 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="phone_android" className="text-[14px] text-tertiary" /> Sarah N. (07•••••654)</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Boda: UGX 3,500</span>
</div>

<button className="w-full h-12 mt-space-xs rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-all shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-98" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="two_wheeler" className="text-[20px]" />
<span>Assign Courier Now</span>
</button>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all space-y-1 shadow-[0_1px_3px_rgba(14,27,77,0.03)]">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98244 • Soundcore Q30</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wait: 6m</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="near_me" className="text-[14px]" /> Lugogo Bypass</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">UGX 340,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all space-y-1 shadow-[0_1px_3px_rgba(14,27,77,0.03)]">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-98247 • Anker Soundcore 2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wait: 2m</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1"><Icon name="near_me" className="text-[14px]" /> Bukoto Market Rd</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">UGX 180,000</span>
</div>
</div>
<button className="w-full py-2 text-center text-primary font-label-md text-label-md hover:underline" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
            View All 14 Pending Store Orders →
          </button>
</div>

<div className="p-space-lg rounded-xl bg-surface-container space-y-space-sm relative overflow-hidden">
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg">
<Icon name="verified_user" className="text-tertiary text-[20px]" />
<span>Kampala Courier Rules</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<strong>Escrow Auto-Settlement:</strong> Funds release instantly to your seller balance when customer enters rider's secret 4-digit blind handover PIN.
          </p>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center gap-space-sm">
<Icon name="qr_code_scanner" className="text-primary text-[20px]" />
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Tamper Tape Rule</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Do not release high-value electronics without matching QR tamper-sticker serial verification.</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
