// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/notifications_swiftcart_buyer/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface NotificationsSwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const NotificationsSwiftcartBuyer: React.FC<NotificationsSwiftcartBuyerProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors -ml-space-xs"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain shrink-0" src="/brand/logo-full.png" /><div className="flex flex-col min-w-0 ml-space-xs"><span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase truncate">SwiftCart Uganda</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Buyer Notifications</h1></div></div><div className="flex items-center gap-space-xs"><button aria-label="Page options" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"><Icon name="more_vert" className="text-[22px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="px-margin pt-space-md pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm" id="unreadCounter">
        3
      </span>
<span className="font-label-lg text-label-lg text-on-surface">Unread alerts</span>
</div>
<button className="flex items-center gap-1 font-label-md text-label-md text-primary-container hover:text-primary transition-all active:scale-95 py-1 px-2 rounded-lg bg-surface-container-high/60" id="markAllReadBtn">
<Icon name="done_all" className="text-[16px]" />
<span>Mark all as read</span>
</button>
</section>

<section className="w-full overflow-x-auto no-scrollbar px-margin pb-space-sm flex gap-space-xs">
<button className="filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-on-background text-on-primary shadow-sm transition-all active:scale-95 flex items-center gap-1.5" data-filter="all">
<span>All</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
</button>
<button className="filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-all active:scale-95 flex items-center gap-1.5" data-filter="delivery">
<span>Orders &amp; Delivery</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
</button>
<button className="filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-all active:scale-95" data-filter="escrow">
<span>Payment &amp; Escrow</span>
</button>
<button className="filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-all active:scale-95" data-filter="promos">
<span>Promos &amp; Vouchers</span>
</button>
</section>

<div className="mx-margin mb-space-sm p-3.5 rounded-xl bg-gradient-to-r from-surface-container-lowest to-surface-container-low shadow-sm flex items-center gap-3 relative overflow-hidden">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 text-primary-container">
<Icon name="two_wheeler" className="text-[22px] animate-pulse" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-primary-container">Live Dispatch</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
</div>
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Brian Kizito is 6 mins away</p>
<p className="font-body-sm text-body-sm text-secondary truncate">Order #SC-9488 • Lugogo Bypass</p>
</div>
<button className="shrink-0 px-2.5 py-1.5 bg-on-background text-on-primary font-label-sm text-label-sm rounded-lg active:scale-95 transition-all">
      Track
    </button>
</div>

<div className="flex flex-col px-margin gap-space-sm pb-space-lg" id="notificationsContainer">

<article className="notification-item unread relative flex flex-col p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer" data-category="delivery">
<div className="flex items-start gap-3">

<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 text-on-primary-fixed shadow-sm">
<Icon name="delivery_dining" className="text-[20px]" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Order Out for Delivery</span>
<span className="unread-dot w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">3m ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug line-clamp-2">
            Boda Rider Kizito Brian is on the way with your <span className="font-semibold text-on-surface">SoundCore Space One</span> (Order #SC-9488). Have your 6-digit delivery release code ready.
          </p>

<div className="mt-2.5 flex items-center justify-between pt-2 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg">
<div className="flex items-center gap-1.5">
<Icon name="check_circle" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface">Verified Express Rider</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary-container">Show PIN</span>
</div>
</div>
</div>
</article>

<article className="notification-item unread relative flex flex-col p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer" data-category="escrow">
<div className="flex items-start gap-3">

<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed shadow-sm">
<Icon name="verified_user" className="text-[20px]" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Payment Protected &amp; Confirmed</span>
<span className="unread-dot w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">2h ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
<span className="font-semibold text-on-surface">UGX 248,500</span> held safely in SwiftCart Payment Protection. Your funds will only be released to SoundCore Official after you confirm delivery.
          </p>

<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<Icon name="security" className="text-[14px] text-tertiary" /> Escrow Lock Active
            </span>
<span className="font-label-sm text-label-sm text-secondary">Airtel Money •• 491</span>
</div>
</div>
</div>
</article>

<article className="notification-item unread relative flex flex-col p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer" data-category="delivery">
<div className="flex items-start gap-3">

<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed shadow-sm">
<Icon name="vpn_key" className="text-[20px]" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Delivery Code Ready</span>
<span className="unread-dot w-2 h-2 rounded-full bg-primary-container shrink-0"></span>
</div>
<span className="font-label-sm text-label-sm text-secondary shrink-0">4h ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
            Your unique 6-digit delivery code for Order #SC-9488 is ready. Only share this code when you physically receive and inspect your parcel.
          </p>

<div className="mt-2.5 flex items-center justify-between p-2 rounded-lg bg-surface-container">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">PIN:</span>
<span className="font-price-display text-price-display tracking-widest text-on-surface">842-190</span>
</div>
<button className="px-2 py-1 bg-surface-container-lowest shadow-sm rounded font-label-sm text-label-sm text-on-surface active:scale-95 transition-transform">
              Copy
            </button>
</div>
</div>
</div>
</article>

<article className="notification-item relative flex flex-col p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer" data-category="promos">
<div className="flex items-start gap-3">

<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary shadow-sm">
<Icon name="local_offer" className="text-[20px]" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Voucher Expiring Soon</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
            Flash discount voucher <span className="font-semibold text-primary-container">SWIFT20</span> (UGX 20,000 off orders over UGX 100,000) expires tonight at 11:59 PM.
          </p>

<div className="mt-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
<Icon name="timer" className="text-[15px]" /> Expires in 4 hrs
            </span>
<span className="font-label-sm text-label-sm text-primary-container font-semibold underline underline-offset-2">Use Voucher</span>
</div>
</div>
</div>
</article>

<article className="notification-item relative flex flex-col p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer" data-category="promos">
<div className="flex items-start gap-3">

<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-tertiary shadow-sm">
<Icon name="trending_down" className="text-[20px]" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Price Drop Alert</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">2 days ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
<span className="font-semibold text-on-surface">Anker 65W GaN Charger</span> in your Wishlist dropped from <span className="line-through text-secondary">UGX 145,000</span> to <span className="font-bold text-on-surface">UGX 115,000</span>.
          </p>

<div className="mt-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-bold">
              Save UGX 30,000 (-21%)
            </span>
<button className="font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-0.5">
<span>View Item</span>
<Icon name="chevron_right" className="text-[14px]" />
</button>
</div>
</div>
</div>
</article>
</div>

<section className="px-margin mb-space-xl">
<div className="p-4 rounded-xl bg-surface-container flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors active:scale-[0.99] shadow-sm">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm">
<Icon name="tune" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Notification Preferences</span>
<span className="font-body-sm text-body-sm text-secondary">Customize Push, SMS &amp; Email alerts</span>
</div>
</div>
<Icon name="chevron_right" className="text-secondary text-[20px]" />
</div>

<div className="mt-4 flex items-center justify-center gap-1.5 text-center text-secondary">
<Icon name="verified" className="text-[15px]" />
<span className="font-label-sm text-label-sm">Protected end-to-end by SwiftCart TrustShield</span>
</div>
</section>


</div></main>
    </div>
  );
};

export default NotificationsSwiftcartBuyer;
