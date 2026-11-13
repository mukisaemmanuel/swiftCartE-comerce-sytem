// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_edit_existing_product_swiftcart_desktop_dark/code.html
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
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface z-50 flex flex-col justify-between py-space-md border-r border-surface-container-highest/60 select-none"><div className="flex flex-col gap-space-md"><div className="px-space-md flex items-center justify-between pb-space-sm border-b border-surface-container-highest/40"><div className="flex items-center gap-space-xs"><Icon name="electric_moped" className="text-action-gradient-start text-[20px]" /><span className="font-label-lg text-label-lg tracking-wider text-on-surface uppercase">SwiftCart</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase font-bold tracking-tight">Uganda</span></div><nav className="flex flex-col gap-space-sm px-space-sm overflow-y-auto" data-active-classes="bg-surface-container-high text-on-surface font-label-md font-bold rounded-lg border-l-2 border-action-gradient-start"><div className="px-space-sm pt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Daily Operations</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="dashboard" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shopping_bag" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">14 Pending</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-1.5 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">2 Low</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">6 Active</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Post-Purchase</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="warning" className="text-[19px] text-danger-penalty group-hover:text-error" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">1 Case</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Business &amp; Finance</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">14.8M</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="bar_chart" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_offer" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Settings</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="verified" className="text-emerald-escrow text-[16px]" /></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings-notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Settings</span></div></a></nav></div><div className="px-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-highest/40 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kampala Hub Node</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Direct Escrow Active</span></div></div><Icon name="lock" className="text-on-surface-variant text-[16px]" /></div></div></aside>
<div className="pl-60 min-h-screen bg-surface-dark flex flex-col"><header className="fixed top-0 left-60 right-0 h-16 bg-surface/90 backdrop-blur-md z-40 px-space-xl flex items-center justify-between border-b border-surface-container-highest/60"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="px-2 py-0.5 rounded bg-surface-container-high text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-widest">Seller Portal</span><div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant pl-space-sm border-l border-surface-container-highest/60"><Icon name="verified" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">SoundCore Uganda Official</span><span className="font-label-sm text-label-sm text-on-surface-variant/80">URSB Verified • Nakasero Flagship</span></div></div></div><div className="flex items-center gap-space-lg"><div className="relative hidden md:block w-72"><Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" /><input className="w-full h-10 bg-surface-container-low rounded-lg pl-9 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-highest/50" placeholder="Search SKU, Order ID, Rider..." type="text" /></div><div className="flex items-center gap-space-sm"><div className="flex items-center p-1 rounded-lg bg-surface-container-low border border-surface-container-highest/50"><button className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[15px]" />Dark</button><button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[15px]" />Light</button></div><button className="relative p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors border border-surface-container-highest/50" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-airtel-red ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-sm border-l border-surface-container-highest/60"><div className="relative flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs">KR</div><span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow ring-2 ring-surface"></span></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Store Manager</span></div></div></div></div></header><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full">

<div className="mb-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider font-bold">Ledger Node: Online</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/40">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/90">EFRIS Auto-Fiscalization Server: Connected (Kampala 1-ms ping)</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm">
<span className="text-on-surface-variant/80">Last edited: Today, 14:28 EAT by Kizito Ronald</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-bold tracking-tight">Sync ID: #SND-2024-KLA</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-y-2 mb-space-sm">
<nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Operations</a>
<Icon name="chevron_right" className="text-[14px] text-on-surface-variant/50" />
<a className="hover:text-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products &amp; Inventory</a>
<Icon name="chevron_right" className="text-[14px] text-on-surface-variant/50" />
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-code-display text-label-sm uppercase">SKU: SND-SP1-BLK</span>
<Icon name="chevron_right" className="text-[14px] text-on-surface-variant/50" />
<span className="text-primary font-bold">Edit Product</span>
</nav>
<div className="flex items-center gap-space-xs">
<span className="px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1">
<Icon name="sync" className="text-[14px]" /> Auto-saved to Cloud
      </span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-low p-space-lg rounded-xl shadow-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">SoundCore Space One ANC Wireless</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-md text-label-md font-bold">
