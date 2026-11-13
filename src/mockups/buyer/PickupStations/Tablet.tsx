// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/pickup_station_chooser_tablet/code.html
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_2px_12px_rgba(15,23,42,0.06)]"><div className="h-28 max-w-6xl mx-auto px-4 flex flex-col justify-between py-2"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight hidden sm:inline">SwiftCart</span><button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="location_on" className="text-primary text-[18px]" /><div className="flex flex-col text-left leading-none"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[110px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px]" /></button></div><div className="flex-1 max-w-lg mx-2"><div className="flex items-center h-10 rounded-lg bg-surface-container-low px-2 gap-2 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant shrink-0 pr-2" onClick={() => alertToast('Action triggered')}><span>All Goods</span><Icon name="arrow_drop_down" className="text-[16px]" /></button><div className="w-px h-5 bg-outline-variant"></div><input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-secondary-container focus:outline-none" placeholder="Search authentic products, brands, essentials..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-8 px-3 rounded bg-primary-container text-on-primary flex items-center justify-center hover:opacity-95 transition-opacity" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[18px]" /></button></div></div><div className="flex items-center gap-2.5 shrink-0"><div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-semibold"><Icon name="bolt" className="text-tertiary text-[15px]" /><span>Kampala Same-Day Dispatch</span></div><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">4</span></button><button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></button><div className="flex items-center gap-2 pl-1"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden lg:inline font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" data-active-classes="bg-primary-container text-on-primary font-bold rounded-md shadow-sm"><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="cart---multi-vendor-tablet" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a aria-current="page" className="px-3 py-1 whitespace-nowrap transition-colors bg-primary-container text-on-primary font-bold rounded-md shadow-sm" data-path="pickup-station-chooser-tablet" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="payment-methods-&-add-momo-tablet" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="mtn-momo-ussd-pin-prompt-tablet" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="home-&-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="px-3 py-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-md whitespace-nowrap transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="max-w-6xl mx-auto px-4 py-4"><div className="flex flex-col w-full">

<div className="flex items-center justify-between py-2 px-1 mb-3">
<div className="flex items-center gap-2">
<a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}>
<Icon name="arrow_back" className="text-[16px]" />
<span>Checkout Details</span>
</a>
<span className="text-secondary font-label-md text-label-md">/</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Select SwiftCart Pickup Station</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
<Icon name="security" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">ZERO PICKUP CHARGES ACROSS KAMPALA HUBS</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm mb-4">
<div className="flex items-center gap-3 bg-surface-container-low px-3 py-2 rounded-lg">
<Icon name="travel_explore" className="text-secondary text-[22px]" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search neighborhood, landmark, or street in Kampala & Wakiso..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="shrink-0 flex items-center gap-1 px-3 py-1 bg-surface-container rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="my_location" className="text-[16px]" />
<span className="hidden sm:inline">Near Me</span>
</button>
</div>

<div className="flex items-center gap-2 mt-3 overflow-x-auto scrollbar-none pb-0.5" id="filter-container">
<button className="px-3 py-1.5 rounded-lg bg-on-surface text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[15px]" />
<span>All Hubs (18)</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        Central Kampala (5)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
        Entebbe Corridor (4)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="schedule" className="text-tertiary text-[16px]" />
<span>Open Late till 20:00 (12)</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="lock_clock" className="text-primary text-[16px]" />
<span>24/7 Locker (3)</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

<div className="md:col-span-5 flex flex-col gap-3 max-h-[750px] overflow-y-auto pr-1">
<div className="flex items-center justify-between px-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<span>Available Hub Stations (4 nearby)</span>
<span>Sorted by distance</span>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-md transition-all relative overflow-hidden" id="station-card-1">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex items-start justify-between gap-2 mb-1.5 pl-1">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">ACTIVE PICKUP</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
<Icon name="verified" className="text-[13px]" /> FAST DISPATCH
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">William Street Central Hub</h3>
<div className="text-secondary font-label-md text-label-md flex items-center gap-1 mt-0.5">
<span className="font-bold text-on-surface-variant">HUB-04</span>
<span>•</span>
<span className="text-primary font-bold">0.8 km away</span>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold whitespace-nowrap">
            FREE PICKUP
          </span>
</div>
<div className="pl-1 space-y-1.5 my-3">
<div className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="apartment" className="text-secondary text-[16px] shrink-0 mt-0.5" />
<span>William St Arcade, Ground Fl, Kampala CBD (Opposite City Oil)</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="access_time" className="text-tertiary text-[16px] shrink-0" />
<span className="font-semibold text-tertiary">Open today: 07:30 - 20:00</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="call" className="text-secondary text-[16px] shrink-0" />
<span>+256 700 112 233 • Lead: Isaac Kato</span>
</div>
</div>
<div className="pl-1 pt-2 bg-surface-container-low/60 p-2.5 rounded-lg mb-3">
<div className="flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm font-semibold">
<Icon name="inventory_2" className="text-tertiary text-[16px]" />
<span>Ready for same-day collection • High Capacity Luggage Bay</span>
</div>
</div>
<div className="pl-1">
<button className="w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-[0.99]" onClick={() => alertToast('Action triggered')}>
<Icon name="check_circle" className="text-[18px]" />
<span>Selected Station</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group cursor-pointer" id="station-card-2">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">SMART LOCKER</span>
<span className="font-label-sm text-label-sm text-primary font-bold">HUB-12</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">Acacia Mall Hub &amp; Smart Lockers</h3>
<div className="text-secondary font-label-md text-label-md flex items-center gap-1 mt-0.5">
<span>2.4 km away</span>
<span>•</span>
<span>Kololo / Kisementi</span>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-surface-container-low text-tertiary font-label-md text-label-md font-bold whitespace-nowrap">
            FREE
          </span>
