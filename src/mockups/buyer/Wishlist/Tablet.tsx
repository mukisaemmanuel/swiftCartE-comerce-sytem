// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/wishlist_swiftcart_buyer_tablet/code.html
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
  const [, setModalOpen] = useState(false);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 w-full px-margin-desktop max-w-[1440px] mx-auto flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg shrink-0"><a className="flex items-center gap-space-sm" data-path="marketplace-home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold">SwiftCart</span><span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded">UG</span></a><button className="hidden xl:flex items-center gap-space-xs text-left px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[20px]" /><div><p className="font-label-sm text-label-sm text-secondary">Deliver to</p><p className="font-label-md text-label-md text-on-surface truncate max-w-[130px]">Kampala Central</p></div></button></div><div className="flex-1 max-w-2xl mx-space-sm hidden md:flex items-center"><div className="w-full flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><select className="bg-transparent text-secondary font-label-md text-label-md px-space-sm py-2 rounded focus:outline-none cursor-pointer border-r border-outline-variant/30"><option value="all">All Categories</option><option value="electronics">Electronics &amp; Phones</option><option value="supermarket">Groceries &amp; Pantry</option><option value="fashion">Kampala Fashion</option><option value="appliances">Home Appliances</option><option value="hardware">Hardware &amp; Tools</option></select><div className="flex-1 flex items-center px-space-sm gap-space-xs"><Icon name="search" className="text-secondary text-[20px]" /><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search products, brands, local suppliers..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" title="Search by image" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button><button className="bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-2 rounded-lg hover:bg-primary transition-colors flex items-center justify-center shrink-0" onClick={() => alertToast('Action triggered')}>Search</button></div></div><nav className="flex items-center gap-space-sm shrink-0" data-active-classes="bg-surface-container text-primary font-bold rounded-lg"><a aria-current="page" className="hidden lg:inline-flex items-center px-space-sm py-2 transition-colors bg-surface-container text-primary font-bold rounded-lg" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>Wishlist</a><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="verified-stores" href="#" onClick={() => alertToast('Action triggered')}>Stores</a><a className="hidden lg:inline-flex items-center px-space-sm py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="buyer-orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="notifications" href="#" title="Notifications" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[24px]" /><span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full"></span></a><a className="relative flex items-center gap-space-xs px-space-sm py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" data-path="shopping-cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><div className="relative"><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.2 rounded-full min-w-[18px] text-center">3</span></div><span className="hidden xl:inline font-label-lg text-label-lg text-on-surface font-bold">Cart</span></a><div className="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/30"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold tracking-tight">SN</div></div></nav></div></header><main className="w-full pt-20 bg-surface min-h-[calc(100vh-320px)]"><div className="flex flex-col w-full">

<div className="w-full bg-primary-fixed/60 px-margin-desktop py-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="trending_down" className="text-primary text-[20px] shrink-0" />
<p className="font-body-sm text-body-sm text-on-primary-fixed truncate">
<span className="font-bold">UGX 116,500</span> total discount available across 2 saved items right now in Kampala warehouses.
      </p>
</div>
<span className="font-label-sm text-label-sm text-on-primary-fixed-variant bg-surface-container-lowest px-space-sm py-0.5 rounded shadow-sm shrink-0">Updated 14m ago</span>
</div>
<div className="max-w-[834px] mx-auto w-full px-margin-desktop py-space-xl flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">My Wishlist</h1>
<span className="font-headline-sm text-headline-sm text-primary font-extrabold">(6 Items)</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md bg-surface-container-low px-space-md py-1.5 rounded-lg">
<Icon name="sync" className="text-[18px]" />
<span>Synced with Kampala Central</span>
</div>
</div>
<p className="font-body-md text-body-md text-secondary max-w-2xl">
        Save items for later, track price drops across Kampala vendors, and order with 1-tap boda delivery.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
