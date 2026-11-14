// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/edit_category_commission_modal_with_date_picker/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface EditCategoryCommissionModalWithDatePickerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EditCategoryCommissionModalWithDatePicker: React.FC<EditCategoryCommissionModalWithDatePickerProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm min-w-0"><button aria-label="Dismiss overlay" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors flex-shrink-0"><Icon name="close" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><span className="font-label-sm text-label-sm text-error uppercase tracking-wider">Action Authorization</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Kill Switch Confirmation</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full relative">

<div className="w-full px-margin py-space-md opacity-30 blur-[2px] pointer-events-none select-none flex flex-col gap-space-md">
<div className="bg-surface-container-high rounded-xl p-space-md shadow-sm">
<div className="h-4 w-1/3 bg-on-secondary-fixed-variant/20 rounded-full mb-space-sm"></div>
<div className="h-8 w-2/3 bg-on-secondary-fixed-variant/30 rounded-lg"></div>
</div>
<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex justify-between items-center">
<div className="h-4 w-28 bg-on-secondary-fixed-variant/20 rounded-full"></div>
<div className="h-6 w-16 bg-primary/20 rounded-full"></div>
</div>
<div className="h-3 w-full bg-on-secondary-fixed-variant/15 rounded-full"></div>
<div className="h-3 w-4/5 bg-on-secondary-fixed-variant/15 rounded-full"></div>
</div>
<div className="bg-surface-container-high rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="h-4 w-36 bg-on-secondary-fixed-variant/20 rounded-full"></div>
<div className="h-10 w-full bg-on-secondary-fixed-variant/10 rounded-lg"></div>
</div>
</div>

<div className="fixed inset-0 z-40 bg-inverse-surface/60 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-end">

<div className="w-full max-h-[813px] overflow-y-auto bg-surface-container-lowest rounded-t-[28px] shadow-2xl flex flex-col pb-safe">

<div className="sticky top-0 z-20 bg-surface-container-lowest/95 backdrop-blur-md px-margin pt-3 pb-space-sm flex flex-col">
<div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-3"></div>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
                SUPER ADMIN OVERRIDE
              </span>
<span className="font-body-sm text-body-sm text-secondary truncate">• Platform Settings</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate mt-0.5">
              Edit Category Commission Rate
            </h2>
</div>
<button aria-label="Close dialog" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors flex-shrink-0" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
</div>

<div className="px-margin flex flex-col gap-space-lg pt-space-xs pb-space-xl">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant flex-shrink-0 shadow-sm">
<Icon name="headphones" className="text-[24px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Target Category</span>
<span className="font-label-lg text-label-lg text-on-surface truncate">Consumer Electronics &amp; Audio</span>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-secondary block">Active Rate</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">8.0%</span>
</div>
</div>
<div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1 text-on-surface-variant">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="flex items-center gap-1 text-secondary">
<Icon name="history" className="text-[15px] text-tertiary" />
                Nov 1 Override: Subsidized from 9.0% by SA-01
              </span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-container-highest rounded text-on-surface">UGX Market Hub</span>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
<span className="text-secondary">Gross Volume:</span>
<span className="font-label-md text-label-md text-on-surface">~UGX 34.2M / mo</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-secondary">Effective Take-Rate:</span>
<span className="font-label-md text-label-md text-tertiary">UGX 2.73M / mo</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="commission-input">
              New Take-Rate Commission
            </label>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="trending_down" className="text-[14px]" />
<span>-0.5% merchant relief</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between gap-space-sm">

<button aria-label="Decrease percentage" className="w-12 h-12 rounded-xl bg-surface-container-high hover:bg-surface-variant active:scale-95 flex items-center justify-center text-on-surface transition-all flex-shrink-0" id="rate-dec" type="button">
<Icon name="remove" className="text-[24px]" />
</button>

<div className="flex items-baseline justify-center gap-1 flex-1">
<span className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight" id="rate-display">7.5</span>
<span className="font-headline-md text-headline-md text-primary">%</span>
</div>

<button aria-label="Increase percentage" className="w-12 h-12 rounded-xl bg-surface-container-high hover:bg-surface-variant active:scale-95 flex items-center justify-center text-on-surface transition-all flex-shrink-0" id="rate-inc" type="button">
<Icon name="add" className="text-[24px]" />
</button>
</div>

<div className="flex flex-col gap-1.5 px-1">
<input aria-label="Commission rate slider" className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" id="rate-slider" max="15.0" min="3.0" step="0.1" type="range" value="7.5" />
<div className="flex justify-between font-label-sm text-label-sm text-secondary">
<span>3.0% (Floor)</span>
<span>Default Base: 8.0%</span>
<span>15.0% (Cap)</span>
</div>
</div>
</div>

<div className="bg-secondary-container/40 rounded-xl p-space-md flex flex-col gap-space-xs text-on-secondary-fixed">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-on-secondary-fixed pb-1">
<Icon name="analytics" className="text-[18px] text-tertiary" />
              Simulated Daily Financial Projection
            </div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-secondary-container">Current Take-Rate:</span>
