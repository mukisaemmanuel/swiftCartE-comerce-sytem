// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/escrow_disputes_swiftcart_admin/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface EscrowDisputesSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EscrowDisputesSwiftcartAdmin: React.FC<EscrowDisputesSwiftcartAdminProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      {drawerOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setDrawerOpen(false)} />}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><button type="button" className="sidebar-hamburger-btn lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[22px]" /></button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button" onClick={() => setDrawerOpen(true)}><Icon name="menu" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col ml-space-xs"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider leading-none">Uganda Staff</span><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[130px]">SwiftCart Admin</span></div></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><button className="w-11 h-11 relative flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary-container rounded-full"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className={`fixed top-0 left-0 bottom-0 w-[310px] max-w-[85vw] bg-surface-container-lowest z-50  transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14)] fixed z-50 select-none ${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 ${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}`} id="admin-drawer"><div className="flex lg:hidden justify-end px-3 pt-2 pb-0"><button type="button" className="sidebar-close-btn p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" aria-label="Close menu" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="p-space-lg bg-surface-container-low"><div className="flex items-start justify-between"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">PN</div><div><h2 className="font-label-lg text-label-lg text-on-surface leading-tight">Patricia Namubiru</h2><p className="font-body-sm text-body-sm text-secondary">Operations Lead</p></div></div><button className="w-9 h-9 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-variant" type="button" onClick={() => setDrawerOpen(false)}><Icon name="close" className="text-[20px]" /></button></div><div className="mt-space-md flex items-center justify-between"><span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>Admin (Read/Decide Only)</span><span className="font-label-sm text-label-sm text-secondary">KLA HQ</span></div></div><div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md"><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Overview</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overview" href="#" onClick={() => setDrawerOpen(false)}><Icon name="dashboard" className="text-[20px] text-primary" /><span className="font-body-md text-body-md">Overview</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Sellers</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="seller-applications-kyc" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="badge" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Seller Applications &amp; KYC</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">14</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="sellers-directory" href="#" onClick={() => setDrawerOpen(false)}><Icon name="storefront" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Sellers Directory</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Riders</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="riders-couriers" href="#" onClick={() => setDrawerOpen(false)}><Icon name="two_wheeler" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Riders (Couriers)</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Orders</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="orders" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="shopping_cart_checkout" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Orders</span></div><span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">189</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Products</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="product-moderation" href="#" onClick={() => setDrawerOpen(false)}><Icon name="fact_check" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Product Moderation</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Payments</p><a className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="escrow-disputes" href="#" onClick={() => setDrawerOpen(false)}><div className="flex items-center gap-space-sm"><Icon name="gavel" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Escrow &amp; Disputes</span></div><span className="px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">6</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="payout-queue" href="#" onClick={() => setDrawerOpen(false)}><Icon name="payments" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Payout Queue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="overpayments-refunds" href="#" onClick={() => setDrawerOpen(false)}><Icon name="currency_exchange" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Overpayments &amp; Refunds</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="commission" href="#" onClick={() => setDrawerOpen(false)}><Icon name="percent" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Commission</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Logistics</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="locked-dispatches" href="#" onClick={() => setDrawerOpen(false)}><Icon name="local_shipping" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Locked Dispatches</span></a></div><div className="space-y-space-xs"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">Storefront</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="homepage-ads" href="#" onClick={() => setDrawerOpen(false)}><Icon name="campaign" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Homepage &amp; Ads</span></a></div><div className="space-y-space-xs pb-space-sm"><p className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary">System</p><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" data-path="audit-log" href="#" onClick={() => setDrawerOpen(false)}><Icon name="manage_history" className="text-[20px] text-secondary" /><span className="font-body-md text-body-md">Audit Log</span></a></div></div><div className="p-space-md bg-surface-container-low flex items-center justify-between"><span className="font-body-sm text-body-sm text-secondary">v2.4.1 (UG-Cluster)</span><button className="text-error font-label-sm text-label-sm flex items-center gap-1" type="button" onClick={() => setDrawerOpen(false)}><Icon name="logout" className="text-[16px]" />Exit</button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="px-margin pt-space-md pb-space-xs flex items-center justify-between"><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">Escrow &amp; Disputes</h1><span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Live MTN/Airtel</span></div><div className="flex-1 w-full px-margin"><div className="flex flex-col w-full pb-8">

