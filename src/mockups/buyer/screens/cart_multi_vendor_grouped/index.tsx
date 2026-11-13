// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/cart_multi_vendor_grouped/code.html
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
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-14 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-2"><img className="h-8 w-auto object-contain" src={`${assetBase}/images/e33678b5ab069170.webp`} alt="SwiftCart" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm tracking-tight text-on-secondary-fixed leading-none">SwiftCart</span><div className="flex items-center gap-space-xs mt-0.5 text-on-surface-variant"><Icon name="location_on" className="text-[14px] text-primary" /><span className="font-label-sm text-label-sm font-semibold">Nakawa, Kampala</span></div></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-margin py-space-sm flex items-center justify-between bg-surface">
<div className="flex items-center gap-space-sm">
<label className="relative flex items-center justify-center cursor-pointer select-none">
<input checked={true} className="peer sr-only" id="selectAllCheckbox" type="checkbox" />
<div className="w-5 h-5 rounded-lg bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary shadow-sm transition-all">
<Icon name="check" className="text-[16px] leading-none" />
</div>
</label>
<div className="flex flex-col">
<h1 className="font-headline-sm text-headline-sm text-on-secondary-fixed leading-tight">Shopping Cart</h1>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">3 items ready for delivery</span>
</div>
</div>
<button aria-label="Delete selected items" className="w-9 h-9 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-error flex items-center justify-center shadow-sm active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete_outline" className="text-[20px]" />
</button>
</div>
<div className="px-margin flex flex-col gap-space-lg mt-space-xs">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<label className="relative flex items-center justify-center cursor-pointer select-none">
<input checked={true} className="vendor-checkbox peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded-lg bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all">
<Icon name="check" className="text-[16px] leading-none" />
</div>
</label>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-lg text-label-lg text-on-secondary-fixed truncate">SoundCore Uganda Official</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[12px]" />
                Official Store
              </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Subtotal: <strong className="text-on-surface font-semibold">UGX 265,000</strong></span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start">
<label className="relative flex items-center justify-center cursor-pointer select-none pt-1">
<input checked={true} className="item-checkbox peer sr-only" type="checkbox" />
<div className="w-4 h-4 rounded-md bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all">
<Icon name="check" className="text-[13px] leading-none" />
</div>
</label>
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Sleek matte midnight black over-ear noise-cancelling headphones resting on a minimalist warm wood pedestal in a sunny Kampala tech showroom, modern Ugandan aesthetic." src={`${assetBase}/images/f5fa56a4aa5a1724.webp`} />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2">SoundCore Space One ANC Headphones</h3>
<button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Midnight Black</span>
<div className="flex items-center justify-between mt-2 pt-1">
<div className="flex flex-col">
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 265,000</span>
</div>

<div className="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
<button aria-label="Decrease quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-7 text-center font-label-md text-label-md text-on-surface">1</span>
<button aria-label="Increase quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
<div className="flex items-center gap-space-md mt-2 pt-1">
<button className="flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[14px]" />
              Move to Wishlist
            </button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container/60 p-space-md rounded-xl"><div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md"><div className="flex items-center gap-1.5"><Icon name="two_wheeler" className="text-primary text-[18px]" /><span className="">Swift Express boda dispatch</span></div><span className="font-bold text-on-surface">UGX 5,000</span></div><div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm"><Icon name="schedule" className="text-[14px] text-tertiary" /><span className="">Tomorrow by 2:00 PM to Nakawa</span></div><div className="mt-1 flex items-start gap-1.5 bg-tertiary-container/10 p-2 rounded-lg text-tertiary font-label-sm text-label-sm"><Icon name="verified_user" className="text-[16px] flex-shrink-0" /><span className="">Escrow Protected: your money is held by SwiftCart until you confirm delivery. Payments are processed by our secure payment partner.</span></div></div>

<div className="bg-surface-container-high/60 rounded-xl p-space-md flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold">
<Icon name="loyalty" className="text-[16px]" />
<span className="">Add UGX 35,000 more to get UGX 10,000 store voucher!</span>
</div>
</div>

