// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_line_haul_transit_manifest_handover_tablet_light_1/code.html
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

<div className="w-full mb-space-sm flex items-center justify-between px-space-md py-1.5 rounded-lg bg-surface-container-high shadow-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-bold text-on-surface uppercase tracking-wider">William St Central Hub (KLA-HUB-03)</span>
<span className="text-outline">→</span>
<span className="text-secondary font-semibold">Regional Inter-Hub Logistics Mesh [East Corridor]</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-tertiary">
<Icon name="sensors" className="text-[15px]" />
<span className="font-mono">P2P Telemetry Live (Bay 04 Loading Dock)</span>
</div>
</div>

<section className="w-full rounded-xl bg-container-dark-low p-space-md mb-space-md shadow-md">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">

<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container font-mono text-label-sm text-primary font-bold tracking-wider">#LH-MAN-2025-084</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm flex items-center gap-1 font-bold">
<Icon name="verified_user" className="text-[13px]" />
            Pesapal Payment Backed
          </span>
<span className="px-space-xs py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-sm font-bold flex items-center gap-1">
<Icon name="alarm" className="text-[13px]" />
            Departs 16:30 EAT (in 38 mins)
          </span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight truncate whitespace-nowrap">
          Route Leg 01: William St Central Hub → Jinja Logistics Hub
        </h1>
<div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-body-sm">
<span className="flex items-center gap-1">
<Icon name="local_shipping" className="text-[15px] text-secondary" />
            Isuzu Forward 4.5T (<span className="font-mono text-on-surface font-semibold">UBH 924L</span>)
          </span>
