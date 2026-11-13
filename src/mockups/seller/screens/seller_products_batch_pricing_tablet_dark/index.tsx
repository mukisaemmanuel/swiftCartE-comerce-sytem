// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_products_batch_pricing_tablet_dark/code.html
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
      <aside className="fixed left-0 top-0 bottom-0 w-[72px] bg-container-dark-low z-50 flex flex-col items-center py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="h-12 w-12 flex items-center justify-center mb-space-md rounded-xl bg-surface-container-high"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /></div><nav className="flex-1 flex flex-col gap-space-xs items-center w-full px-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]"><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="receipt_long" className="text-[24px]" /></a><a aria-current="page" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="returns-and-disputes" href="#" title="Returns & Disputes" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="wallet" href="#" title="Escrow & Wallet" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[24px]" /></a></nav><div className="flex flex-col gap-space-xs items-center w-full px-space-xs pt-space-xs"><a className="relative w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-airtel-red"></span></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[24px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-16 bg-surface-dark/95 backdrop-blur-xl z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.3)]"><div className="flex items-center gap-space-md min-w-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex items-center gap-space-xs bg-container-dark-low px-space-md py-1.5 rounded-xl"><Icon name="store" className="text-primary text-[18px]" /><div className="flex flex-col min-w-0"><span className="font-label-md text-on-surface truncate">Victoria Tech Supplies</span><span className="font-label-sm text-on-surface-variant truncate">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-on-surface-variant text-[18px] ml-space-xs" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center bg-container-dark-low px-space-md py-1.5 rounded-xl w-56"><Icon name="search" className="text-on-surface-variant text-[18px] mr-space-xs" /><span className="font-body-sm text-on-surface-variant select-none">Search orders, SKUs...</span></div><button className="w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-airtel-red text-on-primary-container font-label-sm flex items-center justify-center px-1">4</span></button><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-on-primary">VT</div></div></div></header><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-container-dark-high px-space-lg py-2 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-escrow -ml-3"></span>
<span className="font-label-sm text-on-surface truncate">HUB MESH LIVE • Nakasero Bay Telematics Active</span>
<span className="font-body-sm text-on-surface-variant">| SafeBoda dispatch sync: <span className="text-tertiary font-label-md">0.4s lag</span></span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span className="font-label-sm uppercase tracking-wider text-amber-warning flex items-center gap-1">
<Icon name="cloud_done" className="text-[14px]" /> 14 Queued Local Writes
      </span>
<span className="font-label-sm text-outline">MTN MoMo API: 100% Ok</span>
</div>
</div>
<div className="p-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-on-surface font-extrabold tracking-tight">Products &amp; Inventory</h1>
<span className="bg-primary-container/20 text-primary font-label-sm px-2.5 py-1 rounded-full border-none">48 Active SKUs</span>
<span className="bg-tertiary-container/25 text-tertiary font-label-sm px-2 py-0.5 rounded-md flex items-center gap-1">
<Icon name="verified_user" className="text-[13px]" /> Escrow Guarded
          </span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">
          Manage prices, stock levels, and SafeBoda dispatch status across Kampala warehouses
        </p>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<button className="h-11 px-space-md bg-container-dark-high hover:bg-surface-bright text-on-surface font-label-md rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="file_download" className="text-[18px]" />
