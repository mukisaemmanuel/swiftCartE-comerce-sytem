// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/followed_stores_swiftcart_uganda_2/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-[#fff8f2] font-sans text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    @layer base {
      html, body {
        width: 100vw;
        margin: 0;
        padding: 0;
        background-color: #fff8f2;
      }
      body {
        overscroll-behavior: none;
      }
      .pb-safe {
        padding-bottom: env(safe-area-inset-bottom, 16px);
      }
      .pt-safe {
        padding-top: env(safe-area-inset-top, 0px);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="sticky top-0 z-50 pt-safe bg-[#fff8f2]/95 backdrop-blur-md border-b border-stone-200/60 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
<div className="h-14 px-4 flex items-center justify-between">
<button aria-label="Go back" className="w-10 h-10 -ml-1.5 flex items-center justify-center rounded-full text-on-surface hover:bg-stone-200/50 active:scale-95 transition" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[24px]" />
</button>
<h1 className="text-[17px] font-bold text-on-surface tracking-tight text-center">
        Followed Stores <span className="text-stone-400 font-medium text-sm">(12)</span>
</h1>
<button aria-label="Search followed stores" className="w-10 h-10 -mr-1.5 flex items-center justify-center rounded-full text-on-surface hover:bg-stone-200/50 active:scale-95 transition" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="search" className="text-[22px]" />
</button>
</div>
</header><main className="flex-1 flex flex-col w-full pb-safe">

<div className="pt-3 pb-2 flex flex-col gap-3">

<div className="flex items-center gap-2 overflow-x-auto px-4 no-scrollbar">
<button className="filter-chip shrink-0 px-3.5 py-1.5 rounded-full bg-[#da3700] text-white font-semibold text-[13px] shadow-sm active:scale-95 transition-all flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<span>All</span>
<span className="text-xs bg-white/20 px-1.5 py-0.2 rounded-full">12</span>
</button>
<button className="filter-chip shrink-0 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-700 font-medium text-[13px] active:scale-95 transition-all flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<span>Official Stores</span>
<span className="text-xs text-stone-400 font-semibold">(8)</span>
</button>
<button className="filter-chip shrink-0 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-700 font-medium text-[13px] active:scale-95 transition-all flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<span>Arcade Stalls</span>
<span className="text-xs text-stone-400 font-semibold">(4)</span>
</button>
<button className="filter-chip shrink-0 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-700 font-medium text-[13px] flex items-center gap-1.5 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="local_offer" className="text-[15px] text-[#da3700]" />
<span>Discounts Active</span>
</button>
</div>

<div className="px-4">
<div className="bg-white border border-stone-200/70 rounded-2xl px-3.5 py-2.5 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-2.5 min-w-0 pr-2">
<div className="w-8 h-8 rounded-full bg-[#ffdbd1] flex items-center justify-center shrink-0">
<Icon name="notifications_active" className="text-[#da3700] text-[18px]" />
</div>
<div className="min-w-0">
<p className="font-bold text-[13px] text-stone-900 leading-tight">Instant Deal Alerts</p>
<p className="text-[11px] text-stone-500 truncate mt-0.5">Notify when followed stores launch flash deals</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" id="alert-toggle" type="checkbox" />
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#da3700] peer-checked:after:border-transparent shadow-inner"></div>
</label>
</div>
</div>
</div>

<div className="px-4 flex flex-col gap-3.5 pt-1">

<article className="bg-white border border-stone-200/70 rounded-2xl p-3.5 flex flex-col gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3 min-w-0">

<div className="relative w-12 h-12 rounded-xl bg-stone-100 border border-stone-200/60 overflow-hidden shrink-0 flex items-center justify-center">
<img alt="SoundCore Uganda" className="w-full h-full object-cover" src={`${assetBase}/images/61f2381e844ddfef.webp`} />
<div className="w-full h-full bg-[#1e293b] text-white hidden items-center justify-center font-bold text-base">SC</div>
<span className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white rounded-full p-[2px] flex items-center justify-center ring-2 ring-white">
<Icon name="check" className="text-[10px]" />
</span>
</div>

<div className="min-w-0 flex flex-col">
<h2 className="font-bold text-[15px] text-stone-900 truncate leading-snug">SoundCore Uganda Official</h2>

<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-semibold text-[10px] border border-slate-200/60">
<Icon name="verified" className="text-[11px] text-amber-600" />
                  Official Store
                </span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#ffdbd1]/70 text-[#ae2a00] font-semibold text-[10px]">
<Icon name="bolt" className="text-[11px]" />
                  Swift Express
                </span>
</div>
</div>
</div>

<div className="flex items-center gap-1 shrink-0">
<button className="follow-btn px-2.5 py-1 rounded-full border border-stone-300 bg-white text-stone-700 text-xs font-semibold flex items-center gap-1 active:scale-95 transition" data-active="true" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-[#da3700] check-icon" />
<span className="btn-text">Following</span>
</button>
<button aria-label="More options" className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 pt-0.5 border-t border-stone-100">
<span className="flex items-center gap-1">
<Icon name="storefront" className="text-[13px] text-stone-400" />
            Pioneer Mall Stall G-14, Kampala
          </span>
<span className="text-stone-300">•</span>
<span className="flex items-center gap-0.5 text-stone-800 font-semibold">
<Icon name="star" className="text-[13px] text-amber-500" />
            4.9 <span className="font-normal text-stone-400">(1.4k)</span>
</span>
<span className="text-stone-300">•</span>
<span className="text-[#006947] font-semibold">98% On-time dispatch</span>
</div>

<div className="bg-amber-50/70 border border-amber-200/60 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="confirmation_number" className="text-[16px] text-amber-700" />
<span className="font-semibold text-xs text-amber-900 truncate">5% OFF next escrow order</span>
</div>
<span className="font-bold text-[10px] tracking-wide text-emerald-800 px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 shrink-0 uppercase">Claimed</span>
</div>

<div className="flex items-stretch gap-2.5 overflow-x-auto -mx-3.5 px-3.5 pb-0.5 no-scrollbar">

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Space One" className="w-full h-full object-cover" src={`${assetBase}/images/da06d1f99675dd16.webp`} />
<span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-[#da3700] text-white font-bold text-[9px] uppercase tracking-wide">Deal</span>
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Space One ANC</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 385,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Soundcore Life Q30" className="w-full h-full object-cover" src={`${assetBase}/images/f8588ada4f74292e.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Soundcore Q30</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 260,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Earbuds R50i" className="w-full h-full object-cover" src={`${assetBase}/images/d597e2e4174004a0.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Earbuds R50i</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 89,000</p>
</div>

<div className="w-20 shrink-0 bg-stone-100/90 border border-stone-200 rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 text-stone-600 active:scale-98 transition cursor-pointer">
<div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center">
<Icon name="arrow_forward" className="text-[16px] text-stone-800" />
</div>
<span className="text-[11px] font-bold text-center leading-tight">All 46 Items</span>
</div>
</div>
</article>

<article className="bg-white border border-stone-200/70 rounded-2xl p-3.5 flex flex-col gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3 min-w-0">

<div className="relative w-12 h-12 rounded-xl bg-stone-100 border border-stone-200/60 overflow-hidden shrink-0 flex items-center justify-center">
<img alt="Kampala Smart Gadgets" className="w-full h-full object-cover" src={`${assetBase}/images/9aba1ac4fe97c60d.webp`} />
<div className="w-full h-full bg-[#da3700] text-white hidden items-center justify-center font-bold text-base">KS</div>
<span className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white rounded-full p-[2px] flex items-center justify-center ring-2 ring-white">
<Icon name="check" className="text-[10px]" />
</span>
</div>

<div className="min-w-0 flex flex-col">
<div className="flex items-center gap-1.5">
<h2 className="font-bold text-[15px] text-stone-900 truncate leading-snug">Kampala Smart Gadgets</h2>
<span className="bg-[#da3700] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full shrink-0">3 New</span>
</div>

<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-semibold text-[10px] border border-slate-200/60">
<Icon name="verified" className="text-[11px] text-amber-600" />
                  Official Store
                </span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-[10px] border border-emerald-200/60">
<Icon name="shield" className="text-[11px] text-emerald-600" />
                  Escrow Verified
                </span>
</div>
</div>
</div>

<div className="flex items-center gap-1 shrink-0">
<button className="follow-btn px-2.5 py-1 rounded-full border border-stone-300 bg-white text-stone-700 text-xs font-semibold flex items-center gap-1 active:scale-95 transition" data-active="true" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-[#da3700] check-icon" />
<span className="btn-text">Following</span>
</button>
<button aria-label="More options" className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 pt-0.5 border-t border-stone-100">
<span className="flex items-center gap-1 truncate">
<Icon name="apartment" className="text-[13px] text-stone-400" />
            Kikuubo Wholesale Complex, Ground Fl.
          </span>
<span className="text-stone-300">•</span>
<span className="flex items-center gap-0.5 text-stone-800 font-semibold shrink-0">
<Icon name="star" className="text-[13px] text-amber-500" />
            4.8 <span className="font-normal text-stone-400">(890)</span>
</span>
</div>

<div className="flex items-stretch gap-2.5 overflow-x-auto -mx-3.5 px-3.5 pb-0.5 no-scrollbar">

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Fast USB-C Charger" className="w-full h-full object-cover" src={`${assetBase}/images/d8a5be2b6bcbf0d8.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Fast USB-C GaN</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 65,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Powerbank 20,000mAh" className="w-full h-full object-cover" src={`${assetBase}/images/be7035352fff3a8a.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Powerbank 20k</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 115,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Screen Protector" className="w-full h-full object-cover" src={`${assetBase}/images/d1c35cda466284f8.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">9D Screen Glass</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 18,000</p>
</div>

<div className="w-20 shrink-0 bg-stone-100/90 border border-stone-200 rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 text-stone-600 active:scale-98 transition cursor-pointer">
<div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center">
<Icon name="arrow_forward" className="text-[16px] text-stone-800" />
</div>
<span className="text-[11px] font-bold text-center leading-tight">All 112 Items</span>
</div>
</div>
</article>

<article className="bg-white border border-stone-200/70 rounded-2xl p-3.5 flex flex-col gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">

<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3 min-w-0">

<div className="relative w-12 h-12 rounded-xl bg-stone-100 border border-stone-200/60 overflow-hidden shrink-0 flex items-center justify-center">
<img alt="Elegance Fashion Kampala" className="w-full h-full object-cover" src={`${assetBase}/images/d7f6a0ed7512cb5d.webp`} />
<div className="w-full h-full bg-[#881f00] text-white hidden items-center justify-center font-bold text-base">EF</div>
<span className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white rounded-full p-[2px] flex items-center justify-center ring-2 ring-white">
<Icon name="check" className="text-[10px]" />
</span>
</div>

<div className="min-w-0 flex flex-col">
<h2 className="font-bold text-[15px] text-stone-900 truncate leading-snug">Elegance Fashion Kampala</h2>

<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#ffdbd1]/70 text-[#ae2a00] font-semibold text-[10px]">
<Icon name="bolt" className="text-[11px]" />
                  Swift Express
                </span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-[10px] border border-emerald-200/60">
<Icon name="verified" className="text-[11px] text-emerald-600" />
                  Verified Merchant
                </span>
</div>
</div>
</div>

<div className="flex items-center gap-1 shrink-0">
<button className="follow-btn px-2.5 py-1 rounded-full border border-stone-300 bg-white text-stone-700 text-xs font-semibold flex items-center gap-1 active:scale-95 transition" data-active="true" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-[#da3700] check-icon" />
<span className="btn-text">Following</span>
</button>
<button aria-label="More options" className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 pt-0.5 border-t border-stone-100">
<span className="flex items-center gap-1">
<Icon name="location_on" className="text-[13px] text-stone-400" />
            Garden City Mall, Level 1
          </span>
<span className="text-stone-300">•</span>
<span className="flex items-center gap-0.5 text-stone-800 font-semibold">
<Icon name="star" className="text-[13px] text-amber-500" />
            4.7 <span className="font-normal text-stone-400">(412)</span>
</span>
</div>

<div className="flex items-stretch gap-2.5 overflow-x-auto -mx-3.5 px-3.5 pb-0.5 no-scrollbar">

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Kitenge Dresses" className="w-full h-full object-cover" src={`${assetBase}/images/4070a2183f3e3776.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Kitenge Dress</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 145,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Men's Linen Shirts" className="w-full h-full object-cover" src={`${assetBase}/images/cf60066eb5e552f0.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Linen Shirt</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 75,000</p>
</div>

<div className="w-28 shrink-0 bg-[#fff8f2] border border-stone-200/80 rounded-xl p-2 flex flex-col justify-between active:scale-98 transition cursor-pointer">
<div className="w-full aspect-square rounded-lg bg-stone-100 overflow-hidden relative mb-1.5">
<img alt="Leather Sandals" className="w-full h-full object-cover" src={`${assetBase}/images/ac6bfeb34137587d.webp`} />
</div>
<p className="font-semibold text-xs text-stone-900 truncate leading-snug">Leather Sandals</p>
<p className="font-bold text-[13px] text-[#ae2a00] mt-0.5">UGX 52,000</p>
</div>

<div className="w-20 shrink-0 bg-stone-100/90 border border-stone-200 rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 text-stone-600 active:scale-98 transition cursor-pointer">
<div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center">
<Icon name="arrow_forward" className="text-[16px] text-stone-800" />
</div>
<span className="text-[11px] font-bold text-center leading-tight">All 29 Items</span>
</div>
</div>
</article>
</div>

<div className="px-4 py-5 mb-2">
<div className="bg-white border border-stone-200/80 rounded-2xl p-3.5 flex items-start gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
<div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="verified_user" className="text-emerald-700 text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-bold text-xs text-stone-900">SwiftCart Escrow Guarantee</h3>
<p className="text-[11px] text-stone-600 leading-relaxed mt-0.5">
            Escrow Protected: your money is held by SwiftCart until you confirm delivery. Payments are processed by our secure payment partner.
          </p>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
