// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/empty_error_states_suite_swiftcart/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface EmptyErrorStatesSuiteSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EmptyErrorStatesSuiteSwiftcart: React.FC<EmptyErrorStatesSuiteSwiftcartProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface hover:text-primary transition-colors"><Icon name="arrow_back_ios_new" className="text-[24px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain" src="/brand/logo-full.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Empty &amp; Error States</h1></div><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full px-margin pb-space-xl">

<section className="sticky top-16 z-40 -mx-margin px-margin py-space-sm bg-surface/95 backdrop-blur-md shadow-sm">
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar scroll-smooth">
<button aria-selected="true" className="tab-trigger flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-primary-container text-on-primary shadow-sm" id="tab-btn-1">
<Icon name="shopping_cart" className="text-[16px]" />
<span>Empty Cart</span>
</button>
<button aria-selected="false" className="tab-trigger flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-2">
<Icon name="search_off" className="text-[16px]" />
<span>No Results</span>
</button>
<button aria-selected="false" className="tab-trigger flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-3">
<Icon name="wifi_off" className="text-[16px]" />
<span>Offline</span>
</button>
<button aria-selected="false" className="tab-trigger flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-4">
<Icon name="error_med" className="text-[16px]" />
<span>Payment Failed</span>
</button>
<button aria-selected="false" className="tab-trigger flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-5">
<Icon name="explore_off" className="text-[16px]" />
<span>404 Lost</span>
</button>
</div>
</section>

<section className="state-card flex flex-col w-full mt-space-md animate-fade-in" id="state-view-1">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-primary-fixed-dim/30 pointer-events-none blur-2xl"></div>

<div className="relative w-28 h-28 my-space-sm flex items-center justify-center">
<div className="absolute inset-0 bg-primary-fixed/50 rounded-full scale-100 animate-pulse"></div>
<div className="relative w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center shadow-sm">
<svg className="w-12 h-12 text-primary-container" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
<div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-label-sm text-label-sm shadow-sm">
            0
          </div>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed mb-space-xs font-label-sm text-label-sm">
<Icon name="local_mall" className="text-[14px]" />
<span>SwiftCart Kampala</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Your Shopping Cart is Empty</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
        Looks like you haven't added any authentic gadgets or items yet. Browse verified Kampala merchants today.
      </p>
<button className="w-full mt-space-lg min-h-[48px] bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<Icon name="storefront" className="text-[20px]" />
<span>Start Shopping (Explore Deals)</span>
</button>
</div>

<div className="mt-space-lg flex flex-col w-full">
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Popular items you might like</h3>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Fast Dispatch</span>
</div>
<div className="flex gap-space-sm overflow-x-auto no-scrollbar py-space-xs -mx-margin px-margin">

<div className="w-44 shrink-0 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between">
<div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling over-ear headphones on an urban minimalist stand with soft studio lighting and warm orange reflections, realistic commercial product photography" src="/images/f9aa8eb5d263bb34.webp" />
<span className="absolute top-1.5 left-1.5 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded">Official</span>
</div>
<div className="mt-space-xs flex flex-col">
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">SoundCore Official</p>
<h4 className="font-label-md text-label-md text-on-surface line-clamp-2 leading-tight">SoundCore Space One ANC</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 380,000</span>
</div>
<button className="mt-2 w-full py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1">
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>

<div className="w-44 shrink-0 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between">
<div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Anker 65W GaN compact wall fast charger block with dual USB-C ports on a clean architectural pedestal with sleek modern hardware aesthetic" src="/images/242b9b988bcdd462.webp" />
<span className="absolute top-1.5 left-1.5 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded">Verified</span>
</div>
<div className="mt-space-xs flex flex-col">
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Anker Direct UG</p>
<h4 className="font-label-md text-label-md text-on-surface line-clamp-2 leading-tight">Anker Prime 65W GaN Fast Charger</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 165,000</span>
</div>
<button className="mt-2 w-full py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1">
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>

<div className="w-44 shrink-0 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between">
<div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Oraimo FreePods wireless earbuds inside matte charging case glowing with ambient emerald status LED indicator, high clarity consumer gadget photo" src="/images/cbce28cca0a0c979.webp" />
<span className="absolute top-1.5 left-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded">Hot Deal</span>
</div>
<div className="mt-space-xs flex flex-col">
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Oraimo Kampala</p>
<h4 className="font-label-md text-label-md text-on-surface line-clamp-2 leading-tight">Oraimo FreePods Pro ANC</h4>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 145,000</span>
</div>
<button className="mt-2 w-full py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1">
<Icon name="add_shopping_cart" className="text-[14px]" />
<span>Add</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="state-card hidden flex-col w-full mt-space-md" id="state-view-2">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center">

<div className="relative w-28 h-28 my-space-sm flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center">
<Icon name="manage_search" className="text-primary-container text-[48px]" />
</div>
<div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest shadow flex items-center justify-center">
<Icon name="close" className="text-outline text-[18px]" />
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
<span>Query:</span>
<span className="font-bold text-on-surface">“XYZ-Nonexistent”</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">No matches found</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
        Check your spelling, try broader keywords, or browse popular electronics categories in Kampala.
      </p>

<div className="w-full mt-space-lg flex flex-col items-start">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 font-bold">Suggested Searches in Uganda</span>
<div className="flex flex-wrap gap-2 w-full">
<button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors flex items-center gap-1.5">
<Icon name="trending_up" className="text-[16px]" />
            Wireless Earbuds
          </button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors flex items-center gap-1.5">
