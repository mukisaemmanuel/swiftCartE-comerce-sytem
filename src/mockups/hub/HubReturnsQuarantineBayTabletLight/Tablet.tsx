// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_returns_quarantine_bay_tablet_light/code.html
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
      
      <main className="w-full pt-32 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-margin py-space-sm space-y-space-md">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<span className="flex h-3 w-3 relative flex-shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
<div className="flex flex-col sm:flex-row sm:items-center sm:gap-space-sm min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Reverse Logistics Sync Active</span>
<span className="hidden sm:inline text-outline text-body-sm">•</span>
<span className="font-body-md text-body-md text-on-surface-variant truncate">Nakasero Station A Bay Q-02</span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded-full text-on-surface-variant">
<Icon name="gavel" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm tracking-wide">URSB &amp; Electronic Transactions Act 2011 Compliant</span>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Inbound Returns Today</span>
<Icon name="keyboard_return" className="text-[20px] text-primary" />
</div>
<div className="mt-space-sm">
<div className="font-price-display text-price-display text-on-surface">9 Recv / Logged</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">8 boda drops • 1 linehaul</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Awaiting Merchant</span>
<Icon name="storefront" className="text-[20px] text-secondary" />
</div>
<div className="mt-space-sm">
<div className="font-price-display text-price-display text-on-surface">14 Pkgs</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 whitespace-nowrap">UGX 3,420,000 in Payment</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-error uppercase tracking-wider font-bold">Quarantine / Damaged</span>
<Icon name="warning" className="text-[20px] text-error" />
</div>
<div className="mt-space-sm flex items-baseline justify-between gap-1">
<div className="font-price-display text-price-display text-error">4 Isolated</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface">
<Icon name="lock" className="text-[14px] text-primary" />
            Dispute Locked
          </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Reverse SLA (&lt;24h)</span>
<Icon name="pace" className="text-[20px] text-tertiary" />
</div>
<div className="mt-space-sm">
<div className="font-price-display text-price-display text-tertiary">98.2%</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Target ≥96.0% • On Track</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-space-md items-start w-full">

<div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="relative flex items-center">
<Icon name="search" className="absolute left-3 text-[20px] text-outline" />
<input className="w-full h-11 pl-10 pr-space-md rounded-xl bg-surface-container-low font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="Search RTO #, merchant, serial..." type="text" value="#RT-309" />
</div>

<div className="flex flex-wrap gap-1.5" id="rto-filters">
<button className="px-2.5 py-1 rounded-lg font-label-sm text-label-sm bg-surface-container-high text-on-surface hover:bg-surface-dim transition-colors">
              All RTO (18)
            </button>
<button className="px-2.5 py-1 rounded-lg font-label-sm text-label-sm bg-error text-on-error shadow-sm flex items-center gap-1">
<span>Quarantine (4)</span>
</button>
<button className="px-2.5 py-1 rounded-lg font-label-sm text-label-sm bg-surface-container-high text-on-surface hover:bg-surface-dim transition-colors">
              To Merchant (8)
            </button>
<button className="px-2.5 py-1 rounded-lg font-label-sm text-label-sm bg-surface-container-high text-on-surface hover:bg-surface-dim transition-colors">
              Inspect (6)
            </button>
</div>
</div>

<div className="flex flex-col gap-space-sm w-full">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_8px_24px_rgba(14,27,77,0.08)] bg-gradient-to-r from-error/10 via-surface-container-lowest to-surface-container-lowest cursor-pointer transition-transform transform scale-[1.01]">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">#RT-309</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container flex items-center gap-1">
<Icon name="shield" className="text-[12px]" />
                Quarantine Q-02
              </span>
