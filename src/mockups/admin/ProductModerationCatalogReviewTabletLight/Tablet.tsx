// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/product_moderation_catalog_review_tablet_light/code.html
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
      
      <div className="pl-64"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="p-space-lg max-w-7xl mx-auto w-full flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">Catalog Moderation Desk</span>
<span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wide">Live Queue</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-bold text-on-surface">28 Products Pending Verification</span>
<span>•</span>
<span className="inline-flex items-center gap-1 text-primary font-bold">
<Icon name="flag" className="text-[15px]" />
              4 Flagged by AI Vision Guard
            </span>
<span>•</span>
<span className="inline-flex items-center gap-1 text-tertiary font-bold">
<Icon name="timer" className="text-[15px]" />
              SLA Target: &lt;4 Hours (Avg 1h 42m)
            </span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<Icon name="history" className="text-[18px]" />
<span>Queue Log</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-tertiary-container text-on-tertiary-container font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
<Icon name="sync" className="text-[18px]" />
<span>Sync GS1 Portal</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm pt-space-xs">
<div className="md:col-span-4 relative flex items-center">
<Icon name="search" className="absolute left-3 text-on-surface-variant text-[20px]" />
<input className="w-full h-11 pl-10 pr-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#da3700] transition-all" placeholder="Search SKU, UPC/GS1 barcode, or merchant..." type="text" value="SoundCore Space One" />
</div>
<div className="md:col-span-8 flex flex-wrap gap-space-xs items-center justify-start md:justify-end">
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md h-11 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer">
<option>All Categories (Electronics 14)</option>
<option>Health &amp; Beauty (6)</option>
<option>Groceries (5)</option>
<option>Fashion &amp; Apparel (3)</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-3 text-[18px] text-on-surface-variant pointer-events-none" />
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md h-11 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer">
<option>Risk: All Levels</option>
<option selected={true}>AI Flagged &amp; High Risk</option>
<option>Routine New SKU</option>
<option>Cosmetics Chemistry Gate</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-3 text-[18px] text-on-surface-variant pointer-events-none" />
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md h-11 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer">
<option>Merchant: All Enrolled</option>
<option>Victoria Tech Supplies</option>
<option>Gadget Hub Kampala</option>
<option>Kikuubo Express</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-3 text-[18px] text-on-surface-variant pointer-events-none" />
</div>
<button className="h-11 px-3 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-dim transition-colors flex items-center justify-center">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-5 flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Queue Selection</span>
<span className="h-5 w-5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">5</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sorting: Priority (AI Risk First)</span>
</div>

<div className="flex flex-col gap-space-sm" id="moderation-queue">

<article className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_rgba(218,55,0,0.12)] relative overflow-hidden cursor-pointer transition-all ring-2 ring-primary-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex gap-space-md">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="High quality commercial studio photograph of matte black SoundCore Space One wireless headphones resting on a warm wooden pedestal against a neutral soft studio background with subtle soft orange fill light" src="/images/c95cdffff45a20e7.webp" />
<div className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">4 Pics</div>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Active Inspection</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14m ago</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold leading-tight truncate whitespace-nowrap">SoundCore Space One Wireless ANC Headphones</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="store" className="text-[15px] text-tertiary" />
<span>Victoria Tech Supplies (Acacia Mall Gate 2)</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-1.5">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-price-display text-[17px] text-on-surface font-black">248,500</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="smart_toy" className="text-[13px]" />
                    AI Flagged: Serial Check
                  </span>
</div>
</div>
</div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-[0_2px_8px_rgba(14,27,77,0.04)] cursor-pointer transition-all">
<div className="flex gap-space-md">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Apple iPhone 15 Pro Max Natural Titanium flagship smartphone displayed diagonally highlighting its titanium edges and triple camera module against a warm gradient background" src="/images/8f4e8c0d8c759318.webp" />
<div className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">6 Pics</div>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Electronics</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">32m ago</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold leading-tight truncate whitespace-nowrap">Apple iPhone 15 Pro Max 256GB Natural Titanium</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="store" className="text-[15px] text-on-surface-variant" />
<span>Gadget Hub Kampala</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-1.5">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-price-display text-[17px] text-on-surface font-black">4,850,000</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="shield_locked" className="text-[13px]" />
                    High-Value Escrow Gate
                  </span>
