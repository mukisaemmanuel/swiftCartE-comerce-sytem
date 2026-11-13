// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/home_marketplace_swiftcart_desktop_1/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><a href="#" data-path="marketplace" className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img src={`${assetBase}/images/a593324aedcf6cb2.webp`} alt="swiftcart-logo" className="h-7 w-auto object-contain" /><div className="flex flex-col text-left leading-tight"><span className="font-headline-sm text-[20px] font-black tracking-tight text-[#da3700] leading-none">SwiftCart</span><div className="flex items-center gap-1 mt-0.5"><span className="text-[9px] font-extrabold tracking-wider uppercase text-[#161b2d]">Uganda Marketplace</span><span className="bg-[#00855b] text-white text-[8px] font-extrabold px-1 rounded">UG</span></div></div></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">

<section className="max-w-7xl mx-auto px-margin pt-6 pb-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">

<div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest min-h-[480px] flex flex-col justify-between group">

<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Editorial product photo of modern matte black wireless over-ear noise-cancelling headphones resting on an African mahogany wooden table with soft warm sunrise lighting in Kampala, cinematic 8k quality, warm terracotta and midnight slate accents" style={{"backgroundImage":"url('/images/44b74dfab3840598.webp')"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 via-on-surface/65 to-transparent"></div>
<div className="absolute top-0 right-0 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 p-8 sm:p-12 flex flex-col justify-between h-full max-w-xl">
<div className="space-y-4">

<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider shadow-md">
<Icon name="local_fire_department" className="text-[15px]" />
                Super Tech Week
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-tertiary font-label-md text-label-md shadow-sm">
<Icon name="verified_user" className="text-[15px]" />
                Swift Escrow Protected
              </span>
</div>

<div className="space-y-2">
<span className="text-tertiary-fixed font-label-lg text-label-lg tracking-widest uppercase block">Official Brand Launch</span>
<h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight font-extrabold text-shadow-sm">
                SoundCore Space One ANC
              </h1>
<p className="font-body-md text-body-md text-on-primary/80 line-clamp-2 max-w-md">
                Industry-grade adaptive noise cancellation engineered for Kampala commute. Instant dispatch from Acacia Mall hub.
              </p>
</div>

<div className="flex items-baseline gap-3 pt-2">
<span className="font-headline-lg text-headline-lg text-on-primary font-black">UGX 248,500</span>
<span className="font-body-md text-body-md text-on-primary/50 line-through">UGX 415,000</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">-40% OFF</span>
</div>
</div>

<div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
<button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="shopping_bag" className="text-[20px]" />
              Claim Escrow Deal
            </button>
<div className="flex items-center gap-2 text-on-primary/90">
<Icon name="verified" className="text-tertiary-fixed text-[18px]" />
<span className="font-body-sm text-body-sm">Inspect package before release of funds</span>
</div>
</div>
</div>

<div className="relative z-10 px-8 sm:px-12 pb-6 flex items-center gap-2">
<div className="w-8 h-2 rounded-full bg-primary-container transition-all"></div>
<div className="w-2.5 h-2 rounded-full bg-surface-container-lowest/40 hover:bg-surface-container-lowest/70 transition-all cursor-pointer"></div>
<div className="w-2.5 h-2 rounded-full bg-surface-container-lowest/40 hover:bg-surface-container-lowest/70 transition-all cursor-pointer"></div>
<div className="w-2.5 h-2 rounded-full bg-surface-container-lowest/40 hover:bg-surface-container-lowest/70 transition-all cursor-pointer"></div>
<span className="font-label-sm text-label-sm text-on-primary/60 ml-2">01 / 04</span>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-lg justify-between">

<div className="relative rounded-3xl overflow-hidden p-6 bg-surface-container-low shadow-md flex-1 flex flex-col justify-between group hover:shadow-lg transition-all">
<div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary/10 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="space-y-1">
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div>
<h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Kikuubo Direct</h3>
</div>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold">Bulk Savings</span>
</div>
<div className="relative z-10 my-4 flex items-center gap-4">
<div className="w-20 h-20 rounded-2xl overflow-hidden shadow-inner bg-surface shrink-0">
<img className="w-full h-full object-cover" data-alt="High quality bulk burlap sack of fragrant pure white Super Basmati rice stacked next to a clear 5-liter golden cooking oil container in an organized modern Kampala warehouse store, bright commercial photography" src={`${assetBase}/images/a70abce93fcaa057.webp`} />
</div>
<div className="space-y-1">
<p className="font-body-sm text-body-sm text-on-surface-variant">5L Cooking Oil, Bulk Rice Sacks, Sugar &amp; Dry Essentials</p>
<div className="font-label-lg text-label-lg text-primary font-black">From UGX 48,000</div>
</div>
</div>
<div className="relative z-10 pt-2 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<Icon name="lock_clock" className="text-[16px] text-tertiary" />
              Held in escrow till doorstep weigh-in
            </span>
<a className="w-9 h-9 rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary flex items-center justify-center text-on-surface shadow-sm transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_forward" className="text-[18px]" />
</a>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-secondary/10 via-surface-container-lowest to-surface-container shadow-md flex-1 flex flex-col justify-between group hover:shadow-lg transition-all">
<div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-secondary-container/40 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="space-y-1">
<div className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div>
<h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">45-Min Dispatch</h3>
</div>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold">Live GPS</span>
</div>
<div className="relative z-10 my-4 flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed-dim/40 flex items-center justify-center text-secondary shrink-0 shadow-inner">
<Icon name="two_wheeler" className="text-[32px]" />
</div>
<div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Flat city delivery across Kololo, Ntinda, Bugolobi &amp; Central Kampala</p>
<div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 3,500 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">flat fare</span></div>
</div>
</div>
<div className="relative z-10 pt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></div>
<span className="font-body-sm text-body-sm font-bold text-on-surface">348 riders active</span>
</div>
<span className="text-secondary font-label-md text-label-md flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
              Track Zones <Icon name="chevron_right" className="text-[16px]" />
