// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/followed_stores_swiftcart_buyer_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 w-full px-margin-desktop max-w-[1440px] mx-auto flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-sm" data-path="marketplace-home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold">SwiftCart</span><span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded">UG</span></a><button className="hidden xl:flex items-center gap-space-xs text-left px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[20px]" /><div><p className="font-label-sm text-label-sm text-secondary">Deliver to</p><p className="font-label-md text-label-md text-on-surface truncate max-w-[130px]">Kampala Central</p></div></button></div><div className="flex-1 max-w-2xl mx-space-sm hidden md:flex items-center"><div className="w-full flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><select className="bg-transparent text-secondary font-label-md text-label-md px-space-sm py-2 rounded focus:outline-none cursor-pointer border-r border-outline-variant/30"><option value="all">All Categories</option><option value="electronics">Electronics &amp; Phones</option><option value="supermarket">Groceries &amp; Pantry</option><option value="fashion">Kampala Fashion</option><option value="appliances">Home Appliances</option><option value="hardware">Hardware &amp; Tools</option></select><div className="flex-1 flex items-center px-space-sm gap-space-xs"><Icon name="search" className="text-secondary text-[20px]" /><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search products, brands, local suppliers..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" title="Search by image" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button><button className="bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-2 rounded-lg hover:bg-primary transition-colors flex items-center justify-center shrink-0" onClick={() => alertToast('Action triggered')}>Search</button></div></div><nav className="flex items-center gap-space-sm shrink-0" data-active-classes="bg-surface-container text-primary font-bold rounded-lg"><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>Wishlist</a><a aria-current="page" className="hidden lg:inline-flex items-center px-space-sm py-2 transition-colors bg-surface-container text-primary font-bold rounded-lg" data-path="verified-stores" href="#" onClick={() => alertToast('Action triggered')}>Stores</a><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="buyer-orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="notifications" href="#" title="Notifications" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full"></span></a><a className="relative flex items-center gap-space-xs px-space-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="shopping-cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.2 rounded-full min-w-[18px] text-center">3</span></div><span className="hidden xl:inline font-label-lg text-label-lg text-on-surface font-bold">Cart</span></a><div className="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/30"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold tracking-tight">SN</div></div></nav></div></header><main className="w-full pt-20 bg-surface min-h-[calc(100vh-320px)]"><div className="flex flex-col w-full">
<div className="w-full max-w-[834px] mx-auto px-margin py-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
<Icon name="storefront" className="text-[18px]" />
</span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-extrabold">Verified Kampala Sellers</span>
</div>
<span className="font-label-sm text-label-sm text-secondary px-space-sm py-0.5 rounded-full bg-surface-container">
          8 Active Subscriptions
        </span>
</div>
<div className="flex flex-col gap-1">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
          Followed Stores (8 Verified Merchants)
        </h1>
<p className="font-body-sm text-body-sm text-secondary leading-snug">
          Stay updated on flash discounts, new inventory arrivals, and direct escrow sales from top Kampala vendors.
        </p>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="relative w-full flex items-center bg-surface-container-lowest rounded-xl shadow-sm px-space-md py-2.5">
<Icon name="search" className="text-secondary text-[22px] shrink-0" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none pl-space-xs" id="storeSearchInput" placeholder="Search followed stores, brands, or Nakasero shops..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="shrink-0 text-secondary hover:text-on-surface p-1 rounded-lg transition-colors" title="Filter by District" onClick={() => setDrawerOpen((prev) => !prev)}>
<Icon name="tune" className="text-[20px]" />
</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none" id="categoryFilterContainer">
<button className="filter-tab active-tab shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md bg-on-surface text-surface transition-all shadow-sm" data-category="all" onClick={() => alertToast('Action triggered')}>
          All Stores
        </button>
<button className="filter-tab shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all" data-category="official" onClick={() => alertToast('Action triggered')}>
          Official Brands
        </button>
<button className="filter-tab shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all" data-category="electronics" onClick={() => alertToast('Action triggered')}>
          Electronics
        </button>
<button className="filter-tab shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all" data-category="supermarkets" onClick={() => alertToast('Action triggered')}>
          Supermarkets
        </button>
