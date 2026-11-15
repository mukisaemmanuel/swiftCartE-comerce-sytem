// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/sellers_directory_with_freeze_drawer_tablet/code.html
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
      
      <main className="w-full pt-28 bg-surface min-h-screen"><div className="flex flex-col w-full pb-10 px-margin">

<div className="relative w-full">
<div className="absolute -top-12 left-1/4 w-96 h-36 bg-primary-container/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="absolute top-20 right-10 w-72 h-32 bg-tertiary-container/10 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="flex items-center justify-between mb-space-md mt-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>GOVERNANCE PORTAL</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface">COMMERCE NODES</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">DIRECTORY &amp; ESCROW ENFORCEMENT</span>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-1 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface">BoU Escrow Safeguard Live • Audit Ledger #2910</span>
</div>
</div>

<section className="grid grid-cols-4 gap-gutter mb-space-lg">

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Registered Merchants</span>
<span className="p-1.5 rounded-lg bg-surface-container-high text-secondary">
<Icon name="storefront" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface mb-0.5">142 <span className="text-tertiary text-body-md font-body-md font-bold">Active</span></div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-tertiary-fixed-dim">
<Icon name="verified" className="text-[15px]" />
<span>98.6% compliance rate</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-emerald-escrow/10 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Escrow Bond</span>
<span className="p-1.5 rounded-lg bg-emerald-escrow/20 text-emerald-escrow">
<Icon name="lock_clock" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-emerald-escrow tracking-tight mb-0.5 whitespace-nowrap">UGX 198.4M</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="shield" className="text-[14px]" />
<span>Platform safety pool</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-danger-penalty/10 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sanctions &amp; Holds</span>
<span className="p-1.5 rounded-lg bg-danger-penalty/20 text-danger-penalty">
<Icon name="gavel" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-danger-penalty mb-0.5">3 <span className="text-body-md font-body-md text-on-surface">Under Action</span></div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
<span>2 probation • 1 security freeze</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Health Index</span>
<span className="p-1.5 rounded-lg bg-surface-container-high text-primary">
<Icon name="ecg_heart" className="text-[18px]" />
</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface mb-0.5">98.4 <span className="text-on-surface-variant text-body-sm font-body-sm">/ 100</span></div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
<Icon name="trending_up" className="text-[15px]" />
<span>Dispute rate: 0.18% avg</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-space-md mb-space-lg shadow-sm">
<div className="flex items-center justify-between gap-space-md">

<div className="relative flex-1 min-w-[240px]">
<Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
<input className="w-full bg-surface-container-high text-on-surface pl-10 pr-4 py-2.5 rounded-lg font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:bg-surface-container-highest transition-colors shadow-inner" placeholder="Search by merchant name, URSB Reg, TIN, or +256 phone..." type="text" value="Kikuubo" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded">
          ESC
        </button>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-high p-1 rounded-lg">
<button className="px-3 py-1.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">
          All (142)
        </button>
<button className="px-3 py-1.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
          Compliant (139)
        </button>
<button className="px-3 py-1.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
          Probationary (2)
        </button>
<button className="px-3 py-1.5 rounded font-label-sm text-label-sm bg-danger-penalty text-white shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          Sanctioned (1)
        </button>
</div>

<div className="flex items-center gap-space-sm">
<button className="h-10 px-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<Icon name="download" className="text-[18px]" />
<span>Export CSV</span>
</button>
<button className="h-10 px-3 bg-surface-container-high hover:bg-surface-container-highest text-primary rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<Icon name="campaign" className="text-[18px]" />
<span>Broadcast</span>
</button>
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-gutter relative">

<div className="col-span-7 flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Active Merchants Registry</span>
<span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm">5 displayed</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Sort by:</span>
<span className="text-on-surface font-bold cursor-pointer flex items-center">
            Risk &amp; Escrow Held
            <Icon name="arrow_drop_down" className="text-[16px]" />
</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">

<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all shadow-sm cursor-pointer group">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-headline-sm text-primary font-black">
                SC
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">
<Icon name="verified" className="text-[12px]" />
                    Tier-1
                  </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Electronics • Pioneer Mall G-14 • TIN: 1009827361</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">
              Active Compliant
            </span>
</div>
<div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container/50 p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Bond</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">UGX 14.85M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">30D GMV</span>
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 42.8M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispatch SLA</span>
<span className="font-label-md text-label-md text-tertiary">99.4%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispute Rate</span>
<span className="font-label-md text-label-md text-on-surface">0.22% (Normal)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all shadow-sm cursor-pointer group">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-headline-sm text-secondary font-black">
                KP
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Kampala Phone Hub</span>
<span className="px-1.5 py-0.5 rounded bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm">
                    Probationary
                  </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Phones &amp; Gadgets • William St Arcade #12 • TIN: 1044728109</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-amber-warning/20 text-amber-warning font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="timer" className="text-[13px]" />
              14 Days Remaining
            </span>