</div>
<div className="space-y-1.5 my-3">
<div className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-secondary text-[16px] shrink-0 mt-0.5" />
<span>Acacia Mall P2 Parking Bay, Kisementi, Kololo</span>
</div>
<div className="flex items-center gap-2 text-tertiary font-body-sm text-body-sm font-semibold">
<Icon name="all_inclusive" className="text-[16px] shrink-0" />
<span>24/7 Automated Smart Locker (Instant PIN Access)</span>
</div>
</div>
<button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Select Station</span>
</button>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group cursor-pointer" id="station-card-3">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">RETAIL HUB</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">HUB-07</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">Lugogo Mall Hub Station</h3>
<div className="text-secondary font-label-md text-label-md flex items-center gap-1 mt-0.5">
<span>3.5 km away</span>
<span>•</span>
<span>Lugogo Bypass</span>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-surface-container-low text-tertiary font-label-md text-label-md font-bold whitespace-nowrap">
            FREE
          </span>
</div>
<div className="space-y-1.5 my-3">
<div className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="storefront" className="text-secondary text-[16px] shrink-0 mt-0.5" />
<span>Shoprite Complex, Ground Wing, Lugogo Bypass</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="schedule" className="text-secondary text-[16px] shrink-0" />
<span>Operating Hours: 08:00 - 19:30</span>
</div>
</div>
<button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Select Station</span>
</button>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group cursor-pointer" id="station-card-4">
<div className="flex items-start justify-between gap-2 mb-1.5">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">EXPRESS COUNTER</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">HUB-18</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">Ntinda Complex Hub</h3>
<div className="text-secondary font-label-md text-label-md flex items-center gap-1 mt-0.5">
<span>5.1 km away</span>
<span>•</span>
<span>Ntinda Shopping Centre</span>
</div>
</div>
<span className="px-2 py-1 rounded-md bg-surface-container-low text-tertiary font-label-md text-label-md font-bold whitespace-nowrap">
            FREE
          </span>
</div>
<div className="space-y-1.5 my-3">
<div className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-secondary text-[16px] shrink-0 mt-0.5" />
<span>Ntinda Shopping Centre, Level 1, Near Posta</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="schedule" className="text-secondary text-[16px] shrink-0" />
<span>Operating Hours: 08:00 - 20:00</span>
</div>
</div>
<button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Select Station</span>
</button>
</div>
</div>

<div className="md:col-span-7 flex flex-col h-[750px] relative rounded-2xl overflow-hidden shadow-md bg-surface-container-low">

<div className="w-full h-full bg-cover bg-center relative" data-location="Kampala Central, William Street, Nakasero, Uganda" style={{"backgroundImage":"url('/images/f38206cd0c406438.webp')"}}>

<div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface/40 pointer-events-none"></div>

<div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
<div className="bg-surface-container-lowest rounded-lg shadow-md flex flex-col overflow-hidden">
<button className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors" title="Zoom In" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[20px]" />
</button>
<div className="w-full h-px bg-surface-container-low"></div>
<button className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors" title="Zoom Out" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[20px]" />
</button>
</div>
<button className="w-10 h-10 bg-surface-container-lowest rounded-lg shadow-md flex items-center justify-center text-primary hover:bg-surface-container-low transition-colors" title="Locate Current Position" onClick={() => alertToast('Action triggered')}>
<Icon name="near_me" className="text-[20px]" />
</button>
<button className="w-10 h-10 bg-surface-container-lowest rounded-lg shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors" title="Toggle Traffic Layer" onClick={() => alertToast('Action triggered')}>
<Icon name="traffic" className="text-[20px]" />
</button>
</div>

<div className="absolute top-4 left-4 z-20 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface font-bold">Greater Kampala Metropolitan Hubs</span>
</div>

<div className="absolute inset-0 z-10 pointer-events-auto">

<div className="absolute top-[48%] left-[44%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group">

<div className="bg-inverse-surface text-inverse-on-surface px-3 py-2 rounded-xl shadow-xl flex flex-col min-w-[220px] mb-1 animate-bounce-none">
<div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1 mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary-fixed uppercase tracking-wider flex items-center gap-1">
<Icon name="stars" className="text-[13px]" /> SELECTED HUB
                </span>
