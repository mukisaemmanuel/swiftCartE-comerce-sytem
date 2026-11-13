// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/search_results_filter_drawer_swiftcart_tablet/code.html
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
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 w-full px-margin-desktop max-w-[1440px] mx-auto flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-sm" data-path="marketplace-home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold">SwiftCart</span><span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded">UG</span></a><button className="hidden xl:flex items-center gap-space-xs text-left px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[20px]" /><div><p className="font-label-sm text-label-sm text-secondary">Deliver to</p><p className="font-label-md text-label-md text-on-surface truncate max-w-[130px]">Kampala Central</p></div></button></div><div className="flex-1 max-w-2xl mx-space-sm hidden md:flex items-center"><div className="w-full flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><select className="bg-transparent text-secondary font-label-md text-label-md px-space-sm py-2 rounded focus:outline-none cursor-pointer border-r border-outline-variant/30"><option value="all">All Categories</option><option value="electronics">Electronics &amp; Phones</option><option value="supermarket">Groceries &amp; Pantry</option><option value="fashion">Kampala Fashion</option><option value="appliances">Home Appliances</option><option value="hardware">Hardware &amp; Tools</option></select><div className="flex-1 flex items-center px-space-sm gap-space-xs"><Icon name="search" className="text-secondary text-[20px]" /><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search products, brands, local suppliers..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" title="Search by image" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button><button className="bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-2 rounded-lg hover:bg-primary transition-colors flex items-center justify-center shrink-0" onClick={() => alertToast('Action triggered')}>Search</button></div></div><nav className="flex items-center gap-space-sm shrink-0" data-active-classes="bg-surface-container text-primary font-bold rounded-lg"><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>Wishlist</a><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="verified-stores" href="#" onClick={() => alertToast('Action triggered')}>Stores</a><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="buyer-orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="notifications" href="#" title="Notifications" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full"></span></a><a className="relative flex items-center gap-space-xs px-space-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="shopping-cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.2 rounded-full min-w-[18px] text-center">3</span></div><span className="hidden xl:inline font-label-lg text-label-lg text-on-surface font-bold">Cart</span></a><div className="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/30"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold tracking-tight">SN</div></div></nav></div></header><main className="w-full pt-20 bg-surface min-h-[calc(100vh-320px)]"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-lowest shadow-sm pb-space-md pt-space-sm px-margin">
<div className="w-full max-w-[834px] mx-auto flex flex-col gap-space-xs">

<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs overflow-x-auto text-secondary py-1 no-scrollbar">
<a className="font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="home" className="text-[15px]" />Home
        </a>
<Icon name="chevron_right" className="text-[13px] opacity-40" />
<a className="font-label-md text-label-md hover:text-primary transition-colors whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Tech</a>
<Icon name="chevron_right" className="text-[13px] opacity-40" />
<a className="font-label-md text-label-md hover:text-primary transition-colors whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>Audio</a>
<Icon name="chevron_right" className="text-[13px] opacity-40" />
<span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[200px]">Wireless Noise Cancelling Headphones</span>
</nav>

<div className="flex items-center justify-between gap-space-sm mt-1">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Wireless Noise Cancelling Headphones</h1>
<span className="bg-primary/10 text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-bold">Kampala Verified</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse inline-block"></span>
<span className="font-semibold text-on-surface">142 Results</span> found across Kampala vendors &amp; instant logistics hubs
          </p>
</div>

<div className="hidden sm:flex items-center gap-space-xs bg-tertiary/10 text-tertiary px-space-sm py-1.5 rounded-lg shrink-0">
<Icon name="gavel" className="text-[18px]" />
<div className="text-left">
<p className="font-label-sm text-label-sm font-bold uppercase tracking-wide">SwiftSafe UG</p>
<p className="font-label-sm text-label-sm opacity-80 leading-none">Escrow Hold</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[834px] mx-auto px-margin py-space-md">
<div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-space-md items-start">

<aside className="flex flex-col gap-space-md bg-surface-container-lowest rounded-xl p-space-md shadow-sm">

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="tune" className="text-[20px] text-primary" />
<span className="font-headline-sm text-headline-sm text-on-surface">Filters</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline font-bold uppercase tracking-wider" id="clear-all-btn" onClick={() => alertToast('Action triggered')}>
            Clear All
          </button>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Applied Parameters:</span>
