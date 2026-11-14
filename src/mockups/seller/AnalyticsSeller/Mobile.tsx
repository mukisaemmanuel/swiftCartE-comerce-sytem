// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/analytics_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain shrink-0" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">Analytics</h1></div><div className="flex items-center gap-space-xs shrink-0"><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-gutter pb-space-xl space-y-space-lg text-on-surface">

<section aria-label="Date Range Filters" className="pt-space-sm">
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-space-xs -mx-gutter px-gutter">
<button className="h-12 px-space-md shrink-0 rounded-full font-label-md text-label-md flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
        Today
      </button>
<button className="h-12 px-space-md shrink-0 rounded-full font-label-md text-label-md flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
        Yesterday
      </button>
<button className="h-12 px-space-md shrink-0 rounded-full font-label-md text-label-md flex items-center justify-center bg-primary text-on-primary shadow-sm transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="check_circle" className="text-[16px] mr-1.5" />
        Last 7 Days
      </button>
<button className="h-12 px-space-md shrink-0 rounded-full font-label-md text-label-md flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
        Last 30 Days
      </button>
<button className="h-12 px-space-md shrink-0 rounded-full font-label-md text-label-md flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="date_range" className="text-[16px] mr-1" />
        Custom Range
      </button>
</div>
</section>

<section className="rounded-xl bg-surface-container-low p-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container shrink-0">
<Icon name="trending_up" className="text-[22px]" />
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Store Velocity is High</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ahead of 88% of tech merchants this week</p>
</div>
</div>
<div className="text-right shrink-0">
<span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm">
        Live Synced
      </span>
</div>
</section>

<section aria-label="Key Performance Indicators" className="space-y-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Store Metrics</h2>
<span className="font-label-md text-label-md text-on-surface-variant">vs. prev 7 days</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<div className="rounded-xl bg-surface-container p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Gross Revenue</span>
<Icon name="payments" className="text-primary text-[20px]" />
</div>
<div className="my-space-xs">
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">UGX 14.25M</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">UGX 14,250,000</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="inline-flex items-center font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="arrow_upward" className="text-[14px] mr-0.5" />
            +22.8%
          </span>

<svg aria-hidden="true" className="w-14 h-5 text-tertiary shrink-0" fill="none" viewBox="0 0 56 20">
<path d="M1 17L10 13L19 15L28 9L37 11L46 4L55 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Completed Orders</span>
<Icon name="local_shipping" className="text-secondary text-[20px]" />
</div>
<div className="my-space-xs">
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">86</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Total packages delivered</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="inline-flex items-center font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="add" className="text-[14px] mr-0.5" />
            14 orders
          </span>

<svg aria-hidden="true" className="w-14 h-5 text-tertiary shrink-0" fill="none" viewBox="0 0 56 20">
<path d="M1 18L10 14L19 16L28 10L37 7L46 9L55 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Conversion Rate</span>
<Icon name="ads_click" className="text-primary-container text-[20px]" />
</div>
<div className="my-space-xs">
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">4.8%</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Market Avg: 4.2%</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="inline-flex items-center font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="arrow_upward" className="text-[14px] mr-0.5" />
            +0.6% bench
          </span>

<svg aria-hidden="true" className="w-14 h-5 text-tertiary shrink-0" fill="none" viewBox="0 0 56 20">
<path d="M1 15L10 16L19 12L28 13L37 8L46 6L55 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Return Rate</span>
<Icon name="assignment_return" className="text-tertiary text-[20px]" />
</div>
<div className="my-space-xs">
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">1.2%</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">1 item disputed</p>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="inline-flex items-center font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="check" className="text-[14px] mr-0.5" />
            &lt; 2.0% bench
          </span>

<svg aria-hidden="true" className="w-14 h-5 text-tertiary shrink-0" fill="none" viewBox="0 0 56 20">
<path d="M1 8L10 9L19 7L28 10L37 8L46 11L55 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</section>

<section aria-label="Daily Revenue Trend" className="rounded-xl bg-surface-container p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Daily Revenue Trend</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Peak velocity on weekends</p>
</div>
<span className="inline-flex items-center px-space-xs py-1 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
        UGX Millions
      </span>
</div>

