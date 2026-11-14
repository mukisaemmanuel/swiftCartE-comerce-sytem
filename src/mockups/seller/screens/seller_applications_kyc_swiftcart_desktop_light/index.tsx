// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_applications_kyc_swiftcart_desktop_light/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-container-dark-low z-50 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.45)]"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col h-full"><div className="h-16 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface leading-none tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Admin HQ Uganda</span></div></div><div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface">Kampala Central Hub</span></div><span className="font-label-sm text-label-sm text-emerald-escrow bg-emerald-escrow/10 px-space-xs py-0.5 rounded">ONLINE</span></div><nav className="flex-1 px-space-sm py-space-md space-y-1 overflow-y-auto" data-active-classes="bg-primary-container text-on-primary-container font-headline-sm"><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="grid_view" className="text-[20px]" /><span className="font-label-md text-label-md">Overview</span></div></a><a aria-current="page" className="flex items-center justify-between px-space-md py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary-container font-headline-sm" data-path="seller-applications" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="how_to_reg" className="text-[20px]" /><span className="font-label-md text-label-md">Seller Applications</span></div><span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-xs py-0.5 rounded-full font-bold">14</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="sellers-directory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[20px]" /><span className="font-label-md text-label-md">Sellers Directory</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="riders-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span className="font-label-md text-label-md">Riders Fleet</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="product-moderation" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="verified" className="text-[20px]" /><span className="font-label-md text-label-md">Product Moderation</span></div><span className="font-label-sm text-label-sm bg-amber-warning text-surface-dark px-space-xs py-0.5 rounded-full font-bold">8</span></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="orders-oversight" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[20px]" /><span className="font-label-md text-label-md">Orders Oversight</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="escrow-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shield" className="text-[20px]" /><span className="font-label-md text-label-md">Escrow &amp; Disputes</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="payout-queue" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="payments" className="text-[20px]" /><span className="font-label-md text-label-md">Payout Queue</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="platform-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[20px]" /><span className="font-label-md text-label-md">Platform Settings</span></div></a><a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="audit-log" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="history_edu" className="text-[20px]" /><span className="font-label-md text-label-md">Audit Log</span></div></a></nav><div className="p-space-md bg-surface-container-lowest m-space-sm rounded-xl space-y-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Telecom Core Rails</span><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-mtn-yellow"></span><span className="font-body-sm text-body-sm text-on-surface">MTN MoMo</span></div><span className="font-label-sm text-label-sm text-emerald-escrow">99.9%</span></div><div className="flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-airtel-red"></span><span className="font-body-sm text-body-sm text-on-surface">Airtel Money</span></div><span className="font-label-sm text-label-sm text-emerald-escrow">100%</span></div></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-container-dark-low/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.45)] px-space-xl flex items-center justify-between"><div className="flex items-center gap-space-lg flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="relative w-full"><Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" /><input className="w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm pl-9 pr-16 py-space-sm rounded-lg placeholder-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search merchants, riders, orders, escrow hashes..." type="text" /><kbd className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded shadow">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-md px-space-md py-space-xs bg-surface-container-high rounded-lg"><div className="flex items-center gap-space-xs"><Icon name="swap_calls" className="text-[16px] text-mtn-yellow" /><span className="font-label-sm text-label-sm text-on-surface">MTN MoMo Rail</span><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span></div><div className="w-px h-3 bg-surface-variant"></div><div className="flex items-center gap-space-xs"><Icon name="swap_calls" className="text-[16px] text-airtel-red" /><span className="font-label-sm text-label-sm text-on-surface">Airtel Rail</span><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span></div></div><button aria-label="Theme Mode" className="p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center justify-center" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><button aria-label="Notifications" className="relative p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center justify-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger-penalty ring-2 ring-container-dark-low"></span></button><div className="h-8 w-px bg-surface-variant"></div><div className="flex items-center gap-space-sm"><div className="flex flex-col text-right hidden sm:flex"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-primary">Super Admin</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="relative w-full pt-16 bg-surface-dark px-space-xl py-space-lg"><div className="flex flex-col w-full">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg flex flex-col gap-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-body-sm text-outline" />
<span className="font-label-md text-label-md text-primary font-bold">Seller Applications &amp; KYC</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-md py-1 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface tracking-wider uppercase">Live Regulatory Hook: URSB / URA / NIRA Direct Rails</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-extrabold block">Compliance &amp; Onboarding Workbench</span>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Seller Applications &amp; Business KYC Dossier Review</h1>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-space-xs bg-surface-container text-on-surface font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:bg-surface-container-high transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>Batch Audit Export</span>
</button>
<button className="flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:opacity-90 transition-opacity shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="rule" className="text-[18px]" />
<span>Run Bulk Registry Sync</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto py-1">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
        All Applications <span className="ml-1 text-on-surface-variant font-bold">42</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md whitespace-nowrap shadow-sm" onClick={() => alertToast('Action triggered')}>
        Pending Review <span className="ml-1 px-1.5 py-0.5 rounded-full bg-on-primary-container/20 text-on-primary-container font-bold text-label-sm">14</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
        Approved <span className="ml-1 text-on-surface-variant font-bold">24</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
        Request More Info <span className="ml-1 text-amber-warning font-bold">3</span>
