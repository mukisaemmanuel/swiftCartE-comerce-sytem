// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_damaged_goods_quarantine_bay_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-72"><main className="w-full pt-16 bg-surface min-h-screen px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">


<div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-lg mb-space-xl">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-error-container text-error">
<Icon name="report_problem" className="text-[20px]" />
</span>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Damaged Goods &amp; Quarantine Bay Intake</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container/40 text-error font-label-sm text-label-sm uppercase tracking-wider font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
          Vault Quarantine Active
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs">
<span>Kampala Central Sub-Hub #04</span>
<span className="text-surface-bright">•</span>
<span className="text-primary font-medium">Secured Enclosure Bay Q4</span>
<span className="text-surface-bright">•</span>
<span className="text-emerald-escrow font-semibold">Forensic Damage Logging &amp; Escrow Freeze Protocol</span>
</p>
</div>

<div className="flex items-center flex-wrap gap-space-sm">
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all active:scale-[0.98]" type="button">
<Icon name="barcode_scanner" className="text-[18px] text-primary" />
<span>Scan Quarantine Barcode</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all active:scale-[0.98]" type="button">
<Icon name="download" className="text-[18px] text-secondary" />
<span>Export Claims CSV</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-error-container/60 hover:bg-error-container text-error font-label-md text-label-md transition-all active:scale-[0.98]" type="button">
<Icon name="gavel" className="text-[18px]" />
<span>Escalate to Merchant Audit Desk</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md group hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Bay Q4 Staged Units</span>
<span className="p-1.5 rounded-lg bg-surface-container-highest text-primary">
<Icon name="inventory_2" className="text-[18px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">14</span>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">Parcels</span>
</div>
<div className="mt-space-md flex flex-col gap-1.5">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-amber-warning font-semibold">85% Cage Capacity</span>
<span className="text-primary font-bold">+3 flagged today</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-warning h-full rounded-full w-[85%]"></div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md group hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Frozen Escrow Value</span>
<span className="p-1.5 rounded-lg bg-emerald-escrow/10 text-emerald-escrow">
<Icon name="lock_clock" className="text-[18px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-emerald-escrow font-extrabold whitespace-nowrap">UGX 4,890,000</span>
</div>
<div className="mt-space-md flex items-center justify-between font-label-sm text-label-sm pt-1">
<span className="inline-flex items-center gap-1 text-emerald-escrow font-bold">
<Icon name="verified_user" className="text-[15px]" />
          100% Frozen Hold
        </span>
<span className="text-on-surface-variant font-medium">Zero disbursement</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md group hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Avg Resolution Window</span>
<span className="p-1.5 rounded-lg bg-surface-container-highest text-secondary">
<Icon name="timer" className="text-[18px]" />
</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">28.4</span>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">hrs</span>
</div>
<div className="mt-space-md flex items-center justify-between font-label-sm text-label-sm pt-1">
<span className="text-on-surface-variant">SLA Target &lt;36h</span>
<span className="text-tertiary font-bold inline-flex items-center">
<Icon name="trending_down" className="text-[14px]" />
          -6.2h vs benchmark
        </span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md group hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Damage Modality Split</span>
<span className="p-1.5 rounded-lg bg-surface-container-highest text-action-gradient-start">
<Icon name="pie_chart" className="text-[18px]" />
</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">68% <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">Impact</span></span>
</div>
<span className="text-surface-bright font-bold">/</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-error font-extrabold">32% <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">Tamper</span></span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-1.5">
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden flex">
<div className="bg-primary h-full w-[68%]"></div>
<div className="bg-error h-full w-[32%]"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Transit Crush</span>
<span className="text-error font-semibold">Seal Intrusion</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container overflow-x-auto shadow-sm">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold whitespace-nowrap shadow-sm" type="button">
          All Quarantined <span className="ml-1 text-primary">(14)</span>
</button>
<button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 font-label-md text-label-md font-semibold whitespace-nowrap transition-colors" type="button">
          Physical Crush <span className="ml-1 opacity-75">(6)</span>
</button>
<button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 font-label-md text-label-md font-semibold whitespace-nowrap transition-colors" type="button">
          Tamper Breached <span className="ml-1 text-error font-bold">(5)</span>
</button>
<button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 font-label-md text-label-md font-semibold whitespace-nowrap transition-colors" type="button">
          Liquid Intrusion <span className="ml-1 opacity-75">(2)</span>
