// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/search_results_swiftcart_desktop_2/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><a className="flex flex-col text-left" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><span className="font-headline-sm text-headline-sm tracking-tight leading-none text-on-primary">SwiftCart</span><span className="font-label-sm text-label-sm tracking-wider uppercase text-primary-fixed-dim font-bold">Uganda Marketplace</span></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col gap-space-sm mb-space-lg">

<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Marketplace</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Consumer Electronics</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-bold">Audio &amp; Headphones</span>
</div>
<div className="flex items-center gap-space-sm bg-tertiary-fixed/30 px-space-md py-1 rounded-full">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-tertiary-fixed font-bold tracking-wide uppercase">All 48 Units Held Under Swift Escrow Protection</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-0.5">
<div className="flex items-baseline gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
            Results for <span className="text-primary">“SoundCore Space One ANC”</span>
</h1>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">(48 genuine items located)</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>SafeBoda Central Kampala riders ready for dispatch within 45 mins</span>
</div>
</div>
<div className="flex items-center gap-space-md flex-wrap shrink-0">

<div className="relative flex items-center bg-surface-container-low rounded-lg px-space-md py-space-sm cursor-pointer group hover:bg-surface-container transition-colors">
<span className="font-label-md text-label-md text-on-surface-variant mr-space-xs">Sort by:</span>
<span className="font-label-md text-label-md text-on-surface font-bold" id="current-sort">Featured Matches</span>
<Icon name="expand_more" className="text-[18px] text-on-surface ml-space-xs transition-transform group-hover:rotate-180" />
</div>

<div className="flex items-center bg-surface-container-low p-0.5 rounded-lg">
<button aria-label="5 Column Grid View" className="p-1.5 rounded-md bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center transition-all" id="grid-view-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="grid_view" className="text-[20px]" />
</button>
<button aria-label="List View" className="p-1.5 rounded-md text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" id="list-view-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="view_list" className="text-[20px]" />
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-space-lg items-start">

<aside className="flex flex-col gap-space-md w-full shrink-0">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Categories</span>
<Icon name="tune" className="text-[18px] text-on-surface-variant" />
</div>
<div className="flex flex-col gap-1.5 font-body-sm text-body-sm">
<a className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-1"><Icon name="chevron_left" className="text-[16px]" /> All Consumer Tech</span>
<span className="text-label-sm font-semibold">1,420</span>
</a>
<div className="pl-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between text-primary font-bold bg-primary-fixed/20 px-space-xs py-1 rounded">
<span className="flex items-center gap-1"><Icon name="headphones" className="text-[14px]" /> Headphones &amp; Earbuds</span>
<span className="text-label-sm">48</span>
</div>
<a className="flex items-center justify-between text-on-surface-variant hover:text-on-surface pl-space-md py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Over-Ear ANC</span>
<span className="text-label-sm">28</span>
</a>
<a className="flex items-center justify-between text-on-surface-variant hover:text-on-surface pl-space-md py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>True Wireless (TWS)</span>
<span className="text-label-sm">16</span>
</a>
<a className="flex items-center justify-between text-on-surface-variant hover:text-on-surface pl-space-md py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>Bluetooth Speakers</span>
<span className="text-label-sm">4</span>
</a>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Kampala Delivery</span>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
<label className="flex items-center justify-between cursor-pointer group p-1 rounded hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="flex items-center gap-1 font-label-md text-label-md text-on-surface font-semibold">
<Icon name="bolt" className="text-primary text-[18px]" />
                SafeBoda Same-Day
              </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-fixed/30 px-1.5 py-0.5 rounded">Kampala</span>
