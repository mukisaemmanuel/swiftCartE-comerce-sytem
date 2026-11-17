// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_intake_high_speed_barcode_scanner_tablet/code.html
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

<div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-md mb-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-fixed shadow-inner">
<Icon name="inventory_2" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Active Intake Manifest</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">Live Bluetooth Scale Paired</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Bag #CB-KLA-9921</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">Pioneer Mall G-14 (SoundCore Official)</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-lg">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">Intake Progress</span>
<div className="flex items-center gap-space-xs justify-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">19</span>
<span className="font-body-md text-body-md text-on-surface-variant font-bold">/ 24</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold ml-space-xs">79%</span>
</div>
</div>
<div className="hidden sm:flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">Scan Cadence</span>
<div className="flex items-center gap-space-xs justify-end">
<span className="font-headline-sm text-headline-sm text-tertiary-fixed font-mono font-extrabold">2.1s</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ unit</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high">
<Icon name="format_image_left" className="text-emerald-escrow text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold leading-none">0 TAMPER FLAGS</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono leading-none mt-1">Payment Intact</span>
</div>
</div>
</div>
</div>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-space-md">

<div className="relative w-full rounded-xl bg-surface-container-lowest overflow-hidden shadow-xl p-space-md flex flex-col justify-between min-h-[380px]">

<div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffb5a1_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="relative z-10 flex items-center justify-between w-full">
<div className="flex items-center gap-space-xs bg-surface-dark/85 backdrop-blur-md px-space-sm py-1 rounded-lg">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">HUD CAMERA #01 ACTIVE</span>
<span className="text-outline-variant font-mono">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">60 FPS 1080p</span>
</div>
<div className="flex items-center gap-space-xs bg-emerald-escrow/15 backdrop-blur-md px-space-sm py-1 rounded-lg">
<Icon name="volume_up" className="text-emerald-escrow text-[16px]" />
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold font-mono">MATCH CONFIRMED (0.12s)</span>
</div>
</div>

<div className="relative z-10 my-space-md flex flex-col items-center justify-center">
<div className="relative w-64 h-44 rounded-lg bg-surface-container-low/40 backdrop-blur-xs flex items-center justify-center p-space-sm shadow-2xl">

<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-md"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-md"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-md"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-md"></div>

<div className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_#ffb5a1] animate-pulse"></div>

<div className="flex flex-col items-center gap-space-xs opacity-90">
<Icon name="qr_code_scanner" className="text-[64px] text-primary/80" />
<span className="font-code-display text-code-display text-primary tracking-widest font-extrabold select-all">SC-ORD-9488-UG</span>
</div>
</div>
<div className="mt-space-sm px-space-md py-0.5 rounded-full bg-surface-container-highest/80 backdrop-blur-sm flex items-center gap-space-xs">
<Icon name="sensors" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm text-secondary font-mono">USB Barcode Cradle Sync: ONLINE</span>
</div>
</div>

<div className="relative z-10 grid grid-cols-2 gap-space-sm w-full pt-space-xs">

<div className="bg-surface-dark/90 backdrop-blur-md p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="scale" className="text-tertiary-fixed text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono leading-none">Mettler-Toledo Tare</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">0.85 <span className="font-body-sm text-body-sm text-on-surface-variant">kg</span></span>
</div>
</div>
<div className="text-right">
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">±0.00kg MATCH</span>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">Decl: 0.85 kg</p>
</div>
</div>

