// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_products_bulk_price_update_swiftcart_desktop_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><span className="flex items-center gap-space-md"><Icon name="grid_view" className="text-[20px]" />Overview</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="receipt_long" className="text-[20px]" />Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span className="flex items-center gap-space-md"><Icon name="inventory_2" className="text-[20px]" />Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span className="flex items-center gap-space-md"><Icon name="local_shipping" className="text-[20px]" />Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span className="flex items-center gap-space-md"><Icon name="assignment_return" className="text-[20px]" />Returns &amp; Disputes</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><span className="flex items-center gap-space-md"><Icon name="account_balance_wallet" className="text-[20px]" />Wallet &amp; Payouts</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><span className="flex items-center gap-space-md"><Icon name="insights" className="text-[20px]" />Analytics &amp; Heatmaps</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><span className="flex items-center gap-space-md"><Icon name="campaign" className="text-[20px]" />Discounts &amp; Ads</span></a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="verified_user" className="text-[20px]" />Store Profile &amp; KYC</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><span className="flex items-center gap-space-md"><Icon name="settings" className="text-[20px]" />Settings</span></a><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Toggle Theme" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kigozi Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full relative min-h-[calc(100vh-4rem)]">

<div className="w-full p-space-xl opacity-40 blur-[2px] pointer-events-none select-none">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-xl">
<div>
<div className="flex items-center gap-space-sm mb-1">
<span className="font-headline-lg text-headline-lg text-on-surface">Store Inventory</span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">48 SKUs Active</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Live catalog sync with Kampala Rider dispatch hubs and Web storefront.</p>
</div>
<div className="flex items-center gap-space-md">
<button className="h-10 px-space-md rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm" onClick={() => alertToast('Action triggered')}>Bulk Actions (3)</button>
<button className="h-10 px-space-lg rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md shadow-md" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}>+ Add Product</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl">
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Catalog Net Value</span>
<div className="font-headline-md text-headline-md text-on-surface mt-1">UGX 42.8M</div>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">In Stock Available</span>
<div className="font-headline-md text-headline-md text-on-surface mt-1">384 Units</div>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Flash Promotions</span>
<div className="font-headline-md text-headline-md text-primary mt-1">6 Active</div>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Store Margin</span>
<div className="font-headline-md text-headline-md text-tertiary mt-1">21.4%</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="h-12 bg-surface-container-low rounded-xl mb-4 w-full"></div>
<div className="space-y-3">
<div className="h-16 bg-surface-container rounded-xl w-full"></div>
<div className="h-16 bg-surface-container rounded-xl w-full"></div>
<div className="h-16 bg-surface-container rounded-xl w-full"></div>
<div className="h-16 bg-surface-container rounded-xl w-full"></div>
</div>
</div>
</div>

<div className="fixed inset-0 top-16 left-0 lg:left-72 bg-on-background/40 backdrop-blur-md z-50 flex items-center justify-center p-space-md sm:p-space-xl overflow-y-auto">

<div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-[0_20px_50px_rgba(14,27,77,0.18)] my-auto flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

<div className="px-space-xl pt-space-xl pb-space-lg bg-surface-container-lowest flex items-start justify-between gap-space-lg">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
<Icon name="local_offer" className="text-primary text-[26px]" />
</div>
<div>
<div className="flex flex-wrap items-center gap-space-sm">
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Bulk Price Update</h2>
<span className="px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                3 Products Selected
              </span>
<span className="px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<Icon name="bolt" className="text-[14px] text-tertiary" />
                Instant Hub Sync
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Update active selling prices across SwiftCart Kampala riders &amp; web store instantly.
            </p>
</div>
</div>
<button aria-label="Close dialog" className="w-9 h-9 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="px-space-xl py-space-md space-y-space-lg overflow-y-auto max-h-[calc(85vh-130px)]">

<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Targeted Products in this Batch</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Selected via Central Kampala Hub</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary shadow-sm">
<Icon name="headphones" className="text-[24px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">SKU: SND-SP1</span>
<span className="font-label-sm text-label-sm text-tertiary">38 in stock</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One</h4>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-currency-code text-currency-code text-on-surface-variant">Now</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 380,000</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary shadow-sm">
<Icon name="earbuds" className="text-[24px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">SKU: ORA-FP4</span>
<span className="font-label-sm text-label-sm text-tertiary">64 in stock</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface truncate">Oraimo FreePods 4</h4>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-currency-code text-currency-code text-on-surface-variant">Now</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 115,000</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md shadow-[0_1px_4px_rgba(14,27,77,0.03)] hover:bg-surface-container transition-all">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary shadow-sm">
<Icon name="bolt" className="text-[24px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">SKU: ANK-P67</span>
<span className="font-label-sm text-label-sm text-tertiary">19 in stock</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface truncate">Anker Prime 67W</h4>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-currency-code text-currency-code text-on-surface-variant">Now</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 165,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-low/70 space-y-space-lg">
<div>
<div className="flex items-center justify-between mb-space-sm">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<Icon name="calculate" className="text-primary text-[18px]" />
                Pricing Calculation Rule
              </label>
