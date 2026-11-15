// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/rider/rider_overview_dispatch_map_tablet/code.html
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

<div className="w-full bg-amber-warning text-surface-dark px-margin py-space-xs flex items-center justify-between shadow-md select-none">
<div className="flex items-center gap-space-sm">
<Icon name="cloud_sync" className="text-[18px] text-surface-dark" />
<span className="font-label-md text-label-md font-bold uppercase tracking-wider">Mesh Telematics Active: 4G LTE High-Precision GPS Mode</span>
<span className="font-body-sm text-body-sm hidden md:inline">• Signal: Kampala Central Kira Corridor Repeater #9</span>
</div>
<div className="flex items-center gap-space-md">
<span className="bg-surface-dark/15 px-space-xs rounded font-label-sm text-label-sm font-black">SYNCED 10s AGO</span>
<span className="font-label-sm text-label-sm text-surface-dark flex items-center gap-space-xs">
<Icon name="lock" className="text-[14px]" />
        Escrow Bond: UGX 1,500,000 Locked
      </span>
</div>
</div>

<section className="w-full px-margin py-space-md bg-surface-container-lowest">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Deliveries Shift</span>
<Icon name="two_wheeler" className="text-primary text-[20px]" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">12</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">Done</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span className="text-amber-warning font-semibold">2 In-Transit</span>
<span>•</span>
<span className="text-secondary font-medium">1 Staged</span>
</div>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"80%"}}></div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Distance Tracked</span>
<Icon name="route" className="text-secondary text-[20px]" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">46.8</span>
<span className="font-label-md text-label-md text-on-surface-variant">KM</span>
</div>
<div className="font-body-sm text-body-sm text-tertiary flex items-center gap-space-xs">
<Icon name="verified" className="text-[14px]" />
<span>SafeBoda Telematics V3</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Odo: 14,892 km</span>
<span className="text-tertiary">Eco Rate 99%</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Shift Net Gross</span>
<Icon name="payments" className="text-tertiary text-[20px]" />
</div>
<div className="my-space-xs">
<div className="font-price-display text-price-display text-tertiary whitespace-nowrap">UGX 84,500</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
            Base: UGX 64k <span className="text-primary font-medium whitespace-nowrap">+ Tips UGX 20.5k</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary">Direct Escrow Disbursal Ready</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Acceptance SLA</span>
<Icon name="military_tech" className="text-action-gradient-start text-[20px]" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface">98.6%</span>
<span className="font-label-sm text-label-sm text-action-gradient-start font-extrabold uppercase">Tier-1 Elite</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">
            Courier Priority Dispatch active
          </div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Weekly Streak: 14d</span>
<span className="text-primary font-bold">+15% Surge Bonus</span>
</div>
</div>
</div>
</section>

<section className="w-full px-margin py-space-sm">
<div className="relative w-full h-[520px] rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl flex flex-col justify-between p-space-md">

<div className="absolute inset-0 bg-surface-dark pointer-events-none">
<svg className="w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient cx="50%" cy="50%" id="hubGlow" r="50%">
<stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#FF8A1F" stopOpacity="0"></stop>
</radialGradient>
<linearGradient id="routeGradient" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" stopColor="#FF8A1F"></stop>
<stop offset="50%" stopColor="#FFCC00"></stop>
<stop offset="100%" stopColor="#10B981"></stop>
</linearGradient>
<filter height="140%" id="neonGlow" width="140%" x="-20%" y="-20%">
<feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
<feMerge>
<feMergeNode in="blur"></feMergeNode>
<feMergeNode in="SourceGraphic"></feMergeNode>
</feMerge>
</filter>

<pattern height="40" id="tacticalGrid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#24293c" strokeOpacity="0.4" strokeWidth="0.5"></path>
</pattern>
</defs>

<rect fill="url(#tacticalGrid)" height="600" width="1000"></rect>

<path d="M-50,200 C200,180 350,300 600,220 C800,160 950,260 1100,240" fill="none" stroke="#1E293B" strokeWidth="1.5"></path>
<path d="M-50,350 C180,310 400,420 650,340 C850,280 950,420 1100,380" fill="none" stroke="#1E293B" strokeWidth="1"></path>
<path d="M-50,120 C150,90 400,160 700,90 C850,50 950,110 1100,80" fill="none" stroke="#161b2d" strokeDasharray="4,4" strokeWidth="1.5"></path>


