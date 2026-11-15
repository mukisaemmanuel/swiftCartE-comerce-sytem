// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/locked_dispatches_pin_overrides_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72"><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-amber-warning/15 px-margin-desktop py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<Icon name="gavel" className="text-amber-warning text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">SUPERVISORY PIN OVERRIDE PROTOCOL ACTIVE • HIGH-CONSEQUENCE ESCROW DISPATCH VAULT</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-tertiary">Uganda Telecom Rails Nominal</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ledger Hash: 0x98EF••44B1</span>
</div>
</div>
<div className="p-margin-desktop space-y-space-xl">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Locked Dispatches &amp; PIN Overrides</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Locked Dispatches &amp; Supervisory PIN Overrides</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-1">
            Emergency resolution console for deadlocked orders where 6-digit delivery code verification has failed, buyer phone is unreachable, or tamper seals are disputed at customer doorstep.
          </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<Icon name="menu_book" className="text-[18px] text-tertiary" />
<span>Emergency Handover Protocol Guide</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<Icon name="download" className="text-[18px] text-primary" />
<span>Export Exceptions Audit Log</span>
</button>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md shadow-md">

<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-sm" type="button">
          All Exceptions (6)
        </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
          Buyer Phone Dead / Unreachable (3)
        </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
          Wrong Code Entered 3x (2)
        </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
          Tamper Seal Disputed (1)
        </button>
</div>

<div className="relative w-full xl:w-96">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:bg-surface-container-high transition-colors" placeholder="Search order ref, courier ID, buyer name, or dispatch hub..." type="text" />
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Currently Locked Dispatches</span>
<span className="p-1 rounded-md bg-error-container/30 text-error flex items-center justify-center">
<Icon name="lock_clock" className="text-[18px]" />
</span>
</div>
<div className="font-price-display text-price-display text-error leading-none mb-1">6 Orders</div>
<div className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 2,420,000 escrow value frozen at doorstep</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-sm text-label-sm text-error">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
<span>Doorstep deadlock SLA warning triggered</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Avg Lock Resolution Time</span>
<span className="p-1 rounded-md bg-amber-warning/20 text-amber-warning flex items-center justify-center">
<Icon name="timer" className="text-[18px]" />
</span>
</div>
<div className="font-price-display text-price-display text-amber-warning leading-none mb-1">14.2 Minutes</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Target &lt; 20 min before courier return protocol triggers</div>
<div className="mt-space-md flex items-center gap-2">
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"71%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">71% SLA</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Handover Overrides Today</span>
<span className="p-1 rounded-md bg-tertiary-container/30 text-tertiary flex items-center justify-center">
<Icon name="verified" className="text-[18px]" />
</span>
</div>
<div className="font-price-display text-price-display text-tertiary leading-none mb-1">18 Authorized</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">All cryptographically logged to Super Admin audit ledger</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-sm text-label-sm text-emerald-escrow">
<Icon name="format_image_left" className="text-[14px]" />
<span>Zero disputed settlements recorded</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Return to Hub Triggered</span>
<span className="p-1 rounded-md bg-secondary-container/40 text-secondary flex items-center justify-center">
<Icon name="undo" className="text-[18px]" />
</span>
</div>
<div className="font-price-display text-price-display text-secondary leading-none mb-1">2 Orders</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Tamper inspection scheduled at Nakasero Hub</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<Icon name="warehouse" className="text-[14px] text-mtn-yellow" />
<span>Hub Intake Bay #02 on standby</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 space-y-space-md">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="pending_actions" className="text-[18px] text-primary" />
<span className="font-headline-sm text-headline-sm text-on-surface">Live Exception Manifest</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm font-bold">4 Active Locks</span>
</div>
<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-high shadow-md cursor-pointer transition-all">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary font-bold">#SC-98235</span>
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase">Code Locked 3x</span>
</div>
<span className="font-label-sm text-label-sm text-error font-bold flex items-center gap-0.5">
<Icon name="schedule" className="text-[14px]" /> 14 mins
              </span>
