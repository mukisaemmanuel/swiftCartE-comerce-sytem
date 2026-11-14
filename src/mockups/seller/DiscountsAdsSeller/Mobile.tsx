// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/discounts_ads_swiftcart_seller/code.html
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
  void theme;
  void toggleTheme;
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <header className="fixed top-0 inset-x-0 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain shrink-0" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">Discounts And Ads</h1></div><div className="flex items-center gap-space-xs shrink-0"><button aria-label="Toggle Light and Dark Mode" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px] dark:hidden" /><Icon name="light_mode" className="text-[20px] hidden dark:inline" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex flex-col w-full px-gutter pb-space-xl gap-space-lg">
<div className="flex items-center justify-between pt-space-sm">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Campaign Suite</span>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">Promotions &amp; Ads</h2>
</div>
<div className="flex items-center gap-space-xs">
<button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg flex items-center gap-1 shadow-sm active:scale-95 transition-all" id="openVoucherModalBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="add" className="text-[18px]" />
<span>Voucher</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg px-space-md py-space-sm rounded-lg flex items-center gap-1 active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
<Icon name="bolt" className="text-[18px] text-primary" />
<span>Boost</span>
</button>
</div>
</div>
<div className="flex p-1 bg-surface-container-low rounded-xl">
<button className="flex-1 py-space-sm text-center rounded-lg font-label-lg text-label-lg bg-surface shadow-sm text-on-surface font-bold transition-all" id="tabVouchers" onClick={() => alertToast('Action triggered')}>
      Vouchers &amp; Coupons
    </button>
<button className="flex-1 py-space-sm text-center rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-all" id="tabAds" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}>
      Sponsored Ads
    </button>
</div>
<div className="flex flex-col gap-space-md" id="vouchersSection">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Active Vouchers</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">2 Live</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline font-bold" onClick={() => alertToast('Action triggered')}>Sort: Recent</button>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<Icon name="percent" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">SWIFT-SOUND15</span>
<span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> Active
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">15% OFF storewide • Min UGX 100,000</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Claim Quota: 48 / 100</span>
<span className="text-on-surface font-semibold">48% Claimed</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"48%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<Icon name="schedule" className="text-[16px] text-outline" />
<span>Valid till 30 Nov</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Copy Code" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[20px]" />
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Pause Voucher" onClick={() => alertToast('Action triggered')}>
<Icon name="pause_circle" className="text-[20px]" />
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Edit Voucher" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[20px]" />
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
<Icon name="local_activity" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">KIKUUBO-GAN</span>
<span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">UGX 15,000 OFF • Baseus 65W GaN Charger</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Claim Quota: 19 / 50</span>
<span className="text-on-surface font-semibold">38% Claimed</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"38%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<Icon name="schedule" className="text-[16px] text-outline" />
<span>Valid till 15 Dec</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Copy Code" onClick={() => alertToast('Action triggered')}>
<Icon name="content_copy" className="text-[20px]" />
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Pause Voucher" onClick={() => alertToast('Action triggered')}>
<Icon name="pause_circle" className="text-[20px]" />
</button>
<button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors" title="Edit Voucher" onClick={() => alertToast('Action triggered')}>
<Icon name="edit" className="text-[20px]" />
</button>
</div>
</div>
</div>
<div className="bg-surface-container-low/60 p-space-md rounded-xl flex flex-col gap-space-sm opacity-80">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-outline">
<Icon name="inventory_2" />
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface line-through decoration-outline">FLASH-OCTOBER</span>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">
                Archived
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">20% OFF • Expired 2 days ago</p>
</div>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline font-bold" onClick={() => alertToast('Action triggered')}>Relist</button>
</div>
</div>
</div>
<div className="flex flex-col gap-space-md" id="adsSection">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Ad Campaigns</span>
<span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">Running</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-1 text-primary">
<Icon name="verified" className="text-[18px]" />
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Search Top Placement</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">SoundCore Space One</h3>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Daily Cap</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 15,000</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Total Spent</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">UGX 75,000</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Ad Impressions</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">1,420</span>
</div>
<div className="flex flex-col mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Clicks (UGX 412 CPC)</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">182</span>
</div>
<div className="flex flex-col mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">ROAS Metric</span>
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg font-bold text-tertiary">4.8x</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(14 Sales)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Search Live Preview</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> In Top 3
          </span>
