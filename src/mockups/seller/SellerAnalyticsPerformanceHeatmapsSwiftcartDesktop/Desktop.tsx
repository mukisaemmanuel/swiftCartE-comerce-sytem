// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_analytics_performance_heatmaps_swiftcart_desktop/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-72"><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-space-xl py-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-outline font-label-sm uppercase tracking-wider">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Business &amp; Finance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-label-md">Analytics &amp; Heatmaps</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span>BoU NPS Sandbox Live</span>
</div>
<span className="text-outline text-label-sm">|</span>
<span className="text-outline font-label-sm">Sync ID: <span className="font-code-display text-on-surface text-[12px] tracking-normal">KLA-MERCH-8821B</span></span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Merchant Analytics &amp; Velocity Heatmaps</h1>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm uppercase">Real-Time Telematics</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Kampala metropolitan trade velocity, rider corridor SLAs, and settlement performance</p>
</div>
<div className="flex items-center flex-wrap gap-space-sm">

<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm shadow-sm cursor-pointer hover:bg-surface-container-high transition-colors">
<Icon name="calendar_today" className="text-outline text-[18px]" />
<span className="font-label-md">Last 30 Days: Oct 1 - Oct 31, 2025</span>
<Icon name="arrow_drop_down" className="text-outline text-[18px]" />
</div>

<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm shadow-sm cursor-pointer hover:bg-surface-container-high transition-colors">
<Icon name="hub" className="text-tertiary text-[18px]" />
<span className="font-label-md">All Kampala Hubs (Nakasero, Kololo, Ntinda)</span>
<Icon name="expand_more" className="text-outline text-[18px]" />
</div>

<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md shadow-lg shadow-primary-container/25 hover:opacity-95 active:scale-95 transition-all" type="button">
<Icon name="download" className="text-[18px]" />
<span>Export Report (PDF/CSV)</span>
</button>
</div>
</div>
</div>

<div className="px-space-xl pb-space-lg">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Gross Merchandise Value (GMV)</span>
<span className="font-price-display text-price-display text-on-surface mt-1 whitespace-nowrap">UGX 52,480,000</span>
</div>
<Icon name="payments" className="p-2 rounded-lg bg-primary-container/15 text-primary  text-[20px]" />
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-tertiary font-label-sm">
<Icon name="trending_up" className="text-[16px]" />
<span>+22.4% vs last period</span>
</div>

<svg className="w-24 h-7 text-action-gradient-start overflow-visible" fill="none" viewBox="0 0 100 28">
<path d="M0 24 L14 20 L28 22 L42 14 L56 16 L70 8 L84 11 L100 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0 24 L14 20 L28 22 L42 14 L56 16 L70 8 L84 11 L100 2 V 28 H 0 Z" fill="currentColor" fillOpacity="0.12"></path>
</svg>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Net Settled Revenue</span>
<span className="font-price-display text-price-display text-emerald-escrow mt-1 whitespace-nowrap">UGX 50,684,200</span>
</div>
<Icon name="verified_user" className="p-2 rounded-lg bg-emerald-escrow/15 text-emerald-escrow  text-[20px]" />
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
<Icon name="lock_clock" className="text-emerald-escrow text-[16px]" />
<span>Escrow cleared via MoMo Rails</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm">96.5% Net Yield</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Kampala Metro SLA</span>
<span className="font-price-display text-price-display text-on-surface mt-1">94.8% on-time</span>
</div>
<Icon name="two_wheeler" className="p-2 rounded-lg bg-surface-container-high text-primary  text-[20px]" />
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-tertiary font-label-sm">
<Icon name="timer" className="text-[16px]" />
<span>Avg SafeBoda Speed: 21 mins</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm">Urban Corridors</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Store Conversion Rate</span>
<span className="font-price-display text-price-display text-on-surface mt-1">4.12%</span>
</div>
<Icon name="shopping_cart_checkout" className="p-2 rounded-lg bg-secondary-container/50 text-secondary-fixed  text-[20px]" />
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm">
<span>34,810 Visits</span>
<span className="text-outline">→</span>
<span className="text-primary font-label-md">1,434 Orders</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-label-sm">+0.8% QoQ</span>
</div>
</div>
</div>
</div>

