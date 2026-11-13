// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/terms_of_service_privacy_swiftcart_desktop/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(14,27,77,0.05)]"><div className="w-full bg-inverse-surface text-inverse-on-surface"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between font-label-sm text-label-sm"><div className="flex items-center gap-6"><div className="flex items-center gap-1.5"><Icon name="call" className="text-[14px] text-tertiary-fixed" /><span className="tracking-wide">Toll-Free: 0800 220 800 (Uganda)</span></div><div className="hidden md:flex items-center gap-1.5 text-tertiary-fixed"><Icon name="verified_user" className="text-[14px]" /><span>Swift Escrow Protected Platform</span></div></div><div className="flex items-center gap-6"><div className="flex items-center gap-1.5 cursor-pointer hover:text-surface-bright transition-colors"><Icon name="payments" className="text-[14px]" /><span className="font-currency-code text-currency-code text-tertiary-fixed">UGX</span><span>(Uganda Shilling)</span></div><span className="text-outline/40">|</span><a className="text-inverse-on-surface hover:text-tertiary-fixed transition-colors font-label-sm text-label-sm" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div></div></div><div className="w-full"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6"><div className="flex items-center gap-6 flex-shrink-0"><div className="flex items-center gap-3"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/8077dcff605ab76e.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span></div><div className="hidden xl:flex items-center gap-2 pl-4 border-l border-surface-variant"><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Deliver to</span><div className="flex items-center gap-1 cursor-pointer"><Icon name="location_on" className="text-[16px] text-primary" /><span className="font-label-md text-label-md text-on-surface">Kampala, Nakawa</span><Icon name="expand_more" className="text-[14px] text-on-surface-variant" /></div></div></div></div><div className="flex-1 max-w-2xl"><div className="relative flex items-center w-full h-11 bg-surface-container rounded-xl pl-3 pr-1"><div className="flex items-center gap-1 pr-3 border-r border-outline-variant/40 cursor-pointer"><span className="font-label-md text-label-md text-on-surface-variant">All Hubs</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><input className="w-full bg-transparent border-0 px-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" placeholder="Search 12,000+ verified Kampala sellers, electronics, fresh groceries..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-9 px-4 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-1 font-label-md text-label-md hover:bg-primary-container transition-colors shadow-[0_2px_8px_rgba(218,55,0,0.25)]" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /><span className="hidden md:inline">Search</span></button></div></div><div className="flex items-center gap-5 flex-shrink-0"><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><div className="relative"><Icon name="favorite" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center justify-center">3</span></div><span className="font-label-sm text-label-sm mt-0.5">Wishlist</span></a><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}><div className="relative"><Icon name="local_shipping" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full flex items-center justify-center">1</span></div><span className="font-label-sm text-label-sm mt-0.5">Orders</span></a><a className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center justify-center">2</span></div><span className="font-label-sm text-label-sm mt-0.5">Cart</span></a><div className="flex items-center gap-2 pl-3 border-l border-surface-variant"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden lg:flex flex-col cursor-pointer"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Account</span><span className="font-label-md text-label-md text-on-surface leading-tight">Mugisha D.</span></div></div></div></div></div><div className="w-full bg-surface-container-low"><div className="max-w-7xl mx-auto px-6 lg:px-12 h-11 flex items-center justify-between"><nav className="flex items-center gap-8 overflow-x-auto" data-active-classes="text-primary font-label-lg"><a aria-current="page" className="whitespace-nowrap transition-colors text-primary font-label-lg" data-path="marketplace-home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="swift-express" href="#" onClick={() => alertToast('Action triggered')}>Swift Express</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="kampala-groceries" href="#" onClick={() => alertToast('Action triggered')}>Kalerwe &amp; Nakasero Fresh</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="consumer-electronics" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Gadgets</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="fashion-hub" href="#" onClick={() => alertToast('Action triggered')}>Kampala Style &amp; Wear</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" data-path="escrow-deals" href="#" onClick={() => alertToast('Action triggered')}>Escrow Hot Deals</a></nav><div className="hidden md:flex items-center gap-2 text-tertiary font-label-sm text-label-sm"><Icon name="bolt" className="text-[16px]" /><span>Instant SafeBoda Transit Active</span></div></div></div></header><main className="w-full pt-40 bg-background"><div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden bg-surface-container-low pb-12 pt-8">
<div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-4">
<a className="hover:text-primary transition-colors" data-path="marketplace-home" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-on-surface font-label-lg text-label-lg">Legal &amp; Consumer Trust Center</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-surface-variant/40">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm mb-3">
<Icon name="gavel" className="text-[14px]" />
<span>Statutory Compliance &amp; Consumer Fair Trade Framework</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Terms of Service &amp; Privacy Policy</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Clear, binding guidelines governing SwiftCart Uganda marketplace commerce, decentralized telecom escrow settlements, physical doorstep inspection rights, and national data safeguards.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
<button className="h-12 px-6 rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group" id="pdf-download-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="picture_as_pdf" className="text-[20px] text-primary group-hover:scale-110 transition-transform" />
<span>Download Terms PDF (240 KB)</span>
</button>
<button className="h-12 px-6 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[20px]" />
<span>Print Policy</span>
</button>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-4 text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
<Icon name="schedule" className="text-[16px] text-primary" />
<span>Last Updated: <strong className="text-on-surface">October 2024</strong></span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
<Icon name="verified" className="text-[16px] text-secondary" />
<span>Legal Revision: <strong className="text-on-surface">Version 3.2</strong></span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
<Icon name="account_balance" className="text-[16px] text-tertiary" />
<span>Certified by <strong className="text-on-surface">URSB &amp; Ministry of Trade</strong></span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
<Icon name="shield" className="text-[16px] text-tertiary" />
<span>Uganda Data Protection Act 2019 Registry #NITA-UG-7881</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">
<aside className="lg:col-span-4 sticky top-44 z-30">
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between pb-3 mb-2">
<span className="font-label-lg text-label-lg text-on-surface tracking-wide uppercase">Table of Contents</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant">8 Sections</span>
</div>
<nav className="flex flex-col gap-1 font-body-md text-body-md text-on-surface-variant" id="terms-toc">
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all bg-primary/10 text-primary font-label-md text-label-md" href="#acceptance" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5">01</span>
<span className="truncate">Acceptance of Terms</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#escrow-rules" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">02</span>
<span className="truncate">Buyer Escrow Protection Rules</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#safeboda-handover" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">03</span>
<span className="truncate">SafeBoda Delivery &amp; Handover PIN</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#payments-momo" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">04</span>
<span className="truncate">Payments via MTN MoMo &amp; Airtel</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#return-arbitration" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">05</span>
<span className="truncate">Return &amp; Dispute Arbitration</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#merchant-obligations" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">06</span>
<span className="truncate">Merchant Obligations &amp; Zero Counterfeit</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#data-privacy" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">07</span>
<span className="truncate">Data Privacy &amp; 2019 Act</span>
</a>
<a className="toc-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:bg-surface-container hover:text-on-surface" href="#legal-notices" onClick={() => alertToast('Action triggered')}>
<span className="font-currency-code text-currency-code w-5 text-outline">08</span>
<span className="truncate">Contact &amp; Statutory Legal Notices</span>
</a>
</nav>
<div className="mt-6 pt-5 border-t border-surface-variant/30 flex flex-col gap-3">
<div className="p-3.5 rounded-xl bg-surface-container flex items-start gap-3">
<Icon name="verified_user" className="text-[20px] text-tertiary flex-shrink-0 mt-0.5" />
<div>
<p className="font-label-md text-label-md text-on-surface">Bank of Uganda Escrow Sandbox</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">All customer funds quarantined in tier-one custodian banks under FinTech regulation.</p>
</div>
</div>
<div className="p-3.5 rounded-xl bg-surface-container flex items-start gap-3">
<Icon name="help_outline" className="text-[20px] text-primary flex-shrink-0 mt-0.5" />
<div>
<p className="font-label-md text-label-md text-on-surface">Legal Ombudsman Desk</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mon–Fri: 8am – 6pm EAT<br /><strong className="text-on-surface">legal@swiftcart.ug</strong></p>
</div>
</div>
</div>
</div>
</aside>
<main className="lg:col-span-8 flex flex-col gap-10">
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="acceptance">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-currency-code text-currency-code flex items-center justify-center">01</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Acceptance of Terms</h2>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Section 1.0</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              Welcome to SwiftCart Uganda, operated by SwiftCart Uganda Technologies Ltd (URSB Reg #800200331902). By accessing our website, mobile application, or engaging via our automated USSD merchant integrations, you agree unconditionally to be bound by these Terms of Service, the Uganda Electronic Transactions Act 2011, and the Electronic Signatures Act 2011.
            </p>