<div className="space-y-space-sm pt-space-xs">
<div className="grid grid-cols-7 gap-space-xs items-end h-32 px-1">

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">1.1M</span>
<div className="w-full bg-surface-container-highest rounded-t hover:bg-primary-container transition-all" style={{"height":"28%"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">M</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">1.4M</span>
<div className="w-full bg-surface-container-highest rounded-t hover:bg-primary-container transition-all" style={{"height":"36%"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">T</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">1.6M</span>
<div className="w-full bg-surface-container-highest rounded-t hover:bg-primary-container transition-all" style={{"height":"42%"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">W</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">1.8M</span>
<div className="w-full bg-surface-container-highest rounded-t hover:bg-primary-container transition-all" style={{"height":"48%"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">T</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">2.4M</span>
<div className="w-full bg-primary-container/80 rounded-t hover:bg-primary transition-all" style={{"height":"64%"}}></div>
<span className="font-label-md text-label-md text-on-surface font-bold">F</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-primary font-bold">3.9M</span>
<div className="w-full bg-primary rounded-t shadow-sm" style={{"height":"100%"}}></div>
<span className="font-label-md text-label-md text-primary font-bold">S</span>
</div>

<div className="flex flex-col items-center gap-1 h-full justify-end group">
<span className="font-label-sm text-label-sm text-on-surface-variant">2.0M</span>
<div className="w-full bg-surface-container-highest rounded-t hover:bg-primary-container transition-all" style={{"height":"52%"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">S</span>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-start gap-space-sm">
<Icon name="tips_and_updates" className="text-primary-container text-[20px] shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="font-semibold text-on-surface">Saturday had highest sales</strong> driven by Weekend Electronics Flash Sale.
      </p>
</div>
</section>

<section aria-label="Conversion Funnel" className="rounded-xl bg-surface-container p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Customer Funnel</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Discovery to completion pipeline</p>
</div>
<span className="font-label-md text-label-md text-tertiary font-bold">Top 5% Flow</span>
</div>

<div className="space-y-space-sm pt-space-xs">

<div className="space-y-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold flex items-center gap-1">
<Icon name="visibility" className="text-[16px] text-secondary" />
            Store Visits
          </span>
<span className="text-on-surface font-bold">18,400</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"100%"}}></div>
</div>
</div>

<div className="space-y-1 pl-space-xs">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold flex items-center gap-1">
<Icon name="shopping_cart" className="text-[16px] text-primary-container" />
            Added to Cart
          </span>
<div className="text-right">
<span className="text-on-surface font-bold">2,140</span>
<span className="text-on-surface-variant font-label-sm text-label-sm ml-1">(11.6%)</span>
</div>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"11.6%"}}></div>
</div>
</div>

<div className="space-y-1 pl-space-sm">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold flex items-center gap-1">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
            Completed Orders
          </span>
<div className="text-right">
<span className="text-on-surface font-bold">86</span>
<span className="text-tertiary font-label-sm text-label-sm ml-1 font-bold">(4.8%)</span>
</div>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{"width":"4.8%"}}></div>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-start gap-space-sm">
<Icon name="campaign" className="text-primary text-[20px] shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="font-semibold text-on-surface">12% cart abandonments</strong> could be converted using exit-intent vouchers.
      </p>
</div>
</section>

<section aria-label="Top Selling Products" className="rounded-xl bg-surface-container p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Top Selling Products</h3>
<button className="h-10 px-space-sm rounded-full font-label-md text-label-md text-primary font-semibold flex items-center hover:bg-surface-container-high transition-colors active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
        View All
        <Icon name="chevron_right" className="text-[16px] ml-0.5" />
</button>
</div>
<div className="space-y-space-sm">

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center shrink-0">
          1
        </div>
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless headphones, sleek matte black finish, clean minimal commercial product studio shot on pure dark background, soft rim lighting, premium tech packaging vibe." src={`${assetBase}/images/7346e2bbb9feb64d.webp`} />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">SoundCore Space One</p>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-body-sm text-body-sm text-on-surface-variant">34 Units sold</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">UGX 11,730,000</span>
</div>
</div>
<Icon name="local_fire_department" className="text-tertiary text-[20px] shrink-0" />
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center shrink-0">
          2
        </div>
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Baseus 65W GaN Charger compact wall adapter with multiple USB-C ports, deep slate grey housing with subtle orange accent, modern electronics product photography, crisp directional lighting." src={`${assetBase}/images/934dc31b84d8efea.webp`} />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">Baseus 65W GaN Charger</p>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-body-sm text-body-sm text-on-surface-variant">28 Units sold</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">UGX 2,380,000</span>
</div>
</div>
<Icon name="trending_flat" className="text-secondary text-[20px] shrink-0" />
</div>

<div className="rounded-lg bg-surface-container-low p-space-sm flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center shrink-0">
          3
        </div>
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Anker 20W Fast Plug power adapter, clean gloss finish, ergonomic compact wall socket adapter for smartphone charging, isolated commercial studio lighting against dark slate canvas." src={`${assetBase}/images/556b9cb395891b46.webp`} />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-lg text-label-lg font-bold text-on-surface truncate">Anker 20W Fast Plug</p>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-body-sm text-body-sm text-on-surface-variant">24 Units sold</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold">UGX 1,080,000</span>
</div>
</div>
<Icon name="trending_flat" className="text-secondary text-[20px] shrink-0" />
</div>
</div>
</section>

<section aria-label="Customer Geography Breakdown" className="rounded-xl bg-surface-container p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Customer Geography</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Deliveries across Uganda</p>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-surface-container-highest px-space-xs py-1 rounded">
<Icon name="local_shipping" className="text-[14px]" />
        Same-Day Ready
      </div>
</div>

<div className="w-full h-3.5 rounded-full overflow-hidden flex bg-surface-container-highest">
<div className="h-full bg-primary" style={{"width":"64%"}} title="Kampala 64%"></div>
<div className="h-full bg-primary-container" style={{"width":"21%"}} title="Wakiso 21%"></div>
<div className="h-full bg-secondary" style={{"width":"9%"}} title="Mukono 9%"></div>
<div className="h-full bg-secondary-fixed-dim" style={{"width":"4%"}} title="Entebbe 4%"></div>
<div className="h-full bg-outline" style={{"width":"2%"}} title="Other 2%"></div>
</div>

<div className="space-y-space-xs pt-space-xs">

<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala Metropolitan</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">64%</span>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Wakiso District</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">21%</span>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Mukono</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">9%</span>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface font-medium">Entebbe Corridor</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4%</span>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-outline shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Other Upcountry Regions</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-bold">2%</span>
</div>
</div>
</section>

<section className="pt-space-xs">
<div className="grid grid-cols-2 gap-space-sm">
<button className="h-12 w-full rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs hover:bg-surface-container-highest transition-all active:scale-95 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[20px]" />
        Export CSV
      </button>
<button className="h-12 w-full rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs hover:bg-primary transition-all active:scale-95 shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
<Icon name="local_offer" className="text-[20px]" />
        Run Campaign
      </button>
</div>
</section>
</div>
</main>
    </div>
  );
};

export default Mobile;
