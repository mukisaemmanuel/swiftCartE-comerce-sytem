// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/product_moderation_swiftcart_admin/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface ProductModerationSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationSwiftcartAdmin: React.FC<ProductModerationSwiftcartAdminProps> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Product Moderation</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full gap-space-md">

<section className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Review Pipeline</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">SLA: &lt; 15 mins</span>
</div>
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface">14</span>
<span className="font-body-md text-body-md text-secondary">items awaiting review</span>
</div>
<div className="flex items-center gap-1 text-tertiary font-label-md text-label-md">
<Icon name="bolt" className="text-[16px]" />
<span>Velocity +18%</span>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pt-space-sm pb-1 -mx-space-xs px-space-xs no-scrollbar">
<button className="moderation-filter active flex-shrink-0 px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-transform active:scale-95" type="button">
        All (14)
      </button>
<button className="moderation-filter flex-shrink-0 px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md transition-transform active:scale-95" type="button">
        Electronics (6)
      </button>
<button className="moderation-filter flex-shrink-0 px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md transition-transform active:scale-95" type="button">
        Health &amp; Beauty (4)
      </button>
<button className="moderation-filter flex-shrink-0 px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md transition-transform active:scale-95" type="button">
        Fashion (3)
      </button>
<button className="moderation-filter flex-shrink-0 px-3 py-1.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md flex items-center gap-1 transition-transform active:scale-95" type="button">
<Icon name="flag" className="text-[14px]" />
        Policy Flagged (1)
      </button>
</div>
</section>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative" id="card-freepods">

<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-label-lg text-label-lg font-bold flex-shrink-0">
          KS
        </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kikuubo Sound Hub</span>
<span className="bg-surface-container-highest text-on-surface px-1.5 py-0.5 rounded text-[10px] font-bold tracking-tight uppercase flex-shrink-0">Tier-2</span>
</div>
<div className="flex items-center gap-1 text-tertiary">
<Icon name="verified" className="text-[14px]" />
<span className="font-body-sm text-body-sm text-secondary truncate">98% catalog compliance (4,120 sales)</span>
</div>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container flex-shrink-0 font-bold">#AUD-9941</span>
</div>

<div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-0.5">
<span>Electronics</span>
<Icon name="chevron_right" className="text-[12px]" />
<span>Audio</span>
<Icon name="chevron_right" className="text-[12px]" />
<span className="text-on-surface font-semibold">TWS Earbuds</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Oraimo FreePods 4 ANC Edition</h2>
</div>

<div className="flex flex-col gap-space-xs">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-inner">

<img alt="Oraimo FreePods 4 ANC main product" className="w-full h-full object-cover transition-opacity duration-200" data-alt="Commercial studio product photography of matte black Oraimo FreePods 4 wireless earbuds nestled in their charging case with blue LED status glow on a crisp white surface with warm secondary studio fill light" id="primary-preview-img" src="/images/19dac9fcd30727d3.webp" />
<div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-md shadow-sm flex items-center gap-1 text-on-surface">
<Icon name="center_focus_strong" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm">Studio Certified</span>
</div>
<div className="absolute bottom-2.5 right-2.5 bg-inverse-surface/80 text-inverse-on-surface px-2 py-0.5 rounded-full font-label-sm text-label-sm">
<span id="carousel-indicator">1</span> / 3
        </div>
</div>

