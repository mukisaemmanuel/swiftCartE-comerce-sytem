// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/search_categories_swiftcart_tablet/code.html
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
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 max-w-[1440px] mx-auto px-margin md:px-margin-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-16"><div className="flex items-center gap-space-md shrink-0"><div className="flex items-center gap-space-xs"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight hidden sm:inline-block">SwiftCart</span></div><div className="hidden md:flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"><Icon name="location_on" className="text-primary text-[18px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm leading-none text-secondary">Deliver to</span><span className="font-label-md text-label-md leading-tight text-on-surface truncate max-w-[120px]">Kampala Central</span></div><Icon name="arrow_drop_down" className="text-[16px] text-secondary" /></div></div><div className="flex-1 max-w-2xl px-space-xs"><div className="flex items-center bg-surface-container-low rounded-lg p-1 transition-all focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#ff5722]"><button className="hidden sm:flex items-center gap-1 px-space-sm py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md shrink-0" type="button" onClick={() => alertToast('Action triggered')}><span className="truncate max-w-[90px]">All Goods</span><Icon name="expand_more" className="text-[16px]" /></button><div className="hidden sm:block w-[1px] h-5 bg-outline-variant my-auto"></div><input className="w-full px-space-sm py-1.5 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search millions of authentic products, brands, essentials..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="p-1 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" type="button" onClick={() => alertToast('Action triggered')}><Icon name="mic" className="text-[20px]" /></button><button className="ml-1 px-space-md py-1.5 bg-primary-container hover:bg-primary text-on-primary rounded font-label-md text-label-md flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /></button></div></div><div className="flex items-center gap-space-sm md:gap-space-md shrink-0"><a className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center justify-center" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm flex items-center justify-center">4</span></a><a className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center justify-center" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center">3</span></a><div className="flex items-center gap-2 pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary leading-none">Hello, Sarah</span><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Account</span></div></div></div></div><div className="flex items-center justify-between border-t border-surface-container-high/60 pt-1"><nav className="flex items-center gap-space-xs overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary rounded"><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-space-sm py-1 whitespace-nowrap transition-colors" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-space-sm py-1 whitespace-nowrap transition-colors" data-path="phones-and-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a aria-current="page" className="font-label-md px-space-sm py-1 whitespace-nowrap transition-colors bg-primary-container text-on-primary rounded" data-path="electronics-and-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-space-sm py-1 whitespace-nowrap transition-colors" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-space-sm py-1 whitespace-nowrap transition-colors" data-path="home-and-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-space-sm py-1 whitespace-nowrap transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav><div className="hidden md:flex items-center gap-space-sm shrink-0 pl-space-md"><span className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold"><Icon name="verified" className="text-[16px]" />Kampala Same-Day Dispatch</span></div></div></div></header><main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full">
<div className="w-full max-w-[1440px] mx-auto px-margin md:px-margin-desktop py-space-sm">

<div className="flex flex-col gap-space-xs pb-space-sm">
<nav className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<a className="hover:text-primary transition-colors flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="home" className="text-[16px]" />
          Home
        </a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a>
<Icon name="chevron_right" className="text-[14px] text-outline-variant" />
<span className="text-on-surface font-semibold truncate">Headphones &amp; Earphones</span>
</nav>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">
              Results for <span className="text-primary font-bold">"SoundCore Headphones"</span>
</span>
<span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm px-space-sm py-0.5 rounded-full">
              42 items found
            </span>
</div>

<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-secondary shrink-0 hidden sm:inline">Sort by:</span>
<div className="relative inline-block">
<select className="appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md pl-space-md pr-8 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer transition-shadow" id="sortSelector">
<option value="popular">Most Popular</option>
<option value="fastest">Fastest Delivery (1h Boda)</option>
<option value="price_asc">Price: Low to High</option>
<option value="price_desc">Price: High to Low</option>
</select>
<Icon name="expand_more" className="text-[18px] text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
</div>
</div>
</div>

<div className="flex items-center gap-space-xs flex-wrap pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Active:</span>
<div className="inline-flex items-center gap-1 bg-surface-container-lowest px-space-sm py-1 rounded-full text-on-surface font-label-sm text-label-sm shadow-sm">
<span>Query: SoundCore</span>
<button className="text-secondary hover:text-primary flex items-center" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[14px]" />
</button>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-lowest px-space-sm py-1 rounded-full text-on-surface font-label-sm text-label-sm shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Kampala Central Hub</span>
</div>
<div className="inline-flex items-center gap-1 bg-primary-fixed text-on-primary-fixed-variant px-space-sm py-1 rounded-full font-label-sm text-label-sm">
<Icon name="bolt" className="text-[13px]" />
<span>Express Boda Eligible</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-space-md lg:gap-space-lg items-start pt-space-xs">

