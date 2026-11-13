// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/buyer/live_boda_rider_tracking_desktop/code.html
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
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.06)]"><div className="bg-surface-container-high/60 border-b border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><div className="flex items-center gap-4"><span>Kampala Rapid Delivery: Central &amp; Greater Wakiso</span><span className="inline-block w-1 h-1 rounded-full bg-outline-variant"></span><span className="text-tertiary flex items-center gap-1 font-bold"><Icon name="verified_user" className="text-[14px]" />Swift Escrow Protected</span></div><div className="flex items-center gap-6"><a className="text-primary hover:text-on-surface transition-colors font-bold" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a><a className="text-on-surface-variant hover:text-on-surface transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help &amp; FAQ</a><span className="text-on-surface-variant font-medium">Uganda (UGX)</span></div></div></div><div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center gap-6 justify-between"><div className="flex items-center gap-3 shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/6666a05c76c4c201.webp`} /><span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-primary">SwiftCart</span></div><div className="flex-1 max-w-2xl mx-4"><div className="flex items-center h-11 bg-surface-container-lowest rounded-xl shadow-[0_1px_4px_rgba(14,27,77,0.04)] p-1"><div className="h-full px-3 flex items-center gap-1 text-on-surface font-label-md text-label-md shrink-0 cursor-pointer hover:bg-surface-container-low rounded-lg transition-colors"><span>All Categories</span><Icon name="arrow_drop_down" className="text-[16px] text-on-surface-variant" /></div><div className="w-[1px] h-5 bg-surface-variant shrink-0"></div><div className="flex-1 flex items-center px-3 gap-2"><Icon name="search" className="text-outline text-[18px]" /><input className="w-full bg-transparent border-none text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none" placeholder="Search products, safe electronic vendors, fresh produce..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /></div><button className="h-9 px-5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 shrink-0" onClick={() => alertToast('Action triggered')}><span>Search</span></button></div></div><div className="flex items-center gap-4 shrink-0"><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-faq" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="support_agent" className="text-[20px]" /><span>Support</span></a><a className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[20px]" /><span>Wishlist</span></a><a className="flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-high hover:bg-surface-variant rounded-xl transition-all" data-path="cart" href="#" onClick={() => alertToast('Action triggered')}><Icon name="shopping_bag" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant">UGX 0</span><span className="font-label-md text-label-md text-on-surface font-bold">0 Items</span></div></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div><div className="bg-surface border-t border-surface-variant/40"><div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between"><div className="flex items-center gap-2 text-on-surface font-label-md text-label-md cursor-pointer shrink-0"><Icon name="location_on" className="text-[18px] text-primary" /><span>Deliver to:</span><span className="font-bold text-on-surface">Kampala Central, Nakasero</span><Icon name="keyboard_arrow_down" className="text-[16px] text-outline" /></div><nav className="flex items-center gap-7 overflow-x-auto py-1" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors shrink-0 text-primary font-bold" data-path="home" href="#" onClick={() => alertToast('Action triggered')}>Home</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="categories" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}>All Categories</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="flash-deals" href="#" onClick={() => alertToast('Action triggered')}>Flash Deals</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="official-brand-stores" href="#" onClick={() => alertToast('Action triggered')}>Official Brand Stores</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="safeboda-delivery" href="#" onClick={() => alertToast('Action triggered')}>Same-Day SafeBoda</a><a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></nav></div></div></header><main className="w-full pt-35 bg-background flex-1"><div className="flex flex-col w-full relative">

<div className="relative w-full h-[calc(100vh-140px)] min-h-[720px] max-h-[960px] overflow-hidden bg-[#f4eee8] select-none">

<div className="absolute inset-0 w-full h-full overflow-hidden">

<svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient cx="50%" cy="50%" id="mapGlow" r="50%">
<stop offset="0%" stopColor="#fff8f2" stopOpacity="0.8"></stop>
<stop offset="100%" stopColor="#eee5dc" stopOpacity="1"></stop>
</radialGradient>
<filter height="140%" id="routeShadow" width="140%" x="-20%" y="-20%">
<feDropShadow dx="0" dy="4" flood-color="#da3700" flood-opacity="0.35" stdDeviation="6"></feDropShadow>
</filter>
<linearGradient id="routeGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#ff8a1f"></stop>
<stop offset="100%" stopColor="#da3700"></stop>
</linearGradient>
<pattern height="40" id="urbanGrid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e8dfd7" strokeWidth="0.75"></path>
</pattern>
</defs>

