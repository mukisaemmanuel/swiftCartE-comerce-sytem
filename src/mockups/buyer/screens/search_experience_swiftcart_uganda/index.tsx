// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/search_experience_swiftcart_uganda/code.html
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
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)]"><div className="h-16 px-space-sm flex items-center gap-space-xs"><button aria-label="Back" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><div className="flex-1 flex items-center h-11 px-space-sm bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.05)]"><Icon name="search" className="text-[20px] text-outline mr-2" /><input className="flex-1 bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-outline" placeholder="Search Kampala shops, electronics..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><div className="flex items-center gap-1"><button aria-label="Voice Search" className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary" type="button" onClick={() => alertToast('Action triggered')}><Icon name="mic" className="text-[20px]" /></button><button aria-label="Camera Search" className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary" type="button" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button></div></div><div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ml-1"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={`${assetBase}/images/a0089007abbe614b.webp`} /></div><span className="hidden">Search Results</span></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-safe">

<section className="px-margin pt-space-md pb-space-sm">
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-sm flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
<Icon name="search" className="text-[18px]" />
</div>
<div className="flex-1 flex items-center min-w-0">
<span className="font-body-lg text-body-lg text-on-surface font-semibold tracking-tight">wirel</span>
<span className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-pulse"></span>
</div>
<button aria-label="Clear input" className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[16px]" />
</button>
<button aria-label="Visual Search" className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[18px]" />
</button>
<button aria-label="Voice Search" className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="mic" className="text-[18px]" />
</button>
</div>
</section>

<section className="px-margin mb-space-lg">
<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">

<div className="px-space-md pt-space-md pb-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Instant Matches</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Live in Kampala
        </span>
</div>

<div className="flex flex-col">
<a className="px-space-md py-space-sm hover:bg-surface-container-low flex items-center justify-between group transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="north_west" className="text-[18px] text-outline group-hover:text-primary shrink-0" />
<div className="truncate">
<span className="font-body-md text-body-md font-bold text-on-surface">wireless</span>
<span className="font-body-md text-body-md text-on-surface"> earbuds anc pro</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full shrink-0">In Electronics</span>
</a>
<a className="px-space-md py-space-sm hover:bg-surface-container-low flex items-center justify-between group transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="north_west" className="text-[18px] text-outline group-hover:text-primary shrink-0" />
<div className="truncate">
<span className="font-body-md text-body-md font-bold text-on-surface">wireless</span>
<span className="font-body-md text-body-md text-on-surface"> solar power bank</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full shrink-0">Solar Express</span>
</a>
<a className="px-space-md py-space-sm hover:bg-surface-container-low flex items-center justify-between group transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm min-w-0">
<Icon name="north_west" className="text-[18px] text-outline group-hover:text-primary shrink-0" />
<div className="truncate">
<span className="font-body-md text-body-md font-bold text-on-surface">wireless</span>
<span className="font-body-md text-body-md text-on-surface"> charging pad 15w</span>
</div>
</div>
<Icon name="chevron_right" className="text-[18px] text-outline" />
</a>
</div>

<div className="bg-surface-container-low px-space-md py-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-space-xs block">Suggested Categories</span>
<div className="flex flex-col gap-1.5">
<a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="devices_other" className="text-[16px] text-secondary" />
<span className="font-label-md text-label-md text-secondary">Electronics</span>
<span className="text-outline text-body-sm">&gt;</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Audio &amp; Headphones</span>
</a>
<a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors py-0.5" href="#" onClick={() => alertToast('Action triggered')}>
<Icon name="mouse" className="text-[16px] text-secondary" />
<span className="font-label-md text-label-md text-secondary">Computer Accessories</span>
<span className="text-outline text-body-sm">&gt;</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Wireless Mice</span>
</a>
</div>
</div>

<div className="p-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-space-xs block">Official &amp; Verified Hubs</span>
<div className="flex flex-col gap-2">

<a className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-sm text-headline-sm">
                S
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 truncate">
<span className="font-label-md text-label-md text-on-surface truncate">SoundCore Uganda Official Store</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Pioneer Mall, Kampala</span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-tertiary">Swift Escrow</span>
</div>
</div>
</div>
<button className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shrink-0" onClick={() => alertToast('Action triggered')}>Visit</button>
</a>

<a className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm">
                A
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 truncate">
<span className="font-label-md text-label-md text-on-surface truncate">Anker Flagship Store</span>
<Icon name="verified" className="text-[16px] text-tertiary" />
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Acacia Mall Hub</span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">4.9 ★ (840)</span>
</div>
</div>
</div>
<button className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shrink-0" onClick={() => alertToast('Action triggered')}>Visit</button>
</a>
</div>
</div>
</div>
</section>