</button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
        Rejected <span className="ml-1 text-danger-penalty font-bold">1</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center pt-space-xs">
<div className="md:col-span-6 relative">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface text-on-surface font-body-sm text-body-sm pl-9 pr-space-md py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Search by TIN, URSB Reg #, business name, or director NIN..." type="text" />
</div>
<div className="md:col-span-2">
<select className="w-full bg-surface text-on-surface font-body-sm text-body-sm px-space-md py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
<option>All Districts (Kampala Focus)</option>
<option>Kampala Central</option>
<option>Nakasero &amp; Kololo</option>
<option>Wakiso &amp; Entebbe</option>
<option>Mukono Industrial Area</option>
<option>Jinja Commercial</option>
</select>
</div>
<div className="md:col-span-2">
<select className="w-full bg-surface text-on-surface font-body-sm text-body-sm px-space-md py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
<option>All Categories</option>
<option>Consumer Electronics</option>
<option>Groceries &amp; Fresh Food</option>
<option>Fashion &amp; Apparel</option>
<option>Solar &amp; Clean Energy</option>
<option>Health &amp; Pharmaceuticals</option>
</select>
</div>
<div className="md:col-span-2">
<select className="w-full bg-surface text-on-surface font-body-sm text-body-sm px-space-md py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
<option>Risk Profile: Any</option>
<option>Low Risk (A+)</option>
<option>Moderate Risk (B)</option>
<option>High Risk / Manual Audit</option>
</select>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<aside className="lg:col-span-4 flex flex-col gap-space-md">
<div className="flex items-center justify-between px-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Applications Queue (14 Pending)</span>
<span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1 cursor-pointer">
<Icon name="tune" className="text-[14px]" /> Sort: Urgency
        </span>
</div>

<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg relative overflow-hidden bg-gradient-to-r from-primary/5 via-surface-container-lowest to-surface-container-lowest">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-xs mb-space-xs pl-2">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-bold flex items-center gap-1">
<Icon name="verified" className="text-[12px]" /> Risk: Low (A+)
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">4h ago</span>
</div>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">Pending Verification</span>
</div>
<div className="pl-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Uganda Tech Gadgets Ltd</h2>
<p className="font-body-sm text-body-sm text-primary font-bold mt-0.5">Brand: GadgetPoint Kampala</p>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
<span className="flex items-center gap-1"><Icon name="person" className="text-[14px]" /> Brenda Atuhaire</span>
<span>•</span>
<span className="flex items-center gap-1"><Icon name="devices" className="text-[14px]" /> Electronics</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-space-sm">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold flex items-center gap-1">
<Icon name="task_alt" className="text-emerald-escrow text-[14px]" /> URSB Verified
            </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold flex items-center gap-1">
<Icon name="task_alt" className="text-emerald-escrow text-[14px]" /> TIN Match
            </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold flex items-center gap-1">
