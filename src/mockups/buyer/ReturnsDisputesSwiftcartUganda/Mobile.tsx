// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/returns_disputes_swiftcart_uganda/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface ReturnsDisputesSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ReturnsDisputesSwiftcartUganda: React.FC<ReturnsDisputesSwiftcartUgandaProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-space-sm flex items-center justify-between"><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all"><Icon name="arrow_back" className="text-[24px]" /></button><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[200px]">Returns And Disputes</h1></div><div className="flex items-center gap-space-xs"><button aria-label="Customer Support" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"><Icon name="support_agent" className="text-[22px]" /></button><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/images/a0089007abbe614b.webp" /></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen pb-safe"><div className="flex flex-col w-full pb-32">
<div className="px-margin pt-space-md flex flex-col gap-space-lg">

<div className="rounded-xl p-space-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-tertiary-fixed/20 pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary-container shadow-sm">
<Icon name="verified_user" className="text-[16px]" />
<span className="font-label-sm text-label-sm tracking-wide uppercase">Swift Escrow Vault</span>
</div>
<div className="flex items-center gap-1 text-tertiary">
<Icon name="lock" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold uppercase">Locked</span>
</div>
</div>
<div className="flex flex-col gap-1 mt-1">
<h2 className="font-headline-sm text-headline-sm text-on-secondary-fixed">UGX 265,000 Frozen in Escrow</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Your payment is held safely in our central escrow account. The merchant cannot withdraw these funds until this dispute reaches resolution.
        </p>
</div>
<div className="flex items-center gap-2 pt-1">
<Icon name="policy" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md text-secondary">Bank of Uganda Digital Trust Protocol v2.4</span>
</div>
</div>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">1</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed">Select Item(s) to Return</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded-full">Order #SW-98421</span>
</div>

<label className="group relative block rounded-xl p-space-md bg-surface-container-lowest shadow-sm cursor-pointer transition-all active:scale-[0.99]">
<div className="flex items-start gap-3">
<div className="pt-1">
<input checked={true} className="w-5 h-5 accent-primary rounded cursor-pointer" type="checkbox" />
</div>
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Matte midnight black over-ear ANC wireless headphones resting on minimalist wood surface with clean studio lighting" src="/images/daa49fc70217d62a.webp" />
</div>
<div className="flex-1 min-w-0 flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-lg text-label-lg text-on-secondary-fixed truncate">SoundCore Space One ANC</span>
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed px-1.5 py-0.5 rounded uppercase">Selected</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Midnight Black • Official Anker Store</p>
<p className="font-headline-sm text-headline-sm text-primary-container mt-1">UGX 265,000</p>
</div>
</div>
</label>

<label className="group relative block rounded-xl p-space-md bg-surface-container-lowest shadow-sm opacity-60 cursor-pointer transition-all">
<div className="flex items-start gap-3">
<div className="pt-1">
<input className="w-5 h-5 accent-primary rounded cursor-pointer" type="checkbox" />
</div>
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Sleek black high capacity Oraimo power bank with digital percentage battery display on soft warm surface" src="/images/a8096eb894255ee5.webp" />
</div>
<div className="flex-1 min-w-0 flex flex-col gap-0.5">
<div className="flex items-center justify-between gap-1">
<span className="font-label-lg text-label-lg text-on-secondary-fixed truncate">Oraimo Toast 10 Pro 10000mAh</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Keep item</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Space Grey • Delivered in good condition</p>
<p className="font-headline-sm text-headline-sm text-on-surface mt-1">UGX 65,000</p>
</div>
</div>
</label>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">2</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed">Choose Return Reason</h3>
</div>
<div className="flex flex-col gap-2 rounded-xl p-space-sm bg-surface-container-lowest shadow-sm">

<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input checked={true} className="w-4 h-4 accent-primary" name="reason" type="radio" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-secondary-fixed">Defective / does not power on</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hardware fault, dead battery, or zero audio</span>
</div>
</div>
<Icon name="bolt" className="text-primary text-[20px]" />
</label>

<label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-primary" name="reason" type="radio" />
<span className="font-label-lg text-label-lg text-on-surface">Wrong item or color delivered</span>
</div>
<Icon name="swap_horiz" className="text-on-surface-variant text-[20px]" />
</label>

<label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-primary" name="reason" type="radio" />
<span className="font-label-lg text-label-lg text-on-surface">Missing parts or physical transit damage</span>
</div>
<Icon name="inventory_2" className="text-on-surface-variant text-[20px]" />
</label>

<label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-primary" name="reason" type="radio" />
<span className="font-label-lg text-label-lg text-on-surface">Counterfeit / not genuine official product</span>
</div>
<Icon name="gpp_bad" className="text-on-surface-variant text-[20px]" />
</label>

<label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-primary" name="reason" type="radio" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Changed mind</span>
<span className="font-body-sm text-body-sm text-tertiary">Eligible under Swift 7-day remorse policy</span>
</div>
</div>
<Icon name="replay" className="text-on-surface-variant text-[20px]" />
</label>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">3</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed">Evidence &amp; Issue Notes</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">2/5 Files attached</span>
</div>
<div className="flex flex-col gap-space-md rounded-xl p-space-md bg-surface-container-lowest shadow-sm">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-secondary-fixed">Issue Description</label>
<div className="relative w-full rounded-lg bg-surface-container-low p-3">
<p className="font-body-md text-body-md text-on-surface">Left ear cup does not produce audio when powered on and Bluetooth connected. Checked with original 3.5mm aux cable too; completely dead on left side.</p>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-right">124/500 characters</span>
</div>

