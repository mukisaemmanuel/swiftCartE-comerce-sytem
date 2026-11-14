// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/damaged_parcel_quarantine_bay_intake_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DamagedParcelQuarantineBayIntakeSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DamagedParcelQuarantineBayIntakeSwiftcartHubAgent: React.FC<DamagedParcelQuarantineBayIntakeSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 -ml-1 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">Discrepancy Report</h1><span className="font-label-sm text-label-sm text-on-surface-variant truncate">Station #04 - Kampala</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full pb-10">

<div className="px-margin pt-space-md pb-space-sm bg-surface flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<button aria-label="Close intake flow" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
<div className="flex flex-col min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Damaged Parcel Intake</h2>
<span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Quarantine Bay 03 - Audit Intake
        </span>
</div>
</div>
<div className="bg-error-container text-on-error-container px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-extrabold flex items-center gap-1 shadow-sm">
<Icon name="lock" className="text-[14px]" />
      BOU-NPS SEC
    </div>
</div>
<div className="px-margin flex flex-col gap-space-md mt-space-xs">

<section className="bg-error-container text-on-error-container p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="gavel" className="text-error text-[20px]" />
<h3 className="font-label-lg text-label-lg font-bold text-on-error-container">Regulatory Exception Docket • Mandatory Escrow Hold</h3>
</div>
<p className="font-body-sm text-body-sm text-on-error-container/90 leading-relaxed">
        Damaged or tampered items must be logged within <strong className="font-bold underline decoration-error">15 minutes</strong> of physical receipt to legally freeze courier and merchant liabilities under Bank of Uganda NPS e-commerce compliance.
      </p>
<div className="mt-space-xs flex items-center justify-between bg-surface-container-lowest/70 backdrop-blur-sm px-3 py-1.5 rounded-lg text-on-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-on-surface-variant">
<Icon name="timer" className="text-[14px] text-error" /> Intake SLA Countdown:
        </span>
