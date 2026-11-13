// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/my_orders_order_detail_swiftcart/code.html
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
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container relative w-full overflow-x-hidden">
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
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">SwiftCart</span><span className="text-outline-variant">•</span><span className="font-headline-sm text-headline-sm text-on-surface">My Orders</span></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 bg-surface pb-24"><div className="flex flex-col w-full">

<div className="px-margin pt-space-sm pb-space-xs">
<div className="relative w-full flex items-center">
<Icon name="search" className="absolute left-3 text-secondary text-[20px] pointer-events-none" />
<input className="w-full h-11 pl-10 pr-10 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" placeholder="Search orders by item, seller, or order ID..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button className="absolute right-2.5 w-7 h-7 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:bg-surface-container" onClick={() => alertToast('Action triggered')}>
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="px-margin pt-space-xs pb-space-sm overflow-x-auto no-scrollbar flex items-center gap-space-xs">
<button className="shrink-0 px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span>Active</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest/30 font-label-sm text-label-sm">2</span>
</button>
<button className="shrink-0 px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span>Completed</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest font-label-sm text-label-sm">14</span>
</button>
<button className="shrink-0 px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<span>Returns &amp; Disputes</span>
<span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">1</span>
</button>
</div>

<div className="px-margin flex flex-col gap-space-lg pt-space-xs pb-space-xl">

<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-col gap-space-md relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-tertiary"></div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md text-primary font-bold shrink-0">
            SC
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[16px] shrink-0" />
</div>
<span className="font-body-sm text-body-sm text-secondary">#SC-ORD-9488</span>
</div>
</div>
<div className="shrink-0 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span>Boda Transit</span>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="two_wheeler" className="text-[18px]" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Out for Delivery</div>
<div className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Boda Rider Kizito Brian (+256 701 ••• 419)</div>
</div>
<button className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm font-bold shrink-0 hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
          Call
        </button>
</div>

<div className="flex gap-space-sm items-center">
<img className="w-16 h-16 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Jet Black SoundCore Space One active noise cancelling wireless headphones resting on a minimalist studio podium with warm directional studio light and subtle orange reflections" src={`${assetBase}/images/404f21db7865ccb3.webp`} />
<div className="flex flex-col min-w-0 flex-1 justify-between py-0.5">
<h2 className="font-label-lg text-label-lg text-on-surface font-bold line-clamp-1">SoundCore Space One ANC Headphones</h2>
<div className="font-body-sm text-body-sm text-secondary">Jet Black • Qty: 1</div>
<div className="flex items-baseline justify-between mt-0.5">
<span className="font-body-sm text-body-sm text-secondary">Subtotal</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">UGX 248,500</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex justify-between items-center font-body-sm text-body-sm text-secondary">
<span>Standard Swift Boda Delivery (Kampala Central)</span>
<span>UGX 5,000</span>
</div>
<div className="flex justify-between items-center pt-1 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Total Paid (MoMo Escrow)</span>
<span className="font-price-display text-price-display text-primary">UGX 253,500</span>
</div>
</div>

<div className="bg-gradient-to-r from-on-secondary-fixed to-inverse-surface rounded-xl p-space-sm text-on-primary flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="lock" className="text-[18px] text-tertiary-fixed" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">Physical Handover Passcode</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/20 font-label-sm text-label-sm text-tertiary-fixed font-bold">Strictly Secret</span>
</div>
<div className="flex items-center justify-between bg-surface-container-lowest/10 rounded-lg px-space-md py-2 backdrop-blur-sm">
<span className="font-headline-lg-mobile text-headline-lg-mobile tracking-widest text-surface-container-lowest font-black select-all">841 902</span>
<button className="px-2.5 py-1 rounded-md bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[14px]" />
<span>Copy</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-secondary-fixed leading-tight">
          Share this 6-digit code <strong className="text-surface-container-lowest font-bold">only</strong> after inspecting the sealed packaging with Rider Kizito Brian.
        </p>
</div>

<div className="py-1">
<div className="font-label-md text-label-md text-on-surface font-bold mb-space-sm flex items-center justify-between">
<span>Live Tracking Progress</span>
<span className="font-body-sm text-body-sm text-tertiary font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
            Real-time
          </span>
</div>
<div className="relative pl-6 space-y-4">

<div className="relative">
<div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="check" className="text-[10px]" />
</div>
<div className="absolute -left-[17px] top-4 w-0.5 h-6 bg-tertiary"></div>
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-on-surface font-semibold">Order Placed</span>
<span className="font-body-sm text-body-sm text-secondary">Today 14:24</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Buyer checkout completed via SwiftCart App</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="check" className="text-[10px]" />
</div>
<div className="absolute -left-[17px] top-4 w-0.5 h-6 bg-tertiary"></div>
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-on-surface font-semibold">Payment Confirmed</span>
<span className="font-body-sm text-body-sm text-secondary">14:25</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">MTN MoMo Escrow Verified (#TXN-884920)</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
<Icon name="check" className="text-[10px]" />
</div>
<div className="absolute -left-[17px] top-4 w-0.5 h-6 bg-primary-container"></div>
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-on-surface font-semibold">Merchant Dispatched</span>
<span className="font-body-sm text-body-sm text-secondary">15:10</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Handed to SwiftCart Boda hub at Kampala Arcade</p>
</div>

