// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/my_orders_swiftcart_uganda/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-space-sm flex items-center justify-between"><button aria-label="Go back" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight text-center flex-1">My Orders</h1><button aria-label="Filter orders" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}><Icon name="tune" className="text-[22px]" /></button></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen pb-safe"><div className="flex flex-col w-full pb-8">
<div className="w-full px-margin pt-space-sm pb-space-xs">
<div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-2.5 rounded-xl shadow-sm">
<Icon name="search" className="text-secondary text-[20px]" />
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none" placeholder="Search by Order ID, item, or vendor..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button aria-label="Filter orders" className="text-secondary hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>
<Icon name="tune" className="text-[20px]" />
</button>
</div>
</div>
<div className="w-full overflow-x-auto no-scrollbar py-space-sm pl-margin pr-space-sm flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
      All (14)
    </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
      To Pay
      <span className="w-4 h-4 rounded-full bg-error-container text-error text-[10px] font-bold flex items-center justify-center">1</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
      Processing (2)
    </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-primary bg-primary-container shadow-sm whitespace-nowrap flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse"></span>
      Out for Delivery (1)
    </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap" onClick={() => alertToast('Action triggered')}>
      Completed (9)
    </button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
      Cancelled (1)
    </button>
</div>
<div className="flex flex-col gap-space-lg px-margin mt-space-xs">
<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden relative">
<div className="bg-gradient-to-r from-primary-fixed to-surface-container-low px-space-md py-2 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="two_wheeler" className="text-primary text-[18px]" />
<span className="font-label-md text-label-md text-on-primary-fixed-variant tracking-wide">Live Boda Dispatch • Nakawa</span>
</div>
<span className="font-currency-code text-currency-code text-primary bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs">#SW-98421</span>
</div>
<div className="p-space-lg flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">SoundCore Uganda</span>
<span className="inline-flex items-center gap-0.5 bg-tertiary-container/10 text-tertiary px-1.5 py-0.5 rounded-full font-label-sm text-label-sm">
<Icon name="verified" className="text-[13px]" />
                Verified
              </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+ Kikuubo Tech World</span>
