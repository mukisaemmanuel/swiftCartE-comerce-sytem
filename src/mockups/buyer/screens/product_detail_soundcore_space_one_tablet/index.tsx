// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/product_detail_soundcore_space_one_tablet/code.html
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
<div className="w-full max-w-[834px] mx-auto px-margin md:px-margin-desktop py-space-sm">

<nav className="flex items-center gap-space-xs text-secondary font-label-md text-label-md mb-space-sm overflow-x-auto py-1 scrollbar-none">
<a className="hover:text-primary transition-colors whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>Headphones</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface truncate font-semibold">SoundCore Space One Wireless ANC</span>
</nav>

<div className="grid grid-cols-12 gap-space-md items-start">

<div className="col-span-12 md:col-span-6 flex flex-col gap-space-md">

<div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden group">
<div className="absolute top-space-md left-space-md z-10 flex flex-col gap-1.5">
<span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm">
              20% OFF
            </span>
<span className="bg-surface-container-high/90 backdrop-blur-md text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold flex items-center gap-1 shadow-sm">
<Icon name="bolt" className="text-[13px]" />
              Kampala Express
            </span>
</div>
<button aria-label="Save to Wishlist" className="absolute top-space-md right-space-md z-10 w-9 h-9 rounded-full bg-surface-container-low/80 backdrop-blur-md text-secondary hover:text-primary flex items-center justify-center transition-all shadow-sm active:scale-95" id="wishlist-btn" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite" className="text-[20px]" />
</button>

<div className="w-full aspect-[4/3.8] flex items-center justify-center relative overflow-hidden rounded-lg bg-surface">
<img className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" data-alt="SoundCore Space One Wireless Active Noise Cancelling Over-Ear Headphones in sleek matte jet black finish centered on clean soft white background studio lighting, hyper realistic commercial catalog photo" id="main-product-image" src={`${assetBase}/images/a5b4bf307c28435c.webp`} />

<button className="absolute bottom-space-sm left-space-sm bg-inverse-surface/85 hover:bg-inverse-surface backdrop-blur-md text-inverse-on-surface font-label-sm text-label-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md transition-transform active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="play_circle" className="text-[16px] text-primary-container" />
<span>Play Video (0:45)</span>
</button>

<span className="absolute bottom-space-sm right-space-sm bg-surface-container-low/90 backdrop-blur-md text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded flex items-center gap-1">
<Icon name="360" className="text-[14px]" />
<span>HD 360°</span>
</span>
</div>

<div className="grid grid-cols-4 gap-space-xs mt-space-sm">
<button className="thumb-btn p-1 rounded-lg bg-surface-container-high transition-all shadow-sm" onClick={() => alertToast('Action triggered')}>
<img className="w-full aspect-square object-contain rounded" data-alt="SoundCore Space One wireless headphones front view jet black studio commercial catalog shot" src={`${assetBase}/images/796a6dfb69ae8751.webp`} />
</button>
<button className="thumb-btn p-1 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all" onClick={() => alertToast('Action triggered')}>
<img className="w-full aspect-square object-contain rounded" data-alt="SoundCore Space One headphones neatly folded inside premium travel hard-shell zipper case" src={`${assetBase}/images/aa97ee92fdbd82b6.webp`} />
</button>
<button className="thumb-btn p-1 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all" onClick={() => alertToast('Action triggered')}>
<img className="w-full aspect-square object-contain rounded" data-alt="Extreme close-up shot of SoundCore Space One headphone ear cup showcasing 40mm audio drivers and microphone array" src={`${assetBase}/images/36a6e8494d8b37ac.webp`} />
</button>
<button className="thumb-btn p-1 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all" onClick={() => alertToast('Action triggered')}>
<img className="w-full aspect-square object-contain rounded" data-alt="Flat lay of all SoundCore Space One packaging accessories including USB-C charging cable and 3.5mm AUX cord" src={`${assetBase}/images/6eb4ca28fbf4fa67.webp`} />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-tertiary text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">100% Genuine Guaranteed</span>
<span className="font-body-sm text-body-sm text-secondary">Verified factory serial number on every packaging unit</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0">
<Icon name="workspace_premium" className="text-secondary text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">12 Months Official SoundCore Warranty</span>
<span className="font-body-sm text-body-sm text-secondary">Direct replacement coverage at Kampala Service Center</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
<Icon name="lock" className="text-primary text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Bank of Uganda Compliant Escrow</span>
<span className="font-body-sm text-body-sm text-secondary">Funds safely locked until you approve the product</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-headline-sm font-bold shadow-inner">
                SC
              </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-center gap-1 text-secondary font-body-sm text-body-sm">
