// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/live_boda_rider_tracking_tablet/code.html
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
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full max-w-7xl mx-auto px-margin flex flex-col justify-between pt-space-xs pb-space-xs"><div className="flex items-center justify-between gap-space-sm h-14"><div className="flex items-center gap-space-md shrink-0"><div className="flex items-center gap-space-xs cursor-pointer"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight hidden sm:inline">SwiftCart</span></div><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface cursor-pointer hover:bg-surface-container transition-colors"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left leading-tight"><span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Deliver To</span><span className="font-label-md text-label-md font-semibold text-on-surface truncate max-w-[130px]">Kampala Central</span></div><Icon name="expand_more" className="text-[16px] text-secondary" /></div></div><div className="flex-1 max-w-md mx-space-xs"><div className="flex items-center bg-surface-container-low rounded-lg p-1 focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all"><div className="flex items-center gap-1 pl-space-sm pr-space-xs text-secondary shrink-0 cursor-pointer border-r border-outline-variant/40"><span className="font-label-md text-label-md font-semibold text-on-surface-variant">All</span><Icon name="arrow_drop_down" className="text-[16px]" /></div><input className="w-full bg-transparent px-space-sm py-1 text-on-surface placeholder:text-secondary font-body-md text-body-md focus:outline-none" placeholder="Search verified items in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="h-9 px-space-md rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden md:flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold"><Icon name="bolt" className="text-[16px] text-on-tertiary-fixed" /><span>Kampala Same-Day</span></div><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="saved-items" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center leading-none">4</span></a><a className="relative p-space-xs text-on-surface hover:text-primary transition-colors flex items-center justify-center" data-path="shopping-cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-[24px]" /><span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold leading-none">3</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="font-label-md text-label-md text-on-surface hidden lg:inline font-bold">Sarah</span></div></div></div><nav className="flex items-center gap-space-md overflow-x-auto h-10 border-t border-surface-container-high/60 scrollbar-none" data-active-classes="text-primary font-bold border-b-2 border-primary"><a aria-current="page" className="whitespace-nowrap transition-colors py-1 text-primary font-bold border-b-2 border-primary" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="phones-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="electronics-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="home-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-md text-label-md whitespace-nowrap text-on-surface-variant hover:text-primary transition-colors py-1" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-sm">

<div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="arrow_back" className="text-[18px]" />
<span>Back to Order #SC-ORD-9488</span>
</button>
<div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
</span>
<span className="font-bold tracking-tight">LIVE GPS TRACKING • Boda En Route</span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-primary-fixed text-on-primary-fixed px-space-md py-1.5 rounded-lg shadow-sm">
<Icon name="schedule" className="text-[20px] text-primary" />
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm uppercase font-bold text-on-primary-fixed-variant">Estimated Handover</span>
<span className="font-label-lg text-label-lg font-bold text-primary">Arriving in 14 mins (15:28 EAT)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-7 xl:col-span-7 flex flex-col relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-md">

<div className="relative w-full h-[580px] lg:h-[720px] bg-slate-900 overflow-hidden select-none">

<svg className="absolute inset-0 w-full h-full object-cover opacity-90" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="routeGradient" x1="0%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" stopColor="#ff5722"></stop>
<stop offset="100%" stopColor="#00a572"></stop>
</linearGradient>
<filter height="200%" id="riderPulse" width="200%" x="-50%" y="-50%">
<feDropShadow dx="0" dy="4" flood-color="#ff5722" flood-opacity="0.6" stdDeviation="6"></feDropShadow>
</filter>
</defs>

<rect fill="#131b2e" height="900" width="800"></rect>

<path d="M 320 420 C 370 380, 480 390, 510 470 C 540 550, 480 620, 410 640 C 350 650, 310 590, 300 520 Z" fill="#00311f" opacity="0.65"></path>
<text fill="#4edea3" font-size="13" font-weight="700" letter-spacing="1" opacity="0.7" x="380" y="520">UGANDA GOLF CLUB</text>

<g opacity="0.8" stroke="#233144" strokeWidth="1.8">
<line x1="80" x2="340" y1="120" y2="120"></line>
<line x1="120" x2="420" y1="240" y2="240"></line>
<line x1="450" x2="720" y1="140" y2="140"></line>
<line x1="560" x2="780" y1="280" y2="280"></line>
<line x1="180" x2="310" y1="520" y2="520"></line>
<line x1="140" x2="480" y1="740" y2="740"></line>
<line x1="500" x2="740" y1="670" y2="670"></line>
<line x1="580" x2="760" y1="790" y2="790"></line>

