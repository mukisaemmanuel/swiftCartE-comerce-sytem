// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/hub_storage_aging_matrix_swiftcart_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HubStorageAgingMatrixSwiftcartHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartHub: React.FC<HubStorageAgingMatrixSwiftcartHubProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="h-16 px-space-sm flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary transition-colors flex-shrink-0"><Icon name="arrow_back_ios_new" className="text-[20px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest truncate">SwiftCart Ops</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate tracking-tight">Hub Storage &amp; Aging</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow"><Icon name="verified_user" className="text-[16px]" /><span className="font-label-sm text-label-sm font-bold">SECURE</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full">

<div className="px-margin pt-space-xs pb-space-xs flex items-center justify-between bg-surface-container-low text-on-surface">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-escrow">Grid Sync Active</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• Sub-20ms Telemetry</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
<Icon name="cloud_sync" className="text-[14px] text-amber-warning" />
<span>0 Pending</span>
</div>
</div>
<div className="p-margin flex flex-col gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md">
<div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
<Icon name="warehouse" className="text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Facility Node</span>
<span className="px-1.5 py-0.2 bg-surface-container-high rounded text-[10px] font-label-sm font-bold text-on-surface-variant">HUB-04</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">William St Central Hub #04</h2>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Lead Agent</span>
<div className="flex items-center gap-1 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">Isaac Kato</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] font-mono text-secondary">#AG-402</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="shelves" className="text-[16px] text-action-gradient-start" />
<span className="font-semibold">342 / 460 Slots Occupied</span>
</div>
<span className="text-action-gradient-start font-bold">74% Capacity</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden flex">
<div className="h-full bg-emerald-escrow rounded-l-full" style={{"width":"52%"}}></div>
<div className="h-full bg-amber-warning" style={{"width":"14%"}}></div>
<div className="h-full bg-danger-penalty rounded-r-full" style={{"width":"8%"}}></div>
</div>
<div className="flex items-center justify-between pt-0.5 text-on-surface-variant font-label-sm text-label-sm">
<span>Available: 118 Slots</span>
<span>SLA Breach Risk: 6 Parcels</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm shadow-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between pb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Storage Aging SLA Thresholds</span>
<Icon name="timer" className="text-[16px] text-on-surface-variant" />
</div>
<div className="grid grid-cols-3 gap-space-xs text-center">
<div className="bg-surface-container px-2 py-1.5 rounded-lg flex flex-col items-center">
<div className="flex items-center gap-1 text-emerald-escrow">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm font-bold">&lt; 2 Days</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">Normal Inflow</span>
</div>
<div className="bg-surface-container px-2 py-1.5 rounded-lg flex flex-col items-center">
<div className="flex items-center gap-1 text-amber-warning">
<span className="w-2 h-2 rounded-full bg-amber-warning"></span>
<span className="font-label-sm text-label-sm font-bold">3–4 Days</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">SMS Follow-up</span>
</div>
<div className="bg-surface-container px-2 py-1.5 rounded-lg flex flex-col items-center">
<div className="flex items-center gap-1 text-danger-penalty">
<span className="w-2 h-2 rounded-full bg-danger-penalty"></span>
<span className="font-label-sm text-label-sm font-bold">5+ Days</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">SLA Expired</span>
</div>
</div>
</div>

<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full pl-10 pr-10 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:bg-surface-container shadow-sm" id="shelfFilterInput" placeholder="Search shelf ID (e.g. A04-2), barcode, or order..." type="text" />
<button aria-label="Clear Search" className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface" type="button">
<Icon name="filter_list" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar -mx-margin px-margin pb-1">
<button className="bay-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md text-label-md shadow-sm" data-bay="all">
        All Bays (342)
      </button>
<button className="bay-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md" data-bay="A">
        Bay A (OTC Pickup)
      </button>
<button className="bay-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md" data-bay="B">
        Bay B (Express Boda)
      </button>
<button className="bay-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md" data-bay="C">
        Bay C (Linehaul Transit)
      </button>
<button className="bay-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md" data-bay="D">
        Bay D (Quarantine/Holds)
      </button>
</div>

<div className="flex flex-col gap-space-md pb-24" id="inventoryContainer">

<div className="parcel-card rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-space-sm" data-bay="A" data-shelf="A02-1">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container flex flex-col items-center justify-center flex-shrink-0 text-emerald-escrow">
<span className="font-code-display text-[15px] font-black leading-none">A02</span>
<span className="font-label-sm text-label-sm opacity-80 mt-0.5">Slot 1</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface font-bold">#SC-ORD-9488</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[13px]" />
                  Ready for Rider Pickup
                </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface mt-0.5 truncate">SoundCore Space One Wireless</h3>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-price-display text-headline-sm text-on-surface">UGX 340,000</span>
<div className="flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>Escrow Held</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<Icon name="schedule" className="text-[16px] text-emerald-escrow" />
<span>Inflow: <span className="text-on-surface font-medium">Today 15:10</span></span>
</div>
<div className="flex items-center gap-1">
<span className="text-on-surface font-semibold text-emerald-escrow">0 Days Elapsed</span>
<span className="text-on-surface-variant font-normal">(SLA: 5 Days)</span>
</div>
</div>

<div className="flex items-center justify-between pt-0.5">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="call" className="text-[16px]" />
<span className="font-mono">Buyer: 07•• ••• 419</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2.5 py-1 rounded-lg">
<Icon name="qr_code_2" className="text-[14px]" />
<span>PIN Lock Matched</span>
</div>
</div>
</div>

