// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_edit_existing_product_swiftcart_desktop/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <aside className={`fixed z-50 left-0 top-0 h-screen w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none ${drawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`}><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col flex-1 overflow-y-auto"><div className="h-16 px-space-xl flex items-center gap-space-md bg-surface-container-lowest"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none">SwiftCart</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Merchant Central</span></div></div><div className="px-space-md py-space-sm"><span className="px-space-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Commerce Management</span></div><nav className="flex flex-col gap-space-xs px-space-md" data-active-classes="bg-primary-container text-on-primary-container font-bold shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" /><span className="font-label-lg text-label-lg">Overview</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-md"><Icon name="shopping_bag" className="text-[20px]" /><span className="font-label-lg text-label-lg">Orders</span></div><span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="products-and-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" /><span className="font-label-lg text-label-lg">Products &amp; Inventory</span></div><span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">2 Low</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="riders-and-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-md"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-label-lg text-label-lg">Riders &amp; Logistics</span></div><span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">6 Active</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" /><span className="font-label-lg text-label-lg">Returns &amp; Disputes</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-label-lg text-label-lg">Wallet &amp; Payouts</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="analytics-and-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-md"><Icon name="monitoring" className="text-[20px]" /><span className="font-label-lg text-label-lg">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" /><span className="font-label-lg text-label-lg">Discounts &amp; Ads</span></div></a></nav></div><div className="p-space-md bg-surface-container flex flex-col gap-space-xs"><div className="px-space-md py-space-xs"><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Governance</span></div><nav className="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold"><a className="flex items-center gap-space-md px-space-md py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="store-profile-and-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="verified" className="text-[20px]" /><span className="font-label-lg text-label-lg">Store Profile &amp; KYC</span></a><a className="flex items-center gap-space-md px-space-md py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="tune" className="text-[20px]" /><span className="font-label-lg text-label-lg">Settings</span></a></nav><div className="mt-space-sm pt-space-sm"><div className="flex items-center gap-space-sm px-space-md py-2 rounded-full bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]"><Icon name="verified_user" className="text-tertiary text-[18px]" /><div className="flex flex-col leading-none"><span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-tight">Swift Escrow</span><span className="font-body-sm text-[10px] text-on-surface-variant">UG Protected Node</span></div></div></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full flex items-center"><Icon name="search" className="absolute left-3 text-on-surface-variant text-[20px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search SKU, Order ID, Customer Phone (+256)..." type="text" /></div></div><div className="flex items-center gap-space-lg"><div className="hidden xl:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface-variant font-bold tracking-wide uppercase">MTN &amp; Airtel Rails Active</span></div><button aria-label="Theme Mode" className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[20px]" /></button><div className="relative"><button aria-label="Notifications" className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"></span></button></div><div className="h-8 w-px bg-surface-variant"></div><div className="flex items-center gap-space-md pl-space-xs"><div className="flex flex-col text-right leading-tight"><span className="font-label-lg text-label-lg text-on-surface font-bold">Kigozi Ronald</span><span className="font-body-sm text-body-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_6px_rgba(218,55,0,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-space-xl py-space-md bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products &amp; Inventory</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="font-currency-code text-currency-code text-on-surface bg-surface-container px-2 py-0.5 rounded-lg">SKU: SND-SP1-BLK</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Edit Product</span>
</nav>
<div className="flex flex-wrap items-center gap-space-md pt-1">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">SoundCore Space One ANC Wireless</h1>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
            Active on Storefront
          </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm shadow-sm">
<Icon name="bolt" className="text-[14px] text-primary" />
            Kampala Tech Week Flash Deal Active
          </span>
</div>
</div>
</div>

<div className="flex items-center flex-wrap gap-2.5">
<a className="h-10 px-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all shadow-sm" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="open_in_new" className="text-[18px]" />
<span>View Live Listing</span>
</a>
<button className="h-10 px-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px]" />
<span>Duplicate</span>
</button>
<button className="h-10 px-3.5 rounded-xl bg-surface-container hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="archive" className="text-[18px]" />
<span>Archive</span>
</button>
<button className="h-10 px-5 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95 flex items-center gap-2 transition-all" id="btn-save-master" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="cloud_upload" className="text-[18px]" />
<span>Save &amp; Push Changes</span>
</button>
</div>
</div>

