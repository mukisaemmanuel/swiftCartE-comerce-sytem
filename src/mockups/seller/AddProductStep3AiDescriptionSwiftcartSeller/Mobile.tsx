// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/add_product_step_3_ai_description_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface AddProductStep3AiDescriptionSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep3AiDescriptionSwiftcartSeller: React.FC<AddProductStep3AiDescriptionSwiftcartSellerProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      {drawerOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setDrawerOpen(false)} />}
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs"><button aria-label="Go back or close" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => setDrawerOpen(false)}><Icon name="arrow_back" className="text-[24px]" /></button><button aria-label="Open seller menu" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex flex-col ml-1"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight truncate max-w-[150px] min-[380px]:max-w-[190px]">Product Add Step 3 Ai Description &amp; Copywriter</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">SwiftCart Hub</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className={`fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)]  flex flex-col pt-safe pb-safe overflow-hidden fixed z-50 select-none ${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`} id="seller-drawer"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-9 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={() => setDrawerOpen(false)}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={() => setDrawerOpen(false)}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={() => setDrawerOpen(false)}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={() => setDrawerOpen(false)}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={() => setDrawerOpen(false)}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="product-add-step-1-photos" href="#" onClick={() => setDrawerOpen(false)}><Icon name="add_photo_alternate" className="text-[20px]" /><span>Add Product Flow</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={() => setDrawerOpen(false)}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={() => setDrawerOpen(false)}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={() => setDrawerOpen(false)}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={() => setDrawerOpen(false)}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => setDrawerOpen(false)}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => setDrawerOpen(false)}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-margin pb-space-xl space-y-space-md">

<div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">3</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Step 3 of 5: AI Copywriter</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="auto_awesome" className="text-[14px]" /> Vision-Synced
      </span>
</div>

<div className="grid grid-cols-5 gap-1.5 pt-1">
<div className="h-1.5 rounded-full bg-tertiary-container"></div>
<div className="h-1.5 rounded-full bg-tertiary-container"></div>
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
<span className="text-tertiary font-bold">1. Media</span>
<span className="text-tertiary font-bold">2. Studio</span>
<span className="text-primary font-bold">3. Copy</span>
<span>4. Pricing</span>
<span>5. Review</span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
<Icon name="arrow_back_ios_new" className="text-primary text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Write My Description</h2>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Vision v3</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Reads uploaded photo features and category to generate optimized marketplace copy tailored for Kampala buyers.
        </p>
</div>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-lg overflow-x-auto">
<div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Close-up commercial product shot of modern matte black over-ear ANC headphones with plush protein leather earcups, isolated on clean minimalist studio background, soft warm cinematic lighting" src="/images/838c56061b17bbd2.webp" />
<span className="absolute bottom-0 inset-x-0 bg-inverse-surface/75 text-inverse-on-surface font-label-sm text-[8px] text-center">Hero</span>
</div>
<div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Side profile view of premium wireless noise cancelling headphones highlighting metallic pivot hinges and textured matte headband, clean studio light, modern commercial style" src="/images/feccda90013a433a.webp" />
</div>
<div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Detailed macro shot of USB-C fast charging port and tactile volume control buttons on sleek audio gear, soft high-contrast ambient studio lighting" src="/images/3d0019b4bb46f25f.webp" />
</div>
<div className="flex flex-col justify-center px-space-xs min-w-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Detected in Kikuubo:</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Over-Ear ANC Headset • Black • USB-C</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold">Copy Tone Style</label>
<span className="font-label-sm text-label-sm text-on-secondary-container">Optimized for buyer mindset</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs" id="tone-selector">
<button className="tone-pill flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface text-left font-label-sm text-label-sm transition-all shadow-sm" type="button">
<div className="flex items-center gap-1.5">
<Icon name="storefront" className="text-[16px] text-primary" />
<span className="font-bold">Simple (Kikuubo Direct)</span>
</div>
</button>
<button className="tone-pill flex items-center justify-between px-space-sm py-2 rounded-lg bg-primary text-on-primary text-left font-label-sm text-label-sm transition-all shadow-sm" type="button">
<div className="flex items-center gap-1.5">
<Icon name="verified" className="text-[16px]" />
<span className="font-bold">Professional (Official Store)</span>
</div>
<Icon name="check" className="text-[14px]" />
</button>
<button className="tone-pill flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface text-left font-label-sm text-label-sm transition-all shadow-sm" type="button">
<div className="flex items-center gap-1.5">
<Icon name="bolt" className="text-[16px] text-primary-container" />
<span className="font-bold">Persuasive (Flash Deal)</span>
</div>
</button>
</div>
</div>

<div className="space-y-space-xs">
<label className="font-label-md text-label-md text-on-surface font-bold">Copywriting Language</label>
<div className="flex items-center gap-space-xs flex-wrap">
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold shadow-sm" type="button">
<Icon name="language" className="text-[15px]" />
<span>English (Default)</span>
<Icon name="check" className="text-[14px]" />
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold opacity-90" type="button">
<span>Luganda</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[9px] font-extrabold uppercase">Beta Soon</span>
</button>
</div>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Generated Product Copy</span>
<button className="flex items-center gap-1 text-primary hover:text-on-primary-container font-label-sm text-label-sm font-bold transition-transform active:rotate-180" type="button">
<Icon name="restart_alt" className="text-[16px]" />
<span>Re-craft Copy</span>
</button>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary" htmlFor="product-title">
          1. Product Title
        </label>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm font-bold text-tertiary" id="title-counter">58/100</span>
