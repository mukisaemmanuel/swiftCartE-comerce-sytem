// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/register_swiftcart_buyer_tablet/code.html
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
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex items-center justify-center p-gutter relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(15,23,42,0.08)] p-space-xl"><div className="flex flex-col w-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">

<div className="md:col-span-5 flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm">
<img alt="SwiftCart Brand Crest" className="w-12 h-12 object-contain" src={`${assetBase}/images/eeec7b8aa6789af9.webp`} />
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold leading-none">SwiftCart</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-1">Uganda Marketplace</span>
</div>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mt-space-sm leading-tight">
          Join Uganda's Verified Marketplace
        </h1>
<p className="font-body-md text-body-md text-secondary">
          Smart, escrow-backed commerce tailored for reliable shopping in Kampala, Entebbe, and Wakiso.
        </p>
</div>

<div className="flex flex-col gap-space-md">

<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low shadow-sm">
<div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0 text-primary-container">
<Icon name="verified_user" className="text-lg" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">100% Escrow Protection</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Funds held safely until you confirm 6-digit delivery code with your Boda rider.</span>
</div>
</div>

<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low shadow-sm">
<div className="w-9 h-9 rounded-full bg-tertiary-container/15 flex items-center justify-center shrink-0 text-tertiary">
<Icon name="two_wheeler" className="text-lg" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Fast Same-Day Boda Delivery</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Rapid scheduled drops across Kampala, Entebbe, and Wakiso metropolitan zones.</span>
</div>
</div>

<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low shadow-sm">
<div className="w-9 h-9 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0 text-primary-container">
<Icon name="account_balance_wallet" className="text-lg" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Zero-Fee Mobile Money</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Seamless checkout via MTN Mobile Money &amp; Airtel Money with zero transaction charges.</span>
</div>
</div>

<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low shadow-sm">
<div className="w-9 h-9 rounded-full bg-tertiary-container/15 flex items-center justify-center shrink-0 text-tertiary">
<Icon name="storefront" className="text-lg" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">140+ Verified Local Merchants</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Authentic inventories sourced from trusted regional tech and consumer hubs.</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-high/60 shadow-sm flex flex-col gap-space-xs mt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<Icon name="star" className="text-base text-amber-500" />
<Icon name="star" className="text-base text-amber-500" />
<Icon name="star" className="text-base text-amber-500" />
<Icon name="star" className="text-base text-amber-500" />
<Icon name="star" className="text-base text-amber-500" />
</div>
<span className="font-label-sm text-label-sm bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-bold">Verified Buyer</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface italic mt-1">
          "The escrow release with OTP pin on Boda arrival is genius. I bought my wireless setup safely without stress in Nakawa."
        </p>
<div className="flex items-center justify-between mt-1 text-secondary">
<span className="font-label-md text-label-md text-on-surface font-bold">Ritah K.</span>
<span className="font-body-sm text-body-sm text-secondary">Shopper in Kampala</span>
</div>
</div>
</div>

<div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">

<div className="flex flex-col gap-space-xs">
<h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">Create Your Account</h2>
<p className="font-body-md text-body-md text-secondary">Enter your details to start shopping with buyer protection.</p>
</div>
<form className="flex flex-col gap-space-md mt-space-xs" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="full-name">Full Name</label>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm focus-within:bg-surface-container-lowest shadow-sm transition-all">
<Icon name="person" className="text-secondary mr-2 text-lg" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-secondary/60" id="full-name" placeholder="e.g. Sarah Namubiru" required={true} type="text" />
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="momo-phone">Mobile Money Number</label>
<span className="font-label-sm text-label-sm bg-tertiary-container/15 text-tertiary px-2 py-0.5 rounded font-bold">
              MTN &amp; Airtel Money Ready
            </span>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm focus-within:bg-surface-container-lowest shadow-sm transition-all gap-2">

