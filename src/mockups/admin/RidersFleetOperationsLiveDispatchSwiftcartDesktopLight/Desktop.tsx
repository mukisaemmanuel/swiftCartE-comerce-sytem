// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/riders_fleet_operations_live_dispatch_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 bg-surface min-h-screen px-space-xl py-space-lg"><div className="flex flex-col w-full space-y-space-lg">

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col space-y-1">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="hover:text-primary transition-colors cursor-pointer">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-primary transition-colors cursor-pointer">Riders Fleet &amp; Logistics</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Live Dispatch &amp; Stage Control Center</span>
</div>
<div className="flex flex-wrap items-center gap-space-md pt-1">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Kampala Corridor Fleet Command</h1>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-bold tracking-wide">18 BODA STAGES LIVE</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="inline-flex items-center gap-1">
<Icon name="cell_tower" className="text-[16px] text-tertiary" />
          SafeBoda GPS 4G Telemetry: <strong className="text-on-surface font-semibold">99.8% Online</strong>
</span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1">
<Icon name="radar" className="text-[16px] text-primary" />
          Auto-Dispatch Mesh Radius: <strong className="text-on-surface font-semibold">15.0 km</strong>
</span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1">
<Icon name="schedule" className="text-[16px] text-secondary" />
          EAT Timezone: <strong className="text-on-surface font-semibold" id="eat-clock">14:24:18 EAT</strong>
</span>
</div>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm">
<Icon name="tune" className="text-[18px]" />
<span>Manual Override</span>
</button>
<button className="px-space-md h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-sm">
<Icon name="download" className="text-[18px]" />
<span>Telemetry CSV</span>
</button>
<button className="px-space-lg h-10 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-primary-container text-on-primary-container font-label-lg text-label-lg flex items-center gap-1.5 transition-all shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:scale-[0.98]">
<Icon name="person_add" className="text-[18px]" />
<span>Onboard Courier</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-primary-fixed/20 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Active On-Duty Fleet</span>
<span className="p-2 rounded-xl bg-primary-fixed text-on-primary-fixed">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">286</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ 320 Couriers</span>
</div>
<div className="mt-2 flex items-center justify-between font-label-sm text-label-sm">
<span className="text-tertiary font-bold flex items-center gap-0.5">
<Icon name="trending_up" className="text-[16px]" /> 89.3% Availability
          </span>
