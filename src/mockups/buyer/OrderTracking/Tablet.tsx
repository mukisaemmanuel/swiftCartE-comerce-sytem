// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/order_tracking_milestone_timeline_tablet/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full max-w-7xl mx-auto px-margin flex flex-col justify-between pt-space-xs pb-space-xs"><div className="flex items-center justify-between gap-space-sm h-14"><div className="flex items-center gap-space-md shrink-0"><div className="flex items-center gap-space-xs cursor-pointer"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight hidden sm:inline">SwiftCart</span></div><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface cursor-pointer hover:bg-surface-container transition-colors"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left leading-tight"><span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Deliver To</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[130px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px] text-secondary" /></div></div><div className="flex-1 max-w-md mx-space-xs"><div className="flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><div className="flex items-center gap-1 pl-space-sm pr-space-xs text-secondary shrink-0 cursor-pointer border-r border-outline-variant/40"><span className="font-label-md text-label-md font-semibold text-on-surface-variant">All</span><Icon name="arrow_drop_down" className="text-[16px]" /></div><input className="w-full bg-transparent px-space-sm py-1 text-on-surface placeholder:text-secondary font-body-md text-body-md focus:outline-none" placeholder="Search verified items in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-9 px-space-md rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden md:flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold"><Icon name="bolt" className="text-[16px] text-on-tertiary-fixed" /><span>Kampala Same-Day</span></div><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="saved-items" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center leading-none">4</span></a><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="shopping-cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="font-label-md text-label-md text-on-surface hidden lg:inline font-bold">Sarah</span></div></div></div><nav className="flex items-center gap-space-md overflow-x-auto h-10 border-t border-surface-container-high/60 scrollbar-none" data-active-classes="text-primary font-bold border-b-2 border-primary"><a aria-current="page" className="whitespace-nowrap transition-colors py-1 text-primary font-bold border-b-2 border-primary" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="phones-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="electronics-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="home-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto w-full px-margin py-space-md">

<div className="flex flex-col gap-space-xs mb-space-md">
<nav className="flex items-center gap-2 font-label-md text-label-md text-secondary">
<a className="hover:text-primary transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Home</a>
<Icon name="chevron_right" className="text-[14px]" />
<a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>My Orders</a>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface-variant font-medium">Order #SC-ORD-9488</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-primary font-bold">Track Delivery</span>
</nav>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pt-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold bg-primary-fixed px-2 py-0.5 rounded">Express Boda Courier</span>
<span className="font-label-sm text-label-sm text-secondary">ID: 9488-UG-KLA</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mt-0.5 tracking-tight">Tracking Delivery #SC-ORD-9488</h1>
</div>

<div className="inline-flex items-center gap-space-sm px-space-md py-2 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed shadow-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
</span>
<span className="font-label-md text-label-md font-bold tracking-wide">MTN MoMo Escrow Locked</span>
</div>
</div>
</div>

<div className="w-full mb-space-lg rounded-xl bg-gradient-to-r from-on-secondary-fixed via-inverse-surface to-on-secondary-fixed text-inverse-on-surface p-space-md shadow-md relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm relative z-10">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md">
<Icon name="electric_moped" className="text-[28px]" />
</div>
<div>
<div className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-bold">Live Estimated Arrival</div>
<div className="font-headline-sm text-headline-sm text-inverse-on-surface font-extrabold flex items-center gap-2">
<span>15:30 EAT (Today)</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-primary-container/90 text-on-primary font-bold">18 Mins Left</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md bg-surface-container-lowest/10 backdrop-blur-sm px-space-md py-space-xs rounded-lg self-start sm:self-auto">
<div className="text-left sm:text-right">
<div className="font-label-sm text-label-sm text-secondary-fixed">Destination Hub / Drop</div>
<div className="font-label-md text-label-md text-inverse-on-surface font-semibold truncate max-w-[200px]">Acacia Mall, Kisementi, Wing B</div>
</div>
<Icon name="pin_drop" className="text-primary-container text-[22px]" />
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Milestone Progress</h2>
<p className="font-body-sm text-body-sm text-secondary">Real-time GPS dispatch &amp; courier verification chain</p>
</div>
<span className="font-label-sm text-label-sm font-bold px-2 py-1 bg-surface-container rounded text-on-surface">Step 4 of 5</span>
</div>

<div className="relative pl-6 space-y-space-lg before:content-[''] before:absolute before:left-[17px] before:top-3 before:bottom-4 before:w-[2px] before:bg-surface-container-highest">

