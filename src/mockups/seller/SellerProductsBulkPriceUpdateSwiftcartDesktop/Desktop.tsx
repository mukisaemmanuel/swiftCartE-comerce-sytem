// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_products_bulk_price_update_swiftcart_desktop/code.html
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
      
      <div className="pl-0 min-h-screen bg-surface-dark flex flex-col"><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full relative">

<div className="absolute -top-10 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-20 right-10 w-80 h-80 bg-emerald-escrow/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

<div className="flex flex-col gap-space-lg mb-space-xl">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span>Catalog Telematics</span>
<span className="text-surface-container-highest">•</span>
<span className="text-emerald-escrow font-bold">Live Inventory Node: Nakasero</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Products &amp; Inventory Catalog</h1>
<div className="flex flex-wrap items-center gap-space-sm mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md">48 Active SKUs</span>
<span className="text-surface-container-highest">•</span>
<span className="px-2 py-0.5 rounded bg-amber-warning/15 text-amber-warning font-label-md text-label-md font-bold">2 Low Stock</span>
<span className="text-surface-container-highest">•</span>
<span className="text-on-surface font-semibold whitespace-nowrap">UGX 64,250,000 Catalog Valuation</span>
<span className="text-surface-container-highest">•</span>
<span className="text-emerald-escrow flex items-center gap-1"><Icon name="lock" className="text-[14px]" /> UGX 18.4M in Payment</span>
</div>
</div>

<div className="flex items-center flex-wrap gap-space-sm">
<button className="h-11 px-space-md rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button">
<Icon name="file_download" className="text-[18px]" />
<span>Export Inventory</span>
</button>
<button className="h-11 px-space-md rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-md text-label-md flex items-center gap-2 shadow-lg shadow-action-gradient-end/30 ring-2 ring-primary-fixed/30 hover:brightness-110 transition-all" id="trigger-bulk-modal" type="button">
<Icon name="percent" className="text-[18px]" />
<span>Bulk Price Update (3 Selected)</span>
<span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
</button>
<button className="h-11 px-space-md rounded-xl bg-surface-container-highest hover:bg-surface-variant text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all" type="button">
<Icon name="add_box" className="text-[19px] text-action-gradient-start" />
<span>+ Add New Product</span>
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
<div className="flex flex-1 items-center gap-space-md flex-wrap">

<div className="relative flex-1 min-w-[260px]">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full h-10 bg-surface-container-high rounded-lg pl-9 pr-3 text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search by SKU, Product title, or Category..." type="text" value="" />
</div>

<div className="relative min-w-[190px]">
<select className="w-full h-10 appearance-none bg-surface-container-high rounded-lg px-3 pr-8 text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>All Categories (48)</option>
<option>Over-Ear Headphones</option>
<option>True Wireless Earbuds</option>
<option>Fast Chargers</option>
<option>Bluetooth Speakers</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-2.5 text-on-surface-variant text-[18px] pointer-events-none" />
</div>

<div className="relative min-w-[170px]">
<select className="w-full h-10 appearance-none bg-surface-container-high rounded-lg px-3 pr-8 text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer">
<option>All Stock Levels</option>
<option>In Stock (&gt; 5)</option>
<option>Low Stock (&lt; 5)</option>
<option>Out of Stock</option>
</select>
<Icon name="expand_more" className="absolute right-2.5 top-2.5 text-on-surface-variant text-[18px] pointer-events-none" />
</div>
</div>

<div className="flex items-center gap-space-sm self-end lg:self-center">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">3 of 48 items highlighted</span>
<button className="text-action-gradient-start font-label-sm text-label-sm hover:underline" type="button">Clear Filter</button>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-surface-container-lowest overflow-hidden shadow-xl mb-space-xl">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 pl-4 pr-2 w-10">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</th>
<th className="py-3.5 px-3">Product Name &amp; Visual</th>
<th className="py-3.5 px-3">SKU</th>
<th className="py-3.5 px-3">Category</th>
<th className="py-3.5 px-3 text-center">Nakasero Stock</th>
<th className="py-3.5 px-3 text-right">Base Price</th>
<th className="py-3.5 px-3 text-right">Sale Price</th>
<th className="py-3.5 px-3 text-center">Payment / Margin</th>
<th className="py-3.5 pr-4 pl-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/30 font-body-sm text-body-sm">