<Icon name="headphones" className="text-[16px]" />
            SoundCore ANC
          </button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors flex items-center gap-1.5">
<Icon name="bolt" className="text-[16px]" />
            Fast Charger
          </button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors flex items-center gap-1.5">
<Icon name="solar_power" className="text-[16px]" />
            Solar Inverters
          </button>
</div>
</div>

<div className="mt-space-lg w-full bg-surface-container-low rounded-xl p-space-md text-left flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary">
<Icon name="category" className="text-[20px]" />
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Browse Catalog Directory</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Over 12,000 listed verified tech products</p>
</div>
</div>
<Icon name="arrow_forward" className="text-outline" />
</div>
</div>
</section>

<section className="state-card hidden flex-col w-full mt-space-md" id="state-view-3">

<div className="w-full bg-on-secondary-fixed text-on-secondary py-2.5 px-3.5 rounded-xl flex items-center justify-between shadow-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-sm text-label-sm font-semibold">Offline Mode • Showing cached items</span>
</div>
<span className="font-label-sm text-label-sm text-surface-container-highest">Kampala Server</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center">
<div className="relative w-28 h-28 my-space-sm flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-error-container/60 flex items-center justify-center">
<Icon name="wifi_off" className="text-error text-[44px]" />
</div>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">No Internet Connection</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
        You are currently offline. Check your MTN / Airtel data connection or local Wi-Fi router.
      </p>

<div className="w-full bg-surface-container-low rounded-xl p-space-md mt-space-md text-left flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="sim_card" className="text-[16px] text-tertiary" />
            MTN Uganda 5G/4G
          </span>
<span className="text-error font-semibold">No Signal</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<Icon name="sim_card_download" className="text-[16px] text-tertiary" />
            Airtel Data Bundle
          </span>
<span className="text-secondary font-semibold">Disconnected</span>
</div>
</div>
<button className="w-full mt-space-lg min-h-[48px] bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<Icon name="sync" className="text-[20px] transition-transform duration-500" />
<span>Retry Connection</span>
</button>
</div>
</section>

<section className="state-card hidden flex-col w-full mt-space-md" id="state-view-4">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center">

<div className="relative w-28 h-28 my-space-sm flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-error-container flex items-center justify-center">
<Icon name="timer_off" className="text-error text-[44px]" />
</div>
<div className="absolute top-1 right-1 w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow">
<Icon name="verified_user" className="text-[18px]" />
</div>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-on-error-container mb-space-xs font-label-sm text-label-sm">
<Icon name="schedule" className="text-[14px]" />
<span>Prompt Expired</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Payment Authorization Timed Out</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
        Your MTN MoMo prompt was not confirmed in time. Don't worry, your order is saved and you will <strong className="text-on-surface font-semibold">NEVER</strong> be double-charged.
      </p>

<div className="w-full mt-space-md p-space-sm rounded-xl bg-surface-container flex items-start gap-3 text-left">
<Icon name="shield_with_heart" className="text-tertiary text-[24px] shrink-0 mt-0.5" />
<div>
<h4 className="font-label-sm text-label-sm text-on-surface font-bold">SwiftCart SafeGuard Guarantee</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">0 UGX has been deducted from your Mobile Money wallet.</p>
</div>
</div>

<div className="w-full flex flex-col gap-space-xs mt-space-lg">
<button className="w-full min-h-[48px] bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<Icon name="send_to_mobile" className="text-[20px]" />
<span>Retry MoMo Prompt</span>
</button>
<button className="w-full min-h-[44px] bg-transparent text-on-surface hover:bg-surface-container font-label-md text-label-md rounded-xl transition-all flex items-center justify-center gap-2">
<Icon name="account_balance_wallet" className="text-[18px]" />
<span>Change Payment Method (Airtel / Visa)</span>
</button>
</div>
</div>
</section>

<section className="state-card hidden flex-col w-full mt-space-md" id="state-view-5">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center">

<div className="relative w-28 h-28 my-space-sm flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center">
<Icon name="explore_off" className="text-secondary text-[46px]" />
</div>
<div className="absolute bottom-0 right-1 px-2 py-0.5 rounded-full bg-primary text-on-primary font-headline-sm text-headline-sm font-extrabold shadow-sm">
          404
        </div>
</div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant mb-space-xs font-label-sm text-label-sm">
<Icon name="wrong_location" className="text-[14px]" />
<span>Dead End</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">This page went off the Kampala map</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
        The product or merchant store link you followed may have moved, expired, or been unlisted by the vendor.
      </p>

<div className="w-full grid grid-cols-2 gap-space-xs mt-space-md text-left">
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<Icon name="help_center" className="text-primary text-[20px]" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">Help Center</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">24/7 WhatsApp UG</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<Icon name="local_shipping" className="text-tertiary text-[20px]" />
<span className="font-label-sm text-label-sm font-bold text-on-surface">Order Tracking</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Check parcel route</span>
</div>
</div>
<button className="w-full mt-space-lg min-h-[48px] bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<Icon name="home" className="text-[20px]" />
<span>Back to Home</span>
</button>
</div>
</section>


</div></main>
    </div>
  );
};

export default EmptyErrorStatesSuiteSwiftcart;
