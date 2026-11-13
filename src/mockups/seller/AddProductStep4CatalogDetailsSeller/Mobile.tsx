// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/add_product_step_4_catalog_details_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Go back or close" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><button aria-label="Open seller menu" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[22px]" /></button><div className="flex flex-col ml-1"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight truncate max-w-[150px] min-[380px]:max-w-[190px]">Product Add Step 4 Catalog Details &amp; Variants</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">SwiftCart Hub</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-icon-only.png" className="h-9 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="product-add-step-1-photos" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}><Icon name="add_photo_alternate" className="text-[20px]" /><span>Add Product Flow</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-28">

<section className="bg-surface-container-low px-gutter py-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Step 4 of 5</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Details &amp; Inventory</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full">80% Done</span>
</div>

<div className="grid grid-cols-5 gap-1.5 mb-space-xs">
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-primary-container"></div>
<div className="h-1.5 rounded-full bg-primary relative overflow-hidden shadow-sm">
<div className="absolute inset-0 bg-white/30 animate-pulse"></div>
</div>
<div className="h-1.5 rounded-full bg-surface-container-highest"></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm text-secondary">Media</span>
<span className="font-label-sm text-label-sm text-secondary">Specs</span>
<span className="font-label-sm text-label-sm text-secondary">Desc</span>
<span className="font-label-sm text-label-sm font-bold text-primary">Pricing &amp; Stock</span>
<span className="font-label-sm text-label-sm text-secondary-fixed-dim">Review</span>
</div>
</section>

<div className="px-gutter space-y-space-lg mt-space-md">

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Assigned Category</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[14px]" /> Auto-Matched
        </span>
</div>
<div className="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
<Icon name="headphones" className="text-[18px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg font-bold text-on-surface truncate">Electronics &amp; Audio &gt; Over-Ear Headphones</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Standard 8% category marketplace fee applies</div>
</div>
</div>
<button aria-label="Change Category" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="expand_more" className="text-[20px]" />
</button>
</div>
</section>

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pricing &amp; Earnings</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Set realistic buyer pricing in Ugandan Shillings (UGX)</p>
</div>
<span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold">UGX Only</span>
</div>
<div className="grid grid-cols-1 gap-space-md">

<div className="space-y-1">
<label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between" htmlFor="selling-price">
<span>Selling Price <span className="text-error">*</span></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Active Buyer Price</span>
</label>
<div className="relative flex items-center">
<span className="absolute left-3.5 font-label-md text-label-md font-bold text-on-surface-variant select-none">UGX</span>
<input className="w-full bg-surface-container-low text-on-surface font-price-display text-price-display font-extrabold pl-14 pr-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all placeholder:text-secondary-fixed-dim" id="selling-price" inputMode="numeric" type="text" value="345,000" />
</div>
</div>

<div className="space-y-1">
<label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between" htmlFor="strike-price">
<span>Strike-Through Price (MSRP)</span>
<span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed px-1.5 py-0.5 rounded">9% OFF Badge</span>
</label>
<div className="relative flex items-center">
<span className="absolute left-3.5 font-label-md text-label-md font-bold text-on-surface-variant select-none">UGX</span>
<input className="w-full bg-surface-container-low text-secondary font-label-lg text-label-lg font-bold pl-14 pr-4 py-2.5 rounded-lg line-through focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="strike-price" inputMode="numeric" type="text" value="380,000" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Shows prospective buyers an attractive instant discount tag.</p>
</div>
</div>

<div className="bg-surface-container-high p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="savings" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md font-bold text-on-surface">Estimated Net Payout</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">8% Commission</span>
</div>
<div className="flex items-baseline justify-between pt-1">
<span className="font-price-display text-price-display text-tertiary font-extrabold" id="net-payout-val">UGX 317,400</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Per verified sale</span>
</div>
<div className="pt-2 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Fee Deducted (8%): <strong className="text-error">UGX 27,600</strong></span>
<span>Payment Processing: <strong className="text-tertiary font-bold">0% FREE</strong></span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Inventory &amp; Alert Level</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manage central shop availability at Kikuubo arcade</p>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between gap-space-md">
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface block">Available Shop Stock</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Aggregated across all active variants</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Decrease stock" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[18px]" />
</button>
<input className="w-14 text-center font-price-display text-price-display font-extrabold bg-transparent text-primary focus:outline-none" id="stock-qty" type="number" value="24" />
<button aria-label="Increase stock" className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>

