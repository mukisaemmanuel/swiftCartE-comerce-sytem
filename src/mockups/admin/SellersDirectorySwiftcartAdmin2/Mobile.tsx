// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/sellers_directory_swiftcart_admin_2/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface SellersDirectorySwiftcartAdmin2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectorySwiftcartAdmin2: React.FC<SellersDirectorySwiftcartAdmin2Props> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-sm"><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col"><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Uganda Admin</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Sellers Directory</h1></div></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface select-none">AD</div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface"><div className="flex flex-col w-full pb-6 px-margin gap-space-md">

<div className="flex flex-col pt-space-xs gap-space-xs">
<p className="font-body-sm text-body-sm text-secondary">Manage verified merchant accounts &amp; store status across Kampala &amp; regional hubs.</p>
<div className="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg shadow-sm">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="verified_user" className="text-[18px] text-tertiary" />
<span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary">Uganda Node Registry</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary">142 Merchants Enrolled</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="relative w-full">
<Icon name="search" className="absolute left-space-md top-1/2 -translate-y-1/2 text-secondary text-[20px]" />
<input className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-xl shadow-sm focus:outline-none transition-all placeholder:text-secondary/70" id="sellerSearchInput" placeholder="Search seller, TIN, or shop name..." type="text" />
<button className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px] p-1 rounded-full hover:bg-surface-container-high transition-colors">close</button>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5" id="filterChipGroup">
<button className="filter-btn h-8 px-space-md rounded-full font-label-md text-label-md whitespace-nowrap bg-on-surface text-surface shadow-sm transition-transform active:scale-95">All (142)</button>
<button className="filter-btn h-8 px-space-md rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-high text-secondary hover:text-on-surface transition-transform active:scale-95">Active (128)</button>
<button className="filter-btn h-8 px-space-md rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-high text-secondary hover:text-on-surface transition-transform active:scale-95">Suspended (11)</button>
<button className="filter-btn h-8 px-space-md rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-high text-secondary hover:text-on-surface transition-transform active:scale-95">Frozen (3)</button>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-high text-on-surface shadow-sm">
<Icon name="info" className="text-primary text-[20px] mt-0.5" />
<p className="font-body-sm text-body-sm text-on-surface-variant flex-1 leading-snug">
<strong className="font-label-sm text-on-surface">Administrative Protocol:</strong> To suspend or reinstate a seller, an admin must provide a documented reason entered into the governance ledger.
    </p>
</div>

<div className="flex flex-col gap-space-md" id="sellerCardList">

<div className="seller-card active-seller flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm transition-all" data-name="SoundCore Uganda Official" data-status="active" data-tin="1004928114">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-primary-fixed font-bold shadow-xs select-none shrink-0">SC</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Uganda Official</h2>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm truncate">
<span>Electronics</span>
<span>•</span>
<span>#SLR-0412</span>
<span>•</span>
<span className="truncate">Kampala Central</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Active</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low p-space-xs rounded-lg">
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">Catalog</span>
<span className="font-label-md text-label-md text-on-surface font-bold">84 items</span>
</div>
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">30d Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">UGX 42,500,000</span>
</div>
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">Rating</span>
<div className="flex items-center gap-0.5">
<Icon name="star" className="text-[14px] text-amber-500" />
<span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
<span className="font-body-sm text-body-sm text-secondary text-[11px]">(420)</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
<Icon name="store" className="text-[18px]" />
<span>View Store</span>
</button>
<button className="flex-1 h-10 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]">
<Icon name="pause_circle" className="text-[18px]" />
<span>Suspend Seller</span>
</button>
</div>
</div>

<div className="seller-card suspended-seller flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm transition-all" data-name="Kikuubo Wholesalers Direct" data-status="suspended" data-tin="1009845231">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center font-headline-sm text-headline-sm text-amber-900 font-bold shadow-xs select-none shrink-0">KW</div>
<div className="flex flex-col min-w-0">
<h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kikuubo Wholesalers Direct</h2>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm truncate">
<span>Home &amp; Solar</span>
<span>•</span>
<span>#SLR-0891</span>
<span>•</span>
<span className="truncate">Downtown Kikuubo</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 bg-amber-500/15 text-amber-800 px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
<span>Suspended</span>
</div>
</div>

<div className="flex flex-col gap-1 bg-amber-500/5 p-space-sm rounded-lg text-amber-950">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm font-bold text-amber-900">
<Icon name="warning" className="text-[16px] text-amber-700" />
<span>SLA Non-Compliance Recorded</span>
</div>
<p className="font-body-sm text-body-sm text-amber-900/90 leading-snug">"Delayed dispatch past 48h SLA on 5 orders"</p>
<div className="flex items-center justify-between pt-1 font-label-sm text-label-sm text-amber-800/80">
<span>Suspended on: 12 Oct 2025</span>
<span className="font-semibold">By Admin Sarah</span>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
<Icon name="store" className="text-[18px]" />
<span>View Store</span>
</button>
<button className="flex-1 h-10 rounded-lg bg-tertiary text-on-tertiary font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:opacity-95 shadow-xs transition-opacity active:scale-[0.98]">
<Icon name="play_circle" className="text-[18px]" />
<span>Reinstate Seller</span>
</button>
</div>
</div>

