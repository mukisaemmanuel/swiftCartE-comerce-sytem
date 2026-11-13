// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_add_product_with_ai_studio_tablet_dark/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="h-28 w-full px-gutter flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">SwiftCart Seller Hub</span><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant">SoundCore Uganda Official</span><span className="text-outline-variant font-label-sm text-label-sm">•</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-[140px]">Pioneer Mall G-14</span><div className="flex items-center gap-1 bg-surface-container-high px-space-xs py-0.5 rounded-full"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm text-tertiary">Open</span></div></div></div></div><div className="hidden md:flex items-center gap-space-md"><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Reserve</span><span className="font-label-md text-label-md text-on-surface">UGX 14,850,000</span></div></div><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg"><Icon name="moped" className="text-action-gradient-start text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Today Orders</span><span className="font-label-md text-label-md text-on-surface">28 Dispatches</span></div></div></div><div className="flex items-center gap-space-xs"><button className="bg-surface-container-high px-space-xs py-1 rounded-full flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-action-gradient-start text-[16px]" /><span className="font-label-sm text-label-sm text-on-surface">Dark</span></button><div className="relative bg-surface-container-high p-2 rounded-full flex items-center justify-center"><Icon name="notifications" className="text-on-surface-variant text-[20px]" /><span className="absolute -top-1 -right-1 bg-danger-penalty text-on-primary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span>Overview</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span>Orders</span><span className="bg-action-gradient-end text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">6</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span>Products</span><span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">48</span></a><a aria-current="page" className="px-space-sm py-1.5 whitespace-nowrap transition-colors flex items-center gap-1.5 bg-primary-container text-on-primary-container font-bold rounded-lg" data-path="add-product" href="#" onClick={() => alertToast('Action triggered')}><span>+ AI Studio</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span>Riders &amp; Fleet</span><span className="bg-emerald-escrow/20 text-tertiary font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">4</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span>Disputes</span><span className="bg-danger-penalty text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">1</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span>Wallet (UGX)</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="analytics-and-store-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span>Analytics &amp; Settings</span></a></nav></div></header>
<main className="w-full pt-28 bg-surface flex-1"><div className="flex flex-col w-full">
<div className="px-gutter md:px-gutter-desktop py-space-md flex flex-col gap-space-lg max-w-[1200px] mx-auto w-full">

<section className="bg-surface-container-low rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between gap-space-xs overflow-x-auto pb-1 scrollbar-none">

<div className="flex items-center gap-space-xs shrink-0 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-md text-label-md shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Step 1</span>
<span className="font-label-md text-label-md text-on-surface line-through opacity-70">Photos &amp; Media</span>
</div>
</div>
<div className="h-0.5 w-6 bg-tertiary-container shrink-0"></div>

<div className="flex items-center gap-space-xs shrink-0 bg-surface-container px-space-sm py-1.5 rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-action-gradient-start to-action-gradient-end text-on-primary-container flex items-center justify-center font-label-md text-label-md shadow-md animate-pulse">
<Icon name="magic_button" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary">Active Step</span>
<span className="font-label-lg text-label-lg text-on-surface">AI Photo Studio</span>
</div>
</div>
<div className="h-0.5 w-6 bg-surface-container-highest shrink-0"></div>

<div className="flex items-center gap-space-xs shrink-0 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
            3
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 3</span>
<span className="font-label-md text-label-md text-on-surface-variant">Description &amp; Specs</span>
</div>
</div>
<div className="h-0.5 w-6 bg-surface-container-highest shrink-0"></div>

<div className="flex items-center gap-space-xs shrink-0 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
            4
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 4</span>
<span className="font-label-md text-label-md text-on-surface-variant">Catalog &amp; Pricing</span>
</div>
</div>
<div className="h-0.5 w-6 bg-surface-container-highest shrink-0"></div>

<div className="flex items-center gap-space-xs shrink-0 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
            5
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 5</span>
<span className="font-label-md text-label-md text-on-surface-variant">Preview &amp; Submit</span>
</div>
</div>
</div>
</section>

