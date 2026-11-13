// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/pickup_station_chooser_swiftcart/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100%;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}

    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors -ml-2" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain flex-shrink-0" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-tight ml-1">Pickup Station Selector</h1></div><div className="flex items-center gap-space-xs"><button aria-label="Quick Actions" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-28">
<div className="px-gutter pt-space-xs pb-space-sm flex flex-col gap-space-sm bg-surface">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-secondary pl-10 pr-10 py-2.5 rounded-xl outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all shadow-sm" placeholder="Search district, hub or landmark (e.g. William St, Ntinda)..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button aria-label="Clear or voice" className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="mic" className="text-[18px]" />
</button>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-gutter px-gutter">
<button className="bg-primary text-on-primary font-label-md text-label-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1 flex-shrink-0 whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
<span>All</span>
<span className="bg-on-primary/20 px-1.5 py-0.2 rounded-full font-label-sm text-label-sm">18</span>
</button>
<button className="bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md px-3.5 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0 whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Central Kampala</span>
</button>
<button className="bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md px-3.5 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0 whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Nakawa</span>
</button>
<button className="bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md px-3.5 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0 whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
<span>Makindye</span>
</button>
<button className="bg-surface-container-low text-tertiary font-label-md text-label-md px-3.5 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0 whitespace-nowrap transition-colors" onClick={() => alertToast('Action triggered')}>
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>Open Now</span>
</button>
</div>
</div>
<div className="relative w-full h-64 bg-surface-container overflow-hidden shadow-inner">
<div className="w-full h-full bg-cover bg-center" data-location="Kampala Central, Uganda" style={{"backgroundImage":"url('/images/a26aa8705985a2e5.webp')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-primary-container/30 rounded-full animate-ping"></div>
<div className="relative z-10 w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div className="absolute -bottom-1 w-2.5 h-2.5 bg-primary-container rotate-45"></div>
</div>
<div className="mt-2 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-md flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface font-bold whitespace-nowrap">William St Central #04</span>
<span className="font-label-sm text-label-sm text-primary font-bold">1.2 km • UGX 2,500</span>
</div>
</div>
<div className="absolute top-1/4 right-1/4 flex flex-col items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md">
<Icon name="store" className="text-[16px]" />
</div>
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded shadow-sm text-center">
<span className="font-label-sm text-label-sm text-on-surface">Lugogo Mall</span>
</div>
</div>
<div className="absolute top-10 right-10 flex flex-col items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md">
<Icon name="store" className="text-[16px]" />
</div>
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded shadow-sm text-center">
<span className="font-label-sm text-label-sm text-on-surface">Ntinda Hub</span>
</div>
</div>
<button className="absolute bottom-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md text-on-surface hover:text-primary px-3 py-2 rounded-xl shadow-md flex items-center gap-1.5 font-label-md text-label-md transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="my_location" className="text-primary text-[18px]" />
<span>Use My GPS</span>
</button>
</div>
<div className="px-gutter pt-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="near_me" className="text-primary text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pickup Stations</h2>
</div>
<span className="font-label-md text-label-md text-secondary">Sorted by closest</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md relative overflow-hidden flex flex-col gap-space-sm cursor-pointer transition-all">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container"></div>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<Icon name="done" className="text-[14px]" />
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">William St Central Hub #04</h3>
<span className="bg-surface-container text-on-secondary-container px-2 py-0.5 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider">Fast Pick</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">William Street, Plot 22, Opp. Kikuubo Market, Nakasero, Kampala Central</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold block">UGX 2,500</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold block">Save UGX 2,500</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<div className="bg-tertiary-container/15 text-tertiary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm font-semibold">
<Icon name="schedule" className="text-[14px]" />
<span>Open Now • Mon-Sat 08:00 - 19:00</span>
</div>
<div className="bg-surface-container-low text-secondary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="distance" className="text-[14px]" />
<span>1.2 km away</span>
</div>
</div>
<div className="bg-surface-container-low/70 rounded-lg p-2.5 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<Icon name="inventory_2" className="text-primary text-[16px]" />
<span>Same-Day Inflow • Held 5 days free</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          Ready
        </span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm cursor-pointer hover:shadow-md transition-all opacity-95">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="w-2.5 h-2.5 rounded-full bg-surface"></span>
</div>
<div className="min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Lugogo Mall Hub Station</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Forest Mall Ground Level (Next to TotalEnergies), Lugogo Bypass</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold block">UGX 2,500</span>
<span className="font-label-sm text-label-sm text-secondary block">Standard</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<div className="bg-surface-container-low text-secondary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="schedule" className="text-[14px]" />
<span>Open Daily: 08:30 - 20:00</span>
</div>
<div className="bg-surface-container-low text-secondary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="distance" className="text-[14px]" />
<span>2.8 km away</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm cursor-pointer hover:shadow-md transition-all opacity-95">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="w-2.5 h-2.5 rounded-full bg-surface"></span>
</div>
<div className="min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Ntinda Shopping Centre Hub</h3>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Ntinda Road, Stage 2, Nakawa Division</p>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold block">UGX 2,500</span>
<span className="font-label-sm text-label-sm text-secondary block">Standard</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<div className="bg-surface-container-low text-secondary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="schedule" className="text-[14px]" />
<span>Open Mon - Sat: 08:00 - 18:30</span>
</div>
<div className="bg-surface-container-low text-secondary px-2 py-1 rounded-md flex items-center gap-1 font-label-sm text-label-sm">
<Icon name="distance" className="text-[14px]" />
<span>4.5 km away</span>
</div>
</div>
</div>
</div>
<div className="fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-gutter py-space-sm pb-safe z-40">
<div className="flex flex-col gap-space-xs max-w-lg mx-auto">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5 min-w-0">
<span className="w-2 h-2 rounded-full bg-primary-container flex-shrink-0"></span>
<span className="font-label-md text-label-md text-on-surface truncate">William St Central Hub #04</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface font-extrabold flex-shrink-0">UGX 2,500</span>
</div>
<button className="w-full bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold py-3.5 px-4 rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button" onClick={() => alertToast('Action triggered')}>
<span>Confirm This Pickup Station</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>
</div>
</div>
</div></main>
    </div>
  );
};

export default Screen;
