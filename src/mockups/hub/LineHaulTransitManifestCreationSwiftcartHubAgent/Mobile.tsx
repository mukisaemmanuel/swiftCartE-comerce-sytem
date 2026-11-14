// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/line_haul_transit_manifest_creation_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface LineHaulTransitManifestCreationSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LineHaulTransitManifestCreationSwiftcartHubAgent: React.FC<LineHaulTransitManifestCreationSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 -ml-1 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">Package Detail</h1><span className="font-label-sm text-label-sm text-on-surface-variant truncate">Station #04 - Kampala</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full">

<div className="px-margin pt-space-sm pb-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-flex w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Draft #MNF-LH-042</span>
</div>
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full text-on-surface">
<Icon name="hub" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm font-semibold">William St Central Hub</span>
</div>
</div>
<div className="px-margin py-space-md flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">EXPRESS LINE-HAUL</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-medium">Bays 01-04</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate">Route #LH-UG-04</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Kampala Central → Jinja Hub → Mbale Depot</span>
</div>
<button aria-label="Switch Route" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" type="button">
<Icon name="swap_horiz" className="text-[20px]" />
</button>
</div>

<div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1.5 rounded-lg text-center">
<div className="flex flex-col items-center py-1 bg-surface-container-lowest rounded shadow-xs">
<span className="font-label-sm text-label-sm text-primary font-bold">ORIGIN</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate w-full px-1">Kampala</span>
</div>
<div className="flex flex-col items-center py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">WAYPOINT</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate w-full px-1">Jinja Bay A</span>
</div>
<div className="flex flex-col items-center py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">DESTINATION</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate w-full px-1">Mbale Regional</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-0.5">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="warehouse" className="text-[16px]" />
<span className="font-label-sm text-label-sm">STAGING BAY</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Dock Bay 02</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Inter-Hub Freight</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-0.5">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="schedule" className="text-[16px]" />
<span className="font-label-sm text-label-sm">SCHEDULED ETD</span>
</div>
<span className="font-label-lg text-label-lg text-primary font-extrabold truncate">Today 16:30 EAT</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">T-minus 1h 45m</span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-2.5 flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0 shadow-xs">
<Icon name="local_shipping" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Isuzu Forward 10T</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 bg-surface-container-highest text-on-surface font-mono rounded">UBD 914Z</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Driver: Godfrey Ochen (#DRV-8812)</span>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
<Icon name="verified" className="text-[18px]" />
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="analytics" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Payload Utilization</span>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">OPTIMAL LOAD</span>
</div>

<div className="flex items-center gap-space-md">

<div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="57, 100" strokeLinecap="round" strokeWidth="3.8"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-price-display text-headline-sm text-on-surface font-extrabold leading-none">57%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Volume</span>
</div>
</div>

<div className="flex flex-col gap-2 flex-1 min-w-0">
<div>
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">Gross Payload</span>
<span className="font-label-md text-label-md text-on-surface font-bold">1,840 / 3,200 kg</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"57.5%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">Roll Cages / Totes</span>
<span className="font-label-md text-label-md text-on-surface font-bold">3 of 5 Loaded</span>
</div>
<div className="flex gap-1">
<div className="flex-1 h-2 rounded-full bg-tertiary"></div>
<div className="flex-1 h-2 rounded-full bg-tertiary"></div>
<div className="flex-1 h-2 rounded-full bg-tertiary"></div>
<div className="flex-1 h-2 rounded-full bg-surface-container"></div>
<div className="flex-1 h-2 rounded-full bg-surface-container"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Scanned Parcels</span>
<div className="flex items-baseline gap-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">84</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">+4 pending</span>
</div>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Insured Escrow</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">UGX 26,450,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Goods-In-Transit cover</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="qr_code_scanner" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Active Ingestion Portal</span>
</div>
<button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold active:scale-95 transition-transform" id="toggleAudioBtn" type="button">
<Icon name="volume_up" className="text-[15px]" />
<span id="audioText">Audio Chime ON</span>
</button>
</div>

