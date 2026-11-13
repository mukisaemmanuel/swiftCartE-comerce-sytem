// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/escrow_dispute_return_request_tablet/code.html
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
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md shrink-0"><a className="flex items-center gap-space-xs min-h-[48px] px-space-xs" data-path="home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline-block">SwiftCart</span></a><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest min-h-[48px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><Icon name="location_on" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[120px]">Kampala Central</span></div><Icon name="expand_more" className="text-secondary text-[16px]" /></div></div><div className="flex-1 max-w-xl mx-space-xs hidden sm:flex items-center min-h-[48px] rounded-lg bg-surface-container-lowest px-space-xs shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><select className="bg-transparent text-secondary font-label-md text-label-md pr-space-xs pl-space-xs py-space-xs border-0 focus:outline-none focus:ring-0 cursor-pointer"><option>All Categories</option><option>Phones &amp; Tablets</option><option>Electronics</option><option>Fashion</option><option>Groceries</option></select><div className="w-px h-6 bg-surface-container mx-space-xs"></div><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none px-space-xs" placeholder="Search products, merchants, brands in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button aria-label="Search" className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm min-h-[48px]"><Icon name="bolt" className="text-tertiary text-[18px]" /><span>Kampala Same-Day Dispatch</span></div><a aria-label="Wishlist" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">4</span></a><a aria-label="Shopping Cart" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></a><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden md:inline-block font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-space-lg overflow-x-auto h-12 border-0" data-active-classes="text-primary font-bold border-b-2 border-primary-container"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="phones-and-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="electronics-and-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="home-and-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background flex-1"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col gap-6">

<header className="flex flex-col gap-3">

<nav aria-label="Dispute Breadcrumb" className="flex items-center gap-1.5 flex-wrap text-secondary">
<a className="font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="home" className="text-[16px]" />
<span>Home</span>
</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="font-label-md text-label-md hover:text-primary transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>My Orders</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="font-label-md text-label-md hover:text-primary transition-colors" data-path="order-details" href="#" onClick={() => alertToast('Action triggered')}>Order #SC-ORD-9488</a>
<Icon name="chevron_right" className="text-[14px]" />
<span aria-current="page" className="font-label-md text-label-md text-on-surface font-semibold">Initiate Dispute</span>
</nav>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-sm">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Buyer Protection Protocol</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary">Uganda Legal Redress</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Escrow Dispute &amp; Return Request</h1>
</div>
<div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-tertiary-container/15 text-tertiary self-start sm:self-center shadow-xs">
<div className="relative flex items-center justify-center">
<Icon name="lock" className="text-[20px] text-tertiary" />
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
</div>
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-tertiary/80 uppercase leading-none font-bold">Escrow Active</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary leading-tight">UGX 388,500 Frozen</span>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 flex flex-col gap-6">

<section aria-labelledby="section-items" className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-bold">1</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold" id="section-items">Select Disputed Items</h2>
</div>
<span className="font-body-sm text-body-sm text-secondary">Choose items eligible for escrow claim</span>
</div>
<div className="flex flex-col gap-3">

<label className="group relative flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-container-low/60 cursor-pointer transition-all duration-200 hover:bg-surface-container-low" id="item-card-1">
<div className="pt-0.5">
<input checked={true} className="w-5 h-5 rounded accent-primary-container cursor-pointer transition-transform group-hover:scale-105" id="chk-item-1" type="checkbox" />
</div>
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-highest relative">
<img className="w-full h-full object-cover" data-alt="High quality studio shot of modern SoundCore Space One active noise cancelling wireless over-ear headphones in matte jet black finish resting on a subtle clean surface, crisp lighting" src={`${assetBase}/images/f2a1c4c883147b19.webp`} />
</div>
<div className="flex-1 min-w-0 flex flex-col gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 rounded bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm inline-flex items-center gap-1">
<Icon name="verified" className="text-[13px] text-tertiary-fixed" />
<span>SoundCore Official Store</span>
</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<Icon name="location_on" className="text-[14px]" />
                    Pioneer Mall, Kampala
                  </span>
</div>
<div className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                  SoundCore Space One ANC Headphones - Midnight Black
                </div>
<div className="flex items-center justify-between mt-0.5">
<span className="font-label-lg text-label-lg font-extrabold text-primary">UGX 235,000</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">Flagged for return</span>
</div>
</div>
</label>

<label className="group relative flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 cursor-pointer transition-all duration-200" id="item-card-2">
<div className="pt-0.5">
<input className="w-5 h-5 rounded accent-primary-container cursor-pointer transition-transform group-hover:scale-105" id="chk-item-2" type="checkbox" />
</div>
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-highest relative opacity-85">
<img className="w-full h-full object-cover" data-alt="Compact premium Baseus 65W GaN fast wall charger in metallic space grey with multiple USB-C ports on clean display background with soft studio shadows" src={`${assetBase}/images/cbe59842c431dacf.webp`} />
</div>
<div className="flex-1 min-w-0 flex flex-col gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Anker &amp; Baseus Hub
                  </span>
