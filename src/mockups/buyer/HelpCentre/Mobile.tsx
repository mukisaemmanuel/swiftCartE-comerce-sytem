// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/help_centre_support_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-14 px-space-sm flex items-center justify-between relative"><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">Help Centre</h1><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="share" className="text-[22px]" /></button></div></header><main className="flex-1 flex flex-col relative w-full pt-14 pb-safe bg-surface"><div className="flex flex-col w-full pb-8">

<div className="px-margin pt-space-md pb-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-primary uppercase tracking-wider">SwiftCart Support Desk</p>
<p className="font-headline-md text-headline-md text-on-surface">How can we assist you today?</p>
</div>
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-sm shrink-0">
<Icon name="support_agent" className="text-[26px]" />
</div>
</div>

<div className="relative w-full shadow-sm">
<div className="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-on-surface-variant">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full h-12 pl-11 pr-space-md rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="supportSearchInput" placeholder="Search help topics, escrow rules, boda issues..." type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
</div>

<div className="flex items-center gap-space-sm px-space-md py-space-xs bg-tertiary/10 rounded-full w-fit">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">All Uganda Systems &amp; MoMo Gateways Operational</span>
</div>
</div>

<div className="px-margin flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Direct Assistance Channels</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Average reply &lt; 2m</span>
</div>
<div className="flex flex-col gap-space-md">

<a className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-start gap-space-md active:scale-[0.98] transition-all" href="https://wa.me/256700000000" rel="noopener noreferrer" target="_blank" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-sm">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.37C9.37 7.37 9.11 7.43 8.89 7.67C8.67 7.91 8.05 8.49 8.05 9.68C8.05 10.87 8.92 12.02 9.04 12.18C9.16 12.34 10.74 14.77 13.16 15.82C13.74 16.07 14.19 16.22 14.54 16.33C15.13 16.52 15.66 16.49 16.09 16.43C16.57 16.36 17.56 15.83 17.77 15.25C17.97 14.67 17.97 14.17 17.91 14.07C17.85 13.97 17.69 13.91 17.44 13.79C17.2 13.67 16 13.08 15.77 13C15.55 12.91 15.39 12.87 15.22 13.12C15.06 13.36 14.59 13.91 14.45 14.07C14.31 14.24 14.17 14.26 13.92 14.13C13.68 14.01 12.89 13.75 11.96 12.92C11.23 12.27 10.74 11.47 10.6 11.22C10.45 10.98 10.58 10.84 10.71 10.72C10.82 10.61 10.96 10.43 11.08 10.28C11.21 10.14 11.25 10.04 11.33 9.87C11.41 9.71 11.37 9.56 11.31 9.44C11.25 9.32 10.78 8.16 10.58 7.68C10.39 7.21 10.19 7.28 10.04 7.27C9.89 7.27 9.73 7.37 9.53 7.37Z"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs mb-0.5">
<span className="font-headline-sm text-[16px] leading-[20px] text-on-surface font-bold">Chat on WhatsApp</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[9px] font-extrabold uppercase">24/7 Live</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Instant response from Kampala central support team.</p>
<div className="mt-space-sm flex items-center text-tertiary font-label-md text-label-md font-bold gap-1">
<span className="">Open WhatsApp Chat</span>
<Icon name="arrow_forward" className="text-[16px]" />
</div>
</div>
</a>

<a className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-start gap-space-md active:scale-[0.98] transition-all" href="tel:0800200400" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
<Icon name="call" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs mb-0.5">
<span className="font-headline-sm text-[16px] leading-[20px] text-on-surface font-bold">0800 200 400</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[9px] font-extrabold uppercase">Toll-Free</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Free calls from MTN &amp; Airtel lines. Available 7 AM – 10 PM.</p>
<div className="mt-space-sm flex items-center text-secondary font-label-md text-label-md font-bold gap-1">
<span className="">Call Now</span>
<Icon name="phone_enabled" className="text-[16px]" />
</div>
</div>
</a>

<div className="grid grid-cols-2 gap-space-md">
<button className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-space-sm">
<Icon name="smart_toy" className="text-[22px]" />
</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Escrow Officer</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Live dispute handling</p>
</div>
<span className="text-primary font-label-sm text-label-sm font-bold mt-space-md flex items-center gap-0.5">
            Launch Chat <Icon name="chevron_right" className="text-[14px]" />
</span>
</button>
<a className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all" href="mailto:support@swiftcart.ug" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-space-sm">
<Icon name="mail" className="text-[22px]" />
</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Email Desk</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">support@swiftcart.ug</p>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm font-bold mt-space-md flex items-center gap-0.5">
            Write Ticket <Icon name="chevron_right" className="text-[14px]" />
</span>
</a>
</div>
</div>
</div>

