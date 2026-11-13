// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/splash_welcome_swiftcart_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <main className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-margin"><div className="flex flex-col w-full items-center justify-center min-h-[1100px] py-10 relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] via-surface to-surface-container-low selection:bg-primary-container selection:text-on-primary">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 w-full max-w-[560px] bg-surface-container-lowest rounded-3xl shadow-2xl shadow-on-surface/10 p-8 sm:p-10 flex flex-col items-center">

<div className="w-full flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>LIVE IN UGANDA</span>
</div>

<div className="inline-flex items-center p-1 rounded-full bg-surface-container-high" role="tablist">
<button className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface shadow-sm transition-all" id="lang-en" onClick={() => alertToast('Action triggered')}>
          English
        </button>
<button className="px-3 py-1 rounded-full text-label-sm font-label-sm text-secondary hover:text-on-surface transition-all" id="lang-lg" onClick={() => alertToast('Action triggered')}>
          Yogera mu Luganda
        </button>
</div>
</div>

<div className="w-full flex flex-col items-center justify-center my-1 group">
<div className="relative w-44 h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
<img alt="SwiftCart Uganda Speed Bird and Express Cart Official Identity" className="w-full h-full object-contain drop-shadow-md" src={`${assetBase}/images/82d25e0c4713d6b2.webp`} />
</div>
</div>

<div className="text-center mt-3 mb-6 max-w-[460px]">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
        Uganda's Fastest Multi-Vendor Marketplace
      </h1>
<p className="mt-2 font-body-sm text-body-sm text-secondary flex items-center justify-center gap-2">
<span className="inline-flex items-center text-primary font-semibold">
<Icon name="two_wheeler" className="text-[16px] mr-1" /> Kampala 1-Hour Boda
        </span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center text-tertiary font-semibold">
<Icon name="verified_user" className="text-[16px] mr-1" /> MoMo Escrow Protected
        </span>
</p>
</div>

<div className="w-full text-left mb-6">
<div className="flex items-center justify-between mb-2.5 px-1">
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wide uppercase">
          Select Your Delivery District
        </span>
<span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-0.5">
<Icon name="location_on" className="text-[14px]" /> Live Hubs
        </span>
</div>
<div className="grid grid-cols-2 gap-2.5" id="district-matrix">

<label className="district-card relative flex flex-col p-3 rounded-2xl bg-surface-container-low cursor-pointer transition-all duration-200 select-none shadow-sm" data-district="kampala">
<input checked={true} className="sr-only" name="district" type="radio" value="Kampala Central & Nakasero" />
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Kampala Central</span>
<span className="radio-indicator flex items-center justify-center w-4 h-4 rounded-full bg-primary-container text-on-primary">
<Icon name="check" className="text-[12px] font-bold" />
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 text-[11px] leading-tight">Nakasero, Kololo, CBD</p>
<div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Avg. 38 mins delivery</span>
</div>
</label>

<label className="district-card relative flex flex-col p-3 rounded-2xl bg-surface-container-lowest cursor-pointer transition-all duration-200 select-none shadow-sm hover:bg-surface-container-low" data-district="wakiso">
<input className="sr-only" name="district" type="radio" value="Wakiso & Entebbe Corridor" />
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Wakiso &amp; Entebbe</span>
<span className="radio-indicator flex items-center justify-center w-4 h-4 rounded-full bg-surface-variant text-transparent">
<Icon name="check" className="text-[12px] font-bold" />
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 text-[11px] leading-tight">Nansana, Kyengera, Airport</p>
<div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
<span>Same-day express</span>
</div>
</label>

<label className="district-card relative flex flex-col p-3 rounded-2xl bg-surface-container-lowest cursor-pointer transition-all duration-200 select-none shadow-sm hover:bg-surface-container-low" data-district="mukono">
<input className="sr-only" name="district" type="radio" value="Mukono & Kira Municipality" />
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Mukono &amp; Kira</span>
<span className="radio-indicator flex items-center justify-center w-4 h-4 rounded-full bg-surface-variant text-transparent">
<Icon name="check" className="text-[12px] font-bold" />
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 text-[11px] leading-tight">Namugongo, Seeta, Town</p>
<div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
<span>Scheduled &amp; Rush</span>
</div>
</label>

<label className="district-card relative flex flex-col p-3 rounded-2xl bg-surface-container-lowest cursor-pointer transition-all duration-200 select-none shadow-sm hover:bg-surface-container-low" data-district="jinja">
<input className="sr-only" name="district" type="radio" value="Jinja Hub & Regional" />
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold">Jinja Hub Corridor</span>
<span className="radio-indicator flex items-center justify-center w-4 h-4 rounded-full bg-surface-variant text-transparent">
<Icon name="check" className="text-[12px] font-bold" />
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 text-[11px] leading-tight">Lugazi, Njeru, Jinja City</p>
<div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
<span>Next-day / Cross-Hub</span>
</div>
</label>
</div>
</div>

<div className="w-full grid grid-cols-3 gap-2 py-3 px-2 rounded-2xl bg-surface-container mb-6">
<div className="flex flex-col items-center text-center px-1">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-1 shadow-sm">
<Icon name="account_balance_wallet" className="text-[18px]" />
</div>
<span className="font-label-sm text-[11px] font-bold text-on-surface leading-tight">MTN &amp; Airtel MoMo</span>
<span className="font-body-sm text-[10px] text-secondary mt-0.5">Escrow Guaranteed</span>
</div>
<div className="flex flex-col items-center text-center px-1">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-tertiary mb-1 shadow-sm">
<Icon name="verified" className="text-[18px]" />
</div>
<span className="font-label-sm text-[11px] font-bold text-on-surface leading-tight">Verified Kampala</span>
<span className="font-body-sm text-[10px] text-secondary mt-0.5">Vetted Local Stores</span>
</div>
<div className="flex flex-col items-center text-center px-1">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface mb-1 shadow-sm">
<Icon name="pin" className="text-[18px]" />
</div>
<span className="font-label-sm text-[11px] font-bold text-on-surface leading-tight">6-Digit Handshake</span>
<span className="font-body-sm text-[10px] text-secondary mt-0.5">PIN on Delivery</span>
</div>
</div>

<button className="w-full h-[52px] rounded-xl bg-primary-container hover:bg-[#EA4A17] active:scale-[0.98] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg shadow-primary-container/25 transition-all duration-150 cursor-pointer" id="cta-btn" onClick={() => alertToast('Action triggered')}>
<span className="font-bold">Start Shopping in Kampala</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>

<div className="w-full mt-4 flex items-center justify-center gap-6">
<button className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors py-1 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}>
        Sign in to existing account
      </button>
<span className="text-outline-variant">•</span>
<button className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors py-1 cursor-pointer" onClick={() => alertToast('Action triggered')}>
        Browse as guest
      </button>
</div>

<div className="w-full mt-6 pt-4 flex items-center justify-center gap-1.5 text-center text-on-surface-variant font-body-sm text-[11px]">
<Icon name="gavel" className="text-[16px] text-tertiary" />
<span>Regulated E-Commerce Platform</span>
<span className="text-outline-variant">•</span>
<span className="font-semibold text-on-surface">100% Buyer Protection Guarantee</span>
</div>
</div>

<div className="relative z-10 mt-6 text-center text-secondary font-body-sm text-body-sm max-w-sm flex items-center justify-center gap-2">
<span>Kampala • Entebbe • Mukono • Jinja</span>
<span>•</span>
<span>SwiftCart Express Logistics Ltd</span>
</div>
</div>
</main>
    </div>
  );
};

export default Tablet;
