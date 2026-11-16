// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_returns_rto_bay_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-surface min-h-screen px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">



<div className="w-full bg-surface-container-low px-gutter-desktop py-space-xs rounded-xl flex items-center justify-between shadow-sm mb-space-lg">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-tertiary">
<Icon name="cell_tower" className="text-[18px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider">Depot Intranet Mesh • William St Gateway</span>
</div>
<div className="h-3 w-[1px] bg-surface-container-highest"></div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Arbitration Oracle Node <span className="text-on-surface font-semibold">UG-ARB-04</span></span>
</div>
<div className="flex items-center gap-space-sm text-emerald-escrow">
<Icon name="lock_reset" className="text-[16px]" />
<span className="font-label-sm text-label-sm tracking-wide">Automatic Escrow Restoral Engine Active</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg pb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Returns &amp; Return-To-Origin (RTO) Processing Bay</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Station Bay R-01 • William Street Logistics Depot • Reverse Manifest Consolidation &amp; Merchant Restoral
      </p>
</div>

<div className="flex items-center gap-space-md flex-shrink-0">
<div className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-md text-label-md text-on-surface font-bold">RTO Bay Operational</span>
</div>
<div className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high shadow-sm">
<Icon name="departure_board" className="text-action-gradient-start text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none uppercase">Line Departure</span>
<span className="font-label-md text-label-md text-on-surface font-bold leading-tight">17:30 EAT Truck #02</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-action-gradient-start/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active RTO Inventory</span>
<Icon name="inventory_2" className="text-action-gradient-start text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">38 Parcels</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Failed delivery, buyer reject, dispute</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-action-gradient-start/20 text-primary font-bold">+6 vs AM intake</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">bay density 42%</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Consolidated for Dispatch</span>
<Icon name="shopping_bag" className="text-secondary text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">24 Parcels</span>
<span className="font-body-sm text-body-sm text-secondary font-medium">Packed into 2 Master Return Sacks</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[63%]"></div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-escrow/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Escrow Reversal Rate</span>
<Icon name="verified" className="text-emerald-escrow text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-emerald-escrow font-extrabold tracking-tight">94.2%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Refunded or held via arbitration</span>
</div>
<div className="flex items-center gap-space-xs text-emerald-escrow">
<Icon name="shield" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-semibold whitespace-nowrap">UGX 14.8M secured today</span>
</div>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-warning/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Avg Restoral Turnaround</span>
<Icon name="timelapse" className="text-amber-warning text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">44.1 hrs</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hub intake to merchant restitution</span>
</div>
<div className="flex items-center gap-space-xs text-amber-warning">
<Icon name="priority_high" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-semibold">Target &lt; 48 hrs SLA</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop items-start">

<div className="xl:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0 scrollbar-none" id="filter-tabs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold whitespace-nowrap shadow-sm transition-all hover:bg-surface-container-highest">
              All Returns (38)
            </button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface whitespace-nowrap transition-all">
              Customer Refused / Expired (18)
            </button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface whitespace-nowrap transition-all">
              Arbitration Ruled (9)
            </button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface whitespace-nowrap transition-all">
              Undeliverable / SafeBoda (11)
            </button>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-high px-space-sm py-1 rounded-lg">
<Icon name="search" className="text-on-surface-variant text-[18px]" />
<input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant w-32 focus:w-44 transition-all" placeholder="Scan SKU / Waybill..." type="text" />
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl shadow-md overflow-hidden flex flex-col">
<div className="px-space-lg py-space-md bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Icon name="assignment_return" className="text-on-surface text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Reverse Logistics Manifest Table</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Displaying 4 Priority Parcels</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-md">Return ID</th>
<th className="py-space-md px-space-md">Original Order</th>
<th className="py-space-md px-space-md">Merchant Destination</th>
<th className="py-space-md px-space-md">Return Reason</th>
<th className="py-space-md px-space-md">Holding Period</th>
<th className="py-space-md px-space-md">Condition Grade</th>
<th className="py-space-md px-space-md">RTO Bay</th>
<th className="py-space-md px-space-md text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/20 font-body-sm text-body-sm text-on-surface">

<tr className="hover:bg-surface-container transition-colors group">
<td className="py-space-md px-space-md font-code-display text-primary text-[13px] font-bold">
                  #RET-UG-4019
                </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">SC-97108</span>
<span className="text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">UGX 185,000</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Elite Mobile Acc.</span>
<span className="text-on-surface-variant text-body-sm flex items-center gap-0.5">
<Icon name="pin_drop" className="text-[14px]" /> Wandegeya
                    </span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[11px] font-medium block w-fit">
                    Buyer Remorse
                  </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 text-danger-penalty font-bold font-label-md text-label-md">