</button>
<button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 font-label-md text-label-md font-semibold whitespace-nowrap transition-colors" type="button">
          Wrong SKU <span className="ml-1 opacity-75">(1)</span>
</button>
</div>

<div className="rounded-xl bg-surface-container-low overflow-hidden shadow-lg flex flex-col">

<div className="p-space-md bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="relative w-full sm:w-72">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant text-body-sm font-body-sm pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search waybill, SKU or inspector..." type="text" />
</div>
<div className="flex items-center gap-space-xs self-end sm:self-auto">
<span className="font-label-sm text-label-sm text-on-surface-variant">Sort:</span>
<span className="font-label-sm text-label-sm text-primary font-bold cursor-pointer flex items-center">
              Highest Risk
              <Icon name="arrow_drop_down" className="text-[16px]" />
</span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest/60 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-3">Waybill / Tracking</th>
<th className="py-3 px-3">Merchant / Origin</th>
<th className="py-3 px-3">Destination</th>
<th className="py-3 px-3 text-right">Escrow Locked</th>
<th className="py-3 px-3">Incident Category</th>
<th className="py-3 px-3">Tamper Status</th>
<th className="py-3 px-3">Cell</th>
<th className="py-3 px-3">Inspector</th>
</tr>
</thead>
<tbody className="divide-y-0 font-body-sm text-body-sm">

<tr className="bg-surface-container-high/80 hover:bg-surface-container-high text-on-surface cursor-pointer transition-colors relative">
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-code-display text-[13px] tracking-normal font-extrabold text-primary">#SC-99102</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Jinja Line-Haul</span>
</td>
<td className="py-3.5 px-3 font-medium">
<div className="truncate max-w-[120px]" title="Jumia Express Depot">Jumia Express Depot</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Hub #02-WH</span>
</td>
<td className="py-3.5 px-3">
<div className="truncate max-w-[110px]" title="Makerere Kikoni">Makerere Kikoni</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">07•• ••• 419</span>
</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-emerald-escrow font-bold block whitespace-nowrap">UGX 320,000</span>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="lock" className="text-[12px]" />
                    FROZEN
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container/40 text-error font-label-sm text-label-sm font-semibold max-w-[130px] truncate" title="Crushed Outer Carton / LCD Shattered">
                    Crushed Outer Carton
                  </div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 text-danger-penalty font-label-sm text-label-sm font-bold">
<Icon name="gpp_bad" className="text-[14px]" />
                    Broken Tape
                  </span>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-code-display text-[11px] text-on-surface font-bold">
                    Q4-R2
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="font-label-sm text-label-sm font-semibold">J. Opio</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">#KLA-118</span>
</td>
</tr>

<tr className="bg-surface-container-low hover:bg-surface-container-high/40 text-on-surface cursor-pointer transition-colors">
<td className="py-3.5 px-3">
<span className="font-code-display text-[13px] tracking-normal font-bold text-on-surface">#SC-98840</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Kikuubo Direct</span>
</td>
<td className="py-3.5 px-3 font-medium">
<div className="truncate max-w-[120px]" title="Kikuubo Wholesalers">Kikuubo Wholesalers</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Trader Tier-A</span>
</td>
<td className="py-3.5 px-3">
<div className="truncate max-w-[110px]" title="Ntinda St #12">Ntinda St #12</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">07•• ••• 882</span>
</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-emerald-escrow font-bold block whitespace-nowrap">UGX 1,450,000</span>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="lock" className="text-[12px]" />
                    FROZEN
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-semibold max-w-[130px] truncate" title="Secondary Adhesive Detected / Seal Cut">
                    Adhesive Tamper
                  </div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 text-amber-warning font-label-sm text-label-sm font-bold">
<Icon name="warning" className="text-[14px]" />
                    Breach Warn
                  </span>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-code-display text-[11px] text-on-surface font-bold">
                    Q4-R1
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="font-label-sm text-label-sm font-semibold">B. Mukasa</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">#SUP-004</span>
</td>
</tr>

