// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/overpayments_refunds_console_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72"><main className="w-full pt-16 px-gutter-desktop pb-margin-desktop bg-surface-dark min-h-screen"><div className="flex flex-col w-full gap-space-lg">

<div className="w-full bg-surface-container-low px-space-md py-space-xs rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-escrow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-escrow"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">East Africa Financial Routing Mesh</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Gateway Bridge: UG-MoMo-Direct-v4.11</span>
</div>
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">Sync SLA:</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">99.98% Under 30s</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">Auto-Webhook Engine:</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">OPERATIONAL</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span>Financials</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Overpayments &amp; Telecom Refunds</span>
</nav>
<div className="flex items-baseline gap-space-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Ledger Overpayments &amp; Auto-Reversals</h1>
<span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-container-dark-high text-tertiary font-bold tracking-wide whitespace-nowrap">UGX SETTLEMENT NODE</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-sm rounded-xl bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-space-xs shadow-sm">
<Icon name="file_download" className="text-[18px]" />
<span>Export Reversal Audit CSV</span>
</button>
<button className="px-space-md py-space-sm rounded-xl bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-space-xs shadow-sm">
<Icon name="sync" className="text-[18px]" />
<span>Force API Reconciliation</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-container-dark-low p-space-lg rounded-xl relative overflow-hidden flex flex-col justify-between shadow-md">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Excess Held</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="account_balance_wallet" className="text-[18px]" />
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight whitespace-nowrap">UGX 3,450,000</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-amber-warning">
<Icon name="warning" className="text-[14px]" />
<span>14 unallocated push payments</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low/50 rounded-lg p-space-xs flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Escrow Buffer Safe:</span>
<span className="text-emerald-escrow font-bold">100% Guaranteed</span>
</div>
</div>

<div className="bg-container-dark-low p-space-lg rounded-xl relative overflow-hidden flex flex-col justify-between shadow-md">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Refunds Processed Today</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<Icon name="task_alt" className="text-[18px]" />
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight">18 Refunds</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-tertiary">
<Icon name="arrow_downward" className="text-[14px]" />
<span className="whitespace-nowrap">UGX 5,280,000 reversed to wallets</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low/50 rounded-lg p-space-xs flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Automated Rate:</span>
<span className="text-on-surface font-bold">94.4% Non-Human</span>
</div>
</div>

<div className="bg-container-dark-low p-space-lg rounded-xl relative overflow-hidden flex flex-col justify-between shadow-md">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Reversal Time</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="bolt" className="text-[18px]" />
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-price-display text-price-display text-on-surface tracking-tight">8.4 Minutes</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="speed" className="text-[14px]" />
<span>MTN MoMo &amp; Airtel Open API</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low/50 rounded-lg p-space-xs flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Target SLA:</span>
<span className="text-on-surface font-bold">&lt; 15.0 mins</span>
</div>
</div>

<div className="bg-container-dark-low p-space-lg rounded-xl relative overflow-hidden flex flex-col justify-between shadow-md">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-danger-penalty/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Manual Review Queue</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-danger-penalty">
<Icon name="assignment_late" className="text-[18px]" />
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-price-display text-price-display text-danger-penalty tracking-tight">4 Cases</span>
<div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="lock_clock" className="text-[14px]" />
<span>Requires supervisor sign-off</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low/50 rounded-lg p-space-xs flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Escalation Status:</span>
<span className="text-amber-warning font-bold">2 Under Inquiry</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 flex flex-col gap-space-md">

<div className="bg-container-dark-low p-space-md rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md shadow-sm">

<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl overflow-x-auto">
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-container-dark-high text-on-surface font-bold shadow-sm whitespace-nowrap">
            All Reconciliation <span className="ml-1 text-label-sm text-primary font-normal">(18)</span>
</button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
            Duplicate USSD <span className="ml-1 text-label-sm text-on-surface-variant font-normal">(6)</span>
</button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
            Cancelled Pre-Dispatch <span className="ml-1 text-label-sm text-on-surface-variant font-normal">(8)</span>
</button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
            Overpaid Amounts <span className="ml-1 text-label-sm text-on-surface-variant font-normal">(4)</span>
</button>
</div>

<div className="relative flex items-center min-w-[280px]">
<Icon name="filter_alt" className="absolute left-3 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-9 pr-8 py-2 rounded-lg focus:outline-none focus:bg-surface-container text-on-surface placeholder-on-surface-variant" placeholder="Search Telecom Trans ID, Buyer Phone, Order #" type="text" value="#RF-44019" />
<button className="absolute right-2 text-on-surface-variant hover:text-on-surface p-1">
<Icon name="close" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-container-dark-low rounded-xl overflow-hidden shadow-lg flex flex-col">
<div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Telecom Ledger Transactions</span>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">Live Stream</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span>Real-time MoMo/Airtel Webhook Listener Active</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/70 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md">Refund ID &amp; Order</th>
<th className="py-space-sm px-space-md">Buyer MSISDN &amp; Name</th>
<th className="py-space-sm px-space-md">Network</th>
<th className="py-space-sm px-space-md">Reason Category</th>
<th className="py-space-sm px-space-md">Amount</th>
<th className="py-space-sm px-space-md">Gateway Status</th>
<th className="py-space-sm px-space-md text-right">Operational Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40 text-body-sm font-body-sm">

