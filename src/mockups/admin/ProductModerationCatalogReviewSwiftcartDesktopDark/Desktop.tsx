// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/admin/product_moderation_catalog_review_swiftcart_desktop_dark/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface DesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Desktop: React.FC<DesktopProps> = (props) => {
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
      
      <div className="pl-0"><main className="relative pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full gap-space-lg">

<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline uppercase tracking-wider">
<span>Admin Operations</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-tertiary">Product Moderation</span>
<Icon name="chevron_right" className="text-[14px]" />
<span className="text-on-surface-variant">Brand Safety Desk</span>
</div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Product Catalog Moderation &amp; Brand Safety Desk</h1>
<span className="px-2.5 py-0.5 rounded-full bg-container-dark-high text-tertiary font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          Live Vision Pipeline
        </span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-container-dark-low text-on-surface font-label-md text-label-md">
<Icon name="verified_user" className="text-amber-warning text-[18px]" />
<span>Brand Shield: <strong>Level 4 (Strict)</strong></span>
</div>
<button className="px-space-md py-2 rounded-xl bg-container-dark-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5">
<Icon name="tune" className="text-[18px]" />
        Ruleset v3.12
      </button>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Pending Review Queue</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-black">8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Products</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<Icon name="pending_actions" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty"></span>
          3 High Priority
        </span>
<span className="font-body-sm text-body-sm text-outline">Action required &lt;45m</span>
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/5 pointer-events-none blur-xl"></div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Auto-Approved Today</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-tertiary font-black">142</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Listings</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary">
<Icon name="smart_toy" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<Icon name="check_circle" className="text-tertiary text-[14px]" />
          AI Vision &amp; OCR Guardrail
        </span>
