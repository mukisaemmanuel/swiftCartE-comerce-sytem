// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_station_command_overview_tablet/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      
      <main className="w-full pt-28 px-margin pb-space-xl flex-1 bg-surface-dim"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md mb-space-md">
<div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-emerald-escrow/5 blur-2xl pointer-events-none"></div>
<div className="flex flex-wrap items-center justify-between gap-space-sm relative z-10">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow -ml-3"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-escrow font-bold">100% Mesh Connected</span>
</div>
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface">
<Icon name="hub" className="text-secondary text-[18px]" />
<span className="font-bold">William St Central Hub</span>
<span className="text-on-surface-variant font-mono text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high">KLA-HUB-03</span>
</div>
<span className="text-outline-variant hidden md:inline">|</span>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<Icon name="schedule" className="text-amber-warning text-[16px]" />
<span>Shift: <strong className="text-on-surface">Morning/Afternoon Rush (06:00 - 15:00 EAT)</strong></span>
</div>
</div>
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<Icon name="supervisor_account" className="text-secondary text-[16px]" />
<span>Duty: <span className="text-secondary font-bold">Brenda Kyomugisha</span></span>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-mono">
<Icon name="lock" className="text-[14px]" />
<span>Stanbic BoU Core: 18ms</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

<div className="flex flex-col justify-between p-space-md rounded-xl bg-container-dark-low shadow-sm">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Inbound Volume</span>
<span className="p-1 rounded-lg bg-surface-container text-tertiary">
<Icon name="archive" className="text-[20px]" />
</span>
</div>
<div className="my-space-xs">
<div className="font-price-display text-price-display text-on-surface flex items-baseline gap-space-xs">
<span>1,420</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">parcels</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary mt-0.5">
<Icon name="trending_up" className="text-[14px]" />
<span className="font-bold">+14.2%</span>
<span className="text-on-surface-variant font-normal">vs yesterday</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Intake SLA</span>
<span className="text-emerald-escrow font-bold">98.6% On-time</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-container-dark-low shadow-sm">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Bay Occupancy</span>
<span className="p-1 rounded-lg bg-surface-container text-amber-warning">
<Icon name="grid_view" className="text-[20px]" />
</span>
</div>
<div className="my-space-xs">
<div className="font-price-display text-price-display text-amber-warning flex items-baseline gap-space-xs">
<span>78%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">capacity</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>12 Active / 3 Free</span>
<span className="text-on-surface font-bold">312 Staged</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-container-dark-low shadow-sm">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Outbound Couriers</span>
<span className="p-1 rounded-lg bg-surface-container text-secondary">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
</div>
<div className="my-space-xs">
<div className="font-price-display text-price-display text-on-surface flex items-baseline gap-space-xs">
<span>840</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">dispatched</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-secondary-fixed mt-0.5">
<Icon name="local_shipping" className="text-[14px]" />
<span className="font-bold">64 Active SafeBoda</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Window Dispatch</span>
<span className="text-tertiary font-bold">Average 2.8 min</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-container-dark-low shadow-sm">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Quarantine Holds</span>
<span className="p-1 rounded-lg bg-error/15 text-danger-penalty">
<Icon name="security" className="text-[20px]" />
</span>
</div>
<div className="my-space-xs">
<div className="font-price-display text-price-display text-danger-penalty flex items-baseline gap-space-xs">
<span>14</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">locked</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 truncate">
<span>Escrow Frozen: </span>
<span className="text-danger-penalty font-mono font-bold whitespace-nowrap">UGX 3.42M</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Bay D1/D2 Isolated</span>
<span className="text-amber-warning font-bold">Action Req.</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="flex flex-col sm:flex-row items-stretch gap-space-sm">
<button className="flex-1 h-[52px] px-space-md rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-transform" id="barcodeScannerBtn">
<Icon name="qr_code_scanner" className="text-[22px]" />
<span>Open Rapid Barcode Scanner (F2)</span>
</button>
<button className="h-[52px] px-space-md rounded-2xl bg-container-dark-high text-on-surface font-label-md text-label-md hover:bg-surface-variant flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform">
<Icon name="add_box" className="text-[20px] text-primary" />
<span className="whitespace-nowrap">Stage Bag</span>
</button>
<button className="h-[52px] px-space-md rounded-2xl bg-container-dark-high text-on-surface font-label-md text-label-md hover:bg-surface-variant flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform">
<Icon name="print" className="text-[20px] text-secondary" />
<span className="whitespace-nowrap">Print Slips</span>
</button>
</div>

