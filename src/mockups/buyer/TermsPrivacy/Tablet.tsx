// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/privacy_policy_terms_swiftcart_buyer_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]"><div className="h-20 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md shrink-0"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold hidden sm:inline">SwiftCart</span><div className="h-6 w-px bg-surface-variant hidden md:block"></div><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface-variant"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-secondary uppercase">Deliver to</span><span className="font-label-md text-label-md text-on-surface font-bold truncate max-w-[110px]">Kampala Central</span></div></div></div><div className="flex-1 max-w-sm mx-space-sm"><div className="relative flex items-center w-full"><Icon name="search" className="absolute left-3 text-secondary text-[20px]" /><input className="w-full h-10 pl-10 pr-10 rounded-lg bg-surface-container-low text-on-surface placeholder:text-secondary font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search products, brands, essentials in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><Icon name="photo_camera" className="absolute right-3 text-secondary text-[20px] cursor-pointer hover:text-on-surface" /></div></div><div className="flex items-center gap-space-md shrink-0"><nav className="hidden sm:flex items-center gap-space-md" data-active-classes="text-primary font-bold"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="notifications" href="#" onClick={() => alertToast('Action triggered')}>Updates</a><a aria-current="page" className="transition-colors text-primary font-bold" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Legal</a></nav><a className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center justify-center" data-path="notifications" href="#" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">3</span></a><div className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"><Icon name="shopping_bag" className="text-[22px]" /><span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">2</span></div><div className="flex items-center gap-space-xs pl-space-xs"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div><div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold">SN</div></div></div></div></header><main className="w-full pt-20 bg-background min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-4 md:px-gutter-desktop py-space-lg">

<div className="mb-space-lg rounded-xl bg-surface-container-low p-space-md md:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md">
<Icon name="gavel" className="text-[28px]" />
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Uganda Data Protection &amp; Privacy Act 2019</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[13px]" /> Compliant &amp; Registered
            </span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Legal &amp; Consumer Safeguards</span>
<span className="font-body-sm text-body-sm text-secondary">Statutory compliance oversight for SwiftCart Uganda Logistics Technologies Ltd.</span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full md:w-auto">
<a className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-container transition-all" href="#dpo-registry" onClick={() => alertToast('Action triggered')}>
<Icon name="corporate_fare" className="text-[18px] text-primary" />
          DPO Registry
        </a>
<button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-bold hover:bg-surface-variant transition-all" id="quick-print-head" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
          Print
        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<aside className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-24">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="relative flex items-center w-full">
<Icon name="search" className="absolute left-3 text-secondary text-[20px]" />
<input className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-secondary font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="legal-search" placeholder="Search legal clauses, MoMo, PIN..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} />
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-xs flex items-center shadow-sm">
<button className="flex-1 py-2.5 rounded-lg font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1.5 bg-primary text-on-primary shadow-sm" id="tab-privacy" onClick={() => alertToast('Action triggered')}>
<Icon name="shield" className="text-[18px]" />
            Privacy Policy
          </button>
<button className="flex-1 py-2.5 rounded-lg font-label-md text-label-md font-bold text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center gap-1.5" id="tab-terms" onClick={() => alertToast('Action triggered')}>
<Icon name="description" className="text-[18px]" />
            Terms of Service
          </button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Document Navigation</span>
<span className="font-label-sm text-label-sm text-primary font-bold">7 Key Articles</span>
</div>
<nav className="flex flex-col gap-1" id="toc-nav">
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md font-bold transition-colors" href="#pledge-overview" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}>
<Icon name="verified_user" className="text-[18px] text-primary shrink-0 mt-0.5" />
<span className="line-clamp-1">1. SwiftCart Data Pledge &amp; Escrow Overview</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#info-we-collect" onClick={() => alertToast('Action triggered')}>
<Icon name="badge" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">2. Information We Collect (Identity, MoMo)</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#how-we-use-data" onClick={() => alertToast('Action triggered')}>
<Icon name="moped" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">3. How We Use Data &amp; Boda Handover Rules</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#payment-security" onClick={() => alertToast('Action triggered')}>
<Icon name="lock" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">4. Payment Security &amp; Zero PIN Storage</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#live-transit-gps" onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}>
<Icon name="near_me" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">5. Live Transit GPS &amp; Rider Tracking</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#retention-deletion" onClick={() => alertToast('Action triggered')}>
<Icon name="auto_delete" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">6. Data Retention &amp; Deletion Rights</span>
</a>
<a className="toc-link group flex items-start gap-space-xs p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md font-medium transition-colors" href="#ugandan-framework" onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}>
<Icon name="account_balance" className="text-[18px] text-secondary shrink-0 mt-0.5 group-hover:text-primary" />
<span className="line-clamp-1">7. Ugandan Legal Framework &amp; DPO Registry</span>
</a>
</nav>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<button className="w-full py-3 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs transition-colors" onClick={() => alertToast('Action triggered')}>
<Icon name="picture_as_pdf" className="text-[20px] text-primary" />
<span>Download Official PDF Copy</span>
</button>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs truncate">
<Icon name="mail" className="text-[18px] text-primary" />
<span className="font-body-sm text-body-sm text-on-surface truncate">privacy@swiftcart.ug</span>
</div>
<a className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm hover:bg-primary hover:text-on-primary transition-colors" href="mailto:privacy@swiftcart.ug" onClick={() => alertToast('Action triggered')}>
              Contact DPO
            </a>
