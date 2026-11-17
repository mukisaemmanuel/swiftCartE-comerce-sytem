// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/sellers_directory_account_governance_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-0"><main className="relative pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full">
<div className="w-full space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="hover:text-on-surface cursor-pointer transition-colors">Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Sellers Directory</span>
<span className="mx-space-xs text-outline-variant">•</span>
<span className="bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface text-[10px] font-mono">NODE: EBB-KLA-CORE-01</span>
</div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Verified Merchants Directory &amp; Account Actions</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            Sync Active
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors shadow-sm font-label-md text-label-md" type="button">
<Icon name="download" className="text-[18px]" />
<span>Export Ledger CSV</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(218,55,0,0.35)] font-label-md text-label-md active:scale-95" type="button">
<Icon name="person_add" className="text-[18px]" />
<span>Onboard Merchant</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-space-sm">
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Merchants</span>
<Icon name="storefront" className="text-secondary text-[18px]" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface">412</span>
<span className="text-tertiary font-label-sm text-label-sm flex items-center">+6 MoM</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"100%"}}></div>
</div>
</div>
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Active &amp; Trading</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-tertiary">388</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">94.1% fleet</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"94%"}}></div>
</div>
</div>
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Under Probation</span>
<Icon name="hourglass_top" className="text-amber-warning text-[18px]" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-amber-warning">14</span>
<span className="text-amber-warning font-label-sm text-label-sm">High Review</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-amber-warning h-full rounded-full" style={{"width":"14%"}}></div>
</div>
</div>
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Frozen / Suspended</span>
<Icon name="gavel" className="text-danger-penalty text-[18px]" />
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-danger-penalty">10</span>
<span className="text-danger-penalty font-label-sm text-label-sm">Ledger Locks</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-danger-penalty h-full rounded-full" style={{"width":"8%"}}></div>
</div>
</div>
<div className="col-span-2 md:col-span-3 xl:col-span-1 bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider">30-Day Platform GMV</span>
<Icon name="account_balance" className="text-emerald-escrow text-[18px]" />
</div>
<div className="flex items-baseline gap-1">
<span className="text-[12px] font-bold text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-headline-md text-headline-md text-on-surface">1.48B</span>
</div>
<span className="text-emerald-escrow font-label-sm text-label-sm">99.8% Settled to MoMo</span>
</div>
</div>

<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">
<div className="flex-1 relative">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full bg-surface-container-high rounded-xl pl-10 pr-4 py-2.5 font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none focus:bg-surface-variant transition-colors" placeholder="Search by merchant name, TIN, phone (+256...), or store slug..." type="text" value="Kampala Phone Hub" />
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">FILTERED</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<div className="relative">
<select className="appearance-none bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-2 pr-8 rounded-xl outline-none cursor-pointer hover:bg-surface-bright transition-colors">
<option>All Categories</option>
<option>Consumer Electronics</option>
<option>Wholesale &amp; Bulk</option>
<option>Luxury &amp; Watches</option>
<option>Fashion &amp; Apparel</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-on-surface-variant" />
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-2 pr-8 rounded-xl outline-none cursor-pointer hover:bg-surface-bright transition-colors">
<option>All Tiers</option>
<option>Elite Tier 1 (98%+)</option>
<option>Standard Tier 2 (92-97%)</option>
<option>Under Watch (&lt;90%)</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-on-surface-variant" />
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-2 pr-8 rounded-xl outline-none cursor-pointer hover:bg-surface-bright transition-colors">
<option>Status: All</option>
<option>Active</option>
<option selected={true}>Probation</option>
<option>Suspended</option>
<option>Frozen</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-on-surface-variant" />
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-2 pr-8 rounded-xl outline-none cursor-pointer hover:bg-surface-bright transition-colors">
<option>Risk Rating: All</option>
<option>Low Risk (0 - 20)</option>
<option>Moderate Risk</option>
<option>Critical Action Flag</option>
</select>
<Icon name="expand_more" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-on-surface-variant" />
</div>
<button className="p-2 bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface rounded-xl transition-colors" title="Clear Filters" type="button">
<Icon name="filter_alt_off" className="text-[20px]" />
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low shadow-md min-h-[640px]">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md">Store &amp; Business Entity</th>
<th className="py-3 px-space-md">Category &amp; Hub</th>
<th className="py-3 px-space-md text-right">30-Day GMV</th>
<th className="py-3 px-space-md text-right">Pending clearance</th>
<th className="py-3 px-space-md">Trust Score</th>
<th className="py-3 px-space-md">Compliance Status</th>
<th className="py-3 px-space-md">Registered Contact</th>
<th className="py-3 px-space-md text-right">Ledger Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-body-sm font-body-sm text-on-surface">

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center font-bold text-primary text-[13px] shrink-0">
                    SC
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda Official</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[11px]">SC-UG-1004 • TIN: 1004928172</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Audio &amp; Accs</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px] flex items-center gap-1">
<Icon name="hub" className="text-[13px] text-tertiary" /> Nakasero Flagship
                  </span>