<span className="text-outline">•</span>
<span className="flex items-center gap-1">
<Icon name="badge" className="text-[15px] text-primary" />
            Driver: <span className="text-on-surface font-semibold">Ssekitoleko Paul</span> (#DRV-4410)
          </span>
<span className="text-outline">•</span>
<span className="flex items-center gap-1">
<Icon name="hub" className="text-[15px] text-tertiary" />
            Eastern Uganda Transit Corridor
          </span>
</div>
</div>

<div className="flex items-center gap-space-md bg-surface-container px-space-md py-space-sm rounded-xl shrink-0">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/20 flex items-center justify-center text-emerald-escrow">
<Icon name="account_balance_wallet" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Payment Value in Transit</span>
<span className="font-price-display text-price-display text-emerald-escrow font-mono whitespace-nowrap">UGX 18,450,000</span>
<span className="font-body-sm text-secondary-fixed-dim">84 Master Satchels • 342 Individual Orders</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="rounded-xl bg-container-dark-low p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="barcode_scanner" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Satchel Loading Scan Terminal</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-tertiary-fixed-dim font-mono">
            Laser Wedge: CONNECTED
          </span>
</div>
<div className="relative flex items-center">
<input className="w-full bg-surface-container-high text-on-surface font-body-md rounded-xl pl-11 pr-28 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-on-surface-variant/50 font-mono text-[14px]" id="barcode-input" placeholder="Scan or enter Master Satchel Barcode (e.g. MS-JJA-103)..." type="text" />
<Icon name="qr_code_scanner" className="absolute left-3.5 text-on-surface-variant text-[20px]" />
<div className="absolute right-2 flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" id="camera-scan-btn" title="Camera Scan">
<Icon name="photo_camera" className="text-[18px]" />
</button>
<button className="px-space-xs py-1.5 rounded-lg bg-primary text-on-primary font-label-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-transform" id="manual-commit-btn">
              Scan
            </button>
</div>
</div>

<div className="flex items-center justify-between gap-space-xs pt-1">
<div className="flex items-center gap-1.5 overflow-x-auto">
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm font-bold">All Satchels (84)</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm">Loaded (82)</button>
<button className="px-2.5 py-1 rounded bg-amber-warning/20 text-amber-warning font-label-sm font-bold">Staged (2)</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm">Damaged (0)</button>
</div>
<span className="font-label-sm text-on-surface-variant hidden sm:inline">Sort: Bay Queue</span>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-md shadow-md flex flex-col gap-space-md">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Loading Dock Live Checklist</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
</div>
<span className="font-headline-sm text-headline-sm font-mono text-tertiary">82 <span className="text-on-surface-variant font-normal text-body-sm">/ 84 Scanned (97.6%)</span></span>
</div>

<div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden flex">
<div className="h-full bg-gradient-to-r from-emerald-escrow to-tertiary rounded-full transition-all duration-300" style={{"width":"97.6%"}}></div>
</div>
</div>

<div className="flex flex-col gap-space-xs max-h-[460px] overflow-y-auto pr-1" id="satchel-list">

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-JJA-101</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-on-surface-variant">Seal: TS-9912</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate whitespace-nowrap">
                  Jinja Central Main Depot • 12 Consumer Electronics (UGX 2,400,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-tertiary-fixed-dim font-mono">BAY 04A</span>
<div className="text-body-sm text-on-surface-variant">18.4 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-JJA-102</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-on-surface-variant">Seal: TS-9914</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate whitespace-nowrap">
                  Iganga High St Pickup Locker • 18 FMCG &amp; Cosmetics (UGX 1,180,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-tertiary-fixed-dim font-mono">BAY 04A</span>
<div className="text-body-sm text-on-surface-variant">14.2 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-MKN-201</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-on-surface-variant">Seal: TS-9920</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate whitespace-nowrap">
                  Mukono Town Express Station • 24 Mixed Parcels (UGX 3,240,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-tertiary-fixed-dim font-mono">BAY 04B</span>
<div className="text-body-sm text-on-surface-variant">22.8 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-sm hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="check_circle" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-LUZ-301</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm font-bold">LOADED</span>
<span className="font-mono text-label-sm text-on-surface-variant">Seal: TS-9922</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate whitespace-nowrap">
                  Lugazi Sugar Belt Hub • 14 Audio Accessories (UGX 890,000)
                </div>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-tertiary-fixed-dim font-mono">BAY 04B</span>
<div className="text-body-sm text-on-surface-variant">11.1 kg</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-high border-none flex items-center justify-between gap-space-sm shadow-sm ring-1 ring-amber-warning/40" id="satchel-103">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center shrink-0 animate-pulse">
<Icon name="hourglass_top" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-JJA-103</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm font-bold">STAGED • AWAITING SCAN</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate">
                  Jinja Walukuba Tech Station • 14 High-Value Audio (Seal #TS-9930)
                </div>
</div>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-highest text-primary font-label-sm font-bold hover:bg-primary hover:text-on-primary transition-all">
              Verify
            </button>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-high border-none flex items-center justify-between gap-space-sm shadow-sm ring-1 ring-amber-warning/40" id="satchel-104">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center shrink-0 animate-pulse">
<Icon name="hourglass_top" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-mono font-bold text-label-md text-on-surface">#MS-JJA-104</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm font-bold">STAGED • AWAITING SCAN</span>
</div>
<div className="text-body-sm text-on-surface-variant truncate whitespace-nowrap">
                  Busia Border Gate Staging • 22 Cross-Border Orders (UGX 4,120,000)
                </div>
</div>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-highest text-primary font-label-sm font-bold hover:bg-primary hover:text-on-primary transition-all">
              Verify
            </button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container grid grid-cols-2 gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0">
<Icon name="scale" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase">Manifest Weight</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-mono">1,420</span>
<span className="font-body-sm text-on-surface-variant font-mono">/ 4,500 kg (31.5%)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
<Icon name="thermostat" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase">Cargo Bay Ambient</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">24°C</span>
<span className="font-body-sm text-on-surface-variant">Dry Cargo (Safe)</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="rounded-xl bg-container-dark-high p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant">Line-Haul Driver of Record</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm font-bold flex items-center gap-1">
<Icon name="how_to_reg" className="text-[13px]" />
            Permit Valid
          </span>
</div>
<div className="flex items-center gap-space-md pt-1">
<div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Professional identification portrait of an East African logistics line-haul truck driver wearing high-visibility branded uniform in a modern transport hub setting, crisp studio lighting on dark background" src="/images/683933980d2cb6c9.webp" />
<div className="absolute bottom-0 right-0 bg-emerald-escrow text-on-tertiary p-0.5 rounded-tl">
<Icon name="verified" className="text-[12px] block" />
</div>
</div>
<div className="flex flex-col min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate whitespace-nowrap">Ssekitoleko Paul</h2>
<div className="font-mono font-label-sm text-primary">Badge #DRV-4410</div>
<div className="font-body-sm text-on-surface-variant truncate">NIN: CM78044192 | Pesapal Permit: #UG-LOG-881</div>
<div className="font-label-sm text-secondary truncate">SwiftCart Fleet East Network</div>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-md shadow-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between mb-1">
<span className="font-label-lg text-label-lg text-on-surface flex items-center gap-space-xs">
<Icon name="route" className="text-secondary text-[18px]" />
            Kampala-Jinja Transit Geofences
          </span>
<span className="font-mono font-label-sm text-tertiary">3 Active Telemetry Gates</span>
</div>
<div className="relative flex flex-col gap-space-xs pt-1">

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="flag" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-on-surface font-medium">William St Hub (Origin)</span>
<span className="font-mono text-emerald-escrow text-label-sm">Bay 04 Loading</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="gps_fixed" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-on-surface-variant">Mukono Bypass Gate</span>
<span className="font-mono text-on-surface-variant text-label-sm">Auto-Seal Check 1</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="gps_fixed" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-on-surface-variant">Lugazi Sugar Corridor</span>
<span className="font-mono text-on-surface-variant text-label-sm">Auto-Seal Check 2</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="pin_drop" className="text-[14px]" />
</div>
<div className="flex items-center justify-between w-full font-body-sm">
<span className="text-on-surface-variant">Jinja Nile Bridge Inbound</span>
<span className="font-mono text-on-surface-variant text-label-sm">Destination reserve</span>
</div>
</div>
</div>

<div className="mt-space-xs p-2 rounded-lg bg-surface-container flex items-center gap-space-xs text-on-surface-variant font-label-sm">
<Icon name="lock" className="text-emerald-escrow text-[16px]" />
<span>Rear E-Seal: <strong className="text-on-surface font-mono">SEAL-UBH924L-084</strong> armed upon dispatch commit.</span>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="draw" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-on-surface">Dual Chain-of-holding Signatures</span>
</div>
<span className="text-[10px] font-mono text-secondary-fixed-dim bg-secondary-container/40 px-1.5 py-0.5 rounded">
            SHA-256 HASHED
          </span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-on-surface-variant">Agent: Okello David</span>
<span className="text-emerald-escrow font-label-sm flex items-center text-[10px]">
<Icon name="check" className="text-[12px]" /> Signed
              </span>
</div>
<div className="w-full h-24 rounded-lg bg-surface-container-high relative overflow-hidden flex items-center justify-center"><svg className="w-full h-full text-primary opacity-90" fill="none" viewBox="0 0 200 80"><path d="M15 55 Q 35 15, 65 40 T 115 30 T 155 50 T 185 25" stroke="#da3700" strokeLinecap="round" strokeWidth="2.5"></path><path d="M45 45 Q 85 65, 125 45" stroke="#da3700" strokeLinecap="round" strokeWidth="1.5"></path></svg><span className="absolute bottom-1 right-2 font-mono text-[9px] text-on-surface-variant font-semibold">14:31:02 EAT</span></div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-on-surface-variant">Driver: Ssekitoleko Paul</span>
<button className="text-outline text-[11px] hover:text-on-surface">Clear</button>
</div>
<div className="w-full h-24 rounded-lg bg-surface-container-high relative flex flex-col items-center justify-center cursor-crosshair" id="driver-pad-container">
<canvas className="w-full h-full rounded-lg" height="96" id="driver-signature-canvas" width="200"></canvas>
<div className="absolute pointer-events-none flex flex-col items-center text-on-surface-variant/40" id="sign-prompt">
<Icon name="gesture" className="text-[20px]" />
<span className="text-[10px] font-label-sm">Driver signs here on glass</span>
</div>
</div>
</div>
</div>
<div className="font-mono text-[10px] text-on-surface-variant/70 text-center truncate pt-1">
          SHA-256: 7d4a98f430c4e12e8b...e9b7201c9a41 (Ledger Block #884102)
        </div>
</div>

<div className="flex flex-col gap-space-xs mt-1">

<button className="w-full h-[54px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-extrabold shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-space-sm" id="dispatch-confirm-btn">
<Icon name="lock_clock" className="text-[22px]" />
          SEAL TRUCK, SIGN MANIFEST &amp; RELEASE DISPATCH
        </button>
<div className="grid grid-cols-2 gap-space-xs">

<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1">
<Icon name="print" className="text-[18px]" />
            Print Waybill (PDF)
          </button>

<button className="h-11 rounded-lg bg-danger-penalty/15 text-danger-penalty hover:bg-danger-penalty/25 font-label-md text-label-md transition-colors flex items-center justify-center gap-1">
<Icon name="report_problem" className="text-[18px]" />
            Flag Anomaly / Seal Discrepancy
          </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 hidden transition-all duration-300" id="toast-banner">
<div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-container-highest shadow-2xl text-on-surface">
<Icon name="check_circle" className="text-emerald-escrow" />
<span className="font-label-md" id="toast-text">Satchel Scanned and Verified.</span>
</div>
</div>
</div>
</main>
<footer className="w-full bg-surface-container-lowest shadow-sm"><div className="w-full px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-xs"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mesh Node Sync: 99.98% Latency 14ms (William St P2P)</span></div><span className="text-outline-variant hidden sm:inline">•</span><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[16px]" /><span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-bold">Pesapal payment holding Assured</span></div></div><div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant"><span className="font-mono">EAT (UTC+3) 14:38:09</span><span className="px-space-xs py-0.5 rounded bg-surface-container font-mono text-secondary">NODE_ID: KLA-C-03</span></div></div></footer>
    </div>
  );
};

export default Tablet;
