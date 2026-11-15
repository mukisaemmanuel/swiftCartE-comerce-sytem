// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_intake_high_speed_barcode_scanner_tablet_light/code.html
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
      
      <main className="w-full pt-28 px-margin pb-space-xl flex-1 bg-surface-bg"><div className="flex flex-col w-full">

<div className="w-full bg-white border border-surface-border rounded-xl p-space-md shadow-sm mb-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-light border border-primary/20 flex items-center justify-center text-primary shadow-sm">
<Icon name="inventory_2" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Active Intake Manifest</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">Live Bluetooth Scale Paired</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold tracking-tight">Bag #CB-KLA-9921</span>
<span className="font-body-sm text-body-sm text-slate-muted font-mono">Pioneer Mall G-14 (SoundCore Official)</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-lg">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-slate-muted uppercase font-mono font-semibold">Intake Progress</span>
<div className="flex items-center gap-space-xs justify-end">
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold">19</span>
<span className="font-body-md text-body-md text-slate-muted font-bold">/ 24</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-50 text-emerald-escrow border border-emerald-200 font-label-sm text-label-sm font-bold ml-space-xs">79%</span>
</div>
</div>
<div className="hidden sm:flex flex-col text-right">
<span className="font-label-sm text-label-sm text-slate-muted uppercase font-mono font-semibold">Scan Cadence</span>
<div className="flex items-center gap-space-xs justify-end">
<span className="font-headline-sm text-headline-sm text-slate-heading font-mono font-extrabold">2.1s</span>
<span className="font-label-sm text-label-sm text-slate-muted">/ unit</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-emerald-50 border border-emerald-200">
<Icon name="verified_user" className="text-emerald-escrow text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold leading-none">0 TAMPER FLAGS</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono leading-none mt-1">Escrow Intact</span>
</div>
</div>
</div>
</div>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-space-md">

<div className="w-full bg-white border border-surface-border rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">

<div className="relative w-full rounded-xl bg-[#0B0F19] overflow-hidden shadow-inner p-space-md flex flex-col justify-between min-h-[340px]">

<div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffb5a1_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="relative z-10 flex items-center justify-between w-full">
<div className="flex items-center gap-space-xs bg-slate-900/85 backdrop-blur-md px-space-sm py-1 rounded-lg border border-slate-700/60">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">HUD CAMERA #01 ACTIVE</span>
<span className="text-slate-500 font-mono">|</span>
<span className="font-label-sm text-label-sm text-slate-300 font-mono">60 FPS 1080p</span>
</div>
<div className="flex items-center gap-space-xs bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md px-space-sm py-1 rounded-lg">
<Icon name="volume_up" className="text-emerald-400 text-[16px]" />
<span className="font-label-sm text-label-sm text-emerald-300 font-bold font-mono">MATCH CONFIRMED (0.12s)</span>
</div>
</div>

<div className="relative z-10 my-space-md flex flex-col items-center justify-center">
<div className="relative w-64 h-40 rounded-lg bg-slate-900/70 border border-slate-700/60 backdrop-blur-xs flex items-center justify-center p-space-sm shadow-2xl">

<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-md"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-md"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-md"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-md"></div>

<div className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_#da3700] animate-pulse"></div>

<div className="flex flex-col items-center gap-space-xs opacity-95">
<Icon name="qr_code_scanner" className="text-[56px] text-primary" />
<span className="font-code-display text-code-display text-orange-200 tracking-widest font-extrabold select-all">SC-ORD-9488-UG</span>
</div>
</div>
<div className="mt-space-sm px-space-md py-0.5 rounded-full bg-slate-800/90 border border-slate-700 backdrop-blur-sm flex items-center gap-space-xs">
<Icon name="sensors" className="text-slate-300 text-[16px]" />
<span className="font-label-sm text-label-sm text-slate-200 font-mono">USB Barcode Cradle Sync: ONLINE</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm w-full pt-space-xs">

