// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_edit_product_with_ai_studio_tablet_dark/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <aside className="fixed left-0 top-0 bottom-0 w-[72px] bg-container-dark-low z-50 flex flex-col items-center py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.45)]"><div className="h-12 w-12 flex items-center justify-center mb-space-md rounded-xl bg-surface-container-high"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /></div><nav className="flex-1 flex flex-col gap-space-xs items-center w-full px-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]"><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="overview" href="#" title="Overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="dashboard" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="orders" href="#" title="Orders" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="receipt_long" className="text-[24px]" /></a><a aria-current="page" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-primary-container text-on-primary-container font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)]" data-path="products" href="#" title="Products" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="returns-and-disputes" href="#" title="Returns & Disputes" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="wallet" href="#" title="Escrow & Wallet" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[24px]" /></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="analytics" href="#" title="Analytics" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[24px]" /></a></nav><div className="flex flex-col gap-space-xs items-center w-full px-space-xs pt-space-xs"><a className="relative w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="notifications" href="#" title="Notifications" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-airtel-red"></span></a><a className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-container-dark-high hover:text-on-surface transition-all" data-path="settings" href="#" title="Settings" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="settings" className="text-[24px]" /></a></div></aside>
<div className="pl-[72px]"><header className="fixed top-0 left-[72px] right-0 h-16 bg-surface-dark/95 backdrop-blur-xl z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.3)]"><div className="flex items-center gap-space-md min-w-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex items-center gap-space-xs bg-container-dark-low px-space-md py-1.5 rounded-xl"><Icon name="store" className="text-primary text-[18px]" /><div className="flex flex-col min-w-0"><span className="font-label-md text-on-surface truncate">Victoria Tech Supplies</span><span className="font-label-sm text-on-surface-variant truncate">Nakasero Bay Hub #UG-8820</span></div><Icon name="expand_more" className="text-on-surface-variant text-[18px] ml-space-xs" /></div></div><div className="flex items-center gap-space-md"><div className="flex items-center bg-container-dark-low px-space-md py-1.5 rounded-xl w-56"><Icon name="search" className="text-on-surface-variant text-[18px] mr-space-xs" /><span className="font-body-sm text-on-surface-variant select-none">Search orders, SKUs...</span></div><button className="w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-xl bg-container-dark-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-airtel-red text-on-primary-container font-label-sm flex items-center justify-center px-1">4</span></button><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-on-primary">VT</div></div></div></header><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="flex items-center justify-between px-gutter-desktop py-space-xs bg-amber-warning text-container-dark-low">
<div className="flex items-center gap-space-sm">
<Icon name="cloud_done" className="text-[18px]" />
<span className="font-label-sm uppercase tracking-wider">Local Cache Active • Nakasero Bay Edge Node #UG-8820</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm font-bold">2.4MB / 12MB Sync Queue</span>
<span className="inline-block w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
</div>
</div>

<div className="px-gutter-desktop py-space-lg bg-surface-container-low shadow-md">
<div className="flex flex-col gap-space-md md:flex-row md:items-center md:justify-between">
<div className="flex flex-col gap-space-xs min-w-0">

<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm">
<span>Products</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Edit Product</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-semibold truncate">SoundCore Space One ANC</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<h1 className="font-headline-md text-on-surface tracking-tight">SoundCore Space One ANC</h1>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm">
<Icon name="verified" className="text-[14px]" />
<span>Live in Store • Nakasero Bay</span>
</div>
<span className="font-body-sm text-on-surface-variant">• Last updated Today, 11:42 AM EAT</span>
</div>
</div>

<div className="flex items-center gap-space-sm self-start md:self-auto">
<button className="h-10 px-space-md rounded-xl bg-container-dark-high text-on-surface font-label-md flex items-center gap-space-xs hover:bg-surface-bright transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[18px]" />
<span>Preview in Buyer App</span>
</button>
<button className="h-10 px-space-md rounded-xl bg-surface-container-highest/60 text-on-surface-variant font-label-md hover:text-danger-penalty hover:bg-danger-penalty/10 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          Discard
        </button>
