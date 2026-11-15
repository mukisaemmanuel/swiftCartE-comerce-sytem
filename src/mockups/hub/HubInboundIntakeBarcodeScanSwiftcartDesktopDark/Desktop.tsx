// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_inbound_intake_barcode_scan_swiftcart_desktop_dark/code.html
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

<section className="w-full bg-surface-container-low px-margin-desktop py-space-md shadow-sm">
<div className="max-w-[1680px] mx-auto flex flex-wrap items-center justify-between gap-space-md">

<div className="flex flex-wrap items-center gap-space-lg">
<div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-xs rounded-lg">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-escrow"></span>
</span>
<Icon name="qr_code_scanner" className="text-[18px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Optical Scanner</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Honeywell Xenon 1950g <span className="font-body-sm text-tertiary font-normal">(USB High-Speed)</span></span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-xs rounded-lg">
<Icon name="print" className="text-[18px] text-secondary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Thermal Tag Dispatch</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Zebra ZD421 · <span className="text-tertiary">Auto-Print Tag [4x6]</span></span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-xs rounded-lg">
<Icon name="volume_up" className="text-[18px] text-action-gradient-start" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Audio Cue Feed</span>
<span className="font-label-md text-label-md text-on-surface font-bold">880 Hz High-Pitch Chime</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-md bg-surface-container-high/60 px-space-md py-space-xs rounded-xl">
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Line-Haul Inbound Manifest</span>
<div className="flex items-center gap-space-xs">
<Icon name="local_shipping" className="text-[16px] text-amber-warning" />
<span className="font-code-display text-label-md text-primary font-bold">#MNF-2025-0891</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">· Jinja Trunk #02 → Kampala #04</span>
</div>
</div>
<div className="h-8 w-px bg-surface-container-highest"></div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm bg-primary-container/20 text-primary-fixed-dim px-2 py-1 rounded">Shift 02-B</span>
</div>
</div>
</div>
</section>

<div className="w-full max-w-[1680px] mx-auto px-margin-desktop py-space-lg flex flex-col gap-space-lg">

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-stretch">

<div className="xl:col-span-7 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative overflow-hidden shadow-md">

<div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-space-md relative z-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="flex h-3 w-3 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Intake Intake Scanner Console · Active Buffer</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded text-on-surface-variant font-label-sm">
<Icon name="sensors" className="text-[16px] text-tertiary" />
<span>Listening Mode: Serial Port CDC-ACM</span>
</div>
</div>

<div className="relative group mt-space-xs">
<div className="absolute inset-y-0 left-0 pl-space-lg flex items-center pointer-events-none">
<Icon name="barcode" className="text-primary text-[32px]" />
</div>
<input autoFocus={true} className="w-full bg-surface-container-lowest text-on-surface font-code-display text-price-display tracking-widest pl-16 pr-32 py-space-lg rounded-xl focus:outline-none transition-all placeholder:text-surface-container-highest placeholder:font-body-md" id="barcodeInput" placeholder="SCAN WAYBILL BARCODE OR 2D QR..." type="text" value="SC-98241" />
<div className="absolute inset-y-0 right-0 pr-space-md flex items-center gap-space-xs">
<button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-space-xs rounded-lg font-label-md transition-all flex items-center gap-1">
<Icon name="keyboard_return" className="text-[18px]" />
<span>Enter</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
<div className="bg-surface-container px-space-sm py-space-xs rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Confirm Intake</span>
<kbd className="font-code-display text-label-sm bg-surface-container-highest text-primary-fixed px-1.5 py-0.5 rounded font-bold">↵ ENTER</kbd>
</div>
<div className="bg-surface-container px-space-sm py-space-xs rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-error">Flag Tamper / Dmg</span>
<kbd className="font-code-display text-label-sm bg-error-container/40 text-error px-1.5 py-0.5 rounded font-bold">F1</kbd>
</div>
<div className="bg-surface-container px-space-sm py-space-xs rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-amber-warning">Route Exception</span>
<kbd className="font-code-display text-label-sm bg-surface-container-highest text-amber-warning px-1.5 py-0.5 rounded font-bold">F3</kbd>
</div>
<div className="bg-surface-container px-space-sm py-space-xs rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Manual Search</span>
<kbd className="font-code-display text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 rounded font-bold">SPACE</kbd>
</div>
</div>
</div>

<div className="mt-space-lg pt-space-sm bg-surface-container-lowest/80 rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<Icon name="check_circle" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Valid Barcode Verified: <strong className="text-tertiary font-code-display">SC-98241</strong> (CRC-32 Validated)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Decoder Latency: 14ms</span>
</div>
</div>

<div className="xl:col-span-5 bg-surface-container rounded-xl p-space-lg shadow-xl relative overflow-hidden flex flex-col justify-between">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm uppercase bg-emerald-escrow/20 text-emerald-escrow font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Tamper Tape Intact
              </span>
<span className="font-label-sm text-label-sm uppercase bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full">Intake Spot Check OK</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold flex items-center gap-space-sm">
<span className="font-code-display text-primary font-black">#SC-98241</span>
<span className="text-on-surface-variant text-body-md font-normal">| 0.85 kg</span>
</h2>
</div>