</div>
</td>
<td className="py-3 px-space-md text-right font-label-md text-label-md text-on-surface whitespace-nowrap">
                UGX 52,480,000
              </td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-md text-label-md">
<Icon name="lock" className="text-[15px]" />
                  UGX 12,450,000
                </span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-tertiary">99.4%</span>
<span className="text-[10px] text-on-surface-variant font-mono">Elite Tier 1</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" />
                  Active • URSB Verified
                </span>
</td>
<td className="py-3 px-space-md font-mono text-[12px] text-on-surface-variant">
                +256 702 ••• 180
              </td>
<td className="py-3 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors" type="button">Manage</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-danger-penalty/20 hover:text-danger-penalty text-on-surface-variant font-label-sm text-label-sm transition-colors" type="button">Freeze</button>
</div>
</td>
</tr>

<tr className="bg-surface-container-high/60 transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-amber-warning/20 flex items-center justify-center font-bold text-amber-warning text-[13px] shrink-0">
                    KP
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Kampala Phone Hub</span>
<span className="font-body-sm text-body-sm text-amber-warning font-mono text-[11px]">SC-UG-8821 • TIN: 1093847291</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Smartphones</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px] flex items-center gap-1">
<Icon name="store" className="text-[13px] text-amber-warning" /> Downtown Stall #44
                  </span>
</div>
</td>
<td className="py-3 px-space-md text-right font-label-md text-label-md text-on-surface whitespace-nowrap">
                UGX 18,200,000
              </td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 text-amber-warning font-label-md text-label-md">
<Icon name="lock_clock" className="text-[15px]" />
                  UGX 4,120,000
                </span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-amber-warning">88.2%</span>
<span className="text-[10px] text-danger-penalty font-mono">Under Watch</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm">
<Icon name="warning" className="text-[13px]" />
                  Probationary
                </span>
</td>
<td className="py-3 px-space-md font-mono text-[12px] text-on-surface-variant">
                +256 772 ••• 991
              </td>
<td className="py-3 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm" type="button">Inspect</button>
<button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm shadow-[0_2px_8px_rgba(218,55,0,0.3)]" type="button">Action Active</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-danger-penalty/10 flex items-center justify-center font-bold text-danger-penalty text-[13px] shrink-0">
                    NE
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Nile Electronics Uganda</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[11px]">SC-UG-4921 • TIN: 1008273910</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Home Appliances</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px] flex items-center gap-1">
<Icon name="domain" className="text-[13px] text-outline" /> Nakawa Industrial
                  </span>
</div>
</td>
<td className="py-3 px-space-md text-right font-label-md text-label-md text-on-surface whitespace-nowrap">
                UGX 31,400,000
              </td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 text-danger-penalty font-label-md text-label-md">
<Icon name="block" className="text-[15px]" />
                  UGX 0 (Frozen)
                </span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-danger-penalty">64.0%</span>
<span className="text-[10px] text-danger-penalty font-mono">Breach Level 3</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm">
<Icon name="report" className="text-[13px]" />
                  Suspended (Counterfeit)
                </span>
</td>
<td className="py-3 px-space-md font-mono text-[12px] text-on-surface-variant">
                +256 754 ••• 202
              </td>
<td className="py-3 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors" type="button">Inspect Docket</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-tertiary/20 hover:text-tertiary text-on-surface-variant font-label-sm text-label-sm transition-colors" type="button">Reinstate</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center font-bold text-secondary text-[13px] shrink-0">
                    KW
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Kikuubo Wholesale Mart</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[11px]">SC-UG-0042 • TIN: 1000192841</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">FMCG Bulk</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px] flex items-center gap-1">
<Icon name="hub" className="text-[13px] text-tertiary" /> Downtown Hub
                  </span>
</div>
</td>
<td className="py-3 px-space-md text-right font-label-md text-label-md text-on-surface whitespace-nowrap">
                UGX 84,600,000
              </td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-md text-label-md">
