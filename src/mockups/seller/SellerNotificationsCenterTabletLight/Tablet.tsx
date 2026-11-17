// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_notifications_center_tablet_light/code.html
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
      
      <div className="pl-[72px]"><div className="fixed top-[60px] left-[72px] right-0 h-7 bg-surface-container-low border-b border-surface-container-high z-30 px-space-lg flex items-center justify-between text-on-secondary-container"><div className="flex items-center gap-space-xs font-label-sm text-label-sm overflow-hidden text-ellipsis whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-semibold text-on-surface">Nakasero Mesh Relay Active</span><span className="text-outline">|</span><span>Last synced 12s ago via MTN MoMo Gateway</span><span className="text-outline">|</span><span className="text-tertiary font-semibold flex items-center gap-0.5"><Icon name="verified_user" className="text-[13px]" /> Payment Enforced</span></div><div className="font-label-sm text-label-sm text-secondary font-mono tracking-wide">Hub Node UG-OPS-04</div></div><main className="w-full pt-[88px] min-h-screen bg-surface px-space-lg py-space-md"><div className="flex flex-col w-full pb-12">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p- space-md mb-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Seller Notifications &amp; Alerts</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
            4 Actionable Items
          </span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low rounded-md">
<Icon name="verified_user" className="text-tertiary text-[16px]" />
<span className="font-label-sm text-label-sm text-tertiary">Payment Shielded</span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg">
<Icon name="timer" className="text-primary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Dispatch Cut-off (14:30 EAT)</span>
<span className="font-label-md text-label-md text-primary font-bold">1h 14m remaining for today's Nakasero Hub</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg">
<Icon name="speed" className="text-tertiary text-[18px]" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Store Velocity Score</span>
<span className="font-label-md text-label-md text-tertiary font-bold">99.4% On-Time SLA</span>
</div>
</div>
<button className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-secondary hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<Icon name="done_all" className="text-[16px]" />
<span>Mark All Read</span>
</button>
</div>
</div>
</div>

<div className="w-full flex items-center justify-between gap-space-sm overflow-x-auto pb-1 mb-space-md">
<div className="flex items-center gap-space-xs">
<button className="px-3.5 py-1.5 rounded-lg bg-on-surface text-surface font-label-md text-label-md shadow-sm whitespace-nowrap" type="button">
        All Alerts (12)
      </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5" type="button">
<span>New Orders</span>
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">4</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5" type="button">
<span>Returns &amp; Disputes</span>
<span className="w-5 h-5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm" type="button">
        Wallet &amp; Payouts (3)
      </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap shadow-sm" type="button">
        KYC &amp; System (3)
      </button>
</div>
<div className="hidden sm:flex items-center gap-1 text-secondary font-label-sm text-label-sm shrink-0 px-2.5 py-1 bg-surface-container-low rounded-md">
<Icon name="sort" className="text-[16px]" />
<span className="font-semibold uppercase tracking-wider">Priority Sorted</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-7 flex flex-col gap-space-sm">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wide">
                SLA URGENT
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">New Order Placed #SC-9952</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">3 mins ago</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="font-price-display text-price-display text-on-surface whitespace-nowrap">UGX 248,500</span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-surface-container text-tertiary font-label-sm text-label-sm rounded font-semibold">
<Icon name="shield" className="text-[13px]" />
              momo payment Secured
            </span>
