// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_notifications_center_swiftcart_desktop/code.html
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
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest/40 backdrop-blur-sm"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/3f10b645d293fcfe.webp`} /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">SwiftCart</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Uganda Merchant</span></div></div><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm">UGX B2B</span></div><nav className="px-space-md py-space-md flex flex-col gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-label-md"><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Daily Operations</span><a aria-current="page" className="flex items-center justify-between px-space-md py-2.5 rounded-lg transition-colors bg-primary-container text-on-primary-container font-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="space_dashboard" className="text-[20px]" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="products-and-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-and-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">6 Active</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Post-Purchase</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="assignment_return" className="text-[20px]" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-2 py-0.5 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm">1 Case</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Business &amp; Finance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics-and-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="query_stats" className="text-[20px]" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="campaign" className="text-[20px]" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Settings &amp; Governance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="store-profile-and-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="verified" className="text-[20px]" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="check_circle" className="text-[16px] text-tertiary" /></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-body-md text-body-md">Settings</span></div></a></div></nav></div><div className="p-space-md"><div className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-xs shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><span className="font-label-md text-label-md text-emerald-escrow">Swift Escrow Protected</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Settlements secured under Bank of Uganda National Payments Systems sandbox.</p></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="relative w-96 flex items-center"><Icon name="search" className="absolute left-3 text-outline text-[20px]" /><input className="w-full h-10 pl-10 pr-12 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search orders, SKU, phone numbers..." type="text" /><span className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm">⌘K</span></div><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-mtn-yellow animate-pulse"></span><span className="w-2 h-2 rounded-full bg-airtel-red animate-pulse"></span></div><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Toggle theme" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Notifications" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Store General Manager (KR)</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-lowest/60 backdrop-blur-md px-margin-desktop py-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Notifications &amp; Communications</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-label-md">Notification Center</span>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-space-sm py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>Push Relay Live • EAT Timezone UTC+3</span>
</div>
</div>
<div className="flex items-center justify-between flex-wrap gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-11 h-11 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
<Icon name="notifications_active" className="text-[24px]" />
</div>
<div className="flex flex-col">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Merchant Notification &amp; Activity Center</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time ledger events, SafeBoda dispatch telemetry, disputes, and compliance notices</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" id="markAllReadBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[18px]" />
<span>Mark All as Read</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="tune" className="text-[18px]" />
<span>Notification Preferences</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="filter_list" className="text-[18px]" />
<span>Filter by Category</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs no-scrollbar">
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md whitespace-nowrap shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<span>All Notifications</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary-container/20 font-label-sm text-label-sm">38</span>
</button>
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="local_shipping" className="text-[16px] text-primary" />
<span>Orders &amp; Dispatch</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container font-label-sm text-label-sm">16</span>
</button>
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<Icon name="account_balance_wallet" className="text-[16px] text-emerald-escrow" />
<span>Escrow &amp; Payouts</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container font-label-sm text-label-sm">8</span>
</button>
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<Icon name="assignment_return" className="text-[16px] text-danger-penalty" />
<span>Returns &amp; Disputes</span>
<span className="px-1.5 py-0.2 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm">4 Urgent</span>
</button>
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="verified_user" className="text-[16px] text-secondary" />
<span>Security &amp; KYC</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container font-label-sm text-label-sm">6</span>
</button>
<button className="flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="cell_tower" className="text-[16px] text-tertiary" />
<span>Platform Updates</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container font-label-sm text-label-sm">4</span>
</button>
</div>
</div>

<div className="px-margin-desktop py-space-lg grid grid-cols-12 gap-space-lg">

<div className="col-span-12 xl:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col gap-space-xs shadow-sm">
<div className="relative w-full flex items-center">
<Icon name="search" className="absolute left-3 text-outline text-[18px]" />
<input className="w-full h-10 pl-9 pr-9 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search notifications, order #, or keywords..." type="text" />
<Icon name="tune" className="absolute right-3 text-outline text-[16px]" />
</div>
<div className="flex items-center justify-between px-space-xs pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Prioritized Inbox</span>
<div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm">
<span>Sort:</span>
<button className="text-primary flex items-center font-label-sm text-label-sm" type="button" onClick={() => alertToast('Action triggered')}>Recent First <Icon name="expand_more" className="text-[14px]" /></button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="cursor-pointer group relative rounded-xl p-space-md bg-surface-container-high transition-all shadow-md">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r"></div>
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                URGENT ESCROW HOLD
              </span>
<span className="px-1.5 py-0.2 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">Unread</span>
</div>
<span className="font-body-sm text-body-sm text-outline">12 mins ago</span>
</div>
<div className="mt-space-xs pl-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug group-hover:text-primary transition-colors">Dispute #DSP-88219 filed for Order #SC-97810</h2>
<p className="mt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">UGX 342,000 temporarily held in Bank of Uganda sandbox. Merchant response window ends in 14 hours.</p>
</div>
<div className="mt-space-sm pl-2 flex items-center justify-between text-outline">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-sm text-label-sm font-mono">BOU-ESCR-7489</span>
<span className="text-outline font-body-sm text-body-sm">•</span>
<span className="font-label-sm text-label-sm text-danger-penalty flex items-center gap-1">
<Icon name="timer" className="text-[14px]" /> 13h 48m left
              </span>
