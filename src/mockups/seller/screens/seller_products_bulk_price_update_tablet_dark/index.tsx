// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_products_bulk_price_update_tablet_dark/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="h-28 w-full px-gutter flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">SwiftCart Seller Hub</span><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant">SoundCore Uganda Official</span><span className="text-outline-variant font-label-sm text-label-sm">•</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-[140px]">Pioneer Mall G-14</span><div className="flex items-center gap-1 bg-surface-container-high px-space-xs py-0.5 rounded-full"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm text-tertiary">Open</span></div></div></div></div><div className="hidden md:flex items-center gap-space-md"><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Reserve</span><span className="font-label-md text-label-md text-on-surface">UGX 14,850,000</span></div></div><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg"><Icon name="moped" className="text-action-gradient-start text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Today Orders</span><span className="font-label-md text-label-md text-on-surface">28 Dispatches</span></div></div></div><div className="flex items-center gap-space-xs"><button className="bg-surface-container-high px-space-xs py-1 rounded-full flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-action-gradient-start text-[16px]" /><span className="font-label-sm text-label-sm text-on-surface">Dark</span></button><div className="relative bg-surface-container-high p-2 rounded-full flex items-center justify-center"><Icon name="notifications" className="text-on-surface-variant text-[20px]" /><span className="absolute -top-1 -right-1 bg-danger-penalty text-on-primary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span>Overview</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span>Orders</span><span className="bg-action-gradient-end text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">6</span></a><a aria-current="page" className="px-space-sm py-1.5 whitespace-nowrap transition-colors flex items-center gap-1.5 bg-primary-container text-on-primary-container font-bold rounded-lg" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span>Products</span><span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">48</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5 text-action-gradient-start font-label-lg text-label-lg" data-path="add-product" href="#" onClick={() => alertToast('Action triggered')}><span>+ AI Studio</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span>Riders &amp; Fleet</span><span className="bg-emerald-escrow/20 text-tertiary font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">4</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span>Disputes</span><span className="bg-danger-penalty text-on-primary-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full">1</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span>Wallet (UGX)</span></a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-space-sm py-1.5 rounded-lg whitespace-nowrap font-label-md text-label-md transition-colors flex items-center gap-1.5" data-path="analytics-and-store-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span>Analytics &amp; Settings</span></a></nav></div></header>
<main className="w-full pt-28 bg-surface flex-1"><div className="flex flex-col w-full relative">

<div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-80 right-8 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-md">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-low/80 backdrop-blur-md p-space-md rounded-xl">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-space-xs">
<Icon name="inventory_2" className="text-action-gradient-start text-[22px]" />
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Products &amp; Inventory Catalog</h1>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Central Kampala Hub • Instant Boda Dispatch Mesh Active</p>
</div>

<div className="flex items-center gap-space-xs flex-wrap">
<div className="flex items-center gap-1.5 bg-surface-container px-space-sm py-1.5 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total SKUs</span>
<span className="font-label-lg text-label-lg text-on-surface">48</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-space-sm py-1.5 rounded-lg">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active</span>
<span className="font-label-lg text-label-lg text-tertiary">44</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-space-sm py-1.5 rounded-lg">
<span className="w-2 h-2 rounded-full bg-amber-warning animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Low Stock</span>
<span className="font-label-lg text-label-lg text-amber-warning">3</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-space-sm py-1.5 rounded-lg">
<span className="w-2 h-2 rounded-full bg-danger-penalty"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Out</span>
<span className="font-label-lg text-label-lg text-danger-penalty">1</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">

<div className="flex-1 flex items-center bg-surface-container-high px-space-sm py-2 rounded-xl focus-within:bg-surface-container-highest transition-colors">
<Icon name="search" className="text-outline text-[20px] mr-2" />
<input className="bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none w-full" placeholder="Search by SKU, product name, category..." type="text" value="SoundCore Space One" />
<button className="text-outline hover:text-on-surface transition-colors p-1" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[16px]" />
</button>
</div>

