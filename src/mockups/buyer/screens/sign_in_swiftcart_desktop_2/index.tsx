// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/sign_in_swiftcart_desktop_2/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 w-full px-6 lg:px-12 flex items-center justify-between"><div className="flex items-center gap-4"><a className="flex items-center gap-2" data-path="marketplace-catalog" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span></a><span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wide"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>UGX (USH) · Kampala (EAT)</span></div><nav className="flex items-center gap-6" data-active-classes="bg-surface-container font-headline-sm text-on-surface"><a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-path="marketplace-catalog" href="#" onClick={() => alertToast('Action triggered')}>Return to Marketplace</a><a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help &amp; FAQ</a><a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-path="customer-signin" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>Sign In</a><a className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors" data-path="customer-register" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>Create Account</a></nav><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-surface-container-low flex-1"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

<div className="relative w-full">
<div className="absolute -top-12 -left-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/2 -right-16 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

<div className="w-full max-w-6xl mx-auto bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">

<div className="lg:col-span-5 bg-gradient-to-br from-[#da3700] via-[#ea4c0b] to-[#a82500] p-8 lg:p-10 text-on-primary flex flex-col justify-between relative overflow-hidden">

<div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-white/5 blur-2xl pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-radial from-white/10 to-transparent pointer-events-none"></div>

<div className="relative z-10 space-y-6">
<div className="flex items-center justify-between gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white font-label-sm text-label-sm tracking-wider uppercase font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
                Uganda's Commerce Hub
              </span>
<span className="inline-flex items-center gap-1 text-white/80 font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
                256-Bit SSL Encrypted
              </span>
</div>

<div className="pt-2">
<div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-lg shadow-black/10">
<img alt="SwiftCart Emblem" className="h-9 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} />
<div className="leading-none text-left">
<span className="font-headline-sm text-headline-sm tracking-tight text-primary block leading-none">SwiftCart</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-wide">UGANDA VERIFIED</span>
</div>
</div>
</div>

<div className="space-y-2 pt-2">
<h1 className="font-headline-lg text-headline-lg font-extrabold text-white tracking-tight leading-tight">
                Welcome Back to Uganda's Premier Marketplace
              </h1>
<p className="font-body-sm text-body-sm text-white/90 leading-relaxed">
                Direct connection to vetted vendors in Owino, Kikuubo, Garden City, Acacia Mall, and nationwide delivery network.
              </p>
</div>

