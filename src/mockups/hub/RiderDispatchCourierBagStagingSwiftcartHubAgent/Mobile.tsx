// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/rider_dispatch_courier_bag_staging_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface RiderDispatchCourierBagStagingSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderDispatchCourierBagStagingSwiftcartHubAgent: React.FC<RiderDispatchCourierBagStagingSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 -ml-1 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">Package Detail</h1><span className="font-label-sm text-label-sm text-on-surface-variant truncate">Station #04 - Kampala</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full pb-8">

<div className="px-margin pt-space-sm pb-space-xs">
<div className="bg-surface-container rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0 text-primary">
<Icon name="warehouse" className="text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Live Staging Dock</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface truncate">William St Central Hub</p>
</div>
</div>
<div className="text-right flex-shrink-0 bg-surface-container-lowest px-space-sm py-1 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Dock Clock</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold tabular-nums">14:42:08</span>
</div>
</div>
</div>

<section className="mt-space-md px-margin">

<div className="bg-surface-container-high p-1 rounded-xl flex items-center gap-1 shadow-inner">
<button className="flex-1 py-space-xs px-2 rounded-lg text-center transition-all bg-surface-container-lowest shadow-sm text-on-surface">
<span className="font-label-md text-label-md font-bold block truncate">Ready Staged</span>
<span className="font-label-sm text-label-sm text-primary font-bold">(3)</span>
</button>
<button className="flex-1 py-space-xs px-2 rounded-lg text-center transition-all text-on-surface-variant hover:text-on-surface">
<span className="font-label-md text-label-md block truncate">Awaiting Rider</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(4)</span>
</button>
<button className="flex-1 py-space-xs px-2 rounded-lg text-center transition-all text-on-surface-variant hover:text-on-surface">
<span className="font-label-md text-label-md block truncate">Dispatched</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(18)</span>
</button>
</div>

<div className="flex items-center gap-space-xs mt-space-sm overflow-x-auto no-scrollbar py-1">
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
        All Kampala Metro
      </button>
<button className="px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm flex items-center gap-1 active:scale-95 transition-transform">
<Icon name="navigation" className="text-[16px]" />
        Route 08 (East Corridor)
      </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
        Route 03 (Central)
      </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
        Route 12 (North)
      </button>
</div>
</section>

<section className="mt-space-md px-margin">
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-col gap-space-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wide">BAY 04</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Route 08: Kampala East</span>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm font-bold">Arrived Dock Bay 4</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center gap-space-md">
<div className="relative flex-shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Close-up portrait of a Ugandan courier boda rider in high-visibility orange uniform, protective helmet, smiling professionally in bright Kampala morning light." src="/images/40bb2f59e4b44c9c.webp" />
<span className="absolute -bottom-1 -right-1 bg-tertiary text-on-tertiary rounded-full p-0.5 flex items-center justify-center">
<Icon name="verified" className="text-[14px]" />
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Kizito Brian</h2>
<span className="font-label-sm text-label-sm text-primary font-bold">#RDR-UG-4082</span>
</div>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">Bajaj Boxer UEF 842X</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Nakasero Stage</span>
</div>
<div className="flex items-center gap-1 mt-1">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md font-bold text-on-surface">4.95</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(1,420 trips)</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center gap-space-xs overflow-hidden">
<Icon name="alt_route" className="text-primary text-[20px] flex-shrink-0" />
<div className="flex items-center gap-1.5 min-w-0 text-on-surface font-label-sm text-label-sm overflow-x-auto no-scrollbar py-0.5">
<span className="font-bold text-on-surface truncate">Lugogo Bypass</span>
<Icon name="arrow_forward" className="text-[14px] text-on-surface-variant flex-shrink-0" />
<span className="font-bold text-on-surface truncate">Nakawa Market</span>
<Icon name="arrow_forward" className="text-[14px] text-on-surface-variant flex-shrink-0" />
<span className="font-bold text-on-surface truncate">Ntinda Complex</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bag Capacity</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">90%</span>
</div>
<div className="mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">18</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 20 pkgs</span>
</div>

<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{"width":"90%"}}></div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bag Escrow Value</span>
<Icon name="lock" className="text-[18px] text-tertiary" />
</div>
<div className="mt-1 truncate">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate">UGX 3.42M</span>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Stanbic &amp; MoMo Prot.</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-space-md px-margin">
<div className="bg-surface-container rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary">
<Icon name="qr_code_scanner" className="text-[20px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Sack Physical Lock Seal</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Tamper-Evident Staging Protocol</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> Double-Locked
        </span>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="bg-surface-container-lowest rounded-lg p-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Master Bag ID</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold tracking-wide">#BAG-UG-2025-044</span>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Bolt Seal Code</span>
