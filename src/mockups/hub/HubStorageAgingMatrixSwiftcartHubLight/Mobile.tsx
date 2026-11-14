// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/hub_storage_aging_matrix_swiftcart_hub_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HubStorageAgingMatrixSwiftcartHubLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartHubLight: React.FC<HubStorageAgingMatrixSwiftcartHubLightProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-low transition-colors" type="button"><Icon name="chevron_left" className="text-[24px]" /></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-white.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Uganda Ops</span><span className="font-headline-sm text-headline-sm leading-tight text-on-surface font-bold">Hub Storage Inspection</span></div></div></div><div className="flex items-center gap-space-sm"><div aria-label="User avatar" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-24">

<div className="w-full bg-surface-container px-margin py-1.5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">GRID SYNC ACTIVE</span>
<span className="font-body-sm text-body-sm text-secondary">| Sub-20ms Telemetry</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-sm">
<Icon name="check_circle" className="text-[13px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold">0 Pending</span>
</div>
</div>

<div className="px-margin pt-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
<Icon name="warehouse" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">William St Central Hub</span>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-secondary font-bold">HUB-04</span>
</div>
<div className="flex items-center gap-1 mt-0.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="badge" className="text-[14px]" />
<span>Lead: <strong className="text-on-surface">Isaac Kato</strong> (#AG-402)</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Node Uptime</span>
<span className="font-label-md text-label-md text-tertiary font-bold">99.98%</span>
</div>
</div>

<div className="mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">342 / 460 Slots Occupied</span>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold">74% Capacity</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">118 Available</span>
</div>
<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-tertiary via-primary-container to-primary rounded-full" style={{"width":"74%"}}></div>
</div>
<div className="flex items-center justify-between mt-2 pt-1.5">
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="check_circle" className="text-[15px] text-tertiary" />
<span>Optimal Bay Velocity</span>
</div>
<div className="flex items-center gap-1 bg-error-container/40 px-2 py-0.5 rounded-full">
<Icon name="warning" className="text-[14px] text-error" />
<span className="font-label-sm text-label-sm font-bold text-on-error-container">SLA Breach Risk: 6 Parcels</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-margin pt-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider block mb-1.5">Aging Matrix SLA Thresholds</span>
<div className="grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 bg-tertiary-fixed/30 p-1.5 rounded-lg">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary shrink-0"></span>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface font-bold block">&lt; 2 Days</span>
<span className="font-label-sm text-[9px] text-tertiary font-semibold">Normal Inflow</span>
</div>
</div>
<div className="flex items-center gap-1.5 bg-amber-100/50 p-1.5 rounded-lg">
<span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface font-bold block">3-4 Days</span>
<span className="font-label-sm text-[9px] text-amber-700 font-semibold">SMS Alert Required</span>
</div>
</div>
<div className="flex items-center gap-1.5 bg-error-container/40 p-1.5 rounded-lg">
<span className="w-2.5 h-2.5 rounded-full bg-error shrink-0"></span>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface font-bold block">5+ Days</span>
<span className="font-label-sm text-[9px] text-error font-semibold">SLA Expired (RTO)</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-margin pt-space-md flex flex-col gap-space-sm">

<div className="relative flex items-center w-full">
<div className="absolute left-3.5 flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-sm text-body-sm pl-10 pr-20 py-2.5 rounded-xl shadow-sm outline-none focus:bg-surface-container-lowest transition-all" placeholder="Search shelf ID (e.g. A04-2), barcode, or order ID..." type="text" />
<div className="absolute right-2 flex items-center gap-1">
<button aria-label="Scan barcode" className="p-1 rounded-lg hover:bg-surface-container text-secondary" type="button">
<Icon name="barcode_scanner" className="text-[19px]" />
</button>
<button aria-label="Filter results" className="p-1 rounded-lg hover:bg-surface-container text-secondary" type="button">
<Icon name="tune" className="text-[19px]" />
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-margin px-margin">
<button className="shrink-0 px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="inventory_2" className="text-[15px]" />
<span>All Bays (342)</span>
</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="storefront" className="text-[15px] text-secondary" />
<span>Bay A (OTC Pickup)</span>
</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="two_wheeler" className="text-[15px] text-secondary" />
<span>Bay B (Express Boda)</span>
</button>
<button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button">
<Icon name="local_shipping" className="text-[15px] text-secondary" />
<span>Bay C (Linehaul)</span>
</button>
</div>
</div>

<div className="px-margin pt-space-md pb-space-xs flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="layers" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Storage Matrix Shelf Feed</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Sorted by SLA Aging ↓</span>
</div>

<div className="px-margin flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary"></div>

<div className="flex items-start justify-between pl-1">
<div className="flex items-center gap-2">
<div className="bg-surface-container px-2.5 py-1 rounded-md text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block font-bold">Slot</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">A02</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#SC-ORD-9488</span>
<span className="font-label-sm text-label-sm bg-surface-container-low text-secondary px-1.5 py-0.2 rounded font-semibold">Tier 1</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium truncate max-w-[180px]">SoundCore Space One ANC</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-price-display text-[16px] text-on-surface font-extrabold">UGX 340,000</span>
<span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[12px]" /> Escrow Held
          </span>
</div>
</div>

<div className="bg-surface-container-low p-2 rounded-lg flex items-center justify-between text-body-sm font-body-sm pl-2">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-bold text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Ready for Rider Pickup
          </span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm">
<Icon name="schedule" className="text-[14px]" />
<span>Inflow: Today 15:10 (0d)</span>
</div>
</div>

<div className="flex items-center justify-between pl-1 pt-0.5">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="person" className="text-[16px] text-secondary" />
<span>Buyer: 07••••••419</span>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-tertiary font-label-md text-label-md font-bold flex items-center gap-1 shadow-sm hover:bg-tertiary-fixed/40 transition-colors" type="button">
<Icon name="lock_open" className="text-[16px]" />
<span>PIN Lock Matched</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-error"></div>

<div className="flex items-start justify-between pl-1">
<div className="flex items-center gap-2">
<div className="bg-error-container/30 px-2.5 py-1 rounded-md text-center">
<span className="font-label-sm text-label-sm text-error uppercase block font-bold">Slot</span>
<span className="font-headline-sm text-headline-sm text-error font-extrabold leading-none">A04</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#SC-ORD-9104</span>
<span className="font-label-sm text-label-sm bg-error-container text-error px-1.5 py-0.2 rounded font-bold">URGENT</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium truncate max-w-[180px]">Samsung Galaxy A54 5G</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-price-display text-[16px] text-on-surface font-extrabold">UGX 1,220,000</span>
<span className="font-label-sm text-[10px] text-primary font-bold flex items-center gap-0.5">
<Icon name="lock_clock" className="text-[12px]" /> Merchant Hold
          </span>
</div>
</div>

<div className="bg-error-container/20 p-2.5 rounded-lg flex flex-col gap-1.5 pl-2">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error text-on-error font-extrabold text-label-sm font-label-sm">
<Icon name="alarm_on" className="text-[13px]" /> SLA EXPIRED (+24h Breach)
          </span>
<span className="font-label-sm text-label-sm font-bold text-error">Held: 6 of 5 Days</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="ring_volume" className="text-[15px] text-error" />
            Buyer: <strong>07••••••882</strong> (2 Missed OTC Pickups)
          </span>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pl-1 pt-0.5">
<button className="py-2 px-2 rounded-lg bg-amber-100 text-amber-900 font-label-md text-label-md font-bold flex items-center justify-center gap-1 active:scale-98 transition-transform shadow-sm" type="button">
<Icon name="sms" className="text-[16px]" />
<span>Send SMS Alert</span>
</button>
<button className="py-2 px-2 rounded-lg bg-error-container text-error font-label-md text-label-md font-bold flex items-center justify-center gap-1 active:scale-98 transition-transform shadow-sm" type="button">
<Icon name="assignment_return" className="text-[16px]" />
<span>Initiate Return (RTO)</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>

<div className="flex items-start justify-between pl-1">
<div className="flex items-center gap-2">
<div className="bg-surface-container px-2.5 py-1 rounded-md text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block font-bold">Slot</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">B01</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#SC-ORD-9281</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-secondary font-semibold px-1.5 py-0.2 rounded">Boda Bay</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium truncate max-w-[180px]">SoundCore ANC Life Q30</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-price-display text-[16px] text-on-surface font-extrabold">UGX 285,000</span>
<span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
<Icon name="security" className="text-[12px]" /> Escrow Protected
          </span>
</div>
</div>

<div className="bg-amber-50/80 p-2 rounded-lg flex items-center justify-between text-body-sm font-body-sm pl-2">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-label-sm font-label-sm">
<Icon name="pin" className="text-[13px]" /> Hold - PIN Mismatch
          </span>
</div>
<div className="flex items-center gap-1 text-amber-800 font-label-sm font-bold">
<Icon name="timer" className="text-[14px]" />
<span>Held: 3 Days (48h left)</span>
</div>
</div>

<div className="flex items-center justify-between pl-1 pt-0.5">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="two_wheeler" className="text-[16px] text-primary" />
<span>Rider: <strong>J. Mugisha</strong> (#BD-112)</span>
</div>
<button className="font-label-md text-label-md font-bold text-primary flex items-center gap-0.5 hover:underline" type="button">
<span>Resolve PIN Hold</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>

<div className="flex items-start justify-between pl-1">
<div className="flex items-center gap-2">
<div className="bg-surface-container px-2.5 py-1 rounded-md text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase block font-bold">Slot</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">C03</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#SC-ORD-8820</span>
<span className="font-label-sm text-label-sm bg-primary-fixed text-primary font-bold px-1.5 py-0.2 rounded">B2B Heavy</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium truncate max-w-[180px]">Solar Inverter 3KVA Hybrid</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-price-display text-[16px] text-on-surface font-extrabold">UGX 2,450,000</span>
<span className="font-label-sm text-[10px] text-secondary font-bold flex items-center gap-0.5">
<Icon name="account_balance" className="text-[12px]" /> Ledger Verified
          </span>
</div>
</div>

<div className="bg-surface-container-low p-2 rounded-lg flex items-center justify-between text-body-sm font-body-sm pl-2">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-label-sm font-label-sm">
<Icon name="local_shipping" className="text-[13px]" /> Linehaul Staged: Jinja Depot
          </span>
</div>
<div className="flex items-center gap-1 text-on-surface font-label-sm font-bold">
<Icon name="departure_board" className="text-[14px]" />
<span>Departs: Tonight 21:00</span>
</div>
</div>

<div className="flex items-center justify-between pl-1 pt-0.5">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="weight" className="text-[16px] text-secondary" />
<span>Heavy Cargo: <strong>18.4 kg</strong></span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-1 rounded font-bold flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> Bay Cleared
        </span>
</div>
</div>
</div>

<div className="px-margin pt-space-lg flex items-center justify-center gap-1.5 text-secondary">
<Icon name="verified" className="text-[16px]" />
<span className="font-body-sm text-body-sm">Last Physical Shelf Walkthrough: <strong>42 mins ago</strong> by Isaac K.</span>
</div>

<div className="fixed bottom-0 inset-x-0 bg-surface-container-lowest/95 backdrop-blur-xl px-margin py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-40 flex items-center gap-space-sm pb-safe">

<button className="flex-1 h-12 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-sm" type="button">
<Icon name="checklist_rtl" className="text-[20px] text-secondary" />
<span>Audit Bay Inv.</span>
</button>

<button className="flex-[1.4] h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-extrabold flex items-center justify-center gap-2 shadow-md active:scale-98 hover:brightness-105 transition-all" type="button">
<Icon name="qr_code_scanner" className="text-[22px]" />
<span>Scan to Shelf</span>
</button>
</div>
</div></main>
    </div>
  );
};

export default HubStorageAgingMatrixSwiftcartHubLight;
