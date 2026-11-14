// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/overview_swiftcart_hub_agent_light_mode/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverviewSwiftcartHubAgentLightModeProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgentLightMode: React.FC<OverviewSwiftcartHubAgentLightModeProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart Hub</span><span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><div className="flex items-center gap-1.5"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">Overview</h1><span className="text-body-sm font-body-sm text-on-surface-variant truncate hidden sm:inline">(Station #04)</span></div></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary hover:bg-surface-container active:bg-surface-container-high transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full pb-8">

<section className="px-margin pt-space-xs pb-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary-fixed text-on-primary-fixed flex-shrink-0">
<Icon name="warehouse" className="text-[18px]" />
</span>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">William St Central Hub #04</h2>
<p className="font-body-sm text-body-sm text-secondary truncate">Day Shift • 08:00 - 17:00 • Agent Isaac Kato</p>
</div>
</div>
<div className="relative flex items-center gap-space-xs flex-shrink-0">
<button aria-label="Notifications" className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center active:scale-95 transition-transform relative">
<Icon name="notifications" className="text-[20px]" />
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest"></span>
</button>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>Kampala Core Node: Online (99.9% Latency)</span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<Icon name="bolt" className="text-[16px] text-tertiary" />
<span>Nakasero Feeder 2</span>
</div>
</div>
</div>
</section>

<section className="px-margin pb-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
</span>
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Shift Progress: 14:45 EAT • ACTIVE</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold">Hub Load: Nominal</span>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface font-semibold">Central Staging Shelf Space</span>
<span className="font-label-md text-label-md text-primary font-bold">342 / 460 slots (74% Optimal)</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container overflow-hidden p-0.5">
<div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container" style={{"width":"74%"}}></div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-secondary">
<span>Target Cap: 85%</span>
<span>118 slots available</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs min-w-0">
<Icon name="local_shipping" className="text-primary-container text-[20px] flex-shrink-0" />
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-secondary truncate">Linehaul Freight</p>
<p className="font-label-md text-label-md text-on-surface truncate font-bold">LH-04 (ETA 16:30)</p>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs min-w-0">
<Icon name="power" className="text-tertiary text-[20px] flex-shrink-0" />
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-secondary truncate">Grid Power Source</p>
<p className="font-label-md text-label-md text-on-surface truncate font-bold">Stable (241V Core)</p>
</div>
</div>
</div>
</div>
</section>

<div className="px-margin flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-1.5">
<Icon name="swap_horiz" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Station Throughput Matrix</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Real-time sync</span>
</div>

<section className="px-margin pb-space-lg flex flex-col gap-space-sm">
<div className="grid grid-cols-2 gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="downloading" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-bold">68 INGESTED</span>
</div>
<div>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight">184</span>
<p className="font-label-md text-label-md text-secondary font-semibold">Incoming Today</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">112 Boda • 72 Linehaul</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<Icon name="inventory_2" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-bold">SECURE</span>
</div>
<div>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight">142</span>
<p className="font-label-md text-label-md text-secondary font-semibold">In Storage Bins</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Staged: Bins A1-D12</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="storefront" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed-dim text-on-primary-fixed-variant font-bold">QUEUE</span>
</div>
<div>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight">86</span>
<p className="font-label-md text-label-md text-secondary font-semibold">Counter Pickup</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">OTC Customer Ready</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
<Icon name="task_alt" className="text-[20px]" />
</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-bold">CYCLE COMP</span>
</div>
<div>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight">118</span>
<p className="font-label-md text-label-md text-secondary font-semibold">Handed Over</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Dispatched / Collected</p>
</div>
</div>
</div>

<div className="bg-error-container text-on-error-container rounded-xl p-space-sm px-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center flex-shrink-0">
<Icon name="gavel" className="text-[18px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg font-bold truncate">RTO Quarantine Area</h4>
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
</div>
<p className="font-body-sm text-body-sm truncate">14 parcels pending manual re-manifest or claim inspection</p>
</div>
</div>
<button className="px-2.5 py-1 rounded bg-error text-on-error font-label-sm text-label-sm uppercase font-bold flex-shrink-0 active:scale-95 transition-transform">
        Audit (14)
      </button>
</div>
</section>