</div>
<div className="flex items-center justify-between text-secondary pt-space-xs">
<span className="font-label-sm text-label-sm">Document Hash: 9d8f-7c12-ug</span>
<span className="font-label-sm text-label-sm">Rev. 2024.10</span>
</div>
</div>

<div className="bg-gradient-to-br from-surface-container-high via-surface-container-low to-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center gap-space-xs text-primary mb-1">
<Icon name="local_police" className="text-[20px]" />
<span className="font-label-sm text-label-sm uppercase font-bold tracking-wide">National DPA Certified</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">Registered Data Collector No. PDC-UG-88410</span>
<p className="font-body-sm text-body-sm text-secondary mt-1">
            Personal data held in strictly encrypted African regional nodes with zero cross-border selling or behavioral broker pooling.
          </p>
</div>
</aside>

<section className="lg:col-span-8 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                Consumer Legal Protection
              </span>
<span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                Uganda Data Protection &amp; Privacy Act 2019
              </span>
</div>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<Icon name="update" className="text-[14px]" />
              Last updated: October 24, 2024
            </span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight" id="policy-headline">
              Privacy Policy &amp; Data Safeguards
            </h1>
<p className="font-body-md text-body-md text-secondary mt-1">
              SwiftCart Uganda Logistics Technologies Ltd. • Incorporated under the Laws of the Republic of Uganda
            </p>
</div>

<div className="rounded-xl bg-surface-container p-space-md flex flex-col sm:flex-row items-start gap-space-md shadow-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<Icon name="verified" className="text-[24px]" />
</div>
<div className="flex flex-col gap-1">
<span className="font-label-lg text-label-lg text-on-surface font-bold">The SwiftCart Transparent Data Pledge</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We collect only the essential personal and location records needed to fulfill orders rapidly, coordinate dispatch via certified local Boda boda couriers, and process encrypted Mobile Money settlements. We never sell, monetize, or broker your personal information.
              </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="shield_lock" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Zero PIN Storage</span>
<span className="font-body-sm text-body-sm text-secondary">MoMo keys unlogged</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="pin_drop" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Live Transit GPS</span>
<span className="font-body-sm text-body-sm text-secondary">Active delivery only</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="enhanced_encryption" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">256-Bit SSL Shield</span>
<span className="font-body-sm text-body-sm text-secondary">End-to-end telemetry</span>
</div>
</div>
</div>
</div>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="pledge-overview">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">1. SwiftCart Data Pledge &amp; Escrow Overview</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            SwiftCart operates a high-throughput multi-vendor digital commerce marketplace serving buyers across Uganda. To protect all marketplace participants, our data protocols are anchored in real-time escrow safety. When you authorize an order, your capital and personal contact coordinates are ring-fenced inside our secured operational vault until verified delivery handover by your assigned courier.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg font-bold">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<span>Payment Escrow Protection</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Payment deductions via MTN MoMo, Airtel Money, or Card remain in an independent trustee escrow until goods pass physical buyer inspection at the door.
              </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg font-bold">
<Icon name="visibility_off" className="text-primary text-[20px]" />
<span>Anonymized Merchant Handoff</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Independent retail merchants never receive your direct mobile number or payment identifiers—only warehouse SKU manifests and delivery tracking codes.
              </p>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="info-we-collect">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">2. Information We Collect (Identity, Addresses, MoMo)</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Under Section 10 of the Uganda Data Protection and Privacy Act 2019, SwiftCart collects and processes solely the baseline minimum personal records required to establish proof of sale and complete physical transit:
          </p>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="person" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Identity &amp; Account Profiling</span>
