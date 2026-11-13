// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_store_profile_kyc_swiftcart_desktop_light/code.html
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
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 px-space-xl flex items-center gap-space-sm"><img alt="SwiftCart Merchant Logo" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><span className="ml-auto bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider">Merchant</span></div><div className="px-space-md py-space-sm mx-space-md mb-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_4px_rgba(14,27,77,0.03)]"><div className="flex items-center gap-space-sm min-w-0"><div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0"><Icon name="verified" className="text-primary text-[18px]" /></div><div className="min-w-0"><p className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda</p><p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span> Kampala Hub</p></div></div><Icon name="unfold_more" className="text-on-surface-variant text-[16px]" /></div><nav className="px-space-md space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><span>Orders</span><span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><span>Products &amp; Inventory</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><span>Riders &amp; Logistics</span><span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">6 Active</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><span>Returns &amp; Disputes</span><span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">1 Case</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet &amp; Payouts</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics &amp; Heatmaps</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a></nav></div><div className="p-space-md border-t border-surface-container-high space-y-1"><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary-container font-label-md rounded-xl shadow-[0_2px_8px_rgba(218,55,0,0.20)]"><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile &amp; KYC</a><a className="flex items-center justify-between px-space-md py-space-sm rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Settings</a></nav><div className="mt-space-md p-space-sm bg-surface-container rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="shield" className="text-tertiary text-[18px]" /><span className="font-label-sm text-label-sm text-on-surface-variant">Swift Escrow Protected</span></div><Icon name="lock" className="text-tertiary text-[16px]" /></div></div></aside>
<div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><div className="relative w-full flex items-center"><Icon name="search" className="absolute left-3 text-on-surface-variant text-[18px]" /><input className="w-full h-10 pl-10 pr-12 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary-container transition-all shadow-[0_1px_2px_rgba(14,27,77,0.02)]" placeholder="Search orders, SKU, customer phone (+256)..." type="search" /><kbd className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/30">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden lg:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-[0_1px_2px_rgba(14,27,77,0.04)]"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button aria-label="Theme Toggle (Light Active)" className="w-9 h-9 rounded-xl bg-surface-container-lowest text-primary hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" title="Light Mode Active" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><button aria-label="Notifications (3 unread)" className="relative w-9 h-9 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-all shadow-[0_1px_2px_rgba(14,27,77,0.04)]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /><span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px] leading-[18px] text-center font-bold ring-2 ring-surface-container-lowest shadow-sm">3</span></button><div className="flex items-center gap-space-sm pl-space-sm"><div className="hidden sm:flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant">Store General Manager</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md">KR</div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]"><div className="flex flex-col w-full">

<div className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-space-xl py-space-xs flex flex-wrap items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-1.5 text-tertiary font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse inline-block"></span>
<span>URA EFRIS NODE CONNECTED</span>
</div>
<span className="opacity-40">•</span>
<div className="flex items-center gap-1.5 text-secondary">
<Icon name="sync" className="text-[14px]" />
<span>BOU SANDBOX V3 SYNC LIVE</span>
</div>
<span className="opacity-40">|</span>
<span className="text-on-surface">KYC Re-certification due in <strong className="text-primary font-bold">412 days</strong></span>
</div>
<div className="flex items-center gap-space-md text-[11px] opacity-80">
<span>TOKEN: <code className="font-mono bg-surface-container px-1 py-0.5 rounded">0x94F...28E</code></span>
<span>•</span>
<span>Last Audit: Today 14:22 EAT</span>
</div>
</div>

<div className="px-space-xl py-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span>Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Settings &amp; Governance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Store Profile &amp; KYC</span>
</div>
<div className="flex items-center gap-3 flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Store Profile &amp; Official Business KYC</h1>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm shadow-sm">
<Icon name="verified_user" className="text-[14px] text-tertiary" />
<span>URSB &amp; BANK OF UGANDA VERIFIED MERCHANT • TIER 3</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="h-10 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container flex items-center gap-2 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="description" className="text-[18px] text-on-surface-variant" />
<span>Compliance Log</span>
</button>
<button className="h-10 px-5 rounded-xl bg-gradient-to-r from-orange-500 to-primary text-on-primary font-label-md text-label-md shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:opacity-95 active:scale-98 flex items-center gap-2 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="save" className="text-[18px]" />
<span>Save Profile Updates</span>
</button>
</div>
</div>

<div className="px-space-xl pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 space-y-space-lg">

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">

