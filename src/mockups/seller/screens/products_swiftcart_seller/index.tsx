// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/products_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Open seller menu" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><span className="font-label-lg text-label-lg font-bold text-on-surface truncate hidden min-[360px]:inline">SwiftCart Seller</span></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Search" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-9 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg transition-colors bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full text-on-surface">

<section className="px-margin py-space-sm flex flex-col gap-space-sm bg-surface-container-low">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface flex items-center gap-1.5">
          Inventory Catalog
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">48 items</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Kikuubo Sound &amp; Gadgets Hub inventory</span>
</div>
<button className="h-11 px-space-md rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary active:scale-95 transition-all flex items-center gap-1.5 shrink-0" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add" className="text-[20px]" />
<span>Add Product</span>
</button>
</div>

<div className="flex items-center gap-space-xs">
<div className="relative flex-1">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container" id="catalog-search" placeholder="Search SKU or title..." type="text" />
</div>
<button aria-label="Open Filter Sheet" className="h-11 w-11 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm hover:bg-surface-container active:scale-95 transition-all relative shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[22px]" />
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container"></span>
</button>
</div>
</section>

<div className="px-margin py-space-sm overflow-x-auto flex items-center gap-2 no-scrollbar bg-surface">
<button className="status-tab active h-8 px-3 rounded-full bg-on-surface text-surface font-label-md text-label-md font-bold whitespace-nowrap shadow-sm transition-all" data-status="all" onClick={() => alertToast('Action triggered')}>
      All <span className="opacity-80 font-normal">48</span>
</button>
<button className="status-tab h-8 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-all" data-status="active" onClick={() => alertToast('Action triggered')}>
      Active <span className="text-tertiary font-bold">39</span>
</button>
<button className="status-tab h-8 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-all" data-status="draft" onClick={() => alertToast('Action triggered')}>
      Draft <span className="text-secondary font-bold">4</span>
</button>
<button className="status-tab h-8 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-all" data-status="pending" onClick={() => alertToast('Action triggered')}>
      Pending Review <span className="text-on-secondary-container font-bold">3</span>
</button>
<button className="status-tab h-8 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-all" data-status="rejected" onClick={() => alertToast('Action triggered')}>
      Rejected <span className="text-error font-bold">2</span>
</button>
</div>

<section className="px-margin pt-space-xs pb-space-sm">
<div className="rounded-xl bg-gradient-to-r from-error-container/80 via-primary-fixed/40 to-surface-container p-space-sm shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0 shadow-sm">
<Icon name="warning" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">3 items critically low in stock</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Risk of listing pause within 48h</span>
</div>
</div>
<button className="h-9 px-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-sm hover:bg-surface-container active:scale-95 transition-all flex items-center gap-1 shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="add_business" className="text-[18px]" />
<span>+ Restock</span>
</button>
</div>
</section>

<section className="px-margin pb-space-xs flex items-center justify-between bg-surface" id="bulk-actions-bar">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="w-5 h-5 rounded accent-primary-container cursor-pointer" id="select-all-checkbox" type="checkbox" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Select all (5)</span>
</label>
<div className="flex items-center gap-2">
<button className="h-8 px-2.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold hover:bg-surface-container-high transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="remove_shopping_cart" className="text-[16px]" />
<span>Mark OOS</span>
</button>
<button className="h-8 px-2.5 rounded-lg bg-error-container text-error font-label-sm text-label-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[16px]" />
<span>Delete</span>
</button>
</div>
</section>

<section className="px-margin flex flex-col gap-space-sm pb-space-xl">

<article className="product-item rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-space-xs transition-shadow hover:shadow-md">
<div className="flex items-start gap-space-sm">
<input className="product-select mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" />
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0">
<img className="w-full h-full object-cover" data-alt="High-end black wireless over-ear noise-cancelling headphones resting on an illuminated matte graphite display stand, studio product photography with subtle warm orange reflection" src={`${assetBase}/images/315394350634fc86.webp`} />
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-inverse-surface/80 text-inverse-on-surface">Audio</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Active
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">82 sold</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface truncate mt-1">SoundCore Space One Wireless Headphones</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SKU: <span className="font-semibold text-on-surface">SC-SPO-BLK</span></p>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-primary">UGX 345,000</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed/30 px-1.5 py-0.5 rounded">14 units</span>
</div>
</div>
</div>

