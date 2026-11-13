// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/add_product_step_5_buyer_preview_submit_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface MobileProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Mobile: React.FC<MobileProps> = (props) => {
  const onNavigate = props.onNavigate;
  
  const { theme, toggleTheme } = useDashboardTheme();
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
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-xs"><button aria-label="Go back or close" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back" className="text-[24px]" /></button><button aria-label="Open seller menu" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" id="drawer-trigger" onClick={() => alertToast('Action triggered')}><Icon name="menu" className="text-[22px]" /></button><div className="flex flex-col ml-1"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight truncate max-w-[150px] min-[380px]:max-w-[190px]">Product Add Step 5 Buyer Preview &amp; Submit</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">SwiftCart Hub</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Notifications" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">3</span></button><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
<aside className="fixed top-0 bottom-0 left-0 z-50 w-[310px] max-w-[85vw] bg-surface-container-lowest text-on-surface shadow-[0_16px_36px_-6px_rgba(15,23,42,0.18)] -translate-x-full flex flex-col pt-safe pb-safe overflow-hidden" id="seller-drawer"><div className="p-gutter flex items-start justify-between bg-surface-container-low"><div className="flex items-center gap-space-sm"><img alt="swiftcart-logo-icon-only.png" className="h-9 w-auto object-contain" src={`${assetBase}/images/95ec767b02525811.webp`} /><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">Kikuubo Sound &amp; Gadgets Hub</span><div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-tertiary-container inline-block"></span><span className="font-label-sm text-label-sm text-tertiary font-bold tracking-tight uppercase">Verified Seller</span><span className="font-label-sm text-label-sm text-on-secondary-container font-semibold ml-1">• UGX</span></div></div></div><button aria-label="Close Menu" className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[22px]" /></button></div><div className="flex-1 overflow-y-auto px-gutter py-space-md space-y-space-md"><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Operations</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="overview" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}><Icon name="grid_view" className="text-[20px]" /><span>Overview</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}><Icon name="local_mall" className="text-[20px]" /><span>Orders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="riders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}><Icon name="two_wheeler" className="text-[20px]" /><span>Riders</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="returns-and-disputes" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}><Icon name="assignment_return" className="text-[20px]" /><span>Returns &amp; Disputes</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Catalog</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="products" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}><Icon name="inventory_2" className="text-[20px]" /><span>Products</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="product-add-step-1-photos" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}><Icon name="add_photo_alternate" className="text-[20px]" /><span>Add Product Flow</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="discounts-and-ads" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}><Icon name="campaign" className="text-[20px]" /><span>Discounts &amp; Ads</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Financials</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="wallet-and-payouts" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}><Icon name="account_balance_wallet" className="text-[20px]" /><span>Wallet &amp; Payouts</span></a><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="analytics" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}><Icon name="monitoring" className="text-[20px]" /><span>Analytics</span></a></nav></div><div className="space-y-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary px-space-xs">Store</span><nav className="space-y-1" data-active-classes="bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold shadow-md"><a className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md" data-path="store-profile" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}><Icon name="storefront" className="text-[20px]" /><span>Store Profile</span></a></nav></div></div><div className="p-gutter bg-surface-container-low space-y-space-xs"><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="help-and-support" href="#" onClick={() => alertToast('Action triggered')}><Icon name="support_agent" className="text-[20px]" /><span>Help &amp; Support</span></a><button className="w-full flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" onClick={() => alertToast('Action triggered')}><Icon name="logout" className="text-[20px]" /><span>Log Out</span></button></div></aside>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full pb-8">

<section className="px-gutter pt-space-md pb-space-sm bg-surface">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Step 5 of 5</span>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Ready to Publish</span>
</div>
<div className="flex items-center gap-1.5 w-full">
<div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
<div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
<div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
<div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
<div className="h-1.5 flex-1 rounded-full bg-primary-container relative overflow-hidden">
<div className="absolute inset-0 bg-surface-container-lowest/30 animate-pulse"></div>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="check_circle" className="text-[18px] text-tertiary" />
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Final Verification</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold tracking-wide uppercase">Kampala Stock</span>
</div>
</section>

