// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/my_orders_order_detail_tablet/code.html
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

<div className="w-full max-w-7xl mx-auto px-margin py-space-md flex flex-col gap-space-md">

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
<Icon name="inventory_2" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">My Orders</span>
<span className="bg-primary/10 text-primary font-label-md text-label-md px-2 py-0.5 rounded-full font-bold">8</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Manage verified delivery status, live dispatch, and MoMo escrow releases</p>
</div>
</div>

<div className="relative w-full sm:w-80">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-secondary" />
<input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container focus:outline-none transition-all" placeholder="Search by order ID or product name..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs scrollbar-none">
<button className="px-space-md py-1.5 rounded-lg bg-on-secondary-fixed text-surface-container-lowest font-label-md text-label-md whitespace-nowrap shadow-sm font-bold flex items-center gap-1.5" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<span>All Orders</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest/20 font-label-sm text-label-sm">8</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>Active / In-Transit</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">2</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Completed</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">5</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Returns &amp; Disputes</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">1</span>
</button>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">

<div className="md:col-span-5 flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Recent Invoices</span>
<span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-0.5 cursor-pointer hover:underline">
<span>Filter</span>
<Icon name="tune" className="text-[16px]" />
</span>
</div>

<div className="relative bg-surface-container-lowest p-space-md rounded-xl shadow-md cursor-pointer transition-all ring-2 ring-primary-container">
<div className="absolute -left-1 top-4 bottom-4 w-1.5 bg-primary-container rounded-r"></div>
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">Active</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Today, 14:22 EAT</p>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span>⚡ Out for Delivery</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Close up of matte black premium over-ear headphones isolated with crisp studio lighting for modern Ugandan tech showcase" src={`${assetBase}/images/1e79d6bf18caac37.webp`} />
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="High tech compact multi-port GaN wall charger showing matte black finish and copper accents" src={`${assetBase}/images/0087720ebd870a02.webp`} />
</div>
<div className="min-w-0 flex-1 pl-1">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">SoundCore Space One + 1 other</p>
<p className="font-body-sm text-body-sm text-secondary truncate">2 items • Pioneer Mall + William St</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between border-t border-surface-container-high/60">
<div>
<div className="font-label-sm text-label-sm text-secondary uppercase font-bold">Total Paid</div>
<div className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-tight">UGX 388,500</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed/40 px-2 py-0.5 rounded">
<Icon name="two_wheeler" className="text-[13px]" />
<span>Mukasa (14 mins)</span>
</div>
<div className="font-body-sm text-body-sm text-secondary">MTN MoMo Escrow</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight">#SC-ORD-9412</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Yesterday, 11:15 EAT</p>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[14px]" />
<span>Collected at Hub</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Rugged high capacity black power bank with digital percentage LED readout in clean product photography" src={`${assetBase}/images/873d8c69c2246e3f.webp`} />
</div>
<div className="min-w-0 flex-1 pl-1">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Anker PowerBank 20,000mAh</p>
<p className="font-body-sm text-body-sm text-secondary truncate">1 item • William St Hub</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between border-t border-surface-container-high/60">
<div>
<div className="font-label-sm text-label-sm text-secondary uppercase font-bold">Total Paid</div>
<div className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-tight">UGX 145,000</div>
</div>
<div className="text-right">
<div className="font-body-sm text-body-sm text-secondary">MTN MoMo</div>
<div className="font-label-sm text-label-sm text-tertiary font-bold">Warranty active (6 mos)</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight">#SC-ORD-9205</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">12 Feb 2025</p>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[14px]" />
<span>Delivered &amp; Inspected</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Ergonomic white wireless earbuds resting in an open sleek charging box on a reflective slate surface" src={`${assetBase}/images/59921e8231bf593a.webp`} />
</div>
<div className="min-w-0 flex-1 pl-1">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Oraimo FreePods 4 ANC</p>
<p className="font-body-sm text-body-sm text-secondary truncate">1 item • Kololo Residence</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between border-t border-surface-container-high/60">
<div>
<div className="font-label-sm text-label-sm text-secondary uppercase font-bold">Total Paid</div>
<div className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-tight">UGX 89,000</div>
</div>
<div className="text-right">
<div className="font-body-sm text-body-sm text-secondary">Airtel Money</div>
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Buyer Rating: ★ 5.0</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight">#SC-ORD-8940</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">02 Feb 2025</p>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold">
<Icon name="currency_exchange" className="text-[14px]" />
<span>Dispute Resolved</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">100W Magnetic USB-C Braided Cable</p>
<p className="font-body-sm text-body-sm text-secondary">Refunded to SwiftCart Wallet</p>
</div>
<div className="text-right shrink-0">
<div className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">UGX 115,000</div>
<div className="font-label-sm text-label-sm text-tertiary font-bold">Credit Added</div>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low text-center font-body-sm text-body-sm text-secondary">
          Showing 4 of 8 total orders across Kampala Hubs
        </div>
