// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/cart_multi_vendor_tablet/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_2px_12px_rgba(15,23,42,0.06)]"><div className="h-28 max-w-6xl mx-auto px-4 flex flex-col justify-between py-2"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight hidden sm:inline">SwiftCart</span><button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[18px]" /><div className="flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[110px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px]" /></button></div><div className="flex-1 max-w-lg mx-2"><div className="flex items-center h-10 rounded-lg bg-surface-container-low px-2 gap-2 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant shrink-0 pr-2" onClick={() => alertToast('Action triggered')}><span>All Goods</span><Icon name="arrow_drop_down" className="text-[16px]" /></button><div className="w-px h-5 bg-outline-variant"></div><input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-secondary-container focus:outline-none" placeholder="Search authentic products, brands, essentials..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-8 px-3 rounded bg-primary-container text-on-primary flex items-center justify-center hover:opacity-95 transition-opacity" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /></button></div></div><div className="flex items-center gap-2.5 shrink-0"><div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-semibold"><Icon name="bolt" className="text-tertiary text-[15px]" /><span>Kampala Same-Day Dispatch</span></div><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">4</span></button><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></button><div className="flex items-center gap-2 pl-1"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden lg:inline font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary font-bold rounded-md shadow-sm"><a aria-current="page" className="px-3 py-1 whitespace-nowrap transition-colors bg-primary-container text-on-primary font-bold rounded-md shadow-sm" data-path="cart---multi-vendor-tablet" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="pickup-station-chooser-tablet" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="payment-methods-&-add-momo-tablet" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="mtn-momo-ussd-pin-prompt-tablet" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="home-&-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="max-w-6xl mx-auto px-4 py-4"><div className="flex flex-col w-full gap-5">

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-2.5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
<Icon name="electric_moped" className="text-[20px]" />
</div>
<p className="font-label-lg text-label-lg text-on-surface">
          Add <span className="font-bold text-primary-container">UGX 21,500</span> more for <span className="font-bold">FREE Kampala 1-Hour Boda Express</span>
</p>
</div>
<span className="font-label-sm text-label-sm text-on-secondary-container bg-surface-container px-2 py-0.5 rounded-full shrink-0">85% Unlocked</span>
</div>
<div className="relative w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full transition-all duration-500 ease-out" style={{"width":"85%"}}></div>
</div>
</div>

<div className="grid grid-cols-12 gap-5 items-start">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-4">

<section className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-4">

<div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-4 -mt-4 px-4 pt-3.5 rounded-t-xl">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg font-bold text-on-surface">SoundCore Uganda Official</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-semibold">
<Icon name="verified" className="text-[13px] text-tertiary-fixed" />
              Official Store
            </span>
<span className="text-on-secondary-container font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="storefront" className="text-[14px]" />
              Pioneer Mall G-14
            </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-md shadow-xs">
<Icon name="bolt" className="text-[14px]" /> Ready to pack
          </span>
</div>

<div className="flex flex-col sm:flex-row gap-3.5 pt-1">
<div className="relative w-24 h-24 rounded-lg bg-surface-container-low shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling over-ear headphones in sleek matte jet black finish resting on clean white studio pedestal with soft ambient rim lighting showcasing acoustic ear cushions" src={`${assetBase}/images/44622eee0f33b020.webp`} />
<span className="absolute top-1 left-1 bg-primary-container text-on-primary font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded shadow-sm">-20%</span>
</div>
<div className="flex-1 flex flex-col justify-between min-w-0">
<div className="flex flex-col gap-1">
<div className="flex items-start justify-between gap-2">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">SoundCore Space One ANC Headphones</h3>
<div className="text-right shrink-0">
<div className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 248,500</div>
<div className="font-body-sm text-body-sm text-secondary line-through">UGX 310,000</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Jet Black · 55h Playtime Battery · Hi-Res LDAC</p>

<div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-0.5 rounded w-max mt-0.5">
<Icon name="pace" className="text-[14px] text-tertiary" />
<span>Dispatches in 15 mins via Boda</span>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-3 mt-2 bg-surface-container-lowest">
<div className="inline-flex items-center bg-surface-container-low rounded-lg p-0.5">
<button aria-label="Decrease quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-8 text-center font-label-md text-label-md font-bold text-on-surface">1</span>
<button aria-label="Increase quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-3">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span className="hidden sm:inline">Save for Later</span>
</button>
<button className="font-label-md text-label-md text-error hover:opacity-80 flex items-center gap-1 transition-opacity" onClick={() => alertToast('Action triggered')}>
<Icon name="delete_outline" className="text-[16px]" />
<span>Remove</span>
</button>
</div>
</div>
</div>
</div>
<div className="h-px bg-surface-container"></div>

