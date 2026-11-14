// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/seller/seller_add_product_5_step_ai_flow_swiftcart_desktop_dark/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      <aside className={`fixed z-50 left-0 top-0 h-full w-60 bg-surface z-50 flex flex-col justify-between py-space-md border-r border-surface-container-highest/60 select-none ${drawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`}><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="flex flex-col gap-space-md"><div className="px-space-md flex items-center justify-between pb-space-sm border-b border-surface-container-highest/40"><div className="flex items-center gap-space-xs"><Icon name="electric_moped" className="text-action-gradient-start text-[20px]" /><span className="font-label-lg text-label-lg tracking-wider text-on-surface uppercase">SwiftCart</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm uppercase font-bold tracking-tight">Uganda</span></div><nav className="flex flex-col gap-space-sm px-space-sm overflow-y-auto" data-active-classes="bg-surface-container-high text-on-surface font-label-md font-bold rounded-lg border-l-2 border-action-gradient-start"><div className="px-space-sm pt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Daily Operations</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="dashboard" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Overview</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="shopping_bag" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">14 Pending</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="products-inventory" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="inventory_2" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Products &amp; Inventory</span></div><span className="px-1.5 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">2 Low</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="riders-logistics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="two_wheeler" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Riders &amp; Logistics</span></div><span className="px-1.5 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold">6 Active</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Post-Purchase</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="returns-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="warning" className="text-[19px] text-danger-penalty group-hover:text-error" /><span className="font-body-md text-body-md">Returns &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold">1 Case</span></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Business &amp; Finance</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="wallet-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><div className="flex items-center gap-space-sm"><Icon name="account_balance_wallet" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Wallet &amp; Payouts</span></div><span className="font-label-sm text-label-sm text-tertiary font-bold">14.8M</span></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="analytics-heatmaps" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="bar_chart" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Analytics &amp; Heatmaps</span></div></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="discounts-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="local_offer" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Discounts &amp; Ads</span></div></a><div className="px-space-sm pt-space-xs mt-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider font-bold">Settings</span></div><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="store-profile-kyc" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="storefront" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Store Profile &amp; KYC</span></div><Icon name="verified" className="text-emerald-escrow text-[16px]" /></a><a className="group flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="settings-notifications" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><div className="flex items-center gap-space-sm"><Icon name="settings" className="text-[19px] text-on-surface-variant group-hover:text-on-surface" /><span className="font-body-md text-body-md">Settings</span></div></a></nav></div><div className="px-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-highest/40 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kampala Hub Node</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Direct Escrow Active</span></div></div><Icon name="lock" className="text-on-surface-variant text-[16px]" /></div></div></aside>
<div className="pl-0 lg:pl-60 min-h-screen bg-surface-dark flex flex-col"><header className="fixed top-0 left-0 lg:left-60 right-0 h-16 bg-surface/90 backdrop-blur-md z-40 px-space-xl flex items-center justify-between border-b border-surface-container-highest/60"><div className="flex items-center gap-space-md"><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><span className="px-2 py-0.5 rounded bg-surface-container-high text-action-gradient-start font-label-sm text-label-sm font-bold uppercase tracking-widest">Seller Portal</span><div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant pl-space-sm border-l border-surface-container-highest/60"><Icon name="verified" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">SoundCore Uganda Official</span><span className="font-label-sm text-label-sm text-on-surface-variant/80">URSB Verified • Nakasero Flagship</span></div></div></div><div className="flex items-center gap-space-lg"><div className="relative hidden md:block w-72"><Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" /><input className="w-full h-10 bg-surface-container-low rounded-lg pl-9 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-highest/50" placeholder="Search SKU, Order ID, Rider..." type="text" /></div><div className="flex items-center gap-space-sm"><div className="flex items-center p-1 rounded-lg bg-surface-container-low border border-surface-container-highest/50"><button className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[15px]" />Dark</button><button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[15px]" />Light</button></div><button className="relative p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors border border-surface-container-highest/50" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-airtel-red ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-sm border-l border-surface-container-highest/60"><div className="relative flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs">KR</div><span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-escrow ring-2 ring-surface"></span></div><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Kizito Ronald</span><span className="font-label-sm text-label-sm text-on-surface-variant/70">Store Manager</span></div></div></div></div></header><main className="relative pt-16 flex-1 w-full px-space-xl py-space-lg bg-surface-dark"><div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<div className="flex items-center gap-2">
<span className="hover:text-on-surface transition-colors cursor-pointer">Merchant Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="hover:text-on-surface transition-colors cursor-pointer">Products &amp; Inventory</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Add New Product</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant/70 normal-case">
<Icon name="cloud_done" className="text-[16px] text-emerald-escrow" />
<span>Auto-saved 14s ago • Kampala Hub Cloud</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Add New Product to Store Catalog</h1>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-action-gradient-start/20 to-action-gradient-end/20 text-action-gradient-start font-label-sm text-label-sm font-bold tracking-wider uppercase border border-action-gradient-start/30">
<Icon name="auto_awesome" className="text-[15px] animate-pulse" />
          AI Accelerated Flow
        </div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="drafts" className="text-[17px]" />
          Save Draft
        </button>