<div className="bg-surface-dark/90 backdrop-blur-md p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="view_in_ar" className="text-secondary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono leading-none">Volumetric LiDAR</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">18×14×8 <span className="font-body-sm text-body-sm text-on-surface-variant">cm</span></span>
</div>
</div>
<div className="text-right">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">Grade A Cube</span>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">0.0020 m³</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Black matte over-ear high fidelity premium sound cancellation headphones in retail packaging set against clean tech warehouse backdrop" src="/images/7d64a51718c8c0b6.webp" />
<span className="absolute bottom-1 right-1 bg-emerald-escrow text-on-tertiary-fixed font-bold font-label-sm text-label-sm px-1 rounded">MATCH</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container/20 text-primary font-mono font-bold">#SC-ORD-9488-UG-P01</span>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> Payment Sealed
              </span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-1">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SKU: A3035-BLK • Destination: Dennis Mukasa (07•• ••• 882) • Kololo</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">Declared Value</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold text-primary whitespace-nowrap">UGX 385,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-1">Bank holding Ref: #ESC-9081</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-space-xs" htmlFor="manual-barcode-input">
<Icon name="keyboard" className="text-primary text-[18px]" />
            Fast Touch Entry / Barcode Override
          </label>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">USB HW Sniffer</span>
<button className="px-space-xs py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold flex items-center gap-1 active:scale-95 transition-transform" id="hwToggle">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
              ENABLED
            </button>
</div>
</div>
<div className="flex gap-space-xs">
<div className="relative flex-1">
<Icon name="barcode_reader" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
<input className="w-full h-12 bg-surface-container-lowest text-on-surface font-code-display text-code-display pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="manual-barcode-input" placeholder="Scan or key barcode string (e.g. SC-ORD-9499)..." type="text" />
</div>
<button className="h-12 px-space-md bg-secondary-container hover:bg-secondary text-on-surface rounded-lg font-label-lg text-label-lg flex items-center gap-space-xs transition-colors shrink-0">
<Icon name="add_task" className="text-[20px]" />
<span>Commit (Enter)</span>
</button>
</div>

<div className="grid grid-cols-6 gap-space-xs pt-space-xs">
<button className="h-10 bg-surface-container hover:bg-surface-container-highest text-on-surface rounded font-label-lg text-label-lg">1</button>
<button className="h-10 bg-surface-container hover:bg-surface-container-highest text-on-surface rounded font-label-lg text-label-lg">2</button>
<button className="h-10 bg-surface-container hover:bg-surface-container-highest text-on-surface rounded font-label-lg text-label-lg">3</button>
<button className="h-10 bg-surface-container hover:bg-surface-container-highest text-on-surface rounded font-label-lg text-label-lg">4</button>
<button className="h-10 bg-surface-container hover:bg-surface-container-highest text-on-surface rounded font-label-lg text-label-lg">5</button>
<button className="h-10 bg-surface-container-highest text-error rounded font-label-lg text-label-lg flex items-center justify-center">
<Icon name="backspace" className="text-[18px]" />
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="h-12 rounded-xl bg-error-container/30 hover:bg-error-container/50 text-error font-label-lg text-label-lg px-space-md flex items-center justify-center gap-space-xs transition-transform active:scale-98">
<Icon name="gavel" className="text-[20px]" />
<span>Flag Tamper / Damaged (F4)</span>
</button>
<button className="h-12 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-amber-warning font-label-lg text-label-lg px-space-md flex items-center justify-center gap-space-xs transition-transform active:scale-98">
<Icon name="notification_important" className="text-[20px]" />
<span>Extra Item (Unmanifested)</span>
</button>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-space-md">

