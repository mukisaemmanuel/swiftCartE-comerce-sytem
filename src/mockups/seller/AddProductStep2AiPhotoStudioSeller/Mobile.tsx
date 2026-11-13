// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/add_product_step_2_ai_photo_studio_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Go back or close" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><button aria-label="Open seller menu" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[22px]" /></button><div className="flex flex-col ml-1"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight truncate max-w-[150px] min-[380px]:max-w-[190px]">Product Add Step 2 Ai Photo Studio</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">SwiftCart Hub</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-icon-only.png" className="h-9 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="product-add-step-1-photos" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}><Icon name="add_photo_alternate" className="text-[20px]" /><span>Add Product Flow</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<span className="w-5 h-5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm flex items-center justify-center">✓</span>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary">Step 2 of 5</span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-secondary">Next: Pricing &amp; Stock</span>
</div>

<div className="grid grid-cols-5 gap-1.5 mb-2">
<div className="h-1.5 rounded-full bg-tertiary"></div>
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
</div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-medium">1. Photos (Done)</span>
<span className="font-label-sm text-label-sm font-bold text-primary">2. AI Studio</span>
<span className="font-label-sm text-label-sm">3. Details</span>
<span className="font-label-sm text-label-sm">4. Price</span>
<span className="font-label-sm text-label-sm">5. Review</span>
</div>
</div>

<div className="bg-surface-container-highest/60 rounded-xl p-space-md flex items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center shrink-0 text-primary-container">
<Icon name="auto_fix_high" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">14 of 20 Free AI Edits Left</span>
<span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-1.5 py-0.5 rounded font-bold">PRO</span>
</div>
<div className="flex items-center gap-1 text-secondary">
<Icon name="schedule" className="text-[14px]" />
<span className="font-label-sm text-label-sm">Resets in 6h 42m (KLA Time)</span>
</div>
</div>
</div>
<button className="bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold px-2.5 py-1.5 rounded-lg shadow-sm active:scale-95 shrink-0" onClick={() => alertToast('Action triggered')}>
      Get More
    </button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="magic_button" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">Make Photos Look Professional</h2>
<p className="font-body-sm text-body-sm text-secondary">Turn busy market snapshots into conversion-ready studio catalog cuts.</p>
</div>
</div>
</div>

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-1.5 rounded-lg">
<div className="flex items-center gap-1">
<button aria-label="Undo" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-90 transition-all" id="btn-undo" onClick={() => alertToast('Action triggered')}>
<Icon name="undo" className="text-[18px]" />
</button>
<button aria-label="Redo" className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container active:scale-90 transition-all" id="btn-redo" onClick={() => alertToast('Action triggered')}>
<Icon name="redo" className="text-[18px]" />
</button>
<span className="w-px h-4 bg-surface-variant mx-1"></span>
<button className="font-label-sm text-label-sm font-bold text-secondary hover:text-primary px-2 py-1 rounded" id="btn-revert" onClick={() => alertToast('Action triggered')}>
          Keep Original
        </button>
</div>
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span id="canvas-status">Edge Refined</span>
</div>
</div>

<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden shadow-inner select-none" id="slider-container">

<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover pointer-events-none" data-alt="Raw unstaged commercial photo taken inside a vibrant cluttered Kikuubo Kampala electronics stall. Wireless black Bluetooth headphones rest on a crowded wooden shelf surrounded by cables, cardboard retail cartons, and fluorescent overhead glare in natural warm African market ambience." src={`${assetBase}/images/c125c83e882d7ffd.webp`} />
<div className="absolute bottom-3 left-3 bg-inverse-surface/85 backdrop-blur-md px-2 py-1 rounded font-label-sm text-label-sm font-bold text-inverse-on-surface shadow-sm">
          RAW SHOP SNAP
        </div>
</div>

<div className="absolute inset-0 h-full overflow-hidden" id="slider-after-layer" style={{"width":"54%"}}>
<div className="absolute inset-0 w-[358px] min-[390px]:w-[358px] h-full" id="slider-inner-content">
<img className="w-full h-full object-cover pointer-events-none" data-alt="Ultra-clean studio catalog photo of premium black wireless over-ear headphones floating on a spotless soft warm-cream seamless background with balanced softbox studio lighting, crisp high-contrast specular edge highlights, subtle gentle ambient contact drop shadow beneath, sharp e-commerce retail display." src={`${assetBase}/images/73fffee4d939817e.webp`} />
</div>
<div className="absolute bottom-3 left-3 bg-primary-container text-on-primary px-2 py-1 rounded font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
          STUDIO AI
        </div>
</div>

<div className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize touch-none z-20" id="slider-handle" style={{"left":"54%"}}>
<div className="w-0.5 h-full bg-surface-container-lowest shadow-md"></div>
<div className="absolute w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface shadow-xl flex items-center justify-center">
<Icon name="drag_indicator" className="text-[18px]" />
</div>
</div>

