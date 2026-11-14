// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_orders_master_detail_tablet_light_2/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">

<div className="px-5 py-2.5 flex items-center justify-between gap-3 border-b border-slate-100">

<div className="flex items-center gap-3 min-w-0">
<img alt="SwiftCart" className="h-[38px] w-auto object-contain flex-shrink-0" src="/brand/logo-full.png" />
<div className="h-6 w-px bg-slate-200"></div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-bold text-[15px] text-on-surface tracking-tight truncate">SoundCore Uganda Official</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Open
            </span>
</div>
<span className="text-[12px] text-secondary font-medium truncate">Pioneer Mall G-14 • Kampala</span>
</div>
</div>

<div className="flex items-center gap-2.5 flex-shrink-0">
<div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 border border-slate-200/60">
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Escrow:</span>
<span className="text-[13px] font-extrabold text-on-surface">UGX 14,850,000</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200/70">
<span className="text-[10px] font-bold text-orange-800 uppercase tracking-wider">Today:</span>
<span className="text-[13px] font-extrabold text-primary-container">28 Dispatches</span>
</div>
<button aria-label="Theme mode" className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-xs" onClick={() => toggleTheme()}>
<Icon name="light_mode" className="text-[19px]" />
</button>
<div className="relative">
<button aria-label="Notifications" className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-xs" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="notifications" className="text-[19px]" />
</button>
<span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-white text-[10px] font-bold flex items-center justify-center shadow-xs">3</span>
</div>
<div className="w-9 h-9 rounded-xl bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container font-extrabold text-[13px] shadow-xs">
          SC
        </div>
</div>
</div>

<nav className="px-5 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1.5 bg-white text-[13px] font-semibold">
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a>
<a className="px-3 py-1.5 rounded-lg bg-primary-container text-white font-bold whitespace-nowrap shadow-xs flex items-center gap-1.5" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<span>Orders</span>
<span className="px-1.5 py-0.2 rounded-full bg-white/20 text-white text-[11px] font-extrabold">6</span>
</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products (48)</a>
<a className="px-3 py-1.5 rounded-lg text-primary-container hover:bg-orange-50 font-bold whitespace-nowrap transition-colors flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="auto_awesome" className="text-[16px]" />
<span>+ AI Studio</span>
</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet (4)</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Disputes</span>
<span className="px-1.5 py-0.2 rounded-full bg-red-100 text-red-700 text-[11px] font-bold">1</span>
</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a>
<a className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-on-surface hover:bg-slate-100 whitespace-nowrap transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a>
</nav>
</header>
<main className="flex-1 w-full max-w-[1280px] mx-auto px-4 py-3 flex flex-col gap-3">

<div className="bg-surface-container-lowest rounded-xl p-3 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">

<div className="relative flex-1 max-w-xl">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[19px]" />
<input className="w-full h-10 pl-9 pr-24 rounded-lg bg-slate-50 border border-slate-200 text-[13px] font-medium text-on-surface focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all" placeholder="Search order #, customer, phone..." type="text" value="#SC-ORD-9488" />
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400">
<button className="p-1 hover:text-slate-700 transition-colors" title="Scan Barcode or QR" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_scanner" className="text-[17px]" />
</button>
<span className="px-1.5 py-0.5 rounded bg-slate-200 text-[10px] font-bold text-slate-600">ESC</span>
</div>
</div>

<div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
<button className="h-10 px-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-[12px] flex items-center gap-1.5 shadow-xs transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[17px] text-slate-500" />
<span>Print Slips (4)</span>
</button>
<button className="h-10 px-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-[12px] flex items-center gap-1.5 shadow-xs transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="group_add" className="text-[17px] text-slate-500" />
<span>Batch Assign</span>
</button>
<button className="h-10 px-4 rounded-lg bg-primary-container text-white hover:bg-primary font-bold text-[12px] flex items-center gap-1.5 shadow-xs transition-transform active:scale-95" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[17px]" />
<span>Quick Dispatch</span>
</button>
</div>
</div>

