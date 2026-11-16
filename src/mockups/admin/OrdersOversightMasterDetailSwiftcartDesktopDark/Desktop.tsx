// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/orders_oversight_master_detail_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-amber-warning/15 px-margin-desktop py-2 flex items-center justify-between">
<div className="flex items-center gap-space-sm text-amber-warning">
<Icon name="cloud_sync" className="text-[18px]" />
<span className="font-label-md text-label-md">Telecom Stream Online: MTN MoMo gateway latencies at 142ms • SafeBoda Rider GPS relay heartbeat synchronized</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-amber-warning bg-amber-warning/20 px-2 py-0.5 rounded-full font-bold">14 Active Corridors Monitored</span>
<span className="text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-amber-warning animate-ping"></span> Real-time Polling (5s)
      </span>
</div>
</div>

<div className="px-margin-desktop py-space-xl flex flex-col gap-space-xl">

<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[16px] text-surface-variant" />
<span className="text-primary font-bold">Orders Oversight &amp; Dispatch Console</span>
</div>
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
<div className="flex flex-col max-w-3xl">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Platform Orders Oversight &amp; Real-Time Dispatch Stream</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">End-to-end telemetric tracking of active multi-vendor orders, rider assignments, statutory escrow holds, and delivery code verifications across Kampala metropolitan corridors.</p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="relative bg-surface-container-high rounded-lg px-space-md py-2 flex items-center gap-space-xs shadow-sm">
<Icon name="alt_route" className="text-primary text-[18px]" />
<select className="bg-transparent text-on-surface font-label-md text-label-md outline-none cursor-pointer pr-4 appearance-none">
<option className="bg-surface-container-high text-on-surface" value="all">Corridors: All Kampala Hubs</option>
<option className="bg-surface-container-high text-on-surface" value="nakasero">Nakasero Central Corridor</option>
<option className="bg-surface-container-high text-on-surface" value="kololo">Kololo - Naguru Axis</option>
<option className="bg-surface-container-high text-on-surface" value="ntinda">Ntinda - Kisaasi Trunk</option>
<option className="bg-surface-container-high text-on-surface" value="kikuubo">Kikuubo Wholesale Core</option>
</select>
<Icon name="arrow_drop_down" className="text-on-surface-variant text-[16px] absolute right-2 pointer-events-none" />
</div>

<div className="relative bg-surface-container-high rounded-lg px-space-md py-2 flex items-center gap-space-xs shadow-sm">
<Icon name="verified" className="text-tertiary text-[18px]" />
<select className="bg-transparent text-on-surface font-label-md text-label-md outline-none cursor-pointer pr-4 appearance-none">
<option className="bg-surface-container-high text-on-surface" value="transit">Status: In Transit &amp; Out for Delivery</option>
<option className="bg-surface-container-high text-on-surface" value="escrow">Status: Escrow Locked (In Hub)</option>
<option className="bg-surface-container-high text-on-surface" value="blocked">Status: Code Lock Hold (Attention)</option>
<option className="bg-surface-container-high text-on-surface" value="delivered">Status: Completed Today</option>
</select>
<Icon name="arrow_drop_down" className="text-on-surface-variant text-[16px] absolute right-2 pointer-events-none" />
</div>

<div className="relative bg-surface-container-high rounded-lg px-space-md py-2 flex items-center gap-space-xs shadow-sm">
<Icon name="currency_exchange" className="text-amber-warning text-[18px]" />
<select className="bg-transparent text-on-surface font-label-md text-label-md outline-none cursor-pointer pr-4 appearance-none">
<option className="bg-surface-container-high text-on-surface" value="all-rails">Payment: MTN MoMo &amp; Airtel</option>
<option className="bg-surface-container-high text-on-surface" value="mtn">MTN Mobile Money Rails</option>
<option className="bg-surface-container-high text-on-surface" value="airtel">Airtel Money Rails</option>
</select>
<Icon name="arrow_drop_down" className="text-on-surface-variant text-[16px] absolute right-2 pointer-events-none" />
</div>

