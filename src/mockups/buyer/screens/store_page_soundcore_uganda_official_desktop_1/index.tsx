// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/store_page_soundcore_uganda_official_desktop_1/code.html
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
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><a className="flex flex-col text-left" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span className="font-headline-sm text-headline-sm tracking-tight leading-none text-on-primary">SwiftCart</span><span className="font-label-sm text-label-sm tracking-wider uppercase text-primary-fixed-dim font-bold">Uganda Marketplace</span></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="flex flex-col w-full gap-space-xl">

<div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest px-space-lg py-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>SwiftCart</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-bold">SoundCore Uganda Official</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-tertiary/10 text-tertiary px-space-sm py-1 rounded-full font-label-sm text-label-sm font-bold">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
        Nakasero Hub Live Dispatch Active
      </div>
<div className="hidden sm:flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="schedule" className="text-[16px] text-primary" />
<span>Avg. Kampala Delivery: <strong className="text-on-surface">1h 40m</strong> via SafeBoda</span>
</div>
</div>
</div>

<div className="relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">

<div className="relative w-full h-64 md:h-72 overflow-hidden bg-inverse-surface flex items-center">
<div className="absolute inset-0 bg-cover bg-center opacity-85" data-alt="Cinematic studio hero photograph of sleek matte black and midnight navy SoundCore flagship headphones and acoustic drivers resting on minimalist warm wooden pedestal with soft ambient studio lighting and warm orange backglow, clean commercial tech aesthetic 8k resolution" style={{"backgroundImage":"url('/images/5bf0718c4f421325.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/85 to-transparent"></div>

<div className="relative z-10 px-space-xl max-w-2xl flex flex-col gap-space-xs text-on-primary">
<div className="flex items-center gap-space-xs">
<span className="bg-primary-container text-on-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm tracking-wider uppercase font-bold">
            Direct Anker Distribution
          </span>
<span className="text-primary-fixed-dim font-label-md text-label-md font-semibold">| Certified URA Importer</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-extrabold tracking-tight text-white leading-tight">
          Hear Every Detail.<br />SoundCore Uganda.
        </h1>
<p className="font-body-md text-body-md text-surface-container-highest max-w-lg mt-1">
          Direct manufacturer warranty, acoustic tuning calibrated for high-dynamic fidelity, and 100% genuine guaranteed with escrow security in Kampala.
        </p>
</div>
<div className="hidden lg:flex absolute right-12 bottom-6 z-10 items-center gap-space-md bg-inverse-surface/80 backdrop-blur-md px-space-md py-space-sm rounded-xl text-on-primary">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Escrow Safety Level</span>
<span className="font-label-lg text-label-lg font-bold">100% Bailment Secured</span>
</div>
<Icon name="verified_user" className="text-[32px] text-tertiary-fixed-dim" />
</div>
</div>

<div className="px-space-xl pb-space-lg pt-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg -mt-10 sm:-mt-12 z-20">

<div className="w-24 h-24 rounded-2xl bg-surface-container-lowest p-2 shadow-md flex items-center justify-center shrink-0">
<div className="w-full h-full bg-primary-container rounded-xl flex flex-col items-center justify-center text-on-primary shadow-inner">
<Icon name="graphic_eq" className="text-[36px]" />
<span className="font-label-sm text-label-sm font-extrabold tracking-widest uppercase">SoundCore</span>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">SoundCore Uganda Official</h2>
<div className="flex items-center gap-1 bg-surface-container-high text-primary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold shadow-sm">
<Icon name="verified" className="text-[15px] text-primary" />
<span>Authorized Brand Store</span>
</div>
<span className="bg-tertiary/10 text-tertiary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold">
              Escrow Certified
            </span>
</div>

<div className="flex flex-wrap items-center gap-y-1 gap-x-space-md text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<div className="flex items-center gap-1">
<Icon name="store" className="text-[16px] text-primary" />
<span>Acacia Mall Annex (Shop G-14) &amp; Nakasero Dispatch Hub</span>
</div>
<div className="flex items-center gap-1">
<Icon name="query_builder" className="text-[16px] text-tertiary" />
<span>Mon–Sat 08:30–19:00 EAT</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-lg pt-space-xs">
<div className="flex items-center gap-1">
<Icon name="star" className="text-[18px] text-amber-500" />
<span className="font-label-md text-label-md font-bold text-on-surface">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(1,420 Ratings)</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1">
<Icon name="speed" className="text-[18px] text-tertiary" />
<span className="font-label-md text-label-md font-bold text-on-surface">99.4%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">On-Time SafeBoda Dispatch</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1">
<Icon name="group" className="text-[18px] text-secondary" />
<span className="font-label-md text-label-md font-bold text-on-surface">2,840</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Followers</span>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm pt-space-xs lg:pt-0 shrink-0">
<button className="flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-xl font-label-lg text-label-lg transition-transform active:scale-95 shadow-[0_4px_14px_rgba(218,55,0,0.30)]" id="follow-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[20px]" />
<span id="follow-text">Follow Store</span>
</button>
<a className="flex items-center gap-space-xs bg-tertiary-container hover:bg-tertiary text-on-tertiary px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors shadow-sm" href="https://wa.me/256701498442?text=Hello%20SoundCore%20Uganda,%20inquiry%20from%20SwiftCart" rel="noopener" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[20px]" />
<span>WhatsApp Seller</span>
</a>
<button className="flex items-center justify-center w-11 h-11 bg-surface-container hover:bg-surface-container-high rounded-xl text-on-surface transition-colors" title="Share Storefront" onClick={() => alertToast('Action triggered')}>
<Icon name="share" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm px-space-md py-space-xs">
<nav className="flex items-center gap-space-xs overflow-x-auto text-nowrap scrollbar-none" id="store-nav">
<button className="px-space-md py-space-sm font-label-lg text-label-lg rounded-lg bg-primary-container text-on-primary transition-colors flex items-center gap-1.5 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="verified" className="text-[18px]" />
        Featured
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}>
        All Products (38)
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}>
        Over-Ear Headphones
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}>
        Wireless Earbuds
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}>
        Bluetooth Speakers
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}>
        Accessories &amp; Cables
      </button>
