// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/swiftcart_work_hub_shared_system_components_dark_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface SwiftcartWorkHubSharedSystemComponentsDarkLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SwiftcartWorkHubSharedSystemComponentsDarkLight: React.FC<SwiftcartWorkHubSharedSystemComponentsDarkLightProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <input className="hidden peer" id="app-drawer-state" type="checkbox" />
<label className="hidden fixed inset-0 z-50 bg-surface-dark/70 backdrop-blur-sm transition-opacity" htmlFor="app-drawer-state" id="app-drawer-backdrop"></label>
<main className="flex-1 flex flex-col relative w-full pt-14 pb-20 bg-surface"><div className="flex flex-col w-full">

<div className="px-space-md py-space-sm bg-surface-container flex items-center justify-between gap-space-xs sticky top-0 z-30 shadow-md">
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
        DS v2.4 Native
      </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Uganda Work App Hub</span>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<button aria-label="Toggle Dark/Light Mode" className="h-10 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm" id="themeToggleBtn" type="button" onClick={() => toggleTheme()}>
<Icon name="wb_sunny" className="text-[18px] text-mtn-yellow" />
<span className="font-label-sm text-label-sm">Theme</span>
</button>
<button aria-label="Search Components" className="w-10 h-10 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center transition-transform active:scale-95" id="openSearchBtn" type="button">
<Icon name="search" className="text-[20px]" />
</button>
</div>
</div>



<div className="px-space-md pt-space-sm">
<div className="w-full p-space-sm rounded-xl bg-surface-container-high shadow-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[18px]" />
</div>
<div className="min-w-0 flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Escrow Settlement Approved</span>
<span className="font-body-sm text-body-sm text-emerald-escrow text-[11px] truncate whitespace-nowrap">UGX 1,240,000 credited to MTN MoMo (Ronald K.)</span>
</div>
</div>
<button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
</div>

<section className="mt-space-md px-space-md">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<Icon name="speed" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Field Operations KPIs</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Telematics</span>
</div>

<div className="flex gap-space-sm overflow-x-auto no-scrollbar py-1 -mx-space-md px-space-md">

<div className="shrink-0 w-[240px] p-space-md rounded-2xl bg-surface-container flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Today's GMV</span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="trending_up" className="text-[14px]" />
            +14.2%
          </span>
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-on-surface tracking-tight whitespace-nowrap">UGX 8,420,000</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">42 Transactions verified</span>
</div>

<div className="mt-3 h-7 w-full flex items-end gap-1">
<div className="h-3 w-full bg-primary/20 rounded-t"></div>
<div className="h-4 w-full bg-primary/30 rounded-t"></div>
<div className="h-2 w-full bg-primary/20 rounded-t"></div>
<div className="h-5 w-full bg-primary/50 rounded-t"></div>
<div className="h-4 w-full bg-primary/40 rounded-t"></div>
<div className="h-6 w-full bg-action-gradient-start rounded-t"></div>
<div className="h-7 w-full bg-action-gradient-end rounded-t"></div>
</div>
</div>

<div className="shrink-0 w-[240px] p-space-md rounded-2xl bg-surface-container flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow In Custody</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="lock" className="text-[13px]" />
            Secured
          </span>
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-on-surface tracking-tight whitespace-nowrap">UGX 3,150,000</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-release upon buyer OTP</span>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] font-label-sm text-on-surface-variant pt-1">
<span className="whitespace-nowrap">MTN: UGX 2.1M</span>
<span className="whitespace-nowrap">Airtel: UGX 1.05M</span>
</div>
</div>

<div className="shrink-0 w-[240px] p-space-md rounded-2xl bg-surface-container flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Active Dispatches</span>
<span className="w-2.5 h-2.5 rounded-full bg-action-gradient-start animate-ping"></span>
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-on-surface tracking-tight">42 Parcels</div>
<span className="font-body-sm text-body-sm text-tertiary">18 Boda en-route • 4 Hub Transit</span>
</div>
<div className="mt-3 w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-action-gradient-start to-action-gradient-end h-full w-[78%]"></div>
</div>
</div>

<div className="shrink-0 w-[220px] p-space-md rounded-2xl bg-surface-container flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Dispute Rate</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Safe</span>
</div>
<div className="mt-2">
<div className="font-price-display text-price-display text-on-surface tracking-tight">0.4%</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Below 1.5% fraud limit</span>
</div>
<div className="mt-3 flex items-center gap-1 text-[11px] text-tertiary font-label-sm">
<Icon name="shield" className="text-[14px]" />
          Zero arbitration penalties
        </div>