<span className="font-label-sm text-label-sm text-secondary">Kikuubo Plaza</span>
</div>
<div className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                  Baseus 65W GaN5 Pro USB-C Fast Charger
                </div>
<div className="flex items-center justify-between mt-0.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 153,500</span>
<span className="font-body-sm text-body-sm text-secondary">Verified intact by buyer</span>
</div>
</div>
</label>
</div>
</section>

<section aria-labelledby="section-reasons" className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-bold">2</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold" id="section-reasons">Reason for Dispute &amp; Return</h2>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">Select 1 Primary Reason</span>
</div>
<div aria-label="Dispute reason options" className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup">

<label className="relative flex items-center gap-3 p-3.5 rounded-xl bg-primary-fixed/30 cursor-pointer shadow-xs transition-all duration-150 transform hover:-translate-y-0.5" id="reason-opt-1">
<input checked={true} className="w-4 h-4 accent-primary-container cursor-pointer" name="dispute_reason" type="radio" value="seal_broken" />
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="broken_image" className="text-[19px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Item Damaged / Seal Broken</span>
<span className="font-body-sm text-body-sm text-secondary">Packaging torn or product crushed</span>
</div>
</label>

<label className="relative flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer shadow-xs transition-all duration-150 transform hover:-translate-y-0.5" id="reason-opt-2">
<input className="w-4 h-4 accent-primary-container cursor-pointer" name="dispute_reason" type="radio" value="counterfeit" />
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="gpp_bad" className="text-[19px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Counterfeit / Fake Item</span>
<span className="font-body-sm text-body-sm text-secondary">Serial number failure or knockoff</span>
</div>
</label>

<label className="relative flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer shadow-xs transition-all duration-150 transform hover:-translate-y-0.5" id="reason-opt-3">
<input className="w-4 h-4 accent-primary-container cursor-pointer" name="dispute_reason" type="radio" value="wrong_item" />
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="change_circle" className="text-[19px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Wrong Item Delivered</span>
<span className="font-body-sm text-body-sm text-secondary">Incorrect model, color or specs</span>
</div>
</label>

<label className="relative flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer shadow-xs transition-all duration-150 transform hover:-translate-y-0.5" id="reason-opt-4">
<input className="w-4 h-4 accent-primary-container cursor-pointer" name="dispute_reason" type="radio" value="missing" />
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="inventory_2" className="text-[19px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Missing from Package</span>
<span className="font-body-sm text-body-sm text-secondary">Accessories or item absent</span>
</div>
</label>

<label className="relative flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer shadow-xs transition-all duration-150 transform hover:-translate-y-0.5 sm:col-span-2" id="reason-opt-5">
<input className="w-4 h-4 accent-primary-container cursor-pointer" name="dispute_reason" type="radio" value="defective" />
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="power_off" className="text-[19px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Defective / Not Functioning</span>
<span className="font-body-sm text-body-sm text-secondary">Does not power on, hardware audio crackle, or Bluetooth pairing dead on arrival</span>
</div>
</label>
</div>
</section>

<section aria-labelledby="section-resolution" className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-bold">3</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold" id="section-resolution">Preferred Resolution</h2>
</div>
<div aria-label="Resolution options" className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup">

<label className="flex flex-col p-4 rounded-xl bg-primary-fixed/25 cursor-pointer relative transition-all" id="resolution-pill-1">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 accent-primary-container cursor-pointer" name="resolution_choice" type="radio" value="momo_refund" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Full Escrow Refund</span>
</div>
<Icon name="payments" className="text-[20px] text-primary" />
</div>
<p className="font-body-sm text-body-sm text-secondary pl-6">
                Direct instant payout to your verified MTN MoMo account (<span className="font-mono text-on-surface font-semibold">078*****92</span>) upon courier inspection.
              </p>
<div className="mt-3 pl-6 flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-semibold">
<Icon name="bolt" className="text-[16px]" />
<span>Immediate release after return scan</span>
</div>
</label>

<label className="flex flex-col p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer relative transition-all" id="resolution-pill-2">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<input className="w-4 h-4 accent-primary-container cursor-pointer" name="resolution_choice" type="radio" value="boda_replace" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Fast Boda Replacement</span>
</div>
<Icon name="two_wheeler" className="text-[20px] text-secondary" />
</div>
<p className="font-body-sm text-body-sm text-secondary pl-6">
                SoundCore Official Store dispatches a sealed brand new unit via express Kampala SafeBoda runner.
              </p>
<div className="mt-3 pl-6 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<Icon name="schedule" className="text-[16px]" />
<span>Estimated dispatch: 2 hours</span>
</div>
</label>
</div>
</section>

<section aria-labelledby="section-seal" className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-bold">4</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold" id="section-seal">Tamper Seal Bag Verification</h2>
</div>
<span className="px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="warning" className="text-[14px]" />
              Seal Reported Broken by Buyer
            </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Enter the 9-digit security code stamped on your SwiftCart orange tamper-proof delivery satchel to validate the packaging chain of custody.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