<div className="grid grid-cols-1 gap-2.5 pt-2">
<div className="flex items-start gap-3 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm rounded-xl p-3">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
<Icon name="bolt" className="text-white text-[18px]" />
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-white font-bold">45-Min SafeBoda Express</span>
<span className="px-1.5 py-0.5 rounded bg-white text-primary font-label-sm text-label-sm font-extrabold">FAST</span>
</div>
<p className="font-body-sm text-body-sm text-white/80 leading-snug">Instant parcel drop-off across Kampala, Wakiso, Mukono &amp; Entebbe.</p>
</div>
</div>
<div className="flex items-start gap-3 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm rounded-xl p-3">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-white text-[18px]" />
</div>
<div>
<div className="font-label-md text-label-md text-white font-bold">100% Escrow Protection</div>
<p className="font-body-sm text-body-sm text-white/80 leading-snug">Funds held securely in escrow until you inspect and accept your items.</p>
</div>
</div>
<div className="flex items-start gap-3 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm rounded-xl p-3">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
<Icon name="payments" className="text-white text-[18px]" />
</div>
<div>
<div className="font-label-md text-label-md text-white font-bold">Zero-Fee Mobile Money</div>
<p className="font-body-sm text-body-sm text-white/80 leading-snug">Instant debit push via MTN MoMo (*165#) &amp; Airtel Money (*185#).</p>
</div>
</div>
<div className="flex items-start gap-3 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm rounded-xl p-3">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
<Icon name="storefront" className="text-white text-[18px]" />
</div>
<div>
<div className="font-label-md text-label-md text-white font-bold">1,400+ Verified Merchants</div>
<p className="font-body-sm text-body-sm text-white/80 leading-snug">Fully certified URSB and URA registered stores guaranteed.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white/90">
<div className="flex items-center gap-1.5">
<Icon name="star" className="text-amber-300 text-[18px]" />
<span className="font-label-lg text-label-lg text-white font-bold">4.9 / 5.0</span>
<span className="font-body-sm text-body-sm text-white/70">Kampala Metro Rating</span>
</div>
<div className="font-label-sm text-label-sm text-white/80 font-semibold tracking-wide">
              380,000+ Parcels Delivered
            </div>
</div>
</div>

<div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-surface-container-lowest flex flex-col justify-center">
<div className="max-w-xl mx-auto w-full space-y-6">

<div className="flex items-center justify-between flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<Icon name="shield" className="text-tertiary text-[14px]" />
                SSL Encrypted Checkout
              </div>
<div className="inline-flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="schedule" className="text-[15px]" />
                Kampala (EAT) GMT+3
              </div>
</div>

<div className="space-y-1">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                Sign In to SwiftCart
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                Manage your orders, track real-time boda deliveries, and access saved addresses.
              </p>
</div>

<div className="p-1 rounded-xl bg-surface-container-low flex items-center gap-1">
<button className="flex-1 py-2.5 px-4 rounded-lg font-label-md text-label-md text-center transition-all bg-surface-container-lowest text-primary font-bold shadow-sm flex items-center justify-center gap-2" id="tab-mobile" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="smartphone" className="text-[16px]" />
                Mobile Number <span className="hidden sm:inline font-normal text-on-surface-variant">(Uganda Favored)</span>
</button>
<button className="flex-1 py-2.5 px-4 rounded-lg font-label-md text-label-md text-center transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-2" id="tab-email" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="mail" className="text-[16px]" />
                Email Address
              </button>
</div>

<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-1.5" id="phone-field-group">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="phone-input">Ugandan Mobile Number</label>
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">MTN MoMo</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">Airtel Money</span>
</div>
</div>
<div className="flex rounded-xl bg-surface-container-lowest shadow-sm ring-1 ring-on-secondary-fixed/10 focus-within:ring-2 focus-within:ring-primary overflow-hidden transition-all">
<div className="flex items-center gap-2 px-3 py-3 bg-surface-container-low text-on-surface font-label-md text-label-md border-r border-surface-container">
<span className="text-base leading-none">🇺🇬</span>
<span className="font-bold">+256</span>
</div>
<input className="w-full px-4 py-3 bg-transparent text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none" id="phone-input" placeholder="772 123 456" required={true} type="tel" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 pt-0.5">
<Icon name="check_circle" className="text-tertiary text-[14px]" />
                  Instant SIM push notification prompt on MTN &amp; Airtel lines
                </p>
</div>

<div className="space-y-1.5 hidden" id="email-field-group">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="email-input">Account Email Address</label>
<div className="flex rounded-xl bg-surface-container-lowest shadow-sm ring-1 ring-on-secondary-fixed/10 focus-within:ring-2 focus-within:ring-primary overflow-hidden transition-all">
<div className="flex items-center px-3.5 bg-surface-container-low text-on-surface-variant">
<Icon name="alternate_email" className="text-[18px]" />
</div>
<input className="w-full px-4 py-3 bg-transparent text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none" id="email-input" placeholder="buyer@example.ug" type="email" />
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="password-input">Password</label>
<a className="font-label-sm text-label-sm text-primary hover:underline font-bold" data-path="forgot-password" href="#" onClick={() => alertToast('Action triggered')}>Forgot password?</a>
</div>
<div className="relative flex items-center rounded-xl bg-surface-container-lowest shadow-sm ring-1 ring-on-secondary-fixed/10 focus-within:ring-2 focus-within:ring-primary overflow-hidden transition-all">
<input className="w-full px-4 py-3 bg-transparent text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none pr-10" id="password-input" placeholder="Enter your password" required={true} type="password" />
<button className="absolute right-3 text-on-surface-variant hover:text-on-surface p-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Remember me on this computer</span>
</label>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[14px]" />
                  Escrow Ready
                </span>
</div>

<button className="w-full h-12 bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:from-[#ea7e18] hover:to-[#c63200] text-white font-label-lg text-label-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transform active:scale-[0.99] transition-all flex items-center justify-center gap-2" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span>Sign In to SwiftCart</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</form>

<div className="relative flex items-center justify-center my-4">
<div className="w-full h-px bg-surface-container-high"></div>
<span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
                Or Continue With
              </span>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md font-semibold" type="button" onClick={() => alertToast('Action triggered')}>
<svg className="w-4 h-4" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
</svg>
<span>Google One-Tap</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md font-semibold" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="sms" className="text-[18px] text-primary" />
<span>One-Time SMS (OTP)</span>
</button>
</div>

<div className="p-3 rounded-xl bg-surface-container flex items-start gap-2.5">
<Icon name="policy" className="text-tertiary text-[18px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Your data is protected under the <strong>Uganda Data Protection and Privacy Act 2019</strong>. We never share your contact information with unauthorized third parties.
              </p>
</div>

<div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
<div className="font-body-sm text-body-sm text-on-surface-variant">
                Don't have an account yet? 
                <a className="font-label-md text-label-md text-primary font-bold hover:underline ml-1" data-path="customer-register" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>Register now</a>
</div>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm font-semibold" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="store" className="text-[16px] text-secondary" />
                Sell on SwiftCart
              </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-inverse-surface text-inverse-on-surface"><div className="bg-on-secondary-fixed py-6"><div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="flex items-center gap-3"><Icon name="verified_user" className="text-tertiary-fixed text-[28px]" /><div><div className="font-label-lg text-label-lg text-white">100% Escrow Protection</div><div className="font-body-sm text-body-sm text-slate-300">Funds released upon delivery</div></div></div><div className="flex items-center gap-3"><Icon name="local_shipping" className="text-primary-fixed text-[28px]" /><div><div className="font-label-lg text-label-lg text-white">45-Min SafeBoda City Hub</div><div className="font-body-sm text-body-sm text-slate-300">Rapid Kampala metro dispatch</div></div></div><div className="flex items-center gap-3"><Icon name="payments" className="text-tertiary-fixed text-[28px]" /><div><div className="font-label-lg text-label-lg text-white">Zero MoMo Fees</div><div className="font-body-sm text-body-sm text-slate-300">MTN &amp; Airtel merchant checkout</div></div></div><div className="flex items-center gap-3"><Icon name="gavel" className="text-secondary-fixed text-[28px]" /><div><div className="font-label-lg text-label-lg text-white">URSB Certified Stores</div><div className="font-body-sm text-body-sm text-slate-300">Vetted Ugandan businesses</div></div></div></div></div><div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"><div className="space-y-4"><div className="font-headline-sm text-headline-sm text-white">SwiftCart Uganda</div><p className="font-body-sm text-body-sm text-slate-300">Kampala's premier high-trust online marketplace powering frictionless escrow trade between trusted local vendors and buyers.</p><div className="flex items-center gap-2 pt-2"><Icon name="support_agent" className="text-tertiary-fixed text-[20px]" /><div className="font-label-md text-label-md text-white">Toll-Free Helpline: <span className="font-price-display text-price-display text-primary-fixed">0800 220 800</span></div></div></div><div className="space-y-3"><div className="font-label-lg text-label-lg text-white tracking-wider uppercase">Customer Service</div><ul className="space-y-2 font-body-sm text-body-sm text-slate-300"><li><a className="hover:text-white transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; FAQs</a></li><li><a className="hover:text-white transition-colors" data-path="escrow-guarantee" href="#" onClick={() => alertToast('Action triggered')}>Buyer Escrow Guarantee</a></li><li><a className="hover:text-white transition-colors" data-path="dispute-resolution" href="#" onClick={() => alertToast('Action triggered')}>Kampala Metro Dispute Center</a></li><li><a className="hover:text-white transition-colors" data-path="shipping-dispatch" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>SafeBoda Express Tracking</a></li></ul></div><div className="space-y-3"><div className="font-label-lg text-label-lg text-white tracking-wider uppercase">About &amp; Business</div><ul className="space-y-2 font-body-sm text-body-sm text-slate-300"><li><a className="hover:text-white transition-colors" data-path="vendor-onboarding" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Merchant</a></li><li><a className="hover:text-white transition-colors" data-path="about-us" href="#" onClick={() => alertToast('Action triggered')}>Our Vision for Ugandan Trade</a></li><li><a className="hover:text-white transition-colors" data-path="careers" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Careers at SwiftCart</a></li><li><a className="hover:text-white transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Data Protection &amp; Privacy Policy</a></li></ul></div><div className="space-y-3"><div className="font-label-lg text-label-lg text-white tracking-wider uppercase">Payment &amp; Trust Rails</div><p className="font-body-sm text-body-sm text-slate-300">Instant mobile money and card processing secured with telecommunications escrow grade.</p><div className="flex flex-wrap gap-2 pt-1"><span className="px-2.5 py-1 rounded bg-slate-800 text-white font-label-sm text-label-sm border border-slate-700">MTN MoMo</span><span className="px-2.5 py-1 rounded bg-slate-800 text-white font-label-sm text-label-sm border border-slate-700">Airtel Money</span><span className="px-2.5 py-1 rounded bg-slate-800 text-white font-label-sm text-label-sm border border-slate-700">Visa / Mastercard</span><span className="px-2.5 py-1 rounded bg-slate-800 text-white font-label-sm text-label-sm border border-slate-700">Swift Escrow</span></div></div></div><div className="border-t border-slate-800 py-6"><div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"><div className="font-body-sm text-body-sm text-slate-400">© 2025 SwiftCart Uganda Ltd. URSB Reg No. 80020003194821. Registered with the National Data Protection and Privacy Office under the Data Protection and Privacy Act, 2019.</div><div className="flex items-center gap-4 font-body-sm text-body-sm text-slate-400"><a className="hover:text-white transition-colors" data-path="terms-conditions" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="hover:text-white transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-white transition-colors" data-path="security-protocols" href="#" onClick={() => alertToast('Action triggered')}>Security Protocols</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
