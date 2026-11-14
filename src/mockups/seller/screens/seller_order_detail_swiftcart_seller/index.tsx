// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/seller_order_detail_swiftcart_seller/code.html
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
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="h-16 px-space-sm flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary transition-colors flex-shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[20px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest truncate">SwiftCart Ops</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate tracking-tight">Seller Order Detail</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow"><Icon name="verified_user" className="text-[16px]" /><span className="font-label-sm text-label-sm font-bold">SECURE</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full pb-10">

<div className="px-margin pt-space-xs pb-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
<span className="text-emerald-escrow font-bold tracking-wider">LIVE KAMPALA DISPATCH NODE</span>
</div>
<span className="opacity-75">Sync: 1s ago</span>
</div>

<div className="px-margin mb-space-md">
<button className="w-full bg-surface-container-high rounded-xl p-space-md flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform text-left" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}>
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0 text-primary">
<Icon name="notifications_active" className="text-[18px]" />
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-action-gradient-start rounded-full"></span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Operational Alerts</span>
<span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px]">3 New</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Payout batch UGX 8,450,000 scheduled • Tap to review</p>
</div>
</div>
<Icon name="expand_more" className="text-on-surface-variant text-[20px] transition-transform duration-200" />
</button>

<div className="hidden mt-space-xs flex-col gap-space-xs" id="alerts-drawer">

<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm shadow-sm">
<div className="w-7 h-7 rounded-lg bg-emerald-escrow/15 text-emerald-escrow flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="shopping_bag" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Order #SC-ORD-9488 Received</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:24</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Customer committed escrow via MTN MoMo. Packed confirmation pending.</p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm shadow-sm">
<div className="w-7 h-7 rounded-lg bg-secondary-container text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="payments" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Merchant Settlement Scheduled</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:05</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Batch UGX 8,450,000 scheduled for release tomorrow 10:00 EAT directly to Stanbic ledger.</p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm shadow-sm">
<div className="w-7 h-7 rounded-lg bg-tertiary-container/30 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="verified" className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Dispute #9281 Resolved</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Closed in merchant favor following courier tamper seal proof verification.</p>
</div>
</div>
</div>
</div>

<div className="px-margin mb-space-md">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 font-headline-sm text-headline-sm text-primary shadow-inner">
            SC
          </div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Store Dispatch</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">#SC-ORD-9488</h2>
</div>
</div>

<div className="px-2.5 py-1 rounded-full bg-action-gradient-start/15 text-action-gradient-start flex items-center gap-1 flex-shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-action-gradient-start animate-pulse"></span>
<span className="font-label-sm text-label-sm">Ready for Boda Dispatch</span>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-xl bg-emerald-escrow/15 text-emerald-escrow flex items-center justify-center flex-shrink-0">
<Icon name="verified_user" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-sm text-label-sm text-emerald-escrow uppercase tracking-wider flex items-center gap-1">
              Escrow Secured Lock
            </div>
<div className="font-price-display text-price-display text-on-surface truncate">UGX 248,500</div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-[10px] block">MTN MoMo Vault</span>
<span className="font-body-sm text-[11px] text-tertiary">Ledger Confirmed</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Masked Recipient Profile</span>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-[10px]">
<Icon name="lock" className="text-[13px]" />
<span>GDPR/DPA Masked</span>
</div>
</div>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center flex-shrink-0 text-[14px] font-bold">
              DM
            </div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Dennis M.</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
<Icon name="location_on" className="text-[14px] text-primary flex-shrink-0" />
<span className="truncate">Nakasero, Kampala Central</span>
</div>
<div className="font-body-sm text-body-sm text-primary font-mono tracking-wider mt-0.5">
                07••••••123
              </div>
</div>
</div>

<button aria-label="Proxy Relay Call" className="px-space-md py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center gap-1 flex-shrink-0 active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="phone_in_talk" className="text-[16px] text-secondary" />
<span className="font-label-sm text-label-sm">Proxy Call</span>
</button>
</div>
</div>
</div>
</div>

<div className="px-margin mb-space-md">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="inventory_2" className="text-primary text-[18px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Order Items (1)</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded-full bg-surface-container-high">SKU Verified</span>
</div>

<div className="flex items-start gap-space-md bg-surface-container-highest/40 p-space-md rounded-xl">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-high flex-shrink-0" data-alt="Close up studio product shot of SoundCore Space One ANC Headphones in Jet Black on matte minimalist background with warm ambient edge lighting" src={`${assetBase}/images/875ec3f0882160c3.webp`} />
<div className="flex-1 min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Space One ANC Headphones</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
<span>Jet Black</span>
<span>•</span>
<span>Qty: 1</span>
</div>
<div className="font-label-sm text-label-sm font-mono text-on-surface-variant/80 mt-1">
            SKU: SC-SPO-BLK
          </div>
</div>
<div className="text-right flex-shrink-0">
<div className="font-label-lg text-label-lg text-on-surface">UGX 248,500</div>
<span className="font-label-sm text-label-sm text-emerald-escrow">Prepaid</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">

