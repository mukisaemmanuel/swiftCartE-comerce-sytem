// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_riders_fleet_logistics_tablet_dark/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface-dark/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"><div className="h-28 w-full px-margin flex flex-col justify-between py-space-sm"><div className="flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-icon-only.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface tracking-tight">SwiftCart Seller Hub</span><div className="flex items-center gap-space-xs"><span className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[280px]">SoundCore Uganda Official • Pioneer Mall G-14</span><span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>Open</span></div></div></div><div className="flex items-center gap-space-sm"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container-high"><Icon name="verified_user" className="text-emerald-escrow text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Reserve</span><span className="font-label-lg text-label-lg text-emerald-escrow">UGX 14,850,000</span></div></div><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container"><Icon name="local_shipping" className="text-action-gradient-start text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Today Orders</span><span className="font-label-lg text-label-lg text-on-surface">28 Dispatches</span></div></div><button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="relative"><button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[20px]" /></button><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto py-1" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-lg"><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">6</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">48</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="ai-studio" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">4</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap flex items-center gap-1.5" data-path="disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes<span className="px-1.5 py-0.2 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm">1</span></a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="wallet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a><a className="px-space-md py-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors whitespace-nowrap" data-path="analytics-and-settings" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics &amp; Settings</a></nav></div></header>
<main className="w-full pt-28 pb-14 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-low px-margin-desktop py-2 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="sensors" className="text-[16px]" />
</span>
<span className="font-label-md text-label-md text-on-surface">Kampala Boda Telematics: <span className="text-tertiary">William St Corridor Hub Mesh Synced</span></span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded-full">Ping 14ms • GPS High Precision</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-amber-warning flex items-center gap-1">
<Icon name="sync" className="text-[14px]" /> 0 Actions Queued (Live)
      </span>
<div className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></div>
</div>
</div>
<div className="w-full px-margin-desktop py-space-lg flex flex-col gap-space-xl">

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop">

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-lg flex flex-col justify-between shadow-md">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dedicated Fleet</span>
<span className="p-2 rounded-lg bg-surface-container-high text-primary">
<Icon name="two_wheeler" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">4</span>
<span className="font-label-md text-label-md text-emerald-escrow font-semibold">Active Couriers</span>
</div>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-action-gradient-start">
<span className="w-1.5 h-1.5 rounded-full bg-action-gradient-start animate-pulse"></span> 3 on Delivery
            </span>
<span className="text-on-surface-variant">•</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> 1 Available Stage
            </span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Today Handover SLA</span>
<span className="p-2 rounded-lg bg-surface-container-high text-emerald-escrow">
<Icon name="timer" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-emerald-escrow tracking-tight">99.4%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">On-Time</span>
</div>
<div className="mt-2 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>&lt; 15 min avg pickup</span>
<span className="text-on-surface">Pioneer G-14 Bay</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Transit In-Escrow</span>
<span className="p-2 rounded-lg bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="security" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="font-price-display text-price-display text-on-surface tracking-tight">UGX 3,840,000</div>
<div className="mt-2 flex items-center gap-1.5 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="lock" className="text-[14px]" />
<span>Bank-backed Platform Custody</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mesh Node Route</span>
<span className="p-2 rounded-lg bg-surface-container-high text-mtn-yellow">
<Icon name="hub" className="text-[20px]" />
</span>
</div>
<div className="mt-space-md">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">SafeBoda Ring 01</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-tertiary/10 text-tertiary font-bold tracking-wider uppercase">Active</span>
</div>
<div className="mt-2 font-body-sm text-body-sm text-on-surface-variant truncate">
            Pioneer Mall G-14 ⇄ William St Corridor
          </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="rounded-xl bg-container-dark-low p-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">

<div className="flex items-center gap-1 bg-surface-dark p-1 rounded-lg">
<button className="px-space-md py-1.5 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
              All Riders (4)
            </button>
<button className="px-space-md py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" onClick={() => alertToast('Action triggered')}>
              On Trip (3)
            </button>
<button className="px-space-md py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" onClick={() => alertToast('Action triggered')}>
              Available (1)
            </button>
</div>

<div className="flex items-center gap-space-sm flex-1 max-w-sm justify-end">
<div className="relative w-full max-w-[200px]">
<Icon name="search" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search rider / plate..." type="text" />
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors whitespace-nowrap shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[16px] text-primary" />
<span>+ Invite</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="rounded-xl bg-container-dark-low p-space-lg transition-all hover:bg-surface-container-low shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait photo of Mukasa Brian, an experienced East African courier rider in Kampala wearing a branded black jacket and orange reflective straps under sharp studio lighting" src={`${assetBase}/images/eddf72adef5a2e9f.webp`} />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-action-gradient-start shadow-md ring-2 ring-container-dark-low"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Mukasa Brian</h3>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-amber-warning font-label-sm text-label-sm">
<Icon name="star" className="text-[13px] fill-current" />
                      4.9
                    </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">(1,420 trips)</span>
