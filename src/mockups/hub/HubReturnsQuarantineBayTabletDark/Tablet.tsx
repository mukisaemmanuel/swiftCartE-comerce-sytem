// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_returns_quarantine_bay_tablet_dark/code.html
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="w-full px-margin-desktop py-space-md">
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Inbound Returns Today</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">9</span>
<span className="font-label-sm text-label-sm text-tertiary">Recv / Logged</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">8 boda drops • 1 linehaul</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<Icon name="move_to_inbox" className="text-primary text-[22px]" />
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Awaiting Merchant / Linehaul</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-headline-lg text-headline-lg text-secondary">14</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Pkgs</span>
</div>
<span className="font-label-md text-label-md text-emerald-escrow mt-0.5 whitespace-nowrap">UGX 3,420,000 in Escrow</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<Icon name="local_shipping" className="text-secondary text-[22px]" />
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Quarantine / Damaged Bay</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-headline-lg text-headline-lg text-danger-penalty">4</span>
<span className="font-label-sm text-label-sm text-danger-penalty">Isolated</span>
</div>
<span className="font-label-md text-label-md text-amber-warning mt-0.5 flex items-center gap-1">
<Icon name="lock" className="text-[14px]" /> Dispute Locked
          </span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<Icon name="gavel" className="text-danger-penalty text-[22px]" />
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Reverse SLA (&lt;24h)</span>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-headline-lg text-headline-lg text-emerald-escrow">98.2%</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary mt-0.5">Target ≥96.0% • On Track</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<Icon name="speed" className="text-emerald-escrow text-[22px]" />
</div>
</div>
</div>
</section>

<section className="w-full px-margin-desktop pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="relative w-full">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search Return # or Merchant..." type="text" value="#RT-309" />
</div>

<div className="flex items-center gap-space-xs overflow-x-auto py-1 text-nowrap">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors">
              All RTO <span className="text-on-surface-variant ml-1">(18)</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-danger-penalty/15 text-danger-penalty font-label-md text-label-md flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span> Quarantine <span className="ml-0.5">(4)</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-colors">
              To Merchant (8)
            </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-colors">
              Inspect (6)
            </button>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-high shadow-md transition-all cursor-pointer relative overflow-hidden" style={{"boxShadow":"inset 3px 0 0 #EF4444"}}>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">#RT-309</span>
<span className="px-2 py-0.5 rounded bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm uppercase tracking-wider font-bold">Quarantine Q-02</span>
</div>
<span className="font-label-lg text-label-lg text-primary truncate mt-0.5">Victoria Tech Supplies</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">SoundCore Space One ANC</span>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-lg text-label-lg text-emerald-escrow whitespace-nowrap">UGX 380,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-0.5 mt-0.5">
<Icon name="verified_user" className="text-[13px] text-emerald-escrow" /> Escrow Held
                </span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex flex-col gap-1 bg-surface-container-lowest/60 p-space-sm rounded-lg">
<div className="flex items-center gap-1.5 text-danger-penalty font-label-sm text-label-sm">
<Icon name="warning" className="text-[16px]" />
<span>Tamper Seal Sliced • Discrepant Cable Returned</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span>Rider: Kizito B. (UFA 421Z)</span>
<span>11:30 EAT • Nakasero</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">#RT-304</span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Merchant Pickup</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface-variant truncate mt-0.5">Kampala Gadgets</span>
<span className="font-body-sm text-body-sm text-on-surface">Oraimo 20000mAh Power Bank</span>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 65,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Staged Bay B-04</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="text-amber-warning flex items-center gap-1">
<Icon name="battery_alert" className="text-[14px]" /> Defective Battery Cell
              </span>
