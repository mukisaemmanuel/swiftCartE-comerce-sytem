// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/order_confirmation_delivery_code_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full max-w-7xl mx-auto px-margin flex flex-col justify-between pt-space-xs pb-space-xs"><div className="flex items-center justify-between gap-space-sm h-14"><div className="flex items-center gap-space-md shrink-0"><div className="flex items-center gap-space-xs cursor-pointer"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight hidden sm:inline">SwiftCart</span></div><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface cursor-pointer hover:bg-surface-container transition-colors"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left leading-tight"><span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Deliver To</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[130px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px] text-secondary" /></div></div><div className="flex-1 max-w-md mx-space-xs"><div className="flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><div className="flex items-center gap-1 pl-space-sm pr-space-xs text-secondary shrink-0 cursor-pointer border-r border-outline-variant/40"><span className="font-label-md text-label-md font-semibold text-on-surface-variant">All</span><Icon name="arrow_drop_down" className="text-[16px]" /></div><input className="w-full bg-transparent px-space-sm py-1 text-on-surface placeholder:text-secondary font-body-md text-body-md focus:outline-none" placeholder="Search verified items in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-9 px-space-md rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden md:flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold"><Icon name="bolt" className="text-[16px] text-on-tertiary-fixed" /><span>Kampala Same-Day</span></div><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="saved-items" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center leading-none">4</span></a><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="shopping-cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="font-label-md text-label-md text-on-surface hidden lg:inline font-bold">Sarah</span></div></div></div><nav className="flex items-center gap-space-md overflow-x-auto h-10 border-t border-surface-container-high/60 scrollbar-none" data-active-classes="text-primary font-bold border-b-2 border-primary"><a aria-current="page" className="whitespace-nowrap transition-colors py-1 text-primary font-bold border-b-2 border-primary" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="phones-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="electronics-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="home-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="flex flex-col w-full">

<div className="relative w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-md">

<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-tertiary-container via-tertiary to-on-tertiary-container p-space-md md:p-space-lg text-on-tertiary shadow-md mb-space-lg">
<div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="absolute top-0 right-24 w-32 h-32 rounded-full bg-primary-container/20 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-tertiary-container flex items-center justify-center shrink-0 shadow-sm">
<Icon name="check_circle" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm tracking-tight text-white font-extrabold">Payment Received &amp; Escrow Secured!</span>
<span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm">Order #SC-ORD-9488</span>
</div>
<p className="font-body-md text-body-md text-white/90 mt-1 flex items-center gap-space-xs flex-wrap">
<span className="flex items-center gap-1 font-semibold">
<Icon name="schedule" className="text-[16px]" /> Today, 14:22 EAT
              </span>
<span className="opacity-60">•</span>
<span className="flex items-center gap-1">
<Icon name="account_balance_wallet" className="text-[16px]" /> Paid via MTN Mobile Money (<span className="font-semibold">+256 772 ••• 456</span>)
              </span>
</p>
</div>
</div>

<div className="flex items-center gap-2 self-start md:self-center px-space-md py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-ping"></span>
<span className="font-label-md text-label-md font-bold text-white tracking-wide">Uganda Escrow Active</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="pin" className="text-primary text-[22px]" />
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Authentication Pass</span>
</div>
<span className="px-2.5 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant font-bold">Expires in 2h</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold mt-1">Your 6-Digit Delivery Release Code</h2>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Physical authentication protocol required at parcel handover.</p>

