// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/payout_queue_commission_matrix_tablet/code.html
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
      
      <main className="w-full pt-35 bg-surface min-h-[calc(100vh-4rem)]"><div className="w-full px-margin-desktop py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm bg-surface-container-low px-space-lg py-space-sm rounded-xl mb-space-lg shadow-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-escrow animate-ping"></div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Automated Settlement Cycle</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-sm text-[10px]">T+0 Daily Protocol</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface">Next Scheduled Batch Sweep at <span className="text-primary-container font-headline-sm">18:00 EAT</span> (in 02h 44m 12s)</span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
<div className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface">
<Icon name="account_balance" className="text-emerald-escrow text-[16px]" />
<span className="font-label-sm text-label-sm">Pesapal Node: Synchronized</span>
</div>
<div className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface">
<Icon name="format_image_left" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm">Dual Auth Active</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary-container/10 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Scheduled 18:00 EAT Sweep</span>
<Icon name="schedule_send" className="text-primary text-[20px]" />
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 42,180,000</span>
</div>
<div className="flex items-center justify-between mt-space-sm pt-space-xs bg-surface-container/50 px-space-xs rounded">
<span className="font-body-sm text-body-sm text-on-surface-variant">Queue Depth</span>
<span className="font-label-md text-label-md text-primary">48 verified merchants</span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Telecom Float Liquidity</span>
<Icon name="signal_cellular_alt" className="text-emerald-escrow text-[20px]" />
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-mtn-yellow"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo Float</span>
</div>
<span className="font-label-md text-label-md text-on-surface">UGX 85.4M <span className="text-tertiary font-label-sm text-[10px] ml-0.5">● Nominal</span></span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-mtn-yellow h-full rounded-full" style={{"width":"78%"}}></div>
</div>
<div className="flex items-center justify-between pt-0.5">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-airtel-red"></span>
<span className="font-label-sm text-label-sm text-on-surface">Airtel Money</span>
</div>
<span className="font-label-md text-label-md text-on-surface">UGX 42.1M <span className="text-tertiary font-label-sm text-[10px] ml-0.5">● Nominal</span></span>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment on Hold</span>
<Icon name="lock" className="text-tertiary text-[20px]" />
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-price-display text-price-display text-emerald-escrow whitespace-nowrap">UGX 198,420,000</span>
</div>
<div className="flex items-center gap-1 mt-space-sm pt-space-xs text-on-surface-variant">
<Icon name="account_balance_wallet" className="text-emerald-escrow text-[14px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Pesapal Settlement Trustee #90302</span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Automated Clearing Ratio</span>
<Icon name="bolt" className="text-action-gradient-start text-[20px]" />
</div>
<div className="flex items-baseline justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">99.4%</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm">Instant Disburse</span>
</div>
<div className="flex items-center justify-between mt-space-sm pt-space-xs bg-error-container/20 px-space-xs rounded">
<span className="font-label-sm text-label-sm text-error">Flagged Holds</span>
<span className="font-label-md text-label-md text-error font-bold whitespace-nowrap">3 Dockets (UGX 8.45M)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<Icon name="payments" className="text-primary-container text-[24px]" />
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">MoMo Settlement Stream</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time mobile money settlement orchestration queue</p>
</div>
</div>
<span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
            Node API: 220 TPS
          </span>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
<div className="relative flex-1">
<Icon name="search" className="absolute left-3 top-2.5 text-on-surface-variant text-[18px]" />
<input className="w-full bg-surface-container-high text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm pl-9 pr-3 py-2 rounded-lg outline-none focus:bg-surface-container-highest transition-all" placeholder="Search Merchant name, TIN (10-digit), or REF-ID..." type="text" />
</div>
<div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md whitespace-nowrap">All Batches</button>
<button className="px-space-md py-1.5 rounded-lg bg-emerald-escrow/15 text-emerald-escrow font-label-md text-label-md whitespace-nowrap flex items-center gap-1">Ready <span className="px-1.5 py-0.2 rounded-full bg-emerald-escrow/20 text-[10px]">45</span></button>
<button className="px-space-md py-1.5 rounded-lg bg-error-container/30 text-error font-label-md text-label-md whitespace-nowrap flex items-center gap-1">Hold <span className="px-1.5 py-0.2 rounded-full bg-error text-on-error font-label-sm text-[10px]">3</span></button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">Done (120)</button>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
<Icon name="headphones" className="text-primary text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore Uganda Official</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> Verified Tier-1
                  </span>