<Icon name="verified" className="text-[15px]" /> Active on Storefront
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-action-gradient-start/20 text-action-gradient-start font-label-md text-label-md font-bold">
<Icon name="local_fire_department" className="text-[15px]" /> Kampala Tech Week Flash Deal Active
        </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Master Soundcore High-Resolution Wireless Audio Catalog • Synchronized across Central Uganda Hubs</p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="px-3.5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[17px]" /> View Live Listing
      </button>
<button className="px-3 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[17px]" /> Duplicate
      </button>
<button className="p-2.5 rounded-lg bg-surface-container-high hover:bg-error-container/40 text-on-surface-variant hover:text-error transition-all" title="Archive SKU" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="archive" className="text-[18px]" />
</button>
<button className="h-11 px-5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center gap-2 shadow-lg shadow-action-gradient-end/30 hover:opacity-95 active:scale-[0.98] transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[18px]" /> Save &amp; Push Changes
      </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-start">

<div className="lg:col-span-4 flex flex-col gap-space-lg min-w-0">

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="tune" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Core Attributes</h2>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[13px]" /> Synced: MTN MoMo Mall
          </span>
</div>
<div className="flex flex-col gap-space-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Product Title</label>
<input className="w-full bg-surface-container-high rounded-lg px-space-md py-2 text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-action-gradient-start" type="text" value="SoundCore Space One Active Noise Cancelling Headphones" />
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Brand</label>
<div className="bg-surface-container-high rounded-lg px-space-md py-2 text-on-surface font-body-md text-body-md flex items-center justify-between">
<span>Anker Soundcore</span>
<Icon name="verified" className="text-[16px] text-emerald-escrow" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Parent SKU</label>
<input className="w-full bg-surface-container-high rounded-lg px-space-md py-2 font-code-display text-body-sm text-primary focus:outline-none focus:ring-1 focus:ring-action-gradient-start" type="text" value="SND-SP1-PAREN1" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Category Classification</label>
<div className="bg-surface-container-high rounded-lg px-space-md py-2 text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
<span>Electronics &gt; Audio &gt; Headphones</span>
<Icon name="account_tree" className="text-[16px] text-on-surface-variant" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Global Barcode (EAN-13 / UPC)</label>
<div className="relative">
<Icon name="barcode" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high rounded-lg pl-9 pr-space-md py-2 font-code-display text-body-sm text-on-surface tracking-wider focus:outline-none focus:ring-1 focus:ring-action-gradient-start" type="text" value="194644145927" />
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="translate" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Storefront Copy</h2>
</div>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-action-gradient-start font-label-sm text-label-sm font-bold flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="auto_awesome" className="text-[15px]" /> Regenerate for Uganda Buyers
          </button>
</div>
<div className="flex items-center justify-between bg-surface-container-high/60 px-space-sm py-1.5 rounded-lg">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-bold">
<Icon name="flag" className="text-[14px]" /> Luganda / English Localization Applied
          </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">284 Words</span>
</div>

<div className="bg-surface-container-high rounded-lg p-space-md font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2 leading-relaxed">
<p className="text-on-surface font-medium">Engineered for pure immersion across noisy Kampala streets and silent focus sessions.</p>
<ul className="list-disc list-inside space-y-1 text-on-surface-variant">
<li><span className="text-on-surface font-bold">2X Stronger Voice Reduction</span> via Adaptive ANC algorithm that cancels traffic rumble on Jinja Road.</li>
<li><span className="text-on-surface font-bold">55 Hours Total Playtime</span> (40 Hours with ANC active) – power through full weeks of Kampala commutes on a single Type-C charge.</li>
<li><span className="text-on-surface font-bold">LDAC High-Res Wireless Audio</span> certified with 40mm customized dynamic drivers.</li>
</ul>
</div>