</div>
</div>
</section>

<section className="mt-space-md px-space-md">
<div className="grid grid-cols-2 gap-space-sm">
<button className="h-12 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center gap-2 shadow transition-transform active:scale-98" id="triggerFilterSheetBtn" type="button">
<Icon name="tune" className="text-action-gradient-start text-[20px]" />
<span className="font-label-lg text-label-lg">Open Filters</span>
</button>
<button className="h-12 px-space-md rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-error flex items-center justify-center gap-2 shadow transition-transform active:scale-98" id="triggerDisputeModalBtn" type="button">
<Icon name="lock_clock" className="text-[20px]" />
<span className="font-label-lg text-label-lg">Freeze Modal</span>
</button>
</div>
</section>

<section className="mt-space-lg px-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="receipt_long" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Manifest Rows</h2>
</div>
<span className="font-label-md text-label-md text-primary font-semibold">3 Active Dispatches</span>
</div>
<div className="flex flex-col gap-space-sm">

<article className="p-space-md rounded-2xl bg-surface-container shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-wide">#SC-8921</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
              Ready for Boda
            </span>
</div>
<span className="font-price-display text-[17px] text-on-surface font-black whitespace-nowrap">UGX 145,000</span>
</div>
<div className="flex flex-col gap-1 py-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<Icon name="person" className="text-[16px] text-on-surface" />
<span className="text-on-surface font-bold">Ronald K.</span>
<span className="text-outline text-xs">•</span>
<span className="font-code-display text-[13px] tracking-wider text-on-surface-variant">07•• ••• 492</span>
</div>
<span className="inline-flex items-center gap-0.5 text-tertiary font-label-sm text-label-sm">
<Icon name="lock" className="text-[13px]" />
              Masked Relay
            </span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-[16px] text-primary" />
<span className="truncate">Kampala Central → Nakawa Division, Kampala</span>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t-0 bg-surface-container-high/50 p-2.5 rounded-xl">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wide">MTN MoMo Escrow Locked</span>
</div>
<button className="h-9 px-3 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md text-label-md font-bold shadow hover:opacity-95 active:scale-95 transition-transform flex items-center gap-1" type="button">
<span>Dispatch Boda</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</article>

<article className="p-space-md rounded-2xl bg-surface-container shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-wide">#SC-8919</span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
              In Hub Transit
            </span>
</div>
<span className="font-price-display text-[17px] text-on-surface font-black whitespace-nowrap">UGX 620,000</span>
</div>
<div className="flex flex-col gap-1 py-1">
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="warehouse" className="text-[16px] text-primary" />
<span>Entebbe Road Hub Handover Relay • Boda #BOD-229</span>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container-high flex items-center gap-2.5">
<Icon name="key" className="text-action-gradient-start text-[20px] shrink-0" />
<div className="min-w-0 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wide">Handover Verification Rule</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-snug">
              Blind Code [••••••] — Only Buyer holds code. Rider enters on physical delivery to release escrow.
            </span>
</div>
</div>
</article>

<article className="p-space-md rounded-2xl bg-surface-container shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-wide">#RT-104</span>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-error font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span>
              Dispute Frozen
            </span>
</div>
<span className="font-price-display text-[17px] text-error font-black whitespace-nowrap">UGX 280,000</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<Icon name="person" className="text-[16px] text-on-surface" />
<span className="text-on-surface font-bold">Harriet N.</span>
<span className="text-outline text-xs">•</span>
<span className="font-code-display text-[13px] tracking-wider text-on-surface-variant">07•• ••• 810</span>
</div>
<span className="text-error font-label-sm text-label-sm">Arbitration Held</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-[16px] text-primary" />
<span className="truncate">Jinja Road • Package seal broken on arrival</span>
</div>
</div>
</article>
</div>
</section>

<section className="mt-space-lg px-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="sync" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Slow-3G Skeleton Loader</h2>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Optimistic State</span>
</div>
<div className="p-space-md rounded-2xl bg-surface-container shadow-md flex flex-col gap-space-sm relative overflow-hidden">