<div className="bg-slate-50 border border-surface-border p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="scale" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-slate-muted font-mono leading-none">Mettler-Toledo Tare</span>
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold mt-0.5">0.85 <span className="font-body-sm text-body-sm text-slate-muted">kg</span></span>
</div>
</div>
<div className="text-right">
<span className="px-space-xs py-0.5 rounded bg-emerald-100 text-emerald-escrow font-label-sm text-label-sm font-bold">±0.00kg MATCH</span>
<p className="font-label-sm text-label-sm text-slate-muted font-mono mt-0.5">Decl: 0.85 kg</p>
</div>
</div>

<div className="bg-slate-50 border border-surface-border p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="view_in_ar" className="text-slate-700 text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-slate-muted font-mono leading-none">Volumetric LiDAR</span>
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold mt-0.5">18×14×8 <span className="font-body-sm text-body-sm text-slate-muted">cm</span></span>
</div>
</div>
<div className="text-right">
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-bold">Grade A Cube</span>
<p className="font-label-sm text-label-sm text-slate-muted font-mono mt-0.5">0.0020 m³</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-surface-border p-space-md rounded-xl shadow-sm flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-lg bg-slate-100 border border-surface-border overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Black matte over-ear high fidelity premium sound cancellation headphones in retail packaging set against clean tech warehouse backdrop" src="/images/7d64a51718c8c0b6.webp" />
<span className="absolute bottom-1 right-1 bg-emerald-escrow text-white font-bold font-label-sm text-label-sm px-1 rounded">MATCH</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-light text-primary font-mono font-bold border border-primary/20">#SC-ORD-9488-UG-P01</span>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-50 text-emerald-escrow border border-emerald-200 font-semibold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> Escrow Sealed
              </span>
</div>
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold mt-1">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-slate-muted">SKU: A3035-BLK • Destination: Dennis Mukasa (07•• ••• 882) • Kololo</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-sm text-label-sm text-slate-muted uppercase font-mono font-semibold">Declared Value</span>
<span className="font-headline-sm text-headline-sm text-primary font-extrabold whitespace-nowrap">UGX 385,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-1 font-semibold">Bank Custody Ref: #ESC-9081</span>
</div>
</div>

<div className="bg-white border border-surface-border p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-slate-heading font-bold flex items-center gap-space-xs" htmlFor="manual-barcode-input">
<Icon name="keyboard" className="text-primary text-[18px]" />
            Fast Touch Entry / Barcode Override
          </label>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-slate-muted font-mono">USB HW Sniffer</span>
<button className="px-space-xs py-1 rounded bg-slate-100 hover:bg-slate-200 border border-surface-border text-slate-700 font-label-sm text-label-sm font-bold flex items-center gap-1 active:scale-95 transition-transform" id="hwToggle">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
              ENABLED
            </button>
</div>
</div>
<div className="flex gap-space-xs">
<div className="relative flex-1">
<Icon name="barcode_reader" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]" />
<input className="w-full h-12 bg-slate-50 border border-surface-border-strong text-slate-heading font-code-display text-code-display pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white shadow-inner" id="manual-barcode-input" placeholder="Scan or key barcode string (e.g. SC-ORD-9499)..." type="text" />
</div>
<button className="h-12 px-space-md bg-primary hover:bg-[#c23100] text-white rounded-lg font-label-lg text-label-lg flex items-center gap-space-xs transition-colors shrink-0 shadow-sm">
<Icon name="add_task" className="text-[20px]" />
<span>Commit (Enter)</span>
</button>
</div>

