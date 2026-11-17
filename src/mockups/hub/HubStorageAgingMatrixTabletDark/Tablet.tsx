// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_storage_aging_matrix_tablet_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      
      <main className="w-full pt-20 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="w-full px-margin-desktop py-space-xs bg-surface-container flex items-center justify-between text-on-surface">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider">Storage Node Sync: Nominal</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">| Bay Sub-router B #2.4GHz Linked</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant">Scanner: Honeywell EDA52 Active</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">Luganda / EN Interface</span>
</div>
</div>
<div className="w-full px-margin-desktop py-space-md flex flex-col gap-space-lg max-w-7xl mx-auto">

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-md rounded-xl bg-container-dark-low shadow-md relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Parcels In Hub</span>
<div className="flex items-baseline gap-space-xs mt-0.5">
<span className="font-price-display text-price-display text-on-surface">142</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 190 Cap</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="inventory_2" className="text-[22px]" />
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant">holding Value</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">UGX 36,890,000</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Bay Utilization</span>
<div className="flex items-baseline gap-space-xs mt-0.5">
<span className="font-price-display text-price-display text-on-surface">74.7%</span>
<span className="font-body-sm text-body-sm text-amber-warning font-semibold">48 Slots Free</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">

<svg className="w-7 h-7 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="74.7, 100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
</div>
<div className="mt-space-sm flex flex-col gap-1">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-secondary to-primary h-1.5 rounded-full" style={{"width":"74.7%"}}></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Optimal &lt;85%</span>
<span>Target Throttled</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low shadow-md relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-danger-penalty/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-danger-penalty uppercase tracking-wider font-bold">Aging Overdue (&gt;72h)</span>
<div className="flex items-baseline gap-space-xs mt-0.5">
<span className="font-price-display text-price-display text-danger-penalty">6</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Action Required</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-danger-penalty/20 flex items-center justify-center text-danger-penalty animate-pulse">
<Icon name="warning" className="text-[22px]" />
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-danger-penalty/10 px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm text-danger-penalty">Return / Call Rider</span>
<span className="font-label-sm text-label-sm uppercase font-bold text-on-surface">3 RTO Queued</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider font-bold">Safe reserve H Status</span>
<div className="flex items-baseline gap-space-xs mt-0.5">
<span className="font-price-display text-price-display text-on-surface">14 Items</span>
<span className="font-body-sm text-body-sm text-emerald-escrow">two-step admin OK</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/20 flex items-center justify-center text-emerald-escrow">
<Icon name="lock" className="text-[22px]" />
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant">reserve Locked Val</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">UGX 16,200,000</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="p-space-sm rounded-xl bg-container-dark-low flex flex-col gap-space-xs shadow-sm">
<div className="flex items-center justify-between px-space-xs pb-space-xs">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Warehouse Bays</span>
<span className="font-label-sm text-label-sm text-primary">Quick Switch</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<button className="flex flex-col p-space-sm rounded-lg bg-surface-container text-left transition-all hover:bg-surface-container-high">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Bay A</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">38 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Electronics &amp; Small</span>
</button>
<button className="flex flex-col p-space-sm rounded-lg bg-primary-container text-left text-on-primary-container shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold">Bay B (Active)</span>
<span className="font-label-sm text-label-sm bg-surface-dark/40 px-1 rounded">54 pcs</span>
</div>
<span className="font-body-sm text-body-sm opacity-90 truncate">Audio &amp; Accessories</span>
</button>
<button className="flex flex-col p-space-sm rounded-lg bg-surface-container text-left transition-all hover:bg-surface-container-high">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Bay C</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">36 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Bulky / Heavy Goods</span>
</button>
<button className="flex flex-col p-space-sm rounded-lg bg-surface-container text-left transition-all hover:bg-surface-container-high">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-emerald-escrow flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> reserve H
                </span>