<div className="mb-space-sm rounded-xl bg-surface-container-high p-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
<Icon name="verified_user" className="text-[16px]" />
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">Trust Protocol</span>
<span className="font-label-md text-label-md text-on-surface truncate">Bank of Uganda Escrow Trust</span>
</div>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-lowest text-tertiary shadow-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>SafeBoda Live API
    </span>
</div>

<div className="w-full overflow-x-auto pb-space-xs flex gap-space-xs items-center scrollbar-none">
<button className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 shrink-0 shadow-sm">
<Icon name="gavel" className="text-[15px]" />
      Disputed (4)
    </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-secondary font-label-md text-label-md flex items-center gap-1.5 shrink-0">
<Icon name="lock_clock" className="text-[15px]" />
      Escrow Frozen (2)
    </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-secondary font-label-md text-label-md flex items-center gap-1.5 shrink-0">
<Icon name="hourglass_top" className="text-[15px]" />
      Release Pending (3)
    </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container text-secondary font-label-md text-label-md flex items-center gap-1.5 shrink-0">
<Icon name="check_circle" className="text-[15px]" />
      Resolved (18)
    </button>
</div>

<div className="mt-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">Critical Arbitrage</span>
<span className="font-label-sm text-label-sm text-secondary">Case #RT-309</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Sony WH-1000XM4 ANC</h2>
<span className="font-body-sm text-body-sm text-secondary">Order #SC-8921 • Kampala Central Cluster</span>
</div>
<div className="text-right shrink-0">
<span className="font-label-sm text-label-sm text-secondary block">Frozen Escrow</span>
<span className="font-price-display text-price-display text-primary-container leading-none">UGX 280k</span>
</div>
</div>

<div className="mt-space-sm rounded-lg bg-surface-container-low p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="account_balance" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-on-surface">Escrow Vault Balance:</span>
</div>
<span className="font-label-md text-label-md text-tertiary">UGX 280,000 Protected</span>
</div>
</div>

<div className="mt-space-sm space-y-space-sm">

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-md text-label-md">AK</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Alex K. (Buyer)</p>
<p className="font-label-sm text-label-sm text-secondary">Kololo, Kampala • MTN MoMo User</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Buyer Statement</span>
</div>
<div className="rounded-lg bg-surface-container-low p-space-sm mt-space-xs">
<p className="font-body-md text-body-md text-on-surface leading-snug">
          “Left ear cup does not power on after unboxing. Tamper seal was intact upon delivery, but internal acoustic driver is dead. Device will not reset or accept firmware.”
        </p>
</div>
<div className="mt-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<Icon name="history" className="text-[14px]" />
        Dispute logged 4 hours post SafeBoda delivery
      </div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-inverse-surface text-inverse-on-surface flex items-center justify-center font-label-md text-label-md">KS</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Kikuubo Sound Hub</p>
<p className="font-label-sm text-label-sm text-secondary">Tier 2 Merchant • 98.4% Fulfillment</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Merchant Rebuttal</span>
</div>
<div className="rounded-lg bg-surface-container-low p-space-sm mt-space-xs">
<p className="font-body-md text-body-md text-on-surface leading-snug">
          “Tested 100% operational before boxing on outbound bench. Audio sweep frequency and battery retention verified. Buyer may have drained the unit or used incompatible high-wattage fast charger.”
        </p>
</div>
<div className="mt-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<Icon name="store" className="text-[14px]" />
        Bench Technician ID: QA-KLA-19
      </div>
</div>
</div>

<div className="mt-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="perm_media" className="text-primary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Evidence Dossier</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">4 High-Res Artifacts</span>
</div>

<div className="grid grid-cols-2 gap-space-xs mb-space-sm">
<button className="py-1.5 px-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md text-center transition-colors shadow-sm" id="tab-buyer-btn">
        Buyer Uploads (3)
      </button>
<button className="py-1.5 px-space-xs rounded-lg bg-surface-container text-secondary font-label-md text-label-md text-center transition-colors" id="tab-merchant-btn">
        Merchant Bench (1)
      </button>
</div>

