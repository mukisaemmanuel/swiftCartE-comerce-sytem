// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/categories_mega_directory_swiftcart_desktop_2/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><a className="flex flex-col text-left" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span className="font-headline-sm text-headline-sm tracking-tight leading-none text-on-primary">SwiftCart</span><span className="font-label-sm text-label-sm tracking-wider uppercase text-primary-fixed-dim font-bold">Uganda Marketplace</span></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg">
<nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="font-label-md text-label-md text-on-surface font-semibold">All Categories &amp; Marketplace Directory</span>
</nav>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>14 DEPARTMENTS • ALL LIVE IN KAMPALA</span>
</div>
<div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span>Escrow Inspected Before Payment</span>
</div>
</div>
</div>

<section className="relative w-full bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm mb-space-xl overflow-hidden">
<div className="absolute -right-12 -top-12 w-96 h-96 rounded-full bg-gradient-to-br from-primary-fixed/40 via-surface-container-low/20 to-transparent blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-space-xs">
<Icon name="travel_explore" className="text-[16px]" />
          Official Uganda Commerce Directory
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
          Explore All 14 Departments &amp; 120+ Categories in Uganda
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
          Browse verified merchants across Central Kampala, Nakasero fresh produce, Kikuubo wholesale distributors, and official brand outlets. 100% Escrow Protected in UGX.
        </p>
</div>

<div className="w-full lg:w-96 shrink-0">
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1" htmlFor="categoryFilter">Live Filter Category</label>
<div className="relative flex items-center">
<Icon name="filter_alt" className="text-[20px] text-on-surface-variant absolute left-3 pointer-events-none" />
<input className="w-full h-12 pl-10 pr-10 bg-surface-container-low rounded-xl text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" id="categoryFilter" placeholder="Filter departments e.g. electronics, solar, kitenge..." type="text" />
<button className="absolute right-3 text-on-surface-variant hover:text-primary hidden" id="clearFilterBtn" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<p className="font-label-sm text-label-sm text-primary mt-1 hidden" id="searchCountFeedback"></p>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="stars" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Top Verified Brand Stores in Kampala</h2>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Direct Manufacturer Warranties</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-space-sm">

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-1">
<Icon name="headphones" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Anker</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Soundcore</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-1">
<Icon name="smartphone" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Samsung</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Official Hub</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface group-hover:scale-110 transition-transform mb-1">
<Icon name="devices" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Apple</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">iStore Resell</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform mb-1">
<Icon name="battery_charging_full" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Oraimo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Accessories</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-1">
<Icon name="mobile_friendly" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Tecno</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Camon &amp; Spark</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-1">
<Icon name="flash_on" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Infinix</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Hot &amp; Note</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-error-container/40 flex items-center justify-center text-error group-hover:scale-110 transition-transform mb-1">
<Icon name="tv" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">LG</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Smart OLED</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform mb-1">
<Icon name="kitchen" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Philips</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Domestic</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-tertiary-fixed/50 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform mb-1">
<Icon name="sanitizer" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Mukwano</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Oils &amp; Soap</span>
</a>

<a className="group flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-on-secondary-fixed group-hover:scale-110 transition-transform mb-1">
<Icon name="egg_alt" className="text-[20px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">Jesa</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Farm Fresh</span>
</a>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="bg-primary/10 text-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" />
            Official Brand Flagship
          </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">12 Mo. Warranty</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Official SoundCore Store</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Direct from manufacturer warehouse. Soundcore Q20i, Liberty 4 NC, and Boom 2 with Kampala service center guarantees.
        </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Starting from</span>
<span className="font-price-display text-price-display text-primary leading-tight">UGX 145,000</span>
</div>
<a className="inline-flex items-center gap-1 bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded-lg font-label-md text-label-md font-bold transition-all shadow-sm" href="#" onClick={() => alertToast('Action triggered')}>
<span>Shop SoundCore</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
            SafeBoda 90-Min Dispatch
          </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Fresh Daily</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Nakasero Direct Produce</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Harvest-fresh Matooke bunches, Masaka passion fruits, and farm greens packed at 5:00 AM. Guaranteed ripe and clean.
        </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bunch / Crate from</span>
