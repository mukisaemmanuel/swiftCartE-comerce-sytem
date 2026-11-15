// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/hub/hub_storage_aging_matrix_tablet_light/code.html
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
      
      <main className="w-full pt-32 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-[1140px] mx-auto px-4 py-4 space-y-4">

<div className="w-full bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-wrap items-center justify-between gap-3">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-lg">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wide">Storage Node Sync Nominal</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="wifi" className="text-[16px] text-secondary" />
<span className="font-body-sm text-body-sm">Bay Sub-router B <strong className="font-label-md text-label-md text-on-surface">#2.4GHz Linked</strong></span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="barcode_scanner" className="text-[16px] text-tertiary" />
<span className="font-body-sm text-body-sm">Scanner: <strong className="font-label-md text-label-md text-on-surface">Honeywell EDA52 Active</strong></span>
</div>
</div>

<div className="flex items-center bg-surface-container p-0.5 rounded-lg shadow-inner">
<button className="px-3 py-1 rounded-md font-label-sm text-label-sm transition-all bg-surface-container-lowest text-primary-container shadow-sm font-bold" id="lang-en">English</button>
<button className="px-3 py-1 rounded-md font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface" id="lang-lg">Luganda</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Parcels in Hub</span>
<Icon name="inventory_2" className="text-primary p-1.5 bg-surface-container-low rounded-lg text-[18px]" />
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface">142</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 190 Cap</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"74.7%"}}></div>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Custody Value</span>
<span className="font-label-sm text-label-sm text-on-surface whitespace-nowrap">UGX 36,890,000</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center justify-between">
<div className="flex flex-col justify-between h-full">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Bay Utilization</span>
<div>
<div className="font-headline-md text-headline-md text-on-surface">74.7%</div>
<div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-0.5">
<Icon name="check_circle" className="text-[14px]" />
<span>48 Slots Free (Optimal &lt;85%)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Auto-balancing active</span>
</div>

<div className="relative w-16 h-16 flex items-center justify-center">
<svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="74.7, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-sm text-label-sm text-on-surface">75%</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between relative">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Aging Overdue (&gt;72h)</span>
<span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm animate-pulse">Critical</span>
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-error">6</span>
<span className="font-label-sm text-label-sm text-error">Action Required</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">3 parcels queued for Return to Merchant</span>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">RTO Pipeline</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Process Now →</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Safe Vault H Status</span>
<Icon name="lock" className="text-secondary text-[20px]" />
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface">14 Items</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold">Dual-Key OK</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Vault Locked &amp; Secured</span>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Custody Value</span>
<span className="font-label-sm text-label-sm text-on-surface whitespace-nowrap">UGX 16,200,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

<div className="lg:col-span-5 space-y-4">

<div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm space-y-2.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Warehouse Bays</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">4 Locations</span>
</div>
<div className="grid grid-cols-2 gap-2">

<button className="text-left p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Bay A</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface">38 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate block mt-0.5">Electronics &amp; Small</span>
</button>

<button className="text-left p-2.5 rounded-xl bg-primary-fixed text-on-primary-fixed-variant shadow-sm relative overflow-hidden">
<div className="absolute -right-3 -top-3 w-8 h-8 rounded-full bg-primary-container opacity-20 pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-lg text-label-lg text-primary-container font-extrabold">Bay B</span>
</div>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-bold">54 pcs</span>
</div>
<span className="font-body-sm text-body-sm font-semibold text-primary-container truncate block mt-0.5">Audio &amp; Accessories</span>
</button>

<button className="text-left p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Bay C</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface">36 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate block mt-0.5">Bulky Logistics</span>
</button>

<button className="text-left p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Vault H</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface">14 pcs</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate block mt-0.5">Flagships / High Val</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-2 uppercase tracking-wider px-1">Retention Aging Filter</span>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-on-surface text-surface-bright font-label-sm text-label-sm shadow-sm font-bold">All (142)</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Fresh &lt;24h (82)
            </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 24-48h (44)
            </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-error font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Critical &gt;72h (6)
            </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">RTO (10)</button>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-3">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface">Shelf Rack B Map</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Tier 1 - 5 Matrix • Click bin to inspect</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>&lt;24h
              </div>
<div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary"></span>48h
              </div>
<div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-error"></span>&gt;72h
              </div>
</div>
</div>

<div className="space-y-1.5 font-label-sm text-label-sm select-none">

<div className="flex items-center gap-1.5">
<span className="w-6 text-on-surface-variant font-bold text-center">T5</span>
<div className="grid grid-cols-5 gap-1.5 flex-1">
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B5-01</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B5-02</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container-low opacity-60 flex items-center justify-center text-on-surface-variant">
<span>B5-03</span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B5-04</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B5-05</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
</div>
</div>

