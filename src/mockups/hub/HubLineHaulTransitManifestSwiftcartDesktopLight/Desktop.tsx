// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_line_haul_transit_manifest_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0 min-h-screen flex flex-col"><main className="w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-lowest px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-y-2">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Line-Haul Trunk Network:</span>
<span className="font-label-md text-label-md text-on-surface font-bold">4 Main Corridors Operational</span>
</div>
<div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span>•</span>
<span className="text-tertiary">Jinja/Eastern (Active)</span>
<span>•</span>
<span className="text-secondary">Mbarara/Western (Active)</span>
<span>•</span>
<span className="text-on-surface">Gulu/Northern (Active)</span>
<span>•</span>
<span className="text-on-surface-variant">Masaka/Southern (Standby)</span>
</div>
</div>
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-xs">
<Icon name="lock" className="text-[16px] text-emerald-escrow" />
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold tracking-wide uppercase">Seal Integrity: 100% Breaches: 0</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-high px-space-sm py-0.5 rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant">Namanve Weighbridge Telemetry:</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Synced 4m ago</span>
</div>
</div>
</div>

<div className="p-space-xl pb-space-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Today's Transits</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Trucks Sched.</span>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm">
<span className="text-emerald-escrow font-bold">8 Arrived</span>
<span className="text-on-surface-variant">•</span>
<span className="text-amber-warning font-bold">3 In-Transit</span>
<span className="text-on-surface-variant">•</span>
<span className="text-primary font-bold">1 Loading</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="rv_hookup" className="text-[26px]" />
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Transferred Parcels</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">3,420</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">+18.4%</span>
</div>
<div className="w-36 bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full w-4/5"></div>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-emerald-escrow">
<Icon name="inventory_2" className="text-[26px]" />
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Bay Loading Utilization</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">75%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 of 4 Docks</span>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-on-surface-variant">
<span>Dock 1: Free</span>
<span>•</span>
<span className="text-primary">Dock 2 &amp; 3: Busy</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<Icon name="dock" className="text-[26px]" />
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Security Wire Seals</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-emerald-escrow font-extrabold tracking-tight">100%</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified Intact</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="format_image_left" className="text-[14px]" />
<span>0 Breaches / Quarantine: 0</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-emerald-escrow">
<Icon name="verified" className="text-[26px]" />
</div>
</div>
</div>

<div className="px-space-xl pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="queue_play_next" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Transit Manifests</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-extrabold">4 Active</span>
</div>

<div className="grid grid-cols-2 p-1 rounded-lg bg-surface-container-low">
<button className="py-2 px-space-sm rounded font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface font-bold shadow-sm flex items-center justify-center gap-1" id="tab-inbound">
<Icon name="move_to_inbox" className="text-[16px] text-tertiary" />
            Inbound Trunk (3)
          </button>
<button className="py-2 px-space-sm rounded font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1" id="tab-outbound">
<Icon name="outbox" className="text-[16px]" />
            Outbound Trunk (1)
          </button>
</div>

<div className="relative w-full">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container transition-colors" placeholder="Scan or type Manifest # / Plate..." type="text" />
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md relative overflow-hidden transition-all cursor-pointer ring-1 ring-primary/20">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="pl-2 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-label-lg font-extrabold text-on-surface tracking-normal">#MNF-JIN-KLA-1082</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[12px]" /> Verified
                </span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary">Dock 2 Active</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Jinja Main Hub</span>
<Icon name="arrow_right_alt" className="text-[14px]" />
<span className="text-primary font-bold">Kampala Central #04</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-1">
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Vehicle &amp; Plate</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Isuzu 7-Ton | UBA 441Z</span>
</div>
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Driver Custody</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Samuel Waiswa</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<Icon name="inventory_2" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md text-on-surface font-extrabold">240 Parcels</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(4 Master Bags)</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Docked 14:15 EAT</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl shadow-sm transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-label-lg font-bold text-on-surface tracking-normal">#MNF-KLA-MBR-0941</span>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">Loading</span>
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">Dock 3 Bay</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Kampala Central</span>
<Icon name="arrow_right_alt" className="text-[14px]" />
<span className="text-secondary font-bold">Mbarara Western Hub</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Fuso Fighter • UBH 812L</span>
<span>Driver: David Mukasa</span>
</div>

