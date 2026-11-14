// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/homepage_ads_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface HomepageAdsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomepageAdsSwiftcartAdmin: React.FC<HomepageAdsSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Homepage &amp; Ads</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full pb-10 space-y-5">

<div className="bg-surface-container-high rounded-xl p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center space-x-3">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container">
<Icon name="cell_tower" className="text-[18px]" />
<span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
<span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary-container"></span>
</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Storefront Engine v4.2</p>
<p className="font-body-sm text-body-sm text-secondary">Kampala Hub: 18.4k Live Shoppers</p>
</div>
</div>
<div className="flex items-center space-x-1.5 bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm">
<Icon name="check_circle" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Synced</span>
</div>
</div>

<div className="flex p-1 bg-surface-container rounded-xl overflow-x-auto no-scrollbar space-x-1">
<button className="flex-1 min-w-[100px] py-2 px-3 rounded-lg font-label-md text-label-md text-center transition-all bg-primary-container text-on-primary shadow-sm flex items-center justify-center space-x-1" id="tab-banners" type="button">
<span>Hero Banners</span>
<span className="bg-on-primary/20 px-1.5 py-0.2 rounded-full font-label-sm text-label-sm text-on-primary">3</span>
</button>
<button className="flex-1 min-w-[110px] py-2 px-3 rounded-lg font-label-md text-label-md text-center transition-all text-secondary hover:text-on-surface flex items-center justify-center space-x-1" id="tab-categories" type="button">
<span>Categories</span>
<span className="bg-surface-container-high px-1.5 py-0.2 rounded-full font-label-sm text-label-sm text-on-surface-variant">6</span>
</button>
<button className="flex-1 min-w-[110px] py-2 px-3 rounded-lg font-label-md text-label-md text-center transition-all text-secondary hover:text-on-surface flex items-center justify-center space-x-1" id="tab-sponsored" type="button">
<span>Ads Boosts</span>
<span className="bg-surface-container-high px-1.5 py-0.2 rounded-full font-label-sm text-label-sm text-on-surface-variant">4</span>
</button>
</div>

<section className="flex flex-col space-y-3">
<div className="flex items-center justify-between px-1">
<div className="flex items-center space-x-2">
<Icon name="view_carousel" className="text-primary-container text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Hero Carousel Manager</h2>
</div>
<button className="flex items-center space-x-1 bg-surface-container text-primary font-label-md text-label-md px-2.5 py-1.5 rounded-lg active:scale-95 transition-transform" type="button">
<Icon name="add" className="text-[16px]" />
<span>New Slide</span>
</button>
</div>

<div className="flex flex-col space-y-3" id="carousel-list">