<div className="parcel-card rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden" data-bay="A" data-shelf="A04-2">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-danger-penalty"></div>
<div className="flex items-start justify-between gap-space-sm pl-1">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-xl bg-danger-penalty/15 text-danger-penalty flex flex-col items-center justify-center flex-shrink-0">
<span className="font-code-display text-[15px] font-black leading-none">A04</span>
<span className="font-label-sm text-label-sm opacity-90 mt-0.5">Slot 2</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface font-bold">#SC-ORD-9104</span>
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="warning" className="text-[13px]" />
                  SLA Expired
                </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface mt-0.5 truncate">Samsung Galaxy A54 5G (128GB)</h3>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-price-display text-headline-sm text-on-surface">UGX 1,220,000</span>
<span className="font-label-sm text-label-sm text-danger-penalty font-medium">Merchant Hold Active</span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pl-2">
<div className="flex items-center gap-1.5">
<Icon name="history_toggle_off" className="text-[16px] text-danger-penalty" />
<span>Inflow: <span className="text-on-surface font-medium">6 Days Ago</span></span>
</div>
<div className="flex items-center gap-1">
<span className="text-danger-penalty font-bold">Held: 6 of 5 Days</span>
<span className="text-on-surface-variant font-normal">(+24h Breach)</span>
</div>
</div>

<div className="flex items-center justify-between pl-1">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="person" className="text-[16px]" />
<span className="font-mono">Buyer: 07•• ••• 882</span>
</div>
<span className="font-label-sm text-label-sm text-amber-warning bg-amber-warning/15 px-2 py-0.5 rounded-md">2 Missed OTC Pickups</span>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<button className="h-10 px-2 rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform" type="button">
<Icon name="sms" className="text-[16px] text-action-gradient-start" />
<span>Send Buyer SMS Alert</span>
</button>
<button className="h-10 px-2 rounded-xl bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform" type="button">
<Icon name="keyboard_return" className="text-[16px]" />
<span>Initiate Return (RTO)</span>
</button>
</div>
</div>

<div className="parcel-card rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-space-sm" data-bay="B" data-shelf="B01-3">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-xl bg-amber-warning/15 text-amber-warning flex flex-col items-center justify-center flex-shrink-0">
<span className="font-code-display text-[15px] font-black leading-none">B01</span>
<span className="font-label-sm text-label-sm opacity-90 mt-0.5">Slot 3</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface font-bold">#SC-ORD-9281</span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="lock_reset" className="text-[13px]" />
                  Hold - PIN Mismatch
                </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface mt-0.5 truncate">SoundCore ANC Life Q30</h3>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-price-display text-headline-sm text-on-surface">UGX 285,000</span>
<div className="flex items-center gap-1 text-amber-warning font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>Escrow Protected</span>
</div>
</div>
</div>
<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<Icon name="update" className="text-[16px] text-amber-warning" />
<span>Inflow: <span className="text-on-surface font-medium">3 Days Ago (Boda Bay)</span></span>
</div>
<div className="flex items-center gap-1">
<span className="text-amber-warning font-bold">Held: 3 Days</span>
<span className="text-on-surface-variant font-normal">(48h Remaining)</span>
</div>
</div>
<div className="flex items-center justify-between pt-0.5">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="motorcycle" className="text-[16px]" />
<span>Rider: J. Mugisha (#BD-112)</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:text-action-gradient-start font-semibold flex items-center gap-0.5" type="button">
<span>Resolve PIN Hold</span>
<Icon name="chevron_right" className="text-[14px]" />
</button>
</div>
</div>

<div className="parcel-card rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col gap-space-sm" data-bay="C" data-shelf="C03-4">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-xl bg-surface-container flex flex-col items-center justify-center flex-shrink-0 text-secondary">
<span className="font-code-display text-[15px] font-black leading-none">C03</span>
<span className="font-label-sm text-label-sm opacity-80 mt-0.5">Slot 4</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface font-bold">#SC-ORD-8820</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="local_shipping" className="text-[13px]" />
                  Linehaul Staged for Jinja Depot
                </span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface mt-0.5 truncate">Solar Inverter 3KVA Hybrid</h3>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-price-display text-headline-sm text-on-surface">UGX 2,450,000</span>
<div className="flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm">
<Icon name="verified" className="text-[14px]" />
<span>B2B Ledger Verified</span>
</div>
</div>
</div>
<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<Icon name="departure_board" className="text-[16px] text-secondary" />
<span>Departure: <span className="text-on-surface font-medium">Tonight 21:00</span></span>
</div>
<div className="flex items-center gap-1">
<span className="text-emerald-escrow font-bold">Held: 1 Day</span>
<span className="text-on-surface-variant font-normal">(Inter-Hub)</span>
</div>
</div>
<div className="flex items-center justify-between pt-0.5">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<Icon name="qr_code_scanner" className="text-[16px]" />
<span className="font-mono">Waybill: #WB-EGA-0921</span>
</div>
<span className="font-label-sm text-label-sm text-on-secondary-container bg-surface-container px-2 py-0.5 rounded-md">Heavy Cargo (18.4 kg)</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md p-margin pb-safe shadow-[0_-6px_24px_rgba(0,0,0,0.6)]">
<div className="max-w-md mx-auto grid grid-cols-2 gap-space-sm">
<button className="h-[52px] rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-sm" type="button">
<Icon name="fact_check" className="text-[20px] text-secondary" />
<span>Audit Bay Inv.</span>
</button>
<button className="h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-98 transition-transform" type="button">
<Icon name="barcode_scanner" className="text-[22px]" />
<span>Scan to Shelf</span>
</button>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 opacity-0 -translate-y-2" id="toastNotification">
<div className="bg-surface-container-highest text-on-surface px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2">
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
<span className="font-label-md text-label-md" id="toastMsg">Operation executed</span>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default HubStorageAgingMatrixSwiftcartHub;