<div className="flex flex-wrap gap-1.5" id="active-filter-container">
<span className="inline-flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded text-on-surface font-label-sm text-label-sm shadow-xs group cursor-pointer hover:bg-error-container hover:text-on-error-container transition-colors">
              Free Boda Delivery
              <Icon name="close" className="text-[14px]" />
</span>
<span className="inline-flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded text-on-surface font-label-sm text-label-sm shadow-xs group cursor-pointer hover:bg-error-container hover:text-on-error-container transition-colors">
              In Stock in Kampala
              <Icon name="close" className="text-[14px]" />
</span>
<span className="inline-flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded text-on-surface font-label-sm text-label-sm shadow-xs group cursor-pointer hover:bg-error-container hover:text-on-error-container transition-colors">
              Price &lt; UGX 500k
              <Icon name="close" className="text-[14px]" />
</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-bold">Price Range (UGX)</label>
<span className="font-label-sm text-label-sm text-secondary">Local currency</span>
</div>

<div className="relative w-full h-6 flex items-center px-1">
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden relative">
<div className="absolute left-[3%] right-[32%] h-full bg-primary-container rounded-full"></div>
</div>
<div className="absolute left-[3%] w-4 h-4 bg-surface-container-lowest rounded-full shadow-md border-2 border-primary-container cursor-grab active:cursor-grabbing"></div>
<div className="absolute right-[32%] w-4 h-4 bg-surface-container-lowest rounded-full shadow-md border-2 border-primary-container cursor-grab active:cursor-grabbing"></div>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container-low px-2 py-1.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Min (UGX)</span>
<input className="w-full bg-transparent font-label-md text-label-md text-on-surface font-bold focus:outline-none" type="text" value="50,000" />
</div>
<div className="bg-surface-container-low px-2 py-1.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Max (UGX)</span>
<input className="w-full bg-transparent font-label-md text-label-md text-on-surface font-bold focus:outline-none" type="text" value="1,500,000" />
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold flex items-center justify-between">
            Kampala Delivery Speed
            <Icon name="electric_moped" className="text-[16px] text-tertiary" />
</span>
<div className="space-y-1.5">
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">1-Hour Boda Express</span>
</div>
<span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 rounded-full font-bold">24</span>
</label>
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Same-Day Kampala Metro</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-highest text-secondary px-1.5 py-0.5 rounded-full font-bold">88</span>
</label>
<label className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Pickup Station Locker</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-highest text-secondary px-1.5 py-0.5 rounded-full font-bold">142</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Top Audio Brands</span>
<div className="space-y-1">
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold">SoundCore</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">12</span>
</label>
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Sony</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">8</span>
</label>
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">JBL Professional</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">15</span>
</label>
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Bose</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">6</span>
</label>
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Oraimo</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">18</span>
</label>
<label className="flex items-center justify-between py-1 px-1 rounded hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Apple</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">4</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Seller Verification</span>
<div className="space-y-1.5">
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
<Icon name="verified" className="text-[16px] text-tertiary" />
                Verified Official Brand
              </span>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<span className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
<Icon name="storefront" className="text-[16px] text-secondary" />
                Local Kampala Merchant
              </span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Customer Feedback</span>
<label className="flex items-center gap-2 py-1 px-1 cursor-pointer">
<input checked={true} className="w-4 h-4 text-primary-container accent-primary-container" name="rating-filter" type="radio" />
<div className="flex items-center gap-1">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px] opacity-30" />
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">&amp; above</span>
</div>
</label>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Payment Methods</span>
<div className="space-y-1.5">
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">MTN &amp; Airtel MoMo</span>
<span className="font-label-sm text-label-sm text-secondary">Zero checkout fees</span>
</div>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary-container accent-primary-container" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Cash on Delivery</span>
<span className="font-label-sm text-label-sm text-secondary">Within Kampala Ring</span>
</div>
</label>
</div>
</div>
</aside>

<main className="flex flex-col gap-space-md min-w-0">

<div className="flex items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-secondary font-medium">Sort by:</span>
<div className="relative inline-block">
<select className="bg-surface-container-low text-on-surface font-label-md text-label-md font-bold px-3 py-1.5 pr-8 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-container" id="catalog-sort">
<option selected={true} value="recommended">Recommended</option>
<option value="price-asc">Price: Low to High</option>
<option value="newest">Newest Arrivals</option>
<option value="top-rated">Top Rated by Ugandans</option>
</select>
<Icon name="arrow_drop_down" className="text-[16px] absolute right-2 top-2 pointer-events-none text-secondary" />
</div>
</div>
<div className="flex items-center gap-1.5">

