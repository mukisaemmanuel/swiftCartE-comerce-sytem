// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/riders_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Open seller menu" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><span className="font-label-lg text-label-lg font-bold text-on-surface truncate hidden min-[360px]:inline">SwiftCart Seller</span></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Search" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[22px]" /></button><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-9 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg transition-colors bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full">
<div className="px-gutter pt-space-md pb-space-lg space-y-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="space-y-0.5">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-extrabold">
          My Couriers &amp; Boda Fleet
        </h1>
<div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></span>
<span>4 Registered Riders <strong className="text-on-surface font-semibold">(3 Online)</strong></span>
</div>
</div>
<button aria-label="Invite new courier rider" className="h-12 px-space-md rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary transition-transform active:scale-95 flex items-center gap-1.5 shrink-0" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="person_add" className="text-[20px]" />
<span>+ Invite</span>
</button>
</div>
<div className="p-space-md rounded-xl bg-surface-container-high text-on-surface flex items-start gap-space-sm shadow-sm relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/5 pointer-events-none"></div>
<Icon name="local_shipping" className="text-primary text-[24px] shrink-0 mt-0.5" />
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
        Assign your dedicated boda riders for instant same-day dispatches in <strong className="text-on-surface font-semibold">Kampala</strong>, <strong className="text-on-surface font-semibold">Wakiso</strong> &amp; <strong className="text-on-surface font-semibold">Entebbe</strong>.
      </p>
</div>
<div className="space-y-space-md">
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
<Icon name="two_wheeler" className="text-secondary text-[26px]" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Kizito Brian</h2>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-bold">Bajaj Boxer</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono tracking-wider font-extrabold">UEF 842X</span>
</div>
</div>
</div>
<button aria-label="Remove rider" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="person_remove" className="text-[20px]" />
</button>
</div>
<div className="flex items-center gap-2 px-space-sm py-1.5 rounded-lg bg-tertiary/10 text-tertiary">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-container"></span>
</span>
<span className="font-label-md text-label-md font-bold truncate">Online • At Stage (Kikuubo)</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Operating Zone</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Kampala Central &amp; Nakawa</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Masked Relay Call</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">0772 ••• 419</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="font-semibold uppercase">Active Deliveries in Transit</span>
<span className="font-bold text-primary">2 Active Orders</span>
</div>
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-mono font-bold text-label-sm text-on-surface shadow-xs">#SC-9941</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-mono font-bold text-label-sm text-on-surface shadow-xs">#SC-9935</span>
<span className="text-tertiary font-label-sm text-label-sm font-semibold flex items-center ml-auto">
<Icon name="navigation" className="text-[16px] mr-0.5" /> En route
            </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="assignment_turned_in" className="text-[20px]" />
<span>Assign to Order</span>
</button>
<a className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px] text-tertiary" />
<span>Call</span>
</a>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
<Icon name="two_wheeler" className="text-secondary text-[26px]" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Musoke Dennis</h2>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-bold">TVS Apache</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono tracking-wider font-extrabold">UEY 104M</span>
</div>
</div>
</div>
<button aria-label="Remove rider" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="person_remove" className="text-[20px]" />
</button>
</div>
<div className="flex items-center gap-2 px-space-sm py-1.5 rounded-lg bg-tertiary/10 text-tertiary">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-container"></span>
</span>
<span className="font-label-md text-label-md font-bold truncate">Online • Rolling on Entebbe Rd</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Operating Zone</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Rubaga &amp; Makindye</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Masked Relay Call</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">0701 ••• 882</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Active Orders:</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-mono font-bold text-label-sm text-on-surface shadow-xs">#SC-9920</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">1 Order Active</span>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="assignment_turned_in" className="text-[20px]" />
<span>Assign to Order</span>
</button>
<a className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px] text-tertiary" />
<span>Call</span>
</a>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
<Icon name="two_wheeler" className="text-secondary text-[26px]" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Okello John</h2>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-bold">Bajaj Boxer</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono tracking-wider font-extrabold">UFA 331Q</span>
</div>
</div>
</div>
<button aria-label="Remove rider" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="person_remove" className="text-[20px]" />
</button>
</div>
<div className="flex items-center gap-2 px-space-sm py-1.5 rounded-lg bg-tertiary-container/20 text-on-tertiary-container">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
<span className="font-label-md text-label-md font-bold truncate">Online • Idle / Ready for Dispatch</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Operating Zone</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Kawempe &amp; Kira</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Masked Relay Call</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">0782 ••• 901</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Active Orders</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded">0 Orders (Immediate Available)</span>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[20px]" />
<span>Assign Immediately</span>
</button>
<a className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px] text-tertiary" />
<span>Call</span>
</a>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest/80 p-space-md shadow-sm space-y-space-sm opacity-85">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
<Icon name="two_wheeler" className="text-secondary-fixed-dim text-[26px]" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary-fixed ring-2 ring-surface-container-lowest"></span>
</div>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Tumusiime Eric</h2>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary font-bold">Honda Ace</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono tracking-wider font-extrabold">UDG 712L</span>
</div>
</div>
</div>
<button aria-label="Remove rider" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="person_remove" className="text-[20px]" />
</button>
</div>
<div className="flex items-center gap-2 px-space-sm py-1.5 rounded-lg bg-surface-container text-secondary">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span>
<span className="font-label-md text-label-md font-medium truncate">Offline • Last seen 3h ago</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Operating Zone</span>
<span className="font-label-md text-label-md font-semibold text-secondary truncate">Ntinda &amp; Kyambogo</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Masked Relay Call</span>
<span className="font-label-md text-label-md font-semibold text-secondary font-mono">0759 ••• 104</span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-surface-container text-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 cursor-not-allowed opacity-60" disabled={true} onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="schedule" className="text-[20px]" />
<span>Rider Offline</span>
</button>
<a className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px] text-secondary" />
<span>Call</span>
</a>
</div>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm text-secondary">
<Icon name="shield_lock" className="text-[20px] shrink-0 text-tertiary" />
<p className="font-label-sm text-label-sm leading-tight">
        Direct numbers are protected via SwiftCart Tel-Relay. Handover verification pins stay concealed until physical parcel drop.
      </p>
