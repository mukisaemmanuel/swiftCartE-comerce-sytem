// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/product_moderation_catalog_review_swiftcart_desktop_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-72"><main className="relative w-full pt-16 bg-surface-dark px-space-xl py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">
<span className="font-label-sm">Admin Operations</span>
<Icon name="chevron_right" className="text-[12px]" />
<span className="text-primary font-label-sm">Product Moderation</span>
<Icon name="chevron_right" className="text-[12px]" />
<span className="text-on-surface font-label-sm">Queue Inspection Desk</span>
</div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Product Catalog Moderation &amp; Brand Safety Desk</h1>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm uppercase">Active Shift</span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-on-surface-variant">Vision OCR Engine:</span>
<span className="font-label-sm text-tertiary">v4.8 ACTIVE</span>
</div>
<button className="flex items-center gap-space-xs px-3 py-1.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-sm">
<Icon name="refresh" className="text-[16px]" />
<span>Refresh Queue</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Pending Review Queue</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface">8</span>
<span className="font-label-md text-label-md text-on-surface-variant">Products</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed/60 flex items-center justify-center text-primary">
<Icon name="pending_actions" className="text-[20px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-primary font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 3 High Priority Strikes
        </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Requires Senior Sig</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Auto-Approved Today</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-tertiary">142</span>
<span className="font-label-md text-label-md text-tertiary">+18% vs avg</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
<Icon name="smart_toy" className="text-[20px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-space-xs">
<Icon name="check_circle" className="text-tertiary text-[14px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">AI Vision &amp; OCR Guardrail clearance</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Flagged Counterfeits</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-error">3</span>
<span className="font-label-md text-label-md text-error">Active Strikes</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/60 flex items-center justify-center text-error">
<Icon name="gavel" className="text-[20px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Brand Registry Violations</span>
<span className="font-label-sm text-error font-bold">2 Sellers frozen</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Avg Moderation SLA</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-secondary">18m</span>
<span className="font-label-md text-label-md text-tertiary">Target &lt; 2h</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<Icon name="timer" className="text-[20px]" />
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-space-xs">
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-1.5 rounded-full" style={{"width":"15%"}}></div>
</div>
<span className="font-label-sm text-on-surface-variant text-[11px] whitespace-nowrap">85% under buffer</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Review Worklist</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm">8 Pending</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-2.5 py-1 text-label-sm font-label-sm rounded-lg bg-surface-container-high text-on-surface">Urgent First</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface"><Icon name="filter_list" className="text-[18px]" /></button>
</div>
</div>

