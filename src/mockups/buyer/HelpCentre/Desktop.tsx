// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/help_centre_faq_swiftcart_desktop/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(14,27,77,0.05)]"><div className="w-full bg-inverse-surface text-inverse-on-surface"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between font-label-sm text-label-sm"><div className="flex items-center gap-6"><div className="flex items-center gap-1.5"><Icon name="call" className="text-[14px] text-tertiary-fixed" /><span className="tracking-wide">Toll-Free: 0800 220 800 (Uganda)</span></div><div className="hidden md:flex items-center gap-1.5 text-tertiary-fixed"><Icon name="verified_user" className="text-[14px]" /><span>Swift Escrow Protected Platform</span></div></div><div className="flex items-center gap-6"><div className="flex items-center gap-1.5 cursor-pointer hover:text-surface-bright transition-colors"><Icon name="payments" className="text-[14px]" /><span className="font-currency-code text-currency-code text-tertiary-fixed">UGX</span><span>(Uganda Shilling)</span></div><span className="text-outline/40">|</span><a className="text-inverse-on-surface hover:text-tertiary-fixed transition-colors font-label-sm text-label-sm" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div></div></div><div className="w-full"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6"><div className="flex items-center gap-6 flex-shrink-0"><div className="flex items-center gap-3"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/9e6e1814fdfbfa57.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span></div><div className="hidden xl:flex items-center gap-2 pl-4 border-l border-surface-variant"><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Deliver to</span><div className="flex items-center gap-1 cursor-pointer"><Icon name="location_on" className="text-[16px] text-primary" /><span className="font-label-md text-label-md text-on-surface">Kampala, Nakawa</span><Icon name="expand_more" className="text-[14px] text-on-surface-variant" /></div></div></div></div><div className="flex-1 max-w-2xl"><div className="relative flex items-center w-full h-11 bg-surface-container rounded-xl pl-3 pr-1"><div className="flex items-center gap-1 pr-3 border-r border-outline-variant/40 cursor-pointer"><span className="font-label-md text-label-md text-on-surface-variant">All Hubs</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><input className="w-full bg-transparent border-0 px-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" placeholder="Search 12,000+ verified Kampala sellers, electronics, fresh groceries..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-9 px-4 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-1 font-label-md text-label-md hover:bg-primary-container transition-colors shadow-[0_2px_8px_rgba(218,55,0,0.25)]" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /><span className="hidden md:inline">Search</span></button></div></div><div className="flex items-center gap-5 flex-shrink-0"><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><div className="relative"><Icon name="favorite" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center justify-center">3</span></div><span className="font-label-sm text-label-sm mt-0.5">Wishlist</span></a><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}><div className="relative"><Icon name="local_shipping" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full flex items-center justify-center">1</span></div><span className="font-label-sm text-label-sm mt-0.5">Orders</span></a><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center justify-center">2</span></div><span className="font-label-sm text-label-sm mt-0.5">Cart</span></a><div className="flex items-center gap-2 pl-3 border-l border-surface-variant"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col cursor-pointer"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Account</span><span className="font-label-md text-label-md text-on-surface leading-tight">Mugisha D.</span></div></div></div></div></div><div className="w-full bg-surface-container-low"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-11 flex items-center justify-between"><nav className="flex items-center gap-8 overflow-x-auto" data-active-classes="text-primary font-label-lg"><a aria-current="page" className="whitespace-nowrap transition-colors text-primary font-label-lg" data-path="marketplace-home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="swift-express" href="#" onClick={() => alertToast('Action triggered')}>Swift Express</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="kampala-groceries" href="#" onClick={() => alertToast('Action triggered')}>Kalerwe &amp; Nakasero Fresh</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="consumer-electronics" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Gadgets</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="fashion-hub" href="#" onClick={() => alertToast('Action triggered')}>Kampala Style &amp; Wear</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="escrow-deals" href="#" onClick={() => alertToast('Action triggered')}>Escrow Hot Deals</a></nav><div className="hidden md:flex items-center gap-2 text-tertiary font-label-sm text-label-sm"><Icon name="bolt" className="text-[16px]" /><span>Instant SafeBoda Transit Active</span></div></div></div></header><main className="w-full pt-40 bg-background"><div className="flex flex-col w-full">
<section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container to-background px-6 lg:px-12 pt-10 pb-16">
<div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="absolute top-20 -left-16 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl pointer-events-none"></div>
<div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-md text-label-md text-tertiary">SafeBoda Hub &amp; Escrow Desk Online</span>
<span className="text-outline-variant/60 font-body-sm text-body-sm">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg. resolution 4.2 mins</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight max-w-3xl">
        How can we help you in Kampala today?
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-2xl">
        Instant solutions for SafeBoda deliveries, telecom MoMo escrow balances, merchant verification, and returns across the metro zone.
      </p>
