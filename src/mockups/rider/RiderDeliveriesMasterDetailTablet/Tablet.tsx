// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/rider/rider_deliveries_master_detail_tablet/code.html
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
      
      <main className="w-full pt-28 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-amber-warning/15 px-space-md py-space-xs flex items-center justify-between text-on-surface">
<div className="flex items-center gap-space-xs">
<Icon name="offline_pin" className="text-[18px] text-amber-warning" />
<span className="font-label-md text-label-md text-on-surface">Mesh Sync Active: Kampala North Zone • 0 Offline Records Pending Relay</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary font-bold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-escrow animate-pulse"></span>
        GNSS RTK Fix (±1.2m)
      </span>
<span>•</span>
<span>Telematics Ping: 24ms</span>
</div>
</div>

<div className="w-full bg-surface-container-low px-space-lg py-space-md flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-md">

<div className="relative flex-1 min-w-[280px]">
<Icon name="search" className="absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full bg-surface-container-highest text-on-surface placeholder:text-on-surface-variant/70 pl-11 pr-space-md py-2.5 rounded-xl font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search Order #, Recipient, Hub Bay, Street..." type="text" value="#SC-ORD-9488" />
<button className="absolute right-2.5 top-1/2 -translate-y-1/2 px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant text-label-sm font-label-sm hover:text-on-surface">
          ESC
        </button>
</div>

<div className="flex items-center gap-space-sm bg-container-dark-low px-space-md py-2 rounded-xl">
<Icon name="shield_lock" className="text-emerald-escrow text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Fleet Liquidity Guard</span>
<span className="font-label-md text-label-md text-on-surface font-bold">
            Cash Collected: <span className="text-emerald-escrow whitespace-nowrap">UGX 0</span>
<span className="text-on-surface-variant font-normal">(100% MoMo payment protected - Zero Cash Risk)</span>
</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs pb-0.5">
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shrink-0">
<Icon name="apps" className="text-[16px] text-primary" />
<span>All Tasks</span>
<span className="bg-surface-dark px-1.5 py-0.2 rounded-full text-label-sm font-label-sm text-primary">5</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-md shrink-0">
<Icon name="two_wheeler" className="text-[16px]" />
<span>Out for Delivery</span>
<span className="bg-on-primary-container/20 px-1.5 py-0.2 rounded-full text-label-sm font-label-sm text-white">2</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0">
<Icon name="warehouse" className="text-[16px]" />
<span>Ready for Pickup</span>
<span className="bg-surface-dark px-1.5 py-0.2 rounded-full text-label-sm font-label-sm">1</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0">
<Icon name="assignment_return" className="text-[16px] text-danger-penalty" />
<span>Reverse Returns</span>
<span className="bg-surface-dark px-1.5 py-0.2 rounded-full text-label-sm font-label-sm text-danger-penalty">1</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0">
<Icon name="task_alt" className="text-[16px] text-tertiary" />
<span>Completed</span>
<span className="bg-surface-dark px-1.5 py-0.2 rounded-full text-label-sm font-label-sm text-tertiary">12</span>
</button>
</div>
</div>

<div className="w-full flex flex-col md:flex-row flex-1 p-space-md md:p-space-lg gap-space-lg">

<div className="w-full md:w-[38%] flex flex-col gap-space-md shrink-0">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide">Manifest Queue</span>
<span className="text-on-surface-variant text-label-sm font-label-sm">(Sorted by ETA Priority)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Real-time Auto Refresh</span>
</div>

<div className="w-full bg-surface-container rounded-xl p-space-md relative overflow-hidden shadow-xl ring-2 ring-primary-container transition-all cursor-pointer">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex flex-col gap-space-sm pl-1">

<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-code-display text-label-lg text-primary font-bold tracking-normal">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">package seal: <strong className="text-on-surface">#SC-TS-4091</strong></span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight whitespace-nowrap">UGX 388,500</span>
<span className="bg-emerald-escrow/15 text-emerald-escrow px-2 py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
                MOMO payment protected
              </span>
</div>
</div>

<div className="bg-surface-container-low p-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
<Icon name="person" className="text-primary text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Dennis Mukasa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
<Icon name="near_me" className="text-[14px] text-primary" />
                  Kololo (Acacia Ave)
                </span>
</div>
</div>
<span className="bg-primary/20 text-primary-fixed font-label-sm text-label-sm font-bold px-2 py-1 rounded">14m ETA</span>
</div>

