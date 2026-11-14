// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/regional_linehaul_transit_handover_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RegionalLinehaulTransitHandoverSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RegionalLinehaulTransitHandoverSwiftcartWorkHub: React.FC<RegionalLinehaulTransitHandoverSwiftcartWorkHubProps> = (props) => {
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
<main className="flex-1 flex flex-col w-full bg-surface pt-16 pb-20"><div className="flex flex-col w-full pb-8">
<div className="px-margin pt-space-md pb-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm uppercase tracking-wide">
<Icon name="local_shipping" className="text-[13px]" />
          Express Linehaul
        </span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
          Dock Bay 02
        </span>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-md">
<Icon name="sync" className="text-[16px] text-tertiary-container animate-spin" />
        Live Dispatch Ready
      </div>
</div>
<div className="flex items-baseline justify-between mt-space-xs">
<div>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Route #LH-UG-04</h1>
<p className="font-body-sm text-body-sm text-secondary">Kampala Central → Jinja Hub → Mbale Terminal</p>
</div>
<div className="text-right">
<span className="block font-label-sm uppercase tracking-wider text-secondary">Departure Slot</span>
<span className="font-label-lg text-label-lg font-bold text-primary">14:45 EAT</span>
</div>
</div>
</div>
<div className="px-margin flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Assigned Rig &amp; Crew</span>
<span className="inline-flex items-center gap-1 font-label-sm px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">
<Icon name="verified" className="text-[14px]" /> Pre-trip OK
        </span>
</div>
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<Icon name="rv_hookup" className="text-[28px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">UBD 914Z</span>
<span className="font-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary">10-Tonne Box</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">Isuzu Forward FTR • Telematics ID #TL-4491</p>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold font-label-md flex-shrink-0">
            GO
          </div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Godfrey Ochen</p>
<p className="font-body-sm text-body-sm text-secondary truncate">ID: #DRV-8812 • +256 772 491 820</p>
</div>
</div>
<a className="w-9 h-9 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs" href="tel:+256772491820">
<Icon name="call" className="text-[20px]" />
</a>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
<div className="p-space-md pb-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="navigation" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Highway Transit Corridors</span>
</div>
<span className="font-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">2h 15m Scheduled</span>
</div>
<div className="px-space-md py-space-xs">
<div className="relative w-full h-36 rounded-lg bg-surface-container-high overflow-hidden" data-location="Kampala to Jinja Highway, Uganda" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-sm text-inverse-on-surface">
<div className="flex items-center justify-between">
<div>
<span className="font-label-sm uppercase tracking-wide opacity-80">Linehaul Priority Lane</span>
<p className="font-label-md font-bold">A109 / Jinja Expressway Segment</p>
</div>
<div className="text-right">
<span className="font-label-sm opacity-80">Traffic Index</span>
<p className="font-label-md font-bold text-tertiary-fixed">Green (44 km/h avg)</p>
</div>
</div>
</div>
</div>
</div>
<div className="p-space-md pt-space-xs flex items-center justify-around text-center">
<div>
<span className="block font-body-sm text-body-sm text-secondary">Distance</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">228 km</span>
</div>
<div className="w-px h-6 bg-surface-container-highest"></div>
<div>
<span className="block font-body-sm text-body-sm text-secondary">Waypoints</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">2 Intermediates</span>
</div>
<div className="w-px h-6 bg-surface-container-highest"></div>
<div>
<span className="block font-body-sm text-body-sm text-secondary">Fuel Payload</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary">96% Tank</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="inventory" className="text-[18px] text-secondary" />
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">Cargo Manifest &amp; Tamper Seals</h2>
</div>
<span className="font-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold">148 Total Parcels</span>
</div>