<div className="w-full max-w-3xl mt-8">
<div className="relative flex items-center bg-surface-container-lowest rounded-2xl shadow-xl p-2 transition-all focus-within:shadow-2xl">
<Icon name="search" className="text-primary text-[26px] ml-3 flex-shrink-0" />
<input className="w-full bg-transparent border-0 px-4 py-3 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none" id="faq-search-input" placeholder="Type your issue: e.g. 'SafeBoda rider delayed', 'PIN didn't send', 'Airtel Money refund'..." type="text" />
<button className="h-12 px-6 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg flex items-center gap-2 hover:bg-primary-container transition-all flex-shrink-0 shadow-md" onClick={() => alertToast('Action triggered')}>
<span>Find Answers</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
<div className="flex flex-wrap items-center justify-center gap-2 mt-4">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Suggested queries:</span>
<button className="quick-tag px-3 py-1 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
            Track SafeBoda rider
          </button>
<button className="quick-tag px-3 py-1 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm" onClick={() => alertToast('Action triggered')}>
            MTN MoMo payment refund
          </button>
<button className="quick-tag px-3 py-1 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm" onClick={() => alertToast('Action triggered')}>
            How Escrow works
          </button>
<button className="quick-tag px-3 py-1 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm" onClick={() => alertToast('Action triggered')}>
            Return an item
          </button>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-6 z-10 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="group bg-surface-container-lowest p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
<div>
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<Icon name="two_wheeler" className="text-[26px]" />
</div>
<span className="inline-block mt-4 font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Real-time GPS</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Track SafeBoda Order</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Monitor real-time courier coordinates between downtown hubs, Kalerwe, and your doorstep.
          </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-primary font-label-md text-label-md">
<span>Enter 6-digit Order ID</span>
<Icon name="chevron_right" className="text-[18px] group-hover:translate-x-1 transition-transform" />
</div>
</div>
<div className="group bg-surface-container-lowest p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
<div>
<div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
<Icon name="lock_reset" className="text-[26px]" />
</div>
<span className="inline-block mt-4 font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">Telecom Ledger</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Escrow &amp; Refund Status</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Check held MTN/Airtel MoMo funds, unreleased amounts, and dispute cooling periods.
          </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-tertiary font-label-md text-label-md">
<span>Inspect Wallet Hold</span>
<Icon name="chevron_right" className="text-[18px] group-hover:translate-x-1 transition-transform" />
</div>
</div>
<div className="group bg-surface-container-lowest p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
<div>
<div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error group-hover:bg-error group-hover:text-on-error transition-colors">
<Icon name="shield_person" className="text-[26px]" />
</div>
<span className="inline-block mt-4 font-label-sm text-label-sm text-error uppercase tracking-wider font-bold">URSB Integrity Unit</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Report Fake Product</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Received counterfeit gear or unresponsive storefront? Flag merchant licenses immediately.
          </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-error font-label-md text-label-md">