<div className="space-y-space-sm" id="buyer-evidence-deck">
<div className="grid grid-cols-3 gap-space-xs">
<div className="flex flex-col">
<div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Close up photograph of intact holographic tamper seal label marked UG-SEAL-8891 on a sleek black electronics box in daylight, sharp detail and micro text readable." src="/images/3120e154604f4638.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm">Seal</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface mt-1 truncate">UG-SEAL-8891</span>
</div>
<div className="flex flex-col">
<div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Macro photography of Sony headset power button LED indicator remaining dark and unlit while plugged into USB-C charging cord on wooden surface." src="/images/423ba5b1351e1185.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm">Power LED</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface mt-1 truncate">Zero Indicator</span>
</div>
<div className="flex flex-col">
<div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Top down view of an opened consumer electronics product packaging showing serial barcode label and audio cables laid out on light marble background." src="/images/19b96da0280519de.webp" />
<span className="absolute bottom-1 left-1 px-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm">Box Casing</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface mt-1 truncate">Complete Kit</span>
</div>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="check" className="text-[15px] text-tertiary" />
          Exif Metadata: Geotagged Kampala Central
        </span>
<span>14:12 EAT</span>
</div>
</div>

<div className="space-y-space-sm hidden" id="merchant-evidence-deck">
<div className="w-full h-36 rounded-lg overflow-hidden relative bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Technical testing laboratory workbench with an audio technician connecting black premium headphones to an oscilloscope audio sweep testing display monitor." src="/images/d3afe6b155543519.webp" />
<div className="absolute bottom-2 left-2 right-2 p-space-xs rounded bg-inverse-surface/85 text-inverse-on-surface flex items-center justify-between">
<span className="font-label-sm text-label-sm">Pre-dispatch Automated Sweep PASSED</span>
<span className="font-label-sm text-label-sm">09:44 EAT</span>
</div>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-low flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>QA Bench Rig #04 • Serial Confirmed</span>
<span className="text-tertiary font-bold">100% Signal Pass</span>
</div>
</div>
</div>

