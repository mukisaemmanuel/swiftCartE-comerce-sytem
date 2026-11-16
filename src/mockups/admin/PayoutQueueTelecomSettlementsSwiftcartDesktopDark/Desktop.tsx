// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/payout_queue_telecom_settlements_swiftcart_desktop_dark/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 px-gutter-desktop pb-margin-desktop bg-surface-dark min-h-screen"><div className="flex flex-col w-full space-y-space-lg text-on-surface">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col space-y-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Admin Operations</span>
<span className="font-label-sm text-label-sm text-outline">/</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Financials</span>
<span className="font-label-sm text-label-sm text-outline">/</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Payout Queue &amp; Settlements</span>
</div>
<div className="flex items-center gap-3">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Disbursals &amp; Telecom Settlement Rail</h1>
<span className="px-2 py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow animate-ping"></span>
          Direct API Link Sync
        </span>
</div>
</div>

<div className="flex items-center gap-space-sm self-start lg:self-auto">
<button className="h-10 px-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright flex items-center gap-2 font-label-md text-label-md transition-all duration-150 shadow-sm active:scale-95" type="button">
<Icon name="download" className="text-[18px]" />
<span>Export CSV Bank Ledger</span>
</button>
<button className="h-10 px-space-lg rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md flex items-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:brightness-110 active:scale-95 transition-all duration-150" id="triggerSweepModalBtn" type="button">
<Icon name="bolt" className="text-[18px]" />
<span>Trigger Manual Telecom Sweep</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="schedule" className="text-[18px] text-primary" />
          Pending Batch Disbursal
        </span>
<span className="text-xs px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-display">21:00 EAT</span>
</div>
<div className="mt-4 mb-2">
<div className="text-on-surface font-price-display text-price-display whitespace-nowrap">UGX 142,650,000</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="check_circle" className="text-[14px] text-tertiary" />
<span>Ready for automatic telecom sweep</span>
</div>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-gradient-to-r from-action-gradient-start to-primary h-full w-[78%] rounded-full"></div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-28 h-28 bg-emerald-escrow/5 rounded-full blur-2xl group-hover:bg-emerald-escrow/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="account_balance_wallet" className="text-[18px] text-emerald-escrow" />
          Settled Today
        </span>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm">Finalized</span>
</div>
<div className="mt-4 mb-2">
<div className="text-on-surface font-price-display text-price-display whitespace-nowrap">UGX 64,820,000</div>
<div className="flex items-center gap-1.5 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-semibold text-on-surface">312</span> merchants &amp; <span className="font-semibold text-on-surface">286</span> couriers paid
        </div>
</div>
<div className="flex items-center gap-2 text-xs font-label-sm text-label-sm text-tertiary">
<Icon name="verified" className="text-[14px]" />
<span>Reconciled with Stanbic Escrow</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="wifi_tethering" className="text-[18px] text-secondary" />
          B2C Gateway Health
        </span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="space-y-2.5 my-2">
<div className="flex items-center justify-between bg-surface-container-low px-2.5 py-1.5 rounded-lg">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo B2C</span>
</div>
<div className="flex items-center gap-2 font-code-display text-xs">
<span className="text-emerald-escrow font-bold">99.98%</span>
<span className="text-on-surface-variant">142ms</span>
</div>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-2.5 py-1.5 rounded-lg">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>
<span className="font-label-sm text-label-sm text-on-surface">Airtel Money B2C</span>
</div>
<div className="flex items-center gap-2 font-code-display text-xs">
<span className="text-emerald-escrow font-bold">99.94%</span>
<span className="text-on-surface-variant">180ms</span>
</div>
</div>
</div>
<div className="text-[11px] text-on-surface-variant font-label-sm">Dual failover routing active</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-28 h-28 bg-danger-penalty/10 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5">
<Icon name="security" className="text-[18px] text-danger-penalty" />
          On-Hold / Audit Flags
        </span>