<button className="px-space-md py-2 rounded-xl bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md transition-all flex items-center gap-1.5 border border-danger-penalty/20" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[17px]" />
          Discard Flow
        </button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md">
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm relative">

<div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container/40 hover:bg-surface-container transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold tracking-wider">STEP 01</span>
<span className="w-5 h-5 rounded-full bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="check" className="text-[14px]" />
</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">Photos &amp; Media</span>
<span className="font-body-sm text-body-sm text-emerald-escrow/90">4 High-res uploaded</span>
<div className="w-full h-1 bg-emerald-escrow rounded-full mt-1"></div>
</div>

<div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container-high shadow-lg relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-action-gradient-start to-action-gradient-end"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold tracking-wider">STEP 02 • ACTIVE</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px] font-bold">In Studio</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">AI Photo Studio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Refining market lighting</span>
<div className="w-full h-1 bg-gradient-to-r from-action-gradient-start to-action-gradient-end rounded-full mt-1"></div>
</div>

<div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container/20 opacity-75">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant/60 font-bold tracking-wider">STEP 03</span>
<Icon name="lock" className="text-[16px] text-on-surface-variant/40" />
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-bold">Description &amp; SEO</span>
<span className="font-body-sm text-body-sm text-on-surface-variant/70">Specs &amp; Luganda hooks</span>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-1"></div>
</div>

<div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container/20 opacity-75">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant/60 font-bold tracking-wider">STEP 04</span>
<Icon name="lock" className="text-[16px] text-on-surface-variant/40" />
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-bold">Catalog &amp; Pricing</span>
<span className="font-body-sm text-body-sm text-on-surface-variant/70">UGX tiers &amp; MoMo escrow</span>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-1"></div>
</div>

<div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container/20 opacity-75">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant/60 font-bold tracking-wider">STEP 05</span>
<Icon name="lock" className="text-[16px] text-on-surface-variant/40" />
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-bold">Preview &amp; Launch</span>
<span className="font-body-sm text-body-sm text-on-surface-variant/70">Kampala live dispatch</span>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-1"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-xl relative overflow-hidden">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<Icon name="auto_fix_high" className="text-action-gradient-start text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">SwiftCart Visual Engine Studio</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Item: SoundCore Space One ANC Headphones • File: <span className="font-code-display text-xs text-primary font-bold">IMG_8824_Kikuubo.jpg</span></p>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-2.5 py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1.5">
<Icon name="verified_user" className="text-[15px]" />
              URSB CATALOG QUALITY: 99.4% PASS
            </span>
<div className="flex items-center bg-surface-container rounded-lg p-1">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 transition-all" id="toggle-split-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="splitscreen" className="text-[14px]" />
                Split Slider
              </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-all" id="toggle-side-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="view_column" className="text-[14px]" />
                Side-by-Side
              </button>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 pt-1">
<button className="px-3 py-1.5 rounded-lg bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold flex items-center gap-1.5 shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check_circle" className="text-[16px]" />
            Instant Pure White Background
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm flex items-center gap-1.5 shrink-0 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="wb_incandescent" className="text-[16px]" />
            Studio Softbox Lighting
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm flex items-center gap-1.5 shrink-0 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
<Icon name="storefront" className="text-[16px]" />
            Kampala Lifestyle Stage
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm flex items-center gap-1.5 shrink-0 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="crop_square" className="text-[16px]" />
            Auto 1:1 Aspect Ratio
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm flex items-center gap-1.5 shrink-0 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
            Advanced Tweak
          </button>
</div>

<div className="relative w-full h-[380px] bg-surface-container-lowest rounded-xl overflow-hidden select-none group" id="comparison-container">

<div className="absolute inset-0 flex items-center justify-center bg-[#0B0F19]">

<img className="w-full h-full object-contain p-6" data-alt="Professional studio product shot of SoundCore Space One matte black over-ear noise-cancelling headphones resting on an immaculate pure white background with subtle natural contact shadow, ultra-clean edges, premium consumer electronic catalog styling" src={`${assetBase}/images/7b5dab37025f99ec.webp`} />

<div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-surface-dark/80 backdrop-blur-md text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1.5 shadow-md">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
              SWIFT STUDIO AI CLEANED
            </div>
</div>

<div className="absolute inset-0 z-10 overflow-hidden" id="raw-layer" style={{"width":"50%"}}>
<div className="w-full h-full relative" style={{"width":"760px","minWidth":"600px"}}>