<div className="flex items-center gap-1.5 pr-2 shrink-0">
<span className="text-base select-none">🇺🇬</span>
<span className="font-label-md text-label-md text-on-surface font-bold">+256</span>
</div>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-secondary/60" id="momo-phone" placeholder="770 123 456" required={true} type="tel" />
<Icon name="phone_android" className="text-secondary text-lg" />
</div>
<span className="font-body-sm text-body-sm text-secondary">Used to authenticate instant Escrow PIN unlocks upon delivery.</span>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="email-field">Email Address</label>
<span className="font-label-sm text-label-sm text-secondary">Optional</span>
</div>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm focus-within:bg-surface-container-lowest shadow-sm transition-all">
<Icon name="mail" className="text-secondary mr-2 text-lg" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-secondary/60" id="email-field" placeholder="For e-receipts and order invoices" type="email" />
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="password-field">Create Password</label>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm focus-within:bg-surface-container-lowest shadow-sm transition-all">
<Icon name="lock" className="text-secondary mr-2 text-lg" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none" id="password-field" required={true} type="password" value="K@mpala2025#" />
<button aria-label="Toggle password visibility" className="text-secondary hover:text-on-surface flex items-center justify-center p-1" id="toggle-pwd-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="visibility" className="text-lg" />
</button>
</div>

<div className="flex items-center gap-1.5 mt-1">
<div className="h-1 flex-1 rounded-full bg-tertiary"></div>
<div className="h-1 flex-1 rounded-full bg-tertiary"></div>
<div className="h-1 flex-1 rounded-full bg-tertiary"></div>
<div className="h-1 flex-1 rounded-full bg-tertiary"></div>
<span className="font-label-sm text-label-sm text-tertiary font-bold ml-1">Strong</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Minimum 8 characters with numbers and symbols.</span>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="confirm-password-field">Confirm Password</label>
<div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm focus-within:bg-surface-container-lowest shadow-sm transition-all">
<Icon name="lock_reset" className="text-secondary mr-2 text-lg" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none" id="confirm-password-field" required={true} type="password" value="K@mpala2025#" />
</div>
</div>

<label className="flex items-start gap-space-sm cursor-pointer mt-1 select-none">
<input checked={true} className="w-4 h-4 mt-0.5 rounded accent-primary-container cursor-pointer shrink-0" type="checkbox" />
<span className="font-body-sm text-body-sm text-secondary leading-snug">
            I agree to the <span className="font-semibold text-on-surface underline">SwiftCart Terms of Service</span> and <span className="font-semibold text-on-surface underline">Privacy Policy</span>, including escrow protection terms.
          </span>
</label>

<button className="w-full h-12 bg-primary-container hover:bg-[#ea4a17] active:scale-[0.99] text-on-primary rounded-lg font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all mt-space-xs" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
<span>Create Account &amp; Send Code</span>
<Icon name="arrow_forward" className="text-lg" />
</button>

<div className="flex items-center gap-space-md my-1">
<div className="h-[1px] flex-1 bg-surface-container-high"></div>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">OR</span>
<div className="h-[1px] flex-1 bg-surface-container-high"></div>
</div>

<button className="w-full h-11 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-lg text-label-lg font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
<svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z" fill="#34A853"></path>
<path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
</svg>
<span>Register with Google</span>
</button>

<div className="flex items-center justify-center gap-1.5 text-center mt-space-xs">
<span className="font-body-md text-body-md text-secondary">Already have an account?</span>
<a className="font-label-lg text-label-lg text-primary hover:underline font-bold" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>Sign In</a>
</div>
</form>

<div className="flex flex-wrap items-center justify-center gap-x-space-md gap-y-1 text-center font-label-sm text-label-sm text-secondary/80 pt-space-md bg-surface-container-low/40 rounded-lg p-space-sm mt-space-xs">
<div className="flex items-center gap-1">
<Icon name="lock" className="text-sm text-tertiary" />
<span>256-Bit SSL Encrypted</span>
</div>
<span className="hidden sm:inline">•</span>
<div className="flex items-center gap-1">
<Icon name="cloud_done" className="text-sm text-secondary" />
<span>Standard Cloud Hosting</span>
</div>
<span className="hidden sm:inline">•</span>
<div className="flex items-center gap-1">
<Icon name="location_on" className="text-sm text-primary" />
<span>Kampala, Uganda</span>
</div>
<span className="hidden sm:inline">•</span>
<div className="flex items-center gap-1 font-bold text-on-surface">
<span>All prices in UGX</span>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