<span>Trigger Store Audit</span>
<Icon name="chevron_right" className="text-[18px] group-hover:translate-x-1 transition-transform" />
</div>
</div>
<div className="group bg-surface-container-lowest p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
<div>
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<Icon name="headset_mic" className="text-[26px]" />
</div>
<span className="inline-block mt-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">24/7 Human Desk</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Live Human Support</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Connect directly via WhatsApp (+256 700 220 800) or our toll-free hotline 0800 220 800.
          </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-secondary font-label-md text-label-md">
<span>Start WhatsApp Chat</span>
<Icon name="chevron_right" className="text-[18px] group-hover:translate-x-1 transition-transform" />
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-md">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Knowledge Directory</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-2">Browse by Subject</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Select a category to filter common scenarios across Kampala trading hubs.</p>
<nav className="flex flex-col gap-1.5 mt-6" id="faq-category-nav">
<button className="faq-nav-btn active flex items-center justify-between px-4 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md transition-colors text-left" data-cat="all" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<span className="flex items-center gap-2.5">
<Icon name="apps" className="text-[18px]" />
<span>All Help Topics</span>
</span>
<span className="text-xs bg-surface-container-lowest/20 px-2 py-0.5 rounded-full">15</span>
</button>
<button className="faq-nav-btn flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-left" data-cat="buying" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-2.5">
<Icon name="local_shipping" className="text-[18px] text-primary" />
<span>Buying &amp; SafeBoda Ordering</span>
</span>
<span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">3</span>
</button>
<button className="faq-nav-btn flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-left" data-cat="momo" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-2.5">
<Icon name="payments" className="text-[18px] text-tertiary" />
<span>MTN &amp; Airtel MoMo Rails</span>
</span>
<span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">3</span>
</button>
<button className="faq-nav-btn flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-left" data-cat="escrow" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span className="flex items-center gap-2.5">
<Icon name="verified_user" className="text-[18px] text-primary" />
<span>SwiftCart Escrow Guarantee</span>
</span>
<span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">3</span>
</button>
<button className="faq-nav-btn flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-left" data-cat="returns" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-2.5">
<Icon name="assignment_return" className="text-[18px] text-secondary" />
<span>Returns &amp; Rapid Reversal</span>
</span>
<span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">3</span>
</button>
<button className="faq-nav-btn flex items-center justify-between px-4 py-3 rounded-xl hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-left" data-cat="merchant" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-2.5">
<Icon name="storefront" className="text-[18px] text-on-surface-variant" />
<span>Verified Merchant &amp; Payouts</span>
</span>
<span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">3</span>
</button>
</nav>
</div>
<div className="bg-surface-container p-6 rounded-2xl flex flex-col gap-4">
<div className="flex items-center gap-2 text-tertiary">
<Icon name="security" className="text-[20px]" />
<span className="font-label-md text-label-md uppercase tracking-wider">Escrow Protocol Tip</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
            Never verbally share your <strong>6-digit delivery PIN</strong> with any SafeBoda courier over the phone. Only dictate it when physically holding and inspecting the parcels.
          </p>
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<Icon name="info" className="text-[14px]" />
<span>Bank of Uganda Regulatory Sandboxed</span>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-md h-48 bg-cover bg-center" data-alt="A brightly lit customer support counter at SwiftCart Uganda in Nakasero Kampala, friendly Ugandan staff wearing branded orange polo shirts assisting a customer holding a package, clean modern office interior with warm ambient sunlight" style={{"backgroundImage":"url('/images/8363c70080cd3af8.webp')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent p-5 flex flex-col justify-end">
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold uppercase tracking-wider">Walk-In Mediation</span>
<span className="font-headline-sm text-headline-sm text-inverse-on-surface">Nakasero Customer Hub</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface/80">Plot 14 Lumumba Ave • Mon-Sat</span>
</div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-8" id="faq-container">
<div className="faq-group flex flex-col gap-3" data-category="buying">
<div className="flex items-center gap-2.5 pb-2">
<span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<Icon name="local_shipping" className="text-[20px]" />
</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Buying &amp; Ordering on SwiftCart</h3>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">What exact delivery coverage zones are currently operational in Uganda?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-3">
<p>SwiftCart operates high-speed dedicated fulfillment clusters covering Greater Kampala and major metropolitan zones:</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
<div className="p-2.5 rounded-lg bg-surface-container">
<span className="font-label-md text-label-md text-on-surface block">Kampala Central</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">45-min express dispatch</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container">
<span className="font-label-md text-label-md text-on-surface block">Wakiso Metro</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nansana, Kira, Kyaliwajjala</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container">
<span className="font-label-md text-label-md text-on-surface block">Entebbe Corridor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Expressway route 2 hrs</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container">
<span className="font-label-md text-label-md text-on-surface block">Mukono Town</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Same-day afternoon batch</span>
</div>
</div>
<p className="text-xs text-on-surface-variant">Upcountry delivery (Jinja, Mbarara, Gulu) operates via swift regional bus-cargo partners with 24-hour delivery SLAs.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">How does the 6-digit SafeBoda delivery PIN verification work?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>When an order is dispatched from a certified store (e.g., Pioneer Mall or Nakasero Market), an encrypted 6-digit PIN is generated on your SwiftCart mobile app and mirrored via SMS to your registered Uganda phone number.</p>
<p>When the SafeBoda rider arrives:</p>
<ol className="list-decimal pl-5 space-y-1">
<li>Inspect packaging and seal integrity.</li>
<li>Verify contents match your digital receipt.</li>
<li>Read the 6-digit code to the rider. Their app validates it instantly, releasing funds to the merchant escrow queue.</li>
</ol>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<span className="font-label-lg text-label-lg text-on-surface">Can I cancel an order once the rider is assigned?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>You can cancel freely within <strong>10 minutes</strong> of placing the order at 0% fee. If the SafeBoda rider has already collected items from the merchant warehouse, a flat UGX 3,000 transit allowance is remitted to the rider, and the remaining item value is refunded back to your MoMo balance automatically.</p>
</div>
</div>
</div>
<div className="faq-group flex flex-col gap-3" data-category="momo">
<div className="flex items-center gap-2.5 pb-2">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="payments" className="text-[20px]" />
</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Payments &amp; MTN / Airtel MoMo Rails</h3>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">What should I do if the USSD prompt (*165# / *185#) does not pop up?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-3">
<p>Telecom network spikes can occasionally delay the push notification on MTN or Airtel SIM cards. Follow these steps:</p>
<div className="flex flex-col sm:flex-row gap-3">
<div className="p-3 bg-surface-container rounded-lg flex-1">
<span className="font-label-md text-label-md text-on-surface block">MTN MoMo Manual Approval</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dial <strong>*165#</strong> &gt; Select 'My Account' &gt; 'Pending Approvals' &gt; Enter your MoMo PIN to complete payment.</p>
</div>
<div className="p-3 bg-surface-container rounded-lg flex-1">
<span className="font-label-md text-label-md text-on-surface block">Airtel Money Manual Push</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dial <strong>*185#</strong> &gt; Select 'Pending Transactions' &gt; Authorize SwiftCart Escrow reference.</p>
</div>
</div>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>
<span className="font-label-lg text-label-lg text-on-surface">Are there hidden telecom transaction or withdrawal fees at checkout?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p><strong>Zero merchant checkout fees.</strong> SwiftCart absorbs carrier API gateway charges on all MTN Mobile Money and Airtel Money deposits. The price shown on the checkout screen in UGX is the absolute total deducted from your mobile wallet.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">Money was deducted from my MoMo balance, but my order is showing 'Unpaid'?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>This occurs when carrier webhooks experience timeout delays. Our background reconciliation daemon matches telecom reference IDs every 90 seconds.</p>
<p>If your status does not update within 5 minutes, enter your MoMo Transaction ID (e.g. <code>12849204812</code>) into our automated reconciliation tool in the 'Orders' tab, or ping our WhatsApp support line for instant manual verification.</p>
</div>
</div>
</div>
<div className="faq-group flex flex-col gap-3" data-category="escrow">
<div className="flex items-center gap-2.5 pb-2">
<span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<Icon name="verified_user" className="text-[20px]" />
</span>
<h3 className="font-headline-md text-headline-md text-on-surface">SwiftCart Escrow Guarantee</h3>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">Where do my funds sit between payment and SafeBoda handover?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>Your money never goes directly to an individual vendor's personal account. Payments sit safely in a <strong>regulated Trust Escrow Account</strong> supervised under the Bank of Uganda National Payments Systems regulatory sandbox.</p>
<p>The vendor cannot withdraw, transfer, or claim these shillings until the buyer hands over the authenticated PIN code upon physical delivery.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">What is the 48-hour Post-Delivery Dispute Window?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>Even after providing your PIN code for electronic goods, power tools, or household machinery, merchant payout balance undergoes a <strong>48-hour hold buffer</strong>. If the product develops defects or displays hidden non-conformities, clicking "Raise Escrow Dispute" freezes merchant liquidation instantly pending inspection.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">How are disputes judged if a seller refuses to accept a returned item?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>Disputes are reviewed by our Nakasero Dispute Review Committee. The committee checks pre-dispatch warehouse footage, serial numbers registered in the system, and buyer unpack photos. 94% of validated non-genuine or damaged claims are decided in favor of the consumer within 24 hours.</p>
</div>
</div>
</div>
<div className="faq-group flex flex-col gap-3" data-category="returns">
<div className="flex items-center gap-2.5 pb-2">
<span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
<Icon name="assignment_return" className="text-[20px]" />
</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Returns &amp; Rapid Reversal</h3>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span className="font-label-lg text-label-lg text-on-surface">What is the step-by-step return process on SwiftCart?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-3">
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center flex-shrink-0">1</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Open 'My Orders' &amp; Select Item</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tap 'Request Return / Exchange' and upload 2 photos showing the issue or mismatch.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center flex-shrink-0">2</span>
<div>
<span className="font-label-md text-label-md text-on-surface">SafeBoda Reverse Pickup Dispatched</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">A dedicated SafeBoda returns courier will arrive at your address within 2 hours with return seal bag.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center flex-shrink-0">3</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Instant MoMo Credit</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Once the Nakasero or Pioneer Mall intake hub scans the sealed bag, refunds disburse back into your MTN or Airtel wallet immediately.</p>
</div>
</div>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">Do I have to pay the SafeBoda return pickup fee?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p><strong>Returns caused by wrong, counterfeit, or broken goods are 100% free</strong> for the buyer. The pickup cost is automatically charged to the seller's escrow security deposit. For change-of-mind fashion exchanges (size swap), a modest flat transit fee of UGX 4,000 applies.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">How long until the money shows on my mobile phone?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>Unlike traditional cards taking 7–14 business days, SwiftCart's automated telecom integrations process MoMo disbursements in <strong>less than 90 seconds</strong> after return hub clearance. You will receive standard telecom SMS confirmation from 165 or 185.</p>
</div>
</div>
</div>
<div className="faq-group flex flex-col gap-3" data-category="merchant">
<div className="flex items-center gap-2.5 pb-2">
<span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<Icon name="storefront" className="text-[20px]" />
</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Becoming a Verified Merchant</h3>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">What documents are required for URSB Merchant Certification?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>To preserve buyer trust across Uganda, merchants selling on SwiftCart must provide:</p>
<ul className="list-disc pl-5 space-y-1">
<li>Uganda Registration Services Bureau (URSB) Certificate of Incorporation or Business Name Registration.</li>
<li>Uganda Revenue Authority (URA) Tax Identification Number (TIN).</li>
<li>Valid National ID (NIRA NIN) of the principal proprietor.</li>
<li>Physical shop address verification (e.g. Kikuubo, Pioneer Mall, Garden City, or Luwum Street stall contract).</li>
</ul>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">What are the seller commission rates and fees?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>SwiftCart operates on a clear, tiered commission matrix ranging strictly between <strong>8% and 12%</strong> on completed orders. There are no monthly listing subscriptions, no catalog fees, and zero hidden platform upkeep charges.</p>
</div>
</div>
<div className="faq-item bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden">
<button className="faq-toggle w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface">When and how are verified sellers paid out?</span>
<Icon name="expand_more" className="text-on-surface-variant faq-icon transition-transform" />
</button>
<div className="faq-body px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md hidden flex-col gap-2">
<p>Payouts process automatically on a <strong>Daily 5:00 PM EAT cycle</strong> directly into your merchant MTN MoMo Pay merchant code, Airtel Pay merchant wallet, or registered commercial bank account (Stanbic, Centenary, Absa) with zero manual withdrawal delays.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-low py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col items-center text-center mb-12">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Direct Channels</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Still need support? We're on the ground.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-xl">
          Speak with our dedicated Kampala team via direct phone line, rapid WhatsApp messaging, or visit our central offices.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md flex flex-col justify-between">