<div className="bg-surface-dark px-space-md py-space-xs rounded-xl flex items-center gap-space-xs text-right">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Hold</span>
<span className="font-label-md text-label-md text-emerald-escrow font-extrabold whitespace-nowrap">UGX 180,000</span>
</div>
<Icon name="lock" className="text-emerald-escrow text-[22px]" />
</div>
</div>

<div className="grid grid-cols-2 gap-space-md my-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Merchant Source</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kampala Phone Hub</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SoundCore Space One ANC</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">End Recipient</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Grace Nantongo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 419 (Masked)</span>
</div>
<div className="col-span-2 pt-space-xs flex items-center gap-space-xs">
<Icon name="pin_drop" className="text-[16px] text-action-gradient-start" />
<span className="font-body-sm text-body-sm text-on-surface truncate">Kololo Residences, Flat 4B · Prince Charles Dr</span>
</div>
</div>

<div className="grid grid-cols-12 gap-space-sm items-center">
<div className="col-span-7 bg-surface-container-highest px-space-md py-space-sm rounded-xl flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Assigned Sorting Lane</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-black truncate">Zone A · Nakasero Corridor</span>
</div>
<div className="col-span-5 bg-action-gradient-end px-space-md py-space-sm rounded-xl flex flex-col items-center justify-center text-center shadow-lg">
<span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider font-bold">Staging Bin</span>
<span className="font-code-display text-price-display text-on-primary-container font-black">A2-14</span>
</div>
</div>

<div className="mt-space-md flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="check_box" className="text-[16px] text-tertiary" />
            Barcode scanned 12 seconds ago
          </span>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md flex items-center gap-1 transition-all">
<Icon name="print" className="text-[16px]" />
<span>Re-print Bag Slip</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Manifest Tally</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">48</span>
<span className="font-body-md text-body-md text-on-surface-variant font-bold">/ 52 Pkgs</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary mt-1 flex items-center gap-1">
<Icon name="trending_up" className="text-[14px]" /> 92.3% Processed
          </span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
<Icon name="inventory_2" className="text-primary text-[28px]" />
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Line Intake</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-amber-warning font-extrabold">04</span>
<span className="font-body-md text-body-md text-on-surface-variant">In Conveyor</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Unopened cages in bay 2</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
<Icon name="pending_actions" className="text-amber-warning text-[28px]" />
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Quarantine &amp; Tamper</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-tertiary font-extrabold">00</span>
<span className="font-body-md text-body-md text-on-surface-variant">Flagged</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary mt-1 flex items-center gap-1">
<Icon name="format_image_left" className="text-[14px]" /> Zero Claims on Route
          </span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
<Icon name="security" className="text-tertiary text-[28px]" />
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Velocity Cadence</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-secondary font-extrabold">412</span>
<span className="font-body-md text-body-md text-on-surface-variant">pkgs/hr</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-1 flex items-center gap-1">
<Icon name="speed" className="text-[14px]" /> High Speed Nominal
          </span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
<Icon name="bolt" className="text-secondary text-[28px]" />
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl shadow-md overflow-hidden flex flex-col">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-space-xs">
<span>Current Batch Intake Register</span>
<span className="text-body-sm text-on-surface-variant font-normal">(Auto-syncing to Kampala Primary Ledger)</span>
</h3>
<span className="bg-tertiary-container/30 text-tertiary font-label-sm px-2 py-0.5 rounded-full font-bold">48 Scans Recorded</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative">
<Icon name="filter_list" className="absolute left-3 top-2 text-[18px] text-on-surface-variant" />
<input className="bg-surface-container-high text-on-surface text-body-sm rounded-lg pl-9 pr-space-md py-1.5 focus:outline-none placeholder:text-on-surface-variant" placeholder="Filter batch parcels..." type="text" />
</div>
<button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-1.5 rounded-lg font-label-md flex items-center gap-1 transition-all">
<Icon name="file_download" className="text-[16px]" />
<span>Export CSV</span>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-on-surface">
<thead className="bg-surface-container-highest/60 text-on-surface-variant font-label-sm uppercase tracking-wider">
<tr>
<th className="py-space-sm px-space-md font-bold" scope="col">Package ID / Barcode</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Merchant Store</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Recipient &amp; Masked Contact</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Category</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Weight</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Condition &amp; Tape</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Assigned Corridor</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Staging Bin</th>
<th className="py-space-sm px-space-md font-bold" scope="col">Handler</th>
<th className="py-space-sm px-space-md text-right font-bold" scope="col">Dispatch Actions</th>
</tr>
</thead>
<tbody className="font-body-md divide-y-0">

<tr className="bg-surface-container/60 hover:bg-surface-container-high/60 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-code-display text-label-md text-primary font-black">#SC-98241</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Kampala Phone Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Store ID: UG-7782</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface block">Grace Nantongo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Kololo (07•• ••• 419)
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-label-sm text-secondary">Electronics</span>
</td>
<td className="py-space-md px-space-md font-code-display text-body-sm text-on-surface font-bold">
                0.85 kg
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 text-label-sm font-bold text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded-full">
<Icon name="check" className="text-[14px]" /> Sealed &amp; Intact
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Corridor 1 - Nakasero</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zone A (Speedway Boda)</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-code-display text-label-md bg-surface-container-highest text-primary-fixed font-black px-2 py-1 rounded">Rack A2-14</span>
</td>
<td className="py-space-md px-space-md font-body-sm text-on-surface-variant">
                Joshua O.
              </td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm inline-flex items-center gap-1 transition-all">
