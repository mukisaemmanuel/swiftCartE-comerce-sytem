// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/checkout_step_flow_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(15,23,42,0.05)]"><div className="h-16 max-w-6xl mx-auto px-4 flex items-center justify-between"><div className="flex items-center gap-3"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm font-bold text-on-surface">SwiftCart</span><span className="font-label-sm text-label-sm uppercase px-2 py-0.5 rounded bg-surface-container text-secondary font-bold tracking-wider">Checkout</span></div><div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-tertiary font-label-md text-label-md font-semibold"><Icon name="verified" className="text-[18px]" /><span>Bank of Uganda &amp; MoMo Escrow Protected</span></div><div className="flex items-center gap-3"><a className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}><Icon name="contact_support" className="text-[18px]" /><span className="hidden sm:inline">Live Support</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-lowest shadow-sm py-4 px-6 mb-6">
<div className="max-w-5xl mx-auto flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-surface-container-lowest flex items-center justify-center font-label-md text-label-md shadow-sm">
<Icon name="check" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">Step 1</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Delivery Address</span>
</div>
</div>
<div className="h-[2px] flex-1 mx-4 bg-tertiary-container/30"></div>

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-label-md text-label-md shadow-sm ring-4 ring-primary-fixed">
<span>2</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">In Progress</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Delivery Method</span>
</div>
</div>
<div className="h-[2px] flex-1 mx-4 bg-surface-container-high"></div>

<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-md text-label-md">
<span>3</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Upcoming</span>
<span className="font-label-lg text-label-lg font-semibold text-secondary">Payment Method</span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 pb-12">
<div className="flex flex-col md:flex-row gap-6 items-start">

<div className="w-full md:w-[62%] flex flex-col gap-6 min-w-0">

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-5 relative overflow-hidden transition-all duration-200">
<div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary"></div>
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="location_on" className="text-[18px]" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Dennis Mukasa</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-body-md text-body-md font-semibold text-secondary">+256 772 123 456</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[12px]" /> Kololo Verified Pin
                  </span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-snug">
                  Plot 14 Acacia Avenue, Kololo (Opposite Acacia Mall), Kampala Central
                </p>
<div className="flex items-center gap-1.5 pt-1 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="info" className="text-[15px] text-secondary" />
<span className="italic">"Call on arrival at the security gate. Leave with receptionist if unavailable."</span>
</div>
</div>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[16px]" />
<span>Edit</span>
</button>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container"></div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary-container text-surface-container-lowest font-label-sm text-label-sm font-bold flex items-center justify-center">2</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Select Delivery Option</h2>
</div>
<span className="font-label-sm text-label-sm px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded font-semibold uppercase tracking-wide">
              Kampala Fast Dispatch
            </span>
</div>
<div className="space-y-3">

<label className="group relative flex items-start gap-3.5 p-4 rounded-xl cursor-pointer bg-surface-container-low shadow-sm transition-all">
<input checked={true} className="mt-1 w-5 h-5 accent-primary shrink-0" name="delivery_method" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">1-Hour Boda Express Delivery</span>
<span className="bg-primary-container text-surface-container-lowest font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
<Icon name="bolt" className="text-[12px]" /> FASTEST
                    </span>
</div>
<span className="font-headline-sm text-headline-sm font-black text-primary">UGX 5,000</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Delivered by <strong className="text-on-surface font-semibold">16:45 today</strong> by vetted SwiftRider Boda courier with live GPS tracking &amp; phone updates.
                </p>
<div className="flex items-center gap-3 mt-2.5 pt-2 bg-surface-container/60 rounded-lg px-2.5 py-1.5">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold">
<Icon name="verified_user" className="text-[16px]" /> Escrow Transit Insurance Included
                  </div>
<span className="text-secondary">•</span>
<span className="font-label-sm text-label-sm text-secondary">Rider code handoff</span>
</div>
</div>
</label>

<label className="group relative flex items-start gap-3.5 p-4 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-all">
<input className="mt-1 w-5 h-5 accent-primary shrink-0" name="delivery_method" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">SwiftCart William St Central Hub Collection</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                      FREE
                    </span>
</div>
<span className="font-headline-sm text-headline-sm font-black text-tertiary">UGX 0</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Ready in 30 mins at William St Hub #04 (Near Church House). Open till 20:00.
                </p>
<div className="mt-2">
<button className="text-primary font-label-md text-label-md font-bold hover:underline inline-flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<span>Change Hub Station</span>
<Icon name="arrow_forward" className="text-[14px]" />
</button>
</div>
</div>
</label>