<path d="M 120 540 L 450 420 L 750 360 L 980 320" fill="none" stroke="#24293c" strokeLinecap="round" strokeWidth="4"></path>
<text fill="#5c4039" font-family="Plus Jakarta Sans" font-size="10" font-weight="700" letter-spacing="1" x="820" y="345">JINJA RD ARTERIAL</text>

<path d="M 280 580 L 330 380 L 380 240 L 430 80" fill="none" stroke="#24293c" strokeLinecap="round" strokeWidth="3"></path>
<text fill="#5c4039" font-family="Plus Jakarta Sans" font-size="9" font-weight="700" letter-spacing="1" x="390" y="160">YUSUF LULE</text>


<path d="M 230 490 L 310 440 L 360 380 L 490 280 L 590 220 L 740 140" fill="none" stroke="#FF8A1F" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="10"></path>

<path d="M 230 490 L 310 440 L 360 380 L 490 280 L 590 220 L 740 140" fill="none" filter="url(#neonGlow)" id="activePath" stroke="url(#routeGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5"></path>

<path d="M 230 490 L 310 440 L 360 380 L 490 280 L 590 220 L 740 140" fill="none" opacity="0.8" stroke="#FFFFFF" strokeDasharray="10, 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<animate attributeName="stroke-dashoffset" dur="2.5s" from="100" repeatCount="indefinite" to="0"></animate>
</path>

<circle cx="510" cy="270" fill="#EF4444" fillOpacity="0.15" r="32"></circle>
<circle cx="510" cy="270" fill="#EF4444" fillOpacity="0.25" r="16"></circle>
<line stroke="#EF4444" strokeDasharray="3,3" strokeWidth="2" x1="480" x2="540" y1="270" y2="270"></line>

<g transform="translate(535, 250)">

<circle cx="0" cy="0" fill="none" opacity="0.6" r="28" stroke="#FF8A1F" strokeWidth="1.5">
<animate attributeName="r" dur="1.8s" repeatCount="indefinite" values="8;36"></animate>
<animate attributeName="opacity" dur="1.8s" repeatCount="indefinite" values="0.8;0"></animate>
</circle>
<circle cx="0" cy="0" fill="#DA3700" fillOpacity="0.4" r="14"></circle>
<circle cx="0" cy="0" fill="#FF8A1F" r="9" stroke="#FFFFFF" strokeWidth="2"></circle>

<polygon fill="#FFCC00" points="0,-16 6,-4 -6,-4" transform="rotate(48)"></polygon>
</g>
</svg>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-dark/90 backdrop-blur-md px-space-md py-space-xs rounded-xl shadow-lg">
<div className="w-3 h-3 rounded-full bg-emerald-escrow animate-ping"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mission Target</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold flex items-center gap-space-xs">
              Plot 14 Acacia Avenue, Kololo
              <Icon name="verified_user" className="text-primary text-[18px]" />
</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-dark/90 backdrop-blur-md px-space-md py-space-xs rounded-xl shadow-lg">
<div className="flex items-center gap-space-xs pr-space-sm">
<Icon name="speed" className="text-primary text-[22px]" />
<div>
<div className="font-label-lg text-label-lg text-on-surface font-black">34 <span className="text-label-sm text-on-surface-variant">KM/H</span></div>
<div className="font-label-sm text-label-sm text-emerald-escrow font-semibold">In Safe Limits</div>
</div>
</div>
<div className="w-[1px] h-6 bg-surface-container-highest"></div>
<div className="flex items-center gap-space-xs pl-space-xs">
<Icon name="timer" className="text-action-gradient-start text-[22px]" />
<div>
<div className="font-label-lg text-label-lg text-primary font-black">14 MIN</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Est. Arrival 15:42</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 pointer-events-none w-full h-full">

<div className="absolute left-10 bottom-8 pointer-events-auto flex items-center gap-space-xs bg-surface-container-high/90 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer">
<Icon name="store" className="text-primary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary font-bold">ORIGIN (BAY G-14)</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Pioneer Mall Central Hub</span>
</div>
</div>

<div className="absolute left-[45%] top-[42%] pointer-events-auto flex items-center gap-space-xs bg-danger-penalty/20 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-md cursor-pointer hover:bg-danger-penalty/30 transition-colors">
<Icon name="report_problem" className="text-danger-penalty text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-danger-penalty font-black">KAMWOKYA CHOKEPOINT</span>
<span className="font-body-sm text-body-sm text-on-surface">Auto-Reroute Engaged via Mawanda Rd</span>
</div>
</div>