<div className="grid grid-cols-6 gap-space-xs pt-space-xs">
<button className="h-10 bg-white hover:bg-slate-100 active:bg-slate-200 border border-surface-border text-slate-heading rounded font-label-lg text-label-lg shadow-sm font-bold">1</button>
<button className="h-10 bg-white hover:bg-slate-100 active:bg-slate-200 border border-surface-border text-slate-heading rounded font-label-lg text-label-lg shadow-sm font-bold">2</button>
<button className="h-10 bg-white hover:bg-slate-100 active:bg-slate-200 border border-surface-border text-slate-heading rounded font-label-lg text-label-lg shadow-sm font-bold">3</button>
<button className="h-10 bg-white hover:bg-slate-100 active:bg-slate-200 border border-surface-border text-slate-heading rounded font-label-lg text-label-lg shadow-sm font-bold">4</button>
<button className="h-10 bg-white hover:bg-slate-100 active:bg-slate-200 border border-surface-border text-slate-heading rounded font-label-lg text-label-lg shadow-sm font-bold">5</button>
<button className="h-10 bg-red-50 hover:bg-red-100 active:bg-red-200 border border-red-200 text-danger-penalty rounded font-label-lg text-label-lg flex items-center justify-center font-bold shadow-sm">
<Icon name="backspace" className="text-[18px]" />
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="h-12 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-danger-penalty font-label-lg text-label-lg px-space-md flex items-center justify-center gap-space-xs transition-transform active:scale-98 font-bold">
<Icon name="gavel" className="text-[20px]" />
<span>Flag Tamper / Damaged (F4)</span>
</button>
<button className="h-12 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber- warning text-amber-700 font-label-lg text-label-lg px-space-md flex items-center justify-center gap-space-xs transition-transform active:scale-98 font-bold">
<Icon name="notification_important" className="text-[20px]" />
<span>Extra Item (Unmanifested)</span>
</button>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-space-md">