<div className="grid grid-cols-3 gap-space-xs">
<div className="p-space-xs rounded-lg bg-surface-container-low text-center">
<span className="block font-label-sm text-secondary uppercase">Gross Weight</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">2,840</span>
<span className="font-label-sm text-secondary">kg</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low text-center">
<span className="block font-label-sm text-secondary uppercase">Master Cages</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">04</span>
<span className="font-label-sm text-secondary">Roll Containers</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low text-center">
<span className="block font-label-sm text-secondary uppercase">Totes/Sacks</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-primary">128</span>
<span className="font-label-sm text-secondary">Locked Units</span>
</div>
</div>

<div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-high flex flex-col gap-space-xs">
<span className="font-label-sm uppercase font-bold tracking-wider text-secondary">Vault Security Credentials</span>
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-lowest">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="lock" className="text-tertiary text-[18px]" />
<div className="min-w-0">
<p className="font-label-sm font-bold text-on-surface truncate">Master Bolt #BOU-SEAL-8891</p>
<p className="font-body-sm text-body-sm text-secondary">Chamber Lock 1 • Verified Laser-Etched</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-bold flex-shrink-0">
            MATCHED
          </span>
</div>
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-lowest">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="verified_user" className="text-secondary text-[18px]" />
<div className="min-w-0">
<p className="font-label-sm font-bold text-on-surface truncate">Backup Foil #SWIFT-SEC-2025-09</p>
<p className="font-body-sm text-body-sm text-secondary">Rear Latches • Anti-tamper barcode intact</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm font-bold flex-shrink-0">
            SCANNED
          </span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">Downstream Leg Deliveries</h2>
<span className="font-label-sm text-secondary font-semibold">3 Drops</span>
</div>
<div className="space-y-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold font-label-sm">
              01
            </div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md font-bold text-on-surface">Jinja District Hub</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm">Bay A</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">76 Parcels • 18 High-Density Totes</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md font-bold text-on-surface">16:15</span>
<span className="block font-label-sm text-secondary">ETA Leg 1</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary font-bold font-label-sm">
              02
            </div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md font-bold text-on-surface">Iganga Drop Station</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm">Waypoint</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">24 Parcels • 6 Courier Bulk Sacks</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md font-bold text-on-surface">17:05</span>
<span className="block font-label-sm text-secondary">ETA Leg 2</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary font-bold font-label-sm">
              03
            </div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-md font-bold text-on-surface">Mbale Regional Depot</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-label-sm">Terminal</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">48 Parcels • 14 Sorted Totes</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md font-bold text-on-surface">18:40</span>
<span className="block font-label-sm text-secondary">Terminal In</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">Departure Compliance Gates</h2>
<span className="font-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold" id="gate-count">3 of 4 Ready</span>
</div>
<div className="space-y-space-xs">
<label className="flex items-start gap-space-sm p-space-xs rounded hover:bg-surface-container-low cursor-pointer">
<input checked={true} className="mt-0.5 w-5 h-5 rounded text-primary focus:ring-0" disabled={true} type="checkbox" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-semibold text-on-surface">Weighbridge Scale Certified</p>
<p className="font-body-sm text-body-sm text-secondary">2,840 kg gross load (Under 3,200 kg vehicle limit)</p>
</div>
<Icon name="check_circle" className="text-tertiary text-[18px]" />
</label>
<label className="flex items-start gap-space-sm p-space-xs rounded hover:bg-surface-container-low cursor-pointer">
<input checked={true} className="mt-0.5 w-5 h-5 rounded text-primary focus:ring-0" disabled={true} type="checkbox" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-semibold text-on-surface">Digital Waybill Broadcasted</p>
<p className="font-body-sm text-body-sm text-secondary">UNBS Standards &amp; Traffic Police E-Transit Registry</p>
</div>
<Icon name="check_circle" className="text-tertiary text-[18px]" />
</label>
<label className="flex items-start gap-space-sm p-space-xs rounded hover:bg-surface-container-low cursor-pointer">
<input checked={true} className="mt-0.5 w-5 h-5 rounded text-primary focus:ring-0" disabled={true} type="checkbox" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-semibold text-on-surface">Driver Breathalyzer &amp; Hours Verified</p>
<p className="font-body-sm text-body-sm text-secondary">0.00 BAC Recorded • 8h Rest Period Confirmed</p>
</div>
<Icon name="check_circle" className="text-tertiary text-[18px]" />
</label>
<label className="flex items-start gap-space-sm p-space-xs rounded bg-surface-container-low cursor-pointer" id="signoff-row">
<input className="mt-0.5 w-5 h-5 rounded text-primary focus:ring-0" id="signoff-check" type="checkbox" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-bold text-on-surface">Dual Dispatch Sign-Off</p>
<p className="font-body-sm text-body-sm text-secondary">Lead Dispatcher &amp; Driver Biometric/QR stamp</p>
</div>
<Icon name="pending" className="text-secondary text-[18px]" />
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full h-[52px] rounded-lg bg-primary text-on-primary font-label-lg font-bold flex items-center justify-center gap-space-xs shadow-md transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none" disabled={true} id="departure-btn" type="button">
<Icon name="output" className="text-[22px]" />
        Authorize Linehaul Departure &amp; Transmit
      </button>