<rect fill="url(#mapGlow)" height="900" width="1440"></rect>
<rect fill="url(#urbanGrid)" height="900" width="1440"></rect>

<path d="M780,240 C840,220 920,260 980,310 C960,420 890,470 820,440 C760,410 740,300 780,240 Z" fill="#d9eedf" opacity="0.7"></path>
<path d="M1120,480 C1240,430 1340,490 1390,580 C1340,660 1210,690 1140,640 C1080,590 1060,520 1120,480 Z" fill="#d9eedf" opacity="0.6"></path>
<path d="M260,110 C360,80 430,140 460,220 C420,290 310,310 240,260 C190,210 200,140 260,110 Z" fill="#e3ebd9" opacity="0.8"></path>

<path d="M-50,220 L520,380 L880,360 L1490,440" stroke="#ffffff" strokeLinecap="round" strokeWidth="12"></path>
<path d="M-50,220 L520,380 L880,360 L1490,440" stroke="#ded4ca" strokeLinecap="round" strokeWidth="8"></path>
<path d="M480,-40 L520,380 L560,940" stroke="#ffffff" strokeLinecap="round" strokeWidth="14"></path>
<path d="M480,-40 L520,380 L560,940" stroke="#ded4ca" strokeLinecap="round" strokeWidth="9"></path>

<path d="M380,890 L760,620 L1180,520 L1480,480" stroke="#ffffff" strokeLinecap="round" strokeWidth="16"></path>
<path d="M380,890 L760,620 L1180,520 L1480,480" stroke="#d5c8be" strokeLinecap="round" strokeWidth="10"></path>

<path d="M720,210 Q830,280 910,240 T1040,330 T960,480" fill="none" stroke="#fdfbf7" strokeLinecap="round" strokeWidth="8"></path>
<path d="M680,330 Q770,390 850,340 T990,420" fill="none" stroke="#fdfbf7" strokeLinecap="round" strokeWidth="7"></path>
<path d="M830,120 L860,370 L790,560" stroke="#fdfbf7" strokeLinecap="round" strokeWidth="6"></path>
<path d="M960,210 L1080,340 L1020,530" stroke="#fdfbf7" strokeLinecap="round" strokeWidth="6"></path>

<rect fill="#eae1d7" height="70" opacity="0.85" rx="12" width="110" x="580" y="270"></rect>
<rect fill="#eae1d7" height="90" opacity="0.85" rx="14" width="90" x="710" y="420"></rect>
<rect fill="#eae1d7" height="80" opacity="0.85" rx="14" width="130" x="880" y="370"></rect>
<rect fill="#eae1d7" height="60" opacity="0.85" rx="10" width="100" x="630" y="580"></rect>
<rect fill="#eae1d7" height="110" opacity="0.85" rx="16" width="140" x="1030" y="240"></rect>

<text fill="#88796e" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" x="390" y="260">KISEMENTI HUB</text>
<text fill="#9e8f84" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1" x="330" y="340">ACACIA AVENUE</text>
<text fill="#756458" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" letter-spacing="2" x="820" y="190">KOLOLO HILL</text>
<text fill="#88796e" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" x="960" y="610">LUGOGO BYPASS</text>
<text fill="#9e8f84" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1" x="1220" y="470">JINJA ROAD CORRIDOR</text>
<text fill="#a49386" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" x="890" y="440">TotalEnergies Acacia 0.4km</text>


<path d="M 430,360 Q 560,370 650,420 T 820,530 L 910,480" fill="none" filter="url(#routeShadow)" opacity="0.95" stroke="#da3700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7"></path>

<path className="animate-pulse" d="M 430,360 Q 560,370 650,420 T 820,530 L 910,480" fill="none" stroke="#ffd5c8" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>