<div className="w-full bg-gradient-to-br from-primary-container to-action-gradient-end rounded-2xl p-space-md text-on-primary-container shadow-xl flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-black/30 font-label-sm text-label-sm uppercase font-mono tracking-wider">AUTO-ROUTER v4.2</span>
<span className="font-label-sm text-label-sm text-white/90">TTS Audio Prompt Active</span>
</div>
<Icon name="volume_up" className="text-[24px] text-white" />
</div>
<div className="flex items-center gap-space-md py-space-xs">
<div className="w-16 h-16 rounded-xl bg-black/25 flex flex-col items-center justify-center font-headline-lg text-headline-lg font-black tracking-tight shrink-0 shadow-inner">
            A2
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-white/80 font-mono">Immediate Staging Destination</span>
<span className="font-headline-md text-headline-md font-extrabold tracking-tight">BAY A2 - Kololo Express</span>
<span className="font-body-sm text-body-sm text-white/90 font-medium">Bin Location: Shelf 03 • Tote Tier 12</span>
</div>
</div>
<div className="w-full bg-black/20 rounded-lg p-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px]" /> Next Line-Haul Courier: Ssemwanga B. (Rider #402)
          </span>
<span className="font-mono font-bold">Departs 15:10</span>
</div>
</div>

<div className="bg-surface-container rounded-xl shadow-md p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Manifest Inspection</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-mono">24 Items</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-mono">Filter: All Parcels</span>
</div>

<div className="flex flex-col gap-space-xs max-h-[460px] overflow-y-auto pr-1">

<div className="p-space-sm rounded-lg bg-primary-container/15 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 animate-pulse">
<Icon name="scale" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-mono font-extrabold truncate">#SC-ORD-9499</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary text-on-primary font-extrabold uppercase">ON SCALE</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Motion 300 Hi-Res Speaker</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Buyer: Dennis Mukasa • Kololo Fast Track</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-black">BAY A2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">0.78 kg</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:36:12</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Space One ANC Headphones Jet Black</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 419 • Kololo Express</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">BAY A2</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5">0.85 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9490</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:35:48</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Liberty 4 NC Noise Cancelling Earbuds</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 991 • Nakasero Hill</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">BAY A1</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5">0.24 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9492</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:35:10</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Anker 65W GaN Fast Charger 3-Port</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 202 • Acacia Avenue</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">BAY A2</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5">0.31 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono font-bold">#SC-ORD-9494</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:34:25</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Anker 30W PowerPort Nano III</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 711 • Kampala Central</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">BAY B1</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono mt-0.5">0.18 kg OK</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest/70 flex items-center justify-between opacity-75">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="hourglass_top" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#SC-ORD-9502</span>
<span className="font-label-sm text-label-sm px-1 rounded bg-surface-container-high text-on-surface-variant font-mono">AWAITING SCAN</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-normal truncate">Anker SoundCore Life Q30 Wireless</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">07•• ••• 664 • Bukoto Main Rd</span>
</div>
</div>
<div className="flex flex-col items-end shrink-0 pl-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">BAY C3?</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-0.5">Est. 0.65 kg</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full h-14 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-transform">
<Icon name="verified" className="text-[24px]" />
<span>COMPLETE BAG INTAKE &amp; PRINT BUNDLE TAG</span>
</button>
<button className="w-full h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors">
<Icon name="pause_circle" className="text-[18px]" />
<span>Suspend Scan Session &amp; Hold Courier Bag</span>
</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-space-md" id="tamperModal">
<div className="bg-surface-container-low max-w-lg w-full rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center shrink-0">
<Icon name="crisis_alert" className="text-[28px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-error font-extrabold">Tamper Breach Protocol Initiated</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Payment Hold on Order: #SC-ORD-9499</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface">
        Documenting visible external damage, weight variance exceeding platform tolerances, or seal compromise. Platform payment will freeze seller remittance pending supervisor review.
      </p>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant font-mono">Select Defect Reason:</label>
<select className="h-11 bg-surface-container rounded-lg px-space-sm text-on-surface font-body-md text-body-md focus:ring-1 focus:ring-primary focus:outline-none">
<option>Weight discrepancy &gt; 15% (Physical theft risk)</option>
<option>Crushed / Damaged protective exterior box</option>
<option>Broken Sealed Package Bag barcode seal</option>
<option>Wrong SKU compared to merchant declaration</option>
</select>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Cancel</button>
<button className="px-space-md h-11 rounded-lg bg-danger-penalty text-white font-label-md text-label-md font-bold">Lock Parcel in Quarantine Bay</button>
</div>
</div>
</div>

</div></main>
<footer className="w-full bg-surface-container-lowest shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-outline-variant hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[16px]" /><span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-bold">Pesapal payment holding Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant"><span className="font-mono">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-surface-container font-mono text-secondary">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