<div className="flex items-center justify-center gap-1 text-on-surface-variant font-label-sm text-label-sm py-1 bg-surface-container-high/40 rounded-lg">
<Icon name="refresh" className="text-[16px] animate-spin" />
<span>Simulated Slow 2G Telematics • Pull down to refresh</span>
</div>
<div className="flex items-center justify-between">
<div className="h-5 w-24 rounded-lg bg-surface-container-high animate-pulse"></div>
<div className="h-5 w-20 rounded-lg bg-surface-container-high animate-pulse"></div>
</div>
<div className="space-y-2 py-1">
<div className="h-4 w-3/4 rounded bg-surface-container-high animate-pulse"></div>
<div className="h-3 w-1/2 rounded bg-surface-container-high animate-pulse"></div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="h-4 w-28 rounded bg-surface-container-high animate-pulse"></div>
<div className="h-8 w-24 rounded-xl bg-surface-container-high animate-pulse"></div>
</div>
</div>
</section>

<section className="mt-space-lg px-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="inbox" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Empty Hub State</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Clean Ledger</span>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container flex flex-col items-center text-center shadow-md">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-space-sm shadow-inner">
<Icon name="local_shipping" className="text-primary text-[32px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">All Kikuubo Parcels Dispatched</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-[280px]">
        No pending dispatches right now. Your riders are currently rolling or awaiting seller inventory intake.
      </p>
<button className="mt-space-md h-12 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 active:scale-95 transition-transform flex items-center gap-2" type="button">
<Icon name="refresh" className="text-[18px]" />
<span>Refresh Active Ledger</span>
</button>
</div>
</section>

<section className="mt-space-lg px-space-md mb-space-xl">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-1.5">
<Icon name="palette" className="text-mtn-yellow text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Theme Tokens &amp; Contrast</h2>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow">WCAG AAA</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<div className="p-space-sm rounded-xl bg-surface-dark flex flex-col gap-1 shadow">
<span className="font-label-sm text-label-sm text-primary font-bold">Dark (Default)</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">#080D1F Canvas</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Slashing OLED battery on dusty boda runs</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-cream text-surface-dark flex flex-col gap-1 shadow">
<span className="font-label-sm text-label-sm text-action-gradient-end font-bold">Light Mode</span>
<span className="font-body-sm text-body-sm text-surface-dark font-medium">#FFF8F2 Surface</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">High sunlight contrast for Kampala noon</span>
</div>
</div>
</section>




<div className="hidden fixed inset-0 z-50 bg-surface/95 backdrop-blur-xl flex flex-col pt-safe pb-safe px-space-md" id="searchOverlay">
<div className="flex items-center gap-space-sm py-space-sm">
<button aria-label="Back" className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" id="closeSearchBtn" type="button">
<Icon name="arrow_back" className="text-[20px]" />
</button>
<div className="flex-1 relative flex items-center">
<Icon name="search" className="absolute left-3 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-10 pr-10 rounded-xl bg-surface-container text-on-surface font-body-md text-body-md placeholder-on-surface-variant focus:outline-none focus:ring-0" id="searchInput" placeholder="Search orders, riders, parcels..." type="text" />
<button className="absolute right-3 text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="cancel" className="text-[18px]" />
</button>
</div>
</div>

<div className="mt-space-md">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Recent Lookups</span>
<button className="font-label-sm text-label-sm text-primary" type="button">Clear</button>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
          Order #8921
          <button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-on-surface" type="button">close</button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
          Mukono Hub Relay
          <button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-on-surface" type="button">close</button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
          MTN USSD Escrow
          <button className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-on-surface" type="button">close</button>
</span>
</div>
</div>

