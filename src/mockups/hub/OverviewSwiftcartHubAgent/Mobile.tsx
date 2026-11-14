// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/overview_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgent: React.FC<OverviewSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md text-on-surface font-bold truncate">William St Hub</span><span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><span className="font-label-sm text-label-sm text-secondary truncate">Kampala Central • Overview</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container text-on-surface-variant"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="flex items-center gap-1.5 pl-1"><div className="flex flex-col text-right hidden xs:flex"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kato I.</span><span className="font-label-sm text-label-sm text-secondary font-mono leading-tight">#HUB-402</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full px-margin pb-6 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-md shadow-md">
<div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="flex flex-col gap-space-sm relative z-10">

<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
<Icon name="schedule" className="text-[14px] text-tertiary" />
            Shift: 08:00 - 17:00
          </span>
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">
            14:45 EAT • ACTIVE
          </span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="badge" className="text-[16px]" />
<span>#H-8821</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex items-baseline justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Station #04 Desk</h2>
<span className="font-label-md text-label-md text-tertiary font-bold flex items-center gap-1">
<Icon name="verified" className="text-[16px]" />
            74% Optimal
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Shelf Utilization: <strong className="text-on-surface font-semibold">342</strong> of 460 slots active in Central Staging.
        </p>

<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden flex mt-1">
<div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{"width":"74%"}}></div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pt-1">
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-lowest shadow-sm">
<span className="w-7 h-7 rounded-full bg-tertiary-container/15 flex items-center justify-center text-tertiary">
<Icon name="sync" className="text-[16px]" />
</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary">Grid Line</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Nakasero Feeder 2</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-lowest shadow-sm">
<span className="w-7 h-7 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="local_shipping" className="text-[16px]" />
</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary">Linehaul Queue</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Truck LH-04 (ETA 16:10)</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between px-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight uppercase flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
        Throughput Pipeline
      </h3>
<span className="font-label-sm text-label-sm text-secondary">Updated 2m ago</span>
</div>
<div className="grid grid-cols-2 gap-2.5">

<div className="col-span-2 rounded-xl bg-surface-container-lowest p-space-md shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
<Icon name="move_to_inbox" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary">Incoming Today</span>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold leading-none mt-0.5">184 <span className="font-label-sm text-label-sm text-secondary font-normal">parcels</span></span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">
            68 Ingested
          </span>
</div>
<div className="mt-3 pt-2.5 flex items-center justify-between bg-surface-container-low rounded-lg px-2.5 py-1.5">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="rv_hookup" className="text-[15px] text-secondary" />
<span>78 Linehaul Freight</span>
</div>
<span className="text-secondary font-label-sm text-label-sm">•</span>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="two_wheeler" className="text-[15px] text-primary-container" />
<span>106 Boda Drops</span>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<Icon name="shelves" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/15 px-1.5 py-0.5 rounded">Bins A1-D12</span>
</div>
<div className="mt-3">
<span className="font-price-display text-price-display text-on-surface font-extrabold block">142</span>
<span className="font-label-md text-label-md text-secondary block truncate">In Storage Bins</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="front_hand" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm text-primary-container font-bold bg-primary-container/10 px-1.5 py-0.5 rounded">OTC Collection</span>
</div>
<div className="mt-3">
<span className="font-price-display text-price-display text-on-surface font-extrabold block">86</span>
<span className="font-label-md text-label-md text-secondary block truncate">Awaiting Pickups</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<Icon name="task_alt" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Boda + Line</span>
</div>
<div className="mt-3">
<span className="font-price-display text-price-display text-on-surface font-extrabold block">118</span>
<span className="font-label-md text-label-md text-secondary block truncate">Handed Over</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
<Icon name="assignment_return" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm text-error font-bold bg-error-container/40 px-1.5 py-0.5 rounded">RTO Quarantine</span>
</div>
<div className="mt-3">
<span className="font-price-display text-price-display text-error font-extrabold block">14</span>
<span className="font-label-md text-label-md text-secondary block truncate">Return Staged</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs mt-1">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight uppercase">Urgent Action Required</h3>
</div>
<span className="font-label-sm text-label-sm text-error font-bold px-1.5 py-0.5 rounded bg-error-container">3 Critical</span>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-md flex flex-col gap-space-sm relative">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-md bg-error-container text-error flex items-center justify-center flex-shrink-0">
<Icon name="warning" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">SC-ORD-9104</span>
<span className="px-1.5 py-0.2 rounded bg-error text-on-error font-label-sm text-label-sm">SLA Overdue</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">Samsung Galaxy A54 5G • 128GB</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary flex-shrink-0 font-mono">Bay C-02</span>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary">Buyer: <strong className="text-on-surface font-semibold">Brian Ssewankambo</strong></span>
<span className="text-error font-bold font-mono">Day 6 of 5</span>
</div>
<p className="font-label-sm text-label-sm text-on-error-container flex items-center gap-1">
<Icon name="timer" className="text-[14px]" />
          Auto-RTO Initiates in 18 hrs • Call OTC customer immediately
        </p>
