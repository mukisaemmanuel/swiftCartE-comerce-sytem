// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_analytics_performance_heatmaps_tablet_light_2/code.html
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-container shadow-sm">
<div className="w-full max-w-7xl mx-auto px-4 md:px-6">

<div className="h-16 flex items-center justify-between gap-3">

<div className="flex items-center gap-3.5 min-w-0">
<img alt="SwiftCart Uganda" className="h-[38px] w-auto object-contain flex-shrink-0" src={`${assetBase}/images/1c4eb0924c9c9129.webp`} />
<div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-bold text-sm md:text-base text-on-surface tracking-tight truncate">SoundCore Uganda Official</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-tertiary border border-emerald-200/60">
                Open
              </span>
</div>
<span className="text-xs text-secondary truncate font-medium">Pioneer Mall G-14 • Kampala</span>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

<div className="hidden sm:flex flex-col items-end px-3 py-1 rounded-xl bg-surface-container-low border border-slate-200/70">
<span className="text-[10px] font-bold tracking-wider text-secondary uppercase">Escrow Reserve</span>
<span className="text-xs md:text-sm font-extrabold text-on-surface">UGX 14,850,000</span>
</div>

<div className="flex flex-col items-end px-3 py-1 rounded-xl bg-orange-50 border border-orange-200/70">
<span className="text-[10px] font-bold tracking-wider text-primary uppercase">Today</span>
<span className="text-xs md:text-sm font-extrabold text-primary-container">28 Dispatches</span>
</div>

<button aria-label="Theme toggle" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary hover:text-on-surface hover:bg-slate-200 transition-colors" type="button" onClick={() => toggleTheme()}>
<Icon name="light_mode" className="text-[19px]" />
</button>

<div className="relative">
<button aria-label="Notifications" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary hover:text-on-surface hover:bg-slate-200 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}>
<Icon name="notifications" className="text-[19px]" />
</button>
<span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-primary-container text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
              3
            </span>
</div>

<div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-sm ring-1 ring-orange-200">
<Icon name="storefront" className="text-[20px]" />
</div>
</div>
</div>

<nav className="flex items-center gap-1.5 overflow-x-auto py-2 custom-scroll border-t border-slate-100 text-xs">
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders (6)</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products (48)</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet (4)</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes (1)</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a>

<a aria-current="page" className="px-3.5 py-1.5 rounded-lg bg-primary-container text-white font-bold whitespace-nowrap shadow-sm shadow-orange-500/30 flex items-center gap-1.5" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
<Icon name="analytics" className="text-[15px]" />
          Analytics
        </a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a>
<a className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-slate-100 whitespace-nowrap font-semibold transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a>
</nav>
</div>
</header>
<main className="w-full max-w-7xl mx-auto px-4 md:px-6 py-5 flex-1 flex flex-col gap-5">

<div className="bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 flex-wrap">
<h1 className="text-lg md:text-xl font-extrabold text-on-surface tracking-tight">Store Analytics &amp; Performance Intelligence</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-tertiary border border-emerald-200">
<Icon name="verified" className="text-[14px]" />
            Top 1% Kampala Electronics Sellers
          </span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
<Icon name="lock" className="text-[13px] text-tertiary" />
            Tier-1 Escrow Verified
          </span>
</div>
<p className="text-xs text-secondary font-medium">
          Live merchant metrics for Pioneer Mall G-14 hub • Real-time synchronization with Bank of Uganda Central Switch Escrow
        </p>
</div>

<div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">

<div className="flex items-center bg-surface-container-low p-1 rounded-xl border border-slate-200/70 text-xs">
<button className="px-2.5 py-1.5 rounded-lg text-secondary font-semibold hover:text-on-surface transition-colors" type="button" onClick={() => alertToast('Action triggered')}>7D</button>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-white font-bold shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>Last 30 Days</button>
<button className="px-2.5 py-1.5 rounded-lg text-secondary font-semibold hover:text-on-surface transition-colors hidden sm:block" type="button" onClick={() => alertToast('Action triggered')}>This Month</button>
<button className="px-2.5 py-1.5 rounded-lg text-secondary font-semibold hover:text-on-surface flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span>Feb 1 - 28 Feb</span>
<Icon name="calendar_today" className="text-[14px]" />
</button>
</div>

