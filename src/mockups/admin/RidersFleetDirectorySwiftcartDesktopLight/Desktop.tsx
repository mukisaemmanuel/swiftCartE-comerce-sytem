// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/riders_fleet_directory_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 bg-surface min-h-screen px-space-xl py-space-lg"><div className="flex flex-col w-full space-y-space-xl">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Riders Fleet Directory</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl space-y-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riders &amp; Courier Fleet Operations Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time Kampala metropolitan courier registry, active SafeBoda dispatches, shift telemetry, driver onboarding verification, and performance governance.</p>
</div>
<div className="flex items-center gap-space-md shrink-0">
<button className="h-12 px-space-lg rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all flex items-center gap-space-sm active:scale-95" type="button">
<Icon name="download" className="text-[18px]" />
<span>Export Manifest (CSV)</span>
</button>
<button className="h-12 px-space-lg rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95 transition-all flex items-center gap-space-sm" type="button">
<Icon name="person_add" className="text-[20px]" />
<span>+ Onboard New Courier</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Active On-Duty Boda Fleet</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">286</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 320 registered</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
</div>
<div className="pt-space-md mt-space-sm flex items-center gap-space-xs">
<span className="inline-flex items-center text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="arrow_upward" className="text-[16px]" /> 89.3%
        </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">fleet availability across 18 Kampala stages</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Current In-Transit Trips</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">142</span>
<span className="font-body-sm text-body-sm text-primary font-bold">Live Dispatches</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<Icon name="navigation" className="text-[22px]" />
</div>
</div>
<div className="pt-space-md mt-space-sm flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Avg speed <strong>28 km/h</strong> • <strong>21.4 min</strong> avg delivery time</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Handover Success Rate</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-tertiary">98.4%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Today</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<Icon name="verified" className="text-[22px]" />
</div>
</div>
<div className="pt-space-md mt-space-sm flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Only <strong>6 code exceptions</strong> today (&lt;0.2%)</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Daily Earnings Disbursed</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-currency-code text-currency-code text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface">14,820,000</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center">
<Icon name="payments" className="text-[22px]" />
</div>
</div>
<div className="pt-space-md mt-space-sm flex items-center gap-space-xs">
<span className="h-2 w-2 rounded-full bg-tertiary shrink-0"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Instant MTN MoMo &amp; Airtel Payouts</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-sm flex-1">

<div className="relative min-w-[280px]">
<Icon name="map" className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant" />
<select className="w-full h-10 pl-9 pr-8 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>Kampala Central (Nakasero, Kololo, Bugolobi, Ntinda)</option>
<option>Kampala North (Kawempe, Kisaasi, Bwaise, Komamboga)</option>
<option>Kampala South (Kabalagala, Kansanga, Ggaba, Makindye)</option>
<option>Kampala East (Kireka, Bweyogerere, Mukono corridor)</option>
<option>Entebbe Express Corridor &amp; Airport Cargo Hub</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none" />
</div>

<div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-container">
<button className="px-space-sm py-1 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm font-bold" type="button">Active On Shift (286)</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Dispatched (142)</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Idle at Stage (94)</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">On Break (50)</button>
</div>
</div>

<div className="relative w-full md:w-80">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant" />
<input className="w-full h-10 pl-9 pr-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search rider, ID, stage, NIN, or plate..." type="text" />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
<th className="py-space-md px-space-lg">Courier &amp; Badge</th>
<th className="py-space-md px-space-md">Base Stage &amp; Hub</th>
<th className="py-space-md px-space-md">Vehicle &amp; Plate</th>
<th className="py-space-md px-space-md">Verification / KYC</th>
<th className="py-space-md px-space-md">Telemetry &amp; Status</th>
<th className="py-space-md px-space-md text-center">Daily SLA</th>
<th className="py-space-md px-space-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm">

<tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer bg-primary-fixed/10">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Close up professional portrait of a confident Ugandan male motorcycle delivery courier smiling wearing a clean bright orange SafeBoda reflective vest and branded safety jacket against a warm sunlight Kampala background" src="/images/ee2617581dd89a04.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Brian Kizito</span>
<span className="px-1.5 py-0.2 rounded font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-bold">Gold Tier</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-currency-code text-currency-code text-primary font-bold">#RC-8821</span>
<span>•</span>
<span className="flex items-center text-[#d97706] font-bold">
<Icon name="star" className="text-[14px]" /> 4.9
                    </span>
<span className="text-[11px]">(648)</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">William St Stage #04</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Central Hub • Nakasero</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Bajaj Boxer 150cc</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">UEF 842X</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="format_image_left" className="text-[14px]" />
<span>Gear Checked (2025)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm text-[11px]">
<span>NIN: CM8803•••104</span>
<span>• KCCA Boda</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
<span>Delivering #SC-98241</span>
</div>
<div className="flex items-center gap-space-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-0.5"><Icon name="battery_5_bar" className="text-[13px] text-tertiary" /> 84%</span>
<span className="flex items-center gap-0.5"><Icon name="signal_cellular_alt" className="text-[13px] text-secondary" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-center">
<div className="inline-flex flex-col items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">14 / 14</span>
<span className="text-[11px] text-tertiary font-bold">100% on-time</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" title="Inspect Telematics" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" title="Emergency Dispatch Re-route" type="button">
<Icon name="alt_route" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container transition-colors" title="Suspend Courier" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait of a young Ugandan female motorcycle courier with helmet tucked under arm smiling proudly wearing a high visibility certified jacket and badge outdoors in Kampala" src="/images/823a85247d636392.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Sarah Namubiru</span>
<span className="px-1.5 py-0.2 rounded font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed font-bold">Silver Tier</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-currency-code text-currency-code text-primary font-bold">#RC-9012</span>
<span>•</span>
<span className="flex items-center text-[#d97706] font-bold">
<Icon name="star" className="text-[14px]" /> 4.95
                    </span>
<span className="text-[11px]">(412)</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Acacia Mall Stage</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kololo Sub-Hub</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">TVS Star HLX 125</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">UEX 512W</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="format_image_left" className="text-[14px]" />
<span>Gear Checked (2025)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm text-[11px]">
<span>NIN: CF9202•••381</span>
<span>• KCCA Boda</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
<span>Idle at Acacia Hub</span>
</div>
<div className="flex items-center gap-space-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-0.5"><Icon name="battery_full" className="text-[13px] text-tertiary" /> 92%</span>
<span className="flex items-center gap-0.5"><Icon name="signal_cellular_alt" className="text-[13px] text-secondary" /> Airtel 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-center">
<div className="inline-flex flex-col items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">11 / 11</span>
<span className="text-[11px] text-tertiary font-bold">98% on-time</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="alt_route" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container transition-colors" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait of an experienced Ugandan male commercial delivery motorcyclist wearing protective eyewear and high viz uniform standing beside his motorcycle in Kampala" src="/images/b959ba8da19d7e72.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Joseph Katende</span>
<span className="px-1.5 py-0.2 rounded font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-bold">Gold Tier</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-currency-code text-currency-code text-primary font-bold">#RC-7740</span>
<span>•</span>
<span className="flex items-center text-[#d97706] font-bold">
<Icon name="star" className="text-[14px]" /> 4.88
                    </span>