<p>
              If you do not agree with any provision laid out herein, you must immediately terminate use of our marketplace platform and discontinue placing, processing, or fulfilling merchant orders.
            </p>
<div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3 mt-4">
<Icon name="info" className="text-[22px] text-secondary flex-shrink-0" />
<div>
<span className="font-label-lg text-label-lg text-on-surface">Legal Capacity Under Ugandan Law</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  You declare that you are at least 18 years of age or possess valid registered consent from a legal guardian under the Laws of Uganda, and are legally capable of executing binding contractual engagements.
                </p>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="escrow-rules">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary font-currency-code text-currency-code flex items-center justify-center">02</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Buyer Escrow Protection Rules</h2>
</div>
<span className="px-2.5 py-1 rounded bg-tertiary-container/10 font-label-sm text-label-sm text-tertiary">Statutory Custody</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              SwiftCart operates an enforceable third-party telecom escrow system designed to eliminate digital commerce fraud across Kampala, Wakiso, and national delivery corridors.
            </p>
<div className="p-5 rounded-xl bg-tertiary-container/10 text-tertiary flex items-start gap-4">
<Icon name="lock" className="text-[28px] flex-shrink-0" />
<div className="space-y-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Mandatory 6-Digit Doorstep OTP Release Mechanism</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
                  When you make payment via MTN MoMo, Airtel Money, or Card rails, funds are immediately quarantined in an independent escrow account. The vendor is <strong className="text-on-surface">NEVER credited</strong> until you examine the parcel at your doorstep and verbally provide or digitally validate the secure 6-digit confirmation OTP to the delivery agent.
                </p>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface pt-2">Escrow Quarantine Protocols:</h3>