</div>
</div>
</div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-[0_2px_8px_rgba(14,27,77,0.04)] cursor-pointer transition-all">
<div className="flex gap-space-md">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Oraimo FreePods 4 true wireless earbuds in green charging case lying open next to earbuds in crisp retail lighting with Ugandan electronics warehouse atmosphere" src="/images/c18f06783600708a.webp" />
<div className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">3 Pics</div>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">Audio Accessories</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h 10m ago</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold leading-tight truncate whitespace-nowrap">Oraimo FreePods 4 TWS Earbuds (Active NC)</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="store" className="text-[15px] text-on-surface-variant" />
<span>Kikuubo Express Wholesale</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-1.5">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-price-display text-[17px] text-on-surface font-black">145,000</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[13px]" />
                    Routine New Listing
                  </span>
</div>
</div>
</div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-[0_2px_8px_rgba(14,27,77,0.04)] cursor-pointer transition-all">
<div className="flex gap-space-md">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Pure organic Ugandan yellow shea butter in a rustic clear amber tub with botanical labels and golden African sunlight lighting up the natural texture" src="/images/0eaf5ffbbeea669d.webp" />
<div className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">5 Pics</div>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm text-tertiary-container font-bold uppercase tracking-wider">Health &amp; Beauty</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h 45m ago</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold leading-tight truncate whitespace-nowrap">Organic Shea Butter 500g Northern Uganda Origin</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="store" className="text-[15px] text-on-surface-variant" />
<span>Pearl Naturals Gulu Co-op</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-1.5">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-price-display text-[17px] text-on-surface font-black">35,000</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="biotech" className="text-[13px]" />
                    Cosmetics UNBS Check
                  </span>
</div>
</div>
</div>
</article>

<article className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low shadow-[0_2px_8px_rgba(14,27,77,0.04)] cursor-pointer transition-all">
<div className="flex gap-space-md">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Samsung Galaxy Watch 6 LTE graphite metal casing on modern charging stand with glowing AMOLED screen in clean technology presentation setting" src="/images/3ec49d31477e6006.webp" />
<div className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">4 Pics</div>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Wearables</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2h 15m ago</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold leading-tight truncate whitespace-nowrap">Samsung Galaxy Watch 6 44mm LTE Edition</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
<Icon name="store" className="text-[15px] text-on-surface-variant" />
<span>Downtown Mobile Tech Pioneer Mall</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-1.5">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-price-display text-[17px] text-on-surface font-black">950,000</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="fingerprint" className="text-[13px]" />
                    Serial Authenticity Audit
                  </span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-lg">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">SKU #SC-UG-90214</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" />
                  Official Brand Dealer
                </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">SoundCore Space One Wireless ANC Headphones</h2>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span>Color: Matte Black</span>
<span>•</span>
<span>Category: Electronics &gt; Personal Audio</span>
<span>•</span>
<span>Submitted Today at 10:14 EAT</span>
</div>
</div>
<div className="flex flex-col items-end bg-surface-container-low p-space-sm rounded-xl min-w-[130px]">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Retail Price</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-primary font-black">248,500</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">4.4% below UG MSRP</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Inspection Imagery (5 Assets)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Click photo to zoom forensics</span>
</div>
<div className="grid grid-cols-5 gap-space-xs">
<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container cursor-pointer shadow-sm">
<img className="w-full h-full object-cover" data-alt="High-resolution direct front view of Anker SoundCore Space One headphones earcups and headband in pristine condition" src="/images/abb996f1410523af.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-black/60 text-[9px] text-white font-bold">Vendor Main</span>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container cursor-pointer shadow-sm">
<img className="w-full h-full object-cover" data-alt="Macro view of genuine retail packaging box with clear barcodes model numbers and Anker certification seals" src="/images/a0b8c7805d50bf14.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-black/60 text-[9px] text-white font-bold">Box Barcode</span>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container cursor-pointer shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close up photograph showing serial number etching on inner ear cup slider of the headphones" src="/images/82832063d9638c27.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-black/60 text-[9px] text-white font-bold">Serial Stamping</span>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container cursor-pointer shadow-sm">
<img className="w-full h-full object-cover" data-alt="Accessories layout photo including USB-C charging cable 3.5mm aux audio cable and waterproof travel pouch" src="/images/64360faebb02a4dd.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-black/60 text-[9px] text-white font-bold">Accessories</span>
</div>
<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container cursor-pointer shadow-sm ring-2 ring-tertiary">
<img className="w-full h-full object-cover" data-alt="AI Studio cleaned promotional cutout hero shot of SoundCore Space One headphones on high-key pure white commercial background" src="/images/28affb695a390375.webp" />
<span className="absolute top-1 right-1 px-1 rounded bg-tertiary text-[9px] text-on-tertiary font-bold flex items-center gap-0.5">
<Icon name="auto_awesome" className="text-[10px]" />
                  AI Studio
                </span>
