// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/overpayments_refunds_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface OverpaymentsRefundsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverpaymentsRefundsSwiftcartAdmin: React.FC<OverpaymentsRefundsSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Overpayments &amp; Refunds</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full pb-10">

<div className="bg-surface-container rounded-xl p-space-md shadow-sm mb-space-md">
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance" className="text-primary text-[20px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Suspense Ledger Queue</span>
</div>
<span className="inline-flex items-center gap-1 bg-tertiary-container/15 text-tertiary px-2 py-0.5 rounded-full font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> Live Sync
      </span>
</div>
<div className="flex items-baseline justify-between gap-space-sm mb-space-xs">
<div>
<p className="font-price-display text-price-display text-on-surface">UGX 1,420,000</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Total Overpayments &amp; Return Escrows</p>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-primary bg-primary-fixed/60 px-2.5 py-1 rounded-lg">3 Cases Pending</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-lg p-space-sm mt-space-sm shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-body-sm text-body-sm text-on-surface">Audit Gatekeeper: Auto-Hash Match Active</span>
</div>
<span className="font-label-md text-label-md text-tertiary">99.8% SLA</span>
</div>
</div>

<div className="flex items-center gap-1.5 bg-surface-container-high p-1 rounded-xl mb-space-md overflow-x-auto no-scrollbar">
<button className="tab-btn flex-1 min-w-[100px] py-2 px-3 rounded-lg text-center font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm transition-all" data-target="active-cases" type="button">
      Active (3)
    </button>
<button className="tab-btn flex-1 min-w-[120px] py-2 px-3 rounded-lg text-center font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" data-target="under-investigation" type="button">
      Under Review (2)
    </button>
<button className="tab-btn flex-1 min-w-[90px] py-2 px-3 rounded-lg text-center font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" data-target="resolved" type="button">
      Resolved (41)
    </button>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md mb-space-md relative overflow-hidden transition-all duration-300">
<div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/5 rounded-full pointer-events-none"></div>

<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase tracking-wide">High Priority</span>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">MoMo USSD *165#</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Case #REF-1049</h2>
<p className="font-label-md text-label-md text-primary font-semibold">Carrier Duplicate USSD Debit</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Discrepancy</span>
<span className="font-headline-sm text-headline-sm text-primary">+UGX 365,000</span>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm">
<div className="flex items-start gap-space-xs mb-space-xs">
<Icon name="report_problem" className="text-primary text-[20px] mt-0.5" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md text-on-surface">Incident Overview</p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Buyer <span className="font-semibold text-on-surface">Ronald K.</span> suffered network timeout at checkout. The carrier initiated two debits of <span className="font-semibold text-on-surface">UGX 365,000</span> each. Order fulfillment executed cleanly once.
          </p>
</div>
</div>
<div className="flex items-center justify-between text-on-secondary-variant pt-space-xs bg-surface-container/60 rounded px-2 py-1.5">
<span className="font-label-sm text-label-sm">Destination MSISDN</span>
<span className="font-label-md text-label-md font-mono text-on-surface">0772•••492 (MTN Uganda)</span>
</div>
</div>

<div className="bg-surface-container-high/60 rounded-lg p-space-sm mb-space-md space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Order Reference</span>
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
          #SC-9941
          <Icon name="check_circle" className="text-[14px] text-tertiary" />
</span>
</div>
<div className="flex flex-col gap-1 text-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Captured Hash</span>
<span className="font-mono text-label-sm text-label-sm text-on-surface">MM-902184-UG</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-semibold">Duplicate Unmatched Hash</span>
<span className="font-mono text-label-sm text-label-sm text-primary font-bold bg-primary-fixed/80 px-1 rounded">MM-902185-UG</span>
</div>
</div>
<div className="flex items-center justify-between text-xs pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Ledger Disposition</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container bg-inverse-surface px-2 py-0.5 rounded text-white">
<Icon name="lock_clock" className="text-[13px] text-tertiary-fixed" /> Suspense Lock UGX 365,000
        </span>
</div>
</div>

<div className="space-y-2">
<button className="w-full bg-primary-container hover:bg-primary text-on-primary py-3 px-4 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all" id="trigger-momo-modal" type="button">
<Icon name="send_money" className="text-[20px]" />
        Approve Immediate MoMo Refund (UGX 365,000)
      </button>
<button className="w-full bg-surface-container-high hover:bg-surface-variant text-on-surface py-2.5 px-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all" id="credit-note-btn" type="button">
<Icon name="receipt_long" className="text-[18px]" />
        Mark Resolved &amp; Issue Credit Note
      </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-md hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded uppercase">Pre-dispatch</span>
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded">Airtel *185#</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Case #REF-1042</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Cancelled Pre-dispatch Return</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Refund Pool</span>
<span className="font-headline-sm text-headline-sm text-on-surface">UGX 180,000</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
      Buyer cancelled order <span className="font-semibold text-on-surface">#SC-9910</span> before merchant dispatch packaging. Escrow funds held for single-hop reversal.
    </p>
<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<Icon name="dialpad" className="text-secondary text-[18px]" />
<span className="font-label-sm text-label-sm font-mono text-on-surface">AM-661902-UG</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Pending Admin Signature</span>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-surface-container text-on-surface py-2.5 px-3 rounded-lg font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors active:scale-95" type="button">
        Inspect Order Log
      </button>
<button className="flex-1 bg-primary text-on-primary py-2.5 px-3 rounded-lg font-label-md text-label-md text-center hover:bg-primary/95 transition-colors active:scale-95 flex items-center justify-center gap-1 shadow-sm" type="button">
<Icon name="bolt" className="text-[16px]" /> Quick Reversal
      </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-lg hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-space-xs mb-space-xs">
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded uppercase">Overpayment</span>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">MoMo Pay</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Case #REF-1038</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Manual Cash-In Overcharge</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Pending</span>
<span className="font-headline-sm text-headline-sm text-on-surface">UGX 875,000</span>
</div>
</div>
<div className="flex items-center justify-between text-xs pt-1 text-on-surface-variant">
<span className="font-body-sm text-body-sm">Order #SC-9884 • 1 item short-shipped</span>
<span className="font-label-md text-label-md text-primary font-semibold">Under Carrier Verification</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-space-md mb-space-sm shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
<Icon name="history" className="text-[16px] text-tertiary" /> Reconciliation Audit Log
      </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Today</span>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between py-1 bg-surface-container-lowest/80 px-2.5 rounded">
<span className="font-body-sm text-body-sm text-on-surface">#REF-1048 Reversal Completed</span>
<span className="font-mono text-label-sm text-label-sm text-tertiary font-bold">+UGX 94,000 (Airtel)</span>
</div>
<div className="flex items-center justify-between py-1 bg-surface-container-lowest/80 px-2.5 rounded">
<span className="font-body-sm text-body-sm text-on-surface">#REF-1047 Credit Note #CN-401 issued</span>
<span className="font-mono text-label-sm text-label-sm text-secondary font-bold">UGX 512,000</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-end justify-center bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200" id="refund-modal">
<div className="bg-surface-container-lowest w-full max-w-lg rounded-t-3xl p-space-lg shadow-2xl transform translate-y-full transition-transform duration-300" id="modal-card">
<div className="w-12 h-1 bg-surface-variant rounded-full mx-auto mb-space-md"></div>
<div className="flex items-start justify-between gap-space-xs mb-space-md">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Icon name="verified" className="text-[24px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Authorize USSD Reversal</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Zero Platform Escrow Deduction</p>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" id="close-modal-btn" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md mb-space-md space-y-2.5">
<div className="flex justify-between items-center text-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Reversal Target</span>
<span className="font-label-md text-label-md font-mono text-on-surface">0772•••492 (Ronald K.)</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Carrier Operator</span>
<span className="font-label-md text-label-md text-on-surface">MTN MoMo Gateway (*165#)</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Platform Reconciliation Fee</span>
<span className="font-label-md text-label-md text-tertiary font-bold">0% (Fee Exempted)</span>
</div>
<div className="flex justify-between items-center text-sm pt-1">
<span className="font-label-md text-label-md text-on-surface font-semibold">Immediate Refund Amount</span>
<span className="font-price-display text-price-display text-primary">UGX 365,000</span>
</div>
</div>
<div className="bg-tertiary-container/15 rounded-lg p-2.5 flex items-start gap-2 mb-space-lg text-tertiary">
<Icon name="security" className="text-[20px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-tertiary-container leading-snug">
          Transaction will immediately debit SwiftCart Suspense Escrow Account #UG-MTN-001 and post an idempotent callback to MTN Mobile Money core switch.
        </p>
</div>

<div className="space-y-2">
<button className="w-full bg-primary text-on-primary py-3.5 px-4 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all" id="confirm-refund-action" type="button">
<Icon name="task_alt" className="text-[20px]" />
          Confirm &amp; Transmit MTN Reversal
        </button>
<button className="w-full py-2.5 text-center font-label-md text-label-md text-on-surface-variant hover:text-on-surface" id="cancel-modal-btn" type="button">
          Dismiss
        </button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-4 right-4 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300" id="toast">
<div className="bg-inverse-surface text-inverse-on-surface p-space-md rounded-xl shadow-xl flex items-center gap-3">
<Icon name="check_circle" className="text-tertiary-fixed text-[24px]" />
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md font-bold" id="toast-title">Success</p>
<p className="font-body-sm text-body-sm text-inverse-on-surface/80 truncate" id="toast-desc">Reversal sent.</p>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
};

export default OverpaymentsRefundsSwiftcartAdmin;
