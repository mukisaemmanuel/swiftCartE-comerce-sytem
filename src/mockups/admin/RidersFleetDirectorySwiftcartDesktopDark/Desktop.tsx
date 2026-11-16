// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/riders_fleet_directory_swiftcart_desktop_dark/code.html
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

<div className="w-full bg-surface-container-lowest px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-emerald-escrow/10 px-space-sm py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider font-bold">Kampala Urban Grid Live</span>
</div>
<span className="text-on-surface-variant font-body-sm text-body-sm hidden md:inline">18 Boda stages synchronized • GPS precision ±4.2m via MTN 4G Telemetry</span>
</div>
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<Icon name="network_cell" className="text-[16px] text-mtn-yellow" />
<span>MTN MoMo Settlement: <strong className="text-on-surface">Auto 21:00 EAT</strong></span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span>Escrow OTP Verification: <strong className="text-tertiary">Enforced</strong></span>
</div>
</div>
</div>

<div className="p-space-xl space-y-space-xl">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="space-y-space-xs max-w-3xl">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Riders Fleet Directory</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riders &amp; Courier Fleet Operations Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Real-time Kampala metropolitan courier registry, active SafeBoda dispatches, shift telemetry, driver onboarding verification, and performance governance.
        </p>
</div>

<div className="flex flex-wrap items-center gap-space-md">
<button className="h-[52px] px-space-lg rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center gap-space-sm transition-all shadow-md active:scale-98" type="button">
<Icon name="file_download" className="text-[20px] text-secondary" />
<span>Export Fleet Manifest (CSV)</span>
</button>
<button className="h-[52px] px-space-xl rounded-2xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-98 transition-all" type="button">
<Icon name="person_add" className="text-[22px]" />
<span>+ Onboard New Courier</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">

<div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Active On-Duty Boda Fleet</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-price-display text-price-display text-on-surface">286 Couriers</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 320</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="text-emerald-escrow font-bold">89.3%</span> availability across 18 Kampala stages
        </p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-space-md overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"89.3%"}}></div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Current In-Transit Trips</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="speed" className="text-[20px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-price-display text-price-display text-on-surface">142 Live Dispatches</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span>Avg speed 28 km/h</span>
<span>•</span>
<span className="text-tertiary font-bold">21.4 min</span>
<span>avg drop</span>
</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-space-md overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"68%"}}></div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-escrow/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Delivery Handover Success</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-emerald-escrow">
<Icon name="verified" className="text-[20px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-price-display text-price-display text-emerald-escrow">98.4%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Only <span className="text-amber-warning font-bold">6 code exceptions</span> today (&lt;0.2%)
        </p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-space-md overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"98.4%"}}></div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg relative overflow-hidden group hover:bg-surface-container transition-all">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-action-gradient-start/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Fleet Daily Earnings Disbursed</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
<Icon name="account_balance_wallet" className="text-[20px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs mb-1">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 14,820,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Paid instantly via <span className="text-mtn-yellow font-bold">MTN</span> / <span className="text-airtel-red font-bold">Airtel</span> wallets
        </p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-space-md overflow-hidden">