<div className="md:col-span-8 flex items-center bg-surface-container-lowest rounded-xl px-space-md py-2.5 shadow-sm focus-within:shadow-md transition-shadow">
<Icon name="search" className="text-secondary text-[20px] shrink-0 mr-space-sm" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" id="wishlistSearchInput" placeholder="Search saved products, brands, or local vendors..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="text-secondary hover:text-on-surface transition-colors hidden" id="clearSearchBtn" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div className="md:col-span-4 flex items-center justify-end bg-surface-container-lowest rounded-xl px-space-md py-2 shadow-sm">
<Icon name="sort" className="text-secondary text-[20px] mr-space-xs shrink-0" />
<label className="sr-only" htmlFor="sortSelector">Sort Wishlist</label>
<select className="w-full bg-transparent font-label-lg text-label-lg text-on-surface cursor-pointer focus:outline-none" id="sortSelector">
<option value="recent">Recently Added</option>
<option value="price-low">Price: Low to High</option>
<option value="price-drop">Biggest Price Drop</option>
</select>
</div>
</div>

<div className="flex items-center gap-space-sm overflow-x-auto pb-1 -mx-margin-desktop px-margin-desktop scrollbar-none">
<button className="wishlist-filter-chip active shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-primary-container text-on-primary font-bold shadow-sm transition-all" data-category="all" onClick={() => alertToast('Action triggered')}>
        All Items <span className="ml-1 opacity-90">(6)</span>
</button>
<button className="wishlist-filter-chip shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container hover:text-on-surface shadow-sm transition-all flex items-center gap-1" data-category="drops" onClick={() => alertToast('Action triggered')}>
<Icon name="trending_down" className="text-[18px] text-tertiary" />
        Price Drops <span className="ml-1 font-bold text-tertiary">(2)</span>
</button>
<button className="wishlist-filter-chip shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container hover:text-on-surface shadow-sm transition-all" data-category="instock" onClick={() => alertToast('Action triggered')}>
        In Stock (5)
      </button>
<button className="wishlist-filter-chip shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container hover:text-on-surface shadow-sm transition-all" data-category="tech" onClick={() => alertToast('Action triggered')}>
        Tech &amp; Audio (3)
      </button>
<button className="wishlist-filter-chip shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container hover:text-on-surface shadow-sm transition-all" data-category="home" onClick={() => alertToast('Action triggered')}>
        Home (2)
      </button>
<button className="wishlist-filter-chip shrink-0 font-label-lg text-label-lg px-space-lg py-2 rounded-full bg-surface-container-lowest text-secondary hover:bg-surface-container hover:text-on-surface shadow-sm transition-all" data-category="fashion" onClick={() => alertToast('Action triggered')}>
        Fashion (1)
      </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg" id="wishlistGrid">

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="tech drops instock" data-drop="61500" data-price="248500" data-stock="in">
<div>

<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="SoundCore Space One ANC modern black wireless over-ear noise-cancelling headphones resting on a minimalist concrete plinth, studio lighting, deep matte finish, crisp commercial product photograph." src={`${assetBase}/images/2390ea5de4c697e6.webp`} />

<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="font-label-sm text-label-sm bg-tertiary text-on-tertiary px-space-sm py-0.5 rounded shadow-sm font-bold flex items-center gap-0.5">
<Icon name="arrow_downward" className="text-[14px]" /> Save UGX 61,500
              </span>
</div>

<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">SoundCore Uganda Official</span>
<span className="font-label-sm text-label-sm bg-tertiary-container/20 text-on-tertiary-container px-1 py-0.2 rounded font-bold ml-auto shrink-0">Verified</span>
</div>

<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            SoundCore Space One ANC Headphones
          </h3>

<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary">(128 reviews)</span>
</div>

<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 248,500</span>
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 310,000</span>
</div>

<div className="mt-space-xs flex items-center gap-1.5 text-tertiary font-label-md text-label-md bg-tertiary-container/10 px-2 py-1 rounded">
<Icon name="two_wheeler" className="text-[16px]" />
<span className="truncate">In Stock • Express Boda delivery available</span>
</div>
</div>