<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-2 py-1 rounded shadow-sm flex items-center gap-1 pointer-events-none">
<Icon name="touch_app" className="text-[14px] text-tertiary" />
        Slide to Compare
      </div>
</div>

<div className="space-y-space-xs pt-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">One-Tap Studio Presets</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Auto-Aligned</span>
</div>

<div className="grid grid-cols-4 gap-2 pt-1">
<button className="preset-btn active-preset p-2 rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-1 text-center transition-all group" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center group-hover:scale-105">
<span className="w-3 h-3 rounded-full bg-surface-dim"></span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Pure White</span>
</button>
<button className="preset-btn p-2 rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-1 text-center transition-all group" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-full bg-[#FFF8F2] shadow-sm flex items-center justify-center group-hover:scale-105">
<span className="w-3 h-3 rounded-full bg-[#f3d9c7]"></span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Warm Cream</span>
</button>
<button className="preset-btn p-2 rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-1 text-center transition-all group" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-full bg-surface-dim shadow-sm flex items-center justify-center group-hover:scale-105">
<span className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Light Grey</span>
</button>
<button className="preset-btn p-2 rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-1 text-center transition-all group" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-surface-variant via-surface to-primary-fixed shadow-sm flex items-center justify-center group-hover:scale-105">
<Icon name="blur_on" className="text-[14px] text-primary" />
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Soft Studio</span>
</button>
</div>

<div className="grid grid-cols-3 gap-2 pt-2">
<button className="py-2 px-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center gap-1.5 transition-all text-on-surface" id="btn-brighten" onClick={() => toggleTheme()}>
<Icon name="light_mode" className="text-[18px] text-primary-container" />
<span className="font-label-sm text-label-sm font-bold">Brighten</span>
</button>
<button className="py-2 px-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center gap-1.5 transition-all text-on-surface" id="btn-crop" onClick={() => alertToast('Action triggered')}>
<Icon name="crop_square" className="text-[18px] text-tertiary" />
<span className="font-label-sm text-label-sm font-bold">1:1 Square</span>
</button>
<button className="py-2 px-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center gap-1.5 transition-all text-on-surface" id="btn-rotate" onClick={() => alertToast('Action triggered')}>
<Icon name="rotate_right" className="text-[18px] text-secondary" />
<span className="font-label-sm text-label-sm font-bold">Rotate 90°</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">Studio Pipeline Status</span>
<div className="flex gap-1.5">
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" onClick={() => alertToast('Action triggered')}>Simulate Scan</button>
<span className="text-secondary">•</span>
<button className="font-label-sm text-label-sm text-secondary font-bold hover:underline" onClick={() => alertToast('Action triggered')}>Test Fallback</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg p-space-sm space-y-1.5" id="progress-card">
<div className="flex items-center justify-between text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="sync" className="text-[16px] text-primary animate-spin" />
<span className="font-label-sm text-label-sm font-bold" id="progress-label">Enhancing product edge detection (72%)...</span>
</div>
<span className="font-label-sm text-label-sm font-extrabold text-primary" id="progress-percent">72%</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-300" id="progress-fill" style={{"width":"72%"}}></div>
</div>
</div>

<div className="hidden bg-surface-container-highest rounded-lg p-space-sm flex items-start gap-space-sm" id="fallback-banner">
<div className="w-6 h-6 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0 mt-0.5">
<Icon name="info" className="text-[15px]" />
</div>
<div className="flex-1 min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-surface">Couldn't auto-edit this photo due to complex background.</p>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">You can keep the original photo or re-shoot against a plainer background.</p>
<div className="flex items-center gap-2 mt-2">
<button className="bg-surface-container-lowest text-on-surface px-2 py-1 rounded font-label-sm text-label-sm font-bold shadow-sm" onClick={() => alertToast('Action triggered')}>
            Keep Original Photo
          </button>
<button className="text-primary px-2 py-1 rounded font-label-sm text-label-sm font-bold" onClick={() => alertToast('Action triggered')}>
            Dismiss
          </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm shadow-sm">
<div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
<Icon name="gavel" className="text-[17px]" />
</div>
<div className="flex-1">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">SwiftCart Quality Policy</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
        Photos must show the real item. Only background &amp; lighting are enhanced. Replicas &amp; deceptive edits are flagged by automated marketplace audit.
      </p>
</div>
</div>

<div className="pt-space-xs pb-space-md flex items-center gap-space-sm">
<button className="flex-1 py-3 px-space-md rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold shadow-sm active:scale-95 transition-all text-center" onClick={() => alertToast('Action triggered')}>
      Skip AI Studio
    </button>
<button className="flex-[1.4] py-3 px-space-md rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span>Next: AI Description</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
