// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_station_command_overview_tablet_light_2/code.html
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
      
      <main className="w-full pt-28 px-margin pb-space-xl flex-1 bg-background"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden rounded-xl bg-white p-space-md shadow-sm border border-slate-200 mb-space-md">
<div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"></div>
<div className="flex flex-wrap items-center justify-between gap-space-sm relative z-10">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-md bg-emerald-50 border border-emerald-100">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow -ml-3"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-escrow font-bold">100% Mesh Connected</span>
</div>
<div className="flex items-center gap-space-xs font-label-md text-label-md text-slate-900">
<Icon name="hub" className="text-secondary text-[18px]" />
<span className="font-bold">William St Central Hub</span>
<span className="text-slate-600 font-mono text-label-sm px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">KLA-HUB-03</span>
</div>
<span className="text-slate-300 hidden md:inline">|</span>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-slate-600">
<Icon name="schedule" className="text-amber-warning text-[16px]" />
<span>Shift: <strong className="text-slate-900">Morning/Afternoon Rush (06:00 - 15:00 EAT)</strong></span>
</div>
</div>
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-slate-600">
<Icon name="supervisor_account" className="text-secondary text-[16px]" />
<span>Duty: <span className="text-secondary font-bold">Brenda Kyomugisha</span></span>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-emerald-50 text-emerald-escrow border border-emerald-200 font-mono font-semibold">
<Icon name="lock" className="text-[14px]" />
<span>Pesapal Pesapal Core: 18ms</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg"><div className="flex flex-col justify-between p-space-md rounded-xl bg-white border border-slate-200 shadow-sm"><div className="flex items-start justify-between"><span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">Inbound Volume</span><span className="p-1 rounded-lg bg-emerald-50 text-emerald-escrow"><Icon name="archive" className="text-[20px]" /></span></div><div className="my-space-xs"><div className="font-price-display text-price-display text-slate-900 flex items-baseline gap-space-xs"><span>1,420</span><span className="font-label-sm text-label-sm text-slate-500 font-normal">parcels</span></div><div className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-600 mt-0.5"><Icon name="trending_up" className="text-[14px]" /><span className="font-bold">+14.2%</span><span className="text-slate-500 font-normal">vs yesterday</span></div></div><div className="pt-space-xs flex items-center justify-between text-slate-500 font-label-sm text-label-sm border-t border-slate-100"><span>Intake SLA</span><span className="text-emerald-escrow font-bold">98.6% On-time</span></div></div><div className="flex flex-col justify-between p-space-md rounded-xl bg-white border border-slate-200 shadow-sm"><div className="flex items-start justify-between"><span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">Bay Occupancy</span><span className="p-1 rounded-lg bg-amber-50 text-amber-warning"><Icon name="grid_view" className="text-[20px]" /></span></div><div className="my-space-xs"><div className="font-price-display text-price-display text-amber-warning flex items-baseline gap-space-xs"><span>78%</span><span className="font-label-sm text-label-sm text-slate-500 font-normal">capacity</span></div><div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"><div className="bg-amber-warning h-full rounded-full" style={{"width":"78%"}}></div></div></div><div className="pt-space-xs flex items-center justify-between text-slate-500 font-label-sm text-label-sm border-t border-slate-100"><span>12 Active / 3 Free</span><span className="text-slate-900 font-bold">312 Staged</span></div></div><div className="flex flex-col justify-between p-space-md rounded-xl bg-white border border-slate-200 shadow-sm"><div className="flex items-start justify-between"><span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">Outbound Couriers</span><span className="p-1 rounded-lg bg-indigo-50 text-secondary"><Icon name="two_wheeler" className="text-[20px]" /></span></div><div className="my-space-xs"><div className="font-price-display text-price-display text-slate-900 flex items-baseline gap-space-xs"><span>840</span><span className="font-label-sm text-label-sm text-slate-500 font-normal">dispatched</span></div><div className="flex items-center gap-1 font-label-sm text-label-sm text-secondary mt-0.5"><Icon name="local_shipping" className="text-[14px]" /><span className="font-bold">64 Active SafeBoda</span></div></div><div className="pt-space-xs flex items-center justify-between text-slate-500 font-label-sm text-label-sm border-t border-slate-100"><span>Window Dispatch</span><span className="text-emerald-escrow font-bold">Average 2.8 min</span></div></div><div className="flex flex-col justify-between p-space-md rounded-xl bg-white border border-slate-200 shadow-sm"><div className="flex items-start justify-between"><span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">Quarantine Holds</span><span className="p-1 rounded-lg bg-red-50 text-danger-penalty"><Icon name="security" className="text-[20px]" /></span></div><div className="my-space-xs"><div className="font-price-display text-price-display text-danger-penalty flex items-baseline gap-space-xs"><span>14</span><span className="font-label-sm text-label-sm text-slate-500 font-normal">locked</span></div><div className="font-label-sm text-label-sm text-slate-500 mt-0.5 truncate"><span>payment frozen: </span><span className="text-danger-penalty font-mono font-bold whitespace-nowrap">UGX 3.42M</span></div></div><div className="pt-space-xs flex items-center justify-between text-slate-500 font-label-sm text-label-sm border-t border-slate-100"><span>Bay D1/D2 Isolated</span><span className="text-amber-warning font-bold">Action Req.</span></div></div></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="flex flex-col sm:flex-row items-stretch gap-space-sm">
<button className="flex-1 h-[52px] px-space-md rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.25)] hover:brightness-105 active:scale-[0.98] transition-all" id="barcodeScannerBtn">
<Icon name="qr_code_scanner" className="text-[22px]" />
<span>Open Rapid Barcode Scanner (F2)</span>
</button>
<button className="h-[52px] px-space-md rounded-2xl bg-white border border-slate-200 text-slate-800 font-label-md text-label-md hover:bg-slate-50 flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform">
<Icon name="add_box" className="text-[20px] text-primary" />
<span className="whitespace-nowrap">Stage Bag</span>
</button>
<button className="h-[52px] px-space-md rounded-2xl bg-white border border-slate-200 text-slate-800 font-label-md text-label-md hover:bg-slate-50 flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform">
<Icon name="print" className="text-[20px] text-secondary" />
<span className="whitespace-nowrap">Print Slips</span>
</button>
</div>

