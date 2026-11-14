// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_applications_kyc_swiftcart_desktop_dark/code.html
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
      <aside className="fixed z-50 left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(14,27,77,0.04)] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col"><div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex flex-col"><span className="font-label-lg text-label-lg text-primary tracking-tight leading-none">SwiftCart</span><span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Admin Console</span></div></div><span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">UG Hub</span></div><div className="px-space-md py-space-sm"><div className="bg-surface-container rounded-xl p-space-sm flex items-center justify-between"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface">Kampala Central Hub</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">Optimal</span></div></div><nav className="px-space-md flex flex-col gap-1 py-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-label-lg"><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="dashboard" className="text-[20px]" /><span>Overview</span></div></a><a aria-current="page" className="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all bg-primary-container text-on-primary-container font-label-lg" data-path="seller-applications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[20px]" /><span>Seller Applications</span></div><span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="sellers-directory" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="verified" className="text-[20px]" /><span>Sellers Directory</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="riders-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[20px]" /><span>Riders Fleet</span></div><span className="w-2 h-2 rounded-full bg-tertiary"></span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="product-moderation" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="fact_check" className="text-[20px]" /><span>Product Moderation</span></div><span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">8</span></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="orders-oversight" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_shipping" className="text-[20px]" /><span>Orders Oversight</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="escrow-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shield" className="text-[20px]" /><span>Escrow &amp; Disputes</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="payout-queue" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="payments" className="text-[20px]" /><span>Payout Queue</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="platform-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="tune" className="text-[20px]" /><span>Platform Settings</span></div></a><a className="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="audit-log" href="#" onClick={() => alertToast('Action triggered')}><div className="flex items-center gap-space-sm"><Icon name="history" className="text-[20px]" /><span>Audit Log</span></div></a></nav></div><div className="p-space-md bg-surface-container-low m-space-sm rounded-xl flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Telecom Rails</span><span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>99.9%</span></div><div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container-lowest"><span className="font-label-sm text-label-sm text-on-surface font-semibold">MTN MoMo API</span><span className="font-label-sm text-label-sm text-tertiary font-bold">Active</span></div><div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container-lowest"><span className="font-label-sm text-label-sm text-on-surface font-semibold">Airtel Money API</span><span className="font-label-sm text-label-sm text-tertiary font-bold">Active</span></div></div></aside>
<div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md flex-1 max-w-xl"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="w-full flex items-center gap-space-xs bg-surface-container px-space-md py-2 rounded-xl"><Icon name="search" className="text-on-surface-variant text-[20px]" /><input className="bg-transparent border-0 outline-none w-full font-body-sm text-body-sm text-on-surface placeholder:text-outline" placeholder="Search orders, vendors, escrows, phone numbers..." type="text" /><span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant shadow-sm">⌘K</span></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1.5 bg-surface-container-low rounded-full"><Icon name="radio_button_checked" className="text-[16px] text-tertiary" /><span className="font-label-sm text-label-sm text-on-surface">Kampala Central: 12ms</span></div><button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[20px]" /></button><div className="relative"><button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /></button><span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full"></span></div><div className="h-6 w-px bg-outline-variant"></div><div className="flex items-center gap-space-sm pl-space-xs"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-primary font-semibold leading-tight">Super Admin</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="relative pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full text-on-surface">

<div className="w-full bg-container-dark-low rounded-xl px-space-lg py-2 mb-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-tertiary-container/30 text-tertiary">
<Icon name="verified_user" className="text-[16px]" />
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Statutory Compliance Node:</span>
<span className="font-body-sm text-body-sm text-on-surface">Integrated Direct Rails: <strong className="text-tertiary">URSB API Online</strong> (Uganda Registration Services Bureau) • <strong className="text-tertiary">URA EFRIS Node-4</strong> Active • <strong className="text-tertiary">NIRA Biometric Vault</strong> Responsive</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span> Live Validation Active
      </span>
<span className="font-label-sm text-label-sm text-outline">Queue ID: #KYC-UG-882</span>
</div>
</div>

