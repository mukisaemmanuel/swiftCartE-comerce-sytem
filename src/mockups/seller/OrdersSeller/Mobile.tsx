// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/orders_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Open seller menu" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><span className="font-label-lg text-label-lg font-bold text-on-surface truncate hidden min-[360px]:inline">SwiftCart Seller</span></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Search" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><span className="font-label-md text-label-md font-bold text-on-primary">KG</span></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-9 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span className="">Overview</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg transition-colors bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span className="">Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span className="">Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span className="">Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span className="">Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span className="">Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span className="">Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span className="">Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span className="">Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span className="">Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span className="">Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full pb-6 space-y-space-md">

<div className="px-gutter pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">Kikuubo Dispatch Stream</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">12 active pending fulfillment today</span>
</div>
<button aria-label="Refresh orders stream" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-transform duration-300" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="sync" className="text-[20px]" />
</button>
</div>

<div className="px-gutter space-y-space-xs">

<div className="relative flex items-center">
<Icon name="search" className="absolute left-3 text-secondary  text-[20px] pointer-events-none" />
<input className="w-full h-12 pl-10 pr-10 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-0 shadow-sm transition-all" id="order-search-input" placeholder="Search order #SC-..., buyer name" type="text" />
<button aria-label="Clear search input" className="absolute right-2 w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">
<div className="flex items-center bg-surface-container-low rounded-xl p-1 shrink-0">
<button className="date-chip px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md font-bold shadow-sm transition-all" onClick={() => alertToast('Action triggered')}>Today</button>
<button className="date-chip px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md transition-all" onClick={() => alertToast('Action triggered')}>Yesterday</button>
<button className="date-chip px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md text-label-md transition-all" onClick={() => alertToast('Action triggered')}>7D</button>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold" id="district-nakawa">
<span className="">Nakawa</span>
<button aria-label="Remove Nakawa filter" className="w-4 h-4 rounded-full flex items-center justify-center text-on-secondary-container hover:bg-surface-container active:scale-90" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[14px]" />
</button>
</div>
<button className="px-3 py-1.5 rounded-full bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md font-medium transition-all shrink-0" onClick={() => alertToast('Action triggered')}>
          Kampala Central
        </button>
<button aria-label="More filters" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="w-full overflow-x-auto no-scrollbar px-gutter">
<div className="flex items-center gap-space-xs min-w-max pb-1">
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">New</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold">3</span>
</button>
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">Processing</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">5</span>
</button>
<button className="status-tab active-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-md transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">Ready for Pickup</span>
<span className="px-1.5 py-0.5 rounded-full bg-on-primary text-primary-container text-[10px] font-extrabold">4</span>
</button>
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">Shipped</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">8</span>
</button>
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">Delivered</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">32</span>
</button>
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={() => alertToast('Action triggered')}>
<span className="">Cancelled</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">2</span>
</button>
<button className="status-tab flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-md text-label-md font-bold transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span className="">Returns</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">1</span>
</button>
</div>
</div>

<div className="px-gutter space-y-space-md">

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">

<div className="p-space-md bg-surface-container-low flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">#SC-9941</span>
<span className="px-2 py-0.5 rounded-md bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm"><Icon name="verified_user" className="text-[13px]" /> Payment Protected</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
            Today 10:14 AM
          </span>
</div>
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
          Ready for Pickup
        </span>
</div>

<div className="p-space-md space-y-space-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0 font-bold font-label-lg text-label-lg">
              RK
            </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Ronald K.</span>
<div className="flex items-center gap-1 text-secondary font-body-sm text-body-sm truncate">
<span className="material-outlined text-[15px] shrink-0 text-secondary">location_on</span>
<span className="truncate">Nakawa Division, Kampala</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm">
<Icon name="lock" className="text-[13px]" />
            Phone masked
          </div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<div className="relative w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Over-ear active noise cancelling sleek black SoundCore headphones in matte finish studio product photography on soft gray background" src={`${assetBase}/images/aec8df7183a9fb67.webp`} />
</div>
<div className="relative w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Compact white 65W GaN fast wall charger with dual USB-C ports on minimalist clean high tech desk environment" src={`${assetBase}/images/09453d95294b6683.webp`} />
</div>
<div className="flex flex-col min-w-0 ml-1">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">2 Items</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SoundCore Space One + GaN 65W</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-2">
<span className="font-body-sm text-body-sm text-secondary uppercase font-bold text-[10px]">Total Order</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 365,000</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-sm flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 truncate">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Kizito Brian</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-label-sm text-[10px] font-bold">#BOD-229</span>
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">SwiftCart Boda Express • 4 mins away</span>
</div>
</div>
<button className="h-9 px-3 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high active:scale-95 font-label-md text-label-md font-bold flex items-center gap-1 shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[16px] text-tertiary" />
            Call
          </button>
</div>

<div className="bg-primary-fixed/40 rounded-xl p-3 flex items-start gap-2.5">
<Icon name="verified" className="text-primary-container text-[20px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-primary-fixed-variant leading-tight">HANDOVER RULE</span>
<p className="font-body-sm text-body-sm text-on-primary-fixed-variant mt-0.5 leading-snug">
              Buyer holds the 6-digit delivery release code. Hand goods to rider Kizito Brian only. Never request the code prior to actual delivery.
            </p>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<button className="h-12 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest active:scale-98 font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[20px]" />
