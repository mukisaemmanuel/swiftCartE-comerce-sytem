// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/admin/sellers_directory_swiftcart_admin_1/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface SellersDirectorySwiftcartAdmin1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectorySwiftcartAdmin1: React.FC<SellersDirectorySwiftcartAdmin1Props> = (props) => {
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
      
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><button type="button" className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-surface-container-highest/50 mr-2" aria-label="Toggle Theme" title="Toggle Theme" onClick={() => toggleTheme()}>{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}</button><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 text-on-surface" type="button"><Icon name="arrow_back" className="text-[24px]" /></button><img alt="SwiftCart" className="h-8 w-auto object-contain" src="/brand/swiftcart-logo-icon.png" /><h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate max-w-[170px]">Sellers Directory</h1></div><div className="flex items-center gap-space-xs"><button className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button"><Icon name="routine" className="text-[20px]" /></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface"><div className="flex-1 w-full px-margin pt-space-md pb-space-lg"><div className="flex flex-col w-full space-y-space-md">

<div className="relative w-full">
<div className="bg-surface-container-low rounded-xl p-space-xs shadow-sm flex items-center gap-space-sm">
<Icon name="search" className="text-outline ml-space-xs text-[22px]" />
<input className="bg-transparent flex-1 py-space-sm text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none" id="sellerSearchInput" placeholder="Search store name, ID or URA TIN..." type="text" />
<button aria-label="Filter presets" className="w-9 h-9 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center active:scale-95 transition-transform" type="button">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin px-margin scrollbar-none">
<button className="filter-pill px-space-md py-1.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shrink-0 active:scale-95 transition-all shadow-sm" data-filter="all">
      All (142)
    </button>
<button className="filter-pill px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 active:scale-95 transition-all" data-filter="active">
      Active (128)
    </button>
<button className="filter-pill px-space-md py-1.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md shrink-0 active:scale-95 transition-all" data-filter="suspended">
      Suspended (6)
    </button>
<button className="filter-pill px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 active:scale-95 transition-all" data-filter="kampala">
      Kampala Central
    </button>
<button className="filter-pill px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 active:scale-95 transition-all" data-filter="nakawa">
      Nakawa
    </button>
<button className="filter-pill px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 active:scale-95 transition-all" data-filter="mukono">
      Mukono
    </button>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center">
<Icon name="verified_user" className="text-[24px]" />
</div>
<div>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Merchant Network Health</p>
<p className="font-headline-sm text-headline-sm text-on-surface">98.1% Good Standing</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></span> Live Sync
      </span>
</div>
</div>

<div className="seller-card bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative overflow-hidden" data-region="kampala" data-status="active">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none"></div>

<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-12 h-12 rounded-xl object-cover shadow-sm bg-surface-container" data-alt="Modern audio flagship retail store in downtown Kampala with sleek neon accent lighting and premium audio accessories neatly organized on modern oak shelves" src="/images/4d950af5943f90fe.webp" />
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
<Icon name="verified" className="text-[13px]" />
</div>
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">SoundCore Uganda Official</h2>
</div>
<p className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
<span className="text-on-surface-variant font-label-md">#VND-8821</span>
<span>•</span>
<Icon name="location_on" className="text-[12px] text-outline" /> Kikuubo Lane
          </p>
</div>
</div>
<span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full shrink-0 font-bold">
        Tier 2 Verified
      </span>
</div>

<div className="flex items-center justify-between text-body-sm font-body-sm bg-surface-container-low rounded-lg px-space-md py-space-xs">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="star" className="text-[16px] text-amber-500" />
<span className="font-label-md text-label-md">4.8</span>
<span className="text-secondary font-label-sm text-label-sm">(1,240 reviews)</span>
</div>
<div className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
<Icon name="calendar_today" className="text-[14px]" /> Joined Mar 2024
      </div>
</div>