<div className="rounded-2xl bg-white border border-slate-200 p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="move_to_inbox" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-slate-900 tracking-tight">Active Inbound Bags</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-50 text-emerald-escrow border border-emerald-200 font-mono font-bold">3 In Receiving</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 hover:bg-slate-100/70 transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-slate-900 font-mono">#CB-KLA-9921</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">TAMPER OK</span>
</div>
<div className="font-body-sm text-body-sm text-slate-600 mt-0.5">
                    Pioneer Mall Merchant Cluster • Tag <span className="font-mono text-secondary font-semibold">#TS-8821</span>
</div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-slate-500">
<Icon name="check_circle" className="text-[14px] text-emerald-600" />
<span>De-manifesting (19 / 24 scanned)</span>
<span className="text-slate-300">•</span>
<span className="text-slate-800 font-semibold">Agent Okello</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-emerald-600 font-mono font-bold">24 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-label-sm text-label-sm hover:bg-primary hover:text-white hover:border-primary transition-all font-semibold shadow-xs">Resume</button>
</div>
</div>
</div>

<div className="w-full bg-slate-200 h-1.5 rounded-full mt-space-sm overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{"width":"79%"}}></div>
</div>
</div>

<div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 hover:bg-slate-100/70 transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-secondary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-slate-900 font-mono">#CB-NTD-4410</span>
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-semibold">QUEUED</span>
</div>
<div className="font-body-sm text-body-sm text-slate-600 mt-0.5">
                    Ntinda Drop Station • Rider Mukasa Brian (Bajaj UEF 842X)
                  </div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-slate-500">