<Icon name="cell_tower" className="text-mtn-yellow text-[14px]" /> MoMo Validated
            </span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm cursor-pointer transition-all hover:bg-surface-container-high">
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">Risk: Moderate (B)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">8h ago</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant font-bold">Docs Uploaded</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Kampala Organic Harvest</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Brand: Nakasero Direct Fresh</p>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
<span className="flex items-center gap-1"><Icon name="person" className="text-[14px]" /> David Ssempala</span>
<span>•</span>
<span className="flex items-center gap-1"><Icon name="nutrition" className="text-[14px]" /> Groceries</span>
</div>
<div className="flex items-center gap-space-xs mt-space-sm">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant flex items-center gap-1">
<Icon name="pending" className="text-[14px] text-amber-warning" /> KCCA Hygiene Pending
            </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold">TIN #100281920</span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm cursor-pointer transition-all hover:bg-surface-container-high">
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-bold">Risk: Low (A)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14h ago</span>
</div>
<span className="font-label-sm text-label-sm bg-emerald-escrow/10 text-emerald-escrow px-2 py-0.5 rounded-full font-bold">Biometrics Passed</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Victoria Apparel &amp; Footwear</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Brand: Victoria Trends Jinja</p>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
<span className="flex items-center gap-1"><Icon name="person" className="text-[14px]" /> Grace Nakato</span>
<span>•</span>
<span className="flex items-center gap-1"><Icon name="checkroom" className="text-[14px]" /> Fashion &amp; Apparel</span>
</div>
<div className="flex items-center gap-space-xs mt-space-sm">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold flex items-center gap-1">
<Icon name="fingerprint" className="text-emerald-escrow text-[14px]" /> NIRA 99.8% Match
            </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">3 Docs</span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm cursor-pointer transition-all hover:bg-surface-container-high">
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-amber-warning/10 text-amber-warning font-bold">Risk: Review</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1d ago</span>
</div>
<span className="font-label-sm text-label-sm bg-amber-warning/10 text-amber-warning px-2 py-0.5 rounded-full font-bold">Awaiting URA</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Pearl Solar Systems</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Brand: Pearl Energy Kampala</p>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
<span className="flex items-center gap-1"><Icon name="person" className="text-[14px]" /> Moses Kato</span>
<span>•</span>
<span className="flex items-center gap-1"><Icon name="solar_power" className="text-[14px]" /> Clean Tech</span>
</div>
<div className="flex items-center gap-space-xs mt-space-sm">
<span className="font-label-sm text-label-sm bg-amber-warning/10 text-amber-warning px-2 py-0.5 rounded font-semibold flex items-center gap-1">
<Icon name="warning" className="text-[14px]" /> EFRIS Link Pending
            </span>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">KCCA Verified</span>
</div>
</div>
</article>

<div className="bg-surface-container p-space-md rounded-xl space-y-space-xs shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Gov APIs Gateway</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">All Responsive</span>
</div>
<div className="grid grid-cols-3 gap-space-xs text-center pt-1">
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm block text-on-surface-variant">URSB API</span>
<span className="font-label-md text-label-md text-emerald-escrow font-extrabold">214ms</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm block text-on-surface-variant">URA EFRIS</span>
<span className="font-label-md text-label-md text-emerald-escrow font-extrabold">180ms</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded-lg">
<span className="font-label-sm text-label-sm block text-on-surface-variant">NIRA IVS</span>
<span className="font-label-md text-label-md text-emerald-escrow font-extrabold">340ms</span>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-8 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md pb-space-md">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary shadow-inner shrink-0">
<Icon name="devices_other" className="text-[36px]" />
</div>
<div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface font-black">Uganda Tech Gadgets Ltd</span>
<span className="font-label-sm text-label-sm bg-emerald-escrow/10 text-emerald-escrow px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> Swift Escrow Protected Ready
                </span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Trade Storefront: GadgetPoint Kampala</p>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant mt-1">
