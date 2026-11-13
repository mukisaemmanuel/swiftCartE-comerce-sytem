// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/mtn_momo_ussd_pin_prompt_desktop/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><a className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]" data-path="marketplace" href="#" onClick={() => alertToast('Action triggered')}><img alt="SwiftCart" className="h-9 w-auto object-contain" src={`${assetBase}/images/d512e9ed7f25ec63.webp`} /></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full relative min-h-[calc(100vh-8rem)]">

<div className="absolute inset-0 bg-surface-dim/40 backdrop-blur-[3px] pointer-events-none z-0"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-primary-fixed-dim/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
<div className="absolute top-1/3 left-1/3 w-[340px] h-[340px] bg-tertiary-fixed-dim/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

<div className="relative z-10 w-full max-w-4xl mx-auto px-margin py-8 sm:py-12 flex flex-col items-center justify-center">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_24px_64px_rgba(14,27,77,0.12),0_4px_16px_rgba(218,55,0,0.06)] overflow-hidden">

<div className="bg-surface-container-low px-6 py-4 flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center gap-3">

<div className="flex items-center gap-2 bg-tertiary/10 text-tertiary px-3 py-1.5 rounded-full">
<Icon name="verified_user" className="text-[18px]" />
<span className="font-label-md text-label-md font-bold tracking-tight">SwiftCart Escrow Vault</span>
</div>
<span className="text-on-surface-variant/40 font-body-sm text-body-sm">•</span>

<div className="flex items-center gap-2 bg-[#FFCC00]/20 text-[#6B5500] px-3 py-1.5 rounded-full">
<div className="w-2.5 h-2.5 rounded-full bg-[#E5A900] animate-ping"></div>
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">MTN MoMo Gateway</span>
</div>
</div>

<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span>TXN:</span>
<span className="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-0.5 rounded">SC-UG-884910</span>
</div>
</div>

<div className="p-6 sm:p-10 flex flex-col items-center text-center">

<div className="relative w-36 h-36 flex items-center justify-center my-2">

<div className="absolute inset-0 rounded-full bg-primary/10 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute inset-3 rounded-full bg-primary-container/15 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_200ms]"></div>
<div className="absolute inset-6 rounded-full bg-primary/20 animate-pulse"></div>

<div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-primary-container text-on-primary shadow-[0_8px_24px_rgba(218,55,0,0.35)] flex flex-col items-center justify-center">
<Icon name="stay_current_portrait" className="text-[34px] animate-bounce" />
<span className="font-label-sm text-label-sm font-extrabold tracking-widest text-primary-fixed mt-0.5">*165#</span>
</div>

<div className="absolute -top-1 right-2 bg-surface-container-lowest text-tertiary shadow-md rounded-full px-2 py-0.5 flex items-center gap-1 font-label-sm text-label-sm font-bold">
<Icon name="wifi_tethering" className="text-[14px]" />
<span>Live USSD</span>
</div>
</div>

<h1 className="font-headline-lg text-headline-lg text-on-surface mt-4 tracking-tight">
          Check Your Phone for the MTN MoMo Prompt
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-xl">
          A direct push notification and USSD prompt has been sent to
          <span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">+256 772 345 678</span>
<span className="text-on-surface-variant/80 font-body-md text-body-md">(Ronald Mukasa)</span>.
        </p>

<div className="w-full max-w-md bg-surface-container rounded-xl p-3 mt-6 flex flex-col gap-2">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="timer" className="text-[16px] text-primary" />
              Prompt validity window
            </span>
<span className="font-currency-code text-currency-code font-black text-primary" id="countdown-text">Expires in 01:15</span>
</div>

<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full w-[70%] transition-all duration-1000 ease-linear" id="progress-bar" style={{"width":"73.5294%"}}></div>
</div>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 mt-8 text-left">

<div className="md:col-span-7 bg-surface-container-low rounded-xl p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3">
<span className="font-label-lg text-label-lg text-on-surface flex items-center gap-2">
<Icon name="format_list_numbered" className="text-[20px] text-primary" />
                  Handset Approval Steps
                </span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                  Instant Auto-Sync
                </span>