<div className="bg-surface-container p-space-sm rounded-lg flex items-start gap-space-sm">
<Icon name="shield" className="text-action-gradient-start text-[22px] shrink-0" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Official 1-Year Local Replacement</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Honored through Nakasero Gadget Hub, Kampala Central. Merchant ID <span className="font-code-display text-primary font-bold">#UG-NK-992</span>. Direct swap within 48 hours for verified driver defects.</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest">
<div className="pt-0.5">
<Icon name="check_box" className="text-emerald-escrow text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider">URSB &amp; EFRIS VAT REGISTERED SKU</span>
<span className="font-body-sm text-body-sm text-on-surface-variant/90 leading-snug">Automated fiscal e-receipt with genuine QR tax code generated upon buyer payment release into escrow.</span>
</div>
</div>
</section>

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="photo_library" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Verified Gallery Assets (4)</h2>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[15px]" /> Upload New
          </button>
</div>
<div className="grid grid-cols-4 gap-space-sm">

<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square shadow-inner">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling over-ear headphones in sleek matte black finish angled on a dark minimalist concrete pedestal with moody studio edge lighting and warm orange backglow." src={`${assetBase}/images/64b06ca134291121.webp`} />
<span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-action-gradient-start text-on-primary-container font-label-sm text-[9px] font-bold uppercase">Main</span>
<div className="absolute inset-0 bg-surface-dark/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1 transition-opacity">
<Icon name="zoom_in" className="text-on-surface text-[18px] cursor-pointer hover:text-primary" />
<Icon name="delete" className="text-on-surface text-[18px] cursor-pointer hover:text-error" />
</div>
</div>

<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square shadow-inner">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One headphones in soft luxury cream white colorway resting on smooth dark slate background with elegant satin finish reflections." src={`${assetBase}/images/805fa95b220f93ee.webp`} />
<div className="absolute inset-0 bg-surface-dark/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1 transition-opacity">
<Icon name="zoom_in" className="text-on-surface text-[18px] cursor-pointer hover:text-primary" />
<Icon name="delete" className="text-on-surface text-[18px] cursor-pointer hover:text-error" />
</div>
</div>

<div className="relative group rounded-lg overflow-hidden bg-surface-container aspect-square shadow-inner">
<img className="w-full h-full object-cover" data-alt="Close-up macro shot of Soundcore Space One plush memory foam ear cushions and anodized aluminum headband adjustment arm with sharp high-fidelity texture detail." src={`${assetBase}/images/4946db6bb9f67602.webp`} />
<div className="absolute inset-0 bg-surface-dark/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1 transition-opacity">
<Icon name="zoom_in" className="text-on-surface text-[18px] cursor-pointer hover:text-primary" />
<Icon name="delete" className="text-on-surface text-[18px] cursor-pointer hover:text-error" />
</div>
</div>

<button className="rounded-lg bg-surface-container-high/50 hover:bg-surface-container-high flex flex-col items-center justify-center gap-1 aspect-square text-on-surface-variant hover:text-action-gradient-start transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_photo_alternate" className="text-[22px]" />
<span className="font-label-sm text-[10px] uppercase font-bold">+ Add PNG</span>
</button>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg min-w-0">

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<Icon name="layers" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Variant &amp; Warehouse Matrix</h2>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[15px]" /> Add Variant
            </button>
<button className="px-2.5 py-1 rounded bg-action-gradient-start/15 hover:bg-action-gradient-start/25 text-action-gradient-start font-label-sm text-label-sm font-bold flex items-center gap-1 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>
<Icon name="inventory" className="text-[15px]" /> Quick Replenish
            </button>
</div>
</div>

<div className="bg-tertiary-container/15 p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-body-sm text-body-sm text-tertiary font-bold">Safe Margin Guardrail: 23.4% minimum profit locked against currency volatility</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase font-bold">SAFE</span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-3 rounded-l-lg">Variant / SKU</th>
<th className="py-2.5 px-2">Landing Cost</th>
<th className="py-2.5 px-2">Retail Price</th>
<th className="py-2.5 px-2">Nakasero</th>
<th className="py-2.5 px-3 rounded-r-lg">Kololo Hub</th>
</tr>
</thead>
<tbody className="divide-y-0">

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-3.5 h-3.5 rounded-full bg-surface-dark border border-surface-bright shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Matte Black</span>
<span className="font-code-display text-[11px] text-on-surface-variant">SND-SP1-BLK-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2 text-on-surface-variant">UGX 262,000</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">UGX 342,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/50 line-through">UGX 380,000</span>
</div>
</td>
<td className="py-3 px-2 font-label-md text-label-md text-emerald-escrow font-bold">18 units</td>
<td className="py-3 px-3 font-label-md text-label-md text-on-surface">12 units</td>
</tr>