<div className="grid grid-cols-3 gap-space-xs">
<div className="bg-surface-container-low p-2.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block leading-tight">Total Sales GMV</span>
<span className="font-headline-sm text-headline-sm text-primary block mt-1 tracking-tight">UGX 184.2M</span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5 mt-0.5">
<Icon name="trending_up" className="text-[12px]" /> +14.2% MoM
        </span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block leading-tight">Active Listings</span>
<span className="font-headline-sm text-headline-sm text-on-surface block mt-1 tracking-tight">34 SKUs</span>
<span className="font-label-sm text-label-sm text-secondary block mt-0.5">All in stock</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block leading-tight">Disputes</span>
<span className="font-headline-sm text-headline-sm text-tertiary block mt-1 tracking-tight">3 Resolved</span>
<span className="font-label-sm text-label-sm text-secondary block mt-0.5">100% merchant win</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-secondary flex items-center gap-1">
<Icon name="health_and_safety" className="text-[15px] text-tertiary" /> Escrow Settlement Reliability
        </span>
<span className="font-label-md text-label-md text-tertiary">99.4% Flawless Completion</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-tertiary-container rounded-full" style={{"width":"99.4%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">
        Average disbursement clearing window: <strong className="text-on-surface">18 minutes post-delivery confirmation</strong>.
      </p>
</div>

<div className="grid grid-cols-3 gap-space-xs pt-1">
<button className="h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center gap-1 font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all" type="button">
<Icon name="storefront" className="text-[16px]" /> Storefront
      </button>
<button className="h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center gap-1 font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all" type="button">
<Icon name="phone_forwarded" className="text-[16px] text-tertiary" /> WhatsApp
      </button>
<button className="h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center gap-1 font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all" type="button">
<Icon name="policy" className="text-[16px]" /> Logs
      </button>
</div>

<div className="pt-1">
<button className="w-full h-11 rounded-lg bg-error-container text-on-error-container font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:scale-98 transition-transform shadow-xs" type="button">
<Icon name="block" className="text-[20px]" />
        Suspend Merchant Access
      </button>
</div>
</div>

<div className="seller-card bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative overflow-hidden" data-region="kampala" data-status="suspended">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-12 h-12 rounded-xl object-cover grayscale opacity-80 bg-surface-container" data-alt="Electronics store specializing in mobile phones and communication accessories with tempered glass displays and inventory drawers" src="/images/c568dff9e89558d9.webp" />
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-error text-on-error flex items-center justify-center shadow-xs">
<Icon name="gavel" className="text-[13px]" />
</div>
</div>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Kampala Phone Hub</h2>
<p className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
<span className="text-on-surface-variant font-label-md">#VND-9102</span>
<span>•</span>
<Icon name="location_on" className="text-[12px] text-outline" /> Pioneer Mall, Nakasero
          </p>
</div>
</div>
<span className="bg-error text-on-error font-label-sm text-label-sm px-2.5 py-1 rounded-full shrink-0 font-bold flex items-center gap-1">
<Icon name="pause_circle" className="text-[12px]" /> Suspended
      </span>
</div>

<div className="bg-error-container/40 p-space-md rounded-lg space-y-1">
<div className="flex items-center gap-1.5 text-on-error-container font-label-md text-label-md">
<Icon name="warning" className="text-[16px] text-error" />
        Suspension Reason on File:
      </div>
<p className="font-body-sm text-body-sm text-on-surface">
        "High rate of canceled dispatches during evening peak (8 SLA breaches logged over 48 hours)."
      </p>
<div className="text-secondary font-label-sm text-label-sm pt-1 flex items-center justify-between">
<span>Actioned by: Admin Sarah N.</span>
<span>Expires in: 4 days</span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs text-on-surface">
<div className="bg-surface-container-low p-2.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Pending Escrow Hold</span>
<span className="font-headline-sm text-headline-sm text-error block mt-0.5">UGX 12,450,000</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary block">Frozen Catalog Items</span>
<span className="font-headline-sm text-headline-sm text-secondary block mt-0.5">19 SKUs Locked</span>
</div>
</div>