<div className="mt-space-lg flex flex-col gap-space-sm overflow-y-auto">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Suggested Operations</span>
<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Kigozi David (Boda #BOD-114)</span>
<span className="font-body-sm text-body-sm text-tertiary">Active in Nakawa • 4 Deliveries left</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[18px]" />
</div>
<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="warehouse" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Kampala Central Sort Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Capacity: 92% full • 140 Parcels</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[18px]" />
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-surface-dark/80 backdrop-blur-sm transition-opacity" id="filterSheetBackdrop">
<div className="fixed inset-x-0 bottom-0 max-h-[751px] bg-surface-container rounded-t-3xl shadow-[0_-8px_32px_rgba(0,0,0,0.6)] flex flex-col pt-3 pb-safe overflow-hidden animate-slide-up">

<div className="w-12 h-1.5 rounded-full bg-surface-bright mx-auto shrink-0 mb-3"></div>

<div className="px-space-md flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<Icon name="tune" className="text-action-gradient-start text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Filter Orders &amp; Parcels</h3>
</div>
<button className="font-label-md text-label-md text-primary font-bold" id="resetFiltersBtn" type="button">Reset All</button>
</div>

<div className="px-space-md flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
<span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-action-gradient-start text-white font-label-sm text-label-sm font-bold">
          Nakawa Hub
          <Icon name="close" className="text-[14px]" />
</span>
<span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-action-gradient-start text-white font-label-sm text-label-sm font-bold">
          MTN MoMo
          <Icon name="close" className="text-[14px]" />
</span>
<span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-action-gradient-start text-white font-label-sm text-label-sm font-bold">
          Pending Escrow
          <Icon name="close" className="text-[14px]" />
</span>
</div>

<div className="px-space-md py-2 overflow-y-auto flex flex-col gap-space-md">

<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2 block">Delivery Hub Location</span>
<div className="grid grid-cols-2 gap-2">
<label className="p-3 rounded-xl bg-surface-container-high flex items-center justify-between cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Kampala Central</span>
<input checked={true} className="accent-action-gradient-start w-4 h-4" type="checkbox" />
</label>
<label className="p-3 rounded-xl bg-surface-container-high flex items-center justify-between cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Nakawa Hub</span>
<input checked={true} className="accent-action-gradient-start w-4 h-4" type="checkbox" />
</label>
<label className="p-3 rounded-xl bg-surface-container-high flex items-center justify-between cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Entebbe Road</span>
<input className="accent-action-gradient-start w-4 h-4" type="checkbox" />
</label>
<label className="p-3 rounded-xl bg-surface-container-high flex items-center justify-between cursor-pointer">
<span className="font-label-md text-label-md text-on-surface">Mukono Relay</span>
<input className="accent-action-gradient-start w-4 h-4" type="checkbox" />
</label>
</div>
</div>

<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2 block">Payment Rail (Uganda)</span>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 rounded-xl bg-surface-container-high flex items-center gap-2 text-left" type="button">
<span className="w-3 h-3 rounded-full bg-mtn-yellow shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface">MTN Mobile Money</span>
</button>
<button className="p-3 rounded-xl bg-surface-container-high flex items-center gap-2 text-left" type="button">
<span className="w-3 h-3 rounded-full bg-airtel-red shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface">Airtel Money</span>
</button>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container-low flex items-center gap-space-sm mt-auto">
<button className="flex-1 h-12 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg active:scale-95 transition-transform" id="closeFilterSheetBtn" type="button">
          Cancel
        </button>
<button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-bold shadow-md active:scale-95 transition-transform" id="applyFiltersBtn" type="button">
          Apply (14 Results)
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-surface-dark/85 backdrop-blur-md flex items-center justify-center p-space-md" id="disputeModalBackdrop">
<div className="w-full max-w-sm bg-surface-container-low rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-md">

<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-2xl bg-danger-penalty/20 text-error flex items-center justify-center shrink-0">
<Icon name="lock_person" className="text-[28px]" />
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-snug">Freeze Escrow &amp; Dispute</h3>
<span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-wider">Irreversible Action</span>
</div>
</div>

<p className="font-body-md text-body-md text-on-surface-variant">
        This will immediately halt payout of <strong className="text-on-surface font-bold whitespace-nowrap">UGX 280,000</strong> to Seller “Gadget Hub Kampala”. Funds remain held in SwiftCart platform custody pending arbitration review.
      </p>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor="disputeReasonInput">
          Reason for Dispute <span className="text-error">*</span>
</label>
<textarea className="w-full p-3 rounded-xl bg-surface-container text-on-surface font-body-sm text-body-sm placeholder-on-surface-variant focus:outline-none focus:ring-0 resize-none" id="disputeReasonInput" placeholder="State reason for dispute (required min 15 chars)..." rows={3}></textarea>
</div>

<div className="flex flex-col gap-2 pt-2">
<button className="w-full h-12 rounded-xl bg-danger-penalty text-white font-label-lg text-label-lg font-bold shadow-md hover:opacity-90 active:scale-98 transition-transform flex items-center justify-center gap-1.5" type="button">
<Icon name="verified_user" className="text-[18px]" />
<span>Confirm Freeze</span>
</button>
<button className="w-full h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" id="cancelDisputeModalBtn" type="button">
          Cancel &amp; Return
        </button>
</div>
</div>
</div>


</div></main>
    </div>
  );
};

export default SwiftcartWorkHubSharedSystemComponentsDarkLight;