<tr className="bg-surface-container/60 hover:bg-surface-container-high/80 transition-colors group cursor-pointer">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-action-gradient-start inline-block"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#RF-44019</span>
<span className="font-label-sm text-label-sm text-primary font-mono">#SC-98290</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Grace Nantongo</span>
<span className="font-code-display text-body-sm text-on-surface-variant tracking-wide font-mono">+256 702 ••• 419</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-surface-container-high">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">MTN MoMo</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Duplicate USSD Push</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">*165# double tap confirmed</span>
</div>
</td>
<td className="py-space-md px-space-md whitespace-nowrap">
<span className="font-price-display text-[15px] font-bold text-amber-warning whitespace-nowrap">UGX 180,000</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-amber-warning/10 text-amber-warning font-label-sm text-label-sm font-bold w-fit">
<Icon name="pending" className="text-[13px]" />
<span>Pending Approval</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">#MTN-8821940</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<button className="px-space-md py-1.5 rounded-lg bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-sm text-label-sm font-bold shadow-[0_2px_12px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all">
                    One-Click MoMo Reversal
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container/40 transition-colors group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-transparent inline-block"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#RF-44018</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#SC-98212</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Denis Mukasa</span>
<span className="font-code-display text-body-sm text-on-surface-variant tracking-wide font-mono">+256 701 ••• 882</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-surface-container-high">
<span className="w-2.5 h-2.5 rounded-full bg-airtel-red"></span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Airtel Money</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Order Cancelled</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Hub dispatch abort trigger</span>
</div>
</td>
<td className="py-space-md px-space-md whitespace-nowrap">
<span className="font-price-display text-[15px] font-bold text-on-surface whitespace-nowrap">UGX 420,000</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold w-fit">
<Icon name="check_circle" className="text-[13px]" />
<span>Success</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Reversed at 14:12 EAT</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1 ml-auto">
<Icon name="receipt_long" className="text-[14px]" />
<span>View Receipt</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container/40 transition-colors group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-transparent inline-block"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#RF-44015</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#SC-98150</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kenneth Otim</span>
<span className="font-code-display text-body-sm text-on-surface-variant tracking-wide font-mono">+256 776 ••• 310</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-surface-container-high">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">MTN MoMo</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Excess Transfer</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Mismatched Cart Total Delta</span>
</div>
</td>
<td className="py-space-md px-space-md whitespace-nowrap">
<span className="font-price-display text-[15px] font-bold text-on-surface whitespace-nowrap">UGX 25,000</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold w-fit">
<Icon name="check_circle" className="text-[13px]" />
<span>Success</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">#MTN-8819033</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1 ml-auto">
<Icon name="receipt_long" className="text-[14px]" />
<span>View Receipt</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container/40 transition-colors group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-6 rounded-full bg-danger-penalty inline-block"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">#RF-44011</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#SC-98004</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Martha Akello</span>
<span className="font-code-display text-body-sm text-on-surface-variant tracking-wide font-mono">+256 754 ••• 991</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-surface-container-high">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">MTN MoMo</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-danger-penalty font-semibold">Network Timeout Auto-Rev</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Session expired on handset</span>
</div>
</td>
<td className="py-space-md px-space-md whitespace-nowrap">
<span className="font-price-display text-[15px] font-bold text-danger-penalty whitespace-nowrap">UGX 75,000</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-danger-penalty/10 text-danger-penalty font-label-sm text-label-sm font-bold w-fit">
<Icon name="report" className="text-[13px]" />
<span>Verification Needed</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Gateway Timeout (504)</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-sm text-label-sm font-bold transition-all flex items-center gap-1 ml-auto">
<Icon name="troubleshoot" className="text-[14px]" />
<span>Resolve with Gateway</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm">
<div className="flex items-center gap-space-md text-on-surface-variant">
<span>Showing <strong className="text-on-surface">4 of 18</strong> records matching current ledger state</span>
<span>•</span>
<span className="text-emerald-escrow font-semibold">Automated Retries: 0 Pending</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface disabled:opacity-30" disabled={true}>
<Icon name="chevron_left" className="text-[18px]" />
</button>
<span className="px-2 py-0.5 bg-container-dark-high rounded text-on-surface font-bold">1</span>
<button className="p-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface">
<Icon name="chevron_right" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-container-dark-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Reversal Reason Breakdown</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Last 24 Hours</span>
</div>
<div className="flex items-center gap-space-lg">

<div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">

<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>

<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="44, 100" strokeWidth="4"></path>

<path className="text-mtn-yellow" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="33, 100" strokeDashoffset="-44" strokeWidth="4"></path>

<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="23, 100" strokeDashoffset="-77" strokeWidth="4"></path>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">18</span>
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase">Resolved</span>
</div>
</div>

<div className="flex flex-col gap-space-xs flex-grow font-label-sm text-label-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-primary-container"></span>
<span className="text-on-surface">Cancelled Pre-Dispatch</span>
</div>
<span className="font-bold text-on-surface">44% (8)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-mtn-yellow"></span>
<span className="text-on-surface">Duplicate USSD Push</span>
</div>
<span className="font-bold text-on-surface">33% (6)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded bg-tertiary"></span>
<span className="text-on-surface">Excess Cart Transfer</span>
</div>
<span className="font-bold text-on-surface">23% (4)</span>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Telecom Direct Gateway Health</span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-bold">API v2 Online</span>
</div>
<div className="flex flex-col gap-space-md my-auto">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
                  MTN Mobile Money Open API
                </span>
<span className="text-tertiary font-bold">142ms Response</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="bg-mtn-yellow h-full rounded-full" style={{"width":"92%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>
                  Airtel Money Merchant Node
                </span>
<span className="text-tertiary font-bold">98ms Response</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="bg-airtel-red h-full rounded-full" style={{"width":"98%"}}></div>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Aggregated Gateway Success Rate:</span>
<span className="font-bold text-on-surface">99.94%</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-container-dark-low rounded-xl p-space-lg flex flex-col gap-space-lg shadow-xl relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-action-gradient-start to-action-gradient-end"></div>

<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<Icon name="contactless" className="text-action-gradient-start text-[22px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Process Direct Telecom Reverse Credit</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Cryptographic mobile money settlement dispatch</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-code-display text-label-sm font-bold">STAGE 2/2</span>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Selected Item: #RF-44019</span>
<span className="font-label-sm text-label-sm text-amber-warning font-mono bg-amber-warning/10 px-1.5 py-0.5 rounded">HOLD</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Linked: #SC-98290</span>
</div>
<div className="h-px bg-surface-container-high/60 w-full"></div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Target MSISDN</span>
<span className="font-code-display text-[15px] font-bold text-on-surface font-mono">+256 702 ••• 419</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Grace Nantongo (Verified KYC)</span>
</div>
<div className="w-10 h-10 rounded-xl bg-mtn-yellow/15 flex items-center justify-center text-mtn-yellow font-bold text-[13px]">
            MTN
          </div>
</div>
</div>

<div className="flex flex-col gap-space-sm bg-surface-container/40 p-space-md rounded-xl">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Requested Reversal Amount</span>
<span className="font-bold text-on-surface whitespace-nowrap">UGX 180,000</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Telecom Partner API Fee</span>
<span className="text-emerald-escrow font-bold whitespace-nowrap">0 UGX (Waived Partner Agree.)</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface-variant">Escrow Account Debited</span>
<span className="text-on-surface font-mono text-label-sm">ESCROW-UG-MOMO-01</span>
</div>
<div className="h-px bg-surface-container-high/60 w-full my-1"></div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Net Buyer Credit</span>
<span className="font-price-display text-price-display text-action-gradient-start font-bold whitespace-nowrap">UGX 180,000</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider flex items-center justify-between">
<span>Supervisor Reason Code &amp; Audit Log</span>
<span className="text-primary font-normal">Auto-Detected Code: ERR-USSD-DUP</span>
</label>
<div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-xs">
<Icon name="info" className="text-amber-warning text-[18px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            "Customer initiated duplicate payment before webhook callback confirmed. Secondary MoMo push #MTN-8821940 captured in float pool with matching session ID."
          </p>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-md">
<div className="w-8 h-8 rounded-full bg-emerald-escrow/10 flex items-center justify-center text-emerald-escrow flex-shrink-0">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Cryptographically Verified Refund Request</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Admin Kizito Ronald (ID: ADM-941) Authenticated</span>
</div>
</div>

<div className="flex flex-col gap-space-sm mt-auto pt-space-xs">
<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="authorizeReversalBtn">
<Icon name="send_to_mobile" className="text-[20px]" />
<span>Authorize Immediate MTN MoMo Reversal</span>
</button>
<button className="w-full h-12 rounded-xl bg-danger-penalty/10 hover:bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md transition-colors flex items-center justify-center gap-2">
<Icon name="gavel" className="text-[18px]" />
<span>Reject &amp; Escalate to Dispute</span>
</button>
<div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-sm text-label-sm pt-1">
<Icon name="lock" className="text-[14px]" />
<span>Automated 2-Way MoMo Webhook will verify credit within 300ms</span>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="history_edu" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Automated Settlement Settlement Engine v3</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">All reversals communicate directly with Kampala Central MoMo aggregator switches under Bank of Uganda National Payments Systems (NPS) mandate.</span>
</div>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<div className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
<span>Float Pool Health:</span>
<span className="text-tertiary font-bold whitespace-nowrap">UGX 145.8M Liquid</span>
</div>
<span className="text-on-surface-variant">•</span>
<button className="text-primary hover:underline font-label-sm text-label-sm font-bold flex items-center gap-1">
<span>View Global Gateway Logs</span>
<Icon name="open_in_new" className="text-[14px]" />
</button>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
