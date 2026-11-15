// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/product_moderation_catalog_review_tablet_dark/code.html
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
      
      <div className="pl-[72px]"><main className="relative pt-16 bg-surface min-h-screen"><div className="w-full p-5 sm:p-6 max-w-[834px] mx-auto"><div className="flex flex-col w-full pb-10">

<div className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface-container-low shadow-sm mb-4">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></div>
<Icon name="bolt" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md text-on-surface">Live Moderation Stream • Uganda Central Cluster (KLA-01)</span>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<Icon name="speed" className="text-[14px]" /> SLA Avg: 4m 12s
      </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">NODE_REV_v4.18</span>
</div>
</div>

<div className="flex flex-col gap-3.5 mb-5">
<div className="flex items-center justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm tracking-widest text-primary uppercase">Catalog Operations</span>
<span className="text-on-surface-variant/40">•</span>
<span className="font-label-sm text-label-sm text-tertiary">Real-Time Ledger</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">Product Moderation Queue</h1>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shadow-sm font-label-md text-label-md" type="button">
<Icon name="history" className="text-[18px] text-primary" />
<span>Batch Log</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-surface-variant transition-colors shadow-sm font-label-md text-label-md" type="button">
<Icon name="tune" className="text-[18px]" />
<span>Rules Matrix</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
<button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md shadow-md shrink-0" type="button">
<Icon name="pending_actions" className="text-[16px]" />
<span>Pending Review</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-dark/30 text-on-primary-container font-label-sm text-label-sm">14</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shrink-0" type="button">
<Icon name="warning" className="text-[16px] text-amber-warning" />
<span>Flagged by AI/Users</span>
<span className="px-1.5 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">6</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shrink-0" type="button">
<Icon name="block" className="text-[16px] text-danger-penalty" />
<span>Rejected</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">24</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shrink-0" type="button">
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" />
<span>Approved Today</span>
<span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm">52</span>
</button>
</div>

<div className="grid grid-cols-12 gap-2.5">
<div className="col-span-8 relative flex items-center">
<Icon name="search" className="absolute left-3.5 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-11 pr-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Search by SKU, Barcode, Brand, or Merchant name..." type="text" value="SC-SP01-BLK" />
</div>
<div className="col-span-4 flex items-center gap-2">
<div className="flex-1 flex items-center justify-between px-3 h-11 rounded-xl bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
<span>Sort: High Risk First</span>
<Icon name="arrow_drop_down" className="text-[18px] text-on-surface" />
</div>
<button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" title="Reload queue" type="button">
<Icon name="refresh" className="text-[20px] text-primary" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-3.5 items-start">

<div className="col-span-5 flex flex-col gap-2.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Queue Manifest (4 Unhandled)</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-mono">SLOT 01-04</span>
</div>

<div className="w-full rounded-2xl bg-surface-container-high shadow-lg p-3.5 relative overflow-hidden transition-all duration-200">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-2 mb-2 pl-1.5">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="price_change" className="text-[13px]" /> AI Price Flag
            </span>
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">SC-SP01-BLK</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 font-mono">2m ago</span>
</div>
<div className="pl-1.5">
<h2 className="font-label-lg text-label-lg text-on-surface line-clamp-1">SoundCore Space One ANC Headphones</h2>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="storefront" className="text-[14px] text-tertiary" />
<span className="truncate">Victoria Tech Supplies</span>
<span className="text-on-surface-variant/40">•</span>
<span className="text-emerald-escrow font-label-sm text-label-sm">Gold Tier</span>
</div>
<div className="mt-2.5 p-2 rounded-xl bg-surface-container-low flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Listing Target</span>
<span className="font-label-lg text-label-lg text-primary font-bold whitespace-nowrap">UGX 248,500</span>
</div>
<div className="mt-2 flex items-start gap-1.5 p-2 rounded-lg bg-amber-warning/10 text-amber-warning">
<Icon name="report_problem" className="text-[15px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm leading-tight">Price 20% below market average - verify distributor authenticity invoice.</p>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors p-3.5 shadow-sm cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="barcode_scanner" className="text-[13px]" /> Duplicate
            </span>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">ORM-PB-20K</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 font-mono">11m ago</span>