<div className="bg-action-gradient-start h-full rounded-full" style={{"width":"74%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">

<div className="relative flex-1 min-w-[280px]">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" id="fleetSearchInput" placeholder="Search by rider name, courier ID, stage, national ID (NIN), or plate number..." type="text" />
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="relative">
<select className="appearance-none h-11 pl-3.5 pr-9 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer hover:bg-surface-container-high transition-colors">
<option>Corridor: Kampala Central (Nakasero, Kololo, Bugolobi)</option>
<option>Corridor: Nakawa Division (Ntinda, Kyambogo, Banda)</option>
<option>Corridor: Kawempe &amp; Bwaise Hub</option>
<option>Corridor: Makindye &amp; Kansanga Route</option>
<option>Corridor: Rubaga &amp; Mengo Corridor</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" />
</div>

<div className="relative">
<select className="appearance-none h-11 pl-3.5 pr-9 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer hover:bg-surface-container-high transition-colors">
<option>Status: Active On Shift (286)</option>
<option>Status: In-Transit Delivery (142)</option>
<option>Status: Idle at Stage (118)</option>
<option>Status: On Break (26)</option>
<option>Status: Suspended / Compliance Review (7)</option>
</select>
<Icon name="filter_list" className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" />
</div>

<button className="h-11 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" title="Reset Filters" type="button">
<Icon name="restart_alt" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xl">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-lg font-bold">Courier &amp; SafeBoda ID</th>
<th className="py-space-md px-space-lg font-bold">Assigned Stage &amp; Hub</th>
<th className="py-space-md px-space-lg font-bold">Vehicle &amp; Reg Plate</th>
<th className="py-space-md px-space-lg font-bold">KYC &amp; Safety Compliance</th>
<th className="py-space-md px-space-lg font-bold">Shift Status &amp; Telemetry</th>
<th className="py-space-md px-space-lg font-bold text-center">Today's SLA</th>
<th className="py-space-md px-space-lg font-bold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">

<tr className="hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative w-11 h-11 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an African Ugandan male motorcycle courier smiling warmly with yellow SafeBoda helmet tilted back under bright daylight in Kampala city street setting." src="/images/fdf1a8ebc5e58809.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Brian Kizito</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="military_tech" className="text-[13px]" /> Gold
                      </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-code-display text-[11px] tracking-wider text-primary">#RC-8821</span>
<span>•</span>
<span className="flex items-center text-amber-warning">
<Icon name="star" className="text-[13px] fill-current" />
<strong className="ml-0.5 text-on-surface">4.92</strong>
</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">William St Stage #04</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px]">Central Business District</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">UEF 842X</span>
<Icon name="verified" className="text-emerald-escrow text-[14px]" />
</div>
<span className="text-on-surface-variant text-[11px]">Bajaj Boxer 150cc • Red</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-wrap items-center gap-1">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="security" className="text-[12px]" /> NIN Verified
                  </span>
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="badge" className="text-[12px]" /> KCCA 2025
                  </span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary font-bold">On Delivery #SC-98241</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-[11px]">
<span className="flex items-center gap-0.5"><Icon name="battery_charging_80" className="text-[13px] text-tertiary" /> 84%</span>
<span>•</span>
<span className="flex items-center gap-0.5 text-mtn-yellow"><Icon name="signal_cellular_alt" className="text-[13px]" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex flex-col items-center">
<span className="font-label-lg text-label-lg font-bold text-on-surface">14 Trips</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">100% Code Lock</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
<Icon name="visibility" className="text-[16px]" /> Telematics
                  </button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" title="Assign Emergency Dispatch" type="button">
<Icon name="emergency" className="text-[16px]" />
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-error/20 text-on-surface-variant hover:text-danger-penalty flex items-center justify-center transition-colors" title="Governance Suspension" type="button">
<Icon name="block" className="text-[16px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative w-11 h-11 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young Ugandan courier wearing a high-visibility orange courier jacket standing in front of Nakasero fresh produce market, Kampala." src="/images/54eb4fa2d05bf0aa.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Denis Mukasa</span>
<span className="px-1.5 py-0.5 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold">Silver</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-code-display text-[11px] tracking-wider text-primary">#RC-7910</span>
<span>•</span>
<span className="flex items-center text-amber-warning">
<Icon name="star" className="text-[13px] fill-current" />
<strong className="ml-0.5 text-on-surface">4.88</strong>
</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Acacia Mall Stage</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px]">Kisementi &amp; Kololo Hub</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">UEX 519P</span>
<Icon name="verified" className="text-emerald-escrow text-[14px]" />
</div>
<span className="text-on-surface-variant text-[11px]">TVS Star HLX 125cc • Black</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-wrap items-center gap-1">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="security" className="text-[12px]" /> NIN Verified
                  </span>
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="badge" className="text-[12px]" /> KCCA 2025
                  </span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface">Idle at Acacia Standby</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-[11px]">
<span className="flex items-center gap-0.5"><Icon name="battery_full" className="text-[13px] text-tertiary" /> 96%</span>
<span>•</span>
<span className="flex items-center gap-0.5 text-airtel-red"><Icon name="signal_cellular_alt" className="text-[13px]" /> Airtel 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex flex-col items-center">
<span className="font-label-lg text-label-lg font-bold text-on-surface">11 Trips</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">100% Code Lock</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
<Icon name="visibility" className="text-[16px]" /> Telematics
                  </button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" type="button">
<Icon name="emergency" className="text-[16px]" />
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-error/20 text-on-surface-variant hover:text-danger-penalty flex items-center justify-center transition-colors" type="button">
<Icon name="block" className="text-[16px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative w-11 h-11 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up portrait photo of a determined African female courier with braided hair wearing a branded helmet and dark grey work jacket standing beside her delivery bike in Ntinda Kampala." src="/images/e51a6471d968baa1.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Grace Nalubega</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="military_tech" className="text-[13px]" /> Gold
                      </span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-code-display text-[11px] tracking-wider text-primary">#RC-9042</span>
<span>•</span>
<span className="flex items-center text-amber-warning">
<Icon name="star" className="text-[13px] fill-current" />
<strong className="ml-0.5 text-on-surface">4.97</strong>
</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Nakawa Market Hub</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px]">Nakawa &amp; Kyambogo East</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">UFB 301M</span>
<Icon name="verified" className="text-emerald-escrow text-[14px]" />
</div>
<span className="text-on-surface-variant text-[11px]">Yamaha Crux 110cc • Blue</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-wrap items-center gap-1">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="security" className="text-[12px]" /> NIN Verified
                  </span>
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="badge" className="text-[12px]" /> KCCA 2025
                  </span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary font-bold">On Delivery #SC-98305</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-[11px]">