<div className="grid grid-cols-2 gap-space-xs">
<button className="h-11 rounded-lg bg-surface-container-lowest text-on-surface font-label-md flex items-center justify-center gap-1 shadow-sm active:bg-surface-container" type="button">
<Icon name="print" className="text-[18px] text-primary" />
          Manifest &amp; Waybill
        </button>
<button className="h-11 rounded-lg bg-surface-container-lowest text-on-surface font-label-md flex items-center justify-center gap-1 shadow-sm active:bg-surface-container" type="button">
<Icon name="qr_code_scanner" className="text-[18px] text-primary" />
          Scan Extra Tote
        </button>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-center justify-center p-space-md" id="dispatch-modal">
<div className="w-full max-w-sm rounded-xl bg-surface-container-lowest p-space-lg shadow-xl flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-space-sm animate-bounce">
<Icon name="check" className="text-[32px]" />
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Linehaul Released!</h3>
<p className="font-body-md text-body-md text-secondary mt-space-xs">Truck UBD 914Z is authorized to clear Dock Bay 02. Digital pass sent to Driver Godfrey Ochen.</p>
<div className="w-full p-space-sm rounded-lg bg-surface-container-low mt-space-md flex flex-col gap-1 text-left">
<div className="flex justify-between font-label-sm">
<span className="text-secondary">E-Transit Seal Token:</span>
<span className="font-bold text-on-surface">#TK-8891-UG-KLA</span>
</div>
<div className="flex justify-between font-label-sm">
<span className="text-secondary">Jinja ETA:</span>
<span className="font-bold text-primary">16:15 EAT</span>
</div>
</div>
<button className="w-full mt-space-md h-11 rounded-lg bg-primary text-on-primary font-label-md font-bold" id="close-modal-btn" type="button">
        Return to Dispatch Console
      </button>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-1px_12px_rgba(13,28,47,0.06)]" data-active-classes="text-primary font-bold"><div className="h-16 px-space-xs flex items-center justify-around"><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="overview-deck" href="#"><Icon name="dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Deck</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="inbound-receiving" href="#"><Icon name="move_to_inbox" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Inbound</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="sorting-chutes" href="#"><Icon name="alt_route" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Sort</span></a><a aria-current="page" className="flex flex-col items-center justify-center flex-1 h-full transition-colors text-primary font-bold" data-path="linehaul-dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Linehaul</span></a><a className="flex flex-col items-center justify-center flex-1 h-full text-secondary hover:text-on-surface transition-colors" data-path="hub-inventory" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-space-xs">Staging</span></a></div></nav>
    </div>
  );
};

export default RegionalLinehaulTransitHandoverSwiftcartWorkHub;