<span className="font-label-sm text-label-sm text-emerald-escrow">14 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Flagships &amp; Gold</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between px-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Retention Aging Matrix</span>
<span className="font-label-sm text-label-sm text-tertiary">Real-time Clock</span>
</div>
<div className="flex gap-space-xs overflow-x-auto pb-space-xs no-scrollbar">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md whitespace-nowrap">
              All (142)
            </button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Fresh &lt;24h (82)
            </button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span> 24-48h (44)
            </button>
<button className="px-space-sm py-1.5 rounded-lg bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md whitespace-nowrap flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty animate-pulse"></span> Critical &gt;72h (6)
            </button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
              Return (10)
            </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="grid_view" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-on-surface">Shelf Rack B Map</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tier 1 - 5 Layout</span>
</div>

<div className="grid grid-cols-5 gap-1.5 p-space-xs bg-surface-dark rounded-lg">

<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B5-01</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B5-02</span>
<span className="w-2 h-2 rounded-full bg-surface-container-highest mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B5-03</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B5-04</span>
<span className="w-2 h-2 rounded-full bg-amber-warning mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B5-05</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>

<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface">B4-01</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-primary-container text-on-primary-container text-center ring-2 ring-primary shadow-md">
<span className="font-label-sm text-label-sm font-bold">B4-02</span>
<span className="w-2 h-2 rounded-full bg-white mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B4-03</span>
<span className="w-2 h-2 rounded-full bg-surface-container-highest mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-danger-penalty/20 text-center">
<span className="font-label-sm text-label-sm text-danger-penalty font-bold">B4-08</span>
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-pulse mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B4-05</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>

<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B3-01</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B3-02</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B3-03</span>
<span className="w-2 h-2 rounded-full bg-amber-warning mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B3-04</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow mt-1"></span>
</div>
<div className="flex flex-col items-center justify-center py-2 rounded bg-surface-container text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">B3-05</span>
<span className="w-2 h-2 rounded-full bg-surface-container-highest mt-1"></span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span> &lt;24h</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-warning"></span> 24-48h</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-danger-penalty"></span> &gt;72h Overdue</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-surface-container-highest"></span> Empty</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface px-space-xs">Parcels Stowed in Bay B (Selected &amp; Queued)</span>

<div className="p-space-md rounded-xl bg-surface-container-high shadow-md relative overflow-hidden transition-all cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary text-on-primary font-label-md text-label-md font-bold">Shelf B4-02</span>
<span className="font-label-md text-label-md text-primary font-mono font-bold">#SC-9952</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-bold">14h Ago</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-bold">SoundCore Space One ANC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant: Victoria Tech Supplies</p>
</div>
<div className="text-right">
<p className="font-label-lg text-label-lg text-emerald-escrow font-bold whitespace-nowrap">UGX 248,500</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Payment Confirmed</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md">Shelf B4-08</span>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">#SC-9884</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-danger-penalty text-white font-bold flex items-center gap-1">
<Icon name="schedule" className="text-[12px]" /> 76h Ago • AGING
              </span>
</div>
<div className="mt-2 flex items-center justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface">JBL Charge 5 Wireless</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rider Attempt Failed 2x</p>
</div>
<div className="text-right">
<p className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 520,000</p>
<span className="font-label-sm text-label-sm text-danger-penalty">RTO Recommended</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md">Shelf B2-11</span>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">#SC-9915</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-amber-warning/20 text-amber-warning font-bold">32h Ago</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface">Anker Soundcore 2 Portable</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant: Kampala Audio Hub</p>
</div>
<div className="text-right">
<p className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 160,000</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Awaiting Boda</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md">Shelf B1-04</span>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">#SC-9902</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-amber-warning/20 text-amber-warning font-bold">50h Ago</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface">Sony WH-CH520 Wireless</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant: Gadget Plaza Nakasero</p>
</div>
<div className="text-right">
<p className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 210,000</p>
<span className="font-label-sm text-label-sm text-amber-warning">Auto Reminder Sent</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="p-space-lg rounded-xl bg-container-dark-low shadow-xl relative overflow-hidden">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
<Icon name="qr_code_2" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Bin B4-02</span>
<span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">Active Inspection</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rack Bay B • Vertical Tier 4 • Bin Slot 02</span>
</div>
</div>