</div>
<div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container/50 p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Bond</span>
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 8.50M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">30D GMV</span>
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 28.1M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispatch SLA</span>
<span className="font-label-md text-label-md text-amber-warning">91.2%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispute Rate</span>
<span className="font-label-md text-label-md text-danger-penalty font-bold">1.84% (High)</span>
</div>
</div>
</div>

<div className="bg-surface-container-high p-space-md rounded-xl transition-all shadow-md relative overflow-hidden ring-2 ring-danger-penalty/60 cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-danger-penalty"></div>
<div className="flex items-start justify-between mb-space-sm pl-2">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-danger-penalty/20 flex items-center justify-center font-headline-sm text-danger-penalty font-black">
                KW
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kikuubo Wholesale Store</span>
<span className="px-2 py-0.5 rounded bg-danger-penalty text-white font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="emergency_home" className="text-[13px]" />
                    TARGETED
                  </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">FMCG &amp; Groceries • Kikuubo Market Zone C • TIN: 1099238472</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-danger-penalty/30 text-danger-penalty font-label-sm text-label-sm font-black uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty animate-ping"></span>
              Frozen - Security Review
            </span>
</div>
<div className="grid grid-cols-4 gap-2 pl-2 bg-surface-container-lowest/70 p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Held</span>
<span className="font-label-md text-label-md text-danger-penalty font-black whitespace-nowrap">UGX 5.00M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">30D GMV</span>
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 16.4M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Customer Dockets</span>
<span className="font-label-md text-label-md text-danger-penalty font-black">3 in 24h</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Tamper Flags</span>
<span className="font-label-md text-label-md text-danger-penalty font-black">Duplicate Seals</span>
</div>
</div>
<div className="mt-2.5 pl-2 flex items-center justify-between text-danger-penalty font-label-sm text-label-sm">
<span className="flex items-center gap-1 font-semibold">
<Icon name="priority_high" className="text-[15px]" />
              Active Governance Docket #DCK-2024-884
            </span>
<span className="text-on-surface-variant italic">Drawer Docked Active →</span>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all shadow-sm cursor-pointer group">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-headline-sm text-tertiary font-black">
                VE
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Victoria Electronics</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">
                    Tier-1
                  </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Gadgets &amp; Audio • Acacia Mall Level 2 • TIN: 1018374920</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">
              Active Compliant
            </span>
</div>
<div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container/50 p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Bond</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">UGX 12.00M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">30D GMV</span>
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 34.6M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispatch SLA</span>
<span className="font-label-md text-label-md text-tertiary">98.9%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispute Rate</span>
<span className="font-label-md text-label-md text-on-surface">0.14%</span>
</div>
</div>
</div>

<div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-xl transition-all shadow-sm cursor-pointer group">
<div className="flex items-start justify-between mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center font-headline-sm text-on-surface-variant font-black">
                JR
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface truncate">Jinja Road Auto Spares</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                    Tier-2
                  </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Automotive &amp; Parts • Jinja Road Junction • TIN: 1039847118</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/20 text-emerald-escrow font-label-sm text-label-sm font-bold">
              Active Compliant
            </span>
</div>
<div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container/50 p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Bond</span>
<span className="font-label-md text-label-md text-emerald-escrow font-bold whitespace-nowrap">UGX 6.20M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">30D GMV</span>
<span className="font-label-md text-label-md text-on-surface whitespace-nowrap">UGX 19.3M</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispatch SLA</span>
<span className="font-label-md text-label-md text-tertiary">97.5%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dispute Rate</span>
<span className="font-label-md text-label-md text-on-surface">0.31%</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-2 px-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Showing 1 - 5 of 142 Registered Merchants</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high disabled:opacity-40" disabled={true}>
<Icon name="chevron_left" className="text-[16px]" />
</button>
<span className="px-2 font-bold text-on-surface">Page 1</span>
<button className="p-1 rounded bg-surface-container hover:bg-surface-container-high">
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="col-span-5 bg-surface-container rounded-2xl p-space-md shadow-2xl flex flex-col justify-between border-t border-danger-penalty/30 relative">