</div>
<Icon name="arrow_forward" className="text-[18px] text-primary" />
</div>
</div>

<div className="cursor-pointer group rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check_circle" className="text-[13px]" />
                AUTOMATED PAYOUT CLEARED
              </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Unread</span>
</div>
<span className="font-body-sm text-body-sm text-outline">1 hour ago</span>
</div>
<div className="mt-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface leading-snug group-hover:text-primary transition-colors">UGX 8,600,000 processed to MTN Mobile Money</h2>
<p className="mt-1 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Daily automated payout successfully dispatched to registered SIM (+256 772 ••• 419). Ref: #PAY-99214 via MTN MoMo Gateway API.</p>
</div>
<div className="mt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface font-mono">MTN MoMo Rails</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Fee: UGX 0</span>
</div>
<span className="font-label-md text-label-md text-emerald-escrow">+UGX 8.6M</span>
</div>
</div>

<div className="cursor-pointer group rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<span className="px-2 py-0.5 rounded bg-secondary-container/50 text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="two_wheeler" className="text-[13px]" />
              DISPATCH STAGE ALERT
            </span>
<span className="font-body-sm text-body-sm text-outline">2 hours ago</span>
</div>
<div className="mt-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface leading-snug group-hover:text-primary transition-colors">SafeBoda Courier Assigned: Order #SC-98241</h2>
<p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">SafeBoda courier Brian Kizito picked up Order #SC-98241 at Nakasero Hub. Live GPS tracking active toward Bugolobi.</p>
</div>
<div className="mt-space-sm flex items-center justify-between text-outline">
<div className="flex items-center gap-space-xs">
<Icon name="near_me" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface">ETA: 24 mins (Rider en route)</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-sm text-label-sm font-mono">OTP: ****</span>
</div>
</div>

<div className="cursor-pointer group rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<Icon name="warning" className="text-[13px]" />
              INVENTORY DEPLETION WARNING
            </span>
<span className="font-body-sm text-body-sm text-outline">4 hours ago</span>
</div>
<div className="mt-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Low Stock Alert: SoundCore Space One (Cream White)</h2>
<p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Inventory threshold breached (2 units remaining at Kampala Central Warehouse). Restock recommended to maintain Prime dispatch SLA.</p>
</div>
<div className="mt-space-sm flex items-center justify-between">
<div className="w-32 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-warning h-full w-[14%]"></div>
</div>
<span className="font-label-sm text-label-sm text-amber-warning font-mono">2 / 30 In Stock</span>
</div>
</div>

<div className="cursor-pointer group rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="trending_up" className="text-[13px]" />
              FLASH SALE MILESTONE
            </span>
<span className="font-body-sm text-body-sm text-outline">Yesterday</span>
</div>
<div className="mt-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Kampala Tech Week Flash Deal Crossed UGX 9M</h2>
<p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Attributed GMV reached UGX 9,140,000 with 7.8x ROAS. Conversion rate up 3.4% across Kololo, Ntinda, and Makerere hubs.</p>
</div>
</div>

<div className="cursor-pointer group rounded-xl p-space-md bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
              KYC &amp; REGULATORY ATTESTATION
            </span>
<span className="font-body-sm text-body-sm text-outline">Oct 22</span>
</div>
<div className="mt-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Annual URSB Business Certificate Verified</h2>
<p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Uganda Registration Services Bureau attestation logged. Tier 3 daily payout limit maintained at UGX 20,000,000.</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-7 flex flex-col gap-space-md">

<div className="rounded-xl bg-surface-container-low p-space-xl flex flex-col gap-space-lg shadow-md relative overflow-hidden">

<div className="rounded-xl bg-error-container/20 p-space-md flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-error-container/50 flex items-center justify-center text-error">
<Icon name="gavel" className="text-[22px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-error uppercase tracking-wider">Priority Escrow Block</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm text-on-surface">Urgent Action Required</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SLA Expiration: Oct 25, 03:00 EAT (13h 48m left)</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-code-display text-code-display tracking-widest text-[14px]">DSP-88219</span>
</div>
</div>

<div className="flex items-start justify-between flex-wrap gap-space-md pb-space-xs">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Dispute &amp; Hold Claim</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-0.5 tracking-tight">Open Seam on High-Value Delivery</h2>
<div className="flex items-center gap-space-sm mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">SafeBoda Express Dispatch</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
                Bank of Uganda Escrow Custody
              </span>
</div>
</div>
<div className="bg-surface-container p-space-md rounded-xl flex flex-col items-end">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Temporarily Held Amount</span>
<span className="font-price-display text-price-display text-primary mt-0.5">UGX 342,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow mt-0.5">Protected on settlement rail</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between gap-space-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Customer Claim</span>
<span className="font-label-sm text-label-sm text-error">Tampered Packaging</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-1 leading-snug">
                Buyer <span className="font-label-md text-label-md text-on-surface">Nantongo Grace</span> reported torn tamper seal tape at handover. SafeBoda rider paused handover OTP exchange.
              </p>