<div className="flex items-center gap-space-xs flex-wrap sm:flex-nowrap">
<div className="relative min-w-[210px] bg-surface-container-high px-space-sm py-2 rounded-xl flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-1.5 truncate">
<Icon name="category" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface truncate">All Audio &amp; Accessories (48)</span>
</div>
<Icon name="arrow_drop_down" className="text-outline text-[18px]" />
</div>
<button className="bg-surface-container-highest hover:bg-secondary-container text-on-surface px-space-sm py-2 rounded-xl flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md">Columns</span>
</button>

<button className="bg-gradient-to-br from-action-gradient-start to-action-gradient-end hover:brightness-110 text-on-primary-container px-space-md py-2 rounded-xl flex items-center gap-1.5 shadow-[0_4px_16px_rgba(218,55,0,0.35)] active:scale-95 transition-all whitespace-nowrap" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add_circle" className="text-[18px]" />
<span className="font-label-lg text-label-lg">+ Add New Product</span>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs py-1">
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
<button className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
<span>All Items (48)</span>
</button>
<button className="bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
<span>In Stock (44)</span>
</button>
<button className="bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
<span>Low Stock (3)</span>
</button>
<button className="bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
<Icon name="electric_moped" className="text-action-gradient-start text-[14px]" />
<span>1-Hour Boda Eligible (38)</span>
</button>
<button className="bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full flex items-center gap-1 whitespace-nowrap" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="local_offer" className="text-secondary text-[14px]" />
<span>Promotional Discount (12)</span>
</button>
</div>

<button className="bg-secondary-container/80 text-secondary hover:bg-secondary-container px-space-sm py-1.5 rounded-lg flex items-center gap-1.5 font-label-md text-label-md transition-all self-start sm:self-auto shadow-sm" id="openBulkModalBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Bulk Price &amp; Stock Update (3 items selected)</span>
<span className="bg-primary-container text-on-primary-container text-label-sm font-label-sm px-1.5 py-0.2 rounded-full">3</span>
</button>
</div>
</div>
</div>

<div className="w-full px-gutter-desktop pb-space-xl">
<div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-xl">

<div className="grid grid-cols-12 items-center bg-surface-container-high px-space-md py-space-sm text-outline font-label-sm text-label-sm uppercase tracking-wider">
<div className="col-span-1 flex items-center gap-2">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
<span>Select</span>
</div>
<div className="col-span-4 pl-space-xs">Product &amp; SKU Details</div>
<div className="col-span-2 text-right">Pricing (UGX)</div>
<div className="col-span-2 text-center">Stock &amp; Origin</div>
<div className="col-span-2 text-center">Trust &amp; Escrow</div>
<div className="col-span-1 text-right pr-2">Status</div>
</div>

<div className="flex flex-col">

<div className="grid grid-cols-12 items-center px-space-md py-space-md bg-surface-container/60 hover:bg-surface-container-high/50 transition-colors">
<div className="col-span-1 flex items-center">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
</div>
<div className="col-span-4 flex items-center gap-space-sm min-w-0 pr-space-xs">
<div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Premium SoundCore Space One active noise cancelling wireless over-ear headphones in sleek jet black matte finish, displayed on a dark technical studio background with soft orange rim lighting." src={`${assetBase}/images/9f2cc51cbc46453c.webp`} />
<span className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container font-label-sm text-[9px] px-1 rounded-tl-sm">-20%</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC Headphones</span>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-code-display text-label-sm text-primary tracking-normal">SC-SPO-BLK-891</span>
<span>•</span>
<span className="truncate">Jet Black • Over-Ear</span>
</div>
<span className="font-label-sm text-[11px] text-tertiary flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" /> 1-Hour Boda Ready
              </span>
