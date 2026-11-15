// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/admin_command_overview_swiftcart_desktop_light/code.html
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
      
      <div className="pl-72"><main className="relative w-full pt-16 bg-surface-dark px-space-xl py-space-lg"><div className="flex flex-col w-full space-y-space-lg text-on-surface">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pb-space-xs">
<div className="space-y-1">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Overview</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm pt-0.5">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Platform Operations Command Overview</h1>
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-lowest shadow-sm rounded-full">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Kampala Hubs Sync: LIVE (18ms)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-start xl:self-auto">
<button className="px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-xl shadow-sm transition-all flex items-center gap-space-xs">
<Icon name="calendar_today" className="text-[18px]" />
<span>Last 30 Days</span>
</button>
<button className="px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-xl shadow-sm transition-all flex items-center gap-space-xs">
<Icon name="tune" className="text-[18px]" />
<span>Filter Nodes</span>
</button>
<button className="px-space-lg py-space-sm bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-space-xs">
<Icon name="ios_share" className="text-[18px]" />
<span>Export Operational Dossier</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl pointer-events-none"></div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Platform GMV (30-Day)</span>
<span className="flex items-center text-tertiary font-label-sm text-label-sm bg-tertiary-fixed/40 px-1.5 py-0.5 rounded">
<Icon name="trending_up" className="text-[14px]" />
            +18.4% MoM
          </span>
</div>
<div className="flex items-baseline gap-1 pt-1">
<span className="font-label-sm text-label-sm text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-on-surface font-black tracking-tight">1,482,900,000</span>
</div>
</div>
<div className="pt-space-md flex items-end justify-between">
<div className="space-y-0.5">
<span className="font-body-sm text-body-sm text-on-surface-variant block">18,420 Completed Orders</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Target 112% Achieved</span>
</div>
<div className="w-24 h-8">
<svg className="w-full h-full text-primary" fill="none" viewBox="0 0 100 30">
<path d="M0 24 Q15 28 30 18 T60 14 T85 6 L100 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 24 Q15 28 30 18 T60 14 T85 6 L100 2 L100 30 L0 30 Z" fill="currentColor" fillOpacity="0.12"></path>
</svg>
</div>
</div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed/30 rounded-full blur-xl pointer-events-none"></div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Escrow Vault</span>
<span className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm bg-tertiary-fixed/40 px-1.5 py-0.5 rounded font-bold">
<Icon name="shield_locked" className="text-[13px]" />
            100% SECURED
          </span>
</div>
<div className="flex items-baseline gap-1 pt-1">
<span className="font-label-sm text-label-sm text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-on-surface font-black tracking-tight">384,500,000</span>
</div>
</div>
<div className="pt-space-md space-y-1">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">1,140 In-Transit Orders</span>
<span className="text-on-surface font-semibold">0 Leakage</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"100%"}}></div>
</div>
</div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Courier SLA Performance</span>
<span className="flex items-center text-primary font-label-sm text-label-sm bg-primary-fixed/40 px-1.5 py-0.5 rounded font-bold">
            Target 92.0%
          </span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="font-headline-md text-headline-md text-on-surface font-black tracking-tight">95.6%</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">On-Time Dispatches</span>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<Icon name="schedule" className="text-[18px] text-primary" />
<span className="text-on-surface-variant">Avg Transit:</span>
<span className="text-on-surface font-bold">21.4 mins</span>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm">4 Core Corridors</span>
</div>
</div>
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between overflow-hidden">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Network Capacity</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Active Fleet
          </span>
</div>
<div className="flex items-baseline gap-3 pt-1">
<div>
<span className="font-headline-md text-headline-md text-on-surface font-black">412</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">Sellers</span>
</div>
<span className="text-surface-variant font-black">/</span>
<div>
<span className="font-headline-md text-headline-md text-primary font-black">286</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">Bodas Online</span>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-body-sm text-body-sm">
<span className="text-error font-semibold flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="pending_actions" className="text-[15px]" />
          14 KYC In Review
        </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">SafeBoda &amp; Swift Fleet</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-8 space-y-space-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Escrow Velocity &amp; Daily Liquidity Flow</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Intake gross volume against automated settlement disbursements to vendor mobile wallets</p>
</div>
<div className="flex items-center bg-surface-container p-0.5 rounded-lg self-start sm:self-auto">
<button className="px-space-sm py-1 rounded-md text-on-surface font-label-sm text-label-sm bg-surface-container-lowest shadow-sm">Daily</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface">Weekly</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface">Monthly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm p-space-md bg-surface-container-low rounded-xl">
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">24h Inflow Locked</span>
<div className="font-price-display text-price-display text-on-surface font-extrabold whitespace-nowrap">UGX 64,820,000</div>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 font-semibold">
<Icon name="arrow_upward" className="text-[14px]" /> +14.2% vs yesterday
            </span>