<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center gap-space-xs transition-colors shadow-sm" id="stream-poll-btn">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-md text-label-md">Live Stream (5s)</span>
</button>

<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center gap-space-xs transition-colors shadow-sm">
<Icon name="download" className="text-[18px]" />
<span className="font-label-md text-label-md">Export Ledger CSV</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Active In-Flight Orders</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">1,140</span>
<span className="font-label-sm text-label-sm text-emerald-escrow bg-emerald-escrow/10 px-1.5 py-0.5 rounded font-bold">+12% peak</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="lock" className="text-[14px] text-tertiary" />
<span className="whitespace-nowrap">UGX 384,500,000 locked in escrow vault</span>
</p>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-action-gradient-start to-action-gradient-end h-full rounded-full" style={{"width":"74%"}}></div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">On-Time Dispatch SLA</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<Icon name="timer" className="text-[20px]" />
</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">95.6%</span>
<span className="font-label-sm text-label-sm text-emerald-escrow bg-emerald-escrow/10 px-1.5 py-0.5 rounded font-bold">&gt; Target 92.0%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">21.4 min avg courier transit time</p>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"95.6%"}}></div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-warning/10 rounded-full blur-2xl group-hover:bg-amber-warning/20 transition-all"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Delivery Code Locked</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-amber-warning">
<Icon name="pin" className="text-[20px]" />
</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-amber-warning font-extrabold tracking-tight">6 Orders</span>
<span className="font-label-sm text-label-sm text-amber-warning bg-amber-warning/15 px-1.5 py-0.5 rounded font-bold animate-pulse">Attention</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Awaiting supervisory override or buyer OTP</p>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"25%"}}></div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Completed Today</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="task_alt" className="text-[20px]" />
</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">2,840</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary/15 px-1.5 py-0.5 rounded font-bold">Payout Auto-Triggered</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 whitespace-nowrap">UGX 64,820,000 released to vendor wallets</p>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-md">
<div className="relative flex items-center">
<Icon name="search" className="absolute left-3 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search order #, tracking ref, buyer name, or phone..." type="text" />
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1">
<button className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold whitespace-nowrap shadow-sm">All (1,140)</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap">Out for Delivery (142)</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap">Escrow Locked (480)</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap">At Hub Staging (312)</button>
<button className="px-space-md py-1.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold whitespace-nowrap">Code Locked (6)</button>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-container-dark-high rounded-xl p-space-md shadow-lg cursor-pointer transition-all relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="pl-2 flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-98241</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/25 text-primary font-label-sm text-label-sm font-bold">Selected</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold whitespace-nowrap">UGX 180,000</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface">
<span className="font-label-md text-label-md font-semibold truncate">SoundCore Space One ANC (Jet Black)</span>
</div>