<path d="M 910,480 L 950,440 Q 980,390 1020,360 L 1060,340" fill="none" opacity="0.6" stroke="#505b90" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="5"></path>

<g transform="translate(430, 360)">
<circle fill="#ffffff" filter="url(#routeShadow)" r="18"></circle>
<circle fill="#505b90" r="12"></circle>
<circle fill="#ffffff" r="5"></circle>
</g>

<g transform="translate(1060, 340)">

<circle fill="#006947" opacity="0.2" r="26">
<animate attributeName="r" dur="2.4s" repeatCount="indefinite" values="16;38;16"></animate>
<animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values="0.35;0;0.35"></animate>
</circle>
<circle fill="#006947" filter="url(#routeShadow)" r="16"></circle>
<circle fill="#ffffff" r="6"></circle>
</g>
</svg>

<div className="absolute left-[410px] top-[305px] transform -translate-x-1/2 -translate-y-full pointer-events-none">
<div className="bg-surface-container-lowest px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 border-none">
<div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Dispatched From</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold">Acacia Mall Hub (SoundCore)</span>
</div>
</div>
<div className="w-3 h-3 bg-surface-container-lowest rotate-45 mx-auto -mt-1.5 shadow-md"></div>
</div>

<div className="absolute left-[910px] top-[480px] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 pointer-events-auto cursor-pointer group" id="riderMapMarker" style={{"left":"1000px","top":"382px"}}>

<div className="absolute -inset-4 rounded-full bg-primary/20 animate-ping pointer-events-none"></div>
<div className="absolute -inset-2 rounded-full bg-primary/30"></div>

<div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff8a1f] to-primary flex items-center justify-center text-on-primary shadow-xl shadow-primary/30 border-2 border-white transform transition-transform group-hover:scale-110">
<Icon name="two_wheeler" className="text-[28px]" />

<span className="absolute -top-1 -right-1 w-4 h-4 bg-tertiary-fixed-dim rounded-full flex items-center justify-center border-2 border-white">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
</span>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-on-surface text-surface-bright px-2.5 py-1 rounded-lg text-center whitespace-nowrap shadow-md">
<div className="font-label-sm text-label-sm font-bold flex items-center gap-1">
<span>Kizito Brian</span>
<span className="text-tertiary-fixed-dim">• 34 km/h</span>
</div>
</div>
</div>

<div className="absolute left-[1060px] top-[280px] -translate-x-1/2 pointer-events-none">
<div className="bg-tertiary text-on-tertiary px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
<Icon name="home_pin" className="text-[18px]" />
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm opacity-90 uppercase">Delivery Target</span>
<span className="font-label-md text-label-md font-extrabold leading-tight">Plot 14 Philip Rd, Kololo</span>
</div>
</div>
<div className="w-3 h-3 bg-tertiary rotate-45 mx-auto -mt-1.5"></div>
</div>

<div className="absolute right-8 bottom-8 flex flex-col gap-2 z-20">
<div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl shadow-xl p-1.5 flex flex-col gap-1">
<button className="w-10 h-10 rounded-xl hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" id="btnZoomIn" title="Zoom In" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[20px]" />
</button>
<div className="h-[1px] bg-surface-variant w-6 mx-auto"></div>
<button className="w-10 h-10 rounded-xl hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" id="btnZoomOut" title="Zoom Out" onClick={() => alertToast('Action triggered')}>
<Icon name="remove" className="text-[20px]" />
</button>
</div>
<button className="h-10 px-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm hover:bg-surface transition-all" id="btnRecenter" title="Recenter on Rider" onClick={() => alertToast('Action triggered')}>
<Icon name="my_location" className="text-primary text-[18px]" />
<span className="font-bold">Focus Rider</span>
</button>
</div>
</div>

<div className="absolute top-6 right-8 z-30 w-full max-w-md">
<div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 transition-all">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC Wireless Headphones in matte black finish on an elegant studio pedestal with warm copper lighting reflections" src={`${assetBase}/images/1052fcc541418729.webp`} />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">#SC-UG-99482</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center font-bold">
<Icon name="lock" className="text-[13px] mr-0.5" />Escrow Locked
                </span>
