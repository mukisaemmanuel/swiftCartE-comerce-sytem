// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/categories_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-surface-container"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={`${assetBase}/images/a0089007abbe614b.webp`} /></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-secondary-fixed leading-none tracking-tight">SwiftCart</span><span className="hidden">Categories</span><div className="flex items-center gap-1 mt-0.5"><Icon name="location_on" className="text-[13px] text-primary" /><span className="font-label-sm text-label-sm text-on-surface-variant font-bold truncate max-w-[110px]">Kampala Central</span></div></div></div><div className="flex items-center gap-space-xs"><button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container text-on-secondary-fixed transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="notifications" /></button><div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={`${assetBase}/images/a0089007abbe614b.webp`} /></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="px-margin pt-space-xs pb-space-sm w-full bg-surface">
<div className="flex items-center justify-between mb-space-xs">
<div>
<h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Explore Categories</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Over 45,000 verified products in Kampala</p>
</div>
<div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-full shadow-sm">
<Icon name="verified_user" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight">Escrow Safe</span>
</div>
</div>

<div className="relative w-full">
<Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-outline" />
<input className="w-full h-11 pl-11 pr-10 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none transition-all focus:bg-surface-container-lowest focus:shadow-md" placeholder="Search all categories & brands..." type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[16px]" />
</button>
</div>
</div>

<div className="flex w-full min-h-[calc(100vh-14rem)]">

<aside className="w-[96px] shrink-0 bg-surface-container-low flex flex-col py-space-xs overflow-y-auto">

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center bg-surface-container-lowest transition-all group" data-category="electronics" onClick={() => alertToast('Action triggered')}>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-[#FF8A1F] to-primary-container rounded-r-full"></div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
<Icon name="devices" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-primary font-bold leading-tight line-clamp-2">Electronics &amp; Tech</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="fashion" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="apparel" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Fashion &amp; Style</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="home" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="chair" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Home &amp; Kitchen</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="solar" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="solar_power" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Solar &amp; Power</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="groceries" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="local_mall" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Groceries</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="beauty" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="spa" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Beauty &amp; Care</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="baby" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="smart_toy" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Baby &amp; Toys</span>
</button>

<button className="cat-rail-item relative w-full py-3 px-2 flex flex-col items-center gap-1.5 text-center hover:bg-surface-container transition-all group" data-category="auto" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<Icon name="two_wheeler" className="text-[22px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-tight line-clamp-2">Auto &amp; Moto</span>
</button>
</aside>