<button aria-label="Copy Title" className="p-1 rounded-md text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" type="button">
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-surface-container-low text-on-surface rounded-lg p-space-sm font-label-lg text-label-lg font-bold leading-snug resize-none outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="product-title" maxLength={100} rows={2}>Sony WH-1000XM4 Wireless Noise-Cancelling Headphones - Black</textarea>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="check_circle" className="text-[13px] text-tertiary" />
        High conversion title structure: Brand + Model + Core Feature + Color
      </p>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary" htmlFor="product-hook">
          2. Short Summary / Hook
        </label>
<button aria-label="Copy Hook" className="p-1 rounded-md text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" type="button">
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
<textarea className="w-full bg-surface-container-low text-on-surface rounded-lg p-space-sm font-body-md text-body-md leading-relaxed resize-none outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="product-hook" rows={3}>Experience pure acoustic isolation in noisy Kampala traffic and busy workspaces. Features industry-leading Active Noise Cancellation, 30-hour nonstop battery, and crystal-clear voice clarity for business calls and seamless travel.</textarea>
<span className="font-label-sm text-label-sm text-on-secondary-container">Appears above the fold before the instant checkout button.</span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
          3. Key Bullet Points (4 Highlights)
        </label>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="speed" className="text-[14px]" /> Quick Read
        </span>
</div>
<div className="space-y-space-xs">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<Icon name="check" className="text-primary text-[18px] shrink-0" />
<input className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none" type="text" value="Dual Noise Sensor technology with HD Noise Cancelling Processor QN1" />
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<Icon name="check" className="text-primary text-[18px] shrink-0" />
<input className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none" type="text" value="Up to 30-hour battery life with quick charging (10 min charge = 5 hours playback)" />
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<Icon name="check" className="text-primary text-[18px] shrink-0" />
<input className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none" type="text" value="Touch sensor controls to pause, skip tracks, and answer incoming calls instantly" />
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<Icon name="check" className="text-primary text-[18px] shrink-0" />
<input className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none" type="text" value="Multipoint connection: Seamlessly switch between phone and laptop audio" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
          4. Search Keywords &amp; Tags
        </label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tap × to remove</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1" id="tag-cloud">
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span>ANC headphones</span>
<button className="text-on-surface-variant hover:text-error" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span>Wireless audio Kampala</span>
<button className="text-on-surface-variant hover:text-error" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span>Bluetooth 5.3</span>
<button className="text-on-surface-variant hover:text-error" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span>Sony Original</span>
<button className="text-on-surface-variant hover:text-error" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span>Over Ear Gaming</span>
<button className="text-on-surface-variant hover:text-error" type="button">×</button>
</span>
<button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold active:scale-95" type="button">
<Icon name="add" className="text-[13px]" /> Add Tag
        </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex items-start gap-space-sm bg-primary-fixed/30 p-space-sm rounded-lg">
<Icon name="warning" className="text-primary text-[22px] shrink-0 mt-0.5" />
<div className="min-w-0">
<h3 className="font-label-lg text-label-lg font-bold text-on-primary-fixed">Required Attention</h3>
<p className="font-body-sm text-body-sm text-on-primary-container">
          Fields AI could not reliably verify from photos. Complete these 3 items before moving to Pricing.
        </p>
</div>
</div>
<div className="space-y-space-md">

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Size / Dimensions</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="info" className="text-[12px]" /> Please confirm
          </span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="block font-label-sm text-[10px] text-secondary">Length (cm)</span>
<input className="w-full text-center bg-transparent font-label-md text-label-md font-bold text-on-surface outline-none" id="dim-l" type="number" value="18.5" />
</div>
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="block font-label-sm text-[10px] text-secondary">Width (cm)</span>
<input className="w-full text-center bg-transparent font-label-md text-label-md font-bold text-on-surface outline-none" id="dim-w" type="number" value="7.8" />
</div>
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="block font-label-sm text-[10px] text-secondary">Weight (g)</span>
<input className="w-full text-center bg-transparent font-label-md text-label-md font-bold text-on-surface outline-none" id="dim-wt" type="number" value="254" />
</div>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Shell &amp; Earpad Material</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="info" className="text-[12px]" /> Please confirm
          </span>
</div>
<select className="w-full bg-surface-container-low text-on-surface font-label-md text-label-md p-space-sm rounded-lg outline-none cursor-pointer" id="material-select">
<option selected={true} value="protein-leather">Protein Leather &amp; Matte Polymer Plastic</option>
<option value="genuine-leather">Genuine Leather &amp; Brushed Aluminum</option>
<option value="breathable-mesh">Breathable Fabric Mesh &amp; ABS</option>
<option value="other">Other Synthetic Blend</option>
</select>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Warranty &amp; Guarantee</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="info" className="text-[12px]" /> Please confirm
          </span>
</div>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input checked={true} className="accent-primary-container w-4 h-4" name="warranty" type="radio" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">12 Months Official</span>
</label>
<label className="flex items-center gap-2 p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="accent-primary-container w-4 h-4" name="warranty" type="radio" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">6 Months Kikuubo Store</span>
</label>
<label className="flex items-center gap-2 p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="accent-primary-container w-4 h-4" name="warranty" type="radio" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">7 Days Replacement</span>
</label>
<label className="flex items-center gap-2 p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="accent-primary-container w-4 h-4" name="warranty" type="radio" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">No Warranty / As Is</span>
</label>
</div>
</div>
</div>
</div>

<div className="pt-space-xs space-y-space-xs">
<div className="flex items-center gap-space-sm">
<button className="w-1/3 py-3.5 px-2 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold active:scale-95 transition-all text-center truncate" type="button">
        Skip / Manual
      </button>
<button className="w-2/3 py-3.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all" type="button">
<span>Next: Pricing &amp; Stock</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
<div className="text-center">
<span className="font-label-sm text-label-sm text-secondary">Autosaved to drafts • You can edit any field later</span>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default AddProductStep3AiDescriptionSwiftcartSeller;