<div className="rounded-2xl bg-surface-container-low p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="move_to_inbox" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Active Inbound Bags</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-tertiary font-mono">3 In Receiving</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-on-surface font-mono">#CB-KLA-9921</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">TAMPER OK</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Pioneer Mall Merchant Cluster • Tag <span className="font-mono text-secondary">#TS-8821</span>
</div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="check_circle" className="text-[14px] text-tertiary" />
<span>De-manifesting (19 / 24 scanned)</span>
<span className="text-outline">•</span>
<span className="text-on-surface">Agent Okello</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-tertiary font-mono">24 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all">Resume</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"79%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-on-surface font-mono">#CB-NTD-4410</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">QUEUED</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Ntinda Drop Station • Rider Mukasa Brian (Bajaj UEF 842X)
                  </div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-on-surface-variant">
<Icon name="history" className="text-[14px]" />
<span>Dropped 4 mins ago at Bay Inbound #02</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-on-surface font-mono">18 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-primary/20 text-primary-fixed-dim font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">Begin Scan</button>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-error/15 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="warning" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-danger-penalty font-mono">#CB-KIK-1104</span>
<span className="px-space-xs py-0.5 rounded bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">SEAL BROKEN</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Kikuubo Wholesale Center • Security Alert Required
                  </div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-danger-penalty">