<button className="w-full h-11 rounded-lg bg-tertiary text-on-tertiary font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:scale-98 transition-transform shadow-xs" type="button">
<Icon name="check_circle" className="text-[20px]" />
      Reinstate Seller Storefront
    </button>
</div>

<div className="seller-card bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm" data-region="nakawa" data-status="active">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-xl object-cover bg-surface-container shadow-sm" data-alt="Cosmetics and beauty supplies distribution showroom with polished white counter displays and orderly branded skin care bottles in bright daylight" src="/images/7a0761267f3887de.webp" />
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Victoria Beauty Importers</h2>
<p className="font-label-sm text-label-sm text-secondary flex items-center gap-1 mt-0.5">
<span className="text-on-surface-variant font-label-md">#VND-7744</span>
<span>•</span>
<Icon name="location_on" className="text-[12px] text-outline" /> Nakawa Industrial Area
          </p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full shrink-0 font-bold">
        Tier 1 Registered
      </span>
</div>
<div className="grid grid-cols-3 gap-space-xs pt-1">
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="font-label-sm text-label-sm text-secondary block">GMV Total</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">UGX 42.0M</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="font-label-sm text-label-sm text-secondary block">Rating</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold flex items-center justify-center gap-0.5">
          4.7 <Icon name="star" className="text-[13px] text-amber-500" />
</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg text-center">
<span className="font-label-sm text-label-sm text-secondary block">Live Status</span>
<span className="font-label-lg text-label-lg text-tertiary font-bold">Active</span>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-label-sm font-label-sm">
<span className="text-secondary">URA TIN: 1002998341 (Valid)</span>
<button className="text-primary font-label-md text-label-md flex items-center gap-0.5 active:opacity-75" type="button">
        Manage Merchant <Icon name="chevron_right" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md text-center space-y-space-xs">
<div className="w-10 h-10 rounded-full bg-primary-container/15 text-primary mx-auto flex items-center justify-center">
<Icon name="local_police" className="text-[20px]" />
</div>
<p className="font-label-md text-label-md text-on-surface">SwiftCart Escrow &amp; Merchant Integrity</p>
<p className="font-body-sm text-body-sm text-secondary">
      All automated dispatch audits recalculate hourly. Suspended accounts lose checkout gateway integration immediately.
    </p>
</div>

<div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-xs flex items-end justify-center p-0 transition-opacity" id="suspendModal">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-space-lg shadow-xl space-y-space-md max-h-[795px] overflow-y-auto">

<div className="flex flex-col items-center">
<div className="w-12 h-1.5 rounded-full bg-surface-variant mb-space-sm"></div>
<div className="w-full flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
<Icon name="gavel" className="text-[22px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Suspend Merchant</h3>
<p className="font-label-sm text-label-sm text-secondary" id="suspendTargetName">Loading seller target...</p>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
</div>

<div className="space-y-space-xs">
<label className="font-label-md text-label-md text-on-surface">Select Penalty Duration</label>
<div className="grid grid-cols-3 gap-space-xs">
<label className="cursor-pointer">
<input checked={true} className="peer sr-only" name="suspend_duration" type="radio" value="7" />
<div className="p-space-sm rounded-lg bg-surface-container text-center peer-checked:bg-error peer-checked:text-on-error text-body-md font-label-md transition-colors">
              7 Days
            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="suspend_duration" type="radio" value="30" />
<div className="p-space-sm rounded-lg bg-surface-container text-center peer-checked:bg-error peer-checked:text-on-error text-body-md font-label-md transition-colors">
              30 Days
            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="suspend_duration" type="radio" value="indefinite" />
<div className="p-space-sm rounded-lg bg-surface-container text-center peer-checked:bg-error peer-checked:text-on-error text-body-md font-label-md transition-colors">
              Indefinite
            </div>