<span className="px-2 py-0.5 rounded bg-danger-penalty/15 text-danger-penalty font-label-sm text-label-sm font-bold animate-pulse">Action Req.</span>
</div>
<div className="mt-4 mb-2">
<div className="text-on-surface font-price-display text-price-display flex items-baseline gap-2">
<span>3 Payouts</span>
<span className="font-body-sm text-body-sm text-danger-penalty font-normal whitespace-nowrap">(UGX 8,450,000)</span>
</div>
<div className="text-on-surface-variant font-body-sm text-body-sm mt-1">
          Locked by merchant probation / active dispute
        </div>
</div>
<button className="text-left text-xs font-label-sm text-primary hover:underline flex items-center gap-1" type="button">
<span>Review quarantined holds</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
<button className="px-space-md py-2 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap shadow-sm" type="button">
<span>All Settlements</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-low text-[11px] font-mono">484</span>
</button>
<button className="px-space-md py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span>Merchant Escrow Releases</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-mono">184</span>
</button>
<button className="px-space-md py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span>Rider Daily Earnings</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-mono">286</span>
</button>
<button className="px-space-md py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span>Hub Logistics Fees</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-mono">14</span>
</button>
</div>
<div className="flex items-center gap-space-sm self-end lg:self-auto">
<div className="flex items-center gap-2 px-space-md py-1.5 rounded-xl bg-surface-container font-label-sm text-label-sm text-on-surface-variant shadow-inner">
<Icon name="calendar_today" className="text-[16px] text-outline" />
<span className="text-on-surface font-medium">Today, Oct 24</span>
<Icon name="expand_more" className="text-[14px] text-outline" />
</div>
<div className="h-6 w-px bg-surface-container-high"></div>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" title="Filter Settings" type="button">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-container-dark-low rounded-xl shadow-lg overflow-hidden flex flex-col">
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-md px-space-lg">Batch ID</th>
<th className="py-space-md px-space-lg">Recipient &amp; Operational Tier</th>
<th className="py-space-md px-space-lg">Disbursal Channel</th>
<th className="py-space-md px-space-lg text-right">Net Settlement</th>
<th className="py-space-md px-space-lg text-right">Gross Volume</th>
<th className="py-space-md px-space-lg text-right">Platform Fee</th>
<th className="py-space-md px-space-lg">Ledger Status</th>
<th className="py-space-md px-space-lg text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">

<tr className="hover:bg-surface-container-high/40 transition-colors group">
<td className="py-space-md px-space-lg font-code-display text-xs text-secondary-fixed">
              #DIS-90241
            </td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="SoundCore acoustic premium electronics brand logo badge, bold typography with modern neon orange audio wave accents dark slate background" src="/images/cd5af792bd7752d3.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm truncate text-on-surface text-[15px]">SoundCore Uganda Official</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container text-[10px] text-tertiary-fixed font-bold tracking-wide uppercase">Merchant (Tier 1)</span>
<span className="text-on-surface-variant text-[11px]">• 34 orders</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-mtn-yellow shrink-0"></div>
<div className="flex flex-col">
<span className="font-medium text-on-surface text-xs">MTN MoMo Biz</span>
<span className="font-code-display text-[11px] text-on-surface-variant">+256 772 ••• 419</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<span className="font-price-display text-[16px] text-tertiary font-bold tracking-tight whitespace-nowrap">UGX 16,840,000</span>
</td>
<td className="py-space-md px-space-lg text-right font-code-display text-xs text-on-surface-variant whitespace-nowrap">
              UGX 18,200,000
            </td>
<td className="py-space-md px-space-lg text-right">
<span className="font-code-display text-xs text-primary whitespace-nowrap">-UGX 1,360,000</span>
<span className="text-[10px] text-on-surface-variant block">(7.5%)</span>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
                Ready for Release
              </span>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex items-center justify-center gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright text-xs font-label-sm transition-all" type="button">
                  Inspect
                </button>
