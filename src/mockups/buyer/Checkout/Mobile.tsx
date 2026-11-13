// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/checkout_step_by_step_flow/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (_props) => {
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
    body {
      min-height: max(884px, 100dvh);
    }
  
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(14,27,77,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[22px]" /></button></div><h1 className="font-headline-sm text-headline-sm text-on-secondary-fixed text-center flex-1">Checkout</h1><div className="flex items-center justify-end w-11"><button aria-label="Share" className="w-11 h-11 flex items-center justify-center rounded-full text-on-secondary-fixed hover:bg-surface-container transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="share" className="text-[22px]" /></button></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-36">

<div className="px-margin pt-space-xs pb-space-sm">
<div className="bg-tertiary-container/10 rounded-xl p-space-md flex items-center justify-between shadow-sm"><div className="flex items-center gap-space-sm"><div className="w-7 h-7 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary"><Icon name="verified_user" className="text-[16px]" /></div><div className="flex flex-col"><span className="font-label-md text-label-md text-tertiary">Escrow Protected Checkout</span><span className="font-body-sm text-body-sm text-on-surface-variant">Payments are processed by our secure payment partner.</span></div></div><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase px-2 py-0.5 bg-tertiary-fixed rounded-full text-on-tertiary-fixed">Live</span></div>
</div>

<section className="px-margin py-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between relative">
<div className="flex items-center gap-2 z-10">
<div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 1</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Delivery</span>
</div>
</div>
<div className="h-0.5 flex-1 mx-2 bg-primary"></div>
<div className="flex items-center gap-2 z-10">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-[0_2px_8px_rgba(218,55,0,0.30)]">
<span className="font-label-sm text-label-sm font-bold">2</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Active</span>
<span className="font-label-md text-label-md text-primary font-bold">Payment</span>
</div>
</div>
<div className="h-0.5 flex-1 mx-2 bg-surface-container-highest"></div>
<div className="flex items-center gap-2 z-10 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">3</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 3</span>
<span className="font-label-md text-label-md text-on-surface-variant">Confirm</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="location_on" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Destination</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-high text-on-secondary-fixed px-2 py-0.5 rounded-full font-bold">Kampala District</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Joshua Kato</span>
<span className="font-body-sm text-body-sm text-secondary font-medium">+256 772 345 678</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Plot 14, Kira Road, Nakawa Division, Kampala</p>
<span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-1">
<Icon name="near_me" className="text-[14px]" />
          Boda rider landmark: Near Kira Road Police Post
        </span>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm">
<button className="flex-1 h-10 rounded-lg bg-surface-container text-on-secondary-fixed font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform" id="btn-change-address" onClick={() => alertToast('Action triggered')}>
<Icon name="swap_horiz" className="text-[18px]" />
            Change Address
          </button>
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform" id="btn-add-address" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[18px]" />
            + Add New Address
          </button>
</div>

<div className="hidden bg-surface-container-high/60 rounded-xl p-space-md flex-col gap-space-xs" id="district-picker">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Select Delivery Sub-Zone</span>
<div className="grid grid-cols-2 gap-space-xs pt-1">
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-surface-container-lowest text-on-surface flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Kampala Central</span>
<Icon name="chevron_right" className="text-[14px] opacity-40" />
</button>
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-primary/10 text-primary font-semibold flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Nakawa</span>
<Icon name="check" className="text-[14px]" />
</button>
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-surface-container-lowest text-on-surface flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Kololo</span>
<Icon name="chevron_right" className="text-[14px] opacity-40" />
</button>
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-surface-container-lowest text-on-surface flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Wakiso</span>
<Icon name="chevron_right" className="text-[14px] opacity-40" />
</button>
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-surface-container-lowest text-on-surface flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Entebbe</span>
<Icon name="chevron_right" className="text-[14px] opacity-40" />
</button>
<button className="h-9 px-3 rounded-lg text-left font-body-sm text-body-sm bg-surface-container-lowest text-on-surface flex items-center justify-between" onClick={() => alertToast('Action triggered')}>
<span className="">Jinja</span>
<Icon name="chevron_right" className="text-[14px] opacity-40" />
</button>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin py-space-xs flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-headline-sm text-headline-sm text-on-surface">Vendor Fulfillment</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 Hubs in Order</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<Icon name="headphones" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">SoundCore Official</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">2 items • Garden City Arcade</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary-container bg-primary-fixed px-2 py-0.5 rounded-full font-bold">Express Hub</span>
</div>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-primary/5">
<input checked={true} className="mt-1 accent-primary w-4 h-4" name="shipping-seller-1" type="radio" value="5000" />
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="bolt" className="text-primary text-[16px]" />
              Swift Express Doorstep
            </span>
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 5,000</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-medium">Tomorrow by 2:00 PM via Kampala Express Courier</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-primary/5">
<input className="mt-1 accent-primary w-4 h-4" name="shipping-seller-1" type="radio" value="2500" />
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="local_shipping" className="text-secondary text-[16px]" />
              Pickup: Posta Uganda Central
            </span>
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 2,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ready tomorrow at Kampala General Post Office</span>
</div>
</label>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<Icon name="devices_other" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Kikuubo Tech World</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 item • Downtown Plaza</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full font-bold">Standard</span>
</div>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-primary/5">
<input checked={true} className="mt-1 accent-primary w-4 h-4" name="shipping-seller-2" type="radio" value="3500" />
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="home" className="text-secondary text-[16px]" />
              Standard Doorstep
            </span>
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 3,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Est. 2 business days across Kampala metro</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer transition-colors has-[:checked]:bg-primary/5">
<input className="mt-1 accent-primary w-4 h-4" name="shipping-seller-2" type="radio" value="1500" />
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<Icon name="storefront" className="text-secondary text-[16px]" />
              Pickup: Nakawa Market Hub
            </span>
<span className="font-price-display text-price-display text-on-secondary-fixed">UGX 1,500</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Collect within 48h from Nakawa Main gate agent</span>
</div>
</label>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<span className="font-headline-sm text-headline-sm text-on-surface">Payment Method</span>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">Instant USSD</span>
</div>

<div className="rounded-xl p-space-md bg-surface-container-low flex flex-col gap-space-sm transition-all shadow-sm" id="method-card-mtn">
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-space-sm">
<input checked={true} className="accent-primary w-4 h-4" name="payment_method" type="radio" value="mtn" />

<div className="px-2.5 py-1 rounded bg-[#FFCC00] text-[#002B49] flex items-center gap-1 font-bold text-[12px] shadow-sm">
<span className="tracking-tighter">MTN</span>
<span className="text-[10px] uppercase font-extrabold bg-[#002B49] text-[#FFCC00] px-1 rounded">MoMo</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface">MTN Mobile Money</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Fastest</span>
</label>

<div className="pt-space-xs flex flex-col gap-space-xs" id="mtn-details">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">MoMo Registered Phone</span>
<div className="flex items-center bg-surface-container-lowest rounded-xl px-space-md h-12 shadow-sm">
<span className="font-label-lg text-label-lg text-on-secondary-fixed pr-2">+256</span>
<div className="h-6 w-0.5 bg-surface-container-highest mr-2"></div>
<input className="bg-transparent font-body-lg text-body-lg text-on-surface w-full focus:outline-none" placeholder="77X XXX XXX" type="tel" value="772 345 678" />
<Icon name="check_circle" className="text-tertiary text-[20px]" />
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant pt-1">
<Icon name="touch_app" className="text-[15px] text-primary" />
<span className="font-body-sm text-body-sm">Instant PIN authorization prompt will trigger on this phone</span>
</div>
</div>
</div>

<div className="rounded-xl p-space-md bg-surface-container-low flex flex-col gap-space-sm transition-all" id="method-card-airtel">
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-space-sm">
<input className="accent-primary w-4 h-4" name="payment_method" type="radio" value="airtel" />

<div className="px-2.5 py-1 rounded bg-[#E40000] text-white flex items-center gap-1 font-bold text-[12px] shadow-sm">
<span className="tracking-tight">airtel</span>
<span className="text-[9px] uppercase font-bold bg-white text-[#E40000] px-1 rounded">Money</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface">Airtel Money</span>
</div>

</label>

<div className="hidden pt-space-xs flex flex-col gap-space-xs" id="airtel-details">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Airtel Registered Phone</span>
<div className="flex items-center bg-surface-container-lowest rounded-xl px-space-md h-12 shadow-sm">
<span className="font-label-lg text-label-lg text-on-secondary-fixed pr-2">+256</span>
<div className="h-6 w-0.5 bg-surface-container-highest mr-2"></div>
<input className="bg-transparent font-body-lg text-body-lg text-on-surface w-full focus:outline-none" placeholder="75X XXX XXX" type="tel" value="750 123 456" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Check handset for prompt *185# approval</span>
</div>
</div>

<div className="rounded-xl p-space-md bg-surface-container-low flex flex-col gap-space-sm transition-all" id="method-card-card">
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-space-sm">
<input className="accent-primary w-4 h-4" name="payment_method" type="radio" value="card" />
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md font-extrabold text-[#1A1F71] bg-surface-container px-1.5 py-0.5 rounded">VISA</span>
<span className="font-label-md text-label-md font-extrabold text-[#EB001B] bg-surface-container px-1.5 py-0.5 rounded">MC</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface">Visa / Mastercard</span>
</div>
<Icon name="credit_card" className="text-on-surface-variant text-[20px]" />
</label>
<div className="hidden pt-space-xs text-on-surface-variant font-body-sm text-body-sm" id="card-details">
          Secured 3D-Secure redirected gateway via Stanbic Bank Uganda.
        </div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center gap-space-sm">
<Icon name="lock" className="text-tertiary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface">No merchant gets your money until you approve with your Delivery Code.</span>
</div>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<Icon name="sell" className="text-[18px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">KAMPALAFIRST</span>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed px-1.5 rounded font-bold">Applied</span>
</div>
<span className="font-body-sm text-body-sm text-primary font-bold">-UGX 15,000 First Order Discount</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-error-container hover:text-error transition-colors" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>
</section>

<section className="px-margin py-space-xs">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<span className="font-headline-sm text-headline-sm text-on-surface">Order Summary</span>
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between items-center">
<span className="font-body-md text-body-md text-on-surface-variant">Items Subtotal (3 items)</span>
<span className="font-label-lg text-label-lg text-on-surface">UGX 380,000</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1">
<span className="font-body-md text-body-md text-on-surface-variant">Multi-Vendor Delivery</span>
<Icon name="info" className="text-secondary text-[14px]" />
</div>
<span className="font-label-lg text-label-lg text-on-surface" id="delivery-total-display">UGX 8,500</span>
</div>
<div className="flex justify-between items-center text-primary font-medium">
<span className="">Discount Applied</span>
<span id="discount-display" className="">-UGX 15,000</span>
</div>
<div className="h-0.5 bg-surface-container-highest my-1"></div>
<div className="flex justify-between items-center pt-1">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Total to Pay</span>
<span className="font-body-sm text-body-sm text-tertiary">VAT included where applicable</span>
</div>
<span className="font-headline-md text-headline-md text-on-secondary-fixed" id="final-total-display">UGX 373,500</span>
</div>
</div>
</div>
</section>

<section className="px-margin py-space-xs mb-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-md shadow-sm"><div className="w-10 h-10 rounded-xl bg-tertiary-container flex-shrink-0 flex items-center justify-center text-on-tertiary shadow-sm"><Icon name="shield" className="text-[22px]" /></div><div className="flex flex-col gap-1"><span className="font-label-lg text-label-lg text-on-surface flex items-center gap-1">SwiftCart Escrow Guarantee<Icon name="verified" className="text-tertiary text-[16px]" /></span><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Escrow Protected: your money is held by SwiftCart until you confirm delivery. Funds are only disbursed to merchants after you inspect your parcel and share the 6-digit code.</p><span className="font-body-sm text-body-sm text-on-surface-variant">Payments are processed by our secure payment partner.</span></div></div>
</section>

<aside className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(14,27,77,0.06)] px-margin py-space-md pb-safe">
<div className="flex items-center justify-between gap-space-md max-w-[390px] mx-auto w-full">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Payable</span>
<span className="font-price-display text-price-display text-on-secondary-fixed" id="bottom-total-display">UGX 373,500</span>
</div>
<button className="flex-1 h-13 min-h-[52px] px-space-md rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-95 transition-all" id="btn-pay-momo" onClick={() => alertToast('Action triggered')}>
<span id="cta-label" className="">Place Order &amp; Pay with MoMo</span>
<Icon name="lock" className="text-[18px]" />
</button>
</div>
</aside>
</div>

</main>
    </div>
  );
};

export default Mobile;