<button className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="info" className="text-[16px]" />
        Store Reviews &amp; Warranty
      </button>
</nav>
</div>

<div className="relative bg-gradient-to-r from-primary via-primary-container to-amber-700 rounded-2xl p-space-lg text-on-primary shadow-md overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="relative z-10 flex items-center gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-surface-container-lowest/15 backdrop-blur-sm flex items-center justify-center shrink-0">
<Icon name="confirmation_number" className="text-[32px] text-white" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase px-2 py-0.5 rounded font-black tracking-wide">
            Super Tech Week Voucher
          </span>
<span className="text-surface-container-high text-body-sm font-body-sm">Expires Sunday 23:59 EAT</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-extrabold mt-0.5">
          Save UGX 20,000 Instantly
        </h3>
<p className="font-body-sm text-body-sm text-surface-container-high">
          Applies automatically to any SoundCore audio order exceeding UGX 200,000 at checkout.
        </p>
</div>
</div>
<div className="relative z-10 flex items-center gap-space-md shrink-0">
<div className="hidden sm:flex flex-col text-right font-mono text-body-sm bg-inverse-surface/30 px-space-md py-1.5 rounded-lg">
<span className="text-primary-fixed-dim text-label-sm font-label-sm">CODE</span>
<span className="font-bold tracking-widest text-white">SOUNDCORE20K</span>
</div>
<button className="bg-surface-container-lowest hover:bg-surface text-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-2" id="voucher-btn" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>
<Icon name="redeem" className="text-[20px] text-primary" />
<span id="voucher-text">Collect Voucher</span>
</button>
</div>

<div className="absolute -right-8 -bottom-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none blur-xl"></div>
<div className="absolute left-1/2 -top-12 w-32 h-32 rounded-full bg-amber-400/20 pointer-events-none blur-lg"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<aside className="lg:col-span-3 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="tune" className="text-primary text-[20px]" />
<span className="font-headline-sm text-[18px] font-bold text-on-surface">Store Filters</span>
</div>
<button className="text-primary hover:text-primary-container font-label-md text-label-md font-semibold transition-colors" onClick={() => alertToast('Action triggered')}>
          Reset All
        </button>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="bolt" className="text-primary text-[20px]" />
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Kampala Express Hub</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Ready for SafeBoda pickup</div>
</div>
</div>
<input checked={true} className="w-4 h-4 accent-primary rounded cursor-pointer" id="instock-check" type="checkbox" />
</div>