<div className="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-md rounded-xl flex flex-wrap items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
<Icon name="auto_awesome" className="text-[22px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">AI Enhancement Complete</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Saved roughly 12 minutes of manual Photoshop manipulation &amp; lighting adjustments.</p>
</div>
</div>
<div className="flex items-center gap-space-xs bg-emerald-escrow/10 px-space-sm py-1.5 rounded-full text-emerald-escrow">
<Icon name="verified" className="text-[18px]" />
<span className="font-label-sm text-label-sm">High-Resolution Studio Standard (2400 × 2400)</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl aspect-square flex flex-col justify-between p-space-md group">

<div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-16 -right-16 w-64 h-64 bg-action-gradient-start/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between">
<span className="bg-surface-container/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
              Enhanced Live Canvas
            </span>
<div className="flex items-center gap-space-xs">
<button className="bg-surface-container/80 backdrop-blur-md text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors" title="Zoom In" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="zoom_in" className="text-[18px]" />
</button>
<button className="bg-surface-container/80 backdrop-blur-md text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors" id="toggleCompareBtn" title="Compare to Original" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="compare" className="text-[18px]" />
</button>
<button className="bg-surface-container/80 backdrop-blur-md text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors" title="Reset Changes" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="restart_alt" className="text-[18px]" />
</button>
</div>
</div>

<div className="relative z-0 flex-1 flex items-center justify-center p-space-lg my-auto">
<img className="w-full max-h-[380px] object-contain drop-shadow-2xl transition-all duration-300" data-alt="A commercial e-commerce product photograph of SoundCore Space One matte black over-ear wireless noise cancelling headphones positioned centrally on a seamless ultra-clean studio pedestal with subtle softbox edge reflections, crisp metallic hinges, dynamic soft shadows, dark premium aesthetic with 8k fidelity." id="heroProductImage" src={`${assetBase}/images/22f370770e55e61c.webp`} />

<div className="absolute bottom-2 right-2 bg-surface-container-high/90 backdrop-blur-md px-space-sm py-1 rounded-lg flex items-center gap-1.5 shadow-md">
<Icon name="verified_user" className="text-emerald-escrow text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">SwiftCart Escrow</span>
<span className="text-[9px] text-tertiary">Verified Genuine Serial</span>
</div>
</div>
</div>

<div className="relative z-10 flex items-center justify-between bg-surface-container/90 backdrop-blur-md px-space-md py-space-xs rounded-lg text-on-surface">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm">
<span className="text-on-surface-variant">Resolution:</span>
<span className="text-on-surface font-bold">2400 × 2400 px</span>
<span className="text-outline-variant">•</span>
<span className="text-on-surface-variant">Color Space:</span>
<span className="text-on-surface font-bold">sRGB Rec.709</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="cloud_done" className="text-[14px]" /> Kampala Cloud Synced
            </span>
</div>
</div>

<div className="grid grid-cols-4 gap-space-sm">

<button className="flex flex-col items-center bg-surface-container-low hover:bg-surface-container p-space-xs rounded-xl transition-all text-left group" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-full aspect-square bg-surface-container-highest rounded-lg overflow-hidden mb-space-xs relative">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" data-alt="Raw camera photograph of black over-ear headphones on an uneven store counter with harsh glare and store clutter in Pioneer Mall Uganda." src={`${assetBase}/images/e233a49c350d3df6.webp`} />
<span className="absolute top-1 left-1 bg-surface-container-lowest/80 text-[10px] font-label-sm text-on-surface-variant px-1 rounded">Raw</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate w-full">Original Upload</span>
</button>

<button className="flex flex-col items-center bg-surface-container p-space-xs rounded-xl shadow-md text-left ring-2 ring-primary" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-full aspect-square bg-surface-container-lowest rounded-lg overflow-hidden mb-space-xs relative">
<img className="w-full h-full object-contain p-1" data-alt="High key studio product cutout of SoundCore Space One headphones isolated on spotless minimalist stage with crisp ambient contact shadows." src={`${assetBase}/images/4c0b12840885abf4.webp`} />
<span className="absolute top-1 left-1 bg-primary text-on-primary text-[10px] font-label-sm px-1 rounded">Active</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold truncate w-full">Clean Studio</span>
</button>