<span className="absolute bottom-1 left-1 px-1 rounded bg-black/60 text-[9px] text-white font-bold">Market Ready</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
<Icon name="storefront" className="text-[26px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-[16px] text-on-surface font-bold">Victoria Tech Supplies</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kampala Central • Acacia Mall 2nd Floor, Gate 2 Shop 14</span>
</div>
</div>

<div className="flex items-center gap-space-lg w-full md:w-auto justify-between md:justify-end">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Trust Index</span>
<span className="font-headline-sm text-[18px] text-tertiary font-extrabold">98.4%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Completed</span>
<span className="font-headline-sm text-[18px] text-on-surface font-extrabold">420 Units</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Counterfeit Claim</span>
<span className="font-headline-sm text-[18px] text-on-surface font-extrabold">0 Claims</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="security_update_good" className="text-[18px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Swift AI Vision &amp; Compliance Audit</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated deep inspection against authorized East Africa product registries</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Status: Cleared For Approval</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Barcode &amp; Packaging</span>
<Icon name="check_circle" className="text-tertiary text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[15px] text-on-surface font-bold">GS1 Global Matched</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">UPC 0194644143213 linked to Anker Innovations LTD legitimate manifest.</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Forensic Match 99.2%</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Pricing Intelligence</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[15px] text-on-surface font-bold">Fair Market Band</span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">Official UG MSRP: UGX 260,000. Listing price of UGX 248,500 is realistic.</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Variance: -4.4% (Normal Promo)</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">AI Flag Resolution</span>
<Icon name="task_alt" className="text-tertiary text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[15px] text-on-surface font-bold">Serial Cleared</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Batch ID matches Anker Uganda Regional Consignment shipped Nov 2023.</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Flagged Reason Dismissible</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Warranty &amp; Service Terms</span>
<ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<Icon name="check" className="text-[16px] text-tertiary" />
<span><strong>12 Months Official Warranty</strong> serviced at Acacia Mall center.</span>
</li>
<li className="flex items-center gap-2">
<Icon name="check" className="text-[16px] text-tertiary" />
<span>Replacement policy for factory defects within 14 calendar days.</span>
</li>
<li className="flex items-center gap-2">
<Icon name="check" className="text-[16px] text-tertiary" />
<span>Serial number scanned at Kampala Fulfilment Hub prior to courier dispatch.</span>
</li>
</ul>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Settlement &amp; Logistics Rail</span>
<ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<Icon name="bolt" className="text-[16px] text-primary" />
<span><strong>Swift Express Eligible:</strong> Kampala Same-Day Metro Dispatch.</span>
</li>
<li className="flex items-center gap-2">
<Icon name="account_balance_wallet" className="text-[16px] text-secondary" />
<span>MTN MoMo &amp; Airtel Money Escrow held until customer PIN validation.</span>
</li>
<li className="flex items-center gap-2">
<Icon name="inventory_2" className="text-[16px] text-secondary" />
<span>Package weight: 260g • Dimensions: 19 x 16 x 8 cm.</span>
</li>
</ul>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="moderator-note">Internal Moderator Compliance Note</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Signed by: Officer Patricia Namubiru (KLA-8842-SA)</span>
</div>
<textarea className="w-full p-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:outline-none focus:shadow-[0_0_0_2px_#da3700] transition-all resize-none" id="moderator-note" placeholder="Provide reason or conditional approval comment for the merchant audit ledger..." rows={2}>AI serial mismatch flag reviewed and cleared. GS1 barcode validates against Anker East Africa consignment #ANK-UG-882. Packaging intact, genuine serial registered. Verified for Swift Express dispatch.</textarea>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">

<div className="flex items-center gap-space-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-space-md py-3 rounded-xl bg-error-container hover:bg-error/20 text-on-error-container font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5">
<Icon name="gavel" className="text-[18px]" />
<span>Reject &amp; Issue Notice</span>
</button>
<button className="flex-1 sm:flex-initial px-space-md py-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-sm">
<Icon name="edit_note" className="text-[18px]" />
<span>Request Re-shoot</span>
</button>
</div>

<button className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<Icon name="verified_user" className="text-[20px]" />
<span>Approve &amp; Publish to Marketplace</span>
</button>
</div>
</div>
</div>
</section>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
