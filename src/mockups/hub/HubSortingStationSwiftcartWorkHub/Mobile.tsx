// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/hub_sorting_station_swiftcart_work_hub/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HubSortingStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubSortingStationSwiftcartWorkHub: React.FC<HubSortingStationSwiftcartWorkHubProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart UG</span><span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Sorting</h1></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Alerts" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors relative"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Theme Toggle" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm ml-0.5"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full pb-10">

<div className="px-margin pt-space-xs pb-space-sm flex flex-col gap-space-xs bg-surface-container-low">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="warehouse" className="text-primary text-[20px] flex-shrink-0" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider truncate">Sorting Deck • Terminal 04</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">William St Central Hub</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-space-xs py-1 rounded-full bg-surface-container-high flex-shrink-0">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Bay 4 Sorting</span>
</div>
</div>

<div className="mt-1 p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
<Icon name="badge" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">Operator on Duty</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Otim Samuel • ID #8841</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-secondary">Shift Quota:</span>
<span className="font-label-md text-label-md text-primary font-bold">142 / 160</span>
</div>
<div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden mt-1">
<div className="h-full bg-primary-container rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
</div>
</div>

<div className="px-margin pt-space-sm pb-space-xs overflow-x-auto no-scrollbar flex items-center gap-space-xs">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface shadow-sm font-label-md text-label-md flex-shrink-0 font-semibold" type="button">
<Icon name="two_wheeler" className="text-[18px] text-tertiary-fixed" />
<span>Zone Sorting (Boda Racks)</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md flex-shrink-0" type="button">
<Icon name="rv_hookup" className="text-[18px]" />
<span>Regional Linehaul</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md flex-shrink-0" type="button">
<Icon name="replay" className="text-[18px]" />
<span>Reverse Returns Bay</span>
</button>
</div>

<div className="px-margin mt-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary/5 pointer-events-none"></div>

<div className="flex items-start justify-between gap-space-xs">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-on-secondary-fixed text-surface-container-lowest font-label-sm text-label-sm uppercase font-extrabold tracking-wide">Route 08</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" />PRIORITY DISPATCH
            </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 tracking-tight truncate">Kampala Metro • East Corridor</h2>
<p className="font-body-sm text-body-sm text-secondary truncate">Lugogo Bypass • Nakawa Market • Ntinda Complex</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
<Icon name="local_shipping" className="text-[24px]" />
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface flex-shrink-0">
<Icon name="sports_motorsports" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kizito Brian</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer • <strong className="text-on-surface">UEF 842X</strong></span>
</div>
</div>
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-secondary-container font-label-sm text-label-sm font-semibold flex-shrink-0">
          Staged @ Bay 4
        </span>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="shopping_bag" className="text-primary-container text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">Courier Sack Capacity</span>
</div>
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg text-primary-container font-extrabold">18</span>
<span className="font-label-md text-label-md text-secondary">/ 20 pkgs</span>
<span className="ml-1 px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">90% Full</span>
</div>
</div>

<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex p-0.5 gap-0.5">
<div className="h-full bg-primary-container rounded-full" style={{"width":"90%"}}></div>
<div className="h-full bg-surface-variant flex-1 rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
          Bag volume threshold reached • Safe to apply security tamper seal
        </span>
</div>
</div>
</div>

<div className="px-margin mt-space-md flex flex-col gap-space-sm">

<button className="w-full h-14 rounded-xl bg-inverse-surface hover:bg-on-surface text-inverse-on-surface flex items-center justify-between px-space-md shadow-md active:scale-[0.99] transition-all" id="scan-trigger-btn" type="button">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest/15 flex items-center justify-center text-tertiary-fixed">
<Icon name="barcode_scanner" className="text-[24px]" />
</div>
<div className="flex flex-col text-left">
<span className="font-label-lg text-label-lg font-bold leading-tight">Scan Package into Bag</span>
<span className="font-label-sm text-label-sm text-surface-variant/80">Optical 1D/2D Laser + Camera Auto-Sync</span>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 flex items-center justify-center">
<Icon name="photo_camera" className="text-[18px]" />
</div>
</button>