</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-margin py-6 w-full">
<div className="flex items-center justify-between mb-4">
<div className="space-y-0.5">
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Explore Kampala Marketplace</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">All categories authenticated with escrow verification</p>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-primary-container flex items-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
        All 48 Departments <Icon name="arrow_forward" className="text-[18px]" />
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-md">

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/20 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
<Icon name="smartphone" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Phones &amp; Tech</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">1,420 items</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-secondary-fixed/25 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-2 group-hover:scale-110 transition-transform">
<Icon name="headphones" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-secondary transition-colors">Audio &amp; Sound</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">840 items</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-high shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface mb-2 group-hover:scale-110 transition-transform">
<Icon name="laptop_mac" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface transition-colors">Computers &amp; IT</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">620 items</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/30 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-primary-fixed/30 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
<Icon name="styler" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Kitenge &amp; Fashion</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">2,100 items</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-tertiary-fixed/30 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary mb-2 group-hover:scale-110 transition-transform">
<Icon name="eco" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-tertiary transition-colors">Nakasero Fresh</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Same-day</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-secondary-fixed/20 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-2 group-hover:scale-110 transition-transform">
<Icon name="spa" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-secondary transition-colors">Shea &amp; Beauty</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Organic Ug</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-high shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-2 group-hover:scale-110 transition-transform">
<Icon name="blender" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface transition-colors">Home &amp; Kitchen</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">540 items</span>
</a>

<a className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/25 shadow-sm hover:shadow-md transition-all group text-center cursor-pointer" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-14 h-14 rounded-2xl bg-primary-fixed/25 flex items-center justify-center text-primary-container mb-2 group-hover:scale-110 transition-transform">
<Icon name="two_wheeler" className="text-[28px]" />
</div>
<span className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Boda Spares</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">OEM Genuine</span>
</a>
</div>
</section><section className="max-w-7xl mx-auto px-margin py-4 w-full"><div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-5 shadow-sm"><div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon name="confirmation_number" className="text-[24px]" /></div><div><div className="flex items-center gap-2"><h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Kampala Voucher Center</h3><span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold uppercase">Limited Slots</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Tap to claim merchant discounts applied automatically at escrow checkout.</p></div></div><a href="#" className="font-label-md text-label-md text-primary hover:text-primary-container font-bold flex items-center gap-1 self-start md:self-auto" onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}>View All 18 Vouchers <Icon name="arrow_forward" className="text-[16px]" /></a></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"><div className="relative bg-gradient-to-r from-primary-fixed/30 to-surface-container-low border border-primary/20 rounded-2xl p-3.5 flex items-center justify-between gap-3 overflow-hidden"><div className="space-y-0.5"><div className="font-headline-sm text-headline-sm font-black text-primary leading-tight">UGX 15,000</div><div className="font-label-sm text-label-sm font-bold text-on-surface">Orders over UGX 150,000</div><div className="text-[11px] text-on-surface-variant flex items-center gap-1"><Icon name="shield" className="text-[13px] text-tertiary" /> Platform Escrow Wide</div></div><button type="button" className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-bold transition-all shrink-0 shadow-sm cursor-pointer" onClick={() => alertToast('Action triggered')}>Collect</button></div><div className="relative bg-gradient-to-r from-secondary-fixed/40 to-surface-container-low border border-secondary/20 rounded-2xl p-3.5 flex items-center justify-between gap-3 overflow-hidden"><div className="space-y-0.5"><div className="font-headline-sm text-headline-sm font-black text-secondary leading-tight">FREE BODA</div><div className="font-label-sm text-label-sm font-bold text-on-surface">SafeBoda Express 1st Trip</div><div className="text-[11px] text-on-surface-variant flex items-center gap-1"><Icon name="bolt" className="text-[13px] text-secondary" /> Central &amp; Kololo Hubs</div></div><button type="button" className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 text-on-secondary font-label-sm text-label-sm font-bold transition-all shrink-0 shadow-sm cursor-pointer" onClick={() => alertToast('Action triggered')}>Collect</button></div><div className="relative bg-gradient-to-r from-tertiary-fixed/30 to-surface-container-low border border-tertiary/20 rounded-2xl p-3.5 flex items-center justify-between gap-3 overflow-hidden"><div className="space-y-0.5"><div className="font-headline-sm text-headline-sm font-black text-tertiary leading-tight">UGX 50,000</div><div className="font-label-sm text-label-sm font-bold text-on-surface">Kikuubo Bulk (3+ Cartons)</div><div className="text-[11px] text-on-surface-variant flex items-center gap-1"><Icon name="storefront" className="text-[13px] text-tertiary" /> Wholesale Verified</div></div><button type="button" className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-bold transition-all shrink-0 shadow-sm cursor-pointer" onClick={() => alertToast('Action triggered')}>Collect</button></div><div className="relative bg-gradient-to-r from-primary-fixed/20 to-surface-container-low border border-outline-variant/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 overflow-hidden"><div className="space-y-0.5"><div className="font-headline-sm text-headline-sm font-black text-on-surface leading-tight">10% OFF</div><div className="font-label-sm text-label-sm font-bold text-on-surface">SoundCore &amp; Anker Stores</div><div className="text-[11px] text-on-surface-variant flex items-center gap-1"><Icon name="verified" className="text-[13px] text-amber-500" /> Official Brand Only</div></div><button type="button" className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-bold transition-all shrink-0 shadow-sm cursor-pointer" onClick={() => alertToast('Action triggered')}>Collect</button></div></div></div></section>

<div className="max-w-7xl mx-auto px-margin py-2 w-full"><div className="bg-gradient-to-r from-primary-fixed/30 via-surface-container-low to-tertiary-fixed/30 border border-primary/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0"><Icon name="campaign" className="text-[20px]" /></div><div><div className="flex items-center gap-2"><span className="font-label-md text-label-md font-bold text-on-surface">SafeBoda Express &amp; Wholesale Alert:</span><span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary text-[10px] font-bold uppercase tracking-wider">Live</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Guaranteed same-day delivery across Kampala, Entebbe &amp; Wakiso. All orders protected by audited escrow custody.</p></div></div><div className="flex items-center gap-2 shrink-0"><a href="#" className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-sm" onClick={() => alertToast('Action triggered')}><Icon name="electric_moped" className="text-[16px]" /><span>Dispatch Courier</span></a><a href="#" className="px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-md text-label-md font-bold transition-colors whitespace-nowrap" onClick={() => alertToast('Action triggered')}>Learn More</a></div></div></div><section className="max-w-7xl mx-auto px-margin py-8 w-full">
<div className="bg-gradient-to-r from-primary-container via-primary to-primary-container rounded-3xl p-6 sm:p-8 shadow-xl text-on-primary">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-on-primary/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-on-primary/20 backdrop-blur flex items-center justify-center">
<Icon name="local_fire_department" className="text-surface text-[24px]" />
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md font-extrabold tracking-tight">Today's Flash Deals</h2>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold uppercase">Live Escrow</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary/80">Prices slashed. Valid while warehouse stock lasts in Kampala.</p>
</div>
</div>

