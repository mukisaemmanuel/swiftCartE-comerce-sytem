// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/payment_methods_swiftcart_uganda_1/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    @layer base {
      html, body {
        width: 100vw;
        margin: 0;
        padding: 0;
      }
      body {
        overscroll-behavior: none;
      }
      .pb-safe {
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }
      .pt-safe {
        padding-top: env(safe-area-inset-top, 0px);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-40 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 transition-all">
<div className="h-14 px-4 flex items-center justify-between">
<button aria-label="Go back" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high/60 active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[24px]" />
</button>
<div className="flex-1 text-center px-2">
<h1 className="font-headline-sm text-[18px] leading-snug font-bold text-on-surface tracking-tight">Payment Methods</h1>
</div>
<button aria-label="Escrow & Payment Help" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 active:scale-95 transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help_outline" className="text-[22px]" />
</button>
</div>
</header><main className="flex-1 w-full pt-[calc(3.5rem+env(safe-area-inset-top,0px))] pb-32">
<div className="px-4 flex flex-col gap-5 pt-3">

<section className="relative overflow-hidden bg-gradient-to-br from-[#006947]/[0.08] via-surface-container-lowest to-surface-container-low rounded-2xl p-4 border border-[#006947]/20 shadow-[0_2px_12px_rgba(0,105,71,0.06)]">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-[#004f34] flex items-center justify-center shrink-0 shadow-sm border border-[#4edea3]/40">
<Icon name="verified_user" className="text-[22px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-[13px] font-bold text-on-surface tracking-wide uppercase">Swift Escrow Protected</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-[#006947] text-[11px] font-bold tracking-tight">
<span className="w-1.5 h-1.5 rounded-full bg-[#006947] animate-pulse"></span>
                Active
              </span>
</div>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed font-normal">
              Your money is held safely by SwiftCart until you confirm delivery with your 6-digit delivery code.
            </p>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<div className="flex items-center justify-between px-0.5">
<div className="flex items-center gap-2">
<Icon name="phone_android" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-[16px] font-bold text-on-surface">Mobile Money Accounts</h2>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-semibold tracking-wide">
            Uganda Primary
          </span>
</div>

<div className="group relative bg-surface-container-lowest rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 hover:border-amber-300 transition-all overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFCC00]"></div>
<div className="flex items-start justify-between gap-3 pl-1">
<div className="flex items-start gap-3.5 min-w-0">

<div className="w-12 h-12 rounded-xl bg-[#FFCC00] flex flex-col items-center justify-center shrink-0 shadow-sm border border-amber-400/30">
<span className="font-headline-sm text-[13px] font-black text-[#111111] leading-none tracking-tight">MoMo</span>
<span className="text-[9px] font-extrabold text-[#111111]/80 uppercase mt-0.5 tracking-tighter">MTN</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-[15px] font-bold text-on-surface leading-tight">MTN Mobile Money</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold tracking-tight">
                    Default Payment
                  </span>
</div>
<span className="text-[15px] font-bold text-on-surface tracking-wide mt-1 font-mono">
                  +256 772 345 678
                </span>
<span className="text-xs text-on-surface-variant font-medium mt-0.5">
                  Kato Joshua Mukasa
                </span>
</div>
</div>

<button aria-label="MTN MoMo options" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[20px]" />
</button>
</div>

<div className="mt-3.5 pt-3 border-t border-surface-container/60 pl-1 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
<Icon name="bolt" className="text-amber-600 text-[16px]" />
<span>Instant <strong className="text-on-surface">*165#</strong> USSD prompt</span>
</div>
<div className="flex items-center gap-1 text-[#006947] text-xs font-semibold">
<Icon name="check_circle" className="text-[16px]" />
<span>Linked</span>
</div>
</div>
</div>

<div className="group relative bg-surface-container-lowest rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 hover:border-red-300 transition-all overflow-hidden">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3.5 min-w-0">

<div className="w-12 h-12 rounded-xl bg-[#ED1B24] flex items-center justify-center shrink-0 shadow-sm border border-red-600/30">
<span className="font-headline-sm text-[13px] font-extrabold text-white tracking-tighter lowercase">airtel</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-[15px] font-bold text-on-surface leading-tight">Airtel Money</span>
</div>
<span className="text-[15px] font-bold text-on-surface tracking-wide mt-1 font-mono">
                  +256 755 890 123
                </span>
<span className="text-xs text-on-surface-variant font-medium mt-0.5">
                  Kato Joshua Mukasa
                </span>
</div>
</div>

<button aria-label="Airtel Money options" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[20px]" />
</button>
</div>

<div className="mt-3.5 pt-3 border-t border-surface-container/60 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
<Icon name="touch_app" className="text-red-600 text-[16px]" />
<span>USSD <strong className="text-on-surface">*185#</strong> ready</span>
</div>
<button className="px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary-fixed/60 hover:bg-primary-fixed active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
              Make Default
            </button>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<div className="flex items-center justify-between px-0.5">
<div className="flex items-center gap-2">
<Icon name="credit_card" className="text-secondary text-[20px]" />
<h2 className="font-headline-sm text-[16px] font-bold text-on-surface">Cards &amp; Banking</h2>
</div>
<span className="text-xs text-on-surface-variant font-medium">Visa &amp; Mastercard</span>
</div>

<div className="relative bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-surface-container-low rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 overflow-hidden">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3.5 min-w-0">

<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2341] to-[#1F436E] text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
<span className="font-headline-sm text-[12px] font-extrabold tracking-wider leading-none">VISA</span>
<span className="text-[8px] text-white/70 tracking-widest font-bold mt-0.5 uppercase">Debit</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-[15px] font-bold text-on-surface leading-tight">Stanbic Bank</span>
<Icon name="contactless" className="text-[16px] text-on-surface-variant" />
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-[14px] font-bold font-mono tracking-wider text-on-surface">•••• 4092</span>
<span className="text-xs text-on-surface-variant font-medium">Exp 08/27</span>
</div>
<span className="text-xs text-on-surface-variant font-medium mt-0.5">Kato J Mukasa</span>
</div>
</div>
<button aria-label="Card options" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="more_vert" className="text-[20px]" />
</button>
</div>
<div className="mt-3.5 pt-3 border-t border-surface-container/60 flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant text-[11px] font-semibold">
<Icon name="verified" className="text-[14px]" />
<span>3D-Secure Protected</span>
</div>
<button className="px-3 py-1 rounded-full text-xs font-bold text-primary hover:bg-primary-fixed/40 active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
              Make Default
            </button>
</div>
</div>
</section>

<section className="flex flex-col gap-2.5">
<span className="font-label-lg text-xs font-bold text-on-surface-variant uppercase tracking-wider px-0.5">
          Add Payment Method
        </span>

<button className="w-full bg-surface-container-lowest rounded-2xl p-3.5 border border-outline-variant/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-between text-left active:scale-[0.99] transition-all hover:bg-surface-container-lowest/80 group" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-fixed/80 text-primary-container flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
<Icon name="add" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-[14px] font-bold text-on-surface leading-tight">+ Add Mobile Money Wallet</span>
<span className="text-xs text-on-surface-variant mt-0.5">MTN MoMo or Airtel Money number</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant group-hover:text-on-surface text-[20px] transition-colors" />
</button>

<button className="w-full bg-surface-container-lowest rounded-2xl p-3.5 border border-outline-variant/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-between text-left active:scale-[0.99] transition-all hover:bg-surface-container-lowest/80 group" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed/80 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
<Icon name="add_card" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-[14px] font-bold text-on-surface leading-tight">+ Add Bank Card</span>
<span className="text-xs text-on-surface-variant mt-0.5">Visa, Mastercard with 3D-Secure</span>
</div>
</div>
<Icon name="chevron_right" className="text-on-surface-variant group-hover:text-on-surface text-[20px] transition-colors" />
</button>
</section>

<section className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-3.5">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-primary-fixed/80 flex items-center justify-center text-primary-container">
<Icon name="info" className="text-[18px]" />
</div>
<h3 className="font-headline-sm text-[15px] font-bold text-on-surface">How Swift Escrow Works</h3>
</div>
<div className="relative flex flex-col gap-4 pl-1">

<div className="flex items-start gap-3 relative">
<div className="w-7 h-7 rounded-full bg-primary-container text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm z-10">
              1
            </div>
<div className="flex-1 min-w-0 pt-0.5">
<h4 className="font-label-lg text-[13px] font-bold text-on-surface leading-tight">
                Approve instant USSD prompt (*165# or *185#)
              </h4>
<p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                Approve the payment PIN prompt sent straight to your phone.
              </p>
</div>
</div>

<div className="flex items-start gap-3 relative">
<div className="w-7 h-7 rounded-full bg-primary-container text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm z-10">
              2
            </div>
<div className="flex-1 min-w-0 pt-0.5">
<h4 className="font-label-lg text-[13px] font-bold text-on-surface leading-tight">
                Funds secured in Escrow (Locked until delivery)
              </h4>
<p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                Your payment is safely reserved. The seller is not paid until you inspect the order.
              </p>
</div>
</div>

<div className="flex items-start gap-3 relative">
<div className="w-7 h-7 rounded-full bg-primary-container text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm z-10">
              3
            </div>
<div className="flex-1 min-w-0 pt-0.5">
<h4 className="font-label-lg text-[13px] font-bold text-on-surface leading-tight">
                Inspect goods &amp; release with 6-digit delivery code
              </h4>
<p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                Check your items with the boda rider. Only share your code once satisfied to trigger merchant payout.
              </p>
</div>
</div>
</div>
</section>
</div>
</main><div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl border-t border-surface-container-high/80 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
<div className="max-w-md mx-auto w-full">
<button className="w-full h-13 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-white font-label-lg text-[15px] font-bold shadow-[0_6px_20px_rgba(218,55,0,0.35)] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[22px]" />
<span>+ Add New Payment Method</span>
</button>
</div>
</div><div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-end justify-center" id="momoSheet">
<div className="w-full max-w-md bg-surface-container-lowest rounded-t-3xl p-5 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom duration-200">
<div className="w-12 h-1 bg-surface-container-highest rounded-full self-center mb-1"></div>
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-[18px] font-bold text-on-surface">Add Mobile Money Wallet</h3>
<p className="text-xs text-on-surface-variant mt-0.5">Enter registered Uganda mobile number</p>
</div>
<button className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 transition-all" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="grid grid-cols-2 gap-3 pt-1">
<button className="p-3 rounded-2xl bg-[#FFCC00]/15 border-2 border-[#FFCC00] flex items-center gap-2.5 transition-all" id="mtnBtn" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-lg bg-[#FFCC00] flex items-center justify-center font-black text-xs text-[#111111]">
            MoMo
          </div>
<div className="text-left">
<div className="font-bold text-xs text-on-surface">MTN Uganda</div>
<div className="text-[11px] text-on-surface-variant font-mono">077 / 078</div>
</div>
</button>
<button className="p-3 rounded-2xl bg-surface-container-low border-2 border-transparent flex items-center gap-2.5 opacity-80 transition-all" id="airtelBtn" type="button" onClick={() => alertToast('Action triggered')}>
<div className="w-8 h-8 rounded-lg bg-[#ED1B24] flex items-center justify-center font-black text-xs text-white">
            airtel
          </div>
<div className="text-left">
<div className="font-bold text-xs text-on-surface">Airtel Uganda</div>
<div className="text-[11px] text-on-surface-variant font-mono">070 / 075</div>
</div>
</button>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-on-surface" htmlFor="momoPhone">Registered Mobile Number</label>
<div className="flex items-center h-13 rounded-2xl bg-surface-container-low border border-outline-variant/40 px-3.5 focus-within:border-primary focus-within:bg-surface-container-lowest transition-all">
<span className="font-bold text-sm text-on-surface tracking-wide shrink-0">+256</span>
<div className="w-px h-5 bg-outline-variant/60 mx-3 shrink-0"></div>
<input className="w-full bg-transparent font-headline-sm text-[16px] text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none" id="momoPhone" placeholder="772 123 456" type="tel" />
</div>
<p className="text-[11px] text-on-surface-variant leading-relaxed">
          You will receive a zero-charge test USSD prompt to authorize linkage.
        </p>
</div>
<button className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-white font-label-lg text-sm font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform mt-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="verified" className="text-[18px]" />
<span>Verify &amp; Save Wallet</span>
</button>
</div>
</div><div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4" id="helpModal">
<div className="w-full max-w-sm bg-surface-container-lowest rounded-3xl p-5 shadow-2xl flex flex-col gap-3.5">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-[#004f34] flex items-center justify-center shrink-0">
<Icon name="security" className="text-[22px]" />
</div>
<div>
<h3 className="font-headline-sm text-base font-bold text-on-surface">Swift Escrow Protection</h3>
<p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
          SwiftCart safely holds your payments in escrow until you personally inspect your items and share your 6-digit release code with the boda courier.
        </p>
</div>
<div className="pt-2">
<button className="w-full py-2.5 rounded-xl bg-surface-container-high text-on-surface text-xs font-bold active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Got It
        </button>
</div>
</div>
</div>
    </div>
  );
};

export default Screen;