<button className="h-10 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center gap-space-xs active:scale-95 transition-transform" id="save-publish-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[20px]" />
<span>Save &amp; Publish Changes</span>
</button>
</div>
</div>
</div>

<div className="px-gutter-desktop py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-7 flex flex-col gap-space-xl">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="feed" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-on-surface">Basic Information</h2>
</div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Catalog Spec</span>
</div>
<div className="flex flex-col gap-space-md">
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5" htmlFor="prod-title">Product Title</label>
<div className="relative">
<input className="w-full bg-container-dark-low text-on-surface font-body-lg rounded-xl px-space-md py-3 focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="prod-title" type="text" value="SoundCore Space One ANC Wireless Over-Ear Headphones" />
<button className="absolute right-3 top-3 text-primary hover:text-action-gradient-start" title="Revert to Original" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="history" className="text-[18px]" />
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">Brand Identity</label>
<div className="flex items-center justify-between bg-container-dark-low px-space-md py-3 rounded-xl shadow-inner">
<div className="flex items-center gap-space-xs">
<span className="font-body-lg text-on-surface font-semibold">SoundCore</span>
<Icon name="verified" className="text-emerald-escrow text-[16px]" />
</div>
<span className="font-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">Verified Distro</span>
</div>
</div>
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">Category Tree</label>
<div className="flex items-center justify-between bg-container-dark-low px-space-md py-3 rounded-xl shadow-inner">
<span className="font-body-sm text-on-surface truncate">Electronics &gt; Audio &gt; Headphones</span>
<Icon name="tune" className="text-on-surface-variant text-[18px]" />
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="payments" className="text-emerald-escrow text-[20px]" />
<h2 className="font-headline-sm text-on-surface">Pricing &amp; Escrow Economics</h2>
</div>
<div className="flex items-center gap-1 text-emerald-escrow font-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>UG Escrow Protected</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">

<div className="bg-container-dark-low p-space-md rounded-xl">
<span className="font-label-sm text-on-surface-variant block mb-1">Standard SRP</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-on-surface-variant">UGX</span>
<span className="font-price-display text-on-surface">310,000</span>
</div>
<span className="font-label-sm text-on-surface-variant line-through mt-1 block">Uganda Retail Baseline</span>
</div>

<div className="bg-container-dark-low p-space-md rounded-xl ring-1 ring-primary/40 relative">
<span className="font-label-sm text-primary block mb-1 font-bold">Active Sale Price</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-primary">UGX</span>
<input className="w-full bg-transparent font-price-display text-on-primary-container font-extrabold focus:outline-none" type="text" value="248,500" />
</div>
<span className="font-label-sm text-emerald-escrow mt-1 flex items-center gap-0.5 font-bold">
<Icon name="trending_down" className="text-[12px]" />
                19.8% Off SRP
              </span>
</div>

<div className="bg-container-dark-low p-space-md rounded-xl">
<span className="font-label-sm text-on-surface-variant block mb-1">Cost Basis (COGS)</span>
<div className="flex items-baseline gap-1">
<span className="font-label-sm text-on-surface-variant">UGX</span>
<span className="font-price-display text-on-surface-variant">195,000</span>
</div>
<span className="font-label-sm text-on-surface-variant mt-1 block">Direct Import Ledger</span>
</div>
</div>

