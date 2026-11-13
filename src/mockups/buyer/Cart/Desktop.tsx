// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/cart_multi_vendor_desktop/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><a className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo" className="h-7 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><div className="flex flex-col text-left leading-tight"><span className="font-headline-sm text-[20px] font-black tracking-tight text-[#da3700] leading-none">SwiftCart</span><div className="flex items-center gap-1 mt-0.5"><span className="text-[9px] font-extrabold tracking-wider uppercase text-[#161b2d]">Uganda Marketplace</span><span className="bg-[#00855b] text-white text-[8px] font-extrabold px-1 rounded">UG</span></div></div></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto px-margin py-space-lg w-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Marketplace</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface font-label-lg text-label-lg">Shopping Cart</span>
<span className="bg-surface-container-high text-on-surface-variant px-space-sm py-0.5 rounded-full text-label-sm font-label-sm ml-space-xs">3 items from 2 sellers</span>
</div>
<div className="flex items-center gap-space-sm bg-tertiary-container/10 px-space-md py-space-xs rounded-full">
<Icon name="verified_user" className="text-tertiary text-[18px]" />
<span className="text-tertiary font-label-md text-label-md font-bold">Bank of Uganda Regulated Escrow Holding</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-8 flex flex-col gap-space-xl">

<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="text-on-surface font-label-lg text-label-lg">Fast Track SafeBoda Dispatch Active</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Order in next 42 mins for delivery across Kampala &amp; Entebbe by 4:30 PM today.</span>
</div>
</div>
<span className="bg-tertiary-container text-on-tertiary-container text-label-sm font-label-sm px-space-md py-1 rounded-full shrink-0 uppercase tracking-wide">Live Couriers</span>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)] overflow-hidden flex flex-col">

<div className="bg-surface-container-low p-space-lg flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary font-bold">
<Icon name="headphones" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="store" className="text-[14px]" /> Acacia Mall Hub, Kisementi
                  </span>
<span>•</span>
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="award_star" className="text-[14px]" /> 99.4% Fulfillment Rate
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm uppercase tracking-wider px-space-sm py-1 rounded-full font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Brand Partner
              </span>
</div>
</div>

<div className="p-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One Wireless ANC Over-Ear Headphones Jet Black resting on minimal wooden desk surface with soft sunlit shadows and clean studio aesthetics matching warm cream tones" src={`${assetBase}/images/dba9e6f17e062c5a.webp`} />
<span className="absolute bottom-1 left-1 bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[9px] font-bold text-on-surface">ANC</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors line-clamp-1" href="#" onClick={() => alertToast('Action triggered')}>SoundCore Space One Wireless ANC Over-Ear Headphones</a>
<span className="text-on-surface-variant font-body-sm text-body-sm mt-0.5">Jet Black • 40h Playtime • Hi-Res LDAC Certified</span>
<div className="flex flex-wrap items-center gap-space-md mt-space-sm">
<div className="flex items-center gap-1 bg-[#FFF2E8] px-space-sm py-0.5 rounded-full text-primary font-label-sm text-label-sm">
<Icon name="bolt" className="text-[14px]" />
<span>SafeBoda Express Available (+UGX 3,500)</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="inventory_2" className="text-[14px]" /> 14 In Stock
                  </span>
</div>

<div className="flex items-center gap-space-lg mt-space-sm pt-space-xs text-on-surface-variant font-label-md text-label-md">
<button className="hover:text-error transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[16px]" />
<span>Remove</span>
</button>
<button className="hover:text-primary transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span>Save for Later</span>
</button>
</div>
</div>
</div>

<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-space-sm shrink-0">
<div className="flex flex-col text-left sm:text-right">
<span className="font-price-display text-price-display text-on-surface leading-none">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through mt-0.5">UGX 275,000</span>
</div>

<div className="flex items-center bg-surface-container rounded-lg p-0.5 shadow-inner">
<button aria-label="Decrease quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors disabled:opacity-40" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-9 text-center font-label-lg text-label-lg text-on-surface select-none">1</span>
<button aria-label="Increase quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-low/50 p-space-md px-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm w-full md:w-auto">
<Icon name="sell" className="text-primary text-[18px]" />
<input className="bg-surface-container-lowest px-space-md py-1.5 rounded-lg text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none w-48" placeholder="SoundCore Shop Voucher" type="text" />
<button className="bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md px-space-md py-1.5 rounded-lg transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Apply</button>
</div>
<div className="flex items-center gap-space-md self-end md:self-auto">
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant Subtotal:</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 248,500</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)] overflow-hidden flex flex-col">