<section className="px-margin pb-space-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="notification_important" className="text-error text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Action Required</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error text-on-error font-bold">3 PENDING</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-md text-label-md text-error font-bold tracking-wide">SC-ORD-9104</span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">SLA Overdue</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold mt-1">Samsung Galaxy A54 5G • 256GB</p>
<p className="font-body-sm text-body-sm text-secondary">Buyer: Brian Ssewankambo • Bay Slot #B-04</p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-error font-bold block">Day 6 of 5</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Auto-RTO: 18h</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1 pl-1">
<a className="h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold active:scale-95 transition-transform" href="tel:+256700000000">
<Icon name="phone" className="text-[18px] text-primary" />
<span>Call Customer</span>
</a>
<button className="h-10 rounded-lg bg-error text-on-error flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold active:scale-95 transition-transform shadow-sm">
<Icon name="verified_user" className="text-[18px]" />
<span>Flag SLA Stay</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-md text-label-md text-primary font-bold tracking-wide">SC-ORD-9281</span>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">PIN Mismatch x2</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold mt-1">SoundCore Space One Headphones</p>
<p className="font-body-sm text-body-sm text-secondary">Customer: Dennis Mukasa • Counter #01</p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold block">Lockout 30m</span>
<Icon name="lock_reset" className="text-primary-container text-[20px]" />
</div>
</div>
<div className="pt-1 pl-1">
<button className="w-full h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold active:scale-95 transition-transform">
<Icon name="fact_check" className="text-[18px] text-primary-container" />
<span>Inspect Docket &amp; Verify Uganda ID</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="flex items-start justify-between gap-space-xs pl-1">
<div className="min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-md text-label-md text-tertiary font-bold tracking-wide">SC-ORD-8820</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Hold Cleared</span>
</div>
<p className="font-label-lg text-label-lg text-on-surface font-bold mt-1">Solar Inverter 3KVA Heavy Unit</p>
<p className="font-body-sm text-body-sm text-secondary">Dest: Jinja Station #02 • Weight: 18.4 kg</p>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-tertiary font-bold block">Approved</span>
<span className="font-body-sm text-body-sm text-secondary block">Pallet D</span>
</div>
</div>
<div className="pt-1 pl-1">
<button className="w-full h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold active:scale-95 transition-transform shadow-md">
<Icon name="local_shipping" className="text-[18px]" />
<span>Manifest to Linehaul #LH-04</span>
</button>
</div>
</div>
</section>

<section className="px-margin pb-space-lg">
<div className="flex items-center justify-between pb-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Hub Utilities</h3>
<span className="font-label-sm text-label-sm text-secondary">Station #04 Desk</span>
</div>
<div className="grid grid-cols-3 gap-space-sm">

<button className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition-transform">
<div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary mb-1.5">
<Icon name="checklist" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Direct Shelf Audit</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Bay A to H</span>
</button>

<button className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition-transform">
<div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-1.5">
<Icon name="print" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Print Shelf Labels</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Zebra Thermal</span>
</button>

<button className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col items-center justify-center text-center shadow-sm active:scale-95 transition-transform">
<div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-tertiary mb-1.5">
<Icon name="picture_as_pdf" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Shift Docket</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Export Daily</span>
</button>
</div>
</section>

<section className="px-margin flex flex-col gap-space-xs">
<div className="flex items-center justify-between pb-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Recent Hub Activity</h3>
<span className="font-label-sm text-label-sm text-primary font-bold">Auto-refresh: 10s</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-space-xs">

<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="check" className="text-[16px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">SC-ORD-9440 • OTC Pickup Claimed</p>
<p className="font-body-sm text-body-sm text-secondary truncate">OTP verified by Isaac Kato • 14:41</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex-shrink-0">+1 Handover</span>
</div>

<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container text-primary-container flex items-center justify-center flex-shrink-0">
<Icon name="qr_code_scanner" className="text-[16px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">SC-ORD-9612 • Boda Ingest Received</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Rider: Joseph Mugerwa • Bin C-02 • 14:38</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold flex-shrink-0">Ingested</span>
</div>

<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0">
<Icon name="move_up" className="text-[16px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">SC-ORD-9011 • Re-slotted to Bay A-09</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Relocated from staging aisle • 14:32</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold flex-shrink-0">Moved</span>
</div>
</div>
</section>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)]" data-active-classes="text-primary"><div className="flex justify-between items-center h-16 px-gutter max-w-lg mx-auto relative"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors text-primary" data-path="overview" href="#"><Icon name="dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-0.5">Overview</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-secondary hover:text-on-surface transition-colors" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-0.5">Intake</span></a><div className="relative -top-5 flex flex-col items-center"><a className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/30 active:scale-95 transition-transform" data-path="scan" href="#"><Icon name="barcode_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-1">Scan</span></div><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-secondary hover:text-on-surface transition-colors" data-path="pickup" href="#"><Icon name="outbox" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-0.5">Pickup</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-secondary hover:text-on-surface transition-colors" data-path="more" href="#"><Icon name="menu_open" className="text-[22px]" /><span className="font-label-sm text-label-sm mt-0.5">More</span></a></div></nav>
    </div>
  );
};

export default OverviewSwiftcartHubAgentLightMode;