</label>
</div>
</div>

<div className="space-y-space-xs">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="suspensionReasonInput">
<span>Mandatory Reason for Record</span>
<span className="font-label-sm text-label-sm text-error">* Required</span>
</label>
<textarea className="w-full bg-surface-container-low rounded-lg p-space-sm text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none" id="suspensionReasonInput" placeholder="E.g., Dispatched counterfeit accessories, persistent SLA dispatch timeout, customer harassment report..." rows={3}></textarea>
<p className="font-body-sm text-body-sm text-secondary">This explanation will be logged to Uganda HQ compliance archive and SMS notified to the merchant.</p>
</div>

<label className="flex items-start gap-space-sm p-space-xs cursor-pointer">
<input className="mt-1 w-4 h-4 rounded text-error accent-error cursor-pointer" id="complianceCheckbox" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">
          I confirm that frozen orders will route to the SwiftCart Escrow buffer and the merchant payout cycle will halt.
        </span>
</label>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="h-12 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg active:scale-95 transition-transform" type="button">
          Cancel
        </button>
<button className="h-12 rounded-lg bg-error text-on-error font-label-lg text-label-lg flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md" id="confirmSuspendBtn" type="button">
<Icon name="lock" className="text-[18px]" />
          Confirm Freeze
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-xs flex items-center justify-center p-margin transition-opacity" id="reinstateModal">
<div className="w-full max-w-sm bg-surface-container-lowest rounded-2xl p-space-lg shadow-xl space-y-space-md text-center">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 text-tertiary mx-auto flex items-center justify-center">
<Icon name="store" className="text-[28px]" />
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Reinstate Merchant Store?</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1" id="reinstateTargetName">
          Storefront listings will immediately relist across the Kampala Central marketplace catalog.
        </p>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<button className="h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md active:scale-95 transition-transform" type="button">
          Keep Suspended
        </button>
<button className="h-11 rounded-lg bg-tertiary text-on-tertiary font-label-md text-label-md active:scale-95 transition-transform font-bold" type="button">
          Reinstate Now
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-xs flex items-end justify-center p-0 transition-opacity" id="auditModal">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-space-lg shadow-xl space-y-space-md max-h-[751px] overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="history_edu" className="text-primary text-[22px]" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Store Audit Trail</h3>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center" type="button">
<Icon name="close" className="text-[18px]" />
</button>
</div>
<div className="space-y-space-sm text-body-sm font-body-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg">
<div className="flex justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>22 May 2024 • 14:32 EAT</span>
<span className="text-tertiary font-bold">Passed</span>
</div>
<p className="text-on-surface font-label-md text-label-md">Tier 2 Physical Onsite Verification</p>
<p className="text-secondary text-body-sm mt-0.5">Field agent David Mukasa inspected warehouse at Kikuubo Lane. 100% genuine inventory audit.</p>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<div className="flex justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>11 Apr 2024 • 09:10 EAT</span>
<span className="text-secondary font-bold">Settled</span>
</div>
<p className="text-on-surface font-label-md text-label-md">Customer Packaging Dispute #DP-092</p>
<p className="text-secondary text-body-sm mt-0.5">Buyer claimed broken seal. CCTV footage reviewed; manufacturer tamper strip confirmed intact prior to handover.</p>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg">
<div className="flex justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>01 Mar 2024 • 11:00 EAT</span>
<span className="text-primary font-bold">Onboarded</span>
</div>
<p className="text-on-surface font-label-md text-label-md">URA TIN Validation &amp; Bank Linking</p>
<p className="text-secondary text-body-sm mt-0.5">Stanbic Bank UG Escrow merchant account tied and tested via UGX 5,000 micro-deposit.</p>
</div>
</div>
<button className="w-full h-11 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg" type="button">
        Close Audit History
      </button>
</div>
</div>
</div>
</div></main>
    </div>
  );
};

export default SellersDirectorySwiftcartAdmin1;