<span className="font-label-md text-label-md text-primary font-extrabold tracking-wide">#SEAL-994182</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant bg-surface-container-lowest/70 px-space-sm py-1.5 rounded-lg">
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm">Level-2 Hologram Foil Intact</span>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm font-semibold">Geofence Armed</span>
</div>
</div>
</div>
</section>

<section className="mt-space-md px-margin">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Manifest Contents</h3>
<span className="px-2 py-0.2 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">18 items</span>
</div>
<button className="font-label-md text-label-md text-primary font-bold flex items-center gap-0.5">
<Icon name="checklist" className="text-[16px]" /> Bulk Check
      </button>
</div>

<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC</h4>
<span className="font-label-sm text-label-sm text-on-surface font-extrabold whitespace-nowrap">UGX 248,500</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Dennis Mukasa • Forest Mall, Lugogo</p>
<div className="flex items-center gap-space-xs mt-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed-dim/30 text-on-tertiary-container font-label-sm text-label-sm font-medium">Pack Confirmed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">PKG-9821</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-error-container flex items-center justify-center text-on-error-container flex-shrink-0">
<Icon name="priority_high" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<div className="flex items-center gap-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">Samsung Galaxy A54 5G</h4>
</div>
<span className="font-label-sm text-label-sm text-primary font-extrabold whitespace-nowrap">UGX 1,150,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Sarah Namatovu • Ntinda Complex</p>
<div className="flex items-center gap-space-xs mt-1">
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="security" className="text-[12px]" /> High Value Flag
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">PKG-4402</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">Anker 65W GaN Charger</h4>
<span className="font-label-sm text-label-sm text-on-surface font-extrabold whitespace-nowrap">UGX 165,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Patrick Kigozi • Spear Motors Nakawa</p>
<div className="flex items-center gap-space-xs mt-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed-dim/30 text-on-tertiary-container font-label-sm text-label-sm font-medium">Pack Confirmed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">PKG-3119</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between gap-1">
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">Oraimo FreePods 4 ANC</h4>
<span className="font-label-sm text-label-sm text-on-surface font-extrabold whitespace-nowrap">UGX 95,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">David Kato • Makerere Main Gate</p>
<div className="flex items-center gap-space-xs mt-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed-dim/30 text-on-tertiary-container font-label-sm text-label-sm font-medium">Pack Confirmed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">PKG-7724</span>
</div>
</div>
</div>

<button className="w-full py-space-sm bg-surface-container rounded-xl flex items-center justify-center gap-space-xs text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
<Icon name="inventory_2" className="text-[18px] text-on-surface-variant" />
<span>+14 additional general merchandise parcels</span>
<Icon name="expand_more" className="text-[18px]" />
</button>
</div>
</section>

<section className="mt-space-md px-margin">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-space-xs">
<Icon name="document_scanner" className="text-[28px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Courier Custody Transfer</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-0.5">
        Scan Kizito Brian's SwiftRider driver app token to bind escrow custody to Rider #RDR-UG-4082.
      </p>

<button className="w-full mt-space-md py-3.5 px-space-md bg-inverse-surface text-inverse-on-surface rounded-xl shadow-md flex items-center justify-center gap-space-sm active:scale-98 transition-all hover:bg-inverse-surface/90">
<Icon name="photo_camera" className="text-[22px] text-primary-fixed-dim" />
<span className="font-label-lg text-label-lg font-bold">Scan Rider App QR Code</span>
</button>

<button className="mt-space-xs py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface flex items-center gap-1">
<Icon name="dialpad" className="text-[18px]" />
<span>Enter Courier 4-Digit Handover PIN</span>
</button>
</div>
</section>

<section className="mt-space-lg px-margin flex flex-col gap-space-sm">

<button className="w-full h-14 bg-primary-container hover:bg-primary active:scale-[0.98] text-on-primary rounded-xl shadow-lg flex items-center justify-between px-space-lg transition-all group">
<div className="flex items-center gap-space-sm">
<Icon name="local_shipping" className="text-[26px]" />
<div className="text-left">
<span className="font-label-lg text-label-lg font-extrabold block leading-tight">Authorize Dispatch</span>
<span className="font-label-sm text-label-sm opacity-90 block">Handover Bag #044 to Kizito B.</span>
</div>
</div>
<Icon name="arrow_forward" className="text-[24px] transform group-hover:translate-x-1 transition-transform" />
</button>

<button className="w-full py-3 bg-surface-container hover:bg-surface-container-high active:bg-surface-container-highest text-on-surface rounded-xl flex items-center justify-center gap-space-xs transition-colors">
<Icon name="remove_shopping_cart" className="text-[18px] text-error" />
<span className="font-label-md text-label-md font-bold">Unpack Bag &amp; Remove Parcel</span>
</button>

<div className="text-center mt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">SwiftCart Velocity OS v4.12 • Station Node ID: KLA-HUB-04-WLM</span>
</div>
</section>
</div></main>
    </div>
  );
};

export default RiderDispatchCourierBagStagingSwiftcartHubAgent;