<div>
<div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
<Icon name="call" className="text-[32px]" />
</div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Toll-Free Helpline</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">0800 220 800</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Free calls from all Ugandan telecom networks (MTN, Airtel, Lyca Mobile).
            </p>
<div className="mt-4 pt-4 flex flex-col gap-1.5 text-xs text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="schedule" className="text-[16px] text-tertiary" />
<span>Monday – Saturday: 7:00 AM – 10:00 PM EAT</span>
</div>
<div className="flex items-center gap-2">
<Icon name="language" className="text-[16px] text-tertiary" />
<span>Luganda, English, Runyankole, Luo supported</span>
</div>
</div>
</div>
<button className="mt-8 w-full h-12 rounded-xl bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="phone_in_talk" className="text-[18px]" />
<span>Dial Helpline Now</span>
</button>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-4 right-4 bg-tertiary/10 text-tertiary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
<span>~2 min reply</span>
</div>
<div>
<div className="w-14 h-14 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
<Icon name="chat" className="text-[32px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Instant Chat Desk</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">+256 700 220 800</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Direct official WhatsApp channel. Send parcel screenshots, rider numbers, and payment slips directly.
            </p>
<div className="mt-4 pt-4 flex flex-col gap-1.5 text-xs text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span>Official Green Verified WhatsApp Profile</span>
</div>
<div className="flex items-center gap-2">
<Icon name="bolt" className="text-[16px] text-tertiary" />
<span>Immediate SafeBoda rider intervention</span>
</div>
</div>
</div>
<button className="mt-8 w-full h-12 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md hover:bg-tertiary-container transition-colors flex items-center justify-center gap-2 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="send" className="text-[18px]" />
<span>Open WhatsApp Chat</span>
</button>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md flex flex-col justify-between">
<div>
<div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
<Icon name="apartment" className="text-[32px]" />
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Physical Mediation</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">Plot 14 Lumumba Ave</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Nakasero Commercial District, Kampala. In-person mediation room, physical product testing, &amp; returns drop-off.
            </p>