<div className="relative h-44 sm:h-52 w-full bg-cover bg-center" data-alt="High-end flagship electronics and wireless acoustics showroom in Kampala Nakasero Commercial district, modern glass shelves displaying premium matte black headphones and sound gear, bright sunlit architectural lighting, ambient warm tones" style={{"backgroundImage":"url('/images/875b311515d27093.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
<button className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container-lowest flex items-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[16px]" />
<span>Change Banner</span>
</button>
<div className="absolute bottom-3 left-4 flex items-center gap-2 text-white font-label-sm text-label-sm">
<Icon name="storefront" className="text-[14px]" />
<span>Nakasero Plaza Flagship Showroom (High-Res 1200x400)</span>
</div>
</div>

<div className="px-space-lg pt-3 pb-space-md flex flex-wrap items-end justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative -mt-10 w-20 h-20 rounded-2xl bg-surface-container-lowest p-1 shadow-md shrink-0">
<div className="w-full h-full rounded-xl bg-gradient-to-br from-primary-container to-primary flex items-center justify-center text-on-primary">
<Icon name="headphones" className="text-[36px]" />
</div>
<span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-surface-container-lowest shadow-sm">
<Icon name="check" className="text-[14px]" />
</span>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">SoundCore Uganda Official</h2>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold">URSB Verified</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="font-mono text-secondary">swiftcart.ug/soundcore-uganda</span>
<button className="text-on-surface-variant hover:text-primary transition-colors" title="Copy public store URL" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="content_copy" className="text-[14px]" />
</button>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Merchant ID: <code className="font-bold text-on-surface">SC-UG-9921</code></span>
</div>
</div>

<div className="p-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container-low/40">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5 flex items-center justify-between">
<span>Store Display Name</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> URSB Matched
              </span>
</label>
<div className="relative">
<input className="w-full h-11 px-3.5 rounded-xl bg-surface-container-lowest font-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="text" value="SoundCore Uganda Official" />
<Icon name="lock" className="absolute right-3 top-3 text-tertiary text-[18px]" />
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5 flex items-center justify-between">
<span>Category Classification</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Primary Retail</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3.5 rounded-xl bg-surface-container font-body-md text-on-surface cursor-not-allowed shadow-inner" readOnly={true} type="text" value="Consumer Electronics > Audio & Headwear" />
<Icon name="lock" className="absolute right-3 top-3 text-on-surface-variant text-[18px]" />
</div>
</div>
<div className="md:col-span-2">
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-md text-label-md text-on-surface">Tagline &amp; Official Bio</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">152 / 240 characters</span>
</div>
<textarea className="w-full p-3 rounded-xl bg-surface-container-lowest font-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container resize-none" rows={2}>Official importer and distributor of premium Anker SoundCore acoustics, wireless headphones, and fast charging gear in Uganda. 1-Year local warranty supported.</textarea>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5">Physical Showroom &amp; Dispatch Point</label>
<div className="relative">
<input className="w-full h-11 pl-9 pr-3 rounded-xl bg-surface-container-lowest font-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="text" value="Shop #UG-04, Nakasero Commercial Plaza, Kampala" />
<Icon name="location_on" className="absolute left-2.5 top-2.5 text-primary text-[18px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">SafeBoda courier dispatch zone: <strong className="text-on-surface">Central 01</strong></p>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5">Helpline &amp; Support Dispatch</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-11 pl-8 pr-2 rounded-xl bg-surface-container-lowest font-body-sm text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="text" value="+256 702 449 180" />
<Icon name="call" className="absolute left-2 top-3 text-secondary text-[16px]" />
</div>
<div className="relative">
<input className="w-full h-11 pl-8 pr-2 rounded-xl bg-surface-container-lowest font-body-sm text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="email" value="support@soundcore.ug" />
<Icon name="mail" className="absolute left-2 top-3 text-secondary text-[16px]" />
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Directly routed to Swift Escrow dispute mediation</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg space-y-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-sm border-b-0">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Statutory Regulatory &amp; KYC Verification Dossier</h2>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-tertiary font-label-sm text-label-sm font-bold">Audited: A+ Tier</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Audited against national databases: URSB, URA Taxpayer Registry &amp; NIRA NIN Database</p>
</div>
<button className="text-primary hover:text-primary-container font-label-md text-label-md flex items-center gap-1 self-start sm:self-auto" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="history" className="text-[16px]" />
<span>Audit Trail</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low/60 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<Icon name="account_balance" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Registered Legal Entity</span>
<span className="font-label-md text-label-md text-on-surface font-bold">SoundCore Acoustics Uganda Limited</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[12px]" /> Verified Active
              </span>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 bg-surface-container-lowest/70 p-2.5 rounded-lg text-body-sm font-body-sm">
<div>
<span className="text-on-surface-variant block text-[11px]">Reg # (URSB):</span>
<span className="font-mono font-bold text-on-surface">URSB-80020194821</span>
</div>
<div>
<span className="text-on-surface-variant block text-[11px]">Incorporated / Expiry:</span>
<span className="text-on-surface">Nov 2021 • Valid 2026</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low/60 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm">
<Icon name="receipt_long" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Uganda Revenue Authority (URA)</span>
<span className="font-label-md text-label-md text-on-surface font-bold">TIN 1004829104</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[12px]" /> EFRIS Active
              </span>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 bg-surface-container-lowest/70 p-2.5 rounded-lg text-body-sm font-body-sm">
<div>
<span className="text-on-surface-variant block text-[11px]">Auto E-Invoicing:</span>
<span className="font-bold text-tertiary">Real-time Fiscalized</span>
</div>
<div>
<span className="text-on-surface-variant block text-[11px]">VAT Status:</span>
<span className="text-on-surface">Standard 18% Compliant</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low/60 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<Icon name="storefront" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Trading License (KCCA)</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Central Division Authority</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[12px]" /> 2024 Paid
              </span>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 bg-surface-container-lowest/70 p-2.5 rounded-lg text-body-sm font-body-sm">
<div>
<span className="text-on-surface-variant block text-[11px]">Permit Number:</span>
<span className="font-mono text-on-surface font-bold">KCCA/KMP/2024/09214</span>
</div>
<div>
<span className="text-on-surface-variant block text-[11px]">Annual Expiry:</span>
<span className="text-on-surface">31 Dec 2024 (Auto-renew)</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low/60 shadow-sm flex flex-col justify-between space-y-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm">
<Icon name="badge" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Director KYC &amp; Verification</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Kizito Ronald (General Mgr)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[12px]" /> Biometric Pass
              </span>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 bg-surface-container-lowest/70 p-2.5 rounded-lg text-body-sm font-body-sm">
<div>
<span className="text-on-surface-variant block text-[11px]">NIRA NIN:</span>
<span className="font-mono text-on-surface font-bold">CM890124892KJA</span>
</div>
<div>
<span className="text-on-surface-variant block text-[11px]">Face Match Score:</span>
<span className="font-bold text-tertiary">99.8% (e-Passport)</span>
</div>
</div>
</div>
</div>

<div className="space-y-space-sm pt-2">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface flex items-center gap-1.5">
<Icon name="folder_special" className="text-[18px] text-on-surface-variant" />
<span>Document Vault &amp; Official Filings</span>
</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">SHA-256 Encrypted on Swift Ledger</span>
</div>
<div className="space-y-2">

<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 shadow-sm hover:bg-surface-container transition-all">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0">
<Icon name="picture_as_pdf" className="text-[20px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">URSB Certificate of Incorporation.pdf</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">2.4 MB • Encrypted SHA-256 Verified • Timestamp: 14-Nov-2021</p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-2 py-0.5 rounded bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold">Verified</span>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="View PDF" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="Replace file" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sync" className="text-[18px]" />
</button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 shadow-sm hover:bg-surface-container transition-all">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0">
<Icon name="picture_as_pdf" className="text-[20px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">KCCA 2024 Trading License Certified.pdf</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">1.1 MB • Kampala Central Division Official Seal</p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-2 py-0.5 rounded bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold">Verified</span>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="View PDF" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="Replace file" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sync" className="text-[18px]" />
</button>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 shadow-sm hover:bg-surface-container transition-all">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0">
<Icon name="verified" className="text-[20px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Director NIN Kizito Biometric Validation.pdf</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">3.8 MB • NIRA Direct Token Authenticated</p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-2 py-0.5 rounded bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold">Verified</span>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="View PDF" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-all" title="Replace file" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sync" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Operating Hours &amp; SafeBoda Dispatch SLA</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Governs real-time customer courier expectations across Kampala Hub</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-orange-100 text-primary-container font-label-sm text-label-sm font-bold">
            Auto-Dispatch Active
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface">Monday - Friday</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<p className="font-price-display text-price-display text-on-surface font-extrabold">08:30 - 18:30</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Standard Boda 25-min SLA</p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface">Saturday</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<p className="font-price-display text-price-display text-on-surface font-extrabold">09:00 - 17:00</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Weekend express routes</p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low/50 shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-md text-label-md text-on-surface-variant">Sunday</span>
<span className="w-2 h-2 rounded-full bg-on-surface-variant/40"></span>
</div>
<p className="font-price-display text-price-display text-on-surface-variant font-extrabold">Closed</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Orders auto-queue for Mon 08:30</p>
</div>
</div>
<div className="p-3 rounded-xl bg-orange-50 text-on-surface flex items-center justify-between gap-3 text-body-sm font-body-sm">
<div className="flex items-center gap-2">
<Icon name="local_shipping" className="text-primary-container text-[20px]" />
<span>Designated SafeBoda Merchant Bay: <strong className="text-primary-container">Bay #4, Nakasero Lane Ramp</strong> (Riders call 0702 449 180 upon arrival)</span>
</div>
<button className="text-primary font-label-sm text-label-sm font-bold shrink-0 hover:underline" type="button" onClick={() => alertToast('Action triggered')}>Edit Dispatch Pin</button>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-space-lg">

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Merchant Trust Score</h2>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold">Tier 1 Elite</span>
</div>

<div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 via-surface-container-lowest to-transparent flex items-center gap-4">
<div className="relative w-20 h-20 shrink-0">

<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface leading-none">99.4</span>
<span className="text-[9px] font-bold text-tertiary">/ 100</span>
</div>
</div>
<div>
<div className="flex items-center gap-1 text-tertiary font-label-md text-label-md font-bold">
<Icon name="shield" className="text-[16px]" />
<span>TOP 1% KAMPALA MERCHANT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Zero fraud flags logged across 1,840+ completed Escrow releases this quarter.</p>
</div>
</div>
<div className="space-y-2 text-body-sm font-body-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant">Counterfeit Strikes</span>
<span className="font-bold text-tertiary flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> 0 Clean
            </span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant">Order Defect Rate</span>
<span className="font-bold text-tertiary flex items-center gap-1">
<Icon name="check" className="text-[14px]" /> 0.18% (&lt; 1.0% req)
            </span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant">Customer Dispute Rate</span>
<span className="font-bold text-on-surface">0.30%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant">Payout Clearance</span>
<span className="font-bold text-tertiary">Instant 0-hr Escrow</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Verified Payout Accounts</h2>
</div>
<Icon name="lock" className="text-tertiary text-[18px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Daily earnings automatically settle to primary merchant line at 22:00 EAT with zero telecom fees.
        </p>

<div className="space-y-space-sm">

<div className="p-3 rounded-xl bg-surface-container-low shadow-sm flex items-start justify-between gap-2">
<div className="flex items-start gap-2.5">
<div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-black text-black text-xs shrink-0 shadow-sm">
                MTN
              </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">MTN Mobile Money Business</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container text-white font-label-sm text-[9px] uppercase tracking-wider">Primary</span>
</div>
<p className="font-mono text-body-sm font-bold text-on-surface mt-0.5">+256 772 ••• 419</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">KYC Name: SoundCore Uganda Ltd</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold shrink-0">
              Verified Direct
            </span>
</div>

<div className="p-3 rounded-xl bg-surface-container-low shadow-sm flex items-start justify-between gap-2">
<div className="flex items-start gap-2.5">
<div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xs shrink-0 shadow-sm">
                airtel
              </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Airtel Money Merchant</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-sm text-[9px] uppercase">Backup Rail</span>
</div>
<p className="font-mono text-body-sm font-bold text-on-surface mt-0.5">+256 750 ••• 102</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">KYC Name: Ronald Kizito Merchant</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold shrink-0">
              Verified Direct
            </span>
</div>

<div className="p-3 rounded-xl bg-surface-container-low shadow-sm flex items-start justify-between gap-2">
<div className="flex items-start gap-2.5">
<div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white shrink-0 shadow-sm">
<Icon name="account_balance" className="text-[16px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block">Stanbic Bank Uganda</span>
<p className="font-mono text-body-sm font-bold text-on-surface mt-0.5">A/C: 9030 •••• 94821</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">Garden City Branch Kampala • EFT / RTGS</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-tertiary font-label-sm text-label-sm font-bold shrink-0">
              Active
            </span>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[16px]" />
<span>Request Additional Settlement Account</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Security &amp; Authorized Staff</h2>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">2FA Active</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="security" className="text-primary text-[20px]" />
<div>
<p className="font-label-md text-label-md text-on-surface">Hardware / SMS 2FA Enforced</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Required on all fund payouts &gt; UGX 500k</p>
</div>
</div>

<div className="w-10 h-6 rounded-full bg-primary-container p-1 cursor-pointer flex items-center justify-end">
<div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>ACTIVE AUTHORIZED STAFF</span>
<span>3 / 5 Seats</span>
</div>
<div className="space-y-1.5">
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center">KR</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">Store General Manager</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-md font-bold">Full Admin</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary text-white font-bold text-xs flex items-center justify-center">BN</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Brenda Nabirye</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">Fulfillment Lead (Nakasero)</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-2 py-0.5 rounded-md font-semibold">Dispatch Role</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-container text-on-surface font-bold text-xs flex items-center justify-center">IK</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Isaac Kato</p>
<p className="font-body-sm text-[11px] text-on-surface-variant">Inventory Clerk</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-2 py-0.5 rounded-md font-semibold">Catalog View</span>
</div>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[16px]" />
<span>Invite Operational Staff</span>
</button>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
