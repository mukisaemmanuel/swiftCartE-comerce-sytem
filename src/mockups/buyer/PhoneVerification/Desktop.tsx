// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/phone_verification_swiftcart_desktop_1/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-[#faf6f2] font-sans text-on-surface min-h-screen flex flex-col justify-between antialiased selection:bg-[#da3700] selection:text-white relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    @layer base {
      html, body { margin: 0; padding: 0; }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="w-full bg-white border-b border-orange-100/70 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#" onClick={() => alertToast('Action triggered')}>
<img alt="SwiftCart Uganda" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" src={`${assetBase}/images/0904559101697798.webp`} />
</a>
<div className="h-6 w-px bg-stone-200 hidden md:block"></div>
<div className="hidden md:flex items-center gap-2 text-xs font-semibold text-stone-600 bg-orange-50/70 px-3 py-1.5 rounded-full border border-orange-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Verified Secure Gateway</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-[#ae2a00] transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="storefront" className="text-lg" />
<span>Return to Marketplace</span>
</a>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help" className="text-lg" />
<span>Help &amp; FAQ</span>
</a>
<div className="hidden lg:flex items-center gap-2 pl-4 border-l border-stone-200 text-xs font-semibold text-stone-700 bg-stone-100/80 px-3 py-1.5 rounded-lg">
<Icon name="payments" className="text-sm text-[#da3700]" />
<span>UGX (USH) · Kampala (EAT)</span>
</div>
</div>
</div>
</header><main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex items-center justify-center">
<div className="w-full bg-white rounded-3xl shadow-2xl border border-orange-100/70 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">

<div className="lg:col-span-5 relative bg-gradient-to-br from-[#da3700] via-[#c63000] to-[#8d1d00] p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden">

<div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"></div>
<div className="absolute right-[-40px] bottom-10 opacity-5 pointer-events-none select-none">
<Icon name="verified_user" className="text-[280px]" />
</div>
<div className="relative z-10 space-y-6">

<div className="flex flex-wrap items-center gap-2.5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-amber-200 text-xs font-bold tracking-wide uppercase border border-amber-300/30">
<span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
              Uganda's Commerce Hub
            </span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
<Icon name="lock" className="text-sm" />
              256-Bit SSL Encrypted
            </span>
</div>

<div className="inline-block bg-white rounded-2xl p-3 shadow-lg">
<img alt="SwiftCart Uganda" className="h-10 w-auto object-contain" src={`${assetBase}/images/0904559101697798.webp`} />
</div>

<div className="space-y-2.5">
<h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Two-Factor Account Protection
            </h1>
<p className="text-orange-100 text-sm leading-relaxed font-normal">
              Every SwiftCart account is safeguarded by carrier-grade verification to protect escrow releases and Kampala doorstep handovers.
            </p>
</div>

<div className="space-y-3 pt-2">
<div className="flex items-start gap-3.5 bg-black/20 backdrop-blur-md p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
<div className="w-9 h-9 rounded-lg bg-orange-500/30 border border-orange-300/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="password" className="text-lg text-amber-200" />
</div>
<div>
<h4 className="text-xs font-bold text-white tracking-wide uppercase">Delivery Code Security</h4>
<p className="text-xs text-orange-100/90 leading-snug mt-0.5">Your 6-digit OTP guarantees only you can authorize parcel receipt and release escrow funds to merchants.</p>
</div>
</div>
<div className="flex items-start gap-3.5 bg-black/20 backdrop-blur-md p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
<div className="w-9 h-9 rounded-lg bg-orange-500/30 border border-orange-300/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="account_balance_wallet" className="text-lg text-amber-200" />
</div>
<div>
<h4 className="text-xs font-bold text-white tracking-wide uppercase">MTN &amp; Airtel MoMo Rails</h4>
<p className="text-xs text-orange-100/90 leading-snug mt-0.5">Direct carrier-grade binding ensures your mobile money wallet is safe from unauthorized debits.</p>
</div>
</div>
<div className="flex items-start gap-3.5 bg-black/20 backdrop-blur-md p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
<div className="w-9 h-9 rounded-lg bg-orange-500/30 border border-orange-300/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="two_wheeler" className="text-lg text-amber-200" />
</div>
<div>
<h4 className="text-xs font-bold text-white tracking-wide uppercase">45-Min SafeBoda Dispatch</h4>
<p className="text-xs text-orange-100/90 leading-snug mt-0.5">Fast authentication enables instant rider dispatch across Kampala, Wakiso, Mukono &amp; Entebbe.</p>
</div>
</div>
<div className="flex items-start gap-3.5 bg-black/20 backdrop-blur-md p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
<div className="w-9 h-9 rounded-lg bg-orange-500/30 border border-orange-300/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="verified" className="text-lg text-amber-200" />
</div>
<div>
<h4 className="text-xs font-bold text-white tracking-wide uppercase">100% Escrow Protection</h4>
<p className="text-xs text-orange-100/90 leading-snug mt-0.5">Payments held securely until you inspect goods in person.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-orange-100 font-medium">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span>1,480 orders protected today</span>
</div>
<div className="flex items-center gap-1 text-amber-200 font-semibold">
<Icon name="star" className="text-sm" />
<span>Kampala Rating 4.9/5</span>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
<div className="max-w-xl mx-auto w-full">