<tr className="bg-surface-container-low hover:bg-surface-container-high/40 text-on-surface cursor-pointer transition-colors">
<td className="py-3.5 px-3">
<span className="font-code-display text-[13px] tracking-normal font-bold text-on-surface">#SC-97651</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Entebbe Intake</span>
</td>
<td className="py-3.5 px-3 font-medium">
<div className="truncate max-w-[120px]" title="Victoria Beauty Shop">Victoria Beauty Shop</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant #551</span>
</td>
<td className="py-3.5 px-3">
<div className="truncate max-w-[110px]" title="Bugolobi Village">Bugolobi Village</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">07•• ••• 614</span>
</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-emerald-escrow font-bold block whitespace-nowrap">UGX 215,000</span>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="lock" className="text-[12px]" />
                    FROZEN
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container text-secondary font-label-sm text-label-sm font-semibold max-w-[130px] truncate" title="Liquid Intrusion / Scent Leakage">
                    Liquid Leakage
                  </div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm font-medium">
<Icon name="check_circle" className="text-[14px]" />
                    Intact Tape
                  </span>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-code-display text-[11px] text-on-surface font-bold">
                    Q4-R3
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="font-label-sm text-label-sm font-semibold">J. Opio</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">#KLA-118</span>
</td>
</tr>

<tr className="bg-surface-container-low hover:bg-surface-container-high/40 text-on-surface cursor-pointer transition-colors">
<td className="py-3.5 px-3">
<span className="font-code-display text-[13px] tracking-normal font-bold text-on-surface">#SC-97109</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Cross-Dock 01</span>
</td>
<td className="py-3.5 px-3 font-medium">
<div className="truncate max-w-[120px]" title="Kampala Phone Hub">Kampala Phone Hub</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">High-Risk High-Val</span>
</td>
<td className="py-3.5 px-3">
<div className="truncate max-w-[110px]" title="Kololo Terrace">Kololo Terrace</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">07•• ••• 902</span>
</td>
<td className="py-3.5 px-3 text-right">
<span className="font-label-md text-label-md text-emerald-escrow font-bold block whitespace-nowrap">UGX 850,000</span>
<span className="inline-flex items-center gap-0.5 font-label-sm text-label-sm text-emerald-escrow">
<Icon name="lock" className="text-[12px]" />
                    FROZEN
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-bold max-w-[130px] truncate" title="Empty Manufacturer Box / Missing Phone">
                    Missing SKU Inside
                  </div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 text-danger-penalty font-label-sm text-label-sm font-bold">
<Icon name="shield_with_heart" className="text-[14px]" />
                    Theft Suspect
                  </span>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error font-code-display text-[11px] font-bold">
                    Q4-Safe01
                  </span>
</td>
<td className="py-3.5 px-3">
<div className="font-label-sm text-label-sm font-semibold">B. Mukasa</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">#SUP-004</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span>Showing 4 of 14 logged cases in Q4 Enclosure</span>
<span className="inline-flex items-center gap-1 text-emerald-escrow font-semibold">
<Icon name="shield" className="text-[14px]" />
              Escrow Smart Contract 0x829...4F19 Active
            </span>