<div className="absolute right-8 top-16 pointer-events-auto flex items-center gap-space-xs bg-emerald-escrow/20 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer">
<Icon name="flag" className="text-emerald-escrow text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow font-black">DESTINATION</span>
<span className="font-body-sm text-body-sm text-on-surface font-bold">Acacia Gate A (Sylvia Desk)</span>
</div>
</div>

<div className="absolute left-[28%] bottom-[42%] pointer-events-auto flex items-center gap-space-xs bg-surface-dark/85 px-space-xs py-1 rounded shadow cursor-pointer">
<Icon name="warehouse" className="text-secondary text-[14px]" />
<span className="font-label-sm text-label-sm text-secondary font-medium">William St Hub #03</span>
</div>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">

<button className="h-10 px-space-sm bg-container-dark-high text-on-surface rounded-xl flex items-center gap-space-xs hover:bg-surface-bright transition-all shadow-md active:scale-95">
<Icon name="volume_up" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md font-bold">Turn-by-Turn GPS (Loud)</span>
</button>

<button className="h-10 px-space-sm bg-container-dark-high text-on-surface rounded-xl flex items-center gap-space-xs hover:bg-surface-bright transition-all shadow-md active:scale-95">
<Icon name="warning" className="text-amber-warning text-[18px]" />
<span className="font-label-md text-label-md font-semibold">Report Hazard</span>
</button>
</div>
<div className="flex items-center gap-space-xs">

<button className="w-10 h-10 bg-container-dark-high text-on-surface rounded-xl flex items-center justify-center hover:bg-surface-bright transition-all shadow-md active:scale-95" title="Recenter Location">
<Icon name="my_location" className="text-primary text-[20px]" />
</button>

<div className="h-10 px-space-sm bg-surface-dark/90 backdrop-blur-md text-tertiary rounded-xl flex items-center gap-space-xs shadow-md">
<Icon name="download_done" className="text-[16px]" />
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">Kampala Urban Tiles Cached (Offline Ready)</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-margin py-space-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="bg-container-dark-low rounded-xl p-space-lg shadow-xl relative overflow-hidden">

<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase font-extrabold tracking-wider">PRIORITY RUN</span>
<span className="font-label-lg text-label-lg text-primary font-bold">MISSION #SC-ORD-9488</span>
</div>
<div className="flex items-center gap-space-xs bg-emerald-escrow/15 px-space-sm py-0.5 rounded-full text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="shield" className="text-[14px]" />
              Escrow Covered (UGX 388,500)
            </div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md my-space-xs flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Consignment Goods</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">SoundCore Space One ANC Headphones</span>
<span className="font-body-md text-body-md text-on-surface-variant">+ Anker 65W GaN Fast Charger [Dual-Port Type-C]</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Declared Value</span>
<div className="font-headline-sm text-headline-sm text-emerald-escrow font-black whitespace-nowrap">UGX 388,500</div>
</div>
</div>
<div className="mt-space-xs pt-space-xs flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-sm text-label-sm bg-surface-dark/40 px-space-sm py-space-xs rounded-lg">
<span className="flex items-center gap-space-xs text-on-surface font-semibold">
<Icon name="qr_code_scanner" className="text-emerald-escrow text-[16px]" />
                Security Seal Tag: <span className="font-mono text-primary font-bold">#SC-TS-4091</span> (Scanned at Dispatch)
              </span>
<span className="text-tertiary font-bold">Origin: SoundCore Uganda (Pioneer Mall G-14)</span>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md my-space-xs flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold">
                  DM
                </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Dennis Mukasa</span>
<Icon name="verified" className="text-secondary text-[16px]" />
</div>
<span className="font-body-md text-body-md text-primary font-mono tracking-wider font-bold">
                    +256 772 ••• 814 <span className="text-on-surface-variant font-sans font-normal text-label-sm">(Masked Relay Secure)</span>
</span>
</div>
</div>

<div className="flex items-center gap-space-xs">
<button className="h-10 px-space-sm bg-container-dark-low hover:bg-surface-bright text-on-surface rounded-xl flex items-center gap-space-xs transition-colors shadow">
<Icon name="call" className="text-emerald-escrow text-[18px]" />
<span className="font-label-md text-label-md font-bold">VoIP Relay</span>
</button>
<button className="w-10 h-10 bg-container-dark-low hover:bg-surface-bright text-emerald-escrow rounded-xl flex items-center justify-center transition-colors shadow" title="Direct Encrypted WhatsApp">
<Icon name="chat" className="text-[18px]" />
</button>
</div>
</div>