<div className="flex items-center justify-between mb-6 pb-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
<Icon name="verified_user" className="text-base text-emerald-700" />
<span>Two-Factor Account Authentication</span>
</div>
<div className="text-xs text-stone-500 font-semibold flex items-center gap-1 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-200">
<Icon name="schedule" className="text-xs text-stone-400" />
<span>Kampala (EAT) GMT+3</span>
</div>
</div>

<div className="mb-8">
<h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Verify Your Mobile Number
            </h2>
<p className="text-stone-600 text-sm mt-2 leading-relaxed">
              We sent a 6-digit verification code via SMS to
              <span className="font-bold text-stone-900 inline-flex items-center gap-1">
                +256 772 123 456
              </span>
<button className="text-[#da3700] hover:underline font-bold text-xs ml-1 inline-flex items-center hover:opacity-90" type="button" onClick={() => alertToast('Action triggered')}>
                (Change phone number)
              </button>
</p>
</div>

<div className="mb-6">
<label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Enter 6-Digit Verification Code
            </label>
<div className="grid grid-cols-6 gap-2 sm:gap-3.5 mb-3.5" id="otp-container">
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-stone-200 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white focus:ring-4 focus:ring-orange-500/10" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="5" />
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-stone-200 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white focus:ring-4 focus:ring-orange-500/10" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="8" />
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-stone-200 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white focus:ring-4 focus:ring-orange-500/10" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="2" />
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-stone-200 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white focus:ring-4 focus:ring-orange-500/10" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="9" />
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-[#da3700] bg-white ring-4 ring-orange-500/15 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="1" />
<input className="otp-box w-full h-14 sm:h-16 text-center text-2xl font-extrabold bg-[#faf6f2] text-stone-900 border-2 border-stone-200 rounded-xl transition-all outline-none focus:border-[#da3700] focus:bg-white focus:ring-4 focus:ring-orange-500/10" inputMode="numeric" maxLength={1} pattern="[0-9]*" type="text" value="4" />
</div>

<div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
<div className="flex items-center gap-1.5 text-stone-600">
<Icon name="timer" className="text-base text-[#da3700]" />
<span>Code expires in <span className="font-extrabold text-stone-900" id="countdown">01:45</span></span>
</div>
<span className="text-stone-400 text-xs">Standard carrier SMS rates apply</span>
</div>
</div>

<div className="mb-5">
<button className="w-full py-4 px-6 bg-gradient-to-r from-[#da3700] to-[#b32b00] hover:from-[#c23100] hover:to-[#9c2400] text-white font-bold text-base rounded-xl shadow-lg shadow-orange-600/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span>Verify &amp; Continue to SwiftCart</span>
<Icon name="arrow_forward" className="text-xl transition-transform group-hover:translate-x-1" />
</button>
</div>

<div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50/60 border border-orange-200/80 mb-6 flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 text-[#da3700]">
<Icon name="signal_cellular_alt" className="text-lg" />
</div>
<div className="text-xs text-stone-700 leading-relaxed flex-1">
<span className="font-bold text-stone-900">Network delay on MTN or Airtel?</span>
<button className="text-[#da3700] hover:underline font-bold ml-1 inline text-left hover:text-[#ae2a00]" type="button" onClick={() => alertToast('Action triggered')}>
                Click here for instant WhatsApp OTP delivery.
              </button>
</div>
</div>

<div className="space-y-3 mb-6 pb-2 text-center sm:text-left">
<div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs text-stone-600 bg-stone-50 px-4 py-2.5 rounded-lg border border-stone-100">
<span>Didn't receive the SMS?</span>
<button className="text-stone-500 font-bold hover:text-stone-800 transition-colors" disabled={true} type="button" onClick={() => alertToast('Action triggered')}>
                Resend Code in <span className="text-[#da3700]" id="resend-countdown">45s</span>
</button>
</div>
<div className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-700 pt-1">
<Icon name="call" className="text-base text-emerald-600" />
<button className="hover:underline font-bold text-emerald-700 hover:text-emerald-800 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
                Receive code via WhatsApp voice call
              </button>
</div>
</div>

<div className="bg-stone-50 rounded-xl p-4 border border-stone-200/70 flex items-start gap-3.5 mb-6">
<Icon name="security" className="text-emerald-600 text-xl flex-shrink-0 mt-0.5" />
<div className="space-y-1">
<div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Swift Escrow Protected</div>
<p className="text-xs text-stone-600 leading-relaxed">
                SwiftCart protects your account with carrier-grade two-factor authentication to ensure safe payments and delivery code security under Uganda Data Protection and Privacy Act 2019.
              </p>
</div>
</div>

<div className="text-center pt-2">
<a className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-[#da3700] transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
<Icon name="arrow_back" className="text-base" />
<span>Back to Sign In</span>
</a>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-[#0b0f19] text-stone-300 pt-12 pb-8 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-stone-800/80">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-emerald-400">
<Icon name="verified_user" className="text-2xl" />
</div>
<div>
<div className="text-sm font-bold text-white">100% Escrow Protection</div>
<div className="text-xs text-stone-400">Funds held until inspection</div>
</div>
</div>
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-orange-400">
<Icon name="two_wheeler" className="text-2xl" />
</div>
<div>
<div className="text-sm font-bold text-white">45-Min SafeBoda City Hub</div>
<div className="text-xs text-stone-400">Kampala, Wakiso &amp; Mukono</div>
</div>
</div>
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-amber-400">
<Icon name="payments" className="text-2xl" />
</div>
<div>
<div className="text-sm font-bold text-white">Zero MoMo Fees</div>
<div className="text-xs text-stone-400">On all MTN &amp; Airtel checkouts</div>
</div>
</div>
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-blue-400">
<Icon name="verified" className="text-2xl" />
</div>
<div>
<div className="text-sm font-bold text-white">URSB Certified Stores</div>
<div className="text-xs text-stone-400">Legally registered merchants</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-stone-800/80 text-xs">
<div>
<h5 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">SwiftCart Uganda</h5>
<p className="text-stone-400 leading-relaxed mb-3">
            Uganda's fastest growing escrow marketplace connecting verified sellers with verified buyers across greater Kampala and nationwide.
          </p>
<div className="flex items-center gap-2 text-stone-300 font-semibold">
<Icon name="headset_mic" className="text-base text-[#da3700]" />
<span>Toll-Free: 0800 220 800</span>
</div>
</div>
<div>
<h5 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Customer Service</h5>
<ul className="space-y-2.5 text-stone-400">
<li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; Live Chat</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Escrow Protection FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>SafeBoda Tracking</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Doorstep Return Guidelines</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">About &amp; Business</h5>
<ul className="space-y-2.5 text-stone-400">
<li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Hub Kampala</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Rider Network</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Careers at SwiftCart</a></li>
<li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Press &amp; Media Kit</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Payment &amp; Trust Rails</h5>
<p className="text-stone-400 leading-relaxed mb-3">
            Fully certified integrations with Uganda national telecommunication and banking infrastructure:
          </p>
<div className="flex flex-wrap gap-2 text-stone-300 font-medium">
<span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700/60 text-[11px] font-bold text-amber-300">MTN MoMo</span>
<span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700/60 text-[11px] font-bold text-red-400">Airtel Money</span>
<span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700/60 text-[11px] font-bold text-blue-300">Visa / Mastercard</span>
<span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700/60 text-[11px] font-bold text-emerald-300">Cash on Delivery</span>
</div>
</div>
</div>

<div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
<div>
          © 2025 SwiftCart Uganda Ltd. Registered under URSB Reg No. 80020003412944. All rights reserved.
        </div>
<div className="flex flex-wrap items-center gap-6">
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Escrow Agreement</a>
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Security Disclosures</a>
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a>
</div>
</div>
</div>
</footer>
    </div>
  );
};

export default Desktop;