<aside className="w-full md:w-[220px] md:sticky md:top-32 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-1.5 font-label-lg text-label-lg text-on-surface">
<Icon name="tune" className="text-primary text-[18px]" />
<span>Filters</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline cursor-pointer" id="resetFilters" type="button" onClick={() => alertToast('Action triggered')}>
            Clear All
          </button>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between">
            Delivery Speed
            <Icon name="electric_moped" className="text-[16px] text-tertiary" />
</span>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold flex items-center gap-1">
              Kampala 1-Hour Express
            </span>
</label>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Same Day Delivery</span>
</label>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input className="w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">Standard 24h Hub</span>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Price Range (UGX)</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Max 500k</span>
</div>
<input className="w-full accent-primary cursor-pointer h-1.5 bg-surface-container rounded-lg" max="600000" min="50000" step="10000" type="range" value="450000" />
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded px-2 py-1 flex flex-col">
<span className="font-label-sm text-label-sm text-secondary leading-none">Min UGX</span>
<span className="font-label-md text-label-md text-on-surface font-bold">50,000</span>
</div>
<div className="bg-surface-container-low rounded px-2 py-1 flex flex-col text-right">
<span className="font-label-sm text-label-sm text-secondary leading-none">Max UGX</span>
<span className="font-label-md text-label-md text-on-surface font-bold">500,000</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Vendor Trust</span>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold flex items-center gap-1">
<Icon name="verified_user" className="text-[15px] text-on-surface" />
              Official Brand Stores
            </span>
</label>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
<Icon name="check_circle" className="text-[15px] text-tertiary" />
              Top Rated (4.5+)
            </span>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Payment Protection</span>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold flex items-center gap-1">
<Icon name="shield" className="text-[15px] text-tertiary" />
              MoMo Instant Escrow
            </span>
</label>
<label className="flex items-center gap-space-xs py-1 cursor-pointer select-none">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">Pay at Kampala Hub</span>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Brand</span>
<div className="space-y-1">
<label className="flex items-center justify-between py-1 cursor-pointer select-none">
<div className="flex items-center gap-space-xs">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold">SoundCore</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">24</span>
</label>
<label className="flex items-center justify-between py-1 cursor-pointer select-none">
<div className="flex items-center gap-space-xs">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">Sony</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">12</span>
</label>
<label className="flex items-center justify-between py-1 cursor-pointer select-none">
<div className="flex items-center gap-space-xs">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">JBL</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">18</span>
</label>
<label className="flex items-center justify-between py-1 cursor-pointer select-none">
<div className="flex items-center gap-space-xs">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary">Apple</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">9</span>
</label>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-start gap-space-xs">
<Icon name="verified" className="text-[20px] text-tertiary shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
            SwiftCart MoMo Escrow locks seller funds until delivery confirmation in Uganda.
          </p>
</div>
</aside>

<section className="flex flex-col gap-space-md">

<div className="bg-surface-container-high rounded-xl px-space-md py-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<Icon name="local_shipping" className="text-primary text-[18px]" />
<span>Orders before 2:00 PM arrive in <strong>Kampala Central &amp; Entebbe</strong> today.</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-tertiary hidden sm:inline-block">98.4% On-Time Delivery</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-sm lg:gap-space-md">

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High-end SoundCore Space One matte black active noise cancelling over-ear headphones sitting on a minimal podium with studio spotlighting and warm orange rim light accents in commercial product photography style" src={`${assetBase}/images/568422a25a9fc944.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold shadow-sm">-20%</span>
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5 shadow-sm">
<Icon name="bolt" className="text-[11px] text-tertiary-fixed-dim" /> 1h Boda
                </span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="shield" className="text-[11px]" /> Official Store
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore Space One Active Noise Cancelling Headphones
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.8</span>
<span className="font-body-sm text-body-sm text-secondary">(142)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 310,000</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">248,500</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> Free Delivery Kampala
              </span>
</div>

<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Life Q30 wireless headphones in midnight blue resting on a modern desk with warm lighting and studio acoustic panels in background high clarity commercial framing" src={`${assetBase}/images/75cf5283be6b6ebb.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5 shadow-sm">
<Icon name="bolt" className="text-[11px] text-tertiary-fixed-dim" /> Express Boda
                </span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="shield" className="text-[11px]" /> SoundCore Official
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore Life Q30 Hybrid Active Noise Cancelling
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star_half" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.7</span>
<span className="font-body-sm text-body-sm text-secondary">(89)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary invisible">UGX 0</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">195,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="storefront" className="text-[14px]" /> Pioneer Mall Depot
              </span>
</div>
<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Space Q45 ultra premium silver and dark chrome noise cancelling headphones positioned dynamically with subtle soundwave reflections and high-end tech lighting" src={`${assetBase}/images/a5a08ef3073bd626.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold shadow-sm">Flagship</span>
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5 shadow-sm">
<Icon name="bolt" className="text-[11px] text-tertiary-fixed-dim" /> 1h Boda
                </span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="shield" className="text-[11px]" /> SoundCore Official
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore Space Q45 Ultra ANC Hi-Res Wireless
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary">(64)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 440,000</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">410,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> Free Delivery Uganda
              </span>