<div className="mt-space-xl px-margin flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Browse Help Topics</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">5 Specialized Guides</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md active:bg-surface-container transition-colors cursor-pointer">
<div className="w-11 h-11 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-[15px] leading-[20px] text-on-surface font-bold truncate">Swift Escrow Protection</h2>
<span className="px-1.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[8px] uppercase font-black rounded">Shielded</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">Escrow Protected: money held by SwiftCart until 6-digit Delivery Code confirmed</p>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md active:bg-surface-container transition-colors cursor-pointer">
<div className="w-11 h-11 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-[15px] leading-[20px] text-on-surface font-bold truncate">Boda Dispatch &amp; Tracking</h2>
<span className="px-1.5 py-0.5 bg-primary-fixed-dim text-on-primary-fixed-variant font-label-sm text-[8px] uppercase font-black rounded">Express</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">Swift Express delivery times, boda rates across Kampala &amp; Wakiso</p>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md active:bg-surface-container transition-colors cursor-pointer">
<div className="w-11 h-11 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
<Icon name="assignment_return" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-[15px] leading-[20px] text-on-surface font-bold truncate">Returns, Refunds &amp; Disputes</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">7-day buyer warranty, instant MTN MoMo refunds &amp; evidence filing</p>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md active:bg-surface-container transition-colors cursor-pointer">
<div className="w-11 h-11 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
<Icon name="payments" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-[15px] leading-[20px] text-on-surface font-bold truncate">Mobile Money &amp; Payments</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">MTN MoMo &amp; Airtel Money authorization, zero fees, failed prompts</p>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md active:bg-surface-container transition-colors cursor-pointer">
<div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-[15px] leading-[20px] text-on-surface font-bold truncate">Seller Guarantees &amp; Verification</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">Official store benchmarks, counter-fraud policy &amp; spot inspections</p>
</div>
<Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
</div>
</div>
</div>

<div className="mt-space-xl px-margin flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Frequently Asked Questions</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Kampala Guide</span>
</div>
<div className="flex flex-col gap-space-sm" id="faqAccordion">

<div className="faq-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all">
<button className="faq-toggle w-full p-space-md text-left flex items-start justify-between gap-space-sm" onClick={() => alertToast('Action triggered')}>
<span className="font-headline-sm text-[14px] leading-[20px] text-on-surface font-bold">When should I give the 6-digit Delivery Code to the boda rider?</span>
<Icon name="expand_more" className="text-on-surface-variant text-[20px] transition-transform shrink-0 mt-0.5" />
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-space-md">
<div className="pt-0 pb-space-md text-body-sm font-body-sm text-on-surface-variant"><div className="p-space-sm bg-surface-container-low rounded-lg mb-2 text-primary font-label-md text-label-md flex items-center gap-1.5"><Icon name="gpp_maybe" className="text-[18px]" /><span className="">Inspection Rule: Handover Inspection First!</span></div>Give this code to the rider ONLY at handover after you inspect your goods. Sharing the 6-digit Delivery Code releases escrow payment immediately to the merchant.</div>
</div>
</div>

<div className="faq-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all">
<button className="faq-toggle w-full p-space-md text-left flex items-start justify-between gap-space-sm" onClick={() => alertToast('Action triggered')}>
<span className="font-headline-sm text-[14px] leading-[20px] text-on-surface font-bold">What if the MTN MoMo payment prompt doesn't pop up?</span>
<Icon name="expand_more" className="text-on-surface-variant text-[20px] transition-transform shrink-0 mt-0.5" />
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-space-md">
<div className="pt-0 pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            If network latency delays the USSD popup on your screen:
            <ol className="list-decimal pl-5 mt-2 space-y-1">
<li className="">Dial <span className="font-bold text-on-surface">*165#</span> on your MTN phone.</li>
<li className="">Select option <strong>My Account</strong>, then choose <strong>Approvals</strong>.</li>
<li className="">Enter your MoMo PIN to authorize the pending SwiftCart escrow hold.</li>
</ol>
            For Airtel Money, dial <span className="font-bold text-on-surface">*185#</span> &gt; <strong>Pending Approvals</strong>.
          </div>
</div>
</div>

<div className="faq-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all">
<button className="faq-toggle w-full p-space-md text-left flex items-start justify-between gap-space-sm" onClick={() => alertToast('Action triggered')}>
<span className="font-headline-sm text-[14px] leading-[20px] text-on-surface font-bold">How do I return a defective item?</span>
<Icon name="expand_more" className="text-on-surface-variant text-[20px] transition-transform shrink-0 mt-0.5" />
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-space-md">
<div className="pt-0 pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            Navigate to <strong>Account &gt; My Orders</strong>, locate the purchase, and tap <strong>Request Return</strong> within 7 days of delivery. Attach a quick photo of the issue. A SwiftCart Boda will collect the parcel from your registered location free of charge. Your MoMo wallet will be credited once inspection logs complete.
          </div>
</div>
</div>

<div className="faq-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all">
<button className="faq-toggle w-full p-space-md text-left flex items-start justify-between gap-space-sm" onClick={() => alertToast('Action triggered')}>
<span className="font-headline-sm text-[14px] leading-[20px] text-on-surface font-bold">Do you deliver outside Kampala?</span>
<Icon name="expand_more" className="text-on-surface-variant text-[20px] transition-transform shrink-0 mt-0.5" />
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-space-md">
<div className="pt-0 pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            Yes! We offer standard doorstep deliveries across the Greater Kampala Metropolitan Area (Entebbe, Wakiso, Mukono, Kira). For upcountry orders, we partner with Posta Uganda and regional coaches serving Jinja, Mbarara, Gulu, Fort Portal, and Mbale with 24 to 48-hour pickup counters.
          </div>
</div>
</div>
</div>
</div>

<div className="mt-space-xl px-margin">
<div className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col items-center text-center gap-space-sm shadow-sm"><div className="w-10 h-10 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center"><Icon name="verified_user" className="text-[22px]" /></div><div className="flex flex-col gap-0.5"><p className="font-label-lg text-label-lg text-on-surface">SwiftCart Consumer Protection Hub</p><p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">Escrow Protected: your money is held by SwiftCart until you confirm delivery. Payments are processed by our secure payment partner.</p></div><div className="flex items-center gap-2 mt-space-xs text-[11px] font-label-md text-on-surface-variant"><span className="">KLA City Centre</span><span className="">•</span><span className="">Kampala, Uganda</span><span className="">•</span><span className="">v3.4.2</span></div></div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