<button className="flex flex-col items-center bg-surface-container-low hover:bg-surface-container p-space-xs rounded-xl transition-all text-left group" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-full aspect-square bg-surface-container-highest rounded-lg overflow-hidden mb-space-xs relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Lifestyle photo in a modern Kampala urban cafe with timber table, latte art in background, and SoundCore headphones resting naturally in soft morning sunlight." src={`${assetBase}/images/7d71f67addf03171.webp`} />
<span className="absolute top-1 left-1 bg-surface-container-lowest/80 text-[10px] font-label-sm text-tertiary px-1 rounded">AI Scene</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate w-full">Kampala Cafe</span>
</button>

<button className="flex flex-col items-center bg-surface-container-low hover:bg-surface-container p-space-xs rounded-xl transition-all text-left group" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-full aspect-square bg-surface-container-highest rounded-lg overflow-hidden mb-space-xs relative flex items-center justify-center">
<img className="w-full h-full object-contain p-1" data-alt="Floating isolated product rendering of Space One headphones with alpha checkerboard transparency and pristine edge masking." src={`${assetBase}/images/9e9e3b8d4299ae8c.webp`} />
<span className="absolute top-1 left-1 bg-surface-container-lowest/80 text-[10px] font-label-sm text-secondary px-1 rounded">Alpha</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate w-full">Cutout PNG</span>
</button>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface flex items-center gap-1.5">
<Icon name="tune" className="text-action-gradient-start text-[20px]" />
              AI Studio Enhancements
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant GPU Acceleration</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<button className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high text-on-surface text-left" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="backspace" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md">Background Removal</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Neutral Studio Tone</span>
</div>
</div>
<Icon name="toggle_on" className="text-emerald-escrow text-[20px]" />
</button>

<button className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors text-left" type="button" onClick={() => toggleTheme()}>
<div className="flex items-center gap-space-sm">
<Icon name="wb_sunny" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md">Smart Shadow &amp; Floor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Subtle Pedestal Reflection</span>
</div>
</div>
<Icon name="toggle_on" className="text-emerald-escrow text-[20px]" />
</button>

<button className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors text-left" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="hd" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md">4K HDR Upscaler</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">De-noised &amp; Sharpened</span>
</div>
</div>
<Icon name="toggle_on" className="text-emerald-escrow text-[20px]" />
</button>

<button className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors text-left" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<Icon name="verified" className="text-emerald-escrow text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md">SwiftCart Trust Stamp</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Guarantee Badge</span>
</div>
</div>
<Icon name="toggle_on" className="text-emerald-escrow text-[20px]" />
</button>
</div>
</div>
</section>

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="center_focus_strong" className="text-action-gradient-start text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">AI Detection Insights</h3>
</div>
<span className="bg-tertiary-container/40 text-tertiary font-label-sm text-label-sm px-space-xs py-0.5 rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              99.8% Vision Match
            </span>
</div>
<div className="grid grid-cols-2 gap-space-xs bg-surface-container p-space-sm rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Identified Brand</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Anker SoundCore</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Detected Model</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Space One ANC</span>
</div>
<div className="flex flex-col mt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Catalog Path</span>
<span className="font-label-md text-label-md text-on-surface truncate">Electronics &gt; Audio</span>
</div>
<div className="flex flex-col mt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Detected Color / SKU</span>
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-surface-dark shadow-sm"></span> Jet Black (SPO-BLK)
              </span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="smart_toy" className="text-action-gradient-start text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Auto-Generated Listing Copy</h3>
</div>

