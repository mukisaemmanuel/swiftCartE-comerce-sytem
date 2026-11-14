// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_store_profile_kyc_swiftcart_desktop/code.html
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
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <aside className="fixed z-50 left-0 top-0 h-screen w-72 bg-surface-container-low z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest/40 backdrop-blur-sm"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">SwiftCart</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Uganda Merchant</span></div></div><span className="px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm">UGX B2B</span></div><nav className="px-space-md py-space-md flex flex-col gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-label-md"><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Daily Operations</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="space_dashboard" className="text-[20px]" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">14 Pending</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="products-and-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm">2 Low</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-and-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">6 Active</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Post-Purchase</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="assignment_return" className="text-[20px]" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-2 py-0.5 rounded-full bg-error-container/30 text-error font-label-sm text-label-sm">1 Case</span></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Business &amp; Finance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[20px]" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics-and-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="query_stats" className="text-[20px]" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="campaign" className="text-[20px]" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a></div><div className="flex flex-col gap-1"><span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-wider">Settings &amp; Governance</span><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="store-profile-and-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="verified" className="text-[20px]" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="check_circle" className="text-[16px] text-tertiary" /></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-body-md text-body-md">Settings</span></div></a></div></nav></div><div className="p-space-md"><div className="rounded-xl bg-surface-container p-space-md flex flex-col gap-space-xs shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-xs"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><span className="font-label-md text-label-md text-emerald-escrow">Swift Escrow Protected</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Settlements secured under Bank of Uganda National Payments Systems sandbox.</p></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl"><div className="relative w-96 flex items-center"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><Icon name="search" className="absolute left-3 text-outline text-[20px]" /><input className="w-full h-10 pl-10 pr-12 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Search orders, SKU, phone numbers..." type="text" /><span className="absolute right-2.5 px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm">⌘K</span></div><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-mtn-yellow animate-pulse"></span><span className="w-2 h-2 rounded-full bg-airtel-red animate-pulse"></span></div><span className="font-label-sm text-label-sm text-on-surface">MTN &amp; Airtel Rails Active</span></div><button className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Toggle theme" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button className="relative w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Notifications" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Store General Manager (KR)</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-space-xl py-2 bg-surface-container-lowest/90 backdrop-blur flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></div>
<span className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider">URA EFRIS Node Connected • BoU Sandbox V3 Sync Live</span>
<span className="text-outline/40 font-body-sm text-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">KYC Re-certification due in 412 days</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-outline font-code-display text-label-sm">
<Icon name="vpn_key" className="text-[14px] text-tertiary" />
<span>TOKEN: 0x94F...28E</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Last Audit: Today 14:22 EAT</span>
</div>
</div>
<div className="p-space-xl flex flex-col gap-space-xl max-w-[1520px] mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="hover:text-on-surface transition-colors cursor-pointer">Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-on-surface transition-colors cursor-pointer">Settings &amp; Governance</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Store Profile &amp; KYC</span>
</div>
<div className="flex items-center gap-space-md flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Store Profile &amp; Official Business KYC</h1>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow shadow-sm">
<Icon name="verified" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold tracking-wide uppercase">URSB &amp; Bank of Uganda Verified Merchant • Tier 3</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<button className="h-11 px-4 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-2 transition-all shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="history_edu" className="text-[18px]" />
<span>Compliance Log</span>
</button>
<button className="h-11 px-6 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all" id="save-btn" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="save" className="text-[20px]" />
<span>Save Profile Updates</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-8 flex flex-col gap-space-xl">

<section className="rounded-xl bg-surface-container-low shadow-md overflow-hidden flex flex-col">

