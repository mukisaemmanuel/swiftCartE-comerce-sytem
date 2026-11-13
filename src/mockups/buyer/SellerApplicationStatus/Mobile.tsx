// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/seller_application_status/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [, setDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface antialiased font-body-md relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100%;margin:0;padding:0;min-height:100vh;}body{overscroll-behavior-y:none;-webkit-tap-highlight-color:transparent;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-14 px-margin grid grid-cols-[44px_1fr_44px] items-center"><div className="flex items-center"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button></div><div className="flex items-center justify-center gap-space-xs text-center"><img alt="swiftcart-logo-icon-only.png" className="h-6 w-auto object-contain hidden" src={`${assetBase}/images/95ec767b02525811.webp`} /><h1 className="font-label-lg text-label-lg text-on-surface tracking-tight truncate">Product Details</h1></div><div className="flex items-center justify-end"><button aria-label="Contextual Help" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary transition-colors active:scale-95" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[22px]" /></button></div></div></header><main className="flex flex-col relative w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full pb-safe">

<section className="px-margin pt-space-md pb-space-xs">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Interactive Preview State</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> Live Tracking
      </span>
</div>
<div aria-label="Application state selector" className="grid grid-cols-4 gap-1 p-1 bg-surface-container rounded-xl" role="tablist">
<button className="state-tab py-1.5 px-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant transition-all hover:text-on-surface active:scale-95 text-center" id="btn-submitted" type="button" onClick={() => alertToast('Action triggered')}>
        Submitted
      </button>
<button className="state-tab py-1.5 px-2 rounded-lg font-label-sm text-label-sm bg-surface-container-lowest text-primary shadow-sm transition-all text-center" id="btn-in_review" type="button" onClick={() => alertToast('Action triggered')}>
        In Review
      </button>
<button className="state-tab py-1.5 px-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant transition-all hover:text-on-surface active:scale-95 text-center" id="btn-approved" type="button" onClick={() => alertToast('Action triggered')}>
        Approved
      </button>
<button className="state-tab py-1.5 px-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant transition-all hover:text-on-surface active:scale-95 text-center" id="btn-needs_changes" type="button" onClick={() => alertToast('Action triggered')}>
        Action Req.
      </button>
</div>
</section>

<section className="px-margin py-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0 flex-1">
<div className="flex items-center gap-space-xs flex-wrap mb-1">
<span className="bg-surface-container px-2 py-0.5 rounded-full font-label-sm text-label-sm text-on-surface-variant">#APP-UG-2024-8841</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2024 • 11:30 AM</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Kikuubo Tech World</h2>
<div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
<Icon name="storefront" className="text-[16px] text-primary" />
<span className="font-body-sm text-body-sm truncate">Stall G-14, Pioneer Mall, Kampala</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center shrink-0">
<img className="w-full h-full object-cover rounded-xl" data-alt="Warm modern electronic accessories stall at Pioneer Mall Kampala with phone screens gadgets and organized shop shelves under bright ambient light" src={`${assetBase}/images/f2b797cc7379aa1f.webp`} />
</div>
</div>

<div className="bg-primary-fixed/40 rounded-xl p-space-md flex flex-col gap-space-xs" id="dynamic-status-banner">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
<Icon name="progress_activity" className="text-[14px] animate-spin" />
<span id="status-pill-text">Under Review by Verification Team</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold" id="status-turnaround">2-4 business hrs</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" id="status-description">
          Our Kampala merchant onboarding team is currently validating your Ugandan National ID (NIN) and shop location at Pioneer Mall.
        </p>
</div>
</div>
</section>

<section className="px-margin py-space-xs" id="action-needed-box">
<div className="bg-error-container text-on-error-container rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-on-error-container/10 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="priority_high" className="text-[20px] text-error" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-error">Action Needed on Document</h3>
<span className="bg-error/10 text-error px-2 py-0.2 rounded-full font-label-sm text-label-sm">Urgent</span>
</div>
<p className="font-body-sm text-body-sm text-on-error-container mt-1">
            Back of Ugandan National ID was blurry during camera scan. Please provide a clear, glare-free picture.
          </p>
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-1">
<button className="h-10 px-4 rounded-xl bg-error text-on-error font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[18px]" />
          Re-upload Document
        </button>
</div>
</div>
</section>

<section className="px-margin py-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Verification Checklist</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant" id="steps-counter">2 of 5 completed</span>
</div>
<div className="flex flex-col">

<div className="relative flex items-start gap-space-md pb-space-lg">
<div className="absolute left-4 top-8 -bottom-0 w-0.5 bg-tertiary"></div>
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0 z-10 shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex items-center justify-between gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface truncate">Application Submitted</h4>
<span className="font-body-sm text-body-sm text-tertiary shrink-0">Oct 24, 11:30 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Form details, business registration, and phone lines captured.</p>
</div>
</div>