<span className="">Print Slip</span>
</button>
<button className="h-12 rounded-xl bg-primary-container text-on-primary hover:bg-primary active:scale-98 font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="assignment_turned_in" className="text-[20px]" />
<span className="">Hand to Rider</span>
</button>
</div>

<button className="w-full h-11 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface active:bg-surface-container font-label-md text-label-md font-bold flex items-center justify-center gap-1 transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<span className="">Inspect Full Ledger &amp; Rider Trail</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">

<div className="p-space-md bg-surface-container-low flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">#SC-9938</span>
<span className="px-2 py-0.5 rounded-md bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm"><Icon name="verified_user" className="text-[13px]" /> Payment Protected</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-0.5 flex items-center gap-1">
<Icon name="schedule" className="text-[14px]" />
            Today 09:42 AM
          </span>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Processing
        </span>
</div>

<div className="p-space-md space-y-space-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0 font-bold font-label-lg text-label-lg">
              GN
            </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Grace N.</span>
<div className="flex items-center gap-1 text-secondary font-body-sm text-body-sm truncate">
<Icon name="location_on" className="text-[15px] shrink-0 text-secondary" />
<span className="truncate">Mukono Central, Mukono</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm">
<Icon name="lock" className="text-[13px]" />
            Street hidden
          </div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<div className="relative w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Rugged IPX7 waterproof portable Bluetooth mini speaker in forest green tone on outdoor wet slate stone" src={`${assetBase}/images/dd21fc56b4794fa5.webp`} />
</div>
<div className="flex flex-col min-w-0 ml-1">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">1 Item</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Anker Soundcore 2 Portable</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-2">
<span className="font-body-sm text-body-sm text-secondary uppercase font-bold text-[10px]">Total Order</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 120,000</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="two_wheeler" className="text-secondary text-[20px]" />
<span className="font-body-sm text-body-sm text-secondary">Awaiting packaging confirmation</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">Unassigned</span>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<button className="h-12 rounded-xl bg-surface-container-highest text-on-surface hover:bg-surface-container-high active:scale-98 font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="check_circle" className="text-[20px] text-tertiary" />
<span className="">Confirm Order</span>
</button>
<button className="h-12 rounded-xl bg-primary-container text-on-primary hover:bg-primary active:scale-98 font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="two_wheeler" className="text-[20px]" />
<span className="">Assign Rider</span>
</button>
</div>

<div className="flex items-center justify-between pt-1">
<button className="h-12 px-4 rounded-xl bg-error-container/40 text-error hover:bg-error-container/60 active:scale-98 font-label-md text-label-md font-bold flex items-center gap-1.5 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="cancel" className="text-[18px]" />
<span className="">Cancel Order (Reason Required)</span>
</button>
<button aria-label="Inspect SC-9938" className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_right" className="text-[20px]" />
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-end" id="order-detail-modal">
<div className="w-full max-h-[777px] bg-surface-container-lowest text-on-surface rounded-t-3xl shadow-xl transform translate-y-full transition-transform duration-300 flex flex-col overflow-hidden" id="order-detail-content">

<div className="pt-3 pb-2 px-gutter flex items-center justify-between shrink-0 bg-surface-container-low">
<div className="w-12 h-1.5 rounded-full bg-secondary-fixed-dim mx-auto absolute left-1/2 -translate-x-1/2 top-2.5"></div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface" id="modal-order-id">#SC-9941</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold">Payment Protected</span>
</div>
<button aria-label="Close modal" className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:text-on-surface hover:bg-surface-container" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[22px]" />
</button>
</div>

<div className="p-gutter overflow-y-auto space-y-space-md">

<div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-sm">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Fulfillment Pipeline</span>
<div className="relative flex items-center justify-between pt-2">

<div className="absolute top-5 left-4 right-4 h-1 bg-surface-container"></div>
<div className="absolute top-5 left-4 w-2/3 h-1 bg-tertiary-container"></div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold mt-1.5">Ordered</span>
<span className="font-label-sm text-label-sm text-secondary text-[9px]">10:02 AM</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold mt-1.5">Paid</span>
<span className="font-label-sm text-label-sm text-secondary text-[9px]">10:04 AM</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold mt-1.5">Packed</span>
<span className="font-label-sm text-label-sm text-secondary text-[9px]">10:14 AM</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold mt-1.5">Dispatched</span>
<span className="font-label-sm text-label-sm text-secondary text-[9px]">Pending</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Dispatch Logistics</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">SwiftCart Express</span>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold">
                KB
              </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Kizito Brian</span>
<span className="font-body-sm text-body-sm text-secondary">TVS Apache Black • Reg #BOD-229</span>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold mt-0.5">
<Icon name="star" className="text-[13px]" />
                  4.9 Rating (412 Deliveries)
                </div>