<div className="flex items-center gap-2 bg-on-surface/40 backdrop-blur px-4 py-2.5 rounded-2xl self-start md:self-auto">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold mr-1">Ends In:</span>
<div className="flex items-center gap-1 font-headline-sm text-headline-sm font-black font-mono tracking-wider">
<span className="bg-surface text-primary px-2 py-1 rounded-lg text-sm" id="deal-hours">02</span>
<span className="text-primary-fixed">:</span>
<span className="bg-surface text-primary px-2 py-1 rounded-lg text-sm" id="deal-minutes">42</span>
<span className="text-primary-fixed">:</span>
<span className="bg-surface text-primary px-2 py-1 rounded-lg text-sm" id="deal-seconds">34</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md pt-6">

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-md flex flex-col justify-between text-on-surface group hover:-translate-y-1 transition-transform">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-3">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling over-ear headphones in midnight black, studio lighting on subtle textured stone background, commercial product photography" src={`${assetBase}/images/b9f88fdcf4aefb39.webp`} />
<span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full shadow">-40%</span>
<span className="absolute top-2 right-2 bg-tertiary-fixed/90 backdrop-blur text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[12px]" /> OEM
            </span>
</div>
<div className="space-y-1">
<div className="font-label-sm text-label-sm text-on-surface-variant">SoundCore UG</div>
<h4 className="font-label-lg text-label-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">SoundCore Space One ANC</h4>
<div className="flex items-baseline gap-1.5 pt-1">
<span className="font-headline-sm text-headline-sm text-primary font-black">UGX 248,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through text-[11px]">UGX 415,000</span>

<div className="pt-2 space-y-1">
<div className="flex justify-between text-[11px] font-label-sm text-label-sm text-on-surface-variant">
<span>Sold: 28</span>
<span className="text-primary font-bold">4 left</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-4/5"></div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Add to Cart
          </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-md flex flex-col justify-between text-on-surface group hover:-translate-y-1 transition-transform">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-3">
<img className="w-full h-full object-cover" data-alt="Oraimo FreePods 4 true wireless earbuds with sliding metallic green case and active noise cancellation displayed on clean light minimal surface, premium electronics catalog" src={`${assetBase}/images/3105261ad9539119.webp`} />
<span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full shadow">-28%</span>
<span className="absolute top-2 right-2 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
<Icon name="bolt" className="text-[12px]" /> SafeBoda
            </span>
</div>
<div className="space-y-1">
<div className="font-label-sm text-label-sm text-on-surface-variant">Victoria Tech Supplies</div>
<h4 className="font-label-lg text-label-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">Oraimo FreePods 4 ANC</h4>
<div className="flex items-baseline gap-1.5 pt-1">
<span className="font-headline-sm text-headline-sm text-primary font-black">UGX 145,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through text-[11px]">UGX 200,000</span>
<div className="pt-2 space-y-1">
<div className="flex justify-between text-[11px] font-label-sm text-label-sm text-on-surface-variant">
<span>Sold: 42</span>
<span className="text-primary font-bold">8 left</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-3/4"></div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Add to Cart
          </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-md flex flex-col justify-between text-on-surface group hover:-translate-y-1 transition-transform">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-3">
<img className="w-full h-full object-cover" data-alt="Samsung Galaxy A54 5G smartphone in awesome lime finish angled view showing glass back triple camera array, clean studio product photograph with soft ambient light" src={`${assetBase}/images/cc54f3df86a51288.webp`} />
<span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full shadow">-19%</span>
<span className="absolute top-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">URSB</span>
</div>
<div className="space-y-1">
<div className="font-label-sm text-label-sm text-on-surface-variant">Kampala Mobile Hub</div>
<h4 className="font-label-lg text-label-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">Samsung Galaxy A54 5G</h4>
<div className="flex items-baseline gap-1.5 pt-1">
<span className="font-headline-sm text-headline-sm text-primary font-black">UGX 1,120,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through text-[11px]">UGX 1,380,000</span>
<div className="pt-2 space-y-1">
<div className="flex justify-between text-[11px] font-label-sm text-label-sm text-on-surface-variant">
<span>Sold: 15</span>
<span className="text-primary font-bold">2 left</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-5/6"></div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Add to Cart
          </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-md flex flex-col justify-between text-on-surface group hover:-translate-y-1 transition-transform">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-3">
<img className="w-full h-full object-cover" data-alt="Glass jar of 100 percent pure cold-pressed organic unrefined Nilotica Shea Butter from Northern Uganda sitting next to wild shea nuts on a natural woven raffia mat" src={`${assetBase}/images/00fe0b9f1f564951.webp`} />
<span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full shadow">-35%</span>
<span className="absolute top-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Organic</span>
</div>
<div className="space-y-1">
<div className="font-label-sm text-label-sm text-on-surface-variant">Pearl Naturals UG</div>
<h4 className="font-label-lg text-label-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">Pure Nilotica Shea (500g)</h4>
<div className="flex items-baseline gap-1.5 pt-1">
<span className="font-headline-sm text-headline-sm text-primary font-black">UGX 35,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through text-[11px]">UGX 54,000</span>
<div className="pt-2 space-y-1">
<div className="flex justify-between text-[11px] font-label-sm text-label-sm text-on-surface-variant">
<span>Sold: 64</span>
<span className="text-primary font-bold">11 left</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-2/3"></div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Add to Cart
          </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-md flex flex-col justify-between text-on-surface group hover:-translate-y-1 transition-transform">
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-3">
<img className="w-full h-full object-cover" data-alt="Philips heavy classic dry iron HD1172 with polished aluminum soleplate and black ergonomic handle, clean product still life on warm pastel studio set" src={`${assetBase}/images/edf006a2c4d5a6f2.webp`} />
<span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full shadow">-23%</span>
<span className="absolute top-2 right-2 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Original</span>
</div>
<div className="space-y-1">
<div className="font-label-sm text-label-sm text-on-surface-variant">Kikuubo Express</div>
<h4 className="font-label-lg text-label-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">Philips Heavy Dry Iron</h4>
<div className="flex items-baseline gap-1.5 pt-1">
<span className="font-headline-sm text-headline-sm text-primary font-black">UGX 85,000</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through text-[11px]">UGX 110,000</span>
<div className="pt-2 space-y-1">
<div className="flex justify-between text-[11px] font-label-sm text-label-sm text-on-surface-variant">
<span>Sold: 39</span>
<span className="text-primary font-bold">6 left</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-4/5"></div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" /> Add to Cart
          </button>