<span className="font-label-md text-label-md text-on-secondary-fixed">UGX 3,428,000 / day</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-secondary-container">Projected New Take-Rate:</span>
<span className="font-label-md text-label-md text-on-secondary-fixed" id="projected-take-rate">UGX 3,213,750 / day</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-secondary-container">Revenue Variance:</span>
<span className="font-label-md text-label-md text-error" id="variance-val">-UGX 214,250 / day (-6.25%)</span>
</div>

<div className="mt-2 pt-2 bg-surface-container-lowest/80 rounded-lg p-2.5 flex items-start gap-2">
<Icon name="storefront" className="text-[20px] text-tertiary-container flex-shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface leading-tight">
<span className="font-label-sm text-label-sm text-tertiary block font-bold">MERCHANT STIMULUS IMPACT</span>
                Expected <span className="font-semibold text-tertiary">+14% listing velocity</span> across downtown Kikuubo arcade sellers within 30 days.
              </p>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Effective Activation Window</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="verified_user" className="text-[13px]" /> UCC Compliant
            </span>
</div>

<div className="flex flex-col gap-2">

<label className="flex items-center gap-3 p-3 bg-surface-container rounded-xl cursor-pointer transition-colors hover:bg-surface-variant">
<input className="w-5 h-5 accent-primary cursor-pointer" name="schedule_type" type="radio" value="immediate" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface">Apply Immediately</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Instant sync across all checkout gateways</span>
</div>
</label>

<label className="flex items-start gap-3 p-3 bg-surface-container-high rounded-xl cursor-pointer transition-colors shadow-sm">
<input checked={true} className="w-5 h-5 accent-primary cursor-pointer mt-0.5" name="schedule_type" type="radio" value="scheduled" />
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold">Schedule Future Date</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold">Recommended 14-day notice</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Enforces vendor notification grace period</span>

<div className="mt-3 p-3 bg-surface-container-lowest rounded-lg flex flex-col gap-2 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface">
<Icon name="calendar_month" className="text-[20px] text-primary" />
<span className="font-label-md text-label-md font-bold" id="selected-date-str">2025-04-01 00:00 EAT</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded">GMT+3</span>
</div>

<div className="flex items-center gap-1.5 flex-wrap pt-1">
<button className="date-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-sm font-label-sm hover:bg-surface-variant active:scale-95 transition-all" data-val="Next Monday" type="button">
                      Next Monday
                    </button>
<button className="date-chip px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm hover:bg-primary-fixed-dim active:scale-95 transition-all font-bold" data-val="1st of Next Month" type="button">
                      1st of Next Month
                    </button>
<button className="date-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-sm font-label-sm hover:bg-surface-variant active:scale-95 transition-all" data-val="End of Quarter" type="button">
                      End of Quarter
                    </button>
</div>
</div>
</div>
</label>
</div>

<label className="flex items-start gap-2.5 p-3 bg-surface-container-lowest rounded-xl shadow-sm cursor-pointer mt-1">
<input checked={true} className="w-5 h-5 rounded accent-primary cursor-pointer mt-0.5" type="checkbox" />
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<Icon name="chat" className="text-[16px] text-tertiary" />
<span className="font-label-md text-label-md text-on-surface">Automated WhatsApp &amp; SMS Broadcast</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-snug">
                Dispatches instantaneous updates to <strong className="text-on-surface">142 registered electronics merchants</strong> in accordance with Uganda E-Commerce Commercial Guidelines.
              </p>
</div>
</label>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface flex items-center gap-1" htmlFor="audit-reason">
              Mandatory Audit Justification
              <span className="text-error">*</span>
</label>
<span className="font-label-sm text-label-sm text-secondary">Req. by Governance Core</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col gap-1">
<textarea className="w-full bg-transparent font-body-md text-body-md text-on-surface resize-none focus:outline-none" id="audit-reason" placeholder="Provide executive override justification..." rows={3}>Q2 Merchant incentive campaign for Kikuubo audio importers to match regional competitive rates.</textarea>
<div className="flex justify-between items-center pt-1 font-label-sm text-label-sm text-secondary">
<span className="flex items-center gap-1 text-tertiary">
<Icon name="lock" className="text-[14px]" />
                Immutable audit ledger record
              </span>
<span>86 / 300 chars</span>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-1.5 py-1 text-center font-body-sm text-body-sm text-secondary">
<Icon name="fingerprint" className="text-[15px] text-secondary" />
<span>Cryptographic Diff will be committed to Audit Log #891-440</span>
</div>

<div className="flex flex-col gap-2.5 pt-1">

<button className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary active:scale-[0.98] text-on-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 transition-all" id="commit-btn" type="button">
<Icon name="task_alt" className="text-[20px]" />
<span>Save &amp; Commit Commission Update</span>
</button>

<button className="w-full h-12 rounded-xl bg-surface-container text-on-surface hover:bg-surface-variant active:scale-[0.98] font-label-lg text-label-lg transition-all flex items-center justify-center" type="button">
            Discard Changes
          </button>
</div>
</div>
</div>
</div>

</div></main>
    </div>
  );
};

export default EditCategoryCommissionModalWithDatePicker;