<button className="filter-tab shrink-0 px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all" data-category="fashion" onClick={() => alertToast('Action triggered')}>
          Fashion
        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-space-md" id="followedGrid">

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow relative overflow-hidden" data-category="official electronics">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-container/10 via-transparent to-transparent pointer-events-none rounded-bl-full"></div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="SoundCore audio logo icon with polished metallic acoustics headphone monogram against vibrant modern studio lighting" src={`${assetBase}/images/3ace41c336286fcf.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore UG</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px]" />
                    Official Gold
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Nakasero Hub</span>
</div>
</div>
</div>

<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>

<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.9 <span className="text-secondary font-normal">(1.4k)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Fulfill Rate</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">99.4%</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Avg Transit</p>
<p className="font-label-md text-label-md text-on-surface font-bold">2-hr KLA</p>
</div>
</div>

<div className="flex items-center gap-1 px-space-xs py-1 rounded bg-primary-container/10 text-on-primary-container">
<Icon name="local_activity" className="text-[15px] text-primary shrink-0" />
<span className="font-label-sm text-label-sm truncate font-semibold">UGX 15,000 OFF over UGX 150,000</span>
</div>

<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Featured Catalog</span>
<div className="grid grid-cols-3 gap-1.5">
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Soundcore Space One ANC over-ear headphones matte black studio commercial product photography clean surface" src={`${assetBase}/images/8a951bcb44f6dd71.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">Space One ANC</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 248,500</p>
</div>
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Soundcore Liberty 4 NC wireless earbuds in charging case navy blue studio commercial backdrop" src={`${assetBase}/images/c899c17e393f7d24.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">Liberty 4 NC</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 280,000</p>
</div>
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Soundcore Motion Plus rugged outdoor waterproof bluetooth speaker studio angle shot" src={`${assetBase}/images/d096fadc8a7e02bc.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">Motion+</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 315,000</p>
</div>
</div>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between border-t-0">
<span className="font-label-sm text-label-sm text-secondary">48 Active Products</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow relative overflow-hidden" data-category="official electronics">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Anker official blue electronic lightning bolt emblem on premium hardware packaging background" src={`${assetBase}/images/62047441565c2865.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Anker Flagship</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px]" />
                    Official Gold
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Nakawa Ind.</span>
</div>
</div>
</div>

<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>

<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.8 <span className="text-secondary font-normal">(920)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Stock Status</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">Kampala Hub</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Warranty</p>
<p className="font-label-md text-label-md text-on-surface font-bold">18-Month</p>
</div>
</div>

<div className="flex items-center gap-1 px-space-xs py-1 rounded bg-tertiary-container/15 text-tertiary">
<Icon name="two_wheeler" className="text-[15px] shrink-0" />
<span className="font-label-sm text-label-sm truncate font-semibold">FREE Boda Delivery across Central Kampala</span>
</div>

<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Featured Catalog</span>
<div className="grid grid-cols-3 gap-1.5">
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Anker Nano II 65W GaN wall fast charger sleek compact black cube plug on clean wooden desk surface" src={`${assetBase}/images/c3dc385e85a8c7bd.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">65W GaN Plug</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 115,000</p>
</div>
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Anker PowerCore 20000mAh external battery power bank textured dark matte casing with LED indicators" src={`${assetBase}/images/80d032e4f2dafc37.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">PowerCore 20k</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 180,000</p>
</div>
<div className="flex flex-col bg-surface-container-low rounded-lg p-1 group">
<div className="aspect-square w-full rounded overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Anker PowerLine III braided USB-C fast charging cable coiled neatly on neutral minimalist background" src={`${assetBase}/images/527fd6852c3acc76.webp`} />
</div>
<p className="font-label-sm text-label-sm text-on-surface truncate mt-1">Braided C-to-C</p>
<p className="font-label-md text-label-md text-primary font-bold">UGX 45,000</p>
</div>
</div>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">64 Products Live</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow" data-category="electronics">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Kampala Phone Hub storefront logo featuring phone outline with neon amber highlights on charcoal background" src={`${assetBase}/images/3be1ccbb2e5208b3.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Phone Hub</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px] text-secondary" />
                    Silver Verified
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Kikuubo / Downtown</span>
</div>
</div>
</div>
<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>
<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.7 <span className="text-secondary font-normal">(810)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Authenticity</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">100% Tested</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Inventory</p>
<p className="font-label-md text-label-md text-on-surface font-bold">112 Items</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Specializes in genuine phone cases, tempered sapphire screens, MagSafe accessories, and certified replacement displays.
          </p>
<div className="flex flex-wrap gap-1">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface">Spigen Cases</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface">Baseus Cables</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface">OLED Panels</span>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Same-day Downtown Pickup</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow" data-category="official electronics">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Victoria Tech Supplies Kampala modern geometric laptop chip emblem on royal deep slate graphic" src={`${assetBase}/images/3857bfd5642de92f.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Victoria Tech</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px]" />
                    Official Gold
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Jinja Road</span>
</div>
</div>
</div>
<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>
<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.8 <span className="text-secondary font-normal">(430)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Escrow Direct</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">Active</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">IT Tier</p>
<p className="font-label-md text-label-md text-on-surface font-bold">Commercial</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Top authorized enterprise hardware supplier. Business laptops, NVMe SSDs, Sony studio acoustics, and Dell monitors.
          </p>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">Flash: UGX 40,000 off Dell XPS</span>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">92 IT Units in Stock</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow" data-category="supermarkets">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="EcoMart Supermarket organic green leaf leaf grocery basket illustration crisp branding" src={`${assetBase}/images/c54315a3911dfb28.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">EcoMart Kololo</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] font-label-sm text-label-sm font-bold">
<Icon name="check_circle" className="text-[13px] text-tertiary" />
                    Verified Merchant
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Kololo</span>
</div>
</div>
</div>
<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>
<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.9 <span className="text-secondary font-normal">(3.1k)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Fresh Delivery</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">Instant Van</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Catalog</p>
<p className="font-label-md text-label-md text-on-surface font-bold">1.8k Lines</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Fresh organic produce, dairy, bakery delicacies, and premium imported home pantry items delivered chilled.
          </p>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-bold">Express: Under 45 Mins in Kololo</span>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Cold-chain insulated pack</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>

<div className="store-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow relative overflow-hidden" data-category="official electronics">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Apple Authorized Reseller official silver chrome badge on premium minimalist white background" src={`${assetBase}/images/4670d61e7452cc12.webp`} />
</div>
<div className="min-w-0">
<div className="flex items-center gap-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Apple Reseller UG</h2>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px]" />
                    Official Gold
                  </span>
<span className="font-label-sm text-label-sm text-secondary truncate">Acacia Mall</span>
</div>
</div>
</div>
<button className="follow-toggle-btn shrink-0 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-surface-container-high transition-colors" data-following="true" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[14px] text-tertiary" />
              Following
            </button>
</div>
<div className="grid grid-cols-3 gap-1 py-1.5 px-space-xs bg-surface-container-low rounded-lg text-center">
<div>
<p className="font-label-sm text-label-sm text-secondary">Rating</p>
<p className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-center gap-0.5">
<Icon name="star" className="text-[13px] text-[#F59E0B]" />
                4.9 <span className="text-secondary font-normal">(1.9k)</span>
</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Coverage</p>
<p className="font-label-md text-label-md text-tertiary font-extrabold">AppleCare+</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary">Status</p>
<p className="font-label-md text-label-md text-on-surface font-bold">Authorized</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Direct Apple factory warranty in Uganda. iPhone 16 Pro models, M3 Pro MacBooks, iPads, and genuine MagSafe chargers.
          </p>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">Acacia Mall Walk-in or Swift Delivery</span>
</div>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">100% Guaranteed Serial Valid</span>
<a className="font-label-md text-label-md text-primary hover:text-on-surface-variant font-bold flex items-center gap-0.5" href="#" onClick={() => alertToast('Action triggered')}>
            Visit Store <Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="w-full bg-surface-container-high rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SwiftCart Escrow Lock Guaranteed</h3>
<p className="font-body-sm text-body-sm text-secondary">
            Funds to followed merchants are strictly held in MTN MoMo / Airtel Escrow until you inspect and sign upon doorstep delivery.
          </p>
</div>
</div>
<span className="font-label-md text-label-md text-tertiary font-extrabold whitespace-nowrap px-space-sm py-1 bg-surface-container-lowest rounded-lg shadow-xs">
        100% Protected
      </span>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="auto_awesome" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Recommended Verified Stores to Follow</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Curated for your shopping habits</span>
</div>
<div className="grid grid-cols-2 gap-space-md">

<div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Pearl Organic Grocers fresh basket icon Ugandan market farm produce modern flat minimalist logo" src={`${assetBase}/images/c41966191e93b287.webp`} />
</div>
<div className="min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Pearl Organic Grocers</h3>
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center">
<Icon name="star" className="text-[13px]" />
                      4.9
                    </span>
<span className="font-label-sm text-label-sm text-secondary truncate">• Bugolobi Market Area</span>
</div>
</div>
</div>
<button className="rec-follow-btn shrink-0 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm hover:opacity-90 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[15px]" />
                Follow
              </button>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-1">
              Farm-fresh fruits, Mukono vanilla, Bugisu Arabica whole beans, and artisanal Ugandan cheese.
            </p>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="local_shipping" className="text-[14px]" /> Boda Direct in 35m
            </span>
<span className="font-label-sm text-label-sm text-secondary">156 items</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm p-space-md hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-xs">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Nile Fabric and Apparel modern geometric pattern textile brand crest Kampala high fashion atelier" src={`${assetBase}/images/0e06de6abf5d426f.webp`} />
</div>
<div className="min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Nile Fabric &amp; Apparel</h3>
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center">
<Icon name="star" className="text-[13px]" />
                      4.8
                    </span>
<span className="font-label-sm text-label-sm text-secondary truncate">• Garden City Kampala</span>
</div>
</div>
</div>
<button className="rec-follow-btn shrink-0 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm hover:opacity-90 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="person_add" className="text-[15px]" />
                Follow
              </button>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-1">
              Premium tailored Ugandan linen shirts, authentic Kitenge prints, and contemporary African street silhouettes.
            </p>
</div>
<div className="mt-space-sm pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="verified" className="text-[14px]" /> Custom Sizing Available
            </span>
<span className="font-label-sm text-label-sm text-secondary">84 designs</span>
</div>
</div>
</div>
</div>
</div>


</div></main><footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto"><div className="w-full max-w-[1440px] mx-auto px-margin-desktop py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-outline-variant/20"><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Ugandan Buyer Guarantee</h4><p className="font-body-sm text-body-sm text-secondary mt-1">100% genuine merchandise, escrow-protected payments, and vetted regional vendors.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0"><Icon name="local_shipping" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Hassle-Free Returns</h4><p className="font-body-sm text-body-sm text-secondary mt-1">7-day doorstep return pickup across Kampala, Entebbe, Wakiso, and Mukono metro.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-secondary-container text-secondary flex items-center justify-center shrink-0"><Icon name="support_agent" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Help &amp; Support</h4><p className="font-body-sm text-body-sm text-secondary mt-1">Dedicated 24/7 localized support via live toll-free line, WhatsApp, and Kampala help hub.</p></div></div><div className="flex flex-col justify-start"><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Accepted In Uganda</h4><p className="font-body-sm text-body-sm text-secondary mt-1 mb-space-sm">Instant checkout with national mobile wallets and cards:</p></div><div className="flex flex-wrap items-center gap-space-xs"><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#FFCC00]/20 text-[#6B5500] font-bold">MTN MoMo</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#E40000]/10 text-[#9E0000] font-bold">Airtel Money</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-secondary-container text-on-secondary-fixed font-bold">Visa</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container text-secondary font-bold">Cash on Delivery</span></div></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight">SwiftCart</span><span className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Lumumba Avenue, Nakasero, Kampala. All rights reserved.</span></div><div className="flex items-center gap-space-lg"><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection Policy</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="kampala-delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>Delivery Rates</a></div></div></div></footer>
    </div>
  );
};

export default Tablet;