<div className="flex flex-col gap-space-sm" id="queueList">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all relative overflow-hidden cursor-pointer">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex items-start gap-space-md pl-1">
<div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Modern jet black over-ear wireless headphones with noise cancelling earcups displayed on a crisp white tabletop with studio lighting and minimalist aesthetic" src="/images/db3ba7e166a71052.webp" />
<span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-surface-container-lowest/90 font-label-sm text-[9px] text-primary font-bold">HIGH</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-error uppercase tracking-wider font-bold">Brand Risk Alert</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">4m ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate font-bold whitespace-nowrap">SoundCore Space One ANC (Jet Black)</h3>
<div className="flex items-center gap-space-sm mt-1">
<span className="font-price-display text-price-display text-primary leading-none whitespace-nowrap">UGX 180,000</span>
<span className="font-body-sm text-body-sm line-through text-on-surface-variant">342,000</span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low/60 px-2 py-1 rounded-lg">
<div className="flex items-center gap-1.5 truncate">
<Icon name="store" className="text-[14px] text-on-surface-variant" />
<span className="font-label-sm text-on-surface truncate">Kampala Phone Hub</span>
</div>
<span className="font-label-sm text-error font-bold px-1.5 py-0.5 rounded bg-error-container/40">-47% Discrepancy</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Massive slim bezel 65 inch 4K Ultra HD smart television standing on a minimal wooden credenza against a warm sunlit interior wall" src="/images/b9dc29482675cd26.webp" />
<span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-secondary-container/90 font-label-sm text-[9px] text-on-secondary-container font-bold">ESCROW</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-secondary uppercase tracking-wider font-bold">High Value Escrow</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14m ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate whitespace-nowrap">Samsung 65-inch Crystal UHD 4K Smart TV</h3>
<div className="flex items-center gap-space-sm mt-1">
<span className="font-price-display text-price-display text-on-surface leading-none whitespace-nowrap">UGX 1,950,000</span>
<span className="font-label-sm text-tertiary bg-tertiary-fixed/30 px-1 rounded">Stock: 2 Units</span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low/60 px-2 py-1 rounded-lg">
<div className="flex items-center gap-1.5 truncate">
<Icon name="verified" className="text-[14px] text-on-surface-variant" />
<span className="font-label-sm text-on-surface truncate">Victoria Tech Stores</span>
</div>
<span className="font-label-sm text-secondary font-bold">Tier 1 Merchant</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Classic pristine white leather streetwear sneakers angled shot with clean laces on a neutral podium background" src="/images/0904321ebc51367d.webp" />
<span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-error-container/90 font-label-sm text-[9px] text-error font-bold">AUDIT</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-error uppercase tracking-wider font-bold">Potential Replica</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">29m ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate whitespace-nowrap">Nike Air Force 1 '07 All White</h3>
<div className="flex items-center gap-space-sm mt-1">
<span className="font-price-display text-price-display text-on-surface leading-none whitespace-nowrap">UGX 120,000</span>
<span className="font-label-sm text-error bg-error-container/40 px-1 rounded">No Cert</span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low/60 px-2 py-1 rounded-lg">
<div className="flex items-center gap-1.5 truncate">
<Icon name="store" className="text-[14px] text-on-surface-variant" />
<span className="font-label-sm text-on-surface truncate">Kikuubo Sneaker Shop</span>
</div>
<span className="font-label-sm text-on-surface-variant">Informal Vendor</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="High capacity textured black portable power bank with digital LED battery percentage display and dual orange USB ports" src="/images/792faebe363c35ff.webp" />
<span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-tertiary-fixed/90 font-label-sm text-[9px] text-tertiary font-bold">PASS</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-tertiary uppercase tracking-wider font-bold">Clean AI Scan</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">36m ago</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate whitespace-nowrap">Oraimo 20000mAh PowerBank Toast 10 Byte</h3>
<div className="flex items-center gap-space-sm mt-1">
<span className="font-price-display text-price-display text-on-surface leading-none whitespace-nowrap">UGX 75,000</span>
<span className="font-label-sm text-tertiary">MSRP Verified</span>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low/60 px-2 py-1 rounded-lg">
<div className="flex items-center gap-1.5 truncate">
<Icon name="store" className="text-[14px] text-on-surface-variant" />
<span className="font-label-sm text-on-surface truncate">GadgetPoint</span>
</div>
<span className="font-label-sm text-on-surface-variant">Pending Sign-off</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<Icon name="rule" className="text-[18px]" />
<span className="font-body-sm text-body-sm">4 items remaining in primary cohort</span>
</div>
<button className="font-label-sm text-primary hover:underline">Auto-Filter Batch</button>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-space-xs mb-2">
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm uppercase">Audit Flag: §12 Brand Safety</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm">Electronics &gt; Audio &gt; Headphones</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm font-mono">SKU: KPH-SP1-BLK</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">SoundCore Space One Active Noise Cancelling Headphones</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Submitted 4 minutes ago via Kampala Central Seller Web Console</p>
</div>
<div className="flex md:flex-col items-end justify-between bg-surface-container-low p-space-md rounded-xl min-w-[200px]">
<span className="font-label-sm text-on-surface-variant">Declared Asking Price</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-primary font-extrabold">180,000</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant text-[11px] font-body-sm">
<span>Official MSRP:</span>
<span className="font-bold text-on-surface whitespace-nowrap">UGX 342,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md pt-space-md bg-surface-container-lowest">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-on-surface-variant block">Declared Stock</span>
<span className="font-label-lg text-label-lg text-on-surface">15 Units</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-on-surface-variant block">Physical Location</span>
<span className="font-label-lg text-label-lg text-on-surface truncate">Downtown Hub</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-on-surface-variant block">Dispatch Mode</span>
<span className="font-label-lg text-label-lg text-primary">Swift Express</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-on-surface-variant block">Inspection Mandate</span>
<span className="font-label-lg text-label-lg text-error">Physical Hold</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-fixed/80 flex items-center justify-center text-primary">
<Icon name="policy" className="text-[18px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">AI Vision &amp; Trademark Forensics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated deep learning model confidence: 94.2%</p>
</div>
</div>
<span className="px-2 py-1 rounded bg-error-container text-on-error-container font-label-sm font-bold uppercase tracking-wider">High Risk Match</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">