<div className="mt-space-md bg-container-dark-high p-space-md rounded-xl flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="account_balance_wallet" className="text-[22px]" />
</div>
<div>
<span className="font-body-sm text-on-surface-variant block">Estimated Payout Per Unit Sold</span>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-on-surface font-extrabold">UGX 239,802</span>
<span className="font-label-sm text-emerald-escrow bg-emerald-escrow/10 px-2 py-0.5 rounded font-bold">+21.3% Net Margin</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-on-surface-variant block">SwiftCart Fee: 3.5% (UGX 8,698)</span>
<span className="font-label-sm text-on-surface-variant">Tax Stamp (URA EFRIS): Compliant</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-on-surface">Inventory &amp; Boda Fulfillment</h2>
</div>
<span className="px-2.5 py-1 rounded-full bg-action-gradient-start/15 text-action-gradient-start font-label-sm font-bold flex items-center gap-1">
<Icon name="electric_moped" className="text-[14px]" />
              Express Node Active
            </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">SKU Designation</label>
<div className="bg-container-dark-low px-space-md py-2.5 rounded-xl flex items-center justify-between shadow-inner">
<span className="font-code-display text-on-surface tracking-wider">SC-SPO1-BLK</span>
<button className="text-on-surface-variant hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
</div>
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">GS1 Barcode / EAN</label>
<div className="bg-container-dark-low px-space-md py-2.5 rounded-xl flex items-center justify-between shadow-inner">
<span className="font-code-display text-on-surface tracking-wider">0840045102941</span>
<Icon name="barcode_scanner" className="text-primary text-[18px]" />
</div>
</div>
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">Available Stock Units</label>
<div className="flex items-center gap-space-xs">
<div className="flex-1 bg-container-dark-low px-space-md py-2.5 rounded-xl flex items-center justify-between shadow-inner">
<span className="font-headline-sm text-on-surface font-extrabold">24</span>
<span className="font-label-sm text-emerald-escrow font-bold">In Staging</span>
</div>
<button className="w-10 h-10 rounded-xl bg-container-dark-high flex items-center justify-center text-on-surface hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[20px]" />
</button>
</div>
</div>
<div>
<label className="block font-label-md text-on-surface-variant mb-1.5">Physical Hub Location</label>
<div className="bg-container-dark-low px-space-md py-2.5 rounded-xl flex items-center gap-space-xs shadow-inner">
<Icon name="warehouse" className="text-on-surface-variant text-[18px]" />
<span className="font-body-md text-on-surface font-semibold truncate">Nakasero Shelf B4 • Bin 12</span>
</div>
</div>
</div>

<div className="mt-space-md bg-container-dark-high p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-start gap-space-md min-w-0 pr-space-md">
<div className="p-2 rounded-xl bg-primary-container text-on-primary-container mt-0.5">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div>
<span className="font-label-lg text-on-surface block">Fast Boda Express Dispatch (45-Min SLA)</span>
<span className="font-body-sm text-on-surface-variant">Automated driver matching from Nakasero, Pioneer Mall, and Kamu Kamu plazas upon buyer checkout.</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-action-gradient-start"></div>
</label>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="notes" className="text-secondary text-[20px]" />
<h2 className="font-headline-sm text-on-surface">Product Description &amp; Warranty</h2>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-2 py-1 bg-container-dark-high rounded-lg text-on-surface-variant text-[16px] hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="format_bold" />
</button>
<button className="px-2 py-1 bg-container-dark-high rounded-lg text-on-surface-variant text-[16px] hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="format_list_bulleted" />
</button>
<button className="px-2 py-1 bg-container-dark-high rounded-lg text-on-surface-variant text-[16px] hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="format_underlined" />
</button>
</div>
</div>
<div className="w-full bg-container-dark-low rounded-xl p-space-md text-on-surface font-body-md leading-relaxed min-h-[140px] focus:outline-none shadow-inner" contentEditable={true}>
            Experience next-level acoustic isolation engineered specifically for vibrant commuter journeys across Kampala. Featuring 98.5% Active Noise Reduction tailored to cancel harsh boda road sounds, heavy commercial traffic along Jinja Road, and open-market ambient frequencies. Built with LDAC High-Resolution wireless architecture delivering 3X more audio detail.
            <br /><br />
            • 40 Hours playtime in ANC mode / 55 Hours in Normal mode<br />
            • Ultra-soft adaptive memory protein ear cups suited for high tropical humidity<br />
            • 5-minute fast USB-C charge yields 4 hours continuous playback<br />
            • 12-Month Official SoundCore Uganda Replacement Warranty supported at our Nakasero Bay Service Hub.
          </div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-xl">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="photo_library" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-on-surface">Media Gallery</h2>