<div className="space-y-space-xs bg-surface-container-low/60 p-space-md rounded-xl">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5" htmlFor="threshold-slider">
<Icon name="notifications_active" className="text-[18px] text-primary-container" />
<span>Low-Stock Alert Trigger</span>
</label>
<span className="font-label-lg text-label-lg font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-full" id="threshold-val">5 units</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sends WhatsApp and SMS push alert when local warehouse units hit this level.</p>
<div className="pt-2">
<input className="w-full accent-primary-container cursor-pointer" id="threshold-slider" max="15" min="1" type="range" value="5" />
<div className="flex justify-between font-label-sm text-label-sm text-secondary mt-1">
<span>1 unit (Urgent)</span>
<span>10 units</span>
<span>15 units (Safe)</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Product Variants</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Differentiate by color shades &amp; inventory</p>
</div>
<span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">2 Enabled</span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-slate-950 shadow-inner flex items-center justify-center text-white">
<Icon name="check" className="text-[14px]" />
</div>
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Space Black</span>
<span className="font-body-sm text-body-sm text-tertiary block font-semibold">SKU: SWC-HP-BLK-01</span>
</div>
</div>
<button aria-label="Variant options" className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-error transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block font-bold">Color Stock</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">16 units</span>
<Icon name="inventory" className="text-[16px] text-tertiary" />
</div>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block font-bold">Price Override</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Standard Price</span>
<Icon name="lock" className="text-[16px] text-secondary" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-slate-100 shadow-inner flex items-center justify-center text-slate-800">
<Icon name="check" className="text-[14px]" />
</div>
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Moonlight White</span>
<span className="font-body-sm text-body-sm text-tertiary block font-semibold">SKU: SWC-HP-WHT-02</span>
</div>
</div>
<button aria-label="Variant options" className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-error transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block font-bold">Color Stock</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">8 units</span>
<Icon name="inventory" className="text-[16px] text-tertiary" />
</div>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block font-bold">Price Override</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Standard Price</span>
<Icon name="lock" className="text-[16px] text-secondary" />
</div>
</div>
</div>
</div>

<button className="w-full py-3 px-4 rounded-xl bg-surface-container flex items-center justify-center gap-2 text-on-surface font-label-lg text-label-lg font-bold hover:bg-surface-variant active:scale-[0.99] transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[20px] text-primary" />
<span>Add Color or Size Variant (+)</span>
</button>
</section>

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Dispatch &amp; Fulfillment</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Select allowed logistics methods in Uganda</p>
</div>
<Icon name="local_shipping" className="text-primary text-[22px]" />
</div>
<div className="space-y-space-sm">

<label className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer select-none">
<div className="pt-0.5">
<input checked={true} className="w-5 h-5 rounded accent-primary-container cursor-pointer" type="checkbox" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Same-Day Boda Dispatch</span>
<span className="font-label-sm text-label-sm font-bold text-primary-container bg-primary-fixed px-1.5 py-0.5 rounded">Fastest</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Kampala Metropolitan, Wakiso, Entebbe &amp; Mukono express delivery within 3 hours.</p>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer select-none">
<div className="pt-0.5">
<input checked={true} className="w-5 h-5 rounded accent-primary-container cursor-pointer" type="checkbox" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">SwiftCart Hub Drop-off</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary bg-tertiary-fixed px-1.5 py-0.5 rounded">Free Handling</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Hand over package at William Street or Kikuubo hub; SwiftCart dispatches to buyer.</p>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer select-none">
<div className="pt-0.5">
<input checked={true} className="w-5 h-5 rounded accent-primary-container cursor-pointer" type="checkbox" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Standard Regional Courier</span>
<span className="font-label-sm text-label-sm font-semibold text-secondary">Upcountry</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Delivery to Jinja, Mbarara, Gulu, Mbale, and Masaka via partner bus stations &amp; couriers.</p>
</div>
</label>
</div>
</section>

<div className="bg-gradient-to-r from-primary-fixed to-surface-container p-space-md rounded-xl flex items-center gap-space-sm shadow-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="insights" className="text-[20px]" />
</div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Kampala Merchant Tip</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Listings with both Color variants enabled generate 42% higher conversion during evening flash sales.</p>
</div>
</div>
</div>

<div className="fixed bottom-0 inset-x-0 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-gutter py-space-sm flex items-center gap-space-sm z-30 pb-safe">

<button className="w-1/3 py-3 px-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-surface-variant" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[18px]" />
<span>Back</span>
</button>

<button className="w-2/3 py-3 px-4 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-extrabold shadow-md flex items-center justify-center gap-1 active:scale-95 transition-all hover:bg-primary" type="button" onClick={() => alertToast('Action triggered')}>
<span>Next: Buyer Preview</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