<div className="flex flex-col gap-1 pt-1">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-on-surface-variant">Staged for Trunk Departure</span>
<span className="text-on-surface font-bold">310 / 350 Parcels (88%)</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5">
<div className="bg-primary h-full rounded-full w-[88%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl shadow-sm transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-label-lg font-bold text-on-surface tracking-normal">#MNF-GUL-KLA-0419</span>
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="near_me" className="text-[12px]" /> In-Transit
                </span>
</div>
<span className="font-label-sm text-label-sm font-bold text-amber-warning">ETA 16:30</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Gulu Northern Hub</span>
<Icon name="arrow_right_alt" className="text-[14px]" />
<span className="text-on-surface font-semibold">Kampala Central</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Tata LPT • UBF 904K</span>
<span>Simon Okello</span>
</div>
<div className="flex items-center justify-between text-body-sm pt-1 bg-surface-container-low px-2 py-1 rounded">
<span className="text-on-surface-variant flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="location_on" className="text-[14px] text-tertiary" /> Karuma Bridge Trunk Point
              </span>
<span className="font-label-md text-label-md text-on-surface font-bold">185 Parcels</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl shadow-sm transition-all cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-label-lg font-bold text-on-surface tracking-normal">#MNF-KLA-MSK-0773</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">Standby</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Dep: 17:00</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Kampala Central</span>
<Icon name="arrow_right_alt" className="text-[14px]" />
<span className="text-on-surface font-semibold">Masaka Sub-Hub</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Toyota Dyna • UAZ 219P</span>
<span className="font-label-md text-label-md text-on-surface font-bold">140 Parcels</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Hub Quick Execution</span>
<button className="w-full h-[48px] rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-all flex items-center justify-center gap-2">
<Icon name="add_task" className="text-[20px]" />
          Create New Outbound Manifest
        </button>
<div className="grid grid-cols-2 gap-2">
<button className="h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md font-bold flex items-center justify-center gap-1.5">
<Icon name="dock" className="text-[18px] text-tertiary" />
            Dock Vehicle at Bay
          </button>
<button className="h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md font-bold flex items-center justify-center gap-1.5">
<Icon name="badge" className="text-[18px] text-secondary" />
            Driver Sign-In
          </button>
</div>
</div>
</section>

<section className="lg:col-span-8 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container">
<Icon name="local_shipping" className="text-[32px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-code-display text-price-display font-extrabold text-on-surface tracking-wider">#MNF-JIN-KLA-1082</span>
<span className="px-2.5 py-1 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="done_all" className="text-[14px]" /> Arrived &amp; Unloading
                </span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Jinja Eastern Trunk Corridor ➔ Kampala Central Hub #04 Dock 02</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container transition-colors flex items-center gap-1">
<Icon name="history" className="text-[18px]" />
              Audit Trail
            </button>
<button className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container transition-colors flex items-center gap-1">
<Icon name="print" className="text-[18px]" />
              Print Summary
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl">

<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Container Wire Seal</span>
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
</div>
<span className="font-code-display text-label-lg font-extrabold text-on-surface">#SEAL-UG-998412-B</span>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-emerald-escrow font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
              Verified by Sup. Brian Mukasa
            </div>
</div>

<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Cargo Environment</span>
<Icon name="thermostat" className="text-secondary text-[18px]" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">22°C</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 54% RH</span>
</div>
<span className="font-body-sm text-body-sm text-emerald-escrow">Optimal (Dry Goods &amp; Tech)</span>
</div>

<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Weighbridge Clearance</span>
<Icon name="scale" className="text-primary text-[18px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">Ticket #WB-44109</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Namanve Scale: 8,420 kg Gross</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Consignment Routing Allocation (240 Total Parcels)</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Manifest Mass: 143.5 kg</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Kampala Central (Final)</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">160</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-primary font-bold">66.7%</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Transit Entebbe Int'l</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">45</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-secondary font-bold">18.8%</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Transit Mukono Hub</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">35</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-tertiary font-bold">14.5%</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="format_list_bulleted" className="text-primary text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Master Bag Intakes</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(4 Sealed Units in Trunk)</span>
</div>

