// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/order_delivered_write_review_desktop/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.06)]"><div className="bg-surface-container-high/60 border-b border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><div className="flex items-center gap-4"><span>Kampala Rapid Delivery: Central &amp; Greater Wakiso</span><span className="inline-block w-1 h-1 rounded-full bg-outline-variant"></span><span className="text-tertiary flex items-center gap-1 font-bold"><Icon name="verified_user" className="text-[14px]" />Swift Escrow Protected</span></div><div className="flex items-center gap-6"><a className="text-primary hover:text-on-surface transition-colors font-bold" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a><a className="text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help &amp; FAQ</a><span className="text-on-surface-variant font-medium">Uganda (UGX)</span></div></div></div><div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center gap-6 justify-between"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/aeb9118a4ba966b9.webp`} /><span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-primary">SwiftCart</span></div><div className="flex-1 max-w-2xl mx-4"><div className="flex items-center h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] p-1"><div className="h-full px-3 flex items-center gap-1 text-on-surface font-label-md text-label-md shrink-0 cursor-pointer hover:bg-surface-container-low rounded-lg transition-colors"><span>All Categories</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><div className="w-[1px] h-5 bg-surface-variant shrink-0"></div><div className="flex-1 flex items-center px-3 gap-2"><Icon name="search" className="text-outline text-[18px]" /><input className="w-full bg-transparent border-none text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none" placeholder="Search products, safe electronic vendors, fresh produce..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="h-9 px-5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 shrink-0" onClick={() => alertToast('Action triggered')}><span>Search</span></button></div></div><div className="flex items-center gap-4 shrink-0"><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="support_agent" className="text-[20px]" /><span>Support</span></a><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[20px]" /><span>Wishlist</span></a><a className="flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-high hover:bg-surface-variant rounded-xl transition-all" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant">UGX 0</span><span className="font-label-md text-label-md text-on-surface font-bold">0 Items</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><div className="bg-surface border-t border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between"><div className="flex items-center gap-2 text-on-surface font-label-md text-label-md cursor-pointer shrink-0"><Icon name="location_on" className="text-[18px] text-primary" /><span>Deliver to:</span><span className="font-bold text-on-surface">Kampala Central, Nakasero</span><Icon name="keyboard_arrow_down" className="text-[16px] text-outline" /></div><nav className="flex items-center gap-7 overflow-x-auto py-1" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors shrink-0 text-primary font-bold" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Home</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}>Flash Deals</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="safeboda-delivery" href="#" onClick={() => alertToast('Action triggered')}>Same-Day SafeBoda</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></nav></div></div></header><main className="w-full pt-35 bg-background flex-1"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto px-6 py-6 w-full">

<nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>My Orders</a>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-on-surface">Order #SC-UG-99482</span>
<Icon name="chevron_right" className="text-[14px] text-outline" />
<span className="text-primary font-bold">Delivered &amp; Review</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 flex flex-col gap-5">

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tertiary via-tertiary-container to-tertiary-fixed"></div>
<div className="flex items-start gap-3.5 mb-4">
<div className="w-10 h-10 rounded-full bg-tertiary-container/15 flex items-center justify-center shrink-0 text-tertiary">
<Icon name="task_alt" className="text-[24px]" />
</div>
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                Settled in Escrow
              </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Handover Confirmed</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Escrow released successfully to merchant</p>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-4 space-y-3 font-body-sm text-body-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="two_wheeler" className="text-[18px] text-primary" />
<span>Delivered By</span>
</div>
<span className="font-label-md text-label-md text-on-surface text-right font-bold">SafeBoda Rider Kizito Brian</span>
</div>
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="schedule" className="text-[18px] text-outline" />
<span>Timestamp</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface text-right">Today at 15:58 EAT</span>
</div>
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="location_on" className="text-[18px] text-outline" />
<span>Destination</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface text-right">Plot 14 Philip Road, Kololo</span>
</div>
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<Icon name="pin" className="text-[18px] text-tertiary" />
<span>Verification PIN</span>
</div>
<span className="font-label-md text-label-md text-tertiary font-bold tracking-widest bg-tertiary/10 px-2 py-0.5 rounded">
                849216 • VERIFIED
              </span>