<div className="flex items-center bg-surface-container-highest p-0.5 rounded-lg">
<button className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-primary-container text-on-primary-container font-bold" id="langEnBtn" type="button" onClick={() => alertToast('Action triggered')}>English</button>
<button className="px-space-xs py-0.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" id="langLgBtn" type="button" onClick={() => alertToast('Action triggered')}>Luganda</button>
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Product Title (SEO &amp; Search Optimized)</label>
<div className="relative">
<input className="w-full bg-surface-container text-on-surface rounded-lg px-space-sm py-2 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary pr-9" id="listingTitleInput" type="text" value="SoundCore Space One ANC Headphones - 2X Voice Reduction & 55H Battery" />
<Icon name="verified" className="absolute right-2.5 top-2.5 text-tertiary text-[18px]" />
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Localized Highlights &amp; Logistics Perks</label>
<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface" id="listingHighlights">
<div className="flex items-start gap-space-xs">
<Icon name="check_circle" className="text-action-gradient-start text-[16px] shrink-0 mt-0.5" />
<span>Adaptive Active Noise Cancelling with 2X stronger vocal isolation in crowded spaces.</span>
</div>
<div className="flex items-start gap-space-xs">
<Icon name="check_circle" className="text-action-gradient-start text-[16px] shrink-0 mt-0.5" />
<span>LDAC Hi-Res Certified audio with up to 55-hour marathon playtime.</span>
</div>
<div className="flex items-start gap-space-xs">
<Icon name="moped" className="text-emerald-escrow text-[16px] shrink-0 mt-0.5" />
<span className="font-bold text-tertiary">Kampala 1-Hour Boda Express Dispatch available from Pioneer Mall.</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm mt-1">
<button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md py-2 px-space-sm rounded-lg flex items-center justify-center gap-1.5 transition-colors" id="regenCopyBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="translate" className="text-[18px]" />
<span>Yogera mu Luganda</span>
</button>
<button className="bg-tertiary-container hover:bg-tertiary-container/80 text-on-tertiary-container font-label-md text-label-md py-2 px-space-md rounded-lg flex items-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="task_alt" className="text-[18px]" />
<span>Accept Copy</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="payments" className="text-emerald-escrow text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pricing &amp; Escrow Settlement</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Currency: <strong className="text-on-surface">UGX Only</strong></span>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Suggested Selling Price</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-action-gradient-start">248,500</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary mt-1 flex items-center gap-0.5">
<Icon name="trending_up" className="text-[14px]" /> Kampala Avg: 240k - 270k
              </span>
</div>
<div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Net Settlement</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-emerald-escrow">228,620</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Net to MTN / Airtel wallet (-8%)
              </span>
</div>
</div>

<div className="flex items-center gap-space-xs bg-surface-container/60 p-space-xs rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<Icon name="lock_clock" className="text-emerald-escrow text-[18px] shrink-0" />
<span>Customer funds held safely in Escrow Reserve until delivery OTP confirms at handoff.</span>
</div>
</div>
</section>
</div>

<div className="sticky bottom-4 z-40 bg-surface-container/95 backdrop-blur-xl p-space-md rounded-2xl shadow-2xl flex items-center justify-between gap-space-md">

<button className="h-[50px] px-space-md rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-lg text-label-lg flex items-center gap-2 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[20px]" />
<span className="hidden sm:inline">Back to Step 1: Photos</span>
<span className="sm:hidden">Back</span>
</button>

<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<Icon name="cloud_sync" className="text-tertiary text-[18px]" />
<span className="hidden md:inline">Draft saved at</span>
<span className="text-on-surface font-bold">14:52 EAT</span>
</div>

<button className="h-[52px] px-space-lg rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2" type="button" onClick={() => alertToast('Action triggered')}>
<span>Continue to Step 3</span>
<Icon name="arrow_forward" className="text-[22px]" />
</button>
</div>
</div>
</div>
</main>
<footer className="w-full bg-surface-container-low py-space-sm shadow-[0_-1px_8px_rgba(0,0,0,0.5)]"><div className="w-full px-gutter flex flex-col md:flex-row items-center justify-between gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><div className="flex items-center gap-space-xs flex-wrap justify-center"><div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span>William St Central Hub: Live (99.8%)</span></div><span className="hidden md:inline text-outline-variant">|</span><div className="flex items-center gap-1"><Icon name="electric_moped" className="text-action-gradient-start text-[14px]" /><span>Kampala Boda Dispatch Mesh Active</span></div></div><div className="flex items-center gap-space-xs flex-wrap justify-center"><div className="flex items-center gap-1 text-tertiary"><Icon name="lock" className="text-[14px]" /><span>Escrow Secured under Bank of Uganda NPS</span></div><span className="hidden md:inline text-outline-variant">|</span><span>© 2025 SwiftCart Uganda Ltd.</span></div></div></footer>
    </div>
  );
};

export default Screen;