<span className="flex items-center gap-0.5"><Icon name="battery_charging_80" className="text-[13px] text-tertiary" /> 71%</span>
<span>•</span>
<span className="flex items-center gap-0.5 text-mtn-yellow"><Icon name="signal_cellular_alt" className="text-[13px]" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex flex-col items-center">
<span className="font-label-lg text-label-lg font-bold text-on-surface">18 Trips</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">100% Code Lock</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
<Icon name="visibility" className="text-[16px]" /> Telematics
                  </button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" type="button">
<Icon name="emergency" className="text-[16px]" />
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-error/20 text-on-surface-variant hover:text-danger-penalty flex items-center justify-center transition-colors" type="button">
<Icon name="block" className="text-[16px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative w-11 h-11 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photograph of a mature Ugandan courier sitting on his motorcycle in the shaded parking bay of Garden City Mall Kampala during a rest break." src="/images/9b7c2cc69a23c6d9.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-warning ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Joseph Ssekandi</span>
<span className="px-1.5 py-0.5 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold">Silver</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-code-display text-[11px] tracking-wider text-primary">#RC-6429</span>
<span>•</span>
<span className="flex items-center text-amber-warning">
<Icon name="star" className="text-[13px] fill-current" />
<strong className="ml-0.5 text-on-surface">4.76</strong>
</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Bugolobi Village Mall</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px]">Bugolobi &amp; Port Bell</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">UEY 119Q</span>
<Icon name="verified" className="text-emerald-escrow text-[14px]" />
</div>
<span className="text-on-surface-variant text-[11px]">Bajaj Boxer 150cc • Red</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-wrap items-center gap-1">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="security" className="text-[12px]" /> NIN Verified
                  </span>
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="badge" className="text-[12px]" /> KCCA 2025
                  </span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-warning"></span>
<span className="font-label-md text-label-md text-amber-warning font-semibold">On Break (Resume 14:15)</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-[11px]">
<span className="flex items-center gap-0.5"><Icon name="battery_5_bar" className="text-[13px] text-tertiary" /> 62%</span>
<span>•</span>
<span className="flex items-center gap-0.5 text-mtn-yellow"><Icon name="signal_cellular_alt" className="text-[13px]" /> MTN 3G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex flex-col items-center">
<span className="font-label-lg text-label-lg font-bold text-on-surface">8 Trips</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">100% Code Lock</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
<Icon name="visibility" className="text-[16px]" /> Telematics
                  </button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" type="button">