<div className="mt-space-md pt-space-xs">
<button className="add-to-cart-btn w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[20px]" />
<span>Move to Cart</span>
</button>
</div>
</div>

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="tech drops instock" data-drop="30000" data-price="115000" data-stock="in">
<div>
<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Anker 65W compact GaN dual-port fast charger in sleek matte white finish with dual USB-C slots, shot with clean architectural shadows on light gradient background." src={`${assetBase}/images/511ac3257ad4e390.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="font-label-sm text-label-sm bg-tertiary text-on-tertiary px-space-sm py-0.5 rounded shadow-sm font-bold flex items-center gap-0.5">
<Icon name="arrow_downward" className="text-[14px]" /> Save UGX 30,000
              </span>
</div>
<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">Anker Flagship Uganda</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed px-1 py-0.2 rounded font-bold ml-auto shrink-0">Official Brand</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            Anker 65W GaN Dual-Port Charger
          </h3>
<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.8</span>
<span className="font-body-sm text-body-sm text-secondary">(94 reviews)</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 115,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 145,000</span>
</div>
<div className="mt-space-xs flex items-center gap-1.5 text-primary-container font-label-md text-label-md bg-primary-fixed/30 px-2 py-1 rounded">
<Icon name="warning" className="text-[16px]" />
<span>Low Stock • Only 4 remaining</span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<button className="add-to-cart-btn w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[20px]" />
<span>Move to Cart</span>
</button>
</div>
</div>

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="fashion tech instock" data-drop="0" data-price="35000" data-stock="in">
<div>
<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Crystal clear military-grade protective phone case on modern smartphone, subtle reflections, sleek transparent polymer casing, clean white surface." src={`${assetBase}/images/e786ac4857a0a8fc.webp`} />
<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">Kampala Phone Hub</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            Samsung Galaxy A54 Clear Armor Case
          </h3>
<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.6</span>
<span className="font-body-sm text-body-sm text-secondary">(42 reviews)</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-on-surface">UGX 35,000</span>
</div>
<div className="mt-space-xs flex items-center gap-1.5 text-tertiary font-label-md text-label-md bg-tertiary-container/10 px-2 py-1 rounded">
<Icon name="check_circle" className="text-[16px]" />
<span>In Stock • Ships within 2 hours</span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<button className="add-to-cart-btn w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[20px]" />
<span>Move to Cart</span>
</button>
</div>
</div>

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between opacity-95" data-category="tech home outstock" data-drop="0" data-price="520000" data-stock="out">
<div>
<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale-[25%]" data-alt="JBL Charge 5 rugged waterproof bluetooth speaker in deep teal and copper accents, moisture droplets on durable woven fabric grille, outdoor daylight." src={`${assetBase}/images/ee2d73474d990396.webp`} />
<div className="absolute top-2 left-2">
<span className="font-label-sm text-label-sm bg-inverse-surface text-inverse-on-surface px-space-sm py-0.5 rounded shadow-sm font-bold">
                Restocking Soon
              </span>
</div>
<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">Gadget Central Uganda</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            JBL Charge 5 Portable Waterproof Speaker
          </h3>
<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">5.0</span>
<span className="font-body-sm text-body-sm text-secondary">(210 reviews)</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-secondary">UGX 520,000</span>
</div>
<div className="mt-space-xs flex items-center gap-1.5 text-error font-label-md text-label-md bg-error-container/40 px-2 py-1 rounded">
<Icon name="remove_shopping_cart" className="text-[16px]" />
<span>Out of Stock across Kampala stores</span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<button className="notify-btn w-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="notifications_active" className="text-[20px]" />
<span>Notify Me on Restock</span>
</button>
</div>
</div>

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="tech drops instock" data-drop="25000" data-price="145000" data-stock="in">
<div>
<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Oraimo FreePods 4 true wireless earbuds standing in open charging case, premium black and gunmetal texture, dynamic reflections, editorial studio product capture." src={`${assetBase}/images/16b66e02bb9983b0.webp`} />
<div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
<span className="font-label-sm text-label-sm bg-tertiary text-on-tertiary px-space-sm py-0.5 rounded shadow-sm font-bold flex items-center gap-0.5">
<Icon name="bolt" className="text-[14px]" /> Dropped UGX 25,000
              </span>