<span className="font-price-display text-price-display text-tertiary leading-tight">UGX 22,000</span>
</div>
<a className="inline-flex items-center gap-1 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-space-md py-2 rounded-lg font-label-md text-label-md font-bold transition-all shadow-sm" href="#" onClick={() => alertToast('Action triggered')}>
<span>Explore Market</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="bg-secondary-fixed text-on-secondary-fixed px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="inventory_2" className="text-[14px]" />
            Bulk Price Tier
          </span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Save up to 35%</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Wholesale Kikuubo Hub</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Direct from Downtown Kampala importers. Cartons of soap, cooking oil jerricans, solar bundles, and bulk stationery.
        </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Min. Order Packs</span>
<span className="font-price-display text-price-display text-secondary leading-tight">UGX 85,000</span>
</div>
<a className="inline-flex items-center gap-1 bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary px-space-md py-2 rounded-lg font-label-md text-label-md font-bold transition-all shadow-sm" href="#" onClick={() => alertToast('Action triggered')}>
<span>Kikuubo Portal</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="flex items-center justify-between mb-space-lg">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Marketplace Department Directory</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Select any sub-category to view in-stock Kampala inventory with real-time seller escrow status.</p>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-md py-1 rounded-full">
<span>Click category to jump • Instant SafeBoda delivery tagged</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="departmentGrid">

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="phones tablets electronics chargers powerbanks smartphones accessories">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
<Icon name="phone_iphone" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Department 01</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Phones &amp; Tablets</h3>
</div>
</div>
<Icon name="devices" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Official Apple, Samsung, Tecno, Infinix, and genuine mobile power accessories.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Smartphones (iOS &amp; Android)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">1,420+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Feature Phones &amp; Kabambas</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">310+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Tablets &amp; iPads</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">285+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Power Banks (10k-50k mAh)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">490+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Chargers &amp; Braided Fast Cables</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">820+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Shockproof Cases &amp; Protectors</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">1,150+ items</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[16px]" />
<span>100% IMEI Verified</span>
</div>
<a className="text-primary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="tv audio sound soundbars speakers headphones electronics hifi radio screens">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center shrink-0">
<Icon name="tv" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Department 02</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">TV, Audio &amp; Electronics</h3>
</div>
</div>
<Icon name="speaker" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Immersive living room cinema, portable party speakers, and studio grade noise-cancelling headphones.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Headphones &amp; ANC Earbuds</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">640+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Bluetooth Portable Speakers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">390+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Smart TVs (32" to 85" 4K)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">210+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Home Theaters &amp; Subwoofers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">180+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Dolby Atmos Soundbars</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">130+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Radio, Boomboxes &amp; HiFi Systems</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">95+ items</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="local_shipping" className="text-[16px] text-primary" />
<span>Kampala Delivery in 3h</span>
</div>
<a className="text-secondary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="computing office laptops desktops monitors printers routers mifi wifi harddrives tech">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
<Icon name="laptop_mac" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Department 03</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Computing &amp; Office</h3>
</div>
</div>
<Icon name="print" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Laptops, enterprise desktops, 4G LTE routers, and high-speed data backup for business.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Laptops (HP, Dell, Lenovo, Mac)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">540+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">All-in-One &amp; Tower Desktops</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">160+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Computer Monitors &amp; Dual Screens</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">195+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Printers, Scanners &amp; Original Ink</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">310+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">WiFi Routers &amp; 4G/5G MiFi</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">270+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">External SSDs &amp; Hard Drives</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">420+ items</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="shield" className="text-[16px]" />
<span>Hardware Guarantee</span>
</div>
<a className="text-primary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="groceries nakasero food matooke potatoes rice vegetables cooking oil milk dairy fresh fruits">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/40 text-tertiary flex items-center justify-center shrink-0">
<Icon name="shopping_basket" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Department 04</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Fresh Groceries &amp; Nakasero</h3>
</div>
</div>
<Icon name="nutrition" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Hand-picked directly from Nakasero and local farms. Freshness guaranteed on arrival.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Matooke Bunches &amp; Gonja</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Fresh Daily</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Irish Potatoes, Cassava &amp; Yams</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Kabale Produce</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Super Rice, Maize &amp; Cereals</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Bulk Sacks</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Fresh Fruits &amp; Nakasero Greens</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Over 40 Varieties</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Cooking Oil (Fortune, Mukwano)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">1L to 20L Jerrycans</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Jesa Dairy, Fresh Eggs &amp; Cheeses</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Cold Chain</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="bolt" className="text-[16px]" />
<span>SafeBoda Express (Under 90 mins)</span>
</div>
<a className="text-tertiary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Shop Market</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="health beauty cosmetics shea butter skin hair braids perfume babycare oral care">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/30 text-primary-container flex items-center justify-center shrink-0">
<Icon name="spa" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Department 05</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Health, Beauty &amp; Care</h3>
</div>
</div>
<Icon name="clean_hands" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Authentic Northern Uganda Nilotica shea butter, dermatological skincare, and braids.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Organic Nilotica Shea Butter</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Pure Grade A</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Skin Care &amp; Sunscreens</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">850+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Hair Care, Braids &amp; Weaves</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Darling &amp; Lush</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Perfumes &amp; Body Deodorants</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Original Scents</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Oral Care &amp; Electric Brushes</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">140+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Baby Diapers &amp; Sensitive Care</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Huggies, Pampers</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>NDA / UNBS Certified</span>
</div>
<a className="text-primary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="fashion apparel clothing kitenge dresses sneakers shoes bags luggage watches jewelry">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 text-on-secondary-fixed-variant flex items-center justify-center shrink-0">
<Icon name="apparel" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Department 06</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Fashion &amp; Apparel</h3>
</div>
</div>
<Icon name="styler" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Authentic African Kitenge wax prints, contemporary Kampala streetwear, and footwear.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Men's Shirts, Suits &amp; Chinos</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">1,120+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Women's Kitenge &amp; Evening Dresses</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Trending</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Footwear, Loafers &amp; Sneakers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">940+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Leather Bags, Backpacks &amp; Luggage</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">430+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Watches &amp; Timeless Jewelry</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Casio, Curren</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="replay" className="text-[16px] text-tertiary" />
<span>Easy 3-Day Size Exchange</span>
</div>
<a className="text-secondary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="home kitchen appliances blenders microwaves kettles refrigerators irons cookers gas">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<Icon name="kitchen" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Department 07</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Home &amp; Kitchen</h3>
</div>
</div>
<Icon name="soup_kitchen" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Durable energy-efficient domestic essentials tested for Uganda voltage fluctuations.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Blenders &amp; Heavy Food Processors</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Commercial &amp; Home</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Microwave Ovens &amp; Air Fryers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">190+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Rapid Electric Kettles &amp; Dispensers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Stainless Steel</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Refrigerators &amp; Chest Freezers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Defrost &amp; Inverter</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Steam Irons &amp; Garment Steamers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Philips, Sayona</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified_user" className="text-[16px]" />
<span>2-Year Agent Warranty</span>
</div>
<a className="text-primary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="solar power backup inverters batteries panels lamps umeme stabilizers energy">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 text-on-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="solar_power" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Department 08</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Solar &amp; Power Backup</h3>
</div>
</div>
<Icon name="bolt" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Zero-blackout solutions engineered for Kampala and upcountry residences.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Mono Solar Panels (150W - 600W)</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">High Efficiency</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Hybrid Pure Sine Wave Inverters</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">1kVA to 10kVA</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Lithium LiFePO4 &amp; Gel Batteries</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">5,000+ Cycles</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Solar Floodlights &amp; Security Lamps</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Dusk-to-Dawn</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Automatic Voltage Stabilizers (AVR)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Protect TVs &amp; Fridges</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="engineering" className="text-[16px] text-tertiary" />
<span>Kampala Tech Installation</span>
</div>
<a className="text-tertiary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="department-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-dept="automotive safeboda spares motorcycle helmets boda oil lubes tyres tubes tools car hardware">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-error-container/40 text-primary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Department 09</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Automotive &amp; Boda Spares</h3>
</div>
</div>
<Icon name="build" className="text-outline-variant" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Certified safety gear, genuine Boxer/Bajaj replacement parts, engine lubricants, and tools.
          </p>