<div className="px-gutter my-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-lg bg-tertiary-container flex items-center justify-center shrink-0">
<Icon name="auto_awesome" className="text-on-tertiary text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold truncate">Listing Quality Score: 98/100</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Optimized for search algorithms in Central Kampala &amp; Entebbe</p>
</div>
</div>
</div>

<section className="px-gutter mt-space-sm">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1">
<Icon name="compare" className="text-[18px] text-on-surface-variant" />
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">Media Enhancement</h2>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed px-2 py-0.5 rounded-full">SwiftVision AI</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm space-y-space-sm">
<div className="grid grid-cols-2 gap-space-xs">

<div className="flex flex-col gap-1.5">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Raw unstaged smartphone photo of wireless heavy bass over-ear headphones placed on a wooden shop counter in Kikuubo market Kampala, ambient fluorescent store lighting with slight shadow" src={`${assetBase}/images/18192dbefff33942.webp`} />
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm font-semibold backdrop-blur-sm">Original</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center">Shop Counter Raw</p>
</div>

<div className="flex flex-col gap-1.5">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Pristine studio catalog photo of premium matte black over-ear wireless headphones with pure studio lighting, subtle soft-shadow, crisp reflective accents, commercial e-commerce advertising shot on pure bright background" src={`${assetBase}/images/b3df6d873b393755.webp`} />
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5 shadow-sm">
<Icon name="auto_awesome" className="text-[12px]" />
<span>Enhanced</span>
</div>
<span className="absolute bottom-2 left-2 right-2 text-center px-1 py-0.5 rounded bg-inverse-surface/75 text-inverse-on-surface font-label-sm text-label-sm font-semibold truncate backdrop-blur-sm">4K Shadow Fix Applied</span>
</div>
<p className="font-body-sm text-body-sm text-tertiary text-center font-semibold">+34% Clickthrough</p>
</div>
</div>
<div className="bg-surface-container-low px-space-sm py-1.5 rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Default primary gallery image: Studio Clean</span>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline" type="button" onClick={() => alertToast('Action triggered')}>Change</button>
</div>
</div>
</section>

<section className="px-gutter mt-space-md">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-1.5">
<Icon name="visibility" className="text-[18px] text-primary" />
<h2 className="font-label-lg text-label-lg font-bold text-on-surface">Buyer View Experience</h2>
</div>
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant flex items-center gap-0.5">
<span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span>
        Live App Sandbox
      </span>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">

<div className="bg-surface-container px-3 py-1.5 flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant flex items-center gap-1">
<Icon name="smartphone" className="text-[14px]" />
          SwiftCart Shopper App
        </span>
<span className="font-label-sm text-label-sm text-secondary font-medium">UG Market Feed</span>
</div>

<div className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="High-resolution hero commercial shot of premium studio-grade wireless noise-canceling headphones resting on sleek minimalist pedestal with warm studio amber rim lighting and reflections" id="buyerGalleryImg" src={`${assetBase}/images/3d4c60e3a003fd77.webp`} />

<div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
<div className="bg-surface-container-lowest/95 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
<Icon name="verified" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface font-bold tracking-tight">Kikuubo Verified</span>
</div>
<div className="bg-gradient-to-r from-primary-fixed to-surface-container-lowest px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
<Icon name="bolt" className="text-[12px] text-primary" />
<span className="font-label-sm text-label-sm text-primary font-bold">SwiftExpress 45m</span>
</div>
</div>

<div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm">
<Icon name="favorite" className="text-[18px]" />
</div>

<div className="absolute bottom-2.5 left-0 right-0 flex justify-center items-center gap-1">
<span className="w-4 h-1.5 rounded-full bg-primary-container"></span>
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest/80"></span>
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest/80"></span>
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest/80"></span>
</div>
</div>

<div className="p-space-sm flex flex-col gap-space-xs">

<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="security" className="text-[12px]" />
            1-Year Official Warranty
          </span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
            Brand New Boxed
          </span>
</div>

<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-snug line-clamp-2">
          Sony WH-1000XM5 Wireless Noise-Cancelling Headphones - Midnight Black
        </h3>

<div className="flex items-center gap-2">
<div className="flex items-center gap-0.5 text-primary-container">
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star" className="text-[16px]" />
<Icon name="star_half" className="text-[16px]" />
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">4.8 (82 reviews)</span>
<span className="text-secondary">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Kikuubo Sound Hub</span>
</div>

