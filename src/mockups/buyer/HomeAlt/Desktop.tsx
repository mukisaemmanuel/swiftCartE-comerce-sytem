// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/home_marketplace_swiftcart_desktop_2/code.html
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

<section className="w-full mb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest min-h-[380px] lg:min-h-[440px] flex flex-col justify-between">

<div className="relative w-full h-full min-h-[380px] lg:min-h-[440px]" id="heroCarousel">

<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 flex flex-col justify-between p-space-xl bg-gradient-to-r from-surface-container-lowest via-surface-container-low/60 to-transparent z-10" data-slide="0">
<div className="absolute inset-0 -z-10 bg-cover bg-center" data-alt="High quality commercial studio shot of SoundCore Space One matte black active noise cancelling headphones floating in air with subtle warm orange rim lighting against an elegant minimal slate podium." style={{"backgroundImage":"url('/images/91f10cc7c5d00bde.webp')"}}></div>
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1 bg-primary text-on-primary font-label-md text-label-md px-space-md py-1 rounded-full uppercase tracking-wider">
<Icon name="bolt" className="text-[15px]" />
                Super Tech Week
              </span>
<span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md px-space-md py-1 rounded-full font-bold">
<Icon name="verified" className="text-[15px]" />
                SoundCore Uganda Official
              </span>
</div>
<div className="max-w-xl">
<span className="text-primary font-label-lg text-label-lg uppercase tracking-wider block mb-1">Authentic Gear Guarantee</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight mb-2">
                Up to 40% Off Genuine Audio &amp; Gadgets
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg max-w-md">
                SoundCore Space One ANC Headphones now available with verified warranty. Funds locked safely in Escrow until delivery.
              </p>
<div className="flex items-center gap-space-md flex-wrap">
<a className="inline-flex items-center gap-space-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-xl py-3 rounded-xl shadow-md transition-transform active:scale-95" data-path="tech-deal" href="#" onClick={() => alertToast('Action triggered')}>
<span>Shop Deal Now</span>
<Icon name="arrow_forward" className="text-[18px]" />
</a>
<div className="flex items-center gap-space-xs bg-surface-container-lowest/90 px-space-md py-2 rounded-lg shadow-sm">
<Icon name="verified_user" className="text-primary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Escrow Protected</span>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant">MTN &amp; Airtel Instant Pay</span>
</div>
</div>
</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-headline-md text-headline-md text-primary font-bold">248,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">UGX 380,000</span>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">-35%</span>
</div>
</div>

<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-between p-space-xl bg-gradient-to-r from-surface-container-lowest via-surface-container-low/70 to-transparent z-10" data-slide="1">
<div className="absolute inset-0 -z-10 bg-cover bg-center" data-alt="Vibrant bulk grocery display in Kampala wholesale packaging, sacks of clean pearl rice, pure cooking oil jerrycans, fresh market farm spices neatly arranged with warm sunshine and wooden textures." style={{"backgroundImage":"url('/images/22caa6e281e9bf5d.webp')"}}></div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 bg-tertiary text-on-tertiary font-label-md text-label-md px-space-md py-1 rounded-full uppercase">
<Icon name="store" className="text-[15px]" />
                Kikuubo Direct
              </span>
<span className="bg-surface-container-highest text-on-surface font-label-md text-label-md px-space-md py-1 rounded-full">Wholesale Quantities</span>
</div>
<div className="max-w-xl">
<span className="text-tertiary font-label-lg text-label-lg uppercase tracking-wider block mb-1">Direct Market Pricing</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight mb-2">
                Rice, Pure Cooking Oil &amp; Pantry Supplies
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg max-w-md">
                Genuine downtown rates delivered to your door. Inspect quality before sharing your 6-digit confirmation PIN.
              </p>
<div className="flex items-center gap-space-md">
<a className="inline-flex items-center gap-space-sm bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-lg text-label-lg px-space-xl py-3 rounded-xl shadow-md transition-transform active:scale-95" data-path="wholesale-deals" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse Kikuubo Store</span>
<Icon name="arrow_forward" className="text-[18px]" />
</a>
</div>
</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Rice Sacks starting at</span>
<span className="font-headline-md text-headline-md text-tertiary font-bold">UGX 145,000</span>
</div>
</div>

