// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/splash_welcome_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (_props) => {
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden">
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
      <main className="flex flex-col relative w-full flex-1 bg-surface"><div className="flex flex-col w-full px-margin pb-space-lg select-none">

<div className="flex flex-col items-center text-center mt-space-md mb-space-md">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed mb-space-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed">Uganda's Marketplace</span>
</div>

<div className="relative w-[190px] h-[144px] flex items-center justify-center p-2 rounded-xl bg-surface-container-lowest shadow-md">
<img alt="SwiftCart" className="w-full h-full object-contain" src={`${assetBase}/images/d0b602cc2c246e86.webp`} />
</div>

<p className="font-headline-sm text-headline-sm text-on-surface mt-space-md tracking-tight">
      Fast delivery across Uganda
    </p>
<p className="font-body-sm text-body-sm text-secondary mt-space-xs max-w-[280px]">
      Select your primary delivery location to get real-time stock and lightning courier rates.
    </p>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="near_me" className="text-primary-container text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Where should we deliver?</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary font-bold" id="selected-badge-label">
        Kampala Central
      </span>
</div>

<div className="grid grid-cols-2 gap-space-xs mt-1" id="district-picker-group">

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-high text-on-surface text-left transition-all duration-150 active:scale-[0.98] shadow-sm" data-active="true" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-semibold truncate">Kampala Central</span>
<Icon name="check_circle" className="check-icon  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Nakawa</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Makindye</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Rubaga</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Kawempe</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Wakiso</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Entebbe</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Mukono</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Jinja</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Mbarara</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>

<button className="district-btn col-span-2 flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface text-left transition-all duration-150 active:scale-[0.98]" data-active="false" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-md text-label-md font-medium text-secondary truncate">Gulu</span>
<Icon name="check_circle" className="check-icon hidden  text-primary-container text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center gap-3 p-space-md rounded-xl bg-surface-container mb-space-md shadow-sm">
<div className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center shrink-0 text-on-tertiary shadow-sm">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="min-w-0 flex-1">
<p className="font-label-md text-label-md text-on-surface font-semibold">SwiftCart Buyer Protection</p>
<p className="font-body-sm text-body-sm text-secondary leading-snug">
        Your payment is held safely until you receive your order.
      </p>
</div>
</div>

<div className="flex flex-col gap-space-xs items-center">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-[0.98] transition-all duration-150" id="start-shopping-btn" type="button" onClick={() => alertToast('Action triggered')}>
<span className="">Start Shopping</span>
<Icon name="arrow_forward" className="text-[20px]" />
</button>

<p className="font-label-sm text-label-sm text-secondary mt-space-sm uppercase tracking-wider text-center">
      SwiftCart Uganda
    </p>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