<div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-0.5">
<div className="flex items-center gap-1.5">
<button className="px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200/60 text-[12px] font-bold transition-colors" onClick={() => alertToast('Action triggered')}>
          All (42)
        </button>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-white text-[12px] font-bold shadow-xs flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span>Action Required</span>
<span className="w-4 h-4 rounded-full bg-white text-primary-container text-[10px] font-extrabold flex items-center justify-center">6</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[12px] font-semibold flex items-center gap-1.5 shadow-xs transition-colors" onClick={() => alertToast('Action triggered')}>
<span>With Courier (8)</span>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[12px] font-semibold shadow-xs transition-colors" onClick={() => alertToast('Action triggered')}>
          Delivered / Completed (26)
        </button>
<button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[12px] font-semibold flex items-center gap-1.5 shadow-xs transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>
<span>Disputed</span>
<span className="px-1.5 py-0.2 rounded bg-red-100 text-red-700 text-[10px] font-extrabold">1</span>
</button>
</div>
<div className="hidden lg:flex items-center gap-3 text-[12px] font-medium text-slate-500 flex-shrink-0">
<span className="flex items-center gap-1 text-emerald-700 font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> SLA Adherence: 98.4%
        </span>
<span className="text-slate-300">•</span>
<span className="text-slate-600">Avg. Kampala Transit: <strong>32 mins</strong></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">

<div className="md:col-span-5 flex flex-col gap-2.5">
<div className="flex items-center justify-between px-1">
<span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Prioritized Fulfillment Stream</span>
<span className="text-[11px] font-bold text-primary-container flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span> Real-time sync
          </span>
</div>

<div className="relative bg-white rounded-xl p-3.5 border-2 border-primary-container shadow-md cursor-pointer transition-all bg-gradient-to-r from-orange-50/50 to-white">
<div className="absolute -left-[2px] top-3 bottom-3 w-1 rounded-r-md bg-primary-container"></div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-extrabold text-[15px] text-on-surface">#SC-ORD-9488</span>
<span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase">MTN MoMo</span>
<span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold flex items-center gap-1">
<Icon name="lock" className="text-[12px] text-emerald-600" /> Escrow Guaranteed
              </span>
</div>
<span className="font-extrabold text-[15px] text-on-surface tracking-tight">UGX 388,500</span>
</div>
<p className="text-[13px] font-bold text-slate-900 truncate mb-1">
            SoundCore Space One ANC + Anker 65W GaN (2 items)
          </p>
<div className="flex items-center justify-between text-[12px] text-slate-500 mb-2.5">
<div className="flex items-center gap-1 truncate">
<Icon name="person" className="text-[15px] text-slate-400" />
<span className="font-semibold text-slate-800">Dennis Mukasa</span>
<span className="truncate">• Kololo, Plot 14</span>
</div>
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 flex-shrink-0">SafeBoda Hub</span>
</div>
<div className="p-2 rounded-lg bg-orange-100/40 border border-orange-200/50 flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5 text-slate-700">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span>Assigned: <strong className="text-slate-900 font-bold">Mukasa Brian</strong></span>
</div>
<span className="font-bold text-primary-container flex items-center gap-1">
<Icon name="timer" className="text-[13px]" />
              SLA Target: 14 mins
            </span>
</div>
</div>

<div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-bold text-[14px] text-slate-800">#SC-ORD-9490</span>
<span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-extrabold text-[10px] uppercase">Airtel Money</span>
<span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">Prep: 6m ago</span>
</div>
<span className="font-bold text-[14px] text-slate-900">UGX 280,000</span>
</div>
<p className="text-[13px] font-semibold text-slate-800 truncate mb-1">
            SoundCore Liberty 4 NC Earbuds (Velvet Black)
          </p>
<div className="flex items-center justify-between text-[12px] text-slate-500 mb-2.5">
<span className="truncate">Patricia K. • Nakasero Hill</span>
<span className="text-emerald-700 font-bold text-[11px]">Vault Funded</span>
</div>
<div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Ready to Pack
            </span>