</div>
<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="verified" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">Oraimo Official Store</span>
<span className="font-label-sm text-label-sm bg-tertiary-container/20 text-on-tertiary-container px-1 py-0.2 rounded font-bold ml-auto shrink-0">Official Brand</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            Oraimo FreePods 4 ANC
          </h3>
<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.7</span>
<span className="font-body-sm text-body-sm text-secondary">(315 reviews)</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-primary">UGX 145,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 170,000</span>
</div>
<div className="mt-space-xs flex items-center gap-1.5 text-secondary font-label-sm text-label-sm bg-surface-container-low px-2 py-1 rounded">
<Icon name="schedule" className="text-tertiary text-[16px]" />
<span>Price dropped 2 days ago</span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<button className="add-to-cart-btn w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[20px]" />
<span>Move to Cart</span>
</button>
</div>
</div>

<div className="wishlist-card group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="tech home instock" data-drop="0" data-price="1450000" data-stock="in">
<div>
<div className="relative w-full aspect-[4/3] rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Sony WH-1000XM5 high-end flagship wireless headphones in silver platinum edition, soft matte texture, sculptural minimalist profile on warm neutral background." src={`${assetBase}/images/5c23b13650f56ad3.webp`} />
<div className="absolute top-2 left-2">
<span className="font-label-sm text-label-sm bg-surface-container-lowest/90 text-on-surface px-space-sm py-0.5 rounded shadow-sm font-bold flex items-center gap-1">
<Icon name="local_police" className="text-[14px] text-tertiary" /> Verified Authentic
              </span>
</div>
<button className="remove-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-secondary hover:text-error hover:bg-surface-container-lowest flex items-center justify-center shadow-sm transition-colors" title="Remove item" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-1 mb-1">
<Icon name="storefront" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md text-secondary truncate">Victoria Tech Supplies</span>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-1 py-0.2 rounded font-bold ml-auto shrink-0">Kampala Central</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            Sony WH-1000XM5 Wireless Headphones
          </h3>
<div className="flex items-center gap-1 my-1">
<div className="flex items-center text-[#F59E0B]">
<Icon name="star" className="text-[16px]" />
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary">(87 reviews)</span>
</div>
<div className="flex items-baseline gap-space-xs mt-space-xs">
<span className="font-price-display text-price-display text-on-surface">UGX 1,450,000</span>
</div>
<div className="mt-space-xs flex items-center gap-1.5 text-tertiary font-label-md text-label-md bg-tertiary-container/10 px-2 py-1 rounded">
<Icon name="verified_user" className="text-[16px]" />
<span>1-Year Official East Africa Warranty</span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<button className="add-to-cart-btn w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg flex items-center justify-center gap-space-xs shadow-sm transition-all active:scale-[0.98]" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_bag" className="text-[20px]" />
<span>Move to Cart</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-col items-center justify-center py-space-xl text-center bg-surface-container-lowest rounded-xl shadow-sm p-space-xl" id="emptyWishlistState">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-space-sm">
<Icon name="bookmark_border" className="text-[36px]" />
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">No matching wishlist items</h3>
<p className="font-body-md text-body-md text-secondary max-w-sm mb-space-md">Try clearing your filters or search keywords to view your saved products.</p>
<button className="bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-2 rounded-lg" id="resetFiltersBtn" onClick={() => setDrawerOpen((prev) => !prev)}>Reset Filter</button>
</div>

<div className="w-full bg-surface-container-lowest rounded-2xl p-space-lg md:p-space-xl shadow-md border-l-4 border-l-primary-container flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">