</div>
</div>
<div aria-modal="true" className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end justify-center hidden" id="assign-modal" role="dialog">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-gutter space-y-space-md shadow-2xl animate-in slide-in-from-bottom duration-200">
<div className="flex items-center justify-between pb-1">
<div>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">Dispatch Ready</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Assign Order to Courier</h3>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[22px]" />
</button>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="sports_motorsports" className="text-primary text-[22px]" />
<div>
<p className="font-label-lg text-label-lg font-bold text-on-surface" id="modal-rider-name">Kizito Brian</p>
<p className="font-label-sm text-label-sm text-secondary font-mono" id="modal-rider-plate">UEF 842X</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">Selected</span>
</div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Select Unassigned Dispatches</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">2 Parcels Packed</span>
</div>
<div className="space-y-2">
<label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<input checked={true} className="w-5 h-5 accent-primary-container" name="order_dispatch" type="radio" value="SC-9942" />
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md font-bold font-mono text-on-surface">#SC-9942</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">Urgent</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">JBL PartyBox Stage 320 • Bukoto, Kampala</p>
</div>
</div>
<span className="font-label-md text-label-md font-extrabold text-on-surface">UGX 1.8M</span>
</label>
<label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<input className="w-5 h-5 accent-primary-container" name="order_dispatch" type="radio" value="SC-9945" />
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md font-bold font-mono text-on-surface">#SC-9945</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">Standard</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sony WH-1000XM5 • Naalya Estate</p>
</div>
</div>
<span className="font-label-md text-label-md font-extrabold text-on-surface">UGX 940k</span>
</label>
</div>
</div>
<div className="pt-2 flex items-center gap-space-xs">
<button className="flex-1 h-12 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold active:scale-98 transition-all" onClick={() => alertToast('Action triggered')}>
          Cancel
        </button>
<button className="flex-[2] h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="near_me" className="text-[20px]" />
<span>1-Tap Rider Dispatch</span>
</button>
</div>
</div>
</div>
<div aria-modal="true" className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center px-margin hidden" id="confirm-modal" role="dialog">
<div className="w-full max-w-sm bg-surface-container-lowest rounded-2xl p-gutter space-y-space-md shadow-2xl animate-in zoom-in-95 duration-150">
<div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center mx-auto">
<Icon name="warning" className="text-[28px]" />
</div>
<div className="text-center space-y-1">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Unbind Courier Rider?</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
          Are you sure you want to unbind <strong className="text-on-surface" id="unbind-rider-name">Kizito Brian</strong>? Pending orders must be reassigned first.
        </p>
</div>
<div className="p-space-sm rounded-xl bg-error-container/40 text-on-error-container flex items-center gap-2" id="unbind-warning-pill">
<Icon name="info" className="text-[20px] text-error shrink-0" />
<span className="font-label-sm text-label-sm font-semibold" id="unbind-warning-text">2 active deliveries will be cancelled from this rider.</span>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 h-12 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold active:scale-98 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
          Keep Rider
        </button>
<button className="flex-1 h-12 rounded-xl bg-error text-on-error font-label-lg text-label-lg font-bold flex items-center justify-center gap-1 shadow-md active:scale-98 transition-transform" onClick={() => alertToast('Action triggered')}>
<span>Confirm</span>
</button>
</div>
</div>
</div>
<div className="fixed top-20 inset-x-4 mx-auto max-w-sm z-50 bg-inverse-surface text-inverse-on-surface p-space-sm rounded-xl shadow-xl flex items-center gap-2.5 transition-all duration-300 opacity-0 pointer-events-none translate-y-[-10px]" id="fleet-toast">
<Icon name="check_circle" className="text-tertiary-container text-[22px]" />
<span className="font-label-md text-label-md font-semibold flex-1" id="toast-message">Rider dispatched successfully!</span>
</div>

</div></main>
<nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={() => alertToast('Action triggered')}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Home</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[22px]" /><span className="font-label-sm text-label-sm">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm">Catalog</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm">Payouts</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-16 h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Store</span></a></div></nav>
    </div>
  );
};

export default Screen;