<span className="text-on-surface-variant">18 Metro Stages</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-primary-container h-full rounded-full w-[89.3%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-secondary-fixed/30 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">In-Transit Dispatches</span>
<span className="p-2 rounded-xl bg-secondary-fixed text-on-secondary-fixed">
<Icon name="local_shipping" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">142</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Live Trips</span>
</div>
<div className="mt-2 flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold flex items-center gap-1">
<Icon name="speed" className="text-[14px] text-secondary" /> 28 km/h Avg Speed
          </span>
<span className="text-on-surface-variant">21.4 min Transit Time</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-secondary h-full rounded-full w-[72%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-tertiary-fixed/30 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Dispatch Queue</span>
<span className="p-2 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed">
<Icon name="hub" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary-container font-extrabold">24</span>
<span className="font-body-md text-body-md text-on-surface-variant">Pending Bids</span>
</div>
<div className="mt-2 flex items-center justify-between font-label-sm text-label-sm">
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="timer" className="text-[14px]" /> 42s Avg Match
          </span>
<span className="text-on-surface-variant">Mesh Algorithm v4.2</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-tertiary h-full rounded-full w-[44%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-primary-fixed/30 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Disbursed Rider Float</span>
<span className="p-2 rounded-xl bg-surface-container text-primary">
<Icon name="account_balance_wallet" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-primary uppercase font-bold whitespace-nowrap">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">14,820,000</span>
</div>
<div className="mt-2 flex items-center justify-between font-label-sm text-label-sm">
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="done_all" className="text-[14px]" /> 0 Float Fails
          </span>
<span className="text-on-surface-variant">MTN &amp; Airtel MoMo</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-tertiary-container h-full rounded-full w-[96%]"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 flex flex-col space-y-space-lg">

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-xl bg-primary-fixed text-primary">
<Icon name="map" className="text-[20px]" />
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Kampala Metro Corridor Map</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live telemetry tracking across Nakasero, Kololo, Nakawa, Bugolobi &amp; Makerere</p>
</div>
</div>

<div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xl">
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm font-bold">All Stages</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container-lowest/60 text-on-surface-variant font-label-sm text-label-sm transition-all">Central Nakasero</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container-lowest/60 text-on-surface-variant font-label-sm text-label-sm transition-all">East Nakawa</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container-lowest/60 text-on-surface-variant font-label-sm text-label-sm transition-all">North Kawempe</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container-lowest/60 text-on-surface-variant font-label-sm text-label-sm transition-all">South Makindye</button>
</div>
</div>

<div className="relative w-full h-[430px] rounded-xl overflow-hidden bg-[#f4eee8] select-none shadow-inner">

<svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 800 450">

<path d="M600 450 C 650 380, 720 370, 800 360 L 800 450 Z" fill="#d9e6eb"></path>
<text fill="#78909c" font-size="11" font-weight="700" letter-spacing="1" x="710" y="420">LAKE VICTORIA BASIN</text>


<path d="M 120 280 C 260 250, 480 230, 780 210" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 120 280 C 260 250, 480 230, 780 210" fill="none" stroke="#fbd9cf" strokeLinecap="round" strokeWidth="6"></path>
<text fill="#907067" font-size="10" font-weight="600" x="520" y="222">JINJA ROAD ARTERIAL</text>

<path d="M 280 400 C 310 260, 360 160, 430 40" fill="none" stroke="#ffffff" strokeWidth="10"></path>
<path d="M 280 400 C 310 260, 360 160, 430 40" fill="none" stroke="#ffe2d9" strokeWidth="4"></path>
<text fill="#907067" font-size="9" font-weight="600" transform="rotate(-62 330 240)" x="330" y="240">YUSUF LULE ROAD</text>

<path d="M 240 180 C 380 150, 560 130, 760 100" fill="none" stroke="#ffffff" strokeWidth="8"></path>
<path d="M 240 180 C 380 150, 560 130, 760 100" fill="none" stroke="#fff1ec" strokeWidth="3"></path>
<text fill="#907067" font-size="9" font-weight="600" x="440" y="132">KIRA ROAD / ACACIA CORRIDOR</text>

<path d="M 80 160 C 200 240, 290 320, 380 440" fill="none" stroke="#ffffff" strokeWidth="8"></path>
<path d="M 80 160 C 200 240, 290 320, 380 440" fill="none" stroke="#fff1ec" strokeWidth="3"></path>

<path d="M 200 40 L 220 380 M 340 30 L 460 410 M 520 60 L 580 390 M 100 120 L 700 320" fill="none" stroke="#f0e4db" strokeDasharray="4 4" strokeWidth="2"></path>

<circle cx="270" cy="270" fill="#da3700" fillOpacity="0.04" r="65" stroke="#da3700" strokeDasharray="3 3" strokeWidth="1.5"></circle>
<circle cx="410" cy="140" fill="#006947" fillOpacity="0.04" r="55" stroke="#006947" strokeDasharray="3 3" strokeWidth="1.5"></circle>
<circle cx="610" cy="220" fill="#505b90" fillOpacity="0.04" r="58" stroke="#505b90" strokeDasharray="3 3" strokeWidth="1.5"></circle>

<path className="animate-pulse" d="M 285 260 Q 320 220 350 190 T 425 135" fill="none" stroke="#da3700" strokeDasharray="6 4" strokeWidth="3.5"></path>
</svg>

<div className="absolute top-6 left-12 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm font-label-sm text-label-sm text-on-surface-variant font-bold">
            Makerere Hill
          </div>
<div className="absolute top-28 left-48 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-primary-container"></span>
            Nakasero Commercial Hub
          </div>
<div className="absolute top-10 right-80 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
            Kololo Hill &amp; Acacia
          </div>
<div className="absolute bottom-36 right-24 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
            Bugolobi Village Mall &amp; Spring Rd
          </div>
<div className="absolute top-36 right-48 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm font-label-sm text-label-sm text-on-surface-variant font-bold">
            Nakawa Industrial Corridor
          </div>


<div className="absolute top-[170px] left-[340px] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-primary-container opacity-50"></span>
<div className="relative bg-primary-container text-on-primary-container p-1.5 rounded-full shadow-lg flex items-center justify-center ring-4 ring-white">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
</div>

<div className="mt-1 -ml-16 bg-surface-container-lowest px-2.5 py-1.5 rounded-xl shadow-md whitespace-nowrap border-l-4 border-primary">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
<span className="font-extrabold text-primary">#RC-8821</span>
<span>• UEF 842X</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold uppercase text-[9px]">4 min ETA</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate max-w-[160px]">Acacia Residences 4B</div>
</div>
</div>

<div className="absolute top-[120px] left-[425px] transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="bg-secondary text-on-secondary p-1 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
<Icon name="pin_drop" className="text-[14px]" />
</div>
<span className="bg-surface-container-lowest/95 text-on-surface font-label-sm text-[10px] px-1.5 py-0.5 rounded shadow-sm font-semibold ml-1">Drop-off #SC-98241</span>
</div>
<div className="absolute top-[260px] left-[285px] transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="bg-[#ff8a1f] text-white p-1 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
<Icon name="storefront" className="text-[14px]" />
</div>
<span className="bg-surface-container-lowest/95 text-on-surface font-label-sm text-[10px] px-1.5 py-0.5 rounded shadow-sm font-semibold ml-1">Shop #44 Nakasero</span>
</div>
<div className="absolute top-[80px] left-[520px] transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="bg-tertiary text-on-tertiary p-1.5 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<span className="bg-surface-container-lowest/90 text-on-surface font-label-sm text-[10px] px-1.5 py-0.5 rounded shadow-sm font-bold ml-1">#RC-7910 • 9 min ETA</span>
</div>
<div className="absolute top-[230px] left-[610px] transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="bg-tertiary text-on-tertiary p-1.5 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<span className="bg-surface-container-lowest/90 text-on-surface font-label-sm text-[10px] px-1.5 py-0.5 rounded shadow-sm font-bold ml-1">#RC-6102 • Bugolobi</span>
</div>
<div className="absolute top-[310px] left-[230px] transform -translate-x-1/2 -translate-y-1/2 z-10">
<div className="bg-tertiary text-on-tertiary p-1.5 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<span className="bg-surface-container-lowest/90 text-on-surface font-label-sm text-[10px] px-1.5 py-0.5 rounded shadow-sm font-bold ml-1">#RC-4491 • William St</span>
</div>

<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-md">
<div className="flex items-center gap-4 text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-tertiary"></span>
<span>Active Courier In-Transit (142)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-[#ff8a1f]"></span>
<span>Merchant Pickup Node (38)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
<span>Client Drop-off Point (47)</span>
</div>
</div>

<div className="flex items-center gap-1">
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface" title="Recenter Nakasero Corridor">
<Icon name="my_location" className="text-[16px]" />
</button>
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface" title="Zoom In">
<Icon name="add" className="text-[16px]" />
</button>
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface" title="Zoom Out">
<Icon name="remove" className="text-[16px]" />
</button>
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface" title="Traffic Heatmap">
<Icon name="layers" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<Icon name="local_parking" className="text-[20px] text-primary" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Registered Boda Stages &amp; Marshall Staging</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Live Corridors: 4 Primary Active Hubs</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md">Stage Designation</th>
<th className="py-space-sm px-space-md">Hub Anchor Corridor</th>
<th className="py-space-sm px-space-md">Stage Marshall</th>
<th className="py-space-sm px-space-md text-center">Boda Standby</th>
<th className="py-space-sm px-space-md text-center">Dispatched Trips</th>
<th className="py-space-sm px-space-md">Congestion Index</th>
<th className="py-space-sm px-space-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">William St Stage #04</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Code: #KLA-CBD-04</span>
</td>
<td className="py-3 px-space-md">
<span className="font-semibold text-on-surface">Nakasero Hub / CBD</span>
<div className="text-on-surface-variant text-[11px]">Kampala Road Spine</div>
</td>
<td className="py-3 px-space-md">
<span className="text-on-surface font-medium">Musisi Godfrey</span>
<div className="text-on-surface-variant text-[11px]">+256 701 ••• 412</div>
</td>
<td className="py-3 px-space-md text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">38 Couriers</span>
</td>
<td className="py-3 px-space-md text-center">
<span className="font-bold text-primary font-label-md text-label-md">14 Outbound</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full w-[28%]"></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Low (28%)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-all">Broadcast</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-[#ff8a1f]"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Acacia Mall Stage #02</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Code: #KLA-KLO-02</span>
</td>
<td className="py-3 px-space-md">
<span className="font-semibold text-on-surface">Kololo Sub-Hub</span>
<div className="text-on-surface-variant text-[11px]">Kira Rd &amp; John Babiiha</div>
</td>
<td className="py-3 px-space-md">
<span className="text-on-surface font-medium">Bukenya Charles</span>
<div className="text-on-surface-variant text-[11px]">+256 772 ••• 883</div>
</td>
<td className="py-3 px-space-md text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">24 Couriers</span>
</td>
<td className="py-3 px-space-md text-center">
<span className="font-bold text-primary font-label-md text-label-md">18 Outbound</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-[#ff8a1f] h-full rounded-full w-[64%]"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Moderate (64%)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-all">Broadcast</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Nakawa Market Hub #01</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Code: #KLA-NKW-01</span>
</td>
<td className="py-3 px-space-md">
<span className="font-semibold text-on-surface">East Corridor / Jinja Rd</span>
<div className="text-on-surface-variant text-[11px]">Port Bell Junction</div>
</td>
<td className="py-3 px-space-md">
<span className="text-on-surface font-medium">Okello Patrick</span>
<div className="text-on-surface-variant text-[11px]">+256 752 ••• 190</div>
</td>
<td className="py-3 px-space-md text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">32 Couriers</span>
</td>
<td className="py-3 px-space-md text-center">
<span className="font-bold text-primary font-label-md text-label-md">21 Outbound</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full w-[41%]"></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Optimal (41%)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-all">Broadcast</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Bugolobi Village Mall #05</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Code: #KLA-BGL-05</span>
</td>
<td className="py-3 px-space-md">
<span className="font-semibold text-on-surface">Spring Road Corridor</span>
<div className="text-on-surface-variant text-[11px]">Luthuli Ave Spine</div>
</td>
<td className="py-3 px-space-md">
<span className="text-on-surface font-medium">Kabali Denis</span>
<div className="text-on-surface-variant text-[11px]">+256 788 ••• 662</div>
</td>
<td className="py-3 px-space-md text-center">
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">19 Couriers</span>
</td>
<td className="py-3 px-space-md text-center">
<span className="font-bold text-primary font-label-md text-label-md">11 Outbound</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full w-[22%]"></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Low (22%)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-all">Broadcast</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col space-y-space-md">

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-2xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Portrait of an experienced Ugandan professional motorcycle delivery courier wearing an orange helmet and reflective vest, smiling confidently against daylight Kampala background" src="/images/f628bc23c98d7042.webp" />
<div className="absolute bottom-0 right-0 p-0.5 bg-tertiary rounded-tl-lg text-on-tertiary">
<Icon name="verified" className="text-[12px] block" />
</div>
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Brian Kizito</h3>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-extrabold uppercase">Gold</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono">ID: #RC-8821 • SafeBoda Fleet Partner</p>
<div className="flex items-center gap-1.5 text-on-surface mt-0.5 font-label-sm text-label-sm">
<Icon name="star" className="text-[16px] text-amber-500 fill-1" />
<span className="font-bold">4.92</span>
<span className="text-on-surface-variant">(648 verified dispatches)</span>
</div>
</div>
</div>
<span className="px-2 py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">ON TRIP</span>
</div>

<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-space-sm rounded-xl text-center">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Motorbike</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Bajaj 150cc</span>
<span className="text-[10px] text-primary font-mono font-bold">UEF 842X</span>
</div>
<div className="flex flex-col border-x border-surface-container">
<span className="font-label-sm text-label-sm text-on-surface-variant">GPS Battery</span>
<span className="font-label-md text-label-md font-bold text-tertiary flex items-center justify-center gap-0.5">
<Icon name="battery_5_bar" className="text-[14px]" /> 84%
            </span>
<span className="text-[10px] text-on-surface-variant">MTN 4G Strong</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Today Float</span>
<span className="font-label-md text-label-md font-bold text-on-surface whitespace-nowrap">UGX 68,000</span>
<span className="text-[10px] text-tertiary font-bold">14 Trips</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-primary font-bold">Active Dispatch Order</span>
<span className="font-mono text-label-sm text-label-sm font-bold text-on-surface">#SC-98241</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold truncate">SoundCore Space One ANC Headphones</span>
<span className="text-on-surface font-bold whitespace-nowrap">UGX 180,000</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-medium">
<Icon name="lock" className="text-[14px]" />
<span>Swift Escrow Protected • Tamper Bag #SWIFT-BAG-99201</span>
</div>
</div>

<div className="relative pl-6 space-y-3 pt-1">
<div className="absolute left-2.5 top-2.5 bottom-2.5 w-0.5 bg-primary-fixed-dim"></div>

<div className="relative flex flex-col">
<span className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary-container ring-2 ring-white"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Merchant Pickup (Completed)</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala Phone Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Shop #44 Nakasero Commercial Center</span>
</div>

<div className="relative flex flex-col">
<span className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-secondary ring-2 ring-white animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Customer Drop-off (En Route - 4 min ETA)</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Grace Nantongo</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia Residences Flat 4B, Kololo Terrace</span>
</div>
</div>
<div className="p-2 rounded-lg bg-amber-50 text-amber-900 font-label-sm text-label-sm flex items-center gap-2">
<Icon name="pin" className="text-[16px] text-amber-700" />
<span>Delivery requires <strong>6-Digit OTP Handshake</strong> prior to Escrow release.</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<button className="px-3 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all">
<Icon name="call" className="text-[16px] text-tertiary" />
<span>VoIP Masked Call</span>
</button>
<button className="px-3 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all">
<Icon name="notifications_active" className="text-[16px] text-primary" />
<span>Send Push Alert</span>
</button>
<button className="px-3 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all">
<Icon name="alt_route" className="text-[16px] text-secondary" />
<span>Reassign Boda</span>
</button>
<button className="px-3 h-10 rounded-xl bg-error-container hover:bg-error-container/80 text-on-error-container font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 transition-all">
<Icon name="flag" className="text-[16px]" />
<span>Flag Incident Hold</span>
</button>
</div>

<div className="pt-space-xs space-y-space-xs">
<div className="flex items-center justify-between font-label-sm text-label-sm py-1 border-b border-surface-container">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="verified_user" className="text-[14px] text-tertiary" />
              KCCA 2025 Commercial Permit
            </span>
<span className="font-bold text-tertiary">Active (Dec 2025)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm py-1 border-b border-surface-container">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="health_and_safety" className="text-[14px] text-tertiary" />
              PSV Rider Insurance
            </span>
<span className="font-bold text-tertiary">Comprehensive Active</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm py-1">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="inventory" className="text-[14px] text-tertiary" />
              Insulated Lockbox &amp; Bag
            </span>
<span className="font-bold text-on-surface">Inspected 12 Oct 2025</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center justify-between overflow-hidden">
<div className="flex items-center gap-space-sm shrink-0">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
<Icon name="rss_feed" className="text-[16px] text-primary" />
<span>Live Corridor Ticker</span>
</div>
</div>

<div className="flex-1 mx-space-md overflow-hidden whitespace-nowrap">
<div className="inline-flex items-center gap-6 font-body-sm text-body-sm text-on-surface-variant animate-[marquee_25s_linear_infinite]">
<span className="inline-flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<strong className="text-on-surface font-semibold">14:24 EAT:</strong> SafeBoda #RC-9042 successfully completed delivery #SC-98230 at Kololo Terrace (OTP Handshake verified).
        </span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-primary-container"></span>
<strong className="text-on-surface font-semibold">14:22 EAT:</strong> William St Stage #04 auto-dispatched 4 fresh couriers for Nakasero electronic merchant pickups.
        </span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
<strong className="text-on-surface font-semibold">14:20 EAT:</strong> Acacia Mall Hub reports smooth inbound corridors across Kira Road &amp; Lugogo Bypass.
        </span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<strong className="text-on-surface font-semibold">14:18 EAT:</strong> MTN MoMo float sweep auto-disbursed UGX 4,200,000 to 86 courier wallets without deadlock.
        </span>
</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-mono">Stream: 120 FPS</span>
<button className="p-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-all">
<Icon name="pause" className="text-[16px]" />
</button>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