<div className="px-space-xl pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 flex flex-col gap-space-lg min-w-0">

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Revenue &amp; Sales Velocity</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm whitespace-nowrap">Gross UGX</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Daily escrow billing volume matched against dispatched order count</p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container p-1 rounded-lg">
<button className="px-3 py-1 rounded text-outline hover:text-on-surface font-label-sm transition-colors" type="button">Hourly</button>
<button className="px-3 py-1 rounded bg-surface-container-high text-on-surface font-label-sm shadow-sm" type="button">Daily</button>
<button className="px-3 py-1 rounded text-outline hover:text-on-surface font-label-sm transition-colors" type="button">Weekly</button>
</div>
</div>

<div className="relative w-full h-72 bg-surface-container/60 rounded-xl p-4 flex flex-col justify-between overflow-hidden">

<div className="absolute top-4 left-[64%] -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
<div className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface shadow-xl flex flex-col gap-0.5">
<div className="flex items-center gap-1 font-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Peak Day: Fri, Oct 24</span>
</div>
<span className="font-label-md text-label-md text-primary whitespace-nowrap">UGX 4,820,000 (126 Orders)</span>
<span className="text-body-sm font-body-sm text-outline whitespace-nowrap">MTN Rails: UGX 3.1M | Airtel: 1.7M</span>
</div>
<div className="w-2 h-2 rotate-45 bg-surface-container-highest -mt-1"></div>
<div className="w-0.5 h-36 bg-dashed bg-primary/40 -mt-0.5"></div>
</div>

<svg className="w-full h-56" preserveAspectRatio="none" viewBox="0 0 760 220">
<defs>
<linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#da3700" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#da3700" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<line stroke="#24293c" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="760" y1="30" y2="30"></line>
<line stroke="#24293c" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="760" y1="90" y2="90"></line>
<line stroke="#24293c" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="760" y1="150" y2="150"></line>
<line stroke="#24293c" strokeWidth="1" x1="0" x2="760" y1="210" y2="210"></line>

<rect fill="#24293c" height="50" rx="3" width="12" x="25" y="160"></rect>
<rect fill="#24293c" height="70" rx="3" width="12" x="75" y="140"></rect>
<rect fill="#24293c" height="90" rx="3" width="12" x="125" y="120"></rect>
<rect fill="#24293c" height="110" rx="3" width="12" x="175" y="100"></rect>
<rect fill="#24293c" height="80" rx="3" width="12" x="225" y="130"></rect>
<rect fill="#24293c" height="100" rx="3" width="12" x="275" y="110"></rect>
<rect fill="#24293c" height="115" rx="3" width="12" x="325" y="95"></rect>
<rect fill="#24293c" height="130" rx="3" width="12" x="375" y="80"></rect>
<rect fill="#24293c" height="140" rx="3" width="12" x="425" y="70"></rect>

<rect fill="#da3700" height="178" rx="4" width="14" x="475" y="32"></rect>
<rect fill="#24293c" height="120" rx="3" width="12" x="525" y="90"></rect>
<rect fill="#24293c" height="125" rx="3" width="12" x="575" y="85"></rect>
<rect fill="#24293c" height="100" rx="3" width="12" x="625" y="110"></rect>
<rect fill="#24293c" height="115" rx="3" width="12" x="675" y="95"></rect>
<rect fill="#24293c" height="150" rx="3" width="12" x="725" y="60"></rect>

<path d="M25 155 Q 125 110, 225 125 T 425 65 T 482 34 T 575 80 T 725 55 L 725 210 L 25 210 Z" fill="url(#primaryAreaGrad)"></path>