</div>
<h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</h2>
<span className="font-currency-code text-currency-code text-primary font-extrabold">UGX 248,500</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-on-surface-variant shrink-0" id="btnHelpModal" title="Emergency / Need Help" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help_outline" className="text-[18px]" />
</button>
</div>

<div className="mt-3.5 pt-3 bg-surface-container-low/70 rounded-xl px-3 py-2 flex items-center gap-2.5">
<Icon name="verified_user" className="text-tertiary text-[20px] shrink-0" />
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
<strong className="text-on-surface font-bold">Funds Safe in Swift Escrow.</strong> Merchant payout triggers only when you hand over your delivery confirmation PIN.
          </p>
</div>
</div>
</div>

<div className="absolute left-8 top-6 bottom-6 w-[430px] z-30 flex flex-col justify-between pointer-events-none">

<div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-3xl shadow-2xl p-5 pointer-events-auto flex flex-col gap-4 overflow-y-auto max-h-full">

<div className="bg-gradient-to-r from-primary to-[#ff8a1f] rounded-2xl p-4 text-on-primary shadow-lg shadow-primary/25 relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full font-extrabold flex items-center gap-1">
<Icon name="near_me" className="text-[13px] animate-pulse text-tertiary-fixed" /> SafeBoda Express
            </span>
<span className="font-label-sm text-label-sm font-bold text-white/90">Speed: ~34 km/h</span>
</div>
<div className="mt-2.5 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg font-black tracking-tight text-white leading-none">14</span>
<span className="font-headline-sm text-headline-sm font-bold text-white/90">Mins away</span>
</div>
<div className="mt-1 flex items-center gap-1.5 text-white/80 font-body-sm text-body-sm">
<Icon name="distance" className="text-[16px]" />
<span>2.4 km remaining • Approaching Kololo via Philip Rd</span>
</div>

<div className="mt-3.5 w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full transition-all duration-1000" id="routeProgressBar" style={{"width":"90%"}}></div>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-13 h-13 rounded-2xl overflow-hidden shadow-sm shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of Kizito Brian, professional East African SafeBoda courier wearing official orange reflective safety gear and a certified motorcycle helmet with friendly smile" src={`${assetBase}/images/2cbfaadf174c2db7.webp`} />
<div className="absolute bottom-0 right-0 bg-tertiary rounded-tl-lg p-0.5 text-on-tertiary">
<Icon name="check" className="text-[12px] block" />
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Kizito Brian</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-2 mt-0.5 font-label-md text-label-md text-on-surface-variant">
<span className="flex items-center text-[#f59e0b] font-bold gap-0.5">
<Icon name="star" className="text-[15px]" /> 4.95
                  </span>
<span>•</span>
<span>1,420 trips</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold mt-0.5">Bajaj Boxer • UEF 842X (Kampala)</span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-xl bg-tertiary hover:bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-md shadow-tertiary/20 transition-transform active:scale-95" id="btnCallRider" title="Call Courier" onClick={() => alertToast('Action triggered')}>
<Icon name="call" className="text-[20px]" />
</button>
<button className="w-10 h-10 rounded-xl bg-surface-container-highest hover:bg-surface-variant text-primary flex items-center justify-center shadow-sm transition-transform active:scale-95" id="btnChatRider" title="Message Courier" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[20px]" />
</button>
</div>
</div>

<div className="mt-3 pt-3 flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 animate-ping"></span>
<p><span className="font-bold text-on-surface">Live Note:</span> "Approaching Kololo Hill via Philip Road. Traffic is clear near Acacia round."</p>
</div>
</div>

<div className="bg-surface-container-highest/60 rounded-2xl p-4 flex flex-col items-center text-center">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md mb-2">
<Icon name="key" className="text-primary text-[18px]" />
<span className="font-bold text-on-surface">Secure Handover Release PIN</span>
</div>

<div className="flex items-center justify-center gap-2 w-full my-1">
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">8</div>
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">4</div>
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">9</div>
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">2</div>
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">1</div>
<div className="w-10 h-12 rounded-xl bg-surface-container-lowest font-headline-md text-headline-md font-black text-primary flex items-center justify-center shadow-sm">6</div>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-2 max-w-xs">
<span className="text-error font-bold">Strict Rule:</span> Provide this 6-digit passcode to Brian <strong>only after</strong> you unseal and inspect the headphones.
          </p>
