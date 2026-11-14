// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/commission_rates_earnings_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface CommissionRatesEarningsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CommissionRatesEarningsSwiftcartAdmin: React.FC<CommissionRatesEarningsSwiftcartAdminProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  const { theme, toggleTheme } = useDashboardTheme();
  void theme;
  void toggleTheme;
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Commission</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full space-y-space-md">

<div className="w-full bg-secondary-container rounded-xl p-space-md shadow-sm flex items-start gap-space-sm text-on-secondary-container">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 text-secondary shadow-sm">
<Icon name="verified_user" className="text-[18px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs mb-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-lowest text-secondary px-1.5 py-0.5 rounded">ROLE ACCESS: READ-ONLY</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
</div>
<p className="font-body-sm text-body-sm text-on-secondary-container leading-tight">
        Commission rate modifications require verified Superadmin hardware token authorization.
      </p>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col space-y-space-md relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-primary-container/10 pointer-events-none blur-xl"></div>

<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-space-xs text-on-surface-variant mb-1">
<Icon name="bolt" className="text-[16px] text-primary-container" />
<span className="font-label-md text-label-md uppercase tracking-wider">Today's Platform Revenue</span>
</div>
<div className="font-price-display text-price-display text-on-surface tracking-tight">
          UGX 3,428,000
        </div>
<div className="flex items-center gap-space-xs mt-1">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">From UGX 42.85M GMV</span>
<span className="font-label-sm text-label-sm font-semibold text-tertiary flex items-center">
<Icon name="arrow_upward" className="text-[14px]" />+12.4%
          </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shadow-sm">
<Icon name="payments" className="text-[22px]" />
</div>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs bg-surface-container-low rounded-lg p-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant mb-0.5">MTD Platform Total</span>
<span className="font-headline-sm text-headline-sm text-on-surface">UGX 89.45M</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">89,450,000 UGX gross</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant mb-0.5">Avg Take Rate</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-sm text-headline-sm text-primary-container">8.2%</span>
<span className="font-label-sm text-label-sm text-tertiary">Optimal</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"82%"}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="pie_chart" className="text-[20px] text-primary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Category Matrix</h2>
</div>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-full text-on-surface-variant">
<Icon name="lock" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-semibold">6 Tiers Locked</span>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col space-y-space-xs">

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="headphones" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Consumer Electronics &amp; Audio</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-body-sm text-body-sm">Standard Fulfillment Tier</span>
</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-primary-container">8.0%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Rate</span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="smartphone" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Mobile Phones &amp; Tablets</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">High-volume competitive rate</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-on-surface">5.0%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Subsidized</span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="laptop_mac" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Computing &amp; GaN Accessories</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Fast charging &amp; hardware</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-on-surface">8.0%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Rate</span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="apparel" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Fashion &amp; Apparel</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">High-margin catalog tier</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-primary">12.0%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Rate</span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="spa" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Beauty &amp; Personal Care</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Cosmetics &amp; Skincare</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-on-surface">10.0%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Rate</span>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 text-on-surface">
<Icon name="local_grocery_store" className="text-[20px]" />
</div>
<div className="min-w-0">
<div className="font-label-lg text-label-lg text-on-surface truncate">Supermarket &amp; Groceries</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">High turn, fast settlement</div>
</div>
</div>
<div className="text-right shrink-0 pl-2">
<div className="font-headline-sm text-headline-sm text-on-surface">4.5%</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bulk Rate</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs">
<Icon name="receipt_long" className="text-[20px] text-tertiary" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Real-Time Ledger</h2>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm">Live Feed</span>
</div>
</div>

<div className="w-full space-y-space-sm" id="ledger-feed">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold">#SC-9821</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[12px]" /> Settled
          </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">2 mins ago</span>
</div>
<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low rounded-lg p-space-sm text-center">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Gross Order</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 280,000</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Fee (8.0%)</span>
<span className="font-label-md text-label-md text-primary-container font-bold mt-0.5">+UGX 22,400</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Net</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 257,600</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm">Electronics • Kampala Express Hub</span>
<button className="flex items-center gap-0.5 text-primary text-label-sm font-label-sm hover:underline" type="button">
<span>Audit Audit Trail</span>
<Icon name="expand_more" className="text-[14px]" />
</button>
<div className="hidden"></div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold">#SC-9818</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[12px]" /> Settled
          </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">14 mins ago</span>
</div>
<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low rounded-lg p-space-sm text-center">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Gross Order</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 85,000</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Fee (8.0%)</span>
<span className="font-label-md text-label-md text-primary-container font-bold mt-0.5">+UGX 6,800</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Net</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 78,200</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm">Audio • Entebbe Fulfillment</span>
<button className="flex items-center gap-0.5 text-primary text-label-sm font-label-sm hover:underline" type="button">
<span>Audit Trail</span>
<Icon name="expand_more" className="text-[14px]" />
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-mono font-bold">#SC-9804</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-semibold flex items-center gap-0.5">
<Icon name="check_circle" className="text-[12px]" /> Settled
          </span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">41 mins ago</span>
</div>
<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low rounded-lg p-space-sm text-center">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Gross Order</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 145,000</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Fee (8.0%)</span>
<span className="font-label-md text-label-md text-primary-container font-bold mt-0.5">+UGX 11,600</span>
</div>
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Merchant Net</span>
<span className="font-label-md text-label-md text-on-surface mt-0.5">UGX 133,400</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-sm text-body-sm">GaN Chargers • Jinja Hub</span>
<button className="flex items-center gap-0.5 text-primary text-label-sm font-label-sm hover:underline" type="button">
<span>Audit Trail</span>
<Icon name="expand_more" className="text-[14px]" />
</button>
</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container text-center flex flex-col items-center space-y-1 mt-space-sm">
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="account_balance" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-semibold">Automated SwiftCart Escrow Settlement</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
      Ledger reconciles automatically every 24 hours against MTN MoMo, Airtel Money, and Standard Bank merchant pools.
    </p>
</div>
</div>
</div></main>
    </div>
  );
};

export default CommissionRatesEarningsSwiftcartAdmin;