<tr className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 pl-4 pr-2">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-3">
<img className="w-11 h-11 rounded-lg object-cover bg-surface-container-highest flex-shrink-0" data-alt="SoundCore Space One active noise cancelling headphones in matte midnight blue on a minimalist dark studio pedestal with soft ambient orange and cyan highlights high resolution commercial hardware photography" src="/images/6877d9e21ed0eadc.webp" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC</span>
<span className="font-label-sm text-label-sm text-tertiary">Hi-Res Wireless • 24hr Fast Dispatch</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-display text-[13px] text-on-surface-variant">SND-SP1-BLK</td>
<td className="py-3.5 px-3 text-on-surface-variant">Over-Ear Headphones</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">18 In Stock</span>
</td>
<td className="py-3.5 px-3 text-right text-on-surface-variant line-through whitespace-nowrap">UGX 410,000</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-action-gradient-start font-bold whitespace-nowrap">UGX 380,000</span>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="verified_user" className="text-[13px]" /> 26% Net
              </span>
</td>
<td className="py-3.5 pr-4 pl-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="tune" className="text-[18px]" /></button>
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</td>
</tr>

<tr className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 pl-4 pr-2">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-3">
<img className="w-11 h-11 rounded-lg object-cover bg-surface-container-highest flex-shrink-0" data-alt="Oraimo FreePods 4 True Wireless Earbuds in glossy charging case with illuminated indicator ring against dark textured slate backdrop vibrant commercial gadget photography" src="/images/4a8ec24317151a62.webp" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Oraimo FreePods 4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Bass Pop • Dual Mic ENC</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-display text-[13px] text-on-surface-variant">ORM-FP4-WHT</td>
<td className="py-3.5 px-3 text-on-surface-variant">True Wireless Earbuds</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">42 In Stock</span>
</td>
<td className="py-3.5 px-3 text-right text-on-surface-variant line-through whitespace-nowrap">UGX 130,000</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-action-gradient-start font-bold whitespace-nowrap">UGX 115,000</span>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="verified_user" className="text-[13px]" /> 31% Net
              </span>
</td>
<td className="py-3.5 pr-4 pl-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="tune" className="text-[18px]" /></button>
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</td>
</tr>

<tr className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 pl-4 pr-2">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-3">
<img className="w-11 h-11 rounded-lg object-cover bg-surface-container-highest flex-shrink-0" data-alt="Anker Prime 67W GaN wall charger showing folding prongs and dual USB-C ports on dark metallic high tech surface with warm orange rim lighting ultra crisp product photo" src="/images/fd3671bf836f68fa.webp" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Anker Prime 67W GaN Charger</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Triple Port Fast Charging</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-display text-[13px] text-on-surface-variant">ANK-PRM-67W</td>
<td className="py-3.5 px-3 text-on-surface-variant">Fast Chargers</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">3 Low Stock</span>
</td>
<td className="py-3.5 px-3 text-right text-on-surface-variant line-through whitespace-nowrap">UGX 180,000</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-action-gradient-start font-bold whitespace-nowrap">UGX 165,000</span>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="verified_user" className="text-[13px]" /> 21% Net
              </span>
</td>
<td className="py-3.5 pr-4 pl-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="tune" className="text-[18px]" /></button>
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 pl-4 pr-2">
<input className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-3">
<img className="w-11 h-11 rounded-lg object-cover bg-surface-container-highest flex-shrink-0" data-alt="Sony WH-1000XM5 premium wireless noise cancelling over-ear headphones in silver grey standing proudly on luxury dark acoustic surface with moody studio illumination" src="/images/f6d17866417f05ff.webp" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Sony WH-1000XM5 Flagship</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Auto NC Optimizer • LDAC</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-display text-[13px] text-on-surface-variant">SNY-XM5-SLV</td>
<td className="py-3.5 px-3 text-on-surface-variant">Over-Ear Headphones</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">8 In Stock</span>
</td>
<td className="py-3.5 px-3 text-right text-on-surface-variant whitespace-nowrap">UGX 1,450,000</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 1,390,000</span>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="verified_user" className="text-[13px]" /> 18% Net
              </span>