<div className="mt-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="two_wheeler" className="text-secondary text-[20px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Courier Chronology</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">SafeBoda Courier #SB-4402</span>
</div>
<div className="space-y-space-sm pl-2">

<div className="flex items-start gap-space-sm relative">
<div className="w-3 h-3 rounded-full bg-tertiary mt-1 shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Order Dispatched from Kikuubo Hub</span>
<span className="font-label-sm text-label-sm text-secondary">10:15 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Rider Denis Mukasa (ID: UG-R-9081) picked up parcel sealed with UG-SEAL-8891.</p>
</div>
</div>

<div className="flex items-start gap-space-sm relative">
<div className="w-3 h-3 rounded-full bg-tertiary mt-1 shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Delivered to Alex K. (Kololo)</span>
<span className="font-label-sm text-label-sm text-secondary">11:02 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Receiver entered OTP-9912. Tamper proof outer sleeve marked undisturbed.</p>
</div>
</div>

<div className="flex items-start gap-space-sm relative">
<div className="w-3 h-3 rounded-full bg-primary-container mt-1 shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary-container">Formal Dispute Lodged</span>
<span className="font-label-sm text-label-sm text-secondary">15:10 EAT</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Buyer declared non-functional acoustic driver; automated escrow release frozen.</p>
</div>
</div>
</div>
</div>

<div className="mt-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Binding Arbitration</h3>
<p className="font-body-sm text-body-sm text-secondary">Final judicial order on UGX 280,000 Escrow</p>
</div>
<Icon name="balance" className="text-primary-container text-[24px]" />
</div>

<div className="space-y-space-xs">

<button className="w-full py-3 px-space-md rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-between active:scale-[0.99] transition-all shadow-sm">
<div className="flex items-center gap-space-sm">
<Icon name="currency_exchange" className="text-[20px]" />
<span>Refund Buyer in Full</span>
</div>
<span className="font-price-display text-[15px] font-bold">UGX 280,000</span>
</button>

<button className="w-full py-2.5 px-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center justify-between active:scale-[0.99] transition-all">
<div className="flex items-center gap-space-sm">
<Icon name="send_money" className="text-[20px] text-tertiary" />
<span>Release Escrow to Seller</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Full Payout</span>
</button>

<button className="w-full py-2.5 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center justify-between active:scale-[0.99] transition-all">
<div className="flex items-center gap-space-sm">
<Icon name="call_split" className="text-[20px] text-secondary" />
<span>Authorize Partial Refund Split</span>
</div>
<span className="font-label-sm text-label-sm text-primary">Custom UGX</span>
</button>

<button className="w-full py-2 px-space-md rounded-xl bg-surface-container-low text-error font-label-md text-label-md flex items-center justify-center gap-space-xs active:scale-[0.99] transition-all">
<Icon name="biotech" className="text-[18px]" />
<span>Escalate: Central Hub Physical Inspection</span>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-end sm:items-center justify-center p-space-sm" id="arbitration-modal">
<div className="w-full max-w-sm rounded-xl bg-surface-container-lowest p-space-md shadow-xl flex flex-col space-y-space-sm max-h-[795px] overflow-y-auto">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center" id="modal-icon-bg">
<Icon name="gavel" className="text-[20px]" />
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface" id="modal-title">Arbitration Decision</h4>
<p className="font-body-sm text-body-sm text-secondary">Case #RT-309 • Immutable Log</p>
</div>
</div>
<button className="w-8 h-8 rounded-lg text-secondary hover:bg-surface-container flex items-center justify-center" onClick={() => setDrawerOpen(false)}>
<Icon name="close" className="text-[20px]" />
</button>
</div>

<div className="rounded-lg bg-surface-container p-space-sm flex flex-col space-y-1" id="modal-summary">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-secondary">Selected Ruling</span>
<span className="font-label-md text-label-md text-on-surface font-bold" id="modal-ruling-name">Refund Buyer in Full</span>
</div>
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-secondary">Capital Impact</span>
<span className="font-label-md text-label-md text-primary-container" id="modal-ruling-amount">UGX 280,000 via MoMo</span>
</div>
</div>

<div className="hidden space-y-space-xs" id="partial-split-fields">
<label className="font-label-sm text-label-sm text-secondary block">Define Escrow Allocation (UGX)</label>
<div className="grid grid-cols-2 gap-space-xs">
<div>
<span className="font-label-sm text-label-sm text-secondary block mb-0.5">To Buyer</span>
<input className="w-full p-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md outline-none focus:bg-surface-container-lowest" id="split-buyer" type="number" value="140000" />
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary block mb-0.5">To Merchant</span>
<input className="w-full p-2 rounded-lg bg-surface-container-high text-secondary font-label-md text-label-md outline-none" id="split-merchant" readOnly={true} type="number" value="140000" />
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary">Must sum precisely to UGX 280,000</p>
</div>

<div className="space-y-space-xs">
<label className="font-label-sm text-label-sm text-on-surface block font-bold">
          Mandatory Arbiter Rationale <span className="text-error">*</span>
</label>
<textarea className="w-full p-2.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest placeholder:text-secondary" id="arbiter-reason" placeholder="Enter objective finding (e.g. Tamper seal verified intact while electronic driver confirmed non-responsive upon unboxing)..." rows={3}></textarea>
</div>

<div className="rounded-lg bg-surface-container-low p-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<Icon name="sync_alt" className="text-[16px] text-tertiary" />
<span>Auto-dispatches SafeBoda Return Courier to Buyer address</span>
</div>

<div className="flex gap-space-xs pt-space-xs">
<button className="flex-1 py-2.5 rounded-xl bg-surface-container text-secondary font-label-md text-label-md">
          Cancel
        </button>
<button className="flex-1 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1">
<Icon name="verified" className="text-[16px]" />
          Confirm Ruling
        </button>
</div>
</div>
</div>

<div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-2.5 rounded-full font-label-md text-label-md shadow-xl flex items-center gap-space-xs transition-opacity duration-300 opacity-0 pointer-events-none" id="toast">
<Icon name="check_circle" className="text-tertiary-fixed-dim text-[18px]" />
<span id="toast-message">Ruling logged to Bank of Uganda Escrow Trust</span>
</div>
</div>
</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(15,23,42,0.06)]" data-active-classes="text-primary-container font-bold"><div className="h-16 px-space-xs grid grid-cols-5 items-center"><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="overview" href="#"><Icon name="space_dashboard" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Overview</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors relative" data-path="seller-applications-kyc" href="#"><Icon name="how_to_reg" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">KYC</span><span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-primary-container"></span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="orders" href="#"><Icon name="inventory_2" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Orders</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="escrow-disputes" href="#"><Icon name="shield_with_heart" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Disputes</span></a><a className="flex flex-col items-center justify-center gap-0.5 py-1 text-secondary transition-colors" data-path="payout-queue" href="#"><Icon name="account_balance_wallet" className="text-[22px]" /><span className="font-label-sm text-label-sm leading-none">Payouts</span></a></div></nav>
    </div>
  );
};

export default EscrowDisputesSwiftcartAdmin;