</div>
<div className="flex items-center gap-space-sm p-2.5 bg-surface-container-low rounded-lg mb-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" data-alt="SoundCore Space One Wireless Noise Cancelling Over-Ear Headphones resting on a minimalist studio stand, natural soft daylight, subtle orange accent lighting, commercial product photograph" src="/images/b186a7803c1724cb.webp" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">SoundCore Space One ANC Headphones</span>
<div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm">
<span>SKU: ANK-SC-992</span>
<span>•</span>
<span>Qty: 1</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-1">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<Icon name="two_wheeler" className="text-primary-container text-[18px]" />
<span>Pickup by <strong className="text-on-surface">2:00 PM EAT</strong> • Rider: <span className="text-on-surface font-semibold">Kizito Brian (En Route)</span></span>
</div>
<button className="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-on-primary-container transition-transform active:scale-95 shadow-sm inline-flex items-center justify-center gap-1.5 font-bold" type="button">
<span>Pack Parcel &amp; Assign Rider</span>
<Icon name="arrow_forward" className="text-[16px]" />
</button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wide">
                Direct Credit
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">MTN MoMo Payout Settled</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">42 mins ago</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-headline-md text-headline-md text-tertiary font-extrabold whitespace-nowrap">+UGX 1,420,000</span>
<span className="font-body-sm text-body-sm text-secondary">Automatic Payment Sweep</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg mb-space-xs font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="text-secondary font-label-sm text-label-sm">Destination Gateway</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">MTN Mobile Money +256 772 *** 910</span>
</div>
<div className="flex flex-col sm:items-end">
<span className="text-secondary font-label-sm text-label-sm">Transaction Reference</span>
<span className="font-mono text-label-md text-label-md text-on-surface font-bold">#PYO-88319</span>
</div>
</div>
<div className="flex justify-end pt-1">
<a className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md font-semibold inline-flex items-center gap-1" href="#">
<span>View Statement</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase tracking-wide">
                21h left to respond
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Return Request Initiated #RT-309</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">2 hours ago</span>
</div>
<p className="font-body-md text-body-md text-secondary mb-2">
            Buyer claims package seal broken upon delivery. Payment held until merchant triage complete.
          </p>
<div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg mb-space-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Anker 65W GaN Wall Charger</span>
<span className="font-body-sm text-body-sm text-secondary">Dispute Hold: <strong className="text-error font-semibold whitespace-nowrap">UGX 95,000</strong></span>
</div>
<div className="w-9 h-9 rounded bg-surface-container flex items-center justify-center">
<Icon name="process_chart" className="text-secondary text-[20px]" />
</div>
</div>
<div className="flex justify-end gap-2">
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">
              Inspect Return
            </button>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md transition-all hover:shadow-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-highest"></div>
<div className="pl-2">
<div className="flex items-center justify-between gap-space-sm mb-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="verified" className="text-[13px]" />
                Verified Merchant
              </span>
<span className="font-label-lg text-label-lg font-bold text-on-surface">Tier 2 Verification Approved</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">5 hours ago</span>
</div>
<p className="font-body-md text-body-md text-secondary mb-2 whitespace-nowrap">
            Tax Tax Identification &amp; Kampala City Traders Association license validated. Your merchant daily transaction threshold is upgraded to UGX 50,000,000.
          </p>
<div className="flex justify-end">
<a className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md font-semibold inline-flex items-center gap-1" href="#">
<span>Check Badges</span>
<Icon name="chevron_right" className="text-[16px]" />
</a>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<Icon name="insights" className="text-secondary text-[20px]" />
<span className="font-label-lg text-label-lg font-bold text-on-surface">Yesterday's Store Performance</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Automated Summary</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Completed Orders</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">18</span>
</div>
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Gross GMV</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold whitespace-nowrap">UGX 4.28M</span>
</div>
<div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary block">Avg Boda Pickup</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">14m</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 sticky top-[96px] flex flex-col gap-space-sm">

<div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md overflow-hidden relative">

<div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Order #SC-9952</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-0.5">
<Icon name="lock" className="text-[13px]" />
                payment protected
              </span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Dispatch Triage • SafeBoda Express</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
<Icon name="local_shipping" className="text-[24px]" />
</div>
</div>

<div className="mb-space-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Recipient Details</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Verified Buyer
            </span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface font-bold">Sarah Namubiru</span>
<span className="font-body-sm text-body-sm text-secondary font-mono">+256 701 *** 123 (Masked)</span>
</div>
<div className="flex items-start gap-1.5 text-secondary font-body-sm text-body-sm">
<Icon name="pin_drop" className="text-[16px] text-primary shrink-0 mt-0.5" />
<span className="text-on-surface font-medium leading-tight">Acacia Mall Service Gate Hub, Kisementi, Kololo, Kampala</span>
</div>
</div>
</div>