</div>
</div>
</div>
</section><section className="max-w-7xl mx-auto px-margin py-8 w-full"><div className="bg-surface-container-low rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-md"><div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-surface-container-highest"><div className="space-y-1"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div><h2 className="font-headline-md text-headline-md font-extrabold text-on-surface tracking-tight">Direct Factory &amp; Kikuubo Importer Sourcing</h2><p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Source container-direct or bulk carton supplies from vetted Uganda factory distributors and bonded warehouses in Kikuubo &amp; Namanve. Guaranteed Trade Assurance &amp; Doorstep Weigh-in.</p></div><div className="flex items-center gap-3 shrink-0"><button type="button" className="px-5 py-2.5 bg-primary text-on-primary hover:bg-primary-container rounded-xl font-label-md text-label-md font-bold shadow transition-colors flex items-center gap-2 cursor-pointer" onClick={() => alertToast('Action triggered')}><Icon name="post_add" className="text-[18px]" /> Submit Instant RFQ</button><button type="button" className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/50 text-on-surface hover:bg-surface-container-high rounded-xl font-label-md text-label-md font-bold transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Sample Orders</button></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md pt-6"><div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/20 flex flex-col justify-between group hover:shadow-md transition-all"><div className="space-y-2"><div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high"><img src={`${assetBase}/images/a70abce93fcaa057.webp`} alt="Refined Cooking Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><span className="absolute top-2 left-2 bg-on-surface/80 backdrop-blur text-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">MOQ: 10 Jerrycans</span><span className="absolute top-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Bonded Stock</span></div><div><span className="text-[11px] font-bold text-primary uppercase">Kikuubo Direct Importers</span><h4 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">Fortified Vegetable Cooking Oil (20L)</h4></div><div className="bg-surface-container-low rounded-xl p-2.5 space-y-1 text-xs"><div className="flex justify-between"><span className="text-on-surface-variant">10 - 49 pcs:</span><span className="font-bold text-on-surface">UGX 108,000/pc</span></div><div className="flex justify-between"><span className="text-on-surface-variant">50+ pcs:</span><span className="font-bold text-primary">UGX 99,500/pc</span></div></div></div><div className="pt-3 flex items-center justify-between border-t border-surface-container mt-3"><div className="flex items-center gap-1 text-[11px] text-tertiary font-bold"><Icon name="verified" className="text-[14px]" /> Trade Assurance</div><button type="button" className="text-primary hover:text-primary-container font-label-md text-label-md font-bold flex items-center gap-0.5 cursor-pointer" onClick={() => alertToast('Action triggered')}>Inquire <Icon name="chevron_right" className="text-[14px]" /></button></div></div><div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/20 flex flex-col justify-between group hover:shadow-md transition-all"><div className="space-y-2"><div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high"><img src={`${assetBase}/images/2ca6fdda798b3a58.webp`} alt="Pure White Cane Sugar 50kg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><span className="absolute top-2 left-2 bg-on-surface/80 backdrop-blur text-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">MOQ: 5 Sacks</span><span className="absolute top-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Jinja Mill</span></div><div><span className="text-[11px] font-bold text-primary uppercase">Kakira Mill Distributor</span><h4 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">Uganda Cane Granulated Sugar (50kg)</h4></div><div className="bg-surface-container-low rounded-xl p-2.5 space-y-1 text-xs"><div className="flex justify-between"><span className="text-on-surface-variant">5 - 19 bags:</span><span className="font-bold text-on-surface">UGX 218,000/bag</span></div><div className="flex justify-between"><span className="text-on-surface-variant">20+ bags:</span><span className="font-bold text-primary">UGX 204,000/bag</span></div></div></div><div className="pt-3 flex items-center justify-between border-t border-surface-container mt-3"><div className="flex items-center gap-1 text-[11px] text-tertiary font-bold"><Icon name="verified" className="text-[14px]" /> Weigh Guaranteed</div><button type="button" className="text-primary hover:text-primary-container font-label-md text-label-md font-bold flex items-center gap-0.5 cursor-pointer" onClick={() => alertToast('Action triggered')}>Inquire <Icon name="chevron_right" className="text-[14px]" /></button></div></div><div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/20 flex flex-col justify-between group hover:shadow-md transition-all"><div className="space-y-2"><div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high"><img src={`${assetBase}/images/e870bf1423b65938.webp`} alt="Fast USB Chargers Carton" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><span className="absolute top-2 left-2 bg-on-surface/80 backdrop-blur text-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">MOQ: 50 Units</span><span className="absolute top-2 right-2 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Direct Factory</span></div><div><span className="text-[11px] font-bold text-primary uppercase">Kampala Mobile Importers</span><h4 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">20W PD Type-C Fast Chargers (Carton)</h4></div><div className="bg-surface-container-low rounded-xl p-2.5 space-y-1 text-xs"><div className="flex justify-between"><span className="text-on-surface-variant">50 - 199 pcs:</span><span className="font-bold text-on-surface">UGX 16,500/pc</span></div><div className="flex justify-between"><span className="text-on-surface-variant">200+ pcs:</span><span className="font-bold text-primary">UGX 13,000/pc</span></div></div></div><div className="pt-3 flex items-center justify-between border-t border-surface-container mt-3"><div className="flex items-center gap-1 text-[11px] text-tertiary font-bold"><Icon name="verified" className="text-[14px]" /> UNBS Certified</div><button type="button" className="text-primary hover:text-primary-container font-label-md text-label-md font-bold flex items-center gap-0.5 cursor-pointer" onClick={() => alertToast('Action triggered')}>Inquire <Icon name="chevron_right" className="text-[14px]" /></button></div></div><div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/20 flex flex-col justify-between group hover:shadow-md transition-all"><div className="space-y-2"><div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high"><img src={`${assetBase}/images/00fe0b9f1f564951.webp`} alt="Pure Nilotica Shea Tub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><span className="absolute top-2 left-2 bg-on-surface/80 backdrop-blur text-surface font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">MOQ: 25kg Drum</span><span className="absolute top-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.5 rounded font-bold">Direct Farm</span></div><div><span className="text-[11px] font-bold text-primary uppercase">Gulu Agro Cooperative</span><h4 className="font-label-lg text-label-lg font-bold text-on-surface line-clamp-1">Organic Nilotica Raw Shea Butter Bulk</h4></div><div className="bg-surface-container-low rounded-xl p-2.5 space-y-1 text-xs"><div className="flex justify-between"><span className="text-on-surface-variant">25 - 99 kg:</span><span className="font-bold text-on-surface">UGX 22,000/kg</span></div><div className="flex justify-between"><span className="text-on-surface-variant">100+ kg:</span><span className="font-bold text-primary">UGX 18,500/kg</span></div></div></div><div className="pt-3 flex items-center justify-between border-t border-surface-container mt-3"><div className="flex items-center gap-1 text-[11px] text-tertiary font-bold"><Icon name="verified" className="text-[14px]" /> Export Grade</div><button type="button" className="text-primary hover:text-primary-container font-label-md text-label-md font-bold flex items-center gap-0.5 cursor-pointer" onClick={() => alertToast('Action triggered')}>Inquire <Icon name="chevron_right" className="text-[14px]" /></button></div></div></div><div className="mt-6 bg-surface-container-lowest rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary/20"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0"><Icon name="request_quote" className="text-[22px]" /></div><div><div className="font-label-lg text-label-lg font-bold text-on-surface">Need a tailored container, fabric bales, or machinery quote?</div><p className="font-body-sm text-body-sm text-on-surface-variant">Post a Request for Quotation (RFQ) and get 3+ verified quotes within 4 business hours.</p></div></div><button type="button" className="px-5 py-2 rounded-xl bg-primary-fixed hover:bg-primary-fixed/80 text-on-primary-fixed font-label-md text-label-md font-bold transition-colors whitespace-nowrap cursor-pointer" onClick={() => alertToast('Action triggered')}>Post RFQ Free</button></div></div></section>