</div>
<div className="font-label-lg text-label-lg text-on-surface mb-1">Nike Air Force 1 '07 All White (Size 42)</div>
<div className="space-y-1 mb-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="battery_alert" className="text-[16px] text-amber-warning" />
<span>Buyer phone dead at doorstep • Denis Mukasa</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-[16px] text-on-surface-variant" />
<span>Courier Brian K. (SafeBoda #UG-882)</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-[16px] text-on-surface-variant" />
<span className="truncate">Bugolobi Flats, Block 4, Flat 12, Kampala</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[12px]" /> Escrow Active
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Nakasero Hub</span>
</div>
<span className="font-price-display text-headline-sm text-on-surface whitespace-nowrap">UGX 120,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">#SC-98229</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase">Third-Party Handover</span>
</div>
<span className="font-label-sm text-label-sm text-amber-warning font-bold flex items-center gap-0.5">
<Icon name="schedule" className="text-[14px]" /> 9 mins
              </span>
</div>
<div className="font-label-lg text-label-lg text-on-surface mb-1">Samsung Microwave 23L Quick Defrost</div>
<div className="space-y-1 mb-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="flight_takeoff" className="text-[16px] text-on-surface-variant" />
<span>Customer traveling, sibling receiving without delivery code</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-[16px] text-on-surface-variant" />
<span>Courier Denis O. (Kireka Fleet)</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-[16px] text-on-surface-variant" />
<span className="truncate">Ntinda Ministers Village, Plot 18</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[12px]" /> Escrow Active
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kireka Hub</span>
</div>
<span className="font-price-display text-headline-sm text-on-surface whitespace-nowrap">UGX 420,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">#SC-98224</span>
<span className="px-space-xs py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm uppercase">Seal Disputed</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold flex items-center gap-0.5">
<Icon name="schedule" className="text-[14px]" /> 6 mins
              </span>
</div>
<div className="font-label-lg text-label-lg text-on-surface mb-1">Anker SoundCore Q20i Hybrid ANC Headphones</div>
<div className="space-y-1 mb-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="report" className="text-[16px] text-on-surface-variant" />
<span>Disputed outer polybag scratch at handover</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-[16px] text-on-surface-variant" />
<span>Courier Ronald T. (Wandegeya Fleet)</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-[16px] text-on-surface-variant" />
<span className="truncate">Makerere University Main Gate, Kampala</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[12px]" /> Escrow Active
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Old Kampala Hub</span>
</div>
<span className="font-price-display text-headline-sm text-on-surface whitespace-nowrap">UGX 195,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">#SC-98218</span>
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase">2G Drop / Unreachable</span>
</div>
<span className="font-label-sm text-label-sm text-error font-bold flex items-center gap-0.5">
<Icon name="warning" className="text-[14px]" /> 18 mins
              </span>
</div>
<div className="font-label-lg text-label-lg text-on-surface mb-1">Oraimo Watch 4 Plus Smartwatch 2.01"</div>
<div className="space-y-1 mb-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<Icon name="signal_cellular_nodata" className="text-[16px] text-on-surface-variant" />
<span>Phone network unreachable • Zero bars</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-[16px] text-on-surface-variant" />
<span>Courier Patrick M. (Kajjansi Link)</span>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-[16px] text-on-surface-variant" />
<span className="truncate">Entebbe Road Shell Service Station</span>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified_user" className="text-[12px]" /> Escrow Active
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Entebbe Hub</span>
</div>
<span className="font-price-display text-headline-sm text-on-surface whitespace-nowrap">UGX 115,000</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-space-md">

<div className="p-space-lg rounded-xl bg-surface-container shadow-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Active Docket</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Docket #EXC-98235</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Related Order: <span className="text-on-surface font-semibold">#SC-98235</span> • Initiated at 14:38 EAT via Courier Mobile Terminal
              </div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-sm py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase flex items-center gap-1">
<Icon name="lock_reset" className="text-[14px]" /> Escrow Hold
              </span>
<span className="px-space-sm py-1 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="timer" className="text-[14px]" /> 14m On-Site
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-md">

<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Buyer (Masked Role)</div>
<div className="font-label-lg text-label-lg text-on-surface leading-tight">Denis Mukasa</div>
<div className="font-body-sm text-body-sm text-primary font-mono mt-0.5">+256 701 ••• 882</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug truncate">
                Block 4, Flat 12, Bugolobi Flats
              </div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Courier on Scene</div>
<div className="font-label-lg text-label-lg text-on-surface leading-tight">Brian Kizito</div>
<div className="font-body-sm text-body-sm text-tertiary font-mono mt-0.5">SafeBoda #UG-882 • UEF 842X</div>
<div className="font-body-sm text-body-sm text-emerald-escrow mt-1 flex items-center gap-1">
<Icon name="my_location" className="text-[14px]" />
<span>GPS matched (±11m)</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Frozen Settlement</div>
<div className="font-price-display text-price-display text-primary leading-tight whitespace-nowrap">UGX 120,000</div>
<div className="font-body-sm text-body-sm text-on-surface truncate mt-0.5">Nike Air Force 1 '07 (42)</div>
<div className="font-label-sm text-label-sm text-tertiary mt-1 flex items-center gap-1">
<Icon name="account_balance" className="text-[14px]" />
<span>BoU Escrow Account</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Incident &amp; Doorstep Evidence</span>
<span className="px-space-xs py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">Field Audit Required</span>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
<div className="flex items-center gap-space-xs text-amber-warning font-label-md text-label-md">
<Icon name="emergency" className="text-[18px]" />
<span>Deadlock Root Cause Analysis:</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
              Customer entered mismatched 6-digit delivery code 3 consecutive times. Buyer's smartphone subsequently shut down due to depleted battery. Customer is physically present with original National ID card matching order recipient records.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="rounded-xl overflow-hidden bg-surface-container-low flex flex-col">
<div className="p-space-sm flex items-center justify-between bg-surface-container-high/60">
<span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
<Icon name="location_pin" className="text-[16px] text-tertiary" /> Courier Telemetry Lock
                </span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono">0.3129° N, 32.6184° E</span>
</div>
<div className="w-full h-44 bg-surface-container-highest flex items-end p-space-sm relative" data-location="Bugolobi Flats, Kampala, Uganda" style={{}}>
<div className="absolute inset-0 bg-cover bg-center opacity-70" data-alt="Satellite map representation of Bugolobi Kampala residential flats showing high precision telemetry pinpoint in vibrant emerald radar UI theme." style={{"backgroundImage":"url('/images/a1e5c089d5a4abc6.webp')"}}></div>
<div className="relative z-10 px-space-sm py-1 rounded bg-surface-dark/90 text-on-surface font-label-sm text-label-sm flex items-center gap-space-xs shadow-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span>Courier Brian Kizito stationary at Block 4</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-surface-container-low flex flex-col">
<div className="p-space-sm flex items-center justify-between bg-surface-container-high/60">
<span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
<Icon name="add_a_photo" className="text-[16px] text-primary" /> Doorstep Photographic Proof
                </span>
<span className="font-label-sm text-label-sm text-tertiary font-mono">Verified Bag #88190</span>
</div>
<div className="w-full h-44 bg-surface-container-highest relative flex items-end p-space-sm overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-85" data-alt="Close up operational handheld view of a Ugandan customer holding an original National ID card alongside a dark branded SwiftCart sealed tamper-proof delivery package at a residential doorstep." style={{"backgroundImage":"url('/images/6220be3aed2f1d8a.webp')"}}></div>
<div className="relative z-10 px-space-sm py-1 rounded bg-surface-dark/95 text-on-surface font-label-sm text-label-sm shadow-md">
<span>NIRA NIN: CM88019482 matched to Denis Mukasa</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container shadow-xl space-y-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface">Supervisory PIN Override Authorization</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Master escalation to trigger immediate courier handover and release escrow</p>
</div>
<span className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">Super Admin Clearance</span>
</div>

<div className="space-y-space-md">

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-end">
<div className="md:col-span-7 space-y-1">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between">
<span>Supervisory Override Master PIN (6-Digits)</span>
<span className="text-tertiary font-label-sm text-label-sm">2FA Authenticated</span>
</label>
<div className="flex items-center gap-space-xs">
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} type="password" value="7" />
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} type="password" value="3" />
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} type="password" value="9" />
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} type="password" value="2" />
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} placeholder="•" type="password" />
<input className="w-12 h-14 rounded-lg bg-surface-container-high text-center font-code-display text-code-display text-primary focus:outline-none focus:bg-surface-variant font-bold shadow-inner" maxLength={1} placeholder="•" type="password" />
</div>
</div>
<div className="md:col-span-5">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="fingerprint" className="text-[20px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Kizito Ronald (ADM-04)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hardware Key Registered</span>
</div>
</div>
</div>
</div>

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface font-bold">Mandatory Override Audit Justification</label>
<div className="relative">
<select className="w-full h-11 px-space-md rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-variant cursor-pointer shadow-sm">
<option selected={true}>Customer Phone Battery Dead / Identity Verified In Person via National ID Card (NIRA)</option>
<option>Buyer Traveling - Authorized Sibling / Family Handover with Official ID</option>
<option>Tamper Seal Inspected Remotely by Supervisor &amp; Cleared for Doorstep Acceptance</option>
<option>Uganda Telecom SMS Gateway Delay Verified via MoMo Gateway Admin</option>
</select>
<Icon name="arrow_drop_down" className="absolute right-3 top-3 text-on-surface-variant pointer-events-none text-[20px]" />
</div>
</div>

