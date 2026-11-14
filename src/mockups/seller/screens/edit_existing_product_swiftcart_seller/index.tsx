// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/seller/edit_existing_product_swiftcart_seller/code.html
import React, { useState } from 'react';
import Icon from '../../../../components/shared/Icon';
import { useDashboardTheme } from '../../../../context/ThemeContext';

export interface ScreenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Screen: React.FC<ScreenProps> = (props) => {
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
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="h-16 px-space-sm flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs min-w-0"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:text-primary transition-colors flex-shrink-0" onClick={() => alertToast('Action triggered')}><Icon name="arrow_back_ios_new" className="text-[20px]" /></button><img alt="SwiftCart" className="h-7 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0 pl-1"><span className="font-label-sm text-label-sm text-primary uppercase tracking-widest truncate">SwiftCart Ops</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate tracking-tight">Seller Edit Product</h1></div></div><div className="flex items-center gap-space-sm flex-shrink-0"><div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-emerald-escrow/10 text-emerald-escrow"><Icon name="verified_user" className="text-[16px]" /><span className="font-label-sm text-label-sm font-bold">SECURE</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex flex-col relative w-full pt-16 bg-surface pb-safe"><div className="flex flex-col w-full pb-32">

<div className="px-margin pt-space-xs pb-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-pulse"></span>
<span className="font-label-sm text-label-sm text-emerald-escrow tracking-wider uppercase font-bold">Live Catalog Node: William St.</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<Icon name="cloud_done" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Auto-saved 2m ago</span>
</div>
</div>
<div className="px-margin flex flex-col gap-space-lg">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-md relative overflow-hidden flex flex-col gap-space-sm">
<div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-13 h-13 min-w-[52px] rounded-xl bg-gradient-to-br from-secondary-container to-surface-container-highest flex items-center justify-center text-primary font-headline-sm text-headline-sm shadow-inner flex-shrink-0">
            SC
          </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore Space One ANC</span>
<div className="flex items-center gap-space-xs mt-0.5">
<span className="font-label-sm text-label-sm text-secondary px-1.5 py-0.5 rounded bg-surface-container-high font-mono tracking-wider">SKU: SC-SPO-BLK</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">ID #8841-KLA</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1 flex-shrink-0">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-label-sm font-bold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-escrow"></span>
            ACTIVE • IN STOCK
          </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">18 Available</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Icon name="photo_library" className="text-primary text-[18px]" />
<span className="font-label-lg text-label-lg text-on-surface">Product Images (4/8)</span>
</div>
<button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all shadow-sm active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="auto_fix_high" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">AI Clean Studio BG</span>
</button>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="grid grid-cols-4 gap-space-xs" id="photo-grid">

<div className="relative group rounded-lg overflow-hidden bg-surface-container-highest aspect-square shadow-sm">
<img className="w-full h-full object-cover" data-alt="Commercial studio packshot of matte black over-ear noise-cancelling wireless headphones resting elegantly on a minimalist charcoal stand with subtle copper accents and studio rim lighting on a seamless dark backdrop." src={`${assetBase}/images/dfa12ba09d8f6618.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent flex flex-col justify-between p-1">
<span className="self-start bg-primary text-on-primary font-label-sm text-label-sm px-1 rounded shadow-sm">MAIN</span>
<div className="flex items-center justify-between w-full">
<Icon name="drag_indicator" className="text-[16px] text-on-surface cursor-grab" />
<button aria-label="Delete image" className="w-5 h-5 rounded-full bg-surface-dark/70 flex items-center justify-center text-on-surface-variant hover:text-error" type="button" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[12px]" /></button>
</div>
</div>
</div>

<div className="relative group rounded-lg overflow-hidden bg-surface-container-highest aspect-square shadow-sm">
<img className="w-full h-full object-cover" data-alt="Side profile macro angle of premium black headphone earcups highlighting plush memory foam vegan leather cushions and brushed aluminum pivot hinges under crisp softbox illumination." src={`${assetBase}/images/6f766c047b05dfe5.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent flex flex-col justify-end p-1">
<div className="flex items-center justify-between w-full">
<Icon name="drag_indicator" className="text-[16px] text-on-surface cursor-grab" />
<button aria-label="Delete image" className="w-5 h-5 rounded-full bg-surface-dark/70 flex items-center justify-center text-on-surface-variant hover:text-error" type="button" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[12px]" /></button>
</div>
</div>
</div>

<div className="relative group rounded-lg overflow-hidden bg-surface-container-highest aspect-square shadow-sm">
<img className="w-full h-full object-cover" data-alt="Angled top-down aesthetic flatlay of premium black headphones folded flat alongside high-speed braided USB-C charging cable and gold-plated 3.5mm audio jack on a dark textured slate background." src={`${assetBase}/images/5994d27fd5cccf03.webp`} />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent flex flex-col justify-end p-1">
<div className="flex items-center justify-between w-full">
<Icon name="drag_indicator" className="text-[16px] text-on-surface cursor-grab" />
<button aria-label="Delete image" className="w-5 h-5 rounded-full bg-surface-dark/70 flex items-center justify-center text-on-surface-variant hover:text-error" type="button" onClick={() => alertToast('Action triggered')}><Icon name="close" className="text-[12px]" /></button>
</div>
</div>
</div>

<button className="aspect-square rounded-lg bg-surface-container flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_a_photo" className="text-[24px]" />
<span className="font-label-sm text-label-sm text-center font-bold">Add Photo</span>
</button>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<Icon name="touch_app" className="text-[14px]" />
<span className="font-body-sm text-body-sm">Drag thumbnails to rearrange order. First slot is default customer thumbnail.</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Product Specifications</span>
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface-variant font-medium">Product Title</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">64/120</span>
</div>
<div className="bg-surface-container-highest rounded-lg px-space-sm py-2.5 flex items-center">
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface outline-none focus:text-primary" type="text" value="SoundCore Space One Wireless Active Noise Cancelling Headphones" />
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant font-medium">Category Path</label>
<div className="bg-surface-container-highest rounded-lg px-space-sm py-2.5 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2 min-w-0">
<Icon name="headphones" className="text-[18px] text-primary" />
<span className="font-body-md text-body-md text-on-surface truncate">Electronics &amp; Audio &gt; Headphones</span>
</div>
<Icon name="expand_more" className="text-[20px] text-on-surface-variant" />
</div>
</div>

<div className="flex flex-col gap-space-xs bg-surface-container p-space-sm rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Pricing &amp; Settlement</span>
<div className="flex items-center gap-1 text-emerald-escrow font-label-sm text-label-sm bg-emerald-escrow/10 px-2 py-0.5 rounded-full font-bold">
<Icon name="lock" className="text-[14px]" />
<span>ESCROW VERIFIED</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm items-start">

<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-primary uppercase font-bold">Selling Price (UGX)</label>
<div className="bg-surface-container-highest rounded-lg px-space-sm py-2 flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant font-bold">UGX</span>
<input className="w-full bg-transparent font-price-display text-[18px] text-on-surface outline-none font-bold" inputMode="numeric" type="text" value="248,500" />
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Compare-At</label>
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-1.5 py-0.2 rounded font-bold">-20%</span>
</div>
<div className="bg-surface-container-highest rounded-lg px-space-sm py-2 flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant">UGX</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface-variant line-through outline-none" inputMode="numeric" type="text" value="310,000" />
</div>
</div>
</div>
<div className="flex items-center gap-1 text-amber-warning">
<Icon name="info" className="text-[14px]" />
<span className="font-label-sm text-label-sm font-medium">UGX only, integer format. Settlement excludes standard platform fee (3.5%).</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface-variant font-medium">Inventory &amp; Warehousing</label>
<span className="font-label-sm text-label-sm font-bold text-tertiary">18 Total Units</span>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container-highest rounded-lg p-2.5 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">William St Hub</span>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">12</span>
<span className="font-label-sm text-label-sm text-emerald-escrow">Ready dispatch</span>
</div>
</div>
<div className="bg-surface-container-highest rounded-lg p-2.5 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Physical Store</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">6</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Shop reserve</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between mt-1">
<div className="flex items-center gap-2">
<Icon name="notifications_active" className="text-[18px] text-amber-warning" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Low Stock Alert Threshold</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Trigger SMS &amp; app push notification</span>
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest px-2 py-1 rounded">
<span className="font-label-md text-label-md text-on-surface font-bold">5</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">units</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">SKU Variants (3 Colors)</span>
<button className="flex items-center gap-1 text-primary hover:text-primary-fixed transition-colors" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="add_circle" className="text-[16px]" />
<span className="font-label-sm text-label-sm font-bold">Add Variant</span>
</button>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-black shadow-inner"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Jet Black</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SC-SPO-BLK</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="bg-surface-container-highest px-2.5 py-1 rounded text-right">
<span className="font-label-md text-label-md text-on-surface font-bold">10</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">in stock</span>
</div>
<button aria-label="Edit variant" className="text-on-surface-variant hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-surface-cream shadow-inner"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Cream White</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SC-SPO-WHT</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="bg-surface-container-highest px-2.5 py-1 rounded text-right">
<span className="font-label-md text-label-md text-on-surface font-bold">5</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">in stock</span>
</div>
<button aria-label="Edit variant" className="text-on-surface-variant hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</div>

<div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-4 h-4 rounded-full bg-[#38BDF8] shadow-inner"></div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Sky Blue</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SC-SPO-BLU</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="bg-surface-container-highest px-2.5 py-1 rounded text-right">
<span className="font-label-md text-label-md text-amber-warning font-bold">3</span>
<span className="font-label-sm text-label-sm text-amber-warning ml-1">low</span>
</div>
<button aria-label="Edit variant" className="text-on-surface-variant hover:text-on-surface" type="button" onClick={() => alertToast('Action triggered')}><Icon name="more_vert" className="text-[18px]" /></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Warranty &amp; Badging</span>
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
<Icon name="verified" className="text-primary text-[16px]" />
<span className="font-label-md text-label-md font-medium">12M Official Warranty</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
<Icon name="hearing" className="text-tertiary text-[16px]" />
<span className="font-label-md text-label-md font-medium">40dB Hybrid ANC</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
<Icon name="battery_charging_full" className="text-secondary text-[16px]" />
<span className="font-label-md text-label-md font-medium">55h Playtime</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-lg text-label-lg text-error">Danger Zone</span>
<div className="bg-error-container/20 rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-error font-bold">Archive or Delete Item</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Archiving preserves escrow history and customer receipts while removing this SKU from public search.</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-1">
<button className="h-11 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md font-bold transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
            Archive Product
          </button>
<button className="h-11 rounded-lg bg-danger-penalty/15 text-danger-penalty hover:bg-danger-penalty/25 font-label-md text-label-md font-bold transition-all active:scale-95" type="button" onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}>
            Delete from Catalog
          </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 inset-x-0 bg-surface-container-high/95 backdrop-blur-xl p-margin pb-safe shadow-[0_-6px_24px_rgba(0,0,0,0.6)] z-40">
<div className="flex items-center gap-space-sm max-w-lg mx-auto">

<button className="h-13 px-5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center flex-shrink-0 transition-all active:scale-95" type="button" onClick={() => alertToast('Action triggered')}>
        Discard
      </button>

<button className="h-13 flex-1 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(218,55,0,0.4)] hover:brightness-110 active:scale-[0.98] transition-all" id="save-product-btn" type="button" onClick={() => alertToast('Action triggered')}>
<Icon name="save" className="text-[20px]" />
<span>Save Product Updates</span>
</button>
</div>
</div>
</div>
</main>
    </div>
  );
};

export default Screen;