</td>
<td className="py-3.5 pr-4 pl-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="tune" className="text-[18px]" /></button>
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 pl-4 pr-2">
<input className="w-4 h-4 rounded bg-surface-container-high text-action-gradient-start focus:ring-0 accent-action-gradient-end cursor-pointer" type="checkbox" />
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-3">
<img className="w-11 h-11 rounded-lg object-cover bg-surface-container-highest flex-shrink-0" data-alt="JBL Flip 6 portable waterproof bluetooth speaker in forest green with rugged textured weave and bold metallic logo on wet dark surface with dynamic water droplets splash" src="/images/83daf4741e2da017.webp" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">JBL Flip 6 Waterproof</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">2-Way Speaker System</span>
</div>
</div>
</td>
<td className="py-3.5 px-3 font-code-display text-[13px] text-on-surface-variant">JBL-FLP6-GRN</td>
<td className="py-3.5 px-3 text-on-surface-variant">Bluetooth Speakers</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">1 Low Stock</span>
</td>
<td className="py-3.5 px-3 text-right text-on-surface-variant whitespace-nowrap">UGX 490,000</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 465,000</span>
</td>
<td className="py-3.5 px-3 text-center">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm font-bold bg-emerald-escrow/10 px-2 py-0.5 rounded">
<Icon name="verified_user" className="text-[13px]" /> 24% Net
              </span>
</td>
<td className="py-3.5 pr-4 pl-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="tune" className="text-[18px]" /></button>
<button className="p-1 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface" type="button"><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span>Auto-sync with Jumia &amp; physical Nakasero inventory every 15 min</span>
</div>
<div className="flex items-center gap-space-sm">
<span>Rows per page: 10</span>
<div className="flex items-center gap-1">
<button className="w-7 h-7 rounded bg-surface-container-high flex items-center justify-center text-on-surface" type="button"><Icon name="chevron_left" className="text-[16px]" /></button>
<span className="px-2 font-label-sm text-label-sm font-bold text-on-surface">1 of 5</span>
<button className="w-7 h-7 rounded bg-surface-container-high flex items-center justify-center text-on-surface" type="button"><Icon name="chevron_right" className="text-[16px]" /></button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="bulk-modal">

<div className="fixed inset-0 bg-surface-dark/85 backdrop-blur-md transition-opacity" id="modal-backdrop"></div>

<div className="relative w-full max-w-3xl rounded-3xl bg-surface-container-low shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[942px]">

<div className="h-1.5 w-full bg-gradient-to-r from-action-gradient-start via-amber-warning to-action-gradient-end"></div>

<div className="px-space-xl py-space-md bg-surface-container/60 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-action-gradient-start/15 flex items-center justify-center text-action-gradient-start">
<Icon name="sell" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Bulk Price Update</h2>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">3 Products Selected</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Update active selling prices across SwiftCart Kampala riders &amp; web store</p>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" id="close-modal-btn" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="p-space-xl overflow-y-auto flex flex-col gap-space-lg">

<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Targeted Products in this batch</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">

<div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2.5 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-on-surface-variant">
<Icon name="headphones" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">SoundCore Space One</span>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Now: UGX 380,000</span>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2.5 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-on-surface-variant">
<Icon name="earbuds" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Oraimo FreePods 4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Now: UGX 115,000</span>
</div>
</div>

<div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2.5 shadow-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-on-surface-variant">
<Icon name="bolt" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Anker Prime 67W</span>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Now: UGX 165,000</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Calculation Rule</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">

<button className="p-space-sm rounded-xl bg-surface-container-high text-left flex flex-col gap-1 shadow-sm ring-2 ring-action-gradient-start transition-all" type="button">
<div className="flex items-center justify-between w-full">
<span className="font-label-md text-label-md text-on-surface font-bold">Percentage (%)</span>
<span className="w-3.5 h-3.5 rounded-full bg-action-gradient-start flex items-center justify-center text-white text-[9px] font-bold">✓</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uniform reduction off current sale price</span>
</button>

<button className="p-space-sm rounded-xl bg-surface-container text-left flex flex-col gap-1 hover:bg-surface-container-high transition-all" type="button">
<div className="flex items-center justify-between w-full">
<span className="font-label-md text-label-md text-on-surface font-medium whitespace-nowrap">Flat UGX Reduction</span>
<span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Deduct exact Shillings amount</span>
</button>

<button className="p-space-sm rounded-xl bg-surface-container text-left flex flex-col gap-1 hover:bg-surface-container-high transition-all" type="button">
<div className="flex items-center justify-between w-full">
<span className="font-label-md text-label-md text-on-surface font-medium">Set Exact Price</span>
<span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Apply a fixed price point across all</span>
</button>
</div>

