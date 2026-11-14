// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/returns_damaged_goods_quarantine_bay_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub: React.FC<ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHubProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider truncate">SwiftCart Hub</span><span className="flex h-2 w-2 rounded-full bg-tertiary-container animate-pulse"></span></div><span className="font-label-md text-label-md text-on-surface font-semibold truncate">William St Central</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Toggle Torch" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" type="button"><Icon name="flashlight_on" className="text-[20px]" /></button><button aria-label="Toggle Audio Cue" className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container" type="button"><Icon name="volume_up" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-space-xs shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col w-full bg-surface pt-16 pb-20"><div className="flex flex-col w-full">

<div className="hidden mx-margin mt-space-sm p-space-sm rounded-lg bg-inverse-surface text-inverse-on-surface shadow-md flex items-center justify-between gap-space-sm animate-pulse" id="statusToast">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="verified_user" className="text-tertiary-fixed text-[20px] shrink-0" />
<span className="font-label-md text-label-md truncate" id="toastMsg">Dispatched to Fraud Arbitration Desk</span>
</div>
<button className="text-inverse-on-surface hover:text-on-tertiary-fixed shrink-0" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="px-margin pt-space-md pb-space-sm">
<div className="rounded-xl bg-surface-container p-space-md shadow-sm relative overflow-hidden">

<div className="absolute -right-4 -bottom-6 w-24 h-24 opacity-10 pointer-events-none text-primary">
<svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
<path d="M10,80 Q40,30 85,15 Q65,45 80,60 Q50,60 30,85 Z"></path>
</svg>
</div>
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm tracking-wider uppercase flex items-center gap-1 font-bold">
<Icon name="gavel" className="text-[14px]" />
            Secure Audit Cage
          </span>