<Icon name="lock" className="text-[15px]" />
                  UGX 19,800,000
                </span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-tertiary">96.8%</span>
<span className="text-[10px] text-on-surface-variant font-mono">Tier 1</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" />
                  Active • Verified
                </span>
</td>
<td className="py-3 px-space-md font-mono text-[12px] text-on-surface-variant">
                +256 782 ••• 440
              </td>
<td className="py-3 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors" type="button">Manage</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-danger-penalty/20 hover:text-danger-penalty text-on-surface-variant font-label-sm text-label-sm transition-colors" type="button">Freeze</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center font-bold text-tertiary text-[13px] shrink-0">
                    EW
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Elite Watch Studio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono text-[11px]">SC-UG-7182 • TIN: 1048291038</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Luxury Horology</span>
<span className="text-on-surface-variant font-body-sm text-body-sm text-[11px] flex items-center gap-1">
<Icon name="store" className="text-[13px] text-tertiary" /> Acacia Mall Kololo
                  </span>
</div>
</td>
<td className="py-3 px-space-md text-right font-label-md text-label-md text-on-surface whitespace-nowrap">
                UGX 14,900,000
              </td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-label-md text-label-md">
<Icon name="lock" className="text-[15px]" />
                  UGX 3,450,000
                </span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-tertiary">94.1%</span>
<span className="text-[10px] text-on-surface-variant font-mono">Tier 2</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" />
                  Active • Verified
                </span>
</td>
<td className="py-3 px-space-md font-mono text-[12px] text-on-surface-variant">
                +256 701 ••• 773
              </td>
<td className="py-3 px-space-md text-right">
<div className="inline-flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm transition-colors" type="button">Manage</button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-danger-penalty/20 hover:text-danger-penalty text-on-surface-variant font-label-sm text-label-sm transition-colors" type="button">Freeze</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low px-space-md py-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span>Showing <strong className="text-on-surface">1 - 5</strong> of <strong className="text-on-surface">412</strong> Merchants</span>
<span className="text-outline-variant">•</span>
<span>Ledger Checksum: <code className="text-tertiary font-mono">84b910aef</code></span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded bg-surface-container text-on-surface-variant cursor-not-allowed opacity-50" type="button">Prev</button>
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-bold" type="button">1</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">2</button>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">3</button>
<span className="px-1 text-outline">...</span>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">83</button>
<button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">Next</button>
</div>
</div>

<div className="absolute inset-y-0 right-0 w-full max-w-xl bg-container-dark-high/95 backdrop-blur-xl shadow-[-12px_0_32px_rgba(0,0,0,0.65)] flex flex-col z-30 transition-transform duration-200">