</div>
</div>

<div className="mt-4 pt-4 flex flex-col gap-2">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="lock" className="text-[15px] text-tertiary" />
                Automated Escrow Rail
              </span>
<span className="text-outline">Tx: #ESCR-UG-49204</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Funds unlocked on <span className="text-on-surface font-semibold">24 Oct 2024, 16:00:12 EAT</span>. Transferred directly to merchant vault: <span className="text-primary font-bold">SoundCore Uganda Official</span>.
            </p>
</div>

<div className="mt-4 p-3.5 bg-surface-container rounded-lg flex items-start gap-3">
<Icon name="verified_user" className="text-primary text-[22px] shrink-0 mt-0.5" />
<div className="space-y-0.5">
<span className="font-label-md text-label-md text-on-surface block">48-Hour Buyer Protection Active</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                You have 48 hours to report any latent defects or authenticity disputes for a free return pickup directly from your Kololo address.
              </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Delivered Item</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" /> Verified Purchase
            </span>
</div>
<div className="flex items-start gap-4">
<img className="w-24 h-24 rounded-lg object-cover bg-surface-container-high shrink-0 shadow-sm" data-alt="Sleek matte jet black Soundcore Space One over-ear wireless headphones placed on minimalist cream studio surface with soft sunlit highlights, premium tech studio photography 8k resolution" src={`${assetBase}/images/d6dafc7120031684.webp`} />
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-primary font-bold">SoundCore Uganda Official</span>
<h3 className="font-label-lg text-label-lg text-on-surface truncate mt-0.5">
                SoundCore Space One Wireless ANC Over-Ear Headphones
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Jet Black • Hi-Res LDAC • 55H Playtime</p>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-price-display text-price-display text-on-surface">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 310,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 pt-2">
<button className="h-11 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl transition-all flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[18px]" />
<span>Official Tax Receipt</span>
</button>
<button className="h-11 px-3 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart_checkout" className="text-[18px]" />
<span>Re-order Item</span>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Icon name="bolt" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">SafeBoda Express 45-Min Guarantee</span>
<span className="font-body-sm text-body-sm text-tertiary">Fulfilled on time without transit disruption</span>
</div>
</div>
<Icon name="verified" className="text-outline" />
</div>
</div>

<div className="lg:col-span-7">
<form className="bg-surface-container-lowest rounded-xl shadow-sm p-6 sm:p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
<div>
<h1 className="font-headline-md text-headline-md text-on-surface">Rate &amp; Review Your Experience</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Help fellow Ugandan shoppers shop authentic audio gear. Reviews earn <span className="text-primary font-bold">250 SwiftCoins</span>.
              </p>
</div>
<span className="inline-flex items-center gap-1 text-tertiary font-label-sm text-label-sm bg-tertiary/10 px-3 py-1 rounded-full w-fit">
<Icon name="format_image_left" className="text-[14px]" />
              Verified Purchase Review
            </span>
</div>

<div className="bg-surface-container-low p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<span className="font-label-lg text-label-lg text-on-surface block">Overall Product Rating</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold" id="star-desc">5.0 - Excellent Quality</span>
</div>
<div className="flex items-center gap-1.5 cursor-pointer" id="product-star-container">
<Icon name="star" className="text-[32px] text-amber-500 hover:scale-110 transition-transform" />
<Icon name="star" className="text-[32px] text-amber-500 hover:scale-110 transition-transform" />
<Icon name="star" className="text-[32px] text-amber-500 hover:scale-110 transition-transform" />
<Icon name="star" className="text-[32px] text-amber-500 hover:scale-110 transition-transform" />
<Icon name="star" className="text-[32px] text-amber-500 hover:scale-110 transition-transform" />
</div>
</div>

<div className="space-y-3">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">Detailed Specifications Rating</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="bg-surface-container-low p-3.5 rounded-lg flex flex-col justify-between gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Sound Quality</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary">5.0 / 5</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
</div>

<div className="bg-surface-container-low p-3.5 rounded-lg flex flex-col justify-between gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Active Noise Cancel</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary">5.0 / 5</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
</div>