<ul className="space-y-3 font-body-md text-body-md text-on-surface-variant pl-2">
<li className="flex items-start gap-2.5">
<Icon name="check_circle" className="text-[18px] text-tertiary flex-shrink-0 mt-0.5" />
<span><strong>No Advance Release:</strong> No customer service executive or merchant has authority to manually override escrow prior to confirmed doorstep receipt without your express recorded confirmation.</span>
</li>
<li className="flex items-start gap-2.5">
<Icon name="check_circle" className="text-[18px] text-tertiary flex-shrink-0 mt-0.5" />
<span><strong>48-Hour Auto-Escrow Hold:</strong> For high-value electronics (over UGX 500,000) and mechanical goods, a secondary inspection window remains open for functional failure claims.</span>
</li>
<li className="flex items-start gap-2.5">
<Icon name="check_circle" className="text-[18px] text-tertiary flex-shrink-0 mt-0.5" />
<span><strong>Zero-Deduction Refund:</strong> If a merchant fails to dispatch within agreed delivery SLAs, 100% of escrow capital returns to the original telecom wallet within 4 hours.</span>
</li>
</ul>
<div className="relative overflow-hidden rounded-xl bg-surface-container p-5 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<Icon name="shield_person" className="text-[28px]" />
</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Standard Escrow Settlement Flow</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Consumer Pays → Safe Custody → Doorstep Check → OTP Release</div>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-secondary shadow-sm">Secured by Stanbic Custody</span>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="safeboda-handover">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-currency-code text-currency-code flex items-center justify-center">03</span>
<h2 className="font-headline-md text-headline-md text-on-surface">SafeBoda Delivery &amp; Handover Code Protocol</h2>
</div>
<span className="px-2.5 py-1 rounded bg-primary-fixed font-label-sm text-label-sm text-primary">Strict Doorstep Rule</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              SwiftCart has partnered with verified SafeBoda City Hub dispatchers and certified regional fleet operators. The safety and integrity of the physical delivery handoff are governed by mandatory protocol:
            </p>