</div>
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">24h Outflow Released</span>
<div className="font-price-display text-price-display text-on-surface font-extrabold whitespace-nowrap">UGX 51,340,000</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Average payout latency 4.2m</span>
</div>
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Arbitration Retention</span>
<div className="font-price-display text-price-display text-primary font-extrabold whitespace-nowrap">UGX 1,180,000</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">3 contested buyer claims</span>
</div>
</div>
<div className="w-full h-64 pt-2">
<svg className="w-full h-full" fill="none" viewBox="0 0 760 220">
<line className="text-on-surface" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.08" x1="40" x2="740" y1="20" y2="20"></line>
<line className="text-on-surface" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.08" x1="40" x2="740" y1="70" y2="70"></line>
<line className="text-on-surface" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.08" x1="40" x2="740" y1="120" y2="120"></line>
<line className="text-on-surface" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.08" x1="40" x2="740" y1="170" y2="170"></line>
<text className="text-on-surface font-label-sm text-label-sm font-semibold" fill="currentColor" fillOpacity="0.4" x="5" y="24">80M</text>
<text className="text-on-surface font-label-sm text-label-sm font-semibold" fill="currentColor" fillOpacity="0.4" x="5" y="74">60M</text>
<text className="text-on-surface font-label-sm text-label-sm font-semibold" fill="currentColor" fillOpacity="0.4" x="5" y="124">40M</text>
<text className="text-on-surface font-label-sm text-label-sm font-semibold" fill="currentColor" fillOpacity="0.4" x="5" y="174">20M</text>
<path d="M50 160 C120 145, 170 110, 240 120 C310 130, 360 85, 430 75 C500 65, 570 95, 640 45 C680 20, 710 30, 730 25" fill="none" stroke="#da3700" strokeLinecap="round" strokeWidth="3"></path>
<path d="M50 160 C120 145, 170 110, 240 120 C310 130, 360 85, 430 75 C500 65, 570 95, 640 45 C680 20, 710 30, 730 25 L730 190 L50 190 Z" fill="#da3700" fillOpacity="0.08"></path>
<path d="M50 175 C120 165, 170 145, 240 140 C310 135, 360 115, 430 110 C500 105, 570 120, 640 85 C680 65, 710 70, 730 62" fill="none" stroke="#006947" strokeDasharray="5 3" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="640" cy="45" fill="#da3700" r="5" stroke="#ffffff" strokeWidth="2"></circle>
<rect fill="#1e1b18" height="28" rx="6" width="120" x="580" y="8"></rect>
<text className="font-label-sm text-label-sm font-bold whitespace-nowrap" fill="#fffcff" x="590" y="26">Peak: UGX 74.2M</text>
<g className="text-on-surface-variant font-label-sm text-label-sm">
<text x="50" y="208">08:00</text>
<text x="160" y="208">10:00</text>
<text x="275" y="208">12:00 (Lunch Spike)</text>
<text x="430" y="208">14:00</text>
<text x="560" y="208">16:00</text>
<text x="680" y="208">18:00</text>
</g>
</svg>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Inflow (Buyer Purchase)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-1 bg-tertiary"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Vendor Disbursal (Delivery Confirmed)</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm bg-surface-container px-space-sm py-1 rounded-lg">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span>Bank of Uganda NPS Act 2020 Compliant Escrow Trust</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Order &amp; Delivery Dispatch Stream</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active cart releases across greater Kampala municipal dispatch corridors</p>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Syncing Every 5s</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-low">
<th className="py-space-sm px-space-md rounded-l-lg">Order ID</th>
<th className="py-space-sm px-space-md">Merchant &amp; Buyer</th>
<th className="py-space-sm px-space-md">Corridor</th>
<th className="py-space-sm px-space-md">Escrow Value</th>
<th className="py-space-sm px-space-md">Rail</th>
<th className="py-space-sm px-space-md">Status</th>
<th className="py-space-sm px-space-md text-right rounded-r-lg">Action</th>
</tr>
</thead>
<tbody className="space-y-2">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-md px-space-md font-bold text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="local_shipping" className="text-primary text-[16px]" />
<span>#SC-98241</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface">SoundCore Uganda</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">Buyer: Grace Nsubuga</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Nakasero → Kololo</span>
<div className="text-on-surface-variant text-label-sm font-label-sm mt-0.5">Rider: Joseph M. (SafeBoda #419)</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface whitespace-nowrap">UGX 245,000</div>
<div className="text-tertiary text-label-sm font-label-sm font-semibold">Locked in Vault</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-[#FFCC00]"></span>
                    MTN MoMo
                  </span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                    Out for Delivery
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Inspect Telemetry">
<Icon name="open_in_new" className="text-[18px]" />
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-md px-space-md font-bold text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="hourglass_top" className="text-tertiary text-[16px]" />
<span>#SC-98240</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface">Anker Official Store</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">Buyer: Trevor Kigozi</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Bugolobi → Ntinda</span>
<div className="text-on-surface-variant text-label-sm font-label-sm mt-0.5">Dispatch Hub Bugolobi</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface whitespace-nowrap">UGX 180,000</div>
<div className="text-tertiary text-label-sm font-label-sm font-semibold">Locked in Vault</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-[#ED1C24]"></span>
                    Airtel Money
                  </span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-bold">
                    Rider Assigned
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Inspect Telemetry">
<Icon name="open_in_new" className="text-[18px]" />
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-md px-space-md font-bold text-on-surface">
<div className="flex items-center gap-1.5">
<Icon name="lock_clock" className="text-secondary text-[16px]" />
<span>#SC-98239</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface">Oraimo Kampala Hub</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">Buyer: Martha Akello</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Central → Muyenga</span>
<div className="text-on-surface-variant text-label-sm font-label-sm mt-0.5">Handover verification pending</div>
</td>
<td className="py-space-md px-space-md">
<div className="font-bold text-on-surface whitespace-nowrap">UGX 95,000</div>
<div className="text-tertiary text-label-sm font-label-sm font-semibold">Locked in Vault</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-[#FFCC00]"></span>
                    MTN MoMo
                  </span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">
                    Escrow Locked
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Inspect Telemetry">
<Icon name="open_in_new" className="text-[18px]" />
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-space-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="notification_important" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Urgent Action Center</h2>
</div>
<span className="font-label-sm text-label-sm bg-primary-fixed text-primary px-2 py-0.5 rounded-full font-bold">4 Blockers</span>
</div>
<div className="space-y-space-sm">
<div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
<div className="flex items-start justify-between gap-space-xs">
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface block font-bold">14 Seller KYC Dossiers Pending</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Oldest waiting 18h • SLA limit 24h</span>
</div>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded font-bold">CRITICAL</span>
</div>
<button className="w-full py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 font-bold">
<span>Review KYC Queue</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
<div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
<div className="flex items-start justify-between gap-space-xs">
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface block font-bold">8 Products Flagged for Moderation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Potential counterfeit Anker 65W chargers</span>
</div>
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 rounded font-bold">CATALOG</span>
</div>
<button className="w-full py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 font-bold">
<span>Inspect Flagged SKUs</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
<div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
<div className="flex items-start justify-between gap-space-xs">
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface block font-bold">3 Open Disputes in Escrow Hold</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block whitespace-nowrap">Total UGX 1,180,000 frozen by buyer alerts</span>
</div>
<span className="font-label-sm text-label-sm bg-primary-fixed text-primary px-2 py-0.5 rounded font-bold">FUNDS</span>
</div>
<button className="w-full py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 font-bold">
<span>Open Arbitration Desk</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
<div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
<div className="flex items-start justify-between gap-space-xs">
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface block font-bold">1 Locked Dispatch OTP Override Request</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Rider Brian K. at Bugolobi • Buyer phone unreachable</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded font-bold">HANDOVER</span>
</div>
<button className="w-full py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 font-bold">
<span>Review Handover Credentials</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="explore" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Kampala Corridors Live</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg 21.4m</span>
</div>
<div className="space-y-space-sm font-body-sm text-body-sm">
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="space-y-0.5">
<div className="font-bold text-on-surface">Central / Nakasero</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">48 active riders • 12 min transit</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded font-bold">OPTIMAL</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="space-y-0.5">
<div className="font-bold text-on-surface">Nakawa / Bugolobi</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">34 active riders • 16 min transit</div>
</div>
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed/40 px-2 py-0.5 rounded font-bold">HIGH VOLUME</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="space-y-0.5">
<div className="font-bold text-on-surface">Kololo / Kamwokya</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">29 active riders • 14 min transit</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded font-bold">OPTIMAL</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="space-y-0.5">
<div className="font-bold text-on-surface">Rubaga / Mengo</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">14 active riders • 28 min transit</div>
</div>
<span className="font-label-sm text-label-sm text-error bg-error-container text-on-error-container px-2 py-0.5 rounded font-bold">SURGE ALERT</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="hub" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Telecom Payout Gateway Health</h2>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<div className="space-y-space-sm font-body-sm text-body-sm">
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-[#FFCC00]"></span>
<div>
<div className="font-bold text-on-surface">MTN MoMo API Node</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">99.98% Uptime • Latency 210ms</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">NORMAL</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-[#ED1C24]"></span>
<div>
<div className="font-bold text-on-surface">Airtel Money B2C Rail</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">99.94% Uptime • Latency 340ms</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">NORMAL</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="account_balance" className="text-[16px] text-secondary" />
<div>
<div className="font-bold text-on-surface">Stanbic Bank Trust Escrow</div>
<div className="text-on-surface-variant text-label-sm font-label-sm">BOU Statutory Vault Sync</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">RECONCILED</span>
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