<Icon name="storefront" className="text-[14px]" />
<span>Pioneer Mall, Level 1, Kampala CBD</span>
</div>
</div>
</div>
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase">
              Brand Store
            </span>
</div>
<div className="grid grid-cols-2 gap-space-sm py-space-xs my-space-xs bg-surface-container-low rounded-lg p-space-sm text-center">
<div className="flex flex-col">
<div className="flex items-center justify-center gap-0.5 text-on-surface font-label-lg text-label-lg font-bold">
<Icon name="star" className="text-[#F59E0B] text-[16px]" />
<span>4.9</span>
<span className="text-secondary font-body-sm text-body-sm font-normal">(1.4k sales)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Seller Score</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-tertiary font-bold">99.4%</span>
<span className="font-label-sm text-label-sm text-secondary">On-Time Boda Dispatch</span>
</div>
</div>
<div className="flex items-center gap-space-sm mt-space-sm">
<button className="flex-1 py-2 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Chat with Seller</span>
</button>
<button className="py-2 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Visit Shop</span>
<Icon name="open_in_new" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">

<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Anker SoundCore • Space Series
            </span>
<span className="bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<Icon name="inventory_2" className="text-[14px]" />
              In Stock (Kampala Hub)
            </span>
</div>

<h1 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight tracking-tight mb-space-sm">
            SoundCore Space One Wireless Active Noise Cancelling Headphones - 2X Voice Reduction &amp; 55H Playtime
          </h1>

<div className="flex items-center flex-wrap gap-space-sm pb-space-sm">
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
<div className="flex text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.8</span>
<span className="text-secondary font-body-sm text-body-sm">(142 ratings)</span>
</div>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="text-secondary font-label-md text-label-md">38 Q&amp;As</span>
<span className="text-secondary font-body-sm text-body-sm">•</span>
<span className="inline-flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-semibold bg-[#ECFDF5] px-2 py-0.5 rounded">
<Icon name="verified" className="text-[14px]" />
              Verified Purchase Only
            </span>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl mb-space-md">
<div className="flex items-baseline gap-space-sm">
<span className="font-price-display text-price-display text-primary font-black tracking-tight">
                UGX 248,500
              </span>
<span className="font-body-md text-body-md text-secondary line-through font-normal">
                UGX 310,000
              </span>
<span className="bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">
                -20%
              </span>
</div>
<div className="flex items-center justify-between mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary font-semibold flex items-center gap-1">
<Icon name="savings" className="text-[14px]" />
                You save UGX 61,500 today
              </span>
<span className="text-secondary">VAT inclusive</span>
</div>
</div>

<div className="mb-space-md">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-on-surface font-semibold">
                Color: <span className="text-primary font-bold" id="selected-color-label">Jet Black</span>
</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                18 units in Kampala Hub
              </span>
</div>
<div className="grid grid-cols-3 gap-space-xs">

<button className="color-option p-2 rounded-lg bg-surface-container-high ring-2 ring-primary flex items-center gap-2 text-left transition-all" onClick={() => alertToast('Action triggered')}>
<div className="w-7 h-7 rounded-full bg-[#18181B] shadow-inner shrink-0 flex items-center justify-center">
<Icon name="check" className="text-[14px] text-white" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Jet Black</span>
<span className="font-label-sm text-label-sm text-secondary">UGX 248,500</span>
</div>
</button>