<div className="pt-space-xs flex items-center justify-between gap-space-sm bg-surface-container-low rounded-lg px-2.5 py-2 mt-1">
<button className="flex items-center gap-1.5 font-label-sm text-label-sm font-bold text-on-surface hover:text-primary transition-colors py-1" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[16px]" />
<span>Quick Price</span>
</button>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Listing Live</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-secondary-fixed-dim rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>
</div>
</article>

<article className="product-item rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-space-xs transition-shadow hover:shadow-md">
<div className="flex items-start gap-space-sm">
<input className="product-select mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" />
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0">
<img className="w-full h-full object-cover" data-alt="Compact dual-port fast charger wall adapter sitting on a brushed dark metal table, sleek modern consumer tech photography in warm ambient glow" src={`${assetBase}/images/6318c133e0f9f54f.webp`} />
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-inverse-surface/80 text-inverse-on-surface">Power</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="warning" className="text-[14px] text-primary" />
              Low Stock
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">119 sold</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface truncate mt-1">Baseus 65W GaN Dual-Port Fast Charger</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SKU: <span className="font-semibold text-on-surface">BAS-GAN-65</span></p>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-primary">UGX 85,000</span>
<span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed/40 px-1.5 py-0.5 rounded">2 units left</span>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between gap-space-sm bg-surface-container-low rounded-lg px-2.5 py-2 mt-1">
<button className="flex items-center gap-1.5 font-label-sm text-label-sm font-bold text-primary hover:text-on-primary-container transition-colors py-1" onClick={() => alertToast('Action triggered')}>
<Icon name="add_box" className="text-[16px]" />
<span>+ Add Stock Now</span>
</button>
<button className="h-8 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
          Manage
        </button>
</div>
</article>

<article className="product-item rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-space-xs transition-shadow hover:shadow-md">
<div className="flex items-start gap-space-sm">
<input className="product-select mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" />
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0 grayscale opacity-80">
<img className="w-full h-full object-cover" data-alt="Heavy duty matte black rectangular power bank with led digital capacity indicator on sleek textured surface, dramatic soft studio illumination" src={`${assetBase}/images/d4ac9f07a3011052.webp`} />
<span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-error text-on-error">Paused</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
              Out of Stock
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">340 sold</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface truncate mt-1">Anker PowerCore 20000mAh Power Bank</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SKU: <span className="font-semibold text-on-surface">ANK-PC-20</span></p>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 160,000</span>
<span className="font-label-sm text-label-sm text-error font-bold">0 units</span>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between gap-space-sm bg-surface-container-low rounded-lg px-2.5 py-2 mt-1">
<span className="font-body-sm text-body-sm text-error font-medium flex items-center gap-1">
<Icon name="visibility_off" className="text-[16px]" /> Hidden from buyers
        </span>
<button className="h-8 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shadow-sm hover:bg-primary active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
          Restock (0)
        </button>
</div>
</article>

<article className="product-item rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-space-xs transition-shadow hover:shadow-md">
<div className="flex items-start gap-space-sm">
<input className="product-select mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" />
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0">
<img className="w-full h-full object-cover" data-alt="Futuristic slide open wireless earbuds case showing metallic cyan illuminated accents on glossy white finish, high-tech premium audio merchandise studio shot" src={`${assetBase}/images/4d7099f2eac7e710.webp`} />
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary text-on-secondary">New</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="hourglass_top" className="text-[14px]" />
              Pending Review
            </span>