<div className="relative w-full h-52 bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Interior wide photograph of modern consumer electronics flagship showroom in Kampala Uganda with warm ambient lighting, sleek timber tables showcasing premium wireless headphones and audio accessories, glass storefront, hyper-realistic, 4k architectural interior photography." style={{"backgroundImage":"url('/images/22fdebe4565f1e1c.webp')"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
<div className="absolute top-4 right-4 flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md text-on-surface hover:text-white font-label-sm text-label-sm flex items-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[16px]" />
<span>Change Banner (1200x400)</span>
</button>
</div>

<div className="absolute -bottom-8 left-8 flex items-end gap-space-md">
<div className="relative w-24 h-24 rounded-2xl bg-surface-container p-2 shadow-xl ring-4 ring-surface-container-low">
<img className="w-full h-full object-cover rounded-xl" data-alt="Minimalist bold tech audio brand logo featuring a stylized sound wave acoustics emblem with dark navy and neon orange accents on a pristine clean background, vector studio quality." src={`${assetBase}/images/d3406838c5468382.webp`} />
<span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-escrow text-surface-dark flex items-center justify-center shadow-md">
<Icon name="check" className="text-[16px] font-black" />
</span>
</div>
<div className="flex flex-col mb-10">
<span className="font-headline-md text-headline-md text-white tracking-tight leading-none drop-shadow">SoundCore Uganda Official</span>
<span className="font-code-display text-body-sm text-primary tracking-normal mt-1 flex items-center gap-1">
                  swiftcart.ug/soundcore-uganda
                  <button className="hover:text-white" title="Copy public link" onClick={() => alertToast('Action triggered')}><Icon name="content_copy" className="text-[14px]" /></button>
</span>
</div>
</div>
</div>

<div className="pt-12 p-space-xl flex flex-col gap-space-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between">
<span>Store Display Name</span>
<span className="text-tertiary text-label-sm uppercase font-bold">URSB Matched</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="text" value="SoundCore Uganda Official" />
<Icon name="check_circle" className="absolute right-3 top-3 text-[18px] text-tertiary" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Category Classification</label>
<div className="relative">
<input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md cursor-not-allowed" readOnly={true} type="text" value="Consumer Electronics > Audio & Headphones > Premium" />
<Icon name="lock" className="absolute right-3 top-3 text-[18px] text-outline" />
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Tagline &amp; Official Bio</label>
<textarea className="w-full p-3.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm resize-none" rows={3}>Official importer and distributor of premium Anker SoundCore acoustics, wireless headphones, and fast charging gear in Uganda. 1-Year local warranty supported.</textarea>
<span className="font-body-sm text-body-sm text-outline self-end">152/240 characters</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="storefront" className="text-[16px] text-primary" />
<span>Physical Showroom &amp; Dispatch Point</span>
</label>
<input className="w-full h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="text" value="Shop #UG-04, Nakasero Commercial Center, Kyagwe Rd, Kampala Central" />
<span className="font-body-sm text-body-sm text-outline">Boda courier dispatch zone: Central 01 (Kampala CBD)</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Helpline (+256)</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="text" value="+256 702 449 180" />
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Escrow Support Email</label>
<input className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" type="email" value="support@soundcore.ug" />
</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-low shadow-md p-space-xl flex flex-col gap-space-lg">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/40">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Statutory Regulatory &amp; KYC Verification Dossier</h2>
<span className="font-body-sm text-body-sm text-outline">Audited against national databases: URSB, URA Taxpayer Registry &amp; NIRA NIN Database</span>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm">Audited: A+ Tier</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Registered Legal Entity</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">SoundCore Acoustics Uganda Limited</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Reg #: <span className="font-code-display text-label-md text-white font-bold">URSB-80020194821</span></span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">Verified Active</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-2 text-outline">
<span>Incorporated: Nov 2021</span>
<span className="text-tertiary font-medium">Valid through Nov 2026</span>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Uganda Revenue Authority (URA)</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">Taxpayer Identification (TIN)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">TIN #: <span className="font-code-display text-label-md text-white font-bold">1004829104</span></span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">EFRIS Active</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-2 text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Auto E-Invoicing</span>
<span>VAT Exempt / Standard 18%</span>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Trading License (KCCA)</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">Central Division Authority</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Permit #: <span className="font-code-display text-label-md text-white font-bold">KCCA/KMP/2024/09214</span></span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">2024 Paid</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-2 text-outline">
<span>Receipt: REC-77491-KCCA</span>
<span>Annual Expiry: 31 Dec 2024</span>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Director KYC &amp; Verification</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">Kizito Ronald (General Manager)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">NIRA NIN: <span className="font-code-display text-label-md text-white font-bold">CM890124892KJA</span></span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">Biometric Pass</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-2 text-outline">
<span>National ID Card (Uganda)</span>
<span className="text-tertiary font-medium">Face match 99.8%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm mt-space-sm">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Document Vault &amp; Official Filings</span>
<div className="flex flex-col gap-2">

<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="picture_as_pdf" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">URSB_Certificate_of_Incorporation_SoundCore.pdf</span>
<span className="font-body-sm text-body-sm text-outline">2.4 MB • Encrypted SHA-256 Verified</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="check_circle" className="text-[14px]" /> Verified
                  </span>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>View PDF</button>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-outline hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Replace</button>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="picture_as_pdf" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">KCCA_2024_Trading_License_Certified.pdf</span>
<span className="font-body-sm text-body-sm text-outline">1.1 MB • Kampala Central Division Seal</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="check_circle" className="text-[14px]" /> Verified
                  </span>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>View PDF</button>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-outline hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Replace</button>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="badge" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Director_NIN_Kizito_Biometric_Validation.pdf</span>
<span className="font-body-sm text-body-sm text-outline">3.8 MB • NIRA High Assurance Direct Token</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="check_circle" className="text-[14px]" /> Verified
                  </span>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>View PDF</button>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright font-label-sm text-label-sm text-outline hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Replace</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-low shadow-md p-space-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="schedule" className="text-amber-warning text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Operating Hours &amp; SafeBoda Dispatch SLA</h2>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface">Auto-Dispatch Active</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="p-3.5 rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Mon - Fri</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<span className="font-price-display text-price-display text-white mt-1">08:30 - 18:30</span>
<span className="font-body-sm text-body-sm text-outline">Standard Boda 25-min SLA</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Saturday</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<span className="font-price-display text-price-display text-white mt-1">09:00 - 17:00</span>
<span className="font-body-sm text-body-sm text-outline">Weekend express routes</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-outline">Sunday</span>
<span className="w-2 h-2 rounded-full bg-outline"></span>
</div>
<span className="font-price-display text-price-display text-outline-variant mt-1">Closed</span>
<span className="font-body-sm text-body-sm text-amber-warning">Orders auto-queue for Mon 08:30</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-high/60 flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-space-sm text-on-surface-variant">
<Icon name="electric_moped" className="text-primary text-[18px]" />
<span>Designated SafeBoda Merchant Bay: <strong>Bay #4, Nakasero Lane Ramp</strong> (Riders call <code>0702 449 180</code> upon arrival).</span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm" onClick={() => alertToast('Action triggered')}>Edit Dispatch Pin</button>
</div>
</section>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-xl">

<section className="rounded-xl bg-surface-container-low shadow-md p-space-lg flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="award_star" className="text-tertiary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Merchant Trust Score</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold">Tier 1 Elite</span>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">99.4%</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold uppercase tracking-wider">Top 1% Kampala Merchant</span>
</div>

<div className="relative w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<Icon name="shield" className="absolute text-tertiary text-[20px]" />
</div>
</div>

<div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
<div className="flex items-center justify-between py-2 border-b border-surface-container-high/40">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
                Counterfeit Strikes
              </span>
<span className="font-label-md text-label-md text-white font-bold">0 Clean</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-surface-container-high/40">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="package_2" className="text-[16px] text-tertiary" />
                Order Defect Rate
              </span>
<span className="font-label-md text-label-md text-white font-bold">0.18% <span className="text-outline font-normal">(&lt; 1.0% req)</span></span>
</div>
<div className="flex items-center justify-between py-2 border-b border-surface-container-high/40">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="gavel" className="text-[16px] text-tertiary" />
                Customer Dispute Rate
              </span>
<span className="font-label-md text-label-md text-white font-bold">0.30%</span>
</div>
<div className="flex items-center justify-between py-2">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="lock_open" className="text-[16px] text-emerald-escrow" />
                Payout Clearance
              </span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">Instant 0-hr Escrow</span>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-low shadow-md p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Verified Payout Accounts</span>
</div>
<Icon name="lock" className="text-[16px] text-emerald-escrow" />
</div>
<p className="font-body-sm text-body-sm text-outline">Daily earnings automatically settle to primary merchant line at 22:00 EAT with zero fees.</p>
<div className="flex flex-col gap-space-sm">

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-mtn-yellow text-surface-dark flex items-center justify-center font-bold text-[10px]">MTN</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white leading-tight">MTN Mobile Money Business</span>
<span className="font-code-display text-body-sm text-outline">+256 772 ••• 419</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-mtn-yellow/20 text-mtn-yellow font-label-sm text-label-sm font-bold uppercase">Primary</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-outline pt-1">
<span>KYC: SoundCore Uganda Ltd</span>
<span className="text-tertiary">Verified Direct</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-airtel-red text-white flex items-center justify-center font-bold text-[10px]">AIR</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white leading-tight">Airtel Money Merchant</span>
<span className="font-code-display text-body-sm text-outline">+256 750 ••• 102</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm">Backup Rail</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-outline pt-1">
<span>KYC: Ronald Kizito Merchant</span>
<span className="text-tertiary">Verified Direct</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-secondary-container text-white flex items-center justify-center font-bold text-[10px]">SB</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white leading-tight">Stanbic Bank Uganda</span>
<span className="font-code-display text-body-sm text-outline">A/C: 9030 •••• 94821</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm">B2B Wire</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-outline pt-1">
<span>Garden City Branch Kampala</span>
<span className="text-tertiary">EFT / RTGS</span>
</div>
</div>
</div>
<button className="w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            + Request Additional Settlement Account
          </button>
</section>

<section className="rounded-xl bg-surface-container-low shadow-md p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="admin_panel_settings" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Security &amp; Authorized Staff</span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm">2FA Active</span>
</div>

<div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="security" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Hardware / SMS 2FA Enforced</span>
<span className="font-body-sm text-body-sm text-outline">Required on all fund payouts &gt; UGX 500k</span>
</div>
</div>
<Icon name="toggle_on" className="text-tertiary text-[20px]" />
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Active Authorized Staff (3/5 Seats)</span>
<div className="flex flex-col gap-2 mt-1">

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-label-sm flex items-center justify-center">KR</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Kizito Ronald</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Store General Manager</span>
</div>
</div>
<span className="font-code-display text-[10px] text-tertiary px-1.5 py-0.5 rounded bg-surface-container-high">Full Admin</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary font-bold text-label-sm flex items-center justify-center">BN</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Brenda Nabirye</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fulfillment Lead (Nakasero)</span>
</div>
</div>
<span className="font-code-display text-[10px] text-outline px-1.5 py-0.5 rounded bg-surface-container-high">Dispatch Role</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-outline font-bold text-label-sm flex items-center justify-center">IK</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Isaac Kato</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Inventory Clerk</span>
</div>
</div>
<span className="font-code-display text-[10px] text-outline px-1.5 py-0.5 rounded bg-surface-container-high">Catalog View</span>
</div>
</div>
</div>
<button className="h-10 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[16px]" />
<span>Invite Operational Staff</span>
</button>
</section>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
