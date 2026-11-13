// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/help_centre_support_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [, setDrawerOpen] = useState(false);
  const [, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-28 w-full px-gutter-desktop flex flex-col justify-between py-space-xs"><div className="flex items-center justify-between gap-space-md h-14"><div className="flex items-center gap-space-md shrink-0"><a className="flex items-center gap-space-xs min-h-[48px] px-space-xs" data-path="home" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden sm:inline-block">SwiftCart</span></a><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest min-h-[48px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><Icon name="location_on" className="text-primary text-[20px]" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[120px]">Kampala Central</span></div><Icon name="expand_more" className="text-secondary text-[16px]" /></div></div><div className="flex-1 max-w-xl mx-space-xs hidden sm:flex items-center min-h-[48px] rounded-lg bg-surface-container-lowest px-space-xs shadow-[0_1px_4px_rgba(0,0,0,0.04)]"><select className="bg-transparent text-secondary font-label-md text-label-md pr-space-xs pl-space-xs py-space-xs border-0 focus:outline-none focus:ring-0 cursor-pointer"><option>All Categories</option><option>Phones &amp; Tablets</option><option>Electronics</option><option>Fashion</option><option>Groceries</option></select><div className="w-px h-6 bg-surface-container mx-space-xs"></div><input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none px-space-xs" placeholder="Search products, merchants, brands in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button aria-label="Search" className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 hover:bg-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="search" className="text-[20px]" /></button></div><div className="flex items-center gap-space-sm shrink-0"><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm min-h-[48px]"><Icon name="bolt" className="text-tertiary text-[18px]" /><span>Kampala Same-Day Dispatch</span></div><a aria-label="Wishlist" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}><Icon name="favorite" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">4</span></a><a aria-label="Shopping Cart" className="relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-lg text-secondary hover:text-on-surface transition-colors" data-path="cart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[24px]" /><span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">3</span></a><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><span className="hidden md:inline-block font-label-md text-label-md text-on-surface font-semibold">Sarah</span></div></div></div><nav className="flex items-center gap-space-lg overflow-x-auto h-12 border-0" data-active-classes="text-primary font-bold border-b-2 border-primary-container"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="super-deals" href="#" onClick={() => alertToast('Action triggered')}>Super Deals</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="phones-and-tablets" href="#" onClick={() => alertToast('Action triggered')}>Phones &amp; Tablets</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="electronics-and-audio" href="#" onClick={() => alertToast('Action triggered')}>Electronics &amp; Audio</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="fashion" href="#" onClick={() => alertToast('Action triggered')}>Fashion</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="home-and-living" href="#" onClick={() => alertToast('Action triggered')}>Home &amp; Living</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface whitespace-nowrap min-h-[48px] flex items-center px-space-xs transition-colors" data-path="groceries" href="#" onClick={() => alertToast('Action triggered')}>Groceries</a></nav></div></header><main className="w-full pt-28 bg-background flex-1"><div className="flex flex-col w-full">

<div className="w-full px-gutter md:px-margin-desktop py-space-md">

<section className="relative rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low shadow-sm p-space-lg mb-space-lg overflow-hidden">

<div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
<div className="absolute right-36 -bottom-16 w-56 h-56 rounded-full bg-tertiary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<Icon name="support_agent" className="text-[20px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">SwiftCart Resolution Desk</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-bold">
          How can we help you today in Uganda?
        </h1>
<p className="font-body-md text-body-md text-secondary mb-space-md">
          Instant answers on mobile money escrow, Kampala boda dispatches, pickup lockers, and merchant guarantees.
        </p>

<div className="relative flex items-center w-full min-h-[48px] bg-surface-container-lowest rounded-lg shadow-sm px-space-md py-space-xs mb-space-md">
<Icon name="search" className="text-secondary text-[22px] mr-space-sm shrink-0" />
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none" id="faq-search" placeholder="Search orders, escrow questions, boda delivery, returns..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
<button aria-label="Clear query" className="hidden w-8 h-8 rounded-full hover:bg-surface-container text-secondary flex items-center justify-center shrink-0 transition-colors" id="clear-btn" type="button" onClick={() => { setDrawerOpen(false); setModalOpen(false); }}>
<Icon name="close" className="text-[18px]" />
</button>
</div>

<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold shrink-0">Trending:</span>
<button className="font-label-md text-label-md px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors min-h-[36px] shadow-sm flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="lock_open" className="text-[16px] text-tertiary" />
            Escrow Release
          </button>
<button className="font-label-md text-label-md px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors min-h-[36px] shadow-sm flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="pin" className="text-[16px] text-primary" />
            Boda Handover PIN
          </button>
<button className="font-label-md text-label-md px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors min-h-[36px] shadow-sm flex items-center gap-1" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="contactless" className="text-[16px] text-primary-container" />
            MTN MoMo Failed
          </button>
<button className="font-label-md text-label-md px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors min-h-[36px] shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
            Return Policy
          </button>
<button className="font-label-md text-label-md px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors min-h-[36px] shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
            Hub Pickup
          </button>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">

<div className="md:col-span-7 flex flex-col gap-space-lg">

<div className="flex items-center justify-between p-space-sm px-space-md rounded-lg bg-tertiary-container/15 text-on-tertiary-container">
<div className="flex items-center gap-space-xs">
<Icon name="check_circle" className="text-tertiary text-[20px] animate-pulse" />
<span className="font-label-md text-label-md font-semibold">Kampala Network Systems Live</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">MTN MoMo &amp; Airtel Money: 100% Operational</span>
</div>

<div className="flex flex-col gap-space-md" id="faq-container">

<div className="faq-group rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container">
<Icon name="two_wheeler" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Orders &amp; 1-Hour Boda Tracking</h2>
<p className="font-body-sm text-body-sm text-secondary">City dispatch, live telemetry, and handover verification</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-secondary font-bold">2 Articles</span>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  How do I share my 6-Digit Delivery Release Code?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
<strong className="text-on-surface">Rule of Thumb:</strong> Only share your 6-digit code with the rider <span className="text-primary font-semibold">AFTER physically inspecting</span> your package and verifying the tamper seal.
                  </p>
<p>
                    Once the boda courier enters this code into the SwiftCart Fleet App, the MTN/Airtel escrow payment transitions from <em>Locked</em> to <em>Completed</em>. If the seal is compromised, decline handover immediately and report via the ticket panel below.
                  </p>
<div className="flex items-center gap-2 mt-1">
<Icon name="verified" className="text-tertiary text-[18px]" />
<span className="font-label-sm text-label-sm text-tertiary font-bold">Tamper Seal Guarantee Enforced</span>
</div>
</div>
</div>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  What if the rider is delayed in Kampala traffic?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
                    All express boda runners are assigned dynamic routing around jam hotspots (Clock Tower, Jinja Road, and Northern Bypass). If your rider is delayed past the guaranteed 60-minute window:
                  </p>
<ul className="list-disc pl-5 space-y-1">
<li>Your account is auto-credited with <strong>UGX 5,000</strong> SwiftCart Delivery Credit.</li>
<li>Live GPS tracking refreshes every 10 seconds via your order dashboard.</li>
<li>You may call the rider toll-free directly from the order map view.</li>
</ul>
</div>
</div>
</div>
</div>

<div className="faq-group rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<Icon name="shield" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Payments &amp; Mobile Money Escrow</h2>
<p className="font-body-sm text-body-sm text-secondary">Bank of Uganda regulatory framework and MoMo prompts</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-secondary font-bold">2 Articles</span>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  How does the Bank of Uganda escrow protocol protect me?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
                    Every UGX sent through MTN Mobile Money or Airtel Money is held in a ring-fenced custodial escrow trust regulated under the <em>National Payment Systems Act 2020</em>.
                  </p>
<p>
                    Funds are never transferred to the independent merchant until you confirm inspection of goods via your 6-digit delivery PIN or after a 48-hour inspection period passes without an active dispute.
                  </p>
</div>
</div>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  My MTN MoMo USSD prompt did not appear, what should I do?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
                    If the automated push prompt times out on your handset:
                  </p>
<ol className="list-decimal pl-5 space-y-1">
<li>Dial <strong>*165#</strong> on your MTN line immediately.</li>
<li>Select <strong>Option 4 (Payments)</strong> → <strong>Option 6 (Pending Approvals)</strong>.</li>
<li>Authorize the transaction labeled <em>SwiftCart Uganda Escrow</em>.</li>
<li>If it fails, tap "Retry Payment" on checkout within 15 minutes.</li>
</ol>
</div>
</div>
</div>
</div>

<div className="faq-group rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<Icon name="assignment_return" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Returns, Refunds &amp; Damaged Goods</h2>
<p className="font-body-sm text-body-sm text-secondary">Zero-fee return logistics and automated wallet reconciliations</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-secondary font-bold">2 Articles</span>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  How quickly will my MTN/Airtel wallet be refunded?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
                    Refunds on canceled orders or verified returns are processed via direct API back to the originating mobile money number within <strong>15 to 45 minutes</strong> after return inspection at our William Street Hub.
                  </p>
</div>
</div>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Who pays for the boda courier on a return?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
<strong className="text-on-surface">SwiftCart covers 100% of reverse logistics.</strong> You will never be asked to pay the boda courier when returning defective, counterfeit, or misrepresented goods.
                  </p>
</div>
</div>
</div>
</div>

<div className="faq-group rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
<div className="flex items-center justify-between pb-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<Icon name="storefront" className="text-[20px]" />
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pickup Hubs &amp; Smart Lockers</h2>
<p className="font-body-sm text-body-sm text-secondary">City self-collection spots and opening schedules</p>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-secondary font-bold">1 Article</span>
</div>

<div className="faq-item pt-space-xs">
<button className="w-full flex items-center justify-between py-space-sm text-left min-h-[48px] focus:outline-none group" type="button" onClick={() => alertToast('Action triggered')}>
<span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  What are the opening hours of the William Street Central Hub?
                </span>
<Icon name="expand_more" className="text-secondary transition-transform duration-200" />
</button>
<div className="faq-content hidden pb-space-sm pr-space-md">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface-variant flex flex-col gap-space-xs">
<p>
                    The William Street Central Hub is open <strong>Monday to Saturday from 07:30 to 20:00</strong>, and <strong>Sundays from 09:00 to 17:00</strong>. Secure self-pickup lockers operate 24/7 with QR access.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="confirmation_number" className="text-primary text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface font-bold">Your Open Support Tickets</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold">1 Active</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md font-bold text-on-surface">Ticket #TCK-4921</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-body-sm text-body-sm text-secondary">Audio Pro X10 Wireless</span>
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                  In Review
                </span>
</div>
<p className="font-body-md text-body-md text-on-surface mt-1">
                "Damaged Headphone Seal upon Boda Handover"
              </p>
<div className="flex items-center gap-space-xs text-secondary mt-1">
<Icon name="person" className="text-[16px]" />
<span className="font-body-sm text-body-sm">Assigned Lead: Officer Patricia Namubiru (Escrow Claims Desk)</span>
</div>
</div>
<button className="w-full sm:w-auto min-h-[48px] px-space-md py-space-xs rounded-lg bg-on-surface text-surface hover:bg-primary transition-colors font-label-lg text-label-lg shrink-0 flex items-center justify-center gap-1 shadow-sm" type="button" onClick={() => alertToast('Action triggered')}>
<span>View Ticket</span>
<Icon name="arrow_forward" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-space-lg">

<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Direct Contact Channels</h3>
<p className="font-body-sm text-body-sm text-secondary">Priority live channels for shoppers and merchants in Uganda</p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-full bg-tertiary-container text-on-primary flex items-center justify-center shadow-sm">
<Icon name="chat" className="text-[20px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">WhatsApp Instant Support</div>
<div className="font-body-sm text-body-sm text-tertiary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                    Typical reply in 2 mins
                  </div>
</div>
</div>
</div>
<div className="font-body-md text-body-md text-secondary mt-1">
              +256 700 112 233
            </div>
<a className="w-full min-h-[48px] rounded-lg bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors mt-space-xs shadow-sm" href="https://wa.me/256700112233" rel="noopener noreferrer" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="send" className="text-[20px]" />
<span>Chat on WhatsApp</span>
</a>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
<Icon name="call" className="text-[20px]" />
</div>
<div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">Kampala Toll-Free Hotline</div>
<div className="font-body-sm text-body-sm text-secondary">Available 7:00 AM – 10:00 PM Daily</div>
</div>
</div>
</div>
<div className="font-price-display text-price-display text-primary mt-1 font-bold">
              0800 220 330
            </div>
<a className="w-full min-h-[48px] rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors mt-space-xs shadow-sm" href="tel:0800220330" onClick={() => alertToast('Action triggered')}>
<Icon name="phone_in_talk" className="text-[20px]" />
<span>Call Toll-Free</span>
</a>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
<Icon name="mail" className="text-[20px]" />
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Email Support Desk</span>
<span className="font-body-sm text-body-sm text-secondary">support@swiftcart.ug • 24h response time</span>
</div>
</div>
<a className="min-h-[48px] px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center shrink-0 transition-colors shadow-sm" href="mailto:support@swiftcart.ug" onClick={() => alertToast('Action triggered')}>
              Compose
            </a>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="location_city" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Walk-in Help Desk</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-tertiary-container/15 text-tertiary font-bold">Open Today</span>
</div>

<div className="relative w-full h-36 rounded-lg overflow-hidden shadow-inner">
<img className="w-full h-full object-cover" data-alt="A brightly lit modern customer support walk-in counter inside William Street Arcade Kampala Uganda. A smiling professional Ugandan customer service officer wearing a branded SwiftCart polo shirt assists an urban shopper. The backdrop has clean wood panelling, orange and emerald signage, smart package pickup lockers, and warm ambient sunlight." src={`${assetBase}/images/2e9fd181ba01f196.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-on-primary">
<span className="font-label-md text-label-md font-bold">William Street Central Hub</span>
<span className="font-label-sm text-label-sm bg-primary-container px-2 py-0.5 rounded text-on-primary">Desk #01</span>
</div>
</div>
<div className="flex flex-col gap-1 text-on-surface">
<div className="flex items-center gap-space-xs text-secondary font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-[18px] text-primary" />
<span>William St Arcade, Ground Floor, Unit G-14, Kampala</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-body-sm text-body-sm">
<Icon name="badge" className="text-[18px]" />
<span>Hub Lead Officer: <strong>Isaac Kato</strong></span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-body-sm text-body-sm">
<Icon name="schedule" className="text-[18px]" />
<span>Mon - Sat: <strong>07:30 - 20:00</strong> | Sun: <strong>09:00 - 17:00</strong></span>
</div>
</div>
<button className="w-full min-h-[48px] rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors mt-space-xs" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="directions" className="text-[18px]" />
<span>Get Hub Directions (Google Maps)</span>
</button>
</div>

<div className="rounded-xl bg-gradient-to-br from-inverse-surface to-on-background text-inverse-on-surface p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/20 blur-xl pointer-events-none"></div>
<div className="flex items-center gap-space-xs">
<Icon name="verified_user" className="text-tertiary-fixed text-[24px]" />
<span className="font-label-lg text-label-lg text-surface-bright font-bold">Official Buyer Protection Pledge</span>
</div>
<p className="font-body-sm text-body-sm text-surface-variant/80">
            Every transaction is backed by our Uganda merchant integrity code and formal digital finance escrow covenants.
          </p>
<div className="flex flex-col gap-space-xs mt-space-xs">

<div className="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-lowest/10">
<Icon name="lock" className="text-tertiary-fixed text-[20px] shrink-0" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-surface-bright">100% Escrow Security</span>
<span className="font-body-sm text-body-sm text-surface-variant/70">Payment held safely until delivery code handover</span>
</div>
</div>

<div className="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-lowest/10">
<Icon name="handshake" className="text-primary-fixed text-[20px] shrink-0" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-surface-bright">Zero Fee Dispute Resolution</span>
<span className="font-body-sm text-body-sm text-surface-variant/70">SwiftCart mediation panel assigns decisions in &lt; 24h</span>
</div>
</div>

<div className="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-lowest/10">
<Icon name="gavel" className="text-secondary-fixed text-[20px] shrink-0" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-surface-bright">Bank of Uganda &amp; UCC Compliant</span>
<span className="font-body-sm text-body-sm text-surface-variant/70">Operated strictly within National Payment System Act</span>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between text-surface-variant/60 font-body-sm text-body-sm">
<span>License: NPS-PSP-2023/048</span>
<span className="text-tertiary-fixed font-semibold">Active &amp; Certified</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transform translate-y-32 transition-transform duration-300 ease-out max-w-sm rounded-lg bg-inverse-surface text-inverse-on-surface shadow-2xl p-space-md flex items-center gap-space-sm" id="toast-notification">
<Icon name="info" className="text-primary-container text-[24px]" />
<span className="font-body-md text-body-md" id="toast-message">Action successful</span>
</div>
</div>

</div></main><footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.03)] mt-auto"><div className="w-full px-gutter-desktop py-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-lg"><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0"><Icon name="verified_user" className="text-tertiary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">MTN &amp; Airtel MoMo Escrow</span><span className="font-body-sm text-body-sm text-secondary">Funds secured until 100% item inspection</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0"><Icon name="two_wheeler" className="text-primary-container text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">1-Hour Kampala Boda Dispatch</span><span className="font-body-sm text-body-sm text-secondary">Express city hub runner direct to your doorstep</span></div></div><div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.04)] min-h-[48px]"><div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="assignment_return" className="text-secondary text-[22px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">7-Day Free Hub Returns</span><span className="font-body-sm text-body-sm text-secondary">Drop off at Oasis Mall, Acacia, or Village Mall</span></div></div></div><div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-md"><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="terms-of-service" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="buyer-protection" href="#" onClick={() => alertToast('Action triggered')}>Buyer Protection</a><a className="font-label-md text-label-md text-secondary hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="hub-locations" href="#" onClick={() => alertToast('Action triggered')}>Hub Locations</a><a className="font-label-md text-label-md text-primary font-bold hover:text-on-surface min-h-[48px] flex items-center transition-colors" data-path="sell-on-swiftcart" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>Sell on SwiftCart</a></div><p className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd. All rights reserved.</p></div></div></footer>
    </div>
  );
};

export default Screen;