<span>10:15 EAT</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">#RT-298</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wider">Restock Ready</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface-variant truncate mt-0.5">TechCity KLA</span>
<span className="font-body-sm text-body-sm text-on-surface">Anker 30W Nano GaN Charger</span>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 85,000</span>
<span className="font-label-sm text-label-sm text-tertiary mt-0.5">Mft. Seal Intact</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Cause: Buyer Remorse Sealed</span>
<span>09:40 EAT</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">#RT-292</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">Inspect Required</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface-variant truncate mt-0.5">Audio Express Lugogo</span>
<span className="font-body-sm text-body-sm text-on-surface">JBL Clip 4 Ultra-Portable</span>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 145,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Dispatch Bay A-1</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="text-amber-warning">Wrong Color Dispatched (Red / Blue)</span>
<span>08:55 EAT</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-lg flex flex-col gap-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-code-display text-code-display text-primary">#RT-309</span>
<span className="h-4 w-px bg-surface-container-highest"></span>
<span className="font-label-lg text-label-lg text-on-surface">Orig. Order #SC-9912</span>
<span className="px-2.5 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm flex items-center gap-1 font-bold">
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-pulse"></span> QUARANTINE PROTOCOL ACTIVE
                </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Merchant: <strong className="text-on-surface">Victoria Tech Supplies</strong> • Buyer Phone: <code className="text-primary font-mono">07•• ••• 419</code></span>
</div>
<div className="flex flex-col items-start md:items-end bg-surface-container-high px-space-md py-space-xs rounded-lg shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Custody Vault</span>
<div className="flex items-center gap-1 text-emerald-escrow">
<Icon name="lock" className="text-[18px]" />
<span className="font-price-display text-price-display font-extrabold whitespace-nowrap">UGX 380,000</span>
</div>
<span className="font-label-sm text-label-sm text-amber-warning">Settlement Frozen</span>
</div>
</div>

<div className="bg-surface-container-high rounded-lg p-space-md flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-amber-warning/15 flex items-center justify-center shrink-0">
<Icon name="shield" className="text-amber-warning text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface">Dispute Docket #DSP-104</span>
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-semibold">Under Fast-Track Arbitration</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Assigned Officer: <strong className="text-on-surface">Patricia Namubiru</strong> (SwiftCart HQ Trust &amp; Safety Desk)</span>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors shrink-0">
              Dispute Log
            </button>
</div>

<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
<Icon name="csv" className="text-primary text-[20px]" />
                Forensic Tamper Inspection Matrix
              </span>
<span className="font-label-sm text-label-sm text-emerald-escrow bg-tertiary-container/30 px-2 py-1 rounded">
                Tamper Bag Barcode: #TB-KLA-8820-91X Verified
              </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Outer Holographic Seal</span>
<span className="px-2 py-0.5 rounded bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="cancel" className="text-[14px]" /> Sliced / Broken
                  </span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest/80 text-on-surface font-body-sm text-body-sm flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Tamper Void Pattern:</span>
<span className="font-semibold text-danger-penalty">Exposed &amp; Severed</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Packaging Integrity:</span>
<span className="font-semibold text-danger-penalty">Box flaps torn at base</span>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Serial &amp; Cable Match</span>
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shuffle" className="text-[14px]" /> Discrepancy Found
                  </span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest/80 text-on-surface font-body-sm text-body-sm flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Headphone Unit:</span>
<span className="font-semibold text-emerald-escrow">SN: #A3035Z11 (Match)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Returned Cable:</span>
<span className="font-semibold text-danger-penalty">White USB-A (Counterfeit)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-secondary text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Handover from Boda Rider Kizito Brian</span>
<div className="flex items-center gap-space-sm flex-wrap text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono font-bold text-label-sm">UFA 421Z</span>
<span>•</span>
<span>Received: Today 11:30 EAT</span>
<span>•</span>
<span>Intake Lead: William S.</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-lg shrink-0">
<Icon name="lock_clock" className="text-primary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bay Allocation</span>
<span className="font-label-lg text-label-lg text-primary font-bold">Bay Q-02 (Secure)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface flex items-center gap-space-xs">
<Icon name="photo_camera" className="text-primary text-[18px]" />
                  Tablet Evidence Capture (2 Forensics Attached)
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Stored on Encrypted Hub IPFS Node</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">