<div className="flex flex-col gap-1 mb-space-lg">
<div className="flex items-center gap-2 font-label-md text-label-md text-secondary">
<span className="hover:text-on-surface transition-colors cursor-pointer">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-primary font-bold">Seller Applications &amp; KYC</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Seller Applications &amp; Business KYC Dossier Review</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Multi-tier statutory verification hub verifying enterprise merchants against Ugandan official registry ledgers.</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-xl bg-container-dark-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md shadow-sm transition-all flex items-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="download_for_offline" className="text-[18px]" />
<span>Export KYC Batch</span>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-container-dark-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md shadow-sm transition-all flex items-center gap-2" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="rule_folder" className="text-[18px]" />
<span>Audit Policy v2.4</span>
</button>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md mb-space-lg flex flex-col gap-space-md shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-md border-none">

<div className="flex items-center gap-1 overflow-x-auto">
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-all flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<span>All Applications</span>
<span className="px-1.5 py-0.5 rounded-full bg-container-dark-high font-label-sm text-label-sm text-secondary">42</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container font-bold transition-all flex items-center gap-2 shadow-sm" onClick={() => alertToast('Action triggered')}>
<span>Pending Review</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">14</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-all flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<span>Approved</span>
<span className="px-1.5 py-0.5 rounded-full bg-container-dark-high font-label-sm text-label-sm text-secondary">24</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-all flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<span>Request More Info</span>
<span className="px-1.5 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">3</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-container-dark-high transition-all flex items-center gap-2" onClick={() => alertToast('Action triggered')}>
<span>Rejected</span>
<span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm">1</span>
</button>
</div>

<div className="hidden xl:flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Auto-syncing incoming seller queues</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center pt-space-xs">
<div className="md:col-span-5 relative">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
<input className="w-full bg-surface-container rounded-xl pl-10 pr-space-md py-2.5 font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none focus:bg-surface-container-high transition-all" placeholder="Search business name, trade name, TIN, or applicant..." type="text" value="" />
</div>
<div className="md:col-span-7 flex flex-wrap md:flex-nowrap items-center gap-space-sm">
<div className="flex-1 min-w-[130px] bg-surface-container rounded-xl px-space-md py-2 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">District</span>
<span className="font-label-md text-label-md text-on-surface truncate">Kampala Central</span>
</div>
<Icon name="expand_more" className="text-[18px] text-secondary" />
</div>
<div className="flex-1 min-w-[140px] bg-surface-container rounded-xl px-space-md py-2 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Category</span>
<span className="font-label-md text-label-md text-on-surface truncate">Consumer Electronics</span>
</div>
<Icon name="expand_more" className="text-[18px] text-secondary" />
</div>
<div className="flex-1 min-w-[120px] bg-surface-container rounded-xl px-space-md py-2 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Risk Score</span>
<span className="font-label-md text-label-md text-tertiary truncate">Low Risk (&lt;15%)</span>
</div>
<Icon name="expand_more" className="text-[18px] text-secondary" />
</div>
<button className="p-2.5 bg-surface-container rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-center" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="filter_alt" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Pending Dossiers (14)</span>
<span className="font-label-sm text-label-sm text-outline">Sorted by: Urgent First</span>
</div>

<div className="relative bg-container-dark-high rounded-xl p-space-md cursor-pointer transition-all shadow-md transform hover:-translate-y-0.5">
<div className="absolute left-0 top-3 bottom-3 w-1.5 bg-primary-container rounded-r-full"></div>
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap mb-1">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" /> URSB Verified
              </span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-sm text-label-sm font-semibold">TIN Match</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Uganda Tech Gadgets Ltd</h3>