</div>
<div className="mt-1 font-label-lg text-label-lg text-on-surface">Victoria Tech Supplies</div>
<div className="font-body-md text-body-md text-on-surface-variant truncate">SoundCore Space One ANC</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface">
<span className="font-price-display text-[16px] leading-5 font-bold text-primary whitespace-nowrap">UGX 380,000</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-outline">Payment Held</span>
</div>
<div className="mt-space-xs flex items-center gap-1 text-error font-label-sm text-label-sm">
<Icon name="report" className="text-[14px]" />
<span>package seal Sliced alert</span>
</div>
<div className="mt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Rider: Kizito B. (UFA 421Z)</span>
<span>11:30 EAT</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">#RT-304</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container">
                Merchant Pickup
              </span>
</div>
<div className="mt-1 font-label-md text-label-md text-on-surface">Kampala Gadgets</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Oraimo Power Bank 27000mAh</div>
<div className="mt-space-xs flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 65,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Defective Battery</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">#RT-298</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container">
                Restock Ready
              </span>
</div>
<div className="mt-1 font-label-md text-label-md text-on-surface">TechCity KLA</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Anker 30W Nano GaN Charger</div>
<div className="mt-space-xs flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 85,000</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Mft. Seal Intact
              </span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">#RT-292</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface">
                Inspect Required
              </span>
</div>
<div className="mt-1 font-label-md text-label-md text-on-surface">Audio Express Lugogo</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">JBL Clip 4 Ultra-portable</div>
<div className="mt-space-xs flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 145,000</span>
<span className="font-body-sm text-body-sm text-outline">Wrong Color Spec</span>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full flex flex-col gap-space-md min-w-0">

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface">Return #RT-309</span>
<span className="font-body-md text-body-md text-outline">• Orig. Order #SC-9912</span>
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-error text-on-error uppercase font-bold tracking-wider">
                  Quarantine Protocol Active
                </span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant mt-1 flex flex-wrap items-center gap-space-md">
<span>Merchant: <strong className="text-on-surface font-label-md">Victoria Tech Supplies</strong></span>
<span>•</span>
<span>Customer: <strong className="text-on-surface font-label-md">07•• ••• 419</strong></span>
<span>•</span>
<span>Category: Premium Electronics</span>
</div>
</div>

<div className="bg-surface-container-low px-space-md py-space-sm rounded-xl flex items-center gap-space-sm self-start md:self-auto shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="lock" className="text-[20px]" />
</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase">payment holding reserve</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold whitespace-nowrap">UGX 380,000</div>
<div className="font-body-sm text-body-sm text-error font-medium">Settlement Frozen</div>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center flex-shrink-0">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface">Linked Dispute Docket #DSP-104</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Under Fast-Track dispute review • Assigned Officer: Denis Mukasa (HQ Payment Ops)</span>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface shadow-sm flex items-center gap-1 transition-colors">
<Icon name="visibility" className="text-[16px]" />
              Dispute Log
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="policy" className="text-[22px] text-error" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Forensic Tamper Inspection Matrix</h2>
</div>
<span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded-full font-bold">
              2 Infractions Logged
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Outer Holographic Seal</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-error text-on-error">Sliced / Broken</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant space-y-1 pt-1">
<div className="flex items-center justify-between">
<span>Void Pattern:</span>
<span className="font-label-sm text-error">Exposed &amp; Severed</span>
</div>
<div className="flex items-center justify-between">
<span>Packaging Integrity:</span>
<span className="font-label-sm text-on-surface">Box flaps torn at base</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Serial &amp; Cable Match</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-primary-fixed-dim text-on-primary-fixed-variant">Discrepancy Found</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant space-y-1 pt-1">
<div className="flex items-center justify-between">
<span>Headphone Unit:</span>
<span className="font-label-sm text-tertiary">SN: #A3035Z11 (Match)</span>
</div>
<div className="flex items-center justify-between">
<span>Returned Cable:</span>
<span className="font-label-sm text-error">White USB-A (Counterfeit/Substitute)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-center">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Rider Inbound</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">Kizito Brian (UFA 421Z)</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Time Received</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">11:30 EAT Today</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Intake Lead</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">William S. (Station A)</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bay Allocation</span>
<span className="font-label-md text-label-md text-error mt-0.5">Bay Q-02 (Secure)</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="photo_camera" className="text-[20px] text-primary" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Tablet Evidence Capture</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">(2 Forensics Attached)</span>
</div>
<button className="px-space-md py-1 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface hover:bg-surface-dim transition-colors flex items-center gap-1">
<Icon name="add_a_photo" className="text-[16px]" />
              Retake / Add
            </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-dim">
