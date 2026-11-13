// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/vouchers_discounts_swiftcart_uganda/code.html
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
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /></div><div className="flex-1 text-center px-space-xs"><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Order Tracking</h1></div><div className="flex items-center gap-space-xs"><button aria-label="Support or Help" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full px-margin pb-28 space-y-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm mt-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="redeem" className="text-primary-container text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Redeem Voucher Code</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant flex items-center gap-1">
<Icon name="bolt" className="text-[12px] text-tertiary" /> Auto-applies
      </span>
</div>
<div className="flex items-center gap-space-xs">
<div className="relative flex-1">
<input className="w-full h-12 bg-surface-container-low text-on-surface uppercase font-headline-sm text-[15px] tracking-wider rounded-xl pl-3 pr-8 focus:bg-surface-container-lowest focus:outline-none transition-colors" id="promoInput" placeholder="e.g. KIKUUBO25" style={{"border":"1px solid rgba(14, 27, 77, 0.1)"}} type="text" />
<button aria-label="Clear input" className="absolute right-2 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface p-1" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="cancel" className="text-[18px]" />
</button>
</div>
<button className="h-12 px-space-lg rounded-xl text-on-primary font-label-lg text-label-lg flex items-center justify-center shadow-md active:scale-95 transition-transform" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)","boxShadow":"0px 4px 14px rgba(218, 55, 0, 0.28)"}} type="button" onClick={() => alertToast('Action triggered')}>
        Apply
      </button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 pt-0.5">
<Icon name="verified_user" className="text-tertiary text-[16px]" />
      Voucher discount applies directly to your Swift Escrow deposit.
    </p>
</section>

<section className="flex items-center bg-surface-container-high p-1 rounded-xl">
<button className="tab-btn flex-1 py-2 text-center rounded-lg font-label-md text-label-md transition-all bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Active</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px]">4</span>
</button>
<button className="tab-btn flex-1 py-2 text-center rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Used</span>
<span className="font-label-sm text-[11px] opacity-70">(6)</span>
</button>
<button className="tab-btn flex-1 py-2 text-center rounded-lg font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1.5" type="button" onClick={() => alertToast('Action triggered')}>
<span>Expired</span>
<span className="font-label-sm text-[11px] opacity-70">(2)</span>
</button>
</section>

<section className="flex flex-col space-y-space-md" id="vouchersList">

<div className="voucher-card relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" style={{"boxShadow":"0px 2px 10px rgba(14, 27, 77, 0.05)"}}>

<div className="absolute -left-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>
<div className="absolute -right-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>

<div className="p-space-lg pb-space-md flex gap-space-md items-start">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed flex flex-col items-center justify-center shrink-0 text-primary">
<Icon name="two_wheeler" className="text-[28px]" />
<span className="font-label-sm text-[9px] font-extrabold uppercase tracking-tight">Express</span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-[10px] flex items-center gap-1">
<Icon name="schedule" className="text-[12px]" /> 2 Days Left
            </span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="shield" className="text-[13px]" /> Escrow Verified
            </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">100% Free Boda Delivery</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Valid across Central Kampala, Nakawa, Bugolobi &amp; Kololo trade zones. Min. spend UGX 35,000.</p>
</div>
</div>

<div className="relative px-5 py-1 flex items-center">
<div className="w-full border-t-2 border-dashed border-outline-variant/60"></div>
</div>