</div>
</div>
<div className="col-span-2 flex flex-col items-end text-right">
<span className="font-price-display text-body-lg text-primary tracking-tight">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 310,000</span>
<span className="font-label-sm text-label-sm text-action-gradient-start">Save UGX 61,500</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-1 bg-amber-warning/15 px-space-xs py-0.5 rounded-full text-amber-warning font-label-sm text-label-sm">
<Icon name="warning" className="text-[13px]" />
<span>4 units left</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1">Pioneer Mall G-14</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<span className="inline-flex items-center gap-1 bg-emerald-escrow/15 text-tertiary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[14px]" />
<span>Verified Authentic</span>
</span>
<span className="font-body-sm text-[10px] text-outline mt-0.5">Bank Escrow Locked</span>
</div>
<div className="col-span-1 flex items-center justify-end pr-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>

<div className="grid grid-cols-12 items-center px-space-md py-space-md bg-surface-container/30 hover:bg-surface-container-high/50 transition-colors">
<div className="col-span-1 flex items-center">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
</div>
<div className="col-span-4 flex items-center gap-space-sm min-w-0 pr-space-xs">
<div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Liberty 4 NC true wireless earbuds sitting upright in matte velvet black charging case with amber ambient glow in an urban minimal tech store presentation." src={`${assetBase}/images/c08ddba16272d852.webp`} />
<span className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container font-label-sm text-[9px] px-1 rounded-tl-sm">-12%</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Liberty 4 NC Earbuds</span>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-code-display text-label-sm text-primary tracking-normal">SC-L4NC-BLK-102</span>
<span>•</span>
<span className="truncate">Velvet Black • TWS In-Ear</span>
</div>
<span className="font-label-sm text-[11px] text-tertiary flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" /> 1-Hour Boda Ready
              </span>
</div>
</div>
<div className="col-span-2 flex flex-col items-end text-right">
<span className="font-price-display text-body-lg text-on-surface tracking-tight">UGX 280,000</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 320,000</span>
<span className="font-label-sm text-label-sm text-action-gradient-start">Save UGX 40,000</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-1 bg-emerald-escrow/15 px-space-xs py-0.5 rounded-full text-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
<span>18 units (Healthy)</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1">Pioneer Mall G-14</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<span className="inline-flex items-center gap-1 bg-emerald-escrow/15 text-tertiary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[14px]" />
<span>Verified Authentic</span>
</span>
<span className="font-body-sm text-[10px] text-outline mt-0.5">Bank Escrow Locked</span>
</div>
<div className="col-span-1 flex items-center justify-end pr-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>

<div className="grid grid-cols-12 items-center px-space-md py-space-md bg-surface-container/60 hover:bg-surface-container-high/50 transition-colors">
<div className="col-span-1 flex items-center">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
</div>
<div className="col-span-4 flex items-center gap-space-sm min-w-0 pr-space-xs">
<div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Motion+ portable 30W hi-res bluetooth outdoor speaker with rugged metallic grille and water-resistant finish photographed on dark textured granite." src={`${assetBase}/images/17b0cac7795b9dbf.webp`} />
<span className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container font-label-sm text-[9px] px-1 rounded-tl-sm">-12.5%</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Motion+ 30W Hi-Res Speaker</span>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-code-display text-label-sm text-primary tracking-normal">SC-MOT-30W-441</span>
<span>•</span>
<span className="truncate">Portable Speakers</span>
</div>
<span className="font-label-sm text-[11px] text-tertiary flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" /> 1-Hour Boda Ready
              </span>
</div>
</div>
<div className="col-span-2 flex flex-col items-end text-right">
<span className="font-price-display text-body-lg text-on-surface tracking-tight">UGX 315,000</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 360,000</span>
<span className="font-label-sm text-label-sm text-action-gradient-start">Save UGX 45,000</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-1 bg-surface-container-highest px-space-xs py-0.5 rounded-full text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>7 units</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1">Pioneer Mall G-14</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<span className="inline-flex items-center gap-1 bg-emerald-escrow/15 text-tertiary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[14px]" />
<span>Verified Authentic</span>
</span>
<span className="font-body-sm text-[10px] text-outline mt-0.5">Bank Escrow Locked</span>
</div>
<div className="col-span-1 flex items-center justify-end pr-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>