<div className="flex flex-col sm:flex-row gap-3.5">
<div className="relative w-24 h-24 rounded-lg bg-surface-container-low shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Anker 65W GaN dual port compact black USB-C and USB-A wall charger plug standing upright on a minimalist reflective reflective platform" src={`${assetBase}/images/5a7ba4ad94316fef.webp`} />
</div>
<div className="flex-1 flex flex-col justify-between min-w-0">
<div className="flex flex-col gap-1">
<div className="flex items-start justify-between gap-2">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">Anker 65W GaN Dual-Port Wall Charger</h3>
<div className="text-right shrink-0">
<div className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 115,000</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Matte Black · PIQ 3.0 Foldable UK Pin</p>
<div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded w-max mt-0.5">
<Icon name="inventory_2" className="text-[14px]" />
<span>In Stock at Pioneer Mall</span>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-3 mt-2">
<div className="inline-flex items-center bg-surface-container-low rounded-lg p-0.5">
<button aria-label="Decrease quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-8 text-center font-label-md text-label-md font-bold text-on-surface">1</span>
<button aria-label="Increase quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-3">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span className="hidden sm:inline">Save for Later</span>
</button>
<button className="font-label-md text-label-md text-error hover:opacity-80 flex items-center gap-1 transition-opacity" onClick={() => alertToast('Action triggered')}>
<Icon name="delete_outline" className="text-[16px]" />
<span>Remove</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low -mx-4 -mb-4 p-3.5 rounded-b-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container focus:ring-0" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface font-medium">Ship this vendor's items together (Single Boda)</span>
</label>
<div className="flex items-baseline gap-1 self-end sm:self-auto">
<span className="font-body-sm text-body-sm text-on-surface-variant">Vendor Subtotal:</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 363,500</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-4">

<div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-4 -mt-4 px-4 pt-3.5 rounded-t-xl">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Kampala Phone Hub</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
<Icon name="verified_user" className="text-[13px]" />
              Vetted Merchant
            </span>
<span className="text-on-secondary-container font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="location_on" className="text-[14px]" />
              William St Arcade
            </span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-1 rounded-md shadow-xs">
            Hub Collection Ready
          </span>
</div>

<div className="flex flex-col sm:flex-row gap-3.5 pt-1">
<div className="relative w-24 h-24 rounded-lg bg-surface-container-low shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Rugged matte clear protective bumper case for Samsung Galaxy smartphone with reinforced shock absorbing corners presented on clean tech aesthetic surface" src={`${assetBase}/images/eec31768a6cc753d.webp`} />
</div>
<div className="flex-1 flex flex-col justify-between min-w-0">
<div className="flex flex-col gap-1">
<div className="flex items-start justify-between gap-2">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">Samsung Galaxy A54 5G Clear Armor Case</h3>
<div className="text-right shrink-0">
<div className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 35,000</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rugged Matte · Anti-Yellowing Polymer</p>
<div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-secondary-container bg-surface-container px-2 py-0.5 rounded w-max mt-0.5">
<Icon name="store" className="text-[14px]" />
<span>Ready for William St Hub pickup</span>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-3 mt-2">
<div className="inline-flex items-center bg-surface-container-low rounded-lg p-0.5">
<button aria-label="Decrease quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-8 text-center font-label-md text-label-md font-bold text-on-surface">1</span>
<button aria-label="Increase quantity" className="h-7 w-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-xs active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-3">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span className="hidden sm:inline">Save for Later</span>
</button>
<button className="font-label-md text-label-md text-error hover:opacity-80 flex items-center gap-1 transition-opacity" onClick={() => alertToast('Action triggered')}>
<Icon name="delete_outline" className="text-[16px]" />
<span>Remove</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low -mx-4 -mb-4 p-3.5 rounded-b-xl flex items-center justify-end gap-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Vendor Subtotal:</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 35,000</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="recommend" className="text-primary-container text-[20px]" />
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Frequently Added Together</h4>
</div>
<span className="font-label-sm text-label-sm text-secondary">Free extra delivery with active order</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-12 h-12 rounded bg-surface-container-lowest overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Durable braided black USB-C to USB-C charging cable neatly coiled on solid studio background" src={`${assetBase}/images/b605c411e3916b60.webp`} />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md font-bold text-on-surface truncate">Anker Braided USB-C Cable</p>
<p className="font-label-sm text-label-sm text-primary font-bold">UGX 22,000</p>
</div>
</div>
<button className="px-2.5 py-1.5 rounded-md bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors text-label-sm font-label-sm font-bold shrink-0 flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[15px]" /> Add
            </button>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low gap-3">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-12 h-12 rounded bg-surface-container-lowest overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Tempered glass screen protector kit showing precise laser cut glass sheet with alignment frame accessories on soft blue gradient background" src={`${assetBase}/images/8b7caace1fbe407b.webp`} />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md font-bold text-on-surface truncate">9H Screen Protector Glass</p>