<p className="font-body-sm text-body-sm text-primary font-medium mt-0.5 truncate">Brand: GadgetPoint Kampala</p>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-extrabold">Risk A+</span>
<span className="font-body-sm text-body-sm text-outline mt-1">4h ago</span>
</div>
</div>
<div className="pl-2 mt-3 pt-3 bg-surface-container/50 -mx-space-md px-space-md -mb-space-md pb-space-md rounded-b-xl flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="person" className="text-[16px] text-outline" />
<span className="truncate">Brenda Atuhaire</span>
</div>
<span className="text-amber-warning font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span> Pending Audit
          </span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md cursor-pointer hover:bg-container-dark-high transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap mb-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">Groceries &amp; Produce</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Organic Harvest</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">Brand: OrganicFresh UG</p>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">Risk A</span>
<span className="font-body-sm text-body-sm text-outline mt-1">8h ago</span>
</div>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="person" className="text-[16px] text-outline" />
<span>David Ssempala</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">Docs Uploaded</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md cursor-pointer hover:bg-container-dark-high transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap mb-1">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-tertiary font-label-sm text-label-sm">Biometrics Match</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">Fashion &amp; Apparel</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Victoria Apparel &amp; Footwear</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">Applicant: Grace Nakato</p>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold">Risk B+</span>
<span className="font-body-sm text-body-sm text-outline mt-1">14h ago</span>
</div>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm font-semibold">
<Icon name="fingerprint" className="text-[15px]" /> NIRA Verified
          </div>
<span className="text-tertiary font-label-sm text-label-sm">Review Ready</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md cursor-pointer hover:bg-container-dark-high transition-all shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-1.5 flex-wrap mb-1">
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">Pending URA TIN</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">Renewable Energy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Pearl Solar Systems</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">Applicant: Arthur Kimbugwe</p>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-sm text-label-sm font-bold">Risk C</span>
<span className="font-body-sm text-body-sm text-outline mt-1">1d ago</span>
</div>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
<span className="text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<Icon name="sync_problem" className="text-[15px]" /> Awaiting EFRIS Ping
          </span>
<span className="font-label-sm text-label-sm text-outline">Action Paused</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm mt-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">KYC Throughput (Today)</span>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-price-display text-price-display text-on-surface">19 / 24</span>
<span className="font-body-sm text-body-sm text-outline">Target SLA: 90min</span>
</div>

<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="79, 100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<span className="absolute font-label-sm text-label-sm font-bold text-on-surface">79%</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-lg">

<div className="bg-container-dark-low rounded-xl p-space-xl shadow-md relative overflow-hidden">

<div className="absolute -right-16 -top-16 w-56 h-56 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">

<div className="w-16 h-16 rounded-xl bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary relative shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Modern smartphone accessories and retail display in an upscale Kampala boutique mall with crisp ambient lighting and clean shelving" src={`${assetBase}/images/4ee9143279de537d.webp`} />
<div className="absolute inset-0 bg-primary-container/20"></div>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-sm flex-wrap">
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Uganda Tech Gadgets Ltd</h2>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="verified" className="text-[13px]" /> Pre-Audited
                </span>
</div>
<div className="flex items-center gap-space-sm mt-1 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="text-primary font-semibold">Trade: GadgetPoint Kampala</span>
<span className="text-outline">•</span>
<span className="font-label-sm text-label-sm bg-container-dark-high px-2 py-0.5 rounded text-secondary">ID: SC-APP-2024-0891</span>
<span className="text-outline">•</span>
<span className="text-outline">Submitted: Today, 09:24 EAT</span>
</div>
</div>
</div>