<div className="flex flex-col items-end bg-surface-dark px-space-md py-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bin Volume Capacity</span>
<div className="flex items-center gap-space-xs mt-1">
<span className="font-label-lg text-label-lg text-on-surface">3 / 4</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Parcels Stored (75%)</span>
</div>
<div className="w-28 bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"75%"}}></div>
</div>
</div>
</div>

<div className="mt-space-md grid grid-cols-1 md:grid-cols-12 gap-space-md bg-surface-container-low p-space-md rounded-xl">

<div className="md:col-span-4 h-36 rounded-lg overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover" data-alt="High-end matte black SoundCore Space One active noise cancelling wireless headphones neatly packaged in a secure logistics hub shipping box with fragile barcode labels and tamper evident security tape under cool warehouse lighting." src="/images/94a0ae01066c577a.webp" />
<span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface-dark/80 backdrop-blur font-mono font-bold text-label-sm text-primary">
                PKG-8820-ANC
              </span>
</div>
<div className="md:col-span-8 flex flex-col justify-between">
<div>
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Tracking #SC-9952</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-bold">
<Icon name="verified_user" className="text-[14px]" /> payment secured
                  </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">SoundCore Space One ANC Headphones</h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 mt-2 text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<Icon name="store" className="text-[16px] text-amber-warning" />
<span>Victoria Tech Supplies</span>
<Icon name="verified" className="text-[14px] text-emerald-escrow" />
</div>
<div className="flex items-center gap-1">
<Icon name="pin_drop" className="text-[16px] text-primary" />
<span className="text-on-surface font-medium">Acacia Mall, Gate 2 (Buyer Masked)</span>
</div>
</div>
</div>

<div className="pt-space-xs mt-space-xs flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="call" className="text-[16px] text-on-surface-variant" />
<span className="font-label-md text-label-md font-mono text-on-surface">07•• ••• 842</span>
<span className="font-label-sm text-label-sm text-primary underline cursor-pointer">Proxy Call</span>
</div>
<span className="font-price-display text-price-display text-emerald-escrow whitespace-nowrap">UGX 248,500</span>
</div>
</div>
</div>

<div className="mt-space-md p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="timelapse" className="text-emerald-escrow text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">Hub Retention Age: 14h 22m</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-bold uppercase tracking-wider">
                Status: Optimal Retention
              </span>
</div>

<div className="w-full bg-surface-dark rounded-full h-2 overflow-hidden mt-1">
<div className="bg-gradient-to-r from-emerald-escrow to-tertiary h-2 rounded-full" style={{"width":"19.9%"}}></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span>0h Ingress</span>
<span>24h Alert (Free SMS)</span>
<span>48h Driver Reroute</span>
<span className="text-danger-penalty font-bold">72h Hard Return</span>
</div>
</div>

<div className="mt-space-lg flex flex-col gap-space-sm">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Warehouse Execution Commands</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="drive_file_move" className="text-primary text-[18px]" /> Relocate Bin
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Direct Stow</span>
</div>
<div className="flex gap-space-xs mt-1">
<select className="bg-surface-dark text-on-surface font-body-sm text-body-sm rounded-lg px-2 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-primary">
<option>Target: Slot A1-05 (Electronics Free)</option>
<option>Target: Slot C3-02 (Bulky Oversize)</option>
<option>Target: Safe reserve H (Locked Dual)</option>
<option>Target: Staging Bay S-01 (Courier Out)</option>
</select>
<button className="px-space-md py-2 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm rounded-lg font-bold transition-all">
                    Execute
                  </button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="sms" className="text-secondary text-[18px]" /> Buyer SMS Reminder
                  </span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Telco Auto-Dispatch</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<button className="flex-1 py-2 px-space-xs bg-surface-container-highest hover:bg-secondary-container text-on-surface rounded-lg font-label-sm text-label-sm transition-all text-center">
                    Send Luganda Alert
                  </button>