<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none flex flex-col justify-between p-space-xl bg-gradient-to-r from-surface-container-lowest via-surface-container-low/70 to-transparent z-10" data-slide="2">
<div className="absolute inset-0 -z-10 bg-cover bg-center" data-alt="SafeBoda courier wearing iconic orange and blue gear with branded delivery package securely strapped to modern motorcycle on sunny clean asphalt boulevard in Nakasero Kampala." style={{"backgroundImage":"url('/images/f6cf5503f6d0dae6.webp')"}}></div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 bg-secondary text-on-secondary font-label-md text-label-md px-space-md py-1 rounded-full uppercase">
<Icon name="two_wheeler" className="text-[15px]" />
                SafeBoda Dispatch
              </span>
<span className="bg-surface-container text-on-surface font-label-md text-label-md px-space-md py-1 rounded-full">1-Hour City Guarantee</span>
</div>
<div className="max-w-xl">
<span className="text-secondary font-label-lg text-label-lg uppercase tracking-wider block mb-1">Ultra-Fast Kampala Transit</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight mb-2">
                SafeBoda 60-Minute Urban Dispatch
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg max-w-md">
                Live GPS rider tracking across Kololo, Acacia, Bugolobi, Ntinda and Rubaga with a flat delivery tier of UGX 3,500.
              </p>
<div className="flex items-center gap-space-md">
<a className="inline-flex items-center gap-space-sm bg-secondary hover:bg-secondary/90 text-on-secondary font-label-lg text-label-lg px-space-xl py-3 rounded-xl shadow-md transition-transform active:scale-95" data-path="safeboda-fast" href="#" onClick={() => alertToast('Action triggered')}>
<span>Explore Express Fleet</span>
<Icon name="moped" className="text-[18px]" />
</a>
</div>
</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-label-md text-label-md text-on-surface-variant uppercase">Flat rate across Kampala:</span>
<span className="font-headline-md text-headline-md text-secondary font-bold">UGX 3,500</span>
</div>
</div>
</div>

<div className="absolute bottom-4 right-6 z-20 flex items-center gap-space-sm bg-surface-container-lowest/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
<button aria-label="Go to Slide 1 (Tech Week)" className="carousel-dot w-3 h-3 rounded-full bg-primary transition-all duration-300 ring-2 ring-primary ring-offset-2 scale-110" id="dot-0" onClick={() => alertToast('Action triggered')}></button>
<button aria-label="Go to Slide 2 (Kikuubo Direct)" className="carousel-dot w-2.5 h-2.5 rounded-full bg-tertiary transition-all duration-300 opacity-40 hover:opacity-100" id="dot-1" onClick={() => alertToast('Action triggered')}></button>
<button aria-label="Go to Slide 3 (SafeBoda Dispatch)" className="carousel-dot w-2.5 h-2.5 rounded-full bg-secondary transition-all duration-300 opacity-40 hover:opacity-100" id="dot-2" onClick={() => alertToast('Action triggered')}></button>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden flex-1 group hover:shadow-md transition-shadow">
<div className="absolute -right-4 -bottom-6 w-36 h-36 rounded-full bg-tertiary/10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-space-sm py-0.5 rounded font-bold uppercase tracking-wider">
<Icon name="local_mall" className="text-[14px]" />
                Wholesale Hub
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">DT Kampala</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 leading-snug">
              Kikuubo Bulk Oil, Rice &amp; Flour
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Save big with direct wholesale packs. Verified sellers with escrow release on delivery.
            </p>
</div>
<div className="relative z-10 flex items-center justify-between pt-space-xs">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant">5L Cooking Oil from</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 48,000</span>
</div>
<a className="inline-flex items-center gap-1 text-primary font-label-md text-label-md group-hover:translate-x-1 transition-transform" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>
<span>View Sacks</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between overflow-hidden flex-1 group hover:shadow-md transition-shadow">
<div className="absolute -right-4 -bottom-6 w-36 h-36 rounded-full bg-primary/10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary bg-primary-fixed/40 px-space-sm py-0.5 rounded font-bold uppercase tracking-wider">
<Icon name="bolt" className="text-[14px]" />
                SafeBoda Express
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">1 Hour Avg</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 leading-snug">
              Same-Day Dispatch Across Kampala
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Acacia, Ntinda, Kololo &amp; Rubaga deliveries directly to your doorstep.
            </p>
