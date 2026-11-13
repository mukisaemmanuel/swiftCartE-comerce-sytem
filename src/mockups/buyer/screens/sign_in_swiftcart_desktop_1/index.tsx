// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/sign_in_swiftcart_desktop_1/code.html
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
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col justify-between relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full flex-1 flex flex-col items-center justify-between">
  
  <header className="w-full border-b border-surface-container-high bg-surface-container-lowest/90 backdrop-blur-md sticky top-0 z-50 px-6 py-3.5">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
        <img src={`${assetBase}/images/6ef56f7b9b3ddf40.webp`} alt="SwiftCart Uganda" className="h-9 w-auto object-contain" />
        <span className="hidden sm:inline-block font-headline-sm text-[18px] font-bold text-primary tracking-tight border-l border-surface-container-high pl-3 text-on-surface-variant">Accounts</span>
      </a>
      <div className="flex items-center gap-6 text-body-sm text-on-surface-variant">
        <a href="#marketplace" className="inline-flex items-center gap-1.5 hover:text-primary font-label-md transition" onClick={() => alertToast('Action triggered')}>
          <Icon name="storefront" className="text-[18px]" />
          <span>Return to Marketplace</span>
        </a>
        <a href="#help" className="hidden md:inline-flex items-center gap-1.5 hover:text-primary font-label-md transition" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
          <Icon name="help_outline" className="text-[18px]" />
          <span>Help &amp; FAQ</span>
        </a>
        <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-surface-container-high font-label-sm text-label-sm text-on-surface bg-surface-container-low px-2.5 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>UGX (USH) · Kampala (EAT)</span>
        </div>
      </div>
    </div>
  </header>

  
  <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 flex-1 flex items-center justify-center">
    <div className="w-full grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-surface-container-high/60 bg-surface-container-lowest min-h-[640px]">
      
      
      <div className="relative md:col-span-5 p-8 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-container via-primary to-on-primary-fixed-variant text-on-primary shadow-inner">
        
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-black/25 blur-3xl pointer-events-none"></div>
        
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-white font-bold">Uganda's Commerce Hub</span>
            </div>
            <span className="font-label-sm text-white/80 bg-black/20 px-2.5 py-1 rounded-full">256-Bit SSL</span>
          </div>
          
          <div className="pt-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2.5 inline-block shadow-lg mb-3">
              <img src={`${assetBase}/images/6ef56f7b9b3ddf40.webp`} alt="SwiftCart Uganda" className="h-8 w-auto object-contain" />
            </div>
            <h1 className="font-headline-md text-[26px] md:text-[30px] font-bold text-white tracking-tight leading-tight">
              Welcome Back to Uganda's Premier Marketplace
            </h1>
            <p className="font-body-md text-white/80 mt-2 text-sm md:text-base leading-relaxed">
              Direct connection to verified local vendors in Owino, Kikuubo, Garden City, and nationwide delivery network.
            </p>
          </div>
        </div>

        
        <div className="relative z-10 py-6 space-y-3">
          
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition duration-200">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white shadow-sm">
              <Icon name="two_wheeler" className="text-[22px]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-label-md text-white font-semibold">45-Min SafeBoda Express</span>
                <span className="bg-[#FFF2E8] text-[#DA3700] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Fast</span>
              </div>
              <p className="text-body-sm text-white/80 leading-snug mt-0.5">Instant parcel drop-off across Kampala, Wakiso, Mukono &amp; Entebbe metro.</p>
            </div>
          </div>

          
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition duration-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-300 shadow-sm">
              <Icon name="verified_user" className="text-[22px]" />
            </div>
            <div className="min-w-0">
              <span className="font-label-md text-white font-semibold">100% Escrow Protection</span>
              <p className="text-body-sm text-white/80 leading-snug mt-0.5">Funds held securely in escrow until you inspect and accept your items.</p>
            </div>
          </div>

          
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition duration-200">
            <div className="w-10 h-10 rounded-xl bg-amber-400/25 flex items-center justify-center shrink-0 text-amber-200 shadow-sm">
              <Icon name="contactless" className="text-[22px]" />
            </div>
            <div className="min-w-0">
              <span className="font-label-md text-white font-semibold">Zero-Fee Mobile Money</span>
              <p className="text-body-sm text-white/80 leading-snug mt-0.5">Instant debit push via MTN MoMo (*165#) &amp; Airtel Money (*185#).</p>
            </div>
          </div>

          
          <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition duration-200">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white shadow-sm">
              <Icon name="storefront" className="text-[22px]" />
            </div>
            <div className="min-w-0">
              <span className="font-label-md text-white font-semibold">1,400+ Verified Merchants</span>
              <p className="text-body-sm text-white/80 leading-snug mt-0.5">Fully certified URSB and URA registered stores guaranteed.</p>
            </div>
          </div>
        </div>

        
        <div className="relative z-10 pt-2 flex items-center justify-between bg-black/25 backdrop-blur-sm px-4 py-2.5 rounded-xl text-white/90 border border-white/10 text-xs md:text-sm">
          <div className="flex items-center gap-1.5">
            <Icon name="star" className="text-amber-400 text-[18px]" />
            <span className="font-semibold text-white">4.9 / 5.0</span>
            <span className="text-white/70">Kampala Rating</span>
          </div>
          <span className="text-white/80">Over 380,000+ parcels delivered</span>
        </div>
      </div>

      
      <div className="md:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-surface-container-lowest">
        <div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                <Icon name="lock" className="text-[15px] text-tertiary" />
                SSL Encrypted Checkout
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kampala (EAT) GMT+3</span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight">
              Sign In to SwiftCart
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
              Manage your orders, track real-time deliveries, and access saved addresses.
            </p>
          </div>

          
          <div className="p-1 rounded-xl bg-surface-container flex items-center mb-6 shadow-inner">
            <button className="flex-1 py-2.5 px-4 rounded-lg font-label-md text-label-md transition-all duration-150 flex items-center justify-center gap-2 bg-surface-container-lowest text-primary shadow-sm font-semibold" id="tab-mobile" type="button" onClick={() => alertToast('Action triggered')}>
              <Icon name="smartphone" className="text-[18px]" />
              <span>Mobile Number</span>
              <span className="text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">Uganda Fav</span>
            </button>
            <button className="flex-1 py-2.5 px-4 rounded-lg font-label-md text-label-md transition-all duration-150 flex items-center justify-center gap-2 text-on-surface-variant hover:text-on-surface font-medium" id="tab-email" type="button" onClick={() => alertToast('Action triggered')}>
              <Icon name="mail" className="text-[18px]" />
              <span>Email Address</span>
            </button>
          </div>

          
          <form className="space-y-4" id="signin-form" onSubmit={(e) => e.preventDefault()}>
            
            <div id="mobile-field-wrap">
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="mobile-input">
                  Mobile Phone Number
                </label>
                <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full text-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="font-medium">MTN MoMo</span>
                  <span className="text-outline-variant font-bold">·</span>
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span className="font-medium">Airtel Money</span>
                </div>
              </div>
              
              <div className="relative flex items-center rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest focus-within:shadow-md transition">
                <div className="flex items-center pl-3.5 pr-2.5 py-3 bg-surface-container-high/40 rounded-l-xl select-none border-r border-surface-container-high">
                  <svg className="w-5 h-3.5 rounded-sm shadow-xs mr-2" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#000000" height="80" width="640"></rect>
                    <rect fill="#fcdc04" height="80" width="640" y="80"></rect>
                    <rect fill="#d90000" height="80" width="640" y="160"></rect>
                    <rect fill="#000000" height="80" width="640" y="240"></rect>
                    <rect fill="#fcdc04" height="80" width="640" y="320"></rect>
                    <rect fill="#d90000" height="80" width="640" y="400"></rect>
                    <circle cx="320" cy="240" fill="#ffffff" r="70"></circle>
                    <path d="M312,210 L328,210 L324,255 L316,255 Z" fill="#000000"></path>
                  </svg>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">+256</span>
                  <Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant ml-1" />
                </div>
                <input autoComplete="tel-national" className="w-full bg-transparent px-3 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none" id="mobile-input" inputMode="numeric" placeholder="772 123 456" required={true} type="tel" />
              </div>
            </div>

            
            <div className="hidden" id="email-field-wrap">
              <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold" htmlFor="email-input">
                Email Address
              </label>
              <div className="relative flex items-center rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest focus-within:shadow-md transition">
                <Icon name="alternate_email" className="text-[20px] text-on-surface-variant ml-3.5" />
                <input autoComplete="email" className="w-full bg-transparent px-3 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none" id="email-input" placeholder="name@example.ug" type="email" />
              </div>
            </div>

            
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="password-input">
                  Password
                </label>
                <a className="font-label-sm text-label-sm text-primary hover:underline transition font-semibold" href="#forgot" onClick={() => alertToast('Action triggered')}>
                  Forgot password?
                </a>
              </div>
              <div className="relative flex items-center rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest focus-within:shadow-md transition">
                <Icon name="key" className="text-[20px] text-on-surface-variant ml-3.5" />
                <input autoComplete="current-password" className="w-full bg-transparent px-3 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none" id="password-input" placeholder="Enter your password" required={true} type="password" />
                <button className="p-2 mr-1 text-on-surface-variant hover:text-on-surface focus:outline-none" id="toggle-password" title="Toggle password visibility" type="button" onClick={() => alertToast('Action triggered')}>
                  <Icon name="visibility" className="text-[20px]" />
                </button>
              </div>
            </div>

            
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input checked={true} className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">Remember me on this computer</span>
              </label>
              <div className="flex items-center gap-1 text-tertiary bg-emerald-50 px-2 py-0.5 rounded-full">
                <Icon name="verified" className="text-[15px]" />
                <span className="font-label-sm text-label-sm font-semibold">Escrow Ready</span>
              </div>
            </div>

            
            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 active:scale-[0.99] transition-all duration-150 text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg shadow-primary-container/30 cursor-pointer font-bold text-base" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
              <span>Sign In to SwiftCart</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </button>
          </form>

          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full bg-surface-container-high h-[1px]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-surface-container-lowest px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                Or continue with
              </span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <button className="h-11 px-4 rounded-xl border border-surface-container-high bg-surface-container-lowest hover:bg-surface-container-low transition flex items-center justify-center gap-2.5 font-label-md text-label-md text-on-surface shadow-xs active:scale-[0.99] cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z" fill="#4285F4"></path>
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.33 24 12 24z" fill="#34A853"></path>
                <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" fill="#FBBC05"></path>
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
              </svg>
              <span className="font-medium">Google One-Tap</span>
            </button>
            
            <button className="h-11 px-4 rounded-xl border border-surface-container-high bg-surface-container-lowest hover:bg-surface-container-low transition flex items-center justify-center gap-2 font-label-md text-label-md text-on-surface shadow-xs active:scale-[0.99] cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>
              <Icon name="sms" className="text-[18px] text-tertiary" />
              <span className="font-medium">One-Time SMS (OTP)</span>
            </button>
          </div>
        </div>

        
        <div className="mt-8 pt-4 border-t border-surface-container-high">
          <div className="flex items-center gap-2 text-on-surface-variant mb-4 bg-surface-container-low/70 p-2.5 rounded-lg">
            <Icon name="shield" className="text-[18px] text-tertiary shrink-0" />
            <p className="font-body-sm text-body-sm leading-tight text-on-surface-variant/90 text-xs">
              Your data is encrypted and protected under the <span className="font-semibold text-on-surface">Uganda Data Protection and Privacy Act 2019</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-on-surface">
              Don't have an account yet? 
              <a className="font-semibold text-primary hover:underline ml-1" href="#register" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>Register now</a>
            </p>
            <a className="inline-flex items-center gap-1.5 font-label-sm text-secondary hover:text-on-secondary-fixed transition bg-surface-container-highest px-3 py-1.5 rounded-lg font-medium" href="#sell" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
              <Icon name="store" className="text-[16px]" />
              <span>Are you a merchant? Sell on SwiftCart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <footer className="w-full bg-[#1e1b18] text-white/80 pt-12 pb-8 border-t border-surface-container-highest/20 mt-8">
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-container shrink-0">
            <Icon name="verified_user" className="text-[24px]" />
          </div>
          <div>
            <div className="font-label-md text-white font-bold text-sm">100% Escrow Protection</div>
            <div className="text-xs text-white/60">Money safe till item confirmed</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-container shrink-0">
            <Icon name="two_wheeler" className="text-[24px]" />
          </div>
          <div>
            <div className="font-label-md text-white font-bold text-sm">45-Min SafeBoda City Hub</div>
            <div className="text-xs text-white/60">Kampala, Wakiso &amp; Mukono</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-container shrink-0">
            <Icon name="payments" className="text-[24px]" />
          </div>
          <div>
            <div className="font-label-md text-white font-bold text-sm">Zero MoMo Fees</div>
            <div className="text-xs text-white/60">MTN (*165#) &amp; Airtel (*185#)</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-container shrink-0">
            <Icon name="domain_verification" className="text-[24px]" />
          </div>
          <div>
            <div className="font-label-md text-white font-bold text-sm">URSB Certified Stores</div>
            <div className="text-xs text-white/60">1,400+ authentic local vendors</div>
          </div>
        </div>
      </div>

      
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <img src={`${assetBase}/images/18a63b8793377535.webp`} alt="SwiftCart" className="h-6 w-auto brightness-0 invert opacity-80" />
          <span>© 2025 SwiftCart Uganda Ltd. All rights reserved. Kampala, Uganda.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Terms of Service</a>
          <a href="#disputes" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Escrow &amp; Dispute Resolution</a>
          <a href="#contact" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Contact Support</a>
        </div>
      </div>
    </div>
  </footer>
</main>
    </div>
  );
};

export default Screen;