<span className="font-body-sm text-body-sm text-on-surface-variant">Calculated per SKU base value</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md" id="calcRuleGroup">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer relative transition-all shadow-[0_4px_14px_rgba(218,55,0,0.12)]">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-surface-container-lowest"></div>
</div>
<span className="font-label-lg text-label-lg text-on-surface">Percentage (%)</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Uniform reduction off current sale price across all 3 chosen items.</p>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer transition-all">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center">
</div>
<span className="font-label-lg text-label-lg text-on-surface">Flat UGX Reduction</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Deduct exact Shillings amount from each item's current retail tag.</p>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer transition-all">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center">
</div>
<span className="font-label-lg text-label-lg text-on-surface">Set Exact Price</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Apply a single fixed price point across all selected items.</p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-xs">
<div className="flex-1 max-w-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1.5">Discount Percentage</label>
<div className="relative flex items-center">
<input className="w-full h-12 pl-4 pr-10 rounded-xl bg-surface-container-lowest text-on-surface font-price-display text-price-display outline-none shadow-sm transition-all focus:bg-surface-container-lowest" id="discountInput" type="text" value="10" />
<span className="absolute right-4 font-headline-sm text-headline-sm text-primary">%</span>
</div>
</div>

<div className="flex flex-col sm:items-end justify-center">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">Quick Presets</span>
<div className="flex items-center gap-space-xs">
<button className="preset-btn px- space-md py-2 px-3 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>-5%</button>
<button className="preset-btn px- space-md py-2 px-3 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_2px_8px_rgba(218,55,0,0.25)] transition-all" type="button" onClick={() => alertToast('Action triggered')}>-10%</button>
<button className="preset-btn px- space-md py-2 px-3 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>-15%</button>
<button className="preset-btn px- space-md py-2 px-3 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>-20%</button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recalculated Price Ledger</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live simulator including escrow guarantee fees &amp; wholesale floor</p>
</div>

<div className="px-space-md py-1.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-md text-label-md flex items-center gap-space-xs self-start sm:self-auto">
<Icon name="verified_user" className="text-[18px]" />
<span>All items maintain minimum 15% profit guardrail</span>
</div>
</div>

<div className="w-full overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md rounded-l-xl">Item</th>
<th className="py-space-sm px-space-md">Current Price</th>
<th className="py-space-sm px-space-md">New Price</th>
<th className="py-space-sm px-space-md">Buyer Saves</th>
<th className="py-space-sm px-space-md text-right rounded-r-xl">New Net Margin</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-md text-body-md">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="font-label-md text-label-md text-on-surface">SoundCore Space One ANC</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Vendor Cost: UGX 260,000</div>
</td>
<td className="py-space-md px-space-md text-on-surface-variant line-through">
                    UGX 380,000
                  </td>
<td className="py-space-md px-space-md">
<span className="font-price-display text-price-display text-tertiary">UGX 342,000</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
                      -UGX 38,000 (10%)
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="inline-flex items-center px-space-sm py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-md text-label-md">
                      19.4% Margin
                    </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="font-label-md text-label-md text-on-surface">Oraimo FreePods 4</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Vendor Cost: UGX 72,000</div>
</td>
<td className="py-space-md px-space-md text-on-surface-variant line-through">
                    UGX 115,000
                  </td>
<td className="py-space-md px-space-md">
<span className="font-price-display text-price-display text-tertiary">UGX 103,500</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
                      -UGX 11,500 (10%)
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="inline-flex items-center px-space-sm py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-md text-label-md">
                      23.8% Margin
                    </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="font-label-md text-label-md text-on-surface">Anker Prime 67W GaN</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Vendor Cost: UGX 118,000</div>
</td>
<td className="py-space-md px-space-md text-on-surface-variant line-through">
                    UGX 165,000
                  </td>
<td className="py-space-md px-space-md">
<span className="font-price-display text-price-display text-tertiary">UGX 148,500</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
                      -UGX 16,500 (10%)
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="inline-flex items-center px-space-sm py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-md text-label-md">
                      15.2% Margin
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="p-space-lg rounded-2xl bg-surface-container-low/80 flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-1.5">
<Icon name="local_fire_department" className="text-primary text-[18px]" />
<label className="font-label-md text-label-md text-on-surface">Product Badge Display</label>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Renders badge directly on SwiftCart rider app and buyer feed.
              </p>
</div>
<div className="relative flex items-center">
<Icon name="bolt" className="absolute left-3 text-primary text-[18px]" />
<input className="w-full h-11 pl-9 pr-4 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md outline-none shadow-sm" type="text" value="Kampala Tech Week Flash Sale" />
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-low/80 flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-1.5">
<Icon name="schedule" className="text-primary text-[18px]" />
<label className="font-label-md text-label-md text-on-surface">Execution Timing</label>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Reverts to previous base price automatically if deadline chosen.
              </p>
</div>

<div className="p-1 rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-1">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md transition-all text-center" type="button" onClick={() => alertToast('Action triggered')}>
                Apply Immediately
              </button>
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-[0_2px_8px_rgba(218,55,0,0.20)] transition-all" type="button" onClick={() => toggleTheme()}>
<Icon name="bolt" className="text-[16px]" />
                Until Sun midnight
              </button>
</div>
</div>
</div>
</div>

<div className="px-space-xl py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">

<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center">
<Icon name="check_circle" className="text-[16px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Safety check passed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">3 SKUs validated against Uganda Revenue min thresholds</span>
</div>
</div>

<div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
<button className="h-12 px-space-lg rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg shadow-sm transition-all hover:bg-surface-container" type="button" onClick={() => alertToast('Action triggered')}>
            Cancel &amp; Discard
          </button>
<button className="h-12 px-space-xl rounded-xl bg-primary-container hover:opacity-95 text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_16px_rgba(218,55,0,0.30)] flex items-center gap-2 transform active:scale-98 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span>Apply Price Update to 3 Items</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
