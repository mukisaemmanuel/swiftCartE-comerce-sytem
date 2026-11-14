// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/hub_intake_station_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HubIntakeStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeStationSwiftcartWorkHub: React.FC<HubIntakeStationSwiftcartWorkHubProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart UG</span><span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Intake</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Alerts" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors relative"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Theme Toggle" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm ml-0.5"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full px-margin space-y-space-md">

<div className="bg-surface-container-high rounded-xl p-space-sm shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="warehouse" className="text-primary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-extrabold">William St Central Hub</span>
<span className="bg-tertiary-container text-on-tertiary-container px-1.5 py-0.2 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-tight">KLA-CENTRAL</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight">Live Sync</span>
</div>
</div>
<div className="flex items-center justify-between text-secondary">
<div className="flex items-center gap-1">
<Icon name="badge" className="text-[16px]" />
<span className="font-label-md text-label-md text-on-surface">Op: Isaac Kato</span>
<span className="text-secondary font-label-md">•</span>
<span className="font-label-md text-label-md text-secondary font-semibold">Station 02</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-lg text-primary">
<Icon name="vibration" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-semibold">Haptics: ON</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-space-xs">
<div className="bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">Inbound</span>
<span className="font-headline-sm text-headline-sm text-on-surface leading-tight">184</span>
<span className="font-label-sm text-[9px] text-secondary">Batched</span>
</div>
<div className="bg-tertiary-fixed p-2 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-label-sm text-label-sm text-on-tertiary-fixed font-bold">Received</span>
<span className="font-headline-sm text-headline-sm text-on-tertiary-fixed leading-tight font-extrabold">142</span>
<span className="font-label-sm text-[9px] text-on-tertiary-fixed-variant font-semibold">77.2%</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">Pending</span>
<span className="font-headline-sm text-headline-sm text-secondary-container-variant text-primary leading-tight font-bold">42</span>
<span className="font-label-sm text-[9px] text-secondary">In Totes</span>
</div>
<div className="bg-error-container p-2 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-label-sm text-label-sm text-on-error-container font-bold">Hold/Dmg</span>
<span className="font-headline-sm text-headline-sm text-error leading-tight font-black">2</span>
<span className="font-label-sm text-[9px] text-error font-medium">Secured</span>
</div>
</div>

<div className="relative bg-inverse-surface rounded-xl overflow-hidden shadow-md flex flex-col items-center justify-between p-3 min-h-[220px]">

<div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-b from-primary-container/20 via-transparent to-primary/30"></div>

<div className="w-full flex items-center justify-between z-10">
<div className="flex items-center gap-1.5 bg-inverse-surface/80 px-2 py-1 rounded-full text-inverse-on-surface backdrop-blur-sm">
<Icon name="volume_up" className="text-[14px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm tracking-tight text-surface-bright">Auto-Beep Lock Active</span>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full bg-secondary-fixed/20 active:bg-primary-container text-inverse-on-surface flex items-center justify-center transition-all" id="torch-btn">
<Icon name="flashlight_on" className="text-[20px]" />
</button>
<button className="w-9 h-9 rounded-full bg-secondary-fixed/20 text-inverse-on-surface flex items-center justify-center active:scale-95 transition-all">
<Icon name="flip_camera_android" className="text-[20px]" />
</button>
</div>
</div>

<div className="relative w-48 h-32 my-2 flex items-center justify-center">

<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary-container"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary-container"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary-container"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary-container"></div>

<div className="w-full h-0.5 bg-primary-container shadow-[0_0_12px_#ff5722] relative animate-pulse" id="scanner-laser"></div>
<div className="absolute text-center flex flex-col items-center opacity-85">
<Icon name="barcode_scanner" className="text-inverse-on-surface text-[32px] opacity-40" />
<span className="font-label-sm text-label-sm text-surface-dim font-bold tracking-wider uppercase mt-1">Center Barcode / 2D QR</span>
</div>
</div>

<div className="w-full z-10 flex gap-2">
<div className="flex-1 bg-surface-container-highest/20 rounded-lg flex items-center px-2 py-1.5 backdrop-blur-md">
<Icon name="dialpad" className="text-[18px] text-surface-dim mr-1.5" />
<input className="w-full bg-transparent text-inverse-on-surface font-label-md text-label-md placeholder-secondary-fixed-dim focus:outline-none" placeholder="Scan or Enter 10-digit AWB #" type="text" />
</div>
<button className="bg-primary-container px-3 py-1.5 rounded-lg text-on-primary font-label-md text-label-md flex items-center justify-center font-bold active:scale-95 shadow-sm">
        Check
      </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-md flex flex-col space-y-space-xs relative overflow-hidden">

<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-1.5">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-md font-label-sm text-label-sm font-extrabold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" /> SCANNED OK
        </span>