<div className="mb-space-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Designated Courier</span>
<span className="font-label-sm text-label-sm text-primary font-bold">ETA 12 Mins</span>
</div>
<div className="bg-surface-container-low p-2.5 rounded-lg flex items-center gap- space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of an African delivery rider wearing an orange branded helmet and high visibility jacket, smiling confidently against daylight Kampala street backdrop" src="/images/65b2fe56b352b50e.webp" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Kizito Brian</span>
<Icon name="verified" className="text-tertiary text-[15px]" />
</div>
<span className="font-body-sm text-body-sm text-secondary truncate">Bajaj Boxer • <strong className="text-on-surface font-mono">#UFE 219K</strong></span>
<span className="font-label-sm text-label-sm text-secondary">SafeBoda Nakasero Stage Verified</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors" title="Call Courier Relay" type="button">
<Icon name="call" className="text-[18px]" />
</button>
</div>
</div>

<div className="mb-space-sm p-3 bg-surface-container rounded-lg text-center">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest block mb-1">
            Blind OTP Handover Code (Courier Scan Only)
          </span>
<div className="flex items-center justify-center gap-2 mb-2">
<span className="px-3 py-1 bg-surface-container-lowest rounded-md font-mono font-extrabold text-headline-sm text-on-surface shadow-sm">
              749 • 921
            </span>
</div>
<div className="w-full h-9 bg-surface-container-lowest rounded flex items-center justify-center p-1 shadow-inner">

<svg className="w-full h-7 text-on-surface" preserveAspectRatio="none" viewBox="0 0 200 30">
<rect fill="currentColor" height="30" width="4" x="0" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="6" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="12" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="22" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="28" y="0"></rect>
<rect fill="currentColor" height="30" width="8" x="36" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="48" y="0"></rect>
<rect fill="currentColor" height="30" width="5" x="54" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="63" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="68" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="79" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="86" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="96" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="104" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="110" y="0"></rect>
<rect fill="currentColor" height="30" width="3" x="120" y="0"></rect>
<rect fill="currentColor" height="30" width="5" x="126" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="135" y="0"></rect>
<rect fill="currentColor" height="30" width="6" x="141" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="151" y="0"></rect>
<rect fill="currentColor" height="30" width="2" x="159" y="0"></rect>
<rect fill="currentColor" height="30" width="7" x="165" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="176" y="0"></rect>
<rect fill="currentColor" height="30" width="8" x="184" y="0"></rect>
<rect fill="currentColor" height="30" width="4" x="196" y="0"></rect>
</svg>
</div>
</div>

<div className="mb-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider block mb-1">
            Item Manifest Checklist
          </span>
<div className="space-y-1.5">
<label className="flex items-center gap-2 p-2 rounded bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 accent-primary-container rounded" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface flex-1 whitespace-nowrap">SoundCore Space One ANC (UGX 248,500)</span>
<Icon name="check_circle" className="text-tertiary text-[16px]" />
</label>
<label className="flex items-center gap-2 p-2 rounded bg-surface-container-low cursor-pointer">
<input checked={true} className="w-4 h-4 accent-primary-container rounded" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface flex-1">Warranty Hologram Seal Attached</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Passed QC</span>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<button className="w-full py-3 px-4 rounded-lg bg-primary-container hover:bg-on-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]" type="button">
<Icon name="inventory" className="text-[20px]" />
<span>Confirm Packed &amp; Stage for Boda</span>
</button>
<button className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-colors" type="button">
<Icon name="print" className="text-[18px]" />
<span>Print Waybill Slip &amp; Barcode</span>
</button>
</div>
<div className="mt-3 flex items-center justify-center gap-1.5 text-secondary font-label-sm text-label-sm text-center">
<Icon name="cell_tower" className="text-[14px]" />
<span>SMS Priority Relay will alert Sarah upon parcel holding transfer</span>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Mesh Relay Node UG-OPS-04</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">14ms latency</span>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
