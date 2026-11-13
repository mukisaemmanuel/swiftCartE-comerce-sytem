// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/notifications_swiftcart_buyer_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]"><div className="h-20 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold hidden sm:inline">SwiftCart</span><div className="h-6 w-px bg-surface-variant hidden md:block"></div><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface-variant"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-bold truncate max-w-[110px]">Kampala Central</span></div></div></div><div className="flex-1 max-w-sm mx-space-sm"><div className="relative flex items-center w-full"><Icon name="search" className="absolute left-3 text-secondary text-[20px]" /><input className="w-full h-10 pl-10 pr-10 rounded-lg bg-surface-container-low text-on-surface placeholder:text-secondary font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search products, brands, essentials in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><Icon name="photo_camera" className="absolute right-3 text-secondary text-[20px] cursor-pointer hover:text-on-surface" /></div></div><div className="flex items-center gap-space-md shrink-0"><nav className="hidden sm:flex items-center gap-space-md" data-active-classes="text-primary font-bold"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a aria-current="page" className="transition-colors text-primary font-bold" data-path="notifications" href="#" onClick={() => alertToast('Action triggered')}>Updates</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Legal</a></nav><a className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center justify-center" data-path="notifications" href="#" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">3</span></a><div className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">2</span></div><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold">SN</div></div></div></div></header><main className="w-full pt-20 bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-margin md:px-gutter-desktop py-space-lg flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-xs">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">Notifications Center</span>
<span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase">3 unread alerts</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Real-time delivery coordination, MoMo protection escrow, and timely local deals across Kampala</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all flex items-center gap-space-xs" id="markAllReadBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[18px]" />
<span>Mark all as read</span>
</button>
<button className="px-space-md py-2 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low text-on-surface font-label-md text-label-md transition-all flex items-center gap-space-xs" id="togglePrefBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[18px] text-primary" />
<span>Notification Preferences</span>
</button>
</div>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none" id="filterPills">
<button className="filter-pill shrink-0 px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md transition-all" data-filter="all" onClick={() => alertToast('Action triggered')}>All (6)</button>
<button className="filter-pill shrink-0 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all" data-filter="delivery" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders &amp; Delivery (3)</button>
<button className="filter-pill shrink-0 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all" data-filter="payment" onClick={() => alertToast('Action triggered')}>Payment &amp; Escrow (2)</button>
<button className="filter-pill shrink-0 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all" data-filter="vouchers" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>Price Drops &amp; Vouchers (1)</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-7 flex flex-col gap-space-sm" id="notificationsList">
<div className="notification-card cursor-pointer group relative p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all duration-200" data-card-id="1" data-category="delivery">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0 mt-0.5">
<div className="w-11 h-11 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="two_wheeler" className="text-[24px]" />
</div>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wide">Live Dispatch</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Active Now</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">2 min ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1">Boda Rider Kizito Brian is 6 mins away with Order #SC-9488</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
<Icon name="navigation" className="text-[15px] text-primary" />
                Heading via Lugogo Bypass • Traffic clearance verified
              </p>
<div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="vpn_key" className="text-[18px] text-secondary" />
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Release PIN:</span>
<span className="font-headline-sm text-headline-sm text-primary tracking-wider font-extrabold select-all">842-190</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex items-center gap-1 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="location_searching" className="text-[16px]" />
<span>Live Boda Map</span>
</button>
</div>
</div>
</div>
</div>
<div className="notification-card cursor-pointer group relative p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200" data-card-id="2" data-category="payment">
<div className="flex items-start gap-space-md">
<div className="shrink-0 mt-0.5">
<div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
<Icon name="verified_user" className="text-[24px]" />
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm uppercase tracking-wide">Payment Protected</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="shield" className="text-[14px]" /> Safe Escrow
                  </span>
</div>
<span className="font-label-sm text-label-sm text-secondary">24 min ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1">UGX 248,500 held safely in SwiftCart Payment Protection</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Funds for <span className="font-semibold text-on-surface">SoundCore Space One</span> remain held in safe custody. Merchant will only receive payout after you unpack, inspect, and submit your 6-digit PIN.
              </p>
<div className="mt-space-sm flex items-center gap-space-md text-secondary">
<span className="font-label-sm text-label-sm flex items-center gap-1">
<Icon name="account_balance_wallet" className="text-[15px] text-tertiary" />
                  MTN MoMo Linked: 256772***910
                </span>
<span className="font-label-sm text-label-sm flex items-center gap-1">
<Icon name="lock_clock" className="text-[15px] text-secondary" />
                  Auto-release expires in 48h
                </span>
</div>
</div>
</div>
</div>
<div className="notification-card cursor-pointer group relative p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200" data-card-id="3" data-category="vouchers">
<div className="flex items-start gap-space-md">
<div className="shrink-0 mt-0.5">
<div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<Icon name="timer" className="text-[24px]" />
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-wide">Voucher Expiring Soon</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Today Only</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">1 hr ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1">UGX 20,000 Flash Discount with Voucher SWIFT20</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Applies on any order above UGX 100,000 across tech, groceries, and home appliances. Offer ceases precisely tonight at 11:59 PM EAT.
              </p>
<div className="mt-space-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm text-secondary">Code:</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold tracking-wider">SWIFT20</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-inverse-surface hover:bg-on-background text-inverse-on-surface font-label-md text-label-md transition-all flex items-center gap-1" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<span>Use Voucher</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>
<div className="notification-card cursor-pointer group relative p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200" data-card-id="4" data-category="delivery">
<div className="flex items-start gap-space-md">
<div className="shrink-0 mt-0.5">
<div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="task_alt" className="text-[24px]" />
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-wide">Order Delivered</span>
<span className="font-label-sm text-label-sm text-secondary">Yesterday</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1">Order #SC-9102 successfully received in Kololo</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Delivered by Rider Joseph Kato. Rate your interaction and item satisfaction with <span className="font-semibold text-on-surface">SoundCore Uganda Official</span> to bag 150 loyalty points.
              </p>