<Icon name="alarm" className="text-[16px]" />
<span>74 hrs</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty tracking-wide uppercase">SLA Exceeded</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1 w-fit">
<Icon name="check_circle" className="text-[14px]" /> Grade A (Sealed)
                  </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary font-bold">Bag RTO-KLA-08</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bin Rack B-3</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-surface-container-highest text-tertiary font-label-md text-label-md font-bold inline-block">
                    Staged
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group">
<td className="py-space-md px-space-md font-code-display text-primary text-[13px] font-bold">
                  #RET-UG-4022
                </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">SC-96540</span>
<span className="text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">UGX 890,000</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kampala Phone Hub</span>
<span className="text-on-surface-variant text-body-sm flex items-center gap-0.5">
<Icon name="pin_drop" className="text-[14px]" /> Nakasero
                    </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[11px] font-medium block w-fit">
                      Delivery Failed
                    </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">3 Bodas unreachable</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md font-semibold text-amber-warning">52 hrs</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">Pending Sack</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold flex items-center gap-1 w-fit">
<Icon name="check_circle" className="text-[14px]" /> Grade A (Box)
                  </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary font-bold">Bag RTO-KLA-08</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bin Rack B-3</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-surface-container-highest text-tertiary font-label-md text-label-md font-bold inline-block">
                    Staged
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group">
<td className="py-space-md px-space-md font-code-display text-primary text-[13px] font-bold">
                  #RET-UG-3998
                </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">SC-95812</span>
<span className="text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">UGX 340,000</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kikuubo Wholesalers</span>
<span className="text-on-surface-variant text-body-sm flex items-center gap-0.5">
<Icon name="pin_drop" className="text-[14px]" /> Downtown
                    </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-secondary text-[11px] font-bold block w-fit">
                      Arbitration Ruled
                    </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Wrong Color Shipped</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md font-semibold text-on-surface">28 hrs</span>
<span className="block font-label-sm text-label-sm text-tertiary">Within Window</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1 w-fit">
<Icon name="verified" className="text-[14px]" /> Grade B (Opened)
                  </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Bag RTO-KLA-09</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Staging Row 4</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2.5 py-1 rounded bg-surface-container-highest text-tertiary font-label-md text-label-md font-bold inline-block">
                    Staged
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors group">
<td className="py-space-md px-space-md font-code-display text-primary text-[13px] font-bold">
                  #RET-UG-3984
                </td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">SC-95104</span>
<span className="text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">UGX 120,000</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Victoria Beauty</span>
<span className="text-on-surface-variant text-body-sm flex items-center gap-0.5">
<Icon name="pin_drop" className="text-[14px]" /> Bugolobi
                    </span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty text-[11px] font-bold block w-fit">
                      Tamper Claim
                    </span>
<span className="font-label-sm text-label-sm text-danger-penalty mt-0.5">Seal Compromised</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-md text-label-md font-semibold text-on-surface">18 hrs</span>
<span className="block font-label-sm text-label-sm text-amber-warning">Dispute Hold</span>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold flex items-center gap-1 w-fit">
<Icon name="dangerous" className="text-[14px]" /> Grade C (Defect)
                  </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-danger-penalty font-bold">Quarantine Q4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Secure Lockbox</span>
</div>
</td>
<td className="py-space-md px-space-md text-right">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md font-bold transition-all shadow-sm">
                    Inspect
                  </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-lg py-space-md bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span>Displaying 4 of 38 returns in active buffer</span>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
              Export Intake Manifest (.CSV)
            </button>
<button className="px-space-md py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
              Barcode Rescan
            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Returns Root Cause Breakdown</span>
<Icon name="pie_chart" className="text-on-surface-variant text-[18px]" />
</div>
<div className="flex items-center gap-space-md py-space-xs">

<svg className="w-20 h-20 flex-shrink-0" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8"></path>

<path className="text-action-gradient-start" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="47, 100" strokeWidth="3.8"></path>

<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="29, 100" strokeDashoffset="-47" strokeWidth="3.8"></path>

<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="24, 100" strokeDashoffset="-76" strokeWidth="3.8"></path>
</svg>
<div className="flex flex-col gap-1 w-full font-label-sm text-label-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-action-gradient-start inline-block"></span>
<span className="text-on-surface-variant">Customer Refused</span>
</div>
<span className="text-on-surface font-bold">47% (18)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span>
<span className="text-on-surface-variant">Undeliverable / Address</span>
</div>
<span className="text-on-surface font-bold">29% (11)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary inline-block"></span>
<span className="text-on-surface-variant">Arbitration Ruled</span>
</div>
<span className="text-on-surface font-bold">24% (9)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Active Loop: Central - Nakasero - Bugolobi</span>
<Icon name="alt_route" className="text-action-gradient-start text-[18px]" />
</div>
<div className="w-full h-24 bg-surface-container-high rounded-lg relative overflow-hidden flex items-end p-space-xs" data-location="Kampala William Street Logistics Depot Uganda" style={{}}>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm flex items-center gap-1">
<Icon name="local_shipping" className="text-emerald-escrow text-[14px]" />
<span>Loop Distance: 14.2 km • 3 Merchants</span>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded-xl shadow-xl overflow-hidden flex flex-col relative">
<div className="p-space-lg bg-surface-container flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-extrabold flex items-center gap-1">
<Icon name="lock" className="text-[16px]" />
              Active Master Sack Assembly
            </span>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">
              SEALING ACTIVE
            </span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Master Return Bag #RTO-08
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            Nakasero &amp; Downtown Merchant Loop • Cluster #KLA-NORTH-2
          </span>
