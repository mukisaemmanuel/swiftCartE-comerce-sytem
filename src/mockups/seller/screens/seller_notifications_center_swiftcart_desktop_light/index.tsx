// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_notifications_center_swiftcart_desktop_light/code.html
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
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart Merchant Logo" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a aria-current="page" className="flex items-center justify-between px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span>Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span>Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span>Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span>Returns &amp; Disputes</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">1 Case</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet &amp; Payouts</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics &amp; Heatmaps</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile &amp; KYC</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Settings</a></nav><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><div className="relative w-full flex items-center"><Icon name="search" className="absolute left-3 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-12 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /><kbd className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/30">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Theme Toggle (Light Active)" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-primary hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications (3 unread)" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px] leading-[18px] text-center font-bold ring-2 ring-surface-container-lowest shadow-sm">3</span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md">KR</div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-high px-space-xl py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">MTN &amp; Airtel Rails Active</span>
</div>
<span className="text-outline-variant font-body-sm">•</span>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="cell_tower" className="text-[15px] text-tertiary-container" />
<span className="font-label-sm text-label-sm">Push Relay Live</span>
</div>
<span className="text-outline-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">EAT Timezone UTC+3</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="security" className="text-[14px] text-primary" />
        BoU Regulated Escrow Hub #UG-4412
      </span>
<span className="text-outline-variant font-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live Ping: 28ms</span>
</div>
</div>

<div className="p-space-xl space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Operations</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>Notifications &amp; Communications</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface">Notification Center</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[16px] text-primary" />
          Mark All as Read
        </button>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="tune" className="text-[16px] text-secondary" />
          Notification Preferences
        </button>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="filter_list" className="text-[16px]" />
          Filter by Category
        </button>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm shrink-0">
<Icon name="notifications_active" className="text-[26px]" />
</div>
<div>
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Merchant Notification &amp; Activity Center</h1>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">Live Telemetry</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Real-time ledger events, SafeBoda dispatch telemetry, disputes, and compliance notices across Ugandan commercial nodes.</p>
</div>
</div>
<div className="flex items-center gap-space-lg shrink-0">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sync State</span>
<span className="font-label-md text-label-md text-tertiary flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Polling via SSE (Active)
          </span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant">
<Icon name="settings_input_antenna" className="text-[20px]" />
</div>
</div>
</div>

<div className="flex items-center justify-between gap-space-sm overflow-x-auto pb-1">
<div className="flex items-center gap-space-xs shrink-0">

<button className="px-space-lg py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_2px_8px_rgba(218,55,0,0.20)] flex items-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<span>All Notifications</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm">38</span>
</button>

<button className="px-space-lg py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<span>Orders &amp; Dispatch</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">16</span>
</button>

<button className="px-space-lg py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<span>Escrow &amp; Payouts</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">8</span>
</button>

<button className="px-space-lg py-2 rounded-xl bg-surface-container-lowest text-error hover:bg-error-container/20 font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Returns &amp; Disputes</span>
<span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm animate-pulse">4 Urgent</span>
</button>

<button className="px-space-lg py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<span>Security &amp; KYC</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">6</span>
</button>
</div>
<div className="hidden xl:flex items-center gap-space-sm pl-space-md shrink-0">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="cell_tower" className="text-[16px] text-tertiary" />
          Direct Dispatch Webhook: <span className="font-label-sm text-label-sm text-on-surface">CONNECTED</span>
</span>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<section className="xl:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center gap-space-sm">
<div className="relative flex-1 flex items-center">
<Icon name="search" className="absolute left-3 text-on-surface-variant text-[18px]" />
<input className="w-full h-10 pl-10 pr-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container transition-all" placeholder="Search notifications, order #, or keywords..." type="text" />
</div>
<button className="h-10 px-space-md rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 shrink-0 hover:bg-surface-container-high transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span>Sort: Recent First</span>
<Icon name="expand_more" className="text-[16px]" />
</button>
</div>

<div className="flex flex-col gap-space-sm" role="list">

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(218,55,0,0.12)] cursor-pointer relative overflow-hidden transition-all transform hover:-translate-y-0.5">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-sm mb-space-xs pl-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                  URGENT ESCROW HOLD
                </span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px]">Unread</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">12 mins ago</span>
</div>
<div className="pl-1">
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold tracking-tight">Dispute #DSP-88219 filed for Order #SC-97810</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                UGX 342,000 temporarily held in Bank of Uganda sandbox. Merchant response window ends in 14 hours.
              </p>
