// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/register_swiftcart_desktop_2/code.html
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
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full flex-1 flex flex-col">
  
  <header className="w-full border-b border-surface-container-high bg-surface-container-lowest/90 sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-3.5 group" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
          <img src={`${assetBase}/images/ce3704038c05f2da.webp`} alt="SwiftCart Uganda" className="h-11 w-auto object-contain" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SwiftCart</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-fixed text-primary tracking-wider uppercase">Uganda</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Official Escrow Hub</span>
          </div>
        </a>
        <div className="h-6 w-px bg-surface-container-high hidden md:block"></div>
        <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-tertiary bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
          <Icon name="verified_user" className="text-[14px] text-tertiary" />
          Bank-Grade Buyer Escrow Active
        </span>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-full border border-surface-container-high">
          <span className="text-sm">🇺🇬</span>
          <span>UGX (USH)</span>
        </div>
        <a href="#" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition flex items-center gap-1.5" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
          <Icon name="help" className="text-lg" />
          <span>Help &amp; FAQ</span>
        </a>
        <a href="#" className="text-sm font-bold text-primary hover:text-primary-container transition flex items-center gap-1.5 py-2 px-4 rounded-xl bg-primary/10 hover:bg-primary/15" onClick={() => alertToast('Action triggered')}>
          <Icon name="arrow_back" className="text-base" />
          <span>Return to Marketplace</span>
        </a>
      </div>
    </div>
  </header>

  
  <div className="w-full flex-1 flex items-center justify-center py-10 px-4 md:px-8">
    <div className="w-full max-w-6xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container-high/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[740px]">
      
      
      <div className="lg:col-span-5 bg-gradient-to-br from-[#FF8A1F] via-[#DA3700] to-[#992200] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-white">
        
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-4 top-8 opacity-10 pointer-events-none">
          <img src={`${assetBase}/images/23bba0068dfb8034.webp`} className="w-64 h-auto" alt="watermark" />
        </div>

        
        <div className="relative z-10 flex flex-col">
          <div className="flex items-center gap-3 mb-6 bg-black/15 backdrop-blur-md self-start px-4 py-2 rounded-2xl border border-white/20">
            <img src={`${assetBase}/images/23bba0068dfb8034.webp`} alt="SwiftCart" className="h-8 w-auto brightness-0 invert" />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base leading-tight">SwiftCart Uganda</span>
              <span className="text-[10px] tracking-widest uppercase text-white/90 font-bold">Verified Escrow System</span>
            </div>
          </div>

          
          <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 self-start mb-4 shadow-sm">
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-block h-5 w-5 rounded-full bg-white text-primary text-[10px] font-bold text-center leading-5 shadow">R</span>
              <span className="inline-block h-5 w-5 rounded-full bg-amber-200 text-on-surface text-[10px] font-bold text-center leading-5 shadow">K</span>
              <span className="inline-block h-5 w-5 rounded-full bg-emerald-300 text-tertiary text-[10px] font-bold text-center leading-5 shadow">M</span>
            </div>
            <p className="text-xs text-white font-semibold">
              Join 250,000+ Happy Shoppers across Uganda
            </p>
          </div>

          <h1 className="text-3xl font-extrabold text-white leading-tight mb-2">
            Shop fearlessly with protected Kampala checkout.
          </h1>
          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            Your payment is held in safe custody until you physically receive and verify your package.
          </p>

          
          <div className="space-y-3">
            
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition">
              <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
                <Icon name="redeem" className="text-xl" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white">UGX 20,000 Welcome Voucher</span>
                <span className="text-xs text-white/80 mt-0.5">Applied automatically at checkout on your very first order.</span>
              </div>
            </div>

            
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition">
              <div className="w-10 h-10 rounded-xl bg-white text-[#2a3c75] flex items-center justify-center shrink-0 shadow-sm">
                <Icon name="two_wheeler" className="text-xl" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white">Real-Time Boda Tracking</span>
                <span className="text-xs text-white/80 mt-0.5">Direct to your doorstep or designated neighborhood pickup hub.</span>
              </div>
            </div>

            
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition">
              <div className="w-10 h-10 rounded-xl bg-white text-tertiary flex items-center justify-center shrink-0 shadow-sm">
                <Icon name="verified_user" className="text-xl" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Automated Escrow Vault</span>
                  <span className="bg-white/20 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded uppercase">Zero Risk</span>
                </div>
                <span className="text-xs text-white/80 mt-0.5">Money released only after your personal inspection.</span>
              </div>
            </div>

            
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition">
              <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                <Icon name="storefront" className="text-xl" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white">Official Brand Stores</span>
                <span className="text-xs text-white/80 mt-0.5">SoundCore, Anker, Samsung &amp; verified downtown suppliers.</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="relative z-10 mt-6 pt-4 border-t border-white/20 flex items-center gap-3">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </div>
          <p className="text-xs text-white/90 leading-tight">
            <strong className="font-bold text-white">1,480 orders</strong> protected in Kampala today via MTN &amp; Airtel MoMo rails.
          </p>
        </div>
      </div>

      
      <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-surface-container-lowest">
        
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-2">
              <Icon name="bolt" className="text-sm" /> FAST 45-SECOND SIGNUP
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight">
              Create Your SwiftCart Account
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Fast signup with your Ugandan mobile number or email.
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-xs text-on-surface-variant">Already a member?</span>
            <a href="#" className="text-sm font-bold text-primary hover:underline" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>Sign in here →</a>
          </div>
        </div>

        
        <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container border border-surface-container-high rounded-xl text-sm font-bold text-on-surface transition active:scale-[0.99] shadow-sm mb-5" type="button" onClick={() => alertToast('Action triggered')}>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4"></path>
            <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z" fill="#34A853"></path>
            <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
            <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-surface-container-high"></div>
          <span className="px-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Or register with mobile</span>
          <div className="flex-grow h-px bg-surface-container-high"></div>
        </div>

        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface uppercase tracking-wider" htmlFor="fullname">Full Name</label>
              <div className="relative">
                <input className="w-full h-11 px-3.5 pl-10 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm" id="fullname" placeholder="e.g. Ronald Mukasa" required={true} type="text" />
                <Icon name="person" className="absolute left-3 top-2.5 text-on-surface-variant text-xl" />
              </div>
            </div>

            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-on-surface uppercase tracking-wider" htmlFor="phone">Mobile Number</label>
                <span className="text-[11px] text-primary font-bold flex items-center gap-1" id="carrier-hint">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> MTN or Airtel
                </span>
              </div>
              <div className="flex rounded-xl shadow-sm border border-surface-container-high overflow-hidden bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary">
                <div className="px-3 bg-surface-container-high/60 flex items-center gap-1 text-on-surface text-xs font-bold shrink-0 border-r border-surface-container-high">
                  <span className="text-sm">🇺🇬</span>
                  <span>+256</span>
                </div>
                <input className="w-full h-11 px-3 bg-transparent text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none" id="phone" maxLength={10} placeholder="772 123456" required={true} type="tel" />
              </div>
            </div>

            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-on-surface uppercase tracking-wider" htmlFor="email">Email Address</label>
                <span className="text-[11px] text-on-surface-variant">Optional for receipts</span>
              </div>
              <div className="relative">
                <input className="w-full h-11 px-3.5 pl-10 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="email" placeholder="ronald.mukasa@example.com" type="email" />
                <Icon name="mail" className="absolute left-3 top-2.5 text-on-surface-variant text-xl" />
              </div>
            </div>

            
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-on-surface uppercase tracking-wider" htmlFor="district">Delivery Hub / District</label>
              <div className="relative">
                <select className="w-full h-11 px-3.5 pl-10 pr-9 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer" id="district" required={true}>
                  <option disabled={true} selected={true} value="">Select dispatch area...</option>
                  <option value="kampala-central">Kampala Central (Pioneer Mall / Nakasero)</option>
                  <option value="nakawa">Nakawa / Ntinda / Bugolobi</option>
                  <option value="makindye">Makindye / Kansanga / Ggaba</option>
                  <option value="kawempe">Kawempe / Kisaasi / Komamboga</option>
                  <option value="rubaga">Rubaga / Mengo / Nateete</option>
                  <option value="wakiso">Wakiso / Entebbe Corridor</option>
                  <option value="mukono">Mukono Municipality</option>
                  <option value="jinja">Jinja City Express</option>
                </select>
                <Icon name="location_on" className="absolute left-3 top-2.5 text-on-surface-variant text-xl pointer-events-none" />
                <Icon name="expand_more" className="absolute right-3 top-2.5 text-on-surface-variant text-xl pointer-events-none" />
              </div>
            </div>
          </div>

          
          <div className="space-y-1.5 pt-1">
            <label className="block text-xs font-bold text-on-surface uppercase tracking-wider" htmlFor="password">Create Password</label>
            <div className="relative">
              <input className="w-full h-11 px-3.5 pl-10 pr-10 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="password" placeholder="Min. 8 chars, mix letters & numbers" required={true} type="password" />
              <Icon name="lock" className="absolute left-3 top-2.5 text-on-surface-variant text-xl" />
              <button className="absolute right-3 top-2.5 text-on-surface-variant hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}>
                <Icon name="visibility" className="text-xl" />
              </button>
            </div>
            
            <div className="pt-1">
              <div className="flex items-center gap-1.5 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-transparent transition-colors duration-300" id="str-1"></div>
                <div className="h-full w-1/3 bg-transparent transition-colors duration-300" id="str-2"></div>
                <div className="h-full w-1/3 bg-transparent transition-colors duration-300" id="str-3"></div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-on-surface-variant" id="strength-label">Minimum 8 characters, numbers, letters</span>
                <span className="text-xs font-bold text-on-surface-variant" id="strength-score"></span>
              </div>
            </div>
          </div>

          
          <div className="flex items-start gap-2.5 pt-2">
            <input className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer shrink-0" id="terms" required={true} type="checkbox" />
            <label className="text-xs text-on-surface-variant leading-relaxed cursor-pointer select-none" htmlFor="terms">
              I agree to the SwiftCart <a className="text-primary font-bold hover:underline" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a>, <a className="text-primary font-bold hover:underline" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>, and <span className="text-tertiary font-bold">100% Escrow Protection rules</span>.
            </label>
          </div>

          
          <button className="w-full h-12 mt-2 bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-on-primary font-bold text-base rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition flex items-center justify-center gap-2 group cursor-pointer" type="submit" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>
            <span>Create Account &amp; Verify Phone</span>
            <Icon name="arrow_forward" className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        
        <div className="mt-6 pt-4 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span>Want to become a vendor?</span>
            <a className="text-secondary font-bold hover:underline" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}>Register as a Seller →</a>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant/70">
            <Icon name="gavel" className="text-sm text-tertiary" />
            <span>Uganda Data Protection &amp; Privacy Act 2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <footer className="w-full bg-[#1e1b18] text-[#e8e1dc] mt-12 border-t border-surface-container-high">
    
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-tertiary/20 text-tertiary-fixed flex items-center justify-center shrink-0">
            <Icon name="verified_user" className="text-2xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">100% Escrow Protection</h4>
            <p className="text-xs text-[#dfd9d3]/70 mt-0.5">Funds secured till delivery signoff</p>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-fixed flex items-center justify-center shrink-0">
            <Icon name="two_wheeler" className="text-2xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">45-Min SafeBoda City Hub</h4>
            <p className="text-xs text-[#dfd9d3]/70 mt-0.5">Live-tracked Kampala dispatch</p>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
            <Icon name="account_balance_wallet" className="text-2xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Zero MoMo Fees</h4>
            <p className="text-xs text-[#dfd9d3]/70 mt-0.5">MTN &amp; Airtel checkout at 0% fee</p>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
            <Icon name="storefront" className="text-2xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">URSB Certified Stores</h4>
            <p className="text-xs text-[#dfd9d3]/70 mt-0.5">Tax-cleared verified merchants</p>
          </div>
        </div>
      </div>
    </div>

    
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#dfd9d3]/60">
      <div className="flex items-center gap-4">
        <img src={`${assetBase}/images/6ef56f7b9b3ddf40.webp`} alt="SwiftCart Logo" className="h-7 w-auto brightness-0 invert opacity-80" />
        <span>© 2025 SwiftCart Uganda Ltd. Pioneer Mall Building, Level 3, Kampala. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Terms of Service</a>
        <a href="#" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Buyer Escrow Policy</a>
        <a href="#" className="hover:text-white transition" onClick={() => alertToast('Action triggered')}>Privacy Notice</a>
        <a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Contact Support</a>
      </div>
    </div>
  </footer>
</main>
    </div>
  );
};

export default Desktop;
