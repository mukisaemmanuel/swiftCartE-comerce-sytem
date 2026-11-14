// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_analytics_performance_heatmaps_tablet_light_1/code.html
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
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md min-w-0"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/logo-full.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span><span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">Open</span></div><span className="font-body-sm text-body-sm text-secondary truncate">Pioneer Mall G-14 • Kampala</span></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-surface-container-low"><span className="font-label-sm text-label-sm text-secondary uppercase">Escrow:</span><span className="font-label-md text-label-md text-on-surface font-bold">UGX 14,850,000</span></div><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-xl bg-primary-fixed/40"><span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase">Today:</span><span className="font-label-md text-label-md text-on-primary-fixed font-bold">28 Dispatches</span></div><button aria-label="Theme indicator" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={() => toggleTheme()}><Icon name="light_mode" className="text-[18px]" /></button><div className="relative"><button aria-label="Notifications" className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[18px]" /></button><span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><nav className="flex items-center gap-space-xs overflow-x-auto h-11 border-t border-outline-variant/30 pt-1 pb-1" data-active-classes="bg-primary-container text-on-primary font-bold shadow-[0_2px_6px_rgba(255,87,34,0.35)]"><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}>Overview</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>Orders (6)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>Products (48)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="ai-studio" href="#" onClick={() => alertToast('Action triggered')}>+ AI Studio</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="riders-and-fleet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>Riders &amp; Fleet (4)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}>Disputes (1)</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="wallet" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>Wallet (UGX)</a><a aria-current="page" className="px-space-md py-1 rounded-lg whitespace-nowrap transition-all bg-primary-container text-on-primary font-bold shadow-[0_2px_6px_rgba(255,87,34,0.35)]" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>Analytics</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>Discounts &amp; Ads</a><a className="px-space-md py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface whitespace-nowrap font-label-md text-label-md transition-all" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>Store Profile</a></nav></div></header>
<main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-gutter-desktop py-space-lg flex flex-col gap-space-lg">



<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-md text-headline-md text-on-surface">Store Analytics &amp; Performance Intelligence</span>
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm">
<Icon name="verified" className="text-[15px]" />
<span>Top 1% Kampala Electronics Sellers</span>
<span className="text-secondary">• Tier-1 Escrow Verified</span>
</div>
</div>
<p className="font-body-md text-body-md text-secondary">
          Live merchant metrics for Pioneer Mall G-14 hub • Synchronized with Central Switch Escrow
        </p>
</div>

<div className="flex items-center gap-space-sm flex-wrap">

<div className="flex items-center bg-surface-container-low p-1 rounded-lg font-label-md text-label-md">
<button className="px-space-sm py-1.5 rounded-md text-secondary hover:text-on-surface transition-colors" type="button" onClick={() => alertToast('Action triggered')}>7D</button>
<button className="px-space-md py-1.5 rounded-md bg-surface-container-lowest text-on-surface font-bold shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>Last 30 Days</button>
<button className="px-space-sm py-1.5 rounded-md text-secondary hover:text-on-surface transition-colors hidden sm:inline-block" type="button" onClick={() => alertToast('Action triggered')}>This Month</button>
<button className="px-space-sm py-1.5 rounded-md text-secondary hover:text-on-surface flex items-center gap-1 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span>1 Feb - 28 Feb</span>
<Icon name="calendar_today" className="text-[14px]" />
</button>
</div>

<div className="flex items-center gap-space-xs">
<button className="h-9 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="table_view" className="text-[18px]" />
<span className="hidden sm:inline">Export CSV</span>
</button>
<button className="h-9 px-space-md bg-primary hover:bg-on-primary-fixed-variant text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>PDF Report</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Gross Merchandise Value</span>
<span className="p-1.5 rounded-lg bg-primary-fixed/30 text-primary">
<Icon name="payments" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-label-md text-label-md text-secondary font-bold">UGX</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-black">42,850,000</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<span className="flex items-center text-tertiary font-label-sm text-label-sm font-bold bg-tertiary-container/15 px-1.5 py-0.5 rounded">
<Icon name="trending_up" className="text-[14px]" />
              +24.6%
            </span>