<div className="relative flex items-start gap-space-md pb-space-lg">
<div className="absolute left-4 top-8 -bottom-0 w-0.5 bg-surface-container-high" id="line-step-2"></div>
<div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0 z-10 shadow-sm" id="dot-step-2">
<Icon name="hourglass_top" className="text-[18px] animate-spin" />
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex items-center justify-between gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface truncate">Document &amp; NIN Verification</h4>
<span className="font-label-sm text-label-sm text-primary shrink-0" id="badge-step-2">In Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Checking merchant credentials against National ID registry.</p>
</div>
</div>

<div className="relative flex items-start gap-space-md pb-space-lg">
<div className="absolute left-4 top-8 -bottom-0 w-0.5 bg-surface-container-high" id="line-step-3"></div>
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 z-10" id="dot-step-3">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex items-center justify-between gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface truncate">Physical Stall &amp; Inventory Check</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0" id="badge-step-3">Pending</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pioneer Mall, Kampala • Swift Boda ground rep dispatch.</p>
</div>
</div>

<div className="relative flex items-start gap-space-md pb-space-lg">
<div className="absolute left-4 top-8 -bottom-0 w-0.5 bg-surface-container-high" id="line-step-4"></div>
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 z-10" id="dot-step-4">
<Icon name="account_balance_wallet" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex items-center justify-between gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface truncate">Payout Account Activation</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0" id="badge-step-4">Pending</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Telecom settlement linking: MTN MoMo (0772***419).</p>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 z-10" id="dot-step-5">
<Icon name="verified" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex items-center justify-between gap-2">
<h4 className="font-label-lg text-label-lg text-on-surface truncate">Store Activation &amp; Official Badge</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0" id="badge-step-5">Final Step</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Instant live listing on SwiftCart Kampala search catalog.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="pin_drop" className="text-[18px] text-primary" />
<span className="font-label-md text-label-md text-on-surface">Inspected Premise Location</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Geo-Pinned
        </span>
</div>
<div className="w-full h-28 bg-cover bg-center rounded-lg flex items-end p-2 relative shadow-inner" data-location="Pioneer Mall, Kampala, Uganda" style={{"backgroundImage":"url('/images/44cb337a0902bc0f.webp')"}}>
<div className="bg-surface/90 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-2">
<Icon name="store" className="text-[16px] text-primary" />
<span className="font-label-sm text-label-sm text-on-surface">G-14 Lower Concourse, Burton St. Entrance</span>
</div>
</div>
</div>
</section>

<section className="px-margin py-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">

<div className="flex items-start gap-space-md p-space-md rounded-xl bg-tertiary-fixed/30 text-on-surface">
<div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="shield" className="text-[20px]" />
</div>
<div className="min-w-0 flex-1">
<h4 className="font-label-md text-label-md text-on-surface">Swift Escrow Protected</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Your money is held securely by SwiftCart until you confirm customer delivery. Payouts are instant to MTN MoMo or Airtel Money.
          </p>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Need Urgent Verification?</span>
<div className="grid grid-cols-1 gap-2 mt-1">
<a className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors" href="https://wa.me/256700123456" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center">
<Icon name="chat" className="text-[18px]" />
</span>
<div>
<p className="font-label-md text-label-md text-on-surface">WhatsApp Merchant Desk</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">+256 700 123 456 (9 AM - 6 PM)</p>
</div>
</div>
<Icon name="chevron_right" className="text-[18px] text-on-surface-variant" />
</a>
<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
<Icon name="location_city" className="text-[18px]" />
</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Pioneer Mall Level 2 Merchant Hub</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Walk-in physical identity validation desk</p>
</div>
</div>
<Icon name="schedule" className="text-[18px] text-on-surface-variant" />
</div>
</div>
</div>
</div>
</section>

<section className="sticky bottom-0 w-full bg-surface/90 backdrop-blur-xl p-margin shadow-[0_-4px_20px_rgba(14,27,77,0.06)] mt-space-md z-40">
<div className="flex items-center gap-space-sm">
<button className="flex-1 h-12 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 shadow-sm active:scale-98 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[18px] text-on-surface-variant" />
        Modify Details
      </button>
<button className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 shadow-[0px_4px_14px_rgba(218,55,0,0.30)] active:scale-98 transition-transform" type="button" onClick={() => setDrawerOpen((prev) => !prev)}>
<Icon name="menu_book" className="text-[18px]" />
        Seller Guide
      </button>
</div>
</section>
</div>
</main>
    </div>
  );
};

export default Mobile;