<ul className="space-y-space-xs mb-space-md">
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">DOT Certified Motorcycle Helmets</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">UNBS Approved</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Boda &amp; Car Engine Oils (Total, Shell)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">100% Genuine</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Tyres, Heavy-Duty Tubes &amp; Rims</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Boxer, TVS, Car</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Car Dashcams &amp; Phone Mounts</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">230+ items</span>
</a>
</li>
<li>
<a className="group/item flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span className="font-body-md text-body-md text-on-surface group-hover/item:text-primary group-hover/item:font-bold transition-all">Mechanic Toolsets &amp; Diagnostic Scanners</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover/item:text-primary">Hardware Grade</span>
</a>
</li>
</ul>
</div>
<div className="pt-space-sm flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="bolt" className="text-[16px]" />
<span>Boda Driver Pickup Ready</span>
</div>
<a className="text-primary font-label-md text-label-md font-bold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="hidden text-center py-16 bg-surface-container-lowest rounded-xl shadow-sm my-space-lg" id="noResultsState">
<Icon name="search_off" className="text-[48px] text-on-surface-variant/40 mb-space-xs" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">No Matching Departments Found</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1">
        Try searching for terms like "phones", "matooke", "solar", "soundcore", or "kikuubo".
      </p>
<button className="mt-space-md px-space-lg py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg font-bold" type="button" onClick={() => setDrawerOpen((prev) => !prev)}>
        Reset Directory Filter
      </button>