</div>
<span className="font-body-sm text-body-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded text-right whitespace-nowrap">Today, 10:15 AM</span>
</div>
<div className="bg-primary-fixed/30 rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Out for Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Estimated arrival by 2:30 PM</span>
</div>
</div>
<div className="bg-surface-container-lowest px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1"><Icon name="schedule" className="text-primary text-[14px]" /><span className="font-label-sm text-label-sm text-primary">Boda en route</span></div>
</div>
<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-md bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 object-cover rounded-lg flex-shrink-0" data-alt="SoundCore Space One ANC Headphones Midnight Black over a minimalist soft cream background showcasing sleek earcups, modern studio lighting" src={`${assetBase}/images/81122bee5bcceed4.webp`} />
<div className="flex flex-col flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC Headphones</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Midnight Black • Qty: 1</p>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 265,000</span>
</div>
</div>
<div className="flex items-center gap-space-md bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 object-cover rounded-lg flex-shrink-0" data-alt="Oraimo 20000mAh Power Bank with bright orange accents and high-power digital LED display resting on clean warm tabletop" src={`${assetBase}/images/747217cf9d178ed0.webp`} />
<div className="flex flex-col flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface truncate">Oraimo 20,000mAh Power Bank 22.5W</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Speed Charge • Qty: 1</p>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 65,000</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs bg-surface-container-low/50 p-space-sm rounded-lg"><div className="flex items-center gap-1.5"><Icon name="shield" className="text-tertiary text-[18px]" /><div className="flex flex-col"><span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Escrow Protected</span><span className="font-body-sm text-body-sm text-on-surface-variant">Your money is held by SwiftCart until you confirm delivery</span></div></div><div className="text-right flex-shrink-0 ml-2"><span className="font-body-sm text-body-sm text-on-surface-variant">Total</span><div className="font-price-display text-price-display text-on-surface">UGX 338,500</div></div></div>
<div className="flex flex-col gap-2 pt-space-xs"><button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}><Icon name="near_me" className="text-[20px]" />Track Order</button><div className="grid grid-cols-2 gap-space-sm"><button className="h-11 rounded-xl bg-surface-container-lowest text-secondary font-label-md text-label-md shadow-sm hover:bg-surface-container active:scale-[0.98] transition-all flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}><Icon name="call" className="text-[18px]" />Call Courier</button><button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md shadow-sm hover:bg-surface-container active:scale-[0.98] transition-all flex items-center justify-center gap-1.5" onClick={() => alertToast('Action triggered')}><Icon name="receipt_long" className="text-[18px]" />Order Details</button></div><p className="font-body-sm text-body-sm text-on-surface-variant text-center pt-0.5">6-digit delivery code available inside Track Order after tapping Reveal code</p></div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-currency-code text-currency-code text-secondary">#SW-99104</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pending MoMo</span>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-label-sm text-label-sm">Awaiting Approval</span>
</div>
<div className="flex items-center gap-space-md bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 object-cover rounded-lg flex-shrink-0" data-alt="Double Spiral Electric Hotplate Cooker metallic body with glowing heating element in an East African modern kitchen setting" src={`${assetBase}/images/7ac25040edcacc87.webp`} />
<div className="flex flex-col flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface truncate">Double Spiral Hotplate Cooker 2000W</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Stainless Steel • Qty: 1</p>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 74,000</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low/40 p-2 rounded-lg">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="">Prompt sent to +256 772•••419</span>
</div>
<span className="font-label-md text-label-md text-on-surface">UGX 74,000</span>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="h-11 rounded-xl bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant active:scale-[0.98] transition-all" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
          Cancel Order
        </button>
<button className="h-11 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="send_to_mobile" className="text-[18px]" />
          Authorize
        </button>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-currency-code text-currency-code text-secondary">#SW-87110</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Delivered 3d ago</span>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" />
          Escrow Released
        </span>
</div>
<div className="flex items-start justify-between">
<div>
<h4 className="font-label-lg text-label-lg text-on-surface">Defacto Fashion Kampala</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Arcade Level 2, Kampala Road</p>
</div>
<span className="font-label-md text-label-md text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">Satisfied</span>
</div>
<div className="flex items-center gap-space-md bg-surface-container-low p-2 rounded-lg">
<img className="w-14 h-14 object-cover rounded-lg flex-shrink-0" data-alt="Vibrant African Kitenge Print Tailored Maxi Dress in orange and royal blue geometric motifs worn gracefully in daylight" src={`${assetBase}/images/7639af91663c7780.webp`} />
<div className="flex flex-col flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface truncate">African Kitenge Print Maxi Dress</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Size L • Wax Cotton • Qty: 1</p>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 65,000</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<button className="text-secondary font-label-md text-label-md hover:underline flex items-center gap-1" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[16px]" />
          Receipt
        </button>
<div className="flex items-center gap-2">
<button className="px-space-md h-9 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors" onClick={() => alertToast('Action triggered')}>
            Buy Again
          </button>
<button className="px-space-md h-9 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:brightness-105 transition-colors flex items-center gap-1 shadow-xs" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[16px]" />
            Review
          </button>
</div>
</div>
</div>
<div className="bg-surface-container rounded-xl p-space-md flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0">
<Icon name="verified_user" className="text-secondary text-[22px]" />
</div>
<div className="flex flex-col flex-1">
<h4 className="font-label-md text-label-md text-on-surface">SwiftCart Escrow Guarantee</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Escrow Protected: your money is held by SwiftCart until you confirm delivery.</p>
</div>
<button className="text-primary font-label-md text-label-md hover:underline whitespace-nowrap" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>Help</button>
</div>
</div>
</div></main>
    </div>
  );
};

export default Mobile;