<div className="flex flex-col md:items-end gap-1">
<div className="flex items-center gap-2 bg-container-dark-high px-space-md py-1.5 rounded-xl shadow-sm">
<Icon name="call" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface">+256 772 884 192</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-bold">MTN</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Masked Gateway: Direct In-App Dialing Active</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-lg pt-space-md bg-container-dark-high/50 -mx-space-xl -mb-space-xl px-space-xl pb-space-lg rounded-b-xl">
<div className="flex items-start gap-space-sm">
<Icon name="storefront" className="text-secondary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Physical Premises</span>
<span className="font-body-md text-body-md text-on-surface font-medium leading-snug">Shop #12, Pioneer Mall, Kampala Road</span>
<span className="font-label-sm text-label-sm text-secondary">Nakasero Ward, Kampala Central</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<Icon name="account_circle" className="text-secondary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Managing Director</span>
<span className="font-body-md text-body-md text-on-surface font-semibold leading-snug">Brenda Atuhaire</span>
<span className="font-label-sm text-label-sm text-tertiary font-medium">92% Majority Shareholder</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<Icon name="category" className="text-secondary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Approved Vertical</span>
<span className="font-body-md text-body-md text-on-surface font-semibold leading-snug">Consumer Electronics</span>
<span className="font-label-sm text-label-sm text-outline">Smartphones, Audio &amp; Wearables</span>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-xl shadow-md flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Statutory Audit &amp; Government Ledger Verification</h3>
</div>
<span className="px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-md text-label-md font-bold flex items-center gap-1.5">
<Icon name="task_alt" className="text-[16px]" /> 4 of 4 Verification Passes Complete
          </span>
</div>
<div className="flex flex-col gap-space-md">

<div className="bg-surface-container rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center font-bold flex-shrink-0">
<Icon name="account_balance" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Step 1: Legal Registration (URSB)</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-bold">100% Match</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant mt-1 flex-wrap">
<span>Reg No: <strong className="text-on-surface font-mono">80024918239</strong></span>
<span className="text-outline">•</span>
<span>Type: <strong className="text-on-surface">Private Limited Company</strong></span>
<span className="text-outline">•</span>
<span className="text-tertiary">Active in URSB Public Registry</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<button className="px-space-md py-1.5 rounded-lg bg-container-dark-high hover:bg-surface-container-highest text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="description" className="text-[16px] text-primary" />
<span>Certificate_of_Incorporation.pdf</span>
<Icon name="open_in_new" className="text-[14px]" />
</button>
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="check_circle" className="text-[18px]" />
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center font-bold flex-shrink-0">
<Icon name="receipt_long" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Step 2: Tax Compliance (URA EFRIS)</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-bold">Verified</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant mt-1 flex-wrap">
<span>TIN: <strong className="text-on-surface font-mono">1009842104</strong></span>
<span className="text-outline">•</span>
<span>EFRIS Electronic Invoicing: <strong className="text-tertiary">Active &amp; Linked</strong></span>
<span className="text-outline">•</span>
<span>Tax Clearance Valid: <strong className="text-on-surface">Dec 2025</strong></span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<button className="px-space-md py-1.5 rounded-lg bg-container-dark-high hover:bg-surface-container-highest text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="verified" className="text-[16px]" />
<span>URA_Clearance_2024.pdf</span>
<Icon name="open_in_new" className="text-[14px]" />
</button>
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="check_circle" className="text-[18px]" />
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center font-bold flex-shrink-0">
<Icon name="domain" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Step 3: Local Authority &amp; Premises (KCCA)</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-bold">Premises Inspected</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant mt-1 flex-wrap">
<span>License: <strong className="text-on-surface font-mono">KCCA/CENTRAL/2024/18290</strong></span>
<span className="text-outline">•</span>
<span>Physical Storefront Verified: <strong className="text-on-surface">Pioneer Mall Ground Fl.</strong></span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<span className="px-2 py-1 rounded bg-container-dark-high text-on-surface-variant font-label-sm text-label-sm">Field Agent #104 Passed</span>
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="check_circle" className="text-[18px]" />
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center font-bold flex-shrink-0">
<Icon name="fingerprint" className="text-[20px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Step 4: Director Biometrics &amp; Identity (NIRA)</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold">99.4% Face Match</span>
</div>
<div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant mt-1 flex-wrap">
<span>NIN: <strong className="text-on-surface font-mono">CM8204918293LA</strong> (Brenda Atuhaire)</span>
<span className="text-outline">•</span>
<span>National Voter ID Ledger Check: <strong className="text-tertiary">Authentic</strong></span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<div className="w-9 h-9 rounded-lg overflow-hidden bg-container-dark-high border-none flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an authoritative female Ugandan business director looking confident against clean professional backdrop" src={`${assetBase}/images/b2d97d2c30dd8211.webp`} />
</div>
<div className="w-8 h-8 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="check_circle" className="text-[18px]" />
</div>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="payments" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Proposed Settlement &amp; Mobile Money Rails</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Zero-Drift Direct Name Verification</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-mtn-yellow"></span>
<span className="font-label-md text-label-md text-on-surface font-bold">Primary Rail: MTN MoMo Business</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" /> Exact Match
              </span>