</div>
</section>

<section className="w-full bg-gradient-to-r from-surface-container-lowest via-surface-container-low to-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm mb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-md">
<Icon name="security" className="text-[32px]" />
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">100% Genuine Escrow Protection Across All Departments</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          When you pay via MTN MoMo or Airtel Money on SwiftCart, your money is held in regulated bank escrow. The vendor is paid only AFTER you unbox and verify delivery with the courier.
        </p>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-sm">
<a className="px-space-lg py-3 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-xl font-label-lg text-label-lg font-bold transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
        Read Escrow Terms
      </a>
<a className="px-space-lg py-3 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg font-bold transition-all shadow-md" href="#" onClick={() => alertToast('Action triggered')}>
        Start Shopping Now
      </a>
</div>
</section>

</div></div></main><footer className="w-full bg-surface-container-low text-on-surface-variant mt-space-xl shadow-[0_-4px_20px_rgba(14,27,77,0.03)]"><div className="max-w-7xl mx-auto px-margin pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm font-bold text-primary">SwiftCart</span><span className="font-label-sm text-label-sm uppercase bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded font-bold">Uganda</span></div><p className="font-body-md text-body-md text-on-surface-variant">Kampala's high-trust online marketplace with 100% Genuine Escrow Protection. Every order is held secure until you inspect and verify delivery.</p><div className="flex flex-col gap-space-xs text-on-surface font-label-md text-label-md"><div className="flex items-center gap-space-xs"><Icon name="call" className="text-primary text-[18px]" /><span>+256 800 220 800 (Toll Free)</span></div><div className="flex items-center gap-space-xs"><Icon name="chat" className="text-tertiary text-[18px]" /><span>WhatsApp: +256 701 498 442</span></div><div className="flex items-start gap-space-xs"><Icon name="business" className="text-outline text-[18px]" /><span>Acacia Mall Annex &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">Customer Service</span><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="track-order" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track Your Order</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="escrow-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Escrow Refunds</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="payment-methods" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo &amp; Airtel Payment Options</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Swift Escrow Protection Policy</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Delivery Rates &amp; Speeds</a></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">About &amp; Business</span><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="about-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart Uganda</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="become-verified-seller" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Seller</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="safeboda-fleet" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Fleet</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="careers" href="#" onClick={() => alertToast('Action triggered')}>Careers in Kampala</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy &amp; Data Security</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a></div><div className="flex flex-col gap-space-md"><span className="font-headline-sm text-headline-sm text-on-surface font-bold">Payment &amp; Trust</span><div className="flex flex-wrap gap-space-xs"><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">MTN MoMo</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Airtel Money</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Visa</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Mastercard</span></div><div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md"><Icon name="verified_user" className="text-tertiary text-[28px]" /><div><div className="font-label-lg text-label-lg font-bold text-on-surface">100% Escrow Protected</div><div className="font-body-sm text-body-sm text-on-surface-variant">Funds released only after inspection</div></div></div><div className="flex flex-col gap-space-xs"><span className="font-label-md text-label-md text-on-surface font-bold">Shop Faster on Mobile</span><div className="flex items-center gap-space-xs bg-surface-container-highest px-space-md py-space-xs rounded-lg text-on-surface font-body-sm text-body-sm"><Icon name="phone_android" className="text-[20px]" /><span>Download the SwiftCart App</span></div></div></div></div><div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm"><div className="text-on-surface-variant">© 2024 SwiftCart Uganda Ltd. Registered with URA &amp; URSB. All prices in UGX (Ugandan Shilling) with 0 decimals.</div><div className="flex items-center gap-space-md text-on-surface-variant"><span>Kampala Cloud Node (Active)</span><span>No Hidden Tariffs</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