<span>Export CSV</span>
</button>
<button className="h-11 px-space-md bg-secondary-container text-secondary font-label-md rounded-xl flex items-center gap-2 transition-all hover:brightness-110 active:scale-95 shadow-sm" id="openBulkSheetBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[18px]" />
<span>Bulk Price Update</span>
</button>
<button className="h-11 px-space-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_18px_rgba(218,55,0,0.35)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>
<Icon name="add" className="text-[20px]" />
<span>Add Product</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm uppercase tracking-wider">Total Value in Hub</span>
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
</div>
<div className="mt-3 flex flex-col">
<span className="font-price-display text-on-surface">UGX 46,280,000</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-tertiary">
<Icon name="trending_up" className="text-[14px]" />
<span>+8.4% from last batch</span>
</div>
</div>
<div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/5 rounded-full pointer-events-none"></div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm uppercase tracking-wider">Low Stock Alerts</span>
<Icon name="warning" className="text-amber-warning text-[20px]" />
</div>
<div className="mt-3 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-price-display text-amber-warning">3</span>
<span className="font-body-md text-on-surface-variant">Items require restock</span>
</div>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-on-surface-variant">
<span>Critical under 5 units</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm uppercase tracking-wider">Active Promotions</span>
<Icon name="local_fire_department" className="text-tertiary text-[20px]" />
</div>
<div className="mt-3 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-price-display text-on-surface">4 Live</span>
<span className="font-label-sm text-tertiary bg-tertiary-container/30 px-1.5 py-0.5 rounded">Kampala Rush</span>
</div>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-on-surface-variant">
<span>Avg discount 11.2%</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm uppercase tracking-wider">Sync SLA</span>
<Icon name="electric_moped" className="text-emerald-escrow text-[20px]" />
</div>
<div className="mt-3 flex flex-col">
<span className="font-price-display text-emerald-escrow">99.8%</span>
<div className="flex items-center gap-1.5 mt-1 font-body-sm text-on-surface-variant">
<span>Kampala Express Ready</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md shadow-sm">
<div className="flex-1 flex items-center bg-container-dark-low px-space-md py-2.5 rounded-xl min-w-0">
<Icon name="search" className="text-on-surface-variant text-[20px] mr-space-sm" />
<input className="bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-outline w-full" id="productSearchInput" placeholder="Search by SKU, product name, or barcode..." type="text" />
<kbd className="hidden sm:inline-block font-label-sm bg-container-dark-high text-on-surface-variant px-2 py-0.5 rounded text-[10px]">⌘K</kbd>
</div>
<div className="flex items-center gap-space-sm overflow-x-auto pb-1 lg:pb-0">

<div className="relative">
<select className="appearance-none bg-container-dark-high text-on-surface font-label-md pl-space-md pr-8 py-2.5 rounded-xl cursor-pointer focus:outline-none">
<option>All Categories</option>
<option selected={true}>Audio &amp; Sound (24)</option>
<option>Charging &amp; Cables (14)</option>
<option>Smart Wearables (10)</option>
</select>
<Icon name="expand_more" className="text-on-surface-variant pointer-events-none absolute right-2.5 top-2.5 text-[18px]" />
</div>

<div className="flex bg-container-dark-low p-1 rounded-xl text-on-surface-variant">
<button className="px-space-md py-1.5 rounded-lg text-on-primary bg-primary-container font-label-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>All</button>
<button className="px-space-md py-1.5 rounded-lg hover:text-on-surface font-label-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>In Stock</button>
<button className="px-space-md py-1.5 rounded-lg hover:text-on-surface font-label-sm text-amber-warning transition-all flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
            Low Stock <span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>3
          </button>
<button className="px-space-md py-1.5 rounded-lg hover:text-on-surface font-label-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>Out (1)</button>
</div>
<button className="w-10 h-10 rounded-xl bg-container-dark-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0" title="Sort Table" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sort" className="text-[20px]" />
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm">

<div className="px-space-md py-3 bg-surface-container flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<input className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer" id="selectAllCheckbox" type="checkbox" />
<span className="font-label-sm uppercase tracking-wider">Catalog Manifest (5 items displayed)</span>
</div>
<div className="flex items-center gap-space-md font-label-sm">
<span>Selected: <span className="text-primary font-bold" id="selectedCount">1</span></span>
<button className="text-primary hover:underline flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[14px]" /> Adjust Columns
              </button>
</div>
</div>

<div className="divide-y-0 flex flex-col">

<div className="product-row bg-container-dark-high/70 p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md cursor-pointer transition-colors relative" data-sku="SC-SPO1-BLK">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-action-gradient-start rounded-r"></div>
<div className="flex items-center gap-space-md min-w-0">
<input checked={true} className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer flex-shrink-0" type="checkbox" />
<div className="w-14 h-14 rounded-xl bg-container-dark-low flex items-center justify-center overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Modern premium wireless over-ear noise-cancelling headphones in matte obsidian black on dark slate backdrop with sleek orange studio edge lighting" src={`${assetBase}/images/19b25578b45099f0.webp`} />
<span className="absolute bottom-1 right-1 bg-surface-dark/90 text-tertiary rounded px-1 text-[9px] font-bold">BT 5.3</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-on-surface truncate">SoundCore Space One ANC Headphones</span>
<span className="font-label-sm bg-container-dark-low text-on-surface-variant px-2 py-0.5 rounded">Audio</span>
</div>
<div className="flex items-center gap-3 mt-1 font-body-sm text-on-surface-variant">
<span>SKU: <strong className="text-on-surface font-label-sm">SC-SPO1-BLK</strong></span>
<span>•</span>
<span className="text-tertiary flex items-center gap-1">
<Icon name="inventory" className="text-[14px]" /> 24 in Nakasero Hub
                    </span>