<span className="font-price-display text-label-md text-error font-extrabold tabular-nums">09:42 remaining</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Consignment Manifest</span>
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-label-sm font-label-sm font-semibold">Inbound Scan Valid</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Tracking Docket / AWB</span>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold tracking-tight">SC-ORD-99405</span>
<span className="font-body-sm text-body-sm text-secondary truncate">AWB #SWIFT-UG-99405</span>
</div>
<button aria-label="Re-scan Barcode" className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-dim transition-colors" type="button">
<Icon name="qr_code_scanner" className="text-[20px]" />
</button>
</div>
<div className="space-y-space-xs pt-1">
<div className="flex items-start justify-between gap-space-xs">
<div className="min-w-0">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-snug">Solar Inverter 3KVA Hybrid Pure Sine</h4>
<p className="font-body-sm text-body-sm text-secondary truncate">Merchant: Kikuubo Wholesalers Direct (#KKB-891)</p>
</div>
<span className="font-label-lg text-label-lg text-primary font-extrabold whitespace-nowrap">UGX 1,850,000</span>
</div>
<div className="bg-surface-container rounded-lg p-2.5 flex items-center gap-space-xs text-on-secondary-fixed">
<Icon name="two_wheeler" className="text-[20px] text-secondary" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold truncate">Boda Rider Brian K. (#RDR-4082)</span>
<span className="font-body-sm text-body-sm text-on-secondary-fixed-variant truncate">SafeBoda Kampala Hub Dispatch</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Damage &amp; Tamper Taxonomy</h3>
<span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Severity: High</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Select all non-conformances observed upon courier drop:</p>
<div className="flex flex-wrap gap-2 pt-1" id="damage-pills">
<button className="damage-pill px-3 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all bg-primary-container text-on-primary-container font-bold shadow-sm" data-checked="true" type="button">
<Icon name="check_box" className="text-[18px]" />
          Crushed Outer Carton / Puncture
        </button>
<button className="damage-pill px-3 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all bg-primary-container text-on-primary-container font-bold shadow-sm" data-checked="true" type="button">
<Icon name="check_box" className="text-[18px]" />
          Broken Tamper Seal (VOID Exposed)
        </button>
<button className="damage-pill px-3 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all bg-surface-container text-on-surface font-medium" data-checked="false" type="button">
<Icon name="check_box_outline_blank" className="text-[18px] text-outline" />
          Water / Rain Soaked
        </button>
<button className="damage-pill px-3 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all bg-surface-container text-on-surface font-medium" data-checked="false" type="button">
<Icon name="check_box_outline_blank" className="text-[18px] text-outline" />
          Suspected Missing Contents / Discrepancy
        </button>
<button className="damage-pill px-3 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all bg-surface-container text-on-surface font-medium" data-checked="false" type="button">
<Icon name="check_box_outline_blank" className="text-[18px] text-outline" />
          Counterfeit / Irregular Serial Number
        </button>
</div>
<div className="mt-2 bg-error-container/40 p-2.5 rounded-lg flex items-center gap-2">
<Icon name="emergency_home" className="text-error text-[18px]" />
<span className="font-label-sm text-label-sm text-on-error-container font-semibold">Immediate Escrow Suspension Triggered by Selected Flags</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">3-Angle Chain-of-Custody Evidence</h3>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded">2 of 3 Logged</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">High-clarity evidentiary captures for forensic arbitration:</p>
<div className="grid grid-cols-3 gap-space-xs pt-1">

<div className="flex flex-col gap-1">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-high shadow-inner">
<img className="w-full h-full object-cover" data-alt="Close up evidentiary shot of a severely crushed cardboard parcel box corner showing crumpled industrial kraft paper and torn structural ribbing under bright logistics warehouse inspection LED lighting." src="/images/b2af7c9a7ed95b7b.webp" />
<div className="absolute bottom-1 right-1 bg-tertiary text-on-tertiary px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 shadow-sm">
<Icon name="verified" className="text-[12px]" /> Done
            </div>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">1. Box Exterior</span>
</div>

<div className="flex flex-col gap-1">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-high shadow-inner">
<img className="w-full h-full object-cover" data-alt="Macro photo of broken red security tape displaying silver VOID tamper evident patterning peeled and separated along the cardboard seam in an industrial audit station." src="/images/db86c9ee0b8c14bd.webp" />
<div className="absolute bottom-1 right-1 bg-tertiary text-on-tertiary px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 shadow-sm">
<Icon name="verified" className="text-[12px]" /> Done
            </div>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">2. Void Seal</span>
</div>

<div className="flex flex-col gap-1">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-inverse-surface flex flex-col items-center justify-center text-center p-1 group cursor-pointer shadow-inner">
<Icon name="photo_camera" className="text-primary text-[28px] animate-bounce" />
<span className="font-label-sm text-label-sm text-inverse-on-surface font-bold mt-1 leading-tight">Retake Photo</span>
<div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold truncate">3. S/N Barcode</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-1.5">
<Icon name="warehouse" className="text-primary text-[20px]" />
        Physical Quarantine Allocation
      </h3>
<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary">Secured Bay</span>
<p className="font-label-lg text-label-lg font-extrabold text-on-surface truncate">Bay 03 (Cage)</p>
</div>
<div className="bg-surface-container p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary">Assigned Shelf</span>
<p className="font-label-lg text-label-lg font-extrabold text-primary truncate">HOLD-Q-09</p>
</div>
</div>
<div className="bg-error-container/30 p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<Icon name="sell" className="text-error text-[22px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Tamper Lock Wire Attached</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono truncate">#Q-TAG-88219 (Red Plastic Tie)</span>
</div>
</div>
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Primary Liability Attribution</h3>
<p className="font-body-sm text-body-sm text-secondary">Designate fault to determine automated claims protocol:</p>
<div className="space-y-space-xs pt-1" id="liability-options">
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container cursor-pointer transition-colors has-[:checked]:bg-primary-fixed/40">
<input checked={true} className="mt-1 w-4 h-4 accent-primary" name="custody_liability" type="radio" value="courier" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">In-Transit Damage (Courier Rig Casualty)</span>
<span className="font-body-sm text-body-sm text-secondary">Charge Courier Bond &amp; SafeBoda Goods-In-Transit Insurance policy.</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container cursor-pointer transition-colors has-[:checked]:bg-primary-fixed/40">
<input className="mt-1 w-4 h-4 accent-primary" name="custody_liability" type="radio" value="merchant" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Merchant Inbound Defect (Sent Damaged)</span>
<span className="font-body-sm text-body-sm text-secondary">Package dispatched in non-compliant state. Immediate return to seller.</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container cursor-pointer transition-colors has-[:checked]:bg-primary-fixed/40">
<input className="mt-1 w-4 h-4 accent-primary" name="custody_liability" type="radio" value="theft" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Suspected Thefts / En-Route Tampering</span>
<span className="font-body-sm text-body-sm text-secondary">Escalate immediately to SwiftCart Legal, Central Arbitration &amp; Police.</span>
</div>
</label>
</div>
</section>

<section className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-extrabold py-3.5 px-space-md rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="btn-freeze" type="button">
<Icon name="lock_clock" className="text-[20px]" />
        Freeze Escrow &amp; Admit to Bay 03
      </button>
<button className="w-full bg-surface-container-high hover:bg-surface-dim text-on-surface font-label-lg text-label-lg font-bold py-3 px-space-md rounded-xl transition-all flex items-center justify-center gap-2" type="button">
<Icon name="support_agent" className="text-[20px] text-primary" />
        Escalate to Patricia (Lead Arbitrator)
      </button>
<button className="w-full py-2 text-secondary hover:text-on-surface font-label-md text-label-md font-medium text-center transition-colors" type="button">
        Discard Intake &amp; Mark Parcel Intact
      </button>
</section>
</div>
</div>
</main>
    </div>
  );
};

export default DamagedParcelQuarantineBayIntakeSwiftcartHubAgent;