<div className="p-space-sm rounded-xl bg-surface-container-high flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<Icon name="lock_open" className="text-primary text-[22px] flex-shrink-0" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Tamper Barcode Seal</span>
<span className="font-label-md text-label-md text-on-surface font-mono font-bold tracking-tight truncate" id="seal-code-text">#BAG-UG-2025-044</span>
</div>
</div>
<button className="px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface text-primary shadow-sm font-label-md text-label-md font-bold flex items-center gap-1 active:scale-95 transition-transform flex-shrink-0" id="seal-action-btn" type="button">
<Icon name="print" className="text-[16px]" />
<span>Print &amp; Bind</span>
</button>
</div>
</div>

<div className="px-margin mt-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="checklist" className="text-secondary text-[18px]" />
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Manifest Queue (Route 08)</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">3 Bagged • 1 Incomplete</span>
</div>

<div className="flex flex-col gap-space-xs mt-1">

<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="done" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-secondary">#SC-ORD-9281</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold truncate">Forest Mall</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">SoundCore Space One Wireless</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">
          Bagged ✓
        </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="done" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-secondary">#SC-ORD-9284</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold truncate">Ntinda Complex</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Samsung Galaxy A54 5G 128GB</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">
          Bagged ✓
        </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="done" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-secondary">#SC-ORD-9290</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold truncate">Spear Motors Nakawa</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Anker 65W GaN Fast Charger</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">
          Bagged ✓
        </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-md flex items-center justify-between gap-space-sm transition-all duration-300" id="pending-item-card">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center flex-shrink-0 animate-pulse" id="pending-status-icon">
<Icon name="qr_code_scanner" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm font-mono font-bold text-primary">#SC-ORD-9302</span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold truncate">Makerere Main Gate</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Oraimo FreePods 4 ANC</span>
</div>
</div>
<button className="px-2.5 py-1 rounded bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-transform flex-shrink-0 flex items-center gap-1" id="quick-pack-btn" type="button">
<span>Pack Now</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>
</div>

<div className="px-margin mt-space-md">
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="flag" className="text-secondary text-[20px] flex-shrink-0" />
<span className="font-label-md text-label-md text-secondary truncate">Station Exceptions</span>
</div>
<div className="flex items-center gap-space-xs flex-shrink-0">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-dim text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1" type="button">
<Icon name="report_problem" className="text-[14px] text-error" />
<span>Missing SKU</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-dim text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1" type="button">
<Icon name="alt_route" className="text-[14px]" />
<span>Reroute</span>
</button>
</div>
</div>
</div>

<div className="px-margin mt-space-md">
<button className="w-full h-14 rounded-xl bg-primary-container hover:bg-primary text-on-primary shadow-lg flex items-center justify-center gap-space-sm active:scale-[0.98] transition-all" id="dispatch-handover-btn" type="button">
<Icon name="handshake" className="text-[26px]" />
<div className="flex flex-col text-left">
<span className="font-label-lg text-label-lg font-extrabold leading-tight">Handover to Courier Kizito</span>
<span className="font-label-sm text-label-sm text-on-primary/90 font-medium">Requires Courier App QR Scan • Bay 4 Terminal</span>
</div>
<Icon name="qr_code_2" className="text-[20px] ml-auto" />
</button>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end justify-center px-margin pb-20 hidden" id="handover-modal">
<div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-space-md shadow-2xl flex flex-col items-center text-center gap-space-sm">
<div className="w-14 h-14 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-md">
<Icon name="task_alt" className="text-[32px]" />
</div>
<div className="flex flex-col gap-0.5">
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Dispatch Handover Staged</h4>
<p className="font-body-sm text-body-sm text-secondary">Awaiting Rider Kizito Brian to scan bag seal <strong>#BAG-UG-2025-044</strong></p>
</div>
<div className="w-32 h-32 rounded-xl bg-surface-container flex items-center justify-center p-2 mt-1">
<Icon name="qr_code_2" className="text-[72px] text-on-surface" />
</div>
<button className="w-full h-11 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold mt-1" id="close-modal-btn" type="button">
        Return to Station Monitor
      </button>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary font-label-md"><div className="flex items-center justify-around h-16 px-space-xs"><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 transition-all text-primary font-label-md" data-path="sorting" href="#"><Icon name="filter_alt" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Sorting</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="outbound" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Outbound</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="inventory" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Inventory</span></a><a className="flex flex-col items-center justify-center gap-0.5 w-14 h-12 text-secondary hover:text-on-surface transition-all" data-path="audit" href="#"><Icon name="fact_check" className="text-[22px]" /><span className="font-label-sm text-label-sm tracking-tight">Audit</span></a></div></nav>
    </div>
  );
};

export default HubSortingStationSwiftcartWorkHub;