</div>
<div className="flex flex-col gap-1 mt-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Registered MSISDN:</span>
<span className="text-on-surface font-mono font-bold">+256 772 884 192</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">KYC Account Name:</span>
<span className="text-tertiary font-bold">Brenda Atuhaire</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Daily Liquidity Cap:</span>
<span className="text-on-surface font-semibold">UGX 20,000,000</span>
</div>
</div>
<div className="mt-2 pt-2 bg-container-dark-high/40 -mx-space-md px-space-md -mb-space-md pb-space-sm rounded-b-xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">MTN MoMo OpenAPI Token</span>
<span className="font-label-sm text-label-sm text-tertiary font-mono">TOKEN_ACTIVE_LIVE</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-bold">Secondary: Stanbic Bank Uganda</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">Cleared</span>
</div>
<div className="flex flex-col gap-1 mt-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Account Number:</span>
<span className="text-on-surface font-mono font-bold">9030 •••• 1824</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Entity Name:</span>
<span className="text-on-surface font-semibold">Uganda Tech Gadgets Ltd</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Branch / Swift:</span>
<span className="text-on-surface">Kampala Road (SBICUGKX)</span>
</div>
</div>
<div className="mt-2 pt-2 bg-container-dark-high/40 -mx-space-md px-space-md -mb-space-md pb-space-sm rounded-b-xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">EFT / Real-Time Bank Settlement</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified</span>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-xl shadow-xl flex flex-col gap-space-lg relative border-none">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container rounded-xl p-space-md">
<div className="flex items-center gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Algorithmic Risk Assessment</span>
<div className="flex items-baseline gap-2">
<span className="font-price-display text-price-display text-tertiary">98</span>
<span className="font-headline-sm text-headline-sm text-outline">/ 100</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-extrabold uppercase">Grade A+ Low Risk</span>
</div>
</div>
</div>
<div className="flex flex-col sm:items-end">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Approved Merchant Tier</span>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Tier 1 Verified Merchant Eligible</span>
<span className="px-2 py-0.5 rounded bg-container-dark-high font-label-sm text-label-sm text-secondary font-mono">UGX 15,000,000 Cap</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
<Icon name="edit_note" className="text-[16px] text-primary" />
              Compliance Officer Audit Notes &amp; Ledger Log:
            </label>
<span className="font-label-sm text-label-sm text-outline">Auditor: Kizito Ronald (Super Admin)</span>
</div>
<div className="relative">
<textarea className="w-full bg-surface-container rounded-xl p-space-md font-body-md text-body-md text-on-surface outline-none focus:bg-surface-container-high transition-all resize-none shadow-inner" placeholder="Enter statutory notes or requirements..." rows={3}>URSB registration authentic, TIN active on EFRIS. Biometrics verified with 99.4% confidence via NIRA gateway. Physical premises inspected at Pioneer Mall. Ready for unconditional onboarding.</textarea>
</div>
</div>

<div className="pt-space-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<button className="h-12 px-space-md rounded-xl bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="block" className="text-[18px]" />
<span>Reject Application</span>
</button>
<button className="h-12 px-space-md rounded-xl bg-container-dark-high hover:bg-surface-container-highest text-secondary hover:text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="help_outline" className="text-[18px]" />
<span>Request Additional Documents</span>
</button>
</div>

<button className="h-12 px-space-xl rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="verified" className="text-[20px]" />
<span>Approve &amp; Issue Merchant Storefront</span>
</button>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Screen;