<div className="p-space-lg bg-surface-container-highest/60 flex items-start justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<Icon name="admin_panel_settings" className="text-primary text-[20px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Governance Intervention</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
              Merchant Account Governance Action: <br />
<span className="text-primary-fixed">Kampala Phone Hub</span> <span className="font-mono text-body-sm text-on-surface-variant font-normal">(SC-UG-8821)</span>
</h2>
</div>
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors" title="Dismiss Panel" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="px-space-lg pt-space-md bg-surface-container-high">
<div className="grid grid-cols-3 gap-1 bg-surface-container-lowest p-1 rounded-xl">
<button className="py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md text-center transition-all shadow-sm" type="button">
              Freeze Storefront
            </button>
<button className="py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md text-center transition-all" type="button">
              Suspend Account
            </button>
<button className="py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md text-center transition-all" type="button">
              Reinstate Probation
            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-space-lg space-y-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Current Merchant Posture</span>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold">Probationary Tier</span>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-1">
<div>
<span className="text-[11px] text-on-surface-variant block">Algorithmic Trust Score</span>
<span className="font-label-lg text-label-lg text-amber-warning flex items-center gap-1">
                  88.2% <Icon name="trending_down" className="text-[16px]" />
</span>
</div>
<div>
<span className="text-[11px] text-on-surface-variant block">Payment Holds Lock</span>
<span className="font-label-lg text-label-lg text-emerald-escrow whitespace-nowrap">UGX 4,120,000</span>
</div>
</div>
<div className="pt-2 flex items-center gap-2 text-danger-penalty text-body-sm font-body-sm">
<Icon name="priority_high" className="text-[16px]" />
<span>2 active customer counterfeit disputes logged in Kololo &amp; Ntinda</span>
</div>
</div>

<div className="bg-primary/10 p-space-md rounded-xl space-y-1">
<div className="flex items-center gap-1.5 text-primary font-label-md text-label-md">
<Icon name="lock_reset" className="text-[18px]" />
<span>Scope of Immediate Storefront Freeze:</span>
</div>
<ul className="text-body-sm font-body-sm text-on-surface-variant list-disc list-inside space-y-1 pl-1">
<li>Hides all catalog products from public SwiftCart app &amp; web search</li>
<li>Instantly locks new inbound order intake</li>
<li>Freezes total pending clearance of <strong className="text-on-surface whitespace-nowrap">UGX 4,120,000</strong> in payment hold</li>
<li>Halts automated MTN MoMo &amp; Airtel daily vendor settlements</li>
</ul>
</div>

<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider block">Reason Category <span className="text-primary">*</span></label>
<div className="relative">
<select className="w-full bg-surface-container-high text-on-surface font-body-md text-body-md px-3.5 py-2.5 pr-8 rounded-xl outline-none focus:bg-surface-variant transition-colors">
<option selected={true}>Counterfeit Investigation / Brand Infringement</option>
<option>Buyer Dispute Spikes (&gt; 5% Order Volume)</option>
<option>Tax Tax Compliance Discrepancy (TIN Issue)</option>
<option>Incomplete KYC / Expired Business License</option>
<option>Physical Hub Dispatch Refusal / Non-fulfillment</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-on-surface-variant" />
</div>
</div>

<div className="space-y-1">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider block">Enforcement Duration <span className="text-primary">*</span></label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="py-2 px-1 text-center font-label-sm text-label-sm rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                48 Hours
              </button>
<button className="py-2 px-1 text-center font-label-sm text-label-sm rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                7 Days
              </button>
<button className="py-2 px-1 text-center font-label-sm text-label-sm rounded-xl bg-primary text-on-primary font-bold shadow-sm" type="button">
                Until Resolution
              </button>
<button className="py-2 px-1 text-center font-label-sm text-label-sm rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                Indefinite
              </button>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Mandatory Internal Justification Note</label>
<span className="text-on-surface-variant text-[11px] font-mono">ENCRYPTED AUDIT TRAIL</span>
</div>
<textarea className="w-full bg-surface-container-high rounded-xl p-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none focus:bg-surface-variant transition-colors resize-none leading-relaxed" rows={3}>Suspected non-original Space One headphones reported by 2 buyers in Kololo. Freezing catalog pending hub physical sample inspection.</textarea>
<p className="text-on-surface-variant text-[11px]">Logged under Kizito Ronald (Super Admin ID: #ADM-004) with immutable timestamp.</p>
</div>

<div className="space-y-2 pt-1">
<label className="flex items-start gap-space-sm p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input checked={true} className="mt-0.5 rounded bg-surface-container-highest text-primary focus:ring-0 accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Notify Store Manager via SMS &amp; Registered Email</span>
<span className="text-on-surface-variant text-[11px]">Dispatches formal notice with claim docket link to +256 772 ••• 991</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input checked={true} className="mt-0.5 rounded bg-surface-container-highest text-primary focus:ring-0 accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Trigger SafeBoda courier pickup hold for this vendor</span>
<span className="text-on-surface-variant text-[11px]">Alerts Downtown Hub marshals to refuse new outgoing transit handovers</span>
</div>
</label>
</div>
</div>

<div className="p-space-lg bg-surface-container-high/90 flex items-center justify-end gap-space-sm">
<button className="px-space-md py-3 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors" type="button">
            Cancel &amp; Close
          </button>
<button className="px-space-lg py-3 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-white font-label-md text-label-md shadow-[0_4px_18px_rgba(218,55,0,0.45)] transition-all active:scale-95 flex items-center gap-2" type="button">
<Icon name="gavel" className="text-[18px]" />
<span>Confirm Immediate Storefront Freeze</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="security" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Payment Holds Health</span>
<span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">UGX 168.4M held in reserve across 412 active shop contracts. Zero unreconciled slips.</span>
</div>
</div>
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-amber-warning/15 text-amber-warning flex items-center justify-center shrink-0">
<Icon name="policy" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">URSB &amp; Tax Compliance Monitor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">4 merchants pending 2025 business registration renewals at Nakawa registry.</span>
</div>
</div>
<div className="bg-container-dark-low p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<Icon name="hub" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">SafeBoda &amp; Hub Relay Mesh</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Downtown, Nakasero &amp; Acacia express drops operating at 18 min average relay speed.</span>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