<div className="p-space-xl grid grid-cols-12 gap-space-lg items-start">

<div className="col-span-12 xl:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<Icon name="tune" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Core Attributes</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full font-bold">Synced: MTN MoMo Mall</span>
</div>
<div className="space-y-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant">Product Title</label>
<input className="h-10 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all" type="text" value="SoundCore Space One Active Noise Cancelling Headphones" />
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant">Brand</label>
<input className="h-10 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none" type="text" value="Anker Soundcore" />
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant">Category</label>
<div className="h-10 px-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm flex items-center justify-between truncate cursor-pointer hover:bg-surface-container">
<span className="truncate">Electronics &gt; Audio &gt; Over-Ear</span>
<Icon name="expand_more" className="text-[16px] text-on-surface-variant" />
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant">Master Parent SKU</label>
<input className="h-10 px-3 bg-surface-container-low rounded-xl font-currency-code text-currency-code text-on-surface focus:outline-none" type="text" value="SND-SP1-PARENT" />
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant">Barcode / EAN</label>
<input className="h-10 px-3 bg-surface-container-low rounded-xl font-currency-code text-currency-code text-on-surface focus:outline-none" type="text" value="194644145927" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="auto_awesome" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Storefront Copy &amp; Markdown</span>
</div>
<button className="text-primary font-label-sm text-label-sm hover:underline flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="psychology" className="text-[14px]" />
            Regenerate for Uganda Buyers
          </button>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between bg-surface-container-lowest rounded-lg px-2.5 py-1.5 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 font-bold"><Icon name="check_circle" className="text-[14px] text-tertiary" /> Luganda / English Localization Applied</span>
<span className="text-on-surface-variant">284 Words</span>
</div>
<textarea className="w-full bg-transparent p-1 font-body-sm text-body-sm text-on-surface focus:outline-none resize-none leading-relaxed" rows={5}>### Highlights
- 2X Stronger Voice Reduction via Adaptive ANC algorithm.
- 55 Hours Playtime (40 Hours with ANC on) for Kampala commutes.
- Certified Hi-Res Audio Wireless with LDAC support.
- Ultra-soft rotating ear cups tailored for humid climate comfort.</textarea>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-low">
<Icon name="verified_user" className="text-primary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Official 1-Year Local Replacement</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Honored through Nakasero Gadget Hub, Kampala Central. Merchant ID #UG-NK-992.</span>
</div>
</div>
<label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wide">URSB &amp; EFRIS VAT Registered SKU</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Automated fiscal e-receipt receipt generated upon buyer payment release.</span>
</div>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Verified Gallery Assets (4)</span>
<span className="font-label-sm text-label-sm text-primary hover:underline cursor-pointer">+ Upload New</span>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="relative rounded-xl overflow-hidden aspect-square bg-surface-container group">
<img className="w-full h-full object-cover" data-alt="High-end matte black over-ear headphones showcased in crisp studio light on warm sunlight surface with rich acoustic ear cushions." src={`${assetBase}/images/a13e34e8b6af3c45.webp`} />
<span className="absolute bottom-1 left-1 bg-on-surface/80 text-surface font-label-sm text-[9px] px-1 rounded">Primary</span>
</div>
<div className="relative rounded-xl overflow-hidden aspect-square bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Minimalist cream white variant of modern audio headphones on warm sand textured background with soft ambient shadows." src={`${assetBase}/images/9d34fb69ed875e78.webp`} />
</div>
<div className="relative rounded-xl overflow-hidden aspect-square bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Close up shot of audio headband texture and active noise canceling button detailing with metal hinge accents." src={`${assetBase}/images/2a3706cae40c4198.webp`} />
</div>
<div className="rounded-xl border-2 border-dashed bg-surface-container-low flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer aspect-square">
<Icon name="add_photo_alternate" className="text-[20px]" />
<span className="font-label-sm text-[10px]">Add PNG</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
<div>
<div className="flex items-center gap-2">
<Icon name="format_list_bulleted" className="text-primary text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Variant &amp; Warehouse Matrix</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time stock dispatch across central Kampala fulfillment centers.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[16px]" />
<span>Add Variant</span>
</button>
<button className="h-8 px-3 rounded-lg bg-primary-fixed text-on-primary-fixed-variant hover:bg-primary-container hover:text-on-primary-container font-label-sm text-label-sm flex items-center gap-1 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>
<Icon name="inventory" className="text-[16px]" />
<span>Quick Replenish</span>
</button>
</div>
</div>