</label>
<label className="flex items-center justify-between cursor-pointer group p-1 rounded hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Free Delivery Eligible</span>
</div>
<span className="text-label-sm text-on-surface-variant">19</span>
</label>
<label className="flex items-center justify-between cursor-pointer group p-1 rounded hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Pickup Station (Acacia/Nakasero)</span>
</div>
<span className="text-label-sm text-on-surface-variant">42</span>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Price Range (UGX)</span>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">Zero Decimals</span>
</div>
<div className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Min (UGX)</span>
<div className="bg-surface-container-low rounded-lg px-2.5 py-1.5 font-bold text-on-surface flex items-center">
              50,000
            </div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Max (UGX)</span>
<div className="bg-surface-container-low rounded-lg px-2.5 py-1.5 font-bold text-on-surface flex items-center">
              500,000
            </div>
</div>
</div>

<div className="relative py-2 flex items-center">
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full ml-[8%] w-[78%]"></div>
</div>
<div className="absolute left-[8%] w-4 h-4 bg-surface-container-lowest rounded-full shadow-md cursor-grab border-2 border-primary"></div>
<div className="absolute left-[86%] w-4 h-4 bg-surface-container-lowest rounded-full shadow-md cursor-grab border-2 border-primary"></div>
</div>

<div className="flex flex-wrap gap-1.5 pt-1">
<button className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-medium" type="button" onClick={() => alertToast('Action triggered')}>
            &lt; UGX 100k
          </button>
<button className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-bold" type="button" onClick={() => alertToast('Action triggered')}>
            UGX 100k - 250k
          </button>
<button className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-medium" type="button" onClick={() => alertToast('Action triggered')}>
            &gt; UGX 250k
          </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Brand</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">4 Brands</span>
</div>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface font-bold">SoundCore / Anker</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant font-bold">24</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Oraimo Uganda</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">12</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Sony Official</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">8</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">JBL Lifestyle</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">4</span>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Seller Verification Tier</span>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
<label className="flex items-center justify-between cursor-pointer p-1 rounded bg-tertiary-fixed/20">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-tertiary font-bold flex items-center gap-1">
<Icon name="verified" className="text-[16px]" />
                Official Brand Store
              </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">18</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="verified_user" className="text-[16px] text-secondary" />
                Verified Merchant
              </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">22</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Kikuubo Wholesale</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">8</span>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Escrow Verified Reviews</span>
<div className="flex flex-col gap-space-xs">
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">&amp; up</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">36</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded hover:bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface">&amp; up</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12</span>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Audio Features</span>
<div className="flex flex-col gap-space-xs">
<label className="flex items-center justify-between cursor-pointer p-1 rounded">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Active Noise Cancelling (ANC)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">38</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded">
<div className="flex items-center gap-space-xs">
<input checked={true} className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">LDAC Hi-Res Wireless</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">19</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Bluetooth 5.3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">27</span>
</label>
<label className="flex items-center justify-between cursor-pointer p-1 rounded">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface">Multi-Point Connection</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">31</span>
</label>
</div>
</div>

<button className="w-full py-space-sm px-space-md bg-surface-container text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5 font-bold" type="button" onClick={() => setDrawerOpen((prev) => !prev)}>
<Icon name="restart_alt" className="text-[18px]" />
        Reset All Filters
      </button>
</aside>

<main className="flex flex-col gap-space-lg w-full">

<div className="flex items-center justify-between flex-wrap gap-space-xs bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mr-1">Active:</span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold text-on-surface">
            SoundCore / Anker
            <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold text-on-surface">
            SafeBoda Same-Day
            <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold text-on-surface">
            Official Brand Store
            <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold text-on-surface">
            UGX 50k - 500k
            <Icon name="close" className="text-[14px] cursor-pointer hover:text-primary" />
</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Showing 10 of 48 items</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-space-md" id="products-container">

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">

<div className="absolute top-space-sm left-space-sm right-space-sm flex items-center justify-between z-10 pointer-events-none">
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-extrabold shadow-sm">
              -35% OFF
            </span>
<span className="bg-surface-container-lowest/90 backdrop-blur-md p-1 rounded-full shadow-sm text-tertiary">
<Icon name="shield" className="text-[16px]" />
</span>
</div>