<button className="px-2.5 py-1 rounded-lg bg-danger-penalty/15 text-danger-penalty hover:bg-danger-penalty/25 text-xs font-label-sm transition-all" type="button">
                  Hold Payout
                </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors group bg-surface-container-low/20">
<td className="py-space-md px-space-lg font-code-display text-xs text-secondary-fixed">
              #DIS-90242
            </td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young Ugandan motorcycle courier driver wearing an orange high-visibility vest and black helmet, sharp profile lighting against dark city dusk" src="/images/bb735f6b4992b63f.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm truncate text-on-surface text-[15px]">Brian Kizito</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container text-[10px] text-mtn-yellow font-bold tracking-wide uppercase">SafeBoda Rider (Gold Tier)</span>
<span className="text-on-surface-variant text-[11px]">• Boda Plate UFH 482K</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-mtn-yellow shrink-0"></div>
<div className="flex flex-col">
<span className="font-medium text-on-surface text-xs">MTN MoMo</span>
<span className="font-code-display text-[11px] text-on-surface-variant">+256 758 ••• 391</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<span className="font-price-display text-[16px] text-tertiary font-bold tracking-tight whitespace-nowrap">UGX 68,000</span>
</td>
<td className="py-space-md px-space-lg text-right font-code-display text-xs text-on-surface-variant">
              14 deliveries
            </td>
<td className="py-space-md px-space-lg text-right">
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">Zero Fee</span>
<span className="text-[10px] text-on-surface-variant block">(Platform Subsidized)</span>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-warning"></span>
                Queued (21:00 EAT)
              </span>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex items-center justify-center gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright text-xs font-label-sm transition-all" type="button">
                  Inspect
                </button>
<span className="px-2 py-0.5 rounded text-[11px] text-tertiary font-label-sm bg-tertiary-container/20">Auto-Clear</span>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors group bg-danger-penalty/[0.04]">
<td className="py-space-md px-space-lg font-code-display text-xs text-danger-penalty font-bold">
              #DIS-90243
            </td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Modern smartphone accessories storefront logo, showing a glowing neon smartphone wireframe in deep violet and orange background" src="/images/8d855fdd8a3d75ce.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm truncate text-on-surface text-[15px]">Kampala Phone Hub</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-danger-penalty/20 text-danger-penalty text-[10px] font-bold uppercase">Probationary Merchant</span>
<span className="text-danger-penalty text-[11px] font-semibold">• Dispute #DSP-88219</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-mtn-yellow shrink-0"></div>
<div className="flex flex-col">
<span className="font-medium text-on-surface text-xs">MTN MoMo</span>
<span className="font-code-display text-[11px] text-on-surface-variant">+256 782 ••• 901</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<span className="font-price-display text-[16px] text-danger-penalty font-bold tracking-tight whitespace-nowrap">UGX 4,120,000</span>
</td>
<td className="py-space-md px-space-lg text-right font-code-display text-xs text-on-surface-variant whitespace-nowrap">
              UGX 4,600,000
            </td>
<td className="py-space-md px-space-lg text-right">
<span className="font-code-display text-xs text-danger-penalty font-semibold">HELD IN AUDIT</span>
<span className="text-[10px] text-on-surface-variant block">Serial mismatch</span>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-danger-penalty/20 text-danger-penalty font-label-sm text-label-sm font-bold">
<Icon name="lock" className="text-[14px]" />
                FROZEN IN ESCROW
              </span>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex items-center justify-center gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright text-xs font-label-sm transition-all" type="button">
                  Inspect
                </button>
<button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container hover:brightness-110 text-xs font-label-sm transition-all shadow-sm" type="button">
                  Release with Approval
                </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors group">