<div className="flex items-center bg-surface-container-low p-0.5 rounded-lg">
<button className="p-1 rounded bg-surface-container-lowest text-primary shadow-xs" title="Grid View" onClick={() => alertToast('Action triggered')}>
<Icon name="grid_view" className="text-[18px]" />
</button>
<button className="p-1 rounded text-secondary hover:text-on-surface" title="List View" onClick={() => alertToast('Action triggered')}>
<Icon name="view_list" className="text-[18px]" />
</button>
</div>
<div className="h-4 w-px bg-surface-container-highest mx-0.5 hidden sm:block"></div>

<div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-primary-fixed/60 text-on-primary-fixed font-label-sm text-label-sm font-bold">
<Icon name="bolt" className="text-[14px]" />
              Fast Boda Mode
            </div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm sm:gap-space-md">

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">

<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Space One ANC wireless over-ear headphones in elegant matte midnight black finish, soft memory foam ear cushions, displayed on a clean minimalist studio plinth with subtle ambient rim lighting matching high-tech product catalog imagery." src={`${assetBase}/images/355089be7e98e4bc.webp`} />

<span className="absolute top-2 left-2 bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                -20%
              </span>

<span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-xs text-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded shadow-xs font-bold flex items-center gap-0.5">
<Icon name="electric_moped" className="text-[13px]" /> 1h Boda
              </span>

<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>

<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>

<div className="flex items-center gap-1 mb-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="verified" className="text-[11px] text-tertiary-fixed-dim" /> SoundCore Official
                  </span>
</div>

<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  SoundCore Space One ANC
                </h3>

<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary">(214)</span>
</div>
</div>

<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-primary-container">
                    UGX 248,500
                  </p>
<p className="font-label-sm text-label-sm text-secondary line-through">
                    UGX 310,000
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Sony WH-1000XM5 noise cancelling premium headphones in platinum silver finish, soft leather headband, precision angled earcups resting on a modern brushed concrete pedestal, studio quality product photography with soft diffusion." src={`${assetBase}/images/667770137ce7afba.webp`} />

<span className="absolute top-2 left-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-0.5">
<Icon name="security" className="text-[12px]" /> Authentic
              </span>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="store" className="text-[11px] text-tertiary" /> Victoria Tech Supplies
                  </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  Sony WH-1000XM5 ANC
                </h3>
<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary">(412)</span>
</div>
</div>
<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-on-surface">
                    UGX 1,450,000
                  </p>
<p className="font-label-sm text-label-sm text-tertiary font-medium">
                    Free Kololo / CBD Delivery
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="JBL Tune 760NC deep blue wireless over-ear active noise cancelling headphones, foldable ergonomic hinge design, clean solid neutral studio backdrop with crisp rim light outlining the headphone silhouette." src={`${assetBase}/images/40d1b28a6287b3e3.webp`} />
<span className="absolute top-2 left-2 bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                -17%
              </span>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="local_mall" className="text-[11px] text-primary" /> Gadget Central
                  </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  JBL Tune 760NC Wireless Over-Ear
                </h3>
<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.7</span>
<span className="font-body-sm text-body-sm text-secondary">(98)</span>
</div>
</div>
<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-primary-container">
                    UGX 340,000
                  </p>
<p className="font-label-sm text-label-sm text-secondary line-through">
                    UGX 410,000
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Oraimo BoomPop 2 wireless bass headphones with glowing RGB accent lighting details, sleek metallic accents, urban styled product photography with warm golden hour studio backlight." src={`${assetBase}/images/d2ed582da506c177.webp`} />
<span className="absolute top-2 left-2 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Hot Seller
              </span>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="verified" className="text-[11px] text-tertiary-fixed-dim" /> Oraimo Official Store
                  </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  Oraimo BoomPop 2 Heavy Bass
                </h3>
<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.6</span>
<span className="font-body-sm text-body-sm text-secondary">(530)</span>
</div>
</div>
<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-on-surface">
                    UGX 165,000
                  </p>
<p className="font-label-sm text-label-sm text-secondary">
                    Same-day pickup
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Life Q30 hybrid active noise cancelling headphones in jet black with rose gold pivot logo badges, memory foam headband, crisp high key studio lighting showcasing detailed texture." src={`${assetBase}/images/0e54bd85cfde06e0.webp`} />