<line x1="220" x2="380" y1="80" y2="350"></line>
<line x1="600" x2="680" y1="80" y2="380"></line>
<line x1="200" x2="340" y1="600" y2="860"></line>
</g>


<path d="M 100 820 L 450 780 L 780 720" fill="none" stroke="#3f465c" strokeLinecap="round" strokeWidth="8"></path>
<text fill="#bec6e0" font-size="11" font-weight="600" x="580" y="745">Jinja Road</text>

<path d="M 280 820 L 330 630 L 350 490 L 390 350" fill="none" stroke="#565e74" strokeLinecap="round" strokeWidth="7"></path>
<text fill="#bec6e0" font-size="11" font-weight="600" transform="rotate(-75 260 610)" x="260" y="610">Yusuf Lule Road</text>

<path d="M 390 350 L 480 300 L 590 270 L 730 250" fill="none" opacity="0.8" stroke="#ffb5a0" strokeLinecap="round" strokeWidth="7"></path>
<text fill="#ffdbd1" font-size="11" font-weight="700" x="440" y="325">Kira Road</text>

<path d="M 480 300 L 490 200 L 530 110" fill="none" stroke="#565e74" strokeLinecap="round" strokeWidth="6"></path>
<text fill="#bec6e0" font-size="11" font-weight="600" transform="rotate(-80 440 210)" x="440" y="210">Acacia Ave (John Babiiha)</text>

<path className="animate-pulse" d="M 280 820 L 330 630 L 350 490 L 390 350 L 460 310 L 480 300 L 490 200" fill="none" stroke="url(#routeGradient)" strokeDasharray="8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>

<g transform="translate(280, 820)">
<circle fill="#131b2e" r="9" stroke="#565e74" strokeWidth="2"></circle>
<circle fill="#ff5722" r="5"></circle>
<rect fill="#0d1c2f" height="26" opacity="0.9" rx="4" width="190" x="-95" y="14"></rect>
<text fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle" x="0" y="31">SoundCore Hub • William St</text>
</g>

<g transform="translate(490, 200)">
<circle className="animate-ping" fill="#00a572" opacity="0.3" r="14"></circle>
<circle fill="#006c49" r="10"></circle>
<path d="M -4 -4 L 4 0 L -4 4 Z" fill="#ffffff"></path>

<rect fill="#0d1c2f" height="42" rx="6" stroke="#00a572" strokeWidth="1.5" width="170" x="-85" y="-55"></rect>
<text fill="#6ffbbe" font-size="11" font-weight="800" text-anchor="middle" x="0" y="-38">PLOT 14 ACACIA AVE</text>
<text fill="#eff4ff" font-size="9.5" font-weight="600" text-anchor="middle" x="0" y="-22">Customer Delivery Drop-off</text>
<polygon fill="#00a572" points="0,-13 -6,-5 6,-5"></polygon>
</g>

<g filter="url(#riderPulse)" transform="translate(430, 325)">
<circle className="animate-ping" fill="#ff5722" opacity="0.25" r="22"></circle>
<circle fill="#ff5722" r="16" stroke="#ffffff" strokeWidth="2.5"></circle>

<path d="M -6 4 C -6 6 -4 7 -2 7 L 3 7 C 5 7 7 5 7 3 L 7 -1 C 7 -4 4 -6 1 -6 L -3 -6 C -5 -6 -6 -4 -6 -2 Z" fill="#ffffff"></path>
<circle cx="2" cy="-2" fill="#ff5722" r="2"></circle>

<rect fill="#0d1c2f" height="26" opacity="0.95" rx="5" stroke="#ff5722" strokeWidth="1" width="100" x="24" y="-14"></rect>
<text fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle" x="74" y="3">MUKASA (34 km/h)</text>
</g>

<text fill="#bec6e0" font-size="12" font-weight="700" letter-spacing="2" opacity="0.4" x="170" y="700">NAKASERO HILL</text>
<text fill="#bec6e0" font-size="12" font-weight="700" letter-spacing="2" opacity="0.4" x="590" y="420">KOLOLO RESIDENTIAL</text>
<text fill="#4edea3" font-size="11" font-weight="700" opacity="0.8" x="550" y="190">Acacia Mall Hub</text>
<text fill="#bec6e0" font-size="12" font-weight="700" letter-spacing="2" opacity="0.4" x="130" y="860">KAMPALA CBD</text>
</svg>