<div className="grid grid-cols-12 items-center px-space-md py-space-md bg-surface-container/20 hover:bg-surface-container-high/50 transition-colors">
<div className="col-span-1 flex items-center">
<input className="w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
</div>
<div className="col-span-4 flex items-center gap-space-sm min-w-0 pr-space-xs">
<div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Anker 65W GaN dual port compact high speed USB-C wall charger adapter in matte graphite grey resting beside braided cable with soft backlighting." src={`${assetBase}/images/22855b94af81908c.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Anker 65W GaN Dual-Port Fast Wall Charger</span>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-code-display text-label-sm text-outline tracking-normal">ANK-GAN-65W-09</span>
<span>•</span>
<span className="truncate">Power &amp; Cables</span>
</div>
<span className="font-label-sm text-[11px] text-outline flex items-center gap-0.5">
                Standard Delivery Only
              </span>
</div>
</div>
<div className="col-span-2 flex flex-col items-end text-right">
<span className="font-price-display text-body-lg text-on-surface tracking-tight">UGX 115,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Standard MSRP</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-1 bg-amber-warning/15 px-space-xs py-0.5 rounded-full text-amber-warning font-label-sm text-label-sm">
<Icon name="warning" className="text-[13px]" />
<span>2 units left</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1">Pioneer Mall G-14</span>
</div>
<div className="col-span-2 flex flex-col items-center justify-center">
<span className="inline-flex items-center gap-1 bg-emerald-escrow/15 text-tertiary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[14px]" />
<span>Verified Authentic</span>
</span>
<span className="font-body-sm text-[10px] text-outline mt-0.5">Bank Escrow Locked</span>
</div>
<div className="col-span-1 flex items-center justify-end pr-2">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>
</div>