<div className="bg-surface-container-low p-3.5 rounded-lg flex flex-col justify-between gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Battery Life</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary">5.0 / 5</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>Review Headline</span>
<span className="text-outline font-body-sm text-body-sm">Short &amp; impactful</span>
</label>
<input className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest border-0 ring-1 ring-outline-variant/60 focus:ring-2 focus:ring-primary text-on-surface font-body-md text-body-md shadow-sm" placeholder="What is the most important thing to know?" type="text" value="Incredible ANC and fast 45-min SafeBoda delivery in Kampala!" />
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>Detailed Written Feedback</span>
<span className="text-tertiary font-label-sm text-label-sm font-bold">142 words written</span>
</label>
<textarea className="w-full p-4 rounded-xl bg-surface-container-lowest border-0 ring-1 ring-outline-variant/60 focus:ring-2 focus:ring-primary text-on-surface font-body-md text-body-md leading-relaxed shadow-sm resize-none" placeholder="Write about the sound isolation, build quality, comfort during commute, or battery performance..." rows={4}>The Active Noise Cancellation easily blocks out heavy Kampala traffic along Acacia Avenue and Yusuf Lule Road. Audio resolution over LDAC Bluetooth codec is crisp with tight bass. Rider Kizito Brian reached Plot 14 Kololo in under 45 minutes with the parcel completely sealed in bubble wrap. Verified Soundcore serial number via the official mobile app without any issues. Highly recommended official vendor!</textarea>
</div>

<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface block">Customer Photos &amp; Video Unboxing</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container-high shadow-sm">
<img className="w-full h-full object-cover" data-alt="Customer hands opening neat cardboard retail box showing black wireless headphones nestled in protective molded tray with user guides" src={`${assetBase}/images/6689688bf2e28d45.webp`} />
<div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-on-primary">
<Icon name="zoom_in" className="text-[18px]" />
<span className="font-label-sm text-label-sm font-bold">Unboxing</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container-high shadow-sm">
<img className="w-full h-full object-cover" data-alt="Soundcore jet black wireless headphones folded cleanly inside its tailored travel pouch resting on bright wooden desktop with sunlight" src={`${assetBase}/images/bbe28cf7a844f1fb.webp`} />
<div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-on-primary">
<Icon name="zoom_in" className="text-[18px]" />
<span className="font-label-sm text-label-sm font-bold">Case</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-surface-container-high shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close up photograph of official Soundcore Uganda warranty certificate with stamp and serial sticker next to sleek audio cable" src={`${assetBase}/images/6d3c35dc3850cfa4.webp`} />
<div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-on-primary">
<Icon name="zoom_in" className="text-[18px]" />
<span className="font-label-sm text-label-sm font-bold">Warranty</span>
</div>
</div>

<button className="border-2 border-dashed border-outline-variant/70 hover:border-primary rounded-xl aspect-square flex flex-col items-center justify-center gap-1 bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_a_photo" className="text-[24px]" />
<span className="font-label-sm text-label-sm font-bold">Add Photo</span>
<span className="text-[10px] text-outline">Max 5MB</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

<div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
<Icon name="sports_motorsports" className="text-[22px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">SafeBoda Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Rider Kizito Brian</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex text-amber-500">
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Polite &amp; Fast</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-container/15 flex items-center justify-center text-tertiary shrink-0">
<Icon name="storefront" className="text-[22px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">SoundCore Official Hub</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Packaging &amp; Authenticity</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex text-amber-500">
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">100% Genuine</span>
</div>
</div>
</div>

<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">

<label className="flex items-center gap-2.5 cursor-pointer select-none">
<input className="w-4 h-4 rounded text-primary focus:ring-primary ring-outline-variant" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface-variant">Post review anonymously (Hides my phone &amp; name)</span>
</label>

<button className="w-full sm:w-auto px-8 h-12 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all" type="submit" onClick={() => alertToast('Action triggered')}>
<Icon name="stars" className="text-[20px]" />
<span>Submit Verified Review (+Earn 250 SwiftCoins)</span>
</button>
</div>
</form>
</div>
</div>