<div className="absolute top-space-sm left-space-sm right-space-sm flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto flex items-center gap-2 bg-surface-container-lowest/95 backdrop-blur-md px-space-sm py-1.5 rounded-lg shadow-sm">
<Icon name="traffic" className="text-[18px] text-tertiary-container" />
<span className="font-label-md text-label-md text-on-surface font-semibold">Moderate traffic on Kira Rd • Smooth transit</span>
</div>

<div className="pointer-events-auto flex items-center gap-1 bg-surface-container-lowest/95 backdrop-blur-md p-1 rounded-lg shadow-sm">
<button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container text-on-surface transition-colors" id="zoomInBtn" title="Zoom in" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[18px]" />
</button>
<button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-container text-on-surface transition-colors" id="zoomOutBtn" title="Zoom out" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[18px]" />
</button>
<div className="h-4 w-px bg-surface-container-high mx-0.5"></div>
<button className="px-2 h-8 rounded bg-primary-fixed text-primary flex items-center gap-1 font-label-sm text-label-sm font-bold hover:bg-primary-fixed-dim transition-colors" id="centerRiderBtn" title="Center Rider" onClick={() => alertToast('Action triggered')}>
<Icon name="two_wheeler" className="text-[16px]" />
<span>Rider</span>
</button>
<button className="px-2 h-8 rounded hover:bg-surface-container text-secondary flex items-center gap-1 font-label-sm text-label-sm font-semibold transition-colors" id="centerDestBtn" title="Center Acacia Mall" onClick={() => alertToast('Action triggered')}>
<Icon name="flag" className="text-[16px]" />
<span>Target</span>
</button>
</div>
</div>

<div className="absolute bottom-space-sm left-space-sm right-space-sm pointer-events-auto">
<div className="bg-inverse-surface/95 backdrop-blur-md text-inverse-on-surface p-space-sm rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="speed" className="text-[20px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold block">Current Speed</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-inverse-on-surface">34 <span className="font-body-sm text-body-sm text-secondary-fixed">km/h</span></span>
</div>
</div>
<div className="h-8 w-px bg-surface-variant/20 hidden sm:block"></div>
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-surface-container-high/30 text-tertiary-fixed flex items-center justify-center shrink-0">
<Icon name="near_me" className="text-[20px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold block">Remaining Path</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-inverse-on-surface">1.8 <span className="font-body-sm text-body-sm text-secondary-fixed">km</span></span>
</div>
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest/10 px-space-sm py-1.5 rounded-lg">
<Icon name="navigation" className="text-[18px] text-tertiary-fixed animate-pulse" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Active Vector</span>
<span className="font-label-md text-label-md font-bold text-inverse-on-surface truncate max-w-[210px]">Kira Rd near Golf Club</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-sm bg-surface-container-low flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-secondary font-semibold">MTN MoMo Escrow Locked • Funds released upon delivery pin verification</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">1-Hour Kampala Guarantee</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-14 h-14 rounded-full object-cover shadow-sm bg-surface-container-high" data-alt="Close-up portrait of Mukasa Brian, an authorized Ugandan motorcycle courier smiling warmly wearing a certified safety orange SwiftCart branded riding jacket and professional helmet, natural outdoor daylight in Kampala." src={`${assetBase}/images/b5f30276dcb8346f.webp`} />
<div className="absolute -bottom-1 -right-1 bg-tertiary text-on-tertiary rounded-full p-0.5 shadow">
<Icon name="verified" className="text-[14px] block" />
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Mukasa Brian</h2>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Vetted</span>
</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-secondary">
<Icon name="star" className="text-[16px] text-amber-500 fill-1" />
<span className="font-bold text-on-surface">4.9</span>
<span>(1,420 boda deliveries)</span>
</div>
</div>
</div>

<span className="px-2 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-extrabold tracking-tight">VIP BODA</span>
</div>

<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-space-xs rounded-lg text-center">
<div className="flex flex-col p-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Motorcycle</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Bajaj 150cc</span>
</div>
<div className="flex flex-col p-1 bg-surface-container-lowest rounded shadow-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Plate Number</span>
<span className="font-label-md text-label-md font-bold text-primary truncate">UEF 842X</span>
</div>
<div className="flex flex-col p-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Helmet ID</span>
<span className="font-label-md text-label-md font-bold text-on-surface truncate">#44</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<a className="h-10 px-space-sm rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface flex items-center justify-center gap-2 font-label-md text-label-md font-bold transition-all" href="tel:+256701234567" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[18px] text-primary" />
<span>Direct Call</span>
</a>
<a className="h-10 px-space-sm rounded-lg bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center gap-2 font-label-md text-label-md font-bold transition-all" href="https://wa.me/256701234567" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px] text-on-tertiary-fixed" />
<span>WhatsApp</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="lock" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Secure Handover PIN</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-error-container text-on-error-container">Confidential</span>
</div>