<button className="color-option p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex items-center gap-2 text-left transition-all" onClick={() => alertToast('Action triggered')}>
<div className="w-7 h-7 rounded-full bg-[#F5F5F0] shadow-sm shrink-0 flex items-center justify-center">
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-medium text-on-surface truncate">Cream White</span>
<span className="font-label-sm text-label-sm text-secondary">UGX 248,500</span>
</div>
</button>

<button className="color-option p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex items-center gap-2 text-left transition-all" onClick={() => alertToast('Action triggered')}>
<div className="w-7 h-7 rounded-full bg-[#7DA4C7] shadow-inner shrink-0 flex items-center justify-center">
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-medium text-on-surface truncate">Sky Blue</span>
<span className="font-label-sm text-label-sm text-secondary">UGX 255,000</span>
</div>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm mb-space-md">
<div className="flex items-center justify-between pb-space-xs mb-space-xs">
<div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md font-bold">
<Icon name="local_shipping" className="text-primary text-[18px]" />
<span>Deliver to Kampala Central (Nakasero)</span>
</div>
<button className="text-primary font-label-sm text-label-sm font-semibold hover:underline" onClick={() => alertToast('Action triggered')}>Change</button>
</div>
<div className="space-y-space-xs">

<div className="p-space-xs bg-surface-container-lowest rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-primary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">1-Hour Boda Express</span>
<span className="font-body-sm text-body-sm text-secondary">Order within 45m • Get it Today by 17:00</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 5,000</span>
</div>

<div className="p-space-xs bg-surface-container-lowest rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="storefront" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">William St Central Hub Collection</span>
<span className="font-body-sm text-body-sm text-secondary">Ready in 30 mins • Open until 20:00</span>
</div>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-container px-2 py-0.5 rounded font-bold uppercase">FREE</span>
</div>
</div>

<div className="mt-space-sm p-space-xs rounded-lg bg-surface-container-high/80 flex items-start gap-2">
<Icon name="verified" className="text-primary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
<strong className="text-on-surface font-semibold">SwiftCart Escrow Guarantee:</strong> Payment stays safely locked with MTN MoMo / Airtel Escrow until you inspect the tamper seal and share your 6-digit delivery PIN with the rider.
              </p>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Quantity</span>
<div className="flex items-center gap-space-sm">
<div className="flex items-center bg-surface-container-low rounded-lg p-1">
<button aria-label="Decrease quantity" className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center font-bold transition-colors active:scale-95 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-10 text-center font-label-lg text-label-lg font-bold text-on-surface" id="quantity-display">1</span>
<button aria-label="Increase quantity" className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center font-bold transition-colors active:scale-95 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-secondary leading-none">Subtotal</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold" id="subtotal-display">UGX 248,500</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs mt-space-xs">

<button className="flex-1 h-12 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[20px]" />
<span>Buy Now with MoMo Escrow</span>
</button>

<button className="px-space-md h-12 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
<span>Add to Cart</span>
</button>
</div>

<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm pt-space-xs px-1">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                MTN MoMo Accepted
              </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                Airtel Money Secure
              </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Visa / Master Cards
              </span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">

<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-lg mb-space-md">
<button className="tab-btn flex-1 py-1.5 text-center rounded font-label-md text-label-md font-bold bg-surface-container-lowest text-primary shadow-sm transition-all" onClick={() => alertToast('Action triggered')}>
              Key Specs
            </button>
<button className="tab-btn flex-1 py-1.5 text-center rounded font-label-md text-label-md font-semibold text-secondary hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>
              Warranty &amp; Returns
            </button>
<button className="tab-btn flex-1 py-1.5 text-center rounded font-label-md text-label-md font-semibold text-secondary hover:text-on-surface transition-all" onClick={() => alertToast('Action triggered')}>
              Reviews (4.8)
            </button>
</div>