</div>

<div className="md:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs border-b border-surface-container-high">
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Order #SC-ORD-9488</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Escrow Active</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Placed on Friday, 14 Feb 2025 at 14:22 EAT • Payment: MTN Mobile Money</p>
</div>

<div className="flex items-center gap-space-xs shrink-0 pt-1 sm:pt-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[16px]" />
<span>Receipt</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-bold flex items-center gap-1 shadow-sm transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="repeat" className="text-[16px]" />
<span>Reorder All</span>
</button>
</div>
</div>

<div className="bg-gradient-to-r from-primary-fixed-dim/30 via-primary-fixed/20 to-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<Icon name="sports_motorsports" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Courier Approaching</span>
<span className="font-label-sm text-label-sm bg-primary-container text-on-primary px-2 py-0.5 rounded-full font-bold">14 Mins Away</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Boda Rider is <strong>1.4 km away</strong> in Kamwokya approaching Kololo round-about.
                  </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest/90 backdrop-blur-sm rounded-lg p-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm">
<div>
<div className="flex items-center gap-1">
<Icon name="lock" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md text-on-surface font-bold">Secure Delivery Release PIN</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Share code with Mukasa Brian ONLY after inspecting items</p>
</div>

<div className="flex items-center gap-1">
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">4</div>
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">0</div>
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">9</div>
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">8</div>
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">8</div>
<div className="w-8 h-9 rounded bg-surface-container font-headline-sm text-headline-sm font-extrabold text-primary flex items-center justify-center shadow-inner">1</div>
<button className="ml-1 w-9 h-9 rounded bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center" title="Show QR Code" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="pt-space-xs pb-1">
<div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-space-sm">Dispatch Progress</div>
<div className="relative flex items-start justify-between">

<div className="absolute top-4 left-6 right-6 h-1 bg-surface-container-high -z-0">
<div className="h-full bg-primary-container" style={{"width":"70%"}}></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[80px]">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-[14px] shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface mt-1.5 leading-tight">Paid</span>
<span className="font-body-sm text-body-sm text-secondary scale-90">14:22</span>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[80px]">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-[14px] shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface mt-1.5 leading-tight">Packed</span>
<span className="font-body-sm text-body-sm text-secondary scale-90">14:35</span>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[90px]">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary ring-4 ring-primary-fixed flex items-center justify-center font-bold text-[14px] shadow-sm">
<Icon name="two_wheeler" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-bold text-primary-container mt-1.5 leading-tight">With Rider</span>
<span className="font-body-sm text-body-sm text-primary font-semibold scale-90">14:48 (Live)</span>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[80px]">
<div className="w-8 h-8 rounded-full bg-surface-container text-secondary flex items-center justify-center font-bold text-[14px]">
<Icon name="home" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-semibold text-secondary mt-1.5 leading-tight">Delivered</span>
<span className="font-body-sm text-body-sm text-secondary scale-90">Est. 15:05</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Items in This Package (2 Items)</span>
<span className="font-label-sm text-label-sm text-secondary">Consolidated by SwiftCart Pioneer Hub</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="store" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md font-bold text-on-surface">SoundCore Uganda Official</span>
<span className="px-1.5 py-0.2 rounded bg-on-secondary-fixed text-surface-container-lowest font-label-sm text-label-sm font-bold">Official Store</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Pioneer Mall G-14</span>
</div>
<div className="flex items-center justify-between gap-space-sm pt-space-xs bg-surface-container-lowest p-space-xs rounded">
<div className="flex items-center gap-space-sm">
<div className="w-14 h-14 rounded-lg bg-surface-container shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One Active Noise Cancelling matte black over ear headphones sitting on an oak audio desk setup" src={`${assetBase}/images/f9d82bc5b8b3c249.webp`} />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">SoundCore Space One ANC Headphones</h4>
<div className="font-body-sm text-body-sm text-secondary">Jet Black • Hi-Res LDAC Wireless • 40h Battery</div>
<div className="font-label-sm text-label-sm text-tertiary font-bold mt-0.5 flex items-center gap-1">
<Icon name="check" className="text-[14px]" />
<span>Dispatched with Rider Mukasa</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<div className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 235,000</div>
<div className="font-body-sm text-body-sm text-secondary">Qty: 1</div>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="verified_user" className="text-[18px] text-tertiary-container" />
<span className="font-label-md text-label-md font-bold text-on-surface">Simba Telecom Direct</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Verified Merchant</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">William St Arcade</span>
</div>
<div className="flex items-center justify-between gap-space-sm pt-space-xs bg-surface-container-lowest p-space-xs rounded">
<div className="flex items-center gap-space-sm">
<div className="w-14 h-14 rounded-lg bg-surface-container shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Compact Baseus 65W GaN wall charger showing fast charging dual USB-C ports with sleek industrial aesthetic" src={`${assetBase}/images/09491fe40be698eb.webp`} />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">Baseus 65W GaN5 Pro Fast Charger</h4>
<div className="font-body-sm text-body-sm text-secondary">Matte Black • Dual USB-C + 1 USB-A 3.0</div>
<div className="font-label-sm text-label-sm text-tertiary font-bold mt-0.5 flex items-center gap-1">
<Icon name="check" className="text-[14px]" />
<span>Dispatched with Rider Mukasa</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<div className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 145,000</div>
<div className="font-body-sm text-body-sm text-secondary">Qty: 1</div>
</div>
</div>
</div>