</div>
<div className="relative z-10 flex items-center justify-between pt-space-xs">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant">City Flat Rate</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">UGX 3,500</span>
</div>
<a className="inline-flex items-center gap-1 text-on-surface font-label-md text-label-md group-hover:translate-x-1 transition-transform" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}>
<span>Delivery Map</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Explore Kampala Marketplace</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Over 50,000 verified merchant listings ready for dispatch</span>
</div>
<a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" data-path="all-categories" href="#" onClick={() => alertToast('Action triggered')}>
<span>All 48 Sectors</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-md">

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-phones" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="smartphone" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Phones &amp; Tablets</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">8,420 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-audio" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="headphones" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Audio Gear</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">3,120 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-computers" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="laptop_mac" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Computers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">2,910 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-fashion" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="checkroom" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Kitenge &amp; Wear</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">11,200 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-fresh" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="nutrition" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Fresh Market</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">4,350 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-beauty" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary-container mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="spa" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Shea &amp; Beauty</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">6,180 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-appliances" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="iron" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Appliances</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">1,890 items</span>
</a>

<a className="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all" data-path="category-auto" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface mb-space-sm group-hover:scale-110 transition-transform">
<Icon name="two_wheeler" className="text-[30px]" />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1 group-hover:text-primary">Boda Spares</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">5,630 items</span>
</a>
</div>
</section>

<section className="w-full mb-space-xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-md mb-space-md bg-surface-container-low/40 -mx-space-lg -mt-space-lg p-space-lg rounded-t-xl">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs text-primary">
<Icon name="local_fire_department" className="text-[26px]" />
<h2 className="font-headline-md text-headline-md text-on-surface">Flash Deals</h2>
</div>
<span className="hidden sm:inline text-outline-variant">|</span>
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface">
<span className="text-on-surface-variant">Time Remaining:</span>
<div className="flex items-center gap-1 font-mono font-bold text-on-primary bg-primary px-space-sm py-1 rounded" id="flashCountdown">
<span>03</span>:<span>24</span>:<span>18</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-space-sm py-1 rounded-full font-bold">100% Escrow Protected</span>
<a className="font-label-md text-label-md text-primary hover:text-primary-container font-bold flex items-center gap-1" data-path="all-flash-deals" href="#" onClick={() => alertToast('Action triggered')}>
<span>See All Deals</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">

<div className="bg-surface rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-lowest">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">-35%</span>
<span className="absolute top-2 right-2 z-10 bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" />Express
            </span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte obsidian black on minimalist off-white surface." src={`${assetBase}/images/033032f65c800ed8.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-0.5">SoundCore Uganda</span>
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2 mb-space-xs group-hover:text-primary">
            SoundCore Space One ANC Headphones
          </h3>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 248,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through block mb-space-sm">UGX 380,000</span>
</div>
<div>
<div className="mb-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Claimed</span>
<span className="text-primary font-bold">18 / 25 left</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-space-sm">
<div className="bg-primary h-full rounded-full" style={{"width":"72%"}}></div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[16px]" />
<span>Add to Cart</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-lowest">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">-26%</span>
<span className="absolute top-2 right-2 z-10 bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" />Express
            </span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Oraimo FreePods 4 true wireless earbuds inside open charging case showing green acoustic indicator lights on clean stone backdrop." src={`${assetBase}/images/3ef603bad29c1f54.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-0.5">Victoria Tech</span>
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2 mb-space-xs group-hover:text-primary">
            Oraimo FreePods 4 ANC Earbuds
          </h3>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 145,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through block mb-space-sm">UGX 195,000</span>
</div>
<div>
<div className="mb-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Claimed</span>
<span className="text-primary font-bold">42 / 50 left</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-space-sm">
<div className="bg-primary h-full rounded-full" style={{"width":"84%"}}></div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[16px]" />
<span>Add to Cart</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-lowest">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">-14%</span>
<span className="absolute top-2 right-2 z-10 bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" />1 Yr
            </span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Samsung Galaxy A54 5G smartphone in awesome lime green color shown from front and sleek back camera triple lens array." src={`${assetBase}/images/460710e457900442.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-0.5">Victoria Tech</span>
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2 mb-space-xs group-hover:text-primary">
            Samsung Galaxy A54 5G 128GB
          </h3>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 1,120,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through block mb-space-sm">UGX 1,300,000</span>
