// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/product_detail_soundcore_space_one_2/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between relative"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[22px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-secondary-fixed absolute left-1/2 -translate-x-1/2 text-center pointer-events-none truncate max-w-[200px]">Product Detail</h1><div className="flex items-center gap-space-xs"><button aria-label="Share" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="share" className="text-[22px]" /></button><button aria-label="Wishlist" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" id="header-like-btn" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /></button></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-28">

<div className="px-margin py-space-sm bg-surface-container-low flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<img alt="SwiftCart Logo" className="h-6 w-auto object-contain" src={`${assetBase}/images/7149083012d57eff.webp`} />
<span className="font-label-md text-label-md text-on-surface">SwiftCart Uganda</span>
</div>
<div className="flex items-center gap-space-md">
<button aria-label="Search items" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="search" className="text-[18px]" />
</button>
<div className="relative">
<button aria-label="View Cart" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[18px]" />
</button>
<span className="absolute -top-1 -right-1 bg-primary text-on-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center shadow-sm">2</span>
</div>
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md flex items-center justify-center font-bold">
        DM
      </div>
</div>
</div>

<div className="relative w-full bg-surface-container-lowest overflow-hidden">
<div className="flex transition-transform duration-300 ease-out w-full" id="carouselTrack">
<div className="min-w-full aspect-square flex items-center justify-center relative p-space-md">
<img className="w-full h-full object-contain rounded-xl select-none" data-alt="SoundCore Space One Active Noise Cancelling Headphones in sleek Jet Black finish floating on a warm minimalist studio background, high contrast studio lighting highlighting soft cushioned earcups and matte aluminium headband details" src={`${assetBase}/images/c3b7c44959b7b722.webp`} />
</div>
<div className="min-w-full aspect-square flex items-center justify-center relative p-space-md">
<img className="w-full h-full object-contain rounded-xl select-none" data-alt="SoundCore Space One ANC Headphones angled side profile showcasing custom 40mm audio drivers and acoustic isolation chambers, elegant warm ambient backlight" src={`${assetBase}/images/e4891586021f1078.webp`} />
</div>
<div className="min-w-full aspect-square flex items-center justify-center relative p-space-md">
<img className="w-full h-full object-contain rounded-xl select-none" data-alt="Close up view of the earcups showing ergonomic tactile buttons, plush memory foam ear cushions, and subtle laser engraved SoundCore branding in contemporary setting" src={`${assetBase}/images/60946e22d7f4321c.webp`} />
</div>
</div>

<div className="absolute top-space-md left-space-md flex flex-col gap-space-xs z-10 pointer-events-none">
<span className="bg-inverse-surface text-inverse-on-surface px-space-sm py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<Icon name="verified" className="text-[12px] text-tertiary-fixed" /> Official Store
      </span>
<span className="bg-primary text-on-primary px-space-sm py-0.5 rounded font-label-sm text-label-sm shadow-sm font-bold">
        SAVE 15%
      </span>
</div>

<div className="absolute bottom-space-md inset-x-0 flex justify-center items-center gap-space-xs z-10">
<button aria-label="Slide 1" className="w-6 h-1.5 rounded-full bg-primary transition-all duration-300" id="dot-0" onClick={() => alertToast('Action triggered')}></button>
<button aria-label="Slide 2" className="w-1.5 h-1.5 rounded-full bg-surface-dim hover:bg-secondary transition-all duration-300" id="dot-1" onClick={() => alertToast('Action triggered')}></button>
<button aria-label="Slide 3" className="w-1.5 h-1.5 rounded-full bg-surface-dim hover:bg-secondary transition-all duration-300" id="dot-2" onClick={() => alertToast('Action triggered')}></button>
</div>
</div>

<div className="px-margin pt-space-lg flex flex-col gap-space-xs bg-surface">

<div className="flex items-center gap-space-sm flex-wrap">
<div className="bg-surface-container-highest px-space-sm py-0.5 rounded flex items-center gap-1">
<Icon name="storefront" className="text-[13px] text-on-surface-variant" />
<span className="font-label-sm text-label-sm text-on-surface">SoundCore Official Store</span>
</div>
<div className="flex items-center text-on-surface-variant font-label-sm text-label-sm gap-0.5">
<Icon name="star" className="text-[13px] text-primary" />
<span className="font-bold text-on-surface">4.9</span>
<span className="">(1.2k reviews)</span>
</div>
</div>

<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mt-space-xs leading-tight">
      SoundCore Space One Active Noise Cancelling Headphones
    </h1>

<div className="flex items-baseline gap-space-sm mt-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 385,000</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 450,000</span>
</div>

<div className="mt-space-xs flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md bg-surface-container-high px-space-sm py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
        In Stock
      </span>
<span className="inline-flex items-center gap-1 text-primary font-label-md text-label-md bg-primary-fixed px-space-sm py-1 rounded-full">
<Icon name="bolt" className="text-[14px]" />
        Fulfilled by SwiftCart Express (Kampala)
      </span>
