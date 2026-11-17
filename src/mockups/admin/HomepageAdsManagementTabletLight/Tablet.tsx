// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/homepage_ads_management_tablet_light/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface TabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Tablet: React.FC<TabletProps> = (props) => {
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
      
      <div className="w-full"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full pb-16">

<div className="px-space-md sm:px-space-lg pt-space-md pb-space-lg flex flex-col gap-space-md">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">Storefront &amp; Marketplace Ads</span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse"></span>
            Live Campaign Engine: Active
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Hero Banner Rotation, Sponsored Vendor Slots &amp; Campaign Schedules</p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-auto">
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-high transition-all font-label-md text-label-md" type="button">
<Icon name="sync_alt" className="text-[18px]" />
          Reorder Carousel
        </button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95 transition-all" type="button">
<Icon name="add_circle" className="text-[20px]" />
          Create New Ad Campaign
        </button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Campaigns</span>
<Icon name="campaign" className="p-1.5 rounded-lg bg-surface-container-low text-primary  text-[18px]" />
</div>
<div className="mt-2 flex items-baseline justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">6</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/10 px-1.5 py-0.5 rounded">100% capacity</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">24h Ad Impressions</span>
<Icon name="visibility" className="p-1.5 rounded-lg bg-surface-container-low text-primary  text-[18px]" />
</div>
<div className="mt-2 flex items-baseline justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">284,500</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold inline-flex items-center">
<Icon name="arrow_upward" className="text-[14px]" />18.4%
          </span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Click-Through Rate</span>
<Icon name="ads_click" className="p-1.5 rounded-lg bg-surface-container-low text-primary  text-[18px]" />
</div>
<div className="mt-2 flex items-baseline justify-between">
<span className="font-headline-lg text-headline-lg text-on-surface">4.12%</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">+0.3% vs avg</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Ad Revenue</span>
<Icon name="payments" className="p-1.5 rounded-lg bg-surface-container-low text-primary  text-[18px]" />
</div>
<div className="mt-2 flex flex-col">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface">14,250,000</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">30-day pace running</span>
</div>
</div>
</div>
</div>

<div className="px-space-md sm:px-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
<button className="px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold whitespace-nowrap shadow-sm" type="button">
          Hero Carousel (3)
        </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
          Sponsored Vendors (4)
        </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
          Flash Sale (2)
        </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
          Push Promos (2)
        </button>
</div>

<div className="flex flex-col gap-space-sm" id="slot-list-container">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_rgba(218,55,0,0.12)] ring-2 ring-primary-container cursor-pointer transition-all flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-md bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm flex items-center justify-center font-bold">#1</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Top Hero Carousel</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm uppercase font-bold">Live Now</span>
</div>
<div className="flex items-center text-primary-container">
<Icon name="drag_indicator" className="text-[20px]" />
</div>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-[16px] leading-[22px] text-on-surface">Super Tech Week - Up to 40% Off Audio &amp; Gadgets</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="storefront" className="text-[16px] text-secondary" />
<span className="font-semibold text-on-surface">Victoria Tech Supplies</span>
<span>•</span>
<span>SoundCore Space One</span>
</div>
</div>
<div className="flex items-center justify-between pt-2 mt-1 bg-surface-container-low px-2.5 py-1.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Impressions</span>
<span className="font-label-md text-label-md text-on-surface font-bold">124,500</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Clicks</span>
<span className="font-label-md text-label-md text-on-surface font-bold">5,420</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">CTR</span>
<span className="font-label-md text-label-md text-tertiary font-bold">4.35%</span>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant">Schedule</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">20 - 27 Oct</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">#2</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Hero Slot #2</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm uppercase font-bold">Active</span>
</div>
<Icon name="drag_indicator" className="text-[18px] text-outline" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-[15px] leading-[20px] text-on-surface">Nakaseke Organic Shea Butter Harvest Promo</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="eco" className="text-[16px] text-secondary" />
<span className="font-semibold text-on-surface">Pearl Naturals Uganda</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-body-sm text-on-surface-variant">
<span>68,200 imp</span>
<span>•</span>
<span className="text-tertiary font-bold">3.8% CTR</span>
<span>•</span>
<span>Ends in 3 days</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">#3</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Hero Slot #3</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold">Platform</span>
</div>
<Icon name="drag_indicator" className="text-[18px] text-outline" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-[15px] leading-[20px] text-on-surface whitespace-nowrap">SafeBoda Delivery Subsidy: UGX 0 First 3km</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="two_wheeler" className="text-[16px] text-primary" />
<span className="font-semibold text-on-surface">SwiftCart Logistics Partner</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-body-sm text-on-surface-variant">
<span>92,100 imp</span>
<span>•</span>
<span className="text-tertiary font-bold">5.1% CTR</span>
<span>•</span>
<span>Indefinite</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] hover:shadow-md cursor-pointer transition-all flex flex-col gap-space-sm opacity-90">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">#4</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Queued Slot</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase font-bold">Scheduled</span>
</div>
<Icon name="drag_indicator" className="text-[18px] text-outline" />
</div>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-[15px] leading-[20px] text-on-surface">Oraimo Mega Audio Fest &amp; Wireless Launch</span>
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<Icon name="verified" className="text-[16px] text-secondary" />
<span className="font-semibold text-on-surface">Oraimo Official Store</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-body-sm text-on-surface-variant">
<span>Starts Tomorrow 00:00 EAT</span>
<span className="text-primary font-semibold">Priority 35%</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="info" className="text-secondary text-[22px]" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Hero Carousel Saturation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Maximum recommended slots: 5 items for optimal mobile conversion.</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Interactive Banner Inspector</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Slot #1 Mobile Feed Appearance</span>
</div>
<div className="flex items-center gap-1.5">
<span className="px-2 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<Icon name="smartphone" className="text-[14px]" />
              Feed Top (390px)
            </span>