<Icon name="lock_open" className="text-[14px]" />
<span>1 torn tamper seal; move to quarantine table before count</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-danger-penalty font-mono">32 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm hover:bg-danger-penalty hover:text-on-error transition-all font-bold">Quarantine</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Interactive Bay Staging Grid</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tap a staging cell to inspect parcel queue or reallocate bay capacity</p>
</div>
<div className="flex items-center gap-space-sm text-label-sm font-label-sm">
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-emerald-escrow"></span> Express</span>
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-secondary"></span> Metro</span>
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-primary"></span> Regional</span>
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-danger-penalty"></span> Quarantine</span>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="font-bold text-tertiary">ZONE A: Kololo &amp; Nakasero Express (High Velocity)</span>
<span className="font-mono text-tertiary font-bold">88 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-tertiary text-label-md font-label-md">Bay A1</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">34</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Acacia Mall P2P</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-tertiary text-label-md font-label-md">Bay A2</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">28</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wampewo Ave</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-tertiary text-label-md font-label-md">Bay A3</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">26</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Nakasero Hill</span>
</button>
<div className="p-space-sm rounded-xl bg-surface-container/50 text-left opacity-60">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-on-surface-variant text-label-md font-label-md">Bay A4</span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface-variant mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="font-bold text-secondary">ZONE B: Kampala Central &amp; Pioneer Mall</span>
<span className="font-mono text-secondary font-bold">64 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B1</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">22</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Luwum St Route</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B2</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">25</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">William St Node</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B3</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">17</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Pioneer Arcades</span>
</button>
<div className="p-space-sm rounded-xl bg-surface-container/50 text-left opacity-60">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-on-surface-variant text-label-md font-label-md">Bay B4</span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface-variant mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="font-bold text-primary">ZONE C: Entebbe Express &amp; Regional Line-Haul</span>
<span className="font-mono text-primary font-bold">42 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C1</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">18</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Entebbe Airport</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C2</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">14</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Jinja Line-Haul</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-container-dark-high text-left hover:bg-surface-variant transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C3</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface mt-1 font-mono">10</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Mbarara Cargo</span>
</button>
<div className="p-space-sm rounded-xl bg-surface-container/50 text-left opacity-60">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-on-surface-variant text-label-md font-label-md">Bay C4</span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface-variant mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span className="font-bold text-danger-penalty">ZONE D: Quarantine &amp; Dispute Evidence Vault (Locked)</span>
<span className="font-mono text-danger-penalty font-bold">14 Parcels Frozen</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-danger-penalty/10 text-left hover:bg-danger-penalty/20 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-danger-penalty text-label-md font-label-md">Bay D1</span>
<Icon name="lock" className="text-danger-penalty text-[14px]" />
</div>
<div className="font-headline-sm text-headline-sm text-danger-penalty mt-1 font-mono">09</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Damaged Packaging</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-danger-penalty/10 text-left hover:bg-danger-penalty/20 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-danger-penalty text-label-md font-label-md">Bay D2</span>
<Icon name="lock" className="text-danger-penalty text-[14px]" />
</div>
<div className="font-headline-sm text-headline-sm text-danger-penalty mt-1 font-mono">05</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Buyer Claim Holds</span>
</button>
<div className="p-space-sm rounded-xl bg-surface-container/50 text-left opacity-60">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-on-surface-variant text-label-md font-label-md">Bay D3</span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface-variant mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Vault Overflow</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container/50 text-left opacity-60">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-on-surface-variant text-label-md font-label-md">Bay D4</span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface-variant mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Vault Overflow</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="rounded-2xl bg-surface-container-low p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="sports_motorsports" className="text-secondary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Rider Dispatch Dock</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-mono">Bays Active</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary font-mono text-label-md">MB</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Mukasa Brian</div>
<div className="font-label-sm text-label-sm text-secondary font-mono">Bajaj Boxer • UEF 842X</div>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">Window 02 Ready</span>
</div>
<div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-on-surface-variant">
<span>Waiting: <strong className="text-on-surface">4 Kololo Express Parcels</strong></span>
<button className="px-space-sm py-1.5 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-sm text-label-sm font-bold active:scale-95 transition-transform shadow-[0_2px_10px_rgba(218,55,0,0.25)]">
                Scan Handover
              </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary font-mono text-label-md">KR</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Kato Ronald</div>
<div className="font-label-sm text-label-sm text-secondary font-mono">Bajaj Boxer • UDF 319P</div>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-amber-warning/10 text-amber-warning font-label-sm text-label-sm font-bold">Verifying OTP</span>
</div>
<div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-on-surface-variant">
<span>Assigned: <strong className="text-on-surface font-mono">Bag #CB-KLA-9940</strong> (6 Items)</span>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-variant font-bold">
                Verify Dispatch
              </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant font-mono text-label-md">SJ</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Ssewankambo John</div>
<div className="font-label-sm text-label-sm text-secondary font-mono">TVS HLX • UEN 102M</div>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-tertiary-fixed-dim font-label-sm text-label-sm font-mono flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> ETA 6 mins
              </span>
