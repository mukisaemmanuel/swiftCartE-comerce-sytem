// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/home_swiftcart_marketplace_2/code.html
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
  const [bannerSlide, setBannerSlide] = useState(0);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
@keyframes eqBar {
  0%, 100% { height: 4px; }
  50% { height: 13px; }
}
.animate-eq-1 { animation: eqBar 0.8s ease-in-out infinite; }
.animate-eq-2 { animation: eqBar 1.1s ease-in-out 0.2s infinite; }
.animate-eq-3 { animation: eqBar 0.7s ease-in-out 0.4s infinite; }
.animate-eq-4 { animation: eqBar 0.95s ease-in-out 0.15s infinite; }


    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart Logo" className="h-8 w-auto object-contain flex-shrink-0" src={`${assetBase}/brand/logo-full.png`} /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><Icon name="location_on" className="text-primary text-[14px]" /><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider truncate">Deliver to Alex</span></div><button className="flex items-center gap-space-xs text-left group" onClick={() => alertToast('Action triggered')}><span className="font-label-md text-label-md text-on-surface font-bold truncate">Lagos / NY</span><Icon name="keyboard_arrow_down" className="text-on-surface-variant text-[14px] group-hover:text-primary transition-colors" /></button></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container transition-colors text-on-surface" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="User Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={`${assetBase}/images/8c1af1850934fb96.webp`} /></button></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="px-margin pt-space-sm pb-space-xs">
<div className="relative flex items-center bg-surface-container-low rounded-xl shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all duration-200">
<div className="pl-3.5 pr-2 text-on-surface-variant flex items-center justify-center">
<Icon name="search" className="text-[20px] text-primary" />
</div>
<input aria-label="Search products from global verified vendors" className="w-full py-3 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search 10M+ products from global verified vendors..." type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<div className="flex items-center gap-1 pr-2 text-on-surface-variant flex-shrink-0">
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant active:scale-95" title="Search by Photo" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[20px]" />
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant active:scale-95" title="Voice Search" onClick={() => alertToast('Action triggered')}>
<Icon name="mic" className="text-[20px]" />
</button>
</div>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="flex items-center justify-between bg-surface-container-high px-3.5 py-2 rounded-lg">
<div className="flex items-center gap-2 min-w-0">
<div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
<Icon name="local_shipping" className="text-on-primary text-[14px]" />
</div>
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-md text-label-md text-primary font-bold whitespace-nowrap">Free Shipping</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">over UGX 100,000 • Guaranteed 2-3 Day SwiftExpress</span>
</div>
</div>
<Icon name="bolt" className="text-primary text-[16px] flex-shrink-0 ml-1" />
</div>
</section>

<section className="px-margin py-space-sm relative group/hero" id="hero-carousel-section">

<div className="relative overflow-hidden rounded-2xl shadow-md bg-inverse-surface">
<div className="flex w-full transition-transform duration-500 ease-out" id="hero-carousel-track" style={{ transform: `translateX(-${bannerSlide * 100}%)` }}>

{/* Slide 1: Super Tech Week with Interactive Video Preview */}
<div className="w-full flex-shrink-0 relative overflow-hidden bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-primary text-on-primary p-4 min-h-[185px] flex flex-col justify-between select-none">
<div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-tertiary-container/25 blur-2xl pointer-events-none"></div>
<div className="absolute bottom-0 right-1/3 w-28 h-28 rounded-full bg-primary-container/20 blur-xl pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5 bg-tertiary-container/30 backdrop-blur-md px-2.5 py-1 rounded-full text-on-primary border border-tertiary-fixed/30">
<Icon name="memory" className="text-[14px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm uppercase tracking-wide font-extrabold">SUPER TECH WEEK</span>
</div>
<div className="inline-flex items-center gap-1.5 bg-inverse-surface/85 backdrop-blur-md px-2.5 py-1 rounded-full text-inverse-on-surface shadow-sm">
<Icon name="bolt" className="text-[13px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm font-bold tracking-tight text-tertiary-fixed">GaN &amp; Audio Drop</span>
</div>
</div>