<div className="flex items-start gap-space-md">
<div className="p-space-sm bg-primary-fixed rounded-xl text-on-primary-fixed shrink-0 hidden sm:flex items-center justify-center">
<Icon name="price_change" className="text-[32px]" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-extrabold">Price Intelligence Hub</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Active Tracking</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Price Drop Watchlist Summary</h4>
<p className="font-body-md text-body-md text-secondary mt-1">
              You are saving <span className="text-tertiary font-bold font-price-display text-body-lg">UGX 116,500</span> across current discounts in your list.
            </p>
</div>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl shrink-0">
<Icon name="electric_moped" className="text-primary text-[24px]" />
<div>
<p className="font-label-sm text-label-sm text-secondary">Fastest Dispatch</p>
<p className="font-label-lg text-label-lg text-on-surface font-bold">Within 45 Mins</p>
</div>
</div>
</div>

<div className="h-px w-full bg-surface-container"></div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">

<label className="flex items-center gap-space-sm cursor-pointer select-none">
<input checked={true} className="sr-only peer" id="whatsappToggle" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary relative"></div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">Notify via WhatsApp on Price Drops</span>
<span className="font-label-sm text-label-sm bg-tertiary-container/20 text-on-tertiary-container px-1 rounded font-bold">256-MTN</span>
</div>
</label>

<button className="bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-space-xl py-3 rounded-xl flex items-center justify-center gap-space-xs shadow-md transition-all active:scale-[0.98]" id="batchAddBtn" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="shopping_cart_checkout" className="text-[22px]" />
<span>Add All In-Stock to Cart <span className="font-extrabold tracking-tight">(UGX 2,393,500)</span></span>
</button>
</div>
</div>

<div className="flex items-center justify-center gap-space-md text-secondary py-space-xs">
<div className="flex items-center gap-1 text-center font-label-md text-label-md">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span>Kampala Escrow Protected</span>
</div>
<span className="text-secondary/40">•</span>
<div className="flex items-center gap-1 text-center font-label-md text-label-md">
<Icon name="currency_exchange" className="text-primary text-[18px]" />
<span>Instant MoMo &amp; Airtel Refunds</span>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto"><div className="w-full max-w-[1440px] mx-auto px-margin-desktop py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-outline-variant/20"><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Ugandan Buyer Guarantee</h4><p className="font-body-sm text-body-sm text-secondary mt-1">100% genuine merchandise, escrow-protected payments, and vetted regional vendors.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0"><Icon name="local_shipping" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Hassle-Free Returns</h4><p className="font-body-sm text-body-sm text-secondary mt-1">7-day doorstep return pickup across Kampala, Entebbe, Wakiso, and Mukono metro.</p></div></div><div className="flex items-start gap-space-md"><div className="p-space-sm rounded-lg bg-secondary-container text-secondary flex items-center justify-center shrink-0"><Icon name="support_agent" className="text-[28px]" /></div><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Help &amp; Support</h4><p className="font-body-sm text-body-sm text-secondary mt-1">Dedicated 24/7 localized support via live toll-free line, WhatsApp, and Kampala help hub.</p></div></div><div className="flex flex-col justify-start"><div><h4 className="font-headline-sm text-headline-sm text-on-surface">Accepted In Uganda</h4><p className="font-body-sm text-body-sm text-secondary mt-1 mb-space-sm">Instant checkout with national mobile wallets and cards:</p></div><div className="flex flex-wrap items-center gap-space-xs"><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#FFCC00]/20 text-[#6B5500] font-bold">MTN MoMo</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-[#E40000]/10 text-[#9E0000] font-bold">Airtel Money</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-secondary-container text-on-secondary-fixed font-bold">Visa</span><span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container text-secondary font-bold">Cash on Delivery</span></div></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight">SwiftCart</span><span className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Lumumba Avenue, Nakasero, Kampala. All rights reserved.</span></div><div className="flex items-center gap-space-lg"><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection Policy</a><a className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" data-path="kampala-delivery-rates" href="#" onClick={() => alertToast('Action triggered')}>Delivery Rates</a></div></div></div></footer>
    </div>
  );
};

export default Tablet;
