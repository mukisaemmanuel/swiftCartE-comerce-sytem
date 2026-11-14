// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/overview_swiftcart_hub_agent_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartHubAgentDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgentDark: React.FC<OverviewSwiftcartHubAgentDarkProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Live Ops • Kampala Central</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">Hub Scanner</h1></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface"><Icon name="sync_alt" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(255,181,161,0.25)]"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-10 space-y-space-lg">

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-sm rounded-xl">
<div className="flex items-center gap-space-sm min-w-0">
<span className="flex h-2.5 w-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider truncate">Line Sync Active • 24ms</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Relay Node #KLA-04 Online</span>
</div>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-high px-2 py-1 rounded-lg">
<Icon name="cloud_done" className="text-[14px] text-amber-warning" />
<span className="font-label-sm text-label-sm text-on-surface">Auto-Sync</span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-lg shadow-md">

<div className="absolute -top-12 -right-12 w-36 h-36 bg-action-gradient-start/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-space-md">

<div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-action-gradient-start text-on-primary-container font-headline-sm text-headline-sm shadow-md">
          IK
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary border-2 border-surface-container-low"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Isaac Kato</h2>
<span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded">#AG-402</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Day Shift Duty Lead</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="bg-surface-container-highest px-2 py-1 rounded-lg font-label-sm text-label-sm text-tertiary tracking-wide uppercase font-bold">Shift 01</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Ends 18:00 EAT</span>
</div>
</div>

<div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant bg-surface-container/60 p-space-sm rounded-lg">
<div className="flex items-center gap-1.5 truncate">
<Icon name="warehouse" className="text-[18px] text-action-gradient-start" />
<span className="font-label-md text-label-md text-on-surface truncate">William St Central Hub #04</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">Nakasero, KLA</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface tracking-tight flex items-center gap-1.5">
<Icon name="pie_chart" className="text-[18px] text-primary" />
        Station Health &amp; Inflow
      </h3>
<span className="font-label-sm text-label-sm text-tertiary uppercase">Real-Time SLA</span>
</div>
<div className="grid grid-cols-2 gap-gutter">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Shelf Capacity</span>
<Icon name="inventory_2" className="text-[16px] text-tertiary" />
</div>
<div className="my-space-sm">
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-on-surface">342</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 460</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">74% Optimal Space</span>
</div>

<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-tertiary to-action-gradient-start h-full rounded-full" style={{"width":"74%"}}></div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Linehaul Arrival</span>
<Icon name="local_shipping" className="text-[16px] text-amber-warning" />
</div>
<div className="my-space-sm">
<div className="font-label-lg text-label-lg text-on-surface truncate">Truck #LH-04</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Route: Jinja Depot</span>
</div>
<div className="flex items-center justify-between bg-surface-container-high px-2 py-1 rounded">
<span className="font-label-sm text-label-sm text-amber-warning font-bold">ETA 16:30</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EAT</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="flowsheet" className="text-[18px] text-action-gradient-start" />
<h3 className="font-label-lg text-label-lg text-on-surface tracking-tight">Throughput Pipeline</h3>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Today's Ledger</span>
</div>

<div className="grid grid-cols-2 gap-gutter">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Incoming Today</span>
<span className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="move_to_inbox" className="text-[16px]" />
</span>
</div>
<div className="mt-2 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-on-surface">184</span>
<span className="font-label-sm text-label-sm text-tertiary">+14/hr</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
          68 ingested boda/haul
        </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">In Staging Bins</span>
<span className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="shelves" className="text-[16px]" />
</span>
</div>
<div className="mt-2 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-on-surface">142</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
          Staged Bays A1–D12
        </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Counter OTC Pick</span>
<span className="w-7 h-7 rounded-lg bg-emerald-escrow/10 flex items-center justify-center text-emerald-escrow">
<Icon name="storefront" className="text-[16px]" />
</span>
</div>
<div className="mt-2 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-emerald-escrow">86</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Ready</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
          Walk-in collection dock
        </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispatched Handover</span>
<span className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-fixed">
<Icon name="check_circle" className="text-[16px]" />
</span>
</div>
<div className="mt-2 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-on-surface">118</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant truncate">
          Out to Boda &amp; Counter
        </div>
</div>