<div className="flex items-center gap-1.5">
<span className="w-6 text-on-surface-variant font-bold text-center">T4</span>
<div className="grid grid-cols-5 gap-1.5 flex-1">
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B4-01</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>

<button className="h-9 rounded-lg bg-primary-container text-on-primary-container shadow-[0_2px_10px_rgba(218,55,0,0.35)] flex items-center justify-between px-2 font-bold ring-2 ring-primary-container">
<span>B4-02</span><span className="w-2 h-2 rounded-full bg-surface-bright animate-ping"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B4-03</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container-low opacity-60 flex items-center justify-center text-on-surface-variant">
<span>B4-04</span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B4-05</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
</div>
</div>

<div className="flex items-center gap-1.5">
<span className="w-6 text-on-surface-variant font-bold text-center">T3</span>
<div className="grid grid-cols-5 gap-1.5 flex-1">
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B3-01</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B3-02</span><span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B3-03</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B3-04</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B3-05</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
</div>
</div>

<div className="flex items-center gap-1.5">
<span className="w-6 text-on-surface-variant font-bold text-center">T2</span>
<div className="grid grid-cols-5 gap-1.5 flex-1">
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B2-01</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container-low opacity-60 flex items-center justify-center text-on-surface-variant">
<span>B2-02</span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B2-03</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B2-04</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B2-05</span><span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</button>
</div>
</div>

<div className="flex items-center gap-1.5">
<span className="w-6 text-on-surface-variant font-bold text-center">T1</span>
<div className="grid grid-cols-5 gap-1.5 flex-1">
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B1-01</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B1-02</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B1-03</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>
<button className="h-9 rounded-lg bg-surface-container-low opacity-60 flex items-center justify-center text-on-surface-variant">
<span>B1-04</span>
</button>
<button className="h-9 rounded-lg bg-surface-container flex items-center justify-between px-2 hover:bg-surface-container-high">
<span>B1-05</span><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm space-y-2.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Parcels Stowed in Bay B</span>
<span className="font-label-sm text-label-sm text-primary font-bold">54 Total</span>
</div>
<div className="space-y-2">

<div className="p-2.5 rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md px-2 py-1 rounded-md bg-primary-container text-on-primary-container font-extrabold">B4-02</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">SoundCore Space One</span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 248,500 • Victoria Tech</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-tertiary bg-surface-bright px-2 py-0.5 rounded-full block">14h ago</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 block">Fresh</span>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md px-2 py-1 rounded-md bg-surface-container-highest text-on-surface font-extrabold">B4-08</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">JBL Charge 5 Waterproof</span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 520,000 • Gadget Point</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded-full block font-bold">76h Overdue</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 block">RTO Alert</span>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md px-2 py-1 rounded-md bg-surface-container-highest text-on-surface font-extrabold">B2-11</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Sony WH-CH520 Wireless</span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 210,000 • Kampala HiFi</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full block font-semibold">32h ago</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 block">Aging OK</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-4">

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-md space-y-5">

<div className="flex flex-wrap items-center justify-between gap-3 pb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm font-extrabold shadow-sm">
                B4
              </div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Shelf Bin B4-02</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container uppercase">Active Inspection</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tier 4, Column 02 • Audio Shelf Storage • Standard Bin Size M</span>
</div>
</div>

<div className="bg-surface-container px-3 py-1.5 rounded-xl flex items-center gap-2">
<Icon name="view_in_ar" className="text-secondary text-[20px]" />
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bin Volume Capacity</span>
<span className="font-label-md text-label-md text-on-surface">3/4 Parcels Stored (75%)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-start">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-surface-container shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless headphones in premium sleek matte black retail packaging, studio photography on warm cream backdrop" src="/images/2ef8e3c0f31ba63c.webp" />
</div>
<div className="flex-1 space-y-2 w-full">
<div className="flex flex-wrap items-center justify-between gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" /> Verified Genuine
                </span>
<span className="font-label-md text-label-md text-on-surface-variant">Tracking: <strong className="text-on-surface">#SC-9952</strong></span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">SoundCore Space One ANC Headphones</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">Vendor: Victoria Tech Supplies (Acacia Mall, Gate 2)</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-2 pt-1">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-primary-container">248,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">(Prepaid Mobile Money Escrow)</span>
</div>

<button className="px-3 py-1.5 rounded-xl bg-surface-container-lowest hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-transform active:scale-95">
<Icon name="call" className="text-secondary text-[16px]" />
<span>Buyer Proxy Call</span>
</button>
</div>
</div>
</div>