</div>
</div>
</div>

<div className="flex items-center justify-between sm:justify-end gap-space-lg pl-8 sm:pl-0">
<div className="flex flex-col sm:items-end">
<span className="font-price-display text-on-surface text-[18px]">UGX 248,500</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-tertiary">Margin: 18%</span>
<span className="font-label-sm bg-tertiary-container/30 text-tertiary px-1.5 rounded">SafeBoda Ready</span>
</div>
</div>
<div className="flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface transition-all" title="Fast Edit Price" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_note" className="text-[18px]" />
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" title="More Options" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="product-row bg-surface-container-low hover:bg-surface-container/60 p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md cursor-pointer transition-colors" data-sku="ANK-65W-GAN">
<div className="flex items-center gap-space-md min-w-0">
<input className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer flex-shrink-0" type="checkbox" />
<div className="w-14 h-14 rounded-xl bg-container-dark-low flex items-center justify-center overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Compact dual-port 65 watt GaN wall plug charger with USB-C ports on minimal dark tech surface with subtle warm rim reflection" src={`${assetBase}/images/1917a9f4260e73b7.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-on-surface truncate">Anker 65W GaN Dual-Port Charger</span>
<span className="font-label-sm bg-container-dark-low text-on-surface-variant px-2 py-0.5 rounded">Charging</span>
</div>
<div className="flex items-center gap-3 mt-1 font-body-sm text-on-surface-variant">
<span>SKU: <strong className="text-on-surface font-label-sm">ANK-65W-GAN</strong></span>
<span>•</span>
<span className="text-amber-warning font-label-sm flex items-center gap-1 bg-amber-warning/10 px-1.5 py-0.5 rounded">
<Icon name="report" className="text-[14px]" /> 4 units (Low Stock)
                    </span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-lg pl-8 sm:pl-0">
<div className="flex flex-col sm:items-end">
<span className="font-price-display text-on-surface text-[18px]">UGX 115,000</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-outline">Margin: 22%</span>
<span className="font-label-sm text-primary">Priority Courier</span>
</div>
</div>
<div className="flex items-center gap-1">
<button className="h-9 px-3 rounded-lg bg-amber-warning/15 hover:bg-amber-warning/25 text-amber-warning font-label-sm flex items-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Restock
                  </button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="product-row bg-surface-container-low hover:bg-surface-container/60 p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md cursor-pointer transition-colors" data-sku="SC-LIB4-BLU">
<div className="flex items-center gap-space-md min-w-0">
<input className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer flex-shrink-0" type="checkbox" />
<div className="w-14 h-14 rounded-xl bg-container-dark-low flex items-center justify-center overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Deep marine blue true wireless earbuds resting in an open charging case showing illuminated LED indicator on reflective deep dark surface" src={`${assetBase}/images/bcdc3e56f718f5b9.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-on-surface truncate">SoundCore Liberty 4 NC Earbuds</span>
<span className="font-label-sm bg-container-dark-low text-on-surface-variant px-2 py-0.5 rounded">Audio</span>
</div>
<div className="flex items-center gap-3 mt-1 font-body-sm text-on-surface-variant">
<span>SKU: <strong className="text-on-surface font-label-sm">SC-LIB4-BLU</strong></span>
<span>•</span>
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="warehouse" className="text-[14px]" /> 38 units (Healthy)
                    </span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-lg pl-8 sm:pl-0">
<div className="flex flex-col sm:items-end">
<span className="font-price-display text-on-surface text-[18px]">UGX 280,000</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-tertiary">Flash Sale Ready</span>
</div>
</div>
<div className="flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_note" className="text-[18px]" />
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="product-row bg-surface-container-low hover:bg-surface-container/60 p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md cursor-pointer transition-colors" data-sku="ORA-FP4-BLK">
<div className="flex items-center gap-space-md min-w-0">
<input className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer flex-shrink-0" type="checkbox" />
<div className="w-14 h-14 rounded-xl bg-container-dark-low flex items-center justify-center overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Matte black wireless sliding lid earbuds charging cradle with bright green neon accent strip against a textured dark industrial Kampala tabletop" src={`${assetBase}/images/c0fdf12b6921299e.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-on-surface truncate">Oraimo FreePods 4 ANC</span>
<span className="font-label-sm bg-container-dark-low text-on-surface-variant px-2 py-0.5 rounded">Audio</span>
</div>
<div className="flex items-center gap-3 mt-1 font-body-sm text-on-surface-variant">
<span>SKU: <strong className="text-on-surface font-label-sm">ORA-FP4-BLK</strong></span>
<span>•</span>
<span className="text-on-surface-variant">16 units (Ntinda Warehouse)</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-lg pl-8 sm:pl-0">
<div className="flex flex-col sm:items-end">
<span className="font-price-display text-on-surface text-[18px]">UGX 145,000</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-tertiary">Margin: 24%</span>
</div>
</div>
<div className="flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_note" className="text-[18px]" />
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="product-row bg-surface-container-low hover:bg-surface-container/60 p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md cursor-pointer transition-colors opacity-85" data-sku="JBL-CHG5-GRN">
<div className="flex items-center gap-space-md min-w-0">
<input className="w-4 h-4 rounded bg-container-dark-low accent-primary-container cursor-pointer flex-shrink-0" type="checkbox" />
<div className="w-14 h-14 rounded-xl bg-container-dark-low flex items-center justify-center overflow-hidden flex-shrink-0 filter grayscale">
<img className="w-full h-full object-cover" data-alt="Rugged forest green cylindrical portable bluetooth speaker standing upright with water droplets in high-contrast moody dark illumination" src={`${assetBase}/images/bb4958f6b215d7c1.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-on-surface truncate">JBL Charge 5 Portable Speaker</span>
<span className="font-label-sm bg-container-dark-low text-on-surface-variant px-2 py-0.5 rounded">Audio</span>
</div>
<div className="flex items-center gap-3 mt-1 font-body-sm text-on-surface-variant">
<span>SKU: <strong className="text-on-surface font-label-sm">JBL-CHG5-GRN</strong></span>
<span>•</span>
<span className="text-danger-penalty font-label-sm flex items-center gap-1 bg-danger-penalty/10 px-2 py-0.5 rounded">
<Icon name="block" className="text-[14px]" /> 0 units • Stockout
                    </span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-lg pl-8 sm:pl-0">
<div className="flex flex-col sm:items-end">
<span className="font-price-display text-outline text-[18px]">UGX 520,000</span>
<span className="font-label-sm text-amber-warning">Restock Po Inbound</span>
</div>
<div className="flex items-center gap-1">
<button className="h-9 px-3 rounded-lg bg-surface-bright text-on-surface font-label-sm flex items-center gap-1 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
                    Re-order
                  </button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container flex items-center justify-between text-on-surface-variant font-body-sm">
<span>Showing 1 to 5 of 48 registered Kampala items</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-container-dark-low flex items-center justify-center hover:text-on-surface disabled:opacity-40" disabled={true} onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_left" className="text-[18px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm" onClick={() => alertToast('Action triggered')}>1</button>
<button className="w-8 h-8 rounded-lg bg-container-dark-low flex items-center justify-center hover:text-on-surface" onClick={() => alertToast('Action triggered')}>2</button>
<button className="w-8 h-8 rounded-lg bg-container-dark-low flex items-center justify-center hover:text-on-surface" onClick={() => alertToast('Action triggered')}>3</button>
<button className="w-8 h-8 rounded-lg bg-container-dark-low flex items-center justify-center hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-action-gradient-start/20 text-action-gradient-start flex items-center justify-center flex-shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-surface">SafeBoda Express Nakasero Corridor</span>
<span className="font-body-sm text-on-surface-variant truncate">Riders stationed at Nakasero Bay Hub: <strong>14 Available</strong> • Peak pick time 6 min</span>
</div>
</div>
<button className="h-9 px-3 rounded-lg bg-container-dark-low hover:bg-container-dark-high text-primary font-label-sm flex items-center gap-1 transition-all flex-shrink-0" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<span>View Hub Fleet</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-md shadow-lg relative">

<div className="flex items-center justify-between">
<span className="font-label-sm text-primary uppercase tracking-wider font-extrabold flex items-center gap-1.5">
<Icon name="touch_app" className="text-[16px]" /> Selected Item Inspector
            </span>
<span className="bg-tertiary-container/30 text-tertiary font-label-sm px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active Live
            </span>
</div>

<div className="w-full h-44 rounded-xl bg-container-dark-low relative overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancellation headphones shown from an angled profile highlighting cushioned earcups and metallic hinges in studio lighting" src={`${assetBase}/images/550df3534451da1d.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/20 to-transparent"></div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
<div>
<p className="font-label-lg text-on-surface truncate">SoundCore Space One ANC</p>
<p className="font-label-sm text-on-surface-variant">SKU: SC-SPO1-BLK</p>
</div>
<span className="font-label-sm bg-container-dark-high text-on-surface px-2 py-1 rounded">Audio SKU</span>
</div>
</div>

<div className="bg-container-dark-low p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant">
<label className="font-label-sm uppercase tracking-wide" htmlFor="priceInput">Base Price (UGX)</label>
<span className="font-label-sm text-emerald-escrow">Est. Escrow Payout: UGX 238,560</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<button className="w-11 h-11 rounded-lg bg-container-dark-high text-on-surface font-headline-sm flex items-center justify-center hover:bg-surface-bright active:scale-95 transition-all" id="priceDecrementBtn" title="Decrease 5,000" type="button" onClick={() => alertToast('Action triggered')}>
                -
              </button>
<div className="flex-1 relative flex items-center">
<span className="absolute left-3 font-label-md text-on-surface-variant select-none">UGX</span>
<input className="w-full h-11 bg-surface-container rounded-lg font-price-display text-on-surface pl-12 pr-3 focus:outline-none focus:ring-1 focus:ring-primary text-center" id="priceInput" type="text" value="248,500" />
</div>
<button className="w-11 h-11 rounded-lg bg-container-dark-high text-on-surface font-headline-sm flex items-center justify-center hover:bg-surface-bright active:scale-95 transition-all" id="priceIncrementBtn" title="Increase 5,000" type="button" onClick={() => alertToast('Action triggered')}>
                +
              </button>
</div>
<p className="font-body-sm text-on-surface-variant mt-1">Single click jumps by <strong className="text-on-surface">± UGX 5,000</strong> increments.</p>
</div>

<div className="flex flex-col gap-space-sm pt-1">

<label className="flex items-center justify-between p-3 rounded-xl bg-container-dark-low cursor-pointer hover:bg-container-dark-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="bolt" className="text-amber-warning text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-on-surface">Flash Sale Promotion</span>
<span className="font-body-sm text-on-surface-variant">Boost in Kampala Express feeds</span>
</div>
</div>
<input checked={true} className="w-5 h-5 rounded bg-surface-container accent-primary-container cursor-pointer" id="flashSaleToggle" type="checkbox" />
</label>

<label className="flex items-center justify-between p-3 rounded-xl bg-container-dark-low cursor-pointer hover:bg-container-dark-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="electric_moped" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-on-surface">SafeBoda Priority Lock</span>
<span className="font-body-sm text-on-surface-variant">Guaranteed under 45-min pickup</span>
</div>
</div>
<input checked={true} className="w-5 h-5 rounded bg-surface-container accent-primary-container cursor-pointer" id="bodaPriorityToggle" type="checkbox" />
</label>

<div className="flex items-center justify-between p-3 rounded-xl bg-container-dark-low">
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="repeat" className="text-secondary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-on-surface">Auto-Restock Alert</span>
<span className="font-body-sm text-on-surface-variant">Send notification when stock drops below</span>
</div>
</div>
<span className="font-label-md bg-container-dark-high px-2.5 py-1 rounded-lg text-secondary">5 units</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<button className="w-full h-12 bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-95 transition-all" id="applyBatchPricingBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sync_alt" className="text-[20px]" />
<span>Apply to 3 Selected Audio SKUs</span>
</button>
<span className="text-center font-body-sm text-outline">Updates sync instantly with Nakasero dispatch hub</span>
</div>
</div>

<div className="bg-surface-container-low/70 rounded-xl p-space-md flex items-start gap-space-sm">
<Icon name="shield" className="text-emerald-escrow text-[22px] flex-shrink-0" />
<div className="flex flex-col">
<span className="font-label-sm text-on-surface">Automated Escrow Hold Guarantee</span>
<p className="font-body-sm text-on-surface-variant mt-0.5">
              Buyer payments are locked into SwiftCart Escrow upon dispatch. Mobile Money settlement (MTN/Airtel) unlocks automatically 15 minutes post-OTP driver receipt.
            </p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-surface-dark/75 backdrop-blur-sm hidden flex justify-end transition-opacity duration-200" id="bulkPriceSheet">
<div className="w-full max-w-md bg-container-dark-high h-full p-space-lg flex flex-col justify-between shadow-2xl relative overflow-y-auto">
<div className="flex flex-col gap-space-md">

<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-action-gradient-start/20 text-action-gradient-start flex items-center justify-center">
<Icon name="bolt" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-on-surface">Bulk Price Adjustment</h2>
<p className="font-body-sm text-on-surface-variant">Batch edit prices across active SKUs</p>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface" id="closeBulkSheetBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm uppercase tracking-wider text-on-surface-variant">Target Category</label>
<div className="bg-container-dark-low p-2.5 rounded-xl flex items-center justify-between text-on-surface font-label-md">
<span>Audio &amp; Sound (Selected: 3 SKUs)</span>
<Icon name="check_circle" className="text-[18px] text-tertiary" />
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm uppercase tracking-wider text-on-surface-variant">Adjustment Formula</label>
<div className="grid grid-cols-2 gap-space-xs bg-container-dark-low p-1 rounded-xl">
<button className="py-2 rounded-lg bg-surface-bright text-on-surface font-label-sm text-center" type="button" onClick={() => alertToast('Action triggered')}>Percentage (%)</button>
<button className="py-2 rounded-lg text-on-surface-variant font-label-sm text-center" type="button" onClick={() => alertToast('Action triggered')}>Fixed UGX (+/-)</button>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="flex-1 relative flex items-center">
<input className="w-full h-11 bg-container-dark-low rounded-xl font-headline-sm text-on-surface px-4 focus:outline-none" type="number" value="5" />
<span className="absolute right-4 font-label-md text-on-surface-variant">% Mark-up</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Impact Simulation Preview</span>
<div className="bg-container-dark-low rounded-xl p-3 flex flex-col gap-2 font-body-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Space One ANC:</span>
<span className="text-on-surface font-mono">248,500 → <strong className="text-tertiary">260,925</strong></span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Liberty 4 NC:</span>
<span className="text-on-surface font-mono">280,000 → <strong className="text-tertiary">294,000</strong></span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Oraimo FreePods 4:</span>
<span className="text-on-surface font-mono">145,000 → <strong className="text-tertiary">152,250</strong></span>
</div>
<div className="mt-2 pt-2 flex items-center justify-between text-on-surface font-label-sm bg-container-dark-high/50 p-2 rounded">
<span>Estimated Added Margin:</span>
<span className="text-emerald-escrow font-bold">+ UGX 1,485,200</span>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-amber-warning/10 text-amber-warning flex items-start gap-2">
<Icon name="info" className="text-[18px] flex-shrink-0 mt-0.5" />
<span className="font-body-sm">Changes will publish immediately to the buyer marketplace. SafeBoda delivery commissions remain unaffected.</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-space-md">
<button className="w-full h-12 bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-[0_4px_18px_rgba(218,55,0,0.35)]" id="confirmBatchPriceBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[20px]" />
<span>Commit Batch Updates</span>
</button>
<button className="w-full h-10 bg-container-dark-low text-on-surface-variant hover:text-on-surface font-label-md rounded-xl transition-colors" id="cancelBulkSheetBtn" type="button" onClick={() => alertToast('Action triggered')}>
          Cancel
        </button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 bg-container-dark-high text-on-surface px-space-md py-3 rounded-xl shadow-2xl flex items-center gap-space-sm transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="liveFeedbackToast">
<Icon name="check_circle" className="text-emerald-escrow text-[22px]" />
<span className="font-label-md" id="toastMsg">SKU Price updated across Kampala nodes.</span>
</div>


</div></main></div>
    </div>
  );
};

export default Screen;