</div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface line-clamp-1">Oraimo 20000mAh Power Bank</h2>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="storefront" className="text-[14px]" />
<span className="truncate">Kampala Gadgets Store</span>
</div>
<div className="mt-2.5 p-2 rounded-xl bg-surface-container flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Listing Target</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 65,000</span>
</div>
<div className="mt-2 flex items-start gap-1.5 p-2 rounded-lg bg-danger-penalty/10 text-danger-penalty">
<Icon name="content_copy" className="text-[15px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm leading-tight">Duplicate barcode detected across 3 active vendor listings.</p>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors p-3.5 shadow-sm cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield" className="text-[13px]" /> High Value KYC
            </span>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">IPH15-256G</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 font-mono">24m ago</span>
</div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface line-clamp-1">Apple iPhone 15 Pro Max 256GB</h2>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="storefront" className="text-[14px]" />
<span className="truncate">Downtown Deals UG</span>
</div>
<div className="mt-2.5 p-2 rounded-xl bg-surface-container flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Listing Target</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold whitespace-nowrap">UGX 1,800,000</span>
</div>
<div className="mt-2 flex items-start gap-1.5 p-2 rounded-lg bg-primary-container/10 text-primary">
<Icon name="badge" className="text-[15px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm leading-tight">High value SKU - Merchant KYC tier unverified for tier 3 escrow limit.</p>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors p-3.5 shadow-sm cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-2">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-secondary-container text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="new_releases" className="text-[13px]" /> Brand Intro
            </span>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">ANK-N30-W</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 font-mono">45m ago</span>
</div>
<div>
<h2 className="font-label-lg text-label-lg text-on-surface line-clamp-1">Anker Nano 30W USB-C Charger</h2>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="storefront" className="text-[14px]" />
<span className="truncate">TechCity KLA</span>
</div>
<div className="mt-2.5 p-2 rounded-xl bg-surface-container flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Listing Target</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">UGX 85,000</span>
</div>
<div className="mt-2 flex items-start gap-1.5 p-2 rounded-lg bg-surface-container text-on-surface-variant">
<Icon name="verified" className="text-[15px] shrink-0 mt-0.5 text-secondary" />
<p className="font-label-sm text-label-sm leading-tight">New brand distributor submission requiring certificate validation.</p>
</div>
</div>
</div>
</div>

<div className="col-span-7 flex flex-col gap-3.5">

<div className="rounded-2xl bg-surface-container p-4 shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
<span>Electronics</span>
<span className="text-on-surface-variant/40">/</span>
<span>Audio &amp; Sound</span>
<span className="text-on-surface-variant/40">/</span>
<span className="text-primary font-bold">Headphones</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-mono flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            GS1: 0840045102941
          </span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">SoundCore Space One Active Noise Cancelling Headphones</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Model: A3035Z11 • Color: Jet Black • Universal Dual Bluetooth 5.3</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="verified_user" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface">Victoria Tech Supplies</span>
<span className="px-2 py-0.5 rounded-md bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Gold Verified</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Bay Hub • Dispatch Dock #4 • 1,420 Completed Orders (99.4% Fulfill)</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors font-label-sm text-label-sm flex items-center gap-1" type="button">
<Icon name="open_in_new" className="text-[16px]" /> Profile
          </button>
</div>
</div>

<div className="rounded-2xl bg-surface-container p-4 shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="photo_library" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Media Gallery Verification</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(4 Photos + GS1 Barcode Scan)</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" /> GS1 Verified
          </span>
</div>

<div className="grid grid-cols-4 gap-2">