<p className="font-label-sm text-label-sm text-primary font-bold">UGX 15,000</p>
</div>
</div>
<button className="px-2.5 py-1.5 rounded-md bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors text-label-sm font-label-sm font-bold shrink-0 flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[15px]" /> Add
            </button>
</div>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-4 sticky top-32 flex flex-col gap-3">
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col gap-4">

<div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-4 -mt-4 px-4 pt-3.5 rounded-t-xl">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Order Summary</h2>
<span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-secondary-container">3 items</span>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider">Promotion Voucher</label>
<div className="flex items-center justify-between p-2 rounded-lg bg-tertiary-container/10">
<div className="flex items-center gap-2">
<Icon name="loyalty" className="text-tertiary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">KAMPALAFIRST</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">UGX 15,000 MoMo Launch Savings</span>
</div>
</div>
<button className="text-error font-label-sm text-label-sm font-bold hover:underline" onClick={() => alertToast('Action triggered')}>Remove</button>
</div>
</div>
<div className="h-px bg-surface-container"></div>

<div className="flex flex-col gap-2.5">
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<span>Items Subtotal</span>
<span className="text-on-surface font-semibold">UGX 398,500</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-tertiary">
<span className="flex items-center gap-1">
<Icon name="sell" className="text-[16px]" /> Voucher Discount
            </span>
<span className="font-bold">-UGX 15,000</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<div className="flex items-center gap-1">
<span>Delivery Fee</span>
<Icon name="info" className="text-[14px] text-secondary cursor-help" />
</div>
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 10,000</span>
<span className="text-on-surface font-semibold">UGX 5,000</span>
</div>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-on-surface-variant">
<div className="flex items-center gap-1">
<span>Escrow Protection Fee</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-surface-container px-1 rounded">SwiftCart Guarantee</span>
</div>
<span className="text-tertiary font-bold">FREE</span>
</div>
</div>
<div className="h-px bg-surface-container"></div>

<div className="flex items-baseline justify-between pt-0.5">
<div>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Total</span>
<p className="font-label-sm text-label-sm text-secondary">Inclusive of 18% Uganda VAT</p>
</div>
<div className="text-right">
<span className="font-price-display text-price-display font-black text-primary-container">UGX 388,500</span>
</div>
</div>

<button className="w-full h-12 bg-primary-container hover:bg-primary active:scale-[0.98] transition-all duration-150 rounded-xl text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>
<Icon name="lock" className="text-[20px]" />
<span>Proceed to Checkout (UGX 388,500)</span>
</button>

<div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container-low">
<Icon name="security" className="text-tertiary text-[20px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm text-on-surface-variant leading-snug">
<strong className="text-on-surface font-bold">Bank of Uganda Compliant Escrow.</strong> Funds released to vendors only after you inspect and provide the delivery release PIN.
          </p>
</div>

<div className="flex flex-col gap-2 pt-1">
<span className="font-label-sm text-label-sm text-secondary text-center uppercase tracking-wider font-semibold">Instant Secure Payment Via</span>
<div className="flex items-center justify-center gap-2 flex-wrap">
<div className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm font-extrabold text-on-surface flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[#fbc02d]"></span>
              MTN MoMo
            </div>
<div className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm font-extrabold text-on-surface flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[#e53935]"></span>
              Airtel Money
            </div>
<div className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm font-extrabold text-on-surface flex items-center gap-1">
<Icon name="credit_card" className="text-[16px]" />
              Visa / MC
            </div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<Icon name="support_agent" className="text-tertiary text-[18px]" />
<span>Have cart questions or need bulk quote?</span>
</div>
<a className="font-bold text-primary hover:underline flex items-center gap-0.5" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
          Live Help <Icon name="arrow_forward" className="text-[14px]" />
</a>
</div>
</div>
</div>
</div></div></main><footer className="w-full bg-surface-container-lowest mt-12 shadow-[0_-2px_12px_rgba(15,23,42,0.03)]"><div className="max-w-6xl mx-auto px-4 py-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8"><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Funds released only after inspection</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary"><Icon name="two_wheeler" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Direct to home, office, or central pickup hub</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary"><Icon name="assignment_return" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Hassle-free refunds across 42 pickup spots</p></div></div></div><div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4"><div className="flex flex-wrap gap-6 font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kampala Pickup Hubs</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>MoMo Payment Guarantee</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Uganda Merchant Portal</a><a className="hover:text-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; WhatsApp Support</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Registered under URA &amp; NITA-U. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