<div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-high text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span>Showing 1 to 4 of 48 items</span>
<span>•</span>
<span className="text-primary font-label-sm text-label-sm">3 SKUs currently active for bulk pricing</span>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_left" className="text-[18px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center" onClick={() => alertToast('Action triggered')}>1</button>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>2</button>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>3</button>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/85 backdrop-blur-md p-space-md transition-opacity duration-200" id="bulkUpdateModal">

<div className="w-full max-w-[560px] bg-surface-container-low rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">

<div className="px-space-lg pt-space-lg pb-space-md bg-surface-container flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<Icon name="price_change" className="text-action-gradient-start text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Bulk Price &amp; Stock Update</h2>
</div>

<div className="inline-flex items-center gap-1.5 bg-surface-container-high px-space-sm py-1 rounded-full text-secondary font-label-sm text-label-sm max-w-full">
<span className="w-2 h-2 rounded-full bg-action-gradient-start"></span>
<span className="truncate">3 Selected SKUs (SoundCore Space One, Liberty 4 NC, Motion+)</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" id="closeBulkModalBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="p-space-lg flex flex-col gap-space-md overflow-y-auto max-h-[768px]">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Adjustment Mechanism</label>
<div className="grid grid-cols-3 bg-surface-container-high p-1 rounded-xl gap-1">
<button className="bg-primary-container text-on-primary-container font-label-md text-label-md py-2 rounded-lg text-center transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
              Percentage (%)
            </button>
<button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-2 rounded-lg text-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Fixed (UGX)
            </button>
<button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-2 rounded-lg text-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
              Stock Add
            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm items-center">
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Discount Rate</label>
<div className="flex items-center bg-surface-container-highest px-space-sm py-2.5 rounded-xl">
<input className="w-full bg-transparent font-headline-md text-headline-md text-on-surface focus:outline-none tracking-tight" id="discountRateInput" max="90" min="1" type="number" value="15" />
<span className="font-headline-sm text-headline-sm text-primary ml-1">% OFF</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Target Scope</label>
<div className="bg-surface-container px-space-sm py-2.5 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-1.5 truncate">
<Icon name="location_on" className="text-action-gradient-start text-[18px]" />
<span className="font-label-md text-label-md text-on-surface truncate">Kampala Urban Mesh</span>
</div>
<Icon name="lock" className="text-outline text-[16px]" />
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Settlement Simulator</span>
<span className="inline-flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
<Icon name="shield" className="text-[13px]" /> Instant MoMo Escrow
            </span>
</div>
<div className="flex flex-col gap-1 pt-1">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Average Original Price:</span>
<span className="text-outline line-through">UGX 281,000</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface">New Customer Price (-15%):</span>
<span className="font-label-md text-label-md text-primary">UGX 238,850</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1">
                SwiftCart Platform Fee (8%)
                <Icon name="info" className="text-outline text-[13px]" />
</span>
<span className="text-danger-penalty">- UGX 19,108</span>
</div>
<div className="h-px bg-surface-container-highest my-1"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-tertiary">Net Merchant MoMo Settlement:</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Auto-payout to MTN Merchant Account (*714)</span>
</div>
<span className="font-price-display text-price-display text-tertiary">UGX 219,742</span>
</div>
</div>
</div>

<div className="flex items-start gap-space-xs bg-surface-container-high/60 p-space-sm rounded-xl">
<Icon name="event_upcoming" className="text-action-gradient-start text-[18px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Flash Promo Window</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Active immediately until 28 Feb 2025 • Tech Week Flash Deals</span>
</div>
</div>

<label className="flex items-start gap-space-xs cursor-pointer select-none">
<input checked={true} className="mt-1 w-4 h-4 rounded bg-surface-container-highest text-action-gradient-start focus:ring-0 cursor-pointer accent-primary-container" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Broadcast Price Drop Alert</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Send push notification and SMS to 1,420 registered Kampala SoundCore store followers</span>
</div>
</label>
</div>

<div className="px-space-lg py-space-md bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<button className="w-full sm:w-auto px-space-md py-3 rounded-xl bg-surface-container-highest hover:bg-secondary-container text-on-surface font-label-md text-label-md transition-colors text-center order-2 sm:order-1" id="cancelModalBtn" type="button" onClick={() => alertToast('Action triggered')}>
          Cancel &amp; Keep Current Prices
        </button>
<button className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:brightness-110 text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-95 transition-all text-center flex items-center justify-center gap-2 order-1 sm:order-2" id="applyBulkUpdateBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="done_all" className="text-[20px]" />
<span>Apply Bulk Update to 3 Items</span>
</button>
</div>
</div>
</div>
</div>
</main>
<footer className="w-full bg-surface-container-low py-space-sm shadow-[0_-1px_8px_rgba(0,0,0,0.5)]"><div className="w-full px-gutter flex flex-col md:flex-row items-center justify-between gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><div className="flex items-center gap-space-xs flex-wrap justify-center"><div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span>William St Central Hub: Live (99.8%)</span></div><span className="hidden md:inline text-outline-variant">|</span><div className="flex items-center gap-1"><Icon name="electric_moped" className="text-action-gradient-start text-[14px]" /><span>Kampala Boda Dispatch Mesh Active</span></div></div><div className="flex items-center gap-space-xs flex-wrap justify-center"><div className="flex items-center gap-1 text-tertiary"><Icon name="lock" className="text-[14px]" /><span>Escrow Secured under Bank of Uganda NPS</span></div><span className="hidden md:inline text-outline-variant">|</span><span>© 2025 SwiftCart Uganda Ltd.</span></div></div></footer>
    </div>
  );
};

export default Screen;