<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="SoundCore Space One Wireless Over-Ear Active Noise Cancelling Headphones in sleek Jet Black finish with plush leatherette ear cushions on a minimal soft studio cream background, warm diffused sunlight highlighting ergonomic matte headband." src={`${assetBase}/images/2cf4a74598b5fbb9.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>

<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>

<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Space One Wireless ANC Headphones - Jet Black
          </h2>

<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(420)</span>
</div>

<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">248,500</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 380,000
            </div>
</div>

<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="absolute top-space-sm left-space-sm right-space-sm flex items-center justify-between z-10 pointer-events-none">
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-extrabold shadow-sm">
              -35% OFF
            </span>
</div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="SoundCore Space One Wireless Over-Ear Active Noise Cancelling Headphones in modern Sky Blue tone, rotated three-quarter view showing brushed aluminum accents and earcups on light studio background." src={`${assetBase}/images/71a6f9974892eb7c.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Space One ANC - Sky Blue Edition
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(184)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-primary font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold leading-none">248,500</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 380,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="absolute top-space-sm left-space-sm z-10 pointer-events-none">
<span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
              Best Value
            </span>
</div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Anker SoundCore Life Q30 Hybrid Active Noise Cancelling Headphones in deep midnight black with champagne gold logo details, high resolution audio presentation on warm cream surface." src={`${assetBase}/images/dee2ffd3a3d676cb.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Life Q30 Hybrid Active Noise Cancelling
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.7</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(892)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">185,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 240,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="SoundCore Liberty 4 NC True Wireless Earbuds in glossy velvet black sitting inside their pebble-shaped charging case with open lid, clean macro photography showing premium finish." src={`${assetBase}/images/a9c3c89f7a34dc6b.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Liberty 4 NC TWS 98.5% Noise Reduction
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.9</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(315)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">215,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 290,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="SoundCore Anker Q20i Hybrid Active Noise Cancelling Over-Ear Headphones with deep bass button, folded compactly on a light warm cream background." src={`${assetBase}/images/f09697c1453eaa91.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Q20i Hybrid ANC Bluetooth 5.0 Over-Ear
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(640)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">160,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 210,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Anker SoundCore Motion 300 Hi-Res Wireless Portable Speaker with SmartTune tech in rugged metallic green finish with strap, standing outdoors on warm timber decking." src={`${assetBase}/images/f87efbb03bf1d9f1.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Motion 300 Hi-Res Portable Bluetooth Speaker
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(95)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">275,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 340,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Oraimo BoomPop 2 ANC Wireless Over-Ear Headphones with tuned heavy bass sliders in dual-tone matte dark grey and green accents, vibrant commercial electronics styling." src={`${assetBase}/images/7e31e69bc55e4d9f.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[14px]" />
<span className="font-label-sm text-label-sm text-secondary font-bold truncate">Oraimo Official Hub</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            Oraimo BoomPop 2 Active Noise Cancelling Headphones
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.6</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(210)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">128,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 170,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Sony WH-CH520 Lightweight On-Ear Wireless Headphones in pure matte beige ivory tone with 50-hour battery life specification indicator, clean Japanese minimalist aesthetic." src={`${assetBase}/images/17dfd91cb8930220.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[14px]" />
<span className="font-label-sm text-label-sm text-secondary font-bold truncate">Sony Audio Kampala</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            Sony WH-CH520 Wireless Bluetooth Headphones - Beige
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.7</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(144)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">195,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 260,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="SoundCore Space A40 Compact Noise Cancelling Earbuds with 50-hour ultra-long playtime in refined navy blue finish displayed next to its case on warm daylight table." src={`${assetBase}/images/b93a10d9913389d3.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[14px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold truncate">SoundCore Uganda</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            SoundCore Space A40 Adaptive ANC Earbuds
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(280)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">235,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 310,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 relative group">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-space-sm flex items-center justify-center">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="JBL Tune 510BT Wireless On-Ear Pure Bass Headphones in sleek matte black finish angled on clean white studio pedestal with warm soft illumination." src={`${assetBase}/images/b2658fc43328a220.webp`} />
<div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
<Icon name="bolt" className="text-primary text-[14px]" />
<span className="font-label-sm text-label-sm font-bold text-primary">SafeBoda Today</span>
</div>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[14px]" />
<span className="font-label-sm text-label-sm text-secondary font-bold truncate">Kampala Hi-Fi Store</span>
</div>
<h2 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-2 leading-tight mb-space-xs group-hover:text-primary transition-colors">
            JBL Tune 510BT PureBass Wireless On-Ear
          </h2>
<div className="flex items-center gap-1 mb-space-sm">
<div className="flex items-center text-amber-500">
<Icon name="star" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-extrabold">4.6</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(530)</span>
</div>
<div className="mt-auto flex flex-col pt-space-xs">
<div className="flex items-baseline gap-1.5">
<span className="font-currency-code text-currency-code text-on-surface font-bold">UGX</span>
<span className="font-price-display text-price-display text-on-surface font-extrabold leading-none">145,000</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant line-through">
              UGX 190,000
            </div>
</div>
<button className="mt-space-sm w-full h-10 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#da3700] text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(218,55,0,0.30)] flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:brightness-105" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[18px]" />
            Add to Cart
          </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-sm">
<div className="font-body-sm text-body-sm text-on-surface-variant font-medium">
          Showing <span className="font-bold text-on-surface">1–10</span> of <span className="font-bold text-on-surface">48</span> items
        </div>

<div className="flex items-center gap-1.5">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant opacity-50 cursor-not-allowed flex items-center gap-1 font-label-md text-label-md" disabled={true} type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chevron_left" className="text-[16px]" />
<span>Previous</span>
</button>
<button className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center shadow-xs" type="button" onClick={() => alertToast('Action triggered')}>
            1
          </button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
            2
          </button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
            3
          </button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
            4
          </button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center gap-1 font-label-md text-label-md font-semibold transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<span>Next</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
          Page 1 of 4
        </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="manage_search" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg font-bold">Frequently Searched Audio in Kampala</span>
</div>
<div className="flex flex-wrap gap-space-xs">
<a className="flex items-center gap-1.5 bg-surface-container px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors group" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="search" className="text-[16px] text-on-surface-variant group-hover:text-primary transition-colors" />
<span>Anker Space Q45</span>
</a>
<a className="flex items-center gap-1.5 bg-surface-container px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors group" href="#" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="search" className="text-[16px] text-on-surface-variant group-hover:text-primary transition-colors" />
<span>Noise cancelling headphones Kampala</span>
</a>
<a className="flex items-center gap-1.5 bg-surface-container px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors group" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[16px] text-on-surface-variant group-hover:text-primary transition-colors" />
<span>SafeBoda electronics</span>
</a>
<a className="flex items-center gap-1.5 bg-surface-container px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors group" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="search" className="text-[16px] text-on-surface-variant group-hover:text-primary transition-colors" />
<span>Bluetooth earbuds UGX</span>
</a>
<a className="flex items-center gap-1.5 bg-surface-container px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors group" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="search" className="text-[16px] text-on-surface-variant group-hover:text-primary transition-colors" />
<span>SoundCore Life 2 Neo</span>
</a>
</div>
</div>
</main>
</div>


</div></div></main><footer className="w-full bg-[#0d1225] text-slate-300 mt-space-xl border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] relative overflow-hidden"><div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-tertiary-fixed opacity-90"></div><div className="max-w-7xl mx-auto px-margin pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl"><div className="flex flex-col gap-space-md"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm font-extrabold text-white tracking-tight">SwiftCart</span><span className="font-label-sm text-label-sm uppercase bg-tertiary text-white px-2 py-0.5 rounded font-bold tracking-wider shadow-sm">Uganda</span></div><p className="font-body-md text-body-md text-slate-300/90 leading-relaxed">Kampala's high-trust online marketplace with 100% Genuine Escrow Protection. Every order is held secure until you inspect and verify delivery.</p><div className="flex flex-col gap-space-xs text-slate-200 font-label-md text-label-md"><div className="flex items-center gap-space-xs"><Icon name="call" className="text-[#ff8a1f] text-[18px]" /><span className="hover:text-white transition-colors">+256 800 220 800 (Toll Free)</span></div><div className="flex items-center gap-space-xs"><Icon name="chat" className="text-[#4edea3] text-[18px]" /><span className="hover:text-white transition-colors">WhatsApp: +256 701 498 442</span></div><div className="flex items-start gap-space-xs"><Icon name="business" className="text-[#ffb5a1] text-[18px]" /><span className="text-slate-300">Acacia Mall Annex &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs tracking-tight">Customer Service</span><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="track-order" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>Track Your Order</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="escrow-refunds" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; Escrow Refunds</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="payment-methods" href="#" onClick={() => alertToast('Action triggered')}>MTN MoMo &amp; Airtel Payment Options</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Swift Escrow Protection Policy</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Delivery Rates &amp; Speeds</a></div><div className="flex flex-col gap-space-sm"><span className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs tracking-tight">About &amp; Business</span><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="about-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>About SwiftCart Uganda</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="become-verified-seller" href="#" onClick={() => alertToast('Action triggered')}>Become a Verified Seller</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="safeboda-fleet" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Fleet</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="careers" href="#" onClick={() => alertToast('Action triggered')}>Careers in Kampala</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy &amp; Data Security</a><a className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all font-body-md text-body-md" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a></div><div className="flex flex-col gap-space-md"><span className="font-headline-sm text-headline-sm text-white font-bold tracking-tight">Payment &amp; Trust</span><div className="flex flex-wrap gap-space-xs"><span className="bg-[#17203a] border border-slate-700/80 px- space-sm px-3 py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-amber-400 transition-colors">MTN MoMo</span><span className="bg-[#17203a] border border-slate-700/80 px- space-sm px-3 py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-red-400 transition-colors">Airtel Money</span><span className="bg-[#17203a] border border-slate-700/80 px- space-sm px-3 py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-blue-400 transition-colors">Visa</span><span className="bg-[#17203a] border border-slate-700/80 px- space-sm px-3 py-1 rounded text-white font-label-md text-label-md shadow-sm font-semibold hover:border-orange-400 transition-colors">Mastercard</span></div><div className="bg-[#131b34] border border-[#1f2d57] p-space-md rounded-xl shadow-md flex items-center gap-space-md"><div className="w-11 h-11 rounded-lg bg-[#00855b]/20 flex items-center justify-center shrink-0 border border-[#4edea3]/40"><Icon name="verified_user" className="text-[#4edea3] text-[26px]" /></div><div><div className="font-label-lg text-label-lg font-bold text-white">100% Escrow Protected</div><div className="font-body-sm text-body-sm text-slate-300">Funds released only after inspection</div></div></div><div className="flex flex-col gap-space-xs"><span className="font-label-md text-label-md text-slate-200 font-bold">Shop Faster on Mobile</span><div className="flex items-center gap-space-xs bg-[#17203a] hover:bg-[#1e2a4d] border border-slate-700/70 px-space-md py- space-xs py-2 rounded-lg text-white font-body-sm text-body-sm transition-colors cursor-pointer"><Icon name="phone_android" className="text-[#ff8a1f] text-[20px]" /><span>Download the SwiftCart App</span></div></div></div></div><div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm"><div className="text-slate-400">© 2024 SwiftCart Uganda Ltd. Registered with URA &amp; URSB. All prices in UGX (Ugandan Shilling) with 0 decimals.</div><div className="flex items-center gap-space-md text-slate-400"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Kampala Cloud Node (Active)</span><span>No Hidden Tariffs</span></div></div></div></footer>
    </div>
  );
};

export default Screen;