<div className="flex items-center gap-2">
<button className="h-9 px-3 bg-surface-container-low hover:bg-slate-200 border border-slate-200 text-on-surface rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="table_view" className="text-[16px] text-secondary" />
<span>Export CSV</span>
</button>
<button className="h-9 px-3.5 bg-primary hover:bg-orange-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-orange-900/20 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="picture_as_pdf" className="text-[16px]" />
<span>PDF Report</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Gross Merchandise Value</span>
<span className="w-8 h-8 rounded-xl bg-orange-50 text-primary-container flex items-center justify-center">
<Icon name="payments" className="text-[18px]" />
</span>
</div>
<div className="mt-2">
<div className="flex items-baseline gap-1">
<span className="text-xs font-bold text-secondary">UGX</span>
<span className="text-2xl font-black text-on-surface tracking-tight">42,850,000</span>
</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center text-[11px] font-extrabold text-tertiary bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
<Icon name="trending_up" className="text-[13px] mr-0.5" />+24.6%
              </span>
<span className="text-[11px] text-secondary">vs prev 30 days</span>
</div>
</div>
</div>
<div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Net Escrow Payout:</span>
<span className="font-extrabold text-on-surface">UGX 39,422,000</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Completed Orders</span>
<span className="w-8 h-8 rounded-xl bg-emerald-50 text-tertiary flex items-center justify-center">
<Icon name="shopping_bag" className="text-[18px]" />
</span>
</div>
<div className="mt-2">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-black text-on-surface tracking-tight">184</span>
<span className="text-xs font-bold text-secondary">Dispatched</span>
</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center text-[11px] font-extrabold text-tertiary bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                98.9%
              </span>
<span className="text-[11px] text-secondary">fulfillment SLA</span>
</div>
</div>
</div>
<div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Avg. Basket:</span>
<span className="font-extrabold text-on-surface">UGX 232,880</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">SafeBoda Velocity</span>
<span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
<Icon name="two_wheeler" className="text-[18px]" />
</span>
</div>
<div className="mt-2">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-black text-on-surface tracking-tight">28</span>
<span className="text-xs font-bold text-secondary">mins avg transit</span>
</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="inline-flex items-center text-[11px] font-extrabold text-tertiary bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
<Icon name="bolt" className="text-[13px] mr-0.5" />99.4%
              </span>
<span className="text-[11px] text-secondary">Kampala SLA</span>
</div>
</div>
</div>
<div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Store Handover:</span>
<span className="font-extrabold text-tertiary">11.8 mins avg</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Dispute Frequency</span>
<span className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
<Icon name="verified_user" className="text-[18px]" />
</span>
</div>
<div className="mt-2">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-black text-tertiary tracking-tight">0.22%</span>
<span className="text-xs font-bold text-tertiary">Safe tier</span>
</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="text-[11px] text-secondary">Benchmark limit: &lt; 1.50%</span>
</div>
</div>
</div>
<div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Resolution Record:</span>
<span className="font-extrabold text-tertiary">1 Resolved • 0 Fees</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<h2 className="text-base md:text-lg font-bold text-on-surface">Gross Revenue &amp; Daily Order Velocity</h2>
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-100 text-primary-container">Kampala Node</span>
</div>
<p className="text-xs text-secondary mt-0.5">Daily performance across February 2025. Surge represents Tech Friday Kampala Flash Drop.</p>
</div>

<div className="flex items-center gap-3 text-xs font-semibold">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span className="text-secondary">Organic (48%)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-emerald-500"></span>
<span className="text-secondary">Followers (32%)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-slate-400"></span>
<span className="text-secondary">Flash Promo (20%)</span>
</div>
</div>
</div>

