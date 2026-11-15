// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/riders_fleet_directory_tablet_dark/code.html
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
      
      <div className="pl-[72px]"><main className="w-full pt-16 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-high px-4 py-2 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">KAMPALA METRO BODA MATRIX: LIVE TELEMETRY STREAM</span>
<span className="hidden sm:inline-block font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary">LATENCY: 42ms</span>
</div>
<div className="flex items-center gap-3">
<span className="font-code-display text-label-sm text-on-surface-variant">GSM RELAY: MTN / AIRTEL SYNCED</span>
<Icon name="cell_tower" className="text-[16px] text-tertiary" />
</div>
</div>
<div className="px-4 py-5 flex flex-col gap-5">

<div className="flex flex-col gap-4">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-bold">Field Logistics &amp; High-Integrity Escrow Fleet</span>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">Fleet Operations &amp; Couriers Roster</h1>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-3.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright flex items-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="sim_card_download" className="text-[18px]" />
<span>Export Manifest</span>
</button>
<button className="h-10 px-4 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container flex items-center gap-2 font-label-lg text-label-lg shadow-lg shadow-primary-container/20 transition-transform active:scale-95" type="button">
<Icon name="two_wheeler" className="text-[20px]" />
<span>Onboard Courier</span>
</button>
</div>
</div>

<div className="grid grid-cols-5 gap-2.5">
<div className="p-3 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Registered</span>
<Icon name="groups" className="text-[18px]" />
</div>
<div className="mt-2">
<span className="font-headline-md text-headline-md text-on-surface">248</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Kampala Basin</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-tertiary">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Route</span>
<Icon name="electric_moped" className="text-[18px]" />
</div>
<div className="mt-2">
<span className="font-headline-md text-headline-md text-tertiary">184</span>
<span className="font-label-sm text-label-sm text-tertiary/80 block mt-0.5">74.2% Fleet In-Motion</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Hub Staged</span>
<Icon name="storefront" className="text-[18px]" />
</div>
<div className="mt-2">
<span className="font-headline-md text-headline-md text-secondary">46</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Nakasero &amp; Bugolobi</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-danger-penalty">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Offline</span>
<Icon name="bedtime" className="text-[18px]" />
</div>
<div className="mt-2">
<span className="font-headline-md text-headline-md text-on-surface-variant">18</span>
<span className="font-label-sm text-label-sm text-danger-penalty block mt-0.5">Rest or In-Repair</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-emerald-escrow">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">30D SLA Target</span>
<Icon name="verified" className="text-[18px]" />
</div>
<div className="mt-2">
<span className="font-headline-md text-headline-md text-emerald-escrow">98.6%</span>
<span className="font-label-sm text-label-sm text-tertiary block mt-0.5">+0.4% from Target</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
<button className="h-8 px-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center gap-1.5 shrink-0 shadow-sm" type="button">
<span>All Couriers</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary-container/20 font-code-display text-label-sm">248</span>
</button>
<button className="h-8 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>SafeBoda Stage Verified</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-dark font-code-display text-label-sm">192</span>
</button>
<button className="h-8 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<Icon name="navigation" className="text-[16px] text-action-gradient-start" />
<span>In-Transit</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-dark font-code-display text-label-sm">184</span>
</button>
<button className="h-8 px-3 rounded-lg bg-error-container/40 text-on-error-container font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<Icon name="warning" className="text-[16px] text-danger-penalty" />
<span>Exception / Flagged</span>
<span className="px-1.5 py-0.2 rounded-full bg-danger-penalty text-white font-code-display text-label-sm">3</span>
</button>
<button className="h-8 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<Icon name="location_on" className="text-[16px] text-secondary" />
<span>Standby Nakasero Hub</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-dark font-code-display text-label-sm">26</span>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-start">

<div className="col-span-5 flex flex-col gap-3">