<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary-container h-full rounded-full transition-all" style={{"width":"88%"}}></div>
</div>
<div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
<span className="">Current: UGX 265,000</span>
<span className="">Target: UGX 300,000</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<label className="relative flex items-center justify-center cursor-pointer select-none">
<input checked={true} className="vendor-checkbox peer sr-only" type="checkbox" />
<div className="w-5 h-5 rounded-lg bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all">
<Icon name="check" className="text-[16px] leading-none" />
</div>
</label>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-lg text-label-lg text-on-secondary-fixed truncate">Kikuubo Tech World</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
<Icon name="shield" className="text-[12px]" />
                Verified Store
              </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Subtotal: <strong className="text-on-surface font-semibold">UGX 115,000</strong></span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start">
<label className="relative flex items-center justify-center cursor-pointer select-none pt-1">
<input checked={true} className="item-checkbox peer sr-only" type="checkbox" />
<div className="w-4 h-4 rounded-md bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all">
<Icon name="check" className="text-[13px] leading-none" />
</div>
</label>
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="High capacity 20000mAh rugged matte textured portable power bank with fast charging status light illuminated on a bright studio setup in downtown Kampala." src={`${assetBase}/images/14bd4ea05690d0f3.webp`} />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2">Oraimo 20,000mAh Power Bank 22.5W</h3>
<button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SuperCharge Edition</span>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 65,000</span>
<div className="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
<button aria-label="Decrease quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-7 text-center font-label-md text-label-md text-on-surface">1</span>
<button aria-label="Increase quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
<div className="flex items-center gap-space-md mt-2 pt-1">
<button className="flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[14px]" />
              Move to Wishlist
            </button>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-start">
<label className="relative flex items-center justify-center cursor-pointer select-none pt-1">
<input checked={true} className="item-checkbox peer sr-only" type="checkbox" />
<div className="w-4 h-4 rounded-md bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all">
<Icon name="check" className="text-[13px] leading-none" />
</div>
</label>
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Heavy-duty 2-meter orange and charcoal braided USB-C fast charging cable coiled neatly on clean wooden table with warm sunny morning lighting." src={`${assetBase}/images/6f3a6082d6e1745e.webp`} />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2">Braided Type-C Fast Cable 2m</h3>
<button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">UGX 25,000 each</span>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 50,000</span>
<div className="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
<button aria-label="Decrease quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-7 text-center font-label-md text-label-md text-on-surface">2</span>
<button aria-label="Increase quantity" className="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
<div className="flex items-center gap-space-md mt-2 pt-1">
<button className="flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[14px]" />
              Move to Wishlist
            </button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container/60 p-space-md rounded-xl">
<div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-1.5">
<Icon name="local_shipping" className="text-secondary text-[18px]" />
<span className="">Standard dispatch</span>
</div>
<span className="font-bold text-on-surface">UGX 3,500</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="calendar_today" className="text-[14px] text-tertiary" />
<span className="">Within 2 days</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="confirmation_number" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Vouchers &amp; Discounts</span>
</div>
<button className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-0.5" type="button" onClick={() => alertToast('Action triggered')}>
          Available (2)
          <Icon name="chevron_right" className="text-[16px]" />
</button>
</div>

<div className="flex items-center justify-between bg-primary-fixed/30 rounded-xl p-space-md">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-sm">
            %
          </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-primary-fixed font-bold tracking-wide">KAMPALAFIRST</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold">Applied</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">UGX 15,000 platform welcome savings</span>
</div>
</div>
<button className="text-on-surface-variant hover:text-error text-label-sm font-semibold" type="button" onClick={() => alertToast('Action triggered')}>Remove</button>
</div>