<div className="mt-8 p-4 rounded-xl bg-surface-container-high/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-3">
<Icon name="verified" className="text-tertiary text-[20px]" />
<span>Every review on SwiftCart Uganda is tied to a completed SafeBoda delivery and cryptographic escrow transaction ID. Fake reviews are zero-tolerated.</span>
</div>
<a className="text-primary font-label-md text-label-md hover:underline shrink-0" href="#" onClick={() => alertToast('Action triggered')}>Learn how Escrow Protects Buyers</a>
</div>
</div>
</div>
</main><footer className="w-full bg-[#0c1322] text-white pt-10 pb-8 mt-12 border-t border-slate-800 font-body-sm text-body-sm"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-slate-800"><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-tertiary/20 text-emerald-400 flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">100% Escrow Protection</h4><p className="text-slate-400 text-[12px]">Funds safe until you inspect</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-primary/20 text-orange-400 flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">45-Min SafeBoda City Hub</h4><p className="text-slate-400 text-[12px]">Live courier GPS tracking</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0"><Icon name="currency_exchange" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">Zero MoMo Fees</h4><p className="text-slate-400 text-[12px]">Instant MTN &amp; Airtel checkout</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0"><Icon name="verified" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">URSB Certified Stores</h4><p className="text-slate-400 text-[12px]">Kampala verified vendors</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-slate-800"><div className="space-y-4"><div className="flex items-center gap-2"><img alt="swiftcart-logo-final.png" className="h-6 w-auto object-contain brightness-0 invert" src={`${assetBase}/images/37ca7db9721adf1a.webp`} /><span className="font-headline-sm text-headline-sm text-white font-bold">SwiftCart</span></div><p className="text-slate-400 text-[13px] leading-relaxed">Uganda's premier commerce marketplace. High-trust escrow releases, real-time SafeBoda dispatch, and verified local merchant hubs across Kampala, Entebbe, and Jinja.</p><div className="space-y-2 pt-1 text-[13px]"><div className="flex items-center gap-2 text-slate-300"><Icon name="call" className="text-primary text-[18px]" /><span>Toll-Free Hotline: <strong className="text-white">+256 800 220 800</strong></span></div><div className="flex items-center gap-2 text-slate-300"><Icon name="chat" className="text-emerald-400 text-[18px]" /><span>WhatsApp: <strong className="text-white">+256 701 498 442</strong></span></div><div className="flex items-start gap-2 text-slate-400"><Icon name="location_on" className="text-[18px] shrink-0 mt-0.5" /><span>Plot 14 Philip Road, Kololo &amp; Kikuubo Hub, Kampala</span></div></div></div><div className="space-y-4"><h4 className="font-label-lg text-label-lg text-white font-bold">Top Categories</h4><ul className="space-y-2 text-slate-400 text-[13px]"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li></ul></div><div className="space-y-4"><h4 className="font-label-lg text-label-lg text-white font-bold">Buyer Protection</h4><ul className="space-y-2 text-slate-400 text-[13px]"><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li><li><a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li></ul></div><div className="space-y-4"><h4 className="font-label-lg text-label-lg text-white font-bold">Verified Payment Rails</h4><p className="text-slate-400 text-[13px]">Direct real-time checkout powered by authorized Ugandan payment rails.</p><div className="flex flex-wrap gap-2"><span className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[11px] font-bold text-white">MTN MoMo (*165#)</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[11px] font-bold text-white">Airtel Money (*185#)</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[11px] font-bold text-white">Visa / Mastercard</span><span className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[11px] font-bold text-white">Cash on Delivery (Swift Hub)</span></div><div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center gap-3"><Icon name="account_balance" className="text-emerald-400 text-[24px]" /><div><span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">Audited Escrow Trust Account</span><span className="text-[11px] text-slate-400">Standard Chartered Bank Uganda PLC</span></div></div></div></div><div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-slate-400"><p>© 2025 SwiftCart Uganda Ltd. Registered under Uganda Registration Services Bureau (URSB) &amp; Uganda Revenue Authority. All prices in UGX (Ugandan Shilling) with 0 decimals.</p><div className="flex items-center gap-6 shrink-0"><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