<div className="my-space-md p-space-md rounded-xl bg-surface-container-low flex flex-col items-center justify-center">
<div className="flex items-center justify-center gap-2 sm:gap-3">
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-on-surface font-black">4</div>
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-on-surface font-black">0</div>
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-on-surface font-black">9</div>
<div className="w-2 h-1 rounded-full bg-outline-variant mx-1"></div>
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-primary font-black">8</div>
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-primary font-black">8</div>
<div className="w-11 h-14 sm:w-14 sm:h-16 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center font-price-display text-price-display text-primary font-black">1</div>
</div>
<div className="mt-space-md flex flex-wrap items-center justify-center gap-space-sm">
<button className="h-10 px-space-md rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-bold flex items-center gap-2 transition-transform active:scale-95" id="copy-code-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px]" />
<span id="copy-text">Copy Code (409 881)</span>
</button>
<button className="h-10 px-space-md rounded bg-surface-container-lowest shadow-sm text-secondary hover:text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors" id="toggle-qr-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[18px]" />
<span>Show QR to Rider</span>
</button>
</div>

<div className="hidden flex-col items-center mt-space-md pt-space-md w-full bg-surface-container-lowest rounded-lg p-space-md shadow-sm" id="qr-drawer">
<div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center">

<svg className="text-on-surface" fill="currentColor" height="140" viewBox="0 0 29 29" width="140">
<path d="M0,0 h7 v7 h-7 z M2,2 h3 v3 h-3 z M8,0 h1 v1 h-1 z M10,0 h3 v1 h-3 z M14,0 h1 v2 h-1 z M16,0 h1 v1 h-1 z M18,0 h2 v1 h-2 z M22,0 h7 v7 h-7 z M24,2 h3 v3 h-3 z M0,8 h1 v1 h-1 z M2,8 h2 v1 h-2 z M6,8 h1 v2 h-1 z M9,8 h2 v1 h-2 z M12,8 h4 v1 h-4 z M17,8 h1 v2 h-1 z M20,8 h1 v3 h-1 z M23,8 h2 v1 h-2 z M27,8 h1 v2 h-1 z M8,10 h2 v2 h-2 z M12,10 h2 v1 h-2 z M15,10 h1 v2 h-1 z M24,10 h3 v1 h-3 z M0,12 h1 v3 h-1 z M2,12 h3 v1 h-3 z M7,12 h1 v1 h-1 z M9,12 h1 v3 h-1 z M11,12 h2 v2 h-2 z M18,12 h1 v2 h-1 z M21,12 h2 v2 h-2 z M26,12 h3 v1 h-3 z M0,16 h2 v1 h-2 z M4,16 h2 v2 h-2 z M8,16 h1 v1 h-1 z M11,16 h3 v2 h-3 z M15,16 h2 v1 h-2 z M19,16 h1 v1 h-1 z M23,16 h2 v1 h-2 z M26,16 h1 v2 h-1 z M0,18 h1 v2 h-1 z M2,18 h1 v1 h-1 z M6,18 h2 v2 h-2 z M9,18 h1 v1 h-1 z M14,18 h1 v2 h-1 z M17,18 h2 v1 h-2 z M20,18 h2 v1 h-2 z M24,18 h1 v1 h-1 z M28,18 h1 v2 h-1 z M0,22 h7 v7 h-7 z M2,24 h3 v3 h-3 z M8,22 h2 v1 h-2 z M11,22 h2 v3 h-2 z M14,22 h1 v1 h-1 z M18,22 h2 v2 h-2 z M22,22 h2 v1 h-2 z M25,22 h1 v3 h-1 z M27,22 h2 v1 h-2 z M8,24 h2 v1 h-2 z M15,24 h3 v1 h-3 z M21,24 h1 v2 h-1 z M23,24 h1 v1 h-1 z M9,26 h2 v2 h-2 z M13,26 h2 v1 h-2 z M17,26 h2 v2 h-2 z M20,26 h2 v1 h-2 z M24,26 h4 v1 h-4 z"></path>
</svg>
</div>
<span className="font-label-sm text-label-sm text-secondary mt-2">Boda Driver Scanner Direct Optical Pass</span>
</div>
</div>

