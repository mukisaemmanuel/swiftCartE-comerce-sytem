// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/product_detail_soundcore_space_one_desktop_1/code.html
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
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><a className="flex flex-col text-left" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span className="font-headline-sm text-headline-sm tracking-tight leading-none text-on-primary">SwiftCart</span><span className="font-label-sm text-label-sm tracking-wider uppercase text-primary-fixed-dim font-bold">Uganda Marketplace</span></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
<nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Electronics</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SoundCore</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-semibold truncate max-w-xs md:max-w-md">Space One ANC Headphones</span>
</nav>
<div className="flex items-center gap-space-sm bg-tertiary/10 text-tertiary px-space-md py-1 rounded-full font-label-sm text-label-sm">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-bold">Kampala Central Escrow:</span> 18 orders inspected &amp; released in the last hour
    </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-square flex items-center justify-center group">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="SoundCore Space One Wireless Over-Ear Active Noise Cancelling Headphones in sleek matte jet black, soft memory foam leatherette ear cushions, ergonomic foldable headband resting gracefully on a warm cream studio pedestal with subtle directional lighting and warm reflections." id="main-product-img" src={`${assetBase}/images/636f935ad600effe.webp`} />

<div className="absolute top-space-md left-space-md flex flex-col gap-space-xs">
<span className="bg-primary text-on-primary font-label-sm text-label-sm uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wide font-extrabold">-35% PROMO</span>
<span className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 font-bold">
<Icon name="verified" className="text-[14px] text-tertiary" /> UNBS Certified
          </span>
</div>
<button className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary flex items-center justify-center shadow-md transition-colors" title="Save to Wishlist" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[20px]" />
</button>

<button className="absolute bottom-space-md right-space-md bg-inverse-surface/85 hover:bg-inverse-surface text-inverse-on-surface font-label-md text-label-md px-space-md py-1.5 rounded-lg flex items-center gap-space-xs shadow-md transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="play_circle" className="text-[18px] text-primary-fixed" />
<span>Uganda Video Review (3:14)</span>
</button>
</div>

<div className="grid grid-cols-5 gap-space-sm" id="thumb-gallery">
<button className="thumb-btn bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm aspect-square p-0.5 ring-2 ring-primary transition-all" data-img-idx="0" type="button" onClick={() => alertToast('Action triggered')}>
<img className="w-full h-full object-cover rounded-md" data-alt="SoundCore Space One jet black headphones front angled view showing plush memory foam earcups and matte alloy swivel arms on clean minimal off-white backdrop." src={`${assetBase}/images/93939d8ec08d9322.webp`} />
</button>
<button className="thumb-btn bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm aspect-square p-0.5 opacity-80 hover:opacity-100 transition-all" data-img-idx="1" type="button" onClick={() => alertToast('Action triggered')}>
<img className="w-full h-full object-cover rounded-md" data-alt="SoundCore Space One headphones folded neatly into its compact travel position next to a branded textured carry pouch on warm wood desk." src={`${assetBase}/images/2819a1e7f21ea6d1.webp`} />
</button>
<button className="thumb-btn bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm aspect-square p-0.5 opacity-80 hover:opacity-100 transition-all" data-img-idx="2" type="button" onClick={() => alertToast('Action triggered')}>
<img className="w-full h-full object-cover rounded-md" data-alt="Close up high-detail shot of SoundCore Space One right earcup physical tactile buttons, USB-C fast charging port, 3.5mm aux jack and built-in mic array." src={`${assetBase}/images/a34b267f3563514c.webp`} />
</button>
<button className="thumb-btn bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm aspect-square p-0.5 opacity-80 hover:opacity-100 transition-all" data-img-idx="3" type="button" onClick={() => alertToast('Action triggered')}>
<img className="w-full h-full object-cover rounded-md" data-alt="Detailed technical illustration diagram showing 3-stage adaptive noise cancelling soundwave cancellation technology for high frequency human chatter reduction." src={`${assetBase}/images/efa9659581adfb69.webp`} />
</button>
<button className="thumb-btn bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm aspect-square p-0.5 opacity-80 hover:opacity-100 transition-all" data-img-idx="4" type="button" onClick={() => alertToast('Action triggered')}>
<img className="w-full h-full object-cover rounded-md" data-alt="Original retail box packaging of SoundCore Space One headphones featuring Uganda UNBS quality sticker seal, LDAC logo, and 55-hour battery badge." src={`${assetBase}/images/3063fa9ff1f7c144.webp`} />
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm grid grid-cols-3 gap-space-sm text-center">
<div className="flex flex-col items-center">
<Icon name="security" className="text-tertiary text-[22px]" />
<span className="font-label-md text-label-md font-bold text-on-surface mt-1">Escrow Guard</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Funds locked till test</span>
</div>
<div className="flex flex-col items-center">
<Icon name="verified" className="text-primary text-[22px]" />
<span className="font-label-md text-label-md font-bold text-on-surface mt-1">100% Genuine</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Serial trackable</span>
</div>
<div className="flex flex-col items-center">
<Icon name="bolt" className="text-secondary text-[22px]" />
<span className="font-label-md text-label-md font-bold text-on-surface mt-1">SafeBoda Priority</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tracked dispatch</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="flex items-center justify-between">
<a className="inline-flex items-center gap-1.5 text-primary hover:text-primary-container font-label-md text-label-md font-bold transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>SoundCore Uganda Official Store</span>
<Icon name="check_circle" className="text-[16px] text-tertiary" />
</a>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded">SKU: SC-SPO-BLK</span>
</div>

