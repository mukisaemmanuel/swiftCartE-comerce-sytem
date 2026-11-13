// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/delivery_addresses_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-14 px-space-sm flex items-center justify-between"><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[210px]">Addresses</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="share" className="text-[22px]" /></button><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="help_outline" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-14 pb-safe bg-surface"><div className="flex flex-col w-full pb-28">

<section className="px-margin pt-space-md pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Saved Addresses</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">3 Active</span>
</div>
<button className="flex items-center gap-1 text-primary-container font-label-md text-label-md active:scale-95 transition-transform" id="add-top-btn" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[18px]" />
<span>Add New</span>
</button>
</section>

<section className="px-margin mb-space-md">
<div className="bg-surface-container p-space-md rounded-xl flex items-start gap-space-sm shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 mt-0.5">
<Icon name="two_wheeler" className="text-primary-container text-[20px]" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface">Swift Boda Landmark Routing</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
          Ugandan riders navigate by prominent landmarks, stage names, gate colors, and stage riders.
        </p>
</div>
</div>
</section>

<section className="px-margin flex flex-col gap-space-md">

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative transition-all" id="address-card-1">

<div className="flex items-center justify-between gap-2 mb-space-sm">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Icon name="home" className="text-[16px]" />
</span>
<span className="font-label-md text-label-md text-on-surface">Home</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[13px]" />
          DEFAULT DELIVERY ADDRESS
        </span>
</div>

<div className="mb-space-xs">
<h3 className="font-label-lg text-label-lg text-on-surface">Joshua Kato Mukasa</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="phone_iphone" className="text-[15px] text-tertiary" />
          +256 772 345 678
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-surface-variant mx-1"></span>
<span className="font-label-sm text-label-sm text-tertiary">MTN MoMo Verified</span>
</p>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm mt-space-sm mb-space-sm">
<div className="flex items-center gap-1 text-on-surface font-label-md text-label-md mb-0.5">
<Icon name="location_on" className="text-[16px] text-primary" />
          Kampala District • Nakawa Division
        </div>
<p className="font-body-md text-body-md text-on-surface pl-5">Plot 14, Kira Road, Bukoto / Nakawa border</p>
</div>

<div className="bg-amber-50/70 p-space-sm rounded-lg mb-space-md">
<div className="flex items-center gap-1 text-primary-container font-label-sm text-label-sm mb-0.5">
<Icon name="sports_motorsports" className="text-[15px]" />
          BODA RIDER DIRECTIONS &amp; LANDMARKS
        </div>
<p className="font-body-sm text-body-sm text-on-surface pl-4 leading-relaxed font-medium">
          "Near Kira Road Police Post gate, opposite TotalEnergies Bukoto, yellow residential gate."
        </p>
</div>

<div className="w-full h-24 rounded-lg bg-cover bg-center mb-space-md relative overflow-hidden" data-location="Kira Road Police Post, Bukoto, Kampala, Uganda" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-space-xs">
<span className="px-2 py-0.5 rounded bg-surface/90 font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<Icon name="pin_drop" className="text-[12px] text-primary" />
            GPS Coordinates Locked
          </span>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[15px]" />
            Edit
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-error hover:bg-error-container/40 transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[15px]" />
            Delete
          </button>
</div>
<span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md">
<Icon name="verified" className="text-[18px]" />
          Selected
        </span>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative transition-all" id="address-card-2">

<div className="flex items-center justify-between gap-2 mb-space-sm">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant">
<Icon name="business" className="text-[16px]" />
</span>
<span className="font-label-md text-label-md text-on-surface">Work / Office</span>
</div>
<button className="set-default-btn px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" data-id="2" onClick={() => alertToast('Action triggered')}>
<Icon name="radio_button_unchecked" className="text-[14px]" />
          Set as Default
        </button>
</div>

<div className="mb-space-xs">
<h3 className="font-label-lg text-label-lg text-on-surface">Joshua Kato</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="phone_iphone" className="text-[15px] text-tertiary" />
          +256 701 987 654
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-surface-variant mx-1"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Airtel Money</span>
</p>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm mt-space-sm mb-space-sm">
<div className="flex items-center gap-1 text-on-surface font-label-md text-label-md mb-0.5">
<Icon name="location_on" className="text-[16px] text-primary" />
          Kampala Central Division • Nakasero
        </div>