<div className="p-5 rounded-xl bg-error-container/40 text-on-error-container flex items-start gap-4">
<Icon name="warning" className="text-[28px] text-error flex-shrink-0" />
<div className="space-y-1">
<h4 className="font-label-lg text-label-lg text-error">CRITICAL CONSUMER WARNING: DO NOT DISCLOSE PIN PRE-DELIVERY</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
                  You must <strong className="text-error">NEVER</strong> share your delivery verification code or SMS PIN over a phone call, WhatsApp chat, or before the courier is physically standing before you. Doing so constitutes premature acceptance and forfeits immediate automated doorstep rejection claims.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
<div className="p-4 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2 mb-2 text-on-surface font-label-lg text-label-lg">
<Icon name="inventory_2" className="text-[18px] text-tertiary" />
<span>Step 1: Inspect External Seal</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Verify the tamper-evident SwiftCart holographic tape is unbroken. If torn or re-taped, reject handover immediately without providing the code.
                </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2 mb-2 text-on-surface font-label-lg text-label-lg">
<Icon name="pin" className="text-[18px] text-primary" />
<span>Step 2: Authenticate Only Upon Approval</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Only present the 6-digit PIN to the rider's SafeBoda merchant app once you are fully satisfied with physical condition and quantity.
                </p>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="payments-momo">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary font-currency-code text-currency-code flex items-center justify-center">04</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Payments via MTN MoMo &amp; Airtel Money</h2>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Telecom Infrastructure</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              SwiftCart integrates directly with national telecom payment gateways under Bank of Uganda regulatory sandboxes. We respect absolute boundary divisions between our marketplace and your telecom balance:
            </p>