<span className="font-body-md text-body-md text-on-surface-variant">Full name, contact telephone number (e.g. +256 prefix), verified email address, and optional business tax PIN (URA TIN) for corporate invoicing.</span>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="home_pin" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Destination Geolocation &amp; Physical Address</span>
<span className="font-body-md text-body-md text-on-surface-variant">Plot numbers, street markers, estate names, sub-county landmarks, and precise GPS lat/long coordinates within the Greater Kampala Metropolitan Area (GKMA) and regional delivery zones.</span>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
<Icon name="contactless" className="text-[18px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Mobile Money &amp; Transaction Tokens</span>
<span className="font-body-md text-body-md text-on-surface-variant">MSISDN payment phone number, payment gateway reference handles, network provider ID (MTN Uganda / Airtel Uganda), and automated bank settlement status logs.</span>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="how-we-use-data">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">3. How We Use Your Data &amp; Boda Handover Rules</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            SwiftCart powers doorstep deliveries via an audited fleet of professional express dispatch riders across Kampala, Entebbe, Wakiso, and Mukono. We enforce strict contractual privacy guardrails during the transit handover:
          </p>

<div className="rounded-xl bg-surface-container-high/40 p-space-md flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="two_wheeler" className="text-primary text-[22px]" />
<span className="font-label-lg text-label-lg font-bold">Direct Boda Boda Dispatch Protocol</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1">
<Icon name="call" className="text-[16px]" /> Masked Driver Contact
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  The dispatched rider calls you via a masked VoIP relay or encrypted cellular proxy. Your personal mobile number is never permanently exposed on courier devices.
                </span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
<span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1">
<Icon name="qr_code_scanner" className="text-[16px]" /> 4-Digit Handover OTP
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Deliveries are released only upon vocal verification of your secure 4-digit buyer OTP. The rider cannot finalize delivery without this real-time key.
                </span>
</div>
</div>
<div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs">
<Icon name="task_alt" className="text-tertiary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface">
                Post-delivery, rider access to route maps and delivery notes automatically expires within 15 minutes of completion.
              </span>
</div>
</div>

<div className="flex flex-col gap-1 pt-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider text-secondary">
              Active Regional Logistics Metro Boundaries:
            </span>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="px-3 py-1 rounded-md bg-surface-container font-label-md text-label-md text-on-surface font-semibold">Kampala Central &amp; Nakawa</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-md text-label-md text-on-surface font-semibold">Entebbe Municipality</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-md text-label-md text-on-surface font-semibold">Wakiso / Kira / Nansana</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-md text-label-md text-on-surface font-semibold">Mukono Town Council</span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="payment-security">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">4. Payment Security &amp; Zero PIN Storage</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            SwiftCart integrates directly with Bank of Uganda licensed National Payment System (NPS) operators, including MTN Mobile Money Uganda and Airtel Money. We strictly maintain a <strong>Zero Mobile Money PIN Storage Architecture</strong>.
          </p>