<div className="w-14 h-14 bg-surface-cream rounded-lg p-1.5 flex flex-col justify-between flex-shrink-0 shadow-sm">
<div className="flex justify-between items-center">
<span className="w-3.5 h-3.5 bg-surface-dark block rounded-[2px]"></span>
<span className="w-2 h-1.5 bg-surface-dark block"></span>
<span className="w-3.5 h-3.5 bg-surface-dark block rounded-[2px]"></span>
</div>
<div className="flex justify-center items-center gap-0.5">
<span className="w-2 h-2 bg-surface-dark block"></span>
<span className="w-3 h-1 bg-surface-dark block"></span>
<span className="w-1 h-2 bg-surface-dark block"></span>
</div>
<div className="flex justify-between items-end">
<span className="w-3.5 h-3.5 bg-surface-dark block rounded-[2px]"></span>
<span className="w-1.5 h-3 bg-surface-dark block"></span>
<span className="w-2.5 h-2.5 bg-surface-dark block"></span>
</div>
</div>
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block">SwiftCart Waybill Stamp</span>
<div className="font-code-display text-[15px] leading-5 text-on-surface tracking-wider font-mono">SC-KLA-9488-PKG</div>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate mt-0.5">Ready for thermal slip or laser dispatch sticker</p>
</div>
</div>
<button aria-label="Quick Print Stamp" className="w-10 h-10 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[20px]" />
</button>
</div>
</div>
</div>

<div className="px-margin mb-space-lg">
<div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fulfillment Trajectory</h3>
<span className="font-label-sm text-label-sm text-action-gradient-start font-semibold">Step 3 of 4</span>
</div>

<div className="relative flex flex-col gap-space-lg pl-3">

<div className="absolute left-[21px] top-3 bottom-4 w-0.5 bg-surface-container-highest"></div>

<div className="relative flex items-start gap-space-md">
<div className="w-5 h-5 rounded-full bg-emerald-escrow text-on-tertiary flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
<Icon name="check" className="text-[13px]" />
</div>
<div className="flex-1 flex items-start justify-between min-w-0">
<div>
<div className="font-label-md text-label-md text-on-surface">Order Placed &amp; Masked</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Standard Direct Delivery SLA</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0">14:24</span>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-5 h-5 rounded-full bg-emerald-escrow text-on-tertiary flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
<Icon name="check" className="text-[13px]" />
</div>
<div className="flex-1 flex items-start justify-between min-w-0">
<div>
<div className="font-label-md text-label-md text-on-surface">Payment Verified via MTN MoMo Escrow</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Custody ref: #MM-782190</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0">14:25</span>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-5 h-5 rounded-full bg-emerald-escrow text-on-tertiary flex items-center justify-center flex-shrink-0 z-10 shadow-sm mt-0.5">
<Icon name="check" className="text-[13px]" />
</div>
<div className="flex-1 flex items-start justify-between min-w-0">
<div>
<div className="font-label-md text-label-md text-on-surface">Merchant Packed &amp; Sealed</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Tamper tape #ST-0931 attached</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex-shrink-0">14:40</span>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-5 h-5 rounded-full bg-action-gradient-start text-on-primary flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_12px_rgba(255,138,31,0.6)] mt-0.5 animate-pulse">
<Icon name="two_wheeler" className="text-[14px]" />
</div>
<div className="flex-1 flex items-start justify-between min-w-0">
<div>
<div className="font-label-md text-label-md text-action-gradient-start font-bold">Awaiting Courier Dispatch</div>
<div className="font-body-sm text-body-sm text-on-surface">Ready at Merchant Desk • Kampala Central Hub Range</div>
</div>
<span className="font-label-sm text-label-sm text-action-gradient-start font-bold flex-shrink-0">Active</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-margin flex flex-col gap-space-sm mb-space-xl">

<button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-[0_4px_18px_rgba(218,55,0,0.35)] active:scale-[0.98] transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}>
<Icon name="two_wheeler" className="text-[22px]" />
<span>Assign Rider / Request Boda</span>
</button>

<button className="w-full h-12 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm shadow-sm active:scale-[0.98] transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="local_shipping" className="text-[18px]" />
<span>Print Waybill &amp; Shipping Label</span>
</button>

<div className="pt-space-xs flex justify-center">
<button className="px-space-lg py-2 rounded-xl text-error font-label-md text-label-md hover:bg-error-container/20 active:scale-95 transition-all flex items-center gap-1.5" onClick={() => alertToast('Action triggered')}>
<Icon name="cancel" className="text-[16px]" />
<span>Cancel / Out of Stock</span>
</button>
</div>
</div>

<div className="fixed bottom-6 inset-x-6 z-50 bg-surface-container-highest text-on-surface px-space-lg py-space-md rounded-xl shadow-xl flex items-center justify-between gap-space-sm transform translate-y-32 opacity-0 transition-all duration-300 pointer-events-none" id="toast-pill">
<div className="flex items-center gap-space-sm">
<Icon name="check_circle" className="text-tertiary text-[20px]" />
<span className="font-body-md text-body-md" id="toast-text">Action synchronized with network</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">200 OK</span>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