<span className="font-body-sm text-body-sm text-secondary font-medium">Submitted 2h ago</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface truncate mt-1">Oraimo FreePods 4 ANC Edition</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SKU: <span className="font-semibold text-on-surface">OR-FP-4</span></p>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 145,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">25 units staged</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between gap-2 mt-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span className="font-body-sm text-body-sm">Catalog moderation team checking EAN</span>
</div>
<button className="h-8 px-2.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
          View Submission
        </button>
</div>
</article>

<article className="product-item rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col gap-space-xs transition-shadow hover:shadow-md">
<div className="flex items-start gap-space-sm">
<input className="product-select mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" />
<div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0 opacity-70">
<img className="w-full h-full object-cover" data-alt="White counterfeit replica style earbud accessories in a generic cardboard box under flat fluorescent retail warehouse lighting" src={`${assetBase}/images/a99377291fcb5872.webp`} />
<span className="absolute inset-0 bg-error/20 flex items-center justify-center">
<Icon name="block" className="text-error text-[28px]" />
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="cancel" className="text-[14px]" />
              Rejected
            </span>
<span className="font-body-sm text-body-sm text-error font-bold">Policy Flag</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface truncate mt-1">Replica Wireless Earbuds Pro</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SKU: <span className="font-semibold text-on-surface">REP-EAR-09</span></p>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface-variant line-through">UGX 65,000</span>
<span className="font-label-sm text-label-sm text-error font-bold">Listing Locked</span>
</div>
</div>
</div>

<div className="bg-error-container/40 rounded-lg p-2.5 flex flex-col gap-1.5 mt-1">
<div className="flex items-start gap-2">
<Icon name="report" className="text-error text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface leading-tight">
<strong className="text-error font-bold">Reason:</strong> Violates Brand Authenticity &amp; Warranty terms (Rule 4.2). Products labeled 'Replica' are not permitted on SwiftCart.
          </p>
</div>
<div className="flex items-center justify-end gap-2 pt-1">
<button className="h-8 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold shadow-sm hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
            Appeal Decision
          </button>
<button className="h-8 px-3 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-bold hover:opacity-90 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
            Delete Listing
          </button>
</div>
</div>
</article>
</section>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="filter-sheet-backdrop"></div>

<aside className="fixed inset-x-0 bottom-0 z-50 max-h-[751px] bg-surface-container-lowest text-on-surface rounded-t-3xl shadow-2xl translate-y-full transition-transform duration-300 flex flex-col overflow-hidden pb-safe" id="filter-sheet">
<div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mt-3 mb-2 shrink-0"></div>
<div className="p-margin pb-space-sm flex items-center justify-between bg-surface-container-lowest">
<div className="flex items-center gap-2">
<Icon name="tune" className="text-primary text-[24px]" />
<h3 className="font-headline-sm text-headline-sm font-bold">Filter Catalog</h3>
</div>
<button aria-label="Close Filter Sheet" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="flex-1 overflow-y-auto px-margin space-y-space-md py-space-xs">

<div>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">Status</span>
<div className="grid grid-cols-2 gap-2 mt-2">
<label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded accent-primary-container" type="checkbox" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Active (39)</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded accent-primary-container" type="checkbox" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Low Stock (2)</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container cursor-pointer select-none">
<input className="w-4 h-4 rounded accent-primary-container" type="checkbox" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Out of Stock (1)</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container cursor-pointer select-none">
<input className="w-4 h-4 rounded accent-primary-container" type="checkbox" />
<span className="font-label-md text-label-md font-semibold text-on-surface">Draft / Review (7)</span>
</label>
</div>
</div>

<div>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">Category</span>
<div className="flex flex-wrap gap-2 mt-2">
<button className="px-3 py-1.5 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>Chargers &amp; GaN</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>Power Banks</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>Cables &amp; Adapters</button>
</div>
</div>