<button className="h-7 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Assign Courier</span>
<Icon name="arrow_forward" className="text-[13px]" />
</button>
</div>
</div>

<div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-bold text-[14px] text-slate-800">#SC-ORD-9494</span>
<span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase">MTN MoMo</span>
</div>
<span className="font-bold text-[14px] text-slate-900">UGX 45,000</span>
</div>
<p className="text-[13px] font-semibold text-slate-800 truncate mb-1">
            Anker 30W PowerPort III Nano Adapter
          </p>
<div className="flex items-center justify-between text-[12px] text-slate-500 mb-2.5">
<span className="truncate">Ivan S. • William St Pickup Locker #B12</span>
<span className="text-slate-500 text-[11px] font-semibold">Prepaid</span>
</div>
<div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
<span className="text-slate-600 text-[11px] font-bold flex items-center gap-1">
<Icon name="inventory_2" className="text-[15px] text-emerald-600" /> Awaiting Hub Intake
            </span>
<button className="h-7 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-semibold flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="barcode" className="text-[13px]" />
<span>Print Barcode</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all cursor-pointer opacity-95">
<div className="flex items-start justify-between gap-2 mb-1">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-bold text-[14px] text-slate-800">#SC-ORD-9485</span>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[10px] uppercase">Settled</span>
</div>
<span className="font-bold text-[14px] text-slate-900">UGX 315,000</span>
</div>
<p className="text-[13px] font-medium text-slate-600 truncate mb-1">
            SoundCore Motion+ 30W Hi-Res Speaker
          </p>
<div className="flex items-center justify-between text-[12px] text-slate-500 pt-1">
<span>Herbert Z. • Bukoto Kisasi Rd</span>
<span className="text-emerald-700 text-[11px] font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> OTP #8921 Passed
            </span>
</div>
</div>
</div>

<div className="md:col-span-7 bg-white rounded-xl p-4 md:p-5 border border-slate-200/90 shadow-sm flex flex-col gap-4">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
<div>
<div className="flex items-center gap-2 flex-wrap mb-1">
<h1 className="text-[20px] font-extrabold text-on-surface tracking-tight">Order #SC-ORD-9488</h1>
<span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold flex items-center gap-1">
<Icon name="shield" className="text-[13px]" /> UGX 388,500 Frozen in Vault
              </span>
</div>
<p className="text-[12px] text-slate-500">
              Created Today 14:22 EAT • <span className="font-mono text-slate-700 font-semibold">MTN-MOMO-TX-998124</span> • SafeBoda Direct Hub
            </p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<button className="h-8 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code" className="text-[15px] text-primary-container" />
<span>Seal #SC-TS-4091</span>
</button>
<button className="h-8 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="picture_as_pdf" className="text-[15px] text-slate-600" />
<span>Waybill PDF</span>
</button>
</div>
</div>

<div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center flex-shrink-0 shadow-xs">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-bold text-[14px] text-slate-900">Mukasa Brian</span>
<span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">Bajaj Boxer UEF 842X</span>
</div>
<p className="text-[12px] text-slate-600 flex items-center gap-1.5 mt-0.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Currently at <strong>Kira Road Corridor</strong> • 34 km/h cruising</span>
</p>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-[18px] font-extrabold text-primary-container tracking-tight">15:30 EAT</div>
<div className="text-[11px] font-medium text-slate-500">Est. Drop-off (~14 mins left)</div>
</div>
</div>

<div className="relative w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
<div className="w-full h-48 bg-cover bg-center relative" style={{"backgroundImage":"url('/images/5a9292625665af2e.webp')"}}>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-slate-950/50 flex flex-col justify-between p-3">

<div className="flex items-center justify-between">
<div className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md shadow-xs flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="text-[11px] font-extrabold text-slate-900 tracking-wide">LIVE GPS: 0.5s POLLING</span>
</div>
<div className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md shadow-xs text-[11px] font-bold text-slate-800 flex items-center gap-1">
<Icon name="traffic" className="text-[14px] text-emerald-600" />
<span>Traffic: Moderate at Kamwokya</span>
</div>
</div>