<div className="relative flex items-start gap-space-md group">
<div className="absolute -left-6 top-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest shadow-sm">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex-1 bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Order Placed &amp; Payment Verified</span>
<span className="font-label-sm text-label-sm font-bold text-secondary">14:22 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  MTN MoMo Escrow Lock <span className="font-bold text-on-surface">UGX 388,500</span> confirmed. Funds held safe until hand-off verification.
                </p>
<div className="mt-1.5 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="lock" className="text-[14px] text-tertiary" />
<span>Ref #MTN-8819234</span>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md group">
<div className="absolute -left-6 top-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest shadow-sm">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex-1 bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Items Picked &amp; Consolidated</span>
<span className="font-label-sm text-label-sm font-bold text-secondary">14:35 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  2 packages consolidated from Pioneer Mall &amp; William St merchant points into SwiftCart Courier Staging Bay 3.
                </p>
<div className="mt-1.5 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="inventory_2" className="text-[14px] text-tertiary" />
<span>Hub Inspection Passed</span>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md group">
<div className="absolute -left-6 top-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest shadow-sm">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex-1 bg-surface-container-low p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Handed to SwiftBoda Courier</span>
<span className="font-label-sm text-label-sm font-bold text-secondary">14:48 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Courier bag sealed with Tamper Seal <span className="font-bold text-on-surface">#SC-TS-4091</span>. Supervised and checked by Hub Lead Kato.
                </p>
<div className="mt-1.5 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="verified" className="text-[14px] text-tertiary" />
<span>Physical Seal Intact</span>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="absolute -left-6 top-0.5 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-primary-fixed shadow-md animate-pulse">
<Icon name="navigation" className="text-[16px]" />
</div>
<div className="flex-1 bg-surface-container-high/60 p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">Out for Delivery</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase animate-pulse">Live</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary">15:02 EAT</span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-1.5 font-medium">
                  Rider Mukasa en route. Current location: <span className="font-bold text-primary">Kira Road near Acacia Mall roundabout</span>.
                </p>

<div className="mt-space-sm grid grid-cols-2 gap-space-xs bg-surface-container-lowest p-space-xs rounded-lg">
<div className="flex items-center gap-1.5 text-secondary">
<Icon name="speed" className="text-[16px] text-primary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">32 km/h</span>
<span className="font-body-sm text-body-sm">Avg Urban Speed</span>
</div>
<div className="flex items-center gap-1.5 text-secondary">
<Icon name="battery_charging_full" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">88%</span>
<span className="font-body-sm text-body-sm">Courier Device</span>
</div>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md opacity-85">
<div className="absolute -left-6 top-0.5 w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="key" className="text-[14px]" />
</div>
<div className="flex-1 bg-surface-container-low/70 p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-secondary">Handover &amp; OTP Inspection</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Expected ~15:30</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Inspect packages physically. Share your 6-digit release PIN with Rider Mukasa only after you verify the tamper seal.
                </p>

<div className="mt-space-sm inline-flex items-center gap-space-sm p-space-xs px-space-sm bg-surface-container-lowest rounded-lg shadow-xs">
<span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Release Escrow PIN:</span>
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">4</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">0</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">9</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">8</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">8</span>
<span className="px-1.5 py-0.5 rounded bg-primary-fixed font-headline-sm text-headline-sm font-black text-on-primary-fixed tracking-widest">1</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center gap-space-sm mb-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<Icon name="shield_person" className="text-[20px]" />
</div>
<div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Uganda Buyer Escrow Safeguard</h3>
<p className="font-body-sm text-body-sm text-secondary">Enforced under SwiftCart MoMo Protection Standard</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs">
<Icon name="verified" className="text-primary text-[20px] mt-0.5" />
<div>
<div className="font-label-md text-label-md text-on-surface font-bold">Tamper Seal Verification</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Confirm seal tag <strong className="text-on-surface">#SC-TS-4091</strong> is securely unbroken before communicating your PIN.
                </p>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs">
<Icon name="assignment_return" className="text-tertiary-container text-[20px] mt-0.5" />
<div>
<div className="font-label-md text-label-md text-on-surface font-bold">Zero Risk Escrow Guarantee</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  If contents appear opened or damaged, refuse immediately. MTN/Airtel automatically refunds to your wallet in 10 mins.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">

<div className="relative w-full h-52 bg-surface-container-high overflow-hidden" data-location="Acacia Mall, Kampala, Uganda" style={{}}>
<div className="w-full h-full bg-cover bg-center" data-alt="Stylized top-down GPS map preview of central Kampala Uganda showing Kira Road and Acacia Mall intersection with route line overlay in warm sunlight." style={{"backgroundImage":"url('/images/d70f6cbea92ae91b.webp')"}}></div>