<div className="relative z-10 my-2 flex items-center justify-between gap-2">
<div className="max-w-[62%]">
<div className="inline-block bg-secondary/40 backdrop-blur-sm text-tertiary-fixed font-label-sm text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 tracking-wider uppercase">
              Anker, Baseus &amp; Keychron
            </div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold leading-tight tracking-tight drop-shadow-sm text-on-primary">
              Super Tech Week • Up to 60% Off
            </h2>
<p className="font-body-sm text-body-sm text-on-primary/90 mt-1 font-medium leading-snug line-clamp-1">
              Next-gen 65W chargers, mechanical keys &amp; ANC headphones
            </p>
</div>

<button aria-label="Play 4K Tech Showcase Video Preview" className="group/vid relative flex-shrink-0 flex flex-col items-center bg-inverse-surface/80 hover:bg-inverse-surface/95 border border-tertiary-fixed/40 hover:border-tertiary-fixed backdrop-blur-md rounded-xl p-2 shadow-lg transition-all duration-300 active:scale-95 text-left w-32 cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>

<div className="absolute inset-0 rounded-xl bg-tertiary-container/20 group-hover/vid:bg-tertiary-container/35 blur-md -z-10 transition-colors"></div>

<div className="w-full flex items-center justify-between gap-1 pb-1.5 border-b border-surface-container-lowest/15">
<div className="flex items-center gap-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
</span>
<span className="font-label-sm text-[9px] uppercase tracking-wider font-extrabold text-tertiary-fixed">LIVE DEMO</span>
</div>
<span className="font-label-sm text-[8px] font-bold text-surface-container-lowest/80 bg-surface-container-lowest/15 px-1 py-0.2 rounded">4K</span>
</div>

<div className="relative w-full h-12 mt-1.5 rounded-lg overflow-hidden bg-surface-container-highest/20 flex items-center justify-center border border-surface-container-lowest/10">
<img alt="Tech Video Preview" className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-80 group-hover/vid:scale-105 transition-all duration-300" src={`${assetBase}/images/db55f4634ea49c5a.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>

<div className="relative z-10 flex items-center justify-center">
<span className="absolute w-7 h-7 rounded-full bg-tertiary-fixed/30 animate-ping"></span>
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-md group-hover/vid:scale-110 transition-transform">
<Icon name="play_arrow" className="text-[15px] pl-0.5" />
</div>
</div>

<div className="absolute bottom-1 right-1.5 z-10 flex items-end gap-0.5 h-3">
<span className="w-0.5 bg-tertiary-fixed rounded-full animate-eq-1"></span>
<span className="w-0.5 bg-tertiary-fixed rounded-full animate-eq-2"></span>
<span className="w-0.5 bg-tertiary-fixed rounded-full animate-eq-3"></span>
<span className="w-0.5 bg-tertiary-fixed rounded-full animate-eq-4"></span>
</div>
</div>

<div className="w-full flex items-center justify-between text-[9px] text-surface-container-lowest/85 font-medium mt-1">
<span className="font-label-sm font-semibold truncate text-[9px]">Watch in Action</span>
<span className="font-label-sm text-[8px] opacity-75 font-mono">0:45</span>
</div>
</button>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-surface-container-lowest/15">
<div className="flex items-center gap-2 flex-wrap">
<button className="bg-tertiary-container text-on-surface font-label-md text-label-md px-3.5 py-1.5 rounded-full shadow-sm font-extrabold flex items-center gap-1.5 active:scale-95 transition-transform hover:opacity-90" onClick={() => alertToast('Action triggered')}>
<span className="">Explore Tech Deals</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
<div className="inline-flex items-center gap-1 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-full">
<Icon name="local_offer" className="text-tertiary-fixed text-[12px]" />
<span className="font-label-sm text-[10px] font-bold tracking-tight">Use Code <span className="text-tertiary-fixed font-extrabold underline">TECH60</span></span>
</div>
</div>
</div>
</div>