<main className="flex-1 bg-surface px-3 py-2 flex flex-col gap-4 overflow-y-auto pb-8">

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-container to-[#FF8A1F] text-on-primary-container p-3.5 shadow-md">

<div className="absolute -right-6 -bottom-8 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col">
<div className="inline-flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-2 py-0.5 rounded-full w-fit mb-1.5">
<Icon name="bolt" className="text-[12px] text-amber-300" />
<span className="font-label-sm text-label-sm tracking-wide uppercase font-bold text-on-primary-container">Swift Express 24h Delivery</span>
</div>
<h2 className="font-headline-sm text-headline-sm font-extrabold leading-tight text-on-primary-container tracking-tight">
            Electronics Mega Deals
          </h2>
<p className="font-body-sm text-body-sm text-on-primary-container/90 mt-0.5">
            Up to 40% Off Certified Audio &amp; Gadgets in Kampala
          </p>
<div className="mt-2.5 flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-md bg-surface-container-lowest text-primary font-bold">
              Promo Code: KLA24
            </span>
<span className="font-label-sm text-label-sm text-on-primary-container/80 flex items-center gap-0.5">
              Ends tonight
              <Icon name="arrow_forward" className="text-[13px]" />
</span>
</div>
</div>
</div>

<section className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-3.5 rounded-full bg-primary"></span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">Browse Subcategories</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 Types</span>
</div>
<div className="grid grid-cols-3 gap-2">

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Modern matte black over-ear ANC wireless headphones resting on warm studio surface with soft amber lighting, sharp product shot." src={`${assetBase}/images/c28ffd990f3a6912.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">Audio &amp; Headphones</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">120+ items</span>
</a>

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Sleek dual smartphones with edge-to-edge glossy OLED displays and metallic frames, clean studio gradient background." src={`${assetBase}/images/5da5b88291dfb256.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">Smartphones &amp; Tablets</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">85+ items</span>
</a>

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Compact rugged high capacity power bank battery and portable solar panel charging station, product photography." src={`${assetBase}/images/9511d6ca4e0c6d42.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">Power Banks &amp; Solar</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">48+ items</span>
</a>

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Digital smartwatch with sleek silicone sports wristband glowing display showing heartbeat metric, crisp studio render." src={`${assetBase}/images/0d4c1328724df2cf.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">Smart Watches &amp; Fitness</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">64+ items</span>
</a>

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Ultra-thin silver aluminum laptop opened at angle displaying sharp code editor interface, clean warm desk aesthetic." src={`${assetBase}/images/0ff2708d1f234b49.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">Laptops &amp; Computing</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">92+ items</span>
</a>

<a className="group flex flex-col items-center p-2 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all text-center" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden mb-1.5 p-1 flex items-center justify-center">
<img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Bezel-less ultra-thin 4K smart TV unit paired with sleek audio soundbar, warm interior design staging." src={`${assetBase}/images/503e5c8596cdc37f.webp`} />
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight line-clamp-2">TV &amp; Home Theatre</span>
<span className="font-label-sm text-[9px] text-tertiary mt-0.5 font-bold">34+ items</span>
</a>
</div>
</section>

<section className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-3.5 rounded-full bg-primary"></span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight">Popular in Electronics</h3>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold flex items-center" onClick={() => alertToast('Action triggered')}>
            See all
            <Icon name="chevron_right" className="text-[14px]" />
</button>
</div>
<div className="flex flex-col gap-2.5">

<div className="bg-surface-container-lowest p-2.5 rounded-2xl shadow-sm flex gap-3 relative group">
<div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden shrink-0 flex items-center justify-center relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="High quality Anker Soundcore Q20 wireless noise cancelling headphones in matte black finish, crisp commercial product shot." src={`${assetBase}/images/accc7b862d18c30c.webp`} />
<span className="absolute top-1 left-1 bg-surface-container-lowest/90 px-1 py-0.5 rounded text-[8px] font-bold text-on-surface">Top Seller</span>
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div>
<div className="flex items-center gap-1 mb-1">

<span className="inline-flex items-center gap-0.5 bg-emerald-50 text-tertiary px-1.5 py-0.5 rounded-full text-[10px] font-bold">
<Icon name="verified" className="text-[12px]" />
                    Verified Store
                  </span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Q20 ANC Wireless</h4>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate">Kampala Gadgets Hub · 40h Battery</p>
</div>
<div className="flex items-end justify-between mt-1">
<div>
<span className="font-currency-code text-currency-code text-primary font-extrabold">UGX</span>
<span className="font-price-display text-[16px] text-primary font-extrabold leading-none">175,000</span>
</div>
<button className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-2.5 rounded-2xl shadow-sm flex gap-3 relative group">
<div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden shrink-0 flex items-center justify-center relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Oraimo FreePods 4 true wireless earbuds with slide open glossy white case, hyper-detailed tech visual on cream backdrop." src={`${assetBase}/images/624231e50dfda862.webp`} />
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div>
<div className="flex items-center gap-1.5 mb-1">

<span className="inline-flex items-center gap-0.5 bg-[#FFF2E8] text-primary-container px-1.5 py-0.5 rounded-full text-[10px] font-bold">
<Icon name="bolt" className="text-[11px]" />
                    Swift Express
                  </span>
<span className="text-[10px] text-on-surface-variant font-medium">Boda dispatch</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">Oraimo FreePods 4 Earbuds</h4>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate">Official Store · Active Bass Mode</p>
</div>
<div className="flex items-end justify-between mt-1">
<div>
<span className="font-currency-code text-currency-code text-primary font-extrabold">UGX</span>
<span className="font-price-display text-[16px] text-primary font-extrabold leading-none">89,000</span>
</div>
<button className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-2.5 rounded-2xl shadow-sm flex gap-3 relative group">
<div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden shrink-0 flex items-center justify-center relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="20000mAh high capacity portable power bank with digital percentage battery LED readout and dual USB fast charge ports." src={`${assetBase}/images/e75b6b9e46f810b8.webp`} />
</div>
<div className="flex flex-col justify-between flex-1 min-w-0">
<div>
<div className="flex items-center gap-1 mb-1">

<span className="inline-flex items-center gap-0.5 bg-[#ECFDF5] text-tertiary px-1.5 py-0.5 rounded-full text-[10px] font-bold">
<Icon name="lock" className="text-[11px]" />
                    Swift Escrow Protected
                  </span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-bold truncate">20,000mAh Fast Charge Bank</h4>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate">22.5W PD Fast · Dual Output</p>
</div>
<div className="flex items-end justify-between mt-1">
<div>
<span className="font-currency-code text-currency-code text-primary font-extrabold">UGX</span>
<span className="font-price-display text-[16px] text-primary font-extrabold leading-none">65,000</span>
</div>
<button className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="add_shopping_cart" className="text-[16px]" />
</button>
</div>
</div>
</div>
</div>
</section>

<div className="p-3 rounded-xl bg-surface-container-low flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
<Icon name="payments" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-bold">MTN MoMo &amp; Airtel Money Ready</span>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Funds held securely in escrow until goods are inspected.</span>
</div>
</div>
</main>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(14,27,77,0.06)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-gutter"><a className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-on-surface-variant transition-colors" data-path="home" href="#" onClick={() => alertToast('Action triggered')}><Icon name="home" className="text-[24px]" /><span className="font-label-sm text-label-sm">Home</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 transition-colors text-primary font-bold" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}><Icon name="grid_view" className="text-[24px]" /><span className="font-label-sm text-label-sm">Categories</span></a><a className="relative flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-on-surface-variant transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative flex items-center justify-center"><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none">3</span></div><span className="font-label-sm text-label-sm">Cart</span></a><a className="relative flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-on-surface-variant transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><div className="relative flex items-center justify-center"><Icon name="favorite" className="text-[24px]" /><span className="absolute -top-1.5 -right-2 bg-secondary text-on-secondary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none">2</span></div><span className="font-label-sm text-label-sm">Wishlist</span></a><a className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-on-surface-variant transition-colors" data-path="account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><Icon name="person" className="text-[24px]" /><span className="font-label-sm text-label-sm">Account</span></a></div></nav>
    </div>
  );
};

export default Mobile;