<div className="flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Audio Subcategory</span>
<div className="flex flex-col gap-2 font-body-md text-body-md text-on-surface">
<label className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 accent-primary rounded" type="checkbox" />
<span>Over-Ear ANC</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12</span>
</label>
<label className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 accent-primary rounded" type="checkbox" />
<span>True Wireless Earbuds</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">15</span>
</label>
<label className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 accent-primary rounded" type="checkbox" />
<span>Portable BT Speakers</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">7</span>
</label>
<label className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
<div className="flex items-center gap-2">
<input checked={true} className="w-4 h-4 accent-primary rounded" type="checkbox" />
<span>Anker Power &amp; Cables</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">4</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Price Range (UGX)</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Max 400,000</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm">
<span className="text-on-surface-variant font-label-sm">Min:</span> 20,000
          </div>
<span className="text-on-surface-variant">-</span>
<div className="flex-1 bg-surface-container px-space-sm py-1.5 rounded-lg text-on-surface font-body-sm text-body-sm">
<span className="text-on-surface-variant font-label-sm">Max:</span> 350,000
          </div>
</div>
<input className="w-full accent-primary mt-1 cursor-pointer" max="400000" min="20000" type="range" value="350000" />
</div>

<div className="flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Minimum Customer Score</span>
<div className="flex flex-col gap-1.5">
<button className="flex items-center justify-between p-2 rounded-lg bg-surface-container text-on-surface text-left font-label-md text-label-md" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-1">
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star_half" className="text-amber-500 text-[18px]" />
<span className="font-bold ml-1">4.5 &amp; Above</span>
</div>
<Icon name="check" className="text-[16px] text-primary" />
</button>
<button className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container text-on-surface-variant text-left font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-1">
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<Icon name="star" className="text-amber-500 text-[18px]" />
<span className="font-bold ml-1">4.0 &amp; Above</span>
</div>
</button>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs text-on-surface">
<div className="flex items-center gap-1.5 text-tertiary font-label-md text-label-md font-bold">
<Icon name="security" className="text-[18px]" />
<span>Escrow Protection Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Funds are held safely in MTN MoMo / Airtel Money escrow until you inspect hardware seals at delivery.
        </p>
</div>
</aside>