<td className="py-space-md px-space-lg font-code-display text-xs text-secondary-fixed">
              #DIS-90244
            </td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="High tech retail showroom minimalist logo with glowing cyan letters Victoria Tech on a brushed metallic dark blue surface" src="/images/48e62de313e12b64.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm truncate text-on-surface text-[15px]">Victoria Tech Stores</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container text-[10px] text-tertiary-fixed font-bold tracking-wide uppercase">Merchant (Tier 1)</span>
<span className="text-on-surface-variant text-[11px]">• High Volume</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-2">
<Icon name="account_balance" className="text-[18px] text-secondary" />
<div className="flex flex-col">
<span className="font-medium text-on-surface text-xs">Stanbic Bank EFT</span>
<span className="font-code-display text-[11px] text-on-surface-variant">A/C ••• 9482</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<span className="font-price-display text-[16px] text-tertiary font-bold tracking-tight whitespace-nowrap">UGX 31,400,000</span>
</td>
<td className="py-space-md px-space-lg text-right font-code-display text-xs text-on-surface-variant whitespace-nowrap">
              UGX 34,000,000
            </td>
<td className="py-space-md px-space-lg text-right">
<span className="font-code-display text-xs text-primary whitespace-nowrap">-UGX 2,600,000</span>
<span className="text-[10px] text-on-surface-variant block">(Bank Tier Cap)</span>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/50 text-secondary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Next Window (16:00)
              </span>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex items-center justify-center gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright text-xs font-label-sm transition-all" type="button">
                  Inspect
                </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-xs font-label-sm transition-all" type="button">
                  EFT Slip
                </button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/40 transition-colors group">
<td className="py-space-md px-space-lg font-code-display text-xs text-secondary-fixed">
              #DIS-90245
            </td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Female delivery courier rider in Kampala smiling outdoors, wearing red windbreaker jacket and reflective courier ID card around neck" src="/images/c5f5d5da64830a9b.webp" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm truncate text-on-surface text-[15px]">Sarah Namubiru</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container text-[10px] text-on-surface-variant font-bold tracking-wide uppercase">Courier Independent</span>
<span className="text-on-surface-variant text-[11px]">• Electric Boda Pilot</span>
</div>
</div>
</div>
</td>
<td className="py-space-md px-space-lg">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-airtel-red shrink-0"></div>
<div className="flex flex-col">
<span className="font-medium text-on-surface text-xs">Airtel Money B2C</span>
<span className="font-code-display text-[11px] text-on-surface-variant">+256 701 ••• 512</span>
</div>
</div>
</td>
<td className="py-space-md px-space-lg text-right">
<span className="font-price-display text-[16px] text-tertiary font-bold tracking-tight whitespace-nowrap">UGX 52,000</span>
</td>
<td className="py-space-md px-space-lg text-right font-code-display text-xs text-on-surface-variant">
              11 deliveries
            </td>
<td className="py-space-md px-space-lg text-right">
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">Zero Fee</span>
<span className="text-[10px] text-on-surface-variant block">(Tier Incentive)</span>
</td>
<td className="py-space-md px-space-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
                Ready for Release
              </span>
</td>
<td className="py-space-md px-space-lg text-center">
<div className="flex items-center justify-center gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright text-xs font-label-sm transition-all" type="button">
                  Inspect
                </button>
<button className="px-2.5 py-1 rounded-lg bg-container-dark-high text-tertiary hover:bg-tertiary/10 text-xs font-label-sm transition-all font-semibold" type="button">
                  Disburse Now
                </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low px-space-lg py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md text-xs text-on-surface-variant font-label-sm">