<div className="relative">
<div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
<span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse"></span>
</div>
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-primary font-bold">Out for Delivery</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Now (5 min away)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Boda rider approaching destination near Acacia Mall</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-1">
<button className="col-span-2 py-3 px-space-md rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container active:scale-[0.99] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="explore" className="text-[20px]" />
<span>Track Rider on Map</span>
</button>
<button className="py-2.5 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>Contact Seller</span>
</button>
<button className="py-2.5 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="rate_review" className="text-[18px]" />
<span>Write a Review</span>
</button>
<button className="col-span-2 py-2 px-space-sm rounded-lg text-secondary font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1 hover:text-error transition-colors" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}>
<Icon name="help_center" className="text-[16px]" />
<span>Request Return / Open Dispute</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-secondary font-bold">
            UG
          </div>
<span className="font-label-md text-label-md text-on-surface font-bold">Uganda Fresh Grocers</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Packed</span>
</div>
<div className="flex gap-space-sm items-center">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Basket of premium organic fruits and vegetables fresh from rural Ugandan farms including ripe bananas and avocados set on bright wooden rustic texture" src={`${assetBase}/images/174df2052e028d6f.webp`} />
<div className="flex flex-col min-w-0 flex-1">
<div className="font-label-md text-label-md text-on-surface font-semibold truncate">Kampala Family Organic Fresh Fruit Basket</div>
<div className="font-body-sm text-body-sm text-secondary">#SC-ORD-9501 • Total: UGX 42,000</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Completed Orders</h3>
<span className="font-label-md text-label-md text-primary font-semibold">View All (14)</span>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-primary font-bold shrink-0">
            SC
          </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Uganda Official</span>
<span className="font-body-sm text-body-sm text-secondary">#SC-ORD-9102</span>
</div>
</div>
<div className="shrink-0 flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold bg-surface-container-high px-2 py-0.5 rounded-full">
<Icon name="check_circle" className="text-[14px]" />
<span>Delivered 12 Oct</span>
</div>
</div>
<div className="flex gap-space-sm items-center py-1">
<img className="w-14 h-14 rounded-lg object-cover bg-surface-container shrink-0" data-alt="High tech compact Anker 65W GaN wall fast charger with multi ports plugged on a neat wooden desk with subtle orange charging cable glow" src={`${assetBase}/images/43ef9ab28218ea6d.webp`} />
<div className="flex flex-col min-w-0 flex-1 justify-between">
<div className="font-label-md text-label-md text-on-surface font-bold line-clamp-1">Anker 65W GaN Fast Charger Trio-Port</div>
<div className="font-body-sm text-body-sm text-secondary">Space Grey • Qty: 1</div>
<div className="font-label-md text-label-md text-on-surface font-bold mt-0.5">UGX 165,000</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-1">
<button className="flex-1 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1 shadow-sm hover:bg-primary-container transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="refresh" className="text-[16px]" />
<span>Reorder</span>
</button>
<button className="flex-1 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[16px]" />
<span>Receipt</span>
</button>
<button className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center shrink-0 hover:bg-surface-container-high transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="star" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Disputes &amp; Buyer Guarantee</h3>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">1 Active</span>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 min-w-0">
<Icon name="gavel" className="text-error text-[18px]" />
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Dispute #SC-ORD-9281</span>
</div>
<span className="font-label-sm text-label-sm text-on-error-container bg-error-container px-2 py-0.5 rounded-full font-bold">
          Escrow Held
        </span>
</div>
<div className="flex gap-space-sm items-center">
<img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="SoundCore wireless headset in unboxing package displaying minor cosmetic scuff mark under inspection lighting on white table" src={`${assetBase}/images/e50a8e39aebe06bf.webp`} />
<div className="flex flex-col min-w-0 flex-1">
<div className="font-label-md text-label-md text-on-surface font-semibold line-clamp-1">SoundCore ANC (Defective Button)</div>
<div className="font-body-sm text-body-sm text-secondary">Secured Amount: <strong className="text-on-surface font-semibold">UGX 248,500</strong></div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex items-start gap-2">
<Icon name="shield" className="text-primary text-[18px] shrink-0 mt-0.5" />
<div className="flex flex-col min-w-0">
<div className="font-label-sm text-label-sm text-on-surface font-bold">Under Support Review • SwiftCart Escrow Protected</div>
<p className="font-body-sm text-body-sm text-secondary leading-tight mt-0.5">
            Seller SoundCore Official responded. SwiftCart Trust Team is verifying the parcel return tracking number.
          </p>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}>
<span>View Dispute Status &amp; Evidence</span>
<Icon name="chevron_right" className="text-[16px]" />
</button>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[22px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="font-label-md text-label-md text-on-surface font-bold">SwiftCart Uganda Escrow Guarantee</div>
<p className="font-body-sm text-body-sm text-secondary leading-tight">
          Payments are never released to merchants until you confirm inspection with your 6-digit handover code.
        </p>
</div>
</div>
</div>
</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(15,23,42,0.06)]" data-active-classes="text-primary font-bold"><div className="h-16 px-space-xs flex items-center justify-around"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface" data-path="home-market" href="#" onClick={() => alertToast('Action triggered')}><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Market</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface" data-path="categories" href="#" onClick={() => alertToast('Action triggered')}><Icon name="grid_view" className="text-[22px]" /><span className="font-label-sm text-label-sm">Explore</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-bold" data-path="my-orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}><Icon name="local_shipping" className="text-[22px]" /><span className="font-label-sm text-label-sm">Orders</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface" data-path="buyer-cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_bag" className="text-[22px]" /><span className="font-label-sm text-label-sm">Cart</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors hover:text-on-surface" data-path="buyer-account" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}><Icon name="person" className="text-[22px]" /><span className="font-label-sm text-label-sm">Account</span></a></div></nav>
    </div>
  );
};

export default Screen;