</div>
<div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
                    MTN MoMo: <span className="text-on-surface font-code-display text-[12px]">+256 772 ••• 456</span>
</span>
<span>•</span>
<span>18 Orders Cleared</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN: 1002938192</span>
</div>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 6,240,000</span>
<span className="px-space-sm py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold tracking-wide mt-1">READY FOR SWEEP</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-sm">
<Icon name="lock_open" className="text-emerald-escrow text-[16px]" />
<span>0% Hold • Automated Bank-grade Risk Score: <strong className="text-emerald-escrow">99.8/100</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-colors">Inspect Ledger</button>
<button className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-sm">Fast-Disburse</button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm relative overflow-hidden bg-gradient-to-r from-error-container/10 via-surface-container-low to-surface-container-low">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center shrink-0">
<Icon name="warning" className="text-error text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Kikuubo Wholesale Store</span>
<span className="px-space-xs py-0.5 rounded bg-error/15 text-error font-label-sm text-label-sm font-bold">
                    FLAGGED
                  </span>
</div>
<div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>
                    Airtel Money: <span className="text-on-surface font-code-display text-[12px]">+256 755 ••• 891</span>
</span>
<span>•</span>
<span>24 Orders In Review</span>
<span>•</span>
<span className="text-error font-label-sm text-label-sm">TIN #10992381 (DUPLICATE)</span>
</div>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-price-display text-price-display text-error whitespace-nowrap">UGX 4,820,000</span>
<span className="px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold tracking-wide mt-1 animate-pulse">AUDIT HOLD TRIGGERED</span>
</div>
</div>

<div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-xs">
<Icon name="gavel" className="text-amber-warning text-[18px] shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="text-error">Triggered:</strong> Duplicate TIN registration detected across merchant node #M-8812 &amp; #M-4421. Hub package seal Flagged on 3 parcels.
              </p>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end sm:self-auto">
<button className="px-space-md py-1.5 rounded-lg bg-danger-penalty text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
<Icon name="lock" className="text-[16px]" />
                Quarantine Payout
              </button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-amber-warning/15 flex items-center justify-center shrink-0">
<Icon name="fingerprint" className="text-amber-warning text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Mukwano Mobile Traders</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Standard</span>
</div>
<div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-mtn-yellow"></span>
                    MTN MoMo: <span className="text-on-surface font-code-display text-[12px]">+256 788 ••• 029</span>
</span>
<span>•</span>
<span>8 Orders</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN: 1044910012</span>
</div>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 3,150,000</span>
<span className="px-space-sm py-0.5 rounded-full bg-amber-warning/15 text-amber-warning font-label-sm text-label-sm font-bold tracking-wide mt-1">PENDING BIOMETRIC</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5">
<Icon name="info" className="text-amber-warning text-[16px]" />
              NIRA Face Match confidence 64% (Threshold: 85%). Dispatch verification token dispatched.
            </span>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Request Push OTP</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
<Icon name="eco" className="text-tertiary text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Victoria Organic Foods</span>
<span className="px-space-xs py-0.5 rounded bg-emerald-escrow/10 text-emerald-escrow font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> FMCG Agro
                  </span>
</div>
<div className="flex items-center gap-space-md mt-1 text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-airtel-red"></span>
                    Airtel Money: <span className="text-on-surface font-code-display text-[12px]">+256 701 ••• 774</span>
</span>
<span>•</span>
<span>12 Orders Cleared</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">TIN: 1088492041</span>
</div>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 1,840,000</span>
<span className="px-space-sm py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold tracking-wide mt-1">READY FOR SWEEP</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-sm">
<Icon name="verified_user" className="text-emerald-escrow text-[16px]" />
<span>Settlement Channel: Instant Airtel B2W • 0% Hold</span>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Inspect Ledger</button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-xs">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="px-space-md py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs w-full sm:w-auto transition-colors">
<Icon name="download" className="text-[18px]" />
            Export Pesapal Settlement CSV
          </button>
</div>
<button className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] hover:scale-[1.01] active:scale-[0.98] transition-all">
<Icon name="send_and_archive" className="text-[20px]" />
          Authorize Manual Payment Sweep (UGX 37,360,000)
        </button>
</div>
</section>

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="percent" className="text-primary-container text-[22px]" />
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Category Commission Matrix</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">verified platform Revenue Schedule</span>
</div>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors" id="toggle-editor-btn">
<Icon name="edit" className="text-[16px]" />
            + Edit Rates
          </button>
</div>