<div className="space-y-1">
<label className="font-label-md text-label-md text-on-surface font-bold">Internal Ledger Audit Notes</label>
<textarea className="w-full p-space-md rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-variant resize-none shadow-sm" rows={2}>Recipient Denis Mukasa verified via NIRA NIN CM88019482. Physical box and seal pristine. Override authorized by Kizito Ronald (Super Admin).</textarea>
</div>
</div>

<div className="pt-space-sm space-y-space-sm">
<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:opacity-95 active:scale-[0.99] transition-all" type="button">
<Icon name="lock_open" className="text-[22px]" />
<span>Authorize Supervisory PIN Override &amp; Release Escrow</span>
</button>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<button className="h-11 rounded-lg bg-amber-warning/20 hover:bg-amber-warning/30 text-amber-warning font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs transition-colors" type="button">
<Icon name="undo" className="text-[18px]" />
<span>Order Abort &amp; Return to Nakasero Hub</span>
</button>
<button className="h-11 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs transition-colors" type="button">
<Icon name="ring_volume" className="text-[18px] text-tertiary" />
<span>Call Customer via Masked Relay</span>
</button>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
<Icon name="verified_user" className="text-primary text-[18px] shrink-0 mt-0.5" />
<div className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<span className="text-on-surface font-bold">Immutable Ledger Recording:</span> Action will be permanently recorded on immutable audit ledger under Officer Kizito Ronald (ID: ADM-04). Escrow of UGX 120,000 will settle to <span className="text-on-surface font-medium">Kikuubo Sneaker Shop</span> within normal 18:00 EAT clearing cycle.
            </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