<div className="px-margin flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<Icon name="history" className="text-[20px] text-secondary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Searches</h2>
</div>
<button className="font-label-md text-label-md text-primary hover:underline" id="clear-all-recents" type="button" onClick={() => alertToast('Action triggered')}>Clear all</button>
</div>
<div className="flex flex-wrap gap-2" id="recent-search-tags">
<div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface">
<Icon name="schedule" className="text-[14px] text-outline" />
<span className="font-body-sm text-body-sm font-medium">AirPods Pro</span>
<button aria-label="Remove search AirPods Pro" className="text-outline hover:text-on-surface ml-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[14px]" />
</button>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface">
<Icon name="schedule" className="text-[14px] text-outline" />
<span className="font-body-sm text-body-sm font-medium">Solar panels 300W</span>
<button aria-label="Remove search Solar panels 300W" className="text-outline hover:text-on-surface ml-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[14px]" />
</button>
</div>
<div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full text-on-surface">
<Icon name="schedule" className="text-[14px] text-outline" />
<span className="font-body-sm text-body-sm font-medium">MTN router 4G</span>
<button aria-label="Remove search MTN router 4G" className="text-outline hover:text-on-surface ml-0.5" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[14px]" />
</button>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<Icon name="local_fire_department" className="text-[20px] text-primary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Trending in Uganda</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full">Updated 10m ago</span>
</div>
<div className="flex flex-col gap-2">
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-primary font-bold w-4">1</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Hisense Smart TV</span>
</div>
<div className="flex items-center gap-1.5 text-primary">
<Icon name="trending_up" className="text-[14px]" />
<span className="font-label-sm text-label-sm">High Demand</span>
</div>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-primary font-bold w-4">2</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Infinix Note 40</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full">MTN Bundled</span>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-on-surface-variant font-bold w-4">3</span>
<span className="font-body-md text-body-md text-on-surface">Sneakers Kampala</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Kikuubo Hub</span>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-on-surface-variant font-bold w-4">4</span>
<span className="font-body-md text-body-md text-on-surface">Blender 2L</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Kitchen deals</span>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-on-surface-variant font-bold w-4">5</span>
<span className="font-body-md text-body-md text-on-surface">Air fryer</span>
</div>
<div className="flex items-center gap-1 text-primary">
<Icon name="local_fire_department" className="text-[14px]" />
<span className="font-label-sm text-label-sm">Hot</span>
</div>
</a>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Explore Categories</h2>
<a className="font-label-md text-label-md text-primary hover:underline" href="#" onClick={() => alertToast('Action triggered')}>View all</a>
</div>
<div className="grid grid-cols-2 gap-space-sm">

<a className="bg-surface-container-low hover:bg-surface-container p-space-sm rounded-xl flex items-center gap-2.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<Icon name="smartphone" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Phones &amp; Tablets</span>
<span className="font-label-sm text-label-sm text-outline">1,400+ listings</span>
</div>
</a>

<a className="bg-surface-container-low hover:bg-surface-container p-space-sm rounded-xl flex items-center gap-2.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm shrink-0">
<Icon name="solar_power" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Solar &amp; Backup</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Kampala Hot</span>
</div>
</a>

<a className="bg-surface-container-low hover:bg-surface-container p-space-sm rounded-xl flex items-center gap-2.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm shrink-0">
<Icon name="kitchen" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Home &amp; Kitchen</span>
<span className="font-label-sm text-label-sm text-outline">Express dispatch</span>
</div>
</a>

<a className="bg-surface-container-low hover:bg-surface-container p-space-sm rounded-xl flex items-center gap-2.5 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm shrink-0">
<Icon name="checkroom" className="text-[20px]" />
</div>
<div className="min-w-0">
<span className="font-label-md text-label-md text-on-surface block truncate">Fashion &amp; Style</span>
<span className="font-label-sm text-label-sm text-outline">Local boutiques</span>
</div>
</a>

<a className="col-span-2 bg-surface-container-low hover:bg-surface-container p-space-sm rounded-xl flex items-center justify-between transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm shrink-0">
<Icon name="spa" className="text-[20px]" />
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block">Beauty &amp; Skincare</span>
<span className="font-label-sm text-label-sm text-outline">100% genuine guaranteed or refund</span>
</div>
</div>
<Icon name="arrow_forward" className="text-[18px] text-outline pr-1" />
</a>
</div>
</section>

<section className="bg-gradient-to-br from-primary-fixed to-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-xl">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md shrink-0">
<Icon name="mic_double" className="text-[26px]" />
</div>
<div className="flex-1">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-headline-sm text-headline-sm text-on-primary-fixed">Can't describe it?</span>
<span className="text-xs bg-primary text-on-primary font-bold px-1.5 py-0.5 rounded-full">New</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary-fixed-variant mb-space-sm">
            Snap a photo of any item or speak in <strong>Luganda</strong> or <strong>English</strong> to quickly search through 50,000+ local products.
          </p>
<div className="flex items-center gap-2">
<button className="bg-primary text-on-primary font-label-sm text-label-sm px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="photo_camera" className="text-[16px]" />
              Photo Match
            </button>
<button className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="mic" className="text-[16px] text-primary" />
              Voice Search
            </button>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