<span className="text-[11px]">(892)</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Nakawa Market Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">East Corridor • Jinja Rd</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Bajaj Boxer 150cc</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">UED 109K</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="format_image_left" className="text-[14px]" />
<span>Gear Checked (2025)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm text-[11px]">
<span>NIN: CM7711•••902</span>
<span>• KCCA Boda</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
<span>Delivering #SC-98104</span>
</div>
<div className="flex items-center gap-space-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-0.5"><Icon name="battery_6_bar" className="text-[13px] text-tertiary" /> 76%</span>
<span className="flex items-center gap-0.5"><Icon name="signal_cellular_alt" className="text-[13px] text-secondary" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-center">
<div className="inline-flex flex-col items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">16 / 16</span>
<span className="text-[11px] text-tertiary font-bold">100% on-time</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="alt_route" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container transition-colors" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait of an energetic Ugandan courier driver taking off motorcycle helmet smiling outdoors in sunshine Kampala city setting" src="/images/2ed98a82f837b81b.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Derrick Omondi</span>
<span className="px-1.5 py-0.2 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-bold">Standard</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-currency-code text-currency-code text-primary font-bold">#RC-8120</span>
<span>•</span>
<span className="flex items-center text-[#d97706] font-bold">
<Icon name="star" className="text-[14px]" /> 4.79
                    </span>
<span className="text-[11px]">(194)</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Ntinda Complex Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kisaasi / Ntinda Link</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Yamaha Crux 110</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">UEB 773M</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="format_image_left" className="text-[14px]" />
<span>Gear Checked (2025)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm text-[11px]">
<span>NIN: CM9504•••441</span>
<span>• KCCA Boda</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-on-surface-variant"></span>
<span>Shift Break (18m left)</span>
</div>
<div className="flex items-center gap-space-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-0.5"><Icon name="battery_3_bar" className="text-[13px] text-primary" /> 42%</span>
<span className="flex items-center gap-0.5"><Icon name="signal_cellular_alt" className="text-[13px] text-secondary" /> Airtel 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-center">
<div className="inline-flex flex-col items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">8 / 9</span>
<span className="text-[11px] text-on-surface-variant font-medium">89% on-time</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="alt_route" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container transition-colors" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait of a young smiling Ugandan female dispatch courier wearing an official reflective jacket with radio communicator on shoulder in Kampala" src="/images/020e0bac8765ad5f.webp" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Grace Kyomugisha</span>
<span className="px-1.5 py-0.2 rounded font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-bold">Gold Tier</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-currency-code text-currency-code text-primary font-bold">#RC-6490</span>
<span>•</span>
<span className="flex items-center text-[#d97706] font-bold">
<Icon name="star" className="text-[14px]" /> 4.98
                    </span>
<span className="text-[11px]">(520)</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Bugolobi Village Mall</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Spring Road Hub</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Bajaj Boxer 150cc</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">UEK 992P</span>
<Icon name="check_circle" className="text-[14px] text-tertiary" />
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="format_image_left" className="text-[14px]" />
<span>Gear Checked (2025)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm text-[11px]">
<span>NIN: CF8901•••619</span>
<span>• KCCA Boda</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
<span>Delivering #SC-98319</span>
</div>
<div className="flex items-center gap-space-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-0.5"><Icon name="battery_full" className="text-[13px] text-tertiary" /> 95%</span>
<span className="flex items-center gap-0.5"><Icon name="signal_cellular_alt" className="text-[13px] text-secondary" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-center">
<div className="inline-flex flex-col items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">12 / 12</span>
<span className="text-[11px] text-tertiary font-bold">100% on-time</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="alt_route" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container transition-colors" type="button">
<Icon name="block" className="text-[18px]" />
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing <strong>1 - 5</strong> of <strong>286 active couriers</strong> (320 registered)</span>
<div className="flex items-center gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm disabled:opacity-50" disabled={true} type="button">Previous</button>
<button className="h-8 w-8 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold flex items-center justify-center" type="button">1</button>
<button className="h-8 w-8 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high flex items-center justify-center" type="button">2</button>
<button className="h-8 w-8 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high flex items-center justify-center" type="button">3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="h-8 w-8 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high flex items-center justify-center" type="button">58</button>
<button className="h-8 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high" type="button">Next</button>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full max-w-xl bg-surface-container-lowest shadow-2xl z-50 transform translate-x-0 transition-transform duration-300 ease-out flex flex-col overflow-hidden" id="courierDrawer">