<section className="max-w-7xl mx-auto px-margin py-8 w-full"><div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6"><div><div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-1"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div><h2 className="font-headline-md text-headline-md font-extrabold text-on-surface">Compare Offers From 3+ Kampala Verified Sellers</h2></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Buy from the closest merchant for fastest SafeBoda delivery or best cash-on-delivery escrow rate.</p></div><div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg"><div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md border border-outline-variant/30 flex flex-col justify-between"><div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-surface-container"><img src={`${assetBase}/images/b9f88fdcf4aefb39.webp`} alt="Space One" className="w-20 h-20 rounded-2xl object-cover bg-surface-container-low shrink-0" /><div><div className="flex items-center gap-2"><span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">Best Seller</span><span className="text-xs text-on-surface-variant font-bold">4 offers available</span></div><h3 className="font-label-lg text-label-lg font-bold text-on-surface">SoundCore Space One ANC Headphones</h3><div className="text-xs text-tertiary font-bold flex items-center gap-1 mt-0.5"><Icon name="verified" className="text-[14px]" /> All sellers escrow-vetted</div></div></div><div className="space-y-3 py-4"><div className="flex items-center justify-between p-3 rounded-xl bg-primary-fixed/20 border border-primary/20"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">SoundCore UG Official</span><span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded">Featured</span></div><div className="text-xs text-on-surface-variant">Acacia Mall • SafeBoda 30 mins</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-black text-primary">UGX 248,500</div><button type="button" className="mt-1 px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-lg hover:bg-primary-container transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div><div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">Victoria Tech Supplies</span><span className="text-xs text-amber-500 font-bold flex items-center"><Icon name="star" className="text-[14px]" /> 4.8</span></div><div className="text-xs text-on-surface-variant">Nakasero Trade Tower • SafeBoda 45 mins</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-bold text-on-surface">UGX 249,000</div><button type="button" className="mt-1 px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div><div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">Kampala Gadget Vault</span><span className="text-xs text-amber-500 font-bold flex items-center"><Icon name="star" className="text-[14px]" /> 4.6</span></div><div className="text-xs text-on-surface-variant">Pioneer Mall • 60 mins dispatch</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-bold text-on-surface">UGX 242,000</div><button type="button" className="mt-1 px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div></div></div><div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md border border-outline-variant/30 flex flex-col justify-between"><div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-surface-container"><img src={`${assetBase}/images/cc54f3df86a51288.webp`} alt="Samsung Galaxy A54" className="w-20 h-20 rounded-2xl object-cover bg-surface-container-low shrink-0" /><div><div className="flex items-center gap-2"><span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">5G Deal</span><span className="text-xs text-on-surface-variant font-bold">3 offers available</span></div><h3 className="font-label-lg text-label-lg font-bold text-on-surface">Samsung Galaxy A54 5G (8GB/256GB)</h3><div className="text-xs text-tertiary font-bold flex items-center gap-1 mt-0.5"><Icon name="verified" className="text-[14px]" /> URSB registered merchants</div></div></div><div className="space-y-3 py-4"><div className="flex items-center justify-between p-3 rounded-xl bg-primary-fixed/20 border border-primary/20"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">Kampala Mobile Hub</span><span className="px-1.5 py-0.2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded">Featured</span></div><div className="text-xs text-on-surface-variant">Kampala Rd • Instant Dispatch</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-black text-primary">UGX 1,120,000</div><button type="button" className="mt-1 px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-lg hover:bg-primary-container transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div><div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">Victoria Tech Supplies</span><span className="text-xs text-amber-500 font-bold flex items-center"><Icon name="star" className="text-[14px]" /> 4.8</span></div><div className="text-xs text-on-surface-variant">Nakasero • SafeBoda 45 mins</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-bold text-on-surface">UGX 1,140,000</div><button type="button" className="mt-1 px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div><div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low"><div className="space-y-0.5"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md font-bold text-on-surface">Direct Phone Plaza</span><span className="text-xs text-amber-500 font-bold flex items-center"><Icon name="star" className="text-[14px]" /> 4.5</span></div><div className="text-xs text-on-surface-variant">Luwum Street • Same-day</div></div><div className="text-right"><div className="font-headline-sm text-headline-sm font-bold text-on-surface">UGX 1,099,000</div><button type="button" className="mt-1 px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>Choose Seller</button></div></div></div></div></div></section><section className="max-w-7xl mx-auto px-margin py-8 w-full">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
<div>
<div className="inline-flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-1"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div>
<h2 className="font-headline-md text-headline-md font-extrabold text-on-surface">Top Verified Merchant Flagships</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Every seller holds a verified physical storefront or bonded warehouse in Kampala.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 rounded-2xl bg-on-surface text-surface flex items-center justify-center font-headline-sm font-black shadow">
              S
            </div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">SoundCore UG</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia Mall Annex, Floor 2</span>
