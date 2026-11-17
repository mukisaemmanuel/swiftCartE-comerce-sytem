// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/super-admin/super_admin_operational_overview_tablet_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <div className="pl-[72px]"><main className="relative pt-16 bg-surface min-h-screen"><div className="w-full p-5 sm:p-6 max-w-[834px] mx-auto"><div className="flex flex-col w-full gap-6">

<section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-surface-container shadow-md relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-60 h-60 bg-action-gradient-start/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-1 min-w-0 z-10">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold px-2 py-0.5 rounded-full bg-primary-container/20">Master Ops Center</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">• East Africa Time (EAT)</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
        Welcome back, Sarah (Super Admin)
      </h1>
<div className="flex items-center gap-2 pt-0.5">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-escrow animate-pulse"></span>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
          All Cloud Services Operational • AWS / DigitalOcean Cluster (Nairobi Edge • Kampala Relay)
        </p>
</div>
</div>
<div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0 z-10 w-full sm:w-auto pt-2 sm:pt-0">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface">
<Icon name="schedule" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md font-bold text-on-surface" id="eat-clock">14:48:22 EAT</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Thursday, 24 Oct 2024</span>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="flex flex-col justify-between p-4 rounded-xl bg-surface-container shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-action-gradient-start/15 flex items-center justify-center text-action-gradient-start">
<Icon name="payments" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-bold flex items-center gap-0.5">
<Icon name="trending_up" className="text-[13px]" />
          +12.4%
        </span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">Gross GMV (24h)</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5 whitespace-nowrap">UGX 84,250,000</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1.5">
<Icon name="check_circle" className="text-[15px] text-primary" />
          1,420 Completed Orders
        </p>
</div>
</div>

<div className="flex flex-col justify-between p-4 rounded-xl bg-surface-container shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-escrow/15 flex items-center justify-center text-emerald-escrow">
<Icon name="verified_user" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
          Trust Locked
        </span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">Payment Reserve In-Flight</span>
<h3 className="font-headline-sm text-headline-sm text-emerald-escrow font-extrabold mt-0.5 whitespace-nowrap">UGX 198,450,000</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
          100% Backed • MTN &amp; Airtel Trust Accts
        </p>
</div>
</div>

<div className="flex flex-col justify-between p-4 rounded-xl bg-surface-container shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-bold">
          96% On Route
        </span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">Active Fleet on Boda</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">184 Riders Dispatched</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
          Kampala, Entebbe &amp; Wakiso Hubs
        </p>
</div>
</div>

<div className="flex flex-col justify-between p-4 rounded-xl bg-surface-container shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex items-start justify-between mb-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
<Icon name="storefront" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-bold">
          6 Pending KYC
        </span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">Marketplace Merchants</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">142 Verified Stores</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Active Catalogue: 8,420 Items
        </p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
<Icon name="gavel" className="text-[19px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Payment &amp; Dispute Health</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Real-time platform consumer protection index</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-md bg-emerald-escrow/10 text-emerald-escrow font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> 99.6% payment safety
          </span>
</div>
<div className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-surface-container-low text-center">
<div className="flex flex-col items-center justify-center py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Open Disputes</span>
<span className="font-headline-sm text-headline-sm text-amber-warning font-extrabold mt-0.5">5</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80">Pending action</span>
</div>
<div className="flex flex-col items-center justify-center py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg Resolution</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">6.2h</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">&lt; 24h SLA target</span>
</div>
<div className="flex flex-col items-center justify-center py-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Disputed Value</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5 whitespace-nowrap">UGX 1.8M</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/80">0.9% of reserve</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex justify-between items-center text-on-surface font-label-sm text-label-sm">
<span className="text-on-surface-variant">Payment Turnover Velocity (SLA Confidence)</span>
<span className="text-tertiary font-bold">Normal • 94.8% Same-Day Delivery Release</span>
</div>
<div className="h-2 w-full rounded-full bg-surface-container-high overflow-hidden flex">
<div className="h-full bg-tertiary" style={{"width":"82%"}}></div>
<div className="h-full bg-action-gradient-start" style={{"width":"14%"}}></div>
<div className="h-full bg-danger-penalty" style={{"width":"4%"}}></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span> Automatic Release (82%)</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-action-gradient-start inline-block"></span> Merchant Claim (14%)</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-danger-penalty inline-block"></span> Contested (4%)</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
<Icon name="account_balance_wallet" className="text-[19px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">17:00 EAT MoMo Settlement Queue</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated batch sweep via Pesapal Mobile Money Aggregator</p>
</div>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-bold">
            Batch #SWP-908
          </span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Scheduled Sweep Amount</span>