<div className="flex items-center justify-between text-white text-[12px] bg-slate-950/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center font-extrabold text-[10px] shadow">A</div>
<div>
<div className="text-[10px] text-slate-300 uppercase font-semibold">Origin</div>
<div className="font-bold text-[12px]">Pioneer Mall G-14 (Store)</div>
</div>
</div>
<div className="hidden sm:flex items-center gap-1 text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<div className="w-10 h-0.5 bg-primary-container"></div>
<Icon name="two_wheeler" className="text-orange-400 text-[16px]" />
<div className="w-10 h-0.5 bg-slate-400"></div>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
</div>
<div className="flex items-center gap-2 text-right">
<div>
<div className="text-[10px] text-slate-300 uppercase font-semibold">Destination</div>
<div className="font-bold text-[12px]">Acacia Ave Kololo (Plot 14)</div>
</div>
<div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-[10px] shadow">B</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
<div className="flex items-center justify-between mb-2.5">
<span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Fulfillment Milestones</span>
<span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
<Icon name="verified_user" className="text-[14px]" /> Escrow Stage 3/4 Complete
            </span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

<div className="p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
<div className="flex items-center justify-between mb-1">
<span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
<Icon name="check" className="text-[11px] font-bold" />
</span>
<span className="text-[10px] font-semibold text-slate-400">14:22</span>
</div>
<div className="text-[12px] font-bold text-slate-800">Paid via MoMo</div>
<div className="text-[11px] text-slate-500 truncate">UGX 388,500 Frozen</div>
</div>

<div className="p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
<div className="flex items-center justify-between mb-1">
<span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
<Icon name="check" className="text-[11px] font-bold" />
</span>
<span className="text-[10px] font-semibold text-slate-400">14:31</span>
</div>
<div className="text-[12px] font-bold text-slate-800">Packed &amp; Sealed</div>
<div className="text-[11px] text-slate-500 truncate">#SC-TS-4091</div>
</div>

<div className="p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
<div className="flex items-center justify-between mb-1">
<span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
<Icon name="check" className="text-[11px] font-bold" />
</span>
<span className="text-[10px] font-semibold text-slate-400">14:48</span>
</div>
<div className="text-[12px] font-bold text-slate-800">SafeBoda Intake</div>
<div className="text-[11px] text-slate-500 truncate">Rider Mukasa B.</div>
</div>

<div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 shadow-2xs">
<div className="flex items-center justify-between mb-1">
<span className="w-4 h-4 rounded-full bg-primary-container text-white flex items-center justify-center animate-pulse">
<Icon name="near_me" className="text-[11px]" />
</span>
<span className="text-[10px] font-bold text-primary-container">15:30 ETA</span>
</div>
<div className="text-[12px] font-bold text-primary-container">Out for Delivery</div>
<div className="text-[11px] text-orange-800 font-medium truncate">Kira Rd Corridor</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between px-1">
<span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Dispatched Items Manifest (2)</span>
<span className="text-[11px] font-bold text-slate-600">Total Net: 0.85 kg • Insured</span>
</div>
<div className="flex flex-col gap-2">

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-1">
<img alt="SoundCore Space One ANC" className="w-full h-full object-contain" src={`${assetBase}/images/342987fd087fe24c.webp`} />
</div>
<div className="min-w-0">
<div className="text-[13px] font-bold text-slate-900 truncate">SoundCore Space One ANC Headphones</div>
<div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
<span>Jet Black</span>
<span>•</span>
<span className="font-mono text-slate-700 font-semibold">SN-48192-UG-OK</span>
<span>•</span>
<span className="text-emerald-700 font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Serial Verified
                    </span>
