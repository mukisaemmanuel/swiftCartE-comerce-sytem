// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/hub/hub_damaged_goods_quarantine_bay_swiftcart_desktop_light/code.html
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
      
      <div className="pl-0 min-h-screen flex flex-col"><main className="w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full">

<div className="px-space-xl py-space-md bg-surface-container-low flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs px-space-md py-1 rounded-full bg-error-container text-on-error-container">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<span className="font-label-sm uppercase tracking-wider text-error">reserve QUARANTINE ACTIVE</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span>Payment Intercept Rail #04</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-tertiary font-bold">Smart Lock v2.4 Engaged</span>
</div>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<span className="font-label-sm text-on-surface-variant">Cage Ambient: 23.4°C • Rel Humidity 51%</span>
<span className="inline-flex h-2 w-2 rounded-full bg-tertiary"></span>
</div>
</div>
<div className="p-space-xl flex flex-col gap-space-xl">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm font-bold">KAMPALA HUB #04</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-primary font-bold">SECURED ENCLOSURE BAY Q4</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-on-surface-variant">CHAIN-OF-holding AUDIT</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">Damaged Goods &amp; Quarantine Bay Intake</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Forensic intake telemetry, live photographic cataloging, and automated mobile money payment lockouts for flagged transit consignments.
        </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="h-12 px-space-lg rounded-xl bg-primary-container text-on-primary font-label-lg flex items-center gap-space-xs shadow-md hover:opacity-95 active:scale-[0.98] transition-all" id="btn-scan">
<Icon name="qr_code_scanner" className="text-[20px]" />
<span>Scan Quarantine Barcode</span>
</button>
<button className="h-12 px-space-md rounded-xl bg-surface-container-lowest text-on-surface font-label-md flex items-center gap-space-xs shadow-sm hover:bg-surface-container transition-all">
<Icon name="file_download" className="text-[18px] text-outline" />
<span>Export Claims CSV</span>
</button>
<button className="h-12 px-space-md rounded-xl bg-surface-container-lowest text-error font-label-md flex items-center gap-space-xs shadow-sm hover:bg-error-container/30 transition-all">
<Icon name="gavel" className="text-[18px]" />
<span>Escalate to Audit</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Bay Q4 Staged Units</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-1">14 <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">Parcels</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<Icon name="shelves" className="text-[22px]" />
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm">
<span className="text-on-surface-variant">Cage Utilization (85%)</span>
<span className="text-primary font-bold">+3 flagged today</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Frozen Payment Value</span>
<span className="font-price-display text-price-display text-primary font-black mt-1 whitespace-nowrap">UGX 4,890,000</span>
</div>
<div className="w-10 h-10 rounded-lg bg-error-container/50 flex items-center justify-center text-error">
<Icon name="lock" className="text-[22px]" />
</div>
</div>
<div className="flex items-center justify-between font-label-sm">
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="shield" className="text-[14px]" />
            100% Intercept Hold
          </span>
<span className="text-on-surface-variant">Zero Payout Risk</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Avg Resolution Window</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-1">28.4 <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">hrs</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<Icon name="history_toggle_off" className="text-[22px]" />
</div>
</div>
<div className="flex items-center justify-between font-label-sm">
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="trending_down" className="text-[14px]" />
            -6.2h vs benchmark
          </span>