</div>
<span className="font-label-sm text-on-surface-variant">4 of 8 Slots Used</span>
</div>

<div className="grid grid-cols-2 gap-space-md">

<div className="relative group rounded-xl overflow-hidden aspect-square bg-container-dark-high shadow-md">
<img className="w-full h-full object-cover" data-alt="A pristine high-resolution commercial studio photograph of matte black SoundCore Space One over-ear headphones floating against a seamless deep slate background with sharp edge lighting and warm orange back-reflections." src={`${assetBase}/images/b2e6c0a6f44755ef.webp`} />
<div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-action-gradient-start text-on-primary-container font-label-sm font-bold flex items-center gap-1 shadow-md">
<Icon name="star" className="text-[12px]" />
                Hero Active
              </div>
<div className="absolute inset-0 bg-container-dark-low/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-space-sm transition-opacity">
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="crop" className="text-[16px]" /></button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="delete" className="text-[16px]" /></button>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-container-dark-high shadow-md">
<img className="w-full h-full object-cover" data-alt="Close up macro studio detail photograph of the SoundCore Space One headphone ear cup showcasing textured acoustic fabric, ANC microphones, and polished aluminum hinges with soft dramatic side illumination." src={`${assetBase}/images/421cfa671db6d79f.webp`} />
<div className="absolute inset-0 bg-container-dark-low/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-space-sm transition-opacity">
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="crop" className="text-[16px]" /></button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="delete" className="text-[16px]" /></button>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-container-dark-high shadow-md">
<img className="w-full h-full object-cover" data-alt="Product packaging flatlay photograph showing SoundCore Space One retail packaging box, travel pouch, 3.5mm aux audio cable, and braided black USB-C fast charging cord on a dark granite surface." src={`${assetBase}/images/e490e95f9b13dda6.webp`} />
<div className="absolute inset-0 bg-container-dark-low/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-space-sm transition-opacity">
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="crop" className="text-[16px]" /></button>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-bright" type="button" onClick={() => alertToast('Action triggered')}><Icon name="delete" className="text-[16px]" /></button>
</div>
</div>

<div className="rounded-xl aspect-square bg-container-dark-low hover:bg-container-dark-high flex flex-col items-center justify-center cursor-pointer transition-colors p-space-md text-center group">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-space-xs">
<Icon name="add_a_photo" className="text-[20px]" />
</div>
<span className="font-label-md text-on-surface font-bold">Add Photo</span>
<span className="font-body-sm text-on-surface-variant">JPG, PNG up to 10MB</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-lg relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-space-lg relative z-10">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-action-gradient-start to-action-gradient-end flex items-center justify-center text-on-primary-container shadow-md">
<Icon name="auto_awesome" className="text-[16px]" />
</div>
<h2 className="font-headline-sm text-on-surface">AI Commerce Studio</h2>
</div>
<span className="font-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Kampala v2.4</span>
</div>
<div className="flex flex-col gap-space-lg relative z-10">

<div className="bg-container-dark-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="magic_button" className="text-[16px] text-tertiary" />
                  Studio Light &amp; Isolation
                </span>
<span className="font-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
                  Applied
                </span>
</div>
<p className="font-body-sm text-on-surface-variant mb-space-sm">Dust removal, true-black isolation, and warm daylight rim flare tuned for Ugandan buyer feeds.</p>
<button className="w-full py-2 px-space-md rounded-lg bg-surface-container-high text-on-surface font-label-sm hover:bg-surface-bright flex items-center justify-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
<span>Adjust Studio Shadow Parameters</span>
</button>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="trending_up" className="text-[16px] text-action-gradient-start" />
                  Title &amp; Search Rank (Kampala)
                </span>