<div className="col-span-2 bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-danger-penalty/10 flex items-center justify-center text-danger-penalty shrink-0">
<Icon name="gavel" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">Quarantine / Merchant Hold</span>
<span className="bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm px-1.5 py-0.5 rounded-full font-bold">14 Held</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Pending reverse logistic return to vendor</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-danger-penalty animate-pulse"></span>
<h3 className="font-label-lg text-label-lg text-on-surface tracking-tight">Needs Action Priority</h3>
</div>
<span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">3 Urgent</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md space-y-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="w-8 h-8 rounded-lg bg-danger-penalty/15 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="timer_off" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[15px] leading-none text-on-surface font-bold">#SC-ORD-9104</span>
<span className="bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">SLA Expired</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Samsung Galaxy A54 5G • UGX 1,280,000</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold block">Held 6 of 5 Days</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bay B04-2</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="perm_phone_msg" className="text-[16px]" />
<span className="font-body-sm text-body-sm">07•• ••• 882 (Buyer)</span>
</div>
<div className="flex items-center gap-2">
<button className="bg-surface-container-high hover:bg-surface-variant text-on-surface px-3 py-2 rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform flex items-center gap-1">
<Icon name="call" className="text-[14px]" />
              Call Customer
            </button>
<button className="bg-danger-penalty/20 text-danger-penalty hover:bg-danger-penalty/30 px-3 py-2 rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform font-bold">
              Flag Return
            </button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md space-y-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="w-8 h-8 rounded-lg bg-amber-warning/15 text-amber-warning flex items-center justify-center shrink-0">
<Icon name="password" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[15px] leading-none text-on-surface font-bold">#SC-ORD-9281</span>
<span className="bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">PIN Mismatch (2/3)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">SoundCore ANC • Dennis Mukasa</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-amber-warning font-bold block">Counter OTC</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bay C01-1</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="shield_lock" className="text-[14px] text-amber-warning" />
            Secure Relay Active
          </span>
<button className="bg-surface-container-high hover:bg-surface-variant text-on-surface px-4 py-2 rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform flex items-center gap-1.5">
<Icon name="assignment_late" className="text-[15px] text-action-gradient-start" />
            Inspect Docket
          </button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md space-y-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="w-8 h-8 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="output_circle" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-code-display text-[15px] leading-none text-on-surface font-bold">#SC-ORD-8820</span>
<span className="bg-tertiary/20 text-tertiary font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">Outbound Staged</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Solar Inverter 3KVA • UGX 3,450,000</span>
</div>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-tertiary font-bold block">Truck #LH-04</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zone F Freight</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Weight: 28.4 kg • Fragile</span>
<button className="bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container px-3.5 py-2 rounded-lg font-label-sm text-label-sm active:scale-95 transition-transform flex items-center gap-1 font-bold shadow-[0_2px_12px_rgba(218,55,0,0.3)]">
<Icon name="send_and_archive" className="text-[15px]" />
            Manifest to Linehaul
          </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="quick_reference" className="text-[22px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">OTC Direct Handover Matrix</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Instant verify customer PIN &amp; parcel drop</p>
</div>
</div>
<button className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center active:scale-95">
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</div>

<div className="fixed bottom-20 left-0 right-0 z-40 px-margin pointer-events-none flex justify-center">
<button className="pointer-events-auto flex items-center justify-center gap-2 px-6 h-14 rounded-full bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-[0_6px_22px_rgba(218,55,0,0.45)] active:scale-95 transition-transform border border-white/20" id="hub-scan-trigger">
<Icon name="barcode_scanner" className="text-[26px] animate-pulse" />
<span className="tracking-wide uppercase font-bold text-[14px]">Optical Scan (Laser)</span>
</button>
</div>
</div>

</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.60)]" data-active-classes="text-primary-container font-label-md"><div className="h-16 px-gutter flex items-center justify-around"><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="manifest-runs" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Manifest</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-16 h-12 text-primary-container font-label-md" data-path="hub-scanner" href="#"><Icon name="barcode_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Scanner</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="escrow-ledger" href="#"><Icon name="verified_user" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Escrow</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="fleet-dispatch" href="#"><Icon name="two_wheeler" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Fleet</span></a><a className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant hover:text-on-surface" data-path="profile-ops" href="#"><Icon name="manage_accounts" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight mt-0.5">Profile</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartHubAgentDark;