<div className="p-space-lg pt-space-xs space-y-space-sm bg-surface-container-lowest">
<div className="flex items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-xl">
<span className="font-body-sm text-body-sm text-outline">Code:</span>
<code className="font-headline-sm text-headline-sm text-primary tracking-wider text-[15px]">SWIFTBODA</code>
<button aria-label="Copy voucher SWIFTBODA" className="text-on-surface-variant hover:text-primary active:scale-90 transition-transform p-0.5 ml-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
<button className="h-10 px-space-lg rounded-xl text-on-primary font-label-lg text-label-lg flex items-center gap-1 shadow-sm active:scale-95 transition-transform shrink-0" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)"}} type="button" onClick={() => alertToast('Action triggered')}>
<span>Use Now</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
<button className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1 hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span>Terms &amp; Eligible Hubs</span>
<Icon name="expand_more" className="text-[16px] transition-transform" />
</button>
<div className="hidden text-on-surface-variant font-body-sm text-[12px] bg-surface-container-low p-space-sm rounded-lg space-y-1" id="terms-1">
<p>• Valid strictly for Swift Express Boda delivery riders within 8km radius of Kampala Central.</p>
<p>• Minimum basket size: UGX 35,000 paid through Swift Escrow.</p>
<p>• Cannot be merged with merchant flash promos or storewide vouchers.</p>
</div>
</div>
</div>

<div className="voucher-card relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" style={{"boxShadow":"0px 2px 10px rgba(14, 27, 77, 0.05)"}}>

<div className="absolute -left-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>
<div className="absolute -right-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>

<div className="p-space-lg pb-space-md flex gap-space-md items-start">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex flex-col items-center justify-center shrink-0 text-secondary">
<Icon name="devices" className="text-[28px]" />
<span className="font-label-sm text-[9px] font-extrabold uppercase tracking-tight">Kikuubo</span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px]">
              Expires Nov 15
            </span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="verified" className="text-[13px]" /> Verified Tech Hub
            </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">UGX 25,000 OFF Tech</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Smartphones, accessories &amp; solar gear from Pioneer Mall &amp; Kikuubo wholesale dealers. Min. spend UGX 120,000.</p>
</div>
</div>

<div className="relative px-5 py-1 flex items-center">
<div className="w-full border-t-2 border-dashed border-outline-variant/60"></div>
</div>

<div className="p-space-lg pt-space-xs space-y-space-sm bg-surface-container-lowest">
<div className="flex items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-xl">
<span className="font-body-sm text-body-sm text-outline">Code:</span>
<code className="font-headline-sm text-headline-sm text-primary tracking-wider text-[15px]">KIKUUBO25</code>
<button aria-label="Copy voucher KIKUUBO25" className="text-on-surface-variant hover:text-primary active:scale-90 transition-transform p-0.5 ml-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
<button className="h-10 px-space-lg rounded-xl text-on-primary font-label-lg text-label-lg flex items-center gap-1 shadow-sm active:scale-95 transition-transform shrink-0" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)"}} type="button" onClick={() => alertToast('Action triggered')}>
<span>Use Now</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
<button className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1 hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span>Terms &amp; Verified Vendors</span>
<Icon name="expand_more" className="text-[16px] transition-transform" />
</button>
<div className="hidden text-on-surface-variant font-body-sm text-[12px] bg-surface-container-low p-space-sm rounded-lg space-y-1" id="terms-2">
<p>• Applicable only on items marked with the Kikuubo or Pioneer Verified badge.</p>
<p>• Escrow protection covers item inspection upon delivery before disbursement.</p>
<p>• One redemption per registered mobile number.</p>
</div>
</div>
</div>

<div className="voucher-card relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" style={{"boxShadow":"0px 2px 10px rgba(14, 27, 77, 0.05)"}}>

<div className="absolute -left-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>
<div className="absolute -right-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>

<div className="p-space-lg pb-space-md flex gap-space-md items-start">
<div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex flex-col items-center justify-center shrink-0 text-tertiary">
<Icon name="celebration" className="text-[28px]" />
<span className="font-label-sm text-[9px] font-extrabold uppercase tracking-tight">Karibu</span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-[10px] flex items-center gap-0.5">
<Icon name="star" className="text-[11px]" /> First Order
            </span>
<span className="font-label-sm text-label-sm text-outline">All Stores</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">15% OFF First Purchase</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Warm welcome rebate capped at UGX 40,000 for new shoppers. Applies to any store checkout.</p>
</div>
</div>

<div className="relative px-5 py-1 flex items-center">
<div className="w-full border-t-2 border-dashed border-outline-variant/60"></div>
</div>