<div className="rounded-lg bg-primary-fixed/30 p-space-md flex items-start gap-space-sm text-on-primary-fixed">
<Icon name="warning" className="text-primary-container text-[24px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-primary-container">DO NOT share this code before inspection.</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                Only give this code to the boda rider <strong>AFTER</strong> you have physically inspected your items and verified that all tamper-evident security tape seals are intact. Providing the code immediately releases funds from escrow to the merchant.
              </p>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm">

<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-2">
<div>
<span className="font-label-sm text-label-sm uppercase font-bold text-tertiary tracking-wider">Fast Courier Dispatch</span>
<div className="flex items-baseline gap-2 mt-0.5">
<h3 className="font-headline-sm text-headline-sm font-black text-on-surface">Today by 15:30 EAT</h3>
<span className="font-label-md text-label-md font-bold text-tertiary-container bg-tertiary-fixed/40 px-2 py-0.5 rounded-full">in ~45 minutes</span>
</div>
</div>

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface self-start sm:self-auto">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
</span>
<span className="font-label-md text-label-md font-bold">Rider En Route to Pickup</span>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-full h-2 my-space-xs overflow-hidden">
<div className="bg-gradient-to-r from-tertiary-container to-primary-container h-2 rounded-full w-3/5 transition-all duration-1000"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-secondary pt-1 pb-space-md">
<span className="font-bold text-on-surface">14:22 Order Paid</span>
<span className="font-bold text-primary">14:29 Dispatched</span>
<span className="opacity-60">15:05 At Acacia Ave</span>
<span className="opacity-60">15:30 Delivered</span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mt-space-xs">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-14 h-14 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close-up professional portrait of Mukasa Brian, an authorized Ugandan motorcycle dispatch courier wearing an official high-visibility reflective orange vest and matte black helmet with SwiftCart courier badge in daylight Kampala setting." src={`${assetBase}/images/4c186cc62e59d7af.webp`} />
</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="verified" className="text-[13px]" />
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">Mukasa Brian</span>
<span className="flex items-center text-amber-500 font-label-md text-label-md font-bold">
<Icon name="star" className="text-[15px]" />
                    4.9
                  </span>
<span className="font-label-sm text-label-sm text-secondary">(1,840 trips)</span>
</div>
<div className="font-body-sm text-body-sm text-secondary mt-0.5 flex flex-wrap items-center gap-1">
<span className="font-semibold text-on-surface">Bajaj Boxer UEF 842X</span>
<span>•</span>
<span>Pioneer Mall Boda Stage</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold mt-1">
<Icon name="format_image_left" className="text-[14px]" />
                  SwiftCart Certified Express Courier
                </span>
</div>
</div>

<div className="md:text-right bg-surface-container-lowest p-space-sm rounded-lg w-full md:w-auto shadow-sm">
<div className="flex items-center md:justify-end gap-1 font-label-sm text-label-sm text-secondary uppercase font-bold">
<Icon name="location_on" className="text-[16px] text-primary" />
<span>Delivery Address</span>
</div>
<div className="font-label-md text-label-md font-bold text-on-surface mt-0.5">Plot 14 Acacia Avenue, Kololo</div>
<div className="font-body-sm text-body-sm text-secondary">Opposite Acacia Mall Main Gate</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md">
<button className="h-12 px-space-md rounded bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-98" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[20px]" />
<span>Track Rider Live on Map</span>
</button>
<button className="h-12 px-space-md rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px] text-tertiary" />
<span>Call / WhatsApp Rider</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Purchase Verification</span>
<span className="font-label-sm text-label-sm text-tertiary-container font-extrabold flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> 2 Items Protected
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold pb-space-sm">Order Summary</h3>

<div className="flex flex-col gap-space-md py-space-sm">

<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="SoundCore Space One active noise cancelling over-ear headphones in matte jet black finish shown on clean commercial white gradient background with authentic high-end audio retail packaging." src={`${assetBase}/images/518d122156030f02.webp`} />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-bold truncate max-w-[170px]">SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate mt-0.5">SoundCore Space One ANC Headphones</h4>
<div className="flex items-center justify-between mt-1">
<span className="font-body-sm text-body-sm text-secondary">Jet Black • 1x</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">UGX 248,500</span>
</div>
</div>
</div>