<img className="w-full h-full object-cover" data-alt="High-resolution tablet macro camera shot showing a sliced holographic Sealed Package Bag security seal on a matte black electronics cardboard box. The razor cut through the seal exposes the silver void pattern under harsh inspection light." src="/images/28294412f12f1b49.webp" />
<div className="absolute bottom-2 left-2 bg-on-surface/80 backdrop-blur-sm text-surface-container-lowest px-2 py-0.5 rounded text-[10px] font-label-sm">
                  11:32:04 EAT • Nakasero Bay Q-02 Cam
                </div>
</div>
<div className="flex items-center justify-between pt-1">
<div>
<span className="font-label-md text-label-md text-on-surface block">Photo 1: package seal Micro-Cut</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Razor penetration beneath sticker lip</span>
</div>
<button className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-dim transition-colors">
                  Inspect
                </button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-dim">
<img className="w-full h-full object-cover" data-alt="Close-up forensic product photo of open headphone packaging with black SoundCore wireless headphones beside an incorrect cheap unbranded white USB-A cable instead of original black braided type-C cable, labeled on clean wooden examination bench." src="/images/5dd73adeaa718292.webp" />
<div className="absolute bottom-2 left-2 bg-on-surface/80 backdrop-blur-sm text-surface-container-lowest px-2 py-0.5 rounded text-[10px] font-label-sm">
                  11:33:15 EAT • Serial Check #A3035Z11
                </div>
</div>
<div className="flex items-center justify-between pt-1">
<div>
<span className="font-label-md text-label-md text-on-surface block">Photo 2: Non-OEM Cable In-Box</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Discrepancy: Standard white PVC lead</span>
</div>
<button className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-dim transition-colors">
                  Inspect
                </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04)] space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Agent Inspection Finding Log</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Authored by William Ssebaggala (Hub Lead)</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md font-body-md text-body-md text-on-surface leading-relaxed">
            “Package arrived with tamper tape sliced from underneath. SoundCore unit powers on, but customer substituted factory black braided cable with unbranded white USB-A lead. Payment Hold maintained. Forwarded to Victoria Tech vendor channel for immediate claim validation.”
          </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_16px_rgba(14,27,77,0.06)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<Icon name="offline_pin" className="text-[20px] text-tertiary" />
<span className="font-body-sm text-body-sm">Signatures synced to local offline SQLite buffer</span>
</div>
<div className="flex flex-wrap items-center justify-end gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-space-md py-3 rounded-xl bg-surface-container-high font-label-lg text-label-lg text-on-surface hover:bg-surface-dim transition-all flex items-center justify-center gap-1.5 shadow-sm">
<Icon name="download" className="text-[18px]" />
              Download Tamper Incident Report (PDF)
            </button>
<button className="flex-1 sm:flex-initial px-space-md py-3 rounded-xl bg-surface font-label-lg text-label-lg text-on-surface hover:bg-surface-container transition-all flex items-center justify-center gap-1.5 shadow-sm">
<Icon name="assignment_return" className="text-[18px]" />
              Release to Victoria Tech (Sign Required)
            </button>
<button className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg hover:opacity-95 transition-all shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-2 transform active:scale-95">
<Icon name="lock" className="text-[20px]" />
              Seal in Quarantine &amp; Submit Forensic Docket
            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(14,27,77,0.06)]"><nav className="w-full max-w-3xl mx-auto px-margin py-space-sm flex items-center justify-between gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg"><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="storage" href="#"><Icon name="inventory_2" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Dispatch</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center py-2 px-1 transition-all bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg" data-path="returns" href="#"><Icon name="assignment_return" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="station-settings" href="#"><Icon name="tune" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">More</span></a></nav></footer>
    </div>
  );
};

export default Tablet;