<img className="w-full h-full object-contain p-6 filter brightness-95" data-alt="Raw amateur smartphone photo of SoundCore Space One black headphones placed on a dusty wooden shelf inside a bustling Kampala Kikuubo wholesale electronics shop with messy wires, cardboard boxes and fluorescent market lighting in background" src={`${assetBase}/images/a150b74f9dea7b4b.webp`} />

<div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-surface-dark/80 backdrop-blur-md text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1.5 shadow-md">
<span className="w-2 h-2 rounded-full bg-amber-warning"></span>
                RAW PHONE SNAPSHOT (KIKUUBO STALL)
              </div>
</div>
</div>

<div className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize pointer-events-none" id="slider-handle" style={{"left":"50%","transform":"translateX(-50%)"}}>
<div className="w-0.5 h-full bg-action-gradient-start shadow-[0_0_12px_rgba(255,138,31,0.8)]"></div>
<div className="absolute w-10 h-10 rounded-full bg-surface-container-high border-2 border-action-gradient-start text-action-gradient-start flex items-center justify-center shadow-2xl pointer-events-auto">
<Icon name="drag_indicator" className="text-[18px]" />
</div>
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-surface-dark/90 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm pointer-events-none flex items-center gap-1.5">
<Icon name="swap_horiz" className="text-[14px] text-action-gradient-start" />
            Drag slider to inspect artifact removal &amp; matte edge refinement
          </div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Catalog Variations (4 Angles Captured)</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">4/4 Processing Complete</span>
</div>
<div className="grid grid-cols-4 gap-space-sm">

<div className="relative bg-surface-container p-2 rounded-xl flex items-center gap-space-sm cursor-pointer shadow-md">
<div className="w-14 h-14 bg-surface-container-lowest rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="High quality clean hero frontal view of SoundCore Space One headphones on studio isolated background" src={`${assetBase}/images/5be5f5ca7c2d5f52.webp`} />
</div>
<div className="flex flex-col min-w-0 pr-1">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Front Hero</span>
<span className="font-body-sm text-[11px] text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[12px]" /> Ready
                </span>
<span className="font-body-sm text-[10px] text-on-surface-variant/70">Main Catalog</span>
</div>
<div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-action-gradient-start"></div>
</div>

<div className="relative bg-surface-container/60 hover:bg-surface-container p-2 rounded-xl flex items-center gap-space-sm cursor-pointer transition-all">
<div className="w-14 h-14 bg-surface-container-lowest rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Three quarter angled view of black noise-cancelling headphones isolated on white catalog background" src={`${assetBase}/images/4c34821b8cdc4799.webp`} />
</div>
<div className="flex flex-col min-w-0 pr-1">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Angle 45°</span>
<span className="font-body-sm text-[11px] text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[12px]" /> Ready
                </span>
<span className="font-body-sm text-[10px] text-on-surface-variant/70">Perspective</span>
</div>
</div>

<div className="relative bg-surface-container/60 hover:bg-surface-container p-2 rounded-xl flex items-center gap-space-sm cursor-pointer transition-all">
<div className="w-14 h-14 bg-surface-container-lowest rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Macro close-up shot of cushioned plush leatherette ear cups and active noise cancellation mic grilles" src={`${assetBase}/images/80a542b23bab5cd5.webp`} />
</div>
<div className="flex flex-col min-w-0 pr-1">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Ear Cups Detail</span>
<span className="font-body-sm text-[11px] text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[12px]" /> Ready
                </span>
<span className="font-body-sm text-[10px] text-on-surface-variant/70">Texture Shot</span>
</div>
</div>

<div className="relative bg-surface-container/60 hover:bg-surface-container p-2 rounded-xl flex items-center gap-space-sm cursor-pointer transition-all">
<div className="w-14 h-14 bg-surface-container-lowest rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Clean retail packaging box of SoundCore Space One headphones showing authentic security seals and Anker branding" src={`${assetBase}/images/ee02dc63d0e18ce4.webp`} />
</div>
<div className="flex flex-col min-w-0 pr-1">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Retail Box</span>
<span className="font-body-sm text-[11px] text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[12px]" /> Ready
                </span>