<span className="font-body-sm text-body-sm text-secondary">vs prev 30 days</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2">
<span>Net Escrow Payout:</span>
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 39,422,000</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Completed Orders</span>
<span className="p-1.5 rounded-lg bg-tertiary-container/20 text-tertiary">
<Icon name="shopping_bag" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-black">184</span>
<span className="font-label-md text-label-md text-secondary">Dispatched</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<span className="flex items-center text-tertiary font-label-sm text-label-sm font-bold bg-tertiary-container/15 px-1.5 py-0.5 rounded">
              98.9%
            </span>
<span className="font-body-sm text-body-sm text-secondary">fulfillment SLA</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2">
<span>Avg. Basket Value:</span>
<span className="font-label-md text-label-md text-on-surface font-bold">UGX 232,880</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">SafeBoda Velocity</span>
<span className="p-1.5 rounded-lg bg-primary-fixed/40 text-primary-container">
<Icon name="two_wheeler" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-black">28</span>
<span className="font-label-md text-label-md text-secondary">mins avg transit</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<span className="flex items-center text-tertiary font-label-sm text-label-sm font-bold bg-tertiary-container/15 px-1.5 py-0.5 rounded">
<Icon name="bolt" className="text-[14px]" />
              99.4%
            </span>
<span className="font-body-sm text-body-sm text-secondary">Kampala SLA</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2">
<span>Store Handover:</span>
<span className="font-label-md text-label-md text-tertiary font-bold">11.8 mins avg</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Dispute Frequency</span>
<span className="p-1.5 rounded-lg bg-secondary-container/40 text-secondary">
<Icon name="shield" className="text-[18px]" />
</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-tertiary font-black">0.22%</span>
<span className="font-label-md text-label-md text-secondary">Safe tier</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<span className="text-secondary font-body-sm text-body-sm">Benchmark limit: &lt; 1.50%</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2">
<span>Resolution Record:</span>
<span className="font-label-md text-label-md text-tertiary font-bold">1 Resolved • 0 Fees</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Gross Revenue &amp; Daily Order Velocity</span>
<span className="px-2 py-0.5 rounded bg-primary-fixed/40 text-primary font-label-sm text-label-sm font-bold">Kampala Node</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Daily performance across February 2025. Highlighted surge represents Tech Friday Kampala Flash Drop.</p>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span>Organic (48%)</span>
</div>
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
<span>Followers (32%)</span>
</div>
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span>Flash Promo (20%)</span>
</div>
</div>
</div>

<div className="w-full relative bg-surface-container-low/40 rounded-xl p-space-md">

<div className="hidden sm:flex flex-col absolute top-6 left-[62%] -translate-x-1/2 bg-on-secondary-fixed text-on-primary px-3 py-2 rounded-lg shadow-xl z-20 pointer-events-none">
<div className="flex items-center gap-1 text-[11px] font-bold text-inverse-primary">
<Icon name="bolt" className="text-[13px]" />
<span>TECH FRIDAY SURGE</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-primary font-extrabold leading-none my-1">UGX 3,450,000</span>
<span className="text-[10px] text-secondary-fixed-dim">Feb 21 • 23 Orders • Nakasero Peak</span>
</div>
<svg className="w-full h-48 sm:h-64 overflow-visible" preserveAspectRatio="none" viewBox="0 0 960 220">
<defs>
<linearGradient id="primaryGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ff5722" stopOpacity="0.35"></stop>
<stop offset="100%" stopColor="#ff5722" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="tertiaryGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#00a572" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#00a572" stopOpacity="0.0"></stop>
</linearGradient>
</defs>

<line stroke="#dde9ff" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="30" y2="30"></line>
<line stroke="#dde9ff" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="80" y2="80"></line>
<line stroke="#dde9ff" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="960" y1="130" y2="130"></line>
<line stroke="#dde9ff" strokeWidth="1" x1="0" x2="960" y1="180" y2="180"></line>

<text fill="#565e74" font-size="10" font-weight="600" x="10" y="26">UGX 4.0M</text>
<text fill="#565e74" font-size="10" font-weight="600" x="10" y="76">UGX 2.5M</text>
<text fill="#565e74" font-size="10" font-weight="600" x="10" y="126">UGX 1.2M</text>
<text fill="#565e74" font-size="10" font-weight="600" x="10" y="176">UGX 0.4M</text>