</div>
<div className="flex items-center justify-between pt-space-xs text-outline font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<Icon name="photo_camera" className="text-[16px] text-tertiary" />
<span>2 Buyer Photos attached</span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm" type="button" onClick={() => alertToast('Action triggered')}>View Evidence</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between gap-space-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Linked Order &amp; Route</span>
<span className="font-label-sm text-label-sm text-primary font-mono">#SC-97810</span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<img className="w-10 h-10 rounded-lg object-cover bg-surface-container-high" data-alt="Close up studio photography of matte black SoundCore Space One active noise cancelling wireless headphones resting on dark obsidian slate surface with subtle warm rim lighting." src={`${assetBase}/images/1a635330d6af3b63.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Matte Black • SKU: SC-SP1-BLK</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs font-body-sm text-body-sm">
<div className="flex items-center gap-1 text-on-surface-variant truncate">
<Icon name="location_on" className="text-[16px] text-outline" />
<span className="truncate">Kololo Terrace #4, Kampala</span>
</div>
<span className="font-label-sm text-label-sm text-outline font-mono">07•• ••• 419</span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between flex-wrap gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary relative">
<Icon name="videocam" className="text-[24px]" />
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Nakasero Hub CCTV Outbound Sealing Tape Log</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Barcode SC-97810 scanned at 14:02:18 EAT • Station 03 (Tamper seal intact)</span>
</div>
</div>
<button className="h-9 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="play_circle" className="text-[16px]" />
<span>Inspect Outbound Video</span>
</button>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Escrow &amp; Custody Telematics Audit Trail</span>
<span className="font-label-sm text-label-sm text-outline">Bank of Uganda Sandbox ID: #BOU-98214-UG</span>
</div>
<div className="relative pl-6 flex flex-col gap-space-md before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
<div className="relative flex items-start justify-between gap-space-sm">
<div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-escrow ring-4 ring-surface-container-low"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">11:21 EAT • Order Placed &amp; Escrow Committed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Buyer payment of UGX 342,000 received via Airtel Money Uganda and securely locked.</span>
</div>
<span className="font-label-sm text-label-sm text-outline font-mono">BOU_LOCKED</span>
</div>
<div className="relative flex items-start justify-between gap-space-sm">
<div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-low"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">14:02 EAT • Outbound Packaging Sealed at Nakasero Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Packaged with SwiftCart orange hologram security seal #UG-9021. Custody transferred to SafeBoda.</span>
</div>
<span className="font-label-sm text-label-sm text-outline font-mono">DISPATCH_HUB</span>
</div>
<div className="relative flex items-start justify-between gap-space-sm">
<div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-amber-warning ring-4 ring-surface-container-low"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">14:35 EAT • Delivery Check Requested by Buyer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda rider Brian Kizito logged customer requested visual verification due to packaging creasing.</span>
</div>
<span className="font-label-sm text-label-sm text-outline font-mono">INSPECTION</span>
</div>
<div className="relative flex items-start justify-between gap-space-sm">
<div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-danger-penalty ring-4 ring-surface-container-low"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">14:48 EAT • Dispute Logged &amp; Escrow Frozen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">System frozen to safeguard both parties pending merchant evidence submission or replacement authorization.</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty font-mono">DSP_HELD</span>
</div>
</div>
</div>

<div className="pt-space-md flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs">
<button className="h-12 px-space-lg rounded-xl bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Contact Buyer (Masked Relay)</span>
</button>
<button className="h-12 px-space-md rounded-xl bg-surface-container hover:bg-surface-variant text-outline font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>Export Dossier</span>
</button>
</div>
<a className="h-12 px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:opacity-95 transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Open Dispute Resolution Console</span>
<Icon name="arrow_forward" className="text-[18px]" />
</a>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="hub" className="text-primary text-[20px]" />
<h3 className="font-label-lg text-label-lg text-on-surface">Escalation &amp; Dispatch Alert Routing</h3>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded">All Relays Healthy</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-sm">

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="sms" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md">SMS Alerts</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow">Enabled</span>
<span className="font-body-sm text-body-sm text-outline">+256 772 ••• 419</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="mail" className="text-[18px] text-secondary" />
<span className="font-label-md text-label-md">Email Ledger</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Daily 18:00 EAT</span>
<span className="font-body-sm text-body-sm text-outline">operations@swiftcart.ug</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="chat" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md">WhatsApp</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow">Instant Ping</span>
<span className="font-body-sm text-body-sm text-outline">High-Value Escrow Holds</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="send_to_mobile" className="text-[18px] text-amber-warning" />
<span className="font-label-md text-label-md">Web Push</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Active Device</span>
<span className="font-body-sm text-body-sm text-outline">Chrome OS • Kampala</span>
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