<div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm transition-all flex flex-col space-y-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center space-x-2.5">
<div className="cursor-grab active:cursor-grabbing p-1 text-secondary-container bg-surface-container rounded flex items-center justify-center">
<Icon name="drag_indicator" className="text-on-secondary-container text-[20px]" />
</div>
<div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Vibrant studio photograph of premium matte black over-ear wireless headphones with neon orange accent lighting, promoting audio flash deals for tech week in clean commercial style" src="/images/f8e7bfa40b754a03.webp" />
<span className="absolute bottom-0.5 right-0.5 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 rounded">#1</span>
</div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase">Active</span>
<span className="font-body-sm text-body-sm text-secondary">• Ends Nov 30</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate">Super Tech Week - 40% Audio</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Target: Electronics • Priority High</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex items-center justify-between pt-2 border-none bg-surface-container-low p-2 rounded-lg">
<div className="flex items-center space-x-2">
<Icon name="touch_app" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">CTR: 8.6% (4,290 taps)</span>
</div>
<div className="flex items-center space-x-1">
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Edit Schedule" type="button">
<Icon name="calendar_month" className="text-[18px]" />
</button>
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Mobile Preview" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 text-error hover:bg-error-container/20 rounded transition-colors" title="Deactivate" type="button">
<Icon name="pause_circle" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm transition-all flex flex-col space-y-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center space-x-2.5">
<div className="cursor-grab active:cursor-grabbing p-1 text-secondary-container bg-surface-container rounded flex items-center justify-center">
<Icon name="drag_indicator" className="text-on-secondary-container text-[20px]" />
</div>
<div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Bustling modern African commercial wholesale trade center scene showing stacked packaging and logistics workers handling quick deliveries with bright daylight" src="/images/c9b489b62e0ca9c9.webp" />
<span className="absolute bottom-0.5 right-0.5 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 rounded">#2</span>
</div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase">Active</span>
<span className="font-body-sm text-body-sm text-secondary">• Evergreen</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate">Kikuubo Wholesalers Direct</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Bulk Tier 1 • 15% Merchant Rebate</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low p-2 rounded-lg">
<div className="flex items-center space-x-2">
<Icon name="touch_app" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">CTR: 11.2% (7,840 taps)</span>
</div>
<div className="flex items-center space-x-1">
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Edit Schedule" type="button">
<Icon name="calendar_month" className="text-[18px]" />
</button>
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Mobile Preview" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 text-error hover:bg-error-container/20 rounded transition-colors" title="Deactivate" type="button">
<Icon name="pause_circle" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm transition-all flex flex-col space-y-3 opacity-90">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center space-x-2.5">
<div className="cursor-grab active:cursor-grabbing p-1 text-secondary-container bg-surface-container rounded flex items-center justify-center">
<Icon name="drag_indicator" className="text-on-secondary-container text-[20px]" />
</div>
<div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Fast-moving motorcycle courier rider with bright orange SwiftCart delivery cargo box zipping through warm sunny urban avenue with speed trail graphics" src="/images/ae31b073724c135d.webp" />
<span className="absolute bottom-0.5 right-0.5 bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm px-1 rounded">#3</span>
</div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase">Draft</span>
<span className="font-body-sm text-body-sm text-primary">• Launches Dec 1</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface truncate">SwiftExpress Boda Free Delivery</h3>
<p className="font-body-sm text-body-sm text-secondary truncate">Holiday Campaign • Kampala Metro</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="flex items-center justify-between pt-2 bg-surface-container-low p-2 rounded-lg">
<div className="flex items-center space-x-2">
<Icon name="schedule" className="text-secondary text-[16px]" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Scheduled: 00:01 EAT</span>
</div>
<div className="flex items-center space-x-1">
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Edit Schedule" type="button">
<Icon name="calendar_month" className="text-[18px]" />
</button>
<button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Mobile Preview" type="button">
<Icon name="visibility" className="text-[18px]" />
</button>
<button className="p-1.5 text-primary-container hover:bg-primary-fixed rounded transition-colors" title="Publish Early" type="button">
<Icon name="rocket_launch" className="text-[18px]" />
</button>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col space-y-2.5">
<div className="flex items-center justify-between px-1">
<div className="flex items-center space-x-2">
<Icon name="phone_iphone" className="text-primary-container text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Storefront Mini-Window</h2>
</div>
<div className="flex items-center space-x-1 text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase">Synchronized</span>
</div>
</div>

<div className="relative mx-auto w-full max-w-[340px] bg-inverse-surface p-3 rounded-[32px] shadow-xl">

<div className="w-20 h-4 bg-inverse-surface mx-auto mb-2 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/20 mr-2"></div>
<div className="w-1.5 h-1.5 rounded-full bg-surface-container-highest/40"></div>
</div>

<div className="bg-surface rounded-[22px] overflow-hidden flex flex-col p-2.5 space-y-2.5">

<div className="flex items-center justify-between px-1">
<div className="flex items-center space-x-1">
<span className="font-price-display text-[16px] text-primary-container tracking-tight font-extrabold">SwiftCart</span>
<span className="bg-primary text-on-primary font-label-sm text-[9px] px-1 rounded uppercase">Live</span>
</div>
<div className="flex items-center space-x-1.5 text-on-surface">
<Icon name="search" className="text-[16px]" />
<Icon name="shopping_bag" className="text-[16px]" />
</div>
</div>

<div className="relative w-full h-32 rounded-xl overflow-hidden shadow-sm" id="mini-preview-banner">
<img className="w-full h-full object-cover" data-alt="High contrast commercial banner display for tech deals featuring sleek matte headphones on warm vibrant orange gradient background with 40% off typography overlay" src="/images/b5d4c36861525de3.webp" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
<span className="bg-primary-container text-on-primary font-label-sm text-[9px] px-1.5 py-0.5 rounded w-max">MEGA SALE</span>
<p className="font-headline-sm text-[13px] leading-tight text-inverse-on-surface font-bold mt-0.5" id="mini-banner-title">Super Tech Week - Up to 40% Audio</p>
<div className="flex items-center space-x-1 mt-1">
<span className="w-4 h-1 rounded-full bg-primary-container"></span>
<span className="w-1.5 h-1 rounded-full bg-surface-container-lowest/60"></span>
<span className="w-1.5 h-1 rounded-full bg-surface-container-lowest/60"></span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-1.5 pt-1">
<div className="bg-surface-container rounded-lg p-1.5 flex flex-col items-center text-center">
<Icon name="headphones" className="text-[18px] text-primary-container" />
<span className="font-label-sm text-[9px] text-on-surface truncate mt-0.5">Audio</span>
</div>
<div className="bg-surface-container rounded-lg p-1.5 flex flex-col items-center text-center">
<Icon name="inventory_2" className="text-[18px] text-tertiary" />
<span className="font-label-sm text-[9px] text-on-surface truncate mt-0.5">Wholesale</span>
</div>
<div className="bg-surface-container rounded-lg p-1.5 flex flex-col items-center text-center">
<Icon name="moped" className="text-[18px] text-secondary" />
<span className="font-label-sm text-[9px] text-on-surface truncate mt-0.5">Express</span>
</div>
</div>
</div>