</div>

<div className="space-y-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-extrabold px-1">Inspection Protocol</span>
<label className="flex items-center gap-3 p-2.5 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Verified SafeBoda helmet &amp; courier digital badge</span>
</label>
<label className="flex items-center gap-3 p-2.5 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
<input checked={true} className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Sealed SwiftCart tamper-evident security pouch</span>
</label>
<label className="flex items-center gap-3 p-2.5 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
<input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">SoundCore power-on check completed before PIN entry</span>
</label>
</div>

<div className="flex items-center gap-2 pt-1">
<button className="flex-1 h-11 bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors" id="btnShareTrip" onClick={() => alertToast('Action triggered')}>
<Icon name="share" className="text-[18px]" />
<span>Share Live Link</span>
</button>
<button className="h-11 px-4 bg-surface-container-high hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-md text-label-md font-bold rounded-xl flex items-center justify-center gap-1 transition-colors" id="btnReportIssue" title="Dispute or Delay Help" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="report_problem" className="text-[18px]" />
<span>Support</span>
</button>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto w-full px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="cell_tower" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">GPS Signal</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> MTN MoMo 4G / Live Telemetry
          </span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<Icon name="local_shipping" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Fulfillment Station</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold truncate">Kisementi - Kololo SafeNode #4</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
<Icon name="shield_with_heart" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Swift Escrow Vault</span>
<span className="font-label-md text-label-md text-on-surface font-extrabold truncate">ESC-UG-2025-0918</span>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<Icon name="headset_mic" className="text-[22px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Rapid Escrow Desk</span>
<span className="font-label-md text-label-md text-primary font-extrabold">+256 800 220 330 (Toll Free)</span>
</div>
</div>
</div>
</section>

<div className="fixed inset-y-0 right-0 w-96 bg-surface-container-lowest shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col" id="chatDrawer">

<div className="p-4 bg-surface-container border-b border-surface-variant flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
          KB
        </div>
<div>
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Kizito Brian (Rider)</h4>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active on boda headset
          </span>
</div>
</div>
<button className="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant" id="btnCloseChat" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto space-y-3 bg-surface-container-low/40">
<div className="text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-full">Package Picked Up • 2:18 PM</span>
</div>
<div className="flex gap-2 items-start max-w-[80%]">
<div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tl-none shadow-sm text-on-surface font-body-sm text-body-sm">
          Hello! I have picked your SoundCore package from Acacia Mall. It is sealed with barcode SC-99482. Approaching Kololo now.
        </div>
</div>
<div className="flex gap-2 items-start max-w-[80%] ml-auto justify-end">
<div className="bg-primary text-on-primary p-3 rounded-2xl rounded-tr-none shadow-sm font-body-sm text-body-sm">
          Noted Brian. Security at Plot 14 Philip Road gate is informed.
        </div>
</div>
<div className="flex gap-2 items-start max-w-[80%]">
<div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tl-none shadow-sm text-on-surface font-body-sm text-body-sm">
          Perfect! Will buzz when 100 meters away.
        </div>
</div>
</div>

<div className="p-3 bg-surface-container-lowest border-t border-surface-variant flex items-center gap-2">
<input className="flex-1 bg-surface-container h-10 px-3 rounded-xl font-body-sm text-body-sm text-on-surface focus:outline-none" placeholder="Type a message to rider..." type="text" />
<button className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0" onClick={() => alertToast('Action triggered')}>
<Icon name="send" className="text-[18px]" />
</button>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-on-surface text-surface-bright px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="toastNotification">
<Icon name="check_circle" className="text-tertiary-fixed-dim text-[18px]" />
<span className="font-label-md text-label-md" id="toastMessage">Trip tracking link copied to clipboard!</span>
</div>