<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 mt-1">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">UGX</span>
<span className="font-price-display text-price-display text-primary font-extrabold tracking-tight">345,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">UGX 390,000</span>
</div>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-1.5 py-0.5 rounded font-bold">-11% OFF</span>
</div>

<div className="flex items-center gap-1.5 text-on-surface-variant pt-1">
<Icon name="payments" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm font-semibold">Or 3 monthly payments of <span className="font-bold text-on-surface">UGX 115,000</span> via MTN / Airtel</span>
</div>
</div>

<div className="flex items-center justify-between text-on-surface-variant px-1 pt-1">
<div className="flex items-center gap-1.5">
<Icon name="local_shipping" className="text-[16px] text-tertiary" />
<span className="font-body-sm text-body-sm">Express Boda Delivery to <strong>Kampala, Nakawa &amp; Makindye</strong></span>
</div>
<span className="font-label-sm text-label-sm font-bold text-tertiary">Ready</span>
</div>
</div>
</div>
</section>

<section className="px-gutter mt-space-sm">
<div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Configured SKU</span>
<span className="font-label-md text-label-md font-bold text-on-surface">SN-WH5-BLK-UG01</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Allocated Stock Unit</span>
<span className="font-label-md text-label-md font-bold text-tertiary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
          14 Units Reserved
        </span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Return Policy Guarantee</span>
<span className="font-label-md text-label-md font-bold text-on-surface">7 Days Replacement</span>
</div>
</div>
</section>

<section className="px-gutter mt-space-md">
<div className="bg-surface-container-high rounded-xl p-space-md shadow-sm transition-all" id="attestationCard">
<div className="flex items-start gap-space-sm">

<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Merchant Legal Attestation</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-error-container text-on-error-container font-bold">Mandatory</span>
</div>
<label className="flex items-start gap-3 cursor-pointer group select-none mt-2">
<div className="relative flex items-center mt-0.5">
<input className="sr-only peer" id="merchantAttestationCheckbox" type="checkbox" />
<div className="w-5 h-5 rounded bg-surface-container-lowest peer-checked:bg-primary-container flex items-center justify-center shadow-sm transition-colors">
<Icon name="check" className="text-[16px] text-on-primary opacity-0 peer-checked:opacity-100 transition-opacity font-bold" />
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-tight">
              I confirm this description, warranty, and photos accurately represent my physical stock in shop. Counterfeit or mislabeled items forfeit merchant deposit under SwiftCart Uganda Merchant Policy.
            </p>
</label>
</div>
</div>
</div>
</section>

<section className="px-gutter mt-space-lg space-y-space-sm">

<button className="w-full h-14 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary flex items-center justify-between px-space-md shadow-md opacity-50 cursor-not-allowed transition-all active:scale-[0.99]" disabled={true} id="submitReviewBtn" type="button" onClick={() => alertToast('Action triggered')}>
<div className="flex items-center gap-space-sm text-left">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 flex items-center justify-center">
<Icon name="rocket_launch" className="text-[20px] text-on-primary" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-extrabold leading-tight">Submit for Review</span>
<span className="font-label-sm text-label-sm text-primary-fixed font-medium">Estimated approval &lt; 2 hours</span>
</div>
</div>
<Icon name="arrow_forward" className="text-[22px]" />
</button>

<div className="grid grid-cols-2 gap-space-xs">
<button className="h-12 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[18px]" />
<span>Save as Draft</span>
</button>
<button className="h-12 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[18px]" />
<span>Edit Details</span>
</button>
</div>
</section>

<div className="fixed bottom-4 inset-x-4 bg-inverse-surface text-inverse-on-surface p-space-md rounded-2xl shadow-xl flex items-center gap-3 translate-y-32 opacity-0 pointer-events-none transition-all duration-300 z-50" id="submissionSuccessBanner">
<div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center shrink-0">
<Icon name="send_and_archive" className="text-on-tertiary text-[24px]" />
</div>
<div className="flex-1 min-w-0">
<p className="font-label-lg text-label-lg font-bold">Listing Dispatched to Operations!</p>
<p className="font-body-sm text-body-sm text-surface-variant truncate">Fast-track verification running in Kampala...</p>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