</div>
<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Liberty 4 NC true wireless earbuds shown open in glossy charging case with crisp metallic highlights and micro water drop reflections showing IPX4 rating" src={`${assetBase}/images/b9b3230d67390c3b.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold shadow-sm">Hot Seller</span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="verified" className="text-[11px] text-tertiary" /> Anker Audio Kampala
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore Liberty 4 NC Earbuds 98.5% Noise Reduction
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.8</span>
<span className="font-body-sm text-body-sm text-secondary">(210)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 320,000</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">280,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" /> Dispatches in 45 Mins
              </span>
</div>
<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore H30i lightweight compact foldable wireless on-ear headphones in pure white shown angled on clean architectural pedestal with soft daylight" src={`${assetBase}/images/41ad284d5ce73c37.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold shadow-sm">Budget Best</span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[11px] text-tertiary" /> Pioneer Mall Tech
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore H30i Wireless On-Ear Foldable 70H Playtime
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star_half" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.6</span>
<span className="font-body-sm text-body-sm text-secondary">(52)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary invisible">UGX 0</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">135,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> Standard 24h Delivery
              </span>
</div>
<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore VR P10 true wireless gaming earbuds with USB-C dongle transmitter illuminated with futuristic purple and orange ambient LED lights in esports setting" src={`${assetBase}/images/4832898d4c370f94.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5 shadow-sm">
<Icon name="bolt" className="text-[11px] text-tertiary-fixed-dim" /> 1h Boda
                </span>
</div>
<button aria-label="Add to Wishlist" className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
<Icon name="shield" className="text-[11px]" /> SoundCore Official
                </span>
<span className="bg-tertiary-fixed-dim text-on-tertiary-container font-label-sm text-label-sm px-1 py-0.5 rounded font-semibold">Escrow</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
                SoundCore VR P10 Low-Latency Wireless Gaming Earbuds
              </h3>
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star" className="text-[15px]" />
<Icon name="star_half" className="text-[15px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.5</span>
<span className="font-body-sm text-body-sm text-secondary">(38)</span>
</div>
<div className="pt-1 flex flex-col">
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 295,000</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary leading-tight">260,000</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="local_shipping" className="text-[14px]" /> Free Delivery Kampala
              </span>
</div>
<button className="mt-space-sm w-full min-h-[48px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Instant Buy</span>
</button>
</article>
</div>

<div className="mt-space-md bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm">
<div className="flex flex-col gap-1 items-start">
<span className="font-label-md text-label-md text-on-surface font-bold">
              Showing 6 of 42 audio gear items
            </span>
<div className="w-48 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-[14%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-space-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-none min-h-[48px] px-space-lg bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-label-lg text-label-lg rounded-lg shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all" id="loadMoreBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="autorenew" className="text-[20px]" />
<span>Load More Items (36)</span>
</button>
<button aria-label="Go to Top" className="w-12 h-12 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg shadow-sm flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_upward" className="text-[20px]" />
</button>
</div>
</div>
</section>
</div>

<div className="mt-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">MTN &amp; Airtel MoMo Escrow</span>
<span className="font-body-sm text-body-sm text-secondary">Pay securely upon pickup confirmation</span>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<Icon name="moped" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">1-Hour Kampala Boda Dispatch</span>
<span className="font-body-sm text-body-sm text-secondary">Real-time driver tracking to your door</span>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<Icon name="assignment_return" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">7-Day Free Hub Returns</span>
<span className="font-body-sm text-body-sm text-secondary">Drop off at Acacia Mall or Pioneer Mall</span>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-low mt-space-xl py-space-xl"><div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop"><div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg mb-space-xl"><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Shop &amp; Deliver</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Express Kampala Dispatch</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Entebbe &amp; Upcountry Hubs</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>SwiftCart Assurance</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Verified Merchants Directory</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Customer Support</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; FAQs</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track My Order</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Refunds</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Payment &amp; Trust</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo Escrow</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Airtel Money Secure</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Bank &amp; Visa Cards</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Cash on Collection Points</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Sell on SwiftCart</span><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Access millions of verified buyers across Uganda with zero listing friction.</p><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-semibold">Merchant Hub</span></div></div></div><div className="flex flex-col md:flex-row items-center justify-between pt-space-md border-t border-surface-container-high text-on-surface-variant font-body-sm text-body-sm"><p>© 2025 SwiftCart Uganda Ltd. Engineered for commercial velocity.</p><div className="flex items-center gap-space-md mt-space-sm md:mt-0"><span className="text-secondary">Uganda Shilling (UGX)</span><span className="text-secondary">•</span><span className="text-secondary">Region: Kampala / Central</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