<div className="w-full relative bg-surface-container-low/50 rounded-xl p-3 border border-slate-200/60 overflow-hidden">

<div className="absolute top-4 left-[61%] -translate-x-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-xl shadow-xl border border-slate-700/60 z-20 pointer-events-none backdrop-blur-sm">
<div className="flex items-center gap-1 text-[10px] font-extrabold text-orange-400">
<Icon name="bolt" className="text-[13px]" />
<span>TECH FRIDAY SURGE</span>
</div>
<div className="text-sm font-black text-white mt-0.5">UGX 3,450,000</div>
<div className="text-[10px] text-slate-300">Feb 21 Drop • 23 Orders • Nakasero Peak</div>
</div>
<svg className="w-full h-44 sm:h-56 overflow-visible" preserveAspectRatio="none" viewBox="0 0 960 210">
<defs>
<linearGradient id="gmvAreaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ff5722" stopOpacity="0.32"></stop>
<stop offset="90%" stopColor="#ff5722" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="slaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#00a572" stopOpacity="0.15"></stop>
<stop offset="100%" stopColor="#00a572" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="30"></line>
<line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="75"></line>
<line stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="120"></line>
<line stroke="#cbd5e1" strokeWidth="1.2" x1="0" x2="960" y1="165"></line>

<text fill="#64748b" font-size="10" font-weight="700" x="12" y="27">UGX 4.0M</text>
<text fill="#64748b" font-size="10" font-weight="600" x="12" y="72">UGX 2.5M</text>
<text fill="#64748b" font-size="10" font-weight="600" x="12" y="117">UGX 1.2M</text>
<text fill="#64748b" font-size="10" font-weight="600" x="12" y="162">UGX 0.4M</text>

<path d="M 60,150 Q 150,140 240,142 T 420,128 T 600,105 T 780,118 T 940,108 L 940,165 L 60,165 Z" fill="url(#slaGradient)"></path>
<path d="M 60,150 Q 150,140 240,142 T 420,128 T 600,105 T 780,118 T 940,108" fill="none" stroke="#00a572" strokeLinecap="round" strokeWidth="2.5"></path>

<path d="M 60,140 Q 140,130 220,115 T 380,102 T 510,120 T 588,38 T 670,108 T 810,85 T 940,70 L 940,165 L 60,165 Z" fill="url(#gmvAreaGradient)"></path>

<path d="M 60,140 Q 140,130 220,115 T 380,102 T 510,120 T 588,38 T 670,108 T 810,85 T 940,70" fill="none" stroke="#ff5722" strokeLinecap="round" strokeWidth="3.5"></path>

<line stroke="#ff5722" strokeDasharray="3 3" strokeWidth="1.5" x1="588" x2="588" y1="38" y2="165"></line>

<circle cx="588" cy="38" fill="#ff5722" fillOpacity="0.25" r="11"></circle>
<circle cx="588" cy="38" fill="#ff5722" r="6"></circle>
<circle cx="588" cy="38" fill="#ffffff" r="2.8"></circle>

<circle cx="220" cy="115" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>
<circle cx="380" cy="102" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>
<circle cx="510" cy="120" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>
<circle cx="670" cy="108" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>
<circle cx="810" cy="85" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>
<circle cx="940" cy="70" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2.5"></circle>

<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="60" y="185">Feb 01</text>
<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="220" y="185">Feb 06</text>
<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="380" y="185">Feb 12</text>
<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="510" y="185">Feb 17</text>
<text fill="#ff5722" font-size="10" font-weight="800" text-anchor="middle" x="588" y="185">Feb 21 (Drop)</text>
<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="750" y="185">Feb 24</text>
<text fill="#64748b" font-size="10" font-weight="600" text-anchor="middle" x="940" y="185">Feb 28</text>
</svg>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200/60">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Gross Sales Volume</span>
<div className="text-base font-extrabold text-on-surface mt-0.5">UGX 42.8M</div>
<span className="text-[11px] font-bold text-tertiary">↑ 18.2% vs target</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200/60">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Net Margin Realized</span>
<div className="text-base font-extrabold text-on-surface mt-0.5">92.0%</div>
<span className="text-[11px] text-secondary">8% SwiftCart Escrow &amp; Tax</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200/60">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">Daily Peak</span>
<div className="text-base font-extrabold text-on-surface mt-0.5">23 Orders</div>
<span className="text-[11px] font-bold text-primary-container">Friday, 18:00 - 21:00</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low border border-slate-200/60">
<span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">SafeBoda Driver Payouts</span>
<div className="text-base font-extrabold text-on-surface mt-0.5">UGX 1.42M</div>
<span className="text-[11px] font-bold text-tertiary">Subsidized 40% Platform</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