</div>
<div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-on-surface-variant">
<span>Approaching via Entebbe Rd</span>
<span className="font-mono text-on-surface font-semibold">Staging Bay A2 Prep</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="local_shipping" className="text-tertiary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Regional Line-Haul Dispatches</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-secondary font-mono">Heavy Freight</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-container-dark-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface font-bold">
<span className="text-tertiary font-mono">#LH-04</span>
<span>Jinja / Iganga / Mbale</span>
</div>
<div className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold font-mono">
<Icon name="alarm" className="text-[14px]" />
<span>DEP IN 42 MIN</span>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Gate 01 Loading Dock</span>
<span className="text-on-surface font-mono font-bold">142 Parcels Manifested</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full rounded-full" style={{"width":"88%"}}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-0.5">
<span className="text-on-surface-variant">Manifest Lock: 92% Complete</span>
<button className="text-primary font-bold hover:underline">Seal Manifest</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface font-bold">
<span className="text-secondary font-mono">#LH-02</span>
<span>Mbarara / Masaka Western Line</span>
</div>
<div className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-secondary-container text-secondary-fixed font-label-sm text-label-sm font-bold font-mono">
<Icon name="sync" className="text-[14px]" />
<span>LOADING GATE 02</span>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Departure: 14:45 EAT</span>
<span className="text-on-surface font-mono font-bold">88 Parcels Manifested</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{"width":"54%"}}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-0.5">
<span className="text-on-surface-variant">Weight Verified: 412 kg</span>
<button className="text-secondary font-bold hover:underline">Inspect Manifest</button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Node Telemetry &amp; Custody</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-xl bg-container-dark-low">
<div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant">
<Icon name="assured_workload" className="text-emerald-escrow text-[16px]" />
<span>Platform Escrow</span>
</div>
<div className="font-headline-sm text-body-lg text-emerald-escrow font-bold font-mono mt-1 truncate whitespace-nowrap">
              UGX 198.4M
            </div>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Bank of Uganda Locked</span>
</div>
<div className="p-space-sm rounded-xl bg-container-dark-low">
<div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant">
<Icon name="battery_charging_full" className="text-amber-warning text-[16px]" />
<span>Hub UPS System</span>
</div>
<div className="font-headline-sm text-body-lg text-on-surface font-bold font-mono mt-1">
              99% Backed
            </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Grid Stable (4.2 hrs run)</span>
</div>
</div>

<div className="mt-space-sm p-space-xs bg-surface-container rounded-lg flex items-center justify-between px-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="shield" className="text-secondary text-[14px]" />
<span>Blind OTP Verification Active</span>
</span>
<span className="font-mono text-label-sm text-label-sm text-secondary font-bold">100% PROTOCOL</span>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-surface-dark/80 backdrop-blur-md hidden items-center justify-center p-space-md" id="scanModal">
<div className="w-full max-w-lg bg-container-dark-high rounded-2xl p-space-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-3 h-3 rounded-full bg-emerald-escrow animate-ping"></div>
<h3 className="font-headline-md text-headline-md text-on-surface">Laser &amp; Optical Hub Scanner</h3>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant" id="closeScanModal">
<Icon name="close" className="text-[24px]" />
</button>
</div>
<div className="relative w-full h-56 rounded-xl bg-surface-dark overflow-hidden flex flex-col items-center justify-center text-center p-space-md">

<div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-action-gradient-start to-transparent animate-pulse shadow-[0_0_12px_#DA3700]" style={{"animation":"scanMove 2s infinite ease-in-out"}}></div>
<Icon name="barcode_scanner" className="text-[56px] text-primary/40 mb-2" />
<div className="font-headline-sm text-body-lg text-on-surface font-mono">AIM AT SWIFTCART WAYBILL OR BAG TAG</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Accepts Code128, QR Code &amp; NFC Escrow Rings</div>
<div className="mt-4 px-space-md py-1.5 rounded-lg bg-surface-container font-mono text-label-sm text-secondary font-bold">
          CAMERA SENSOR ACTIVE: 60FPS LOW-LIGHT
        </div>
</div>
<div className="mt-space-md flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm">
<input className="flex-1 px-space-md py-3 rounded-xl bg-surface-dark text-on-surface font-mono text-label-md placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Or enter 12-digit Waybill (e.g. SC-8821-49)" type="text" />
<button className="px-space-md py-3 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-bold">
            Lookup
          </button>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant px-1">
<span>Target Destination: <strong>Auto-sort to Bay Staging</strong></span>
<span className="text-tertiary">Audio Beeper: ON</span>
</div>
</div>
</div>
</div>



</div></main>
<footer className="w-full bg-surface-container-lowest shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-outline-variant hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[16px]" /><span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-bold">Bank of Uganda Escrow Custody Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant"><span className="font-mono">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-surface-container font-mono text-secondary">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