<Icon name="emergency" className="text-[16px]" />
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-error/20 text-on-surface-variant hover:text-danger-penalty flex items-center justify-center transition-colors" type="button">
<Icon name="block" className="text-[16px]" />
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group cursor-pointer">
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative w-11 h-11 rounded-full bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Authentic street portrait of an East African motorcycle delivery driver with safety gear and reflective bib beside traffic at Jinja Road junction, Kampala." src="/images/4ee54da1738c776f.webp" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-warning ring-2 ring-surface-container-low"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Moses Kato</span>
<span className="px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Bronze</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-code-display text-[11px] tracking-wider text-primary">#RC-5103</span>
<span>•</span>
<span className="flex items-center text-amber-warning">
<Icon name="star" className="text-[13px] fill-current" />
<strong className="ml-0.5 text-on-surface">4.52</strong>
</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Wandegeya Traffic Stage</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px]">Makerere &amp; Mulago Sector</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide">UET 418K</span>
<Icon name="info" className="text-amber-warning text-[14px]" />
</div>
<span className="text-on-surface-variant text-[11px]">Haojue 125cc • Black</span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-wrap items-center gap-1">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 font-bold">
<Icon name="security" className="text-[12px]" /> NIN Verified
                  </span>
<span className="px-2 py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<Icon name="warning" className="text-[12px]" /> Permit Renewal
                  </span>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary font-bold">On Delivery #SC-98114</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant text-[11px]">
<span className="flex items-center gap-0.5"><Icon name="battery_3_bar" className="text-[13px] text-amber-warning" /> 38%</span>
<span>•</span>
<span className="flex items-center gap-0.5 text-mtn-yellow"><Icon name="signal_cellular_alt" className="text-[13px]" /> MTN 4G</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex flex-col items-center">
<span className="font-label-lg text-label-lg font-bold text-on-surface">9 Trips</span>
<span className="font-label-sm text-label-sm text-amber-warning font-semibold">1 Manual Override</span>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="h-8 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
<Icon name="visibility" className="text-[16px]" /> Telematics
                  </button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" type="button">
<Icon name="emergency" className="text-[16px]" />
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container hover:bg-error/20 text-on-surface-variant hover:text-danger-penalty flex items-center justify-center transition-colors" type="button">
<Icon name="block" className="text-[16px]" />
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-lowest px-space-lg py-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span>Showing <strong className="text-on-surface">1 - 5</strong> of 286 active couriers</span>
<span className="hidden sm:inline">•</span>
<span className="hidden sm:inline">Kampala UTC+3 Registry</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-9 px-3 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 disabled:opacity-40" disabled={true} type="button">
<Icon name="arrow_back" className="text-[16px]" /> Prev
          </button>
<button className="h-9 w-9 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold flex items-center justify-center" type="button">1</button>
<button className="h-9 w-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center" type="button">2</button>
<button className="h-9 w-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center" type="button">3</button>
<span className="px-1 text-on-surface-variant font-label-sm text-label-sm">...</span>
<button className="h-9 w-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center" type="button">58</button>
<button className="h-9 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1" type="button">
            Next <Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>

<div aria-labelledby="slide-over-title" aria-modal="true" className="fixed inset-0 z-50 overflow-hidden hidden" id="riderDetailDrawer" role="dialog">

<div className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm transition-opacity"></div>
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
<div className="pointer-events-auto w-screen max-w-2xl bg-surface-container-low shadow-2xl flex flex-col justify-between overflow-y-auto">

<div className="p-space-xl bg-surface-container-lowest border-b-0 space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="px-space-xs py-1 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span> Live GPS Shift
              </span>
<span className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                SafeBoda Gold Tier Courier
              </span>
</div>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="flex items-start gap-space-lg pt-space-xs">
<div className="relative w-16 h-16 rounded-2xl bg-surface-container-high overflow-hidden shrink-0 shadow-md">
<img className="w-full h-full object-cover" data-alt="Close up sharp portrait photo of Brian Kizito wearing professional courier badge and orange high visibility riding vest in Kampala with warm sunlight." src="/images/405d40aa4efdda93.webp" />
<span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-escrow ring-2 ring-surface-container-low"></span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Brian Kizito</h2>
<span className="font-code-display text-code-display text-primary">#RC-8821</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 font-bold text-on-surface">
<Icon name="phone_in_talk" className="text-[15px] text-tertiary" />
                  +256 758 ••• 391 <span className="text-tertiary font-normal">(Encrypted Relay)</span>
</span>
<span>•</span>
<span>URA TIN: 1002948191</span>
<span>•</span>
<span>NIN: CM910248201KLA</span>
</div>
</div>
</div>
</div>