<div className="bg-surface-container-low p-space-lg flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary font-bold">
<Icon name="power" className="text-[24px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Victoria Tech Supplies</span>
<Icon name="check_circle" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="flex items-center gap-1">
<Icon name="storefront" className="text-[14px]" /> Nakasero Trade Tower, Level 2
                  </span>
<span>•</span>
<span className="text-tertiary font-bold flex items-center gap-1">
<Icon name="star" className="text-[14px]" /> 4.8 Rating (310 orders)
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider px-space-sm py-1 rounded-full font-bold">
                Kampala CBD Hub
              </span>
</div>
</div>

<div className="p-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Anker 20W USB-C PD Fast Wall Charger UK 3-pin edition compact white block plug standing on polished surface in warm modern lighting, crisp technology photography" src={`${assetBase}/images/e015dada215fe403.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors line-clamp-1" href="#" onClick={() => alertToast('Action triggered')}>Anker 20W USB-C PD Fast Wall Charger (Uganda 3-Pin)</a>
<span className="text-on-surface-variant font-body-sm text-body-sm mt-0.5">Official UK/UG Plug • PowerIQ 3.0 • MultiProtect Safety</span>
<div className="flex flex-wrap items-center gap-space-md mt-space-sm">
<span className="bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> 100% Genuine Anker
                  </span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Color: Pure White</span>
</div>
<div className="flex items-center gap-space-lg mt-space-sm pt-space-xs text-on-surface-variant font-label-md text-label-md">
<button className="hover:text-error transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[16px]" />
<span>Remove</span>
</button>
<button className="hover:text-primary transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span>Save for Later</span>
</button>
</div>
</div>
</div>

<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-space-sm shrink-0">
<div className="flex flex-col text-left sm:text-right">
<span className="font-price-display text-price-display text-on-surface leading-none">UGX 55,000</span>
</div>
<div className="flex items-center bg-surface-container rounded-lg p-0.5 shadow-inner">
<button aria-label="Decrease quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors disabled:opacity-40" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-9 text-center font-label-lg text-label-lg text-on-surface select-none">1</span>
<button aria-label="Increase quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="p-space-lg pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md flex-1 min-w-0">
<div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Braided gold plated 3.5mm hi-fi auxiliary audio cable neatly coiled on warm cream stone surface showing precision metal casing and durable nylon sheath close up photography" src={`${assetBase}/images/94be8e4442236064.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<a className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors line-clamp-1" href="#" onClick={() => alertToast('Action triggered')}>Braided 3.5mm Gold-Plated Hi-Fi Aux Cable (1.5m)</a>
<span className="text-on-surface-variant font-body-sm text-body-sm mt-0.5">Heavy Duty Braided Cord • Anti-Tangle • Studio Quality</span>
<div className="flex flex-wrap items-center gap-space-md mt-space-sm">
<span className="text-tertiary font-label-sm text-label-sm flex items-center gap-0.5">
<Icon name="inventory_2" className="text-[14px]" /> 32 In Stock
                  </span>
</div>
<div className="flex items-center gap-space-lg mt-space-sm pt-space-xs text-on-surface-variant font-label-md text-label-md">
<button className="hover:text-error transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[16px]" />
<span>Remove</span>
</button>
<button className="hover:text-primary transition-colors flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="bookmark_border" className="text-[16px]" />
<span>Save for Later</span>
</button>
</div>
</div>
</div>

<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-space-sm shrink-0">
<div className="flex flex-col text-left sm:text-right">
<span className="font-price-display text-price-display text-on-surface leading-none">UGX 18,000</span>
</div>
<div className="flex items-center bg-surface-container rounded-lg p-0.5 shadow-inner">
<button aria-label="Decrease quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors disabled:opacity-40" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[16px]" />
</button>
<span className="w-9 text-center font-label-lg text-label-lg text-on-surface select-none">1</span>
<button aria-label="Increase quantity" className="w-8 h-8 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-low/50 p-space-md px-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md w-full md:w-auto">
<span className="font-label-md text-label-md text-on-surface">Delivery method:</span>
<div className="flex items-center gap-space-sm">
<label className="flex items-center gap-space-xs cursor-pointer bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm">
<input checked={true} className="accent-primary" name="vic-delivery" type="radio" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Standard SafeBoda Dispatch</span>
</label>
<label className="flex items-center gap-space-xs cursor-pointer bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm">
<input className="accent-primary" name="vic-delivery" type="radio" />
<span className="font-body-sm text-body-sm text-on-surface">Nakasero Pick-up (Free)</span>
</label>
</div>
</div>
<div className="flex items-center gap-space-md self-end md:self-auto">
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchant Subtotal:</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 73,000</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_12px_rgba(14,27,77,0.04)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="confirmation_number" className="text-[26px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Voucher Applied: SWIFT20K</span>
<Icon name="task_alt" className="text-tertiary text-[18px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kampala Mobile Money Promo • You saved UGX 20,000</span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<span className="bg-tertiary text-on-tertiary font-label-md text-label-md px-space-md py-1 rounded-full font-bold">-UGX 20,000</span>
<button className="text-on-surface-variant hover:text-error text-label-sm font-label-sm transition-colors" type="button" onClick={() => alertToast('Action triggered')}>Remove</button>
</div>
</div>

<div className="flex flex-col gap-space-md mt-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Frequently Added Accessories in Kampala</span>
<Icon name="local_fire_department" className="text-primary text-[20px]" />
</div>
<a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<span>View More</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:scale-[1.01] transition-transform">
<div>
<div className="w-full h-32 rounded-lg bg-surface-container overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover" data-alt="Protective hard eva travel storage case with zipper for over-ear wireless headphones isolated on clean warm background high resolution product imagery" src={`${assetBase}/images/d5ceb9b1620ad429.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">Headphone Hard Travel Case</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Shockproof EVA • Water-resistant</span>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">UGX 22,000</span>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-colors flex items-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:scale-[1.01] transition-transform">
<div>
<div className="w-full h-32 rounded-lg bg-surface-container overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover" data-alt="Nylon braided USB-C to USB-C 100W fast charging cable with reinforced alloy connectors on soft cream surface studio lighting" src={`${assetBase}/images/3bbe853fef79a467.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">100W PD Type-C to Type-C Cable</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">2-Meter Fast Sync • SafeBoda Fast</span>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">UGX 16,500</span>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-colors flex items-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between hover:scale-[1.01] transition-transform">
<div>
<div className="w-full h-32 rounded-lg bg-surface-container overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover" data-alt="Desktop acrylic universal headset stand displaying sleek headphones in bright warm modern room decor photograph" src={`${assetBase}/images/1172529e2dc71b04.webp`} />
</div>
<span className="font-label-md text-label-md text-on-surface line-clamp-1">Matte Acrylic Headset Stand</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Non-Slip Base • Kampala Stock</span>
</div>
<div className="flex items-center justify-between mt-space-md pt-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">UGX 34,000</span>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface px-space-sm py-1 rounded-lg text-label-sm font-label-sm transition-colors flex items-center gap-1" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-36">

<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(14,27,77,0.06)] p-space-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">Order Summary</span>
<span className="text-on-surface-variant font-label-md text-label-md">3 Items</span>
</div>

<div className="flex flex-col gap-space-sm text-body-md font-body-md">
<div className="flex justify-between items-center text-on-surface-variant">
<span>Items Subtotal</span>
<span className="text-on-surface font-semibold">UGX 321,500</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<div className="flex items-center gap-1">
<span>Delivery &amp; Logistics</span>
<Icon name="bolt" className="text-[16px] text-tertiary" />
</div>
<span className="text-on-surface font-semibold">UGX 3,500</span>
</div>
<div className="flex justify-between items-center text-tertiary font-bold">
<span>Voucher Savings (SWIFT20K)</span>
<span>-UGX 20,000</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="text-body-sm font-body-sm">Escrow Protection Service Fee</span>
<span className="text-tertiary font-label-sm text-label-sm uppercase font-bold">FREE</span>
</div>
</div>
<div className="w-full h-px bg-surface-container-high my-space-xs"></div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">Total Payable</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">VAT inclusive where applicable</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary font-bold">UGX</span>
<span className="font-price-display text-[28px] font-extrabold text-on-surface tracking-tight">305,000</span>
</div>
</div>
</div>

<button className="w-full h-13 py-space-md bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:from-[#e87b18] hover:to-[#c43200] text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-[0_4px_16px_rgba(218,55,0,0.35)] transition-all transform active:scale-[0.98] mt-space-sm" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>
<Icon name="lock" className="text-[20px]" />
<span>Proceed to Secure Checkout</span>
</button>

<div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm mt-space-xs">
<Icon name="verified_user" className="text-tertiary text-[22px] shrink-0 mt-0.5" />
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-on-surface font-bold">100% Swift Escrow Custody</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Your payment is held safely in escrow. Sellers are only paid after you inspect the package in person and verify delivery with your 6-digit confirmation PIN.
              </p>
</div>
</div>

<div className="flex flex-col gap-space-xs mt-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Accepted Payment Methods</span>
<div className="grid grid-cols-4 gap-space-xs items-center justify-center">

<div className="bg-surface-container flex items-center justify-center h-10 rounded-lg p-1" title="MTN Mobile Money">
<div className="flex items-center justify-center w-full h-full bg-[#FFCC00] rounded text-on-surface font-bold text-[11px] leading-tight">
<span className="tracking-tighter">MTN MoMo</span>
</div>
</div>

<div className="bg-surface-container flex items-center justify-center h-10 rounded-lg p-1" title="Airtel Money">
<div className="flex items-center justify-center w-full h-full bg-[#E51B24] rounded text-on-primary font-bold text-[11px] leading-tight">
<span className="tracking-tighter">airtel</span>
</div>
</div>

<div className="bg-surface-container flex items-center justify-center h-10 rounded-lg p-1 text-[#1A1F71] font-black text-sm">
                VISA
              </div>

<div className="bg-surface-container flex items-center justify-center h-10 rounded-lg p-1">
<div className="flex items-center -space-x-1.5">
<div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-90"></div>
<div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-space-md text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
<span className="flex items-center gap-1">
<Icon name="shield" className="text-[14px]" /> 256-bit SSL
            </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="autorenew" className="text-[14px]" /> 7-Day Returns
            </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="support_agent" className="text-[14px]" /> 24/7 UG Support
            </span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-[#FFF2E8] flex items-center justify-center text-primary shrink-0">
<Icon name="moped" className="text-[26px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">SafeBoda Official Logistics Partner</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live satellite tracking and SMS rider alert when dispatched from hubs.</span>
</div>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-[#0b0f19] text-[#94a3b8] mt-16">
  
  <div className="w-full bg-[#0f172a] border-y border-[#1e293b]">
    <div className="max-w-7xl mx-auto px-margin py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#1e293b]">
        
        <div className="flex items-start gap-3.5 pt-4 sm:pt-0 lg:pr-6">
          <div className="w-10 h-10 rounded-xl bg-tertiary-container/20 text-tertiary-fixed flex items-center justify-center shrink-0">
            <Icon name="verified_user" className="text-[24px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-label-lg">100% Escrow Protection</span>
            <span className="text-[13px] text-[#94a3b8] mt-0.5 leading-snug">Funds locked until 6-digit delivery PIN confirmed</span>
          </div>
        </div>
        
        <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:pl-4 lg:px-6">
          <div className="w-10 h-10 rounded-xl bg-[#da3700]/20 text-[#ffb5a1] flex items-center justify-center shrink-0">
            <Icon name="two_wheeler" className="text-[24px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-label-lg">45-Min SafeBoda City Hub</span>
            <span className="text-[13px] text-[#94a3b8] mt-0.5 leading-snug">Live GPS tracking across Kampala &amp; Entebbe</span>
          </div>
        </div>
        
        <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:pl-4 lg:px-6">
          <div className="w-10 h-10 rounded-xl bg-[#FFCC00]/20 text-[#FFCC00] flex items-center justify-center shrink-0">
            <Icon name="phone_android" className="text-[24px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-label-lg">Zero MoMo Fees</span>
            <span className="text-[13px] text-[#94a3b8] mt-0.5 leading-snug">Free instant deposit via MTN *165# &amp; Airtel *185#</span>
          </div>
        </div>
        
        <div className="flex items-start gap-3.5 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
          <div className="w-10 h-10 rounded-xl bg-[#6ffbbe]/20 text-tertiary-fixed flex items-center justify-center shrink-0">
            <Icon name="verified" className="text-[24px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-label-lg">URSB Certified Stores</span>
            <span className="text-[13px] text-[#94a3b8] mt-0.5 leading-snug">Vetted multi-vendor merchants only</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="max-w-7xl mx-auto px-margin py-14">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
      
      <div className="lg:col-span-4 flex flex-col items-start gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2.5">
            <img alt="SwiftCart Uganda" className="h-8 w-auto object-contain" src={`${assetBase}/images/e65f6d7fb679f160.webp`} />
            <div className="flex flex-col text-left leading-tight">
              <span className="font-headline-sm text-[18px] font-black tracking-tight text-[#da3700] leading-none">SwiftCart</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[8px] font-extrabold tracking-wider uppercase text-[#161b2d]">Uganda</span>
                <span className="bg-[#00855b] text-white text-[7px] font-extrabold px-1 rounded">UG</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-[#94a3b8] leading-relaxed pr-4">
          Uganda's premier multi-vendor commerce marketplace. Escrow protection, rapid SafeBoda dispatch, and verified merchant hubs across Kampala, Entebbe, and Jinja.
        </p>
        <div className="flex items-center gap-2 bg-[#1e293b]/70 border border-[#334155] px-3.5 py-2 rounded-xl text-xs text-white">
          <Icon name="shield" className="text-tertiary-fixed text-[18px]" />
          <span className="font-semibold">Escrow Protected • National Payment Systems (NPS)</span>
        </div>
      </div>

      
      <div className="lg:col-span-3 flex flex-col gap-3">
        <h4 className="text-white font-bold text-label-lg tracking-wide uppercase text-xs">Customer Service</h4>
        <ul className="flex flex-col gap-2.5 text-[13px]">
          <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; FAQs</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Escrow Dispute Resolution</a></li>
          <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1.5" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>SafeBoda Express Tracking <span className="bg-[#da3700]/20 text-[#ffb5a1] text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span></a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Returns &amp; Refund Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Report Unverified Vendor</a></li>
          <li className="pt-2 border-t border-[#1e293b]/80 flex flex-col gap-1">
            <span className="text-white font-semibold flex items-center gap-1.5"><Icon name="call" className="text-[16px] text-tertiary-fixed" /> 0800 220 800 (Toll-Free)</span>
            <span className="text-[#64748b] text-xs">WhatsApp: +256 700 123 456 (24/7)</span>
          </li>
        </ul>
      </div>

      
      <div className="lg:col-span-2 flex flex-col gap-3">
        <h4 className="text-white font-bold text-label-lg tracking-wide uppercase text-xs">Trade &amp; Sell</h4>
        <ul className="flex flex-col gap-2.5 text-[13px]">
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Open Merchant Storefront</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Seller Central Portal</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Logistics Partnership</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>SwiftCart Mall Brands</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Merchant Standards</a></li>
          <li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Quality &amp; Authenticity Pledge</a></li>
        </ul>
      </div>

      
      <div className="lg:col-span-3 flex flex-col gap-3">
        <h4 className="text-white font-bold text-label-lg tracking-wide uppercase text-xs">Payment Rails &amp; Trust</h4>
        <p className="text-xs text-[#94a3b8]">Encrypted transactions &amp; direct mobile money integrations:</p>
        <div className="grid grid-cols-2 gap-2 mt-1">
          
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#FFCC00] flex items-center justify-center text-[#1e1b18] font-bold text-[9px] shrink-0">M</div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xs">MTN MoMo</span>
              <span className="text-[10px] text-[#94a3b8]">*165# Instant</span>
            </div>
          </div>
          
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#E51B24] flex items-center justify-center text-white font-bold text-[9px] shrink-0">A</div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xs">Airtel Money</span>
              <span className="text-[10px] text-[#94a3b8]">*185# Zero Fee</span>
            </div>
          </div>
          
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center text-[#1A1F71] font-black text-[9px] shrink-0">V</div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xs">Visa / MC</span>
              <span className="text-[10px] text-[#94a3b8]">3D Secure SSL</span>
            </div>
          </div>
          
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-tertiary-container text-white flex items-center justify-center shrink-0"><Icon name="local_atm" className="text-[13px]" /></div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xs">Swift Hub</span>
              <span className="text-[10px] text-[#94a3b8]">Inspect &amp; Pay</span>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-[#1e293b] flex items-center gap-2 text-[11px] text-[#64748b]">
          <Icon name="account_balance" className="text-[15px] text-tertiary-fixed" />
          <span>Regulated under Bank of Uganda National Payment Systems (NPS)</span>
        </div>
      </div>
    </div>
  </div>

  
  <div className="w-full bg-[#080c14] border-t border-[#1e293b]">
    <div className="max-w-7xl mx-auto px-margin py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#64748b]">
      <div className="flex items-center gap-2 text-center md:text-left">
        <span>© 2025 SwiftCart Uganda Ltd. Registered under Uganda Registration Services Bureau (URSB).</span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Privacy Policy</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Terms of Service</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Escrow Protocol</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Data Protection Compliance</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Desktop;