{/* Slide 2: Mega Brand Sale */}
<div className="w-full flex-shrink-0 relative overflow-hidden bg-gradient-to-r from-primary via-primary-container to-surface-tint text-on-primary p-4 min-h-[185px] flex flex-col justify-between select-none">
<div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-surface-container-lowest/20 blur-2xl pointer-events-none"></div>
<div className="absolute top-0 right-1/4 w-24 h-24 rounded-full bg-surface-container-lowest/15 blur-xl pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-1.5 bg-surface-container-lowest/20 backdrop-blur-md px-2.5 py-1 rounded-full text-on-primary">
<Icon name="bolt" className="text-[14px] text-surface-container-lowest" />
<span className="font-label-sm text-label-sm uppercase tracking-wide font-extrabold">MEGA SHOPPING FESTIVAL</span>
</div>
<div className="inline-flex items-center gap-1.5 bg-inverse-surface/85 backdrop-blur-md px-2.5 py-1 rounded-full text-inverse-on-surface shadow-sm">
<Icon name="schedule" className="text-[13px] text-primary-container" />
<span className="font-label-sm text-label-sm font-bold tracking-tight">Ends in 08:42:15</span>
</div>
</div>

<div className="relative z-10 my-2 max-w-[85%]">
<div className="inline-block bg-inverse-surface/30 backdrop-blur-sm text-on-primary font-label-sm text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 tracking-wider uppercase">
            Exclusive Global Super Deals
          </div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold leading-tight tracking-tight drop-shadow-sm text-on-primary">
            Mega Brand Sale • Up to 70% Off
          </h2>
<p className="font-body-sm text-body-sm text-on-primary/90 mt-1 font-medium leading-snug line-clamp-1">
            Top Global Flagship Brands • Free Express Delivery in 24h
          </p>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-surface-container-lowest/15">
<div className="flex items-center gap-2 flex-wrap">
<button className="bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-md text-label-md px-3.5 py-1.5 rounded-full shadow-sm font-extrabold flex items-center gap-1.5 active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<span className="">Shop Deals Now</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
<div className="inline-flex items-center gap-1 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-full">
<Icon name="confirmation_number" className="text-primary-container text-[12px]" />
<span className="font-label-sm text-[10px] font-bold tracking-tight">+ UGX 50,000 Off with Code <span className="text-primary-container font-extrabold underline">SWIFT50</span></span>
</div>
</div>
</div>
</div>

</div>

<div className="absolute bottom-2.5 right-3.5 z-20 flex items-center gap-1.5 bg-inverse-surface/60 backdrop-blur-md px-2 py-1 rounded-full" id="hero-carousel-dots">
<button aria-label="Go to slide 1" className={`carousel-dot h-1.5 rounded-full transition-all duration-300 ${bannerSlide === 0 ? 'w-5 bg-surface-container-lowest' : 'w-1.5 bg-surface-container-lowest/50'}`} data-index="0" type="button" onClick={() => setBannerSlide(0)}></button>
<button aria-label="Go to slide 2" className={`carousel-dot h-1.5 rounded-full transition-all duration-300 ${bannerSlide === 1 ? 'w-5 bg-surface-container-lowest' : 'w-1.5 bg-surface-container-lowest/50'}`} data-index="1" type="button" onClick={() => setBannerSlide(1)}></button>
</div>
</div>


</section>

<section className="py-space-xs">
<div className="flex gap-3 overflow-x-auto px-margin no-scrollbar py-1">

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="devices" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Electronics</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="checkroom" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Fashion</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="chair" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Home</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="spa" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Beauty</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="smart_toy" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Gadgets</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="shopping_cart" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Groceries</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="inventory_2" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Wholesale</span>
</a>