<path d="M 60,165 Q 150,150 240,155 T 420,135 T 600,105 T 780,120 T 940,110 L 940,180 L 60,180 Z" fill="url(#tertiaryGradient)"></path>
<path d="M 60,165 Q 150,150 240,155 T 420,135 T 600,105 T 780,120 T 940,110" fill="none" stroke="#00a572" strokeLinecap="round" strokeWidth="2.5"></path>

<path d="M 60,150 Q 140,140 220,125 T 380,110 T 520,130 T 595,45 T 680,115 T 820,90 T 940,75 L 940,180 L 60,180 Z" fill="url(#primaryGradient)"></path>

<path d="M 60,150 Q 140,140 220,125 T 380,110 T 520,130 T 595,45 T 680,115 T 820,90 T 940,75" fill="none" stroke="#ff5722" strokeLinecap="round" strokeWidth="3.5"></path>

<line stroke="#ff5722" strokeDasharray="3 3" strokeWidth="1.5" x1="595" x2="595" y1="45" y2="180"></line>
<circle cx="595" cy="45" fill="#ff5722" r="7"></circle>
<circle cx="595" cy="45" fill="#ffffff" r="3.5"></circle>

<circle cx="220" cy="125" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>
<circle cx="380" cy="110" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>
<circle cx="520" cy="130" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>
<circle cx="680" cy="115" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>
<circle cx="820" cy="90" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>
<circle cx="940" cy="75" fill="#ffffff" r="4" stroke="#ff5722" strokeWidth="2"></circle>

<text fill="#565e74" font-size="10" text-anchor="middle" x="60" y="200">Feb 01</text>
<text fill="#565e74" font-size="10" text-anchor="middle" x="220" y="200">Feb 06</text>
<text fill="#565e74" font-size="10" text-anchor="middle" x="380" y="200">Feb 12</text>
<text fill="#565e74" font-size="10" text-anchor="middle" x="520" y="200">Feb 17</text>
<text fill="#ff5722" font-size="10" font-weight="700" text-anchor="middle" x="595" y="200">Feb 21 (Drop)</text>
<text fill="#565e74" font-size="10" text-anchor="middle" x="760" y="200">Feb 24</text>
<text fill="#565e74" font-size="10" text-anchor="middle" x="940" y="200">Feb 28</text>
</svg>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs text-secondary font-body-sm text-body-sm">
<div className="flex flex-col bg-surface-container-low p-space-sm rounded-lg">
<span className="text-secondary font-label-sm text-label-sm">Gross Sales Volume</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">UGX 42.8M</span>
<span className="text-tertiary font-label-sm text-label-sm mt-0.5">↑ 18.2% vs target</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-sm rounded-lg">
<span className="text-secondary font-label-sm text-label-sm">Net Margin Realized</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">92.0%</span>
<span className="text-secondary font-label-sm text-label-sm mt-0.5">8% SwiftCart Escrow &amp; Tax</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-sm rounded-lg">
<span className="text-secondary font-label-sm text-label-sm">Daily Peak Order Count</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">23 Orders</span>
<span className="text-primary font-label-sm text-label-sm mt-0.5">Friday, 18:00 - 21:00</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-sm rounded-lg">
<span className="text-secondary font-label-sm text-label-sm">SafeBoda Driver Payouts</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">UGX 1.42M</span>
<span className="text-tertiary font-label-sm text-label-sm mt-0.5">Subsidized 40% by Platform</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Kampala Division Demand Heatmap</span>
<span className="font-body-sm text-body-sm text-secondary">Spatial fulfillment distribution &amp; SafeBoda transit times</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container/50 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
<Icon name="radar" className="text-[15px]" />
            Live Hub Sync
          </span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
<svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
<path className="text-outline-variant/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-md text-label-md font-extrabold text-on-surface">94%</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">15-Minute Pioneer Mall Staging</span>
<span className="font-body-sm text-body-sm text-secondary">94% of packages bagged before boda arrival at G-14 Bay.</span>
</div>
</div>
<div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase">Center-to-Doorstep</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">28m Avg</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">1</span>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Nakasero &amp; Kololo</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm">High Density</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Top SKU: SoundCore Space One ANC</span>
</div>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">42%</span>
<span className="block font-body-sm text-body-sm text-secondary">77 orders</span>
</div>
</div>