<div className="bg-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="relative w-full h-44 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Close up forensic macro photography of a retail electronics box with a sliced holographic security seal. Strong dark lighting with neon orange and amber reflections on glossy cardboard packaging, timestamp watermark overlay, showing torn tamper void fibers in high clarity." src="/images/6ce99dcc895c05fe.webp" />
<div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-dark/85 backdrop-blur text-white font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span> Photo 1: Sliced Box Seal
                    </div>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-dark/85 backdrop-blur text-on-surface-variant font-label-sm text-label-sm">
                      EXIF: 11:32:04 EAT • Nakasero Bay
                    </div>
</div>
<div className="p-space-sm flex items-center justify-between bg-surface-container-high">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">Sliced seal macro evidence</span>
<button className="text-primary hover:text-action-gradient-start font-label-sm text-label-sm flex items-center gap-1 shrink-0">
<Icon name="zoom_in" className="text-[16px]" /> Inspect
                    </button>
</div>
</div>

<div className="bg-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="relative w-full h-44 bg-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="Forensic photograph taken on tablet showing a cheap non-branded generic white USB-A charging cable placed next to an Anker SoundCore Space One headphone carrying pouch. Top-down studio work-mat perspective with millimeter scale ruler and operational serial sticker visible under cool white work lamp." src="/images/5db880a2df3c8f3a.webp" />
<div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-dark/85 backdrop-blur text-white font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span> Photo 2: Discrepant Cable Swap
                    </div>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-dark/85 backdrop-blur text-on-surface-variant font-label-sm text-label-sm">
                      EXIF: 11:33:18 EAT • Nakasero Bay
                    </div>
</div>
<div className="p-space-sm flex items-center justify-between bg-surface-container-high">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">Non-OEM white cable verified</span>
<button className="text-primary hover:text-action-gradient-start font-label-sm text-label-sm flex items-center gap-1 shrink-0">
<Icon name="zoom_in" className="text-[16px]" /> Inspect
                    </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Agent Inspection Finding Log</span>
<p className="font-body-md text-body-md text-on-surface">
                Package arrived with tamper tape sliced from underneath. SoundCore unit powers on, but customer substituted factory black nylon USB-C braided fast cable with unbranded standard white USB-A lead. Escrow hold maintained per SwiftCart RTO Section 4B. Isolated to Quarantine Shelf Q-02 pending merchant concurrence.
              </p>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<button className="h-[52px] rounded-xl text-white font-label-lg text-label-lg flex items-center justify-center gap-space-sm active:scale-[0.98] transition-all shadow-[0_4px_18px_rgba(218,55,0,0.35)]" id="quarantine-submit-btn" style={{"background":"linear-gradient(135deg, #FF8A1F 0%, #DA3700 100%)"}}>
<Icon name="verified" className="text-[20px]" />
<span>Seal in Quarantine &amp; Submit Forensic Docket</span>
</button>

<button className="h-[52px] rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-sm transition-all" id="merchant-release-btn">
<Icon name="assignment_turned_in" className="text-[20px]" />
<span>Release to Victoria Tech (Sign Required)</span>
</button>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-1.5 text-primary hover:text-action-gradient-start font-label-md text-label-md" href="#">
<Icon name="picture_as_pdf" className="text-[18px]" />
                Download Tamper Incident Report (PDF with Digital Signatures)
              </a>
<span className="font-label-sm text-label-sm text-on-surface-variant text-center sm:text-right">
                Under SwiftCart Bailment Terms &amp; Uganda Electronic Transactions Act 2011
              </span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full h-20 px-margin-desktop flex items-center justify-around"><nav className="flex items-center justify-between w-full max-w-4xl mx-auto gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="storage" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Dispatch</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all gap-1 bg-primary-container text-on-primary-container font-label-lg" data-path="returns" href="#"><Icon name="assignment_return" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="more" href="#"><Icon name="tune" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">More</span></a></nav></div></footer>
    </div>
  );
};

export default Tablet;