</div>
<div className="flex items-center gap-3 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Bajaj Boxer UEF 842X</span>
<span>•</span>
<span className="bg-surface-variant px-1.5 py-0.2 rounded text-[11px] font-bold text-on-surface">Helmet #44</span>
<span>•</span>
<span className="text-tertiary flex items-center gap-0.5 font-label-sm text-label-sm">
<Icon name="payments" className="text-[13px]" /> MoMo: +256 701 ••• 892
                    </span>
</div>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-action-gradient-start/10 text-action-gradient-start font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="w-2 h-2 rounded-full bg-action-gradient-start animate-ping"></span> On Delivery
              </span>
</div>

<div className="rounded-lg bg-surface-dark/80 p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="near_me" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Order #SC-ORD-9488 Dispatch</span>
<span className="font-label-md text-label-md text-on-surface">En route to Acacia Ave, Kololo</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Est. Dropoff</span>
<span className="font-label-md text-label-md text-tertiary">ETA 12 mins</span>
</div>
<div className="flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" title="Masked Relay Voice Call" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px]" />
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-emerald-escrow transition-colors" title="WhatsApp Telematics Link" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="location_searching" className="text-[16px] text-action-gradient-start" />
<span>Track</span>
</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-lg transition-all shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-escrow"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-emerald-escrow font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait photography of John Ssewankambo, a smiling young Ugandan dispatch driver with helmet nearby, bright ambient street studio setup" src={`${assetBase}/images/25696252b9cfadf3.webp`} />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-escrow ring-2 ring-container-dark-low"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ssewankambo John</h3>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-amber-warning font-label-sm text-label-sm">
<Icon name="star" className="text-[13px] fill-current" />
                      4.8
                    </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">(890 trips)</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">READY AT STAGE</span>
</div>
<div className="flex items-center gap-3 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Bajaj Boxer UEM 129K</span>
<span>•</span>
<span className="bg-surface-variant px-1.5 py-0.2 rounded text-[11px] font-bold text-on-surface">Helmet #18</span>
<span>•</span>
<span className="text-on-surface-variant">Stage G-14 (0m away)</span>
</div>
</div>
</div>
<button className="px-4 py-2 rounded-xl bg-emerald-escrow hover:bg-emerald-escrow/90 text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[18px]" />
<span>Quick Assign</span>
</button>
</div>
<div className="rounded-lg bg-surface-dark/60 p-space-md flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="pin_drop" className="text-emerald-escrow text-[18px]" />
<span>Idling at Pioneer Mall Ground Floor Dispatch Bay G-14</span>
</div>
<span className="text-on-surface font-label-sm text-label-sm">Idle Time: 6m</span>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-lg transition-all hover:bg-surface-container-low shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait photography of courier rider Kato Ronald in protective gear and branded motorcycle helmet, dark dramatic lighting" src={`${assetBase}/images/fe207487871b3188.webp`} />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-action-gradient-start ring-2 ring-container-dark-low"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kato Ronald</h3>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-amber-warning font-label-sm text-label-sm">
<Icon name="star" className="text-[13px] fill-current" />
                      4.95
                    </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">(2,100 trips)</span>
</div>
<div className="flex items-center gap-3 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">TVS Star HLX UEN 401P</span>
<span>•</span>
<span className="bg-surface-variant px-1.5 py-0.2 rounded text-[11px] font-bold text-on-surface">Helmet #09</span>
</div>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-action-gradient-start/10 text-action-gradient-start font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="w-2 h-2 rounded-full bg-action-gradient-start"></span> On Delivery
              </span>
</div>
<div className="rounded-lg bg-surface-dark/80 p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Order #SC-ORD-9492</span>
<span className="font-label-md text-label-md text-on-surface">Makerere Main Gate Hill Rd</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-tertiary">ETA 18 mins</span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="map" className="text-[16px]" />
<span>Telemetry</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low p-space-lg transition-all hover:bg-surface-container-low shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-secondary font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait photography of Otim Denis, a delivery driver in East Africa wearing a high-visibility vest with reflective yellow bands against a dark Kampala evening background" src={`${assetBase}/images/3a25e82efa94b6fc.webp`} />
</div>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-secondary ring-2 ring-container-dark-low"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Otim Denis</h3>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-amber-warning font-label-sm text-label-sm">
<Icon name="star" className="text-[13px] fill-current" />
                      4.7
                    </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">(640 trips)</span>
</div>
<div className="flex items-center gap-3 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="text-on-surface font-semibold">Bajaj Boxer UER 553B</span>
<span>•</span>
<span className="bg-surface-variant px-1.5 py-0.2 rounded text-[11px] font-bold text-on-surface">Helmet #31</span>
</div>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                Hub Transfer
              </span>