</div>
</div>
<div className="flex items-center gap-3 py-2 bg-surface-container-low rounded-xl px-3 mb-4">
<div className="flex items-center gap-1 text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md font-bold">4.9</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<span className="font-body-sm text-body-sm text-on-surface-variant">1,840 verified orders</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-4">
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore Boom outdoor speaker on Kampala red dirt path with water splash effect" src={`${assetBase}/images/bf5104d3ab8bc7bb.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="SoundCore Liberty 4 NC white earbuds in open case" src={`${assetBase}/images/64f230b36eb9f97a.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Anker high power fast charging brick and braided nylon cable" src={`${assetBase}/images/e870bf1423b65938.webp`} />
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>Visit Official Store</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>

<div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center font-headline-sm font-black shadow">
              V
            </div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Victoria Tech</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nakasero Trade Tower</span>
</div>
</div>
<div className="flex items-center gap-3 py-2 bg-surface-container-low rounded-xl px-3 mb-4">
<div className="flex items-center gap-1 text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md font-bold">4.8</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<span className="font-body-sm text-body-sm text-on-surface-variant">3,120 verified orders</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-4">
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Apple iPad Air on modern clean wooden work desk" src={`${assetBase}/images/d7459aaab0117359.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Logitech wireless ergonomic mouse on dark desk pad" src={`${assetBase}/images/d8a9dda77df280f2.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="USB-C multi-port dock adapter with HDMI and ethernet" src={`${assetBase}/images/d420f9c350ecbafa.webp`} />
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>Visit Official Store</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>

<div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary flex items-center justify-center font-headline-sm font-black shadow">
              P
            </div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Pearl Naturals</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ntinda Complex Arcade</span>
</div>
</div>
<div className="flex items-center gap-3 py-2 bg-surface-container-low rounded-xl px-3 mb-4">
<div className="flex items-center gap-1 text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md font-bold">5.0</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<span className="font-body-sm text-body-sm text-on-surface-variant">980 verified orders</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-4">
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Bottles of Ugandan cold pressed moringa oil on wooden background" src={`${assetBase}/images/8666412fabf146f0.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Natural handmade black soap bars stacked neatly" src={`${assetBase}/images/e67abd4c30a68e64.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Pure West Nile honey in clear honey pot with wooden dripper" src={`${assetBase}/images/c3cf34b85dec0304.webp`} />
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>Visit Official Store</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>

<div className="bg-surface-container-lowest rounded-3xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-headline-sm font-black shadow">
              K
            </div>
<div>
<div className="flex items-center gap-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">Kikuubo Express</h3>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kikuubo Lane Wholesale 14</span>
</div>
</div>
<div className="flex items-center gap-3 py-2 bg-surface-container-low rounded-xl px-3 mb-4">
<div className="flex items-center gap-1 text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md font-bold">4.7</span>
</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<span className="font-body-sm text-body-sm text-on-surface-variant">5,410 verified orders</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-4">
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Stacked crates of cooking vegetable oil bottles in warehouse" src={`${assetBase}/images/527e86ed5c2ac25b.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Kakira sugar 50kg bag wholesale stock" src={`${assetBase}/images/2ca6fdda798b3a58.webp`} />
</div>
<div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Dry laundry detergents and household cleaning bulk supplies" src={`${assetBase}/images/4f4a007321a39860.webp`} />
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>Visit Official Store</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>
<div className="mt-8 flex justify-center w-full"><a href="#" className="px-6 py-3 rounded-2xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary border border-outline-variant/30 text-on-surface font-label-lg text-label-lg font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 group" onClick={() => alertToast('Action triggered')}><span>Explore All Verified Stores (84+)</span><Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" /></a></div></section>

<section className="max-w-7xl mx-auto px-margin py-8 w-full">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<h2 className="font-headline-md text-headline-md font-extrabold text-on-surface">Curated Marketplace Picks</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Hand-inspected products ready for same-day SafeBoda or standard dispatch</p>
</div>

<div className="flex items-center gap-1 bg-surface-container p-1 rounded-2xl overflow-x-auto">
<button className="px-4 py-2 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-sm whitespace-nowrap cursor-pointer" onClick={() => alertToast('Action triggered')}>
          Popular in Kampala
        </button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-bold whitespace-nowrap transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
          Audio &amp; Gadgets
        </button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-bold whitespace-nowrap transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
          Fresh Market
        </button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-bold whitespace-nowrap transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
          Home Essentials
        </button>
<button className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-bold whitespace-nowrap transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
          Top Rated
        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Anker PowerCore 20000mAh high capacity portable power bank in matte textured black with dual USB-C ports on clean concrete surface" src={`${assetBase}/images/0acf338d4ae0646e.webp`} />
<span className="absolute top-2 left-2 bg-surface/90 backdrop-blur text-secondary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
<Icon name="bolt" className="text-[12px]" /> SafeBoda
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Victoria Tech</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            Anker 20W Fast Power Bank 20,000mAh
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 165,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> Escrow Verified
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High quality sealed 10kg bag of premium long grain Super Basmati aromatic rice, clean commercial shot on white wooden table" src={`${assetBase}/images/91aa31705cd47fd8.webp`} />
<span className="absolute top-2 left-2 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full">
              Kikuubo Bulk
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Kikuubo Express</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            Super Basmati Pure Grain Sack 10kg
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 68,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> Weigh On Delivery
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Handcrafted tailored African Kitenge men's collared short sleeve shirt featuring rich geometric wax print patterns in burnt orange and navy blue, flat lay presentation" src={`${assetBase}/images/20961948da0fd18e.webp`} />
<span className="absolute top-2 left-2 bg-surface/90 backdrop-blur text-on-surface font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full">
              Handmade UG
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Kampala Artisan Co.</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            Authentic Tailored Kitenge Casual Shirt
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 95,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> Fit Guarantee
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Motion Boom heavy duty outdoor waterproof Bluetooth speaker floating safely on clean water pool surface with splash, vibrant natural outdoor light" src={`${assetBase}/images/c12ec5cc6de141d8.webp`} />
<span className="absolute top-2 left-2 bg-surface/90 backdrop-blur text-secondary font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
<Icon name="bolt" className="text-[12px]" /> SafeBoda
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">SoundCore UG</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            SoundCore Motion Boom Outdoor (30W)
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 395,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> 18 Mo. Warranty
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Stainless steel cordless rapid boil electric kettle 1.8L on clean kitchen marble countertop with gentle steam rising, warm inviting kitchen morning lighting" src={`${assetBase}/images/cf47e415db2ac4dd.webp`} />
<span className="absolute top-2 left-2 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full">
              Kitchen Pick
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Nakasero Appliances</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            Stainless Rapid Electric Kettle 1.8L
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 52,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> Plug &amp; Test Safe
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-low mb-2.5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Clear glass mason jar filled with thick raw golden unfiltered organic honey from West Nile Uganda, accompanied by a natural honeycomb section on rustic acacia wood" src={`${assetBase}/images/5984f5026be6c74d.webp`} />
<span className="absolute top-2 left-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold px-2 py-0.5 rounded-full">
              100% Pure
            </span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Pearl Naturals UG</div>
<h3 className="font-label-md text-label-md font-bold text-on-surface line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
            West Nile Pure Wild Honey 1,000g
          </h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">UGX 42,000</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-tertiary font-bold mt-1">
<Icon name="shield" className="text-[13px]" /> Purity Verified
          </div>
</div>
<button className="mt-3 w-full py-2 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary rounded-xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" /> Add
        </button>
</div>
</div>
<div className="mt-8 flex justify-center w-full"><a href="#" className="px-8 py-3.5 rounded-2xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group" onClick={() => alertToast('Action triggered')}><span>View More Marketplace Products</span><Icon name="expand_more" className="text-[20px] group-hover:translate-x-1 transition-transform" /></a></div></section>

<section className="max-w-7xl mx-auto px-margin py-8 w-full">
<div className="rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 sm:p-12 relative overflow-hidden shadow-2xl">

<div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-tertiary/20 blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold"><Icon name="factory" className="text-[15px]" /> SwiftCart Wholesale Hub &amp; B2B Factory Direct</div>
<h2 className="font-headline-lg text-headline-lg font-black tracking-tight text-white">
            Kampala's Only 100% Escrow-Protected Marketplace
          </h2>
<p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-xl">
            When you pay via MTN MoMo or Airtel Money, your cash is locked in an audited custodial account. The merchant is never paid until you inspect the parcel and share your 6-digit confirmation PIN.
          </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
<div className="bg-white/5 backdrop-blur rounded-2xl p-4 space-y-1.5 border border-white/10">
<div className="w-8 h-8 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold text-sm">1</div>
<div className="font-label-md text-label-md font-bold text-white">Order &amp; Lock Cash</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface/70">Deposit is safely stored in Uganda Escrow Trust.</p>
</div>
<div className="bg-white/5 backdrop-blur rounded-2xl p-4 space-y-1.5 border border-white/10">
<div className="w-8 h-8 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">2</div>
<div className="font-label-md text-label-md font-bold text-white">Inspect at Doorstep</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface/70">Unbox in front of the SafeBoda rider. Check quality.</p>
</div>
<div className="bg-white/5 backdrop-blur rounded-2xl p-4 space-y-1.5 border border-white/10">
<div className="w-8 h-8 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">3</div>
<div className="font-label-md text-label-md font-bold text-white">Share 6-Digit PIN</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface/70">Vendor gets paid only when you approve the order.</p>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-lowest text-on-surface rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="shield_with_heart" className="text-[32px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm font-bold">Swift Escrow Bond</h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">URSB &amp; URA Compliant</span>
</div>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold px-2.5 py-1 rounded-full">ACTIVE</span>
</div>

<div className="bg-surface-container-low rounded-xl p-4 text-center space-y-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Your Blind Release Code (Example)</span>
<div className="flex items-center justify-center gap-2 pt-1 font-mono font-black text-2xl tracking-widest text-primary">
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">8</span>
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">4</span>
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">1</span>
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">9</span>
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">2</span>
<span className="w-9 h-11 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-inner">0</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] pt-1">Never share this PIN over the phone before receiving physical goods.</p>
</div>
<div className="space-y-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-tertiary text-[18px]" />
<span>100% Instant Refund if item differs from catalog listing</span>
</div>
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-tertiary text-[18px]" />
<span>Direct Bank &amp; Mobile Network Escrow Integration</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-margin py-8 w-full">
<div className="text-center space-y-1.5 mb-8">
<h2 className="font-headline-md text-headline-md font-extrabold text-on-surface">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Everything you need to know about buying securely on SwiftCart Uganda</p>
</div>
<div className="space-y-3" id="faq-accordion">

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<span className="flex items-center gap-3">
<span className="w-8 h-8 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center text-sm font-black">01</span>
            How does the SwiftCart Escrow hold my money safely?
          </span>
<Icon name="expand_more" className="transition-transform duration-300" />
</button>
<div className="px-5 pb-5 pt-0 font-body-md text-body-md text-on-surface-variant border-t border-surface-container hidden" id="faq-body-1">
          When you authorize a purchase via MTN MoMo or Airtel Money, your money does not enter the seller's account. It is held in an audited ring-fenced bank custodial trust account monitored by licensed trustees in Uganda. The seller only receives payout when you confirm receipt using your 6-digit release code.
        </div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-3">
<span className="w-8 h-8 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center text-sm font-black">02</span>
            What happens if the item is counterfeit or defective?
          </span>
<Icon name="expand_more" className="transition-transform duration-300" />
</button>
<div className="px-5 pb-5 pt-0 font-body-md text-body-md text-on-surface-variant border-t border-surface-container hidden" id="faq-body-2">
          If the item delivered is counterfeit, defective, or does not match specifications, hand it back to the SafeBoda courier right away and do not supply your 6-digit code. Tap "Reject Delivery" on your SwiftCart app. The escrow contract is canceled immediately, and your funds are refunded directly back to your MTN or Airtel wallet within 15 minutes.
        </div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-3">
<span className="w-8 h-8 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center text-sm font-black">03</span>
            How fast is SafeBoda dispatch across Kampala and Entebbe?
          </span>
<Icon name="expand_more" className="transition-transform duration-300" />
</button>
<div className="px-5 pb-5 pt-0 font-body-md text-body-md text-on-surface-variant border-t border-surface-container hidden" id="faq-body-3">
          Orders tagged with "SafeBoda Express" within Kampala Central, Kololo, Nakasero, Ntinda, Bugolobi, and Muyenga are dispatched within 15 minutes and delivered at your door in under 45 minutes for a flat fee of UGX 3,500. Deliveries to Entebbe, Mukono, and Wakiso are routed through our express regional hub on the same business day.
        </div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors cursor-pointer" onClick={() => alertToast('Action triggered')}>
<span className="flex items-center gap-3">
<span className="w-8 h-8 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center text-sm font-black">04</span>
            Are there extra charges for MTN MoMo or Airtel Money payments?
          </span>
<Icon name="expand_more" className="transition-transform duration-300" />
</button>
<div className="px-5 pb-5 pt-0 font-body-md text-body-md text-on-surface-variant border-t border-surface-container hidden" id="faq-body-4">
          Zero extra charges! SwiftCart covers the mobile money merchant settlement fees. What you see displayed on the product card in UGX is the exact amount deducted from your telecom balance.
        </div>
</div>
</div>
</section>

<footer className="w-full bg-[#0a1128] text-white mt-12 pt-16 pb-12 shadow-2xl relative overflow-hidden">

<div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-margin relative z-10">

<div className="pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-tertiary-fixed">
<Icon name="verified_user" className="text-[26px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold">100% Escrow Protection</div>
<div className="font-body-sm text-body-sm text-white/60">Funds safe until you inspect</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-fixed">
<Icon name="bolt" className="text-[26px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold">45-Min SafeBoda City Hub</div>
<div className="font-body-sm text-body-sm text-white/60">Live courier GPS tracking</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-fixed">
<Icon name="contactless" className="text-[26px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold">Zero MoMo Fees</div>
<div className="font-body-sm text-body-sm text-white/60">Instant MTN &amp; Airtel checkout</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-tertiary-fixed">
<Icon name="assignment_turned_in" className="text-[26px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold">URSB Certified Stores</div>
<div className="font-body-sm text-body-sm text-white/60">Kampala verified vendors</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-white/10">

<div className="lg:col-span-4 space-y-4">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-black text-primary-container">SwiftCart</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container text-white font-label-sm text-label-sm font-bold tracking-wider uppercase">Uganda</span>
</div>
<p className="font-body-md text-body-md text-white/70 max-w-sm">
            Uganda's first verified escrow marketplace. Bridging authentic downtown merchants in Kikuubo and high-end malls in Nakasero directly to your doorstep with guaranteed peace of mind.
          </p>
<div className="space-y-2 pt-2 text-white/90">
<div className="flex items-center gap-2 font-label-md text-label-md">
<Icon name="call" className="text-primary-container text-[18px]" />
<span>+256 800 220 800 (Toll Free Hotline)</span>
</div>
<div className="flex items-center gap-2 font-label-md text-label-md">
<Icon name="chat" className="text-tertiary-fixed text-[18px]" />
<span>WhatsApp Concierge: +256 701 498 442</span>
</div>
<div className="flex items-start gap-2 font-label-md text-label-md">
<Icon name="location_on" className="text-white/60 text-[18px]" />
<span>Acacia Mall Annex Level 3 &amp; Nakasero Trade Tower, Kampala</span>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-3">
<h4 className="font-label-lg text-label-lg font-bold text-white uppercase tracking-wider">Top Categories</h4>
<ul className="space-y-2 text-white/70 font-body-sm text-body-sm">
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li>
</ul>
</div>

<div className="lg:col-span-3 space-y-3">
<h4 className="font-label-lg text-label-lg font-bold text-white uppercase tracking-wider">Buyer Protection</h4>
<ul className="space-y-2 text-white/70 font-body-sm text-body-sm">
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li>
<li><a className="hover:text-primary-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li>
</ul>
</div>

<div className="lg:col-span-3 space-y-4">
<h4 className="font-label-lg text-label-lg font-bold text-white uppercase tracking-wider">Verified Payment Rails</h4>

<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-yellow-400 text-black font-label-md text-label-md font-extrabold flex items-center gap-1 shadow-sm">
<span className="w-2 h-2 rounded-full bg-black"></span> MTN MoMo
            </span>
<span className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-label-md text-label-md font-extrabold flex items-center gap-1 shadow-sm">
<span className="w-2 h-2 rounded-full bg-white"></span> Airtel Money
            </span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-label-md text-label-md font-bold">
              Visa
            </span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-label-md text-label-md font-bold">
              Mastercard
            </span>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2">
<div className="flex items-center gap-2 text-tertiary-fixed font-label-md text-label-md font-bold">
<Icon name="security" className="text-[20px]" />
<span>Audited Trust Account</span>
</div>
<p className="font-body-sm text-body-sm text-white/60 text-[12px]">
              Customer deposits are secured in licensed Uganda Commercial Bank custodial vaults. Funds released strictly upon buyer digital authorization.
            </p>
</div>
</div>
</div>

<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-white/50">
<div>
          © 2024 SwiftCart Uganda Limited. Registered with URSB (8002000391) and Uganda Revenue Authority. All rights reserved.
        </div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a>
<a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a>
<span className="text-tertiary-fixed flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
            Kampala Cloud Online
          </span>
</div>
</div>
</div>
</footer>


</div></main>
    </div>
  );
};

export default Desktop;