<div className="flex flex-col gap-2">
<div className="relative flex items-center">
<div className="absolute left-3 flex items-center pointer-events-none text-primary">
<Icon name="barcode_scanner" className="text-[24px]" />
</div>
<input className="w-full h-12 pl-11 pr-24 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:bg-surface-container-lowest focus:outline-none transition-colors" id="scanInput" placeholder="Scan Parcel or Bulk Sack QR..." type="text" />
<button className="absolute right-1.5 h-9 px-3 bg-primary-container text-on-primary font-label-md text-label-md rounded-md font-bold flex items-center gap-1 active:scale-95 transition-transform" id="manualScanSubmit" type="button">
<span>Scan</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
<div className="flex items-center justify-between gap-space-xs pt-1">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors" type="button">
<Icon name="edit_note" className="text-[18px]" />
<span>Add Manual AWB</span>
</button>
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors" type="button">
<Icon name="inventory_2" className="text-[18px]" />
<span>Batch Tote Scan</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Downstream Hub Waypoints</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 Stages Mapped</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold">1</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Jinja District Hub (Bay A)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">48 Parcels • 2 Roll Cages Loaded</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-tertiary text-on-tertiary px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
<span>Sealed &amp; Weighed</span>
</span>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="headphones" className="text-[20px] text-on-surface-variant" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">SoundCore Space One ANC</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">AWB #SWIFT-UG-99412</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">0.85 kg</span>
<div className="flex items-center gap-0.5 justify-end text-tertiary">
<Icon name="verified_user" className="text-[13px]" />
<span className="font-label-sm text-label-sm">Insured</span>
</div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<Icon name="solar_power" className="text-[20px] text-on-surface-variant" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Solar Hybrid Inverter 3KVA</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">AWB #SWIFT-UG-8820</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">14.20 kg</span>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-1.5 rounded">Heavy Lift</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold">2</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Iganga Drop Station</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">16 Parcels • 1 Heavy Sack</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
<Icon name="inventory" className="text-[14px]" />
<span>Staged</span>
</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold">3</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Mbale Regional Depot</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">20 of 24 Parcels Ingested</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-primary text-on-primary px-2.5 py-1 rounded-full font-bold flex items-center gap-1 animate-pulse">
<Icon name="pending" className="text-[14px]" />
<span>4 units left</span>
</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Remaining items: Smart Watches (x2), Diagnostic Tool (x2)</span>
<button className="font-label-sm text-label-sm text-primary font-bold active:underline" type="button">View List</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="security" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">High-Security Tamper Bolts</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface font-bold px-2 py-0.5 rounded">ISO 17712</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold" htmlFor="primaryBoltSeal">Primary Rear Bolt Seal</label>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" />
<span>Scanned &amp; Verified</span>
</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 bg-surface-container-lowest px-3 py-2 rounded-md flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold">BOU-SEAL-8891</span>
<Icon name="lock" className="text-[18px] text-tertiary" />
</div>
<button aria-label="Re-scan primary bolt seal" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" type="button">
<Icon name="photo_camera" className="text-[20px]" />
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold" htmlFor="secondaryBoltSeal">Secondary Bulkhead Foil Seal</label>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">RFID Paired</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 bg-surface-container-lowest px-3 py-2 rounded-md flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold">SWIFT-SEC-9940</span>
<Icon name="pin" className="text-[18px] text-primary" />
</div>
<button aria-label="Edit secondary seal" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface active:scale-95 transition-transform" type="button">
<Icon name="edit" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs pb-space-lg">
<button className="w-full h-13 py-3.5 px-4 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg font-extrabold shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform" id="sealManifestBtn" type="button">
<Icon name="verified" className="text-[22px]" />
<span>Seal Manifest &amp; Print Waybill (84 Parcels)</span>
</button>
<button className="w-full py-3 px-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 active:bg-surface-container-high transition-colors" type="button">
<Icon name="pause_circle" className="text-[20px]" />
<span>Save Draft &amp; Pause Ingestion</span>
</button>
<div className="text-center pt-1">
<button className="font-label-md text-label-md text-primary font-bold active:opacity-70 transition-opacity" type="button">
          Transfer Unscanned to Next Dispatch →
        </button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default LineHaulTransitManifestCreationSwiftcartHubAgent;