<div className="flex items-center justify-between pt-1 text-on-surface-variant">
<span className="font-body-sm text-body-sm flex items-center gap-1">
<Icon name="inventory_2" className="text-[16px]" />
              2 Dispatched (Space One ANC + GaN)
            </span>
<span className="bg-action-gradient-end/20 text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              IN TRANSIT (DIRECT)
            </span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md relative overflow-hidden transition-all hover:bg-surface-container cursor-pointer">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-code-display text-label-lg text-on-surface font-bold tracking-normal">#SC-ORD-9490</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bay Locker Scan Pending</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold whitespace-nowrap">UGX 280,000</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
                Pesapal Pesapal Payment
              </span>
</div>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-8 w-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
<Icon name="person" className="text-secondary text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Patricia K.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
<Icon name="location_on" className="text-[14px]" />
                  Nakasero Hill
                </span>
</div>
</div>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">Stage 2</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm flex items-center gap-1 text-amber-warning">
<Icon name="qr_code_scanner" className="text-[16px]" />
              Pioneer Mall Bay 03
            </span>
<span className="font-label-sm text-label-sm bg-surface-bright text-on-surface px-2 py-0.5 rounded uppercase">
              Awaiting Scan
            </span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md relative overflow-hidden transition-all hover:bg-surface-container cursor-pointer opacity-90">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-code-display text-label-lg text-on-surface font-bold tracking-normal">#SC-ORD-9492</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Slot Queue</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold whitespace-nowrap">UGX 140,000</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="lock" className="text-[13px]" />
                Airtel Money Hold
              </span>
</div>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-8 w-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
<Icon name="person" className="text-on-surface-variant text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">David O.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
<Icon name="location_on" className="text-[14px]" />
                  Makerere Main
                </span>
</div>
</div>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">Window #4</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm">1 Parcel • Standard Parcel</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded uppercase">
              Scheduled 16:15 EAT
            </span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md relative overflow-hidden transition-all hover:bg-surface-container cursor-pointer">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-label-lg text-danger-penalty font-bold tracking-normal">#DSP-8910-KLA</span>
<span className="bg-danger-penalty/20 text-danger-penalty text-label-sm font-label-sm px-1.5 py-0.2 rounded font-bold">RETURN</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty/90">Torn Seal Incident Verification</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold whitespace-nowrap">UGX 235,000</span>
<span className="text-danger-penalty font-label-sm text-label-sm">Disputed Payment</span>
</div>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-8 w-8 rounded-full bg-danger-penalty/20 flex items-center justify-center shrink-0">
<Icon name="cached" className="text-danger-penalty text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Ntinda Hub Logistics Depot</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">To Seller: Kyambogo Retail</span>
</div>
</div>
<Icon name="warning" className="text-danger-penalty text-[20px]" />
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm text-danger-penalty">Security Bag #UG-RET-89</span>
<span className="font-label-sm text-label-sm bg-danger-penalty/15 text-danger-penalty px-2 py-0.5 rounded font-bold uppercase">
              Reverse Return
            </span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-[62%] flex flex-col gap-space-md">

<div className="w-full bg-surface-container rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-sm pb-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight font-extrabold">Order #SC-ORD-9488</span>
<span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                Active Drop-Off
              </span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1 rounded-lg">
<Icon name="verified_user" className="text-emerald-escrow text-[18px]" />
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">Payment Reserve: UGX 388,500</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-sm text-label-sm pt-1">
<div className="flex items-center gap-space-sm">
<span className="text-on-surface">Pesapal Payment Hold Ref #TX-998124</span>
<span>•</span>
<span className="text-emerald-escrow">Merchant Authorized</span>
</div>
<span className="font-code-display text-on-surface text-label-sm">BLIND PIN REQUIRED AT HANDOVER</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Order holding Chain</span>
<div className="grid grid-cols-4 gap-space-xs">

<div className="flex flex-col gap-1 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex items-center justify-between">
<span className="h-5 w-5 rounded-full bg-emerald-escrow text-surface-dark flex items-center justify-center font-bold text-[11px]">✓</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:22</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">1. Payment Confirmed</span>
<span className="font-body-sm text-body-sm text-emerald-escrow">MTN MoMo reserve</span>
</div>