<div className="lg:col-span-7 bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-4">
<div>

<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<div>
<h2 className="text-base md:text-lg font-bold text-on-surface">Kampala Division Demand Heatmap &amp; Fulfillment Velocity</h2>
<p className="text-xs text-secondary mt-0.5">Spatial fulfillment distribution &amp; SafeBoda transit times</p>
</div>
<span className="px-2.5 py-1 rounded-full bg-emerald-50 text-tertiary text-xs font-bold border border-emerald-200 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Live Hub Sync
            </span>
</div>

<div className="mt-4 p-3.5 rounded-xl bg-surface-container-low border border-slate-200/70 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute text-xs font-black text-on-surface">94%</span>
</div>
<div>
<div className="text-xs md:text-sm font-extrabold text-on-surface">15-Minute Pioneer Mall Staging</div>
<div className="text-xs text-secondary">94% of packages bagged before boda arrival at G-14 Bay.</div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="text-[10px] uppercase font-bold text-secondary block">Center-to-Door</span>
<span className="text-base font-black text-tertiary">28m Avg</span>
</div>
</div>

<div className="mt-4 flex flex-col gap-2.5">

<div className="p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 border border-slate-200/60 transition-colors flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-primary-container text-white text-[11px] font-black flex items-center justify-center">1</span>
<span className="text-xs md:text-sm font-bold text-on-surface">Nakasero &amp; Kololo</span>
<span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-orange-100 text-primary-container">High Density</span>
</div>
<div className="text-right">
<span className="text-sm font-black text-on-surface">42%</span>
<span className="text-xs text-secondary ml-1 font-medium">(77 orders)</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"42%"}}></div>
</div>
<div className="flex items-center justify-between text-xs text-secondary mt-0.5">
<span className="flex items-center gap-1">
<Icon name="speed" className="text-[14px] text-tertiary" />
                  Avg Transit: 16 mins (Boda Direct) • Top SKU: SoundCore Space One
                </span>
<span className="font-bold text-on-surface">UGX 18.24M</span>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 border border-slate-200/60 transition-colors flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-slate-200 text-on-surface text-[11px] font-black flex items-center justify-center">2</span>
<span className="text-xs md:text-sm font-bold text-on-surface">Naguru, Ntinda &amp; Bukoto</span>
<span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-tertiary">Fast Growing</span>
</div>
<div className="text-right">
<span className="text-sm font-black text-on-surface">28%</span>
<span className="text-xs text-secondary ml-1 font-medium">(52 orders)</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-emerald-600 h-full rounded-full" style={{"width":"28%"}}></div>
</div>
<div className="flex items-center justify-between text-xs text-secondary mt-0.5">
<span>Avg Transit: 24 mins • Top SKU: SoundCore Liberty 4</span>
<span className="font-bold text-on-surface">UGX 12.41M</span>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 border border-slate-200/60 transition-colors flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-slate-200 text-on-surface text-[11px] font-black flex items-center justify-center">3</span>
<span className="text-xs md:text-sm font-bold text-on-surface">Bugolobi &amp; Mbuya</span>
</div>
<div className="text-right">
<span className="text-sm font-black text-on-surface">15%</span>
<span className="text-xs text-secondary ml-1 font-medium">(28 orders)</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-slate-500 h-full rounded-full" style={{"width":"15%"}}></div>
</div>
<div className="flex items-center justify-between text-xs text-secondary mt-0.5">
<span>Avg Transit: 29 mins • Anker GaN Charger</span>
<span className="font-bold text-on-surface">UGX 6.28M</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2.5">
<div className="p-2.5 rounded-xl bg-surface-container-low border border-slate-200/60 flex flex-col justify-between">
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-on-surface">Makerere &amp; Old KLA</span>
<span className="text-xs font-black text-on-surface">10% (18)</span>
</div>
<span className="text-[11px] text-secondary mt-1">22 mins transit • Tech students</span>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low border border-slate-200/60 flex flex-col justify-between">
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-on-surface">Entebbe Corridor</span>
<span className="text-xs font-black text-on-surface">5% (9)</span>
</div>
<span className="text-[11px] text-secondary mt-1">Regional courier line-haul</span>
</div>
</div>
</div>
</div>

