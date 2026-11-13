// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/buyer/seller_application_status_swiftcart_tablet/code.html
import React, { useState } from 'react';
import Icon from '../../../components/shared/Icon';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface relative w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
` }} />
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 w-full px-gutter flex flex-col justify-center gap-space-xs"><div className="flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><img alt="swiftcart-logo-final.png" className="h-8 w-auto object-contain" src={`${assetBase}/images/a593324aedcf6cb2.webp`} /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">SwiftCart</span><div className="h-5 w-[1px] bg-outline-variant/40 mx-space-xs"></div><div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors"><Icon name="location_on" className="text-[18px] text-primary" /><div className="flex flex-col text-left"><span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Deliver to</span><span className="font-label-md text-label-md text-on-surface leading-none font-bold">Kampala Central</span></div><Icon name="expand_more" className="text-[16px]" /></div></div><div className="flex items-center gap-space-md"><nav className="flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="explore" href="#" onClick={() => alertToast('Action triggered')}>Explore</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="stores" href="#" onClick={() => alertToast('Action triggered')}>Stores</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="wishlist" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}>Wishlist</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}>Orders</a></nav><div className="flex items-center gap-space-sm pl-space-xs"><button className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-surface-container-high" type="button" onClick={() => alertToast('Action triggered')}><Icon name="notifications" className="text-[22px]" /><span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full"></span></button><button className="relative flex items-center gap-space-xs bg-primary-fixed/50 hover:bg-primary-fixed text-on-primary-fixed px-space-sm py-1.5 rounded-full transition-colors" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}><Icon name="shopping_cart" className="text-[20px] text-primary" /><span className="font-label-md text-label-md bg-primary text-on-primary px-1.5 py-0.2 rounded-full leading-tight font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div><div className="w-full flex items-center gap-space-sm"><div className="flex-1 flex items-center h-10 bg-surface-container-lowest rounded-lg shadow-[0_1px_4px_rgba(15,23,42,0.06)] px-space-sm gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface-variant cursor-pointer pr-space-xs"><span className="font-label-sm text-label-sm">All Categories</span><Icon name="arrow_drop_down" className="text-[16px]" /></div><div className="h-4 w-[1px] bg-outline-variant/50"></div><Icon name="search" className="text-secondary text-[20px] ml-space-xs" /><input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none" placeholder="Search products, brands, groceries in Uganda..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }} /><button className="p-1 text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => alertToast('Action triggered')}><Icon name="photo_camera" className="text-[20px]" /></button></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">
<div className="w-full max-w-5xl mx-auto px-margin md:px-gutter-desktop py-space-md flex flex-col gap-space-lg">

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-sm">
<div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-gradient-to-br from-primary-container/10 via-primary-fixed/20 to-transparent pointer-events-none blur-2xl"></div>
<div className="relative z-10 flex flex-col gap-space-sm">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-sm py-1 rounded-full text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<Icon name="inventory_2" className="text-[16px] text-primary" />
<span>Application #APP-8842 • Submitted Oct 24, 2024</span>
</div>
<div className="inline-flex items-center gap-space-xs bg-primary-fixed text-on-primary-fixed px-space-md py-1 rounded-full shadow-sm font-label-sm text-label-sm font-bold">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
</span>
<span>IN REVIEW • STAGE 2 OF 4</span>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Application Under Review <span className="text-primary-container font-headline-lg text-headline-lg">• Tier 2 Verification</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Our merchant compliance team at Kampala HQ is reviewing your URSB and Mobile Money credentials. Standard SLA is within 24 hours.
          </p>
</div>

<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<Icon name="schedule" className="text-[18px] text-tertiary" />
<span>Elapsed: 4h 18m</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<Icon name="corporate_fare" className="text-[18px] text-primary" />
<span>Desk: Nakasero Hub Compliance</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<Icon name="security_update_good" className="text-[18px] text-tertiary-container" />
<span>Priority Queue: Kampala Boda Fleet</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">

<div className="md:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="timeline" className="text-primary text-[24px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Review Milestones</h2>
</div>
<span className="bg-surface-container-high text-on-surface-variant px-2.5 py-0.5 rounded font-label-sm text-label-sm font-bold">Standard SLA</span>
</div>

<div className="relative pl-6 flex flex-col gap-space-lg before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">

<div className="relative flex items-start gap-space-md group">
<div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm ring-4 ring-surface-container-lowest">
<Icon name="check" className="text-[16px] font-bold" />
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Application Submitted</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">Done</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Completed • Oct 24, 10:14 AM EAT</p>
<p className="font-body-sm text-body-sm text-secondary pt-1">Store details, KYC dossier, and registry authorization payload captured successfully.</p>
</div>
</div>

<div className="relative flex items-start gap-space-md group">
<div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md ring-4 ring-surface-container-lowest">
<Icon name="autorenew" className="text-[16px] animate-spin" />
</div>
<div className="flex flex-col gap-0.5 bg-surface-container-low p-space-md rounded-lg w-full shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg font-bold text-primary">Document Verification &amp; URSB Check</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Live Review
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                  URSB registry query verified; Trade License under optical scan.
                </p>
<div className="mt-2 w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-3/4 rounded-full transition-all duration-500"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary">Registry match: 98% accuracy</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">75% Complete</span>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md opacity-75">
<div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="hourglass_empty" className="text-[14px]" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">MoMo Payout Account Test</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated 1 UGX micro-ping to MTN MoMo +256 772 123 456</p>
<span className="font-label-sm text-label-sm text-secondary pt-0.5">Awaiting stage 2 document pass</span>
</div>
</div>

<div className="relative flex items-start gap-space-md opacity-60">
<div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center ring-4 ring-surface-container-lowest">
<Icon name="storefront" className="text-[14px]" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Storefront Activation &amp; Tier 2 Approval</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ready to list products and stage with Nakasero Boda fleet</p>
<span className="font-label-sm text-label-sm text-secondary pt-0.5">Grants 'Verified Merchant' badge</span>
</div>
</div>
</div>

<div className="bg-surface-container-high/60 rounded-lg p-space-md flex items-center gap-space-sm">
<Icon name="event_available" className="text-primary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Target Resolution</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Expected approval by tomorrow, 2:00 PM EAT</span>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-2.5 rounded font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="edit_note" className="text-[18px]" />
<span>Edit Application Details</span>
</button>
<button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-2.5 rounded font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs active:scale-[0.98]" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="download" className="text-[18px]" />
<span>Download Copy (PDF)</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="support_agent" className="text-tertiary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Expedited Review Support</h3>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">Online</span>
</div>
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex-shrink-0 overflow-hidden relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait photo of Patricia Namubiru, a friendly African female professional in business smart attire, customer onboarding lead in Kampala office with warm ambient lighting" src={`${assetBase}/images/895c5e3cd09455fc.webp`} />
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Patricia Namubiru</span>
<span className="text-tertiary text-xs font-label-sm text-label-sm">• Merchant Onboarding Lead</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Need to expedite verification? Connect directly with Merchant Onboarding Lead Patricia Namubiru via WhatsApp or email.
              </p>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<a className="flex items-center justify-center gap-space-xs bg-tertiary hover:bg-tertiary-fixed-variant text-on-tertiary py-2 rounded font-label-md text-label-md transition-colors shadow-sm" href="https://wa.me/256701892411" target="_blank" onClick={() => alertToast('Action triggered')}>
<Icon name="chat" className="text-[18px]" />
<span>WhatsApp Chat</span>
</a>
<a className="flex items-center justify-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-2 rounded font-label-md text-label-md transition-colors" href="mailto:onboarding@swiftcart.ug" onClick={() => alertToast('Action triggered')}>
<Icon name="mail" className="text-[18px]" />
<span>Email Onboarding</span>
</a>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Submitted Business Details</h3>
<Icon name="badge" className="text-secondary text-[20px]" />
</div>

<div className="flex flex-col gap-space-sm text-left">
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Store / Trading Name</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Victoria Tech Supplies Uganda</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Entity Type</span>
<span className="font-body-md text-body-md text-on-surface">Registered Private Limited Company</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">URSB Registration</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">#8002931448</span>
</div>
<span className="flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-label-sm text-label-sm font-bold">
<Icon name="verified" className="text-[14px]" />
                Verified Match
              </span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Registered Address</span>
<span className="font-body-sm text-body-sm text-on-surface">Plot 28, Jinja Road, Kampala, Uganda</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Primary Category</span>
<span className="font-body-md text-body-md text-on-surface">Consumer Electronics &amp; Smart Accessories</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">MoMo Payout Account</span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">MTN Mobile Money</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">+256 772 *** 456</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Attached Documents (3 files)</span>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between bg-surface-container-high px-space-sm py-1.5 rounded text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs truncate">
<Icon name="picture_as_pdf" className="text-primary text-[18px]" />
<span className="truncate font-label-sm text-label-sm">URSB_Certificate.pdf</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">1.8 MB</span>
</div>
<div className="flex items-center justify-between bg-surface-container-high px-space-sm py-1.5 rounded text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs truncate">
<Icon name="picture_as_pdf" className="text-primary text-[18px]" />
<span className="truncate font-label-sm text-label-sm">Trade_License_KCCA_2024.pdf</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">2.1 MB</span>
</div>
<div className="flex items-center justify-between bg-surface-container-high px-space-sm py-1.5 rounded text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs truncate">
<Icon name="image" className="text-secondary text-[18px]" />
<span className="truncate font-label-sm text-label-sm">Director_NIN_Front.jpg</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">850 KB</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<Icon name="rocket_launch" className="text-primary-container text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Next Steps While You Wait</h3>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
<span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md flex items-center justify-center font-bold flex-shrink-0">1</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Prepare Inventory CSV</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Prepare your product catalog CSV or photos for high-speed listing.</p>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
<span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md flex items-center justify-center font-bold flex-shrink-0">2</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Transit Packaging Specs</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Review the SwiftCart Packaging &amp; Tamper Seal guidelines for Boda transit.</p>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
<span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md flex items-center justify-center font-bold flex-shrink-0">3</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Seller Academy Module</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Explore 'How to fulfill orders in under 30 minutes' across greater Kampala.</p>
</div>
</div>
</div>
<div className="pt-space-xs">
<a className="inline-flex items-center justify-center gap-space-xs w-full text-center text-primary hover:text-primary-container font-label-md text-label-md font-bold py-1 transition-colors" href="#" onClick={() => alertToast('Action triggered')}>
<span>Return to Buyer Marketplace</span>
<Icon name="arrow_forward" className="text-[16px]" />
</a>
</div>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-lg p-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<Icon name="gavel" className="text-tertiary text-[24px]" />
<span className="font-body-sm text-body-sm text-on-surface">Regulated merchant onboarding compliant with Uganda Electronic Transactions Act (2011) and URSB standards.</span>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<Icon name="lock" className="text-[16px]" />
<span>256-Bit Escrow Vault Encryption</span>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg shadow-[0_-1px_8px_rgba(0,0,0,0.02)]"><div className="w-full px-gutter"><div className="grid grid-cols-4 gap-space-md pb-space-lg"><div className="flex items-start gap-space-sm"><Icon name="verified_user" className="text-tertiary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Buyer Protection</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Full refunds &amp; genuine guarantee</p></div></div><div className="flex items-start gap-space-sm"><Icon name="local_shipping" className="text-primary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Swift Dispatch</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Same-day Kampala express</p></div></div><div className="flex items-start gap-space-sm"><Icon name="currency_exchange" className="text-tertiary-container text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">MoMo &amp; Card Escrow</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Secure merchant settlement</p></div></div><div className="flex items-start gap-space-sm"><Icon name="headset_mic" className="text-secondary text-[26px]" /><div><h4 className="font-label-md text-label-md text-on-surface">Uganda 24/7 Support</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Toll-free &amp; WhatsApp agents</p></div></div></div><div className="flex flex-col md:flex-row items-center justify-between pt-space-md gap-space-md"><div className="flex items-center gap-space-md flex-wrap"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment Partners:</span><div className="flex items-center gap-space-sm"><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">MTN MoMo</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Airtel Money</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Visa</span><span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm font-bold text-on-surface">Mastercard</span></div></div><div className="flex items-center gap-space-md flex-wrap"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="terms-conditions" href="#" onClick={() => alertToast('Action triggered')}>Terms of Use</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-policy" href="#" onClick={() => alertToast('Action triggered')}>Privacy Policy</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="merchant-policy" href="#" onClick={() => alertToast('Action triggered')}>Merchant Directory</a><span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 SwiftCart Uganda Ltd.</span></div></div></div></footer>
    </div>
  );
};

export default Tablet;