<div className="flex flex-col gap-1 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex items-center justify-between">
<span className="h-5 w-5 rounded-full bg-emerald-escrow text-surface-dark flex items-center justify-center font-bold text-[11px]">✓</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:28</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">2. Merchant Sealed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#SC-TS-4091</span>
</div>

<div className="flex flex-col gap-1 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex items-center justify-between">
<span className="h-5 w-5 rounded-full bg-emerald-escrow text-surface-dark flex items-center justify-center font-bold text-[11px]">✓</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:31</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">3. Rider Handover</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Brian Mukasa</span>
</div>

<div className="flex flex-col gap-1 bg-primary-container/20 p-2.5 rounded-lg ring-1 ring-primary-container">
<div className="flex items-center justify-between">
<span className="h-5 w-5 rounded-full bg-action-gradient-start text-surface-dark flex items-center justify-center font-bold text-[11px] animate-pulse">4</span>
<span className="font-label-sm text-label-sm text-primary font-bold">14m ETA</span>
</div>
<span className="font-label-md text-label-md text-primary font-bold leading-tight">4. Drop-off Transit</span>
<span className="font-body-sm text-body-sm text-primary">In Flight</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">

<div className="lg:col-span-2 relative h-48 rounded-xl overflow-hidden bg-surface-container-lowest" data-location="Kololo Acacia Avenue Kampala Uganda" style={{}}>