<a className="flex flex-col items-center flex-shrink-0 group w-[68px]" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 active:scale-95 transition-transform shadow-sm">
<Icon name="verified_user" className="text-primary text-[26px]" />
</div>
<span className="font-label-md text-label-md text-on-surface mt-1.5 text-center truncate w-full font-medium">Official</span>
</a>
</div>
</section>

<section className="mt-space-sm bg-surface-container-low py-space-md">
<div className="px-margin flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-primary">
<Icon name="bolt" className="text-[22px] font-bold" />
<span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-on-surface">Flash Deals</span>
</div>

<div className="flex items-center gap-1 ml-1" id="flash-clock">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded">04</span>
<span className="text-on-surface font-bold text-label-sm">:</span>
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded">18</span>
<span className="text-on-surface font-bold text-label-sm">:</span>
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-bold px-1.5 py-0.5 rounded animate-pulse">31</span>
</div>
</div>
<a className="font-label-md text-label-md text-primary font-bold flex items-center gap-0.5 hover:underline" href="#" onClick={() => alertToast('Action triggered')}>
<span className="">View All</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>

<div className="flex gap-3 overflow-x-auto px-margin no-scrollbar pb-1">

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-2">
<img alt="Wireless ANC Headphones" className="w-full h-full object-cover" data-alt="Modern noise-cancelling wireless stereo headphones in matte graphite black, studio lighting on soft white minimal background, clean product photography showing tactile earcups and leather cushion texture." src={`${assetBase}/images/4174d8428559dd3a.webp`} />
<div className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -70%
          </div>
</div>
<div>
<div className="flex items-baseline gap-1.5">
<span className="font-price-display text-[18px] leading-tight font-extrabold text-primary">UGX 55,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 185,000</span>
</div>

<div className="mt-1.5">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"84%"}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="font-label-sm text-[10px] text-primary font-bold">84% Claimed</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">6 left</span>
</div>
</div>
</div>
</div>

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-2">
<img alt="65W GaN Fast Charger" className="w-full h-full object-cover" data-alt="Ultra-slim high speed 65W GaN multiport fast wall charger with matte white shell and foldable metallic prongs, commercial tech gadget visual on clean neutral surface." src={`${assetBase}/images/db55f4634ea49c5a.webp`} />
<div className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -62%
          </div>
</div>
<div>
<div className="flex items-baseline gap-1.5">
<span className="font-price-display text-[18px] leading-tight font-extrabold text-primary">UGX 42,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 110,000</span>
</div>
<div className="mt-1.5">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"92%"}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="font-label-sm text-[10px] text-primary font-bold">92% Claimed</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">2 left</span>
</div>
</div>
</div>
</div>

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-2">
<img alt="Smart Fitness Tracker Band" className="w-full h-full object-cover" data-alt="Minimalist OLED fitness tracker smart wristband with midnight blue silicone band resting on granite pedestal, lit with soft neon edge light." src={`${assetBase}/images/a6ef14d3eb0ef00c.webp`} />
<div className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -55%
          </div>
</div>
<div>
<div className="flex items-baseline gap-1.5">
<span className="font-price-display text-[18px] leading-tight font-extrabold text-primary">$18.90</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">$42.00</span>
</div>
<div className="mt-1.5">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"63%"}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="font-label-sm text-[10px] text-primary font-bold">63% Claimed</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">19 left</span>
</div>
</div>
</div>
</div>

<div className="w-40 flex-shrink-0 bg-surface-container-lowest rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-2">
<img alt="Magnetic Fast Charge Cable Pack" className="w-full h-full object-cover" data-alt="Ergonomic braided magnetic multi-angle fast charging cables in metallic space gray with glowing amber LED status ring, product focus." src={`${assetBase}/images/9fe4d0bef172d3a5.webp`} />
<div className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -78%
          </div>