<div className="tab-panel" id="tab-specs">
<div className="grid grid-cols-2 gap-space-xs">
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Bluetooth Version</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">5.3 (Multi-point connection)</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Audio Codec</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">LDAC Hi-Res Wireless &amp; AAC</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Driver Diameter</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">40mm Custom Dynamic Drivers</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Battery Playtime</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">55H (ANC Off) / 40H (ANC On)</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Fast Charging</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">5 mins charge = 4 hours playback</span>
</div>
<div className="p-space-xs bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Microphones</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">3-Mic AI Enhanced Call Algorithm</span>
</div>
</div>
</div>

<div className="tab-panel hidden space-y-space-xs" id="tab-warranty">
<div className="flex items-start gap-space-sm p-space-xs bg-surface-container-low rounded-lg">
<Icon name="verified" className="text-primary text-[20px] shrink-0 mt-0.5" />
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">Official 12-Month Replacement</span>
<p className="font-body-sm text-body-sm text-secondary">Covers hardware failure, battery defects, and driver failure. Claim directly at Kampala Pioneer Mall Service Desk.</p>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-xs bg-surface-container-low rounded-lg">
<Icon name="assignment_return" className="text-tertiary text-[20px] shrink-0 mt-0.5" />
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">48-Hour Free Return Guarantee</span>
<p className="font-body-sm text-body-sm text-secondary">Zero-question return if package seal is intact or if item differs from description. Free rider pickup from Kampala addresses.</p>
</div>
</div>
</div>

<div className="tab-panel hidden space-y-space-sm" id="tab-reviews">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">4.8 / 5.0</span>
<span className="font-body-sm text-body-sm text-secondary block">Based on 142 customer verifications</span>
</div>
<div className="flex flex-col items-end">
<span className="text-tertiary font-label-sm text-label-sm font-bold bg-[#ECFDF5] px-2 py-0.5 rounded">98% Recommended</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Prompt Kampala delivery</span>
</div>
</div>

<div className="p-space-xs bg-surface-container-low rounded-lg">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface font-bold">David K. (Kololo)</span>
<span className="font-label-sm text-label-sm text-secondary">2 days ago</span>
</div>
<div className="flex items-center gap-1 text-[#F59E0B] mb-1">
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<span className="text-tertiary font-label-sm text-label-sm ml-2 font-semibold">Verified MoMo Buyer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">The noise cancellation completely eliminates noisy traffic on Jinja Road while working. The Boda arrived in Nakasero within 40 minutes.</p>
</div>

<div className="p-space-xs bg-surface-container-low rounded-lg">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface font-bold">Patricia M. (Ntinda)</span>
<span className="font-label-sm text-label-sm text-secondary">5 days ago</span>
</div>
<div className="flex items-center gap-1 text-[#F59E0B] mb-1">
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<Icon name="star" className="text-[14px]" />
<span className="text-tertiary font-label-sm text-label-sm ml-2 font-semibold">Verified MoMo Buyer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Battery life is unbelievable. Used them for 4 full working days on a single charge. Genuine serial code checked out on the SoundCore app.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-lg bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Frequently Bought Together</h2>
<span className="text-tertiary font-label-md text-label-md font-semibold">Save 10% on Bundle</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-space-md">

<div className="flex items-center gap-space-sm flex-1 p-space-xs bg-surface-container-low rounded-lg">
<img className="w-16 h-16 object-contain rounded bg-surface" data-alt="SoundCore Space One Jet Black Headphones square thumbnail" src={`${assetBase}/images/de69e0d0db96f5eb.webp`} />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold line-clamp-1">Space One ANC Headphones</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 248,500</span>
</div>
</div>
<Icon name="tv_displays" className="text-secondary text-[22px] font-bold" />

<div className="flex items-center gap-space-sm flex-1 p-space-xs bg-surface-container-low rounded-lg">
<img className="w-16 h-16 object-contain rounded bg-surface" data-alt="Anker PowerPort III 30W USB-C compact fast wall charger adapter" src={`${assetBase}/images/1de5cd464ff7d600.webp`} />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold line-clamp-1">Anker 30W Nano Fast Charger</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 45,000</span>
</div>
</div>
<Icon name="tv_displays" className="text-secondary text-[22px] font-bold" />

