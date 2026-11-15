// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/overpayments_refunds_tablet_light/code.html
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
      
      <div className="pl-64"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-space-lg pt-space-lg pb-space-md flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">Overpayments, Refunds &amp; Reconciliation Ledger</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 shadow-sm">
<Icon name="gavel" className="text-[14px]" />
            Bank of Uganda NPS Reversal Protocol §38
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Kampala Settlement Subsystem UG-HQ-KLA • Direct Open-API telecom gateway bridge
        </p>
</div>

<div className="flex items-center gap-space-sm self-start md:self-auto">
<div className="px-space-sm py-1.5 rounded-lg bg-surface-container-low shadow-sm flex items-center gap-2">
<Icon name="sync_saved_locally" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Auto-Reversal Bot: <strong className="text-tertiary">ENGAGED</strong></span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all flex items-center gap-1 shadow-sm">
<Icon name="file_download" className="text-[18px]" />
          Daily Reversal Roll
        </button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-primary-fixed/20 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow Refund Pool</span>
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold tracking-tight">6,480,000</span>
</div>
<div className="flex items-center gap-1 text-tertiary mt-1">
<Icon name="format_image_left" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-semibold">100% Ring-Fenced Escrow</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-primary-container/10 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Automated</span>
<Icon name="pending_actions" className="text-primary-container text-[20px]" />
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-primary-container font-extrabold tracking-tight">1,840,000</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant mt-1">
<span className="font-label-sm text-label-sm font-bold text-primary">6 Dockets</span>
<span className="font-label-sm text-label-sm">awaiting supervisor approval</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Gateway Refund SLA</span>
<Icon name="speed" className="text-secondary text-[20px]" />
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">4m 12s</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">(-18s vs tgt)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant mt-1">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"82%"}}></div>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface ml-1">98.4%</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Telecom Reversal Mix</span>
<Icon name="swap_horiz" className="text-tertiary text-[20px]" />
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-price-display text-price-display text-on-surface font-extrabold">100%</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold">Zero Cash</span>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[#FFCC00]"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN: <strong>64%</strong></span>
</div>
<span className="text-outline text-label-sm">•</span>
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-[#E51B24]"></span>
<span className="font-label-sm text-label-sm text-on-surface">Airtel: <strong>36%</strong></span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 pt-1 border-none scrollbar-none">
<button className="px-space-md py-2 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-2 shadow-sm shrink-0">
<span>All Queue</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">18</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center gap-2 shadow-md shrink-0">
<span>Pending Approval</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary text-primary font-label-sm text-label-sm font-bold">6</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-2 shrink-0">
<span>Dispatched to MoMo</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">8</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-2 shrink-0">
<span>Settled Today</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">32</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-2 shrink-0">
<span className="text-error font-bold">Failed / Re-try</span>
<span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">4</span>
</button>
</div>
</div>

<div className="px-space-lg pb-space-xl grid grid-cols-12 gap-space-lg">

<div className="col-span-12 lg:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Active Dockets</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(Select to inspect)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span>Sort: Urgency</span>
<Icon name="arrow_drop_down" className="text-[16px]" />
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all cursor-pointer relative ring-2 ring-primary">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error animate-pulse"></span>
              High SLA (&lt;2h)
            </span>
<span className="font-label-md text-label-md text-primary font-bold">Case #REF-8842</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:22 EAT</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">Sarah Namubiru</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-headline-sm text-headline-sm text-primary font-extrabold">380,000</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1 line-clamp-2">
          Docket #DSP-104 Arbitration Ruling: Full refund issued for tampered OEM sound cable.
        </p>
<div className="flex items-center justify-between mt-3 pt-2.5 bg-surface-container-low rounded-lg px-space-sm">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-[#FFCC00]"></span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">MTN MoMo (+256 772 ••• 109)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Awaiting Sign-off</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow transition-all cursor-pointer opacity-95">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-semibold">
              Batch Queued
            </span>
<span className="font-label-md text-label-md text-on-surface font-bold">Case #REF-8839</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">13:50 EAT</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-body-lg text-body-lg text-on-surface font-bold">David Mukasa</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">52,000</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
          Delivery cancellation prior to dispatch (Swift Express Moto Nakasero Hub)
        </p>
<div className="flex items-center justify-between mt-3 pt-2 bg-surface-container-low rounded-lg px-space-sm">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-[#E51B24]"></span>
<span className="font-label-sm text-label-sm text-on-surface">Airtel Money (+256 750 ••• 114)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Auto-Run in 18m</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow transition-all cursor-pointer opacity-95">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-semibold">
              Gateway Confirmed
            </span>
<span className="font-label-md text-label-md text-on-surface font-bold">Case #REF-8835</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12:15 EAT</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-body-lg text-body-lg text-on-surface font-bold">Ronald Kato</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">145,000</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
          Overpayment duplicate USSD push (Kampala Central Tx #MTN-88219-K)
        </p>
<div className="flex items-center justify-between mt-3 pt-2 bg-surface-container-low rounded-lg px-space-sm">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-[#FFCC00]"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo (+256 776 ••• 902)</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Awaiting Audit Stamp</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow transition-all cursor-pointer opacity-90">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-semibold">
              Voucher Sync
            </span>
<span className="font-label-md text-label-md text-on-surface font-bold">Case #REF-8828</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:04 EAT</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-body-lg text-body-lg text-on-surface font-bold">Brenda Nakato</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface-variant whitespace-nowrap">UGX</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">28,500</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
          Retroactive promo code applied after vendor cart checkout
        </p>
<div className="flex items-center justify-between mt-3 pt-2 bg-surface-container-low rounded-lg px-space-sm">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-[#FFCC00]"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo (+256 788 ••• 311)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Adjust Ready</span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container shadow-sm flex items-center gap-2">
<Icon name="info" className="text-primary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
          Uganda National Payment Systems Act 2020: Direct reverse calls require verified KYC phone binding.
        </span>
</div>
</div>

<div className="col-span-12 lg:col-span-7 flex flex-col gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                Active Adjudication Docket
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Created 14:18 EAT</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mt-1">Case #REF-8842 Breakdown</h2>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Refund Quantum</span>
<div className="flex items-baseline gap-1 text-primary">
<span className="font-currency-code text-currency-code whitespace-nowrap">UGX</span>
<span className="font-headline-lg text-headline-lg font-black">380,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Origin Order</span>
<div className="flex items-center gap-1.5">
<Icon name="shopping_bag" className="text-on-surface-variant text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">#SC-9912</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface line-clamp-1">SoundCore Space One ANC Headphones</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant: Victoria Tech Ltd (Gaba Rd)</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Original Payer / KYC</span>
<div className="flex items-center gap-1.5">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">Sarah Namubiru</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface">MTN MoMo KYC Tier 2 Verified</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">NIN: CF880192842JKA • Matched</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Escrow Vault Release</span>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-on-surface whitespace-nowrap">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">380,000</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-bold">0% Restocking Penalty</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Defective dispatch ruled vendor liability</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Presiding Arbitrator</span>
<div className="flex items-center gap-1.5">
<Icon name="account_balance" className="text-secondary text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold">P. Namubiru</span>
</div>
<div className="flex items-center gap-1">
<Icon name="attach_file" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm text-primary font-bold underline cursor-pointer">Ruling Docket #DSP-104.pdf</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Evidence: 3 photos + courier seals</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-black text-[11px] shadow-sm">
              MTN
            </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">MoMo Open API Direct Channel</span>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Channel: UGX-Rail-01 (Direct Core Switch)</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="cell_tower" className="text-[14px]" />
            Telco API Ready
          </span>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Validated Recipient MSISDN</span>
<span className="font-label-md text-label-md text-on-surface font-bold font-mono">+256 772 109 418</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Telco Account Title</span>
<span className="font-label-md text-label-md text-tertiary font-bold flex items-center gap-1">
<Icon name="verified" className="text-[16px]" />
              NAMUBIRU SARAH (100% Match)
            </span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Network Gateway Fee</span>
<span className="font-label-md text-label-md text-on-surface font-bold">
              UGX 0 <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">(Absorbed via Swift Escrow Guarantee)</span>
</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-sm">
<div className="flex items-center gap-2">
<Icon name="encrypted" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Two-Step Settlement Ceremony</span>
</div>

<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input checked={true} className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-0 cursor-pointer" id="complianceCheck" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">
              I confirm this reversal complies with <strong>Bank of Uganda National Payment Systems Regulations (2020)</strong> and SwiftCart Fair Bailment Policy under binding Docket #DSP-104.
            </span>
</label>

<div className="flex flex-col gap-2 pt-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Authorizer Master PIN (Officer Patricia Namubiru)</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="lock_reset" className="text-[14px]" />
                Hardware Token Linked
              </span>
</div>

<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-2">
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
<div className="w-10 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-on-surface shadow-sm">●</div>
</div>
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Key Active</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-space-sm pt-2">
<button className="w-full sm:flex-1 h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="authBtn">
<Icon name="send" className="text-[20px]" />
<span className="whitespace-nowrap">Authorize Immediate MoMo Reversal (UGX 380,000)</span>
</button>
<button className="w-full sm:w-auto h-12 px-space-md rounded-xl bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 shadow-sm">
<Icon name="picture_as_pdf" className="text-[18px]" />
<span>Export Voucher (PDF)</span>
</button>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<Icon name="receipt_long" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Immutable Audit Trail (#REF-8842)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">HASH: 9a8c...401e</span>
</div>
<div className="flex flex-col gap-3 relative pl-3">

<div className="absolute left-4 top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>

<div className="flex items-start gap-3 relative z-10">
<div className="w-3 h-3 rounded-full bg-secondary mt-1 shrink-0"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Ruling Issued</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:18 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Senior Arbitrator Officer Patricia Namubiru signed dispute arbitration closing Docket #DSP-104 with 100% buyer restitution.
              </p>
</div>
</div>

<div className="flex items-start gap-3 relative z-10">
<div className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Lock Shifted</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:20 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Escrow funds debited from Victoria Tech Ltd vault partition and isolated into Kampala Refund Staging Pool.
              </p>
</div>
</div>

<div className="flex items-start gap-3 relative z-10">
<div className="w-3 h-3 rounded-full bg-tertiary mt-1 shrink-0"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Telco MSISDN Name Match Passed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:22 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                MTN MoMo API verification payload returned exact string match: <code className="bg-surface-container px-1 py-0.5 rounded font-mono text-[11px] text-tertiary">NAMUBIRU SARAH</code>. Safe to debit.
              </p>
</div>
</div>

<div className="flex items-start gap-3 relative z-10">
<div className="w-3 h-3 rounded-full bg-outline-variant mt-1 shrink-0 animate-ping"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-primary font-bold">Telecom Disbursement Signal</span>
<span className="font-label-sm text-label-sm text-primary font-bold">CURRENT STAGE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Awaiting physical admin button press to transmit instantaneous push to MTN Core Billing Gateway.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
};

export default Tablet;