<label className="group relative flex items-start gap-3.5 p-4 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-all">
<input className="mt-1 w-5 h-5 accent-primary shrink-0" name="delivery_method" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Scheduled Next-Day Delivery</span>
<span className="font-headline-sm text-headline-sm font-black text-on-surface">UGX 3,000</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                  Select delivery slot: <strong className="text-on-surface">Tomorrow 09:00 - 12:00</strong>. Standard consolidation from industrial warehouse.
                </p>
</div>
</label>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-5 relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-on-surface text-surface-container-lowest font-label-sm text-label-sm font-bold flex items-center justify-center">3</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Payment Method Selection</h2>
</div>
<span className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="lock" className="text-[16px]" /> Uganda Escrow Secured
            </span>
</div>
<div className="space-y-3">

<label className="block p-4 rounded-xl cursor-pointer bg-surface-container-low transition-all relative overflow-hidden">
<div className="flex items-start gap-3.5">
<input checked={true} className="mt-1 w-5 h-5 accent-primary shrink-0" name="payment_channel" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2 flex-wrap">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-[#ffcc00] text-black font-extrabold text-[12px] tracking-tight">MTN MoMo</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">MTN Mobile Money</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-tertiary px-2 py-0.5 rounded bg-tertiary-fixed/40">USSD *165# Instant</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1.5">
                    Instant escrow lock prompt will be triggered to Dennis M. (<strong className="text-on-surface">+256 772 123 456</strong>).
                  </p>
<div className="mt-3 p-3 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="security" className="text-primary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface font-medium">Funds held in SwiftCart Vault until code release</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary">0% Surcharge</span>
</div>
</div>
</div>
</label>