<Icon name="history" className="text-[14px]" />
<span>Dropped 4 mins ago at Bay Inbound #02</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-slate-900 font-mono font-bold">18 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary hover:text-white transition-all font-bold">Begin Scan</button>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-red-50/60 border border-red-200 hover:bg-red-50 transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-red-100 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="warning" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-body-lg font-bold text-danger-penalty font-mono">#CB-KIK-1104</span>
<span className="px-space-xs py-0.5 rounded bg-red-200/70 text-danger-penalty font-label-sm text-label-sm font-bold">SEAL BROKEN</span>
</div>
<div className="font-body-sm text-body-sm text-slate-600 mt-0.5">
                    Kikuubo Wholesale Center • Security Alert Required
                  </div>
<div className="flex items-center gap-space-xs mt-1.5 font-label-sm text-label-sm text-danger-penalty">
<Icon name="lock_open" className="text-[14px]" />
<span>1 torn package seal; move to quarantine table before count</span>
</div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-headline-sm text-body-lg text-danger-penalty font-mono font-bold">32 Pcs</span>
<div className="mt-1">
<button className="px-space-sm py-1 rounded-lg bg-danger-penalty text-white font-label-sm text-label-sm hover:bg-red-700 transition-all font-bold shadow-xs">Quarantine</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-200 p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 tracking-tight">Interactive Bay Staging Grid</h3>
<p className="font-body-sm text-body-sm text-slate-500">Tap a staging cell to inspect parcel queue or reallocate bay capacity</p>
</div>
<div className="flex items-center gap-space-sm text-label-sm font-label-sm">
<span className="flex items-center gap-1 text-slate-600"><span className="w-2.5 h-2.5 rounded bg-emerald-escrow"></span> Express</span>
<span className="flex items-center gap-1 text-slate-600"><span className="w-2.5 h-2.5 rounded bg-secondary"></span> Metro</span>
<span className="flex items-center gap-1 text-slate-600"><span className="w-2.5 h-2.5 rounded bg-primary"></span> Regional</span>
<span className="flex items-center gap-1 text-slate-600"><span className="w-2.5 h-2.5 rounded bg-danger-penalty"></span> Quarantine</span>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-slate-600">
<span className="font-bold text-emerald-700">ZONE A: Kololo &amp; Nakasero Express (High Velocity)</span>
<span className="font-mono text-emerald-700 font-bold">88 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-emerald-700 text-label-md font-label-md">Bay A1</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">34</div>
<span className="font-label-sm text-label-sm text-slate-500">Acacia Mall P2P</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-emerald-700 text-label-md font-label-md">Bay A2</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">28</div>
<span className="font-label-sm text-label-sm text-slate-500">Wampewo Ave</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-emerald-700 text-label-md font-label-md">Bay A3</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">26</div>
<span className="font-label-sm text-label-sm text-slate-500">Nakasero Hill</span>
</button>
<div className="p-space-sm rounded-xl bg-slate-100/60 border border-dashed border-slate-200 text-left opacity-75">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-slate-400 text-label-md font-label-md">Bay A4</span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-400 mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-slate-400">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-slate-600">
<span className="font-bold text-secondary">ZONE B: Kampala Central &amp; Pioneer Mall</span>
<span className="font-mono text-secondary font-bold">64 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B1</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">22</div>
<span className="font-label-sm text-label-sm text-slate-500">Luwum St Route</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B2</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">25</div>
<span className="font-label-sm text-label-sm text-slate-500">William St Node</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-secondary text-label-md font-label-md">Bay B3</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">17</div>
<span className="font-label-sm text-label-sm text-slate-500">Pioneer Arcades</span>
</button>
<div className="p-space-sm rounded-xl bg-slate-100/60 border border-dashed border-slate-200 text-left opacity-75">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-slate-400 text-label-md font-label-md">Bay B4</span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-400 mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-slate-400">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-slate-600">
<span className="font-bold text-primary">ZONE C: Entebbe Express &amp; Regional Line-Haul</span>
<span className="font-mono text-primary font-bold">42 Parcels Staged</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C1</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">18</div>
<span className="font-label-sm text-label-sm text-slate-500">Entebbe Airport</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C2</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">14</div>
<span className="font-label-sm text-label-sm text-slate-500">Jinja Line-Haul</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-slate-50 border border-slate-200 text-left hover:bg-slate-100 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-primary text-label-md font-label-md">Bay C3</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-900 mt-1 font-mono font-bold">10</div>
<span className="font-label-sm text-label-sm text-slate-500">Mbarara Cargo</span>
</button>
<div className="p-space-sm rounded-xl bg-slate-100/60 border border-dashed border-slate-200 text-left opacity-75">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-slate-400 text-label-md font-label-md">Bay C4</span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-400 mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-slate-400">Clear / Standby</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-label-sm font-label-sm text-slate-600">
<span className="font-bold text-danger-penalty">ZONE D: Quarantine &amp; Dispute Evidence reserve (Locked)</span>
<span className="font-mono text-danger-penalty font-bold">14 Parcels Frozen</span>
</div>
<div className="grid grid-cols-4 gap-space-xs">
<button className="bay-cell p-space-sm rounded-xl bg-red-50/70 border border-red-200 text-left hover:bg-red-100/70 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-danger-penalty text-label-md font-label-md">Bay D1</span>
<Icon name="lock" className="text-danger-penalty text-[14px]" />
</div>
<div className="font-headline-sm text-headline-sm text-danger-penalty mt-1 font-mono font-bold">09</div>
<span className="font-label-sm text-label-sm text-slate-500">Damaged Packaging</span>
</button>
<button className="bay-cell p-space-sm rounded-xl bg-red-50/70 border border-red-200 text-left hover:bg-red-100/70 transition-all cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-danger-penalty text-label-md font-label-md">Bay D2</span>
<Icon name="lock" className="text-danger-penalty text-[14px]" />
</div>
<div className="font-headline-sm text-headline-sm text-danger-penalty mt-1 font-mono font-bold">05</div>
<span className="font-label-sm text-label-sm text-slate-500">Buyer Claim Holds</span>
</button>
<div className="p-space-sm rounded-xl bg-slate-100/60 border border-dashed border-slate-200 text-left opacity-75">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-slate-400 text-label-md font-label-md">Bay D3</span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-400 mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-slate-400">reserve Overflow</span>
</div>
<div className="p-space-sm rounded-xl bg-slate-100/60 border border-dashed border-slate-200 text-left opacity-75">
<div className="flex items-center justify-between">
<span className="font-mono font-bold text-slate-400 text-label-md font-label-md">Bay D4</span>
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
</div>
<div className="font-headline-sm text-headline-sm text-slate-400 mt-1 font-mono">00</div>
<span className="font-label-sm text-label-sm text-slate-400">reserve Overflow</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg"><div className="rounded-2xl bg-white border border-slate-200 p-space-md shadow-sm"><div className="flex items-center justify-between mb-space-md"><div className="flex items-center gap-space-xs"><Icon name="sports_motorsports" className="text-secondary text-[22px]" /><h3 className="font-headline-sm text-headline-sm text-slate-900 tracking-tight">Rider Dispatch Dock</h3></div><span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold border border-slate-200">Bays Active</span></div><div className="flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 hover:bg-slate-100/70 transition-colors"><div className="flex items-center justify-between mb-2"><div className="flex items-center gap-space-sm"><div className="w-9 h-9 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center font-bold text-primary font-mono text-label-md">MB</div><div><div className="font-label-lg text-label-lg text-slate-900">Mukasa Brian</div><div className="font-label-sm text-label-sm text-secondary font-mono font-semibold">Bajaj Boxer • UEF 842X</div></div></div><span className="px-space-xs py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Window 02 Ready</span></div><div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-slate-500 border-t border-slate-200"><span>Waiting: <strong className="text-slate-900">4 Kololo Express Parcels</strong></span><button className="px-space-sm py-1.5 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-sm text-label-sm font-bold active:scale-95 transition-transform shadow-sm">Scan Handover</button></div></div><div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 hover:bg-slate-100/70 transition-colors"><div className="flex items-center justify-between mb-2"><div className="flex items-center gap-space-sm"><div className="w-9 h-9 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center font-bold text-secondary font-mono text-label-md">KR</div><div><div className="font-label-lg text-label-lg text-slate-900">Kato Ronald</div><div className="font-label-sm text-label-sm text-secondary font-mono font-semibold">Bajaj Boxer • UDF 319P</div></div></div><span className="px-space-xs py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold">Verifying OTP</span></div><div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-slate-500 border-t border-slate-200"><span>Assigned: <strong className="text-slate-900 font-mono">Bag #CB-KLA-9940</strong> (6 Items)</span><button className="px-space-sm py-1.5 rounded-lg bg-white text-slate-800 font-label-sm text-label-sm hover:bg-slate-100 font-bold border border-slate-200 shadow-xs">Verify Dispatch</button></div></div><div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 hover:bg-slate-100/70 transition-colors"><div className="flex items-center justify-between mb-2"><div className="flex items-center gap-space-sm"><div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 font-mono text-label-md border border-slate-300">SJ</div><div><div className="font-label-lg text-label-lg text-slate-900">Ssewankambo John</div><div className="font-label-sm text-label-sm text-secondary font-mono font-semibold">TVS HLX • UEN 102M</div></div></div><span className="px-space-xs py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-mono font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-pulse"></span> ETA 6 mins</span></div><div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-slate-500 border-t border-slate-200"><span>Approaching via Entebbe Rd</span><span className="font-mono text-slate-800 font-semibold">Staging Bay A2 Prep</span></div></div></div></div><div className="rounded-2xl bg-white border border-slate-200 p-space-md shadow-sm"><div className="flex items-center justify-between mb-space-md"><div className="flex items-center gap-space-xs"><Icon name="local_shipping" className="text-tertiary text-[22px]" /><h3 className="font-headline-sm text-headline-sm text-slate-900 tracking-tight">Regional Line-Haul Dispatches</h3></div><span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-indigo-50 border border-indigo-200 text-secondary font-mono font-bold">Heavy Freight</span></div><div className="flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col gap-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs font-label-md text-label-md text-slate-900 font-bold"><span className="text-tertiary font-mono">#LH-04</span><span>Jinja / Iganga / Mbale</span></div><div className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold font-mono"><Icon name="alarm" className="text-[14px]" /><span>DEP IN 42 MIN</span></div></div><div className="flex items-center justify-between font-label-sm text-label-sm text-slate-500"><span>Gate 01 Loading Dock</span><span className="text-slate-900 font-mono font-bold">142 Parcels Manifested</span></div><div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-1"><div className="bg-emerald-600 h-full rounded-full" style={{"width":"88%"}}></div></div><div className="flex items-center justify-between font-label-sm text-label-sm pt-0.5"><span className="text-slate-500">Manifest Lock: 92% Complete</span><button className="text-primary font-bold hover:underline">Seal Manifest</button></div></div><div className="p-space-md rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col gap-space-xs"><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs font-label-md text-label-md text-slate-900 font-bold"><span className="text-secondary font-mono">#LH-02</span><span>Mbarara / Masaka Western Line</span></div><div className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-indigo-100 text-secondary font-label-sm text-label-sm font-bold font-mono"><Icon name="sync" className="text-[14px]" /><span>LOADING GATE 02</span></div></div><div className="flex items-center justify-between font-label-sm text-label-sm text-slate-500"><span>Departure: 14:45 EAT</span><span className="text-slate-900 font-mono font-bold">88 Parcels Manifested</span></div><div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-1"><div className="bg-secondary h-full rounded-full" style={{"width":"54%"}}></div></div><div className="flex items-center justify-between font-label-sm text-label-sm pt-0.5"><span className="text-slate-500">Weight Verified: 412 kg</span><button className="text-secondary font-bold hover:underline">Inspect Manifest</button></div></div></div></div><div className="rounded-2xl bg-white border border-slate-200 p-space-md shadow-sm"><div className="flex items-center justify-between mb-space-sm"><span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">Node Telemetry &amp; holding</span><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span></div><div className="grid grid-cols-2 gap-space-sm"><div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200"><div className="flex items-center gap-1 text-label-sm font-label-sm text-slate-600"><Icon name="assured_workload" className="text-emerald-escrow text-[16px]" /><span>Platform Payment</span></div><div className="font-headline-sm text-body-lg text-emerald-700 font-bold font-mono mt-1 truncate whitespace-nowrap">UGX 198.4M</div><span className="font-label-sm text-label-sm text-emerald-600 font-medium">Pesapal Locked</span></div><div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200"><div className="flex items-center gap-1 text-label-sm font-label-sm text-slate-600"><Icon name="battery_charging_full" className="text-amber-warning text-[16px]" /><span>Hub UPS System</span></div><div className="font-headline-sm text-body-lg text-slate-900 font-bold font-mono mt-1">99% Backed</div><span className="font-label-sm text-label-sm text-slate-500">Grid Stable (4.2 hrs run)</span></div></div><div className="mt-space-sm p-space-xs bg-slate-100 rounded-lg flex items-center justify-between px-space-sm"><span className="font-label-sm text-label-sm text-slate-600 flex items-center gap-1"><Icon name="shield" className="text-secondary text-[14px]" /><span>Blind OTP Verification Active</span></span><span className="font-mono text-label-sm text-label-sm text-secondary font-bold">100% PROTOCOL</span></div></div></div>
</div>