<div className="flex flex-col gap-space-xs">

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Consumer Electronics &amp; Audio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Effective since Jan 01, 2025</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">8.0%</span>
<Icon name="tune" className="text-on-surface-variant text-[16px]" />
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Phones &amp; Tablets</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">High velocity subsidy applied</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">6.5%</span>
<Icon name="tune" className="text-on-surface-variant text-[16px]" />
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">FMCG &amp; Groceries</span>
<span className="font-label-sm text-label-sm text-tertiary">Essential goods verified platform tier</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-tertiary font-extrabold">4.0%</span>
<Icon name="tune" className="text-on-surface-variant text-[16px]" />
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Fashion &amp; Apparel</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Standard vendor tier</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">12.0%</span>
<Icon name="tune" className="text-on-surface-variant text-[16px]" />
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Computing &amp; Office</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Enterprise peripherals</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">7.5%</span>
<Icon name="tune" className="text-on-surface-variant text-[16px]" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-md relative overflow-hidden">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container/30 -mx-space-md px-space-md -mt-space-md pt-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="price_change" className="text-action-gradient-start text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Stage Commission Adjustment</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-label-sm text-[10px]">System Audit Ledger Staging</span>
</div>
<form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Select Product Category</label>
<div className="relative">
<select className="w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm px-space-md py-2.5 rounded-lg outline-none appearance-none cursor-pointer">
<option selected={true} value="electronics">Consumer Electronics &amp; Audio (Current: 8.0%)</option>
<option value="phones">Phones &amp; Tablets (Current: 6.5%)</option>
<option value="fmcg">FMCG &amp; Groceries (Current: 4.0%)</option>
<option value="fashion">Fashion &amp; Apparel (Current: 12.0%)</option>
<option value="computing">Computing &amp; Office (Current: 7.5%)</option>
</select>
<Icon name="expand_more" className="absolute right-3 top-2.5 text-on-surface-variant pointer-events-none text-[20px]" />
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm p-space-sm bg-surface-container rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Current Rate</span>
<div className="flex items-center gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">8.0%</span>
<Icon name="lock" className="text-on-surface-variant text-[16px]" />
</div>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Proposed Rate</span>
<div className="flex items-center gap-1 mt-0.5">
<input className="w-24 bg-surface-container-highest text-tertiary font-headline-md text-headline-md rounded px-2 py-0.5 outline-none font-bold" type="text" value="7.5%" />
<span className="text-tertiary font-label-sm text-[11px] font-bold">-0.5%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Effective Date (UG Code §14)</label>
<span className="text-amber-warning font-label-sm text-[10px] flex items-center gap-0.5">
<Icon name="schedule" className="text-[12px]" /> 30-Day Mandatory Notice
              </span>
</div>
<div className="relative">
<input className="w-full bg-surface-container-high text-on-surface font-body-sm text-body-sm px-space-md py-2.5 rounded-lg outline-none cursor-pointer" type="date" value="2025-03-01" />
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Uganda E-Commerce Code requires minimum 30 calendar days before fee downward or upward adjustment executes.</p>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Executive Justification</label>
<textarea className="w-full bg-surface-container-high text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm p-space-sm rounded-lg outline-none resize-none" rows={2}>Quarterly volume rebate for Tier-1 Pioneer Mall merchants with high fulfillment SLA (&gt;98.5%).</textarea>
</div>

<button className="w-full py-3 px-space-md rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all" type="submit">
<Icon name="published_with_changes" className="text-[18px]" />
            Stage Rate Change &amp; Publish Notice
          </button>
</form>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
<Icon name="verified_user" className="text-emerald-escrow text-[22px] shrink-0 mt-0.5" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Pesapal Regulatory Compliance Certification</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            All platform commission deductions and Seller Payouts strictly conform to the <strong>Pesapal Payment Guidelines</strong>. Trust ledger reconciliations are reported every 24 hours to the Central Bank Pesapal Rails Supervisor.
          </p>
</div>
</div>
</section>
</div>
</div>
</div></main>
<footer className="w-full bg-surface-container-low py-space-md mt-auto shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"><div className="w-full px-margin-desktop flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm"><span>© 2025 SwiftCart Uganda Ltd • Digital E-Commerce Platform Powered by Pesapal</span><div className="flex items-center gap-space-md font-label-sm text-label-sm"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Latency: 28ms</span><span>Server Node: EBB-DC-04</span><span>Build v4.18.2-prod</span></div></div></footer>
    </div>
  );
};

export default Tablet;