<div className="relative group rounded-xl overflow-hidden bg-surface-container-low aspect-square">
<img className="w-full h-full object-cover" data-alt="High quality close up studio photograph of SoundCore Space One ANC black headphones on a clean dark slate table surface with ambient low key commercial lighting, displaying texture and foam ear cushions clearly" src="/images/71ffabf092d59fc8.webp" />
<div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<Icon name="zoom_in" className="text-white text-[24px]" />
</div>
<span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-surface-dark/80 text-white font-label-sm text-label-sm">Angle 1</span>
</div>

<div className="relative group rounded-xl overflow-hidden bg-surface-container-low aspect-square">
<img className="w-full h-full object-cover" data-alt="Official packaging retail box shot of Anker SoundCore Space One ANC headphones showing crisp Uganda telecom certification stamps and factory plastic seal wrap under clear photography studio lights" src="/images/4dcdaced2c2a2eb1.webp" />
<div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<Icon name="zoom_in" className="text-white text-[24px]" />
</div>
<span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-surface-dark/80 text-white font-label-sm text-label-sm">Box Seal</span>
</div>

<div className="relative group rounded-xl overflow-hidden bg-surface-container-low aspect-square">
<img className="w-full h-full object-cover" data-alt="Close up macro photo of the underside inner headband laser engraved serial number and model designation of black SoundCore Space One headphones against dark background" src="/images/3d335be86825c36a.webp" />
<div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<Icon name="zoom_in" className="text-white text-[24px]" />
</div>
<span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-surface-dark/80 text-white font-label-sm text-label-sm">Laser SN</span>
</div>

<div className="relative group rounded-xl overflow-hidden bg-surface-container-low aspect-square p-2 flex flex-col items-center justify-between bg-surface-dark">
<div className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary font-mono">EAN-13</span>
<Icon name="verified" className="text-emerald-escrow text-[16px]" />
</div>

<svg className="w-full h-12 text-on-surface" fill="currentColor" viewBox="0 0 100 36">
<rect height="36" width="2" x="2"></rect>
<rect height="36" width="3" x="6"></rect>
<rect height="36" width="1" x="11"></rect>
<rect height="36" width="4" x="14"></rect>
<rect height="36" width="2" x="20"></rect>
<rect height="36" width="3" x="24"></rect>
<rect height="36" width="1" x="30"></rect>
<rect height="36" width="2" x="33"></rect>
<rect height="36" width="4" x="38"></rect>
<rect height="36" width="2" x="44"></rect>
<rect height="36" width="3" x="49"></rect>
<rect height="36" width="1" x="54"></rect>
<rect height="36" width="2" x="58"></rect>
<rect height="36" width="4" x="62"></rect>
<rect height="36" width="2" x="68"></rect>
<rect height="36" width="3" x="73"></rect>
<rect height="36" width="1" x="79"></rect>
<rect height="36" width="3" x="83"></rect>
<rect height="36" width="2" x="88"></rect>
<rect height="36" width="3" x="94"></rect>
</svg>
<span className="font-mono text-on-surface font-label-sm text-label-sm tracking-wider">0840045102941</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container p-4 shadow-md flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="analytics" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Pricing &amp; Legal Compliance Telematics</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">URA EFRIS VERIFIED</span>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Offer</span>
<span className="px-2 py-0.5 rounded-md bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">-19.8%</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-primary font-bold whitespace-nowrap">UGX 248,500</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span>Baseline Kampala SRP:</span>
<span className="line-through text-on-surface-variant/70 whitespace-nowrap">UGX 310,000</span>
</div>
</div>

<div className="w-full h-8 pt-1">
<svg className="w-full h-full overflow-visible text-primary" fill="none" viewBox="0 0 100 24">
<path d="M0 16 L20 18 L40 14 L60 15 L80 10 L100 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<circle className="fill-primary" cx="100" cy="6" r="3"></circle>
</svg>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Tax &amp; Regulatory</span>
<span className="flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[15px]" /> EFRIS PASS
              </span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">URA EFRIS Inv:</span>