<div className="mt-4 pt-4 flex flex-col gap-1.5 text-xs text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="location_on" className="text-[16px] text-secondary" />
<span>Opposite French Embassy, Lumumba Plaza</span>
</div>
<div className="flex items-center gap-2">
<Icon name="verified" className="text-[16px] text-secondary" />
<span>Certified On-Site Electronics Technicians</span>
</div>
</div>
</div>
<button className="mt-8 w-full h-12 rounded-xl bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2" onClick={() => alertToast('Action triggered')}>
<Icon name="directions" className="text-[18px]" />
<span>Get Hub Directions</span>
</button>
</div>
</div>
<div className="mt-12 bg-surface-container-lowest rounded-2xl p-6 shadow-md overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
<Icon name="map" className="text-[28px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">SwiftCart Central Operations &amp; Dispute Hub</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Plot 14 Lumumba Avenue, Nakasero, Kampala Central Division</p>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-xs font-label-md text-on-surface">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Intake Gate Open</span>
</div>
<a className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap" href="#" onClick={() => alertToast('Action triggered')}>
<span>View Map</span>
<Icon name="open_in_new" className="text-[16px]" />
</a>
</div>
</div>
<div className="w-full h-44 bg-cover bg-center rounded-xl mt-5 shadow-inner" data-location="Plot 14 Lumumba Avenue, Nakasero, Kampala, Uganda" style={{"backgroundImage":"url('/images/1156bd4e76e805e3.webp')"}}></div>
</div>
</div>
</section>

