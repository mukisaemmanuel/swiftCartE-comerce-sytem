// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/notifications_swiftcart_desktop/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm"><div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-8"> <div className="flex items-center gap-space-lg"><span className="flex items-center gap-space-xs"><Icon name="call" className="text-[15px] text-tertiary" />Toll-Free Helpline: <strong className="text-on-surface font-label-md text-label-md">0800 220 800</strong></span><span className="hidden md:inline text-outline-variant">|</span><span className="hidden md:flex items-center gap-space-xs"><Icon name="verified_user" className="text-[15px] text-primary" />Swift Escrow Protected Trade</span></div><div className="flex items-center gap-space-lg"><span className="flex items-center gap-space-xs cursor-pointer hover:text-on-surface"><Icon name="payments" className="text-[15px] text-secondary" />UGX (Uganda Shilling)</span><a className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-space-xs font-bold" data-path="vendor-portal" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span>Sell on SwiftCart</span><Icon name="north_east" className="text-[13px]" /></a></div></div></div><div className="max-w-7xl mx-auto px-margin h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-lg flex-shrink-0"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">SwiftCart</span></div><div className="hidden xl:flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors"><Icon name="location_on" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Deliver to</span><span className="font-label-md text-label-md text-on-surface leading-tight font-bold">Kampala, Nakawa</span></div><Icon name="expand_more" className="text-on-surface-variant text-[16px]" /></div></div><div className="flex-1 max-w-2xl mx-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-xs"><button className="flex items-center gap-space-xs px-space-md py-space-xs text-on-surface-variant font-label-md text-label-md bg-surface-container-low rounded-lg hover:text-on-surface flex-shrink-0" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><div className="h-5 w-[1px] bg-surface-container-high mx-space-xs"></div><input className="w-full px-space-md py-space-xs bg-transparent text-on-surface placeholder:text-on-surface-variant font-body-md text-body-md outline-none" placeholder="Search electronics, local foods, phones, fashion..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-xs rounded-lg flex items-center gap-space-xs hover:bg-primary-container transition-colors shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex-shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /><span>Search</span></button></div></div><div className="flex items-center gap-space-md flex-shrink-0"><nav className="flex items-center gap-space-sm" data-active-classes="bg-surface-container-high text-on-surface font-bold rounded-lg"><a className="text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-lg transition-colors flex items-center gap-space-xs font-label-md text-label-md" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><span>Wishlist</span><span className="bg-primary text-on-primary font-label-sm text-label-sm rounded-full px-1.5 py-0.5 leading-none">4</span></a><a aria-current="page" className="px-space-md py-space-xs transition-colors bg-surface-container-high text-on-surface font-bold rounded-lg" data-path="order-history" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a className="text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-lg transition-colors flex items-center gap-space-xs font-label-md text-label-md" data-path="cart-checkout" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span>Cart</span><span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm rounded-full px-1.5 py-0.5 leading-none">2</span></a></nav><div className="h-6 w-[1px] bg-surface-container-high hidden sm:block"></div><div className="flex items-center gap-space-xs cursor-pointer"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><Icon name="expand_more" className="text-on-surface-variant text-[18px]" /></div></div></div><div className="bg-surface-container-low"><div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-10"><nav className="flex items-center gap-space-lg font-label-md text-label-md overflow-x-auto" data-active-classes="text-primary font-bold"><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Marketplace</a><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="kampala-specials" href="#" onClick={() => alertToast('Action triggered')}>Kampala Express Hub</a><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="electronics-hub" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Gadgets</a><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="agri-fresh" href="#" onClick={() => alertToast('Action triggered')}>Owino Agri-Fresh</a><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="fashion-crafts" href="#" onClick={() => alertToast('Action triggered')}>Fashion &amp; Crafts</a><a className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}>Daily MoMo Deals</a></nav><div className="hidden lg:flex items-center gap-space-xs text-tertiary font-label-sm text-label-sm font-bold"><Icon name="electric_moped" className="text-[16px]" /><span>45-Min SafeBoda Delivery Active in Central Kampala</span></div></div></div></header><main className="w-full pt-[152px] bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto px-margin py-space-lg w-full flex flex-col gap-space-lg">

<nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<a className="hover:text-primary transition-colors flex items-center gap-space-xs" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="storefront" className="text-[16px]" />
<span>Home</span>
</a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<a className="hover:text-primary transition-colors" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>Account Hub</a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<span className="text-on-surface font-label-md text-label-md">Notifications &amp; Activity</span>
</nav>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="notifications_active" className="text-[28px]" />
</div>
<div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Notifications &amp; Order Alerts</h1>
<span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full" id="unread-counter">2 Unread</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Real-time status updates across SafeBoda couriers, telecom escrow settlements, and Kampala marketplace drops.</p>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-label-md text-label-md transition-all active:scale-95 shadow-sm" id="mark-all-read-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[18px] text-tertiary" />
<span>Mark all as read</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-label-md text-label-md transition-all active:scale-95 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[18px] text-secondary" />
<span>Notification Settings</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none" id="filter-tabs">
<button className="tab-btn px-space-lg py-2 rounded-xl font-label-md text-label-md bg-primary text-on-primary shadow-sm flex items-center gap-space-xs transition-all flex-shrink-0" data-filter="all" onClick={() => alertToast('Action triggered')}>
<span>All Alerts</span>
<span className="bg-on-primary/20 px-1.5 py-0.5 rounded-full text-label-sm">8</span>
</button>
<button className="tab-btn px-space-lg py-2 rounded-xl font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-space-xs flex-shrink-0" data-filter="orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<Icon name="electric_moped" className="text-[16px] text-primary" />
<span>Orders &amp; Delivery</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded-full text-label-sm">4</span>
</button>
<button className="tab-btn px-space-lg py-2 rounded-xl font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-space-xs flex-shrink-0" data-filter="escrow" onClick={() => alertToast('Action triggered')}>
<Icon name="lock" className="text-[16px] text-tertiary" />
<span>Escrow &amp; Payments</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded-full text-label-sm">2</span>
</button>
<button className="tab-btn px-space-lg py-2 rounded-xl font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-space-xs flex-shrink-0" data-filter="deals" onClick={() => alertToast('Action triggered')}>
<Icon name="local_offer" className="text-[16px] text-[#F59E0B]" />
<span>Price Drops &amp; Deals</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded-full text-label-sm">2</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md" id="notification-feed">

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary flex flex-col gap-space-md" data-category="orders" data-status="unread">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="relative w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
<Icon name="electric_moped" className="text-[24px]" />
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary ring-2 ring-surface-container-lowest animate-pulse"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">SafeBoda Express Dispatched</span>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">In Transit</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">#SC-98241</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
                  Rider <strong className="text-on-surface">Kizito Brian</strong> (<span className="font-bold text-secondary">Bajaj Boxer UEF 842X</span>) picked up your parcel from <span className="text-primary font-bold">SoundCore Uganda Acacia Hub</span>. Estimated delivery: <strong className="text-tertiary">28 mins</strong> to Nakawa.
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold flex-shrink-0 whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> 12 mins ago
            </span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold font-label-md">
                KB
              </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Kizito Brian</span>
<Icon name="star" className="text-[15px] text-[#F59E0B]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.92</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="call" className="text-[14px] text-tertiary" /> +256 752 441 902
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-xl shadow-sm">
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Release Code</span>
<span className="font-price-display text-headline-sm text-primary tracking-widest font-bold" id="release-code-val">492-184</span>
</div>
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Copy code" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="px-space-lg py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-label-md text-label-md flex items-center gap-space-xs shadow-[0_4px_14px_rgba(218,55,0,0.25)] hover:shadow-lg transition-all active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[18px]" />
<span>Track Boda on Map</span>
</button>
<button className="px-space-lg py-2.5 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md flex items-center gap-space-xs hover:bg-surface-container-high transition-all active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="shield_person" className="text-[18px]" />
<span>Copy Delivery Code</span>
</button>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all border-l-4 border-l-tertiary flex flex-col gap-space-md" data-category="escrow" data-status="unread">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="relative w-11 h-11 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="verified_user" className="text-[24px]" />
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-tertiary ring-2 ring-surface-container-lowest animate-pulse"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Deposit Confirmed</span>
<span className="bg-[#ffcc00]/20 text-[#8a6800] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]"></span> MTN MoMo Protected
                  </span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">#SC-98241</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