</div>
<div>
<div className="mb-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Claimed</span>
<span className="text-primary font-bold">5 / 10 left</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-space-sm">
<div className="bg-primary h-full rounded-full" style={{"width":"50%"}}></div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[16px]" />
<span>Add to Cart</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-lowest">
<span className="absolute top-2 left-2 z-10 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">Organic</span>
<span className="absolute top-2 right-2 z-10 bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" />Express
            </span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Raw pure golden unrefined Ugandan nilotica shea butter in an eco-friendly amber container with dried botanical ingredients on textured linen." src={`${assetBase}/images/797521c8a07ca1c7.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-0.5">Pearl Naturals</span>
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2 mb-space-xs group-hover:text-primary">
            Nakaseke Raw Nilotica Shea Butter 500g
          </h3>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 35,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through block mb-space-sm">UGX 45,000</span>
</div>
<div>
<div className="mb-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Claimed</span>
<span className="text-tertiary font-bold">34 / 40 left</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-space-sm">
<div className="bg-tertiary h-full rounded-full" style={{"width":"85%"}}></div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[16px]" />
<span>Add to Cart</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-lowest">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">-22%</span>
<span className="absolute top-2 right-2 z-10 bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" />Express
            </span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Philips heavy classic dry iron with polished aluminum soleplate and black ergonomic handle on clean crisp iron board." src={`${assetBase}/images/dbc687570c592c38.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-0.5">Kikuubo Express</span>
<h3 className="font-label-lg text-label-lg text-on-surface line-clamp-2 mb-space-xs group-hover:text-primary">
            Philips Classic Heavy Dry Iron HD1172
          </h3>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 85,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through block mb-space-sm">UGX 110,000</span>
</div>
<div>
<div className="mb-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Claimed</span>
<span className="text-primary font-bold">12 / 15 left</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-space-sm">
<div className="bg-primary h-full rounded-full" style={{"width":"80%"}}></div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[16px]" />
<span>Add to Cart</span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Verified Ugandan Merchant Stores</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Inspected physical locations in Kampala with verified URSB business registration</span>
</div>
<a className="font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>
<span>Browse All Verified Stores</span>
<Icon name="storefront" className="text-[16px]" />
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary font-bold text-headline-sm overflow-hidden">
<Icon name="graphic_eq" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">SoundCore UG</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span>(420 orders)</span>
</div>
</div>
</div>
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm px- space-xs py-1 rounded-lg transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Follow
            </button>
</div>
<span className="inline-block bg-primary-fixed/30 text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold mb-space-sm">
            Official Brand Dealer
          </span>