<span>Application ID: <strong className="text-on-surface font-semibold">SC-APP-2024-0891</strong></span>
<span>•</span>
<span>Assigned Examiner: <strong className="text-on-surface font-semibold">Kizito Ronald</strong></span>
<span>•</span>
<span>Submittal: <strong>Today, 08:42 EAT</strong></span>
</div>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Overall System Trust</span>
<span className="font-price-display text-price-display text-emerald-escrow font-black">98 <span className="text-body-sm font-normal text-on-surface-variant">/ 100</span></span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-bold mt-1">Tier-1 Merchant Grade</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-md bg-surface-container p-space-md rounded-xl">
<div className="flex items-center gap-space-xs">
<Icon name="store" className="text-primary text-[20px]" />
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Physical Showroom / HQ</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Shop #12, Pioneer Mall, Kampala Road</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="call" className="text-primary text-[20px]" />
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Primary Business Line</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">+256 772 884 192 (MTN Verified)</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<Icon name="badge" className="text-primary text-[20px]" />
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Authorized Director</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Brenda Atuhaire (Managing Director)</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-lg">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Statutory Audit &amp; Mandatory KYC Checklist</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Official integration with Republic of Uganda regulatory databases</p>
</div>
<span className="font-label-sm text-label-sm bg-emerald-escrow text-surface-container-lowest px-space-sm py-1 rounded-full font-bold flex items-center gap-1">
<Icon name="done_all" className="text-[14px]" /> 4 of 4 Automated Checks Cleared
          </span>
</div>
<div className="space-y-space-md">

<div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="gavel" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Step 1: Legal Registration (URSB)</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-bold">100% Active Match</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-space-md gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Reg #: <strong className="text-on-surface">80024918239</strong></span>
<span>Entity: <strong className="text-on-surface">Private Limited Co.</strong></span>
<span>Incorporated: <strong className="text-on-surface">14 Mar 2021</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" /> Live synchronization with URSB public corporate ledger confirms active legal standing.
                </p>
</div>
</div>
<div className="flex md:flex-col items-end justify-between shrink-0 gap-space-xs">
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="picture_as_pdf" className="text-[16px]" />
<span>Certificate_of_Incorporation.pdf</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Validated 09:12 EAT</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="receipt_long" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Step 2: Tax Compliance (URA EFRIS)</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-bold">Verified &amp; EFRIS Linked</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-space-md gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>TIN: <strong className="text-on-surface">1009842104</strong></span>
<span>Fiscal Device: <strong className="text-on-surface">System-to-System</strong></span>
<span>Clearance Valid: <strong className="text-on-surface">Dec 2025</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" /> Automated e-Invoicing enabled for swift VAT escrow disbursement.
                </p>
</div>
</div>
<div className="flex md:flex-col items-end justify-between shrink-0 gap-space-xs">
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[16px]" />
<span>URA_TCC_2024_2025.pdf</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">EFRIS Handshake 200 OK</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="domain" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Step 3: Local Authority &amp; Premises (KCCA)</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-bold">Physical Audit Cleared</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-space-md gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>License: <strong className="text-on-surface">KCCA/CENTRAL/2024/18290</strong></span>
<span>Zone: <strong className="text-on-surface">Nakasero Commercial</strong></span>
<span>Physical Inspection: <strong className="text-on-surface">Showroom Passed</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" /> Field Agent #KG-41 verified Pioneer Mall retail store inventory presence.
                </p>
</div>
</div>
<div className="flex md:flex-col items-end justify-between shrink-0 gap-space-xs">
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="map" className="text-[16px]" />
<span>KCCA_Permit_Proof.pdf</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Valid through 31 Dec 2024</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="fingerprint" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Step 4: Director Biometrics &amp; Identity (NIRA)</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-bold">99.4% Biometric Face Match</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-space-md gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>National ID: <strong className="text-on-surface">CM8204918293LA</strong></span>
<span>Registered Name: <strong className="text-on-surface">Brenda Atuhaire</strong></span>
<span>Sex / DOB: <strong className="text-on-surface">Female • 1989-11-20</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-emerald-escrow" /> Automated selfie liveness &amp; National Identification and Registration Authority ledger match confirmed.
                </p>
</div>
</div>
<div className="flex md:flex-col items-end justify-between shrink-0 gap-space-xs">
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="face" className="text-[16px]" />
<span>NIRA_NID_Scan.pdf</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Liveness Confidence: 99.4%</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Telecom &amp; Bank Payout Rails Verification</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Designated destination accounts for escrow release cycles</p>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow bg-emerald-escrow/10 px-space-sm py-1 rounded font-bold">2 Verified Channels</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md bg-surface-container rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-mtn-yellow/10 rounded-bl-full pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm bg-mtn-yellow text-surface-dark px-2 py-0.5 rounded font-black tracking-wider uppercase">PRIMARY DISBURSEMENT</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="verified" className="text-[16px]" /> KYC Name Match
                </span>