<div className="absolute inset-0 bg-cover bg-center opacity-70" data-alt="Dark themed vector cartography satellite map of Acacia Avenue Kololo Kampala at dusk with illuminated arterial streets and routing waypoints in neon orange and cyan highlights." style={{"backgroundImage":"url('/images/5cd906636c486dae.webp')"}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent flex flex-col justify-between p-space-md">
<div className="flex items-center justify-between">
<span className="bg-surface-dark/90 backdrop-blur-md px-2.5 py-1 rounded-md text-primary font-label-md text-label-md flex items-center gap-1.5 shadow">
<Icon name="navigation" className="text-[16px]" />
<span>Heading North: Kira Rd Corridor</span>
</span>
<span className="bg-surface-dark/90 backdrop-blur-md px-2 py-1 rounded-md text-tertiary font-label-sm text-label-sm">
                  Live GPS
                </span>
</div>

<div className="flex items-center gap-space-sm bg-surface-dark/95 backdrop-blur-md p-2 rounded-lg self-start shadow-xl">
<span className="h-3 w-3 rounded-full bg-emerald-escrow animate-ping"></span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Plot 14 Acacia Avenue</span>
<span className="font-body-sm text-body-sm text-emerald-escrow">Within 250m delivery geofence target</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Live Telematics</span>
<div className="grid grid-cols-2 gap-space-sm py-space-xs">
<div className="flex flex-col bg-surface-container p-2 rounded-lg">
<span className="text-on-surface-variant font-label-sm text-label-sm">Cruising Speed</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">34 <span className="text-body-sm font-normal text-on-surface-variant">km/h</span></span>
</div>
<div className="flex flex-col bg-surface-container p-2 rounded-lg">
<span className="text-on-surface-variant font-label-sm text-label-sm">Battery</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">94%</span>
</div>
<div className="flex flex-col bg-surface-container p-2 rounded-lg">
<span className="text-on-surface-variant font-label-sm text-label-sm">GPS Precision</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">1.2m</span>
</div>
<div className="flex flex-col bg-surface-container p-2 rounded-lg">
<span className="text-on-surface-variant font-label-sm text-label-sm">Signal (4G)</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">-68 dBm</span>
</div>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-1">
<span>Boda Node: UEF 842X</span>
<span className="text-tertiary font-bold">RTK Connected</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
<Icon name="home_pin" className="text-primary text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface">Dennis Mukasa</span>

<span className="bg-surface-container-highest px-2 py-0.5 rounded font-code-display text-label-sm text-on-surface-variant tracking-wider">
                  07•• ••• 123
                </span>
<span className="text-emerald-escrow font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="verified" className="text-[14px]" />
                  Buyer Phone Verified
                </span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Plot 14 Acacia Avenue, Lower Kololo Gate A (Behind Housing Finance Bank)</span>
</div>
</div>

<button className="flex items-center gap-space-xs bg-surface-container-highest hover:bg-surface-bright text-on-surface px-space-md py-2.5 rounded-xl font-label-md text-label-md transition-colors shrink-0 shadow">
<Icon name="call" className="text-primary text-[18px]" />
<span>Relay Call via Proxy</span>
</button>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Manifest &amp; package seal Verification</span>
<span className="text-label-sm font-label-sm text-primary font-bold">2/2 Items Barcode Checked</span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<Icon name="headphones" className="text-secondary text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Color: Jet Black • S/N: SN-48192-UG-OK</span>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="bg-emerald-escrow/15 text-emerald-escrow px-2 py-0.5 rounded font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
                  Verified
                </span>
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 295,000</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="flex items-center gap-space-sm min-w-0">
<div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<Icon name="bolt" className="text-primary text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Anker 65W GaN Dual-Port Fast Charger</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Color: Arctic White • S/N: SN-GAN65-9011</span>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="bg-emerald-escrow/15 text-emerald-escrow px-2 py-0.5 rounded font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
                  Verified
                </span>
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 93,500</span>
</div>
</div>
</div>

<div className="flex items-center justify-between bg-surface-container-lowest px-space-md py-2 rounded-lg text-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="lock_open_right" className="text-[16px] text-emerald-escrow" />
              Physical Security Bag #4091: High-bond holographic seal intact
            </span>
<span className="text-tertiary font-label-sm text-label-sm font-bold">SEAL UNBROKEN</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<button className="w-full h-14 bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white rounded-2xl font-label-lg text-label-lg font-extrabold shadow-lg flex items-center justify-center gap-space-sm hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer" id="openHandoverModalBtn">
<Icon name="pin" className="text-[24px]" />
<span>Proceed to Handover &amp; 6-Digit Code Entry</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>

<div className="grid grid-cols-2 gap-space-md">
<button className="h-12 bg-surface-container-low hover:bg-surface-container-highest text-on-surface rounded-xl font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors">
<Icon name="person_off" className="text-[18px] text-amber-warning" />
<span>Customer Unable to Receive</span>
</button>
<button className="h-12 bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty rounded-xl font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors font-bold">
<Icon name="gpp_maybe" className="text-[18px]" />
<span>package seal Compromised Alert</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-surface-dark/85 backdrop-blur-md flex items-end sm:items-center justify-center p-space-md transition-opacity" id="handoverModal">
<div className="w-full max-w-lg bg-container-dark-high rounded-3xl p-space-xl flex flex-col gap-space-lg shadow-2xl relative">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-emerald-escrow font-label-sm text-label-sm font-bold uppercase tracking-wider">
<Icon name="lock_clock" className="text-[16px]" />
<span>payment settlement Trigger</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Customer Handover Verification</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ask recipient Dennis Mukasa for their blind 6-digit confirmation code.</span>
</div>
<button className="h-8 w-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" id="closeHandoverModalBtn">
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="flex flex-col gap-space-sm items-center">
<div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} type="text" value="7" />
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} type="text" value="3" />
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} type="text" value="9" />
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} placeholder="•" type="text" />
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} placeholder="•" type="text" />
<input className="w-12 h-14 text-center font-headline-md text-headline-md text-on-surface bg-surface-container rounded-xl outline-none focus:ring-2 focus:ring-primary-container" maxLength={1} placeholder="•" type="text" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant text-center">
          Cryptographically blinds driver from knowing OTP before buyer verification.
        </span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Instant Payout to Boda Wallet</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold whitespace-nowrap">UGX 8,500 Delivery Fee</span>
</div>
<Icon name="account_balance_wallet" className="text-tertiary text-[26px]" />
</div>

<div className="flex flex-col gap-space-xs">
<button className="w-full h-14 bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-lg active:scale-[0.99] transition-all" id="confirmSettlementBtn">
<Icon name="check_circle" className="text-[20px]" />
<span>Verify Code &amp; release payment</span>
</button>
<button className="w-full py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface" id="cancelModalBtn">
          Return to Manifest
        </button>
</div>
</div>
</div>
</div>
</main>
<footer className="w-full bg-surface-container-lowest py-space-md"><div className="w-full px-margin flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm"><span>SwiftCart Uganda • Field Operations Mesh v3.14</span><div className="flex items-center gap-space-sm"><span className="flex items-center gap-space-xs"><span className="h-2 w-2 rounded-full bg-emerald-escrow"></span><span>Payment Holds Synchronized</span></span><span>•</span><span>Node: KLA-HUB-04 (Ntinda)</span></div></div></footer>
    </div>
  );
};

export default Tablet;