<div className="grid grid-cols-3 gap-2">
<button className="thumb-btn ring-2 ring-primary rounded-lg overflow-hidden h-16 bg-surface-container" type="button">
<img alt="Earbuds detail" className="w-full h-full object-cover" data-alt="Commercial studio product photography of matte black Oraimo FreePods 4 wireless earbuds nestled in their charging case with blue LED status glow on a crisp white surface with warm secondary studio fill light" src="/images/480f9b55df033337.webp" />
</button>
<button className="thumb-btn opacity-60 rounded-lg overflow-hidden h-16 bg-surface-container" type="button">
<img alt="Retail packaging with barcode" className="w-full h-full object-cover" data-alt="Clear high-contrast macro studio photo of the authentic Oraimo FreePods retail packaging box showing sharp typography, glossy holographic seal, and scanned EAN-692018 barcode printed on rear panel" src="/images/b0c78da4bf78c416.webp" />
</button>
<button className="thumb-btn opacity-60 rounded-lg overflow-hidden h-16 bg-surface-container" type="button">
<img alt="Accessories case" className="w-full h-full object-cover" data-alt="Overhead flatlay product photograph showing Oraimo earbuds accessories including braided orange USB-C cable, multiple silicone ear-tips neatly seated in tray, and quick start booklet" src="/images/4c4f7af08e334219.webp" />
</button>
</div>
</div>

<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Selling Price</span>
<span className="font-label-lg text-label-lg text-primary font-bold">UGX 145,000</span>
<span className="font-body-sm text-body-sm text-secondary line-through">160k MSRP</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Inventory</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">25 Units</span>
<span className="font-body-sm text-body-sm text-tertiary">Fulfillment: Ready</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Margin / Cut</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">UGX 11,600</span>
<span className="font-body-sm text-body-sm text-secondary">8% Commission</span>
</div>
</div>

<div className="bg-surface-container rounded-lg p-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="smart_toy" className="text-[18px] text-tertiary-container" />
<span className="font-label-md text-label-md text-on-surface font-bold">AI Safety Pre-Check</span>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">CLEARED 96%</span>
</div>
<div className="grid grid-cols-1 gap-1.5 font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5">
<Icon name="check_circle" className="text-[15px] text-tertiary" />
            Authentic Packaging Confidence
          </span>
<span className="font-label-md text-label-md font-bold text-tertiary">96/100</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5">
<Icon name="qr_code_scanner" className="text-[15px] text-tertiary" />
            EAN Barcode: <span className="font-mono text-[11px] text-secondary">EAN-692018</span>
</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">GS1 Matched</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5">
<Icon name="verified_user" className="text-[15px] text-tertiary" />
            Restricted Vocabulary Check
          </span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Zero Hits</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-space-xs">
<button className="w-full h-12 rounded-lg bg-surface-container-high text-error font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:bg-error-container hover:text-on-error-container" type="button">
<Icon name="cancel" className="text-[20px]" />
        Reject Listing
      </button>
<button className="w-full h-12 rounded-lg bg-tertiary-container text-on-tertiary font-label-lg text-label-lg flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all" id="approve-freepods-btn" type="button">
<Icon name="check_circle" className="text-[20px]" />
        Approve Listing
      </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative border-l-4 border-l-error" id="card-sunglasses">

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<Icon name="warning" className="text-error text-[20px]" />
<span className="font-label-md text-label-md text-error font-bold uppercase tracking-wide">High Risk Violation</span>
</div>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded font-bold">Auto-Flagged</span>
</div>

<div className="flex gap-space-sm items-start">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container flex-shrink-0 relative">
<img alt="Replica Sunglasses item" className="w-full h-full object-cover" data-alt="Overhead flat lay photo of dark tinted replica designer sunglasses with gold logo details on an unbranded plain cardboard box with rough edges" src="/images/ebe8ccc66b05f2fc.webp" />
<div className="absolute inset-0 bg-error/10 flex items-center justify-center">
<Icon name="block" className="text-error text-[24px]" />
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Replica Designer Sunglasses - Gold Aviator</h3>
<p className="font-body-sm text-body-sm text-secondary">Seller: <span className="text-on-surface font-semibold">UrbanStyle Trends UG</span></p>
<div className="mt-1 flex items-baseline gap-2">
<span className="font-label-md text-label-md text-primary font-bold">UGX 35,000</span>
<span className="font-body-sm text-body-sm text-secondary">Stock: 120 units</span>
</div>
</div>
</div>

