// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/commission_rates_fee_matrix_swiftcart_desktop_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-72 min-h-screen flex flex-col bg-background"><main className="w-full pt-16 px-space-lg pb-space-xl flex-1 bg-background"><div className="flex flex-col w-full relative">

<div className="flex flex-col w-full gap-space-lg select-none opacity-40 pointer-events-none filter blur-[1px]">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<Icon name="tune" className="text-[16px]" />
<span>Financial Architecture &amp; Governance</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface">Commission Rates &amp; Fee Matrix</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Manage algorithmic take-rates, logistics co-shares, and merchant rebate structures across Ugandan trading hubs.</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="h-10 px-space-md bg-surface-container-high text-on-surface rounded-xl font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
<Icon name="history_edu" className="text-[18px]" />
          Rate Change Log
        </button>
<button className="h-10 px-space-md bg-primary-container text-on-primary font-label-md text-label-md rounded-xl shadow-md flex items-center gap-1.5">
<Icon name="add_circle" className="text-[18px]" />
          Create Category Tier
        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">30-Day Platform Earnings</span>
<Icon name="monetization_on" className="text-[20px] text-tertiary" />
</div>
<div className="my-space-sm">
<div className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 111,240,500</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="trending_up" className="text-[14px]" />
<span>+14.2% vs previous 30 days</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">Across MTN MoMo &amp; Airtel rails</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Weighted Avg Take Rate</span>
<Icon name="percent" className="text-[20px] text-primary" />
</div>
<div className="my-space-sm">
<div className="font-price-display text-price-display text-primary">7.82%</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mt-1">
<span>Target band: 6.5% - 9.0%</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">Net of verified seller rebates</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Active Regulated Categories</span>
<Icon name="category" className="text-[20px] text-secondary" />
</div>
<div className="my-space-sm">
<div className="font-price-display text-price-display text-on-surface">84 Tiers</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm mt-1">
<span>6 Pending Q4 Schedule</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">Full catalogue coverage</span>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Monthly SafeBoda Co-Pay</span>
<Icon name="two_wheeler" className="text-[20px] text-primary-container" />
</div>
<div className="my-space-sm">
<div className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 18,450,000</div>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="speed" className="text-[14px]" />
<span>Avg delivery 26 mins</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">Direct dispatch subsidy fund</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-lg flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<Icon name="table_chart" className="text-primary text-[22px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Master Category Fee Matrix</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 - 6 of 84 categories</span>
</div>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
<tr>
<th className="p-space-md">Category Sector</th>
<th className="p-space-md">Base Take Rate</th>
<th className="p-space-md">Verified Rebate</th>
<th className="p-space-md">Net Merchant Cost</th>
<th className="p-space-md">SafeBoda Subsidy</th>
<th className="p-space-md">Last Updated</th>
<th className="p-space-md text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-body-md text-on-surface font-body-md">
<tr className="bg-surface-container-lowest">
<td className="p-space-md font-label-lg">Consumer Electronics &gt; Audio &amp; Headphones</td>
<td className="p-space-md font-bold text-primary">7.5%</td>
<td className="p-space-md text-tertiary">-1.0%</td>
<td className="p-space-md font-bold">6.5%</td>
<td className="p-space-md whitespace-nowrap">UGX 1,500</td>
<td className="p-space-md text-on-surface-variant">28 Oct 2025</td>
<td className="p-space-md text-right"><span className="px-3 py-1 bg-surface-container rounded-lg text-primary font-label-sm">Edit Rate</span></td>
</tr>
<tr className="bg-surface-container-low">
<td className="p-space-md font-label-lg">Mobile Phones &gt; Smartphones (Flagship)</td>
<td className="p-space-md font-bold text-primary">5.0%</td>
<td className="p-space-md text-tertiary">-0.5%</td>
<td className="p-space-md font-bold">4.5%</td>
<td className="p-space-md whitespace-nowrap">UGX 2,000</td>
<td className="p-space-md text-on-surface-variant">14 Oct 2025</td>
<td className="p-space-md text-right"><span className="px-3 py-1 bg-surface-container rounded-lg text-primary font-label-sm">Edit Rate</span></td>
</tr>
<tr className="bg-surface-container-lowest">
<td className="p-space-md font-label-lg">Fashion &gt; Ugandan Artisan Footwear</td>
<td className="p-space-md font-bold text-primary">12.0%</td>
<td className="p-space-md text-tertiary">-2.0%</td>
<td className="p-space-md font-bold">10.0%</td>
<td className="p-space-md whitespace-nowrap">UGX 1,000</td>
<td className="p-space-md text-on-surface-variant">02 Oct 2025</td>
<td className="p-space-md text-right"><span className="px-3 py-1 bg-surface-container rounded-lg text-primary font-label-sm">Edit Rate</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="fixed inset-0 top-16 left-72 z-50 flex items-center justify-center p-space-lg bg-inverse-surface/40 backdrop-blur-sm overflow-y-auto">

<div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-[0px_16px_40px_rgba(14,27,77,0.16)] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">

<div className="px-space-xl pt-space-xl pb-space-lg flex items-start justify-between bg-surface-container-lowest">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-[0_4px_14px_rgba(218,55,0,0.25)] flex-shrink-0">
<Icon name="percent" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Edit Category Commission Rate</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">AUD-8402</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<Icon name="storefront" className="text-[16px] text-primary" />
<span className="font-label-sm text-on-surface font-semibold">Consumer Electronics</span>
<span className="text-outline">&gt;</span>
<span className="text-primary font-semibold">Audio &amp; Headphones</span>
<span className="text-outline">•</span>
<span className="text-tertiary font-label-sm flex items-center gap-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 84 Kampala Stores
              </span>
</div>
</div>
</div>

<button aria-label="Close modal" className="w-9 h-9 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="px-space-xl pb-space-lg flex flex-col gap-space-lg overflow-y-auto max-h-[768px]">

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Tier Base Take Rate</span>
<span className="font-label-md text-label-md text-on-surface">Default marketplace charge</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">Standard</span>
</div>
<div className="my-space-md flex items-baseline justify-between">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight" id="takeRateDisplay">7.5%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Min 3.0% — Max 20.0%</span>
</div>

<div className="flex flex-col gap-1.5">
<input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" id="rateSlider" max="20.0" min="3.0" step="0.1" type="range" value="7.5" />
<div className="flex justify-between font-label-sm text-label-sm text-outline pt-0.5">
<span>3.0%</span>
<span className="text-primary font-bold">Selected 7.5%</span>
<span>20.0%</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Performance Incentive</span>
<span className="font-label-md text-label-md text-on-surface">Verified Partner Rebate</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
                Tier 1 Incentive
              </span>
</div>
<div className="my-space-md flex items-baseline justify-between">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-tertiary tracking-tight">1.0%</span>
<span className="font-label-sm text-label-sm text-tertiary">discount</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface bg-surface-container-lowest px-2.5 py-1 rounded-lg">Net: 6.5%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Sellers with <strong className="text-on-surface">&gt;98% fulfillment score</strong> &amp; verified TIN pay an effective net take-rate of only 6.5%.
            </p>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Logistics Allocation</span>
<span className="font-label-md text-label-md text-on-surface">SafeBoda Subsidy Share</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">SwiftCart Co-Pay</span>
</div>
<div className="my-space-md flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight whitespace-nowrap">UGX 1,500</span>
<span className="font-label-sm text-label-sm text-outline">/ order</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="local_shipping" className="text-[18px] text-primary flex-shrink-0" />
<span>Deducted directly from monthly platform dispatch fund for central Kampala delivery.</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Execution Timing</span>
<span className="font-label-md text-label-md text-on-surface">Effective Activation Window</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="lock_clock" className="text-[13px]" />
                Timestamp Lock
              </span>
</div>
<div className="my-space-md">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">01 Nov 2025 (00:00 EAT)</span>
<span className="block font-label-sm text-label-sm text-tertiary font-semibold mt-0.5">Automated Cron Synchronized</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="event_upcoming" className="text-[18px] text-secondary flex-shrink-0" />
<span>Timed for Black Friday / Kampala Tech Week Launch promotions.</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-high/60 flex flex-col gap-space-md shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-2">
<Icon name="analytics" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Real-Time Revenue Simulation</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-bold tracking-wide">VELOCITY: 30-DAY GMV</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Baseline 30d Revenue</span>
<span className="font-headline-sm text-headline-sm text-on-surface mt-1 whitespace-nowrap">UGX 26,780,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Under current 6.8% rate</span>
</div>
<div className="flex flex-col sm:border-l sm:border-surface-container-high sm:pl-space-md">
<span className="font-label-sm text-label-sm text-outline">Projected Variance</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-extrabold whitespace-nowrap">+UGX 2,450,000</span>
<span className="font-label-sm text-label-sm text-tertiary">/mo</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="arrow_upward" className="text-[14px]" /> +9.15% incremental
              </span>
</div>
<div className="flex flex-col sm:border-l sm:border-surface-container-high sm:pl-space-md">
<span className="font-label-sm text-label-sm text-outline">SafeBoda Outflow</span>
<span className="font-headline-sm text-headline-sm text-on-surface mt-1 whitespace-nowrap">UGX 980,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Covered from margin pool</span>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Current vs Simulated Monthly Platform Retained Yield</span>
<span className="font-bold text-on-surface">109.1% of target</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden flex">
<div className="h-full bg-secondary" style={{"width":"78%"}} title="Base Margin"></div>
<div className="h-full bg-primary-container" style={{"width":"14%"}} title="New Incremental Take"></div>
<div className="h-full bg-tertiary" style={{"width":"8%"}} title="Rebate Buffer"></div>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline mt-0.5">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Base UGX 26.78M</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary-container"></span> Delta +UGX 2.45M</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> SafeBoda Absorbed</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Simulation accounts for 84 active electronics vendors and seasonal surge forecasting across Central Kampala, Nakasero, and Garden City trade corridors.
          </p>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5" htmlFor="auditReason">
<span>Mandatory Ledger Audit Reason</span>
<span className="text-primary font-bold">*</span>
</label>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<Icon name="lock" className="text-[14px] text-tertiary" />
              Logged to immutable Superadmin ledger
            </span>
</div>
<div className="relative w-full">
<textarea className="w-full p-space-md bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all resize-none shadow-sm" id="auditReason" rows={2}>Kampala Tech Week promotion adjustment per Q4 commercial roadmap approved by Finance.</textarea>
<span className="absolute bottom-2.5 right-3 font-label-sm text-label-sm text-outline">87/250 chars</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm shadow-sm">
<div className="w-7 h-7 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Merchant Broadcast Notice Trigger</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Rate alterations trigger automated mobile notification broadcasts to all <strong className="text-on-surface">84 registered audio electronics merchants</strong> 48 hours in advance per SwiftCart Merchant Governance charter.
            </p>
</div>
</div>
</div>

<div className="px-space-xl py-space-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="history" className="text-[18px] text-tertiary" />
<span>Last modified by: Ronald Kizito (3 days ago)</span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">

<button className="flex-1 sm:flex-none h-12 px-space-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container hover:shadow transition-all" type="button">
            Cancel &amp; Keep Current Rate
          </button>

<button className="flex-1 sm:flex-none h-12 px-space-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg rounded-xl shadow-[0px_4px_14px_rgba(218,55,0,0.30)] hover:scale-[0.99] active:scale-[0.98] transition-transform flex items-center justify-center gap-2" type="button">
<Icon name="calendar_month" className="text-[20px]" />
<span>Save &amp; Schedule Commission Update</span>
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