<div className="mt-space-md pt-space-xs flex items-center justify-between flex-wrap gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Docket:</span>
<span className="font-label-sm text-label-sm text-primary font-mono font-bold">BOU-ESCR-7489</span>
</div>
<div className="flex items-center gap-1 text-primary-container font-label-sm text-label-sm font-bold">
<Icon name="timer" className="text-[15px]" />
<span>13h 48m left</span>
<Icon name="arrow_forward" className="text-[16px]" />
</div>
</div>
</div>
</article>

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="payments" className="text-[13px]" />
                  AUTOMATED PAYOUT CLEARED
                </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">Unread</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">1 hour ago</span>
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">UGX 8,600,000 processed to MTN Mobile Money</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                Daily automated payout successfully dispatched to registered SIM (+256 772 ••• 419). Ref: #PAY-99214 via MTN FinTech gateway.
              </p>
<div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span className="text-tertiary font-label-sm text-label-sm font-bold">MTN MoMo Rails • Fee: UGX 0</span>
<span className="font-price-display text-[15px] text-tertiary font-bold">+UGX 8,600,000</span>
</div>
</div>
</article>

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="two_wheeler" className="text-[13px]" />
                DISPATCH STAGE ALERT
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">2 hours ago</span>
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">SafeBoda Courier Assigned: Order #SC-98241</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                SafeBoda courier Brian Kizito picked up Order #SC-98241 at Nakasero Hub. Live GPS tracking active toward Bugolobi.
              </p>
<div className="mt-space-sm flex items-center justify-between text-on-surface-variant bg-surface-container-low px-space-sm py-1.5 rounded-xl font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  ETA: 24 mins (Rider en route)
                </span>
<span className="font-mono text-on-surface-variant">OTP: ••••</span>
</div>
</div>
</article>

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="warning" className="text-[14px]" />
                INVENTORY DEPLETION WARNING
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">4 hours ago</span>
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Low Stock Alert: SoundCore Space One (Cream White)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                Inventory threshold breached (2 units remaining at Kampala Central Warehouse). Restock recommended to maintain Prime dispatch SLA.
              </p>
<div className="mt-space-sm flex items-center gap-space-md">
<div className="flex-1 bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-error h-full w-[12%] rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-error font-bold shrink-0">2 / 30 In Stock</span>
</div>
</div>
</article>

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="bolt" className="text-[13px]" />
                FLASH SALE MILESTONE
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">Yesterday</span>
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Kampala Tech Week Flash Deal Crossed UGX 9M</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                Attributed GMV reached UGX 9,140,000 with 7.8x ROAS. Conversion rate up 3.4% across Kololo, Ntinda, and Makerere hubs.
              </p>
</div>
</article>

<article className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="verified_user" className="text-[13px]" />
                KYC &amp; REGULATORY ATTESTATION
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">Oct 22</span>
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Annual URSB Business Certificate Verified</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                Uganda Registration Services Bureau attestation logged. Tier 3 daily payout limit maintained at UGX 20,000,000.
              </p>
</div>
</article>
</div>
</section>

<section className="xl:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden relative">

<div className="h-1.5 w-full bg-gradient-to-r from-primary-container via-error to-primary"></div>
<div className="p-space-xl space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-error-container/20 p-space-md rounded-xl">
<div className="flex items-center gap-space-xs">
<Icon name="report_problem" className="text-error text-[20px]" />
<span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-wider">
                  PRIORITY ESCROW BLOCK • Urgent Action Required
                </span>
</div>
<div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
<Icon name="schedule" className="text-[16px] text-primary" />
<span>SLA Expiration: Oct 25, 03:00 EAT (13h 48m left)</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Docket ID</span>
<span className="font-headline-sm text-headline-sm text-primary font-mono">DSP-88219</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mt-1">Open Seam on High-Value Delivery</h2>
<div className="flex items-center gap-space-xs mt-space-xs flex-wrap">
<span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="two_wheeler" className="text-[13px]" />
                    SafeBoda Express Dispatch
                  </span>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="account_balance" className="text-[13px]" />
                    Bank of Uganda Escrow Custody
                  </span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-2xl flex flex-col items-end shrink-0 shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Temporarily Held Amount</span>
<span className="font-price-display text-price-display text-primary">UGX 342,000</span>
<span className="font-body-sm text-[11px] text-tertiary flex items-center gap-1 mt-0.5">
<Icon name="lock" className="text-[13px]" />
                  Protected on settlement rail
                </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="flag" className="text-[17px] text-error" />
                    Customer Claim
                  </span>
<span className="font-label-sm text-label-sm text-error bg-error-container px-1.5 py-0.2 rounded font-bold">Tampered Packaging</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Buyer <span className="font-label-md text-label-md text-on-surface">Nantongo Grace</span> reported torn tamper seal tape at handover. SafeBoda rider paused handover OTP exchange.
                </p>