<div className="flex items-center gap-space-sm">
<div className="relative flex-1 bg-surface-container-lowest rounded-xl flex items-center">
<Icon name="sell" className="text-on-surface-variant ml-3 text-[18px]" />
<input className="w-full h-12 bg-transparent pl-2 pr-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none uppercase" placeholder="Enter coupon or vendor code" type="text" />
</div>
<button className="h-12 px-5 bg-secondary text-on-secondary rounded-xl font-label-lg text-label-lg font-bold shadow-sm active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Apply
        </button>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Order Summary</h2>
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<span className="">Items Subtotal (3 items)</span>
<span className="text-on-surface font-semibold">UGX 380,000</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="">Multi-Vendor Delivery</span>
<span className="px-1.5 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full">2 sellers</span>
</div>
<span className="text-on-surface font-semibold">UGX 8,500</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-primary">
<span className="">Platform Voucher (KAMPALAFIRST)</span>
<span className="font-bold">-UGX 15,000</span>
</div>
<div className="h-px bg-surface-container my-1"></div>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-secondary-fixed">Total Amount</span>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1">
<Icon name="format_image_left" className="text-[14px]" />
            Escrow Protected
          </span>
</div>
<span className="font-headline-md text-headline-md text-primary-container">UGX 373,500</span>
</div>
</section>

<section className="mt-space-sm mb-4">
<div className="flex items-center justify-between mb-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kampala Essentials</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Frequently added by shoppers in Nakawa</p>
</div>
<Icon name="bolt" className="text-primary text-[20px]" />
</div>

<div className="flex gap-space-md overflow-x-auto pb-2 -mx-margin px-margin no-scrollbar">

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="w-full h-28 rounded-lg overflow-hidden bg-surface mb-2">
<img className="w-full h-full object-cover" data-alt="Portable solar lantern lamp with high efficiency solar cell plate compact outdoor light for home use in Uganda, warm sun ray aesthetic." src={`${assetBase}/images/03878cf7e6135fb3.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">Solar LED Emergency Lamp</span>
<span className="font-price-display text-price-display text-on-secondary-fixed mt-1">UGX 38,000</span>
<button className="mt-2 w-full h-8 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
            Add
          </button>
</div>

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="w-full h-28 rounded-lg overflow-hidden bg-surface mb-2">
<img className="w-full h-full object-cover" data-alt="Artisanal Uganda Mount Elgon arabica roasted specialty coffee beans pouch with traditional pattern branding on clean neutral backdrop." src={`${assetBase}/images/2396cd31c4102068.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">Elgon Arabica Roast 500g</span>
<span className="font-price-display text-price-display text-on-secondary-fixed mt-1">UGX 24,000</span>
<button className="mt-2 w-full h-8 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
            Add
          </button>
</div>

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="w-full h-28 rounded-lg overflow-hidden bg-surface mb-2">
<img className="w-full h-full object-cover" data-alt="Heavy duty electrical power surge extension extension socket strip 4-way with individual switch lamps on warm studio floor." src={`${assetBase}/images/395893a7af1ea335.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">Surge Guard Extension 4-Way</span>
<span className="font-price-display text-price-display text-on-secondary-fixed mt-1">UGX 45,000</span>
<button className="mt-2 w-full h-8 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
            Add
          </button>
</div>
</div>
</section>
</div>

<div className="sticky bottom-0 z-40 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(14,27,77,0.08)] px-margin py-space-sm flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs select-none">
<label className="relative flex items-center justify-center cursor-pointer">
<input checked={true} className="peer sr-only" id="bottomSelectAll" type="checkbox" />
<div className="w-5 h-5 rounded-lg bg-surface-container flex items-center justify-center peer-checked:bg-primary-container text-on-primary transition-all shadow-sm">
<Icon name="check" className="text-[16px] leading-none" />
</div>
</label>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">All (3)</span>
<span className="font-price-display text-price-display text-primary-container leading-none">UGX 373,500</span>
</div>
</div>

<button className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-98 transition-transform" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>
<span className="">Proceed to Checkout (3)</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(14,27,77,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#" onClick={() => alertToast('Action triggered')}><Icon name="home" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">Home</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">Categories</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors relative text-primary font-bold" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute -top-1 -right-2 bg-primary text-on-primary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></div><span className="font-label-sm text-label-sm mt-0.5">Cart</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors relative" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><div className="relative"><Icon name="favorite" className="text-[24px]" /><span className="absolute -top-1 -right-2 bg-secondary text-on-secondary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">5</span></div><span className="font-label-sm text-label-sm mt-0.5">Wishlist</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><Icon name="person" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-0.5">Account</span></a></div></nav>
    </div>
  );
};

export default Screen;