<Icon name="print" className="text-[14px]" />
<span>Print Tag</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-code-display text-label-md text-on-surface font-black">#SC-98254</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Kikuubo Wholesalers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Store ID: UG-1102</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface block">Moses Kintu</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Ntinda (07•• ••• 882)
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-label-sm text-on-surface-variant">FMCG</span>
</td>
<td className="py-space-md px-space-md font-code-display text-body-sm text-on-surface font-bold">
                2.40 kg
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 text-label-sm font-bold text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded-full">
<Icon name="check" className="text-[14px]" /> Sealed &amp; Intact
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Corridor 3 - Nakawa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zone C (Van Transit)</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-code-display text-label-md bg-surface-container-highest text-on-surface font-black px-2 py-1 rounded">Rack B1-08</span>
</td>
<td className="py-space-md px-space-md font-body-sm text-on-surface-variant">
                Joshua O.
              </td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm inline-flex items-center gap-1 transition-all">
<Icon name="print" className="text-[14px]" />
<span>Print Tag</span>
</button>
</td>
</tr>

<tr className="bg-surface-container/30 hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-code-display text-label-md text-on-surface font-black">#SC-98270</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Victoria Beauty Shop</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Store ID: UG-9042</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface block">Sarah Namutebi</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Bugolobi (07•• ••• 310)
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-label-sm text-primary-fixed-dim">Cosmetics</span>
</td>
<td className="py-space-md px-space-md font-code-display text-body-sm text-on-surface font-bold">
                0.35 kg
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 text-label-sm font-bold text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded-full">
<Icon name="check" className="text-[14px]" /> Sealed &amp; Intact
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Corridor 4 - Spring Rd</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zone D (Standard Boda)</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-code-display text-label-md bg-surface-container-highest text-on-surface font-black px-2 py-1 rounded">Rack A4-02</span>
</td>
<td className="py-space-md px-space-md font-body-sm text-on-surface-variant">
                Joshua O.
              </td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm inline-flex items-center gap-1 transition-all">
<Icon name="print" className="text-[14px]" />
<span>Print Tag</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-code-display text-label-md text-on-surface font-black">#SC-98299</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Elite Mobile Accessories</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Store ID: UG-5511</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface block">Peter Kato</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Wandegeya (07•• ••• 701)
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-label-sm text-secondary">Accessories</span>
</td>
<td className="py-space-md px-space-md font-code-display text-body-sm text-on-surface font-bold">
                0.40 kg
              </td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 text-label-sm font-bold text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded-full">
<Icon name="check" className="text-[14px]" /> Sealed &amp; Intact
                </span>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold block">Corridor 2 - Makerere</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zone B (Speedway Boda)</span>
</td>
<td className="py-space-md px-space-md">
<span className="font-code-display text-label-md bg-surface-container-highest text-on-surface font-black px-2 py-1 rounded">Rack A1-19</span>
</td>
<td className="py-space-md px-space-md font-body-sm text-on-surface-variant">
                Joshua O.
              </td>
<td className="py-space-md px-space-md text-right">
<button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-space-sm py-1 rounded font-label-sm inline-flex items-center gap-1 transition-all">
<Icon name="print" className="text-[14px]" />
<span>Print Tag</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-space-sm bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-label-sm">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
            Ledger Persistence: Synchronized with PostgreSQL Mainframe
          </span>
<span>·</span>
<span>44 Additional rows collapsed</span>
</div>
<div className="flex items-center gap-space-sm">
<span>Page 1 of 1</span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-wrap items-center justify-between gap-space-md">

<div className="flex flex-wrap items-center gap-space-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Manifest Completion</span>
<div className="flex items-center gap-space-sm mt-0.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">92.3%</span>
<div className="w-32 h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-primary h-full w-[92.3%] rounded-full"></div>
</div>
</div>
</div>
<div className="h-10 w-px bg-surface-container-highest hidden sm:block"></div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Processed</span>
<span className="font-label-md text-label-md text-tertiary font-bold">48 Units</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Pending</span>
<span className="font-label-md text-label-md text-amber-warning font-bold">4 Units</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Damage/Loss</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">0 Units</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-md">
<button className="h-[52px] px-space-lg rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg transition-all flex items-center gap-space-xs" id="btnQuarantineModal">
<Icon name="gavel" className="text-[20px] text-error" />
<span>Open Quarantine Bay</span>
</button>
<button className="h-[52px] px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-lg font-bold shadow-lg hover:shadow-primary-container/20 transition-all flex items-center gap-space-sm active:scale-95" id="btnReconcile">
<Icon name="assignment_turned_in" className="text-[22px]" />
<span>Complete Inbound Batch &amp; Reconcile Manifest</span>
</button>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