</div>

<div className="grid grid-cols-2 gap-2 pt-0.5">
<button className="h-10 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
<Icon name="phone_in_talk" className="text-[18px] text-tertiary" />
          Call Customer
        </button>
<button className="h-10 px-3 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
<Icon name="flag" className="text-[18px]" />
          Flag SLA Stay
        </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-md bg-secondary-container text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="password" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">SC-ORD-9281</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">PIN Mismatch x2</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">SoundCore Space One ANC</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary flex-shrink-0 font-mono">Bay B-04</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-secondary">Customer: <strong className="text-on-surface font-semibold">Dennis Mukasa</strong></span>
<span className="font-label-sm text-label-sm text-secondary">OTP validation failed twice at terminal</span>
</div>
<button className="h-9 px-3 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold flex items-center gap-1 active:scale-95 transition-transform">
<Icon name="qr_code_scanner" className="text-[16px]" />
          Inspect
        </button>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-md bg-tertiary-container/20 text-tertiary flex items-center justify-center flex-shrink-0">
<Icon name="check_circle" className="text-[18px]" />
</span>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">SC-ORD-8820</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm">Hold Cleared</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">Solar Inverter 3KVA (Heavy Freight)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary flex-shrink-0 font-mono">Pallet P-01</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary">Vendor: <strong className="text-on-surface font-semibold">Kikuubo Wholesalers Direct</strong></span>
<span className="text-tertiary font-bold font-label-sm text-label-sm">UNBS PASS</span>
</div>
<p className="font-label-sm text-label-sm text-secondary">
          Ready for consolidation on Linehaul Dispatch #LH-04 to Bweyogerere Hub.
        </p>
</div>
<button className="w-full h-11 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform">
<Icon name="local_shipping" className="text-[20px]" />
        Manifest to Linehaul #LH-04
      </button>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight uppercase px-1">
      Station Tools &amp; Audit
    </h3>
<div className="grid grid-cols-3 gap-2">

<button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container active:scale-95 transition-all text-center">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="fact_check" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Direct Shelf Audit</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container active:scale-95 transition-all text-center">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="print" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Print Shelf Labels</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container active:scale-95 transition-all text-center">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="picture_as_pdf" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Daily Log (PDF)</span>
</button>
</div>
</div>

<div className="fixed bottom-24 left-4 right-4 z-50 pointer-events-none transform translate-y-8 opacity-0 transition-all duration-300 flex items-center justify-center" id="hub-toast">
<div className="bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-lg shadow-xl font-label-md text-label-md flex items-center gap-2">
<Icon name="check_circle" className="text-[18px] text-tertiary-fixed" />
<span id="toast-msg">Operation Recorded</span>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container font-bold"><div className="flex justify-between items-center h-20 px-space-xs relative"><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] transition-colors text-primary-container font-bold" data-path="overview" href="#"><Icon name="dashboard" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><div className="relative flex-1 flex flex-col items-center justify-center"><a className="absolute -top-6 w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/40 ring-4 ring-surface active:scale-95 transition-transform" data-path="scan" href="#"><Icon name="qr_code_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-secondary pt-8 tracking-tight">Scan</span></div><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="pickup" href="#"><Icon name="front_hand" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="more" href="#"><Icon name="widgets" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">More</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartHubAgent;
