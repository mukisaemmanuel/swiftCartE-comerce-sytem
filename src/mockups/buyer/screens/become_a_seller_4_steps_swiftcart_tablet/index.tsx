// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/become_a_seller_4_steps_swiftcart_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 w-full px-gutter flex flex-col justify-center gap-space-xs"><div className="flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><div className="h-5 w-[1px] bg-outline-variant/40 mx-space-xs"></div><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Deliver to</span><span className="font-label-md text-label-md text-on-surface leading-none font-bold">Kampala Central</span></div><Icon name="expand_more" className="text-[16px]" /></div></div><div className="flex items-center gap-space-md"><nav className="flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="explore" href="#" onClick={() => alertToast('Action triggered')}>Explore</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="stores" href="#" onClick={() => alertToast('Action triggered')}>Stores</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>Wishlist</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a></nav><div className="flex items-center gap-space-sm pl-space-xs"><button className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-surface-container-high" type="button" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full"></span></button><button className="relative flex items-center gap-space-xs bg-primary-fixed/50 hover:bg-primary-fixed text-on-primary-fixed px-space-sm py-1.5 rounded-full transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[20px] text-primary" /><span className="font-label-md text-label-md bg-primary text-on-primary px-1.5 py-0.2 rounded-full leading-tight font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="w-full flex items-center gap-space-sm"><div className="flex-1 flex items-center h-10 bg-surface-container-lowest rounded-lg shadow-[0_1px_4px_rgba(15,23,42,0.06)] px-space-sm gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface-variant cursor-pointer pr-space-xs"><span className="font-label-sm text-label-sm">All Categories</span><Icon name="arrow_drop_down" className="text-[16px]" /></div><div className="h-4 w-[1px] bg-outline-variant/50"></div><Icon name="search" className="text-secondary text-[20px] ml-space-xs" /><input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search products, brands, groceries in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="p-1 text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">
<div className="w-full max-w-[834px] mx-auto px-margin md:px-gutter-desktop py-space-md">

<div className="relative bg-gradient-to-br from-surface-container to-surface-container-low rounded-xl p-space-lg shadow-sm overflow-hidden mb-space-lg">
<div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<Icon name="bolt" className="text-[14px]" />
            Expedited Onboarding
          </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Fast 4-Hour Approval</span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
          Grow Your Business on SwiftCart Uganda
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          Join 140+ verified Kampala merchants with zero setup fees, verified Boda express delivery, and automated MTN MoMo &amp; Airtel Money payouts.
        </p>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
<div className="grid grid-cols-4 gap-space-xs relative">

<div className="flex flex-col gap-1 items-start text-left">
<div className="flex items-center gap-space-xs w-full">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="check" className="text-[16px]" />
</div>
<div className="h-1 flex-1 bg-tertiary rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mt-1">Step 1</span>
<span className="font-label-md text-label-md text-on-surface truncate w-full">Business Profile</span>
</div>

<div className="flex flex-col gap-1 items-start text-left">
<div className="flex items-center gap-space-xs w-full">
<div className="w-7 h-7 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm font-label-md text-label-md ring-4 ring-primary-fixed/40">
              2
            </div>
<div className="h-1 flex-1 bg-surface-container-high rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold mt-1">2 of 4 • In Progress</span>
<span className="font-label-md text-label-md text-primary font-bold truncate w-full">ID &amp; Legal Docs</span>
</div>

<div className="flex flex-col gap-1 items-start text-left opacity-70">
<div className="flex items-center gap-space-xs w-full">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-label-md text-label-md">
              3
            </div>
<div className="h-1 flex-1 bg-surface-container-high rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-1">Step 3</span>
<span className="font-label-md text-label-md text-on-surface-variant truncate w-full">Payouts &amp; MoMo</span>
</div>

<div className="flex flex-col gap-1 items-start text-left opacity-70">
<div className="flex items-center gap-space-xs w-full">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-label-md text-label-md">
              4
            </div>
<div className="h-1 flex-1 bg-transparent rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mt-1">Step 4</span>
<span className="font-label-md text-label-md text-on-surface-variant truncate w-full">Storefront Setup</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">

<section className="md:col-span-7 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
<div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Legal Compliance
            </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Step 2: Legal Verification &amp; KYC Documents</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Ugandan regulatory requirements for verified storefront sellers and escrow settlement.
            </p>
</div>

