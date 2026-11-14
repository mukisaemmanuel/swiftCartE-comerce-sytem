// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/freeze_seller_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface FreezeSellerSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FreezeSellerSwiftcartAdmin: React.FC<FreezeSellerSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-space-sm flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface truncate ml-space-xs leading-tight">Freeze Seller</h1></div><div className="flex items-center gap-space-xs mr-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface select-none">AD</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full relative">

<div className="fixed inset-0 bg-on-surface/40 backdrop-blur-[3px] pointer-events-none z-10 transition-opacity"></div>

<div className="relative z-20 flex flex-col w-full max-w-[430px] mx-auto bg-surface-container-lowest rounded-t-xl shadow-[0_-8px_32px_rgba(13,28,47,0.18)] pb-8 mt-2 overflow-hidden">

<div className="w-full flex items-center justify-center pt-3 pb-1">
<div className="w-12 h-1.5 rounded-full bg-surface-variant"></div>
</div>

<div className="flex items-center justify-between px-space-md py-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-9 h-9 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<Icon name="pause_circle" className="text-[20px]" />
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Freeze Seller &amp; Listings</h2>
</div>
<button aria-label="Close modal" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<div className="px-space-md flex flex-col gap-space-md mt-1">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Phone Hub</span>
<span className="bg-surface-container-highest text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">#SLR-0554</span>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
<Icon name="store" className="text-[14px]" />
              Godfrey Ochen • Pioneer Mall Stall G-12
            </p>
</div>
<span className="shrink-0 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1">
<Icon name="verified" className="text-[12px]" />
            Merchant
          </span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-space-xs mt-space-xs bg-surface-container-lowest/70 rounded-lg p-2.5">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Active Inventory</span>
<span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 flex items-center gap-1">
<Icon name="inventory_2" className="text-primary text-[18px]" />
              34 items
            </span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Escrow Balance</span>
<span className="font-headline-sm text-headline-sm text-error mt-0.5 flex items-center gap-1">
<Icon name="lock" className="text-[18px]" />
              UGX 8,450,000
            </span>
</div>
</div>
</div>

<div className="bg-error-container/50 rounded-xl p-space-md flex gap-space-sm items-start shadow-sm">
<Icon name="warning" className="text-error text-[22px] shrink-0 mt-0.5" />
<div className="flex flex-col min-w-0">
<p className="font-label-lg text-label-lg text-on-error-container leading-snug">
            Immediate Store Restriction
          </p>
<p className="font-body-sm text-body-sm text-on-error-container/90 mt-1 leading-relaxed">
            Freezing immediately unpublishes all 34 active listings from search and holds pending escrow payouts of UGX 8,450,000. Customer orders in progress must still be fulfilled or refunded.
          </p>
</div>
</div>

<form className="flex flex-col gap-space-md" id="freeze-form" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-1">
              Reason for Freeze
              <span className="text-error font-body-sm text-body-sm">*</span>
</label>
<span className="font-label-sm text-label-sm text-secondary">Policy Governance</span>
</div>
<div className="flex flex-col gap-2">

<label className="flex items-start gap-space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<input checked={true} className="mt-1 w-4 h-4 text-primary accent-primary cursor-pointer shrink-0" name="freeze_reason" type="radio" value="counterfeit" />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface">Counterfeit or misleading item complaints</span>
<span className="font-body-sm text-body-sm text-secondary">Customer escalated authentic hardware or condition mismatch</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<input className="mt-1 w-4 h-4 text-primary accent-primary cursor-pointer shrink-0" name="freeze_reason" type="radio" value="sla_breach" />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface">Repeated fulfillment failure / SLA breaches</span>
<span className="font-body-sm text-body-sm text-secondary">Orders canceled after 48h dispatch window</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<input className="mt-1 w-4 h-4 text-primary accent-primary cursor-pointer shrink-0" name="freeze_reason" type="radio" value="account_takeover" />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface">Suspected unauthorized account takeover</span>
<span className="font-body-sm text-body-sm text-secondary">Unusual IP login activity or altered payout credentials</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<input className="mt-1 w-4 h-4 text-primary accent-primary cursor-pointer shrink-0" name="freeze_reason" type="radio" value="other" />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface">Other policy breach</span>
<span className="font-body-sm text-body-sm text-secondary">Direct customer solicitation off-platform or spam messaging</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-1" htmlFor="admin-notes">
              Admin Explanation &amp; Internal Notes
              <span className="text-error font-body-sm text-body-sm">*</span>
</label>
<span className="font-label-sm text-label-sm text-secondary">Confidential</span>
</div>
<div className="relative">
<textarea className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl p-3 focus:bg-surface-container-lowest focus:outline-none transition-all resize-none shadow-sm placeholder:text-secondary/60" id="admin-notes" rows={3}>Customer reports on order #SC-ORD-9281 confirmed irregular IMEI. Freezing store while support reviews buyer evidence and inspects remaining stock.</textarea>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1">
<Icon name="shield" className="text-[14px]" />
            Appended to seller case history and accessible by Merchant Trust desk.
          </p>
</div>

<div className="bg-surface-container-low p-space-sm rounded-xl">
<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input checked={true} className="mt-0.5 w-5 h-5 rounded text-primary accent-primary cursor-pointer shrink-0" id="notify-seller" type="checkbox" />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Notify Seller Immediately</span>
<span className="font-body-sm text-body-sm text-secondary">Send instant SMS and in-app notification to merchant with explanation and appeal instructions</span>
</div>
</label>
</div>

<div className="hidden p-space-sm bg-tertiary-container text-on-tertiary rounded-xl text-center font-label-lg text-label-lg" id="freeze-feedback">
          Store listings hidden and escrow paused.
        </div>

<div className="flex flex-col gap-2 pt-2">
<button className="w-full h-12 bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all" id="freeze-submit-btn" type="button">
<Icon name="block" className="text-[20px]" />
            Freeze Payouts &amp; Listings
          </button>
<button className="w-full h-10 bg-transparent text-secondary hover:text-on-surface rounded-xl font-label-lg text-label-lg transition-colors flex items-center justify-center" type="button">
            Cancel
          </button>
</div>
</form>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default FreezeSellerSwiftcartAdmin;