<div className="w-full bg-gradient-to-br from-primary to-[#ff5722] rounded-2xl p-space-md text-white shadow-lg flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-black/20 font-label-sm text-label-sm uppercase font-mono tracking-wider font-bold">AUTO-ROUTER v4.2</span>
<span className="font-label-sm text-label-sm text-white/90">TTS Audio Prompt Active</span>
</div>
<Icon name="volume_up" className="text-[24px] text-white" />
</div>
<div className="flex items-center gap-space-md py-space-xs">
<div className="w-16 h-16 rounded-xl bg-black/20 border border-white/20 flex flex-col items-center justify-center font-headline-lg text-headline-lg font-black tracking-tight shrink-0 shadow-inner">
            A2
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-white/80 font-mono font-bold">Immediate Staging Destination</span>
<span className="font-headline-md text-headline-md font-extrabold tracking-tight">BAY A2 - Kololo Express</span>
<span className="font-body-sm text-body-sm text-white/90 font-medium">Bin Location: Shelf 03 • Tote Tier 12</span>
</div>
</div>
<div className="w-full bg-black/15 rounded-lg p-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px]" /> Next Line-Haul Courier: Ssemwanga B. (Rider #402)
          </span>
<span className="font-mono font-bold">Departs 15:10</span>
</div>
</div>

<div className="bg-white border border-surface-border rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-border">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-slate-heading font-extrabold">Manifest Inspection</span>
<span className="px-space-xs py-0.5 rounded-full bg-slate-100 text-slate-700 font-label-sm text-label-sm font-mono font-bold">24 Items</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono font-bold">Filter: All Parcels</span>
</div>

<div className="flex flex-col gap-space-xs max-h-[460px] overflow-y-auto pr-1">

<div className="p-space-sm rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 animate-pulse shadow-sm">
<Icon name="scale" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-mono font-extrabold truncate">#SC-ORD-9499</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary text-white font-extrabold uppercase">ON SCALE</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-bold truncate">SoundCore Motion 300 Hi-Res Speaker</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">Buyer: Dennis Mukasa • Kololo Fast Track</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-1 rounded bg-primary text-white font-label-sm text-label-sm font-black shadow-sm">BAY A2</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono mt-0.5 font-semibold">0.78 kg</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-surface-border flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono">14:36:12</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-semibold truncate">Space One ANC Headphones Jet Black</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">07•• ••• 419 • Kololo Express</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-bold">BAY A2</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5 font-semibold">0.85 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-surface-border flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9490</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono">14:35:48</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-semibold truncate">Liberty 4 NC Noise Cancelling Earbuds</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">07•• ••• 991 • Nakasero Hill</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-bold">BAY A1</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5 font-semibold">0.24 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-surface-border flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9492</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono">14:35:10</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-semibold truncate">Anker 65W GaN Fast Charger 3-Port</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">07•• ••• 202 • Acacia Avenue</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-bold">BAY A2</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5 font-semibold">0.31 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-surface-border flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9494</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono">14:34:25</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-semibold truncate">Anker 30W PowerPort Nano III</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">07•• ••• 711 • Kampala Central</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-slate-200 text-slate-700 font-label-sm text-label-sm font-bold">BAY B1</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5 font-semibold">0.18 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-white border border-dashed border-surface-border-strong flex items-center justify-between opacity-80">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
<Icon name="hourglass_top" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-slate-muted font-mono">#SC-ORD-9502</span>
<span className="font-label-sm text-label-sm px-1 rounded bg-slate-100 text-slate-600 font-mono font-semibold">AWAITING SCAN</span>
</div>
<span className="font-label-md text-label-md text-slate-heading font-medium truncate">Anker SoundCore Life Q30 Wireless</span>
<span className="font-body-sm text-body-sm text-slate-muted truncate">07•• ••• 664 • Bukoto Main Rd</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-slate-100 text-slate-600 font-label-sm text-label-sm font-semibold">BAY C3?</span>
<span className="font-label-sm text-label-sm text-slate-muted font-mono mt-0.5">Est. 0.65 kg</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full h-14 rounded-2xl bg-primary hover:bg-[#c23100] text-white font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-md active:scale-98 transition-transform font-bold">
<Icon name="verified" className="text-[24px]" />
<span>COMPLETE BAG INTAKE &amp; PRINT BUNDLE TAG</span>
</button>
<button className="w-full h-11 rounded-xl bg-slate-100 hover:bg-slate-200 border border-surface-border text-slate-700 font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors font-semibold">
<Icon name="pause_circle" className="text-[18px]" />
<span>Suspend Scan Session &amp; Hold Courier Bag</span>
</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-space-md" id="tamperModal">
<div className="bg-white border border-surface-border max-w-lg w-full rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-red-100 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="crisis_alert" className="text-[28px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-danger-penalty font-extrabold">Tamper Breach Protocol Initiated</span>
<span className="font-label-sm text-label-sm text-slate-muted">Escrow Hold on Order: #SC-ORD-9499</span>
</div>
</div>
<p className="font-body-md text-body-md text-slate-body">
        Documenting visible external damage, weight variance exceeding platform tolerances, or seal compromise. Platform escrow will freeze seller remittance pending supervisor review.
      </p>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-slate-heading font-mono font-bold">Select Defect Reason:</label>
<select className="h-11 bg-slate-50 border border-surface-border-strong rounded-lg px-space-sm text-slate-heading font-body-md text-body-md focus:ring-2 focus:ring-primary focus:outline-none">
<option>Weight discrepancy &gt; 15% (Physical theft risk)</option>
<option>Crushed / Damaged protective exterior box</option>
<option>Broken tamper-evident barcode seal</option>
<option>Wrong SKU compared to merchant declaration</option>
</select>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md h-11 rounded-lg bg-slate-100 hover:bg-slate-200 border border-surface-border text-slate-700 font-label-md text-label-md font-semibold">Cancel</button>
<button className="px-space-md h-11 rounded-lg bg-danger-penalty hover:bg-red-700 text-white font-label-md text-label-md font-bold shadow-sm">Lock Parcel in Quarantine Bay</button>
</div>
</div>
</div>

</div></main>
<footer className="w-full bg-white border-t border-surface-border shadow-sm"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span className="font-label-sm text-label-sm text-slate-heading font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-slate-300 hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[16px]" /><span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Bank of Uganda Escrow Custody Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-slate-muted"><span className="font-mono">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-slate-100 border border-surface-border font-mono text-slate-700 font-semibold">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