<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg border-l-4 border-primary">
<Icon name="info" className="text-primary text-[20px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface">
<strong className="font-label-md text-label-md text-on-surface">URSB Registration or National ID</strong> is mandatory for merchant tier qualification under Uganda Revenue Authority guidelines.
            </p>
</div>
<form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>URSB Certificate / Registration Number <span className="text-error">*</span></span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
<Icon name="check_circle" className="text-[14px]" /> Verified in Registry
                </span>
</label>
<div className="relative flex items-center">
<Icon name="badge" className="absolute left-3 text-secondary text-[20px]" />
<input className="w-full bg-surface-container-low pl-10 pr-10 py-2.5 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm" placeholder="e.g. 80020003418902" type="text" value="80020003418902" />
<Icon name="check_circle" className="absolute right-3 text-tertiary text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Registered entity: Victoria Tech Solutions Ltd.</span>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface">
                Director National ID (NIN) or Passport Number <span className="text-error">*</span>
</label>
<div className="relative flex items-center">
<Icon name="person_pin" className="absolute left-3 text-secondary text-[20px]" />
<input className="w-full bg-surface-container-low pl-10 pr-3 py-2.5 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm uppercase tracking-wide" placeholder="e.g. CM890123456789A" type="text" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ugandan NIN 14 alphanumeric characters.</span>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<span className="font-label-md text-label-md text-on-surface">
                Required Verification Files
              </span>

<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">1. URSB Business Certificate or Trade License</span>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="picture_as_pdf" className="text-[24px]" />
</div>
<div className="flex flex-col truncate">
<span className="font-label-md text-label-md text-on-surface truncate">URSB_Cert_VictoriaTech_2024.pdf</span>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span>1.8 MB</span>
<span>•</span>
<span className="text-tertiary font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> Scanned &amp; Verified
                        </span>
</div>
</div>
</div>
<button className="px-2.5 py-1 text-on-surface-variant hover:text-primary font-label-sm text-label-sm rounded bg-surface-container-lowest shadow-sm hover:shadow transition-all shrink-0" type="button" onClick={() => alertToast('Action triggered')}>
                    Replace
                  </button>
</div>
</div>

<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">2. Director National ID (Front &amp; Back) <span className="text-error">*</span></span>
<div className="cursor-pointer group flex flex-col items-center justify-center p-space-md rounded-lg bg-surface-container-low/70 hover:bg-surface-container-low transition-colors text-center border-dashed border border-outline-variant hover:border-primary">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center mb-1 group-hover:scale-105 transition-transform shadow-sm">
<Icon name="cloud_upload" className="text-[22px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">Click to upload or drag NIN card</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Clear photo of Front and Back (JPG, PNG, PDF up to 10MB)</span>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">3. KCCA Trading License</span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.2 rounded">Optional for Tier 1</span>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low/40 hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-center gap-space-xs">
<Icon name="upload_file" className="text-secondary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Attach 2024 KCCA assessment slip or receipt</span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold" type="button" onClick={() => alertToast('Action triggered')}>Browse</button>
</div>
</div>
</div>

<label className="flex items-start gap-space-sm cursor-pointer select-none pt-space-xs">
<input checked={true} className="mt-1 w-4 h-4 text-primary-container rounded bg-surface-container-low focus:ring-primary accent-primary" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface leading-tight">
                I certify that all submitted credentials represent authentic registered business operations in Uganda, compliant with URA and SwiftCart Terms.
              </span>
</label>

<div className="flex flex-col gap-space-xs pt-space-sm">
<button className="w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs cursor-pointer active:scale-[0.99]" type="submit" onClick={() => alertToast('Action triggered')}>
<span>Save &amp; Continue to Step 3</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
<button className="w-full bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md py-2.5 rounded-lg transition-colors flex items-center justify-center gap-space-xs cursor-pointer" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<Icon name="arrow_back" className="text-[18px]" />
<span>Back to Business Profile</span>
</button>
</div>
</form>
</div>
</section>

<aside className="md:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="rocket_launch" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Why Sell on SwiftCart?</h3>
</div>
<div className="flex flex-col gap-space-md">

<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="flex flex-col">
<h4 className="font-label-md text-label-md text-on-surface">Same-Day Boda Logistics</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Instant pickup &amp; dispatch across Kampala, Wakiso, and Entebbe via our vetted rider network.</p>
</div>
</div>

