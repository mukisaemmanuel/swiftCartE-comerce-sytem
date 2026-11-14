// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/messages_notifications_swiftcart_uganda/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface MessagesNotificationsSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MessagesNotificationsSwiftcartUganda: React.FC<MessagesNotificationsSwiftcartUgandaProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-14 px-space-sm flex items-center justify-between"><div className="flex items-center"><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"><Icon name="arrow_back" className="text-[24px]" /></button></div><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight text-center flex-1">Messages</h1><div className="flex items-center justify-end"><button className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors"><Icon name="tune" className="text-[22px]" /></button></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-14 pb-safe bg-surface"><div className="flex flex-col w-full pb-28">

<div className="px-margin pt-space-sm pb-space-xs">
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
<Icon name="search" className="text-outline text-[20px]" />
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" placeholder="Search chats, riders, or orders..." type="text" />
<button className="w-7 h-7 flex items-center justify-center rounded-lg bg-surface text-primary shadow-sm active:scale-95 transition-transform">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="w-full overflow-x-auto px-margin py-space-xs flex items-center gap-space-xs no-scrollbar">
<button className="tab-btn flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-on-primary shadow-sm font-label-md text-label-md whitespace-nowrap transition-all duration-200" id="tab-chats">
<span className="">Seller Chats</span>
<span className="bg-surface text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">2</span>
</button>
<button className="tab-btn flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap active:bg-surface-container-high transition-all duration-200" id="tab-orders">
<span className="">Order Updates</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">3</span>
</button>
<button className="tab-btn flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap active:bg-surface-container-high transition-all duration-200" id="tab-promos">
<span className="">Promos &amp; Vouchers</span>
<span className="bg-secondary/15 text-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">1</span>
</button>
<button className="tab-btn flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap active:bg-surface-container-high transition-all duration-200" id="tab-escrow">
<Icon name="verified_user" className="text-[16px] text-tertiary" />
<span className="">Escrow Alerts</span>
</button>
</div>

<div className="px-margin pt-space-sm">
<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary-container to-primary-container p-space-md text-on-primary shadow-md">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-surface-container-lowest/10 blur-xl pointer-events-none"></div>
<div className="flex items-start gap-space-sm relative z-10">
<div className="w-9 h-9 rounded-xl bg-surface-container-lowest/20 flex items-center justify-center shrink-0">
<Icon name="two_wheeler" className="text-on-primary text-[22px]" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">Swift Express Dispatch</span>
<span className="inline-flex items-center gap-1 text-[10px] font-label-sm bg-surface-container-lowest/25 px-1.5 py-0.5 rounded-full text-on-primary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
              Live GPS
            </span>
</div>
<p className="font-body-md text-body-md font-semibold text-on-primary mt-0.5 truncate">Sula is 12 mins away (Lugogo Bypass)</p>
<div className="mt-2 flex items-center justify-between"><div></div><button className="bg-surface text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-lg shadow-sm active:scale-95 transition-transform flex items-center gap-1"><span className="">Track Live</span><Icon name="arrow_forward" className="text-[14px]" /></button></div>
</div>
</div>
</div>
</div>

<section className="mt-space-lg px-margin flex flex-col gap-space-xs">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Seller Chats</h2>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">2 Active</span>
</div>

<div className="relative bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-shadow active:scale-[0.99] transition-transform">
<div className="flex items-start gap-space-md">

<div className="relative shrink-0">
<img className="w-12 h-12 rounded-2xl object-cover shadow-sm bg-surface-container" data-alt="SoundCore Uganda professional retail store logo with sleek modern headphone aesthetics on a warm sunlit background" src="/images/23e3d0845e72eb55.webp" />
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-tertiary border-2 border-surface-container-lowest flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-1">
<div className="flex items-center gap-1 truncate">
<span className="font-label-lg text-label-lg text-on-surface truncate">SoundCore Uganda Official</span>
<Icon name="verified" className="text-tertiary text-[16px] shrink-0" />
</div>
<span className="font-label-sm text-label-sm text-primary font-bold shrink-0">10:45 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-1 line-clamp-2 leading-snug">
            Hello Joshua, your Space One headphones have been handed to Sula on boda <span className="font-semibold text-on-surface">UFL 389K</span>. Please have your inspection code ready!
          </p>
<div className="mt-2.5 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
<Icon name="lock" className="text-[13px] text-tertiary" />
              Swift Escrow Protected
            </span>
<span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">1</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm active:scale-[0.99] transition-transform">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-2xl object-cover bg-surface-container" data-alt="Kikuubo wholesale technology store storefront with mobile accessories and gadgets in Kampala Uganda" src="/images/1dd1203e7421e5ef.webp" />
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-outline-variant border-2 border-surface-container-lowest"></span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-1">
<div className="flex items-center gap-1 truncate">
<span className="font-label-lg text-label-lg text-on-surface truncate">Kikuubo Tech World</span>
<Icon name="verified" className="text-tertiary text-[16px] shrink-0" />
</div>
<span className="font-body-sm text-body-sm text-outline shrink-0">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2 leading-snug">
            The 20,000mAh Oraimo power bank has standard 1-year warranty. Thanks for your order!
          </p>
<div className="mt-2 flex items-center gap-1.5 text-outline">
<Icon name="done_all" className="text-[15px] text-secondary" />
<span className="font-body-sm text-body-sm text-outline">Delivered &amp; Approved</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm active:scale-[0.99] transition-transform">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-2xl object-cover bg-surface-container" data-alt="Vibrant African modern tailored fashion boutique storefront with colorful Kitenge fabrics and mannequins in Kampala" src="/images/b4c70d9f1f5f6290.webp" />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-1">
<span className="font-label-lg text-label-lg text-on-surface truncate">Defacto Fashion Kampala</span>
<span className="font-body-sm text-body-sm text-outline shrink-0">3d ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-1 leading-snug">
            Kitenge dress size L is packed and ready.
          </p>