<div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-space-xs py-1 rounded shadow-sm flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm">
<Icon name="near_me" className="text-[14px] text-primary" />
<span className="font-bold">Kira Rd → Acacia Ave (1.4 km to go)</span>
</div>
<div className="absolute bottom-space-xs right-space-xs">
<button className="bg-surface-container-lowest/90 hover:bg-surface-container-lowest backdrop-blur-md p-1.5 rounded-lg shadow-sm text-on-surface flex items-center justify-center transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="fullscreen" className="text-[18px]" />
</button>
</div>
</div>

<div className="p-space-md">
<div className="flex items-start justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of Mukasa Brian, an official SwiftCart motorcycle courier in Kampala wearing a branded high-visibility orange delivery jacket and helmet." src={`${assetBase}/images/b9ad0a266526d891.webp`} />
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[10px] ring-2 ring-surface-container-lowest">
<Icon name="check" className="text-[12px]" />
</div>
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Mukasa Brian</h4>
<span className="px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed rounded font-label-sm text-label-sm font-bold">Top Courier</span>
</div>
<div className="flex items-center gap-2 mt-0.5 text-secondary font-body-sm text-body-sm">
<span className="flex items-center text-amber-600 font-bold">
<Icon name="star" className="text-[14px] fill-current" /> 4.9
                    </span>
<span>•</span>
<span>1,420 trips</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Vehicle</span>
<div className="font-label-md text-label-md font-bold text-on-surface">Bajaj Boxer</div>
<div className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface-variant inline-block mt-0.5">UEF 842X</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-space-xs">
<button className="h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px] text-tertiary" />
<span>Call Rider</span>
</button>
<button className="h-10 px-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container flex items-center justify-center gap-1.5 font-label-md text-label-md font-bold transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px] text-tertiary-container" />
<span>WhatsApp</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Consolidated Manifest</h3>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded font-semibold">2 Packages • 1.2 kg</span>
</div>
<div className="space-y-space-xs mt-space-sm">

<div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-low">
<img className="w-12 h-12 rounded object-cover shrink-0" data-alt="Premium SoundCore Space One active noise cancelling wireless headphones in matte black packaging on clean product backdrop." src={`${assetBase}/images/ec9035a019778f02.webp`} />
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm px-1 bg-surface-container text-secondary font-bold rounded">Pkg A</span>
<span className="font-body-sm text-body-sm text-secondary truncate">SoundCore Uganda</span>
</div>
<div className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Space One ANC Headphones</div>
<div className="font-label-sm text-label-sm text-primary font-semibold">UGX 310,000</div>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-low">
<img className="w-12 h-12 rounded object-cover shrink-0" data-alt="Baseus 65W GaN dual fast wall charger block retail box showing compact sleek design." src={`${assetBase}/images/11d89000334d9fd2.webp`} />
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm px-1 bg-surface-container text-secondary font-bold rounded">Pkg B</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Simba Telecom Store</span>
</div>
<div className="font-label-md text-label-md font-bold text-on-surface truncate">Baseus 65W GaN Dual Fast Charger</div>
<div className="font-label-sm text-label-sm text-primary font-semibold">UGX 78,500</div>
</div>
</div>
</div>

<div className="mt-space-sm pt-space-xs bg-surface-container-low/50 p-space-sm rounded-lg flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Total Escrow Value</span>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">UGX 388,500</span>
<div className="font-label-sm text-label-sm text-tertiary font-bold flex items-center justify-end gap-1">
<Icon name="lock" className="text-[14px]" />
<span>Protected Delivery</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="map" className="text-[20px]" />
<span>Open Full Map Tracking</span>
</button>
<button className="w-full h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_note" className="text-[18px]" />
<span>Change Delivery Notes / Gate Pass</span>
</button>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-lowest mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg border-b border-surface-container-high"><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="verified_user" className="text-[32px] text-tertiary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</div><div className="font-body-sm text-body-sm text-secondary">100% payout security until delivery is confirmed</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="two_wheeler" className="text-[32px] text-primary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</div><div className="font-body-sm text-body-sm text-secondary">Rapid localized urban courier network</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="replay" className="text-[32px] text-tertiary" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</div><div className="font-body-sm text-body-sm text-secondary">Drop off returns at any verified hub in Uganda</div></div></div></div><div className="py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-secondary"><div className="flex flex-wrap items-center justify-center gap-space-md"><a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-primary transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="hover:text-primary transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="hover:text-primary transition-colors font-bold text-on-surface" data-path="merchant-registration" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="text-center">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Tablet;