<div className="flex items-center justify-center gap-1.5 sm:gap-2 my-1">
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">4</div>
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">0</div>
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">9</div>
<div className="w-2 flex items-center justify-center text-secondary font-bold">-</div>
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">8</div>
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">8</div>
<div className="w-10 h-12 rounded-lg bg-surface-container-low flex items-center justify-center font-price-display text-price-display text-on-surface font-extrabold shadow-sm">1</div>
</div>
<p className="font-body-sm text-body-sm text-secondary text-center px-space-xs">
            Provide this code to Mukasa <strong className="text-on-surface font-bold">ONLY</strong> after physical inspection of tamper-evident seal <strong className="text-primary font-bold">#SC-TS-4091</strong>.
          </p>
<button className="w-full h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-colors" id="showQrBtn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="qr_code_2" className="text-[20px]" />
<span>Show QR Code for Fast Scanner</span>
</button>

<div className="hidden flex-col items-center justify-center p-space-sm bg-surface-container-low rounded-lg transition-all" id="qrDropdown">
<div className="w-36 h-36 bg-surface-container-lowest p-2 rounded-lg shadow-inner flex items-center justify-center">

<svg className="w-32 h-32" fill="currentColor" viewBox="0 0 100 100">
<path d="M10 10h30v30H10zm6 6v18h18V16zm4 4h10v10H20zm40-10h30v30H60zm6 6v18h18V16zm4 4h10v10H70zM10 60h30v30H10zm6 6v18h18V66zm4 4h10v10H20zm45-6h5v5h-5zm10 0h15v5H75zm-15 10h10v5h-10zm20 0h5v10h-5zm-20 10h15v5H60zm20 5h10v5H80z" fill="#0d1c2f"></path>
</svg>
</div>
<span className="font-label-sm text-label-sm text-secondary mt-2">Scan with SwiftCart Rider App</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="location_on" className="text-[20px] text-tertiary" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Delivery Destination</span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" type="button" onClick={() => alertToast('Action triggered')}>Edit Instructions</button>
</div>
<div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-md text-label-md font-bold text-on-surface">Plot 14 Acacia Avenue, Kololo</span>
<span className="font-body-sm text-body-sm text-secondary">Directly opposite Acacia Mall main taxi dropoff, Kampala</span>
<div className="mt-2 pt-2 border-t border-surface-container-high/60 flex items-start gap-2">
<Icon name="speaker_notes" className="text-[16px] text-primary shrink-0 mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
                “Call on arrival at the security gate. Leave with receptionist (Sylvia) if I am temporarily away from the desk.”
              </p>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="support_agent" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">SwiftCart Dispatch Center</span>
<span className="font-body-sm text-body-sm text-secondary">24/7 Boda Operations Team</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-error font-label-md text-label-md font-bold hover:bg-error-container transition-colors shadow-xs" type="button" onClick={() => alertToast('Action triggered')}>
              Report Issue
            </button>
<a className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors shadow-xs flex items-center gap-1" href="tel:+256800220800" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[16px]" />
<span>Toll Free</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"><div className="max-w-7xl mx-auto px-margin py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg border-b border-surface-container-high"><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="verified_user" className="text-[32px] text-tertiary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</div><div className="font-body-sm text-body-sm text-secondary">100% payout security until delivery is confirmed</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="two_wheeler" className="text-[32px] text-primary-container" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</div><div className="font-body-sm text-body-sm text-secondary">Rapid localized urban courier network</div></div></div><div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg"><Icon name="replay" className="text-[32px] text-tertiary" /><div><div className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</div><div className="font-body-sm text-body-sm text-secondary">Drop off returns at any verified hub in Uganda</div></div></div></div><div className="py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-secondary"><div className="flex flex-wrap items-center justify-center gap-space-md"><a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-primary transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="hover:text-primary transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="hover:text-primary transition-colors font-bold text-on-surface" data-path="merchant-registration" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="text-center">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Screen;