<span className="font-body-sm text-[10px] text-on-surface-variant/70">URSB Package</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-3">
<span className="w-9 h-9 rounded-lg bg-emerald-escrow/10 text-emerald-escrow flex items-center justify-center shrink-0">
<Icon name="lens_blur" className="text-[20px]" />
</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase">Edge Segmentation</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Alpha Channel 99.8%</span>
<span className="font-body-sm text-[11px] text-emerald-escrow">Zero fringe artifacts detected</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-3">
<span className="w-9 h-9 rounded-lg bg-action-gradient-start/10 text-action-gradient-start flex items-center justify-center shrink-0">
<Icon name="palette" className="text-[20px]" />
</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase">Color Fidelity</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">D65 Calibrated</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Accurate Matte Jet Black tone</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-3">
<span className="w-9 h-9 rounded-lg bg-secondary-container text-secondary flex items-center justify-center shrink-0">
<Icon name="speed" className="text-[20px]" />
</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase">Catalog Compliance</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SwiftCart Express Ready</span>
<span className="font-body-sm text-[11px] text-tertiary">Eligible for Same-Day Prime tag</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-xl">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<Icon name="psychology" className="text-action-gradient-start text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">AI Catalog Assistant</span>
</div>
<span className="px-2 py-0.5 rounded bg-action-gradient-start/15 text-action-gradient-start font-label-sm text-label-sm font-bold uppercase">Vision v4.2</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-wider font-bold">Detected Metadata</span>
<div className="grid grid-cols-2 gap-2 pt-1">
<div className="flex flex-col">
<span className="font-body-sm text-[11px] text-on-surface-variant/60">Item Category</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Over-Ear ANC Bluetooth</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-[11px] text-on-surface-variant/60">Brand Match</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold flex items-center gap-1">
                SoundCore by Anker
                <Icon name="verified" className="text-[13px]" />
</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-[11px] text-on-surface-variant/60">Variant Tone</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Matte Jet Black</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-[11px] text-on-surface-variant/60">Hardware Specs</span>
<span className="font-label-md text-label-md text-on-surface font-bold">LDAC • 40mm Bio-Diaphragm</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-wider font-bold">Hyper-Local Kampala SEO Tags</span>
<button className="font-label-sm text-label-sm text-action-gradient-start hover:underline flex items-center gap-0.5" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[13px]" /> Suggest More
            </button>
</div>
<div className="flex flex-wrap gap-1.5 pt-1" id="seo-tag-container">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm group hover:bg-surface-container-high transition-all">
              #KampalaTechDelivery
              <Icon name="close" className="text-[13px] text-on-surface-variant hover:text-danger-penalty cursor-pointer" />
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm group hover:bg-surface-container-high transition-all">
              #ANC_HeadphonesUganda
              <Icon name="close" className="text-[13px] text-on-surface-variant hover:text-danger-penalty cursor-pointer" />
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm group hover:bg-surface-container-high transition-all">
              #SafeBodaExpressElectronics
              <Icon name="close" className="text-[13px] text-on-surface-variant hover:text-danger-penalty cursor-pointer" />
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm group hover:bg-surface-container-high transition-all">
              #SoundCoreSpaceOneOriginal
              <Icon name="close" className="text-[13px] text-on-surface-variant hover:text-danger-penalty cursor-pointer" />
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm group hover:bg-surface-container-high transition-all">
              #KampalaCommuterHeadset
              <Icon name="close" className="text-[13px] text-on-surface-variant hover:text-danger-penalty cursor-pointer" />
</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-wider font-bold">Physical Inventory Staging</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Total: 35 Units</span>
</div>
<div className="flex flex-col gap-2">
<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="warehouse" className="text-[18px] text-emerald-escrow" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Nakasero Flagship Hub</span>
<span className="font-body-sm text-[11px] text-on-surface-variant/70">Central Kampala • Zone A</span>
</div>
</div>
<div className="w-20">
<input className="w-full bg-surface-container-low text-right font-price-display text-sm text-on-surface font-bold py-1 px-2 rounded border border-surface-container-highest/60 focus:outline-none focus:ring-1 focus:ring-action-gradient-start" type="number" value="25" />
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="store" className="text-[18px] text-action-gradient-start" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">Kololo Outpost Stock</span>
<span className="font-body-sm text-[11px] text-on-surface-variant/70">Express Rider Drop • Zone B</span>
</div>
</div>
<div className="w-20">
<input className="w-full bg-surface-container-low text-right font-price-display text-sm text-on-surface font-bold py-1 px-2 rounded border border-surface-container-highest/60 focus:outline-none focus:ring-1 focus:ring-action-gradient-start" type="number" value="10" />
</div>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-emerald-escrow/10 flex items-start gap-2.5">
<Icon name="verified" className="text-emerald-escrow text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-emerald-escrow leading-snug">
            Images validated against Swift Escrow Authenticity Guarantees. Counterfeit penalties apply per URSB marketplace guideline.
          </p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm shadow-xl">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Step 2 Status</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
            Ready to Proceed
          </span>
</div>

<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:brightness-110 active:scale-[0.98] text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Proceed to Step 3: AI Description &amp; Specs
          <Icon name="arrow_forward" className="text-[20px]" />
</button>
<div className="flex items-center gap-2 pt-1">
<button className="w-1/2 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[16px]" />
            Back to Step 1
          </button>
<button className="w-1/2 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[16px]" />
            Save &amp; Pause
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