<div className="flex flex-col gap-1.5">
<span className="font-label-md text-label-md text-on-secondary-fixed">Photo &amp; Video Documentation</span>
<div className="grid grid-cols-3 gap-2">

<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-high group">
<img className="w-full h-full object-cover" data-alt="Close up high detail photograph of unboxed headphones showing immaculate earcups and connection ports under bright warm lighting" src="/images/32fcc61d5799798d.webp" />
<div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[14px]" />
</div>
<span className="absolute bottom-1 left-1 px-1 rounded bg-inverse-surface/75 text-inverse-on-surface font-label-sm text-label-sm text-[9px]">Photo 1</span>
</div>

<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-high group">
<img className="w-full h-full object-cover" data-alt="Macro shot of retail electronics packaging box displaying barcode and authentic serial number sticker" src="/images/da1346f7698ae3f6.webp" />
<div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<Icon name="check" className="text-[14px]" />
</div>
<span className="absolute bottom-1 left-1 px-1 rounded bg-inverse-surface/75 text-inverse-on-surface font-label-sm text-label-sm text-[9px]">Serial Box</span>
</div>

<button className="aspect-square rounded-lg bg-surface-container flex flex-col items-center justify-center gap-1 text-on-surface-variant active:scale-95 transition-all text-center p-2">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary">
<Icon name="add_a_photo" className="text-[20px]" />
</div>
<span className="font-label-sm text-label-sm leading-tight text-on-secondary-fixed">Add Clip or Photo</span>
</button>
</div>
</div>
<div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant">
<Icon name="verified" className="text-secondary text-[18px]" />
<p className="font-body-sm text-body-sm leading-tight">Clear photos of serial numbers expedite merchant approval by over 85%.</p>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">4</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed">Select Return Method</h3>
</div>
<div className="flex flex-col gap-2 rounded-xl p-space-sm bg-surface-container-lowest shadow-sm">

<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 accent-primary mt-1" name="pickup" type="radio" />
<div className="flex-1 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-secondary-fixed">Swift Express Boda Pickup</span>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded-full font-bold">FREE PICKUP</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Rider collects from Plot 14 Kira Road, Nakawa tomorrow</p>
<div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm pt-0.5">
<Icon name="schedule" className="text-[16px]" />
<span>Window: 9:00 AM – 1:00 PM</span>
</div>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 accent-primary mt-1" name="pickup" type="radio" />
<div className="flex-1 flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Kampala Central Posta / Hub Drop</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Self-service</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Drop parcel at Kampala General Post Office or Nakawa Market Agent hub within 48 hours.</p>
</div>
</label>
</div>
</section>

<section className="flex flex-col gap-space-sm">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">5</span>
<h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed">Refund Destination</h3>
</div>
<div className="flex flex-col gap-2 rounded-xl p-space-sm bg-surface-container-lowest shadow-sm">

<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input checked={true} className="w-4 h-4 accent-primary" name="refund_target" type="radio" />
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
<span className="font-label-lg text-label-lg text-on-secondary-fixed">MTN MoMo Instant Refund</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">+256 772 345 678 (Original payment account)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/15 px-2 py-0.5 rounded font-bold">Direct Rail</span>
</label>

<label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-primary" name="refund_target" type="radio" />
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">SwiftCart Store Credit</span>
<span className="font-label-sm text-label-sm text-primary-container bg-primary-fixed px-1.5 rounded">+ UGX 5,000 BONUS</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant wallet credit with zero telecom transfer latency</span>
</div>
</div>
<Icon name="redeem" className="text-primary-container text-[20px]" />
</label>
</div>
</section>

<details className="group rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
<summary className="flex items-center justify-between p-space-md cursor-pointer list-none select-none">
<div className="flex items-center gap-2">
<Icon name="history" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-secondary-fixed">Dispute History (1 Previous Case)</span>
</div>
<Icon name="expand_more" className="text-on-surface-variant group-open:rotate-180 transition-transform text-[20px]" />
</summary>
<div className="p-space-md pt-0 flex flex-col gap-2">
<div className="rounded-lg p-3 bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Case #RET-1092</span>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary">
<Icon name="check_circle" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-bold">Settled &amp; Refunded</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">UGX 45,000 sent to MTN MoMo (+256 772 345 678) • Settled in 6 hours</p>
<div className="flex items-center gap-1 text-[11px] font-label-sm text-secondary">
<span>Resolved Jan 18, 2025</span>
<span>•</span>
<span className="underline cursor-pointer">View statement</span>
</div>
</div>
</div>
</details>
</div>

<div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(14,27,77,0.06)] px-margin py-space-md flex flex-col gap-2">
<div className="flex items-center justify-center gap-1.5 text-secondary">
<Icon name="verified" className="text-[16px] text-tertiary" />
<p className="font-label-sm text-label-sm text-center">Disputes resolved within 24 hours under Bank of Uganda eCommerce consumer guidelines</p>
</div>
<button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(218,55,0,0.30)] active:scale-[0.98] transition-all" id="submitDisputeBtn">
<Icon name="assignment_turned_in" className="text-[20px]" />
<span>Submit Return Request</span>
</button>
</div>
</div>
</main>
    </div>
  );
};

export default ReturnsDisputesSwiftcartUganda;