</div>
<div className="p-space-lg flex flex-col gap-space-lg">

<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-between overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="High contrast passport headshot of Ugandan SafeBoda reverse logistics rider Denis Otim wearing branded helmet and reflective orange SwiftCart jacket with neutral expression, professional studio lighting against dark logistics background." src="/images/3b89ab4cc866259a.webp" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Denis Otim</span>
<span className="px-1.5 py-0.2 rounded bg-mtn-yellow/20 text-mtn-yellow font-label-sm text-label-sm font-bold">SafeBoda Reverse</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reverse Courier #RC-9042</span>
<span className="font-code-display text-[12px] text-primary font-bold">Plate: UER 310B</span>
</div>
</div>
<div className="flex flex-col items-end">
<Icon name="verified" className="text-tertiary text-[24px]" />
<span className="font-label-sm text-label-sm text-tertiary font-semibold">PSV Authorized</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-md">
<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase">
<span>Capacity</span>
<Icon name="scale" className="text-[16px]" />
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">12 / 15</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Parcels sealed (80%)</span>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-action-gradient-start h-full rounded-full w-[80%]"></div>
</div>
</div>
<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase">
<span>Escrow Restoral</span>
<Icon name="account_balance_wallet" className="text-[16px] text-emerald-escrow" />
</div>
<span className="font-headline-sm text-headline-sm text-emerald-escrow font-extrabold whitespace-nowrap">UGX 2.84M</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">To be credited to 5 shops</span>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-emerald-escrow h-full rounded-full w-[100%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<Icon name="vpn_key" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tamper Wire Seal Barcode</span>
<span className="font-code-display text-[15px] font-extrabold text-on-surface tracking-wider">#SEAL-RTO-88192</span>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-escrow bg-emerald-escrow/10 px-2.5 py-1 rounded-lg">
<Icon name="fingerprint" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">DIGITAL SIGNED</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">
              Restoral Handover Protocol
            </span>
<div className="space-y-2">
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked={true} className="mt-1 w-4 h-4 rounded text-action-gradient-start focus:ring-0 bg-surface-container-highest border-none" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">All 12 parcel waybills cross-checked</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Validated against Reverse Manifest #MAN-KLA-9921</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked={true} className="mt-1 w-4 h-4 rounded text-action-gradient-start focus:ring-0 bg-surface-container-highest border-none" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Merchant return slips inserted</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Physical printed slips placed in weatherproof exterior pouch</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked={true} className="mt-1 w-4 h-4 rounded text-action-gradient-start focus:ring-0 bg-surface-container-highest border-none" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Courier Denis Otim ID &amp; PSV verified</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Biometric match confirmed on SwiftCart Rider App</span>
</div>
</label>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>MANIFEST CONTENTS SACK #08</span>
<span>4 OF 12 MERCHANTS</span>
</div>
<div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-display text-[11px] whitespace-nowrap">Elite Mobile (x4)</span>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-display text-[11px] whitespace-nowrap">Kla Phone Hub (x3)</span>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-display text-[11px] whitespace-nowrap">Simba Telecom (x3)</span>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-display text-[11px] whitespace-nowrap">Gazaland (x2)</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.98] transition-all">
<Icon name="verified" className="text-[22px]" />
<span>Seal Bag &amp; Dispatch Return Courier</span>
</button>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<button className="h-11 px-space-md rounded-xl bg-container-dark-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs hover:bg-surface-bright transition-colors shadow-sm">
<Icon name="print" className="text-[18px]" />
<span>Print Waybill (A4)</span>
</button>
<button className="h-11 px-space-md rounded-xl bg-container-dark-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs hover:bg-surface-bright transition-colors shadow-sm">
<Icon name="drive_file_move" className="text-[18px]" />
<span>Transfer Selected</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-md shadow-sm">
<Icon name="verified_user" className="text-amber-warning text-[26px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">SafeBoda Reverse Custody Rule</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
            Merchant OTP required on delivery before escrow reversal clears to merchant MTN/Airtel wallet.
          </span>
</div>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
};

export default Desktop;