<div className="p-2.5 rounded-2xl bg-container-dark-low shadow-sm flex flex-col gap-2">
<div className="relative flex items-center w-full">
<Icon name="search" className="absolute left-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full h-9 pl-9 pr-8 rounded-xl bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:bg-surface-bright transition-colors" placeholder="Search name, plate (e.g. UFE), stage..." type="text" value="Kizito" />
<button className="absolute right-2 text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="close" className="text-[16px]" />
</button>
</div>
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Filtered: 5 Couriers</span>
<button className="flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline" type="button">
<span>Sort: Active Order</span>
<Icon name="expand_more" className="text-[14px]" />
</button>
</div>
</div>

<div className="flex flex-col gap-2.5" id="courier-roster-list">

<div className="p-3.5 rounded-2xl bg-surface-container-highest shadow-md flex flex-col gap-2.5 cursor-pointer relative overflow-hidden transition-all duration-150">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-start justify-between pl-1">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                  KB
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Kizito Brian</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-low text-primary font-bold">UFE 219K</span>
<span>• Stage #4</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                  En Route (8m)
                </span>
<span className="font-code-display text-label-sm text-on-surface-variant mt-1">#SC-9952</span>
</div>
</div>
<div className="flex items-center justify-between pt-2 pl-1 bg-surface-container-low/40 -mx-3.5 -mb-3.5 p-2 rounded-b-2xl">
<div className="flex items-center gap-1 text-amber-warning">
<Icon name="star" className="text-[15px]" />
<span className="font-label-md text-label-md font-bold">4.92</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(1,420)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant tracking-wider">+256 701 ••• 442</span>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-container-dark-low hover:bg-surface-container-high shadow-sm flex flex-col gap-2.5 cursor-pointer transition-colors duration-150">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                  KP
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Kato Paul</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">UEX 881B</span>
<span>• Acacia Mall</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-bold">
                  Standby Nakasero
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Available Now</span>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-1 text-amber-warning">
<Icon name="star" className="text-[15px]" />
<span className="font-label-md text-label-md font-bold">4.85</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(890)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="battery_charging_full" className="text-[14px]" /> 94%
              </span>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-container-dark-low hover:bg-surface-container-high shadow-sm flex flex-col gap-2.5 cursor-pointer transition-colors duration-150">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                  OD
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Okello Denis</span>
<Icon name="flag" className="text-[16px] text-danger-penalty" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">UFD 412M</span>
<span>• Jinja Road</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock_reset" className="text-[13px]" />
                  OTP Mismatch
                </span>
<span className="font-code-display text-label-sm text-danger-penalty mt-1">#SC-9871</span>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-1 text-amber-warning">
<Icon name="star" className="text-[15px]" />
<span className="font-label-md text-label-md font-bold">4.65</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(612)</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty font-bold uppercase tracking-wider">Escrow Blocked</span>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-container-dark-low hover:bg-surface-container-high shadow-sm flex flex-col gap-2.5 cursor-pointer transition-colors duration-150">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                  SJ
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Ssemwogerere John</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">UEM 304P</span>
<span>• Pioneer Mall</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">
                  In Transit
                </span>
<span className="font-code-display text-label-sm text-on-surface-variant mt-1">#SC-9970</span>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-1 text-amber-warning">
<Icon name="star" className="text-[15px]" />
<span className="font-label-md text-label-md font-bold">4.98</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(2,110)</span>
</div>
<span className="font-code-display text-label-sm text-on-surface-variant">2.1 km to Hub</span>
</div>
</div>

<div className="p-3.5 rounded-2xl bg-container-dark-low/60 hover:bg-surface-container-high shadow-sm flex flex-col gap-2.5 cursor-pointer opacity-75 transition-colors duration-150">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                  MR
                </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface-variant font-bold">Mugisha Ronald</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant/80 font-code-display text-label-sm">
<span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-bold">UER 919T</span>
<span>• Ntinda Stage</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">
                  Offline
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Last sync 4h ago</span>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="star" className="text-[15px]" />
<span className="font-label-md text-label-md font-bold">4.79</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">(430)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Shift Closed</span>
</div>
</div>
</div>
</div>

<div className="col-span-7 flex flex-col gap-4">