<span className="font-label-sm text-label-sm text-primary font-bold">BAY 03</span>
</div>
<div className="flex items-center gap-1 text-on-tertiary-container bg-tertiary-fixed/30 px-space-xs py-0.5 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
<span className="font-label-sm text-label-sm font-semibold">T-04 Active</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Quarantine Bay 03</h2>
<div className="flex items-center gap-space-xs mt-0.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="badge" className="text-[16px] text-secondary" />
<span>Sarah Kyomugisha</span>
<span className="text-secondary font-semibold">(Officer #SEC-412)</span>
</div>
</div>
<button className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors" type="button">
<Icon name="shield_person" className="text-[20px]" />
</button>
</div>

<div className="grid grid-cols-2 gap-space-xs mt-space-md pt-space-xs border-t-0">
<div className="bg-surface-container-lowest p-space-xs rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Total Locked</span>
<div className="flex items-baseline gap-space-xs mt-0.5">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">14</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Parcels</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Frozen Escrow</span>
<div className="flex items-baseline gap-0.5 mt-0.5">
<span className="font-label-sm text-label-sm font-bold text-primary">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">12,450,000</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs mt-space-xs overflow-x-auto pb-0.5 no-scrollbar">
<div className="flex items-center gap-1 bg-surface-container-highest px-space-xs py-1 rounded text-on-surface-variant shrink-0 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Merchant Insp: <strong className="text-on-surface">8</strong></span>
</div>
<div className="flex items-center gap-1 bg-surface-container-highest px-space-xs py-1 rounded text-on-surface-variant shrink-0 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>UNBS Hold: <strong className="text-on-surface">3</strong></span>
</div>
<div className="flex items-center gap-1 bg-surface-container-highest px-space-xs py-1 rounded text-on-surface-variant shrink-0 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Write-Off: <strong className="text-on-surface">3</strong></span>
</div>
</div>
</div>
</div>

<div className="px-margin mb-space-md">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="warning" className="text-primary text-[20px]" />
<h3 className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight uppercase">High-Risk Incident Spotlight</h3>
</div>
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Escrow Frozen</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="min-w-0">
<div className="flex items-center gap-space-xs flex-wrap mb-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded font-bold text-on-surface font-mono">AWB #SWIFT-UG-99405</span>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">Rider Refused</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">Solar Inverter 3KVA Hybrid Pure Sine</h4>
<p className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="storefront" className="text-[16px] text-primary" />
            Kikuubo Wholesalers Direct (Vendor #KKB-891)
          </p>
</div>
</div>

<div className="bg-error-container/40 p-space-sm rounded-lg mb-space-sm flex items-start gap-space-xs">
<Icon name="report" className="text-error text-[20px] shrink-0 mt-0.5" />
<div className="min-w-0">
<span className="font-label-sm text-label-sm font-bold text-error uppercase tracking-wider block">Tamper Protocol Violated</span>
<p className="font-body-sm text-body-sm text-on-surface font-semibold leading-snug">Crushed outer carton, corner puncture &amp; security tamper tape split prior to customer handover.</p>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-lg mb-space-sm grid grid-cols-2 gap-space-xs font-body-sm text-body-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary block">Intake Received</span>
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
<Icon name="schedule" className="text-[14px] text-secondary" /> 14:12 EAT Today
          </span>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary block">Custody Returned By</span>
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1 truncate">
<Icon name="two_wheeler" className="text-[14px] text-secondary" /> Brian K. (#RDR-4082)
          </span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="lock" className="text-primary text-[20px]" />
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Stanbic Escrow Guarantee</span>
<span className="font-price-display text-price-display text-primary font-bold">UGX 1,850,000</span>
</div>
</div>
<span className="px-2 py-1 bg-surface-container-highest rounded text-on-surface font-label-sm text-label-sm font-bold">Safety Locked</span>
</div>

<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase font-bold text-on-surface tracking-wider flex items-center gap-1">
<Icon name="photo_camera" className="text-[16px] text-secondary" />
            Audit Proof (3 Angles Logged)
          </span>
<button className="text-primary font-label-sm text-label-sm font-bold flex items-center gap-0.5" type="button">
            + Add Angle
          </button>
</div>
<div className="grid grid-cols-3 gap-space-xs">

<div className="relative rounded-lg overflow-hidden bg-surface-container-high aspect-square">
<img className="w-full h-full object-cover" data-alt="Close up high-angle photo of a heavily compressed corrugated cardboard parcel corner with visible structural dents and torn kraft paper in an industrial logistics sorting facility under fluorescent lights." src="/images/bbbbeb805181c573.webp" />
<span className="absolute bottom-1 left-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 py-0.2 rounded font-mono">Corner</span>
</div>

<div className="relative rounded-lg overflow-hidden bg-surface-container-high aspect-square">
<img className="w-full h-full object-cover" data-alt="Detailed macro photo of a sliced tamper-evident red holographic security tape seal on an electronic wholesale carton box showing void pattern opened in a warehouse audit setting." src="/images/e6ef9a6d3c3a172f.webp" />
<span className="absolute bottom-1 left-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 py-0.2 rounded font-mono">Seal Void</span>
</div>

<div className="relative rounded-lg overflow-hidden bg-surface-container-high aspect-square">
<img className="w-full h-full object-cover" data-alt="Clear overhead crisp photograph of an inverter serial barcode label SWIFT-UG-99405 with manufacturer model sticker and inspection stamp under warehouse audit magnifying lamp." src="/images/4778ffcc85e2102e.webp" />
<span className="absolute bottom-1 left-1 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 py-0.2 rounded font-mono">SN Code</span>
</div>
</div>
</div>

<div className="mt-space-md pt-space-sm border-t-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider block mb-space-xs">
          Select Regulatory Disposition
        </span>
<div className="flex flex-col gap-space-xs">

<button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-all group active:scale-[0.99]" type="button">
<div className="flex items-start gap-space-xs">
<Icon name="inventory_2" className="text-secondary text-[22px] group-hover:text-on-surface" />
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Accept &amp; Route to Merchant Hold Bin</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Return acceptable; merchant agrees to pick up within 48h</span>
</div>
</div>
<Icon name="chevron_right" className="text-[18px] text-secondary" />
</button>

<button className="w-full text-left p-space-sm rounded-lg bg-error-container/30 hover:bg-error-container/60 flex items-center justify-between gap-space-sm transition-all group active:scale-[0.99]" type="button">
<div className="flex items-start gap-space-xs">
<Icon name="policy" className="text-error text-[22px]" />
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Escalate to Fraud &amp; Arbitration Desk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Potential counterfeit or intentional seal manipulation</span>
</div>
</div>
<Icon name="arrow_forward" className="text-[18px] text-primary" />
</button>

<button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-all group active:scale-[0.99]" type="button">
<div className="flex items-start gap-space-xs">
<Icon name="assured_workload" className="text-tertiary text-[22px]" />
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Log Insurance Claim (UNBS / Stanbic)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">In-transit courier drop casualty; claim 100% loss payout</span>
</div>
</div>
<Icon name="chevron_right" className="text-[18px] text-secondary" />
</button>
</div>
</div>
</div>
</div>

<div className="px-margin mb-space-lg">
<div className="flex items-center justify-between mb-space-xs">
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface tracking-tight uppercase">Audit Stream in Bay 03</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">3 parcels awaiting disposition review</p>
</div>
<button className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-0.5" type="button">
<Icon name="filter_list" className="text-[16px]" /> Filter
      </button>
</div>
<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<Icon name="headphones" className="text-on-surface-variant text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1 mb-0.5">
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed font-bold px-1 rounded">Q-04</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">#SWIFT-UG-88120</span>
</div>
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore ANC Pro Wireless</h4>
<span className="font-body-sm text-body-sm text-error font-semibold flex items-center gap-1">
<Icon name="lock_open" className="text-[14px]" /> Broken Tamper Foil
            </span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface block">UGX 320,000</span>
<button className="mt-1 px-2.5 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm font-bold rounded hover:bg-surface-container-high transition-colors" type="button">
            Audit
          </button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-error-container/30 flex items-center justify-center shrink-0">
<Icon name="smartphone" className="text-error text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1 mb-0.5">
<span className="font-label-sm text-label-sm bg-error text-on-error font-bold px-1 rounded">UNBS Alert</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">#SWIFT-UG-77412</span>
</div>
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">Tecno Camon 30 Pro 5G</h4>
<span className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1">
<Icon name="barcode_scanner" className="text-[14px]" /> Suspected Clone IMEI
            </span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface block">UGX 1,150,000</span>
<button className="mt-1 px-2.5 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm font-bold rounded hover:bg-surface-container-high transition-colors" type="button">
            Audit
          </button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed/50 flex items-center justify-center shrink-0">
<Icon name="water_drop" className="text-secondary text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1 mb-0.5">
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface font-bold px-1 rounded">Q-08</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">#SWIFT-UG-65390</span>
</div>
<h4 className="font-label-md text-label-md font-bold text-on-surface truncate">Oraimo Boom Box 40W High Bass</h4>
<span className="font-body-sm text-body-sm text-secondary font-semibold flex items-center gap-1">
<Icon name="rainy" className="text-[14px]" /> Rain Soak in Linehaul Transit
            </span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface block">UGX 480,000</span>
<button className="mt-1 px-2.5 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm font-bold rounded hover:bg-surface-container-high transition-colors" type="button">
            Audit
          </button>
</div>
</div>
</div>
</div>

<div className="px-margin mb-space-md">
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-space-sm text-on-surface-variant">
<Icon name="verified" className="text-[24px] text-tertiary shrink-0" />
<p className="font-body-sm text-body-sm">
        All parcels scanned into Bay 03 are logged with 256-bit hash records into the UNBS Escrow Ledger. Tamper seals verified by Sarah Kyomugisha.
      </p>
</div>
</div>

<div className="sticky bottom-0 z-40 bg-surface/95 backdrop-blur-md px-margin py-space-sm shadow-md flex flex-col gap-space-xs">
<button className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-transform" type="button">
<Icon name="barcode_scanner" className="text-[22px]" />
<span>Scan New Damaged Parcel into Quarantine</span>
</button>
<button className="w-full h-10 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs hover:bg-surface-container transition-colors" type="button">
<Icon name="receipt_long" className="text-[18px]" />
<span>Generate Daily Quarantine Audit Docket (PDF)</span>
</button>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-1px_12px_rgba(13,28,47,0.06)]" data-active-classes="text-primary font-bold"><div className="h-16 px-space-xs flex items-center justify-around"><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="overview-deck" href="#"><Icon name="dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Deck</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="inbound-receiving" href="#"><Icon name="move_to_inbox" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Inbound</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="sorting-chutes" href="#"><Icon name="alt_route" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Sort</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="linehaul-dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Linehaul</span></a><a aria-current="page" className="flex flex-col items-center justify-center flex-1 h-full transition-colors text-primary font-bold" data-path="hub-inventory" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Staging</span></a></div></nav>
    </div>
  );
};

export default ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub;