<div className="mt-space-xs bg-surface-dark/60 p-space-sm rounded-lg flex items-start gap-space-sm">
<Icon name="info" className="text-amber-warning text-[20px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-amber-warning font-bold uppercase">Consignee Gate Instructions</span>
<p className="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                  "Leave package with receptionist Sylvia at front gatehouse if currently in Acacia boardroom meeting. Require physical PIN before departure."
                </p>
</div>
</div>
</div>

<div className="mt-space-md pt-space-xs flex flex-col sm:flex-row items-center gap-space-md">
<button className="w-full sm:flex-1 h-14 bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-white font-label-lg text-label-lg rounded-xl shadow-[0_4px_20px_rgba(218,55,0,0.4)] flex items-center justify-center gap-space-sm active:scale-98 transition-all">
<Icon name="dialpad" className="text-[24px]" />
<span>Open Delivery Execution &amp; 4-Digit PIN Pad</span>
</button>
<button className="w-full sm:w-auto h-14 px-space-md bg-surface-container-high hover:bg-surface-bright text-danger-penalty font-label-md text-label-md rounded-xl flex items-center justify-center gap-space-xs transition-colors">
<Icon name="flag" className="text-[20px]" />
<span>Consignee Unavailable / Issue</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="bg-container-dark-low rounded-xl p-space-md shadow-xl flex flex-col justify-between">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="queue_play_next" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Upcoming Manifest Queue</span>
</div>
<span className="bg-surface-container-high text-secondary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold">2 PENDING</span>
</div>

<div className="bg-surface-container rounded-xl p-space-sm my-space-xs shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-bold">#SC-ORD-9490</span>
<span className="bg-amber-warning/15 text-amber-warning px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold">STAGED AT HUB</span>
</div>
<div className="font-body-md text-body-md text-on-surface font-bold mt-1">Liberty 4 NC Noise-Cancelling Earbuds</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
<Icon name="warehouse" className="text-[16px] text-secondary" />
<span>Pickup at William St Hub (Bay 03)</span>
</div>
<div className="flex items-center justify-between mt-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Dropoff: Bukoto Street 19</span>
<span className="text-tertiary font-bold whitespace-nowrap">UGX 14,000 Payout</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-sm my-space-xs shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold">#DSP-8910-KLA</span>
<span className="bg-danger-penalty/15 text-danger-penalty px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold">REVERSE LOGISTICS</span>
</div>
<div className="font-body-md text-body-md text-on-surface font-bold mt-1">Product Return &amp; Inspection Pickup</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
<Icon name="assignment_return" className="text-[16px] text-danger-penalty" />
<span>Kololo Heights Court 2B (Tamper Bag Required)</span>
</div>
<div className="flex items-center justify-between mt-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Return Destination: KLA-HUB-04 Ntinda</span>
<span className="text-tertiary font-bold whitespace-nowrap">UGX 16,500 Payout</span>
</div>
</div>

<div className="mt-space-sm bg-container-dark-high/80 rounded-xl p-space-md shadow-inner">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-danger-penalty/15 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="support_agent" className="text-[20px]" />
</div>
<div className="flex flex-col flex-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Field Marshal Escalation</span>
<span className="font-label-lg text-label-lg text-on-surface font-black">Marshal Kato Ronald</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Emergency Roadside &amp; Escrow Dispatch Hotline</span>
<a className="mt-space-xs inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-black hover:underline" href="tel:+256800220800">
<Icon name="phone_in_talk" className="text-[18px]" />
                  +256 800 220 800
                </a>
</div>
</div>
<div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Toll-Free SafeBoda Relay</span>
<span className="text-emerald-escrow font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Available 24/7
              </span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex items-center justify-between text-on-surface-variant shadow-md">
<div className="flex items-center gap-space-sm">
<Icon name="shield_with_heart" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Courier Safety Assurance</span>
<span className="font-body-sm text-body-sm">Britam Boda Bodily Injury Cover Active</span>
</div>
</div>
<span className="text-primary font-label-md text-label-md font-bold">Policy #UG-BOD-842</span>
</div>
</div>
</div>
</section>


</div></main>
<footer className="w-full bg-surface-container-lowest py-space-md"><div className="w-full px-margin flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm"><span>SwiftCart Uganda • Field Operations Mesh v3.14</span><div className="flex items-center gap-space-sm"><span className="flex items-center gap-space-xs"><span className="h-2 w-2 rounded-full bg-emerald-escrow"></span><span>Escrow Ledger Synchronized</span></span><span>•</span><span>Node: KLA-HUB-04 (Ntinda)</span></div></div></footer>
    </div>
  );
};

export default Tablet;