<div className="px-3 py-2 rounded-xl bg-tertiary-fixed/40 flex items-center justify-between text-on-tertiary-fixed-variant">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm font-bold">Safe Margin Guardrail: 23.4% minimum profit locked against currency volatility</span>
</div>
<span className="font-currency-code text-currency-code text-tertiary font-extrabold uppercase">Safe</span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-3 rounded-l-lg">Variant Detail</th>
<th className="py-2.5 px-2">Base Cost</th>
<th className="py-2.5 px-2">Retail / Promo</th>
<th className="py-2.5 px-2 text-center">Nakasero</th>
<th className="py-2.5 px-2 text-center">Kololo</th>
<th className="py-2.5 px-2">Status</th>
<th className="py-2.5 px-2 text-right rounded-r-lg">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-body-sm font-body-sm text-on-surface">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-neutral-900 shadow-sm shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Matte Black</span>
<span className="font-currency-code text-[10px] text-on-surface-variant">SND-SP1-BLK-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface">UGX 262,000</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Landing Cost</span>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">UGX 342,000</span>
<span className="line-through text-on-surface-variant text-[11px]">UGX 380,000</span>
</div>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container font-currency-code text-currency-code font-bold">18 units</span>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container font-currency-code text-currency-code font-bold">12 units</span>
</td>
<td className="py-3 px-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">Ready</span>
</td>
<td className="py-3 px-2 text-right">
<button className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all ml-auto" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-amber-50 shadow-sm shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Cream White</span>
<span className="font-currency-code text-[10px] text-on-surface-variant">SND-SP1-WHT-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface">UGX 262,000</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Landing Cost</span>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">UGX 342,000</span>
<span className="line-through text-on-surface-variant text-[11px]">UGX 380,000</span>
</div>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-currency-code text-currency-code font-bold">2 units</span>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container font-currency-code text-currency-code font-bold">5 units</span>
</td>
<td className="py-3 px-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] font-bold">Low</span>
</td>
<td className="py-3 px-2 text-right">
<button className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all ml-auto" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-sky-400 shadow-sm shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Sky Blue</span>
<span className="font-currency-code text-[10px] text-on-surface-variant">SND-SP1-BLU-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface">UGX 265,000</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Landing Cost</span>
</div>
</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">UGX 349,000</span>
<span className="text-on-surface-variant text-[11px]">- None -</span>
</div>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container font-currency-code text-currency-code font-bold">14 units</span>
</td>
<td className="py-3 px-2 text-center">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container font-currency-code text-currency-code font-bold">9 units</span>
</td>
<td className="py-3 px-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">Ready</span>
</td>
<td className="py-3 px-2 text-right">
<button className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all ml-auto" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 bg-surface-container rounded-xl flex items-center justify-between text-on-surface">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Aggregate Variant Stock</span>
<span className="font-price-display text-price-display leading-tight">60 <span className="font-body-md text-body-md text-on-surface-variant font-normal">Headsets Total</span></span>
</div>
<div className="flex items-center gap-3">
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">Projected Store Turnover</span>
<p className="font-currency-code text-currency-code text-primary font-bold">UGX 20,520,000</p>
</div>
<div className="h-8 w-px bg-surface-variant"></div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface font-label-md text-label-md text-on-surface flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Edit Attributes</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="show_chart" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">30-Day Conversion Velocity (Kampala Tech Week)</span>
</div>
<span className="font-currency-code text-currency-code text-tertiary font-bold">+18.4% vs last week</span>
</div>