</div>
<div>
<div className="flex items-baseline gap-1.5">
<span className="font-price-display text-[18px] leading-tight font-extrabold text-primary">$4.99</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">$22.90</span>
</div>
<div className="mt-1.5">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"79%"}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="font-label-sm text-[10px] text-primary font-bold">79% Claimed</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">11 left</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin pt-space-lg pb-space-sm">
<div className="flex items-center justify-between mb-space-sm">
<div>
<div className="flex items-center gap-1.5">
<Icon name="verified" className="text-tertiary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Verified Sellers</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Top-rated global flagship stores &amp; brands</p>
</div>
<a className="font-label-md text-label-md text-primary font-bold hover:underline" href="#" onClick={() => alertToast('Action triggered')}>Explore All</a>
</div>

<div className="space-y-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm">
<div className="flex items-center justify-between pb-2.5">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center overflow-hidden flex-shrink-0">
<span className="font-label-lg text-label-lg font-black text-on-surface">AK</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Anker Official Store</span>
<Icon name="verified" className="text-tertiary text-[15px]" />
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="">98.4% Positive</span>
<span className="">•</span>
<span className="">1.4M Followers</span>
</div>
</div>
</div>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
            + Follow
          </button>
</div>

<div className="grid grid-cols-3 gap-2 pt-1">
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Power Bank Mini" className="w-full h-full object-cover" data-alt="Compact portable magnetic power bank battery pack attached to sleek smartphone, crisp clean studio white setup." src={`${assetBase}/images/0c2a9e9326181ac7.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 95,000</span>
</div>
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Wireless Earbuds" className="w-full h-full object-cover" data-alt="Pair of compact true wireless earbuds in open magnetic matte black charging case with warm micro LED indicators." src={`${assetBase}/images/57538fe7ae02acc9.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 145,000</span>
</div>
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Desktop Hub" className="w-full h-full object-cover" data-alt="High output desktop 4-port USB-C charging station docking hub on dark oak desk environment, premium build quality." src={`${assetBase}/images/a4a84e9ba9e736ac.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 195,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm">
<div className="flex items-center justify-between pb-2.5">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center overflow-hidden flex-shrink-0">
<span className="font-label-lg text-label-lg font-black text-on-surface">BS</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Baseus Flagship</span>
<Icon name="verified" className="text-tertiary text-[15px]" />
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="">99.1% Positive</span>
<span className="">•</span>
<span className="">860k Followers</span>
</div>
</div>
</div>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
            + Follow
          </button>
</div>

<div className="grid grid-cols-3 gap-2 pt-1">
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Screen Light Bar" className="w-full h-full object-cover" data-alt="Modern desktop aluminum monitor light bar lamp clipped to ultrawide screen casting warm downward glow, workspace accessory." src={`${assetBase}/images/cddb3d370b09edc8.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 85,000</span>
</div>
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Car Mount Holder" className="w-full h-full object-cover" data-alt="Aerospace aluminum car air vent smartphone clamp holder with auto motorized sensor grip, modern automotive accessory." src={`${assetBase}/images/56f5e8cf2fe368c7.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 55,000</span>
</div>
<div className="relative rounded-lg overflow-hidden bg-surface-container aspect-square">
<img alt="Handheld Vacuum" className="w-full h-full object-cover" data-alt="Miniature cordless car vacuum cleaner in cylindrical titanium finish, resting on clean leather automotive seat." src={`${assetBase}/images/8c6b1d3d867f4f78.webp`} />
<span className="absolute bottom-1 right-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded">UGX 115,000</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin pt-space-md pb-space-lg">

<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="auto_awesome" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Daily Discoveries</h3>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Personalized for Alex</span>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-2">
<button className="bg-primary text-on-primary font-label-md text-label-md px-3 py-1 rounded-full whitespace-nowrap font-bold shadow-sm" onClick={() => alertToast('Action triggered')}>All Items</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-1 rounded-full whitespace-nowrap" onClick={() => alertToast('Action triggered')}>Official Stores</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-1 rounded-full whitespace-nowrap" onClick={() => alertToast('Action triggered')}>Express Fulfilled</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-1 rounded-full whitespace-nowrap" onClick={() => alertToast('Action triggered')}>Wholesale Tiers</button>
</div>