<div className="w-24 h-1 bg-surface-container-lowest/40 mx-auto mt-2 rounded-full"></div>
</div>
</section>

<section className="flex flex-col space-y-3">
<div className="flex items-center justify-between px-1">
<div className="flex items-center space-x-2">
<Icon name="campaign" className="text-primary-container text-[20px]" />
<h2 className="font-headline-sm text-headline-sm text-on-surface">Sponsored Ads Moderation</h2>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">1 Audit Required</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col space-y-3.5">

<div className="flex items-start justify-between gap-2">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Crisp close-up studio shot of metallic silver premium wireless earphone charging case with glowing LED battery indicator" src="/images/88c73efc05bf5a27.webp" />
</div>
<div className="min-w-0">
<div className="flex items-center space-x-1.5">
<span className="bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded">Top 3 Search</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold" id="ad-status-badge">Running</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Space One ANC Boost</h3>
<div className="flex items-center space-x-1 text-secondary">
<Icon name="storefront" className="text-[14px]" />
<span className="font-body-sm text-body-sm truncate">Kikuubo Sound Hub</span>
<Icon name="verified" className="text-tertiary text-[14px]" />
</div>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
<input checked={true} className="sr-only peer" id="ad-toggle" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
</label>
</div>

<div className="grid grid-cols-2 gap-2.5 bg-surface-container-low p-3 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Daily Budget</span>
<span className="font-headline-sm text-[16px] text-on-surface font-extrabold">UGX 15,000<span className="font-body-sm text-body-sm text-secondary font-normal">/day</span></span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"72%"}}></div>
</div>
<span className="font-body-sm text-[10px] text-secondary mt-1">72% spent today</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Cost Per Click (CPC)</span>
<span className="font-headline-sm text-[16px] text-on-surface font-extrabold">UGX 412 <span className="font-body-sm text-body-sm text-tertiary">Avg</span></span>
<div className="flex items-center space-x-1 mt-1 text-tertiary">
<Icon name="trending_up" className="text-[14px]" />
<span className="font-label-sm text-[11px]">+3.2x ROAS Metric</span>
</div>
<span className="font-body-sm text-[10px] text-secondary mt-1">Bid ceiling: UGX 500</span>
</div>
</div>

<div className="flex flex-wrap gap-1.5 items-center">
<span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm flex items-center space-x-1">
<Icon name="pin_drop" className="text-[13px]" />
<span>Uganda Central (All)</span>
</span>
<span className="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm flex items-center space-x-1">
<Icon name="tag" className="text-[13px]" />
<span>Audio • Over-Ear • Tech</span>
</span>
<span className="bg-surface-container px-2 py-0.5 rounded text-tertiary font-label-sm text-label-sm flex items-center space-x-1">
<Icon name="policy" className="text-[13px]" />
<span>Trust Score: 98%</span>
</span>
</div>

<div className="flex items-center space-x-2 pt-1">
<button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md py-2.5 rounded-lg active:scale-98 transition-transform flex items-center justify-center space-x-1.5" type="button">
<Icon name="verified_user" className="text-[18px]" />
<span>Audit Compliance</span>
</button>
<button className="flex-1 bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 rounded-lg active:scale-98 transition-transform flex items-center justify-center space-x-1.5 shadow-sm" type="button">
<Icon name="tune" className="text-[18px]" />
<span>Adjust Bid</span>
</button>
</div>
</div>
</section>

<div className="hidden fixed bottom-6 left-4 right-4 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between z-50 transition-opacity" id="status-toast">
<div className="flex items-center space-x-2.5">
<Icon name="check_circle" className="text-tertiary-fixed text-[20px]" />
<span className="font-label-md text-label-md" id="toast-message">Storefront updated successfully</span>
</div>
<button className="text-inverse-on-surface/70 hover:text-inverse-on-surface" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
</div>
</div></main>
    </div>
  );
};

export default HomepageAdsSwiftcartAdmin;