<div className="p-4 rounded-2xl bg-container-dark-low shadow-sm flex flex-col gap-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-action-gradient-start to-action-gradient-end text-on-primary-container font-headline-md text-headline-md flex items-center justify-center font-extrabold shadow-md shadow-primary-container/30">
                KB
              </div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Kizito Brian</h2>
<span className="px-2 py-0.5 rounded-md bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" />
                    SafeBoda Pro #4
                  </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1 font-code-display">
<Icon name="badge" className="text-[15px] text-primary" />
                    NIN: CM890123456789A
                  </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="call" className="text-[15px] text-tertiary" />
                    +256 701 ••• 442
                  </span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="px-3 py-1 rounded-xl bg-emerald-escrow/15 text-emerald-escrow flex items-center gap-1.5 font-label-sm text-label-sm font-bold">
<Icon name="security" className="text-[16px]" />
                KYC Level 3 (Cleared)
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Onboarded Oct 2022</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2.5 pt-2">
<div className="p-2.5 rounded-xl bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Motorcycle</span>
<span className="font-label-md text-label-md text-on-surface font-bold mt-0.5">Bajaj Boxer 125cc</span>
<span className="font-code-display text-label-sm text-primary font-bold">UFE 219K (Red)</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Driving Permit Class</span>
<span className="font-label-md text-label-md text-on-surface font-bold mt-0.5">Class A (Motorcycle)</span>
<span className="font-label-sm text-label-sm text-tertiary">Valid thru Nov 2026</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Hardware Telematics</span>
<span className="font-label-md text-label-md text-on-surface font-bold mt-0.5">GPS Track Tag #981</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Online 4G LTE
              </span>
</div>
</div>
</div>

<div className="p-4 rounded-2xl bg-container-dark-low shadow-sm flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="p-1.5 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
<Icon name="route" className="text-[18px]" />
</span>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Active Trip: Corridor Dispatch #SC-9952</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Direct Kampala Metro Corridor Routing</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-action-gradient-start/15 text-action-gradient-start font-label-md text-label-md font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-action-gradient-start animate-pulse"></span>
              Live Boda Speed: 28 km/h
            </span>
</div>

<div className="w-full h-44 rounded-xl bg-surface-container-lowest relative overflow-hidden flex flex-col justify-between p-3.5">

<svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="30" id="grid" patternUnits="userSpaceOnUse" width="30">
<path className="text-on-surface-variant" d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<path d="M 40 120 Q 150 40, 260 90 T 480 50" fill="none" stroke="#FF8A1F" strokeDasharray="6,4" strokeWidth="4"></path>
<circle cx="40" cy="120" fill="#10B981" r="6"></circle>
<circle className="animate-pulse" cx="280" cy="85" fill="#DA3700" r="7"></circle>
<circle cx="480" cy="50" fill="#F59E0B" r="6"></circle>
</svg>

<div className="relative z-10 flex items-center justify-between w-full">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-dark/90 backdrop-blur-md">
<Icon name="store" className="text-[15px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Victoria Tech (Nakasero)</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-dark/90 backdrop-blur-md">
<Icon name="location_on" className="text-[15px] text-amber-warning" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">Acacia Mall Gate 2 (Kisementi)</span>
</div>
</div>

<div className="relative z-10 flex items-center justify-between bg-surface-dark/85 backdrop-blur-md p-2 rounded-lg">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Remaining Corridor</span>
<span className="font-code-display text-label-md text-on-surface font-bold">1.2 km / 2.4 km Total</span>
</div>
<div className="w-px h-6 bg-surface-bright"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Arrival</span>
<span className="font-code-display text-label-md text-tertiary font-bold">8 Minutes (14:38 EAT)</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-container-dark-high text-on-surface font-code-display text-label-sm flex items-center gap-1">
<Icon name="near_me" className="text-[14px] text-tertiary" /> Heading North-East
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-xl bg-surface-container-high flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Recipient Details</span>
<Icon name="shield_person" className="text-[16px] text-tertiary" />
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-bold text-label-sm">
                  SN
                </div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Sarah Namubiru</span>