</div>
</div>
<a className="h-12 px-4 rounded-xl bg-tertiary-container text-on-tertiary hover:bg-tertiary active:scale-95 font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-sm transition-all" href="tel:+256701448912" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="call" className="text-[18px]" />
<span className="">Call Rider</span>
</a>
</div>
<div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2 mt-2">
<Icon name="home" className="text-[18px] text-secondary" />
<span className="font-body-sm text-body-sm text-secondary truncate">Destination: Home Delivery via SwiftCart Boda (Nakawa Area)</span>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-sm">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Ordered Items</span>
<div className="space-y-space-sm divide-y-0">
<div className="flex items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-3 min-w-0">
<div className="w-11 h-11 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Over-ear active noise cancelling SoundCore Space One headphones sleek studio shot" src={`${assetBase}/images/44e15d400202eef4.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Space One (Black)</span>
<span className="font-body-sm text-body-sm text-secondary">Qty: 1 • SKU: SC-SPO-01</span>
</div>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface shrink-0">UGX 285,000</span>
</div>
<div className="flex items-center justify-between gap-space-sm pt-2">
<div className="flex items-center gap-3 min-w-0">
<div className="w-11 h-11 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Compact white 65W GaN fast wall charger angled view on pure gray backdrop" src={`${assetBase}/images/d63d18ecbf2525a5.webp`} />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">SwiftCharge GaN 65W Turbo Charger</span>
<span className="font-body-sm text-body-sm text-secondary">Qty: 1 • SKU: CHG-65W-WHT</span>
</div>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface shrink-0">UGX 80,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-space-md space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Settlement &amp; Net Ledger</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/20 px-2 py-0.5 rounded">Auto-Pay to MTN MoMo</span>
</div>
<div className="pt-2 space-y-1.5">
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary">
<span className="">Gross Order Value</span>
<span className="text-on-surface font-semibold">UGX 365,000</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary">
<div className="flex items-center gap-1">
<span className="">SwiftCart Commission</span>
<span className="font-label-sm text-[10px] bg-surface-container-highest px-1.5 py-0.2 rounded font-bold">8.0%</span>
</div>
<span className="text-error font-medium">- UGX 29,200</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-secondary">
<span className="">Delivery Cost (Paid by Buyer)</span>
<span className="text-secondary font-medium">UGX 0 (Covered)</span>
</div>
<div className="h-0.5 bg-surface-container my-1"></div>
<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Net Seller Payout</span>
<span className="font-body-sm text-[11px] text-tertiary">Funds release immediately upon buyer delivery confirmation</span>
</div>
<span className="font-price-display text-price-display font-extrabold text-tertiary">UGX 335,800</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-3 flex items-center gap-2 text-secondary font-body-sm text-[12px]">
<Icon name="security" className="text-[18px] text-primary" />
<span className="">Security Notice: Never disclose merchant secret PIN. Delivery code is exclusively in buyer app.</span>
</div>
</div>

<div className="p-gutter bg-surface-container-low shrink-0 flex items-center gap-space-xs">
<button className="flex-1 h-12 rounded-xl bg-surface-container-highest text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg font-bold transition-all" onClick={() => alertToast('Action triggered')}>
          Done
        </button>
<button className="h-12 px-5 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg font-bold flex items-center gap-1.5 shadow-sm transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[20px]" />
<span className="">Print Slip</span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-gutter" id="cancel-reason-modal">
<div className="w-full max-w-sm bg-surface-container-lowest text-on-surface rounded-2xl shadow-2xl p-space-lg flex flex-col space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center">
<Icon name="warning" className="text-[22px]" />
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-on-surface" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Cancel Order <span id="cancel-order-id-label" className="">#SC-9938</span>?</span>
<p className="font-body-sm text-body-sm text-secondary">
          Cancelling will automatically refund Grace N. through escrow. You must provide a valid cancellation reason to avoid seller rating penalties.
        </p>
</div>
<div className="space-y-space-xs">
<label className="font-label-sm text-label-sm font-bold uppercase text-secondary" htmlFor="cancel-reason-input">Reason for Cancellation</label>
<textarea className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-highest transition-all resize-none" id="cancel-reason-input" placeholder="e.g., Stock mismatch in warehouse, defective unit during quality inspection..." rows={3}></textarea>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-bold transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
          Keep Order
        </button>
<button className="flex-1 h-12 rounded-xl bg-error text-on-error hover:bg-error/90 active:scale-95 font-label-md text-label-md font-bold transition-all shadow-sm" id="submit-cancel-btn" onClick={() => alertToast('Action triggered')}>
          Confirm Cancel
        </button>
</div>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none transform -translate-y-4" id="toast-notify">
<Icon name="check_circle" className="text-[20px] text-tertiary-fixed" />
<span className="font-label-md text-label-md font-medium" id="toast-msg">Action performed successfully</span>
</div>
</div>

</main>
<nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Home</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 transition-colors text-primary font-bold" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[22px]" /><span className="font-label-sm text-label-sm">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm">Catalog</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm">Payouts</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Store</span></a></div></nav>
    </div>
  );
};

export default Mobile;