<div className="flex items-center gap-2">
<div className="flex items-center gap-2 px-space-md py-1.5 bg-surface-container-low rounded-lg">
<Icon name="barcode_scanner" className="text-emerald-escrow text-[18px]" />
<input className="bg-transparent font-code-display text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none w-44" id="bag-scanner-input" placeholder="Scan Bag Barcode..." type="text" />
</div>
<button className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors font-bold">
              Scan
            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<th className="py-space-sm px-space-md rounded-l-lg">Master Bag ID</th>
<th className="py-space-sm px-space-md">Units</th>
<th className="py-space-sm px-space-md">Origin Station</th>
<th className="py-space-sm px-space-md">Corridor Route</th>
<th className="py-space-sm px-space-md">Gross Wt</th>
<th className="py-space-sm px-space-md">Seal Check</th>
<th className="py-space-sm px-space-md rounded-r-lg text-right">Intake Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/30 font-body-md text-body-md">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<Icon name="shopping_bag" className="text-primary text-[20px]" />
<span className="font-code-display text-label-md text-on-surface font-extrabold">BAG-JIN-014</span>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface font-bold">25 Parcels</td>
<td className="py-space-md px-space-md text-on-surface-variant">Jinja Main Hub</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-medium">Nakasero / Kololo</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface">34.2 kg</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="lock" className="text-[14px]" /> Intact
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold">
                    25 / 25 Scanned
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<Icon name="shopping_bag" className="text-primary text-[20px]" />
<span className="font-code-display text-label-md text-on-surface font-extrabold">BAG-JIN-015</span>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface font-bold">30 Parcels</td>
<td className="py-space-md px-space-md text-on-surface-variant">Jinja Main Hub</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-medium">Nakawa Industrial</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface">41.0 kg</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="lock" className="text-[14px]" /> Intact
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold">
                    30 / 30 Scanned
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<Icon name="shopping_bag" className="text-primary text-[20px]" />
<span className="font-code-display text-label-md text-on-surface font-extrabold">BAG-JIN-016</span>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface font-bold">28 Parcels</td>
<td className="py-space-md px-space-md text-on-surface-variant">Jinja Main Hub</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-medium">Central CBD</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface">38.5 kg</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="lock" className="text-[14px]" /> Intact
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold">
                    28 / 28 Scanned
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<Icon name="shopping_bag" className="text-primary text-[20px]" />
<span className="font-code-display text-label-md text-on-surface font-extrabold">BAG-JIN-017</span>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface font-bold">20 Parcels</td>
<td className="py-space-md px-space-md text-on-surface-variant">Jinja Main Hub</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-medium">Entebbe Linehaul</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface">29.8 kg</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="lock" className="text-[14px]" /> Intact
                  </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold">
                    20 / 20 Scanned
                  </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm mt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Line-Haul Handover Verification &amp; Signatures</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="encrypted" className="text-[14px]" /> Cryptographic Key #KLA-04-VERIFIED
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="airline_seat_recline_normal" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Line-Haul Transit Driver</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Samuel Waiswa • ID: 882910</span>
<span className="font-body-sm text-body-sm text-emerald-escrow font-semibold">Signed via Handheld Xenon (14:22:04)</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary">
<Icon name="shield_person" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Receiving Hub Supervisor</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Brian Mukasa • Kampala Central #04</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">Attestation Approved</span>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-2">
<button className="h-[48px] px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-bold transition-all flex items-center gap-2">
<Icon name="receipt_long" className="text-[18px]" />
              Print Consignment Receipt
            </button>
<button className="h-[48px] px-space-md rounded-lg bg-danger-penalty/15 text-danger-penalty hover:bg-danger-penalty/25 font-label-md text-label-md font-bold transition-all flex items-center gap-2">
<Icon name="report_problem" className="text-[18px]" />
              Flag Transit Discrepancy
            </button>
</div>
<button className="h-[52px] px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-all flex items-center gap-2" id="btn-accept-manifest">
<Icon name="check_box" className="text-[22px]" />
            Sign &amp; Accept Line-Haul Manifest
          </button>
</div>
</div>
</section>
</div>

<div className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none bg-surface-container-high text-on-surface px-space-lg py-space-md rounded-xl shadow-2xl flex items-center gap-space-md" id="operation-toast">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="verified" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface" id="toast-title">Handover Accepted</span>
<span className="font-body-sm text-body-sm text-on-surface-variant" id="toast-desc">Manifest #MNF-JIN-KLA-1082 transferred to internal dispatch.</span>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