<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded bg-tertiary-fixed/60 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="payments" className="text-[18px]" />
</div>
<div className="flex flex-col">
<h4 className="font-label-md text-label-md text-on-surface">Zero-Fee MoMo Payouts</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated daily escrow payouts directly to MTN MoMo &amp; Airtel Money Merchant accounts.</p>
</div>
</div>

<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div className="flex flex-col">
<h4 className="font-label-md text-label-md text-on-surface">Buyer Escrow Protection</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Funds locked on checkout; released automatically once recipient inputs their delivery confirmation code.</p>
</div>
</div>

<div className="flex items-start gap-space-xs">
<div className="w-8 h-8 rounded bg-surface-container-high text-on-surface flex items-center justify-center shrink-0 mt-0.5">
<Icon name="support_agent" className="text-[18px]" />
</div>
<div className="flex flex-col">
<h4 className="font-label-md text-label-md text-on-surface">Dedicated Merchant Desk</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">WhatsApp agent support and walk-in order packing assistance at our Nakasero Hub.</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-label-lg text-label-lg text-on-surface">Merchant Tiers</h3>
<span className="font-label-sm text-label-sm text-primary font-bold">Qualification Guide</span>
</div>
<div className="grid grid-cols-1 gap-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Tier 1: Starter Merchant</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">NIN Only</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Up to UGX 5,000,000 weekly volume. Individual seller clearance.
              </p>
</div>

<div className="p-space-sm rounded-lg bg-primary-fixed/20 flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<Icon name="verified" className="text-primary text-[16px]" />
<span className="font-label-md text-label-md text-primary font-bold">Tier 2: Verified Pro</span>
</div>
<span className="px-1.5 py-0.2 rounded bg-primary-container text-surface-container-lowest font-label-sm text-label-sm">URSB + MoMo</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Unlimited weekly sales, lower marketplace commission (3.5%), priority Boda dispatch.
              </p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-surface-container-high to-surface-container rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center shrink-0">
<Icon name="chat" className="text-[18px]" />
</div>
<div className="flex flex-col gap-0.5">
<h4 className="font-label-md text-label-md text-on-surface">Need Help with URSB or NIN?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Toll-free Seller Desk: <strong className="text-on-surface">0800 247 247</strong> or direct WhatsApp support at <strong className="text-on-surface">+256 701 892 411</strong>.
            </p>
</div>
</div>
</aside>
</div>

<div className="mt-space-lg mb-space-md flex flex-wrap items-center justify-between gap-space-sm px-space-xs text-on-surface-variant">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm">
<Icon name="lock" className="text-[16px] text-tertiary" />
<span>256-bit SSL encrypted KYC storage compliant with Data Protection &amp; Privacy Act 2019 (Uganda)</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm">
<span>Application ID: <strong className="text-on-surface">SC-UG-2024-9142</strong></span>
<span>•</span>
<span className="text-tertiary font-bold">Autosaved 1 min ago</span>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg shadow-[0_-1px_8px_rgba(0,0,0,0.02)]"><div className="w-full px-gutter"><div className="grid grid-cols-4 gap-space-md pb-space-lg"><div className="flex items-start gap-space-sm"><Icon name="verified_user" className="text-tertiary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Buyer Protection</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Full refunds &amp; genuine guarantee</p></div></div><div className="flex items-start gap-space-sm"><Icon name="local_shipping" className="text-primary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Swift Dispatch</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Same-day Kampala express</p></div></div><div className="flex items-start gap-space-sm"><Icon name="currency_exchange" className="text-tertiary-container text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">MoMo &amp; Card Escrow</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Secure merchant settlement</p></div></div><div className="flex items-start gap-space-sm"><Icon name="headset_mic" className="text-secondary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Uganda 24/7 Support</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Toll-free &amp; WhatsApp agents</p></div></div></div><div className="flex flex-col md:flex-row items-center justify-between pt-space-md gap-space-md"><div className="flex items-center gap-space-md flex-wrap"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment Partners:</span><div className="flex items-center gap-space-sm"><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">MTN MoMo</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Airtel Money</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Visa</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Mastercard</span></div></div><div className="flex items-center gap-space-md flex-wrap"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="terms-conditions" href="#" onClick={() => alertToast('Action triggered')}>Terms of Use</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="merchant-policy" href="#" onClick={() => alertToast('Action triggered')}>Merchant Directory</a><span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 SwiftCart Uganda Ltd.</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