<div className="flex items-baseline gap-2 mt-0.5">
<span className="font-price-display text-price-display text-on-surface font-extrabold whitespace-nowrap">UGX 34,800,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">48 Merchants</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="lock_clock" className="text-[15px] text-emerald-escrow" />
              Liquidity checked &amp; reserved held until delivery clearing pool
            </span>
</div>
<button className="w-full sm:w-auto h-11 px-5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0" type="button">
<span>Review Payout Queue</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant px-1">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span> MTN MoMo: UGX 21,300,000 (61%)
          </span>
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span> Airtel Money: UGX 13,500,000 (39%)
          </span>
</div>
</div>

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<Icon name="pie_chart" className="text-[19px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Commission &amp; Take Rate</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">Realized marketplace operator net earnings</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Today's Take Rate</span>
<span className="font-label-md text-label-md font-bold text-tertiary">3.5% Weighted Avg</span>
</div>
</div>
<div className="flex items-end justify-between p-4 rounded-xl bg-surface-container-low">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Net Commission Earned Today</span>
<p className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight mt-1 whitespace-nowrap">
              UGX 2,948,750
            </p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center">
<Icon name="arrow_upward" className="text-[15px]" /> +8.9%
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">vs projected baseline UGX 2,700,000</span>
</div>
</div>

<div className="hidden sm:block shrink-0 w-36 h-12">
<svg className="w-full h-full text-action-gradient-start overflow-visible" fill="none" viewBox="0 0 144 48">
<path d="M2 42 L24 35 L48 38 L72 26 L96 30 L120 14 L142 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M2 42 L24 35 L48 38 L72 26 L96 30 L120 14 L142 6 V48 H2 Z" fill="currentColor" fillOpacity="0.12"></path>
<circle cx="142" cy="6" fill="currentColor" r="3.5"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="notification_important" className="text-action-gradient-start text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Action Queue</h2>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-action-gradient-start/20 text-action-gradient-start font-bold">
            3 High Priority
          </span>
</div>
<div className="flex flex-col gap-2.5 mt-1">

<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
<Icon name="inventory_2" className="text-[19px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Product Moderation Queue</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">4 SKUs awaiting counterfeit check</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold px-2.5 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-highest transition-colors shrink-0" data-path="moderation" href="#">Review</a>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center shrink-0">
<Icon name="badge" className="text-[19px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Merchant Tier 2 KYC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">2 Stores awaiting URSB registry verification</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-on-surface font-bold px-2.5 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-highest transition-colors shrink-0" data-path="roles" href="#">Verify</a>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-danger-penalty/20 text-danger-penalty flex items-center justify-center shrink-0">
<Icon name="timer" className="text-[19px]" />
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">High-Value Dispute #DSP-104</p>
<p className="font-body-sm text-body-sm text-danger-penalty font-medium truncate whitespace-nowrap">UGX 840,000 • 4 hours left on SLA</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-danger-penalty font-bold px-2.5 py-1.5 rounded-md bg-danger-penalty/15 hover:bg-danger-penalty/25 transition-colors shrink-0" data-path="disputes" href="#">Resolve</a>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="local_shipping" className="text-secondary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Regional Dispatch Speed</h2>
</div>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">Normal Hub Flow</span>
</div>
<div className="flex flex-col gap-3">

<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala Central Sector</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">38 min avg</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"78%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Target: &lt; 45m</span>
<span>112 Riders Engaged</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Nakasero Micro-Hub</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">42 parcels/hr</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"88%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Peak Capacity: 50/hr</span>
<span>Sorting Speed: 94% on-spec</span>
</div>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-surface-container shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="history_edu" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Admin Audit Trail</h2>
</div>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="audit-log" href="#">View All</a>
</div>
<div className="flex flex-col gap-2.5">

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container-low text-left">
<div className="w-7 h-7 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
              MS
            </div>
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Michael S. approved Tier 2 KYC</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Victoria Tech Kampala Ltd • URSB #80029</p>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">12m ago</span>
</div>

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container-low text-left">
<div className="w-7 h-7 rounded-full bg-action-gradient-start/20 text-action-gradient-start flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
              DM
            </div>
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Dennis M. released MoMo batch</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate whitespace-nowrap">UGX 12,400,000 authorized to 19 stores</p>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">34m ago</span>
</div>

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container-low text-left">
<div className="w-7 h-7 rounded-full bg-tertiary-container/40 text-tertiary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
              GA
            </div>
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Grace A. approved catalogue SKU</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">SoundCore Life Q30 • Anker Uganda Official</p>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">1h ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
