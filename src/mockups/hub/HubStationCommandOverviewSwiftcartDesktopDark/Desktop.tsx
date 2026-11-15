// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_station_command_overview_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72 min-h-screen flex flex-col"><main className="w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full">
<div className="w-full bg-amber-warning/15 px-space-xl py-2 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="cell_tower" className="text-amber-warning text-[18px]" />
<span className="font-label-md text-label-md text-amber-warning uppercase tracking-wider">Mesh Node: KLA-CENTRAL-TOWER-4</span>
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning animate-ping"></span>
<span className="font-body-sm text-body-sm text-on-surface">Dual GSM 4G Fallback Link Active • Zero Lag Telemetry</span>
</div>
<div className="flex items-center gap-space-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">LEDGER TX HASH: <span className="font-code-display text-emerald-escrow tracking-normal">0x89F4..31B2</span></span>
<div className="flex items-center gap-1 text-emerald-escrow">
<Icon name="verified" className="text-[16px]" />
<span className="font-label-sm text-label-sm whitespace-nowrap">UGX Escrow Lock Confirmed</span>
</div>
</div>
</div>
<div className="p-margin-desktop flex flex-col gap-space-xl">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div>
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wider">Operations Console</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• Sector 04 - Commercial Spine</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">Kampala Central Sorting &amp; Handover Hub</h1>
<p className="font-body-md text-body-md text-on-surface-variant">William Street Sub-Hub #04 • High-Velocity Regional Cross-Dock • Live Telemetry Feed</p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="h-[52px] px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-lg shadow-action-gradient-end/30 hover:opacity-95 active:scale-95 transition-all flex items-center gap-space-sm">
<Icon name="qr_code_scanner" className="text-[20px]" />
<span>Inbound Intake Scan</span>
<span className="px-2 py-0.5 rounded bg-surface-dark/40 font-code-display text-label-sm">F2</span>
</button>
<button className="h-[52px] px-space-lg rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-lg text-label-lg active:scale-95 transition-all flex items-center gap-space-sm">
<Icon name="inventory_2" className="text-[20px]" />
<span>Stage Bag</span>
<span className="px-2 py-0.5 rounded bg-surface-dark/60 text-on-surface-variant font-code-display text-label-sm">F4</span>
</button>
<button className="h-[52px] px-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-md text-label-md active:scale-95 transition-all flex items-center gap-space-xs">
<Icon name="local_shipping" className="text-[18px]" />
<span>Line-Haul</span>
<span className="px-1.5 py-0.5 rounded bg-surface-dark/60 text-on-surface-variant font-code-display text-label-sm">F7</span>
</button>
<button className="h-[52px] px-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-md text-label-md active:scale-95 transition-all flex items-center gap-space-xs">
<Icon name="receipt_long" className="text-[18px]" />
<span>Shift Handover</span>
<span className="px-1.5 py-0.5 rounded bg-surface-dark/60 text-on-surface-variant font-code-display text-label-sm">F9</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-space-md">
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Inbound Intake</span>
<Icon name="move_to_inbox" className="text-primary text-[20px]" />
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">1,482</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center font-bold">
<Icon name="arrow_upward" className="text-[14px]" />+14%
            </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Parcels received today</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-primary h-full w-[84%] rounded-full"></div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Dispatch Staging</span>