<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-primary-container h-full rounded-full" style={{"width":"42%"}}></div>
</div>
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="speed" className="text-[13px] text-tertiary" />
                Avg Transit: 16 mins (Boda Direct)
              </span>
<span className="text-on-surface font-bold">UGX 18,240,000 Volume</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">2</span>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Naguru, Ntinda &amp; Bukoto</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-bold">Fast Growing</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Top SKU: SoundCore Liberty 4 NC</span>
</div>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">28%</span>
<span className="block font-body-sm text-body-sm text-secondary">52 orders</span>
</div>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary-container h-full rounded-full" style={{"width":"28%"}}></div>
</div>
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="speed" className="text-[13px] text-tertiary" />
                Avg Transit: 24 mins
              </span>
<span className="text-on-surface font-bold">UGX 12,410,000 Volume</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">3</span>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Bugolobi &amp; Mbuya</span>
<span className="block font-body-sm text-body-sm text-secondary">Top SKU: Anker 65W GaN Charger</span>
</div>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">15%</span>
<span className="block font-body-sm text-body-sm text-secondary">28 orders</span>
</div>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{"width":"15%"}}></div>
</div>
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mt-0.5">
<span>Avg Transit: 29 mins</span>
<span className="text-on-surface font-bold">UGX 6,280,000 Volume</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-xs">
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface font-bold">Makerere &amp; Old KLA</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">10% (18)</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-1">22 mins transit • Tech students</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface font-bold">Entebbe Corridor</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">5% (9)</span>
</div>
<span className="font-body-sm text-body-sm text-secondary mt-1">Regional courier line-haul</span>
</div>
</div>
</div>