<span className="font-label-sm bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold">+14% CTR Boost</span>
</div>
<div className="bg-container-dark-high p-space-sm rounded-lg mb-space-sm">
<span className="font-label-sm text-on-surface-variant block mb-1">Recommended Optimization:</span>
<p className="font-body-sm text-on-surface font-semibold" id="ai-suggestion-text">"SoundCore Space One ANC Headphones - SafeBoda 45-Min Fast Delivery Kampala"</p>
</div>
<button className="w-full py-2.5 px-space-md rounded-lg bg-primary-container text-on-primary-container font-label-md hover:opacity-90 flex items-center justify-center gap-space-xs shadow-sm transition-opacity" id="apply-ai-title" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="touch_app" className="text-[16px]" />
<span>Apply Title to Product</span>
</button>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="psychology" className="text-[16px] text-secondary" />
                  AI Description Composer
                </span>
</div>
<label className="block font-label-sm text-on-surface-variant mb-1">Localization Persona</label>
<div className="grid grid-cols-3 gap-1.5 mb-space-sm">
<button className="tone-btn active py-1.5 px-2 rounded bg-container-dark-high text-primary font-label-sm font-bold text-center" type="button" onClick={() => alertToast('Action triggered')}>Kampala Commute</button>
<button className="tone-btn py-1.5 px-2 rounded bg-container-dark-high text-on-surface-variant font-label-sm text-center hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>Audiophile Spec</button>
<button className="tone-btn py-1.5 px-2 rounded bg-container-dark-high text-on-surface-variant font-label-sm text-center hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>Executive Focus</button>
</div>
<button className="w-full py-2 px-space-md rounded-lg bg-surface-container-high text-on-surface font-label-sm hover:bg-surface-bright flex items-center justify-center gap-space-xs transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="smart_toy" className="text-[16px]" />
<span>Regenerate Ugandan Market Pitch</span>
</button>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-on-surface font-bold flex items-center gap-1.5">
<Icon name="analytics" className="text-[16px] text-mtn-yellow" />
                  Kampala Price Telematics
                </span>
<span className="font-label-sm text-emerald-escrow font-bold">Top Seller Tier</span>
</div>
<div className="flex items-center justify-between text-on-surface font-body-sm py-1">
<span className="text-on-surface-variant">Regional Market Mean:</span>
<span className="font-bold">UGX 255,000</span>
</div>
<div className="flex items-center justify-between text-on-surface font-body-sm py-1">
<span className="text-on-surface-variant">Your Active Price:</span>
<span className="text-emerald-escrow font-bold">UGX 248,500</span>
</div>

<div className="w-full bg-container-dark-high h-2 rounded-full mt-2 relative overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full w-[65%]"></div>
</div>
<div className="flex justify-between font-label-sm text-on-surface-variant mt-1.5">
<span>UGX 220,000 (Low)</span>
<span className="text-emerald-escrow font-bold">Sweet Spot</span>
<span>UGX 310,000 (SRP)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 z-30 px-gutter-desktop py-space-md bg-container-dark-low/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-escrow"></span>
</span>
<div className="flex flex-col">
<span className="font-label-md text-on-surface">Store Node: Nakasero Central (Connected 5G/Fiber)</span>
<span className="font-body-sm text-on-surface-variant">All updates synchronize across 14 Boda dispatch hubs in Greater Kampala</span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial h-12 px-space-lg rounded-xl bg-container-dark-high text-on-surface font-label-md hover:bg-surface-bright transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
          Discard Draft
        </button>
<button className="flex-1 sm:flex-initial h-12 px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center justify-center gap-space-xs active:scale-95 transition-transform" id="floating-publish-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[20px]" />
<span>Save Changes</span>
</button>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
