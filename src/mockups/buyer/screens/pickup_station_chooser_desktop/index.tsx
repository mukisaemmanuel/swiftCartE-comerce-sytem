// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/pickup_station_chooser_desktop/code.html
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
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(218,55,0,0.08)]"><div className="bg-primary-container text-on-primary px-margin"><div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md shrink-0"><a className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-orange-100 transition-transform hover:scale-[1.02]" data-path="marketplace" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img src={`${assetBase}/images/ad6f7f7fb7a5ee6f.webp`} alt="SwiftCart Uganda" className="h-8 w-auto object-contain" /><div className="flex flex-col"><span className="font-extrabold text-base tracking-tight text-gray-900 leading-none">Swift<span className="text-[#da3700]">Cart</span></span><span className="text-[9px] font-bold text-[#da3700] uppercase tracking-wider">UGANDA MARKETPLACE</span></div></a></div><div className="flex-1 max-w-2xl px-space-md hidden md:block"><div className="flex items-center bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_2px_8px_rgba(14,27,77,0.08)]"><div className="relative flex items-center pl-space-sm pr-space-xs text-on-surface-variant"><span className="font-label-md text-label-md select-none text-on-surface whitespace-nowrap">All Categories</span><Icon name="expand_more" className="text-[18px] ml-space-xs text-on-surface-variant" /><div className="w-px h-5 bg-surface-container-highest ml-space-sm"></div></div><input className="w-full px-space-md py-space-xs text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md bg-transparent focus:outline-none" placeholder="Search 50,000+ genuine products in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg flex items-center justify-center transition-colors shrink-0" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[20px]" /><span className="hidden xl:inline font-label-md text-label-md">Help &amp; FAQ</span></a><a className="flex items-center gap-space-xs text-on-primary/90 hover:text-on-primary transition-colors text-left" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}><Icon name="person" className="text-[22px]" /><div className="hidden lg:flex flex-col leading-tight"><span className="font-label-sm text-label-sm text-primary-fixed-dim">Hello, Sign In</span><span className="font-label-md text-label-md font-bold">Account</span></div></a><a className="relative flex items-center text-on-primary/90 hover:text-on-primary transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite_border" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span></a><a className="flex items-center gap-space-sm bg-primary/40 hover:bg-primary/60 px-space-md py-space-xs rounded-xl text-on-primary transition-colors" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><div className="relative flex items-center"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute -top-1.5 -right-2 bg-surface text-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span></div><div className="hidden sm:flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-primary-fixed-dim">UGX</span><span className="font-label-md text-label-md font-bold">245,000</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="bg-surface-container-lowest text-on-surface shadow-[0_2px_6px_rgba(14,27,77,0.04)] px-margin"><div className="max-w-7xl mx-auto h-12 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md overflow-x-auto py-space-xs"><button className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface shrink-0 transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[18px]" /><span>All Categories</span><Icon name="expand_more" className="text-[16px]" /></button><nav className="flex items-center gap-space-xs shrink-0" data-active-classes="bg-surface-container-high text-primary font-bold rounded-lg"><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="super-tech-week" href="#" onClick={() => alertToast('Action triggered')}>Super Tech Week</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="fresh-groceries" href="#" onClick={() => alertToast('Action triggered')}>Fresh Groceries</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}><Icon name="local_fire_department" className="text-primary text-[16px]" />Flash Deals</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap" data-path="wholesale-kikuubo" href="#" onClick={() => alertToast('Action triggered')}>Wholesale Kikuubo</a><a className="px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors font-label-md text-label-md whitespace-nowrap flex items-center gap-1" data-path="safeboda-dispatch" href="#" onClick={() => alertToast('Action triggered')}><Icon name="bolt" className="text-tertiary text-[16px]" />Same-Day SafeBoda Dispatch</a></nav></div><div className="flex items-center gap-space-md shrink-0 hidden lg:flex"><a className="flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md transition-colors" data-path="vendor-onboarding" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="storefront" className="text-[18px]" /><span>Sell on SwiftCart</span></a><div className="w-px h-4 bg-surface-container-highest"></div><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><Icon name="location_on" className="text-primary text-[18px]" /><span>Kampala (Central)</span></div></div></div></div></header><main className="w-full pt-32 bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">

<div className="max-w-7xl mx-auto w-full px-margin py-space-lg flex flex-col gap-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-md">
<nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Marketplace</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>Checkout</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Select Pickup Station</span>
</nav>
<div className="flex items-center gap-space-sm bg-tertiary/10 text-tertiary px-space-md py-space-xs rounded-full">
<Icon name="verified_user" className="text-[16px]" />
<span className="font-label-sm text-label-sm tracking-wide uppercase">Official Escrow-Safe Collection Points</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-extrabold">
<span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Zero Delivery Fee Option
      </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Select a Verified SwiftCart Pickup Station in Greater Kampala
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        Collect your order at your convenience with <span className="font-bold text-on-surface">UGX 0 delivery fees</span> and 7-day secure smart locker storage. Inspect and test devices on-site before releasing escrow funds.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start pb-space-xl">

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-sm flex items-center gap-space-sm">
<Icon name="search" className="text-primary text-[22px] ml-space-xs" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none" placeholder="Search by neighborhood, street or landmark (e.g. Acacia, Nakasero, Ntinda)..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant p-space-xs rounded-lg transition-colors flex items-center justify-center shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="my_location" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs scrollbar-none">
<button className="bg-primary text-on-primary font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-transform active:scale-95" onClick={() => alertToast('Action triggered')}>
            All Kampala
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Central (CBD)
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Nakawa
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Kawempe
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Makindye
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Rubaga
          </button>
<button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md px-space-md py-space-xs rounded-full shrink-0 shadow-sm transition-colors" onClick={() => alertToast('Action triggered')}>
            Entebbe Road
          </button>
</div>

<div className="flex flex-col gap-space-md max-h-[700px] overflow-y-auto pr-space-xs">

<article className="bg-surface-container-lowest rounded-xl shadow-md p-space-md relative overflow-hidden transition-all duration-200" style={{"boxShadow":"0 0 0 2px #ae2a00, 0 8px 24px rgba(174, 42, 0, 0.12)"}}>
<div className="absolute top-0 right-0 bg-primary text-on-primary font-label-sm text-label-sm px-space-md py-0.5 rounded-bl-xl font-bold uppercase tracking-wider flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" /> Selected Hub
            </div>
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0 pr-space-xl">
<div className="flex items-baseline gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate">Nakasero Trade Tower Hub #2</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
<Icon name="location_on" className="text-[15px] text-primary shrink-0" />
<span className="truncate">Level 1, Nakasero Road near URA Tower, Kampala Central</span>
</p>
<div className="flex items-center gap-space-md mt-space-xs font-label-md text-label-md text-secondary">
<span className="flex items-center gap-1">
<Icon name="near_me" className="text-[15px]" />
                    1.2 km away
                  </span>
<span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
<span className="flex items-center gap-1 text-tertiary font-bold">
<Icon name="schedule" className="text-[15px]" />
                    Open today till 20:00
                  </span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs mt-space-md">
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="payments" className="text-[13px]" /> Free Pickup
              </span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[13px]" /> Instant Handover
              </span>
<span className="bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="lock" className="text-[13px]" /> High-Security Locker
              </span>
</div>

<div className="mt-space-md pt-space-xs flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
<div className="flex flex-col text-on-surface-variant font-body-sm text-body-sm leading-tight">
<span className="font-bold text-on-surface">Mon - Sat: 08:00 - 20:00</span>
<span className="text-on-surface-variant/80">Sun: 10:00 - 17:00</span>
</div>
<button className="bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-xs rounded-xl flex items-center gap-1 shadow-sm font-bold" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[16px]" /> Selected
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md p-space-md transition-all duration-150 cursor-pointer group">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary font-extrabold truncate transition-colors">
                    Acacia Mall Annex Hub Station
                  </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
<Icon name="location_on" className="text-[15px] shrink-0" />
<span className="truncate">Ground Floor G-14, Kisementi, Kololo, Kampala</span>
</p>
<div className="flex items-center gap-space-md mt-space-xs font-label-md text-label-md text-secondary">
<span>2.8 km away</span>
<span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
<span className="text-tertiary">Mon - Sun: 08:30 - 21:00</span>
</div>
</div>
</div>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md px-space-md py-space-xs rounded-xl transition-all shrink-0" onClick={() => alertToast('Action triggered')}>
                Select
              </button>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-space-sm pl-12">
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Free Pickup</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Parking Available</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">SafeBoda Anchor Point</span>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md p-space-md transition-all duration-150 cursor-pointer group">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary font-extrabold truncate transition-colors">
                    Ntinda Complex Arcade Station
                  </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
<Icon name="location_on" className="text-[15px] shrink-0" />
<span className="truncate">Ntinda-Nakawa Road, Opposite Shell Ntinda</span>
</p>
<div className="flex items-center gap-space-md mt-space-xs font-label-md text-label-md text-secondary">
<span>4.1 km away</span>
<span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
<span className="text-tertiary">Mon - Sat: 08:00 - 19:30</span>
</div>
</div>
</div>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md px-space-md py-space-xs rounded-xl transition-all shrink-0" onClick={() => alertToast('Action triggered')}>
                Select
              </button>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-space-sm pl-12">
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Free Pickup</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Test Desk</span>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md p-space-md transition-all duration-150 cursor-pointer group">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md min-w-0">
<div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
<Icon name="storefront" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary font-extrabold truncate transition-colors">
                    Kikuubo Downtown Express Station
                  </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
<Icon name="location_on" className="text-[15px] shrink-0" />
<span className="truncate">Wholesale Lane 14, Downtown Commercial Center</span>
</p>
<div className="flex items-center gap-space-md mt-space-xs font-label-md text-label-md text-secondary">
<span>1.9 km away</span>
<span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
<span className="text-on-surface-variant">Mon - Sat: 07:30 - 18:00</span>
</div>
</div>
</div>
<button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md px-space-md py-space-xs rounded-xl transition-all shrink-0" onClick={() => alertToast('Action triggered')}>
                Select
              </button>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-space-sm pl-12">
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Free Bulk Pickup</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">Fast-Lane Pass</span>
</div>
</article>
</div>
</section>

<section className="lg:col-span-7 flex flex-col gap-space-md lg:sticky lg:top-36">

<div className="relative w-full h-[410px] rounded-2xl overflow-hidden shadow-lg bg-surface-container-high">

<svg className="absolute inset-0 w-full h-full object-cover" fill="none" viewBox="0 0 760 410" xmlns="http://www.w3.org/2000/svg">
<rect fill="#F4ECE5" height="410" width="760"></rect>

<path d="M420,40 C460,70 510,50 560,90 C600,120 580,180 520,190 C460,200 410,140 420,40 Z" fill="#E2EFE7" opacity="0.9"></path>
<path d="M120,60 C170,40 220,80 210,140 C200,200 130,220 90,170 C60,130 80,80 120,60 Z" fill="#E2EFE7" opacity="0.8"></path>
<path d="M480,240 C540,220 620,260 630,330 C640,390 560,400 500,380 C450,360 440,280 480,240 Z" fill="#E2EFE7" opacity="0.6"></path>

<path d="M680,310 C720,330 760,320 760,410 L640,410 C620,360 650,330 680,310 Z" fill="#DDEAF8" opacity="0.7"></path>


<path d="M280,210 L760,190" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="12"></path>
<path d="M280,210 L760,190" stroke="#DEC5BD" strokeLinecap="round" strokeWidth="8"></path>

<path d="M280,210 L160,410" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="10"></path>
<path d="M280,210 L160,410" stroke="#DEC5BD" strokeLinecap="round" strokeWidth="6"></path>

<path d="M280,210 L210,0" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="10"></path>
<path d="M280,210 L210,0" stroke="#DEC5BD" strokeLinecap="round" strokeWidth="6"></path>

<path d="M350,150 L640,90" stroke="#FFFFFF" strokeWidth="8"></path>
<path d="M350,150 L640,90" stroke="#DEC5BD" strokeWidth="4"></path>

<path d="M280,210 C320,170 340,150 350,100" stroke="#FFFFFF" strokeWidth="8"></path>
<path d="M280,210 C320,170 340,150 350,100" stroke="#DEC5BD" strokeWidth="4"></path>

<path d="M120,40 C280,-10 490,20 680,70" stroke="#FFFFFF" strokeDasharray="8 4" strokeWidth="7"></path>
<path d="M120,40 C280,-10 490,20 680,70" stroke="#C5B0A8" strokeWidth="3"></path>

<circle cx="280" cy="205" fill="none" r="55" stroke="#FFFFFF" strokeWidth="6"></circle>
<circle cx="280" cy="205" fill="none" r="55" stroke="#DEC5BD" strokeWidth="3"></circle>
</svg>

<div className="absolute top-10 left-36 font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant/40 pointer-events-none select-none">
            Wandegeya / Makerere
          </div>
<div className="absolute top-14 right-48 font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant/40 pointer-events-none select-none">
            Kololo Hill
          </div>
<div className="absolute top-36 right-16 font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant/40 pointer-events-none select-none">
            Ntinda / Nakawa
          </div>
<div className="absolute bottom-28 left-16 font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant/40 pointer-events-none select-none">
            Kisenyi / Mengo
          </div>
<div className="absolute bottom-12 right-28 font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant/40 pointer-events-none select-none">
            Bugolobi Hub
          </div>

<div className="absolute top-[260px] left-[230px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20">
<div className="relative flex items-center justify-center">
<span className="absolute w-8 h-8 rounded-full bg-secondary/25 animate-ping"></span>
<span className="w-4 h-4 rounded-full bg-secondary shadow-md flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
</span>
</div>
<div className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-space-xs py-0.5 rounded shadow-md mt-1 font-bold whitespace-nowrap">
              You are here
            </div>
</div>

<div className="absolute top-[180px] left-[300px] -translate-x-1/2 -translate-y-full flex flex-col items-center z-30 cursor-pointer">
<div className="bg-primary text-on-primary px-space-sm py-1 rounded-full shadow-lg font-label-md text-label-md font-bold flex items-center gap-1.5 scale-105 transition-transform">
<Icon name="storefront" className="text-[16px]" />
<span>Nakasero Hub #2</span>
</div>

<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary -mt-0.5"></div>

<div className="w-3 h-1.5 bg-on-surface/30 rounded-full blur-[1px] mt-0.5"></div>
</div>

<div className="absolute top-[110px] left-[450px] -translate-x-1/2 -translate-y-full flex flex-col items-center z-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer">
<div className="bg-surface-container-lowest text-on-surface px-space-sm py-1 rounded-full shadow-md font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Acacia Mall</span>
</div>
<div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-surface-container-lowest -mt-0.5"></div>
</div>

<div className="absolute top-[90px] left-[610px] -translate-x-1/2 -translate-y-full flex flex-col items-center z-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer">
<div className="bg-surface-container-lowest text-on-surface px-space-sm py-1 rounded-full shadow-md font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Ntinda Complex</span>
</div>
<div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-surface-container-lowest -mt-0.5"></div>
</div>

<div className="absolute top-[230px] left-[350px] -translate-x-1/2 -translate-y-full flex flex-col items-center z-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer">
<div className="bg-surface-container-lowest text-on-surface px-space-sm py-1 rounded-full shadow-md font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>Kikuubo Lane</span>
</div>
<div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-surface-container-lowest -mt-0.5"></div>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-1 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-1 shadow-md z-20">
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[18px]" />
</button>
<div className="w-full h-px bg-surface-container-highest"></div>
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[18px]" />
</button>
<div className="w-full h-px bg-surface-container-highest"></div>
<button className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="Recenter on Kampala CBD" onClick={() => alertToast('Action triggered')}>
<Icon name="explore" className="text-[18px]" />
</button>
</div>

<div className="absolute bottom-3 left-4 bg-surface-container-lowest/95 backdrop-blur-sm px-space-md py-space-xs rounded-xl shadow-md flex items-center gap-space-sm z-20">
<Icon name="electric_moped" className="text-tertiary text-[18px]" />
<span className="font-body-sm text-body-sm text-on-surface">Average SafeBoda Rider drop: <strong>24 mins</strong></span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-md pb-space-xs">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Nakasero Trade Tower Hub Station #2</span>
<span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm font-extrabold flex items-center gap-1">
<Icon name="verified" className="text-[12px]" /> VERIFIED
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Plot 12 Nakasero Road, Ground Concourse adjacent to URA HQ Tower entrance
              </p>
</div>
<div className="shrink-0 text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Station Status</span>
<span className="font-label-md text-label-md text-tertiary font-bold flex items-center justify-end gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Active Now
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl">

<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Professional African customer care woman wearing branded swiftcart safety lanyard and warm smile inside a modern Kampala storefront pickup center" src={`${assetBase}/images/57d75f2f64c5f0c2.webp`} />
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tertiary rounded-full border-2 border-white"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Station Officer On Duty</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Officer Patricia N.</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SwiftCart Escrow Officer #UG-441</span>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="shield" className="text-[20px]" />
</div>
<div className="flex flex-col leading-tight">
<span className="font-label-md text-label-md font-bold text-on-surface">Escrow Hold Active</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Funds release only after your OTP check</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-extrabold text-on-surface-variant">Hub Amenities &amp; Testing Station</span>
<div className="grid grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-xs">
<Icon name="videocam" className="text-primary text-[20px]" />
<div className="flex flex-col leading-none">
<span className="font-label-md text-label-md font-bold text-on-surface">24/7 CCTV</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Strict recording</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-xs">
<Icon name="ac_unit" className="text-primary text-[20px]" />
<div className="flex flex-col leading-none">
<span className="font-label-md text-label-md font-bold text-on-surface">Air Conditioned</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Comfort lounge</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-xs">
<Icon name="electrical_services" className="text-primary text-[20px]" />
<div className="flex flex-col leading-none">
<span className="font-label-md text-label-md font-bold text-on-surface">Test-Before-PIN</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Power sockets ready</span>
</div>
</div>
</div>
</div>

<div className="bg-primary/5 rounded-xl p-space-sm flex items-start gap-space-sm">
<Icon name="info" className="text-primary text-[20px] shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
              When your order arrives, you'll receive a 6-digit collection OTP via SMS/WhatsApp. You have <strong>7 calendar days</strong> to pick up with free unlimited parcel insurance.
            </p>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<button className="w-full h-12 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-space-sm transition-all transform active:scale-[0.99] font-bold" onClick={() => alertToast('Action triggered')}>
<span>Confirm This Pickup Station</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
<a className="w-full text-center py-1 text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[16px]" />
<span>Back to Doorstep SafeBoda Delivery</span>
</a>
</div>
</div>
</section>
</div>
</div>
</div></main><footer className="bg-[#0c1322] text-white pt-12 pb-8 border-t border-slate-800"><div className="max-w-7xl mx-auto px-margin"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-slate-800/80"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-tertiary-container/20 text-tertiary-fixed flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="text-sm font-bold text-white">100% Escrow Protection</h4><p className="text-xs text-slate-400">Funds held safe until inspect</p></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-fixed-dim flex items-center justify-center shrink-0"><Icon name="electric_moped" className="text-[24px]" /></div><div><h4 className="text-sm font-bold text-white">45-Min SafeBoda City Hub</h4><p className="text-xs text-slate-400">Instant dispatch across Kampala</p></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0"><Icon name="payments" className="text-[24px]" /></div><div><h4 className="text-sm font-bold text-white">Zero MoMo Fees</h4><p className="text-xs text-slate-400">MTN &amp; Airtel checkout 0%</p></div></div><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0"><Icon name="workspace_premium" className="text-[24px]" /></div><div><h4 className="text-sm font-bold text-white">URSB Certified Stores</h4><p className="text-xs text-slate-400">100% verified Ugandan merchants</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-b border-slate-800/80"><div className="flex flex-col gap-4"><div className="flex items-center gap-2"><img src={`${assetBase}/images/ad6f7f7fb7a5ee6f.webp`} alt="SwiftCart" className="h-8 w-auto object-contain" /><span className="font-extrabold text-lg text-white">Swift<span className="text-primary-container">Cart</span></span></div><p className="text-xs text-slate-400 leading-relaxed">Uganda's premier escrow-backed online marketplace. Connecting authentic Ugandan traders, wholesale hubs, and verified stores with guaranteed fast delivery.</p><div className="flex flex-col gap-2 pt-2 text-xs text-slate-300"><div><span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Toll-Free Hotline</span><span className="font-semibold text-white">+256 800 220 800</span></div><div><span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">WhatsApp Concierge</span><span className="font-semibold text-white">+256 701 498 442</span></div><div><span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Physical Hub Locations</span><span className="text-slate-300">Acacia Mall Annex Level 3 &amp; Nakasero Trade Tower, Kampala</span></div></div></div><div className="flex flex-col gap-3"><h4 className="text-sm font-bold text-white uppercase tracking-wider">Top Categories</h4><ul className="flex flex-col gap-2 text-xs text-slate-400"><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li></ul></div><div className="flex flex-col gap-3"><h4 className="text-sm font-bold text-white uppercase tracking-wider">Buyer Protection</h4><ul className="flex flex-col gap-2 text-xs text-slate-400"><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li><li><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li></ul></div><div className="flex flex-col gap-4"><h4 className="text-sm font-bold text-white uppercase tracking-wider">Verified Payment Rails</h4><p className="text-xs text-slate-400">Seamless escrow payments via Uganda's trusted networks:</p><div className="flex flex-wrap gap-2"><span className="bg-slate-800/90 text-amber-400 border border-slate-700 font-bold text-[11px] px-2.5 py-1 rounded-lg">MTN MoMo *165#</span><span className="bg-slate-800/90 text-red-400 border border-slate-700 font-bold text-[11px] px-2.5 py-1 rounded-lg">Airtel Money *185#</span><span className="bg-slate-800/90 text-blue-400 border border-slate-700 font-bold text-[11px] px-2.5 py-1 rounded-lg">Visa</span><span className="bg-slate-800/90 text-orange-400 border border-slate-700 font-bold text-[11px] px-2.5 py-1 rounded-lg">Mastercard</span></div><div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-[11px] text-slate-400 leading-relaxed"><Icon name="lock" className="text-tertiary-fixed text-[14px] align-middle mr-1" />All buyer funds held in a regulated Audited Trust Account until buyer inspects and provides collection OTP.</div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500"><div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span>© 2025 SwiftCart Uganda Limited. Registered with URSB &amp; URA. Kampala Cloud Online.</span></div><div className="flex flex-wrap gap-4 text-slate-400"><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a><a href="#" className="hover:text-white transition-colors" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