<div>
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">Stock Level</span>
<span className="font-label-sm text-label-sm text-primary font-bold">0 - 50+ units</span>
</div>
<div className="h-2 rounded-full bg-surface-container-high mt-3 relative">
<div className="h-2 rounded-full bg-primary-container w-3/4"></div>
<div className="w-5 h-5 rounded-full bg-primary-container shadow-md absolute -top-1.5 left-3/4 -translate-x-1/2 cursor-pointer"></div>
</div>
</div>
</div>

<div className="p-margin bg-surface-container-low flex items-center gap-3">
<button className="flex-1 h-12 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold hover:bg-surface-container-high active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
        Reset
      </button>
<button className="flex-[2] h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
        Apply Filters
      </button>
</div>
</aside>

<div className="fixed inset-0 z-50 bg-inverse-surface/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="add-product-backdrop"></div>
<div className="fixed inset-x-0 bottom-0 z-50 max-h-[813px] bg-surface-container-lowest text-on-surface rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.25)] translate-y-full transition-transform duration-300 flex flex-col overflow-hidden pb-safe" id="add-product-sheet">

<div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mt-3 mb-1 shrink-0"></div>

<div className="px-margin pt-space-xs pb-space-sm bg-surface-container-lowest flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<Icon name="add_box" className="text-[18px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm font-bold leading-tight" id="wizard-title">Create Listing</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant" id="step-indicator-text">Step 1 of 5: Product Media</span>
</div>
</div>
<button aria-label="Dismiss Modal" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="grid grid-cols-5 gap-1.5 pt-1">
<div className="h-1.5 rounded-full bg-primary-container transition-colors" id="bar-step-1"></div>
<div className="h-1.5 rounded-full bg-surface-container transition-colors" id="bar-step-2"></div>
<div className="h-1.5 rounded-full bg-surface-container transition-colors" id="bar-step-3"></div>
<div className="h-1.5 rounded-full bg-surface-container transition-colors" id="bar-step-4"></div>
<div className="h-1.5 rounded-full bg-surface-container transition-colors" id="bar-step-5"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-margin py-space-sm space-y-space-md bg-surface">

<div className="step-panel flex flex-col gap-space-sm" id="step-content-1">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Step 1: Product Photos &amp; Video</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Add up to 8 high-resolution photos. First photo will be your marketplace catalog thumbnail.</p>

<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors shadow-inner text-center">
<div className="w-14 h-14 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary">
<Icon name="add_a_photo" className="text-[30px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Tap to snap or upload</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">PNG, JPG up to 10MB each</span>
</div>
<span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">Kikuubo Studio Guide Compliant</span>
</div>

<div className="flex items-center gap-2 overflow-x-auto py-1">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0 relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Clear overhead studio photograph of a premium black gadget audio box packaging with shiny holographic seal" src={`${assetBase}/images/b4bb78b81ba30000.webp`} />
<span className="absolute top-1 left-1 px-1 rounded bg-primary-container text-on-primary text-[8px] font-bold">Cover</span>
</div>
<div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container shrink-0 relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close up product shot of tactile volume buttons and metal finish hinge of portable wireless tech device" src={`${assetBase}/images/13fd381105866c66.webp`} />
</div>
<div className="w-16 h-16 rounded-xl rounded-dashed bg-surface-container-high flex flex-col items-center justify-center text-on-surface-variant shrink-0 cursor-pointer">
<Icon name="add" className="text-[20px]" />
<span className="text-[9px] font-bold">More</span>
</div>
</div>
</div>

<div className="step-panel hidden flex flex-col gap-space-sm" id="step-content-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Step 2: Title &amp; Category</span>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">Product Title *</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container" placeholder="e.g. Anker 65W Fast Charger Dual Type-C" type="text" value="SoundCore Space One Wireless Headphones" />
<span className="font-label-sm text-label-sm text-on-surface-variant text-right">41 / 120 characters</span>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">Category Path</label>
<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<Icon name="headphones" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">Electronics &gt; Audio &gt; Over-Ear Headphones</span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline shrink-0" onClick={() => alertToast('Action triggered')}>Change</button>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">SKU / Barcode</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container uppercase font-mono" placeholder="e.g. SC-SPO-BLK" type="text" value="SC-SPO-BLK" />
</div>
</div>

<div className="step-panel hidden flex flex-col gap-space-sm" id="step-content-3">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Step 3: Pricing &amp; Inventory</span>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">Selling Price (UGX) *</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 font-headline-sm text-headline-sm font-extrabold text-on-surface-variant">UGX</span>
<input className="w-full h-12 pl-16 pr-3 rounded-xl bg-surface-container-lowest text-on-surface font-price-display text-price-display font-extrabold shadow-sm outline-none focus:bg-surface-container" type="number" value="345000" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Suggested Kikuubo floor price: UGX 320,000 - 360,000</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">Available Stock Units *</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold shadow-sm outline-none focus:bg-surface-container" type="number" value="14" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-bold text-on-surface">Low Stock Alert At</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold shadow-sm outline-none focus:bg-surface-container" type="number" value="3" />
</div>
</div>
<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Enable Wholesale Tier</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Discounts for orders over 10 units</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-secondary-fixed-dim rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
</div>

<div className="step-panel hidden flex flex-col gap-space-sm" id="step-content-4">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Step 4: Product Variants</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Specify colors, storage, or pack sizes.</p>

<div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-black shadow-sm"></span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface">Matte Obsidian Black</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Stock: 10 units • Same price</p>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-slate-300 shadow-sm"></span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface">Glacier Pearl White</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Stock: 4 units • +UGX 5,000</p>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
<button className="h-10 rounded-xl bg-surface-container text-primary font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[18px]" />
<span>Add Another Color / Size Variant</span>
</button>
</div>

<div className="step-panel hidden flex flex-col gap-space-sm" id="step-content-5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Step 5: Delivery &amp; Fulfillment</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Select allowed logistics pathways for buyers in Uganda.</p>

<label className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3 cursor-pointer">
<input checked={true} className="mt-1 w-5 h-5 rounded accent-primary-container" type="checkbox" />
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<Icon name="two_wheeler" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">Kampala Express Boda Boda</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Dispatched directly from Kikuubo shop in 45 mins. (Radius 15km)</p>
</div>
</label>

<label className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3 cursor-pointer">
<input checked={true} className="mt-1 w-5 h-5 rounded accent-primary-container" type="checkbox" />
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<Icon name="local_shipping" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md font-bold text-on-surface">National Hub Logistics (Upcountry)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Gulu, Jinja, Mbarara, Mbale courier consolidation (1-2 business days).</p>
</div>
</label>
<div className="p-3 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed flex items-center gap-2">
<Icon name="verified" className="text-tertiary text-[22px]" />
<span className="font-body-sm text-body-sm font-semibold">Eligible for 'SwiftCart Verified Fast Dispatch' badge upon submission.</span>
</div>
</div>
</div>

<div className="p-margin bg-surface-container-lowest flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
<button className="h-12 px-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold opacity-40 pointer-events-none hover:bg-surface-container-high active:scale-95 transition-all flex items-center gap-1" id="wizard-prev-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[18px]" />
<span>Back</span>
</button>
<button className="flex-1 h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary active:scale-95 transition-all flex items-center justify-center gap-1.5" id="wizard-next-btn" onClick={() => alertToast('Action triggered')}>
<span id="wizard-next-text">Next: Title &amp; Category</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>

<div className="fixed top-20 inset-x-4 z-50 transform -translate-y-12 opacity-0 pointer-events-none transition-all duration-300 flex justify-center" id="catalog-toast">
<div className="px-4 py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center gap-2 font-label-md text-label-md font-bold">
<Icon name="check_circle" className="text-[20px] text-tertiary-fixed-dim" />
<span id="toast-message">Catalog updated</span>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Home</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[22px]" /><span className="font-label-sm text-label-sm">Orders</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 transition-colors text-primary font-bold" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm">Catalog</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm">Payouts</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Store</span></a></div></nav>
    </div>
  );
};

export default Screen;