<button className="flex-1 py-2 px-space-xs bg-surface-container-highest hover:bg-secondary-container text-on-surface rounded-lg font-label-sm text-label-sm transition-all text-center">
                    Send English Alert
                  </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-xs">

<button className="h-12 px-space-md rounded-xl bg-container-dark-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center gap-space-sm font-label-lg text-label-lg transition-all shadow-md">
<Icon name="print" className="text-[20px]" />
<span>Print Bin Shelf QR Label</span>
</button>

<button className="h-12 px-space-md rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty flex items-center justify-center gap-space-sm font-label-lg text-label-lg transition-all">
<Icon name="keyboard_return" className="text-[20px]" />
<span>Stage for Return-to-Merchant (RTO)</span>
</button>
</div>
</div>

<div className="mt-space-lg pt-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1 uppercase tracking-wide">
<Icon name="history" className="text-primary text-[18px]" /> Immutable Bin Audit Log
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">NODE #UG-8820-LEDGER</span>
</div>
<div className="flex flex-col gap-space-xs bg-surface-dark p-space-sm rounded-xl">

<div className="flex items-start gap-space-sm p-space-xs rounded bg-surface-container-low">
<span className="font-mono text-label-sm text-primary whitespace-nowrap mt-0.5">09:15 EAT</span>
<div className="w-2 h-2 rounded-full bg-emerald-escrow mt-1.5 flex-shrink-0"></div>
<div className="flex-1">
<p className="font-label-sm text-label-sm text-on-surface">Intake Inbound Scanned</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Arrived via Line-haul Bag #TH-KLA-12 by William Ssebaggala (Hub Lead)</p>
</div>
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" />
</div>

<div className="flex items-start gap-space-sm p-space-xs rounded bg-surface-container-low">
<span className="font-mono text-label-sm text-primary whitespace-nowrap mt-0.5">09:18 EAT</span>
<div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
<div className="flex-1">
<p className="font-label-sm text-label-sm text-on-surface">Stowed into Bay B • Tier 4 • Slot 02</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Optical Barcode confirmed rack position B4-02</p>
</div>
<Icon name="pin_drop" className="text-[16px] text-secondary" />
</div>

<div className="flex items-start gap-space-sm p-space-xs rounded bg-surface-container-low">
<span className="font-mono text-label-sm text-primary whitespace-nowrap mt-0.5">11:30 EAT</span>
<div className="w-2 h-2 rounded-full bg-amber-warning mt-1.5 flex-shrink-0"></div>
<div className="flex-1">
<p className="font-label-sm text-label-sm text-on-surface">Automated Customer Dispatch SMS Queued</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">MTN momo payment delivery PIN blind token issued to recipient</p>
</div>
<Icon name="send" className="text-[16px] text-amber-warning" />
</div>
</div>
</div>

<div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<Icon name="verified" className="text-emerald-escrow text-[18px]" />
<span className="whitespace-nowrap">Guaranteed holding: protected under SwiftCart Hub Bailment Policy (UGX 100M Node Bond)</span>
</div>
<span className="text-primary font-mono">Bailment #UG-BLM-8891</span>
</div>
</div>
</div>
</div>
</div>
</div></main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"><div className="w-full h-20 px-margin-desktop flex items-center justify-around"><nav className="flex items-center justify-between w-full max-w-4xl mx-auto gap-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Pickup</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all gap-1 bg-primary-container text-on-primary-container font-label-lg" data-path="storage" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="returns" href="#"><Icon name="assignment_return" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center h-14 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-1" data-path="more" href="#"><Icon name="tune" className="text-[22px]" /><span className="font-label-sm text-label-sm uppercase tracking-wide">More</span></a></nav></div></footer>
    </div>
  );
};

export default Tablet;