<span>Displaying 5 of 484 disbursal instructions</span>
<span className="hidden md:inline">•</span>
<span className="hidden md:inline">Automatic Sweep scheduled in <strong className="text-on-surface">3h 42m</strong></span>
</div>
<div className="flex items-center gap-1 self-end sm:self-auto">
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface text-xs disabled:opacity-40" disabled={true} type="button">Previous</button>
<button className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface text-xs font-bold" type="button">1</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface text-xs" type="button">2</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface text-xs" type="button">3</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface text-xs" type="button">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<Icon name="account_balance" className="text-secondary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-[16px]">Stanbic Custodial Escrow Pool</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow text-xs font-mono font-bold">100% Fully Backed</span>
</div>
<div className="my-3">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Mirror Balance (Real-time API Heartbeat)</span>
<span className="font-price-display text-price-display text-on-surface tracking-tight mt-1 block whitespace-nowrap">UGX 1,489,210,400</span>
</div>
<div className="space-y-2 pt-2 text-xs">
<div className="flex justify-between text-on-surface-variant">
<span>Allocated to Active Deliveries</span>
<span className="font-mono text-on-surface whitespace-nowrap">UGX 942,100,000</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Unencumbered Reserve Capital</span>
<span className="font-mono text-tertiary whitespace-nowrap">UGX 547,110,400</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<Icon name="swap_calls" className="text-action-gradient-start text-[20px]" />
<span className="font-headline-sm text-headline-sm text-[16px]">B2C Float Balances</span>
</div>
<span className="text-xs text-on-surface-variant font-mono">Auto-Topup: Enabled</span>
</div>
<div className="space-y-3 my-2">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="flex items-center gap-1.5 font-medium"><span className="w-2 h-2 rounded-full bg-mtn-yellow"></span> MTN MoMo Corporate Float</span>
<span className="font-mono text-on-surface whitespace-nowrap">UGX 220,400,000 / 300M</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-mtn-yellow h-full w-[73%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="flex items-center gap-1.5 font-medium"><span className="w-2 h-2 rounded-full bg-airtel-red"></span> Airtel Bulk B2C Float</span>
<span className="font-mono text-on-surface whitespace-nowrap">UGX 145,900,000 / 200M</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-airtel-red h-full w-[72%] rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant pt-1 font-label-sm">
<Icon name="verified_user" className="text-[15px] text-tertiary" />
<span>Sufficient headroom for 21:00 EAT disbursal run</span>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<Icon name="rule" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-[16px]">Automated Sweep Rules</span>
</div>
<button className="text-xs text-primary font-label-sm hover:underline" type="button">Config</button>
</div>
<div className="space-y-2 text-xs">
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="text-on-surface-variant">Rider Instant Clearing</span>
<span className="font-bold text-on-surface">T+0 (Post Delivery Code)</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="text-on-surface-variant">Merchant Batch Disbursal</span>
<span className="font-bold text-on-surface">T+1 (Nightly 21:00 EAT)</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="text-on-surface-variant">Stanbic RTGS EFT Batch</span>
<span className="font-bold text-on-surface">Daily 11:00 &amp; 16:00 EAT</span>
</div>
</div>
<div className="text-[11px] text-outline pt-2">All outgoing transactions cryptographically signed with ECDSA SECP256k1 keys.</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full max-w-xl bg-container-dark-low shadow-2xl z-50 transform translate-x-full transition-transform duration-200 ease-out flex flex-col" id="settlementDrawer">

<div className="p-space-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
<Icon name="hub" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-[17px]">Disbursal Telemetry &amp; Payload</span>
<span className="font-code-display text-xs text-on-surface-variant">Ref: DIS-90241-UG</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="p-space-lg overflow-y-auto space-y-space-lg flex-1">

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="font-label-md text-label-md text-emerald-escrow">Pre-flight Validation Passed</span>
</div>
<span className="font-code-display text-xs text-on-surface-variant">Payload Size: 1.42 KB</span>
</div>

<div className="space-y-space-sm">
<h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Settlement Arithmetic</h4>
<div className="p-space-md rounded-xl bg-surface-container-low space-y-2.5 text-xs font-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Gross Escrow Intake:</span>
<span className="font-mono text-on-surface whitespace-nowrap">UGX 18,200,000</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">SwiftCart Marketplace Fee (7.5%):</span>
<span className="font-mono text-danger-penalty whitespace-nowrap">-UGX 1,360,000</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Telecom Carrier Push Fee (Waived):</span>
<span className="font-mono text-tertiary whitespace-nowrap">UGX 0</span>
</div>
<div className="h-px bg-surface-container-high my-1"></div>
<div className="flex justify-between font-bold text-sm">
<span className="text-on-surface">Net Disbursal to Merchant:</span>
<span className="font-mono text-tertiary whitespace-nowrap">UGX 16,840,000</span>
</div>
</div>
</div>

<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Telecom Handshake Stream</h4>
<span className="font-code-display text-[10px] text-tertiary">TLS 1.3 ENC</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl font-mono text-[11px] leading-relaxed text-secondary-fixed space-y-1.5 overflow-x-auto">
<div className="text-on-surface-variant"><span className="text-tertiary">14:02:11.892</span> [HTTP-POST] /api/v2/b2c/paymentrequest</div>
<div className="text-on-surface-variant"><span className="text-tertiary">14:02:12.014</span> [HEADER] X-Target-Telecom: MTN-UGANDA-B2C</div>
<div className="text-emerald-escrow"><span className="text-tertiary">14:02:12.052</span> [RESPONSE-200] Status: "QUEUED_AT_SWITCH"</div>
<div className="text-on-surface-variant"><span className="text-tertiary">14:02:12.055</span> [ID-LOCK] TelecomTxnId: "MOMO_UG_9901419202"</div>
<div className="text-secondary"><span className="text-tertiary">14:02:12.080</span> [ESCROW-AUDIT] Stanbic Mirror Debit Pending Execution</div>
</div>
</div>

<div className="space-y-space-sm">
<h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">JSON Outbound Payload</h4>
<div className="bg-surface-container-lowest p-space-md rounded-xl font-mono text-[10px] text-on-surface-variant overflow-x-auto leading-normal">
<pre className="whitespace-nowrap">&#123;
  "batch_reference": "DIS-90241-UG",
  "disbursal_type": "B2C_MERCHANT_ESCROW_SETTLEMENT",
  "destination_channel": "MTN_MOMO_UG",
  "account_msisdn": "+256772000419",
  "currency": "UGX",
  "net_amount": 16840000,
  "ledger_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "callback_url": "https://api.swiftcart.ug/callbacks/disbursals/telecom"
&#125;</pre>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container flex items-center justify-between gap-space-sm">
<button className="flex-1 h-11 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors" type="button">
        Dismiss Inspector
      </button>
<button className="flex-1 h-11 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md shadow-md hover:brightness-110 active:scale-95 transition-all" type="button">
        Force Immediate Push
      </button>
</div>
</div>

<div className="fixed inset-0 bg-surface-dark/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-space-md" id="sweepModal">
<div className="bg-container-dark-low rounded-2xl max-w-lg w-full p-space-xl shadow-2xl relative space-y-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-amber-warning/20 text-amber-warning flex items-center justify-center shrink-0">
<Icon name="electric_bolt" className="text-[28px]" />
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Confirm Manual Telecom Sweep</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bypasses standard 21:00 EAT schedule</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low space-y-2 text-body-sm text-on-surface">
<p>You are about to initiate immediate B2C dispatch for <strong className="text-tertiary">484 queued instructions</strong> totaling <strong className="text-on-surface whitespace-nowrap">UGX 142,650,000</strong>.</p>
<div className="text-xs text-on-surface-variant pt-1">
          • MTN Rail: UGX 94,150,000<br />
          • Airtel Money: UGX 17,100,000<br />
          • Stanbic EFT: UGX 31,400,000 (Forwarded to next bank clearing)
        </div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-2">
<button className="px-space-lg h-11 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors" id="closeSweepModalBtn" type="button">
          Cancel
        </button>
<button className="px-space-xl h-11 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-md text-label-md shadow-lg hover:brightness-110 active:scale-95 transition-all" type="button">
          Authorize Disbursal Run
        </button>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