<div className="pt-space-xs border-t border-surface-container-high/60 flex flex-col gap-1 font-body-sm text-body-sm">
<div className="flex justify-between text-secondary">
<span>Items Subtotal</span>
<span className="text-on-surface font-semibold">UGX 380,000</span>
</div>
<div className="flex justify-between text-secondary">
<span>1-Hour Express Boda Delivery (Kamwokya to Kololo)</span>
<span className="text-on-surface font-semibold">UGX 8,500</span>
</div>
<div className="flex justify-between text-secondary">
<span>MoMo Buyer Protection &amp; Escrow Guarantee</span>
<span className="text-tertiary font-bold">FREE (UGX 0)</span>
</div>
<div className="flex justify-between text-on-surface font-bold pt-1 border-t border-surface-container-high text-body-lg">
<span>Total Paid via MTN MoMo</span>
<span className="text-primary font-extrabold">UGX 388,500</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<Icon name="location_on" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">Delivery Address</span>
</div>
<div className="pt-1">
<p className="font-label-lg text-label-lg font-bold text-on-surface">Dennis Mukasa</p>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Plot 14 Acacia Avenue, Kololo</p>
<p className="font-body-sm text-body-sm text-secondary">Kampala Central, Uganda</p>
<p className="font-body-sm text-body-sm text-on-surface font-semibold mt-1">Note: Hand over to reception if not in office</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-primary">
<Icon name="badge" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">Boda Courier</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Verified SwiftRider</span>
</div>
<div className="pt-1 flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-low shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of an African delivery courier wearing a branded safety helmet and reflective commercial vest with an approachable smile" src={`${assetBase}/images/a56c21c3f7fce302.webp`} />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Mukasa Brian</p>
<p className="font-body-sm text-body-sm text-secondary">+256 701 445 892</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-bold">Bajaj Boxer UEF 842X</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">★ 4.9 (420)</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center gap-space-sm justify-between">
<div className="flex items-center gap-space-xs text-secondary font-body-sm text-body-sm">
<Icon name="shield" className="text-[20px] text-tertiary" />
<span>Escrow funds held securely until PIN validation</span>
</div>
<div className="flex items-center gap-space-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px]" />
<span>Contact Rider</span>
</button>
<button className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-98" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[20px]" />
<span>Track Live on Map</span>
</button>
</div>
</div>

<div className="flex items-center justify-between px-2 text-secondary font-body-sm text-body-sm">
<span>Need to modify instructions or request return?</span>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<span>Open Dispute / Kampala Hub Support</span>
<Icon name="arrow_forward" className="text-[14px]" />
</a>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-lowest mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg border-b border-surface-container-high"><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="verified_user" className="text-[32px] text-tertiary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</div><div className="font-body-sm text-body-sm text-secondary">100% payout security until delivery is confirmed</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="two_wheeler" className="text-[32px] text-primary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</div><div className="font-body-sm text-body-sm text-secondary">Rapid localized urban courier network</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="replay" className="text-[32px] text-tertiary" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</div><div className="font-body-sm text-body-sm text-secondary">Drop off returns at any verified hub in Uganda</div></div></div></div><div className="py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-secondary"><div className="flex flex-wrap items-center justify-center gap-space-md"><a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-primary transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="hover:text-primary transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="hover:text-primary transition-colors font-bold text-on-surface" data-path="merchant-registration" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="text-center">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