<div className="w-full h-32 bg-cover bg-center rounded-xl relative overflow-hidden shadow-sm flex items-end p-space-sm" data-location="Kampala Central, Uganda" style={{"backgroundImage":"url('/images/fabc4b5daf431cb4.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/80 via-transparent to-transparent"></div>
<div className="relative z-10 flex items-center justify-between w-full text-on-primary">
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-[18px] text-primary-container" />
<span className="font-label-md text-label-md font-bold">Pioneer Mall Central Dispatch Bay (G-14)</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-lowest/20 backdrop-blur-md px-2 py-0.5 rounded text-on-primary">Radius 14.2 km Active</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Top Selling Catalog SKUs</span>
<span className="font-body-sm text-body-sm text-secondary">Ranked by gross revenue generation</span>
</div>
<Icon name="leaderboard" className="text-secondary text-[20px]" />
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<img className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-surface-container" data-alt="SoundCore Space One active noise cancelling wireless headphones in matte obsidian black on minimalist white studio display" src={`${assetBase}/images/61ac83ad4cfc1062.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-bold">SoundCore Space One ANC</span>
<span className="font-body-sm text-body-sm text-secondary">84 units sold • Conv: 4.8%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-md text-label-md text-on-surface font-extrabold block">UGX 20.8M</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">5,240 Views</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<img className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-surface-container" data-alt="Anker 65W GaN compact dual-port wall fast charger in pearl white finish placed against clean aesthetic architectural surface" src={`${assetBase}/images/c9d9ba4216089037.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-bold">Anker 65W GaN Fast Charger</span>
<span className="font-body-sm text-body-sm text-secondary">52 units sold • Conv: 6.2%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-md text-label-md text-on-surface font-extrabold block">UGX 7.28M</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Top Conv Rate</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<img className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-surface-container" data-alt="SoundCore Liberty 4 NC true wireless earbuds in charging cradle with soft ambient metallic glow" src={`${assetBase}/images/d3514e0a6e0eda69.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-bold">SoundCore Liberty 4 NC</span>
<span className="font-body-sm text-body-sm text-secondary">38 units sold • Conv: 3.9%</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-md text-label-md text-on-surface font-extrabold block">UGX 10.6M</span>
<span className="font-label-sm text-label-sm text-secondary">982 Views</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<img className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-surface-container" data-alt="SoundCore Motion Plus 30W portable bluetooth outdoor rugged speaker in deep charcoal metal grill" src={`${assetBase}/images/7d03b2a55123f471.webp`} />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-bold">Motion+ 30W BT Speaker</span>
<span className="font-body-sm text-body-sm text-secondary">10 units sold • Premium tier</span>
</div>
</div>
<div className="text-right flex-shrink-0 pl-2">
<span className="font-label-md text-label-md text-on-surface font-extrabold block">UGX 3.15M</span>
<span className="font-label-sm text-label-sm text-secondary">310 Views</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Store Conversion Funnel</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/15 px-2 py-0.5 rounded">1.0% E2E Ratio</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">1. Product Views</span>
<span className="text-on-surface font-extrabold">18,420</span>
</div>
<div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"100%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">2. Add to Cart</span>
<div className="flex items-center gap-1.5">
<span className="text-secondary font-label-sm text-label-sm">16.9% drop-in</span>
<span className="text-on-surface font-extrabold">3,120</span>
</div>
</div>
<div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"48%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">3. Checkout Initiated</span>
<div className="flex items-center gap-1.5">
<span className="text-secondary font-label-sm text-label-sm">39.7% step rate</span>
<span className="text-on-surface font-extrabold">1,240</span>
</div>
</div>
<div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"24%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">4. Paid &amp; Escrow Locked</span>
<div className="flex items-center gap-1.5">
<span className="text-tertiary font-label-sm text-label-sm font-bold">14.8% completion</span>
<span className="text-tertiary font-extrabold">184 Orders</span>
</div>
</div>
<div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"8%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Customer Loyalty</span>
<Icon name="loyalty" className="text-[20px] text-primary" />
</div>
<div className="mt-space-md">
<span className="font-headline-lg text-headline-lg text-on-surface font-black">34.2%</span>
<span className="block font-body-sm text-body-sm text-secondary mt-1">Repeat Buyer Rate in Kampala</span>
</div>
</div>
<div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">SoundCore Store Followers</span>
<span className="font-label-md text-label-md text-on-surface font-bold">1,420 Active</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Mobile Money Distribution</span>
<Icon name="contactless" className="text-[20px] text-tertiary" />
</div>
<div className="mt-space-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">72%</span>
<span className="font-label-sm text-label-sm text-secondary">MTN MoMo Escrow</span>
</div>
<div className="h-8 w-px bg-surface-container"></div>
<div className="flex flex-col text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">28%</span>
<span className="font-label-sm text-label-sm text-secondary">Airtel Money Escrow</span>
</div>
</div>
</div>
<div className="mt-space-md">
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"72%"}}></div>
<div className="bg-secondary-fixed-dim h-full" style={{"width":"28%"}}></div>
</div>
<div className="flex justify-between items-center text-[11px] text-secondary mt-1">
<span>Instant Auto-settlement</span>
<span>Bank of Uganda Regulated</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-secondary">
<span className="font-label-md text-label-md uppercase tracking-wider">Merchant Quality Score</span>
<Icon name="military_tech" className="text-[20px] text-tertiary" />
</div>
<div className="mt-space-md flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-tertiary font-black">99.1</span>
<span className="font-label-md text-label-md text-secondary">/ 100</span>
</div>
<span className="block font-body-sm text-body-sm text-secondary mt-1">Eligible for SwiftCart Front-Page Merchant Spotlight</span>
</div>
<div className="mt-space-md flex items-center justify-between pt-space-xs border-t border-surface-container">
<span className="font-label-sm text-label-sm text-secondary">Next Payout Window:</span>
<span className="font-label-md text-label-md text-primary font-bold">Today, 21:00 EAT</span>
</div>
</div>
</div>
</div>
</div></main>
<footer className="w-full bg-surface-container-lowest py-space-md mt-auto shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="w-full px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm text-secondary font-body-sm text-body-sm"><div className="flex items-center gap-space-md flex-wrap"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span><span>Latency: 28ms</span></div><span>•</span><span>William St Central Hub: 99.8% Online</span><span>•</span><span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Bank of Uganda Escrow Regulated</span></div><div><span>© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span></div></div></footer>
    </div>
  );
};

export default Tablet;