</div>
</div>
<div className="h-2 bg-surface-container-low my-space-md"></div>

<div className="px-margin">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
<div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
<Icon name="shield" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">SwiftCart Buyer Protection</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Your payment is held safely until you receive your order.
        </p>
</div>
</div>
</div>

<div className="px-margin mt-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-md">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Express Delivery</span>
<span className="bg-tertiary-container text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded">FAST</span>
</div>
<p className="font-body-md text-body-md font-semibold text-on-surface mt-0.5">
          Today within 2 hours by Boda
        </p>
<span className="font-body-sm text-body-sm text-on-surface-variant">Destination: Kampala Central</span>
</div>
</div>
</div>

<div className="px-margin mt-space-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Color Variant:</span>
<span className="font-label-md text-label-md text-primary font-bold" id="selectedColorName">Jet Black</span>
</div>
<div className="grid grid-cols-3 gap-space-sm" role="radiogroup">

<button aria-checked="true" className="color-btn bg-surface-container-lowest p-space-sm rounded-xl flex flex-col items-center gap-space-xs shadow-md transition-all active:scale-95 text-left" role="radio" onClick={() => alertToast('Action triggered')}>
<span className="w-6 h-6 rounded-full bg-[#1A1A1A] shadow-inner flex items-center justify-center">
<Icon name="check" className="check-icon  text-[14px] text-white" />
</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold text-center truncate w-full">Jet Black</span>
</button>

<button aria-checked="false" className="color-btn bg-surface-container-low p-space-sm rounded-xl flex flex-col items-center gap-space-xs shadow-sm transition-all active:scale-95 text-left" role="radio" onClick={() => alertToast('Action triggered')}>
<span className="w-6 h-6 rounded-full bg-[#7CA2C8] shadow-inner flex items-center justify-center">
<Icon name="check" className="check-icon hidden  text-[14px] text-white" />
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold text-center truncate w-full">Sky Blue</span>
</button>

<button aria-checked="false" className="color-btn bg-surface-container-low p-space-sm rounded-xl flex flex-col items-center gap-space-xs shadow-sm transition-all active:scale-95 text-left" role="radio" onClick={() => alertToast('Action triggered')}>
<span className="w-6 h-6 rounded-full bg-[#E8DDD1] shadow-inner flex items-center justify-center">
<Icon name="check" className="check-icon hidden  text-[14px] text-[#5C4039]" />
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold text-center truncate w-full">Latte Cream</span>
</button>
</div>
</div>
<div className="h-2 bg-surface-container-low my-space-md"></div>

<div className="px-margin flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface">Hardware &amp; Audio Specs</span>
<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
<Icon name="speaker" className="text-primary text-[24px]" />
<span className="font-label-md text-label-md text-on-surface">40mm Dynamic Drivers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Custom tuned diaphragm for pure acoustic resonance</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
<Icon name="graphic_eq" className="text-primary text-[24px]" />
<span className="font-label-md text-label-md text-on-surface">2X Voice Reduction</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Adaptive noise cancelling tailored for busy streets</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
<Icon name="battery_charging_full" className="text-primary text-[24px]" />
<span className="font-label-md text-label-md text-on-surface">40H Playtime</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Continuous ANC playback with ultra-fast quick charge</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
<Icon name="high_quality" className="text-primary text-[24px]" />
<span className="font-label-md text-label-md text-on-surface">LDAC Hi-Res Audio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">3X richer data streaming over Bluetooth 5.3</span>
</div>
</div>
</div>

<div className="mt-space-xl pt-space-lg pb-space-md px-margin text-center bg-surface-container-low flex flex-col items-center gap-space-xs"><img alt="SwiftCart Brand Icon" className="h-5 w-auto object-contain opacity-75" src={`${assetBase}/images/7149083012d57eff.webp`} /><span className="font-label-md text-label-md text-on-surface">SwiftCart Uganda</span></div>

<div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest shadow-[0_-8px_20px_rgba(15,23,42,0.08)] px-margin py-space-sm pb-safe flex items-center justify-between gap-space-md">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Total Payable</span>
<span className="font-price-display text-price-display text-primary truncate">UGX 385,000</span>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg active:scale-95 transition-all flex items-center justify-center hover:bg-surface-container-high" id="addToCartBtn" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[20px]" />
</button>
<button className="h-12 px-space-lg rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-1 hover:brightness-105" id="buyNowBtn" onClick={() => alertToast('Action triggered')}>
<span className="">Buy Now</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-space-lg py-space-sm rounded-full shadow-xl flex items-center gap-space-sm opacity-0 pointer-events-none transition-all duration-300" id="cartToast">
<Icon name="check_circle" className="text-tertiary-fixed text-[18px]" />
<span className="font-label-md text-label-md" id="toastMsg">Added to SwiftCart</span>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