</div></main><footer className="w-full bg-[#0c1322] text-white pt-10 pb-8 mt-12 border-t border-slate-800 font-body-sm text-body-sm"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-10 border-b border-white/10"><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0"><Icon name="verified_user" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">100% Escrow Protection</h4><p className="text-white/60 font-body-sm text-body-sm">Funds safe until you inspect</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0"><Icon name="two_wheeler" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">45-Min SafeBoda City Hub</h4><p className="text-white/60 font-body-sm text-body-sm">Live courier GPS tracking</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0"><Icon name="payments" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">Zero MoMo Fees</h4><p className="text-white/60 font-body-sm text-body-sm">Instant MTN &amp; Airtel checkout</p></div></div><div className="flex items-center gap-3.5"><div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0"><Icon name="storefront" className="text-[24px]" /></div><div><h4 className="font-label-md text-label-md font-bold text-white">URSB Certified Stores</h4><p className="text-white/60 font-body-sm text-body-sm">Kampala verified vendors</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-white/10"><div className="space-y-4"><div className="flex items-center gap-2"><img alt="swiftcart-logo-final.png" className="h-7 w-auto object-contain" src={`${assetBase}/images/6666a05c76c4c201.webp`} /><span className="font-headline-sm text-headline-sm text-white font-extrabold">SwiftCart</span></div><p className="text-white/70 font-body-sm text-body-sm leading-relaxed">Uganda's premier commerce marketplace. High-trust escrow releases, real-time SafeBoda dispatch, and verified local merchant hubs across Kampala, Entebbe, and Jinja.</p><div className="space-y-2 pt-1 font-body-sm text-body-sm text-white/80"><div className="flex items-center gap-2"><Icon name="call" className="text-primary text-[18px]" /><span>Toll-Free Hotline: <strong className="text-white">+256 800 220 800</strong></span></div><div className="flex items-center gap-2"><Icon name="chat" className="text-[#25d366] text-[18px]" /><span>WhatsApp Concierge: <strong className="text-white">+256 701 498 442</strong></span></div><div className="flex items-center gap-2"><Icon name="location_on" className="text-white/50 text-[18px]" /><span>Plot 18 Lumumba Ave, Nakasero, Kampala</span></div></div></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Top Categories</h4><ul className="space-y-2.5 font-body-sm text-body-sm text-white/70"><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Smartphones &amp; Tablets</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Audio &amp; Headphones</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kikuubo Wholesale Sacks</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Kitenge Tailored Fashion</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Nilotica Shea &amp; Organics</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Motorcycle &amp; Boda Spares</a></li></ul></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Buyer Protection</h4><ul className="space-y-2.5 font-body-sm text-body-sm text-white/70"><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>How Escrow Protection Works</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Returns &amp; 15-Minute Refunds</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>SafeBoda Dispatch Rates</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Vendor Verification Process</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Report Counterfeit Product</a></li><li><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Dispute Resolution Board</a></li></ul></div><div><h4 className="font-label-lg text-label-lg text-white font-bold mb-4">Verified Payment Rails</h4><p className="text-white/70 font-body-sm text-body-sm mb-3">Direct real-time checkout powered by authorized Ugandan telecommunication systems.</p><div className="flex flex-wrap gap-2 mb-4"><span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 text-[11px] font-bold text-white">MTN MoMo (*165#)</span><span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 text-[11px] font-bold text-white">Airtel Money (*185#)</span><span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 text-[11px] font-bold text-white">Visa</span><span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 text-[11px] font-bold text-white">Mastercard</span><span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 text-[11px] font-bold text-white">Cash on Delivery at Swift Hub</span></div><div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 text-white/80"><Icon name="shield" className="text-tertiary-fixed-dim text-[20px] shrink-0" /><p className="font-label-sm text-label-sm leading-snug">Audited Escrow Trust Account held with Stanbic Bank Uganda.</p></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-white/60"><div><span>© 2025 SwiftCart Uganda Ltd. Registered under Uganda Registration Services Bureau (URSB) &amp; Uganda Revenue Authority. All prices in UGX with 0 decimals.</span></div><div className="flex items-center gap-6"><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Terms of Escrow</a><a className="hover:text-white transition-colors" href="#" onClick={() => alertToast('Action triggered')}>Merchant Code of Conduct</a></div></div></div></footer>
    </div>
  );
};

export default Screen;