</div>

<div className="flex flex-col gap-3.5 mt-2">

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-md text-label-md font-bold shrink-0 mt-0.5">
                    1
                  </div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold">Look at your mobile screen</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">The automatic full-screen MTN USSD popup prompt will appear instantly.</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-md text-label-md font-bold shrink-0 mt-0.5">
                    2
                  </div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold">Verify Merchant &amp; Sum</p>
<div className="mt-1 bg-surface-container-lowest px-3 py-1.5 rounded-lg flex items-center justify-between gap-2 shadow-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant: <strong className="text-on-surface font-label-md text-label-md">SwiftCart Escrow Vault</strong></span>
<span className="font-price-display text-price-display text-primary">UGX 305,000</span>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-md text-label-md font-bold shrink-0 mt-0.5">
                    3
                  </div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold">Enter your secret MTN MoMo 4-digit PIN</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Do not share your PIN with anyone, including delivery riders or agents.</p>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                Telecom Link: Active (Uganda Telecom Hub)
              </span>
<span>Latency: 420ms</span>
</div>
</div>

<div className="md:col-span-5 bg-gradient-to-b from-surface-container to-surface-container-high rounded-xl p-5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-tertiary">
<Icon name="shield_lock" className="text-[22px]" />
<span className="font-label-lg text-label-lg font-bold">Escrow Safety Hold</span>
</div>

<div className="mt-3 bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col items-center justify-center text-center">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                  Release Passcode (One-Time)
                </span>
<div className="my-2 flex items-center justify-center gap-2">
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
<span className="w-7 h-9 rounded bg-surface-container-high flex items-center justify-center font-price-display text-price-display text-on-surface-variant">•</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px]" />
<span>Unlocks on payment confirmation</span>
</div>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                Your money is <strong className="text-on-surface font-label-md text-label-md">NOT paid to the merchant yet</strong>. It is held securely in the SwiftCart Escrow custodial vault until you receive, inspect, and approve your items.
              </p>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-tertiary font-label-sm text-label-sm font-bold bg-tertiary/10 p-2 rounded-lg">
<Icon name="verified" className="text-[16px]" />
<span>100% Guaranteed Refund If Undelivered</span>
</div>
</div>
</div>

<div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

<button className="w-full sm:w-auto h-12 px-6 rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer" id="resend-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[20px]" />
<span>Resend USSD Prompt</span>
</button>

<button className="w-full sm:w-auto h-12 px-6 rounded-xl bg-transparent hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 cursor-pointer" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-[20px]" />
<span>Change Payment Method</span>
</button>

<button className="w-full sm:w-auto h-12 px-4 rounded-xl text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors flex items-center justify-center gap-1 cursor-pointer" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<span>Cancel Order</span>
</button>
</div>
</div>

<div className="bg-surface-container px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="contact_support" className="text-[18px] text-primary shrink-0" />
<span>Didn't receive the prompt on your phone? Dial <strong className="text-on-surface font-label-md text-label-md">*165#</strong> manually or reach SwiftCart Support.</span>
</div>
<a className="shrink-0 flex items-center gap-1.5 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="tel:0800220800" onClick={() => alertToast('Action triggered')}>
<Icon name="phone_in_talk" className="text-[18px]" />
<span>0800 220 800 (Toll Free)</span>
</a>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-on-surface-variant/80 font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<Icon name="lock" className="text-[16px] text-tertiary" />
<span>Bank-Grade 256-Bit Encryption</span>
</div>
<span>•</span>
<div className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[16px] text-secondary" />
<span>Regulated by Bank of Uganda Guidelines</span>
</div>
<span>•</span>
<div className="flex items-center gap-1.5">
<Icon name="cell_tower" className="text-[16px] text-[#E5A900]" />
<span>MTN Uganda MoMo API Verified</span>
</div>
</div>
</div>

</div></main>
    </div>
  );
};

export default Desktop;