<path d="M25 155 Q 125 110, 225 125 T 425 65 T 482 34 T 575 80 T 725 55" fill="none" stroke="#ffb5a1" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="482" cy="34" fill="#da3700" r="5" stroke="#ffb5a1" strokeWidth="2.5"></circle>
<circle cx="725" cy="55" fill="#4edea3" r="4"></circle>
</svg>

<div className="flex items-center justify-between text-body-sm text-outline pt-2">
<span>Oct 01</span>
<span>Oct 08</span>
<span>Oct 15</span>
<span className="text-primary font-label-sm">Oct 24 (Peak)</span>
<span>Oct 31</span>
</div>
</div>
<div className="flex items-center justify-between flex-wrap gap-2 pt-1">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-primary"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Daily Revenue (UGX)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-sm bg-surface-container-high"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dispatched Parcels (Units)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="sync_saved_locally" className="text-[16px]" />
            Ledger Reconciled: BoU Sandbox Verified
          </span>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Kampala Urban Delivery Heatmap</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm">Live Dispatch</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda transit latency &amp; order density across 5 high-yield commercial sectors</p>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
<Icon name="two_wheeler" className="text-action-gradient-start text-[18px]" />
<span>Active Fleet: <strong className="text-on-surface">42 Bodas En Route</strong></span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">

<div className="lg:col-span-7 bg-surface-container rounded-xl p-3 relative overflow-hidden min-h-[310px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/3 left-2/3 w-32 h-32 rounded-full bg-tertiary-container/30 blur-2xl pointer-events-none"></div>
<svg className="w-full h-full max-h-[300px]" fill="none" viewBox="0 0 450 300">

<pattern height="20" id="grid" patternUnits="userSpaceOnUse" width="20">
<circle cx="2" cy="2" fill="#24293c" r="1"></circle>
</pattern>
<rect fill="url(#grid)" height="300" opacity="0.8" width="450"></rect>

<path d="M 0 270 Q 120 250, 240 275 T 450 260 L 450 300 L 0 300 Z" fill="#161b2d" opacity="0.7"></path>
<text fill="#5c4039" font-size="10" font-weight="700" letter-spacing="1" x="320" y="290">LAKE VICTORIA (GABA)</text>


<path d="M 190 140 Q 260 120, 420 90" stroke="#34384c" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 190 140 Q 260 120, 420 90" opacity="0.8" stroke="#ff8a1f" strokeDasharray="6 4" strokeWidth="1.5"></path>

<path d="M 190 140 Q 180 210, 160 300" stroke="#34384c" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 190 140 Q 180 210, 160 300" opacity="0.6" stroke="#4edea3" strokeDasharray="6 4" strokeWidth="1.5"></path>

<path d="M 60 70 Q 200 60, 360 80" stroke="#34384c" strokeLinecap="round" strokeWidth="3"></path>
<path d="M 190 140 Q 130 90, 80 40" stroke="#34384c" strokeWidth="3"></path>

<g className="cursor-pointer">
<circle cx="190" cy="140" fill="#da3700" fillOpacity="0.25" r="32"></circle>
<circle cx="190" cy="140" fill="#da3700" fillOpacity="0.6" r="16"></circle>
<circle cx="190" cy="140" fill="#fffcff" r="6"></circle>
<text fill="#fffcff" font-size="11" font-weight="800" x="202" y="136">CBD / Nakasero</text>
<text fill="#ffb5a1" font-size="9" font-weight="600" x="202" y="148">482 Deliveries • 14m</text>
</g>

<g className="cursor-pointer">
<circle cx="290" cy="115" fill="#da3700" fillOpacity="0.2" r="26"></circle>
<circle cx="290" cy="115" fill="#da3700" fillOpacity="0.5" r="12"></circle>
<circle cx="290" cy="115" fill="#ffb5a1" r="5"></circle>
<text fill="#dde1fb" font-size="10" font-weight="700" x="302" y="112">Bugolobi / Nakawa</text>
<text fill="#ac8980" font-size="9" x="302" y="124">348 Orders • 19m</text>
</g>