<div className="p-space-lg bg-surface-container-low flex items-center justify-between shrink-0">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block leading-tight">Courier Operations Profile</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Real-Time Dispatch &amp; Telemetry Dossier</span>
</div>
</div>
<button className="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<Icon name="close" className="text-[22px]" />
</button>
</div>

<div className="flex-1 overflow-y-auto p-space-lg space-y-space-lg">

<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-space-md">
<img className="w-16 h-16 rounded-xl object-cover shrink-0" data-alt="Close up professional portrait of Brian Kizito confident Ugandan motorcycle courier wearing safety orange reflective jacket and badge smiling in sunny Kampala" src="/images/d4001003715b40a5.webp" />
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Brian Kizito</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shrink-0">SafeBoda Gold</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Rider ID: <strong className="text-on-surface font-currency-code text-currency-code">RC-8821</strong> • Stage: <strong>William St #04</strong>
</p>
<div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[11px] text-on-surface-variant">
<span className="flex items-center gap-1 font-semibold text-on-surface"><Icon name="call" className="text-[13px] text-primary" /> +256 758 ••• 391</span>
<span>•</span>
<span>NIRA NIN: <strong>CM88031204</strong></span>
<span>•</span>
<span>URA TIN: <strong>100492819</strong></span>
</div>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide">Live Dispatch Route</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">Trip #SC-98241 (Kololo Terrace)</span>
</div>
<div className="relative rounded-xl overflow-hidden shadow-sm">