<strong className="text-tertiary font-price-display text-body-lg">UGX 380,000</strong> has been secured in the SwiftCart Escrow vault. Funds will NOT be disbursed to SoundCore Uganda until you physically inspect your parcel and provide the courier with your 6-digit release PIN.
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold flex-shrink-0 whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> 45 mins ago
            </span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between text-center gap-space-xs">
<div className="flex flex-col items-center flex-1">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-1 text-[13px] font-bold">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">MoMo Debited</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Instant 0% Fee</span>
</div>
<div className="h-0.5 flex-1 bg-tertiary"></div>
<div className="flex flex-col items-center flex-1">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-1 text-[13px] font-bold ring-4 ring-tertiary/20">
<Icon name="lock" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Swift Escrow</span>
<span className="font-body-sm text-[10px] text-tertiary font-bold">Safely Held</span>
</div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
<div className="flex flex-col items-center flex-1">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mb-1 text-[13px] font-bold">
                3
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Parcel Delivery</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Inspect Box</span>
</div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
<div className="flex flex-col items-center flex-1">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mb-1 text-[13px] font-bold">
                4
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Funds Disbursed</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Only after PIN</span>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md" data-category="deals" data-status="read">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-11 h-11 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center flex-shrink-0">
<Icon name="trending_down" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Wishlist Price Drop Alert</span>
<span className="bg-[#FFF2E8] text-[#DA3700] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[13px]" /> -15% Flash Special
                  </span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
<strong className="text-on-surface">SoundCore Space One ANC Wireless Headphones</strong> dropped by <span className="text-tertiary font-bold">UGX 70,000</span>! Now available for <span className="text-primary font-bold text-headline-sm">UGX 380,000</span> (was UGX 450,000) at SoundCore Uganda Official Acacia Mall.
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0 whitespace-nowrap">
              3 hours ago
            </span>
