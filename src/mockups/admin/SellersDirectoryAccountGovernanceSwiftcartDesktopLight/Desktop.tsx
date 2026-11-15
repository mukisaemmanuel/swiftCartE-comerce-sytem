// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/sellers_directory_account_governance_swiftcart_desktop_light/code.html
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
      
      <div className="pl-72"><main className="relative w-full pt-16 bg-surface-dark px-space-xl py-space-lg"><div className="flex flex-col w-full">
<div className="w-full space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-semibold">Sellers Directory</span>
</div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Verified Merchants Directory &amp; Account Actions</h1>
<span className="px-2.5 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span> Live Cluster
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all flex items-center gap-2" type="button">
<Icon name="download" className="text-[18px]" /> Export CSV
        </button>
<button className="px-space-md py-space-sm rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-md text-label-md shadow-lg shadow-primary-container/25 hover:opacity-95 transition-all flex items-center gap-2 active:scale-95" type="button">
<Icon name="add_business" className="text-[18px]" /> Onboard Merchant
        </button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Sellers</span>
<Icon name="storefront" className="text-[18px]" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">412</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-bold">+18 MoM</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"100%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Active &amp; Trading</span>
<Icon name="check_circle" className="text-[18px] text-emerald-escrow" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">388</span>
<span className="font-label-sm text-label-sm text-emerald-escrow font-semibold">94.2%</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-emerald-escrow h-full rounded-full" style={{"width":"94.2%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Under Probation</span>
<Icon name="warning" className="text-[18px] text-amber-warning" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">14</span>
<span className="font-label-sm text-label-sm text-amber-warning font-semibold">Audit queue</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"3.4%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Frozen / Suspended</span>
<Icon name="block" className="text-[18px] text-danger-penalty" />
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-danger-penalty">10</span>
<span className="font-label-sm text-label-sm text-danger-penalty font-semibold">High risk</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-danger-penalty h-full rounded-full" style={{"width":"2.4%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between col-span-2 sm:col-span-1">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">30-Day Platform GMV</span>
<Icon name="payments" className="text-[18px] text-primary" />
</div>
<div className="mt-2 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-on-surface leading-tight">1.48 Billion</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-action-gradient-start h-full rounded-full" style={{"width":"82%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
<div className="relative flex-1">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Search by merchant name, TIN, phone (+256...), or store slug..." type="text" />
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center bg-surface-container-low rounded-lg px-space-sm py-1.5 shadow-sm">
<Icon name="category" className="text-[16px] text-on-surface-variant mr-1" />
<select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option>All Categories</option>
<option>Electronics &amp; Audio</option>
<option>Smartphones &amp; Spares</option>
<option>Fast Moving Goods</option>
<option>Watches &amp; Luxury</option>
</select>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-sm py-1.5 shadow-sm">
<Icon name="military_tech" className="text-[16px] text-on-surface-variant mr-1" />
<select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option>All Tiers</option>
<option>Elite Tier 1</option>
<option>Tier 1 (Verified)</option>
<option>Tier 2 (Emerging)</option>
<option>Under Watch</option>
</select>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-sm py-1.5 shadow-sm">
<Icon name="rule" className="text-[16px] text-on-surface-variant mr-1" />
<select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option>All Statuses</option>
<option>Active</option>
<option>Probation</option>
<option>Frozen</option>
<option>Suspended</option>
</select>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-sm py-1.5 shadow-sm">
<Icon name="shield_with_heart" className="text-[16px] text-on-surface-variant mr-1" />
<select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option>Risk Rating: Any</option>
<option>Low (Score &gt; 95%)</option>
<option>Moderate (Score 80-95%)</option>
<option>High Alert (&lt; 80%)</option>
</select>
</div>
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Reset Filters" type="button">
<Icon name="restart_alt" className="text-[18px]" />
</button>
</div>
</div>

<div className="relative flex gap-space-lg items-start">

<div className="flex-1 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 px-space-md">Store &amp; Business Name</th>
<th className="py-3.5 px-space-md">Category &amp; Hub</th>
<th className="py-3.5 px-space-md text-right">30-Day GMV</th>
<th className="py-3.5 px-space-md text-right">Escrow Balance</th>
<th className="py-3.5 px-space-md text-center">Trust Score</th>
<th className="py-3.5 px-space-md">Compliance Status</th>
<th className="py-3.5 px-space-md">Registered Contact</th>
<th className="py-3.5 px-space-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm text-on-surface">

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-primary shadow-sm">
<Icon name="headphones" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="verified" className="text-[12px] text-emerald-escrow" /> TIN: 1004-988-219
                      </span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Electronics &amp; Audio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="location_on" className="text-[13px]" /> Nakasero Flagship Hub
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 52,480,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center">
<Icon name="trending_up" className="text-[12px]" /> +14.2%
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold whitespace-nowrap">UGX 12,450,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cleared cycle</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col items-center">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-md text-label-md font-bold">
                      99.4%
                    </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Elite Tier 1</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-md text-label-md text-on-surface">Active • URSB Verified</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Tax clearance valid</span>
</td>
<td className="py-4 px-space-md font-code-display text-body-sm text-on-surface">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
                    +256 702 ••• 180
                  </div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">momo@soundcore.ug</span>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors shadow-sm">
                      Manage Store
                    </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-sm text-label-sm transition-colors">
                      Freeze / Suspend
                    </button>
</div>
</td>
</tr>

<tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
<td className="py-4 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-amber-warning/20 flex items-center justify-center font-headline-sm text-amber-warning shadow-sm">
<Icon name="smartphone" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface truncate">Kampala Phone Hub</span>
<span className="px-1.5 py-0.2 rounded bg-amber-warning text-surface-dark font-label-sm text-[10px] font-black uppercase">Actioning</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="flag" className="text-[12px] text-amber-warning" /> TIN: 1012-402-901
                      </span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Smartphones &amp; Spares</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="store" className="text-[13px]" /> Downtown Market Stall #44
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 18,200,000</span>
<span className="font-label-sm text-label-sm text-amber-warning flex items-center">
<Icon name="trending_flat" className="text-[12px]" /> 0.4%
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-primary font-bold whitespace-nowrap">UGX 4,120,000</span>
<span className="font-label-sm text-label-sm text-amber-warning">Hold pending audit</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col items-center">
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-on-surface font-label-md text-label-md font-bold">
                      88.2%
                    </span>
<span className="font-label-sm text-label-sm text-amber-warning mt-0.5">Under Watch</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-warning animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface">Probationary Reinstatement</span>
</div>
<span className="font-label-sm text-label-sm text-danger-penalty block mt-0.5">2 buyer alerts</span>
</td>
<td className="py-4 px-space-md font-code-display text-body-sm text-on-surface">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
                    +256 772 ••• 991
                  </div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">kphub.ops@gmail.com</span>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors shadow-sm">
                      Manage Store
                    </button>
<button className="px-2.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm shadow hover:opacity-90 transition-all">
                      Freeze / Suspend
                    </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-danger-penalty/10 flex items-center justify-center font-headline-sm text-danger-penalty shadow-sm">
<Icon name="warning" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Nile Electronics Uganda</span>
<span className="font-label-sm text-label-sm text-danger-penalty flex items-center gap-1">
<Icon name="gavel" className="text-[12px]" /> TIN: 1009-881-002
                      </span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Consumer Appliances</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="factory" className="text-[13px]" /> Nakawa Industrial
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 31,400,000</span>
<span className="font-label-sm text-label-sm text-danger-penalty flex items-center">
<Icon name="arrow_downward" className="text-[12px]" /> Frozen
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-danger-penalty font-bold whitespace-nowrap">UGX 0 (Frozen)</span>
<span className="font-label-sm text-label-sm text-danger-penalty">Escrow locked</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col items-center">
<span className="px-2 py-0.5 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-md text-label-md font-bold">
                      64.0%
                    </span>
<span className="font-label-sm text-label-sm text-danger-penalty mt-0.5">Breach</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-danger-penalty"></span>
<span className="font-label-md text-label-md text-danger-penalty font-bold">Suspended (Counterfeit Alert)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Enforcement docket open</span>
</td>
<td className="py-4 px-space-md font-code-display text-body-sm text-on-surface">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
                    +256 754 ••• 202
                  </div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">nile.elect@africaonline.co.ug</span>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors shadow-sm">
                      Inspect Docket
                    </button>
<button className="px-2.5 py-1.5 rounded-lg bg-emerald-escrow/10 text-emerald-escrow hover:bg-emerald-escrow hover:text-white font-label-sm text-label-sm transition-colors">
                      Reinstate
                    </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-secondary shadow-sm">
<Icon name="shopping_cart" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Kikuubo Wholesale Mart</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="verified" className="text-[12px] text-emerald-escrow" /> TIN: 1001-209-441
                      </span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">FMCG Bulk &amp; Essentials</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="warehouse" className="text-[13px]" /> Downtown Hub
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 84,600,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center">
<Icon name="trending_up" className="text-[12px]" /> +28.5%
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold whitespace-nowrap">UGX 19,800,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cleared</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col items-center">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-md text-label-md font-bold">
                      96.8%
                    </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Tier 1</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-md text-label-md text-on-surface">Active • Verified</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Fully bonded</span>
</td>
<td className="py-4 px-space-md font-code-display text-body-sm text-on-surface">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-mtn-yellow"></span>
                    +256 782 ••• 440
                  </div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">kikuubo.desk@swiftcart.ug</span>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors shadow-sm">
                      Manage Store
                    </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-sm text-label-sm transition-colors">
                      Freeze / Suspend
                    </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-primary shadow-sm">
<Icon name="watch" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Elite Watch Studio</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="verified" className="text-[12px] text-emerald-escrow" /> TIN: 1033-009-881
                      </span>
</div>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Luxury &amp; Accessories</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="apartment" className="text-[13px]" /> Acacia Mall Kololo
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-on-surface whitespace-nowrap">UGX 14,900,000</span>
<span className="font-label-sm text-label-sm text-emerald-escrow flex items-center">
<Icon name="trending_up" className="text-[12px]" /> +5.8%
                    </span>
</div>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex flex-col items-end">
<span className="font-label-lg text-label-lg text-emerald-escrow font-bold whitespace-nowrap">UGX 3,450,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cleared</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex flex-col items-center">
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-md text-label-md font-bold">
                      94.1%
                    </span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Tier 2</span>
</div>
</td>
<td className="py-4 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
<span className="font-label-md text-label-md text-on-surface">Active • Verified</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Authenticity warranty filed</span>
</td>
<td className="py-4 px-space-md font-code-display text-body-sm text-on-surface">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-airtel-red"></span>
                    +256 701 ••• 773
                  </div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">ops@elitewatch.ug</span>
</td>
<td className="py-4 px-space-md text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors shadow-sm">
                      Manage Store
                    </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-sm text-label-sm transition-colors">
                      Freeze / Suspend
                    </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-3 bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Showing <strong className="text-on-surface">1 - 5</strong> of 412 verified merchants</span>
<span className="mx-1">•</span>
<span>Kampala Central &amp; Greater Metro Region</span>
</div>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface disabled:opacity-40" disabled={true}>
<Icon name="chevron_left" className="text-[16px]" />
</button>
<button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">1</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm">2</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm">3</button>
<span className="px-1 text-on-surface-variant font-label-sm">...</span>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm">83</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high">
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
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