<div className="w-full h-48 bg-cover bg-center" data-location="Kololo Terrace, Kampala, Uganda" style={{"backgroundImage":"url('/images/2f4f742c00b764f4.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/90 via-transparent to-transparent flex flex-col justify-end p-space-md">
<div className="bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-lg shadow-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<Icon name="delivery_dining" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface block leading-tight">1.4 km to Drop-off</span>
<span className="text-[11px] text-on-surface-variant">Destination: Acacia Residences, Flat 4B</span>
</div>
</div>
<div className="text-right">
<span className="font-currency-code text-currency-code text-tertiary block font-bold leading-tight">ETA 4 MIN</span>
<span className="text-[10px] text-on-surface-variant font-bold">29 km/h live speed</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-space-sm">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide">KYC &amp; Safety Compliance Status</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs">
<Icon name="verified_user" className="text-tertiary text-[18px] shrink-0" />
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface block">KCCA Commercial Permit</span>
<span className="text-[11px] text-on-surface-variant block">#KMP-BODA-2024-819</span>
<span className="text-[10px] text-tertiary font-bold">Active through Dec 2025</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs">
<Icon name="shield" className="text-tertiary text-[18px] shrink-0" />
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface block">PSV Rider Insurance</span>
<span className="text-[11px] text-on-surface-variant block">Jubilee #JUB-88192-A</span>
<span className="text-[10px] text-tertiary font-bold">Comprehensive Active</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs">
<Icon name="sports_motorsports" className="text-tertiary text-[18px] shrink-0" />
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface block">Safety Gear Physical Check</span>
<span className="text-[11px] text-on-surface-variant block">Helmet, Vest &amp; Lockbox</span>
<span className="text-[10px] text-tertiary font-bold">Inspected: 12 Oct 2025</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs">
<Icon name="badge" className="text-tertiary text-[18px] shrink-0" />
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface block">Logbook Verified</span>
<span className="text-[11px] text-on-surface-variant block">Bajaj Boxer • UEF 842X</span>
<span className="text-[10px] text-tertiary font-bold">Sole Owner Match</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-on-surface-variant">Today's Earnings Ledger</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="account_balance_wallet" className="text-[14px]" /> Ready for MoMo
          </span>
</div>
<div className="flex items-baseline justify-between">
<div>
<span className="font-currency-code text-currency-code text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface">68,000</span>
</div>
<span className="text-[11px] text-on-surface-variant whitespace-nowrap">14 deliveries + UGX 12,000 SafeBoda express incentive</span>
</div>
<div className="p-space-xs px-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span>Target Wallet: <strong>MTN MoMo (+256 758•••391)</strong></span>
</div>
<span className="font-bold text-primary">Auto-Disburses at 21:00 EAT</span>
</div>
</div>

<div className="space-y-space-sm pt-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide">Governance &amp; Support Escalation</span>
<div className="grid grid-cols-2 gap-space-sm">
<button className="h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-xs" type="button">
<Icon name="chat" className="text-[18px] text-tertiary" />
<span>Masked WhatsApp Call</span>
</button>
<button className="h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-xs" type="button">
<Icon name="history" className="text-[18px]" />
<span>Trips Archive (648)</span>
</button>
</div>

<div className="p-space-md rounded-xl bg-error-container/30 space-y-space-sm">
<div className="flex items-center gap-space-xs text-error font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[16px]" />
<span>Driver Performance / Disciplinary Action</span>
</div>
<div className="flex gap-space-xs">
<select className="flex-1 h-10 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none">
<option>Reason: Traffic Infraction / Police Hold</option>
<option>Reason: Customer Code Tampering / Missing Package</option>
<option>Reason: Multiple Late Handovers (&gt;45m)</option>
<option>Reason: Expired KCCA Permit / Insurance</option>
</select>
<button className="h-10 px-space-md rounded-lg bg-error text-on-error font-label-sm text-label-sm font-bold hover:brightness-110 active:scale-95 transition-all shrink-0" type="button">
              Suspend Courier
            </button>
</div>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container-low shrink-0 flex items-center justify-between">
<span className="text-[11px] text-on-surface-variant">Last ping: <strong>14 seconds ago</strong> from Kololo Tower</span>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
        Dismiss Inspector
      </button>
</div>
</div>

<div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-space-md" id="onboardModal">
<div className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
<div className="p-space-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="badge" className="text-[18px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Onboard New Courier</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">SwiftCart Uganda &amp; SafeBoda Certified Logistics</span>
</div>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="p-space-lg space-y-space-md overflow-y-auto max-h-[716px]">
<div className="grid grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface font-bold">Courier Full Name</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. Ronald Mukasa" type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface font-bold">NIRA National ID (NIN)</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="CM9100..." type="text" />
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface font-bold">Mobile Money Payout Number</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="+256 7..." type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface font-bold">Boda Registration Plate</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. UEL 419Z" type="text" />
</div>
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface font-bold">Base Boda Stage Assignment</label>
<select className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
<option>William St Stage #04 (Central Kampala)</option>
<option>Acacia Mall Stage (Kololo / Kamwokya)</option>
<option>Nakawa Market Hub (Jinja Road corridor)</option>
<option>Ntinda Complex Hub</option>
<option>Bugolobi Village Mall Stage</option>
</select>
</div>
<div className="p-space-sm rounded-xl bg-surface-container space-y-2">
<span className="font-label-sm text-label-sm font-bold text-on-surface block">Mandatory Safety &amp; Legal Verification</span>
<div className="space-y-1.5">
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
<input checked={true} className="accent-primary rounded" type="checkbox" />
<span>Dual DOT-Approved Helmets Verified</span>
</label>
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
<input checked={true} className="accent-primary rounded" type="checkbox" />
<span>Valid KCCA Commercial Rider Permit (2025)</span>
</label>
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
<input checked={true} className="accent-primary rounded" type="checkbox" />
<span>Logbook or Signed Hire-Purchase Agreement</span>
</label>
</div>
</div>
</div>
<div className="p-space-md bg-surface-container-low flex items-center justify-end gap-space-sm">
<button className="px-space-md py-2 rounded-xl text-on-surface-variant font-label-md text-label-md hover:bg-surface-container" type="button">Cancel</button>
<button className="px-space-lg py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:brightness-110 active:scale-95 transition-all" type="button">Submit &amp; Provision Driver ID</button>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