</div>
<div className="flex items-center gap-space-md bg-surface-container-low p-space-sm rounded-xl">
<div className="w-16 h-16 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC wireless over-ear headphones in sleek matte black finish, illuminated with warm studio product lighting on light warm cream backdrop." src={`${assetBase}/images/0dbf8d7b7cb3d66a.webp`} />
</div>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold line-clamp-1">SoundCore Space One ANC - Active Noise Cancelling 2X Stronger Voice Reduction</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">5 units remaining at discounted rate</span>
</div>
<a className="px-space-lg py-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all text-center flex-shrink-0 active:scale-95 shadow-sm" href="#" onClick={() => alertToast('Action triggered')}>
                View Deal
              </a>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md" data-category="orders" data-status="read">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-11 h-11 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="task_alt" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Delivery Completed &amp; Verified</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">#SC-89102</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
                  Order was successfully handed over to you at <strong className="text-on-surface">Kampala Nakawa Portbell Road</strong>. Escrow payout of <span className="font-bold">UGX 125,000</span> was released to <span className="text-primary font-bold">Kikuubo Electronics Mall</span>. Help your fellow Kampala buyers by rating this store!
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0 whitespace-nowrap">
              Yesterday at 16:40
            </span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs text-[#F59E0B]">
<Icon name="workspace_premium" className="text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">+50 SwiftPoints Reward</span>
</div>
<button className="px-space-lg py-2 bg-secondary text-on-secondary rounded-xl font-label-md text-label-md hover:bg-on-secondary-container transition-all flex items-center gap-space-xs shadow-sm active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="rate_review" className="text-[18px]" />
<span>Write Review &amp; Claim Points</span>
</button>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md" data-category="escrow" data-status="read">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-11 h-11 rounded-xl bg-[#ff4444]/10 text-[#ff4444] flex items-center justify-center flex-shrink-0">
<Icon name="currency_exchange" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Return Inspection Passed - Refund Disbursed</span>
<span className="bg-[#ff4444]/10 text-[#c21818] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Airtel Money Refund</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">#SC-77120</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
                  SwiftCart Nakasero QA hub inspected your returned item. <strong className="text-tertiary">UGX 65,000</strong> has been automatically disbursed back to your registered Airtel Money wallet <span className="font-bold font-mono text-on-surface">0702***891</span>. Ref: <span className="text-secondary font-mono">AIRTEL-ESC-884910</span>.
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0 whitespace-nowrap">
              2 days ago
            </span>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-xl font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-tertiary" /> Refund settled in 4 mins
            </span>
<a className="text-primary hover:underline font-label-sm text-label-sm font-bold" href="#" onClick={() => alertToast('Action triggered')}>Download Bank Statement (PDF)</a>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md" data-category="deals" data-status="read">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
<Icon name="devices" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Account Security: New Device Login</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">Security Audit</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-space-xs leading-relaxed">
                  Successful buyer session initiated from <strong className="text-on-surface">Chrome on Windows 11</strong> via MTN Fiber IP in <span className="text-secondary font-bold">Kampala, Uganda</span>. If this activity was not initiated by you, freeze your SwiftCart Escrow PIN immediately.
                </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0 whitespace-nowrap">
              3 days ago
            </span>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<button className="px-space-md py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
              Yes, it was me
            </button>
<button className="px-space-md py-1.5 bg-error-container text-on-error-container rounded-lg font-label-sm text-label-sm font-bold hover:bg-error hover:text-on-error transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="lock_reset" className="text-[14px]" />
<span>Lock Escrow Vault</span>
</button>
</div>
</article>
</div>

<aside className="lg:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
<h3 className="font-label-lg text-label-lg text-on-surface">Live SafeBoda Courier</h3>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-[#ECFDF5] px-2 py-0.5 rounded-full font-bold">On Schedule</span>
</div>

<div className="relative w-full h-36 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center">
<div className="w-full h-full bg-cover bg-center" data-location="Acacia Mall Kisementi to Nakawa Kampala" style={{"backgroundImage":"url('/images/04ced793037e54f5.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-sm">
<div className="flex items-center justify-between text-inverse-on-surface">
<div>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold block">Acacia Hub → Nakawa Portbell</span>
<span className="font-headline-sm text-headline-sm font-bold">14:15 EAT</span>
</div>
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-md">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Order ID</span>
<span className="font-bold font-mono text-on-surface">#SC-98241</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Item</span>
<span className="font-bold text-on-surface truncate max-w-[180px]">SoundCore Space One ANC</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Escrow Status</span>
<span className="font-bold text-tertiary flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> UGX 380,000 Locked
              </span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-space-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-primary font-bold">65% En Route</span>
<span className="text-on-surface-variant">Lugogo Bypass</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-[#FF8A1F] rounded-full transition-all duration-500" style={{"width":"65%"}}></div>
</div>
</div>
<button className="w-full py-2.5 bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md rounded-xl transition-all flex items-center justify-center gap-space-xs active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="map" className="text-[18px]" />
<span>Open High-Def Tracking Screen</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface">Alert Channels</h3>
<Icon name="phonelink_ring" className="text-[20px] text-on-surface-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manage how critical delivery PINs and Escrow release notices reach your phone.</p>
<div className="flex flex-col gap-space-md pt-space-xs">

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-[#DA3700]">
<Icon name="sms" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Instant SMS Dispatch</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">PINs sent via MTN/Airtel gateway</span>
</div>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer rounded" type="checkbox" />
</label>

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<Icon name="chat" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">WhatsApp Live Alerts</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Boda rider real-time live link</span>
</div>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer rounded" type="checkbox" />
</label>

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<Icon name="mail" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Escrow Tax Invoices</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">EFRIS certified receipts</span>
</div>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer rounded" type="checkbox" />
</label>

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-[#F59E0B]">
<Icon name="loyalty" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Owino &amp; Tech Price Drops</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Daily localized merchant deals</span>
</div>
</div>
<input className="w-5 h-5 accent-primary cursor-pointer rounded" type="checkbox" />
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm text-tertiary">
<Icon name="support_agent" className="text-[24px]" />
<h3 className="font-label-lg text-label-lg text-on-surface">Escrow Buyer Protection</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Have an issue with parcel contents? Do NOT provide the release PIN to the courier. Our dispute team is available 24/7.
          </p>
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="phone_in_talk" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Toll-Free Kampala</span>
<span className="font-label-md text-label-md text-on-surface font-bold">0800 220 800</span>
</div>
</div>
<a className="px-space-md py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-colors" href="tel:0800220800" onClick={() => alertToast('Action triggered')}>Call Free</a>
</div>
<button className="w-full py-2.5 bg-secondary text-on-secondary rounded-xl font-label-md text-label-md hover:bg-on-secondary-container transition-colors flex items-center justify-center gap-space-xs shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="forum" className="text-[18px]" />
<span>Live Chat With Support Officer</span>
</button>
</div>
</aside>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-margin" id="pref-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-xl shadow-2xl flex flex-col gap-space-lg animate-in fade-in zoom-in duration-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="tune" className="text-primary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Notification Preferences</h2>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" />
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Configure frequency and priorities for automated mobile money payment confirmations, SafeBoda courier milestones, and seller updates.
      </p>
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">SafeBoda Rider Dispatch Alerts</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Driver name, plate number, live map GPS</span>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Escrow Holds &amp; Releases</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">MoMo/Airtel debit and disbursement receipt</span>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Wishlist Discounts &amp; Restocks</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">When watched products drop in price</span>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Security &amp; Device Sessions</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Alert immediately upon new login</span>
</div>
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer" type="checkbox" />
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-lg py-2.5 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
          Cancel
        </button>
<button className="px-space-lg py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all shadow-[0_4px_14px_rgba(218,55,0,0.3)]" onClick={() => alertToast('Action triggered')}>
          Save Settings
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-margin" id="boda-map-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md animate-in fade-in zoom-in duration-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">SafeBoda Live Tracking</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Order #SC-98241 • Rider Kizito Brian (Bajaj Boxer UEF 842X)</span>
</div>
</div>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" />
</button>
</div>

<div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner">
<div className="w-full h-full bg-cover bg-center" data-location="Kampala Acacia Mall to Nakawa Portbell Road Uganda" style={{"backgroundImage":"url('/images/cf2ad9db8d0bf4fc.webp')"}}></div>
<div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
<Icon name="near_me" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-bold">Crossing Jinja Road Flyover</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold">Arriving in ~18 minutes at Nakawa</span>
</div>
</div>
<a className="px-space-md py-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center gap-1 hover:bg-primary-container transition-colors shadow-sm" href="tel:+256752441902" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[16px]" />
<span>Call Rider</span>
</a>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-2">
<Icon name="lock" className="text-[18px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow release code: <strong className="text-on-surface font-mono text-body-md">492-184</strong></span>
</div>
<button className="px-space-lg py-2 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
          Close Map
        </button>
</div>
</div>
</div>

</div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface"><div className="bg-inverse-surface shadow-[0_1px_8px_rgba(0,0,0,0.1)]"><div className="max-w-7xl mx-auto px-margin py-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg"><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-xl bg-surface-container-high/10 text-tertiary-fixed flex-shrink-0"><Icon name="shield" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-inverse-on-surface">100% Escrow Protection</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Funds held securely till delivery confirmation</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-xl bg-surface-container-high/10 text-primary-fixed-dim flex-shrink-0"><Icon name="two_wheeler" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-inverse-on-surface">45-Min SafeBoda City Hub</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Fast dispatch across Greater Kampala</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-xl bg-surface-container-high/10 text-secondary-fixed flex-shrink-0"><Icon name="phone_android" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-inverse-on-surface">Zero MoMo Fees</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Free checkouts via MTN MoMo &amp; Airtel Money</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-xl bg-surface-container-high/10 text-tertiary-fixed flex-shrink-0"><Icon name="verified" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-inverse-on-surface">URSB Certified Stores</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-space-xs">Verified authentic Ugandan businesses</p></div></div></div></div><div className="max-w-7xl mx-auto px-margin py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><span className="font-headline-sm text-headline-sm tracking-tight text-primary-fixed font-bold">SwiftCart</span><span className="font-label-sm text-label-sm bg-primary/20 text-primary-fixed-dim px-2 py-0.5 rounded-full">Uganda</span></div><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Kampala's premier tactile mobile-first digital trade network, bridging verified local markets with swift escrow-backed dispatch.</p><div className="flex flex-col gap-space-xs mt-space-sm"><span className="font-label-sm text-label-sm text-inverse-on-surface/50 uppercase tracking-wider">Kampala HQ &amp; Hub</span><span className="font-body-sm text-body-sm text-inverse-on-surface/90">Plot 14 Lumumba Avenue, Nakasero, Kampala</span><span className="font-body-sm text-body-sm text-tertiary-fixed font-bold mt-space-xs">Toll-Free: 0800 220 800</span></div></div><div className="flex flex-col gap-space-md"><h3 className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-wider">Customer Service</h3><ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track SafeBoda Order</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Escrow Protection Guarantee</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution &amp; Returns</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kampala Pickup Stations</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Buyer Safety Guidelines</a></li></ul></div><div className="flex flex-col gap-space-md"><h3 className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-wider">About &amp; Business</h3><ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart East Africa</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart Vendor Hub</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>URSB Verification Program</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Courier Partnering</a></li><li><a className="hover:text-inverse-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Careers &amp; Campus Reps</a></li></ul></div><div className="flex flex-col gap-space-md"><h3 className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-wider">Payment &amp; Trust Rails</h3><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Automated settlement via Bank of Uganda regulated payment systems.</p><div className="flex flex-wrap gap-space-sm"><div className="bg-inverse-surface/80 px-space-md py-space-xs rounded-lg flex items-center gap-space-xs"><Icon name="contactless" className="text-[16px] text-[#ffcc00]" /><span className="font-label-sm text-label-sm text-inverse-on-surface font-bold">MTN MoMo</span></div><div className="bg-inverse-surface/80 px-space-md py-space-xs rounded-lg flex items-center gap-space-xs"><Icon name="account_balance_wallet" className="text-[16px] text-[#ff4444]" /><span className="font-label-sm text-label-sm text-inverse-on-surface font-bold">Airtel Money</span></div><div className="bg-inverse-surface/80 px-space-md py-space-xs rounded-lg flex items-center gap-space-xs"><Icon name="credit_card" className="text-[16px] text-secondary-fixed" /><span className="font-label-sm text-label-sm text-inverse-on-surface font-bold">Visa / Mastercard</span></div><div className="bg-inverse-surface/80 px-space-md py-space-xs rounded-lg flex items-center gap-space-xs"><Icon name="lock" className="text-[16px] text-tertiary-fixed" /><span className="font-label-sm text-label-sm text-inverse-on-surface font-bold">Swift Escrow</span></div></div><div className="p-space-md bg-inverse-surface/60 rounded-xl mt-space-xs"><span className="font-label-sm text-label-sm text-tertiary-fixed block font-bold">Instant Airtel &amp; MTN Prompt</span><span className="font-body-sm text-body-sm text-inverse-on-surface/60">Push PIN approval straight to your phone. Zero extra transaction levy.</span></div></div></div><div className="bg-inverse-surface/90"><div className="max-w-7xl mx-auto px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-inverse-on-surface/60"><p>© 2025 SwiftCart Uganda Ltd. Incorporated in the Republic of Uganda. All rights reserved.</p><p className="font-label-sm text-label-sm text-inverse-on-surface/50 text-center md:text-right">Fully compliant with the National Payment Systems Act 2020 &amp; Data Protection and Privacy Act 2019.</p></div></div></footer>
    </div>
  );
};

export default Screen;