<tr className="bg-surface-container-high/30 hover:bg-surface-container/60 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-3.5 h-3.5 rounded-full bg-surface-cream shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Cream White</span>
<span className="font-code-display text-[11px] text-on-surface-variant">SND-SP1-WHT-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2 text-on-surface-variant">UGX 262,000</td>
<td className="py-3 px-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">UGX 342,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/50 line-through">UGX 380,000</span>
</div>
</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-amber-warning font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span> 2 units (Low)
                  </span>
</td>
<td className="py-3 px-3 font-label-md text-label-md text-on-surface">5 units</td>
</tr>

<tr className="hover:bg-surface-container/60 transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-2">
<span className="w-3.5 h-3.5 rounded-full bg-secondary shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Sky Blue</span>
<span className="font-code-display text-[11px] text-on-surface-variant">SND-SP1-BLU-UK</span>
</div>
</div>
</td>
<td className="py-3 px-2 text-on-surface-variant">UGX 265,000</td>
<td className="py-3 px-2">
<span className="font-label-md text-label-md text-primary font-bold">UGX 349,000</span>
</td>
<td className="py-3 px-2 font-label-md text-label-md text-emerald-escrow font-bold">14 units</td>
<td className="py-3 px-3 font-label-md text-label-md text-on-surface">9 units</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Aggregate Variant Stock</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">60 Headsets Total</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Projected Store Turnover</span>
<span className="font-price-display text-price-display text-emerald-escrow">UGX 20,520,000</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[15px]" /> Edit Attributes
          </button>
</div>
</section>

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<Icon name="trending_up" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">30-Day Conversion Velocity</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kampala Tech Week Promo Performance</span>
</div>
<span className="px-2 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-md text-label-md font-bold flex items-center gap-1">
<Icon name="arrow_upward" className="text-[15px]" /> +18.4% vs last week
          </span>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex items-baseline justify-between">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">142 Sales</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">3.8% Storefront Conversion</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Peak: May 26 Flash Drop</span>
</div>
<div className="w-full h-32 relative">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
<defs>
<linearGradient id="velocityGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#DA3700" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<path d="M 0,85 Q 40,80 80,72 T 160,65 T 240,48 T 320,18 T 400,28 L 400,100 L 0,100 Z" fill="url(#velocityGrad)"></path>

<path d="M 0,85 Q 40,80 80,72 T 160,65 T 240,48 T 320,18 T 400,28" fill="none" stroke="#FF8A1F" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="320" cy="18" fill="#DA3700" r="4" stroke="#FFFFFF" strokeWidth="2"></circle>
</svg>
</div>
<div className="flex justify-between items-center text-on-surface-variant/70 font-label-sm text-[10px] uppercase pt-1">
<span>May 1</span>
<span>May 8</span>
<span>May 15</span>
<span>May 22</span>
<span className="text-primary font-bold">May 29 (Peak Promo)</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm font-body-sm text-body-sm">
<div className="bg-surface-container-high/40 p-space-sm rounded-lg flex items-center justify-between">
<span className="text-on-surface-variant">Nakasero Walk-ins:</span>
<span className="text-on-surface font-bold">24 Orders</span>
</div>
<div className="bg-surface-container-high/40 p-space-sm rounded-lg flex items-center justify-between">
<span className="text-on-surface-variant">SafeBoda Dispatches:</span>
<span className="text-action-gradient-start font-bold">118 Deliveries</span>
</div>
</div>
</section>
</div>