<div className="p-space-xl space-y-space-xl flex-1">

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
<Icon name="navigation" className="text-[16px] text-primary" />
<span>Real-Time Route Telemetry</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">1.4 km to drop-off (4 min ETA)</span>
</div>

<div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-lg">
<div className="w-full h-52 bg-cover bg-center" data-location="Kololo Terrace, Kampala, Uganda" style={{"backgroundImage":"url('/images/2f4f742c00b764f4.webp')"}}></div>

<div className="absolute bottom-3 left-3 right-3 p-space-sm rounded-xl bg-surface-dark/90 backdrop-blur-md flex items-center justify-between shadow-lg">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
<Icon name="local_shipping" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Dispatch #SC-98241</span>
<span className="text-on-surface-variant text-[11px]">En route to Plot 18, Kololo Terrace</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> OTP Escrow Locked
                  </span>
</div>
</div>
</div>
</div>

<div className="space-y-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Regulatory &amp; Safety Compliance (Valid)</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>KCCA Commercial Boda Permit</span>
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
</div>
<div className="font-label-md text-label-md text-on-surface font-bold">#KMP-BODA-2024-819</div>
<div className="text-[11px] text-tertiary font-semibold">Valid through Dec 31, 2025</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Jubilee PSV Rider Insurance</span>
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
</div>
<div className="font-label-md text-label-md text-on-surface font-bold">#JUB-88192-A</div>
<div className="text-[11px] text-tertiary font-semibold">Covers Rider + Customer Goods</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Dual DOT Helmet Inspection</span>
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
</div>
<div className="font-label-md text-label-md text-on-surface font-bold">Passed (Kampala Hub)</div>
<div className="text-[11px] text-on-surface-variant">Last verified: 12 Oct 2024</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container space-y-1">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Plate &amp; Logbook Ownership</span>
<Icon name="check_circle" className="text-emerald-escrow text-[16px]" />
</div>
<div className="font-label-md text-label-md text-on-surface font-bold">Bajaj Boxer • UEF 842X</div>
<div className="text-[11px] text-tertiary font-semibold">URA Tax Cleared 2024</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container space-y-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Today's Shift Earnings</span>
<div className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 68,000</div>
</div>
<div className="text-right">
<span className="px-2.5 py-1 rounded-full bg-mtn-yellow/20 text-mtn-yellow font-label-sm text-label-sm font-bold flex items-center gap-1 justify-end">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span> MTN MoMo Ready
                </span>
<span className="text-[11px] text-on-surface-variant block mt-1">Automatic transfer at 21:00 EAT</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-md pt-space-xs text-body-sm text-body-sm">
<div className="p-space-sm rounded-lg bg-surface-container-high">
<span className="text-on-surface-variant text-[11px] block">14 Base Deliveries</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 56,000</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high">
<span className="text-on-surface-variant text-[11px] block">Express Peak Incentive</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold whitespace-nowrap">+UGX 12,000</span>
</div>
</div>
</div>
</div>

<div className="p-space-xl bg-surface-container-lowest flex flex-col sm:flex-row items-center gap-space-md">
<button className="w-full sm:flex-1 h-[52px] rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-sm transition-all shadow-md active:scale-98" type="button">
<Icon name="chat" className="text-[20px] text-tertiary" />
<span>Direct WhatsApp Relay</span>
</button>
<button className="w-full sm:flex-1 h-[52px] rounded-xl bg-error/15 hover:bg-error/25 text-error font-label-lg text-label-lg flex items-center justify-center gap-space-sm transition-all active:scale-98" type="button">
<Icon name="gavel" className="text-[20px]" />
<span>Freeze / Suspend Rider</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-space-md" id="suspendRiderModal">
<div className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg bg-surface-container-low rounded-2xl p-space-xl shadow-2xl space-y-space-lg text-on-surface">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm text-error">
<Icon name="warning" className="text-[26px]" />
<h3 className="font-headline-sm text-headline-sm font-bold">Enforce Courier Suspension</h3>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Suspending will immediately unlink <strong className="text-on-surface" id="suspendTargetName">Brian Kizito</strong> from active stage dispatch queues and freeze pending MTN/Airtel wallet settlement until audit review.
      </p>