<g className="cursor-pointer">
<circle cx="210" cy="85" fill="#4edea3" fillOpacity="0.15" r="22"></circle>
<circle cx="210" cy="85" fill="#00855b" fillOpacity="0.7" r="9"></circle>
<circle cx="210" cy="85" fill="#6ffbbe" r="4"></circle>
<text fill="#dde1fb" font-size="10" font-weight="700" x="145" y="78">Kololo / Acacia</text>
<text fill="#4edea3" font-size="9" x="145" y="90">284 Orders • 16m</text>
</g>

<g className="cursor-pointer">
<circle cx="110" cy="80" fill="#24293c" r="18"></circle>
<circle cx="110" cy="80" fill="#b8c3ff" r="5"></circle>
<text fill="#dde1fb" font-size="10" font-weight="600" x="45" y="75">Makerere</text>
<text fill="#b8c3ff" font-size="9" x="45" y="87">192 Orders • 24m</text>
</g>

<g className="cursor-pointer">
<circle cx="230" cy="210" fill="#24293c" r="18"></circle>
<circle cx="230" cy="210" fill="#b8c3ff" r="5"></circle>
<text fill="#dde1fb" font-size="10" font-weight="600" x="242" y="208">Muyenga / Makindye</text>
<text fill="#b8c3ff" font-size="9" x="242" y="220">128 Orders • 26m</text>
</g>
</svg>

<div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-surface-container-high/90 backdrop-blur-sm text-outline font-label-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-action-gradient-start"></span>
<span className="text-on-surface">Nakasero Central Hub Active</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-2">

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2">
<span className="w-2.5 h-8 rounded-full bg-action-gradient-start"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Central / Nakasero</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">482 deliveries • Avg 14 mins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm">High Heat</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2">
<span className="w-2.5 h-8 rounded-full bg-action-gradient-start"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Nakawa / Bugolobi</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">348 deliveries • Avg 19 mins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm">High Heat</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2">
<span className="w-2.5 h-8 rounded-full bg-tertiary"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Kololo / Kamwokya</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">284 deliveries • Avg 16 mins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm">Moderate</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2">
<span className="w-2.5 h-8 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Kawempe / Makerere</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">192 deliveries • Avg 24 mins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm">Normal</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2">
<span className="w-2.5 h-8 rounded-full bg-secondary"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Makindye / Muyenga</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">128 deliveries • Avg 26 mins</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm">Normal</span>
</div>
</div>
</div>

<div className="mt-1 p-3 rounded-lg bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="electric_moped" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Jinja Road Express Dispatch Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Priority Channel: 100% blind OTP cryptographic verification active</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm">Density: 14 Riders / Sq Km</span>
<span className="px-2 py-1 rounded bg-tertiary-container/30 text-tertiary font-label-sm">Transit: Optimal</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-lg min-w-0">

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface">Top SKU Leaderboard</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Highest volume revenue drivers this period</p>
</div>
<Icon name="format_list_numbered" className="text-outline text-[20px]" />
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container font-label-sm flex items-center justify-center shrink-0">1</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-outline">SKU: SND-ANC-01 • 60 sold</span>
</div>
</div>
<span className="font-label-md text-label-md text-primary text-right shrink-0 whitespace-nowrap">UGX 20,520,000</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary font-label-sm">
<Icon name="tune" className="text-[14px]" /> Conv. 5.4%
              </span>
<span className="flex items-center gap-1 text-amber-warning font-label-sm">
<Icon name="star" className="text-[14px]" /> 4.9 (42 reviews)
              </span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm flex items-center justify-center shrink-0">2</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Anker Prime 67W GaN Charger</span>
<span className="font-body-sm text-body-sm text-outline">SKU: ANK-67W-GN • 68 sold</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface text-right shrink-0 whitespace-nowrap">UGX 11,220,000</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary font-label-sm">
<Icon name="tune" className="text-[14px]" /> Conv. 4.8%
              </span>