<div className="lg:col-span-9 flex flex-col gap-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest px-space-lg py-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface">
<span className="font-bold text-on-surface">10 Featured SoundCore Products</span>
<span className="text-on-surface-variant">in Kampala Stock</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span>Sort by:</span>
<select className="bg-surface-container text-on-surface rounded-lg px-2 py-1 font-label-md text-label-md focus:outline-none cursor-pointer">
<option>Popularity &amp; Best Match</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Highest Customer Rating</option>
</select>
</div>
<div className="hidden sm:flex items-center bg-surface-container p-0.5 rounded-lg">
<button className="p-1 bg-surface-container-lowest rounded text-primary shadow-xs" title="Grid View" onClick={() => alertToast('Action triggered')}>
<Icon name="grid_view" className="text-[18px]" />
</button>
<button className="p-1 text-on-surface-variant hover:text-on-surface transition-colors" title="List View" onClick={() => alertToast('Action triggered')}>
<Icon name="view_list" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-space-sm">

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Space One active noise cancelling over-ear headphones in matte jet black isolated on clean studio cream background high definition" src={`${assetBase}/images/f310e1ff30edc519.webp`} />
<span className="absolute top-2 left-2 bg-primary-container text-on-primary font-label-sm text-label-sm font-black px-2 py-0.5 rounded-md shadow-xs">
                BEST SELLER
              </span>
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant font-normal">(428)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Space One ANC Wireless
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">248,500</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Life Q30 hybrid active noise cancelling headphones with soft memory foam earcups midnight blue finish studio lighting" src={`${assetBase}/images/0a6f7f557c2ff6e3.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.8</span>
<span className="text-on-surface-variant font-normal">(612)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Life Q30 Hybrid ANC
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">185,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Liberty 4 NC true wireless earbuds in glossy white charging case with illuminated battery indicator on warm surface" src={`${assetBase}/images/ae7da30188e2425a.webp`} />
<span className="absolute top-2 left-2 bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-md shadow-xs">
                POPULAR
              </span>
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant font-normal">(310)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Liberty 4 NC Earbuds
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">215,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Motion Boom rugged outdoor waterproof bluetooth boombox speaker with titanium drivers and integrated handle" src={`${assetBase}/images/78bffa4a048fa285.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">5.0</span>
<span className="text-on-surface-variant font-normal">(188)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Motion Boom Speaker
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">320,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Space A40 ultra-compact wireless earbuds with adaptive noise cancelling resting in matte black pebble case" src={`${assetBase}/images/e3fe940e6857121e.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.7</span>
<span className="text-on-surface-variant font-normal">(194)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Space A40 Hi-Res
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">195,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Anker PowerPort 20W USB-C compact fast wall charger adapter official Uganda 3-pin plug configuration studio product photo" src={`${assetBase}/images/660d3ced798b2c0b.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant font-normal">(530)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Anker 20W USB-C Wall Charger
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">55,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Flare 2 cylinder speaker with vibrant pulsating RGB LED ring base at bottom and black fabric grille" src={`${assetBase}/images/4c18141626ea9f6f.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.8</span>
<span className="text-on-surface-variant font-normal">(142)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Flare 2 360° LED Speaker
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">230,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Sport X10 rotatable ear hooks sports earbuds sweatproof red and black accent packaging studio photography" src={`${assetBase}/images/f1e10ed782a3493a.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant font-normal">(97)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Sport X10 Workout Earbuds
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">210,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore H30i lightweight on-ear wireless headphones folded neatly in pure white and warm metallic hinge" src={`${assetBase}/images/09112148e1877a05.webp`} />
<span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-md shadow-xs">
                VALUE PICK
              </span>
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.6</span>
<span className="text-on-surface-variant font-normal">(84)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore H30i Foldable Wireless
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">125,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Anker heavy duty braided nylon USB-C to 3.5mm auxiliary audio cable with reinforced aluminum connectors" src={`${assetBase}/images/ddbd010252c179e4.webp`} />
<button className="absolute top-2 right-2 w-7 h-7 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>
<Icon name="favorite_border" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1 text-amber-500 font-label-sm text-label-sm mb-1">
<Icon name="star" className="text-[14px]" />
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant font-normal">(215)</span>
</div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              SoundCore Type-C Braided Audio Cable
            </h3>
<div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm mt-1">
<Icon name="bolt" className="text-[14px]" />
<span>Swift Express Dispatch</span>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex flex-col">
<span className="font-currency-code text-currency-code text-on-surface-variant">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">25,000</span>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2 rounded-xl font-label-md text-label-md font-bold transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
              Add to Cart
            </button>
</div>
</div>
</div>

<div className="mt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing 10 of 38 genuine SoundCore products in Kampala stock
        </span>
<div className="flex items-center gap-2">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
            Previous
          </button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center" onClick={() => alertToast('Action triggered')}>
            1
          </button>
<button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center" onClick={() => alertToast('Action triggered')}>
            2
          </button>
<button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center" onClick={() => alertToast('Action triggered')}>
            3
          </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
            Next
          </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex items-start gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[32px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">12-Month Official SoundCore Warranty</span>
<span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded">Kampala Certified Hub</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
          Every device sold through SoundCore Uganda Official is registered with genuine serial identifiers. Covered for replacement or technician service at Nakasero Trade Tower Hub or Acacia Mall Annex.
        </p>
</div>
</div>

<div className="w-full lg:w-auto bg-surface-container-low p-space-lg rounded-xl flex items-center gap-space-md shrink-0">
<Icon name="lock_reset" className="text-primary text-[36px]" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">48-Hour Inspection Window</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Escrow funds locked until you verify seal &amp; playback</span>
</div>
<a className="ml-space-md text-primary hover:text-primary-container font-label-md text-label-md font-bold flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
        Learn Policy
        <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none bg-inverse-surface text-inverse-on-surface px-space-lg py-space-md rounded-xl shadow-xl flex items-center gap-space-sm" id="toast">
<Icon name="check_circle" className="text-tertiary-fixed-dim" />
<span className="font-label-md text-label-md" id="toast-message">Added to your SwiftCart!</span>
</div>
</div>
</div></main><footer className="w-full bg-[#0d1225] text-slate-300 mt-space-xl relative overflow-hidden border-t border-slate-800/80 shadow-[0_-8px_30px_rgba(13,18,37,0.35)]"><div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-primary-container to-amber-500"></div><div className="max-w-7xl mx-auto px-margin pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm font-bold text-white tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm uppercase bg-tertiary-fixed text-[#002113] px-space-xs py-0.5 rounded font-black tracking-wide">Uganda</span></div><p className="font-body-md text-body-md text-slate-300/90 leading-relaxed">Kampala's high-trust online marketplace with 100% Genuine Escrow Protection. Every order is held secure until you inspect and verify delivery.</p><div className="flex flex-col gap-2.5 text-slate-200 font-label-md text-label-md pt-1"><div className="flex items-center gap-space-xs group"><Icon name="call" className="text-primary-fixed-dim text-[18px]" /><span className="text-white font-medium">+256 800 220 800 (Toll Free)</span></div><div className="flex items-center gap-space-xs group"><Icon name="chat" className="text-tertiary-fixed-dim text-[18px]" /><span className="text-white font-medium">WhatsApp: +256 701 498 442</span></div><div className="flex items-start gap-space-xs group"><Icon name="business" className="text-primary-fixed-dim text-[18px] mt-0.5" /><span className="text-slate-200">Acacia Mall Annex &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs flex items-center gap-2"><span className="w-1.5 h-4 bg-primary rounded-full"></span>Customer Service</span><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="track-order" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track Your Order</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="escrow-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Escrow Refunds</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="payment-methods" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo &amp; Airtel Payment Options</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Swift Escrow Protection Policy</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Delivery Rates &amp; Speeds</a></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs flex items-center gap-2"><span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>About &amp; Business</span><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="about-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart Uganda</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="become-verified-seller" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Seller</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="safeboda-fleet" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Fleet</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="careers" href="#" onClick={() => alertToast('Action triggered')}>Careers in Kampala</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy &amp; Data Security</a><a className="text-slate-300 hover:text-primary-fixed transition-colors font-body-md text-body-md" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a></div><div className="flex flex-col gap-space-md"><span className="font-headline-sm text-headline-sm text-white font-bold flex items-center gap-2"><span className="w-1.5 h-4 bg-tertiary-fixed-dim rounded-full"></span>Payment &amp; Trust</span><div className="flex flex-wrap gap-space-xs"><span className="bg-slate-800/90 text-white font-bold px-space-sm py-1.5 rounded-lg text-label-md border border-slate-700 shadow-sm flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span>MTN MoMo</span><span className="bg-slate-800/90 text-white font-bold px-space-sm py-1.5 rounded-lg text-label-md border border-slate-700 shadow-sm flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span>Airtel Money</span><span className="bg-slate-800/90 text-white font-bold px-space-sm py-1.5 rounded-lg text-label-md border border-slate-700 shadow-sm">Visa</span><span className="bg-slate-800/90 text-white font-bold px-space-sm py-1.5 rounded-lg text-label-md border border-slate-700 shadow-sm">Mastercard</span></div><div className="bg-slate-800/80 border border-slate-700/80 p-space-md rounded-xl shadow-sm flex items-center gap-space-md"><Icon name="verified_user" className="text-tertiary-fixed-dim text-[28px]" /><div><div className="font-label-lg text-label-lg font-bold text-white">100% Escrow Protected</div><div className="font-body-sm text-body-sm text-slate-300">Funds released only after inspection</div></div></div><div className="flex flex-col gap-space-xs"><span className="font-label-md text-label-md text-slate-200 font-bold">Shop Faster on Mobile</span><div className="flex items-center gap-space-xs bg-slate-800/90 border border-slate-700 px-space-md py-2 rounded-lg text-white font-body-sm text-body-sm hover:border-slate-600 transition-colors cursor-pointer"><Icon name="phone_android" className="text-primary-fixed-dim text-[20px]" /><span className="font-medium">Download the SwiftCart App</span></div></div></div></div><div className="mt-12 pt-8 border-t border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm"><div className="text-slate-400">© 2024 SwiftCart Uganda Ltd. Registered with URA &amp; URSB. All prices in UGX (Ugandan Shilling) with 0 decimals.</div><div className="flex items-center gap-space-md text-slate-400"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Kampala Cloud Node (Active)</span><span>•</span><span className="text-slate-300">No Hidden Tariffs</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
