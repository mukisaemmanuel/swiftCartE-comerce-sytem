// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/my_orders_order_detail_desktop/code.html
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.06)]"><div className="bg-surface-container-high/60 border-b border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><div className="flex items-center gap-4"><span>Kampala Rapid Delivery: Central &amp; Greater Wakiso</span><span className="inline-block w-1 h-1 rounded-full bg-outline-variant"></span><span className="text-tertiary flex items-center gap-1 font-bold"><Icon name="verified_user" className="text-[14px]" />Swift Escrow Protected</span></div><div className="flex items-center gap-6"><a className="text-primary hover:text-on-surface transition-colors font-bold" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a><a className="text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help &amp; FAQ</a><span className="text-on-surface-variant font-medium">Uganda (UGX)</span></div></div></div><div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center gap-6 justify-between"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/abfa3c4dbb6c6e0a.webp`} /><span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-primary">SwiftCart</span></div><div className="flex-1 max-w-2xl mx-4"><div className="flex items-center h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] p-1"><div className="h-full px-3 flex items-center gap-1 text-on-surface font-label-md text-label-md shrink-0 cursor-pointer hover:bg-surface-container-low rounded-lg transition-colors"><span>All Categories</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><div className="w-[1px] h-5 bg-surface-variant shrink-0"></div><div className="flex-1 flex items-center px-3 gap-2"><Icon name="search" className="text-outline text-[18px]" /><input className="w-full bg-transparent border-none text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none" placeholder="Search products, safe electronic vendors, fresh produce..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="h-9 px-5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 shrink-0" onClick={() => alertToast('Action triggered')}><span>Search</span></button></div></div><div className="flex items-center gap-4 shrink-0"><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="support_agent" className="text-[20px]" /><span>Support</span></a><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[20px]" /><span>Wishlist</span></a><a className="flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-high hover:bg-surface-variant rounded-xl transition-all" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant">UGX 0</span><span className="font-label-md text-label-md text-on-surface font-bold">0 Items</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><div className="bg-surface border-t border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between"><div className="flex items-center gap-2 text-on-surface font-label-md text-label-md cursor-pointer shrink-0"><Icon name="location_on" className="text-[18px] text-primary" /><span>Deliver to:</span><span className="font-bold text-on-surface">Kampala Central, Nakasero</span><Icon name="keyboard_arrow_down" className="text-[16px] text-outline" /></div><nav className="flex items-center gap-7 overflow-x-auto py-1" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors shrink-0 text-primary font-bold" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Home</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}>Flash Deals</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="safeboda-delivery" href="#" onClick={() => alertToast('Action triggered')}>Same-Day SafeBoda</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></nav></div></div></header><main className="w-full pt-35 bg-background flex-1"><div className="flex flex-col w-full">

<div className="relative w-full max-w-7xl mx-auto px-6 py-8">
<div className="absolute -top-12 -left-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-48 right-0 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>

<nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">
<a className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="home" className="text-[16px]" />
<span>Home</span>
</a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<a className="hover:text-primary transition-colors" data-path="buyer-account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>Buyer Account</a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<span className="text-on-surface font-bold">My Orders &amp; Purchase History</span>
</nav>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-extrabold">Account Portal</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/40 px-2.5 py-0.5 rounded-full font-bold">
<Icon name="verified_user" className="text-[13px]" /> 100% Escrow Insured
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
          My Orders &amp; Escrow Purchases
        </h1>
</div>

<div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-xl shadow-sm border border-surface-variant/40">
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg">
<Icon name="security" className="text-primary text-[20px]" />
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Escrow Held</span>
<span className="font-label-md text-label-md font-bold text-on-surface">UGX 232,000</span>
</div>
</div>
<div className="h-6 w-[1px] bg-surface-variant"></div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg">
<Icon name="two_wheeler" className="text-tertiary text-[20px]" />
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Rider Active</span>
<span className="font-label-md text-label-md font-bold text-tertiary">SafeBoda #419</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 border-b border-surface-variant/40 overflow-x-auto pb-3 mb-8">
<button className="px-4 py-2 rounded-xl font-label-md text-label-md bg-on-surface text-surface-container-lowest font-bold shadow-sm transition-all flex items-center gap-2 shrink-0" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<span>All Orders</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high/30 font-label-sm text-label-sm">8</span>
</button>
<button className="px-4 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-2 shrink-0" onClick={() => alertToast('Action triggered')}>
<span>Processing</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">2</span>
</button>
<button className="px-4 py-2 rounded-xl font-label-md text-label-md bg-primary-fixed/60 text-primary font-bold transition-all flex items-center gap-2 shrink-0" onClick={() => alertToast('Action triggered')}>
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>In-Transit SafeBoda</span>
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">1</span>
</button>
<button className="px-4 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-2 shrink-0" onClick={() => alertToast('Action triggered')}>
<span>Delivered</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">4</span>
</button>
<button className="px-4 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-2 shrink-0" onClick={() => alertToast('Action triggered')}>
<span>Disputes &amp; Escrow Holds</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">1</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 flex flex-col gap-4">

<div className="flex items-center gap-3">
<div className="flex-1 flex items-center h-11 bg-surface-container-lowest rounded-xl px-3 shadow-sm border border-surface-variant/40">
<Icon name="search" className="text-outline text-[18px]" />
<input className="w-full bg-transparent border-none text-on-surface placeholder:text-outline font-body-sm text-body-sm px-2 focus:outline-none" placeholder="Search by Order ID or item..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
</div>
<div className="relative shrink-0">
<button className="h-11 px-3.5 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md rounded-xl border border-surface-variant/40 shadow-sm flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="calendar_today" className="text-[18px] text-on-surface-variant" />
<span>2024</span>
<Icon name="expand_more" className="text-[16px] text-on-surface-variant" />
</button>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="p-4 bg-surface-container-lowest rounded-2xl shadow-md border-2 border-primary relative cursor-pointer transition-all hover:shadow-lg">
<div className="absolute -top-2.5 right-4 bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Selected Dispatch
            </div>
<div className="flex items-center justify-between mb-2.5">
<span className="font-label-md text-label-md text-primary font-extrabold tracking-wide">#SC-UG-99482</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Today, 13:42</span>
</div>
<div className="flex gap-3 mb-3">
<div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Premium SoundCore wireless noise cancelling over-ear headphones jet black color modern sleek design studio lighting warm background" src={`${assetBase}/images/940f799eb5d846d8.webp`} />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Space One ANC</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span>SoundCore Uganda Official</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-3 border-t border-surface-variant/30 font-label-sm text-label-sm">
<div className="flex items-center gap-1.5 text-primary-container font-bold bg-primary-fixed/40 px-2 py-1 rounded-lg">
<Icon name="two_wheeler" className="text-[15px] animate-bounce" />
<span>SafeBoda: Est. 4:15 PM</span>
</div>
<div className="flex items-center gap-1 text-tertiary bg-tertiary-fixed/30 px-2 py-1 rounded-lg font-bold">
<Icon name="lock" className="text-[14px]" />
<span>Escrow Protected</span>
</div>
</div>
</div>

<div className="p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-variant/40 cursor-pointer hover:border-outline-variant hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-2.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">#SC-UG-98210</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Yesterday, 10:18</span>
</div>
<div className="flex gap-3 mb-3">
<div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Samsung Galaxy modern smartphone lime violet front and back sleek commercial showcase warm soft studio lights" src={`${assetBase}/images/b132d52c27e63d9e.webp`} />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Samsung Galaxy A54 5G 128GB</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kikuubo Tech Wholesalers</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 890,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-surface-variant/30 font-label-sm text-label-sm">
<div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>Delivered Yesterday</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded font-bold">
<Icon name="task_alt" className="text-[13px] text-tertiary" />
<span>Escrow Released</span>
</div>
</div>
</div>

<div className="p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-variant/40 cursor-pointer hover:border-outline-variant hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-2.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">#SC-UG-97554</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">19 Oct 2024</span>
</div>
<div className="flex gap-3 mb-3">
<div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Anker 65W GaN fast wall charger with braided type-c cable in clean packaging modern tech accessory" src={`${assetBase}/images/a165b3a77305320e.webp`} />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Anker 65W Fast Charger + Braided Cable</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Victoria Tech Solutions</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 73,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-surface-variant/30 font-label-sm text-label-sm">
<div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>Delivered 20 Oct</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded font-bold">
<Icon name="task_alt" className="text-[13px] text-tertiary" />
<span>Escrow Released</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-variant/40">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-variant/30">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Order #SC-UG-99482</span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">
<Icon name="two_wheeler" className="text-[14px]" /> Dispatched via SafeBoda Express
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Placed on 24 Oct 2024 at 13:42 • Payment via MTN MoMo (*165#)
              </p>
</div>

<div className="flex items-center gap-2 shrink-0">
<button className="h-10 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[18px]" />
<span>Track Rider</span>
</button>
<button className="h-10 px-3 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5" title="Download Official Invoice" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[18px]" />
<span className="hidden sm:inline">Receipt</span>
</button>
<button className="h-10 px-3 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface-variant hover:text-error font-label-md text-label-md transition-colors flex items-center gap-1" title="Dispute or Help" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help_outline" className="text-[18px]" />
<span className="hidden sm:inline">Dispute</span>
</button>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-surface-container-low border border-surface-variant/30">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
<Icon name="electric_moped" className="text-[24px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">SafeBoda Driver: Geoffrey Okello</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bajaj Boxer • Plate UFH 619L • Phone: +256 788 331 902</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Estimated Drop-off</span>
<p className="font-headline-sm text-headline-sm text-primary font-extrabold leading-tight">Today 4:15 PM</p>
</div>
</div>

<div className="relative pt-4 pb-1">
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-surface-container-high">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-tertiary to-primary transition-all duration-500" style={{"width":"75%"}}></div>
</div>
<div className="grid grid-cols-4 text-center font-label-sm text-label-sm">
<div className="text-on-surface font-bold flex flex-col items-center">
<Icon name="check_circle" className="text-[16px] text-tertiary mb-1" />
<span>Order Confirmed</span>
<span className="text-[10px] text-on-surface-variant font-normal">13:42</span>
</div>
<div className="text-on-surface font-bold flex flex-col items-center">
<Icon name="check_circle" className="text-[16px] text-tertiary mb-1" />
<span>Vendor Dispatched</span>
<span className="text-[10px] text-on-surface-variant font-normal">14:10</span>
</div>
<div className="text-primary font-extrabold flex flex-col items-center">
<Icon name="radio_button_checked" className="text-[16px] text-primary mb-1 animate-pulse" />
<span>Rider On Route</span>
<span className="text-[10px] text-primary font-bold">Acacia Bypass</span>
</div>
<div className="text-on-surface-variant font-medium flex flex-col items-center">
<Icon name="flag" className="text-[16px] text-outline mb-1" />
<span>Buyer Delivery Code</span>
<span className="text-[10px] text-on-surface-variant">Pending Handover</span>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-variant/40">
<div className="flex items-center gap-2 mb-2 text-on-surface font-label-md text-label-md font-bold">
<Icon name="location_on" className="text-[18px] text-primary" />
<span>Delivery Address</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-bold">Destination: Home (Kololo)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Plot 14 Philip Road, Near Acacia Mall Entrance B, Kampala Central</p>
<div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">
<Icon name="chat_bubble" className="text-[14px] text-primary" />
<span>Note: "Call when at black gate"</span>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-variant/40">
<div className="flex items-center gap-2 mb-2 text-on-surface font-label-md text-label-md font-bold">
<Icon name="person_pin" className="text-[18px] text-tertiary" />
<span>Recipient Contact</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-bold">Ronald Mukasa</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">+256 701 498 442</p>
<div className="mt-3 flex items-center gap-2">
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded font-bold flex items-center gap-1">
<Icon name="phone_in_talk" className="text-[13px]" /> Verified MTN MoMo ID
                </span>
</div>
</div>
</div>
</div>

<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-variant/40">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">Items in this dispatch</h3>
<div className="p-4 rounded-xl bg-surface-container-low/60 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="w-20 h-20 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-surface-variant/30 flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancellation over ear headphones black edition high clarity detail product shot" src={`${assetBase}/images/eaa522d2fc5d489b.webp`} />
</div>
<div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold mb-0.5">
<Icon name="verified" className="text-[14px]" /> SoundCore Uganda Official (Verified Partner)
                </span>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">SoundCore Space One Wireless ANC Over-Ear Headphones</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Variant: Jet Black • Warranty: 12-Month Official Local Warranty</p>
<div className="mt-1 font-label-sm text-label-sm text-on-surface-variant">Quantity: <span className="text-on-surface font-bold">1 Unit</span></div>
</div>
</div>
<div className="text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-surface-variant/30">
<span className="font-price-display text-price-display text-on-surface font-extrabold">UGX 248,500</span>
<p className="font-label-sm text-label-sm text-tertiary">VAT Inclusive</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-gradient-to-br from-tertiary-fixed/20 via-surface-container-lowest to-surface-container-low border border-tertiary/20 shadow-sm relative overflow-hidden">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-start gap-3.5">
<div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="lock" className="text-[28px]" />
</div>
<div>
<div className="flex items-center gap-2">
<h4 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Bank-Grade Escrow Custody</h4>
<span className="px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold">Secured</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-lg leading-relaxed">
                  Your funds are held safely by SwiftCart Uganda in escrow. Payment is released to the seller <strong>only after</strong> you receive the parcel, unbox, inspect the item, and supply your 6-digit handover code to the rider.
                </p>
</div>
</div>

<div className="p-4 bg-surface-container-lowest rounded-xl border border-tertiary/30 shadow-sm text-center min-w-[190px] shrink-0 self-stretch md:self-auto flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-extrabold mb-1">Your Delivery Code</span>
<div className="font-headline-md text-headline-md font-extrabold tracking-widest text-primary py-1 px-3 bg-surface-container rounded-lg">
                849 • 210
              </div>
<span className="font-label-sm text-label-sm text-outline mt-1.5 flex items-center justify-center gap-1">
<Icon name="info" className="text-[13px]" /> Only share after inspecting!
              </span>
</div>
</div>
</div>

<div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-variant/40">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">Payment Summary</h3>
<div className="space-y-3 font-body-sm text-body-sm border-b border-surface-variant/40 pb-4">
<div className="flex items-center justify-between text-on-surface">
<span>Items Subtotal</span>
<span className="font-bold">UGX 248,500</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5">
<Icon name="electric_moped" className="text-primary text-[16px]" />
                SafeBoda Express (Rapid Delivery)
              </span>
<span className="font-bold">UGX 3,500</span>
</div>
<div className="flex items-center justify-between text-tertiary font-bold">
<span className="flex items-center gap-1">
<Icon name="confirmation_number" className="text-[16px]" />
                Voucher applied: <span className="bg-tertiary-fixed/40 px-1.5 py-0.5 rounded text-tertiary">SWIFT20K</span>
</span>
<span>-UGX 20,000</span>
</div>
</div>

<div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Total Settled via MTN Mobile Money</span>
<div className="flex items-center gap-2 mt-0.5">
<div className="w-6 h-6 rounded bg-amber-400 text-on-surface font-extrabold text-[10px] flex items-center justify-center">MoMo</div>
<span className="font-headline-md text-headline-md font-extrabold text-on-surface">UGX 232,000</span>
<Icon name="verified" className="text-tertiary  text-[18px]" />
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Txn Ref: <span className="font-mono font-bold">UG-MOMO-20241024-99482</span></p>
</div>

<div className="flex items-center gap-3">
<button className="px-5 py-3 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-bold transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
                Order Support
              </button>
<button className="px-5 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:bg-primary-container transition-all active:scale-95 flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="verified" className="text-[18px]" />
<span>Confirm Delivery</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-[#0c1322] text-white pt-10 pb-8 mt-12 border-t border-slate-800 font-body-sm text-body-sm"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-slate-800/80"><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-tertiary/20 text-tertiary-fixed flex items-center justify-center shrink-0 border border-tertiary/30"><Icon name="verified_user" className="text-[22px]" /></div><div><h4 className="font-label-lg text-label-lg font-bold text-white">100% Escrow Protection</h4><p className="text-xs text-slate-400 mt-0.5">Funds safe until you inspect</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-primary/20 text-primary-fixed flex items-center justify-center shrink-0 border border-primary/30"><Icon name="electric_moped" className="text-[22px]" /></div><div><h4 className="font-label-lg text-label-lg font-bold text-white">45-Min SafeBoda City Hub</h4><p className="text-xs text-slate-400 mt-0.5">Live courier GPS tracking</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30"><Icon name="payments" className="text-[22px]" /></div><div><h4 className="font-label-lg text-label-lg font-bold text-white">Zero MoMo Fees</h4><p className="text-xs text-slate-400 mt-0.5">Instant MTN &amp; Airtel checkout</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-secondary/20 text-secondary-fixed flex items-center justify-center shrink-0 border border-secondary/30"><Icon name="workspace_premium" className="text-[22px]" /></div><div><h4 className="font-label-lg text-label-lg font-bold text-white">URSB Certified Stores</h4><p className="text-xs text-slate-400 mt-0.5">Kampala verified vendors</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-slate-800/80"><div className="space-y-4"><div className="flex items-center gap-2"><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain" src={`${assetBase}/images/72ed6cc157770beb.webp`} /><span className="font-headline-sm text-headline-sm text-white font-extrabold tracking-tight">SwiftCart</span></div><p className="text-slate-400 text-body-sm leading-relaxed">Uganda's premier commerce marketplace. High-trust escrow releases, real-time SafeBoda dispatch, and verified local merchant hubs across Kampala, Entebbe, and Jinja.</p><div className="space-y-2 pt-1 text-slate-300 font-label-sm text-label-sm"><div className="flex items-center gap-2"><Icon name="call" className="text-primary text-[16px]" /><span>Toll-Free Hotline: <span className="text-white font-bold">+256 800 220 800</span></span></div><div className="flex items-center gap-2"><Icon name="chat" className="text-tertiary-fixed text-[16px]" /><span>WhatsApp Concierge: <span className="text-white font-bold">+256 701 498 442</span></span></div><div className="flex items-center gap-2"><Icon name="location_on" className="text-outline-variant text-[16px]" /><span>Plot 14 Philip Road, Kololo &amp; Kikuubo Hub #4B</span></div></div></div><div><h4 className="font-label-lg text-label-lg font-bold text-white mb-4">Top Categories</h4><ul className="space-y-2.5 text-slate-400 font-body-sm"><li><a className="hover:text-white transition-colors" data-path="category-phones" href="#" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li><li><a className="hover:text-white transition-colors" data-path="category-audio" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li><li><a className="hover:text-white transition-colors" data-path="category-wholesale" href="#" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li><li><a className="hover:text-white transition-colors" data-path="category-fashion" href="#" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li><li><a className="hover:text-white transition-colors" data-path="category-shea" href="#" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li><li><a className="hover:text-white transition-colors" data-path="category-boda-spares" href="#" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li></ul></div><div><h4 className="font-label-lg text-label-lg font-bold text-white mb-4">Buyer Protection</h4><ul className="space-y-2.5 text-slate-400 font-body-sm"><li><a className="hover:text-white transition-colors" data-path="how-escrow-works" href="#" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li><li><a className="hover:text-white transition-colors" data-path="returns-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li><li><a className="hover:text-white transition-colors" data-path="safeboda-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li><li><a className="hover:text-white transition-colors" data-path="vendor-verification" href="#" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li><li><a className="hover:text-white transition-colors" data-path="report-counterfeit" href="#" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li><li><a className="hover:text-white transition-colors" data-path="dispute-resolution" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li></ul></div><div><h4 className="font-label-lg text-label-lg font-bold text-white mb-4">Verified Payment Rails</h4><p className="text-slate-400 font-body-sm mb-3">Direct real-time checkout powered by authorized Ugandan telecommunication systems.</p><div className="flex flex-wrap gap-2 mb-4"><span className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-[11px] font-bold text-amber-300">MTN MoMo (*165#)</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-[11px] font-bold text-rose-300">Airtel Money (*185#)</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-[11px] font-bold text-slate-200">Visa</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-[11px] font-bold text-slate-200">Mastercard</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-[11px] font-bold text-slate-200">Cash on Delivery (Swift Hub)</span></div><div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center gap-2.5"><Icon name="verified" className="text-tertiary-fixed text-[20px]" /><div className="text-[11px] leading-tight text-slate-300"><span className="font-bold text-white block">Audited Escrow Trust Account</span>Held with Tier-1 Partner Commercial Banks</div></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-slate-400"><div className="flex items-center gap-6 text-center md:text-left"><span>© 2025 SwiftCart Uganda Ltd. Registered under Uganda Registration Services Bureau (URSB) &amp; Uganda Revenue Authority. All prices in UGX with 0 decimals.</span></div><div className="flex items-center gap-6 shrink-0"><a className="hover:text-white transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-white transition-colors" data-path="terms-escrow" href="#" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a><a className="hover:text-white transition-colors" data-path="merchant-code" href="#" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