</div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface mt-20"><div className="w-full bg-inverse-surface/90 border-b border-surface-variant/10"><div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="verified" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">100% Escrow Protection</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Seller paid only when you inspect and confirm goods.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-fixed flex-shrink-0"><Icon name="two_wheeler" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">45-Min SafeBoda City Hub</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Lightning dispatch across Kampala &amp; Wakiso metro.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-fixed flex-shrink-0"><Icon name="contactless" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">Zero MoMo Fees</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">MTN MoMo &amp; Airtel Money deposits are 100% free.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="gavel" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">URSB Certified Stores</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Verified merchant licenses and physical showroom registry.</p></div></div></div></div><div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"><div className="flex flex-col gap-4"><div className="flex items-center gap-3"><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain brightness-200" src={`${assetBase}/images/f1bbfd17fdb92d75.webp`} /><span className="font-headline-sm text-headline-sm text-surface-bright">SwiftCart</span></div><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Empowering Kampala buyers and trusted Ugandan vendors through instantaneous telecom escrow settlements and safe express delivery.</p><div className="flex items-center gap-2 pt-2 font-label-md text-label-md text-tertiary-fixed"><Icon name="support_agent" className="text-[18px]" /><span>Plot 14 Lumumba Ave, Nakasero, Kampala</span></div></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Marketplace Hubs</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" data-path="marketplace-home" href="#" onClick={() => alertToast('Action triggered')}>Nakasero Organic Fresh Foods</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="consumer-electronics" href="#" onClick={() => alertToast('Action triggered')}>Pioneer Mall Tech Depot</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="fashion-hub" href="#" onClick={() => alertToast('Action triggered')}>Downtown Kikuubo Bulk Center</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="swift-express" href="#" onClick={() => alertToast('Action triggered')}>Kisekka Genuine Auto Spares</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="escrow-deals" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>Daily Kampala Flash Discounts</a></li></ul></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Buyer Security &amp; Escrow</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>How Swift Escrow Protects You</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>72-Hour Return &amp; Refund Guarantee</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Verified Merchant Badge Process</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Center</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Safe Handover Inspection Guide</a></li></ul></div><div className="flex flex-col gap-4"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Uganda Payment Rails</h5><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Direct encrypted instant merchant settlement powered by local carriers:</p><div className="flex flex-wrap gap-2"><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="cell_tower" className="text-[16px] text-tertiary-fixed" />MTN MoMo Pay</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="sim_card" className="text-[16px] text-primary-fixed" />Airtel Money UG</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="credit_card" className="text-[16px] text-secondary-fixed" />Visa / Stanbic FlexiPay</span></div><div className="pt-2"><span className="font-label-sm text-label-sm text-tertiary-fixed block">National ID (NIRA) Compliant</span><span className="font-body-sm text-body-sm text-inverse-on-surface/60">Bank of Uganda Sandbox Partner</span></div></div></div><div className="w-full border-t border-surface-variant/10 py-6"><div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-inverse-on-surface/60"><p>© 2025 SwiftCart Uganda Technologies Ltd. Registered with URSB (Reg #800200331902). All rights reserved.</p><div className="flex items-center gap-6 font-label-sm text-label-sm"><span>Privacy Policy</span><span>Buyer Escrow Terms</span><span>Kampala Delivery SLA</span><span>Security Center</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