<div className="w-full h-32 bg-cover bg-center rounded-xl relative overflow-hidden border border-slate-200 flex items-end p-3 mt-2" style={{"backgroundImage":"url('/images/fabc4b5daf431cb4.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between w-full text-white text-xs">
<div className="flex items-center gap-1.5 font-bold">
<Icon name="location_on" className="text-[18px] text-orange-400" />
<span>Pioneer Mall Central Dispatch Bay (G-14)</span>
</div>
<span className="text-[11px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
              14.2 km Active Radius
            </span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-4">

<div className="bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-3">
<div className="flex items-center justify-between pb-2 border-b border-slate-100">
<div>
<h2 className="text-base font-bold text-on-surface">Top Selling Catalog SKUs</h2>
<span className="text-xs text-secondary">Ranked by gross revenue generation</span>
</div>
<Icon name="leaderboard" className="text-secondary text-[20px]" />
</div>
<div className="flex flex-col gap-2">

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<img alt="SoundCore Space One" className="w-11 h-11 rounded-lg object-cover bg-slate-200 flex-shrink-0" src={`${assetBase}/images/61ac83ad4cfc1062.webp`} />
<div className="flex flex-col min-w-0">
<span className="text-xs font-bold text-on-surface truncate">SoundCore Space One ANC</span>
<span className="text-[11px] text-secondary">84 units sold • Conv: 4.8%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="text-xs font-black text-on-surface block">UGX 20.8M</span>
<span className="text-[10px] font-bold text-tertiary">5,240 Views</span>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<img alt="Anker 65W GaN Charger" className="w-11 h-11 rounded-lg object-cover bg-slate-200 flex-shrink-0" src={`${assetBase}/images/c9d9ba4216089037.webp`} />
<div className="flex flex-col min-w-0">
<span className="text-xs font-bold text-on-surface truncate">Anker 65W GaN Fast Charger</span>
<span className="text-[11px] text-secondary">52 units sold • Conv: 6.2%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="text-xs font-black text-on-surface block">UGX 7.28M</span>
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">Top Conv 6.2%</span>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<img alt="SoundCore Liberty 4 NC" className="w-11 h-11 rounded-lg object-cover bg-slate-200 flex-shrink-0" src={`${assetBase}/images/d3514e0a6e0eda69.webp`} />
<div className="flex flex-col min-w-0">
<span className="text-xs font-bold text-on-surface truncate">SoundCore Liberty 4 NC</span>
<span className="text-[11px] text-secondary">38 units sold • Conv: 3.9%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="text-xs font-black text-on-surface block">UGX 10.6M</span>
<span className="text-[10px] text-secondary">982 Views</span>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 transition-colors">
<div className="flex items-center gap-2.5 min-w-0">
<img alt="Motion+ 30W Speaker" className="w-11 h-11 rounded-lg object-cover bg-slate-200 flex-shrink-0" src={`${assetBase}/images/7d03b2a55123f471.webp`} />
<div className="flex flex-col min-w-0">
<span className="text-xs font-bold text-on-surface truncate">Motion+ 30W BT Speaker</span>
<span className="text-[11px] text-secondary">10 units sold • Premium tier</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="text-xs font-black text-on-surface block">UGX 3.15M</span>
<span className="text-[10px] text-secondary">310 Views</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 md:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-3">
<div className="flex items-center justify-between pb-2 border-b border-slate-100">
<h2 className="text-base font-bold text-on-surface">Store Conversion Funnel</h2>
<span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-emerald-100 text-tertiary">1.0% E2E Ratio</span>
</div>
<div className="flex flex-col gap-2.5">

<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="font-bold text-on-surface">1. Product Views</span>
<span className="font-extrabold text-on-surface">18,420</span>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-slate-400 h-full rounded-full" style={{"width":"100%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="font-bold text-on-surface">2. Add to Cart</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-secondary font-medium">16.9% step rate</span>
<span className="font-extrabold text-on-surface">3,120</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"48%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="font-bold text-on-surface">3. Checkout Initiated</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-secondary font-medium">39.7% step rate</span>
<span className="font-extrabold text-on-surface">1,240</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"24%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="font-bold text-on-surface">4. Paid &amp; Escrow Locked</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-tertiary font-bold">14.8% completion</span>
<span className="font-extrabold text-tertiary">184 Orders</span>
</div>
</div>
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{"width":"10%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-2">

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Customer Loyalty</span>
<span className="w-8 h-8 rounded-xl bg-orange-50 text-primary-container flex items-center justify-center">
<Icon name="loyalty" className="text-[18px]" />
</span>
</div>
<div className="mt-2">
<div className="text-2xl font-black text-on-surface tracking-tight">34.2%</div>
<span className="text-xs text-secondary mt-0.5 block">Repeat Buyer Rate in Kampala</span>
</div>
</div>
<div className="mt-3.5 p-2.5 bg-surface-container-low rounded-xl border border-slate-200/50 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Store Followers:</span>
<span className="font-bold text-on-surface">1,420 Active</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Mobile Money Distribution</span>
<span className="w-8 h-8 rounded-xl bg-emerald-50 text-tertiary flex items-center justify-center">
<Icon name="contactless" className="text-[18px]" />
</span>
</div>
<div className="mt-2.5 flex items-center justify-between">
<div>
<span className="text-xl font-black text-on-surface">72%</span>
<span className="text-xs text-secondary block">MTN MoMo Escrow</span>
</div>
<div className="h-7 w-px bg-slate-200"></div>
<div className="text-right">
<span className="text-xl font-black text-on-surface">28%</span>
<span className="text-xs text-secondary block">Airtel Money Escrow</span>
</div>
</div>
</div>
<div className="mt-3">
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"72%"}}></div>
<div className="bg-sky-500 h-full" style={{"width":"28%"}}></div>
</div>
<div className="flex justify-between items-center text-[10px] text-secondary mt-1">
<span>Instant Auto-settlement</span>
<span className="font-bold text-slate-600">Bank of Uganda Regulated</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="text-[11px] font-bold uppercase tracking-wider">Merchant Quality Score</span>
<span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
<Icon name="military_tech" className="text-[18px]" />
</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-2xl font-black text-tertiary tracking-tight">99.1</span>
<span className="text-xs font-bold text-secondary">/ 100</span>
</div>
<span className="text-xs text-secondary mt-0.5 block">Eligible for SwiftCart Front-Page Merchant Spotlight</span>
</div>
<div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-secondary font-medium">Next Payout Window:</span>
<span className="font-bold text-primary-container">Today, 21:00 EAT</span>
</div>
</div>
</div>
</main>
<footer className="w-full bg-white border-t border-slate-200/80 py-3.5 mt-auto">
<div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-secondary">
<div className="flex items-center gap-3 flex-wrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-medium">Latency: 28ms</span>
</div>
<span>•</span>
<span>William St Central Hub: 99.8% Online</span>
<span>•</span>
<span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
          Bank of Uganda Escrow Regulated
        </span>
</div>
<div>
<span>© 2025 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span>
</div>
</div>
</footer>
    </div>
  );
};

export default Screen;