</div>
<div className="rounded-lg bg-surface-dark/80 p-space-md flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="alt_route" className="text-secondary text-[18px]" />
<span>Transfer run to William St Central Hub Consolidation Station</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface">ETA 7 mins</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 rounded-2xl bg-container-dark-high p-space-xl shadow-xl flex flex-col gap-space-lg sticky top-32">

<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">Direct Dispatch Desk</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-emerald-escrow">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Ready
              </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mt-1">Assign Courier to Order</h2>
<span className="font-code-display text-code-display text-primary tracking-normal">#SC-ORD-9490</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Target Shipment</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center gap-1">
<Icon name="verified_user" className="text-[14px]" /> Escrow Paid
            </span>
</div>
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center p-1 overflow-hidden shrink-0">
<img className="w-full h-full object-contain" data-alt="SoundCore Liberty 4 NC wireless earbuds in matte obsidian case on sleek dark tech surface" src={`${assetBase}/images/0e4910917a26eef7.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Liberty 4 NC Earbuds</span>
<span className="font-price-display text-price-display text-on-surface text-[18px]">UGX 280,000</span>
</div>
</div>
<div className="mt-1 pt-space-xs flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1.5 truncate">
<Icon name="location_on" className="text-action-gradient-start text-[16px]" />
<span className="text-on-surface truncate">Nakasero Hill (Plot 14B)</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Customer: Patricia K. (07•• ••• 419)</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Select Courier</span>
<span className="text-on-surface-variant font-normal">2 in Immediate Vicinity</span>
</label>

<label className="cursor-pointer rounded-xl bg-surface-container-low p-space-md flex items-start gap-space-md transition-all ring-2 ring-primary">
<input checked={true} className="mt-1 text-primary accent-primary w-4 h-4" name="assigned_rider" type="radio" value="john" />
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Ssewankambo John</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">RECOMMENDED</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Bajaj Boxer UEM 129K • Helmet #18</span>
<div className="flex items-center gap-3 mt-2 font-label-sm text-label-sm">
<span className="text-emerald-escrow flex items-center gap-1 font-semibold">
<Icon name="store" className="text-[14px]" /> Idle at Pioneer Stage
                </span>
<span className="text-on-surface-variant">•</span>
<span className="text-on-surface font-semibold">Immediate Departure (0m)</span>
</div>
</div>
</label>

<label className="cursor-pointer rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low p-space-md flex items-start gap-space-md transition-all">
<input className="mt-1 text-primary accent-primary w-4 h-4" name="assigned_rider" type="radio" value="brian" />
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Mukasa Brian</span>
<span className="font-label-sm text-label-sm text-action-gradient-start font-semibold">Nearby in 8 mins</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Bajaj Boxer UEF 842X • Helmet #44</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Finishing Acacia Ave dropoff 1.2km away</span>
</div>
</label>
</div>

<div className="rounded-xl bg-surface-dark/90 p-space-md flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
<Icon name="fact_check" className="text-[16px] text-tertiary" />
<span>Dispatch Protocol Checklist</span>
</span>
<div className="flex flex-col gap-2 mt-1">
<div className="flex items-center justify-between text-body-sm text-on-surface">
<span className="flex items-center gap-2">
<Icon name="check_circle" className="text-emerald-escrow text-[18px]" />
<span>Tamper Seal Slip Attached</span>
</span>
<span className="font-code-display text-[12px] text-primary">#SC-TS-4093</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface">
<span className="flex items-center gap-2">
<Icon name="check_circle" className="text-emerald-escrow text-[18px]" />
<span>Blind Customer OTP Handover Required</span>
</span>
<span className="text-tertiary font-label-sm text-label-sm font-semibold">4-Digit Matrix</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface">
<span className="flex items-center gap-2">
<Icon name="check_circle" className="text-emerald-escrow text-[18px]" />
<span>SafeBoda Transit Goods Insurance</span>
</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Covered (UGX 2.5M cap)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm mt-space-xs">

<button className="w-full h-[52px] rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.98] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="send" className="text-[20px]" />
<span>Dispatch Rider Ssewankambo John</span>
</button>

<button className="w-full h-11 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
            Cancel &amp; Keep Order Staged at G-14
          </button>
</div>
</div>
</div>
</div>
</div></main>
<footer className="fixed bottom-0 left-0 right-0 h-10 bg-surface-container-lowest/95 backdrop-blur-md z-40 px-margin flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm"><div className="flex items-center gap-space-sm"><span className="flex items-center gap-1.5 text-tertiary"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>William St Central Hub Connection: 99.8%</span><span className="text-outline-variant">•</span><span className="text-on-surface-variant">Lat: 18ms</span></div><div className="flex items-center gap-space-xs text-on-surface-variant"><Icon name="account_balance" className="text-[15px] text-emerald-escrow" /><span>Bank of Uganda Escrow Compliance Custody Tier-1 Verified</span></div></footer>
    </div>
  );
};

export default Screen;