<span className="font-mono text-on-surface font-bold">EF-2024-889102-K</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">UNBS PVoC Status:</span>
<span className="text-tertiary font-bold">Certified Clearance</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Escrow Hold Tier:</span>
<span className="text-on-surface">Standard T+2 Release</span>
</div>
</div>
<div className="pt-1 font-label-sm text-label-sm text-on-surface-variant/80 flex items-center gap-1">
<Icon name="lock_clock" className="text-[14px] text-tertiary" /> Platform Escrow protection guaranteed
            </div>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high flex items-start gap-2.5">
<div className="w-6 h-6 rounded-md bg-tertiary-container flex items-center justify-center text-on-tertiary-container shrink-0 mt-0.5">
<Icon name="smart_toy" className="text-[16px]" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-tertiary font-bold">AI Pricing &amp; Compliance Assessment:</span>
<p className="font-body-sm text-body-sm text-on-surface">Valid promotional discount. Merchant has verified official SoundCore distributor invoice <span className="font-mono text-primary font-bold">#INV-9921</span> authenticated through East African import manifests. Risk score: <span className="font-bold text-tertiary">0.08 / 1.0 (Low)</span>.</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container p-4 shadow-md flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Catalog Description &amp; Local Warranty</span>
<span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">12-Month Nakasero Warranty</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
          The SoundCore Space One active noise cancelling headphones reduce ambient noise by up to 98% with an adaptive noise cancellation algorithm. Features 40mm dynamic drivers, Hi-Res wireless audio certification with LDAC support, 55 hours playtime, and voice-enhanced clear calls through 3 targeted microphones.
        </p>
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-primary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Local Warranty Coverage: 12-Month Official Swap &amp; Repair at Victoria Nakasero Service Centre.</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm font-bold">Valid Terms</span>
</div>
</div>

<div className="rounded-2xl bg-surface-container-high p-4 shadow-xl flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="gavel" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">Moderator Resolution Deck</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Logged as Super Admin</span>
</div>
<div className="grid grid-cols-12 gap-2.5">

<div className="col-span-5 flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Rejection Reason</label>
<div className="relative">
<select className="w-full h-10 px-3 pr-8 rounded-xl bg-surface-container text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary shadow-inner">
<option selected={true}>Select cause...</option>
<option>Counterfeit suspicion</option>
<option>Misleading title / specs</option>
<option>Prohibited category</option>
<option>Incorrect pricing anomaly</option>
<option>Incomplete / blurry images</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-2.5 text-on-surface-variant text-[18px] pointer-events-none" />
</div>
</div>

<div className="col-span-7 flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant">Moderator Internal Notes (Audit Trail)</label>
<input className="w-full h-10 px-3 rounded-xl bg-surface-container text-on-surface placeholder:text-on-surface-variant/40 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Invoice #INV-9921 cross-checked with Soundcore KLA depot..." type="text" value="Cross-checked #INV-9921 with Anker KLA distributor. Batch approved." />
</div>
</div>

<div className="grid grid-cols-12 gap-2.5 pt-1">

<button className="col-span-3 h-12 rounded-xl bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty transition-all flex items-center justify-center gap-1.5 font-label-md text-label-md" type="button">
<Icon name="close" className="text-[18px]" />
<span>Reject Product</span>
</button>

<button className="col-span-4 h-12 rounded-xl bg-surface-container hover:bg-surface-variant text-on-surface transition-all flex items-center justify-center gap-1.5 font-label-md text-label-md" type="button">
<Icon name="contact_support" className="text-[18px] text-amber-warning" />
<span>Request Invoice Info</span>
</button>

<button className="col-span-5 h-12 rounded-xl bg-emerald-escrow hover:brightness-110 text-on-tertiary font-label-lg text-label-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-escrow/20" type="button">
<Icon name="verified" className="text-[20px]" />
<span>Approve &amp; Publish</span>
</button>
</div>
</div>
</div>
</div>

</div></div></main></div>
    </div>
  );
};

export default Tablet;