<span className="font-label-sm text-label-sm text-secondary font-mono">14:02:18 EAT</span>
</div>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface tracking-tight font-mono">#SWIFT-UG-99412</span>
</div>

<div className="bg-inverse-surface rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider font-extrabold">Dispatch Sorting Bin</span>
<div className="font-price-display text-price-display text-tertiary-fixed font-black tracking-tight my-0.5">
        BIN-C14
      </div>
<div className="flex items-center gap-1.5 text-surface-bright">
<Icon name="near_me" className="text-[16px] text-primary-container" />
<span className="font-label-lg text-label-lg font-bold uppercase tracking-wide">Nakawa / Lugogo Station</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low p-2 rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Vendor / Merchant</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore UG Official</span>
<span className="font-label-sm text-[10px] text-secondary truncate">Pioneer Mall Branch</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Outbound Route</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Jinja District Hub</span>
<span className="font-label-sm text-[10px] text-primary font-semibold">Boda Line 04</span>
</div>
</div>
<div className="flex items-center justify-between bg-surface-container-high/60 px-2 py-1.5 rounded-lg">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="shield_lock" className="text-[18px] text-primary-container" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-[11px] text-on-surface font-bold truncate">Level-2 Tamper Seal Intact</span>
<span className="font-label-sm text-[10px] text-secondary font-mono truncate">#SEAL-8821 • SoundCore ANC Pro</span>
</div>
</div>
<span className="bg-tertiary text-on-tertiary px-2 py-0.5 rounded text-[10px] font-extrabold tracking-tight">VERIFIED</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-0.5">
<button className="w-full bg-primary-container text-on-primary h-12 rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg font-extrabold shadow-md active:scale-[0.98] transition-all" id="scan-pulse-trigger">
<Icon name="barcode_scanner" className="text-[22px]" />
<span>Scan Next Package (Continuous)</span>
</button>
<div className="grid grid-cols-2 gap-space-xs">
<button className="bg-error-container text-on-error-container h-10 rounded-lg flex items-center justify-center gap-1 font-label-md text-label-md font-bold active:scale-[0.98] transition-all">
<Icon name="gavel" className="text-[18px]" />
<span>Flag Broken Seal / Exception</span>
</button>
<button className="bg-surface-container-high text-on-surface h-10 rounded-lg flex items-center justify-center gap-1 font-label-md text-label-md font-bold active:scale-[0.98] transition-all">
<Icon name="print" className="text-[18px]" />
<span>Re-print Bag Routing Slip</span>
</button>
</div>
</div>

<div className="flex flex-col space-y-space-xs pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Shift Intake Stream</span>
<span className="font-label-sm text-label-sm text-secondary">Past 10 mins</span>
</div>
<div className="flex flex-col space-y-1.5">

<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-on-tertiary-fixed font-bold">
<Icon name="done" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">#SWIFT-UG-99411</span>
<span className="font-label-sm text-[10px] text-secondary">14:01</span>
</div>
<span className="font-label-sm text-label-sm text-secondary truncate">Anker Direct UG • USB-C Hub 8-in-1</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold px-2 py-0.5 rounded">BIN-B03</span>
</div>
</div>

<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-on-tertiary-fixed font-bold">
<Icon name="done" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">#SWIFT-UG-99408</span>
<span className="font-label-sm text-[10px] text-secondary">13:58</span>
</div>
<span className="font-label-sm text-label-sm text-secondary truncate">Nile Agri Supplies • Solar Inverter 3KVA</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold px-2 py-0.5 rounded">BIN-F12</span>
</div>
</div>

<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2 min-w-0">
<div className="w-7 h-7 rounded-full bg-error-container flex items-center justify-center flex-shrink-0 text-on-error-container font-bold">
<Icon name="report_problem" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-bold text-error">#SWIFT-UG-99405</span>
<span className="font-label-sm text-[10px] text-error font-medium">13:54</span>
</div>
<span className="font-label-sm text-label-sm text-secondary truncate">Kikuubo Wholesale • Broken Seal Carton</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="bg-error-container text-error font-label-sm text-label-sm font-bold px-2 py-0.5 rounded">HOLD-BAY</span>
</div>
</div>

<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2 min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-on-tertiary-fixed font-bold">
<Icon name="done" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">#SWIFT-UG-99399</span>
<span className="font-label-sm text-[10px] text-secondary">13:50</span>
</div>
<span className="font-label-sm text-label-sm text-secondary truncate">Victoria Pharma Ltd • Lab Thermometer Kit</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold px-2 py-0.5 rounded">BIN-A02</span>
</div>
</div>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary font-label-md"><div className="flex items-center justify-around h-16 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 transition-all text-primary font-label-md" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="sorting" href="#"><Icon name="filter_alt" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Sorting</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="outbound" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Outbound</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="inventory" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Inventory</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="audit" href="#"><Icon name="fact_check" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Audit</span></a></div></nav>
    </div>
  );
};

export default HubIntakeStationSwiftcartWorkHub;