<div>
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest/60 mb-space-md">
<div className="flex items-center gap-2">
<span className="p-1.5 rounded-lg bg-danger-penalty/20 text-danger-penalty">
<Icon name="shield_person" className="text-[20px]" />
</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-danger-penalty uppercase font-bold tracking-wider">Sanctions Enforcement Desk</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Kikuubo Wholesale</span>
</div>
</div>
<span className="font-code-display text-[13px] text-on-surface-variant px-2 py-0.5 rounded bg-surface-container-high">#MER-9021</span>
</div>

<div className="bg-danger-penalty/10 rounded-xl p-space-md mb-space-md">
<div className="flex items-center gap-2 mb-1 text-danger-penalty font-label-md text-label-md">
<Icon name="warning" className="text-[18px]" />
<span>Security Anomaly Triggered</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-snug">
            Excessive customer non-delivery reports <span className="font-bold text-danger-penalty">(3 dockets in 24h)</span> and duplicate SafeBoda tamper seal codes detected across William St &amp; Owino Hubs.
          </p>
</div>

<div className="space-y-space-xs mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Financial &amp; Logistics Custody Impact</span>
<div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<Icon name="lock" className="text-amber-warning text-[17px]" />
                Frozen Escrow Balance
              </span>
<span className="font-label-lg text-label-lg text-danger-penalty font-bold whitespace-nowrap">UGX 8,450,000</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<Icon name="two_wheeler" className="text-secondary text-[17px]" />
                Dispatches in Transit
              </span>
<span className="font-label-md text-label-md text-secondary font-bold">4 Orders (SafeBoda Reroute)</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<Icon name="block" className="text-danger-penalty text-[17px]" />
                Payout Engine Status
              </span>
<span className="px-2 py-0.5 rounded bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-black">
                AUTO-SUSPENDED
              </span>
</div>
</div>
</div>

<div className="space-y-space-xs mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Select Enforcement Action</span>
<div className="space-y-space-xs" id="enforcement-radio-group">

<label className="flex items-start gap-space-sm p- space-sm p-3 rounded-xl bg-surface-container-high ring-1 ring-primary cursor-pointer hover:bg-surface-container-highest transition-colors">
<input checked={true} className="mt-1 text-primary focus:ring-0 accent-primary" name="enforcement_path" type="radio" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Temporary Administrative Freeze (48h)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Lock all withdrawals, hold orders in escrow, dispatch physical hub inspector.</span>
</div>
</label>

<label className="flex items-start gap-space-sm p- space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
<input className="mt-1 text-primary focus:ring-0 accent-primary" name="enforcement_path" type="radio" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Tier-2 Probation Sanction</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Require 50% escrow surcharge and mandatory Hub pre-check before dispatch.</span>
</div>
</label>

<label className="flex items-start gap-space-sm p- space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
<input className="mt-1 text-danger-penalty focus:ring-0 accent-danger-penalty" name="enforcement_path" type="radio" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-danger-penalty font-bold">Permanent Blacklist &amp; BoU Referral</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Revoke merchant license, liquidate escrow bond to victims, submit AML report.</span>
</div>
</label>
</div>
</div>

<div className="mb-space-md">
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
            Forensic Evidence &amp; Superadmin Directive
          </label>
<textarea className="w-full bg-surface-container-low text-on-surface p-2.5 rounded-lg font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-highest shadow-inner resize-none" placeholder="Document reason for action, inspector docket ID, and specific recovery orders..." rows={2}>Kikuubo hub inspection dispatched under Inspector Kyaligonza. SafeBoda rider #BD-449 statements logged. Duplicate tracking stickers seized.</textarea>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center gap-space-sm mb-space-md">
<span className="p-2 rounded-lg bg-surface-container-high text-amber-warning">
<Icon name="key" className="text-[20px]" />
</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-amber-warning font-bold uppercase tracking-wider">Dual-Auth Hardware Key Required</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Requires Super Admin Namubiru YubiKey tap to commit sanctions ledger.</span>
</div>
</div>
</div>

<div className="pt-space-sm border-t border-surface-container-highest/60 flex items-center gap-space-sm">
<button className="flex-1 h-12 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-xl font-label-md text-label-md transition-colors" type="button">
          Dismiss Docket
        </button>
<button className="flex-[2] h-12 bg-gradient-to-r from-action-gradient-start to-action-gradient-end hover:opacity-95 text-white font-label-lg text-label-lg rounded-xl shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center justify-center gap-2 transition-transform active:scale-[0.98]" id="freeze-confirm-btn" type="button">
<Icon name="lock_reset" className="text-[20px]" />
<span>Execute Freeze &amp; Lock</span>
</button>
</div>
</div>
</div>


</div></main>
    </div>
  );
};

export default Tablet;
