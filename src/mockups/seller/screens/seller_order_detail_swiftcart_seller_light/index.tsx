// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/seller_order_detail_swiftcart_seller_light/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assetBase = '';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-low transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="chevron_left" className="text-[24px]" /></button><div className="flex items-center gap-space-xs pl-space-xs"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/logo-full.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Uganda Ops</span><span className="font-headline-sm text-headline-sm leading-tight text-on-surface font-bold">Order Management</span></div></div></div><div className="flex items-center gap-space-sm"><div aria-label="User avatar" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-8">

<div className="px-margin pt-space-xs pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Live Kampala Dispatch Node</span>
<span className="text-secondary font-body-sm text-[10px]">•</span>
<span className="font-label-sm text-[10px] text-secondary">Sync: 1s ago</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full font-bold">NODE 04-KLA</span>
</div>

<div className="mx-margin mb-space-md bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-start gap-space-sm relative overflow-hidden transition-all duration-300" id="opAlertBanner">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
<Icon name="notifications_active" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0 pr-space-md">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold">Operational Alerts</span>
<span className="bg-primary text-on-primary font-label-sm text-[9px] px-1.5 py-0.2 rounded-full font-bold">3 NEW</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate mt-0.5">Payout batch <span className="font-bold text-on-surface">UGX 8,450,000</span> scheduled for tomorrow 10:00 EAT</p>
</div>
<button aria-label="Dismiss alert" className="w-7 h-7 flex items-center justify-center text-secondary hover:text-on-surface rounded-full" onClick={() => alertToast('Action triggered')}>
<Icon name="close" className="text-[16px]" />
</button>
</div>
<div className="px-margin flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">#SC-ORD-9488</span>
<button className="text-secondary hover:text-primary transition-colors" title="Copy Order ID" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}>
<Icon name="content_copy" className="text-[16px]" />
</button>
</div>
<div className="flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed-variant px-space-sm py-1 rounded-full">
<Icon name="two_wheeler" className="text-[14px]" />
<span className="font-label-sm text-label-sm uppercase font-bold tracking-tight">Ready for Boda Dispatch</span>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified_user" className="text-[16px]" />
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-[10px] text-tertiary font-bold tracking-wide uppercase">Escrow Secured Lock</span>
<span className="text-secondary font-label-sm text-[9px]">• MTN MoMo Vault</span>
</div>
<span className="font-body-sm text-[11px] text-secondary">Ledger Confirmed &amp; Payout Guaranteed</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-[10px] text-secondary uppercase block">Locked</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary">UGX 248,500</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Consignee Details</span>
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full text-secondary">
<Icon name="lock" className="text-[12px]" />
<span className="font-label-sm text-[10px] font-semibold">GDPR / DPA Masked</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold font-label-lg shrink-0">
            DM
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dennis M.</span>
<Icon name="verified" className="text-tertiary text-[16px]" />
</div>
<div className="flex items-center gap-1 text-secondary">
<Icon name="location_on" className="text-[14px]" />
<span className="font-body-sm text-body-sm truncate text-on-surface-variant">Nakasero, Kampala Central</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1 shrink-0">
<span className="font-body-sm text-[11px] text-secondary tracking-widest">07••••••123</span>
<a className="flex items-center gap-1 bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-full text-on-surface text-label-sm font-semibold transition-colors" href="tel:+256700000000" onClick={() => alertToast('Action triggered')}>
<Icon name="phone_in_talk" className="text-[14px]" />
<span>Proxy Call</span>
</a>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Item Manifest (1)</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Standard Parcel</span>
</div>
<div className="flex gap-space-sm py-space-xs">
<div className="relative w-16 h-16 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="High-end sleek jet black active noise cancelling over-ear headphones on an orange and white commercial display background, studio commercial photography, soft shadow, ultra-clean product render." src={`${assetBase}/images/75442d445b708546.webp`} />
<span className="absolute bottom-0 right-0 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[9px] px-1 rounded-tl">1x</span>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-between">
<div>
<h3 className="font-label-lg text-label-lg font-bold text-on-surface truncate leading-tight">SoundCore Space One ANC Headphones</h3>
<p className="font-body-sm text-body-sm text-secondary truncate mt-0.5">Jet Black • Over-Ear • Wireless Bluetooth</p>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-label-sm text-[10px] text-secondary bg-surface-container px-1.5 py-0.5 rounded">SKU: SC-SPO-BLK</span>
<span className="font-label-lg text-label-lg font-extrabold text-on-surface">UGX 248,500</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-2 min-w-0">
<Icon name="qr_code_2" className="text-primary text-[20px]" />
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface truncate">SC-KLA-9488-PKG</span>
<span className="font-body-sm text-[10px] text-secondary truncate">Ready for thermal slip or laser dispatch</span>
</div>
</div>
<button className="flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant font-label-sm text-label-sm font-bold px-2 py-1 rounded bg-surface-container-lowest shadow-xs" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[14px]" />
<span>Print</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Fulfillment Trajectory</span>
<span className="font-label-sm text-[11px] text-primary font-bold">Step 3 of 4 Complete</span>
</div>
<div className="relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-3 before:w-[2px] before:bg-surface-container-highest">

<div className="relative flex items-start gap-space-sm">
<div className="absolute -left-6 mt-0.5 w-[22px] h-[22px] rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface">Order Placed &amp; Masked</span>
<span className="font-body-sm text-[11px] text-secondary">14:24</span>
</div>
<p className="font-body-sm text-[11px] text-secondary">Buyer confirmed cart via SwiftCart Mobile App</p>
</div>
</div>

<div className="relative flex items-start gap-space-sm">
<div className="absolute -left-6 mt-0.5 w-[22px] h-[22px] rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface">Payment Verified</span>
<span className="font-body-sm text-[11px] text-secondary">14:25</span>
</div>
<p className="font-body-sm text-[11px] text-secondary">MTN MoMo Escrow Lock UGX 248,500 settled in vault</p>
</div>
</div>

<div className="relative flex items-start gap-space-sm">
<div className="absolute -left-6 mt-0.5 w-[22px] h-[22px] rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="check" className="text-[14px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface">Merchant Packed &amp; Sealed</span>
<span className="font-body-sm text-[11px] text-secondary">14:40</span>
</div>
<p className="font-body-sm text-[11px] text-secondary">Tamper tape #ST-0931 attached to parcel outer box</p>
</div>
</div>

<div className="relative flex items-start gap-space-sm">
<div className="absolute -left-6 mt-0.5 w-[22px] h-[22px] rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-primary-fixed animate-pulse">
<Icon name="two_wheeler" className="text-[13px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-primary">Awaiting Courier Dispatch</span>
<span className="font-label-sm text-[11px] text-primary font-bold">Active</span>
</div>
<p className="font-body-sm text-[11px] text-secondary">3 Boda couriers currently within 800m of Nakasero pick point</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<button className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="two_wheeler" className="text-[20px]" />
<span>Assign Rider / Request Boda</span>
</button>
<button className="w-full h-11 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="receipt_long" className="text-[18px]" />
<span>Print Waybill &amp; Shipping Label</span>
</button>
<div className="text-center pt-2">
<button className="font-label-sm text-label-sm text-error hover:underline transition-all" type="button" onClick={() => alertToast('Action triggered')}>
          Cancel / Out of Stock
        </button>
</div>
</div>
</div>
</div></main>
    </div>
  );
};

export default Screen;