<div className="grid grid-cols-2 gap-2.5">

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
<div className="relative w-full aspect-square bg-surface-container">
<img alt="Mechanical Wireless Keyboard" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200" data-alt="Minimalist aerodynamic mechanical key switch keyboard with warm retro keycaps and USB-C detachable cable on wooden desk." src={`${assetBase}/images/4c302b4489f93d28.webp`} />
<button className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant active:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[16px]" />
</button>
<div className="absolute bottom-1.5 left-1.5 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[9px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
<Icon name="local_shipping" className="text-[11px] text-primary-container" />
<span className="">Free 3-Day</span>
</div>
</div>
<div className="p-2.5 flex flex-col flex-1 justify-between">
<div>

<div className="flex items-center gap-1 mb-1">
<span className="inline-flex items-center gap-0.5 bg-inverse-surface text-inverse-on-surface font-label-sm text-[9px] font-bold px-1.5 py-0.2 rounded">
<Icon name="shield" className="text-[10px]" />
                Official Store
              </span>
</div>

<h4 className="font-body-md text-body-md font-semibold text-on-surface line-clamp-2 leading-tight mb-1">
              Keychron K2 Pro Wireless Custom Mechanical Keyboard RGB
            </h4>

<div className="flex items-center gap-1 text-on-surface-variant mb-1.5">
<Icon name="star" className="text-[13px] text-primary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">4.9</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">(3.4k)</span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">12k sold</span>
</div>
</div>

<div className="flex items-end justify-between pt-1">
<div>
<div className="flex items-baseline gap-1">
<span className="font-price-display text-[19px] leading-none font-black text-primary">UGX 295,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 400,000</span>
</div>
<span className="font-label-sm text-[9px] text-tertiary font-bold bg-surface-container-high px-1 py-0.2 rounded mt-0.5 inline-block">2+ Save 5%</span>
</div>
<button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform" title="Quick Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
<div className="relative w-full aspect-square bg-surface-container">
<img alt="Commuter Rolltop Backpack" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200" data-alt="Urban waterproof rolltop commuter backpack in ballistic olive green cordura fabric, minimal outdoors lifestyle photography." src={`${assetBase}/images/1dd2778d3d23c448.webp`} />
<button className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant active:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[16px]" />
</button>
<div className="absolute top-1.5 left-1.5 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -45%
          </div>
</div>
<div className="p-2.5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="inline-flex items-center gap-0.5 bg-surface-container text-tertiary font-label-sm text-[9px] font-bold px-1.5 py-0.2 rounded">
<Icon name="verified" className="text-[11px]" />
                Verified Merchant
              </span>
</div>
<h4 className="font-body-md text-body-md font-semibold text-on-surface line-clamp-2 leading-tight mb-1">
              Nordic Tech Commuter Rolltop Weatherproof Travel Backpack 25L
            </h4>
<div className="flex items-center gap-1 text-on-surface-variant mb-1.5">
<Icon name="star" className="text-[13px] text-primary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">4.8</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">(1.8k)</span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">4.1k sold</span>
</div>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<div className="flex items-baseline gap-1">
<span className="font-price-display text-[19px] leading-none font-black text-primary">UGX 130,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 230,000</span>
</div>
<span className="font-label-sm text-[9px] text-primary font-bold bg-surface-container-high px-1 py-0.2 rounded mt-0.5 inline-block">SwiftExpress</span>
</div>
<button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform" title="Quick Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
<div className="relative w-full aspect-square bg-surface-container">
<img alt="Smart LED Thermos Flask" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200" data-alt="Smart stainless steel temperature display insulated thermos travel bottle with warm tea steam, sleek clean studio lighting." src={`${assetBase}/images/d4e348d10843128b.webp`} />
<button className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant active:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[16px]" />
</button>
<div className="absolute bottom-1.5 left-1.5 bg-surface-container-high text-on-surface font-label-sm text-[9px] px-1.5 py-0.5 rounded font-bold">Bulk: UGX 33,000/5pcs</div>
</div>
<div className="p-2.5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="inline-flex items-center gap-0.5 bg-surface-container-high text-primary font-label-sm text-[9px] font-bold px-1.5 py-0.2 rounded">
<Icon name="bolt" className="text-[11px]" />
                Fulfilled by SwiftCart
              </span>