<h1 className="font-headline-md text-headline-md text-on-surface leading-snug font-bold">
        SoundCore Space One Wireless Active Noise Cancelling (ANC) Over-Ear Headphones
      </h1>

<div className="flex flex-wrap items-center gap-space-sm pb-space-xs font-body-sm text-body-sm">
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-bold font-label-md text-label-md">4.9</span>
<span className="text-on-surface-variant">(420 reviews)</span>
</div>
<span className="text-outline-variant">•</span>
<span className="text-on-surface-variant font-medium">1,240 Kampala orders fulfilled</span>
<span className="text-outline-variant">•</span>
<span className="text-tertiary font-bold flex items-center gap-0.5">
<Icon name="thumb_up" className="text-[16px]" /> 99% Satisfaction
        </span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-1">
<div className="flex items-baseline gap-space-md">
<div className="flex items-baseline gap-1 text-primary">
<span className="font-currency-code text-currency-code">UGX</span>
<span className="font-price-display text-price-display tracking-tight text-primary-container">248,500</span>
</div>
<span className="line-through text-on-surface-variant/60 font-body-md text-body-md">UGX 380,000</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Save UGX 131,500</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Price includes 18% VAT &amp; standard URA domestic retail stamp. Zero hidden tariffs.
        </p>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Color: <span className="font-normal text-on-surface-variant" id="color-label">Jet Black</span></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">All 3 colors in stock</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="color-btn active ring-2 ring-primary ring-offset-2 bg-surface-container-lowest px-space-md py-2 rounded-xl flex items-center gap-2 shadow-sm transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-4 h-4 rounded-full bg-[#1A1A1A] inline-block shadow-inner"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Jet Black</span>
</button>
<button className="color-btn bg-surface-container-lowest px-space-md py-2 rounded-xl flex items-center gap-2 shadow-sm hover:bg-surface-container-high transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-4 h-4 rounded-full bg-[#99B6CC] inline-block shadow-inner"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Sky Blue</span>
</button>
<button className="color-btn bg-surface-container-lowest px-space-md py-2 rounded-xl flex items-center gap-2 shadow-sm hover:bg-surface-container-high transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<span className="w-4 h-4 rounded-full bg-[#E8DEC8] inline-block shadow-inner"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Latte Cream</span>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider text-secondary">Verified Hardware Highlights</span>
<ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
<li className="flex items-start gap-space-xs">
<Icon name="noise_aware" className="text-primary text-[18px] shrink-0 mt-0.5" />
<span><strong>2X Stronger Voice Reduction:</strong> Tuned adaptive ANC blocks commuter sirens &amp; crowded taxi park chatter.</span>
</li>
<li className="flex items-start gap-space-xs">
<Icon name="battery_charging_full" className="text-primary text-[18px] shrink-0 mt-0.5" />
<span><strong>55H Playtime (40H with ANC on):</strong> 5-minute fast charge grants 4 full hours listening.</span>
</li>
<li className="flex items-start gap-space-xs">
<Icon name="headphones" className="text-primary text-[18px] shrink-0 mt-0.5" />
<span><strong>Hi-Res Wireless &amp; LDAC Audio:</strong> Delivers 3X richer acoustic fidelity vs. standard SBC Bluetooth.</span>
</li>
<li className="flex items-start gap-space-xs">
<Icon name="devices" className="text-primary text-[18px] shrink-0 mt-0.5" />
<span><strong>Bluetooth 5.3 Multipoint:</strong> Switch seamlessly between your laptop and smartphone without re-pairing.</span>
</li>
</ul>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Kampala Fulfillment Options</span>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">SafeBoda Express Dispatch</span>
<span className="font-label-md text-label-md font-bold text-primary">UGX 3,500</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Order in the next <span className="text-primary font-bold" id="countdown">41m 24s</span> for delivery to Kampala Central today by <strong className="text-on-surface">17:00 EAT</strong>.
            </p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="store" className="text-[22px]" />
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Free Hub Station Pickup</span>
<span className="font-label-md text-label-md font-bold text-tertiary">FREE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Nakasero Trade Tower (Hub Station #2), ready in 90 minutes.
            </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-space-md lg:sticky lg:top-36">

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">

<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow Total Amount</span>
<div className="flex items-baseline gap-1 text-on-surface">
<span className="font-currency-code text-currency-code font-bold text-primary">UGX</span>
<span className="font-price-display text-price-display font-extrabold text-on-surface" id="computed-price">248,500</span>
</div>
</div>

<div className="flex items-center gap-space-xs font-label-md text-label-md text-tertiary font-bold bg-tertiary/10 px-space-md py-1.5 rounded-lg">
<Icon name="inventory_2" className="text-[18px]" />
<span>In Stock: Only 14 units at Kampala Hub</span>
</div>

<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Quantity:</span>
<div className="flex items-center bg-surface-container rounded-lg p-1">
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-bold" type="button" onClick={() => alertToast('Action triggered')}>-</button>
<span className="w-10 text-center font-label-lg text-label-lg font-bold" id="qty-val">1</span>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-bold" type="button" onClick={() => alertToast('Action triggered')}>+</button>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full h-12 rounded-xl text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs transition-transform active:scale-[0.98] shadow-[0_4px_14px_rgba(218,55,0,0.30)]" style={{"background":"linear-gradient(135deg, #FF8A1F, #DA3700)"}} type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="lock" className="text-[20px]" />
<span>Buy Now with Escrow</span>
</button>
<button className="w-full h-12 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs transition-colors shadow-sm ring-1 ring-primary/40" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart" className="text-[20px]" />
<span>Add to Cart</span>
</button>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-tertiary">
<Icon name="shield_with_heart" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold">Swift Escrow Protection</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Your payment is safely held until you physically unbox, inspect the ANC seal, and share your 6-digit delivery release OTP with the SafeBoda rider.
          </p>
<div className="flex items-center gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">MTN MoMo</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">Airtel Money</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-bold">Visa / Card</span>
</div>
</div>

<div className="pt-space-xs flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Sold by Verified Vendor</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="check" className="text-[14px]" /> Verified
            </span>
</div>
<div className="flex items-center gap-space-sm pt-1">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-headline-sm">
              V
            </div>
<div className="flex flex-col leading-tight">
<span className="font-label-md text-label-md font-bold text-on-surface">Victoria Tech Supplies</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Bay • Seller since 2022</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs py-space-xs text-center font-body-sm text-body-sm">
<div className="bg-surface-container-high rounded p-1">
<span className="block font-bold text-on-surface">4.9 ★</span>
<span className="text-[10px] text-on-surface-variant">1,400+ Sales</span>
</div>
<div className="bg-surface-container-high rounded p-1">
<span className="block font-bold text-tertiary">99.2%</span>
<span className="text-[10px] text-on-surface-variant">Fulfillment Rate</span>
</div>
</div>

<a className="w-full py-2.5 rounded-xl bg-tertiary text-on-tertiary hover:bg-tertiary-container font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs shadow-sm transition-colors" href="https://wa.me/256701498442?text=Hello%20Victoria%20Tech,%20inquiring%20about%20SoundCore%20Space%20One%20Headphones%20on%20SwiftCart" rel="noopener noreferrer" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Chat with Seller via WhatsApp</span>
</a>
</div>
</div>
</div>
</div>

<div className="mt-14 w-full bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm">

<div className="flex items-center gap-space-sm overflow-x-auto pb-space-sm" id="pdp-tabs">
<button className="tab-btn active px-space-lg py-2.5 rounded-xl font-label-lg text-label-lg font-bold bg-primary text-on-primary transition-all shrink-0" id="tab-btn-specs" type="button" onClick={() => alertToast('Action triggered')}>
        Product Specifications
      </button>
<button className="tab-btn px-space-lg py-2.5 rounded-xl font-label-lg text-label-lg font-bold bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all shrink-0 flex items-center gap-1.5" id="tab-btn-reviews" type="button" onClick={() => alertToast('Action triggered')}>
<span>Customer Reviews</span>
<span className="bg-surface-container-lowest text-primary font-bold text-xs px-2 py-0.5 rounded-full">420</span>
</button>
<button className="tab-btn px-space-lg py-2.5 rounded-xl font-label-lg text-label-lg font-bold bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all shrink-0" id="tab-btn-warranty" type="button" onClick={() => alertToast('Action triggered')}>
        Warranty &amp; Returns (48h Cooling)
      </button>
<button className="tab-btn px-space-lg py-2.5 rounded-xl font-label-lg text-label-lg font-bold bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all shrink-0" id="tab-btn-delivery" type="button" onClick={() => alertToast('Action triggered')}>
        SafeBoda Hub Dispatch
      </button>
</div>

<div className="tab-pane mt-space-lg flex flex-col gap-space-lg" id="tab-content-specs">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Audio &amp; Hardware Specs</h3>
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-low divide-y divide-surface-container-highest">
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Acoustic Drivers</span>
<span className="font-body-md text-body-md text-on-surface font-bold">40mm Customized Dynamic Drivers</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Active Noise Cancelling</span>
<span className="font-body-md text-body-md text-on-surface font-bold">Adaptive ANC (Voice Targeting Reduction)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Frequency Response</span>
<span className="font-body-md text-body-md text-on-surface font-bold">20 Hz – 40 kHz (Hi-Res Audio LDAC)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Microphones</span>
<span className="font-body-md text-body-md text-on-surface font-bold">3 Mics with AI Call Algorithm</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Net Weight</span>
<span className="font-body-md text-body-md text-on-surface font-bold">260g (Ultra-light ergonomic fit)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Connectivity &amp; Power</h3>
<div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-low divide-y divide-surface-container-highest">
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Bluetooth Version</span>
<span className="font-body-md text-body-md text-on-surface font-bold">Bluetooth 5.3 (15m Range)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Multi-device Pairing</span>
<span className="font-body-md text-body-md text-on-surface font-bold">Yes (2 devices simultaneously)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Battery Life</span>
<span className="font-body-md text-body-md text-on-surface font-bold">55 Hours (Standard) / 40 Hours (ANC)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Charging Port</span>
<span className="font-body-md text-body-md text-on-surface font-bold">USB-C Fast Charging (5 min = 4 hrs)</span>
</div>
<div className="grid grid-cols-2 p-space-md">
<span className="font-body-md text-body-md text-on-surface-variant">Mobile Companion App</span>
<span className="font-body-md text-body-md text-on-surface font-bold">SoundCore App (Custom 8-band EQ)</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-pane hidden mt-space-lg flex flex-col gap-space-lg" id="tab-content-reviews">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-center bg-surface-container-low p-space-lg rounded-xl">
<div className="flex flex-col items-center justify-center text-center">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface">4.9</span>
<div className="flex text-amber-500 my-1">
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
<Icon name="star" className="text-[20px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Based on 420 verified buyer evaluations in Uganda</span>
</div>
<div className="md:col-span-2 flex flex-col gap-1.5 font-body-sm text-body-sm">
<div className="flex items-center gap-space-sm">
<span className="w-12 text-on-surface-variant font-bold">5 Stars</span>
<div className="flex-1 h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full w-[88%]"></div>
</div>
<span className="w-10 text-right text-on-surface-variant font-bold">88%</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-12 text-on-surface-variant font-bold">4 Stars</span>
<div className="flex-1 h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full w-[9%]"></div>
</div>
<span className="w-10 text-right text-on-surface-variant font-bold">9%</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-12 text-on-surface-variant font-bold">3 Stars</span>
<div className="flex-1 h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full w-[2%]"></div>
</div>
<span className="w-10 text-right text-on-surface-variant font-bold">2%</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-12 text-on-surface-variant font-bold">2 Stars</span>
<div className="flex-1 h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full w-[1%]"></div>
</div>
<span className="w-10 text-right text-on-surface-variant font-bold">1%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">SN</div>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Sarah N.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kololo, Kampala</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-2 py-0.5 rounded font-bold">Verified Buyer</span>
</div>
<div className="flex text-amber-500 my-0.5">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
<p className="font-body-md text-body-md text-on-surface">
            "Original product! Checked the serial number on the Anker SoundCore app and it synced immediately. The ANC is superb for working from Acacia cafes. SafeBoda rider delivered to Kololo in under 35 minutes."
          </p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Reviewed 3 days ago • Space One (Jet Black)</span>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs">BK</div>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Brian K.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ntinda Commercial Hub</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-2 py-0.5 rounded font-bold">Verified Buyer</span>
</div>
<div className="flex text-amber-500 my-0.5">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
<p className="font-body-md text-body-md text-on-surface">
            "Best value ANC headset on the Kampala market right now. Bass response is punchy without distorting vocals. The escrow model gave me peace of mind to test the Bluetooth range before giving the PIN code."
          </p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Reviewed 1 week ago • Space One (Sky Blue)</span>
</div>
</div>
</div>

<div className="tab-pane hidden mt-space-lg flex flex-col gap-space-md" id="tab-content-warranty">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
<Icon name="schedule" className="text-primary text-[28px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">48-Hour Cooling Window</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            If you notice any factory flaw or audio imperfection within 48 hours of acceptance, initiate a one-tap return via your buyer dashboard for an instant refund.
          </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
<Icon name="verified_user" className="text-tertiary text-[28px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">12-Month Official Warranty</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Covered by SoundCore Uganda service center at Nakasero Trade Tower. Repair or replacement with original Anker parts.
          </p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
<Icon name="currency_exchange" className="text-secondary text-[28px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Instant MoMo Reversal</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Returns verified at any Kampala Hub trigger automatic reversals directly back to your MTN or Airtel wallet without manual paperwork.
          </p>
</div>
</div>
</div>

<div className="tab-pane hidden mt-space-lg flex flex-col gap-space-md" id="tab-content-delivery">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Kampala Metropolitan Delivery Matrix</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-sm font-body-sm text-body-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-bold block text-on-surface">Central &amp; Nakasero</span>
<span className="text-tertiary font-semibold">Today by 17:00</span>
<span className="block text-on-surface-variant mt-1">UGX 3,500</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-bold block text-on-surface">Kololo, Naguru, Ntinda</span>
<span className="text-tertiary font-semibold">Today by 18:30</span>
<span className="block text-on-surface-variant mt-1">UGX 4,500</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-bold block text-on-surface">Entebbe / Munyonyo</span>
<span className="text-on-surface font-semibold">Tomorrow AM</span>
<span className="block text-on-surface-variant mt-1">UGX 8,000</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-bold block text-on-surface">Upcountry (Jinja, Mbarara)</span>
<span className="text-on-surface font-semibold">24-48 Hours</span>
<span className="block text-on-surface-variant mt-1">UGX 12,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-14 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Frequently Bought Together in Kampala</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Recommended audio accessories from verified Nakasero suppliers</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_left" className="text-[20px]" />
</button>
<button className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_right" className="text-[20px]" />
</button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md overflow-x-auto pb-space-sm" id="related-carousel">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Shockproof hard shell EVA travel protective case with zipper for foldable over-ear headphones on studio grey background." src={`${assetBase}/images/02add80381d21b0d.webp`} />
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">Accessory</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2">Shockproof Hard EVA Travel Storage Case</h3>
<div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
<Icon name="star" className="text-[14px]" />
<span>4.8 (82)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">45,000</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors" title="Add to cart" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Anker 20W PowerPort III USB-C fast wall charger adapter with UK 3-pin plug suitable for Uganda power outlets." src={`${assetBase}/images/85c9ef6a90a581f4.webp`} />
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Power</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2">Anker 20W USB-C PD Fast Wall Charger (Uganda 3-Pin)</h3>
<div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
<Icon name="star" className="text-[14px]" />
<span>5.0 (214)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">55,000</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors" title="Add to cart" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Breathable cooling gel replacement ear cushions pads for over-ear headphones in pairs." src={`${assetBase}/images/288f74116941dd57.webp`} />
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">Spare Part</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2">Cooling Gel Protein Leather Ear Pads (Pair)</h3>
<div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
<Icon name="star" className="text-[14px]" />
<span>4.7 (39)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">32,000</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors" title="Add to cart" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Oraimo FreePods 4 True Wireless Stereo earbuds with sliding charging case on minimal backdrop." src={`${assetBase}/images/49f609a0be6c58eb.webp`} />
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">Earbuds</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2">Oraimo FreePods 4 ANC Wireless Earbuds</h3>
<div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
<Icon name="star" className="text-[14px]" />
<span>4.6 (510)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">115,000</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors" title="Add to cart" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-space-xs">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Gold-plated 3.5mm auxiliary audio cable with braided cord for wired listening mode." src={`${assetBase}/images/18d4a1b68dcd43af.webp`} />
</div>
<span className="font-label-sm text-label-sm text-outline font-bold">Cable</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2">Braided 3.5mm Gold-Plated Hi-Fi Aux Cable (1.5m)</h3>
<div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
<Icon name="star" className="text-[14px]" />
<span>4.9 (127)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UGX</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">18,000</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors" title="Add to cart" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>


</div></div></main><footer className="w-full bg-[#0d1225] text-slate-300 mt-space-xl border-t border-slate-800 shadow-[0_-8px_32px_rgba(0,0,0,0.35)]"><div className="max-w-7xl mx-auto px-margin pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm font-bold text-white tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm uppercase bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded font-extrabold shadow-sm">Uganda</span></div><p className="font-body-md text-body-md text-slate-300 leading-relaxed">Kampala's high-trust online marketplace with 100% Genuine Escrow Protection. Every order is held secure until you inspect and verify delivery.</p><div className="flex flex-col gap-space-xs text-slate-200 font-label-md text-label-md"><div className="flex items-center gap-space-xs"><Icon name="call" className="text-primary-fixed-dim text-[18px]" /><span className="text-slate-200 hover:text-white transition-colors">+256 800 220 800 (Toll Free)</span></div><div className="flex items-center gap-space-xs"><Icon name="chat" className="text-tertiary-fixed text-[18px]" /><span className="text-slate-200 hover:text-white transition-colors">WhatsApp: +256 701 498 442</span></div><div className="flex items-start gap-space-xs"><Icon name="business" className="text-primary-fixed-dim text-[18px] shrink-0 mt-0.5" /><span className="text-slate-300">Acacia Mall Annex &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs">Customer Service</span><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="track-order" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track Your Order</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="escrow-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Escrow Refunds</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="payment-methods" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo &amp; Airtel Payment Options</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Swift Escrow Protection Policy</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Delivery Rates &amp; Speeds</a></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs">About &amp; Business</span><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="about-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart Uganda</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="become-verified-seller" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Seller</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="safeboda-fleet" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Fleet</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="careers" href="#" onClick={() => alertToast('Action triggered')}>Careers in Kampala</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy &amp; Data Security</a><a className="hover:text-primary-fixed-dim text-slate-300 transition-colors font-body-md text-body-md" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a></div><div className="flex flex-col gap-space-md"><span className="font-headline-sm text-headline-sm text-white font-bold">Payment &amp; Trust</span><div className="flex flex-wrap gap-space-xs"><span className="bg-[#182038] border border-slate-700/80 px-space-sm py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-slate-500 transition-colors">MTN MoMo</span><span className="bg-[#182038] border border-slate-700/80 px-space-sm py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-slate-500 transition-colors">Airtel Money</span><span className="bg-[#182038] border border-slate-700/80 px-space-sm py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-slate-500 transition-colors">Visa</span><span className="bg-[#182038] border border-slate-700/80 px-space-sm py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-slate-500 transition-colors">Mastercard</span></div><div className="bg-[#151c33] border border-slate-700/70 p-space-md rounded-xl shadow-md flex items-center gap-space-md"><Icon name="verified_user" className="text-tertiary-fixed text-[30px] shrink-0" /><div><div className="font-label-lg text-label-lg font-bold text-white">100% Escrow Protected</div><div className="font-body-sm text-body-sm text-slate-300">Funds released only after inspection</div></div></div><div className="flex flex-col gap-space-xs"><span className="font-label-md text-label-md text-slate-200 font-bold">Shop Faster on Mobile</span><div className="flex items-center gap-space-xs bg-[#182038] border border-slate-700/80 hover:border-slate-500 px-space-md py-space-xs rounded-lg text-slate-200 font-body-sm text-body-sm cursor-pointer transition-colors"><Icon name="phone_android" className="text-primary-fixed-dim text-[20px]" /><span className="font-medium text-white">Download the SwiftCart App</span></div></div></div></div><div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm"><div className="text-slate-400">© 2024 SwiftCart Uganda Ltd. Registered with URA &amp; URSB. All prices in UGX (Ugandan Shilling) with 0 decimals.</div><div className="flex items-center gap-space-md text-slate-400"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Kampala Cloud Node (Active)</span><span>No Hidden Tariffs</span></div></div></div></footer>
    </div>
  );
};

export default Desktop;
