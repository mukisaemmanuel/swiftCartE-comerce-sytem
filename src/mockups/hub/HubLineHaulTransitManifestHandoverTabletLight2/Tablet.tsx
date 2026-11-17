// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_line_haul_transit_manifest_handover_tablet_light_2/code.html
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
      
      <main className="w-full pt-28 px-margin pb-space-xl flex-1 bg-surface"><div className="flex flex-col w-full">

<div className="w-full mb-space-sm flex items-center justify-between px-space-md py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
<div className="flex items-center gap-space-xs text-slate-600 font-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span className="font-bold text-slate-900 uppercase tracking-wider">William St Central Hub (KLA-HUB-03)</span>
<span className="text-slate-400">→</span>
<span className="text-secondary font-semibold">Regional Inter-Hub Logistics Mesh [East Corridor]</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-emerald-700">
<Icon name="sensors" className="text-[15px]" />
<span className="font-mono font-medium">P2P Telemetry Live (Bay 04 Loading Dock)</span>
</div>
</div>

<section className="w-full rounded-xl bg-white border border-slate-200 p-space-md mb-space-md shadow-sm">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">

<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-orange-50 text-primary border border-orange-200 font-mono text-label-sm font-bold tracking-wider">#LH-MAN-2025-084</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-label-sm flex items-center gap-1 font-bold">
<Icon name="verified_user" className="text-[13px]" />
            Pesapal Payment Backed
          </span>
<span className="px-space-xs py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 font-label-sm font-bold flex items-center gap-1">
<Icon name="alarm" className="text-[13px]" />
            Departs 16:30 EAT (in 38 mins)
          </span>
</div>
<h1 className="font-headline-md text-headline-md text-slate-900 tracking-tight truncate whitespace-nowrap">
          Route Leg 01: William St Central Hub → Jinja Logistics Hub
        </h1>
<div className="flex flex-wrap items-center gap-space-sm text-slate-600 font-body-sm">
<span className="flex items-center gap-1">
<Icon name="local_shipping" className="text-[15px] text-secondary" />
            Isuzu Forward 4.5T (<span className="font-mono text-slate-900 font-semibold">UBH 924L</span>)
          </span>
