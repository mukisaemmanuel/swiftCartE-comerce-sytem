// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/super-admin/platform_settings_fee_matrix_tablet_dark/code.html
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
      
      <div className="pl-[72px]"><main className="relative pt-16 bg-surface min-h-screen"><div className="w-full p-5 sm:p-6 max-w-[834px] mx-auto"><div className="flex flex-col w-full pb-28 space-y-6">

<div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface-container-high text-on-surface shadow-md">
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Cluster: AWS af-south-1 (Cape Town) • DigitalOcean FRA1 Relay</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm text-tertiary">
<Icon name="sync_saved_locally" className="text-[16px]" />
<span>Ledger in Sync</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-md bg-primary-container text-on-primary-container font-label-sm text-label-sm tracking-wide uppercase">Policy Configuration</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">v4.18.2</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight mt-1">Platform Settings &amp; Marketplace Rules</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
        Restricted to Super Admin role • Last audit update: Yesterday, 16:30 EAT by <span className="text-primary font-semibold">Sarah Namatovu</span>
</p>
</div>
<div className="flex items-center gap-2 self-start sm:self-center">
<span className="px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
<Icon name="verified_user" className="text-emerald-escrow text-[18px]" />
        Enforced on Live Nodes
      </span>
</div>
</div>

<div className="p-1 rounded-xl bg-surface-container-low shadow-inner">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
<button className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-surface-container-highest text-on-surface shadow-md transition-all" type="button">
<Icon name="percent" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md font-bold whitespace-nowrap">Commissions &amp; Fees</span>
</button>
<button className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" type="button">
<Icon name="account_balance_wallet" className="text-[18px]" />
<span className="font-label-md text-label-md whitespace-nowrap">Payment &amp; Payout SLA</span>
</button>
<button className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" type="button">
<Icon name="two_wheeler" className="text-[18px]" />
<span className="font-label-md text-label-md whitespace-nowrap">Boda Subsidies</span>
</button>
<button className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" type="button">
<Icon name="notifications_active" className="text-[18px]" />
<span className="font-label-md text-label-md whitespace-nowrap">Notifications</span>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high p-5 shadow-lg">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary shrink-0 shadow-inner">
<Icon name="payments" className="text-[28px]" />
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Settlement Engine</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dual-Rail MoMo Pipeline (MTN Uganda &amp; Airtel Africa)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Automated batch dispatch programmed to execute daily at 17:00 EAT with full payment audit trails.</p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<div className="px-3 py-2 rounded-xl bg-surface-container-lowest text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Network Uptime</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold">99.98% Healthy</span>
</div>
<div className="px-3 py-2 rounded-xl bg-surface-container-lowest text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Absorbed Fee Pool</span>
<span className="font-label-md text-label-md text-primary font-bold whitespace-nowrap">UGX 14,820,000</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-5 shadow-md space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
<div>
<div className="flex items-center gap-2">
<Icon name="tune" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Category Commission Matrix</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Gross revenue rake deducted at order capture into holding payment.</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">5 Active Tiers</span>
</div>
</div>

<div className="space-y-2">

<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="headphones" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Consumer Electronics &amp; Audio</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-surface-container-highest text-on-surface-variant">Base Rule</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block truncate">Speakers, home theaters, headphones, solar inverters</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-3">
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold">3.5%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">platform fee</span>
</div>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors" title="Edit Commission Rate" type="button">
<Icon name="edit" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="stay_current_portrait" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Smart Phones &amp; Tablets</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-escrow/20 text-emerald-escrow">High Volume</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block truncate">Smartphones, cellular tablets, wearables</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-3">
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold">2.8%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">platform fee</span>
</div>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors" title="Edit Commission Rate" type="button">
<Icon name="edit" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="local_convenience_store" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate block">Supermarket &amp; Fast Moving Goods</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block truncate">Packaged groceries, pantry essentials, cleaning supplies</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-3">
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold">4.0%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">platform fee</span>
</div>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors" title="Edit Commission Rate" type="button">
<Icon name="edit" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="checkroom" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate block">Fashion &amp; Kitenge Apparel</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block truncate">Traditional wear, tailormade fabrics, footwear, accessories</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-3">
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold">6.0%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">platform fee</span>
</div>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors" title="Edit Commission Rate" type="button">
<Icon name="edit" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="countertops" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate block">Home &amp; Kitchen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block truncate">Cookware, small appliances, bedding, home storage</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0 ml-3">
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold">5.0%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">platform fee</span>
</div>
<button className="p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-colors" title="Edit Commission Rate" type="button">
<Icon name="edit" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<span className="text-on-surface-variant uppercase tracking-wider">Weighted Commission Spread Across Active SKUs</span>
<span className="font-bold text-primary">Avg. 4.26% Margin</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden flex">
<div className="h-full bg-action-gradient-start" style={{"width":"32%"}} title="Smartphones 2.8%"></div>
<div className="h-full bg-action-gradient-end" style={{"width":"26%"}} title="Electronics 3.5%"></div>
<div className="h-full bg-amber-warning" style={{"width":"20%"}} title="FMCG 4.0%"></div>
<div className="h-full bg-emerald-escrow" style={{"width":"14%"}} title="Kitchen 5.0%"></div>
<div className="h-full bg-secondary" style={{"width":"8%"}} title="Fashion 6.0%"></div>
</div>
<div className="flex flex-wrap gap-4 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-action-gradient-start"></span>Phones (32%)</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-action-gradient-end"></span>Electronics (26%)</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-warning"></span>FMCG (20%)</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>Kitchen (14%)</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span>Fashion (8%)</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-5 shadow-md space-y-4">
<div className="flex items-center gap-2 pb-1">
<Icon name="gavel" className="text-emerald-escrow text-[20px]" />
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">payment holding &amp; Release Rules</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Controls fund locks between customer delivery confirmation and merchant balance crediting.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Buyer Inspection SLA</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">Standard</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-extrabold flex items-baseline gap-1">
            48 <span className="text-body-md font-body-md text-on-surface-variant font-normal">Hours</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Post-delivery blind OTP confirmation before automatic ledger disbursement.</p>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<span className="text-on-surface-variant">Applies to all standard stores</span>