</div>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<div className="text-[13px] font-extrabold text-slate-900">UGX 248,500</div>
<div className="text-[11px] text-slate-500">Qty: 1</div>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-1">
<img alt="Anker 65W GaN Charger" className="w-full h-full object-contain" src={`${assetBase}/images/db6316148f299623.webp`} />
</div>
<div className="min-w-0">
<div className="text-[13px] font-bold text-slate-900 truncate">Anker 65W GaN Dual-Port Fast Charger</div>
<div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
<span>Arctic White</span>
<span>•</span>
<span className="font-mono text-slate-700 font-semibold">SN-GAN65-9011</span>
<span>•</span>
<span className="text-emerald-700 font-bold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[13px]" /> Serial Logged
                    </span>
</div>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<div className="text-[13px] font-extrabold text-slate-900">UGX 140,000</div>
<div className="text-[11px] text-slate-500">Qty: 1</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Courier Dispatch</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">Vetted Rider</span>
</div>
<div className="flex items-center gap-2.5 mb-2">
<div className="w-9 h-9 rounded-full bg-orange-100 text-primary-container font-extrabold text-[12px] flex items-center justify-center">
                  MB
                </div>
<div>
<div className="text-[13px] font-bold text-slate-900">Mukasa Brian</div>
<div className="text-[11px] text-slate-500">4.92 ★ (1,420 trips) • Helmet #44</div>
</div>
</div>
<div className="text-[11px] text-slate-600 mb-2">
                Fleet: <strong>SafeBoda Direct Express</strong> • ID: #SB-9812
              </div>
</div>
<div className="flex items-center gap-1.5 pt-2 border-t border-slate-200/60">
<button className="flex-1 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[14px] text-slate-600" /> Call
              </button>
<button className="flex-1 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[14px] text-emerald-600" /> WhatsApp
              </button>
<button className="h-8 px-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors" title="Swap Courier" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-[15px]" />
</button>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Recipient Details</span>
<span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold flex items-center gap-1">
<Icon name="verified" className="text-[12px] text-blue-600" /> Verified Buyer
                </span>
</div>
<div className="flex items-center gap-2.5 mb-2">
<div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-extrabold text-[12px] flex items-center justify-center">
                  DM
                </div>
<div>
<div className="text-[13px] font-bold text-slate-900">Dennis Mukasa</div>
<div className="text-[11px] text-slate-500">+256 772 ••• 814 (Masked Relay)</div>
</div>
</div>
<div className="text-[11px] text-slate-600 mb-1">
                Plot 14 Acacia Avenue, Kololo, Kampala
              </div>
<div className="p-1.5 rounded bg-white border border-slate-200/60 text-[10px] text-slate-600 italic">
                "Instruction: Please leave with receptionist Sylvia if I am in a board meeting."
              </div>
</div>
<div className="pt-2 border-t border-slate-200/60">
<button className="w-full h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="shield" className="text-[14px] text-slate-600" /> Message Buyer via SwiftRelay
              </button>
</div>
</div>
</div>

<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-slate-100">
<div className="flex items-center gap-2">
<button className="h-10 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[12px] font-bold flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="verified" className="text-[17px] text-emerald-700" />
<span>Verify Tamper Seal</span>
</button>
<button className="h-10 px-3.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-[12px] font-bold flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="gavel" className="text-[17px]" />
<span>Emergency Hold</span>
</button>
</div>
<button className="h-10 px-5 rounded-xl bg-primary-container hover:bg-primary text-white text-[12px] font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-transform active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="pin" className="text-[18px]" />
<span>Request Delivery OTP Handshake</span>
</button>
</div>
</div>
</div>
</main>
<footer className="w-full bg-white border-t border-slate-200/80 py-3 mt-4">
<div className="w-full max-w-[1280px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
<div className="flex items-center gap-3 flex-wrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Gateway Latency: <strong>28ms</strong></span>
</div>
<span>•</span>
<span>William St Central Hub: <strong>99.8% Online</strong></span>
<span>•</span>
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">Bank of Uganda Escrow Regulated</span>
</div>
<div>
<span>© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span>
</div>
</div>
</footer>
    </div>
  );
};

export default Tablet;