</div>
<div className="bg-surface-container p-space-sm rounded-xl flex gap-space-sm items-center">
<div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One active noise cancelling wireless over ear headphones in matte black finish displayed professionally on clean surface" src={`${assetBase}/images/35e3570a1b339ef3.webp`} />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1">
<span className="bg-on-surface text-surface font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">Sponsored</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">• SoundCore Uganda</span>
</div>
<p className="font-label-md text-label-md font-bold text-on-surface truncate">SoundCore Space One ANC Hi-Res</p>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-label-lg text-label-lg font-bold text-primary">UGX 380,000</span>
<span className="font-body-sm text-body-sm text-outline line-through">UGX 450,000</span>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<button className="bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md px-space-md py-space-sm rounded-lg active:scale-95 transition-all" onClick={() => alertToast('Action triggered')}>
          Adjust Bid
        </button>
<button className="bg-primary/10 text-primary hover:bg-primary/20 font-label-md text-label-md px-space-md py-space-sm rounded-lg active:scale-95 transition-all" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}>
          Campaign Analytics
        </button>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 flex flex-col justify-end bg-inverse-surface/60 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none" id="voucherModal">
<div className="bg-surface-container-lowest w-full rounded-t-2xl p-gutter flex flex-col gap-space-md max-h-[751px] overflow-y-auto transform translate-y-full transition-transform duration-300" id="modalSheet">
<div className="w-12 h-1 bg-outline-variant rounded-full mx-auto self-center shrink-0"></div>
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">New Campaign Voucher</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Incentivize buyers across Kampala and beyond</p>
</div>
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded-full" id="closeVoucherModalBtn" onClick={() => alertToast('Action triggered')}>
<Icon name="close" />
</button>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Discount Type</label>
<div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-1 rounded-xl">
<button className="py-space-sm font-label-md text-label-md rounded-lg bg-surface shadow-sm font-bold text-primary transition-all" id="btnTypePercent" onClick={() => alertToast('Action triggered')}>
            Percentage (%)
          </button>
<button className="py-space-sm font-label-md text-label-md rounded-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all" id="btnTypeFixed" onClick={() => alertToast('Action triggered')}>
            Fixed Amount (UGX)
          </button>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Voucher Code</label>
<div className="flex gap-space-xs">
<input className="flex-1 bg-surface-container-low rounded-lg px-space-md py-space-sm font-label-lg text-label-lg font-bold text-on-surface uppercase outline-none focus:bg-surface" id="voucherCodeInput" type="text" value="FLASH-2024" />
<button className="bg-surface-container text-on-surface hover:bg-surface-container-high px-space-md py-space-sm rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 active:scale-95 transition-all" id="btnGenerateCode" onClick={() => alertToast('Action triggered')}>
<Icon name="casino" className="text-[18px]" />
<span>Gen</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" id="valueLabel">Value (%)</label>
<input className="bg-surface-container-low rounded-lg px-space-md py-space-sm font-label-lg text-label-lg font-bold text-on-surface outline-none focus:bg-surface" type="number" value="15" />
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Min Spend (UGX)</label>
<input className="bg-surface-container-low rounded-lg px-space-md py-space-sm font-label-lg text-label-lg font-bold text-on-surface outline-none focus:bg-surface" type="number" value="50000" />
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Product Applicability</label>
<div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-1 rounded-xl">
<button className="py-space-sm font-label-md text-label-md rounded-lg bg-surface shadow-sm font-bold text-on-surface transition-all" id="scopeAll" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}>
            Storewide
          </button>
<button className="py-space-sm font-label-md text-label-md rounded-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all" id="scopeSku" onClick={() => alertToast('Action triggered')}>
            Specific SKU
          </button>
</div>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Start Date</label>
<input className="bg-surface-container-low rounded-lg px-space-sm py-space-sm font-body-sm text-body-sm text-on-surface outline-none" type="date" value="2024-11-20" />
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">End Date</label>
<input className="bg-surface-container-low rounded-lg px-space-sm py-space-sm font-body-sm text-body-sm text-on-surface outline-none" type="date" value="2024-11-30" />
</div>
</div>
<div className="pt-space-xs flex gap-space-xs">
<button className="flex-1 py-3 bg-surface-container text-on-surface font-label-lg text-label-lg rounded-xl active:scale-95 transition-all" id="btnCancelModal" onClick={() => alertToast('Action triggered')}>
          Cancel
        </button>
<button className="flex-2 py-3 bg-primary text-on-primary font-label-lg text-label-lg font-bold rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1 shadow-md" id="btnConfirmVoucher" onClick={() => alertToast('Action triggered')}>
<Icon name="check" className="text-[20px]" />
<span>Launch Voucher</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Mobile;