<div className="bg-error-container/40 p-2.5 rounded-lg flex flex-col gap-1">
<div className="flex items-center gap-1 text-on-error-container font-label-md text-label-md font-semibold">
<Icon name="policy" className="text-[16px]" />
        Trademark Infringement Policy #TR-402
      </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Prohibited keyword <span className="bg-error text-on-error px-1 py-0.2 rounded font-mono font-bold text-[11px]">'Replica'</span> detected in listing title and marketing body. Unlicensed distribution of luxury trade dress.
      </p>
</div>

<div className="flex flex-col gap-2 pt-1">
<button className="w-full h-11 rounded-lg bg-error text-on-error font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform" id="reject-warning-btn" type="button">
<Icon name="gavel" className="text-[18px]" />
        Reject &amp; Issue Strike to Seller
      </button>
<button className="w-full h-9 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-colors" type="button">
        Inspect Full Listing Payload
      </button>
</div>
</article>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden flex-col justify-end p-0" id="rejection-modal">
<div className="bg-surface-container-lowest w-full rounded-t-2xl p-space-md shadow-2xl flex flex-col gap-space-sm max-h-[751px] overflow-y-auto">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-wider">Listing Rejection</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate max-w-[280px]" id="modal-product-title">Oraimo FreePods 4 ANC</h3>
</div>
<button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface active:scale-95" type="button">
<Icon name="close" className="text-[20px]" />
</button>
</div>
<p className="font-body-sm text-body-sm text-secondary">
        Select a pre-configured enforcement reason to notify seller <strong className="text-on-surface" id="modal-seller-name">Kikuubo Sound Hub</strong> with remediation instructions.
      </p>

<div className="flex flex-col gap-2">
<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input checked={true} className="mt-0.5 accent-primary h-4 w-4" name="reject_reason" type="radio" value="Counterfeit / Replica Item" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Counterfeit / Replica Item</span>
<span className="font-body-sm text-body-sm text-secondary">Packaging, serial, or pricing implies non-genuine goods.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input className="mt-0.5 accent-primary h-4 w-4" name="reject_reason" type="radio" value="Misleading Specs or Fake Warranty" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Misleading Specs or Fake Warranty</span>
<span className="font-body-sm text-body-sm text-secondary">Exaggerated battery life, invalid certificates, or unverified claims.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input className="mt-0.5 accent-primary h-4 w-4" name="reject_reason" type="radio" value="Prohibited Goods" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Prohibited Goods &amp; Hazmat</span>
<span className="font-body-sm text-body-sm text-secondary">Item violates national laws, regulatory bans, or SwiftCart policy.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input className="mt-0.5 accent-primary h-4 w-4" name="reject_reason" type="radio" value="Inadequate Image Resolution" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Low Fidelity / Stock Watermarks</span>
<span className="font-body-sm text-body-sm text-secondary">Photos are blurry, stolen, or contain third-party watermark links.</span>
</div>
</label>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="moderator-notes">Moderator Direct Feedback (Optional)</label>
<textarea className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary resize-none" id="moderator-notes" placeholder="e.g. Please provide authentic distributor proof from Oraimo Uganda Ltd..." rows={2}></textarea>
</div>

<div className="grid grid-cols-2 gap-space-xs pt-space-xs pb-space-sm">
<button className="h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
          Dismiss
        </button>
<button className="h-11 rounded-lg bg-error text-on-error font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md" type="button">
<Icon name="send" className="text-[18px]" />
          Confirm Rejection
        </button>
</div>
</div>
</div>

<div className="fixed bottom-6 left-4 right-4 z-50 bg-inverse-surface text-inverse-on-surface p-3.5 rounded-xl shadow-xl flex items-center justify-between transform translate-y-28 opacity-0 transition-all duration-300 pointer-events-none" id="action-toast">
<div className="flex items-center gap-2">
<Icon name="check_circle" className="text-tertiary-fixed text-[22px]" />
<span className="font-body-md text-body-md font-semibold truncate" id="toast-text">Listing Approved &amp; Published</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim">Queue Sync</span>
</div>
</div>
</div></main>
    </div>
  );
};

export default ProductModerationSwiftcartAdmin;