<span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-extrabold px-1.5 py-0.2 rounded">FREE</span>
</div>
<div className="font-label-lg text-label-lg font-bold text-white leading-tight">William St Central Hub</div>
<div className="text-surface-container text-body-sm font-medium">William St Arcade • CBD</div>
<div className="flex items-center gap-1.5 text-tertiary-fixed font-label-sm text-label-sm mt-1 pt-1 border-t border-white/10">
<Icon name="cloud_download" className="text-[14px]" />
<span>Open till 20:00 • 0.8 km</span>
</div>

<div className="w-3 h-3 bg-inverse-surface rotate-45 mx-auto -mb-3 mt-1"></div>
</div>

<div className="relative flex items-center justify-center">
<span className="absolute w-8 h-8 rounded-full bg-primary-container/30 animate-ping"></span>
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary shadow-lg flex items-center justify-center ring-4 ring-white">
<Icon name="warehouse" className="text-[20px]" />
</div>
</div>
<span className="font-label-sm text-label-sm font-extrabold bg-on-surface text-on-primary px-1.5 py-0.5 rounded shadow mt-1">William St</span>
</div>

<div className="absolute top-[28%] left-[62%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform">
<div className="opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2.5 py-1.5 rounded-lg shadow-lg text-center mb-1 whitespace-nowrap">
<p className="font-label-md text-label-md font-bold">Acacia Mall Lockers</p>
<p className="font-label-sm text-label-sm text-tertiary-fixed">24/7 Smart Access • 2.4 km</p>
</div>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary shadow-md flex items-center justify-center ring-2 ring-white hover:bg-primary transition-colors">
<Icon name="lock" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-semibold bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded shadow-sm mt-1">Acacia Mall</span>
</div>

<div className="absolute top-[38%] left-[78%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform">
<div className="opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2.5 py-1.5 rounded-lg shadow-lg text-center mb-1 whitespace-nowrap">
<p className="font-label-md text-label-md font-bold">Lugogo Mall Hub</p>
<p className="font-label-sm text-label-sm text-surface-container">08:00 - 19:30 • 3.5 km</p>
</div>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary shadow-md flex items-center justify-center ring-2 ring-white hover:bg-primary transition-colors">
<Icon name="storefront" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-semibold bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded shadow-sm mt-1">Lugogo</span>
</div>

<div className="absolute top-[18%] left-[72%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform">
<div className="opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2.5 py-1.5 rounded-lg shadow-lg text-center mb-1 whitespace-nowrap">
<p className="font-label-md text-label-md font-bold">Ntinda Complex</p>
<p className="font-label-sm text-label-sm text-surface-container">Open till 20:00 • 5.1 km</p>
</div>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary shadow-md flex items-center justify-center ring-2 ring-white hover:bg-primary transition-colors">
<Icon name="inventory_2" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm font-semibold bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded shadow-sm mt-1">Ntinda</span>
</div>

<div className="absolute top-[42%] left-[32%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform">
<div className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow flex items-center justify-center ring-2 ring-white">
<Icon name="local_shipping" className="text-[14px]" />
</div>
<span className="font-label-sm text-label-sm font-medium bg-surface-container-lowest/80 text-on-surface px-1 rounded shadow-xs mt-0.5">Nakasero</span>
</div>

<div className="absolute top-[56%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<span className="w-6 h-6 rounded-full bg-tertiary-container/30 animate-ping absolute"></span>
<span className="w-3.5 h-3.5 rounded-full bg-tertiary ring-2 ring-white shadow-md z-10"></span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 z-30">
<div className="bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-xl flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<div className="h-11 w-11 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
<Icon name="local_convenience_store" className="text-[24px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">William Street Central Hub</h4>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold shrink-0">READY TODAY</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Ready in ~30 mins after seller dispatch • William St Arcade, Ground Fl
                  </p>
</div>
</div>
<div className="text-right shrink-0 hidden sm:block">
<span className="font-label-sm text-label-sm text-secondary uppercase block">Handling Fee</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">UGX 0</span>
</div>
</div>

<div className="flex items-center gap-3 pt-1">
<button className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg font-semibold flex items-center justify-center gap-1.5 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[18px]" />
<span>Back to Delivery</span>
</button>
<button className="flex-1 py-3 px-6 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]" onClick={() => alertToast('Action triggered')}>
<span>Confirm This Pickup Station</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></main><footer className="w-full bg-surface-container-lowest mt-12 shadow-[0_-2px_12px_rgba(15,23,42,0.03)]"><div className="max-w-6xl mx-auto px-4 py-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8"><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Funds released only after inspection</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary"><Icon name="two_wheeler" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Direct to home, office, or central pickup hub</p></div></div><div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low"><div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary"><Icon name="assignment_return" className="text-[24px]" /></div><div><h4 className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Hassle-free refunds across 42 pickup spots</p></div></div></div><div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4"><div className="flex flex-wrap gap-6 font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kampala Pickup Hubs</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>MoMo Payment Guarantee</a><a className="hover:text-on-surface transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Uganda Merchant Portal</a><a className="hover:text-on-surface transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help Center &amp; WhatsApp Support</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. Registered under URA &amp; NITA-U. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