<span className="text-tertiary font-label-sm text-label-sm">94.8% Pass</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Flagged Counterfeit Strikes</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-danger-penalty font-black">3</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Merchants</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-error-container/40 flex items-center justify-center text-danger-penalty">
<Icon name="gavel" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-container-dark-high text-error font-label-sm text-label-sm font-semibold whitespace-nowrap">
          payment frozen: UGX 4.2M
        </span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-container-dark-low p-space-md flex flex-col justify-between shadow-sm">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Avg Moderation Turnaround</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-black">18</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Minutes</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<Icon name="speed" className="text-[20px]" />
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden mr-3">
<div className="bg-tertiary h-1.5 rounded-full" style={{"width":"28%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap">SLA: 2h 00m</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-container-dark-low rounded-xl p-space-sm flex items-center justify-between shadow-sm">
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 rounded-lg bg-container-dark-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm">
<span>Pending High</span>
<span className="w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center justify-center">3</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">
            All Queued (8)
          </button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">
            Payment Holds
          </button>
</div>
<div className="flex items-center gap-1 pr-1">
<button className="p-1 rounded text-outline hover:text-on-surface"><Icon name="sort" className="text-[18px]" /></button>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="relative rounded-xl bg-container-dark-high p-space-md shadow-md cursor-pointer transition-all">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-action-gradient-start rounded-r"></div>
<div className="flex items-start gap-space-sm pl-2">
<div className="w-16 h-16 rounded-lg bg-surface-dark overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC Jet Black over-ear headphones sitting in open retail carton under warehouse halogen lighting in Kampala tech shop with visible serial barcodes and matte finish." src="/images/4b569a3c569dce89.webp" />
<span className="absolute top-1 left-1 px-1 rounded bg-error-container/90 text-on-error-container font-label-sm text-label-sm">SUSPECT</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase tracking-wider font-extrabold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-danger-penalty animate-ping"></span>
                  High Priority
                </span>
<span className="font-label-sm text-label-sm text-outline">4m ago</span>
</div>
<h2 className="font-label-lg text-label-lg text-on-surface mt-1 truncate whitespace-nowrap">SoundCore Space One ANC (Jet Black)</h2>
<div className="flex items-baseline gap-2 mt-0.5">
<span className="font-price-display text-price-display text-primary whitespace-nowrap">UGX 180,000</span>
<span className="font-body-sm text-body-sm text-outline line-through whitespace-nowrap">UGX 342,000</span>
</div>
<div className="flex items-center gap-1.5 mt-2 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="store" className="text-[15px] text-outline" />
<span className="truncate">Kampala Phone Hub</span>
<span className="text-outline">•</span>
<span className="text-tertiary font-label-sm text-label-sm">88.2% Trust</span>
</div>

<div className="flex flex-wrap gap-1 mt-2.5">
<span className="px-2 py-0.5 rounded bg-surface-dark text-amber-warning font-label-sm text-label-sm flex items-center gap-1">
<Icon name="price_change" className="text-[13px]" />
                  Price Anomaly (-47%)
                </span>
<span className="px-2 py-0.5 rounded bg-surface-dark text-primary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="policy" className="text-[13px]" />
                  Trademark Match
                </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low hover:bg-container-dark-high/60 p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="w-16 h-16 rounded-lg bg-surface-dark overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Samsung 65-inch Crystal UHD 4K Smart TV in original factory sealed box with energy rating sticker and Kampala customs dispatch stamps." src="/images/0f5337aede4ed097.webp" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary font-label-sm text-label-sm uppercase font-bold">
                  Payment Review
                </span>
<span className="font-label-sm text-label-sm text-outline">12m ago</span>
</div>
<h2 className="font-label-lg text-label-lg text-on-surface mt-1 truncate whitespace-nowrap">Samsung 65-inch Crystal UHD 4K Smart TV</h2>
<span className="font-price-display text-price-display text-on-surface mt-0.5 whitespace-nowrap">UGX 1,950,000</span>
<div className="flex items-center gap-1.5 mt-2 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="store" className="text-[15px] text-outline" />
<span className="truncate">Victoria Tech Stores</span>
<span className="text-outline">•</span>
<span className="text-tertiary font-label-sm text-label-sm">96.4% Trust</span>
</div>
<div className="flex flex-wrap gap-1 mt-2.5">
<span className="px-2 py-0.5 rounded bg-surface-dark text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="account_balance_wallet" className="text-[13px]" />
                  High Value Payment Hold
                </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low hover:bg-container-dark-high/60 p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="w-16 h-16 rounded-lg bg-surface-dark overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Nike Air Force 1 07 All White sneakers displayed on cardboard shoe box showing stitching details and shoe tongue tag inside Kikuubo commercial market shop." src="/images/b5fd2b5aea20eef8.webp" />
<span className="absolute top-1 left-1 px-1 rounded bg-error-container/90 text-on-error-container font-label-sm text-label-sm">REPLICA?</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-bold">
                  Potential Strike
                </span>
<span className="font-label-sm text-label-sm text-outline">28m ago</span>
</div>
<h2 className="font-label-lg text-label-lg text-on-surface mt-1 truncate whitespace-nowrap">Nike Air Force 1 '07 All White</h2>
<span className="font-price-display text-price-display text-primary mt-0.5 whitespace-nowrap">UGX 120,000</span>
<div className="flex items-center gap-1.5 mt-2 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="store" className="text-[15px] text-outline" />
<span className="truncate">Kikuubo Sneaker Shop</span>
<span className="text-outline">•</span>
<span className="text-amber-warning font-label-sm text-label-sm">74.1% Trust</span>
</div>
<div className="flex flex-wrap gap-1 mt-2.5">
<span className="px-2 py-0.5 rounded bg-surface-dark text-danger-penalty font-label-sm text-label-sm flex items-center gap-1">
<Icon name="block" className="text-[13px]" />
                  No Authorization Certificate
                </span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-container-dark-low hover:bg-container-dark-high/60 p-space-md shadow-sm cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="w-16 h-16 rounded-lg bg-surface-dark overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Oraimo 20000mAh Toast 10 Byte heavy duty powerbank in sealed green Oraimo retail box with genuine scratch verification code label." src="/images/715258812af21f92.webp" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase font-bold">
                  Clean AI Scan
                </span>
<span className="font-label-sm text-label-sm text-outline">41m ago</span>
</div>
<h2 className="font-label-lg text-label-lg text-on-surface mt-1 truncate whitespace-nowrap">Oraimo 20000mAh PowerBank Toast 10 Byte</h2>
<span className="font-price-display text-price-display text-on-surface mt-0.5 whitespace-nowrap">UGX 75,000</span>
<div className="flex items-center gap-1.5 mt-2 font-body-sm text-body-sm text-on-surface-variant">
<Icon name="store" className="text-[15px] text-outline" />
<span className="truncate">GadgetPoint</span>
<span className="text-outline">•</span>
<span className="text-tertiary font-label-sm text-label-sm">99.1% Trust</span>
</div>
<div className="flex flex-wrap gap-1 mt-2.5">
<span className="px-2 py-0.5 rounded bg-surface-dark text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="check_circle" className="text-[13px]" />
                  Pending Human Signoff
                </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline font-code-display text-label-sm">SKU: KPH-SP1-BLK</span>
<span className="font-label-sm text-label-sm text-outline">Electronics &gt; Audio &gt; Headphones</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-black mt-1 leading-snug">SoundCore Space One Active Noise Cancelling Headphones</h2>
<div className="flex items-center gap-3 mt-1 text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<Icon name="warehouse" className="text-outline text-[16px]" />
                Stock: <strong className="text-on-surface font-semibold">15 Units</strong> at Downtown Hub (William St)
              </span>
<span>•</span>
<span className="flex items-center gap-1">
<Icon name="pin_drop" className="text-outline text-[16px]" />
                Dispatch Zone: Kampala Central
              </span>
</div>
</div>

<div className="flex flex-col items-end flex-shrink-0 bg-surface-dark p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Declared Listing Price</span>
<span className="font-price-display text-price-display text-primary whitespace-nowrap">UGX 180,000</span>
<div className="flex items-center gap-1 mt-1 text-danger-penalty font-label-sm text-label-sm">
<Icon name="trending_down" className="text-[14px]" />
<span>-47.4% vs Market Baseline</span>
</div>
<span className="font-body-sm text-body-sm text-outline mt-0.5 whitespace-nowrap">MSRP: UGX 342,000</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-sm pt-2">
<div className="relative rounded-lg overflow-hidden h-36 bg-surface-dark group">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One over-ear black headphones earcups showing headband joints, simulated leather cushions, and matte plastic mold texture under cold warehouse lighting." src="/images/0f9e265abde96522.webp" />
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface-dark/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm">Submitted Photo #1</div>
</div>
<div className="relative rounded-lg overflow-hidden h-36 bg-surface-dark group">
<img className="w-full h-full object-cover" data-alt="Back of the retail carton packaging of SoundCore Space One headphones lacking the official Ugandan telecom UCC certification sticker and Anker warranty hologram." src="/images/e1d8f08244c49110.webp" />
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="search_off" className="text-[12px]" />
              Missing Hologram
            </div>
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface-dark/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm">Packaging Rear</div>
</div>
<div className="relative rounded-lg overflow-hidden h-36 bg-surface-dark group">
<img className="w-full h-full object-cover" data-alt="Official SoundCore Uganda authorized retail display carton with iridescent silver hologram stamp and UCC regulatory seal for comparison." src="/images/49d0602752ca721e.webp" />
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm flex items-center gap-1">
<Icon name="verified" className="text-[12px]" />
              Gold Master
            </div>
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface-dark/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm">Official Catalog Spec</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="policy" className="text-action-gradient-start text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">AI Fraud &amp; Trademark Forensic Inspection</h3>
</div>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
            Risk Score: 84 / 100 (Critical)
          </span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-container-dark-high flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-error-container/40 text-danger-penalty flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="copyright" className="text-[18px]" />
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Protected Brand Trademark Match</span>
<span className="font-label-sm text-label-sm text-danger-penalty font-bold uppercase">Restricted Tier A</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
<strong>SoundCore &amp; Anker</strong> wordmarks detected via OCR with 99.4% confidence. <span className="text-on-surface font-medium">SoundCore Uganda Official</span> holds exclusive verified brand registry within SwiftCart Uganda. Non-registered vendors require verified wholesale consignment paperwork.
              </p>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-high flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="waterfall_chart" className="text-[18px]" />
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Price Dispersion &amp; Arbitrage Anomaly</span>
<span className="font-label-sm text-label-sm text-amber-warning font-bold uppercase">Deviation -47.4%</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Offered at <strong className="whitespace-nowrap">UGX 180,000</strong>. Algorithmic median wholesale price from regional Dubai/Nairobi air imports is UGX 265,000. Price point reflects refurbished grade, open-box liquidation, or high-tier replica.
              </p>
</div>
</div>

<div className="p-space-md rounded-xl bg-container-dark-high flex items-start gap-space-md">
<div className="w-8 h-8 rounded-lg bg-error-container/40 text-danger-penalty flex items-center justify-center flex-shrink-0 mt-0.5">
<Icon name="fingerprint" className="text-[18px]" />
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Packaging Hologram Inconsistency</span>
<span className="font-label-sm text-label-sm text-danger-penalty font-bold uppercase">package seal Missing</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Vision model flag: Outer shrink wrap seal lacks Anker security micro-print and certified EAC (East African Community) customs duty tax stamp.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="badge" className="text-secondary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Merchant Trust Profile: Kampala Phone Hub</h3>
</div>
<span className="font-label-md text-label-md text-tertiary flex items-center gap-1">
<Icon name="verified" className="text-[16px]" />
            Registered 11 Mos
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-surface-dark p-space-md rounded-xl flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Merchant Trust Score</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">88.2%</span>
<span className="font-label-sm text-label-sm text-amber-warning font-semibold">Tier 2</span>
</div>
<span className="font-body-sm text-body-sm text-outline mt-1">1 previous dispute resolved (Audio cable missing)</span>
</div>
<div className="bg-surface-dark p-space-md rounded-xl flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Fulfilled Orders</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-black">419</span>
<span className="font-body-sm text-body-sm text-tertiary whitespace-nowrap">UGX 86.4M GMV</span>
</div>
<span className="font-body-sm text-body-sm text-outline mt-1">0 Counterfeit Strikes on record</span>
</div>
<div className="bg-surface-dark p-space-md rounded-xl flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Inbound Gate Protocol</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-label-md text-label-md text-action-gradient-start font-bold">MANDATORY</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Physical barcode scan required at Downtown Hub</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="gavel" className="text-action-gradient-start text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Moderator Decision Deck</h3>
</div>
<span className="font-label-sm text-label-sm text-outline">Logged as: Kizito Ronald (ID: ADM-04)</span>
</div>

<div className="flex flex-col gap-space-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Primary Enforcement Code</label>
<div className="relative">
<select className="w-full bg-surface-dark text-on-surface px-space-md py-3 rounded-xl appearance-none font-body-md text-body-md outline-none cursor-pointer">
<option selected={true}>Suspected Counterfeit / Grey Market Import (Rule §12)</option>
<option>Unauthorized Brand Reseller (Exclusive Rights Conflict)</option>
<option>Prohibited Item / Regulatory Restriction (UCC / UNBS)</option>
<option>Inaccurate Specifications / Misleading Title</option>
<option>Low Quality / Stolen Watermarked Imagery</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
<Icon name="expand_more" className="text-[20px]" />
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Merchant Notification Note (SMS &amp; Vendor Console)</label>
<span className="font-label-sm text-label-sm text-tertiary">Quick Snippet Applied</span>
</div>
<textarea className="w-full bg-surface-dark text-on-surface font-body-md text-body-md p-space-md rounded-xl outline-none resize-none leading-relaxed" rows={3}>Listing rejected under SwiftCart Brand Safety Rule §12. Please upload authorized Anker/SoundCore distributor invoice or source documentation to relist.</textarea>
</div>

<div className="flex flex-col gap-space-sm pt-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<button className="h-[50px] px-space-md rounded-xl bg-container-dark-high hover:bg-surface-variant text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
<Icon name="assignment_turned_in" className="text-[20px] text-tertiary" />
<span>Request Proof of Authenticity</span>
</button>

<button className="h-[50px] px-space-md rounded-xl bg-error-container/20 hover:bg-error-container/40 text-danger-penalty font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
<Icon name="report" className="text-[20px]" />
<span>Reject Listing &amp; Issue Strike</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">

<button className="h-[50px] px-space-md rounded-xl bg-surface-dark hover:bg-container-dark-high text-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
<Icon name="lock_clock" className="text-[20px] text-emerald-escrow" />
<span>Approve with 7-Day Payment Hold</span>
</button>

<button className="h-[50px] px-space-md rounded-xl bg-surface-container/40 text-outline cursor-not-allowed font-label-lg text-label-lg flex items-center justify-center gap-2 opacity-60" disabled={true}>
<Icon name="check_circle" className="text-[20px]" />
<span>Approve Unconditionally (Locked)</span>
</button>
</div>

<div className="flex items-center justify-between pt-2 text-outline font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<Icon name="history_edu" className="text-[14px]" />
              Decisions are irreversibly recorded on Audit Log Hash #MOD-9942-UG
            </span>
<span className="text-tertiary">Payment Protection: Active</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