<div className="space-y-2 bg-surface p-4 rounded-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="timelapse" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">Hub Retention Age: <strong>14h 22m</strong></span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full font-bold">Optimal (&lt;24h)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"20%"}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
<span>0h Inbound</span>
<span>24h Standard Gate</span>
<span>48h Free Storage SLA</span>
<span>72h Escalation Cutoff</span>
</div>
</div>

<div className="space-y-3 pt-2">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block">Warehouse Execution Commands</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="bg-surface-container p-3 rounded-xl flex flex-col justify-between gap-2.5">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="swap_horiz" className="text-secondary text-[20px]" />
<span className="font-label-md text-label-md">Relocate Parcel Slot</span>
</div>
<div className="flex items-center gap-1.5">
<select className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-2.5 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary-container">
<option>Select Target Bin...</option>
<option>Bay B - Shelf B3-04 (Audio)</option>
<option>Bay A - Shelf A1-08 (Small)</option>
<option>Vault H - Slot VH-02 (Secure)</option>
</select>
<button className="px-3 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Move
                  </button>
</div>
</div>

<div className="bg-surface-container p-3 rounded-xl flex flex-col justify-between gap-2.5">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="print" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md">Bin Shelf QR Label</span>
</div>
<div className="flex items-center gap-2">
<button className="w-full py-2 bg-surface-container-lowest hover:bg-surface-bright text-on-surface rounded-lg font-label-md text-label-md shadow-sm flex items-center justify-center gap-1.5 transition-transform active:scale-98">
<Icon name="qr_code" className="text-[16px]" />
<span>Print Re-label Docket</span>
</button>
</div>
</div>

<div className="bg-surface-container p-3 rounded-xl flex flex-col justify-between gap-2.5">
<div className="flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2">
<Icon name="sms" className="text-tertiary text-[20px]" />
<span className="font-label-md text-label-md">Buyer Collection SMS</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">PIN: 4892</span>
</div>
<div className="grid grid-cols-2 gap-1.5">
<button className="py-2 bg-surface-container-lowest hover:bg-surface-bright text-on-surface rounded-lg font-label-sm text-label-sm shadow-sm flex items-center justify-center gap-1 transition-transform active:scale-95">
<span>Send Luganda Alert</span>
</button>
<button className="py-2 bg-surface-container-lowest hover:bg-surface-bright text-on-surface rounded-lg font-label-sm text-label-sm shadow-sm flex items-center justify-center gap-1 transition-transform active:scale-95">
<span>Send English Alert</span>
</button>
</div>
</div>

<div className="bg-surface-container p-3 rounded-xl flex flex-col justify-between gap-2.5">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="assignment_return" className="text-error text-[20px]" />
<span className="font-label-md text-label-md">Merchant Custody Transfer</span>
</div>
<div>
<button className="w-full py-2 bg-error text-on-error rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 flex items-center justify-center gap-1.5 transition-transform active:scale-98">
<Icon name="output" className="text-[16px]" />
<span>Stage for Return (RTO)</span>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-3 pt-2">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block">Immutable Bin Audit Log</span>
<div className="space-y-2 bg-surface-container-low p-3.5 rounded-xl">

<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-primary-container mt-1.5 shrink-0"></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Automated Customer SMS Notification Sent</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:30 EAT</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Delivery OTP/Pickup PIN delivered to +256 701 *** 891 (Airtel Uganda Gateway)</span>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Stowed into Bay B Tier 4 Slot 02</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">09:18 EAT</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Operator: William Ssebaggala • Verified with Honeywell EDA52 Barcode Terminal</span>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Intake Inbound Scanned &amp; Escrow Verified</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">09:15 EAT</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Manifest #MN-48190 from Victoria Tech Rider (Kampala Central Dispatch)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-[0_-4px_20px_rgba(14,27,77,0.06)]"><nav className="w-full max-w-3xl mx-auto px-margin py-space-sm flex items-center justify-between gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg"><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="pickup" href="#"><Icon name="qr_code_scanner" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Pickup</span></a><a aria-current="page" className="flex-1 flex flex-col items-center justify-center py-2 px-1 transition-all bg-primary-container text-on-primary-container rounded-xl shadow-[0_4px_14px_rgba(218,55,0,0.30)] font-label-lg" data-path="storage" href="#"><Icon name="inventory_2" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Storage</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="dispatch" href="#"><Icon name="local_shipping" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Dispatch</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="returns" href="#"><Icon name="assignment_return" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">Returns</span></a><a className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-on-surface-variant hover:text-on-surface transition-all" data-path="station-settings" href="#"><Icon name="tune" className="text-[24px]" /><span className="font-label-sm text-label-sm mt-1">More</span></a></nav></footer>
    </div>
  );
};

export default Tablet;