<label className="block p-4 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-all">
<div className="flex items-start gap-3.5">
<input className="mt-1 w-5 h-5 accent-primary shrink-0" name="payment_channel" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-[#e60000] text-white font-extrabold text-[12px] tracking-tight">Airtel</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Airtel Money</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">USSD *185#</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                    Pay securely using Airtel Money PIN prompt on your registered Airtel SIM.
                  </p>
</div>
</div>
</label>

<label className="block p-4 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-all">
<div className="flex items-start gap-3.5">
<input className="mt-1 w-5 h-5 accent-primary shrink-0" name="payment_channel" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex gap-1">
<span className="px-2 py-0.5 rounded bg-inverse-surface text-surface-container-lowest font-label-sm text-label-sm font-extrabold">VISA</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-extrabold">MC</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Credit / Debit Card</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">3D Secure Verified</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                    Supports Stanbic, Absa, Centenary Bank &amp; standard international cards.
                  </p>
</div>
</div>
</label>

<label className="block p-4 rounded-xl cursor-not-allowed bg-surface-container-lowest opacity-60">
<div className="flex items-start gap-3.5">
<input className="mt-1 w-5 h-5 accent-primary shrink-0 cursor-not-allowed" disabled={true} name="payment_channel" type="radio" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<Icon name="store" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg font-bold text-secondary">Cash on Collection at Central Hub</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold">Hub Only</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">
                    Available solely when "SwiftCart William St Central Hub" is selected as delivery method.
                  </p>
</div>
</div>
</label>
</div>
</section>
</div>

<div className="w-full md:w-[38%] shrink-0 flex flex-col gap-5 sticky top-20">

<div className="bg-surface-container-lowest rounded-xl shadow-md p-5 flex flex-col gap-4">
<div className="flex items-center justify-between pb-3 border-b-0">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Order Summary</h3>
<span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-surface-container text-secondary">
              2 Vendors • 3 Items
            </span>
</div>

<div className="space-y-3">

<div className="flex items-center gap-3">
<div className="relative w-14 h-14 rounded-lg overflow-hidden bg-surface-container-low shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="High resolution commercial studio product photography of professional wireless Bluetooth earbuds in sleek matte black charging case resting on polished surface with warm ambient lighting" src={`${assetBase}/images/94cc3774fddf38d4.webp`} />
<span className="absolute bottom-0 right-0 bg-inverse-surface/85 text-surface-container-lowest font-label-sm text-label-sm px-1 rounded-tl font-bold">1x</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<span className="bg-inverse-surface text-surface-container-lowest font-label-sm text-label-sm px-1.5 py-0.2 rounded">Official</span>
<p className="font-label-md text-label-md font-bold text-on-surface truncate">Sony WF-1000XM5 ANC Earbuds</p>
</div>
<p className="font-body-sm text-body-sm text-secondary">Anker Tech Kampala</p>
<p className="font-label-md text-label-md font-extrabold text-on-surface mt-0.5">UGX 245,000</p>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative w-14 h-14 rounded-lg overflow-hidden bg-surface-container-low shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Commercial tech photography of an ultra-slim 20000mAh fast charge power bank with digital LED battery percentage display and braided orange cables on slate table" src={`${assetBase}/images/05341247dc81cfa9.webp`} />
<span className="absolute bottom-0 right-0 bg-inverse-surface/85 text-surface-container-lowest font-label-sm text-label-sm px-1 rounded-tl font-bold">2x</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">Verified</span>
<p className="font-label-md text-label-md font-bold text-on-surface truncate">Baseus 65W GaN Fast Charger</p>
</div>
<p className="font-body-sm text-body-sm text-secondary">Simba Telecom Direct</p>
<p className="font-label-md text-label-md font-extrabold text-on-surface mt-0.5">UGX 153,500 <span className="font-body-sm text-body-sm font-normal text-secondary">(76,750 ea)</span></p>
</div>
</div>
</div>

<div className="space-y-2 pt-3 bg-surface-container-low/70 -mx-5 px-5 py-4">
<div className="flex items-center justify-between font-body-md text-body-md text-secondary">
<span>Items Total (3)</span>
<span className="font-semibold text-on-surface">UGX 398,500</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-tertiary">
<span className="flex items-center gap-1">
<Icon name="local_offer" className="text-[16px]" />
                Kampala Flash Promo
              </span>
<span className="font-bold">-UGX 15,000</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md text-secondary">
<span className="flex items-center gap-1">
<Icon name="two_wheeler" className="text-[16px]" />
                Express Boda Transit
              </span>
<span className="font-semibold text-on-surface">UGX 5,000</span>
</div>
<div className="h-[1px] bg-outline-variant/30 my-2"></div>
<div className="flex items-baseline justify-between pt-1">
<div>
<span className="font-label-lg text-label-lg font-bold text-on-surface block">Total Payable</span>
<span className="font-label-sm text-label-sm text-secondary">All Uganda taxes &amp; VAT included</span>
</div>
<div className="text-right">
<span className="font-price-display text-price-display font-black text-primary">UGX 388,500</span>
</div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container text-on-surface space-y-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary text-surface-container-lowest flex items-center justify-center">
<Icon name="lock_clock" className="text-[14px]" />
</div>
<span className="font-label-md text-label-md font-bold text-tertiary uppercase tracking-wide">
                SwiftCart Escrow Vault
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-snug">
              Your payment is strictly locked in safe escrow until Dennis inspects the items and provides the secret <strong className="text-on-surface font-semibold">6-digit handover OTP</strong> to the courier.
            </p>
</div>

<button className="w-full h-13 py-3.5 px-4 rounded-xl bg-primary-container hover:bg-primary transition-all duration-150 text-surface-container-lowest font-headline-sm text-headline-sm font-extrabold shadow-lg shadow-primary-container/30 flex items-center justify-center gap-2 active:scale-[0.98]" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[22px]" />
<span>Pay UGX 388,500 with MTN MoMo</span>
</button>

<div className="flex flex-col items-center gap-1.5 pt-1 text-center">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<Icon name="security" className="text-[16px] text-tertiary" />
<span>100% Money-Back Escrow Guarantee • Instant USSD Prompt</span>
</div>
<p className="font-body-sm text-body-sm text-secondary text-[11px]">
              By proceeding, you agree to the <a className="text-primary hover:underline" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>SwiftCart Buyer Protection Terms</a>.
            </p>
</div>
</div>

<div className="rounded-xl p-4 bg-surface-container-high/60 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[24px]" />
</div>
<div className="min-w-0">
<h4 className="font-label-md text-label-md font-bold text-on-surface">Inspected Delivery Protocol</h4>
<p className="font-body-sm text-body-sm text-secondary">
              Not what Dennis ordered? Return immediately with the rider at zero extra expense.
            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-low py-4 shadow-[0_-1px_6px_rgba(15,23,42,0.02)]"><div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left"><div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm"><Icon name="lock" className="text-[16px] text-tertiary" /><span>256-Bit SSL Encrypted Kampala Commerce Protocol</span></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda. Guaranteed Safe Delivery.</p></div></footer>
    </div>
  );
};

export default Screen;