<div className="seller-card frozen-seller flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm transition-all" data-name="Kampala Phone Hub" data-status="frozen" data-tin="1006124589">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-error-container flex items-center justify-center font-headline-sm text-headline-sm text-on-error-container font-bold shadow-xs select-none shrink-0">KP</div>
<div className="flex flex-col min-w-0">
<h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kampala Phone Hub</h2>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm truncate">
<span>Smartphones</span>
<span>•</span>
<span>#SLR-0554</span>
<span>•</span>
<span className="truncate">Pioneer Mall</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 bg-error/10 text-error px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>Frozen</span>
</div>
</div>

<div className="flex flex-col gap-1.5 bg-error-container/30 p-space-sm rounded-lg text-on-error-container">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm font-bold text-error">
<Icon name="gavel" className="text-[16px]" />
<span>Governance Integrity Hold</span>
</div>
<span className="font-label-sm text-label-sm bg-error text-on-error px-1.5 py-0.2 rounded font-bold uppercase tracking-wider text-[9px]">Locked</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">"Multiple buyer reports of counterfeit accessories"</p>
<div className="flex items-center gap-space-xs text-error font-label-sm text-label-sm pt-0.5">
<Icon name="lock" className="text-[15px]" />
<span>Payouts &amp; Listings Frozen</span>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
<Icon name="store" className="text-[18px]" />
<span>View Store</span>
</button>
<button className="flex-1 h-10 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-inverse-surface transition-colors active:scale-[0.98]">
<Icon name="lock_reset" className="text-[18px]" />
<span>Manage Freeze</span>
</button>
</div>
</div>

<div className="seller-card active-seller flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm transition-all" data-name="Bella Fashion Boutique" data-status="active" data-tin="1007739102">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-fixed font-bold shadow-xs select-none shrink-0">BF</div>
<div className="flex flex-col min-w-0">
<h2 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Bella Fashion Boutique</h2>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm truncate">
<span>Clothing</span>
<span>•</span>
<span>#SLR-1092</span>
<span>•</span>
<span className="truncate">Garden City</span>
</div>
</div>
</div>
<div className="flex items-center gap-1 bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-label-sm text-label-sm shrink-0">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Active</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low p-space-xs rounded-lg">
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">Catalog</span>
<span className="font-label-md text-label-md text-on-surface font-bold">142 items</span>
</div>
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">30d Volume</span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">UGX 18,200,000</span>
</div>
<div className="flex flex-col px-space-xs py-1">
<span className="font-label-sm text-label-sm text-secondary">Rating</span>
<div className="flex items-center gap-0.5">
<Icon name="star" className="text-[14px] text-amber-500" />
<span className="font-label-md text-label-md text-on-surface font-bold">4.7</span>
<span className="font-body-sm text-body-sm text-secondary text-[11px]">(188)</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 h-10 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
<Icon name="store" className="text-[18px]" />
<span>View Store</span>
</button>
<button className="flex-1 h-10 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity active:scale-[0.98]">
<Icon name="pause_circle" className="text-[18px]" />
<span>Suspend Seller</span>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-xs hidden items-end sm:items-center justify-center p-0 sm:p-margin transition-opacity duration-200" id="adminActionModal">
<div className="w-full sm:max-w-md bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl p-space-lg flex flex-col gap-space-md shadow-2xl animate-in slide-in-from-bottom duration-200">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center" id="modalIconContainer">
<Icon name="gavel" className="text-[20px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface" id="modalTitle">Account Action</h3>
<span className="font-label-sm text-label-sm text-secondary" id="modalSubtitle">#SLR-0000</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:text-on-surface">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="adminReasonInput">Documented Justification (Required)</label>
<p className="font-body-sm text-body-sm text-secondary">State compliance grounds, breach ticket reference, or merchant review details:</p>
<textarea className="w-full p-space-sm bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl focus:outline-none placeholder:text-secondary/60 resize-none" id="adminReasonInput" placeholder="e.g. Failure to maintain mandatory dispatch SLA, Ticket #UG-984..." rows={3}></textarea>
</div>
<div className="bg-surface-container-high p-space-sm rounded-lg flex items-center gap-space-xs">
<Icon name="verified" className="text-secondary text-[18px]" />
<span className="font-label-sm text-label-sm text-secondary">Logged as Admin AD • Timestamped to Kampala Node</span>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 h-11 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Cancel</button>
<button className="flex-1 h-11 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-md hover:opacity-95 transition-all" id="modalConfirmBtn">Submit Entry</button>
</div>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-on-surface text-surface px-space-md py-space-sm rounded-full shadow-lg font-label-md text-label-md flex items-center gap-space-xs opacity-0 pointer-events-none transition-all duration-300" id="toastNotification">
<Icon name="check_circle" className="text-[18px] text-tertiary-fixed" />
<span id="toastMsg">Governance ledger updated</span>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary font-bold"><div className="flex justify-around items-center h-16 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] transition-colors text-primary font-bold" data-path="sellers-directory" href="#"><Icon name="storefront" className="text-[22px]" /><span className="font-label-sm text-label-sm">Sellers</span></a><a className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] text-secondary hover:text-on-surface transition-colors" data-path="audit-log" href="#"><Icon name="receipt_long" className="text-[22px]" /><span className="font-label-sm text-label-sm">Audit</span></a><a className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] text-secondary hover:text-on-surface transition-colors" data-path="danger-zone" href="#"><Icon name="security" className="text-[22px]" /><span className="font-label-sm text-label-sm">Governance</span></a></div></nav>
    </div>
  );
};

export default SellersDirectorySwiftcartAdmin2;