<span className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-xs text-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded shadow-xs font-bold flex items-center gap-0.5">
<Icon name="electric_moped" className="text-[13px]" /> 1h Boda
              </span>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="verified" className="text-[11px] text-tertiary-fixed-dim" /> SoundCore Uganda Official
                  </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  SoundCore Life Q30 Hybrid ANC
                </h3>
<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.8</span>
<span className="font-body-sm text-body-sm text-secondary">(389)</span>
</div>
</div>
<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-on-surface">
                    UGX 185,000
                  </p>
<p className="font-label-sm text-label-sm text-tertiary font-medium">
                    Express Dispatch
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>

<article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
<div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Anker Soundcore H30i ultra-lightweight on-ear wireless foldable headphones in modern pure white with silver metallic headband adjustments, clean bright photographic studio setup." src={`${assetBase}/images/400841dfab41c07c.webp`} />
<span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Value Choice
              </span>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/80 text-secondary hover:text-primary flex items-center justify-center transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[18px]" />
</button>
</div>
<div className="p-space-sm flex flex-col flex-1 justify-between gap-space-xs">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
<Icon name="store" className="text-[11px] text-tertiary" /> Anker Flagship
                  </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-2 leading-snug">
                  Anker Soundcore H30i Wireless On-Ear
                </h3>
<div className="flex items-center gap-1 mt-1 text-amber-500">
<Icon name="star" className="text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.7</span>
<span className="font-body-sm text-body-sm text-secondary">(144)</span>
</div>
</div>
<div className="pt-space-xs mt-auto flex items-end justify-between">
<div>
<p className="font-price-display text-price-display text-on-surface">
                    UGX 125,000
                  </p>
<p className="font-label-sm text-label-sm text-secondary">
                    MoMo Pay ready
                  </p>
</div>
<button className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center justify-center shadow-xs shrink-0" title="Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
</div>
</div>
</article>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col items-center gap-space-sm mt-space-xs">

<div className="w-full max-w-sm flex flex-col items-center gap-1">
<span className="font-body-sm text-body-sm text-secondary">
              Showing <span className="font-bold text-on-surface">6</span> of <span className="font-bold text-on-surface">142</span> Kampala Products
            </span>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mt-1">
<div className="bg-primary-container h-full rounded-full" style={{"width":"4.2%"}}></div>
</div>
</div>

<button className="w-full max-w-sm bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary font-label-lg text-label-lg py-2.5 px-space-lg rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-bold shadow-xs active:scale-[0.98]" onClick={() => alertToast('Action triggered')}>
<span>Load More Kampala Products</span>
<Icon name="expand_more" className="text-[18px]" />
</button>

<p className="font-label-sm text-label-sm text-secondary text-center flex items-center gap-1">
<Icon name="check_circle" className="text-[14px] text-tertiary" />
            All 142 listings physically verified in Kampala, Entebbe &amp; Wakiso warehouses
          </p>
</div>
</main>
</div>
</section>


</div></main><footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto"><div className="w-full max-w-[1440px] mx-auto px-margin-desktop py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-outline-variant/20"><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Ugandan Buyer Guarantee</h4><p className="font-body-sm text-body-sm text-secondary mt-1">100% genuine merchandise, escrow-protected payments, and vetted regional vendors.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0"><Icon name="local_shipping" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Hassle-Free Returns</h4><p className="font-body-sm text-body-sm text-secondary mt-1">7-day doorstep return pickup across Kampala, Entebbe, Wakiso, and Mukono metro.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-secondary-container text-secondary flex items-center justify-center shrink-0"><Icon name="support_agent" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Help &amp; Support</h4><p className="font-body-sm text-body-sm text-secondary mt-1">Dedicated 24/7 localized support via live toll-free line, WhatsApp, and Kampala help hub.</p></div></div><div className="flex flex-col justify-start"><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Accepted In Uganda</h4><p className="font-body-sm text-body-sm text-secondary mt-1 mb-space-sm">Instant checkout with national mobile wallets and cards:</p></div><div className="flex flex-wrap items-center gap-space-xs"><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#FFCC00]/20 text-[#6B5500] font-bold">MTN MoMo</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#E40000]/10 text-[#9E0000] font-bold">Airtel Money</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-secondary-container text-on-secondary-fixed font-bold">Visa</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container text-secondary font-bold">Cash on Delivery</span></div></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight">SwiftCart</span><span className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Lumumba Avenue, Nakasero, Kampala. All rights reserved.</span></div><div className="flex items-center gap-space-lg"><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection Policy</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="kampala-delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>Delivery Rates</a></div></div></div></footer>
    </div>
  );
};

export default Tablet;