<div className="relative rounded-xl overflow-hidden bg-surface-container">
<img className="w-full h-36 object-cover" data-alt="Detailed packaging box of Soundcore headphones showing blurred hologram area and matte finish in warehouse ambient lighting" src="/images/2d20e5958a24bd07.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-on-surface">
<span className="font-label-sm text-[10px] bg-error px-1 rounded text-on-error">Hologram Missing</span>
<span className="font-label-sm text-[10px] text-surface-cream">Submitted Photo #1</span>
</div>
</div>

<div className="relative rounded-xl overflow-hidden bg-surface-container">
<img className="w-full h-36 object-cover" data-alt="Macro close up of headphone headband logo with minor typography kerning flaws and slightly misaligned branding font" src="/images/addbff8fe931d522.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-on-surface">
<span className="font-label-sm text-[10px] bg-error px-1 rounded text-on-error">Logo Font Offset</span>
<span className="font-label-sm text-[10px] text-surface-cream">Submitted Photo #2</span>
</div>
</div>

<div className="relative rounded-xl overflow-hidden bg-surface-container">
<img className="w-full h-36 object-cover" data-alt="Official Soundcore Space One retail package with rainbow iridescent security tamper seal and authentic serial label clearly in focus" src="/images/6cdfbf64ad21a597.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-on-surface">
<span className="font-label-sm text-[10px] bg-tertiary px-1 rounded text-on-tertiary">Authorized Sample</span>
<span className="font-label-sm text-[10px] text-surface-cream">SoundCore UG Reference</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
<Icon name="verified_user" className="text-error mt-0.5" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Exclusive Brand Protection Violation</span>
<span className="font-label-sm text-error font-bold">Direct Conflict</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                SoundCore™ &amp; Anker™ trademarks detected in submitted photography. Official local partner <strong className="text-on-surface">SoundCore Uganda Official</strong> holds exclusive digital distribution rights on SwiftCart Uganda under registry agreement <span className="font-mono text-[11px]">#ANK-UG-8821</span>.
              </p>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
<Icon name="trending_down" className="text-primary mt-0.5" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Abnormal Price Dispersion Alert</span>
<span className="font-label-sm text-primary font-bold">-47.4% Deviation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 whitespace-nowrap">
                Asking price UGX 180,000 is severely below the regional minimum allowable threshold of UGX 290,000. High probability indicator of non-OEM clone, stolen consignment, or grey-market import without local warranty backing.
              </p>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">
<Icon name="blur_on" className="text-secondary mt-0.5" />
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Image Origin Forensics</span>
<span className="font-label-sm text-secondary font-bold">Cluster Match</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                EXIF and reverse neural hash matches 14 previously flagged listings originated from Pioneer Mall cell market batches. Packaging lacks mandatory Uganda UNBS quality verification stamp.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold">
              KH
            </div>