</div>
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="w-3 h-3 rounded-full bg-mtn-yellow"></span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">MTN MoMo Business Pay</h4>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Registered MSISDN:</span>
<span className="text-on-surface font-bold">+256 772 884 192</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">KYC Holder Name:</span>
<span className="text-on-surface font-bold">BRENDA ATUHAIRE</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Match Reliability:</span>
<span className="text-emerald-escrow font-extrabold">100% Exact Name Token Match</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Instant Settlements Enabled</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">Tier-1 MoMo Wallet</span>
</div>
</div>

<div className="p-space-md bg-surface-container rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-2 py-0.5 rounded font-black tracking-wider uppercase">BACKUP SWIFT / EFT</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow font-bold">
<Icon name="verified" className="text-[16px]" /> Account Active
                </span>
</div>
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Stanbic Bank Uganda Ltd</h4>
</div>
<div className="space-y-1 font-body-sm text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Account Number:</span>
<span className="text-on-surface font-bold">9030 •••• 1824</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Entity Title:</span>
<span className="text-on-surface font-bold">UGANDA TECH GADGETS LTD</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Branch:</span>
<span className="text-on-surface font-bold">Crested Towers Branch, Kampala</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-body-sm text-on-surface-variant">
<span>EFT Batched Payout Rail</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">Verified via Bank API</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md space-y-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Compliance Officer Determination &amp; Action Deck</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Final regulatory underwriting for merchant onboarding to SwiftCart Uganda</p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-md py-1.5 rounded-lg">
<Icon name="verified_user" className="text-emerald-escrow text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">Daily Payout Cap: <strong>UGX 15,000,000</strong></span>
</div>
</div>

<div>
<label className="font-label-md text-label-md text-on-surface block mb-1" htmlFor="compliance-notes">
            Statutory Examination Notes <span className="text-on-surface-variant font-normal">(Recorded directly to immutable compliance audit log)</span>
</label>
<textarea className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm p-space-md rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="compliance-notes" rows={3}>URSB registration authentic, TIN active on EFRIS. Ready for unconditional onboarding.</textarea>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container p-space-md rounded-xl">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Seller Escrow Hold Period</span>
<select className="w-full bg-surface-container-lowest text-on-surface font-label-md text-label-md p-2 rounded-lg focus:outline-none">
<option>Standard T+1 (24 Hours post delivery)</option>
<option>Same-Day Accelerated (T+0)</option>
<option>High Risk Extended (T+3)</option>
</select>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Commission Bracket</span>
<select className="w-full bg-surface-container-lowest text-on-surface font-label-md text-label-md p-2 rounded-lg focus:outline-none">
<option>Consumer Electronics Standard (6.5%)</option>
<option>Promotional Volume (4.5%)</option>
<option>Managed Logistics (8.0%)</option>
</select>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Storefront Badge Allocation</span>
<div className="flex items-center gap-space-xs mt-2">
<label className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface cursor-pointer">
<input checked={true} className="rounded text-primary focus:ring-0" type="checkbox" />
<span>Verified Merchant</span>
</label>
<label className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface cursor-pointer">
<input checked={true} className="rounded text-primary focus:ring-0" type="checkbox" />
<span>Swift Express</span>
</label>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm flex items-center justify-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="help_center" className="text-[18px]" />
<span>Request Additional Documents</span>
</button>
<button className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-surface-container text-error font-label-md text-label-md hover:bg-error-container hover:text-on-error-container transition-colors shadow-sm flex items-center justify-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="block" className="text-[18px]" />
<span>Reject Application</span>
</button>
</div>
<button className="w-full sm:w-auto px-space-xl py-3.5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:opacity-95 transition-all transform active:scale-98 flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="storefront" className="text-[20px]" />
<span>Approve &amp; Issue Merchant Storefront</span>
</button>
</div>
</section>
</main>
</div>
</div>
</main></div>
    </div>
  );
};

export default Screen;