<div className="p-5 rounded-xl bg-surface-container flex items-start gap-4">
<Icon name="phonelink_lock" className="text-[28px] text-secondary flex-shrink-0" />
<div className="space-y-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Absolute Mobile Money PIN Security Guarantee</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
                  SwiftCart <strong className="text-on-surface">NEVER</strong> collects, stores, transmits, or prompts for your personal MTN MoMo or Airtel Money secret PIN. All debit authorizations execute entirely on encrypted carrier USSD prompts pushed directly to your mobile handset via official shortcodes (*165# or *185#).
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
<div className="p-3.5 rounded-xl bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-primary">0%</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Buyer MoMo Transaction Surcharge</p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-secondary">256-bit</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">End-to-End TLS Financial Tunneling</p>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-tertiary">&lt; 15s</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Instant Settlement Webhook Confirmation</p>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="return-arbitration">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary font-currency-code text-currency-code flex items-center justify-center">05</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Return &amp; Dispute Arbitration Policy</h2>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Uganda ETA 2011</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              Under the Uganda Electronic Transactions Act 2011 (Part IV: Consumer Protection), you are entitled to fair commercial transparency, accurate representation, and structured recourse mechanisms.
            </p>
<div className="p-5 rounded-xl bg-surface-container-low">
<div className="flex items-center gap-2 mb-2">
<Icon name="timer" className="text-[20px] text-primary" />
<h4 className="font-label-lg text-label-lg text-on-surface">48-Hour Post-Delivery Inspection Window</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Even after physical OTP entry, buyers possess a statutory 48-hour warranty against latent technical defects, counterfeit parts, or goods deviating fundamentally from listing specifications. Initiating a claim locks merchant funds from wallet payout pending swift dispute triage.
              </p>
</div>
<div className="space-y-2">
<h4 className="font-label-lg text-label-lg text-on-surface">Arbitration Triage Steps:</h4>
<ol className="space-y-2 font-body-md text-body-md text-on-surface-variant list-decimal pl-5">
<li><strong className="text-on-surface">Dispute Ticket Logged:</strong> Buyer uploads high-definition photographic or video proof via SwiftCart portal within 48 hours of dispatch receipt.</li>
<li><strong className="text-on-surface">Neutral Technical Assessment:</strong> SwiftCart inspection hubs in Nakasero review claims alongside the vendor's pre-dispatch manifest within 24 working hours.</li>
<li><strong className="text-on-surface">Direct Binding Adjudication:</strong> If merchant fault is upheld, a full refund plus SafeBoda reverse transit credit is returned automatically to the buyer's MoMo account.</li>
</ol>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="merchant-obligations">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-error/10 text-error font-currency-code text-currency-code flex items-center justify-center">06</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Merchant Obligations &amp; Counterfeit Zero-Tolerance</h2>
</div>
<span className="px-2.5 py-1 rounded bg-error-container/20 font-label-sm text-label-sm text-error">Strict Sanctions</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              Every vendor operating on SwiftCart undergoes National Identification and Registration Authority (NIRA) verification and physical trading license registry check with URSB.
            </p>
<div className="p-5 rounded-xl bg-surface-container flex items-start gap-4">
<Icon name="gavel" className="text-[28px] text-error flex-shrink-0" />
<div className="space-y-1">
<h4 className="font-label-lg text-label-lg text-on-surface">Automatic Account Seizure &amp; Criminal Referral</h4>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Supplying cloned electronics, expired food items from central markets, or grey-market uncertified pharmaceutical products will result in permanent vendor blacklist, escrow balance confiscation for consumer restitution, and immediate reporting to the Uganda Police Special Investigations Directorate (SID).
                </p>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="data-privacy">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary font-currency-code text-currency-code flex items-center justify-center">07</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Data Privacy &amp; Uganda Data Protection Act 2019</h2>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">NITA-UG Compliant</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              SwiftCart operates in complete alignment with the Data Protection and Privacy Act 2019 of Uganda and Data Protection Regulations 2021 administered by the Personal Data Protection Office (PDPO).
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low">
<span className="font-label-lg text-label-lg text-on-surface block mb-1">Information We Collect</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Contact numbers, physical delivery coordinates, device telemetry, order histories, and communications necessary strictly to fulfill SafeBoda dispatch routing and tax compliance.
                </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low">
<span className="font-label-lg text-label-lg text-on-surface block mb-1">Your Statutory Data Rights</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Right of access, right to rectification, right to object to commercial profiling, and the right to have personal identifiers permanently expunged upon full loan or escrow closure.
                </p>
</div>
</div>
<p className="text-body-md font-body-md text-on-surface-variant">
              We never sell, rent, or lease consumer registry data to commercial third parties. Delivery drivers are provided only masked call proxy numbers and drop-off street names without personal ledger visibility.
            </p>
</div>
</section>
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm scroll-mt-44" id="legal-notices">
<div className="flex items-center justify-between pb-4 border-b border-surface-variant/30">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary font-currency-code text-currency-code flex items-center justify-center">08</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Contact &amp; Legal Notices</h2>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Official Registry</span>
</div>
<div className="mt-6 space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              For formal legal inquiries, subpoenas, consumer arbitration claims, or data protection officer notices:
            </p>
<div className="p-5 rounded-xl bg-surface-container space-y-3">
<div className="flex items-center gap-2">
<Icon name="apartment" className="text-[18px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface">Legal Department, SwiftCart Uganda Technologies Ltd</span>
</div>
<div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
<Icon name="location_on" className="text-[18px] text-outline" />
<span>Plot 14 Lumumba Avenue, Nakasero Commercial Tower, 4th Floor, Kampala, Uganda</span>
</div>
<div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
<Icon name="mail" className="text-[18px] text-outline" />
<span>legal-desk@swiftcart.ug / compliance@swiftcart.ug</span>
</div>
<div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
<Icon name="phone" className="text-[18px] text-outline" />
<span>Toll-Free Helpline: 0800 220 800 (Toll Free on MTN &amp; Airtel)</span>
</div>
</div>
</div>
</section>
<div className="p-6 rounded-2xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<Icon name="check_circle" className="text-[32px] text-tertiary" />
<div>
<p className="font-label-lg text-label-lg text-on-surface">By browsing and placing orders, you confirm you accept these terms.</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Need clarification? Contact our 24/7 Kampala Dispute Resolution desk.</p>
</div>
</div>
<button className="h-11 px-6 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-2 flex-shrink-0" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="support_agent" className="text-[18px]" />
<span>Contact Legal Team</span>
</button>
</div>
</main>
</div>
</div>
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none" id="toast-notification">
<div className="bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 font-label-md text-label-md">
<Icon name="check_circle" className="text-[20px] text-tertiary-fixed" />
<span id="toast-message">Terms &amp; Privacy PDF download initiated.</span>
</div>
</div>

</div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface mt-20"><div className="w-full bg-inverse-surface/90 border-b border-surface-variant/10"><div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="verified" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">100% Escrow Protection</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Seller paid only when you inspect and confirm goods.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-fixed flex-shrink-0"><Icon name="two_wheeler" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">45-Min SafeBoda City Hub</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Lightning dispatch across Kampala &amp; Wakiso metro.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-fixed flex-shrink-0"><Icon name="contactless" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">Zero MoMo Fees</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">MTN MoMo &amp; Airtel Money deposits are 100% free.</p></div></div><div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/10"><div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary-fixed flex-shrink-0"><Icon name="gavel" className="text-[28px]" /></div><div><h4 className="font-label-lg text-label-lg text-surface-bright">URSB Certified Stores</h4><p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-0.5">Verified merchant licenses and physical showroom registry.</p></div></div></div></div><div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"><div className="flex flex-col gap-4"><div className="flex items-center gap-3"><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain brightness-200" src={`${assetBase}/images/f77d9c2410d1b883.webp`} /><span className="font-headline-sm text-headline-sm text-surface-bright">SwiftCart</span></div><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Empowering Kampala buyers and trusted Ugandan vendors through instantaneous telecom escrow settlements and safe express delivery.</p><div className="flex items-center gap-2 pt-2 font-label-md text-label-md text-tertiary-fixed"><Icon name="support_agent" className="text-[18px]" /><span>Plot 14 Lumumba Ave, Nakasero, Kampala</span></div></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Marketplace Hubs</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" data-path="marketplace-home" href="#" onClick={() => alertToast('Action triggered')}>Nakasero Organic Fresh Foods</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="consumer-electronics" href="#" onClick={() => alertToast('Action triggered')}>Pioneer Mall Tech Depot</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="fashion-hub" href="#" onClick={() => alertToast('Action triggered')}>Downtown Kikuubo Bulk Center</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="swift-express" href="#" onClick={() => alertToast('Action triggered')}>Kisekka Genuine Auto Spares</a></li><li><a className="hover:text-primary-fixed transition-colors" data-path="escrow-deals" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>Daily Kampala Flash Discounts</a></li></ul></div><div className="flex flex-col gap-3"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Buyer Security &amp; Escrow</h5><ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-inverse-on-surface/70"><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>How Swift Escrow Protects You</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>72-Hour Return &amp; Refund Guarantee</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Verified Merchant Badge Process</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Center</a></li><li><a className="hover:text-primary-fixed transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Safe Handover Inspection Guide</a></li></ul></div><div className="flex flex-col gap-4"><h5 className="font-label-lg text-label-lg text-surface-bright tracking-wider uppercase">Uganda Payment Rails</h5><p className="font-body-sm text-body-sm text-inverse-on-surface/70">Direct encrypted instant merchant settlement powered by local carriers:</p><div className="flex flex-wrap gap-2"><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="cell_tower" className="text-[16px] text-tertiary-fixed" />MTN MoMo Pay</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="sim_card" className="text-[16px] text-primary-fixed" />Airtel Money UG</span><span className="px-3 py-1.5 rounded-lg bg-surface-container-highest/15 font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5"><Icon name="credit_card" className="text-[16px] text-secondary-fixed" />Visa / Stanbic FlexiPay</span></div><div className="pt-2"><span className="font-label-sm text-label-sm text-tertiary-fixed block">National ID (NIRA) Compliant</span><span className="font-body-sm text-body-sm text-inverse-on-surface/60">Bank of Uganda Sandbox Partner</span></div></div></div><div className="w-full border-t border-surface-variant/10 py-6"><div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-inverse-on-surface/60"><p>© 2025 SwiftCart Uganda Technologies Ltd. Registered with URSB (Reg #800200331902). All rights reserved.</p><div className="flex items-center gap-6 font-label-sm text-label-sm"><span>Privacy Policy</span><span>Buyer Escrow Terms</span><span>Kampala Delivery SLA</span><span>Security Center</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