<div className="mt-space-xs p-space-md rounded-2xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<span className="font-label-md text-label-md text-on-surface font-semibold">Discount Value:</span>
<div className="relative w-36">
<input className="w-full h-11 bg-surface-container-high text-on-surface font-headline-sm text-headline-sm font-bold rounded-xl px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-action-gradient-start text-center" id="discount-input" max="90" min="1" type="number" value="10" />
<span className="absolute right-3 top-3 font-label-md text-label-md text-on-surface-variant font-bold">%</span>
</div>
</div>

<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface-variant mr-1">Presets:</span>
<button className="preset-chip px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold" data-val="5" type="button">-5%</button>
<button className="preset-chip px-2.5 py-1 rounded-lg bg-action-gradient-start/20 text-action-gradient-start font-label-sm text-label-sm font-bold ring-1 ring-action-gradient-start/40" data-val="10" type="button">-10%</button>
<button className="preset-chip px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold" data-val="15" type="button">-15%</button>
<button className="preset-chip px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm font-bold" data-val="20" type="button">-20%</button>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Recalculated Price Ledger</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1 font-bold">
<Icon name="shield" className="text-[14px]" /> All items maintain minimum 15% profit guardrail
            </span>
</div>
<div className="rounded-xl bg-surface-container overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm">
<th className="py-2.5 px-3">Item</th>
<th className="py-2.5 px-3 text-right">Current Price</th>
<th className="py-2.5 px-3 text-right">New Price</th>
<th className="py-2.5 px-3 text-right">Buyer Saves</th>
<th className="py-2.5 px-3 text-center">New Net Margin</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/20 font-body-sm text-body-sm">

<tr>
<td className="py-2.5 px-3 font-label-md text-label-md text-on-surface font-semibold">SoundCore Space One ANC</td>
<td className="py-2.5 px-3 text-right text-on-surface-variant whitespace-nowrap">UGX 380,000</td>
<td className="py-2.5 px-3 text-right font-bold text-tertiary whitespace-nowrap">UGX 342,000</td>
<td className="py-2.5 px-3 text-right text-action-gradient-start font-semibold whitespace-nowrap">-UGX 38,000</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">19.4%</span>
</td>
</tr>

<tr>
<td className="py-2.5 px-3 font-label-md text-label-md text-on-surface font-semibold">Oraimo FreePods 4</td>
<td className="py-2.5 px-3 text-right text-on-surface-variant whitespace-nowrap">UGX 115,000</td>
<td className="py-2.5 px-3 text-right font-bold text-tertiary whitespace-nowrap">UGX 103,500</td>
<td className="py-2.5 px-3 text-right text-action-gradient-start font-semibold whitespace-nowrap">-UGX 11,500</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">23.8%</span>
</td>
</tr>

<tr>
<td className="py-2.5 px-3 font-label-md text-label-md text-on-surface font-semibold">Anker Prime 67W GaN</td>
<td className="py-2.5 px-3 text-right text-on-surface-variant whitespace-nowrap">UGX 165,000</td>
<td className="py-2.5 px-3 text-right font-bold text-tertiary whitespace-nowrap">UGX 148,500</td>
<td className="py-2.5 px-3 text-right text-action-gradient-start font-semibold whitespace-nowrap">-UGX 16,500</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">15.2%</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Product Badge Display</label>
<div className="relative">
<input className="w-full h-10 bg-surface-container rounded-xl px-3 text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" type="text" value="Kampala Tech Week Flash Sale" />
<Icon name="local_fire_department" className="absolute right-3 top-2.5 text-action-gradient-start text-[18px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Renders badge directly on SwiftCart rider app and buyer feed</span>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Execution Timing</label>
<div className="h-10 px-3 bg-surface-container rounded-xl flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="bolt" className="text-emerald-escrow text-[18px]" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Apply Immediately</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">Until Sun midnight</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Reverts to previous base price automatically if deadline chosen</span>
</div>
</div>
</div>

<div className="px-space-xl py-space-md bg-surface-container/90 flex flex-col-reverse sm:flex-row items-center justify-between gap-space-sm">
<button className="w-full sm:w-auto h-12 px-space-lg rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors" id="cancel-modal-btn" type="button">
          Cancel &amp; Discard
        </button>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg shadow-action-gradient-end/40 hover:brightness-110 active:scale-95 transition-all" id="confirm-modal-btn" type="button">
<Icon name="check_circle" className="text-[20px]" />
<span>Apply Price Update to 3 Items</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