<div className="sm:col-span-2 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
<Icon name="qr_code_scanner" className="text-[20px]" />
</div>
<input aria-label="Tamper Seal Bag Number" className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono font-bold text-body-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="e.g. SC-TS-0000" type="text" value="SC-TS-4091" />
</div>
<div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-secondary font-body-sm text-body-sm">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span>Matched to Dispatch Rider #KLA-882</span>
</div>
</div>
</section>

<div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2">
<a className="w-full sm:w-auto px-5 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-lg text-label-lg font-bold text-center min-h-[48px] flex items-center justify-center" data-path="order-details" href="#" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
            Cancel &amp; Return to Order Details
          </a>
<button className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold min-h-[48px] shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<span>Proceed to Evidence Upload</span>
<Icon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
</button>
</div>
</div>

<aside aria-label="Dispute Escrow Details & Protection" className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between pb-3 border-b-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center">
<Icon name="account_balance" className="text-tertiary text-[20px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Escrow Protection Summary</h3>
<span className="font-label-sm text-label-sm text-secondary">Bank of Uganda Compliant NPS</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed/30 text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Protected</span>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-secondary">Total Order Value:</span>
<span className="font-label-md text-label-md font-bold text-on-surface">UGX 388,500</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-secondary">Disputed Item (SoundCore):</span>
<span className="font-label-md text-label-md font-bold text-primary">UGX 235,000</span>
</div>
<div className="flex justify-between items-center pt-2 border-t-0 bg-surface-container-highest/40 -mx-3.5 -mb-3.5 p-3.5 rounded-b-xl">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Total Amount in Freeze:</span>
<span className="font-body-sm text-body-sm text-secondary">Vendor cannot withdraw funds</span>
</div>
<span className="font-headline-sm text-headline-sm font-black text-tertiary">UGX 235,000</span>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-high flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold flex items-center gap-1">
<Icon name="timer" className="text-[16px] text-primary" />
                48-Hour Dispute Window
              </span>
<span className="font-label-sm text-label-sm font-bold text-primary">31 Hours Remaining</span>
</div>

<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-500" style={{"width":"64.5%"}}></div>
</div>
<div className="flex justify-between text-secondary font-label-sm text-label-sm">
<span>Delivered: Yesterday, 14:30</span>
<span>Closes: Tomorrow, 14:30</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="policy" className="text-[22px] text-tertiary" />
<h3 className="font-label-lg text-label-lg font-bold">Uganda Consumer Protection Guarantee</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
            Your transaction is governed strictly by the <strong className="text-on-surface">Uganda Electronic Transactions Act (2011)</strong> and the <strong className="text-on-surface">Uganda Digital Trade Framework</strong>. SwiftCart acts as a licensed impartial escrow fiduciary.
          </p>
<div className="grid grid-cols-2 gap-2 mt-1">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center gap-2">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">100% Money-Back</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center gap-2">
<Icon name="receipt_long" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">Zero Dispute Fees</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
<Icon name="route" className="text-[20px] text-primary" />
            Resolution Roadmap
          </h3>
<ol className="relative flex flex-col gap-4 pl-4 border-l-0">

<li className="relative flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 font-label-sm text-label-sm font-bold shadow-xs">
                1
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-primary">Step 1: File Request &amp; Freeze Payout</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Submit unboxing photo/video evidence. Escrow funds instantly locked. (Current Step)</span>
</div>
</li>

<li className="relative flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-label-sm text-label-sm font-bold">
                2
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Step 2: Merchant Response (24h)</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">SoundCore Official Store reviews proof and authorizes exchange or return.</span>
</div>
</li>

<li className="relative flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-label-sm text-label-sm font-bold">
                3
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Step 3: Free Return Boda &amp; Payout</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">A dispatch rider collects the item, and UGX 235,000 is transferred immediately to your MoMo.</span>
</div>
</li>
</ol>
</div>

<div className="p-4 rounded-xl bg-surface-container-highest/60 flex items-start gap-3 shadow-xs">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="support_agent" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Need immediate help?</span>
<span className="font-body-sm text-body-sm text-secondary">Call SwiftCart Legal Dispute Desk:</span>
<a className="font-label-lg text-label-lg font-extrabold text-primary hover:underline mt-0.5 flex items-center gap-1" href="tel:0800220330" onClick={() => alertToast('Action triggered')}>
<span>0800 220 330</span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Toll-Free</span>
</a>
</div>
</div>
</aside>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.03)] mt-auto"><div className="w-full px-gutter-desktop py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg"><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-tertiary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</span><span className="font-body-sm text-body-sm text-secondary">Funds secured until 100% item inspection</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-primary-container text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</span><span className="font-body-sm text-body-sm text-secondary">Express city hub runner direct to your doorstep</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="assignment_return" className="text-secondary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</span><span className="font-body-sm text-body-sm text-secondary">Drop off at Oasis Mall, Acacia, or Village Mall</span></div></div></div><div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-md"><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="font-label-md text-label-md text-primary font-bold hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