<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="Baseus 65W GaN fast wall charger with dual USB-C ports and USB-A plug in matte black finish, crisp commercial e-commerce lighting with compact travel fold pins." src={`${assetBase}/images/7e38cf94687d5232.webp`} />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-bold truncate max-w-[170px]">Simba Telecom Direct</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate mt-0.5">Baseus 65W GaN Fast Charger</h4>
<div className="flex items-center justify-between mt-1">
<span className="font-body-sm text-body-sm text-secondary">Matte Black • 2x</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">UGX 153,500</span>
</div>
</div>
</div>
</div>

<div className="mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
<div className="flex justify-between font-body-sm text-body-sm text-secondary">
<span>Items Subtotal</span>
<span className="text-on-surface font-medium">UGX 398,500</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-tertiary font-medium">
<span className="flex items-center gap-1">
<Icon name="local_offer" className="text-[16px]" />
                Kampala Flash Promo
              </span>
<span>-UGX 15,000</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-secondary">
<span className="flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px]" />
                Express Boda Transit (1-Hour)
              </span>
<span className="text-on-surface font-medium">UGX 5,000</span>
</div>
<div className="pt-2 mt-1 flex justify-between items-baseline">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Total Settled</span>
<span className="font-label-sm text-label-sm text-tertiary font-extrabold flex items-center gap-0.5">
<Icon name="security" className="text-[13px]" /> Escrow Protected
                </span>
</div>
<span className="font-price-display text-price-display font-black text-on-surface">UGX 388,500</span>
</div>
</div>
</div>

<div className="rounded-xl bg-gradient-to-b from-surface-container-lowest to-surface-container-low p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase font-extrabold text-tertiary">Uganda E-Commerce SafePay</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Bank of Uganda Escrow Protocol</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Funds are securely locked in the <strong>SwiftCart Vault</strong> and will not be wired to merchants until you confirm receipt or 48 hours lapse after verified delivery inspection.
          </p>

<div className="flex flex-col gap-2 p-space-sm bg-surface-container-lowest rounded-lg">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<Icon name="check" className="text-[16px] text-tertiary" />
<span>100% Guaranteed Refund if goods are damaged or counterfeit</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<Icon name="check" className="text-[16px] text-tertiary" />
<span>Instant free return directly through courier at doorstep</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<a className="h-10 px-space-md rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px] text-primary" />
<span>Download Official Invoice (PDF)</span>
</a>
<a className="h-10 px-space-md rounded text-secondary hover:text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="storefront" className="text-[18px]" />
<span>Return to Marketplace</span>
</a>
</div>
</div>

<div className="p-space-sm text-center flex items-center justify-center gap-2 text-secondary font-body-sm text-body-sm">
<Icon name="support_agent" className="text-[18px]" />
<span>Need help? Dial Kampala Hotline: <strong>0800 220 330</strong> (Toll-Free)</span>
</div>
</div>
</div>
</div>


</div></main><footer className="w-full bg-surface-container-lowest mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg border-b border-surface-container-high"><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="verified_user" className="text-[32px] text-tertiary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</div><div className="font-body-sm text-body-sm text-secondary">100% payout security until delivery is confirmed</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="two_wheeler" className="text-[32px] text-primary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</div><div className="font-body-sm text-body-sm text-secondary">Rapid localized urban courier network</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="replay" className="text-[32px] text-tertiary" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</div><div className="font-body-sm text-body-sm text-secondary">Drop off returns at any verified hub in Uganda</div></div></div></div><div className="py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-secondary"><div className="flex flex-wrap items-center justify-center gap-space-md"><a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-primary transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="hover:text-primary transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="hover:text-primary transition-colors font-bold text-on-surface" data-path="merchant-registration" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="text-center">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