</div>
</div>

<div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner group">
<img className="w-full h-full object-cover" data-alt="High-end sleek wireless noise-cancelling headphones resting on a minimalist studio podium, bathed in warm African sunset golden hour studio light with rich terracotta and amber lighting accents, crisp product commercial photography, shallow depth of field, 8k resolution" src="/images/91c461e397e8d0c3.webp" />
<div className="absolute inset-0 bg-gradient-to-r from-[#da3700]/95 via-[#ae2a00]/80 to-transparent flex flex-col justify-between p-space-lg">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase tracking-wider font-extrabold">
                Super Tech Week
              </span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="play_circle" className="text-[14px]" />
                Video Reel Attached
              </span>
</div>
<div className="flex flex-col max-w-[65%] text-on-primary">
<span className="font-headline-lg text-[26px] leading-[30px] font-extrabold tracking-tight">UP TO 40% OFF</span>
<span className="font-body-md text-body-md text-white/90 line-clamp-1">SoundCore Space One ANC &amp; Earbuds</span>
<div className="mt-3 flex items-center gap-2">
<button className="px-4 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-sm hover:scale-105 transition-transform" type="button">
                  Shop Now
                </button>
<span className="font-label-sm text-label-sm text-white/80">MTN &amp; Airtel MoMo Pay</span>
</div>
</div>
<div className="flex items-center justify-between text-white/70 font-label-sm text-label-sm">
<span>Victoria Tech Official Hub</span>
<span>KLA Fast Express Delivery</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-2.5">
<Icon name="location_on" className="text-primary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Targeted Geo-Fencing</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Greater Kampala Metro</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kampala Central, Nakawa, Makindye</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-2.5">
<Icon name="devices" className="text-secondary text-[20px] mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Channel Surface</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Mobile App Home Feed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Slot Position #1 (Top Anchor)</span>
</div>
</div>
</div>
</div>

<div className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-[18px] leading-[24px] text-on-surface">Commercial Parameters &amp; Wallet Billing</span>
<span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">Auto-Debit Active</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Commercial Model</label>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="account_balance_wallet" className="text-primary text-[20px]" />
<span className="font-label-md text-label-md text-on-surface">CPM &amp; Sponsored Tier</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">Tier A</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Daily Allocation</label>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary whitespace-nowrap">UGX</span>
<span className="font-label-lg text-label-lg text-on-surface">250,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ day</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Funded</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<div className="flex justify-between items-center">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Rotation Weight &amp; Priority Bias</label>
<span className="font-label-md text-label-md text-primary font-bold">High (40% Probability)</span>
</div>
<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden relative">
<div className="bg-primary-container h-full rounded-full" style={{"width":"40%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Adjust to distribute carousel impression load among active campaigns.</span>
</div>

<div className="flex flex-col gap-1.5 pt-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Linked Deep-Link Destination</label>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low">
<Icon name="link" className="text-outline text-[18px]" />
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface outline-none truncate" readOnly={true} type="text" value="swiftcart.ug/c/audio-accessories?promo=techweek" />
<button className="text-primary hover:text-on-surface transition-colors" type="button">
<Icon name="open_in_new" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Regulatory &amp; Asset Quality Gate</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-2">
<Icon name="verified" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">GS1 Barcode</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified Genuine</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-2">
<Icon name="gavel" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">UNBS Clear</span>
<span className="font-label-sm text-label-sm text-tertiary">Uganda Standards OK</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-2">
<Icon name="photo_size_select_actual" className="text-tertiary text-[20px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">1080x540 Hi-DPI</span>
<span className="font-label-sm text-label-sm text-tertiary">Retina Approved</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_2px_8px_rgba(14,27,77,0.04)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
<a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1" href="#">
<Icon name="query_stats" className="text-[18px]" />
          View Detailed Conversion Funnel
        </a>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-surface-container text-error hover:bg-error-container hover:text-on-error-container transition-all font-label-md text-label-md font-bold" type="button">
            Pause Campaign
          </button>
<button className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(218,55,0,0.30)] hover:brightness-105 active:scale-95 transition-all" type="button">
            Save Changes &amp; Update Live Carousel
          </button>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