<div className="lg:col-span-3 flex flex-col gap-space-lg min-w-0">

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="electric_moped" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">SafeBoda &amp; Express Rails</h2>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 text-tertiary">
<Icon name="timer" className="text-[18px]" />
<span className="font-label-lg text-label-lg font-bold">45-Min SafeBoda Delivery</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
            Eligible across Kololo, Nakasero, Bugolobi, Ntinda, and Muyenga corridors. Automatic rider assignment from Nakasero Hub.
          </p>
</div>
<div className="space-y-2 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant">
<span>Parcel Deadweight:</span>
<span className="font-bold text-on-surface">0.45 kg</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span>Package Standard:</span>
<span className="font-bold text-on-surface">Tamper-Evident Bag (Size M)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span>Origin Hub:</span>
<span className="font-bold text-tertiary">Nakasero Priority Dock</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-start gap-space-xs">
<Icon name="pin" className="text-action-gradient-start text-[18px] shrink-0 mt-0.5" />
<p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
<span className="text-on-surface font-bold uppercase">6-Digit OTP Protocol:</span> High-value item. SafeBoda rider cannot mark delivered without buyer's SMS OTP entry.
          </p>
</div>
</section>

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance_wallet" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Per-Sale Payout Breakdown</h2>
</div>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<div className="space-y-2 font-body-sm text-body-sm">
<div className="flex justify-between items-center text-on-surface-variant">
<span>Selling Price (Flash Deal):</span>
<span className="text-on-surface font-semibold">UGX 342,000</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-1">SwiftCart Platform Fee (2.5%):</span>
<span className="text-danger-penalty font-medium">- UGX 8,550</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span>Escrow Transit Insurance:</span>
<span className="text-danger-penalty font-medium">- UGX 1,710</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-1 shadow-inner">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Net Payout to Merchant</span>
<span className="font-price-display text-price-display text-emerald-escrow tracking-tight">UGX 331,740</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim mt-0.5 flex items-center gap-1">
<Icon name="lock_clock" className="text-[13px]" /> Instant MoMo settlement after OTP release
          </span>
</div>

<div className="flex flex-col gap-1.5 font-label-sm text-label-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-high/40">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="text-on-surface font-semibold">MTN Mobile Money (+256 772 ••• 819)</span>
</div>
<span className="text-emerald-escrow font-bold">Active</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-high/40">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-airtel-red"></span>
<span className="text-on-surface font-semibold">Airtel Money (+256 750 ••• 102)</span>
</div>
<span className="text-on-surface-variant/70">Backup</span>
</div>
</div>
</section>

<section className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="near_me" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Rider Dispatch Zone</h2>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold">14 Active SafeBodas</span>
</div>

<div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center shadow-md" data-location="Kampala, Uganda" style={{}}>
<div className="absolute inset-0 bg-cover bg-center opacity-40" data-alt="High-contrast dark night street vector navigation map of Kampala Central Business District featuring Nakasero Hill and Kololo arterial roads with glowing neon orange routes and deep charcoal background." style={{"backgroundImage":"url('/images/5ee74d97174e81fb.webp')"}}></div>

<div className="relative z-10 flex flex-col items-center justify-center">

<div className="w-28 h-28 rounded-full border border-action-gradient-start/40 bg-action-gradient-start/10 flex items-center justify-center animate-pulse">
<div className="w-16 h-16 rounded-full border border-emerald-escrow/50 bg-emerald-escrow/10 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
<Icon name="store" className="text-[16px]" />
</div>
</div>
</div>
<span className="mt-1 px-2 py-0.5 rounded-full bg-surface-dark/90 text-on-surface font-label-sm text-label-sm shadow font-bold tracking-tight">
              Nakasero Dock (3.2 km Radius)
            </span>
</div>
<div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-surface-dark/80 text-on-surface-variant font-label-sm text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Avg. Pickup: 6 Mins
          </div>
</div>
<button className="w-full mt-1 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="radar" className="text-[15px]" /> Inspect Live Hub Telematics
        </button>
</section>
</div>
</div>


</div></main></div>
    </div>
  );
};

export default Screen;
