// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/overpayments_refunds_console_swiftcart_desktop_light/code.html
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
      
      <div className="pl-72 min-h-screen flex flex-col bg-background"><main className="w-full pt-16 px-space-lg pb-space-xl flex-1 bg-background"><div className="flex flex-col w-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-y-2 py-space-sm mb-space-sm">
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-primary transition-colors cursor-pointer">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="hover:text-primary transition-colors cursor-pointer">Financials</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-primary font-bold">Overpayments &amp; Telecom Refunds</span>
</div>
<div className="flex items-center gap-2 self-start md:self-auto px-3 py-1 rounded-full bg-surface-container-high/80 text-on-surface font-label-sm text-label-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="tracking-wide">East Africa Routing Mesh</span>
<span className="text-outline font-normal">•</span>
<span className="font-mono text-secondary">UG-MoMo-Direct-v4.11</span>
<span className="text-outline font-normal">•</span>
<span className="text-tertiary font-bold">Sync SLA: 99.98% &lt;30s</span>
<span className="text-outline font-normal">•</span>
<span className="text-on-surface-variant">Auto-Engine: Active</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-space-lg mb-space-md">
<div className="flex flex-wrap items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<Icon name="currency_exchange" className="text-[24px]" />
</div>
<div>
<div className="flex items-center gap-2">
<h1 className="font-headline-md text-headline-md text-on-surface leading-tight">Ledger Overpayments &amp; Auto-Reversals</h1>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase whitespace-nowrap">UGX SETTLEMENT NODE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Autonomous dual-carrier settlement loop for MTN MoMo and Airtel Money over-deductions.</p>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="h-10 px-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm transition-all flex items-center gap-2">
<Icon name="download" className="text-[18px]" />
<span>Export Reversal Audit CSV</span>
</button>
<button className="h-10 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-[0_4px_14px_rgba(218,55,0,0.30)] transition-all flex items-center gap-2">
<Icon name="sync" className="text-[18px]" />
<span>Force API Reconciliation</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Excess Held</span>
<div className="w-9 h-9 rounded-xl bg-primary-fixed/50 text-primary flex items-center justify-center">
<Icon name="account_balance_wallet" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-primary font-bold whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface">3,450,000</span>
</div>
<div className="mt-2 pt-2 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">14 unallocated pushes</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="verified_user" className="text-[14px]" /> Safe 100%
        </span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Refunds Processed Today</span>
<div className="w-9 h-9 rounded-xl bg-tertiary-fixed/60 text-tertiary flex items-center justify-center">
<Icon name="task_alt" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-on-surface">18</span>
<span className="font-body-lg text-body-lg text-on-surface-variant">Refunds</span>
</div>
<div className="mt-2 pt-2 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 5,280,000 returned</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">94.4% Automated</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Reversal Time</span>
<div className="w-9 h-9 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
<Icon name="bolt" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-on-surface">8.4</span>
<span className="font-body-lg text-body-lg text-on-surface-variant">Minutes</span>
</div>
<div className="mt-2 pt-2 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">MTN &amp; Airtel Open API</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">SLA &lt; 15.0m</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Manual Review Queue</span>
<div className="w-9 h-9 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
<Icon name="emergency_home" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-price-display text-price-display text-error">4</span>
<span className="font-body-lg text-body-lg text-error">Cases</span>
</div>
<div className="mt-2 pt-2 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Supervisor sign-off needed</span>
<span className="font-label-sm text-label-sm text-error font-bold">2 Inquiries</span>
</div>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] mb-space-lg flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 flex-wrap">
<button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all">
        All Reconciliation (18)
      </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-label-md text-label-md transition-all">
        Duplicate USSD (6)
      </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-label-md text-label-md transition-all">
        Order Dispatched Aborts (5)
      </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-label-md text-label-md transition-all">
        Delta Discrepancy (4)
      </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-label-md text-label-md transition-all">
        Timeout Hang (3)
      </button>
</div>
<div className="relative w-full sm:w-64">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
<input className="w-full h-9 pl-9 pr-3 bg-surface-container-low rounded-xl text-body-sm font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search REF, MSISDN..." type="text" value="#RF-44019" />
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] overflow-hidden">
<div className="p-space-lg bg-surface-container-low flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">Telecom Ledger Transactions</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            Live Stream • Webhook Active
          </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-3 px-4">Refund / Order ID</th>
<th className="py-3 px-4">Buyer &amp; MSISDN</th>
<th className="py-3 px-3">Network</th>
<th className="py-3 px-4">Reason Category</th>
<th className="py-3 px-4 text-right">Amount</th>
<th className="py-3 px-4">Gateway Status</th>
<th className="py-3 px-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">

<tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-6 rounded-full bg-primary"></span>
<div>
<span className="font-label-md text-label-md text-primary block leading-none">#RF-44019</span>
<span className="font-mono text-label-sm text-on-surface-variant">#SC-98290</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="font-label-md text-label-md text-on-surface">Grace Nantongo</div>
<div className="font-mono text-label-sm text-on-surface-variant">+256 702 ••• 419</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFCC00]/20 text-[#7A5900] font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span> MTN
                  </span>
</td>
<td className="py-3.5 px-4">
<span className="font-label-md text-label-md text-on-surface block">Duplicate USSD Push</span>
<span className="text-label-sm text-on-surface-variant leading-tight block">*165# double tap confirmed</span>
</td>
<td className="py-3.5 px-4 text-right font-bold text-on-surface font-mono">
                  180,000
                </td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Pending Reversal
                  </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm shadow-[0_2px_8px_rgba(218,55,0,0.25)] hover:bg-primary-container transition-all whitespace-nowrap">
                    Review &amp; Credit
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div>
<span className="font-label-md text-label-md text-on-surface block leading-none">#RF-44018</span>
<span className="font-mono text-label-sm text-on-surface-variant">#SC-98212</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="font-label-md text-label-md text-on-surface">Denis Mukasa</div>
<div className="font-mono text-label-sm text-on-surface-variant">+256 701 ••• 882</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ED1C24]/10 text-[#C11018] font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]"></span> Airtel
                  </span>
</td>
<td className="py-3.5 px-4">
<span className="font-label-md text-label-md text-on-surface block">Order Cancelled</span>
<span className="text-label-sm text-on-surface-variant block">Hub dispatch abort trigger</span>
</td>
<td className="py-3.5 px-4 text-right font-bold text-on-surface font-mono">
                  420,000
                </td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" /> Success 14:12
                  </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">
                    View Receipt
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div>
<span className="font-label-md text-label-md text-on-surface block leading-none">#RF-44015</span>
<span className="font-mono text-label-sm text-on-surface-variant">#SC-98150</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="font-label-md text-label-md text-on-surface">Kenneth Otim</div>
<div className="font-mono text-label-sm text-on-surface-variant">+256 776 ••• 310</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFCC00]/20 text-[#7A5900] font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span> MTN
                  </span>
</td>
<td className="py-3.5 px-4">
<span className="font-label-md text-label-md text-on-surface block">Excess Transfer</span>
<span className="text-label-sm text-on-surface-variant block">Cart Total Delta mismatch</span>
</td>
<td className="py-3.5 px-4 text-right font-bold text-on-surface font-mono">
                  25,000
                </td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" /> Success
                  </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">
                    View Receipt
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div>
<span className="font-label-md text-label-md text-on-surface block leading-none">#RF-44011</span>
<span className="font-mono text-label-sm text-on-surface-variant">#SC-98004</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="font-label-md text-label-md text-on-surface">Martha Akello</div>
<div className="font-mono text-label-sm text-on-surface-variant">+256 754 ••• 991</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFCC00]/20 text-[#7A5900] font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span> MTN
                  </span>
</td>
<td className="py-3.5 px-4">
<span className="font-label-md text-label-md text-on-surface block">Network Timeout</span>
<span className="text-label-sm text-on-surface-variant block">Session expired on handset</span>
</td>
<td className="py-3.5 px-4 text-right font-bold text-on-surface font-mono">
                  75,000
                </td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<Icon name="warning" className="text-[13px]" /> Timeout 504
                  </span>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-xl bg-surface-container-highest text-primary hover:bg-primary-fixed font-label-sm text-label-sm transition-all">
                    Retry Gateway
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-space-md bg-surface-container-low/70 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Showing 4 of 18 records • Automated Retries: 0 Pending</span>
<div className="flex items-center gap-1">
<button className="w-7 h-7 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface disabled:opacity-40" disabled={true}>
<Icon name="chevron_left" className="text-[16px]" />
</button>
<span className="px-2 py-1 bg-primary text-on-primary rounded-lg font-bold">1</span>
<button className="w-7 h-7 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-headline-sm text-on-surface">Reason Breakdown</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">18 Resolved Cases</span>
</div>
<div className="flex items-center gap-4 py-2">

<div className="relative w-28 h-28 flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">

<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4.5"></path>

<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="44, 100" strokeLinecap="round" strokeWidth="4.5"></path>

<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="33, 100" strokeDashoffset="-44" strokeLinecap="round" strokeWidth="4.5"></path>

<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="23, 100" strokeDashoffset="-77" strokeLinecap="round" strokeWidth="4.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">100%</span>
<span className="text-[9px] uppercase font-bold text-outline">Verified</span>
</div>
</div>

<div className="flex flex-col gap-1.5 text-body-sm font-body-sm flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="text-on-surface">Cancelled Dispatch</span>
</div>
<span className="font-bold text-on-surface">44%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="text-on-surface">Duplicate USSD</span>
</div>
<span className="font-bold text-on-surface">33%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="text-on-surface">Excess Cart Delta</span>
</div>
<span className="font-bold text-on-surface">23%</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Gateway Health</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> 99.94% Success
            </span>
</div>
<div className="space-y-3 my-auto">
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-6 rounded-full bg-[#FFCC00]"></span>
<div>
<div className="font-label-md text-label-md text-on-surface">MTN MoMo Open API</div>
<div className="text-[11px] text-on-surface-variant font-mono">Host: api.mtn.co.ug/disbursement</div>
</div>
</div>
<div className="text-right">
<div className="font-label-md text-label-md text-tertiary">142ms</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold">Online</div>
</div>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-6 rounded-full bg-[#ED1C24]"></span>
<div>
<div className="font-label-md text-label-md text-on-surface">Airtel Money Node</div>
<div className="text-[11px] text-on-surface-variant font-mono">Host: merchant.airtel.ug/v2/payout</div>
</div>
</div>
<div className="text-right">
<div className="font-label-md text-label-md text-tertiary">98ms</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold">Online</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-2xl bg-surface-container-lowest shadow-[0_8px_24px_rgba(14,27,77,0.08)] overflow-hidden border-2 border-primary/20">

<div className="p-space-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase">Stage 2 / 2</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Cryptographic Dispatch</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Process Direct Reverse Credit</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Instant push to customer telecom cash wallet.</p>
</div>
<Icon name="lock_reset" className="text-primary text-[28px]" />
</div>
<div className="p-space-lg space-y-space-md">

<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase block">Active Reversal Queue</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-mono">#RF-44019</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline uppercase block">Linked Order</span>
<span className="font-label-md text-label-md text-primary font-mono underline cursor-pointer">#SC-98290</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low/70 flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0 text-[#7A5900]">
<Icon name="cell_tower" className="text-[26px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface truncate">Grace Nantongo</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<div className="font-mono text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
<span>+256 702 ••• 419</span>
<span className="text-outline">•</span>
<span className="text-[#7A5900] font-bold text-label-sm">MTN MoMo Registered</span>
</div>
</div>
</div>

<div className="space-y-2 pt-1">
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Requested Reversal Amount</span>
<span className="font-mono text-on-surface whitespace-nowrap">UGX 180,000</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">Telecom Partner API Fee <Icon name="info" className="text-[14px] text-outline" /></span>
<span className="font-mono text-tertiary whitespace-nowrap">0 UGX (Waived)</span>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span>Debited Escrow Node</span>
<span className="font-mono text-on-surface text-[12px]">ESCROW-UG-MOMO-01</span>
</div>

<div className="p-4 rounded-xl bg-primary-fixed/30 flex items-center justify-between mt-3">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold block">Net Buyer Credit</span>
<span className="text-body-sm text-on-surface-variant">Non-taxable escrow rollback</span>
</div>
<div className="text-right">
<div className="font-price-display text-price-display text-primary font-black whitespace-nowrap">UGX 180,000</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>Audit Log &amp; Reversal Justification</span>
<span className="text-label-sm text-outline">Internal Node Log</span>
</label>
<div className="p-3 rounded-xl bg-surface-container-low font-mono text-[11px] text-on-surface-variant leading-relaxed">
              [2024-03-24 14:18:02 EAT] AUTO-DETECT: Customer initiated duplicate payment *165# before webhook callback acknowledged. External TransID: #MTN-8821940. Auto-flagged for immediate supervisor settlement sign-off.
            </div>
</div>

<div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="fingerprint" className="text-tertiary text-[20px]" />
<div>
<span className="font-label-sm text-label-sm text-on-surface block font-bold">Admin Kizito Ronald (ADM-041)</span>
<span className="text-[11px] text-on-surface-variant">Hardware Security Key Validated</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">Authorized</span>
</div>

<div className="space-y-2 pt-2">
<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:brightness-105 active:scale-[0.98] text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.35)] transition-all flex items-center justify-center gap-2">
<Icon name="send" className="text-[20px]" />
<span>Authorize Immediate MTN MoMo Reversal</span>
</button>
<button className="w-full h-10 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-2">
<Icon name="flag" className="text-[16px] text-error" />
<span>Reject &amp; Escalate to Dispute Queue</span>
</button>
</div>

<div className="flex items-center justify-center gap-1.5 text-center text-outline font-label-sm text-label-sm pt-1">
<Icon name="bolt" className="text-[14px] text-tertiary" />
<span>Automated 2-way MoMo Webhook verifies balance credit within 300ms</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-lg p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<Icon name="account_balance" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">Automated Settlement Engine v3</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm">Stanbic Bank Partner Float Synced</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Uganda National Payment Systems Act Compliant (Bank of Uganda NPS-092-2021).</p>
</div>
</div>
<div className="flex items-center gap-6">
<div>
<span className="text-[11px] uppercase font-bold text-outline block">Master Float Balance</span>
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold whitespace-nowrap">UGX 145,820,400</span>
</div>
<div className="h-8 w-px bg-surface-container-high hidden sm:block"></div>
<div>
<span className="text-[11px] uppercase font-bold text-outline block">Settlement Pool Health</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold">Liquid &amp; Healthy</span>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