<div className="pt-space-xs flex items-center gap-space-sm">
<div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-sm group">
<img className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="Close up photograph showing a retail electronics cardboard parcel with orange branded SwiftCart tamper evident tape cleanly slit open on the side seam, daylight macro view" src={`${assetBase}/images/ebf50b2fd7211629.webp`} />
<div className="absolute inset-0 bg-inverse-surface/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<Icon name="zoom_in" className="text-surface text-[16px]" />
</div>
</div>
<div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-sm group">
<img className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="Digital smartphone photo showing a SafeBoda motorcycle courier holding a partially unsealed black electronics box on an urban street in Kampala Uganda" src={`${assetBase}/images/fdc772be62275b4e.webp`} />
<div className="absolute inset-0 bg-inverse-surface/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<Icon name="zoom_in" className="text-surface text-[16px]" />
</div>
</div>
<a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-0.5 ml-1" href="#" onClick={() => alertToast('Action triggered')}>
                    View Evidence (2)
                    <Icon name="open_in_new" className="text-[14px]" />
</a>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="inventory_2" className="text-[17px] text-secondary" />
                    Linked Order &amp; Route
                  </span>
<span className="font-mono font-label-sm text-label-sm text-primary font-bold">#SC-97810</span>
</div>
<div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<p className="font-label-md text-label-md text-on-surface">SoundCore Space One ANC (Matte Black)</p>
<p className="text-[11px] text-on-surface-variant font-mono">SKU: SC-SP1-BLK • Qty: 1</p>
<div className="pt-1 flex items-center gap-1 text-[12px] text-on-surface-variant">
<Icon name="location_on" className="text-[14px] text-primary" />
                    Route: <span className="font-label-sm text-label-sm text-on-surface">Kololo Terrace #4, Kampala</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<Icon name="videocam" className="text-[20px]" />
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface font-bold">Nakasero Hub CCTV Outbound Sealing Tape Log</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Barcode SC-97810 scanned at 14:02:18 EAT • Station 03 (Tamper seal intact)
                  </p>
</div>
</div>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shrink-0 flex items-center gap-1 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="play_circle" className="text-[16px] text-primary" />
                Inspect Outbound Video
              </button>
</div>

<div className="space-y-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Escrow &amp; Custody Telematics Audit Trail</h4>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-bold">
<Icon name="verified" className="text-[14px]" />
                  Ledger Immutable
                </span>
</div>

<div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">

<div className="relative">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-tertiary flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
</div>
<div className="flex items-baseline justify-between gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">Order Placed &amp; Escrow Committed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">11:21 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Buyer payment of UGX 342,000 received via Airtel Money UG (+256 701 ••• 882) into Swift Escrow ledger.</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-secondary flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
</div>
<div className="flex items-baseline justify-between gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">Outbound Packaging Sealed at Nakasero Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">14:02 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Packaged with SwiftCart orange hologram seal #UG-9021. Weight recorded: 420g.</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary-container flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
</div>
<div className="flex items-baseline justify-between gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">Delivery Check Requested by Buyer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">14:35 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda rider Brian Kizito logged customer requested visual verification before releasing OTP.</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-error flex items-center justify-center shadow-sm">
<Icon name="gavel" className="text-surface text-[12px]" />
</div>
<div className="flex items-baseline justify-between gap-space-sm">
<span className="font-label-md text-label-md text-error font-bold">Dispute Logged &amp; Escrow Frozen</span>
<span className="font-body-sm text-body-sm text-error font-mono font-bold">14:48 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customer uploaded photos citing torn seal tape. Merchant SLA clock started automatically.</p>
</div>
</div>
</div>

<div className="pt-space-md border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="w-full sm:w-auto px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="phone_in_talk" className="text-[17px] text-secondary" />
                  Contact Buyer (Masked Relay)
                </button>
<button className="w-full sm:w-auto px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[17px]" />
                  Export Dossier
                </button>
</div>
<button className="w-full sm:w-auto px-space-xl py-3 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Open Dispute Resolution Console</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="hub" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Escrow &amp; Dispatch Alert Routing</h3>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              All Relays Healthy
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Define multi-channel fallback relays for urgent payout holds, rider telematics delays, and Bank of Uganda compliance pings.
          </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-xs">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<Icon name="sms" className="text-[20px] text-primary" />
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-container after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">SMS Alerts</span>
<span className="font-body-sm text-[11px] text-tertiary font-bold block">Enabled (+256 772 ••• 419)</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 block">MTN Direct Route</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<Icon name="mail" className="text-[20px] text-secondary" />
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-container after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Email Ledger</span>
<span className="font-body-sm text-[11px] text-on-surface font-medium block truncate">Daily 18:00 EAT</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 block truncate">operations@swiftcart.ug</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<Icon name="chat" className="text-[20px] text-tertiary" />
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-container after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">WhatsApp</span>
<span className="font-body-sm text-[11px] text-primary font-bold block">Instant Ping</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 block">High-Value Escrow Holds</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<Icon name="devices" className="text-[20px] text-on-surface" />
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-container after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Web Push</span>
<span className="font-body-sm text-[11px] text-tertiary font-bold block">Active Device</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 block">Chrome OS • Kampala</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
