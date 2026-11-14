// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/hub/pickup_swiftcart_hub_agent/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';
import { useDashboardTheme } from '../../../context/ThemeContext';

export interface PickupSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PickupSwiftcartHubAgent: React.FC<PickupSwiftcartHubAgentProps> = (props) => {
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
      
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><img alt="SwiftCart" className="h-8 w-auto object-contain flex-shrink-0" src="/brand/swiftcart-logo-icon.png" /><div className="flex flex-col min-w-0"><div className="flex items-center gap-1.5"><span className="font-label-md text-label-md text-on-surface font-bold truncate">William St Hub</span><span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>Online</span></div><span className="font-label-sm text-label-sm text-secondary truncate">Kampala Central • Pickup</span></div></div><div className="flex items-center gap-space-xs flex-shrink-0"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full hover:bg-surface-container text-on-surface-variant"><Icon name="notifications" className="text-[22px]" /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><button aria-label="Toggle Theme" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant" onClick={() => toggleTheme()}><Icon name="dark_mode" className="text-[20px]" /></button><div className="flex items-center gap-1.5 pl-1"><div className="flex flex-col text-right hidden xs:flex"><span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Kato I.</span><span className="font-label-sm text-label-sm text-secondary font-mono leading-tight">#HUB-402</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Icon name="person" className="text-on-primary text-[18px]" /></div></div></div></div></header>
<main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface"><div className="flex flex-col w-full pb-8">

<div className="px-margin pt-space-sm pb-space-xs flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Counter Desk 02</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed">
<Icon name="lock" className="text-[14px] text-tertiary" />
<span className="font-label-sm text-label-sm font-semibold">Dual-Token Escrow Active</span>
</div>
</div>

<div className="w-full overflow-x-auto no-scrollbar px-margin pt-space-sm pb-space-sm bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs min-w-max">
<button className="px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform">
<span>Queue</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest/30 text-on-primary font-label-sm text-label-sm font-black">12</span>
</button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md font-medium flex items-center gap-1.5 active:scale-95 transition-transform">
<span>In Storage</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-secondary font-label-sm text-label-sm">142</span>
</button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md font-medium flex items-center gap-1.5 active:scale-95 transition-transform">
<span>Ready at Counter</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-secondary font-label-sm text-label-sm">4</span>
</button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md font-medium flex items-center gap-1.5 active:scale-95 transition-transform">
<span>Collected Today</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-variant text-secondary font-label-sm text-label-sm">68</span>
</button>
</div>
</div>

<div className="px-margin pt-space-md">
<div className="relative flex items-center w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
<Icon name="search" className="text-[20px]" />
</div>
<input className="w-full h-11 pl-10 pr-24 rounded-xl bg-surface-container-high text-on-surface font-body-md text-body-md placeholder-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search Order #, Customer, or Phone..." type="text" value="Dennis Mukasa" />
<div className="absolute inset-y-0 right-1 flex items-center gap-1 pr-1">
<button className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center hover:text-on-surface active:scale-90 transition-transform" title="Clear">
<Icon name="close" className="text-[16px]" />
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm active:scale-90 transition-transform" title="Scan Barcode">
<Icon name="barcode_scanner" className="text-[18px]" />
</button>
</div>
</div>
</div>

<div className="px-margin pt-space-md flex flex-col gap-space-md">

<div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary-container/15 text-primary-container font-label-md text-label-md font-black">
          #04
        </span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Active Counter Queue</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Waiting: 2m 14s</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-1">
<Icon name="check_circle" className="text-[14px]" /> At Counter
      </span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md">

<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant font-headline-sm text-headline-sm font-bold">
              DM
            </div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary-container text-on-primary flex items-center justify-center">
<Icon name="verified" className="text-[10px]" />
</div>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold truncate">Dennis Mukasa</h2>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-medium">UG-ID Validated</span>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 truncate">
<Icon name="call" className="text-[14px]" /> +256 772 ••• 819 • Kampala Central
            </p>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-secondary">Tier</span>
<span className="font-label-md text-label-md text-primary-container font-extrabold flex items-center gap-0.5">
<Icon name="star" className="text-[14px]" /> Gold Club
          </span>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs p-space-sm rounded-xl bg-surface-container-low">

<div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Target Bin</span>
<Icon name="inventory_2" className="text-primary-container text-[18px]" />
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-primary-container font-black">B-04</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate mt-0.5">Shelf B • Level 2</span>
</div>

<div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Storage Age</span>
<Icon name="schedule" className="text-tertiary text-[18px]" />
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-price-display text-price-display text-tertiary font-black">2 Days</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary font-semibold flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 3 Days Before SLA
          </span>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container">
<div className="w-14 h-14 rounded-lg bg-surface-container-lowest flex-shrink-0 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover rounded-lg" data-alt="Modern premium wireless over-ear noise-cancelling headphones in matte black packaging resting on a high-tech retail verification desk under clean focused commercial lighting." src="/images/e0b225c814b2e339.webp" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-secondary font-mono tracking-wide">ORD #SC-ORD-9281</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold truncate">SoundCore Space One Wireless ANC</span>
<div className="flex items-center justify-between mt-1">
<span className="font-label-md text-label-md text-on-surface font-extrabold">UGX 248,500</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold bg-tertiary-container/15 px-1.5 py-0.5 rounded">MTN MoMo Escrow</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Mandatory Verification Checklist</span>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input checked={true} className="mt-0.5 w-5 h-5 rounded accent-primary cursor-pointer" type="checkbox" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold">Physical ID / Passport Verified</span>
<span className="font-body-sm text-body-sm text-secondary truncate">National ID name strictly matches: Mukasa Dennis</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer active:bg-surface-container transition-colors">
<input checked={true} className="mt-0.5 w-5 h-5 rounded accent-primary cursor-pointer" type="checkbox" />
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-bold">Tamper Seal Intact (#SC-TB-4819)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Visual inspection complete. Packaging has zero perforations.</span>
</div>
</label>
</div>

<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-primary-container">
<Icon name="pin" className="text-[20px]" />
<span className="font-label-md text-label-md font-bold uppercase tracking-wide">6-Digit Buyer PIN</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-extrabold flex items-center gap-1">
<Icon name="security" className="text-[12px]" /> 2 Attempts Left
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Request the unique 6-digit confirmation key presented on customer's SwiftCart App or SMS notification.
        </p>

<div className="grid grid-cols-6 gap-2 my-1">

<div className="h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md text-on-surface font-black shadow-inner">
            8
          </div>

<div className="h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md text-on-surface font-black shadow-inner">
            4
          </div>

<div className="h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md text-on-surface font-black shadow-inner">
            9
          </div>

<div className="h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md text-on-surface font-black shadow-inner">
            2
          </div>

<div className="h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center font-headline-md text-headline-md text-primary-container font-black shadow-inner bg-primary-container/10 animate-pulse">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
</div>

<div className="h-12 rounded-lg bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary/40 font-black">
            -
          </div>
</div>

<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<Icon name="verified_user" className="text-[16px] text-outline" />
<span>Never ask customer to surrender phone. Terminal never displays secret PIN.</span>
</div>

<div className="flex items-center justify-between pt-1 font-label-sm text-label-sm">
<button className="text-secondary hover:text-on-surface font-semibold flex items-center gap-1">
<Icon name="sms" className="text-[14px]" /> Resend SMS Key
          </button>
<button className="text-primary font-bold hover:underline flex items-center gap-1">
<Icon name="admin_panel_settings" className="text-[14px]" /> Supervisor Bypass
          </button>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-1">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-black tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary-container/30 active:scale-[0.98] transition-transform">
<Icon name="task_alt" className="text-[20px]" />
          Confirm Handover &amp; Release Escrow
        </button>
<button className="w-full h-10 rounded-xl bg-surface-container text-secondary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:text-on-surface active:bg-surface-variant transition-colors">
<Icon name="keyboard_return" className="text-[18px]" />
          Customer Not Ready • Return to Shelf B-04
        </button>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">Next In Line &amp; Storage SLA</span>
<button className="font-label-md text-label-md text-primary font-bold hover:underline">View All (142)</button>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md font-black text-on-surface flex-shrink-0">
            C-12
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Brian Ssewankambo</span>
<span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-extrabold flex items-center gap-0.5">
<Icon name="warning" className="text-[10px]" /> SLA Alert
              </span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">#SC-ORD-9104 • Oraimo FreePods 4</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-error font-extrabold">5 Days Held</span>
<span className="font-label-sm text-label-sm text-secondary">Final Hub Day</span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md font-black text-on-surface flex-shrink-0">
            A-02
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Grace Nakato</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                Healthy
              </span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">#SC-ORD-9210 • Anker 65W GaN Charger</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-tertiary font-extrabold">1 Day Held</span>
<span className="font-label-sm text-label-sm text-secondary">4 Days Left</span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-md text-label-md font-black text-on-surface flex-shrink-0">
            B-11
          </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Patrick Kigozi</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                Healthy
              </span>
</div>
<span className="font-body-sm text-body-sm text-secondary font-mono truncate">#SC-ORD-9302 • Xiaomi Mi Smart Band 8</span>
</div>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<span className="font-label-sm text-label-sm text-on-surface font-extrabold">3 Days Held</span>
<span className="font-label-sm text-label-sm text-secondary">2 Days Left</span>
</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="headset_mic" className="text-secondary text-[20px]" />
<span className="font-body-sm text-body-sm text-on-surface font-semibold">SwiftCart Hub Ops Hotline</span>
</div>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold shadow-sm active:scale-95 transition-transform">
        Call Dispatch
      </button>
</div>
</div>
</div></main>
<nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" data-active-classes="text-primary-container font-bold"><div className="flex justify-between items-center h-20 px-space-xs relative"><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="overview" href="#"><Icon name="dashboard" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Overview</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="intake" href="#"><Icon name="move_to_inbox" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Intake</span></a><div className="relative flex-1 flex flex-col items-center justify-center"><a className="absolute -top-6 w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/40 ring-4 ring-surface active:scale-95 transition-transform" data-path="scan" href="#"><Icon name="qr_code_scanner" className="text-[28px]" /></a><span className="font-label-sm text-label-sm text-secondary pt-8 tracking-tight">Scan</span></div><a aria-current="page" className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] transition-colors text-primary-container font-bold" data-path="pickup" href="#"><Icon name="front_hand" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">Pickup</span></a><a className="flex-1 flex flex-col items-center justify-center h-full min-w-[48px] min-h-[48px] text-secondary hover:text-on-surface transition-colors" data-path="more" href="#"><Icon name="widgets" className="text-[24px]" /><span className="font-label-sm text-label-sm tracking-tight">More</span></a></div></nav>
    </div>
  );
};

export default PickupSwiftcartHubAgent;