<div className="flex items-center gap-space-sm flex-1 p-space-xs bg-surface-container-low rounded-lg">
<img className="w-16 h-16 object-contain rounded bg-surface" data-alt="Universal aluminum desk headphone hanger stand matte black" src={`${assetBase}/images/c4d5bc6dd66f78f0.webp`} />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold line-clamp-1">Universal Aluminum Stand</span>
<span className="font-label-md text-label-md text-primary font-bold">UGX 32,000</span>
</div>
</div>

<div className="flex flex-col items-center justify-center p-space-xs md:pl-space-md shrink-0 w-full md:w-auto">
<span className="font-label-sm text-label-sm text-secondary">Bundle Total:</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold mb-1">UGX 293,000</span>
<button className="w-full md:w-auto px-space-md py-2 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold hover:bg-on-surface-variant transition-colors whitespace-nowrap active:scale-95 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
            Add 3 to Cart
          </button>
</div>
</div>
</div>

<div className="mt-space-md mb-space-lg">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">More from SoundCore Uganda</h3>
<a className="text-primary font-label-md text-label-md font-semibold hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>View All (24)</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
<div className="grid grid-cols-3 gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="w-full aspect-square bg-surface rounded-lg mb-space-xs flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain p-2" data-alt="SoundCore Life Q30 Wireless active noise cancelling headphones black" src={`${assetBase}/images/6527a2b8102f4af1.webp`} />
</div>
<div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Verified Merchant</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold line-clamp-1">SoundCore Life Q30 Hybrid ANC</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 185,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">220,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="w-full aspect-square bg-surface rounded-lg mb-space-xs flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain p-2" data-alt="SoundCore Liberty 4 NC true wireless earbuds in light blue case" src={`${assetBase}/images/57e459f5e4565156.webp`} />
</div>
<div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Verified Merchant</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold line-clamp-1">SoundCore Liberty 4 NC Earbuds</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 210,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">250,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="w-full aspect-square bg-surface rounded-lg mb-space-xs flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-contain p-2" data-alt="SoundCore Motion+ 30W Bluetooth portable outdoor speaker hi-res" src={`${assetBase}/images/00844dd2f520f378.webp`} />
</div>
<div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Verified Merchant</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold line-clamp-1">SoundCore Motion+ 30W Hi-Res</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 315,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">360,000</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 translate-y-24 opacity-0 transition-all duration-300" id="cart-toast">
<div className="w-7 h-7 rounded-full bg-tertiary flex items-center justify-center text-white">
<Icon name="check" className="text-[16px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Item Added to SwiftCart!</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface/80" id="toast-subtext">1x SoundCore Space One in Cart</span>
</div>
</div>

</div></main><footer className="w-full bg-surface-container-low mt-space-xl py-space-xl"><div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop"><div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg mb-space-xl"><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Shop &amp; Deliver</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Express Kampala Dispatch</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Entebbe &amp; Upcountry Hubs</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>SwiftCart Assurance</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Verified Merchants Directory</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Customer Support</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; FAQs</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track My Order</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Refunds</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Payment &amp; Trust</span><ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo Escrow</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Airtel Money Secure</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Bank &amp; Visa Cards</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Cash on Collection Points</a></li></ul></div><div><span className="font-label-lg text-label-lg text-on-surface block mb-space-sm">Sell on SwiftCart</span><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Access millions of verified buyers across Uganda with zero listing friction.</p><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-semibold">Merchant Hub</span></div></div></div><div className="flex flex-col md:flex-row items-center justify-between pt-space-md border-t border-surface-container-high text-on-surface-variant font-body-sm text-body-sm"><p>© 2025 SwiftCart Uganda Ltd. Engineered for commercial velocity.</p><div className="flex items-center gap-space-md mt-space-sm md:mt-0"><span className="text-secondary">Uganda Shilling (UGX)</span><span className="text-secondary">•</span><span className="text-secondary">Region: Kampala / Central</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