<div className="space-y-space-sm">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Select Violation Cause</label>
<select className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none">
<option>Late delivery handover / Stage abandonment (&gt;45 min SLA breach)</option>
<option>Customer OTP seal mismatch / Suspected package tampering</option>
<option>Traffic safety infraction reported by KCCA / Hub Marshal</option>
<option>Expired PSV Insurance or Roadworthiness certificate</option>
<option>Disputed cash balance / Manual override abuse</option>
</select>
</div>
<div className="space-y-space-sm">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Internal Audit Notes &amp; Dispatch Ref</label>
<textarea className="w-full p-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-on-surface-variant/50" placeholder="Provide incident log number, dispatch identifier, or customer support ticket ref..." rows={3}></textarea>
</div>
<div className="flex items-center justify-end gap-space-md pt-space-xs">
<button className="h-11 px-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md" type="button">
          Cancel
        </button>
<button className="h-11 px-space-lg rounded-xl bg-error hover:bg-error-container text-on-error font-label-md text-label-md font-bold transition-all shadow-md" type="button">
          Confirm Immediate Suspension
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-space-md" id="emergencyDispatchModal">
<div className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg bg-surface-container-low rounded-2xl p-space-xl shadow-2xl space-y-space-lg text-on-surface">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm text-primary">
<Icon name="emergency" className="text-[26px]" />
<h3 className="font-headline-sm text-headline-sm font-bold">Emergency Priority Dispatch</h3>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Assign high-priority stranded order to <strong className="text-on-surface" id="emergencyTargetName">Courier</strong>. This will override ordinary stage rotation.
      </p>
<div className="space-y-space-sm">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Select Stranded / High-SLA Order</label>
<select className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none">
<option className="whitespace-nowrap">#SC-98402 • Kololo to Nakasero (18 min remaining) • UGX 85,000</option>
<option className="whitespace-nowrap">#SC-98399 • Lugogo Mall to Bugolobi (Cold Chain) • UGX 140,000</option>
<option className="whitespace-nowrap">#SC-98380 • Acacia Mall to Ntinda Stage • UGX 45,000</option>
</select>
</div>
<div className="flex items-center justify-end gap-space-md pt-space-xs">
<button className="h-11 px-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md" type="button">
          Cancel
        </button>
<button className="h-11 px-space-lg rounded-xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold shadow-md" type="button">
          Push Dispatch to Driver
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-space-md" id="newRiderModal">
<div className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-2xl bg-surface-container-low rounded-2xl p-space-xl shadow-2xl space-y-space-lg text-on-surface max-h-[921px] overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm font-bold">Onboard New Kampala Boda Courier</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">KYC verification, SafeBoda stage registration, and telemetry setup.</p>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Full Legal Name (NIRA NIN)</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="e.g. Sula Mukisa" type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Primary Phone (MoMo Registered)</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="0772 ••• •••" type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Motorcycle Registration Plate</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="e.g. UFG 912K" type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Boda Stage Hub Assignment</label>
<select className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none">
<option>William St Stage #04 (Central)</option>
<option>Acacia Mall Standby Stage</option>
<option>Nakawa Market Logistics Point</option>
<option>Garden City Hub Stage</option>
<option>Bugolobi Village Stage</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">National NIN Number</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="CM..." type="text" />
</div>
<div className="space-y-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">KCCA Commercial Permit No.</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="KMP-BODA-2025-..." type="text" />
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container space-y-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Hardware &amp; Safety Compliance Check</span>
<div className="grid grid-cols-2 gap-space-sm pt-1">
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container bg-surface-container-high" type="checkbox" /> Dual SafeBoda Helmets
          </label>
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container bg-surface-container-high" type="checkbox" /> Reflective Jacket &amp; ID
          </label>
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container bg-surface-container-high" type="checkbox" /> Smartphone Telemetry Active
          </label>
<label className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm cursor-pointer">
<input checked={true} className="w-4 h-4 rounded text-primary-container bg-surface-container-high" type="checkbox" /> PSV Insurance Attached
          </label>
</div>
</div>
<div className="flex items-center justify-end gap-space-md pt-space-xs">
<button className="h-11 px-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md" type="button">
          Cancel
        </button>
<button className="h-11 px-space-lg rounded-xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md font-bold shadow-md" type="button">
          Verify &amp; Generate Courier ID
        </button>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
};

export default Desktop;