<span className="font-code-display text-label-sm text-on-surface-variant">07•• ••• 882 (Masked Proxy)</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Package: Apple iPad Pro 11" M4 + Pencil</span>
</div>

<div className="p-3 rounded-xl bg-surface-container-high flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Delivery Proof Protocol</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
                  Armed &amp; Locked
                </span>
</div>
<div className="flex items-center justify-between my-1">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Cryptographic Delivery Token:</span>
<span className="font-label-sm text-label-sm text-amber-warning font-semibold">Awaiting 4-Digit Buyer Entry on Rider Mobile</span>
</div>
<div className="flex gap-1">
<span className="w-6 h-7 rounded bg-surface-dark flex items-center justify-center font-code-display text-on-surface-variant text-label-md">•</span>
<span className="w-6 h-7 rounded bg-surface-dark flex items-center justify-center font-code-display text-on-surface-variant text-label-md">•</span>
<span className="w-6 h-7 rounded bg-surface-dark flex items-center justify-center font-code-display text-on-surface-variant text-label-md">•</span>
<span className="w-6 h-7 rounded bg-surface-dark flex items-center justify-center font-code-display text-on-surface-variant text-label-md">•</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Rider cannot release escrow without physical OTP match.</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3">
<div className="p-3.5 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Runs Today</span>
<div className="my-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">11</span>
<span className="font-label-sm text-label-sm text-tertiary block mt-0.5">100% On-Time</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Target: 14 Runs</span>
</div>
<div className="p-3.5 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Rider Earnings</span>
<div className="my-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-extrabold whitespace-nowrap">UGX 55,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">MTN MoMo Payout</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Settled via Escrow</span>
</div>
<div className="p-3.5 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow in Custody</span>
<div className="my-1">
<span className="font-headline-sm text-headline-sm text-amber-warning font-extrabold whitespace-nowrap">UGX 248,500</span>
<span className="font-label-sm text-label-sm text-amber-warning/80 block mt-0.5">Active Cargo Value</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Underwriter Insured</span>
</div>
<div className="p-3.5 rounded-2xl bg-container-dark-low shadow-sm flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Incident Rate</span>
<div className="my-1">
<span className="font-headline-sm text-headline-sm text-emerald-escrow font-extrabold">0.1%</span>
<span className="font-label-sm text-label-sm text-tertiary block mt-0.5">Top 1% Tier Courier</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">0 Claims (90 Days)</span>
</div>
</div>

<div className="p-4 rounded-2xl bg-container-dark-low shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="admin_panel_settings" className="text-[18px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Admin Dispatch &amp; Enforcement Actions</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-code-display">SESSION AUTH: ROOT_CLEARANCE</span>
</div>
<div className="grid grid-cols-3 gap-2.5">

<button className="h-12 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="call" className="text-[20px] text-tertiary" />
<span>Contact Courier (Masked)</span>
</button>

<button className="h-12 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="history" className="text-[20px] text-secondary" />
<span>Route GPS Log</span>
</button>

<button className="h-12 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="verified_user" className="text-[20px] text-action-gradient-start" />
<span>Audit Documents</span>
</button>
</div>
<div className="grid grid-cols-2 gap-2.5 pt-1">

<button className="h-12 px-3 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface flex items-center justify-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="move_down" className="text-[20px] text-amber-warning" />
<span>Reassign Order #SC-9952</span>
</button>

<button className="h-12 px-3 rounded-xl bg-error-container/20 hover:bg-error-container/30 text-danger-penalty flex items-center justify-center gap-2 font-label-md text-label-md transition-colors shadow-sm" type="button">
<Icon name="block" className="text-[20px]" />
<span>Freeze Courier Account</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 px-4 py-3 rounded-2xl bg-container-dark-high text-on-surface shadow-2xl flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none z-50" id="action-toast">
<div className="w-8 h-8 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
<Icon name="phone_forwarded" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Encrypted Proxy Call Initiated</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Connecting Dispatch Desk to Kizito Brian (Masked Relay)</span>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Tablet;