</div>
<h4 className="font-body-md text-body-md font-semibold text-on-surface line-clamp-2 leading-tight mb-1">
              Smart LED Thermal Vacuum Flask 500ml Touch Sensor
            </h4>
<div className="flex items-center gap-1 text-on-surface-variant mb-1.5">
<Icon name="star" className="text-[13px] text-primary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">4.7</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">(920)</span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">5k+ sold</span>
</div>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<div className="flex items-baseline gap-1">
<span className="font-price-display text-[19px] leading-none font-black text-primary">UGX 45,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 90,000</span>
</div>
<span className="font-label-sm text-[9px] text-tertiary font-bold bg-surface-container-high px-1 py-0.2 rounded mt-0.5 inline-block">Wholesale Tier</span>
</div>
<button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform" title="Quick Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
<div className="relative w-full aspect-square bg-surface-container">
<img alt="Breathable Running Sneakers" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200" data-alt="Ultralight running sport sneakers in gradient amber solar flare mesh with cushioned reactive bounce sole, active athlete studio look." src={`${assetBase}/images/ef411271db04ccc7.webp`} />
<button className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant active:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[16px]" />
</button>
<div className="absolute top-1.5 left-1.5 bg-primary text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded">
            -50%
          </div>
</div>
<div className="p-2.5 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-1 mb-1">
<span className="inline-flex items-center gap-0.5 bg-inverse-surface text-inverse-on-surface font-label-sm text-[9px] font-bold px-1.5 py-0.2 rounded">
<Icon name="shield" className="text-[10px]" />
                Official Store
              </span>
</div>
<h4 className="font-body-md text-body-md font-semibold text-on-surface line-clamp-2 leading-tight mb-1">
              AeroGlide Pro Lightweight Breathable Cushioned Trail Shoes
            </h4>
<div className="flex items-center gap-1 text-on-surface-variant mb-1.5">
<Icon name="star" className="text-[13px] text-primary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">4.9</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">(2.7k)</span>
<span className="text-on-surface-variant text-[10px]">•</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">8.9k sold</span>
</div>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<div className="flex items-baseline gap-1">
<span className="font-price-display text-[19px] leading-none font-black text-primary">UGX 160,000</span>
<span className="font-body-sm text-[11px] text-on-surface-variant line-through">UGX 320,000</span>
</div>
<span className="font-label-sm text-[9px] text-tertiary font-bold bg-surface-container-high px-1 py-0.2 rounded mt-0.5 inline-block">Free Socks Pack</span>
</div>
<button className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform" title="Quick Add to Cart" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>

<div className="mt-space-md py-space-sm flex flex-col items-center justify-center text-center">
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></span>
<span className="">Loading more verified global catalog deals...</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Over 10,000+ new arrivals added today</p>
</div>
</section>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary-container font-label-md"><div className="flex justify-around items-center h-16 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors gap-0.5 text-primary-container font-label-md" data-path="home" href="#" onClick={() => alertToast('Action triggered')}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Home</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Categories</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="messages" href="#" onClick={() => alertToast('Action triggered')}><Icon name="chat_bubble" className="text-[22px]" /><span className="font-label-sm text-label-sm">Messages</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5 relative" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative flex items-center justify-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-primary-container text-on-primary font-label-sm text-[9px] font-bold px-1.5 py-0.2 rounded-full min-w-[16px] h-4 flex items-center justify-center leading-none">3</span></div><span className="font-label-sm text-label-sm">Cart</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><Icon name="account_circle" className="text-[22px]" /><span className="font-label-sm text-label-sm">Account</span></a></div></nav>
    </div>
  );
};

export default Screen;