<div className="mt-space-sm flex items-center justify-between">
<div className="flex items-center gap-1 text-tertiary">
<Icon name="stars" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-semibold">+150 SwiftPoints</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="rate_review" className="text-[16px] text-primary" />
<span>Write Review</span>
</button>
</div>
</div>
</div>
</div>
<div className="notification-card cursor-pointer group relative p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200" data-card-id="5" data-category="vouchers">
<div className="flex items-start gap-space-md">
<div className="shrink-0 mt-0.5">
<div className="w-11 h-11 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="trending_down" className="text-[24px]" />
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-sm">
<span className="px-space-xs py-0.5 rounded bg-primary-container/15 text-primary-container font-label-sm text-label-sm uppercase tracking-wide">Price Drop Alert</span>
<span className="font-label-sm text-label-sm text-secondary">2 days ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold mt-1">Anker 65W GaN Charger dropped in your Wishlist!</h3>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-sm text-headline-sm text-primary font-extrabold">UGX 115,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 145,000</span>
<span className="ml-1 px-space-xs py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">Save UGX 30,000</span>
</div>
<div className="mt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Stock: Only 4 units remaining at Anker Flagship Uganda</span>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<span>View Product</span>
<Icon name="visibility" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-space-md sticky top-24">
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="quick_reference" className="text-primary text-[22px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Dispatch Tracking Preview</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold animate-pulse">LIVE TRACK</span>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
<div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte obsidian black on minimal white pedestal studio presentation" src={`${assetBase}/images/61d883dbe1f1cb74.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-secondary">Order #SC-9488 • 1 item</span>
<span className="font-label-md text-label-md text-primary font-extrabold mt-0.5">UGX 248,500</span>
</div>
</div>
<div className="flex flex-col gap-space-sm py-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Dispatch Waypoints</span>
<div className="flex items-start gap-space-sm relative">
<div className="flex flex-col items-center">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
<span className="w-0.5 h-7 bg-tertiary"></span>
</div>
<div className="flex flex-col -mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">Merchant Fulfilled &amp; Dispatched</span>
<span className="font-body-sm text-body-sm text-secondary">SoundCore Hub - Industrial Area, 14:10</span>
</div>
</div>
<div className="flex items-start gap-space-sm relative">
<div className="flex flex-col items-center">
<span className="w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-primary-container/20"></span>
<span className="w-0.5 h-7 bg-surface-container-high"></span>
</div>
<div className="flex flex-col -mt-0.5">
<span className="font-label-md text-label-md text-primary font-bold">Boda Courier En Route</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Lugogo Bypass Junction • ETA 6 mins</span>
</div>
</div>
<div className="flex items-start gap-space-sm relative">
<div className="flex flex-col items-center">
<span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
</div>
<div className="flex flex-col -mt-0.5">
<span className="font-label-md text-label-md text-secondary">Buyer Verification &amp; Handover</span>
<span className="font-body-sm text-body-sm text-secondary">Acacia Mall Office Hub, Level 2</span>
</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="sports_motorsports" className="text-[20px] text-on-surface" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Kizito Brian</span>
<span className="font-body-sm text-body-sm text-secondary">TVS Apache • UFA 618Z</span>
</div>
</div>
<a className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface text-label-md font-bold flex items-center gap-1 shadow-sm transition-all" href="tel:+256701441000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[16px]" />
<span>+256 701 441 ***</span>
</a>
</div>
<div className="mt-space-xs pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-1">
<Icon name="security" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Inspection Pin (DO NOT SHARE BEFORE TESTING):</span>
</div>
<span className="font-label-lg text-label-lg font-extrabold text-primary tracking-widest bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">842-190</span>
</div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="toggle_on" className="text-secondary text-[22px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Notification Preferences</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase">All Active</span>
</div>
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Push Notifications</span>
<span className="font-body-sm text-body-sm text-secondary">Immediate order status, live dispatch boda tracking, flash vouchers</span>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex items-center justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">SMS Alerts</span>
<span className="font-body-sm text-body-sm text-secondary">Essential 6-digit Delivery PINs and MoMo Escrow status updates</span>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex items-center justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">WhatsApp Concierge Updates</span>
<span className="font-body-sm text-body-sm text-secondary">Direct rider contact links, address confirmations, and receipts</span>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
<Icon name="verified" className="text-[24px] text-tertiary shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Protected by SwiftCart TrustShield</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Zero spam guarantee. Strictly operational logistics, rider coordination, escrow safety confirmations, and personalized price drop updates for Uganda customers.
            </span>
</div>
</div>
</div>
</div>
</div>

</div></main><footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.04)]"><div className="w-full max-w-5xl mx-auto px-gutter-desktop py-space-xl flex flex-col gap-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pb-space-lg"><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="verified_user" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Ugandan Customer Guarantee</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">100% genuine products verified through local verified merchants with swift 24hr Kampala delivery.</span></div></div><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="sync_alt" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Hassle-Free Returns</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">7-day doorstep return policy across Kampala Central, Entebbe, Wakiso, and Mukono metro.</span></div></div><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="headset_mic" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Help &amp; Support</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dedicated local customer helpline (toll-free) and 24/7 instant WhatsApp concierge.</span></div></div></div><div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-sm"><span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Payment Partners:</span><div className="flex items-center gap-space-xs"><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">MTN MoMo</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Airtel Money</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Visa</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Cash on Delivery</span></div></div><div className="flex items-center gap-space-md"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><span className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd.</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