<span className="text-slate-300">•</span>
<span className="flex items-center gap-1">
<Icon name="badge" className="text-[15px] text-primary" />
            Driver: <span className="text-slate-900 font-semibold">Ssekitoleko Paul</span> (#DRV-4410)
          </span>
<span className="text-slate-300">•</span>
<span className="flex items-center gap-1">
<Icon name="hub" className="text-[15px] text-emerald-700" />
            Eastern Uganda Transit Corridor
          </span>
</div>
</div>

<div className="flex items-center gap-space-md bg-emerald-50/60 border border-emerald-200 px-space-md py-space-sm rounded-xl shrink-0">
<div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
<Icon name="account_balance_wallet" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-slate-600 uppercase tracking-wider font-semibold">Payment Value in Transit</span>
<span className="font-price-display text-price-display text-emerald-700 font-mono font-extrabold whitespace-nowrap">UGX 18,450,000</span>
<span className="font-body-sm text-slate-600">84 Master Satchels • 342 Individual Orders</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="rounded-xl bg-white border border-slate-200 p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="barcode_scanner" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-slate-900">Satchel Loading Scan Terminal</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-semibold">
            Laser Wedge: CONNECTED
          </span>
</div>
<div className="relative flex items-center">
<input className="w-full bg-slate-50 border border-slate-300 text-slate-900 font-body-md rounded-xl pl-11 pr-28 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-slate-400 font-mono text-[14px]" id="barcode-input" placeholder="Scan or enter Master Satchel Barcode (e.g. MS-JJA-103)..." type="text" />
<Icon name="qr_code_scanner" className="absolute left-3.5 text-slate-400 text-[20px]" />
<div className="absolute right-2 flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary transition-colors" id="camera-scan-btn" title="Camera Scan">
<Icon name="photo_camera" className="text-[18px]" />
</button>
<button className="px-space-xs py-1.5 rounded-lg bg-primary text-white font-label-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-transform" id="manual-commit-btn">
              Scan
            </button>
</div>
</div>

<div className="flex items-center justify-between gap-space-xs pt-1">
<div className="flex items-center gap-1.5 overflow-x-auto">
<button className="px-2.5 py-1 rounded bg-primary text-white font-label-sm font-bold">All Satchels (84)</button>
<button className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-label-sm">Loaded (82)</button>
<button className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-700 font-label-sm font-bold">Staged (2)</button>
<button className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-label-sm">Damaged (0)</button>
</div>
<span className="font-label-sm text-slate-500 hidden sm:inline">Sort: Bay Queue</span>
</div>
</div>

<div className="rounded-xl bg-white border border-slate-200 p-space-md shadow-sm flex flex-col gap-space-md">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-slate-900">Loading Dock Live Checklist</span>
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
</div>
<span className="font-headline-sm text-headline-sm font-mono text-emerald-700">82 <span className="text-slate-500 font-normal text-body-sm">/ 84 Scanned (97.6%)</span></span>
</div>

<div className="w-full h-2.5 bg-slate-100 border border-slate-200 rounded-full overflow-hidden flex">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-300" style={{"width":"97.6%"}}></div>
</div>
</div>

<div className="flex flex-col gap-space-xs max-h-[460px] overflow-y-auto pr-1" id="satchel-list">

<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-space-sm hover:bg-slate-100 transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-JJA-101</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-slate-500">Seal: TS-9912</span>
</div>
<div className="text-body-sm text-slate-600 truncate whitespace-nowrap">
                  Jinja Central Main Depot • 12 Consumer Electronics (UGX 2,400,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-emerald-700 font-mono font-bold">BAY 04A</span>
<div className="text-body-sm text-slate-500">18.4 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-space-sm hover:bg-slate-100 transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-JJA-102</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-slate-500">Seal: TS-9914</span>
</div>
<div className="text-body-sm text-slate-600 truncate whitespace-nowrap">
                  Iganga High St Pickup Locker • 18 FMCG &amp; Cosmetics (UGX 1,180,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-emerald-700 font-mono font-bold">BAY 04A</span>
<div className="text-body-sm text-slate-500">14.2 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-space-sm hover:bg-slate-100 transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-MKN-201</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-slate-500">Seal: TS-9920</span>
</div>
<div className="text-body-sm text-slate-600 truncate whitespace-nowrap">
                  Mukono Town Express Station • 24 Mixed Parcels (UGX 3,240,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-emerald-700 font-mono font-bold">BAY 04B</span>
<div className="text-body-sm text-slate-500">22.8 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-space-sm hover:bg-slate-100 transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-LUZ-301</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-slate-500">Seal: TS-9922</span>
</div>
<div className="text-body-sm text-slate-600 truncate whitespace-nowrap">
                  Lugazi Sugar Belt Hub • 14 Audio Accessories (UGX 890,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-emerald-700 font-mono font-bold">BAY 04B</span>
<div className="text-body-sm text-slate-500">11.1 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-amber-50/50 border border-amber-300 flex items-center justify-between gap-space-sm shadow-sm" id="satchel-103">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 animate-pulse">
<Icon name="hourglass_top" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-JJA-103</span>
<span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm font-bold">STAGED • AWAITING SCAN</span>
</div>
<div className="text-body-sm text-slate-600 truncate">
                  Jinja Walukuba Tech Station • 14 High-Value Audio (Seal #TS-9930)
                </div>
</div>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-white border border-primary text-primary font-label-sm font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
              Verify
            </button>
</div>

<div className="p-space-sm rounded-xl bg-amber-50/50 border border-amber-300 flex items-center justify-between gap-space-sm shadow-sm" id="satchel-104">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 animate-pulse">
<Icon name="hourglass_top" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-slate-900">#MS-JJA-104</span>
<span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm font-bold">STAGED • AWAITING SCAN</span>
</div>
<div className="text-body-sm text-slate-600 truncate whitespace-nowrap">
                  Busia Border Gate Staging • 22 Cross-Border Orders (UGX 4,120,000)
                </div>
</div>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-white border border-primary text-primary font-label-sm font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
              Verify
            </button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
<Icon name="scale" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-slate-500 uppercase font-semibold">Manifest Weight</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm text-slate-900 font-mono">1,420</span>
<span className="font-body-sm text-slate-500 font-mono">/ 4,500 kg (31.5%)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
<Icon name="thermostat" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-slate-500 uppercase font-semibold">Cargo Bay Ambient</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm text-emerald-700 font-mono">24°C</span>
<span className="font-body-sm text-slate-600">Dry Cargo (Safe)</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="rounded-xl bg-white border border-slate-200 p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-slate-500 font-bold">Line-Haul Driver of Record</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-label-sm font-bold flex items-center gap-1">
<Icon name="how_to_reg" className="text-[13px]" />
            Permit Valid
          </span>
</div>
<div className="flex items-center gap-space-md pt-1">
<div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
<img className="w-full h-full object-cover" data-alt="Professional identification portrait of an East African logistics line-haul truck driver wearing high-visibility branded uniform in a modern transport hub setting, crisp studio lighting on dark background" src="/images/683933980d2cb6c9.webp" />
<div className="absolute bottom-0 right-0 bg-emerald-600 text-white p-0.5 rounded-tl">
<Icon name="verified" className="text-[12px] block" />
</div>
</div>
<div className="flex flex-col min-w-0">
<h2 className="font-headline-sm text-headline-sm text-slate-900 truncate whitespace-nowrap">Ssekitoleko Paul</h2>
<div className="font-mono font-label-sm text-primary font-bold">Badge #DRV-4410</div>
<div className="font-body-sm text-slate-600 truncate">NIN: CM78044192 | Pesapal Permit: #UG-LOG-881</div>
<div className="font-label-sm text-slate-500 font-semibold truncate">SwiftCart Fleet East Network</div>
</div>
</div>
</div>

<div className="rounded-xl bg-white border border-slate-200 p-space-md shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between mb-1">
<span className="font-label-lg text-label-lg text-slate-900 font-bold flex items-center gap-space-xs">
<Icon name="route" className="text-secondary text-[18px]" />
            Kampala-Jinja Transit Geofences
          </span>
<span className="font-mono font-label-sm text-emerald-700 font-semibold">3 Active Telemetry Gates</span>
</div>
<div className="relative flex flex-col gap-space-xs pt-1">

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<Icon name="flag" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-slate-900 font-semibold">William St Hub (Origin)</span>
<span className="font-mono text-emerald-700 text-label-sm font-bold">Bay 04 Loading</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
<Icon name="gps_fixed" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-slate-600">Mukono Bypass Gate</span>
<span className="font-mono text-slate-500 text-label-sm">Auto-Seal Check 1</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
<Icon name="gps_fixed" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-slate-600">Lugazi Sugar Corridor</span>
<span className="font-mono text-slate-500 text-label-sm">Auto-Seal Check 2</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
<Icon name="pin_drop" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-slate-600">Jinja Nile Bridge Inbound</span>
<span className="font-mono text-slate-500 text-label-sm">Destination reserve</span>
</div>
</div>
</div>

<div className="mt-space-xs p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-space-xs text-slate-700 font-label-sm">
<Icon name="lock" className="text-emerald-600 text-[16px]" />
<span>Rear E-Seal: <strong className="text-slate-900 font-mono">SEAL-UBH924L-084</strong> armed upon dispatch commit.</span>
</div>
</div>

<div className="rounded-xl bg-white border border-slate-200 p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="draw" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-slate-900 font-bold">Dual Chain-of-holding Signatures</span>
</div>
<span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-bold">
            SHA-256 HASHED
          </span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-slate-600 font-semibold">Agent: Okello David</span>
<span className="text-emerald-700 font-label-sm font-bold flex items-center text-[10px]">
<Icon name="check" className="text-[12px]" /> Signed
              </span>
</div>
<div className="w-full h-24 rounded-lg bg-slate-50 border border-slate-200 relative overflow-hidden flex items-center justify-center"><svg className="w-full h-full text-primary opacity-90" fill="none" viewBox="0 0 200 80"><path d="M15 55 Q 35 15, 65 40 T 115 30 T 155 50 T 185 25" stroke="#da3700" strokeLinecap="round" strokeWidth="2.5"></path><path d="M45 45 Q 85 65, 125 45" stroke="#da3700" strokeLinecap="round" strokeWidth="1.5"></path></svg><span className="absolute bottom-1 right-2 font-mono text-[9px] text-slate-500 font-semibold">14:31:02 EAT</span></div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-slate-600 font-semibold">Driver: Ssekitoleko Paul</span>
<button className="text-slate-500 text-[11px] hover:text-slate-900 font-medium">Clear</button>
</div>
<div className="w-full h-24 rounded-lg bg-slate-50 border border-slate-300 relative flex flex-col items-center justify-center cursor-crosshair" id="driver-pad-container">
<canvas className="w-full h-full rounded-lg" height="96" id="driver-signature-canvas" width="200"></canvas>
<div className="absolute pointer-events-none flex flex-col items-center text-slate-400" id="sign-prompt">
<Icon name="gesture" className="text-[20px]" />
<span className="text-[10px] font-label-sm font-medium">Driver signs here on glass</span>
</div>
</div>
</div>
</div>
<div className="font-mono text-[10px] text-slate-500 text-center truncate pt-1">
          SHA-256: 7d4a98f430c4e12e8b...e9b7201c9a41 (Ledger Block #884102)
        </div>
</div>

<div className="flex flex-col gap-space-xs mt-1">

<button className="w-full h-[54px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-extrabold shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-space-sm" id="dispatch-confirm-btn">
<Icon name="lock_clock" className="text-[22px]" />
          SEAL TRUCK, SIGN MANIFEST &amp; RELEASE DISPATCH
        </button>
<div className="grid grid-cols-2 gap-space-xs">

<button className="h-11 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 shadow-sm">
<Icon name="print" className="text-[18px] text-slate-600" />
            Print Waybill (PDF)
          </button>

<button className="h-11 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1">
<Icon name="report_problem" className="text-[18px]" />
            Flag Anomaly / Seal Discrepancy
          </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 hidden transition-all duration-300" id="toast-banner">
<div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-white">
<Icon name="check_circle" className="text-emerald-400" />
<span className="font-label-md font-medium" id="toast-text">Satchel Scanned and Verified.</span>
</div>
</div>
</div>
</main>
<footer className="w-full bg-white border-t border-slate-200 shadow-sm"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-600"></span><span className="font-label-sm text-label-sm text-slate-800 font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-slate-300 hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-600 text-[16px]" /><span className="font-label-sm text-label-sm text-emerald-700 font-bold">Pesapal payment holding Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-slate-500"><span className="font-mono font-medium">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-700 font-semibold">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