<span className="text-primary cursor-pointer hover:underline">Configure</span>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Fast-Track Payment</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Enabled</span>
</div>
<div className="font-headline-md text-headline-md text-emerald-escrow font-extrabold flex items-baseline gap-1">
            15 <span className="text-body-md font-body-md text-on-surface-variant font-normal">Minutes</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Auto-release for Gold Verified Merchants with dispute rates &lt; 0.4%.</p>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">142 merchants eligible</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment Compliance Cap</span>
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">High Value</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-extrabold whitespace-nowrap">
            UGX 10,000,000
          </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Orders exceeding this limit trigger automated four-eye compliance sign-off.</p>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<span className="text-on-surface-variant">Tier-3 AML Guard</span>
<span className="text-primary cursor-pointer hover:underline">Adjust Cap</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-5 shadow-md space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
<div className="flex items-center gap-2">
<Icon name="currency_exchange" className="text-action-gradient-start text-[20px]" />
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Mobile Money Payout Schedule</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Automated batch reconciliation to telecom business wallets.</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>MTN MoMo
          <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40"></span>
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>Airtel Money
        </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="p-4 rounded-xl bg-surface-container space-y-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Daily Automated Sweep</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">17:00</span>
<span className="font-label-md text-label-md text-primary">EAT Daily</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Triggers concurrent API batch calls to MTN Open API &amp; Airtel Partner Connect.</p>
</div>

<div className="p-4 rounded-xl bg-surface-container space-y-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Minimum Payout Balance</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-on-surface font-bold whitespace-nowrap">UGX 20,000</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Merchant balances beneath this threshold roll over into the next settlement cycle.</p>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-2">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Zero-Fee Merchant Policy</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">Active</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-bold block mt-1">Platform Absorbs Cashout Fees</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">SwiftCart covers telecom MoMo pull charges to incentivize cashless digital adoption.</p>
</div>
<div className="pt-1 flex items-center justify-end">
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-action-gradient-start"></div>
</label>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-low p-5 shadow-md space-y-4">
<div className="flex items-center gap-2 pb-1">
<Icon name="dns" className="text-secondary text-[20px]" />
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">System Operational Mode &amp; Cloud Relays</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">High availability cluster parameters hosted on standard AWS/DigitalOcean infrastructure.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Maintenance Notice</span>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
<span className="font-label-lg text-label-lg text-on-surface">Banner Disabled</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">No system-wide banner active. App store clients receive normal API responses.</p>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Scheduled Mode</span>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-bright transition-colors" type="button">
            Configure Schedule
          </button>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Storefront Order Ingestion</span>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold">Active &amp; Ingesting</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">All buyer apps (Android &amp; iOS) and web storefronts processing normal checkout.</p>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Graceful Throttling: Off</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-escrow"></div>
</label>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container flex flex-col justify-between space-y-3">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Relay Health</span>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">99.98%</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Optimal</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">East Africa CDN edge cache response latency: 28ms to Kampala nodes.</p>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>DigitalOcean FRA1 Relay</span>
<span className="text-on-surface font-semibold">Active</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-2 text-on-surface-variant font-body-sm text-body-sm">
<span>Super Admin Session: SA-99104-KAM</span>
<span>Compliance Rule Hash: sha256:d8b2e109f...</span>
</div>

<div className="fixed bottom-0 left-[72px] right-0 z-40 bg-surface/95 backdrop-blur-xl p-4 shadow-[0_-6px_24px_rgba(0,0,0,0.60)]">
<div className="max-w-[834px] mx-auto flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<Icon name="info" className="text-amber-warning text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Unsaved modifications apply immediately to new checkouts upon submission.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant sm:hidden">Changes affect new checkouts.</span>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="h-[48px] px-5 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-bright transition-all" type="button">
          Discard Changes
        </button>
<button className="h-[52px] px-6 rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:opacity-95 active:scale-[0.98] transition-all flex items-center gap-2" type="button">
<Icon name="save" className="text-[20px]" />
<span>Save Changes</span>
</button>
</div>
</div>
</div>
</div></div></main></div>
    </div>
  );
};

export default Tablet;
