// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/admin_command_overview_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full">
<div className="flex flex-col gap-space-lg pb-space-xl">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="text-secondary hover:text-on-surface transition-colors cursor-pointer">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Overview</span>
</div>
<div className="flex items-center gap-space-sm mt-0.5">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Platform Operations Command Overview</h1>
<span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
            Kampala Hubs Sync: LIVE (18ms)
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-auto">
<div className="flex items-center bg-surface-container rounded-xl p-1 shadow-sm">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold transition-all" type="button">Live Mode</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Historical</button>
</div>
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<Icon name="download" className="text-[18px]" />
<span>Export Dossier</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-md text-label-md shadow-md hover:brightness-105 active:scale-95 transition-all" type="button">
<Icon name="restart_alt" className="text-[18px]" />
<span>Global Audit Sync</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Platform GMV (30-Day)</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface tracking-tight">1,482,900,000</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<Icon name="trending_up" className="text-[20px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-end justify-between">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="north_east" className="text-[14px]" />
              +18.4% MoM
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">18,420 orders settled</span>
</div>

<svg className="w-24 h-8 text-primary overflow-visible" fill="none" viewBox="0 0 100 32">
<path d="M0 26 L16 22 L32 24 L48 15 L64 18 L80 8 L100 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0 26 L16 22 L32 24 L48 15 L64 18 L80 8 L100 4 V32 H0 Z" fill="currentColor" fillOpacity="0.12"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Payment Reserve</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-tertiary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-tertiary tracking-tight">384,500,000</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center">
<Icon name="lock" className="text-[20px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">1,140 in-transit holds</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">0% capital leakage</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
            100% reserved
          </span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Courier &amp; SafeBoda SLA</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight">95.6%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">On-Time</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-secondary-container/50 text-secondary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">21.4 mins avg speed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Target threshold: 92.0%</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-12 h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{"width":"95.6%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">+3.6%</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Ecosystem Network</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight">412</span>
<span className="font-label-md text-label-md text-on-surface-variant">Sellers</span>
<span className="text-outline">/</span>
<span className="font-price-display text-price-display text-primary tracking-tight">286</span>
<span className="font-label-md text-label-md text-on-surface-variant">Bodas</span>
</div>
</div>
<div className="w-9 h-9 rounded-xl bg-primary-fixed-dim/20 text-primary-fixed flex items-center justify-center">
<Icon name="hub" className="text-[20px]" />
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-amber-warning font-label-sm text-label-sm font-semibold">
<Icon name="pending_actions" className="text-[14px]" />
<span>14 KYC Reviews Queue</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            4 Hubs Active
          </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-8 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Payment Velocity &amp; Daily Inflow vs Disbursements</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Dual-rail order fulfillment monitoring across Kampala commerce centers</p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-xl">
<button className="px-2.5 py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Daily</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold shadow-sm transition-all" type="button">Weekly</button>
<button className="px-2.5 py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Monthly</button>
</div>
</div>

<div className="grid grid-cols-3 gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Daily Total Inflow</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold whitespace-nowrap">UGX 64,820,000</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Settled Disbursements</span>
<span className="font-label-lg text-label-lg text-secondary font-bold whitespace-nowrap">UGX 51,200,000</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Held Collateral Reserve</span>
<span className="font-label-lg text-label-lg text-primary font-bold whitespace-nowrap">UGX 13,620,000</span>
</div>
</div>

<div className="relative w-full h-56 pt-2">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
<div className="w-full h-px bg-outline"></div>
</div>

<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 200">
<defs>
<linearGradient id="inflowGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#4edea3" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#4edea3" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="payoutGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#b8c3ff" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#b8c3ff" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<path d="M0,170 C60,150 100,120 160,110 C220,100 280,140 350,85 C420,30 480,95 560,60 C620,35 660,40 700,20 L700,200 L0,200 Z" fill="url(#inflowGrad)"></path>
<path d="M0,170 C60,150 100,120 160,110 C220,100 280,140 350,85 C420,30 480,95 560,60 C620,35 660,40 700,20" fill="none" stroke="#4edea3" strokeLinecap="round" strokeWidth="3"></path>

<path d="M0,185 C60,170 100,145 160,135 C220,125 280,160 350,115 C420,70 480,120 560,88 C620,65 660,70 700,45 L700,200 L0,200 Z" fill="url(#payoutGrad)"></path>
<path d="M0,185 C60,170 100,145 160,135 C220,125 280,160 350,115 C420,70 480,120 560,88 C620,65 660,70 700,45" fill="none" stroke="#b8c3ff" strokeDasharray="4 2" strokeLinecap="round" strokeWidth="2.5"></path>

<circle cx="350" cy="85" fill="#da3700" r="5"></circle>
<circle className="animate-ping" cx="350" cy="85" fill="#da3700" opacity="0.3" r="10"></circle>
</svg>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-2">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface">Payment Inflow (Buyer Lock)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-1 bg-secondary rounded-full"></span>
<span className="font-label-sm text-label-sm text-on-surface">Settlement Outflow (Merchant Release)</span>
</div>
<div className="hidden sm:flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:00 Lunch Peak</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-high px-2.5 py-1 rounded-lg">
<Icon name="policy" className="text-[16px] text-tertiary" />
<span>Processed securely via Pesapal Payment Gateway</span>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="local_shipping" className="text-primary text-[20px]" />
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Order &amp; Delivery Dispatch Stream</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time telematics with masked buyer security &amp; cryptographically locked OTP rails</p>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                62 active boda corridors
              </span>
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors" type="button">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="overflow-x-auto -mx-space-lg px-space-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md rounded-l-lg">Order Ref</th>
<th className="py-2.5 px-space-md">Merchant &amp; Hub</th>
<th className="py-2.5 px-space-md">Masked Buyer</th>
<th className="py-2.5 px-space-md">Transit Corridor</th>
<th className="py-2.5 px-space-md">Value</th>
<th className="py-2.5 px-space-md">Payment Rail</th>
<th className="py-2.5 px-space-md">Live Status</th>
<th className="py-2.5 px-space-md text-right rounded-r-lg">Intervene</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">

<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-primary font-bold">#SC-98241</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">2 mins ago</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-[10px]">SC</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">SoundCore Uganda</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Nakasero Mall Hub</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-code-display text-[12px] bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface-variant">07•• ••• 419</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1 text-on-surface">
<span className="font-label-sm text-label-sm font-medium">Nakasero</span>
<Icon name="arrow_forward" className="text-[14px] text-outline" />
<span className="font-label-sm text-label-sm font-medium text-primary">Kololo</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SafeBoda #UG-882</span>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 195,000</span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mtn-yellow/10 text-mtn-yellow font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
                      MTN MoMo
                    </span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified_user" className="text-[13px]" />
                      Out for Delivery
                    </span>
</td>
<td className="py-3 px-space-md text-right">
<button className="p-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all" type="button">
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/60 transition-colors bg-surface-container-low/40">
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-primary font-bold">#SC-98240</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">5 mins ago</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-[10px]">AO</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Anker Official UG</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Lugogo Bypass</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-code-display text-[12px] bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface-variant">07•• ••• 882</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1 text-on-surface">
<span className="font-label-sm text-label-sm font-medium">Lugogo</span>
<Icon name="arrow_forward" className="text-[14px] text-outline" />
<span className="font-label-sm text-label-sm font-medium text-primary">Bugolobi</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SwiftRider Brian K.</span>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 84,000</span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-airtel-red/15 text-[#ff8085] font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
                      Airtel Money
                    </span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
<Icon name="pin" className="text-[13px]" />
                      OTP Handover
                    </span>
</td>
<td className="py-3 px-space-md text-right">
<button className="p-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all" type="button">
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/60 transition-colors">
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-primary font-bold">#SC-98239</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">11 mins ago</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-[10px]">OK</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Oraimo Kampala</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Pioneer Mall Hub</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-code-display text-[12px] bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface-variant">07•• ••• 104</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1 text-on-surface">
<span className="font-label-sm text-label-sm font-medium">CBD</span>
<Icon name="arrow_forward" className="text-[14px] text-outline" />
<span className="font-label-sm text-label-sm font-medium text-primary">Ntinda</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Courier Matching...</span>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 340,000</span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mtn-yellow/10 text-mtn-yellow font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
                      MTN MoMo
                    </span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-bright text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="lock" className="text-[13px]" />
                      Payment Vaulted
                    </span>
</td>
<td className="py-3 px-space-md text-right">
<button className="p-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all" type="button">
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/60 transition-colors bg-surface-container-low/40">
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-primary font-bold">#SC-98238</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">14 mins ago</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-[10px]">GD</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Garnier Direct UG</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Acacia Mall Hub</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-code-display text-[12px] bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface-variant">07•• ••• 751</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1 text-on-surface">
<span className="font-label-sm text-label-sm font-medium">Kamwokya</span>
<Icon name="arrow_forward" className="text-[14px] text-outline" />
<span className="font-label-sm text-label-sm font-medium text-primary">Muyenga</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SafeBoda #UG-319</span>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 72,500</span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-airtel-red/15 text-[#ff8085] font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
                      Airtel Money
                    </span>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="sports_motorsports" className="text-[13px]" />
                      En Route
                    </span>
</td>
<td className="py-3 px-space-md text-right">
<button className="p-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all" type="button">
<Icon name="more_vert" className="text-[18px]" />
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing latest 4 of 1,140 in-flight ledger dispatches</span>
<button className="font-label-sm text-label-sm text-primary hover:text-primary-fixed flex items-center gap-1 font-bold" type="button">
<span>View Full Dispatch Ledger</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="notification_important" className="text-primary-container text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Urgent Action Center</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">4 Active</span>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-xs hover:bg-surface-container-high/70 transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-amber-warning font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
                Merchant KYC Review
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">SLA: 6h remaining</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">14 Seller KYC Dossiers Pending</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oldest submission waiting 18 hours (Tax ID + trading license verification).</p>
<div className="pt-1 flex items-center justify-end">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-bold transition-all" type="button">
                Review Queue
              </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-xs hover:bg-surface-container-high/70 transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-error font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                Counterfeit Protection
              </span>
<span className="font-label-sm text-label-sm text-error">High Urgency</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">8 Products Flagged for Moderation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Suspected counterfeit Anker 65W GaN Chargers flagged by brand agent in Kikuubo.</p>
<div className="pt-1 flex items-center justify-end">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-error-container hover:text-on-error-container text-on-surface font-label-sm text-label-sm font-bold transition-all" type="button">
                Inspect Catalog
              </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-xs hover:bg-surface-container-high/70 transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Resolution Required
              </span>
<span className="font-label-sm text-label-sm text-primary font-bold whitespace-nowrap">UGX 1,180,000 Frozen</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">3 Open Disputes in Payment Hold</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Customer claim: Damaged screen protector box on delivery to Bugolobi flats.</p>
<div className="pt-1 flex items-center justify-end">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-secondary-container hover:text-on-secondary-container text-on-surface font-label-sm text-label-sm font-bold transition-all" type="button">
                Dispute Desk
              </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-xs hover:bg-surface-container-high/70 transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Rider Handover Block
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Now</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">1 Locked Dispatch OTP Override Request</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rider Brian K. at Bugolobi: Buyer phone dead, requesting supervisor biometric override.</p>
<div className="pt-1 flex items-center justify-end">
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-action-gradient-start font-label-sm text-label-sm font-bold transition-all shadow-sm" type="button">
                Review Handover
              </button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="alt_route" className="text-tertiary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kampala Corridors Telemetry</h3>
</div>
<Icon name="satellite_alt" className="text-outline text-[18px]" />
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Central / Nakasero</span>
<span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">Optimal</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>48 active boda couriers</span>
<span className="text-on-surface font-medium">12 min avg transit</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full rounded-full" style={{"width":"82%"}}></div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Nakawa / Bugolobi</span>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-fixed-dim font-label-sm text-label-sm font-bold">High Volume</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>34 active boda couriers</span>
<span className="text-on-surface font-medium">16 min avg transit</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1">
<div className="bg-primary h-full rounded-full" style={{"width":"94%"}}></div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kololo / Kamwokya</span>
<span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold">Optimal</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>29 active boda couriers</span>
<span className="text-on-surface font-medium">11 min avg transit</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full rounded-full" style={{"width":"76%"}}></div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Rubaga / Mengo</span>
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">Surge Alert</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>14 active boda couriers</span>
<span className="text-amber-warning font-medium">28 min avg transit</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"44%"}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Settlement Gateway Rails</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
              All Systems Operational
            </span>
</div>
<div className="flex flex-col gap-space-xs pt-1">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">MTN MoMo API Node</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">99.98%</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold">Normal</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Airtel Money B2C Rail</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">99.94%</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold">Normal</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Pesapal Settlement Pool</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">100%</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold">Reconciled</span>
</div>
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