<p className="font-body-md text-body-md text-on-surface pl-5">Crested Towers, 4th Floor, Short Tower, Hannington Road</p>
</div>

<div className="bg-amber-50/70 p-space-sm rounded-lg mb-space-md">
<div className="flex items-center gap-1 text-primary-container font-label-sm text-label-sm mb-0.5">
<Icon name="sports_motorsports" className="text-[15px]" />
          BODA RIDER DIRECTIONS &amp; LANDMARKS
        </div>
<p className="font-body-sm text-body-sm text-on-surface pl-4 leading-relaxed font-medium">
          "Security desk at reception, rider can park at visitor bay."
        </p>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[15px]" />
            Edit Address
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-error hover:bg-error-container/40 transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[15px]" />
            Delete
          </button>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<Icon name="bolt" className="text-[14px]" />
          Swift Express Zone
        </span>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative transition-all" id="address-card-3">

<div className="flex items-center justify-between gap-2 mb-space-sm">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant">
<Icon name="diversity_1" className="text-[16px]" />
</span>
<span className="font-label-md text-label-md text-on-surface">Family (Mother's Home)</span>
</div>
<button className="set-default-btn px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" data-id="3" onClick={() => alertToast('Action triggered')}>
<Icon name="radio_button_unchecked" className="text-[14px]" />
          Set as Default
        </button>
</div>

<div className="mb-space-xs">
<h3 className="font-label-lg text-label-lg text-on-surface">Sarah Namukasa <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(Mother)</span></h3>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<Icon name="phone_iphone" className="text-[15px] text-tertiary" />
          +256 782 112 233
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-surface-variant mx-1"></span>
<span className="font-label-sm text-label-sm text-tertiary">MTN Mobile Money</span>
</p>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm mt-space-sm mb-space-sm">
<div className="flex items-center gap-1 text-on-surface font-label-md text-label-md mb-0.5">
<Icon name="location_on" className="text-[16px] text-primary" />
          Wakiso District • Entebbe Municipality
        </div>
<p className="font-body-md text-body-md text-on-surface pl-5">Manyago Zone, off Portal Road, near Entebbe Botanical Gardens</p>
</div>

<div className="bg-amber-50/70 p-space-sm rounded-lg mb-space-md">
<div className="flex items-center gap-1 text-primary-container font-label-sm text-label-sm mb-0.5">
<Icon name="sports_motorsports" className="text-[15px]" />
          BODA RIDER DIRECTIONS &amp; LANDMARKS
        </div>
<p className="font-body-sm text-body-sm text-on-surface pl-4 leading-relaxed font-medium">
          "Branch off opposite Botanical Gardens gate, ask boda stage for Mama Kato's mango tree compound."
        </p>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[15px]" />
            Edit Address
          </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-error hover:bg-error-container/40 transition-colors flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="delete" className="text-[15px]" />
            Delete
          </button>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="schedule" className="text-[13px]" />
          Express ~45m
        </span>
</div>
</article>
</section>

<section className="px-margin mt-space-lg mb-space-md">
<div className="bg-surface-container-high/60 rounded-xl p-space-md flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-container/15 flex items-center justify-center shrink-0">
<Icon name="quickreply" className="text-tertiary text-[22px]" />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Accurate local landmarks help our <span className="font-label-md text-label-md text-primary">Swift Express</span> boda riders locate you smoothly without calling multiple times.
      </p>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 p-margin bg-surface-container-lowest/95 backdrop-blur-md shadow-xl z-40">
<div className="max-w-[440px] mx-auto flex flex-col gap-1.5">
<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform" id="add-address-main-cta" onClick={() => alertToast('Action triggered')}>
<Icon name="add_location_alt" className="text-[20px]" />
<span>+ Add New Ugandan Address</span>
</button>
<div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-tertiary">
<Icon name="verified_user" className="text-[13px]" /> Swift Escrow Protected
        </span>
<span>•</span>
<span>Kampala, Wakiso &amp; Mukono</span>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