<div className="p-space-lg pt-space-xs space-y-space-sm bg-surface-container-lowest">
<div className="flex items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-xl">
<span className="font-body-sm text-body-sm text-outline">Code:</span>
<code className="font-headline-sm text-headline-sm text-primary tracking-wider text-[15px]">KARIBU15</code>
<button aria-label="Copy voucher KARIBU15" className="text-on-surface-variant hover:text-primary active:scale-90 transition-transform p-0.5 ml-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
<button className="h-10 px-space-lg rounded-xl text-on-primary font-label-lg text-label-lg flex items-center gap-1 shadow-sm active:scale-95 transition-transform shrink-0" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)"}} type="button" onClick={() => alertToast('Action triggered')}>
<span>Use Now</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
<button className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1 hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span>Terms &amp; Eligibility</span>
<Icon name="expand_more" className="text-[16px] transition-transform" />
</button>
<div className="hidden text-on-surface-variant font-body-sm text-[12px] bg-surface-container-low p-space-sm rounded-lg space-y-1" id="terms-3">
<p>• Only eligible on buyer account initial escrow order.</p>
<p>• Capped at UGX 40,000 maximum discount deduction.</p>
</div>
</div>
</div>

<div className="voucher-card relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" style={{"boxShadow":"0px 2px 10px rgba(14, 27, 77, 0.05)"}}>

<div className="absolute -left-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>
<div className="absolute -right-3 top-[108px] w-6 h-6 rounded-full bg-surface z-10"></div>

<div className="p-space-lg pb-space-md flex gap-space-md items-start">
<div className="w-14 h-14 rounded-2xl bg-error-container flex flex-col items-center justify-center shrink-0 text-error">
<Icon name="contactless" className="text-[28px]" />
<span className="font-label-sm text-[9px] font-extrabold uppercase tracking-tight">Airtel</span>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px]">
              All Month
            </span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<Icon name="payments" className="text-[13px]" /> 075* / 070*
            </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">UGX 5,000 Airtel Rebate</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Instant credit into escrow when initiating payment via Airtel Money merchant push prompt.</p>
</div>
</div>

<div className="relative px-5 py-1 flex items-center">
<div className="w-full border-t-2 border-dashed border-outline-variant/60"></div>
</div>

<div className="p-space-lg pt-space-xs space-y-space-sm bg-surface-container-lowest">
<div className="flex items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-xl">
<span className="font-body-sm text-body-sm text-outline">Code:</span>
<code className="font-headline-sm text-headline-sm text-primary tracking-wider text-[15px]">AIRTELUG5</code>
<button aria-label="Copy voucher AIRTELUG5" className="text-on-surface-variant hover:text-primary active:scale-90 transition-transform p-0.5 ml-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="content_copy" className="text-[18px]" />
</button>
</div>
<button className="h-10 px-space-lg rounded-xl text-on-primary font-label-lg text-label-lg flex items-center gap-1 shadow-sm active:scale-95 transition-transform shrink-0" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)"}} type="button" onClick={() => alertToast('Action triggered')}>
<span>Use Now</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
<button className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1 hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
<span>Payment Terms</span>
<Icon name="expand_more" className="text-[16px] transition-transform" />
</button>
<div className="hidden text-on-surface-variant font-body-sm text-[12px] bg-surface-container-low p-space-sm rounded-lg space-y-1" id="terms-4">
<p>• Requires Airtel Money prompt confirmation on phone number matching account.</p>
<p>• Cash rebate is instantly credited upon completed deposit release.</p>
</div>
</div>
</div>
</section>

<footer className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center shrink-0 text-tertiary">
<Icon name="lock" className="text-[26px]" />
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface">Swift Escrow Protected</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
        Escrow Protected: your money is held by SwiftCart until you confirm delivery.
      </p>
</div>
</footer>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-space-lg py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-xl flex items-center gap-2 opacity-0 pointer-events-none transition-all duration-200" id="toastMessage">
<Icon name="check_circle" className="text-tertiary-fixed text-[18px]" />
<span id="toastText">Code copied to clipboard!</span>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