<div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[16px] text-tertiary shrink-0" />
<span className="truncate">Kampala Phone Hub</span>
</div>
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[16px] text-primary shrink-0" />
<span className="truncate">Grace N. (0702 ••• 419)</span>
</div>
<div className="flex items-center gap-1 truncate col-span-2">
<Icon name="route" className="text-[16px] text-secondary shrink-0" />
<span className="truncate">Nakasero Hub → Kololo Terrace #4</span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs mt-space-xs">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<Icon name="two_wheeler" className="text-[16px]" />
<span>Brian Kizito (SafeBoda #UG-882)</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Out for Delivery (12m)
                </span>
</div>
</div>
</div>

<div className="bg-container-dark-low hover:bg-surface-container rounded-xl p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-98240</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold whitespace-nowrap">UGX 84,000</span>
</div>
<div className="font-label-md text-label-md text-on-surface truncate">Anker Prime 67W GaN Wall Charger</div>
<div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[16px] text-tertiary" />
<span className="truncate">SoundCore Uganda Official</span>
</div>
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[16px] text-primary" />
<span className="truncate">Trevor Kigozi (0772 ••• 104)</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs mt-space-xs">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="delivery_dining" className="text-[16px]" />
<span>Joseph M. (SwiftExpress #419)</span>
</div>
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="pin" className="text-[14px]" /> At Doorstep • Pending Code
                </span>
</div>
</div>
</div>

<div className="bg-container-dark-low hover:bg-surface-container rounded-xl p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-98239</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold whitespace-nowrap">UGX 75,000</span>
</div>
<div className="font-label-md text-label-md text-on-surface truncate">Oraimo 20000mAh PowerBank Toast 10</div>
<div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[16px] text-tertiary" />
<span className="truncate">GadgetPoint (Pioneer Mall)</span>
</div>
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[16px] text-primary" />
<span className="truncate">Martha Akello</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs mt-space-xs">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="warehouse" className="text-[16px]" />
<span>Nakasero Hub Sorting Bin 14B</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  At Hub Staging
                </span>
</div>
</div>
</div>

<div className="bg-container-dark-low hover:bg-surface-container rounded-xl p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-98238</span>
<span className="font-label-lg text-label-lg text-primary font-extrabold whitespace-nowrap">UGX 1,950,000</span>
</div>
<div className="font-label-md text-label-md text-on-surface truncate">Samsung 65-inch Crystal UHD 4K Smart TV</div>
<div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[16px] text-tertiary" />
<span className="truncate">Victoria Tech Stores</span>
</div>
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[16px] text-primary" />
<span className="truncate">Denis Mukasa</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs mt-space-xs">
<div className="flex items-center gap-1.5 text-emerald-escrow font-label-sm text-label-sm font-semibold">
<Icon name="security" className="text-[16px]" />
<span>Escrow Locked • High Value</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-secondary font-label-sm text-label-sm font-bold">
                  Inspection Stage
                </span>
</div>
</div>
</div>

<div className="bg-container-dark-low hover:bg-surface-container rounded-xl p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">#SC-98235</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold whitespace-nowrap">UGX 120,000</span>
</div>
<div className="font-label-md text-label-md text-on-surface truncate">Nike Air Force 1 '07 All White (Size 43)</div>
<div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1 truncate">
<Icon name="storefront" className="text-[16px] text-tertiary" />
<span className="truncate">Kikuubo Sneaker Shop</span>
</div>
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[16px] text-primary" />
<span className="truncate">Patricia N.</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs mt-space-xs">
<div className="flex items-center gap-1.5 text-danger-penalty font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[16px]" />
<span>Mismatched PIN (2 Retries)</span>
</div>
<span className="px-2 py-0.5 rounded bg-error-container/40 text-error font-label-sm text-label-sm font-bold">
                  Code Locked
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-xl relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-price-display text-price-display text-on-surface font-black tracking-tight">#SC-98241</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">• Created Today 11:21 EAT</span>
</div>
<div className="flex items-center gap-space-sm mt-2 flex-wrap">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="electric_moped" className="text-[16px]" />
                  Out for Delivery (SafeBoda Express)
                </span>
<span className="px-2.5 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[16px]" />
                  Bank of Uganda NPS Act 2020 Compliant Escrow Locked
                </span>
</div>
</div>

<div className="bg-surface-container px-space-lg py-space-sm rounded-lg flex flex-col md:items-end">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Vault Escrow Balance</span>
<span className="font-headline-md text-headline-md text-primary font-black whitespace-nowrap">UGX 180,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">MTN MoMo Confirmed</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="navigation" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm font-bold">Customer &amp; SafeBoda Telematics</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container px-2 py-0.5 rounded font-bold">Live GPS Ping: 3s ago</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Buyer Destination</span>
<div className="flex items-start gap-space-xs">
<Icon name="location_on" className="text-primary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Grace Nantongo</span>
<span className="font-body-md text-body-md text-on-surface-variant">Flat 4B, Kololo Terrace Road, Kampala Central</span>
<span className="font-label-sm text-label-sm text-primary font-semibold mt-1">Masked Relay: +256 702 ••• 419</span>
<span className="font-body-sm text-body-sm text-on-surface-variant italic">Instruction: "Leave at security guard house if 2nd floor buzzer unanswered"</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Assigned Rider Details</span>
<span className="text-amber-warning flex items-center text-label-sm font-bold">
<Icon name="star" className="text-[14px]" /> 4.9 (1,420 trips)
                </span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold">
                  BK
                </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Brian Kizito</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Hub ID #UG-882</span>
<span className="font-label-sm text-label-sm text-secondary">Bajaj Boxer Red (Reg: UEF 842X)</span>
</div>
</div>
<div className="mt-2 pt-2 flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Origin: William Street Hub</span>
<span className="text-tertiary font-bold">ETA: 8 mins (1.4 km left)</span>
</div>
</div>
</div>

<div className="w-full h-48 bg-surface-container-high rounded-xl relative overflow-hidden flex items-end p-space-md shadow-inner" data-alt="Dark schematic GPS telemetry map visualization of Kampala city streets between Nakasero hill and Kololo terrace at dusk, glowing cyan GPS route line connecting dispatch hubs with pulsing motorcycle waypoint icon, subtle UI telemetry nodes and altitude topography overlays in dark navy slate and orange accent tones." data-location="Kololo, Kampala, Uganda" style={{"backgroundImage":"url('/images/1f64c8a632d64e37.webp')"}}>

<div className="bg-surface-dark/90 backdrop-blur-md rounded-lg p-space-sm flex items-center justify-between w-full shadow-lg">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-emerald-escrow animate-ping"></span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Corridor: Yusuf Lule Rd → Golf Course Roundabout → Kololo Terrace</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Speed: 38 km/h • Traffic: Moderate along Garden City junction</span>
</div>
</div>
<button className="px-space-md py-1 rounded bg-surface-container hover:bg-surface-bright text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<Icon name="fullscreen" className="text-[16px]" /> Center Map
              </button>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="inventory_2" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm font-bold">Package Custody &amp; Financial Ledger</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">BAG-TAG: #SWIFT-BAG-99201-KC</span>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" data-alt="High resolution studio product photograph of SoundCore Space One active noise cancelling wireless over-ear headphones in premium matte jet black finish on a sleek dark background with subtle warm rim lighting." src="/images/4211cd9605ac9655.webp" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">SoundCore Space One ANC Headphones (Jet Black)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Qty: 1 Unit • Verified Barcode: RTN-4491-UG-KLA</span>
<div className="flex items-center gap-space-xs mt-1">
<Icon name="store" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant: Kampala Phone Hub (Downtown Stall #44, Nakasero)</span>
</div>
</div>
</div>
<div className="flex flex-col md:items-end shrink-0">
<span className="font-price-display text-price-display text-on-surface font-black whitespace-nowrap">UGX 180,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">Escrow Tag: LOCKED</span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Transaction Breakdown &amp; Telecom Escrow Rails</span>
<div className="flex justify-between items-center text-body-md text-on-surface py-1">
<span className="text-on-surface-variant">Merchandise Subtotal:</span>
<span className="font-bold whitespace-nowrap">UGX 180,000</span>
</div>
<div className="flex justify-between items-center text-body-md text-on-surface py-1">
<span className="text-on-surface-variant">SafeBoda Express Corridor Dispatch Fee:</span>
<span className="whitespace-nowrap">UGX 4,500</span>
</div>
<div className="flex justify-between items-center text-body-md text-emerald-escrow py-1">
<span className="flex items-center gap-1">
<Icon name="local_offer" className="text-[16px]" /> SwiftCart Merchant Subsidy:
              </span>
<span className="whitespace-nowrap">-UGX 2,000</span>
</div>
<div className="flex justify-between items-center font-headline-sm text-headline-sm text-on-surface pt-2 mt-1">
<span className="font-bold">Total Customer Charge (In Escrow):</span>
<span className="text-primary font-black whitespace-nowrap">UGX 182,500</span>
</div>
<div className="flex items-center justify-between text-label-sm text-label-sm text-on-surface-variant pt-2">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span> Paid via MTN MoMo (*165# Push Payment)
              </span>
<span className="font-mono">Audit Transaction Ref: #MTN-8821094</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="history" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm font-bold">Statutory Milestone Custody Log</h2>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">4 / 5 Steps Cleared</span>
</div>

<div className="relative pl-6 flex flex-col gap-space-lg before:absolute before:left-2 before:top-2 before:bottom-3 before:w-0.5 before:bg-surface-variant">

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center text-surface text-[10px] font-black">✓</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Order Created &amp; Payment Escrowed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:21 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">MTN MoMo API Handshake 200 OK • Bank of Uganda ledger reference recorded into vault custody.</p>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center text-surface text-[10px] font-black">✓</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Merchant Handoff at Nakasero Sorting Hub</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:34 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Package seal verified by Hub Officer Sarah A. Packaging weight logged: 420g.</p>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-escrow flex items-center justify-center text-surface text-[10px] font-black">✓</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Courier Pickup &amp; Tamper Hologram Scan</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:42 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda Courier Brian Kizito scanned outbound QR seal code: #SWIFT-BAG-99201-KC.</p>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-surface text-[10px] font-black">●</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-secondary font-bold">In Transit along Lugogo Bypass Corridor</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">11:58 EAT (Active)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Moving along Yusuf Lule corridor toward Kololo. Next waypoint: Acacia Mall intersection.</p>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-surface-variant flex items-center justify-center text-surface text-[10px]">○</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface-variant font-bold">Customer 6-Digit Delivery OTP Entry &amp; Escrow Release</span>
<span className="font-label-sm text-label-sm text-amber-warning font-bold">Pending Arrival</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Requires buyer Grace N. to recite the 6-digit confirmation pin to driver app. Payout immediately triggers to merchant wallet upon confirmation.</p>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-xl flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="admin_panel_settings" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm font-bold">Supervisory Control Deck &amp; Direct Actions</h2>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Role: Super Admin Privilege</span>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Dispatch Logs &amp; Operational Notes</label>
<div className="bg-surface-container-low rounded-lg p-space-sm text-body-sm text-on-surface flex flex-col gap-1 max-h-24 overflow-y-auto">
<div className="text-on-surface-variant font-mono text-[11px]">[11:24 EAT Kizito R.]: Buyer called hotline to request gate code #401 relay to courier. Note forwarded to driver terminal.</div>
<div className="text-on-surface-variant font-mono text-[11px]">[11:36 EAT Sarah A.]: Nakasero dispatch hub verified product seals intact. Headphone box shrink-wrap untampered.</div>
</div>
<div className="flex gap-space-sm mt-1">
<input className="flex-1 h-9 px-3 rounded bg-surface-container-high text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Add administrative note or customer instruction..." type="text" />
<button className="h-9 px-space-md rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-bold">Log</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-sm pt-space-xs">

<button className="h-12 px-space-sm rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:brightness-110 text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all">
<Icon name="sync_alt" className="text-[20px]" />
<span>Reassign Courier</span>
</button>

<button className="h-12 px-space-sm rounded-xl bg-amber-warning/20 hover:bg-amber-warning/30 text-amber-warning font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs active:scale-[0.98] transition-all">
<Icon name="pause_circle" className="text-[20px]" />
<span>Emergency Hold</span>
</button>

<button className="h-12 px-space-sm rounded-xl bg-surface-container-high hover:bg-surface-bright text-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs active:scale-[0.98] transition-all">
<Icon name="call" className="text-[20px]" />
<span>Masked VoIP Call</span>
</button>

<button className="h-12 px-space-sm rounded-xl bg-error-container/30 hover:bg-error-container/40 text-error font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs active:scale-[0.98] transition-all">
<Icon name="cancel" className="text-[20px]" />
<span>Cancel &amp; Refund</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