<div className="grid grid-cols-3 gap-space-xs mb-space-sm">
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore earbuds mini thumbnail" src={`${assetBase}/images/0404a6139b31cacb.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore bluetooth portable speaker mini thumbnail" src={`${assetBase}/images/1b5dfc2bed874037.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore over ear headphones mini thumbnail" src={`${assetBase}/images/6addfa3c541271ba.webp`} />
</div>
</div>
</div>
<a className="text-center font-label-sm text-label-sm text-primary hover:text-primary-container font-bold pt-space-xs" data-path="store-soundcore" href="#" onClick={() => alertToast('Action triggered')}>
          Visit SoundCore Official →
        </a>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold text-headline-sm overflow-hidden">
<Icon name="memory" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Victoria Tech</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.8</span>
<span>(680 orders)</span>
</div>
</div>
</div>
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm px- space-xs py-1 rounded-lg transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Follow
            </button>
</div>
<span className="inline-block bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold mb-space-sm">
            Acacia Mall Annex, KLA
          </span>

<div className="grid grid-cols-3 gap-space-xs mb-space-sm">
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Anker fast charging power bank thumbnail" src={`${assetBase}/images/ae1a930e023840b9.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Type C nylon braided charging cable thumbnail" src={`${assetBase}/images/e9b4822f39a1a188.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Fast wireless magnetic charger dock thumbnail" src={`${assetBase}/images/c8940f0e53baa9eb.webp`} />
</div>
</div>
</div>
<a className="text-center font-label-sm text-label-sm text-primary hover:text-primary-container font-bold pt-space-xs" data-path="store-victoria-tech" href="#" onClick={() => alertToast('Action triggered')}>
          Visit Victoria Tech →
        </a>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary font-bold text-headline-sm overflow-hidden">
<Icon name="eco" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Pearl Naturals</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span>(1,140 orders)</span>
</div>
</div>
</div>
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm px- space-xs py-1 rounded-lg transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Follow
            </button>
</div>
<span className="inline-block bg-tertiary-fixed/30 text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold mb-space-sm">
            Organic Certified UG
          </span>

<div className="grid grid-cols-3 gap-space-xs mb-space-sm">
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Natural shea cold press oil jar thumbnail" src={`${assetBase}/images/52fb6b36eae6aef0.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Herbal African black soap bar thumbnail" src={`${assetBase}/images/3e36d5baed1b85be.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Pure moringa facial serum dropper bottle thumbnail" src={`${assetBase}/images/c1055d33f08af428.webp`} />
</div>
</div>
</div>
<a className="text-center font-label-sm text-label-sm text-primary hover:text-primary-container font-bold pt-space-xs" data-path="store-pearl-naturals" href="#" onClick={() => alertToast('Action triggered')}>
          Visit Pearl Naturals →
        </a>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-headline-sm overflow-hidden">
<Icon name="storefront" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Kikuubo Express</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.7</span>
<span>(3,890 orders)</span>
</div>
</div>
</div>
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm px- space-xs py-1 rounded-lg transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Follow
            </button>
</div>
<span className="inline-block bg-surface-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold mb-space-sm">
            Downtown Wholesale Lane
          </span>

<div className="grid grid-cols-3 gap-space-xs mb-space-sm">
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="5kg Pearl sugar sack thumbnail" src={`${assetBase}/images/eedd2d134f58bf7f.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Fortunet cooking oil jerrycan thumbnail" src={`${assetBase}/images/1fd192e964725f66.webp`} />
</div>
<div className="aspect-square rounded-lg bg-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Baking wheat flour bundle thumbnail" src={`${assetBase}/images/bcc663655cbf9754.webp`} />
</div>
</div>
</div>
<a className="text-center font-label-sm text-label-sm text-primary hover:text-primary-container font-bold pt-space-xs" data-path="store-kikuubo-express" href="#" onClick={() => alertToast('Action triggered')}>
          Visit Kikuubo Express →
        </a>
</div>
</div>
</section>

<section className="w-full mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Curated Marketplace Picks</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live stock in central Kampala warehouses with escrow lock</span>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1" id="productTabs">
<button className="tab-btn active bg-primary text-on-primary font-label-md text-label-md px-space-md py-2 rounded-lg transition-colors shrink-0 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
          Popular in Kampala
        </button>
<button className="tab-btn bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md px-space-md py-2 rounded-lg transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
          Electronics
        </button>
<button className="tab-btn bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md px-space-md py-2 rounded-lg transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
          Groceries
        </button>
<button className="tab-btn bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md px-space-md py-2 rounded-lg transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
          Local Fashion
        </button>
<button className="tab-btn bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md px-space-md py-2 rounded-lg transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
          Top Rated
        </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Fast</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Anker 20000mAh Power Bank with high capacity digital LED screen readout sitting on studio wood table." src={`${assetBase}/images/98ce4f79336dc6a1.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Victoria Tech</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            Anker PowerCore 20000mAh 20W PD
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.8</span>
<span>(132)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">165,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="moped" className="text-tertiary text-[14px]" />
<span>SafeBoda UGX 3,500</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Pure</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Premium Super Rice from Jinja 10kg sealed clean woven sack product shot." src={`${assetBase}/images/7974d844906bb01c.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Kikuubo Express</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            Super Basmati Grade Rice 10kg Sack
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span>(310)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">62,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="local_shipping" className="text-primary text-[14px]" />
<span>Escrow Checked</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-primary-container text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Kitenge</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Traditional handmade Ugandan Kitenge vibrant wax cotton tailored shirt with orange and navy geometric motifs." src={`${assetBase}/images/419c8c3a4a6dfe6d.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>AfriArtisan KLA</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            Authentic Tailored Kitenge Wax Shirt
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.7</span>
<span>(89)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">95,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="moped" className="text-tertiary text-[14px]" />
<span>SafeBoda UGX 3,500</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Official</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="SoundCore Motion Boom outdoor waterproof rugged Bluetooth speaker floating in crystal water." src={`${assetBase}/images/9bd0a1e82cdd4ff5.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>SoundCore UG</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            SoundCore Motion Boom Rugged IPX7
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">5.0</span>
<span>(214)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">430,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="verified_user" className="text-tertiary text-[14px]" />
<span>1-Yr Warranty</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Deal</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Modern cordless electric kettle 1.7L stainless steel body on black charging base." src={`${assetBase}/images/471a78d246fac71d.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Victoria Tech</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            Electric Stainless Fast Kettle 1.8L
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.6</span>
<span>(95)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">54,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="moped" className="text-tertiary text-[14px]" />
<span>SafeBoda UGX 3,500</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="relative aspect-square w-full rounded-lg overflow-hidden mb-space-sm bg-surface-container-low">
<span className="absolute top-2 left-2 z-10 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">100% Pure</span>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Pure unfiltered organic honey in glass jar with wooden honey dipper stick and honeycomb pieces." src={`${assetBase}/images/904ee4c9788b1a57.webp`} />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Pearl Naturals</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
<h3 className="font-label-md text-label-md text-on-surface line-clamp-2 mb-1 group-hover:text-primary">
            West Nile Raw Forest Honey 1kg Jar
          </h3>
<div className="flex items-center gap-1 mb-2 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="star" className="text-[#f59e0b] text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span>(440)</span>
</div>
<div className="mb-space-sm">
<span className="font-currency-code text-currency-code text-primary uppercase">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">32,000</span>
</div>
<div className="inline-flex items-center gap-1 bg-surface-container-low text-on-surface-variant px-1.5 py-0.5 rounded font-label-sm text-label-sm mb-space-sm">
<Icon name="moped" className="text-tertiary text-[14px]" />
<span>SafeBoda UGX 3,500</span>
</div>
</div>
<button className="w-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
<span>Add</span>
</button>
</div>
</div>
</section>

<section className="w-full mb-space-xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary shrink-0">
<Icon name="lock_reset" className="text-[26px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight mb-1">100% Escrow Release</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Payment is held securely in vault escrow. The merchant is paid only after you inspect and give the 6-digit confirmation code.
          </p>
</div>
</div>

<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
<Icon name="verified_user" className="text-[26px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight mb-1">URSB-Verified Sellers</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Every vendor profile is vetted via physical store inspection, national ID, and official business registration in Kampala.
          </p>
</div>
</div>

<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0">
<Icon name="moped" className="text-[26px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight mb-1">SafeBoda Dispatch</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Fast city-wide delivery within 60 minutes across Kampala, Entebbe road, and Mukono with live rider tracking.
          </p>
</div>
</div>

<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface shrink-0">
<Icon name="headset_mic" className="text-[26px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight mb-1">Kampala Desk Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Reach our Nakasero resolution team directly via toll-free phone or instant WhatsApp chat for instant order resolution.
          </p>
</div>
</div>
</div>
</section>

<section className="w-full mb-space-lg">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-space-lg">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Clarity &amp; Transparency</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-1">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Everything you need to know about buying with Escrow Protection in Uganda</p>
</div>
<div className="flex flex-col gap-space-sm" id="faqAccordion">

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button aria-expanded="false" className="faq-toggle w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span className="font-label-lg text-label-lg text-on-surface font-bold">How does SwiftCart Escrow work in Uganda?</span>
<Icon name="expand_more" className="text-on-surface-variant transform transition-transform duration-200" />
</button>
<div className="faq-content hidden px-space-lg pb-space-lg pt-0">
<p className="font-body-md text-body-md text-on-surface-variant">
              When you pay with MTN MoMo, Airtel Money, or Card, the payment does not go directly to the seller. Instead, funds are securely locked in an Escrow trust account. The merchant prepares and dispatches your order. Only when you receive the package, inspect it, and provide your delivery code is the payment released to the merchant.
            </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button aria-expanded="false" className="faq-toggle w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-bold">What is the 6-digit delivery confirmation code?</span>
<Icon name="expand_more" className="text-on-surface-variant transform transition-transform duration-200" />
</button>
<div className="faq-content hidden px-space-lg pb-space-lg pt-0">
<p className="font-body-md text-body-md text-on-surface-variant">
              Upon successful order placement, an encrypted 6-digit PIN is sent to your phone via SMS. When the SafeBoda rider or merchant delivery team arrives, open the package, verify that all items are in perfect condition, and then share this 6-digit code with the courier to complete the handoff.
            </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button aria-expanded="false" className="faq-toggle w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-bold">How fast is SafeBoda delivery in Kampala?</span>
<Icon name="expand_more" className="text-on-surface-variant transform transition-transform duration-200" />
</button>
<div className="faq-content hidden px-space-lg pb-space-lg pt-0">
<p className="font-body-md text-body-md text-on-surface-variant">
              SafeBoda Express orders are dispatched within 20 minutes from the merchant's physical location. Most deliveries across central Kampala, Kololo, Bugolobi, Acacia, and Rubaga are completed within 60 minutes for a flat subsidized rate of UGX 3,500.
            </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button aria-expanded="false" className="faq-toggle w-full p-space-lg flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Can I pay directly with MTN MoMo or Airtel Money?</span>
<Icon name="expand_more" className="text-on-surface-variant transform transition-transform duration-200" />
</button>
<div className="faq-content hidden px-space-lg pb-space-lg pt-0">
<p className="font-body-md text-body-md text-on-surface-variant">
              Yes. SwiftCart Uganda seamlessly integrates with MTN Mobile Money (*165#) and Airtel Money (*185#). During checkout, simply input your Ugandan phone number (+256) and an instant PIN approval push prompt will be sent directly to your phone. Zero hidden charges.
            </p>
</div>
</div>
</div>
</div>
</section>
</div>
</div></main><footer className="w-full bg-surface-container-low text-on-surface-variant mt-space-xl shadow-[0_-4px_20px_rgba(14,27,77,0.03)]"><div className="max-w-7xl mx-auto px-margin pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm font-bold text-primary">SwiftCart</span><span className="font-label-sm text-label-sm uppercase bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded font-bold">Uganda</span></div><p className="font-body-md text-body-md text-on-surface-variant">Kampala's high-trust online marketplace with 100% Genuine Escrow Protection. Every order is held secure until you inspect and verify delivery.</p><div className="flex flex-col gap-space-xs text-on-surface font-label-md text-label-md"><div className="flex items-center gap-space-xs"><Icon name="call" className="text-primary text-[18px]" /><span>+256 800 220 800 (Toll Free)</span></div><div className="flex items-center gap-space-xs"><Icon name="chat" className="text-tertiary text-[18px]" /><span>WhatsApp: +256 701 498 442</span></div><div className="flex items-start gap-space-xs"><Icon name="business" className="text-outline text-[18px]" /><span>Acacia Mall Annex &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">Customer Service</span><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="track-order" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track Your Order</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="escrow-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Escrow Refunds</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="payment-methods" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo &amp; Airtel Payment Options</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Swift Escrow Protection Policy</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Delivery Rates &amp; Speeds</a></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">About &amp; Business</span><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="about-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart Uganda</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="become-verified-seller" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Seller</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="safeboda-fleet" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Fleet</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="careers" href="#" onClick={() => alertToast('Action triggered')}>Careers in Kampala</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy &amp; Data Security</a><a className="hover:text-primary transition-colors font-body-md text-body-md" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a></div><div className="flex flex-col gap-space-md"><span className="font-headline-sm text-headline-sm text-on-surface font-bold">Payment &amp; Trust</span><div className="flex flex-wrap gap-space-xs"><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">MTN MoMo</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Airtel Money</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Visa</span><span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-md text-label-md shadow-sm">Mastercard</span></div><div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md"><Icon name="verified_user" className="text-tertiary text-[28px]" /><div><div className="font-label-lg text-label-lg font-bold text-on-surface">100% Escrow Protected</div><div className="font-body-sm text-body-sm text-on-surface-variant">Funds released only after inspection</div></div></div><div className="flex flex-col gap-space-xs"><span className="font-label-md text-label-md text-on-surface font-bold">Shop Faster on Mobile</span><div className="flex items-center gap-space-xs bg-surface-container-highest px-space-md py-space-xs rounded-lg text-on-surface font-body-sm text-body-sm"><Icon name="phone_android" className="text-[20px]" /><span>Download the SwiftCart App</span></div></div></div></div><div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm"><div className="text-on-surface-variant">© 2024 SwiftCart Uganda Ltd. Registered with URA &amp; URSB. All prices in UGX (Ugandan Shilling) with 0 decimals.</div><div className="flex items-center gap-space-md text-on-surface-variant"><span>Kampala Cloud Node (Active)</span><span>No Hidden Tariffs</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