<div className="mt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<Icon name="verified" className="text-[14px]" /> Complete
            </span>
<span className="font-label-sm text-label-sm text-outline">Order #SW-87110</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-space-lg px-margin flex flex-col gap-space-sm">
<div className="flex items-center justify-between mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Order &amp; Boda Tracking Alerts</h2>
<button className="font-label-md text-label-md text-primary font-bold">View History</button>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-8 h-8 rounded-xl bg-error-container text-error flex items-center justify-center">
<Icon name="moped" className="text-[18px]" />
</span>
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block">Order #SW-98421</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Boda Rider En-Route • Nakawa</span>
</div>
</div>
<span className="bg-error-container text-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Live</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sula is approximately <strong className="text-on-surface font-semibold">12 minutes away</strong> along Lugogo Bypass. Reminder: Inspect parcel thoroughly before sharing your 6-digit Delivery Code with rider.</p>

<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full w-3/4"></div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<Icon name="security" className="text-[16px] text-tertiary" />
<span className="font-label-sm text-label-sm">Funds held safely in escrow</span>
</div>
<button className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm active:bg-surface-container-high transition-colors">
<Icon name="call" className="text-[16px] text-primary" />
<span className="">Call Sula</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-8 h-8 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center">
<Icon name="pending_actions" className="text-[18px] text-primary" />
</span>
<div>
<span className="font-label-sm text-label-sm text-outline font-bold uppercase tracking-wider block">Order #SW-99104</span>
<span className="font-label-md text-label-md text-on-surface font-bold">MTN MoMo Payment Pending</span>
</div>
</div>
<span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">15m Expire</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        MTN prompt sent to <strong className="text-on-surface">0772***419</strong> for <strong className="text-on-surface">UGX 74,000</strong>. Authorize on your handset within 15 mins to lock inventory before stock runs out.
      </p>
<div className="flex items-center gap-space-xs mt-1">
<button className="flex-1 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md active:scale-95 transition-transform text-center shadow-sm">
          Resend USSD Prompt
        </button>
<button className="px-3 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md active:scale-95 transition-transform text-center">
          Change Telco
        </button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-8 h-8 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
<Icon name="verified_user" className="text-[18px]" />
</span>
<div>
<span className="font-label-sm text-label-sm text-outline font-bold uppercase tracking-wider block">Order #SW-87110</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Escrow Released &amp; Completed</span>
</div>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Settled</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-tertiary">UGX 65,000</strong> successfully disbursed to Defacto Fashion Kampala after the 48-hour dispute safety window passed without claims.
      </p>
<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-outline">Receipt: #SW-RC-8812</span>
<button className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-0.5">
<span className="">Download Invoice</span>
<Icon name="download" className="text-[14px]" />
</button>
</div>
</div>
</section>

<section className="mt-space-lg px-margin flex flex-col gap-space-sm">
<div className="flex items-center justify-between mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Promos &amp; Price Drop Alerts</h2>
<span className="font-label-sm text-label-sm text-outline">Updated hourly</span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center gap-space-md active:scale-[0.99] transition-transform">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container shrink-0" data-alt="SoundCore Life Q30 Wireless Noise Cancelling Over-Ear Headphones product packaging in clean studio lighting" src="/images/508f740afc554e83.webp" />
<div className="min-w-0 flex-1">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">
<Icon name="trending_down" className="text-[13px]" />
          Wishlist Price Drop
        </span>
<h3 className="font-label-lg text-label-lg text-on-surface truncate mt-1">SoundCore Life Q30 Headphones</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Dropped to <strong className="text-primary font-price-display text-[16px]">UGX 195,000</strong> <span className="line-through text-outline font-body-sm text-[12px]">UGX 230,000</span>
</p>
</div>
<button className="w-9 h-9 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 active:scale-90 transition-transform">
<Icon name="shopping_bag" className="text-[20px]" />
</button>
</div>

<div className="relative overflow-hidden bg-gradient-to-r from-surface-container to-surface-container-high p-space-md rounded-2xl shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
<Icon name="local_activity" className="text-[18px]" />
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider block">Kampala Weekend Flash</span>
<h3 className="font-label-lg text-label-lg text-on-surface font-extrabold">UGX 15,000 Off MTN MoMo</h3>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
        Valid on orders above UGX 80,000 when paying via MTN MoMo checkout. Use code at payment prompt:
      </p>
<div className="mt-3 flex items-center justify-between bg-surface-container-lowest px-3 py-2 rounded-xl">
<span className="font-currency-code text-currency-code tracking-widest text-primary font-bold">MTN15</span>
<button className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1 active:opacity-60 transition-opacity">
<Icon name="content_copy" className="text-[14px]" />
          Copy Code
        </button>
</div>
</div>
</section>

<div className="fixed bottom-3 left-0 right-0 px-margin z-40 max-w-[390px] mx-auto pointer-events-none">
<div className="pointer-events-auto flex items-center justify-between gap-space-xs bg-surface-container-lowest/95 backdrop-blur-xl p-2 rounded-2xl shadow-xl">

<button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high active:scale-95 transition-all">
<Icon name="done_all" className="text-[18px] text-on-surface-variant" />
<span className="font-label-sm text-label-sm font-semibold">Mark All Read</span>
</button>

<button className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-tertiary text-on-tertiary active:scale-95 transition-all shadow-md">
<Icon name="chat" className="text-[18px]" />
<span className="font-label-sm text-label-sm font-bold">WhatsApp 24/7 Desk</span>
</button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default MessagesNotificationsSwiftcartUganda;