<div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-space-md" id="scanModal"><div className="w-full max-w-lg bg-white rounded-2xl p-space-lg shadow-2xl border border-slate-200 relative"><div className="flex items-center justify-between pb-space-md"><div className="flex items-center gap-space-xs"><div className="w-3 h-3 rounded-full bg-emerald-escrow animate-ping"></div><h3 className="font-headline-md text-headline-md text-slate-900">Laser &amp; Optical Hub Scanner</h3></div><button className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" id="closeScanModal"><Icon name="close" className="text-[24px]" /></button></div><div className="relative w-full h-56 rounded-xl bg-slate-900 overflow-hidden flex flex-col items-center justify-center text-center p-space-md"><div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-action-gradient-start to-transparent animate-pulse shadow-[0_0_12px_#DA3700]" style={{"animation":"scanMove 2s infinite ease-in-out"}}></div><Icon name="barcode_scanner" className="text-[56px] text-white/40 mb-2" /><div className="font-headline-sm text-body-lg text-white font-mono">AIM AT SWIFTCART WAYBILL OR BAG TAG</div><div className="font-body-sm text-body-sm text-slate-300 mt-1">Accepts Code128, QR Code &amp; NFC Payment Rings</div><div className="mt-4 px-space-md py-1.5 rounded-lg bg-white/10 font-mono text-label-sm text-emerald-400 font-bold border border-white/10">CAMERA SENSOR ACTIVE: 60FPS LOW-LIGHT</div></div><div className="mt-space-md flex flex-col gap-space-sm"><div className="flex items-center gap-space-sm"><input className="flex-1 px-space-md py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-label-md placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white" placeholder="Or enter 12-digit Waybill (e.g. SC-8821-49)" type="text" /><button className="px-space-md py-3 rounded-xl bg-primary text-white font-label-md text-label-md font-bold shadow-sm hover:brightness-105 transition-all">Lookup</button></div><div className="flex items-center justify-between text-label-sm font-label-sm text-slate-500 px-1"><span>Target Destination: <strong className="text-slate-800">Auto-sort to Bay Staging</strong></span><span className="text-emerald-escrow font-bold">Audio Beeper: ON</span></div></div></div></div>



</div></main>
<footer className="w-full bg-white border-t border-slate-200 shadow-sm"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs bg-white"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span className="font-label-sm text-label-sm text-slate-800 font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-slate-300 hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[16px]" /><span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Pesapal payment holding Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-slate-500"><span className="font-mono">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-secondary font-bold">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