<span className="text-on-surface-variant">SLA &lt;36.0h target</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Damage Modality Split</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-md text-headline-md text-on-surface font-extrabold">68%</span>
<span className="font-label-sm text-on-surface-variant font-semibold">Crush</span>
<span className="text-outline-variant">/</span>
<span className="font-headline-md text-headline-md text-error font-extrabold">32%</span>
<span className="font-label-sm text-on-surface-variant font-semibold">Tamper</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-outline">
<Icon name="donut_small" className="text-[22px]" />
</div>
</div>
<div className="flex items-center gap-1 w-full">
<div className="h-2 rounded-l-full bg-primary" style={{"width":"68%"}}></div>
<div className="h-2 rounded-r-full bg-error" style={{"width":"32%"}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 sm:pb-0">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md font-bold shadow-sm whitespace-nowrap">
                All Quarantined (14)
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md font-semibold whitespace-nowrap transition-colors">
                Physical Crush (6)
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md font-semibold whitespace-nowrap transition-colors">
                Tamper Breached (5)
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md font-semibold whitespace-nowrap transition-colors">
                Liquid Intrusion (3)
              </button>
</div>

<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm self-end sm:self-auto">
<span>Sort:</span>
<button className="flex items-center gap-0.5 text-on-surface font-bold">
                Highest Risk
                <Icon name="arrow_drop_down" className="text-[16px]" />
</button>
</div>
</div>

<div className="relative w-full">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" />
<input className="w-full pl-9 pr-24 py-2 text-body-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-inner placeholder:text-on-surface-variant/60" placeholder="Search waybill #, merchant origin, SKU, or serial hash..." type="text" />
<span className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded">⌘ + K</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-md font-bold">Waybill / Origin</th>
<th className="py-space-md px-space-md font-bold">Merchant / Trader</th>
<th className="py-space-md px-space-md font-bold">payment protected</th>
<th className="py-space-md px-space-md font-bold">Incident Modality</th>
<th className="py-space-md px-space-md font-bold text-right">Rack Bay</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm">

<tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-8 rounded-full bg-primary"></div>
<div className="flex flex-col min-w-0">
<span className="font-label-md font-bold text-primary group-hover:underline">#SC-99102</span>
<span className="font-body-sm text-on-surface-variant truncate">Jinja Line-Haul #MNF-1081</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-bold text-on-surface">Jumia Express Depot Hub #02</span>
<span className="text-on-surface-variant font-body-sm">Makerere Kikoni • 07•••419</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-extrabold text-error flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
                        UGX 320,000
                      </span>
<span className="text-tertiary font-label-sm">MoMo Auto-Freeze</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm font-bold">
<Icon name="broken_image" className="text-[13px]" />
                      Crushed Outer Carton
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-on-surface font-extrabold tracking-wide">Q4-R2</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-8 rounded-full bg-transparent"></div>
<div className="flex flex-col min-w-0">
<span className="font-label-md font-bold text-on-surface group-hover:text-primary">#SC-98840</span>
<span className="font-body-sm text-on-surface-variant truncate">Kikuubo Direct Cross-Dock</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-bold text-on-surface">Kikuubo Wholesalers Tier-A</span>
<span className="text-on-surface-variant font-body-sm">Ntinda St #12 • 07•••882</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-extrabold text-error flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
                        UGX 1,450,000
                      </span>
<span className="text-tertiary font-label-sm">Airtel Money Held</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm font-bold">
<Icon name="gavel" className="text-[13px]" />
                      Adhesive Tamper
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-on-surface font-extrabold tracking-wide">Q4-R1</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-8 rounded-full bg-transparent"></div>
<div className="flex flex-col min-w-0">
<span className="font-label-md font-bold text-on-surface group-hover:text-primary">#SC-97651</span>
<span className="font-body-sm text-on-surface-variant truncate">Entebbe Intake #EB-04</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-bold text-on-surface">Victoria Beauty Merchant #551</span>
<span className="text-on-surface-variant font-body-sm">Bugolobi Village • 07•••614</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-extrabold text-error flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
                        UGX 215,000
                      </span>
<span className="text-tertiary font-label-sm">MoMo Auto-Freeze</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm font-bold">
<Icon name="water_damage" className="text-[13px]" />
                      Liquid Leakage
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-on-surface font-extrabold tracking-wide">Q4-R3</span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-8 rounded-full bg-transparent"></div>
<div className="flex flex-col min-w-0">
<span className="font-label-md font-bold text-on-surface group-hover:text-primary">#SC-97109</span>
<span className="font-body-sm text-on-surface-variant truncate">Cross-Dock 01 William St</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-bold text-on-surface">Kampala Phone Hub High-Val</span>
<span className="text-on-surface-variant font-body-sm">Kololo Terrace • 07•••902</span>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-col">
<span className="font-label-md font-extrabold text-error flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
                        UGX 850,000
                      </span>
<span className="text-tertiary font-label-sm">Bank Payment Lock</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm font-bold">
<Icon name="warning" className="text-[13px]" />
                      Missing SKU Inside
                    </span>
</td>
<td className="py-space-md px-space-md text-right">
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-on-surface font-extrabold tracking-wide">Q4-R4</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-on-surface-variant">Showing 4 of 14 cases in Q4 Bay</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-tertiary flex items-center gap-1">
<Icon name="terminal" className="text-[14px]" />
                Ledger Sync 0x829...4F19
              </span>
</div>
<div className="flex items-center gap-space-xs font-label-sm">
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface disabled:opacity-50">Prev</button>
<span className="px-2 py-1 rounded bg-primary-container text-on-primary font-bold">1</span>
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface">2</button>
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface">3</button>
<span className="text-on-surface-variant">...</span>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface">Next</button>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container-lowest to-surface-container-low shadow-sm flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="account_balance_wallet" className="text-[28px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-on-surface font-bold whitespace-nowrap">UGX Mobile money payment Freeze Shield</span>
<p className="font-body-sm text-on-surface-variant">
                Automatic merchant payout disbursement cut triggered upon intake scan to eliminate fraudulent cash out across MTN MoMo &amp; Airtel rails.
              </p>
</div>
</div>
<div className="hidden sm:flex flex-col items-end shrink-0">
<span className="px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm font-bold flex items-center gap-1">
<Icon name="lock" className="text-[14px]" />
              Payment Gateway Intercepted
            </span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-lg relative">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm uppercase tracking-wider text-primary font-bold">ACTIVE FORENSIC FOCUS</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-on-surface-variant font-bold">Rack Q4-R2</span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Waybill #SC-99102</h2>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
</div>
<div className="px-space-md py-1 rounded-lg bg-error-container text-error font-price-display text-[16px] font-black whitespace-nowrap">
              UGX 320,000 FROZEN
            </div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-lg bg-surface-container-highest overflow-hidden relative shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up photograph of a damaged black electronics retail box with a severe crushed corner on a clean steel inspection table under bright fluorescent warehouse lights with forensic scale markers in the background" src="/images/7df06b76be5c37e4.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md font-bold text-on-surface truncate">Soundcore Space One ANC Wireless</span>
<span className="font-body-sm text-on-surface-variant">Declared SKU: AU-SND-901 • Qty: 01 Unit</span>
<span className="font-label-sm text-primary font-semibold">Manifest #MNF-1081 (Jinja Line-Haul)</span>
</div>
</div>
<div className="shrink-0 text-right">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm font-bold">1/1 Checked</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Forensic Photographic Evidence (4 Logged)</span>
<button className="font-label-sm text-primary font-bold hover:underline flex items-center gap-0.5">
<Icon name="add_a_photo" className="text-[16px]" />
                Add Photo
              </button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">

<div className="group relative rounded-lg overflow-hidden bg-surface-container aspect-square shadow-sm cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High resolution detailed macro photo of crushed carton corner with millimeter measurement ruler placed next to the indentation, showing severe cardboard compression in high key studio lighting" src="/images/eec3b3fab1e5cc36.webp" />
<div className="absolute inset-x-0 bottom-0 p-1 bg-surface-container-lowest/90 backdrop-blur-xs flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface font-extrabold truncate">Corner Crush</span>
<span className="font-label-sm text-[9px] text-error font-bold">28mm Impact</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container aspect-square shadow-sm cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Macro close-up forensic inspection photograph of a sliced and peeled circular holographic security sticker on retail packaging showing clear evidence of manual tamper and intrusion" src="/images/f181e58a07186c02.webp" />
<div className="absolute inset-x-0 bottom-0 p-1 bg-surface-container-lowest/90 backdrop-blur-xs flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface font-extrabold truncate">Factory Seal</span>
<span className="font-label-sm text-[9px] text-error font-bold">Peeled Void</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container aspect-square shadow-sm cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Forensic photo of logistics thermal barcode shipping label torn and punctured right across the GS1-128 linear barcode symbol rendering it unreadable by industrial scanner optics" src="/images/7ef9bf57cd37a655.webp" />
<div className="absolute inset-x-0 bottom-0 p-1 bg-surface-container-lowest/90 backdrop-blur-xs flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface font-extrabold truncate">Label Status</span>
<span className="font-label-sm text-[9px] text-on-surface-variant font-bold">Puncture Split</span>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-surface-container aspect-square shadow-sm cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close up photograph of an industrial digital weighing scale LCD display glowing green showing 420 grams compared to a declared label weight of 650 grams with a minus discrepancy flag" src="/images/286ef22ea73fe680.webp" />
<div className="absolute inset-x-0 bottom-0 p-1 bg-surface-container-lowest/90 backdrop-blur-xs flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface font-extrabold truncate">Tare Weight</span>
<span className="font-label-sm text-[9px] text-error font-bold">-230g Missing</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Physical Audit Criteria Checklist</span>
<div className="flex flex-col gap-space-xs font-body-sm">
<label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
<span className="text-on-surface font-medium">Outer carton structural failure (&gt;25% side wall compression)</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
<span className="text-on-surface font-medium">Factory security tape peeled / non-original adhesive detected</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
<span className="text-on-surface font-medium">Digital scale weight discrepancy (-230g missing inner contents)</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
<span className="text-on-surface-variant">Hazardous chemical / Lithium Battery breach (No leak detected)</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Inspector Telemetry Notes</span>
<span className="font-label-sm text-on-surface-variant">Logged by #kla-118</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low text-body-sm text-on-surface leading-relaxed">
              Consignment received via Jinja Line-Haul #MNF-1081 with visible heavy pallet crush. Factory tape severed at base seam. Headphone outer ear-cup casing cracked. Payment Release withheld pending trader review.
            </div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg flex items-center justify-center gap-space-sm shadow-md hover:opacity-95 active:scale-[0.98] transition-all">
<Icon name="lock_clock" className="text-[20px]" />
<span>Submit Quarantine Intake &amp; Lock Payment</span>
</button>
<div className="grid grid-cols-2 gap-space-sm">
<button className="h-10 rounded-lg bg-surface-container-low text-on-surface font-label-md flex items-center justify-center gap-1 hover:bg-surface-container transition-colors">
<Icon name="picture_as_pdf" className="text-[18px]" />
<span>Pesapal Incident PDF</span>
</button>
<button className="h-10 rounded-lg bg-surface-container-low text-on-surface font-label-md flex items-center justify-center gap-1 hover:bg-surface-container transition-colors">
<Icon name="replay" className="text-[18px]" />
<span>Release to RTO Bay</span>
</button>
</div>
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