<div>
<div className="flex items-center gap-space-xs">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Kampala Phone Hub</h4>
<span className="font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">Tier 2 Seller</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant ID: <span className="font-mono text-[11px]">UG-MER-44019</span> • Joined August 2023</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-on-surface-variant block">Merchant Trust Index</span>
<span className="font-price-display text-price-display text-primary font-bold">88.2%</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Completed Orders</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">412 Deliveries</span>
<span className="font-label-sm text-tertiary">98.1% Fulfill Rate</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Dispute History</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">1 Dispute Filed</span>
<span className="font-label-sm text-on-surface-variant">Escrow resolved in 24h</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Hub Inbound Gate</span>
<span className="font-label-lg text-label-lg text-primary font-bold">Mandatory Inspection</span>
<span className="font-label-sm text-on-surface-variant">Hold release active</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-lg relative overflow-hidden">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="gavel" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Moderator Enforcement Decision Deck</h3>
</div>
<span className="font-label-sm text-on-surface-variant">Logged as: <strong className="text-on-surface">Kizito Ronald (Lead Mod)</strong></span>
</div>

<div className="mb-space-md">
<label className="font-label-md text-label-md text-on-surface block mb-1.5 font-bold">Primary Infraction / Rejection Category</label>
<div className="relative">
<select className="w-full h-12 bg-surface text-on-surface font-body-md text-body-md px-space-md rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-container appearance-none cursor-pointer">
<option selected={true} value="brand">Unauthorized Brand Reseller (Exclusive Distributor Exists: SoundCore UG)</option>
<option value="counterfeit">Suspected Counterfeit / Replica / Grey Market Goods</option>
<option value="price">Unrealistic Price Anomaly / Bait-and-Switch Risk</option>
<option value="specs">Inaccurate or Misleading Technical Specifications</option>
<option value="image">Low Quality / Stock-Stolen / Unverified Photos</option>
<option value="prohibited">Prohibited or Restricted Item in Region</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
</div>
</div>

<div className="mb-space-lg">
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-md text-label-md text-on-surface font-bold">Official Feedback Note to Kampala Phone Hub</label>
<span className="font-label-sm text-on-surface-variant">Will trigger instant SMS &amp; Merchant Portal Notice</span>
</div>
<textarea className="w-full bg-surface text-on-surface font-body-md text-body-md p-space-md rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-container leading-relaxed" rows={3}>Listing rejected under SwiftCart Brand Safety Rule §12. Please upload authorized Anker/SoundCore distributor invoice or source documentation to relist.</textarea>
<div className="flex items-center justify-between mt-1 text-[11px] text-on-surface-variant">
<span>Template: Brand Safety Enforcement Rule §12.4</span>
<span>Character count: 146 / 500</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">

<button className="h-12 px-space-md rounded-xl bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-lg transition-all flex items-center justify-center gap-space-xs shadow-sm active:scale-95">
<Icon name="block" className="text-[18px]" />
<span>Reject Listing &amp; Issue Strike</span>
</button>

<button className="h-12 px-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-lg transition-all flex items-center justify-center gap-space-xs active:scale-95">
<Icon name="attachment" className="text-[18px]" />
<span>Request Official Proof of Authenticity</span>
</button>

<button className="h-12 px-space-md rounded-xl bg-secondary text-on-secondary hover:bg-secondary/90 font-label-lg transition-all flex items-center justify-center gap-space-xs shadow-sm active:scale-95">
<Icon name="lock_clock" className="text-[18px]" />
<span>Approve with Mandatory Escrow Hold</span>
</button>

<button className="h-12 px-space-md rounded-xl bg-surface-container text-on-surface-variant/40 font-label-lg cursor-not-allowed flex items-center justify-center gap-space-xs" disabled={true}>
<Icon name="check_circle" className="text-[18px]" />
<span>Approve Unconditionally (Locked)</span>
</button>
</div>

<div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-on-surface-variant text-[11px]">
<span className="flex items-center gap-1">
<Icon name="security" className="text-[13px] text-tertiary" />
            Escrow protection rule enforced on telecom payout rails (MTN MoMo &amp; Airtel Money)
          </span>
<span className="font-mono">REF: MOD-2025-0518</span>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