<span className="flex items-center gap-1 text-amber-warning font-label-sm">
<Icon name="star" className="text-[14px]" /> 4.8 (31 reviews)
              </span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm flex items-center justify-center shrink-0">3</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Oraimo FreePods 4 ANC</span>
<span className="font-body-sm text-body-sm text-outline">SKU: ORM-FP4-UG • 64 sold</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface text-right shrink-0 whitespace-nowrap">UGX 7,360,000</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-on-surface-variant font-label-sm">
<Icon name="tune" className="text-[14px]" /> Conv. 3.9%
              </span>
<span className="flex items-center gap-1 text-amber-warning font-label-sm">
<Icon name="star" className="text-[14px]" /> 4.7 (58 reviews)
              </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface">Channels &amp; Payment Rails</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Buyer acquisition origin and settlement rails</p>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-outline uppercase">
<span>Traffic Source</span>
<span className="text-on-surface">App Dominant (72%)</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden flex">
<div className="h-full bg-primary" style={{"width":"72%"}} title="Mobile App 72%"></div>
<div className="h-full bg-secondary-fixed-dim" style={{"width":"24%"}} title="Desktop Web 24%"></div>
<div className="h-full bg-tertiary" style={{"width":"4%"}} title="WhatsApp 4%"></div>
</div>
<div className="flex items-center justify-between font-body-sm text-on-surface-variant text-[11px] pt-1">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> Mobile App 72%</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span> Web 24%</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> WhatsApp 4%</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-2">
<div className="flex items-center justify-between font-label-sm text-outline uppercase">
<span>Payment Rails Settlement</span>
<span className="text-on-surface">MTN MoMo Lead</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden flex">
<div className="h-full bg-mtn-yellow" style={{"width":"64%"}} title="MTN MoMo 64%"></div>
<div className="h-full bg-airtel-red" style={{"width":"31%"}} title="Airtel Money 31%"></div>
<div className="h-full bg-secondary" style={{"width":"5%"}} title="Card 5%"></div>
</div>
<div className="flex items-center justify-between font-body-sm text-on-surface-variant text-[11px] pt-1">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-mtn-yellow"></span> MTN MoMo 64%</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-airtel-red"></span> Airtel 31%</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Visa/Card 5%</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between mt-1">
<div className="flex items-center gap-2">
<Icon name="health_and_safety" className="text-emerald-escrow text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Return &amp; Dispute Rate: 0.6%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow holdback threshold safe (&lt; 2.0%)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm uppercase">Optimal</span>
</div>
</div>

<div className="rounded-xl bg-gradient-to-br from-surface-container-low to-surface-container p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="auto_awesome" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">AI Merchant Insights</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm">SwiftEngine ML</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-3 rounded-xl bg-surface-container-high/60 flex flex-col gap-2">
<div className="flex items-start gap-2">
<Icon name="add_shopping_cart" className="text-primary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface">
                Bundle <strong className="text-primary">SoundCore Space One</strong> with <strong className="text-on-surface">67W GaN Charger</strong> to expand avg basket size by <span className="text-tertiary font-label-sm">+14%</span>.
              </p>
</div>
<div className="flex justify-end">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm hover:bg-primary hover:text-on-primary transition-colors" type="button">
                Generate 1-Click Bundle
              </button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high/60 flex flex-col gap-2">
<div className="flex items-start gap-2">
<Icon name="bolt" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface">
                SafeBoda express delivery badge in <strong className="text-on-surface">Bugolobi corridor</strong> drives <span className="text-tertiary font-label-sm">+28% checkout completion</span> during evening transit peak (5 PM - 8 PM).
              </p>
</div>
<div className="flex justify-end">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm hover:bg-tertiary hover:text-on-tertiary transition-colors" type="button">
                Prioritize Bugolobi Hub
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