<div className="w-full h-24 bg-surface-container-low rounded-xl p-2 flex flex-col justify-end">
<svg className="w-full h-16 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 60">
<path d="M0 45 C 30 42, 60 52, 90 35 C 120 18, 150 30, 180 22 C 210 14, 240 28, 270 8 L 300 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 45 C 30 42, 60 52, 90 35 C 120 18, 150 30, 180 22 C 210 14, 240 28, 270 8 L 300 4 L 300 60 L 0 60 Z" fill="currentColor" fillOpacity="0.08"></path>
</svg>
<div className="flex justify-between text-[10px] text-on-surface-variant font-currency-code pt-1 px-1">
<span>May 1</span>
<span>May 8</span>
<span>May 15</span>
<span>May 22</span>
<span>May 29 (Peak Promo)</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-3 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-primary-container text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">SafeBoda &amp; Express Rails</span>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
</div>
<div className="p-3 bg-primary-fixed/30 rounded-xl flex items-start gap-2.5">
<Icon name="electric_bolt" className="text-primary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">45-Min SafeBoda Delivery</span>
<span className="font-body-sm text-[12px] text-on-surface-variant leading-tight">Eligible across Kololo, Nakasero, Bugolobi, Ntinda, and Muyenga corridors.</span>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface">
<span className="font-label-sm text-label-sm text-on-surface-variant">Parcel Weight</span>
<span className="font-currency-code text-currency-code font-bold">0.45 kg</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface">
<span className="font-label-sm text-label-sm text-on-surface-variant">Package Standard</span>
<span className="font-label-sm text-label-sm font-bold">Tamper-Evident Bag (Size M)</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface">
<span className="font-label-sm text-label-sm text-on-surface-variant">Origin Warehouse Hub</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Nakasero Priority Dock</span>
</div>
</div>

<div className="p-3 bg-secondary-fixed/30 rounded-xl flex items-start gap-2.5 text-on-secondary-fixed">
<Icon name="pin" className="text-secondary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">6-Digit OTP Protocol</span>
<span className="font-body-sm text-[11px] text-on-secondary-container leading-normal">High-value item. SafeBoda rider cannot mark delivered without buyer's SMS OTP.</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-2">
<Icon name="account_balance_wallet" className="text-tertiary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Per-Sale Payout Calculation</span>
</div>
<div className="flex flex-col gap-2 bg-surface-container-low p-3 rounded-xl">
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Selling Price (Flash Deal)</span>
<span className="font-currency-code text-currency-code text-on-surface">UGX 342,000</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">SwiftCart Platform Fee (2.5%)</span>
<span className="font-currency-code text-currency-code text-error">- UGX 8,550</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Escrow Transit Insurance</span>
<span className="font-currency-code text-currency-code text-error">- UGX 1,710</span>
</div>
<div className="h-px bg-surface-variant my-1"></div>
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">Net Payout to Merchant</span>
<span className="font-price-display text-price-display text-tertiary">UGX 331,740</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
<Icon name="bolt" className="text-[16px] text-tertiary" />
<span>Instant MoMo settlement after OTP release</span>
</div>
<div className="flex flex-col gap-2 pt-1">
<div className="flex items-center justify-between p-2 rounded-xl bg-surface-container text-on-surface">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-amber-400"></span>
<span className="font-label-sm text-label-sm font-bold">MTN Mobile Money</span>
</div>
<span className="font-currency-code text-currency-code text-on-surface-variant">+256 772 ••• 819</span>
</div>
<div className="flex items-center justify-between p-2 rounded-xl bg-surface-container text-on-surface">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-red-600"></span>
<span className="font-label-sm text-label-sm font-bold">Airtel Money (Backup)</span>
</div>
<span className="font-currency-code text-currency-code text-on-surface-variant">+256 750 ••• 102</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Rider Dispatch Zone</span>
<span className="font-currency-code text-currency-code text-tertiary">14 Active SafeBodas</span>
</div>
<div className="w-full h-32 bg-cover bg-center rounded-xl relative overflow-hidden" data-location="Kampala, Uganda" style={{"backgroundImage":"url('/images/3e72257c08c3c397.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent flex items-end p-2.5">
<span className="text-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="location_on" className="text-[14px] text-primary" />
              Nakasero Hub • 3.2km Radius Active
            </span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="save-toast">
<div className="bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
<Icon name="cloud_done" className="text-tertiary-fixed text-[24px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Changes Published Successfully</span>
<span className="font-body-sm text-[12px] opacity-80">Synchronized across SwiftCart Kampala Storefront &amp; SafeBoda Express.</span>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
};

export default Desktop;