<div className="rounded-xl bg-error-container/20 p-space-md flex items-start gap-space-md">
<Icon name="warning" className="text-error text-[28px] shrink-0" />
<div className="flex flex-col gap-1">
<span className="font-label-lg text-label-lg font-bold text-error">Critical Consumer Payment Warning</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                SwiftCart staff, agents, and Boda couriers will <strong>NEVER</strong> prompt, request, or input your 4-digit or 5-digit Mobile Money PIN. PIN entry occurs exclusively via official telecom USSD prompts (*165# or *185#) or certified financial SDK webhooks on your personal device.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">PCI-DSS Tokenized</span>
<span className="font-body-sm text-body-sm text-secondary">Card digits are never kept on local disk. Encrypted tokens only.</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">BOU NPS Authorized</span>
<span className="font-body-sm text-body-sm text-secondary">Settlement partners operate with full central bank licensure.</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-md text-label-md font-bold text-on-surface">Instant Chargebacks</span>
<span className="font-body-sm text-body-sm text-secondary">Automated dispute mediation within 24 hours for nondelivery.</span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="live-transit-gps">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">5. Live Transit GPS &amp; Rider Tracking</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Location telemetry is captured strictly in real time when an active delivery transit is underway. We monitor vehicle speed, vector telemetry, and spatial progress to predict accurate arrivals at your designated drop point.
          </p>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<Icon name="navigation" className="text-[26px]" />
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Ephemeral Telemetry Logging</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live coordinate broadcasts cease automatically once the package is acknowledged as received.</span>
</div>
</div>
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold shadow-sm whitespace-nowrap">
              No Idle Geo-Pings
            </span>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="retention-deletion">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">6. Data Retention, Security &amp; Deletion Rights</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            In compliance with Part IV of Uganda's Data Protection Act, every buyer possesses full statutory rights over their personal telemetry:
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-1.5">
<Icon name="download" className="text-primary text-[20px]" />
                Right of Portability
              </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Request an encrypted machine-readable JSON copy of all order histories, addresses, and chat transcripts stored under your SwiftCart ID.
              </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-1.5">
<Icon name="delete_forever" className="text-primary text-[20px]" />
                Right to Erasure (Forget Me)
              </span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Permanently purge your account, saved addresses, and profile metadata. Financial transaction ledgers are retained for 7 years solely as mandated by URA tax statutes.
              </p>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md" id="ugandan-framework">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-headline-sm text-headline-sm font-bold">7. Ugandan Legal Framework &amp; DPO Registry</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            This Policy and all terms of commerce are governed and construed in accordance with the Laws of Uganda. Any disputes arising herefrom shall be submitted to the competent jurisdiction of the Commercial Division of the High Court of Uganda.
          </p>

<div className="p-space-md md:p-space-lg rounded-xl bg-gradient-to-r from-surface-container-high to-surface-container flex flex-col gap-space-md shadow-sm" id="dpo-registry">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant/30 pb-space-sm">
<div className="flex items-center gap-space-xs">
<Icon name="verified" className="text-primary text-[24px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Data Protection Officer (DPO) Physical Registry</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-lowest text-primary font-bold px-2.5 py-1 rounded-full shadow-sm">
                Official Entity File
              </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Corporate Registered Office:</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">
                  Plot 14, Jinja Road, Commercial Plaza, Level 4<br />
                  P.O. Box 7721, Kampala, Uganda
                </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Direct Digital Privacy Desk:</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">
                  Email: privacy@swiftcart.ug<br />
                  Helpline: +256 (0) 414 000 890 (Mon-Fri 8am-5pm)
                </span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface">
<strong>In-App Self Service:</strong> Profile → Help Centre → Privacy Desk → Request Account Deletion
              </span>
<a className="text-primary font-label-md text-label-md font-bold hover:underline ml-2 whitespace-nowrap" href="mailto:privacy@swiftcart.ug?subject=Privacy%20Inquiry%20SwiftCart%20Uganda" onClick={() => alertToast('Action triggered')}>
                Open Ticket
              </a>
</div>
</div>
</article>

<div className="h-16"></div>
</section>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-space-sm px-4 md:px-gutter-desktop">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface">
<Icon name="policy" className="text-primary text-[20px]" />
<span className="font-body-sm text-body-sm text-secondary hidden md:inline">
          By proceeding on SwiftCart, you confirm adherence to the Buyer Protection Protocols and Privacy Rules.
        </span>
<span className="font-label-md text-label-md font-bold md:hidden">
          Uganda Buyer Privacy Notice
        </span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-bold flex items-center justify-center gap-1 transition-colors" id="btn-print-bottom" onClick={() => alertToast('Action triggered')}>
<Icon name="print" className="text-[18px]" />
<span>Print Terms</span>
</button>
<button className="flex-1 sm:flex-initial px-space-xl py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-surface-tint font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all" id="btn-ack" onClick={() => alertToast('Action triggered')}>
<Icon name="check_circle" className="text-[18px]" />
<span id="btn-ack-text">I Understand &amp; Acknowledge</span>
</button>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.04)]"><div className="w-full max-w-5xl mx-auto px-gutter-desktop py-space-xl flex flex-col gap-space-lg"><div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pb-space-lg"><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="verified_user" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Ugandan Customer Guarantee</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">100% genuine products verified through local verified merchants with swift 24hr Kampala delivery.</span></div></div><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="sync_alt" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Hassle-Free Returns</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">7-day doorstep return policy across Kampala Central, Entebbe, Wakiso, and Mukono metro.</span></div></div><div className="flex items-start gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low text-primary"><Icon name="headset_mic" className="text-[26px]" /></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface font-bold">Help &amp; Support</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dedicated local customer helpline (toll-free) and 24/7 instant WhatsApp concierge.</span></div></div></div><div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-md"><div className="flex flex-wrap items-center gap-space-sm"><span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Payment Partners:</span><div className="flex items-center gap-space-xs"><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">MTN MoMo</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Airtel Money</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Visa</span><span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">Cash on Delivery</span></div></div><div className="flex items-center gap-space-md"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Terms of Service</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy-and-terms" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><span className="font-body-sm text-body-sm text-secondary">© 2025 SwiftCart Uganda Ltd.</span></div></div></div></footer>
    </div>
  );
};

export default Tablet;