</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-container-highest disabled:opacity-40" disabled={true} type="button">Prev</button>
<span className="px-2 py-1 text-on-surface font-bold">1 / 4</span>
<button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-container-highest" type="button">Next</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-md flex items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<Icon name="balance" className="text-[24px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX Mobile Money Escrow Freeze Shield</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automatic merchant disbursement cut applied upon intake scan to avoid fraudulent cash out.</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-bold">MTN &amp; Airtel MoMo Intercepted</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container p-space-lg shadow-xl flex flex-col gap-space-lg relative overflow-hidden">

<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-code-display text-[12px] font-extrabold uppercase">
                Active Forensic Focus
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cage Rack Q4-R2</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold flex items-center gap-space-xs mt-1">
              Waybill #SC-99102
              <Icon name="verified" className="text-[18px] text-tertiary" />
</h2>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase block">Frozen Escrow</span>
<span className="font-price-display text-price-display text-emerald-escrow font-extrabold whitespace-nowrap">UGX 320,000</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-high p-space-md flex gap-space-md items-center">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-lowest shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A matte black retail box of Soundcore Space One headphones lying open on an industrial dark steel hub intake table, with severe corner crush damage, shattered inner plastic cradle, under sharp overhead warehouse inspection lighting with a digital caliper and barcode scanner nearby." src="/images/d864513b3e90bdd4.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Item Identification</span>
<span className="font-label-lg text-label-lg text-on-surface truncate font-bold">Soundcore Space One ANC Wireless</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Declared SKU: AU-SND-901 • Qty: 01 Unit</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
<Icon name="location_on" className="text-[14px] text-amber-warning" />
              Transit Hub: Jinja Line-Haul Manifest #MNF-1081
            </span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold flex items-center gap-1">
<Icon name="photo_camera" className="text-[16px] text-primary" />
              Forensic Photographic Evidence (4 Uploaded)
            </span>
<button className="font-label-sm text-label-sm text-primary hover:underline font-bold" type="button">+ Add Photo</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs mt-1">

<div className="group relative rounded-lg overflow-hidden bg-surface-container-lowest aspect-square flex flex-col justify-end">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Extreme close up macro shot of the crushed structural corner of an electronics cardboard shipping carton showing fractured corrugated paper layers and compressed interior foam on a dark sorting table." src="/images/dbe68d0fa9dc1037.webp" />
<div className="relative p-1 bg-surface-container-lowest/80 backdrop-blur-xs">
<span className="font-label-sm text-[10px] text-on-surface font-semibold block leading-tight truncate">Corner Crush 3cm</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container-lowest aspect-square flex flex-col justify-end">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Close up view of broken holographic factory security seal on a consumer electronics retail box with visible adhesive residue and frayed tamper evident fibers in stark high contrast lighting." src="/images/dd5a2531d0029331.webp" />
<div className="relative p-1 bg-surface-container-lowest/80 backdrop-blur-xs">
<span className="font-label-sm text-[10px] text-danger-penalty font-bold block leading-tight truncate">Broken Factory Seal</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container-lowest aspect-square flex flex-col justify-end">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Detailed shot of an unreadable, punctured logistics barcode shipping label on dark cardboard packaging, torn across the primary tracking sequence with scuff marks." src="/images/e0acd9d77263cca0.webp" />
<div className="relative p-1 bg-surface-container-lowest/80 backdrop-blur-xs">
<span className="font-label-sm text-[10px] text-on-surface font-semibold block leading-tight truncate">Barcode Puncture</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container-lowest aspect-square flex flex-col justify-end">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Electronic logistics digital bench scale display showing green glowing numerals reading 0.620 kg tare weight next to the package manifest label stating 0.850 kg." src="/images/d3a7faf55d066537.webp" />
<div className="relative p-1 bg-surface-container-lowest/80 backdrop-blur-xs">
<span className="font-label-sm text-[10px] text-amber-warning font-bold block leading-tight truncate">Tare: -230g Diff</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">Physical Assessment Checklist</span>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest border-0 text-primary focus:ring-0 checked:bg-primary accent-action-gradient-start cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Outer carton structural failure (&gt;25% compression)</span>
</label>
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest border-0 text-primary focus:ring-0 checked:bg-primary accent-action-gradient-start cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Factory security tape peeled / non-original adhesive</span>
</label>
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded bg-surface-container-highest border-0 text-primary focus:ring-0 checked:bg-primary accent-action-gradient-start cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-error font-semibold">Digital scale weigh discrepancy (-230g missing items)</span>
</label>
<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input className="w-4 h-4 rounded bg-surface-container-highest border-0 text-primary focus:ring-0 checked:bg-primary accent-action-gradient-start cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface-variant font-normal">Hazardous / Lithium Battery breach (Not detected)</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold flex items-center justify-between">
<span>Inspector Field Notes</span>
<span className="text-on-surface-variant font-normal lowercase">inspector #kla-118 logged</span>
</label>
<textarea className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm p-space-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none leading-relaxed" rows={3}>Package arrived via Jinja Line-Haul #MNF-1081 with visible pallet corner crush. Factory seal split along bottom seam. Headphone unit casing cracked.</textarea>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<button className="w-full h-[52px] rounded-2xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-[0.98] transition-all" type="button">
<Icon name="lock_reset" className="text-[20px]" />
<span>Submit Quarantine Intake &amp; Lock Escrow</span>
</button>

<div className="grid grid-cols-2 gap-space-sm">
<button className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1 transition-all active:scale-[0.98]" type="button">
<Icon name="picture_as_pdf" className="text-[18px] text-secondary" />
<span>BOU Incident PDF</span>
</button>
<button className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1 transition-all active:scale-[0.98]" type="button">
<Icon name="assignment_return" className="text-[18px] text-amber-warning" />
<span>Release to RTO Bay</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Desktop;