<Icon name="outbox" className="text-action-gradient-start text-[20px]" />
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">342</span>
<span className="font-label-sm text-label-sm text-primary font-bold">In 24 Totes</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Awaiting Boda handoff</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-action-gradient-start h-full w-[62%] rounded-full"></div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Rack Matrix Util.</span>
<Icon name="shelves" className="text-amber-warning text-[20px]" />
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-amber-warning">78%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1,170/1,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">330 bay slots remaining</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-amber-warning h-full w-[78%] rounded-full"></div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Line-Haul Fleet</span>
<Icon name="local_shipping" className="text-secondary text-[20px]" />
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">4 <span className="font-headline-sm text-headline-sm text-on-surface-variant">/ 6</span></span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">On Schedule</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Next: Jinja-LH #12 at 15:10</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-secondary h-full w-[66%] rounded-full"></div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden col-span-2 md:col-span-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Boda Staging Bay</span>
<Icon name="two_wheeler" className="text-emerald-escrow text-[20px]" />
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-emerald-escrow">28</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Riders docked</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Avg turn: 4.2 mins</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-sm overflow-hidden">
<div className="bg-emerald-escrow h-full w-[88%] rounded-full"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
<div className="lg:col-span-8 flex flex-col gap-space-xl min-w-0">
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-lg bg-primary-container text-on-primary-container">
<Icon name="conveyor_belt" className="text-[20px]" />
</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Intake &amp; Sorter Lane Telemetry</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous optical sorting belt • 4 active sub-diverter gates</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span>
</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider">Line Active (1.42 m/s)</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-lg overflow-x-auto">
<div className="min-w-[620px] flex items-center justify-between relative py-2">
<div className="flex flex-col items-center gap-2 z-10">
<div className="w-20 h-20 rounded-xl bg-surface-container-high flex flex-col items-center justify-center p-2 text-center shadow-md">
<Icon name="rv_hookup" className="text-primary text-[24px]" />
<span className="font-label-sm text-label-sm text-on-surface mt-1">Dock A &amp; B</span>
<span className="font-body-sm text-body-sm text-primary font-bold">Unloading</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">1,482 in</span>
</div>
<div className="flex-1 flex items-center px-2 relative">
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-amber-warning w-3/4 rounded-full animate-pulse"></div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant absolute right-1/2 translate-x-1/2 text-[14px]" />
</div>
<div className="flex flex-col items-center gap-2 z-10">
<div className="w-24 h-20 rounded-xl bg-surface-container-highest flex flex-col items-center justify-center p-2 text-center shadow-md relative">
<div className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded bg-emerald-escrow text-surface-dark font-label-sm text-label-sm font-extrabold">99.8%</div>
<Icon name="barcode_scanner" className="text-secondary text-[24px]" />
<span className="font-label-sm text-label-sm text-on-surface mt-1">OCR Sorter</span>
<span className="font-body-sm text-body-sm text-tertiary">Honeywell 2D</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">88 bpm</span>
</div>
<div className="flex-1 flex items-center px-2 relative">
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-tertiary w-full rounded-full"></div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant absolute right-1/2 translate-x-1/2 text-[14px]" />
</div>
<div className="flex flex-col gap-2 z-10">
<div className="grid grid-cols-2 gap-2">
<div className="p-2.5 rounded-lg bg-surface-container-high flex flex-col gap-0.5 min-w-[130px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Lane A: Central</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pioneer / Nakasero</span>
<span className="font-label-md text-label-md text-primary font-bold">482 pkgs</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high flex flex-col gap-0.5 min-w-[130px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Lane B: Nakawa</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bugolobi / Ntinda</span>
<span className="font-label-md text-label-md text-secondary font-bold">391 pkgs</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high flex flex-col gap-0.5 min-w-[130px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Lane C: Entebbe</span>
<span className="w-2 h-2 rounded-full bg-amber-warning"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Expressway Spur</span>
<span className="font-label-md text-label-md text-amber-warning font-bold">298 pkgs</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high flex flex-col gap-0.5 min-w-[130px]">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Lane D: Upcountry</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Jinja / Mbarara LH</span>
<span className="font-label-md text-label-md text-tertiary font-bold">311 pkgs</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<Icon name="speed" className="text-emerald-escrow text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Belt Velocity</span>
<span className="font-label-md text-label-md text-on-surface font-bold">1.42 m/s • Balanced</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<Icon name="warning" className="text-amber-warning text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Misread / No-Code</span>
<span className="font-label-md text-label-md text-amber-warning font-bold">3 parcels (Quarantined)</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<Icon name="update" className="text-primary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Peak Intake Window</span>
<span className="font-label-md text-label-md text-on-surface font-bold">14:00 - 16:30 EAT</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Real-Time Intake &amp; Handover Feed</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live audit ledger of all scans, dispatches, and incoming manifests</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1">
<Icon name="filter_list" className="text-[16px]" /> Filter Feed
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1">
<Icon name="download" className="text-[16px]" /> Export CSV
              </button>
</div>
</div>
<div className="flex flex-col divide-y divide-surface-container-highest/0 gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<Icon name="qr_code_scanner" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-code-display text-body-md text-on-surface font-extrabold tracking-wider">SC-UG-88214</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<Icon name="verified_user" className="text-[12px]" /> UGX 145,000 Escrow
                    </span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Lane A • Kampala Central</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Buyer: 07•• ••• 419</span>
<span>•</span>
<span>Merchant: Aristoc Booklex</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-primary">High-Value Electronics</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-low">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-on-surface">J. Opio (Scanner #2)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">14:37:44</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-code-display text-body-md text-on-surface font-extrabold tracking-wider">BAG-TOTE-KLA-049</span>
<span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-label-sm text-label-sm">Dispatched • 14 Orders</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">SafeBoda #8812</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Rider: Patrick Omondi (UEB 241A)</span>
<span>•</span>
<span className="whitespace-nowrap">Value: UGX 1,840,000</span>
<span>•</span>
<span className="text-tertiary font-label-sm text-label-sm">PIN Verified</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-low">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface">D. Ssenkumba (Dispatch)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">14:35:12</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-code-display text-body-md text-on-surface font-extrabold tracking-wider">LH-MAN-9041 (Truck UBF 912K)</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-label-sm text-label-sm">Gate 02 Docked</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Linehaul Masaka • Kampala</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Driver: Godfrey Katumba</span>
<span>•</span>
<span>Seal #SK-99410 Verified</span>
<span>•</span>
<span className="text-on-surface font-label-sm text-label-sm">312 Cartons Total</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-low">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface">B. Mukasa (Supervisor)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">14:29:50</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="gavel" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-code-display text-body-md text-on-surface font-extrabold tracking-wider">SC-UG-99102</span>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm">Quarantine Isolated</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Crushed Outer Carton</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Seller: Jumia Express Depot</span>
<span>•</span>
<span className="whitespace-nowrap">Escrow Frozen UGX 320,000</span>
<span>•</span>
<span className="text-danger-penalty font-label-sm text-label-sm">Inspection Bay Q4</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-low">
<span className="w-2 h-2 rounded-full bg-danger-penalty"></span>
<span className="font-label-sm text-label-sm text-on-surface">J. Opio (Scanner #2)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">14:18:05</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start md:items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<Icon name="qr_code_scanner" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-code-display text-body-md text-on-surface font-extrabold tracking-wider">SC-UG-88190</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm whitespace-nowrap">UGX 45,000 Escrow</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Lane B • Nakawa</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>Buyer: 07•• ••• 882</span>
<span>•</span>
<span>Merchant: Kikuubo Sundries</span>
<span>•</span>
<span className="text-on-surface font-label-sm text-label-sm">Cosmetics / Beauty</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-lg shrink-0">
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-lg bg-surface-container-low">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-on-surface">J. Opio (Scanner #2)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">14:14:22</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="pin_drop" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">William St Staging Zone</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-label-sm text-label-sm">Live GPS Matrix</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Active geo-fencing zone monitoring 150m perimeter around Plot 42 William St Hub.</p>
<div className="w-full h-44 bg-cover bg-center rounded-lg mt-space-md relative overflow-hidden" data-location="William Street, Kampala, Uganda" style={{"backgroundImage":"url('/images/40f3333999a0d306.webp')"}}>
<div className="absolute inset-0 bg-surface-dark/40 flex items-center justify-center p-space-md">
<div className="p-space-sm rounded-lg bg-surface-dark/90 backdrop-blur-md flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-emerald-escrow animate-ping"></span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">28 Boda Couriers Inside Hub Gate</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">William St Perimeter Nominal • Zero Delay</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="account_balance_wallet" className="text-secondary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Hub Escrow Custody</span>
</div>
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Value of parcels currently in William St Station racks awaiting handoff or settlement.</p>
</div>
<div className="my-space-md p-space-md rounded-xl bg-surface-container flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Current Station Vault Holdings</span>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold whitespace-nowrap">UGX 48,250,000</span>
<div className="flex items-center justify-between font-body-sm text-body-sm text-emerald-escrow mt-1">
<span className="flex items-center gap-1"><Icon name="lock" className="text-[14px]" /> MTN MoMo &amp; Airtel SafeVault</span>
<span>100% Guaranteed</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span>Settled Today: <strong className="text-on-surface whitespace-nowrap">UGX 19.4M</strong></span>
<span>Pending Delivery OTP: <strong className="text-on-surface whitespace-nowrap">UGX 28.8M</strong></span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-xl min-w-0">
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-lg bg-surface-container text-amber-warning">
<Icon name="shelves" className="text-[20px]" />
</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Storage Racks Matrix</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aging &amp; Slot Density Breakdown</p>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-amber-warning font-bold">1,170 / 1,500</span>
</div>
<div className="flex flex-col gap-space-md mt-space-xs">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-danger-penalty"></span>
                  High-Priority / 2-Hour Express (Zone A1-A4)
                </span>
<span className="text-on-surface font-bold">92% • 276 / 300</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-danger-penalty h-full w-[92%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immediate dispatch wave required • 24 slots open</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Standard Delivery Racks (Zone B1-B8)
                </span>
<span className="text-on-surface font-bold">74% • 592 / 800</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[74%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Optimal stocking density • Next wave staging at 15:30</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Oversized &amp; Bulk Storage (Zone C1-C3)
                </span>
<span className="text-on-surface font-bold">45% • 135 / 300</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[45%] rounded-full"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">165 pallet footprints open for evening upcountry trucks</span>
</div>
<div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-danger-penalty/20 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="emergency_home" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Quarantine &amp; Damaged Isolation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Secured cage Bay Q4</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-extrabold">12 Parcels</span>
</div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-lg bg-surface-container text-emerald-escrow">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Bay Congestion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">SafeBoda &amp; SwiftCart Fleet Staging</p>
</div>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex flex-col items-center justify-center py-space-sm">
<div className="relative w-44 h-44 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-container-highest fill-none" cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-emerald-escrow fill-none transition-all duration-1000" cx="50" cy="50" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="65" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">4.2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mins / Handover</span>
<span className="font-body-sm text-body-sm text-emerald-escrow font-bold mt-0.5">↓ Target &lt; 5.0m</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Staged Riders</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold mt-0.5">28 Riders</span>
<span className="font-body-sm text-body-sm text-tertiary">SafeBoda Fleet Gate</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Queue Depth</span>
<span className="font-label-lg text-label-lg text-emerald-escrow font-extrabold mt-0.5">3.1 Avg Waits</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nominal flow rate</span>
</div>
</div>
<div className="p-space-md rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="flash_on" className="text-action-gradient-start text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Auto-Dispatch Trigger Mode</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-bold">Smart Boda Pooling</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-lg bg-surface-container text-primary">
<Icon name="badge" className="text-[20px]" />
</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">On-Duty Station Roster</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Shift B (12:00 - 20:00 EAT)</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">3 Active</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-label-md text-label-md text-primary font-bold">BM</div>
<span className="w-3 h-3 rounded-full bg-emerald-escrow absolute -bottom-0.5 -right-0.5 border-2 border-surface-container"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Brian Mukasa</span>
<span className="font-body-sm text-body-sm text-primary font-bold">Lead Hub Supervisor</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Badge: SC-KLA-004 • Station Safe Key</span>
</div>
</div>
<Icon name="lock_open" className="text-on-surface-variant text-[20px]" />
</div>
<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-label-md text-label-md text-secondary font-bold">JO</div>
<span className="w-3 h-3 rounded-full bg-emerald-escrow absolute -bottom-0.5 -right-0.5 border-2 border-surface-container"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Joshua Opio</span>
<span className="font-body-sm text-body-sm text-secondary font-bold">Inbound Scanner • Gate 1</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Badge: SC-KLA-118 • 412 Scans/hr</span>
</div>
</div>
<Icon name="check_circle" className="text-emerald-escrow text-[20px]" />
</div>
<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center font-label-md text-label-md text-tertiary font-bold">DS</div>
<span className="w-3 h-3 rounded-full bg-emerald-escrow absolute -bottom-0.5 -right-0.5 border-2 border-surface-container"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Denis Ssenkumba</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold">Dispatch Marshall • Staging</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Badge: SC-KLA-092 • Boda Handoff Dock</span>
</div>
</div>
<Icon name="check_circle" className="text-emerald-escrow text-[20px]" />
</div>
</div>
<button className="w-full h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all flex items-center justify-center gap-1.5">
<Icon name="how_to_reg" className="text-[16px]" /> Roster Clock-in / Transfer Slip
          </button>
</div>
<div className="p-space-md rounded-xl bg-surface-container-high/60 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="keyboard" className="text-on-surface-variant text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Hub Agent Hotkeys:</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-bold">F2 Scan</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-bold">F4 Stage</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-bold">F7 LH</span>
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
