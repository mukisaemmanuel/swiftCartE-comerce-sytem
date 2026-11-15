// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_overview_dashboard_tablet_light_1/code.html
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
      
      <main className="flex-1 min-w-0 flex flex-col justify-between">
<div className="max-w-[834px] lg:max-w-7xl mx-auto px-4 md:px-6 py-5 space-y-4">

<div className="w-full bg-slate-900 text-white rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-sm border border-slate-800">
<div className="flex items-center gap-2.5 min-w-0">
<div className="relative flex items-center justify-center w-2.5 h-2.5 flex-shrink-0">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<div className="flex items-center gap-1.5 text-xs truncate">
<span className="font-extrabold uppercase tracking-wider text-emerald-400">Kampala Mesh Relay:</span>
<span className="text-slate-300 truncate">Central Division Boda nodes responding under <strong className="text-white font-semibold">42ms</strong></span>
<span className="hidden sm:inline text-slate-600">•</span>
<span className="hidden sm:inline text-slate-300">Zero queued offline receipts</span>
</div>
</div>
<div className="flex items-center gap-2 flex-shrink-0 ml-auto sm:ml-0">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold tracking-wide">
<Icon name="sync" className="text-[13px] animate-spin" />
            SYNC ACTIVE
          </span>
<span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">NODE-KLA-04</span>
</div>
</div>

<div className="relative overflow-hidden bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200/80">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
<div className="space-y-2 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Good afternoon, Sarah Namubiru</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
<Icon name="verified" className="text-[15px]" />
                Verified Merchant
              </span>
</div>
<p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2 flex-wrap">
<span className="font-semibold text-slate-800">SoundCore Uganda Official</span>
<span className="text-slate-300">•</span>
<span className="">Tier 1 Verified Merchant</span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-1 text-slate-700 font-medium">
<Icon name="store" className="text-[16px] text-primary-container" />
                Pioneer Mall G-14 (Kampala Central)
              </span>
</p>
<div className="flex items-center gap-2 pt-1 flex-wrap text-xs text-slate-600">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<strong>Live Boda Network:</strong> Kampala Central Fast Dispatch Active
              </span>
<span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200/60 font-semibold text-[11px]">
                Avg. pickup: 14 mins
              </span>
</div>
</div>

<div className="flex flex-wrap sm:flex-nowrap md:flex-col lg:flex-row items-center gap-2 flex-shrink-0">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-container hover:bg-orange-600 text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-[0.98]" type="button">
<Icon name="add_box" className="text-[17px]" />
              + Add New Product
            </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs transition-all active:scale-[0.98]" type="button">
<Icon name="receipt_long" className="text-[17px] text-slate-500" />
              Print Staging Manifest
            </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-emerald-50/50 border border-emerald-300 text-emerald-800 font-semibold text-xs transition-all active:scale-[0.98]" type="button">
<Icon name="payments" className="text-[17px] text-emerald-600" />
              Request MoMo Cash-out
            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 flex flex-col justify-between"><div className="flex items-center justify-between pb-3"><span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Today's Sales</span><div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center"><Icon name="point_of_sale" className="text-[18px]" /></div></div><div className="space-y-1.5"><div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">UGX 4,820,000</div><div className="flex items-center gap-1.5 text-[14px]"><span className="inline-flex items-center text-emerald-600 font-bold"><Icon name="trending_up" className="text-[16px]" /> +18.4%</span><span className="text-slate-500">vs yesterday</span></div></div><div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[14px] text-slate-600"><span className="">Completed &amp; In-transit</span><span className="font-bold text-slate-900">28 Orders</span></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 flex flex-col justify-between"><div className="flex items-center justify-between pb-3"><span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Pending Dispatches</span><div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><Icon name="two_wheeler" className="text-[18px]" /></div></div><div className="space-y-1.5"><div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">6 Orders</div><div className="flex items-center gap-1.5 text-[14px] text-orange-600 font-medium"><Icon name="handshake" className="text-[16px]" /><span className="">Driver handshake required</span></div></div><div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[14px]"><span className="text-rose-600 font-bold">3 Wait Rider</span><span className="text-slate-300">•</span><span className="text-slate-700 font-semibold">3 Packing</span></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 flex flex-col justify-between"><div className="flex items-center justify-between pb-3"><span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Escrow In-Transit</span><div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center"><Icon name="lock" className="text-[18px]" /></div></div><div className="space-y-1.5"><div className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">UGX 14,850,000</div><div className="flex items-center gap-1.5 text-[14px] text-emerald-700 font-semibold"><Icon name="shield" className="text-[16px]" /><span className="">SwiftCart Custody Safe</span></div></div><div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[14px] text-slate-600"><span className="">Release Mechanism</span><span className="font-mono font-bold text-slate-900">Blind 6-Digit OTP</span></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 flex flex-col justify-between"><div className="flex items-center justify-between pb-3"><span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Store Rating &amp; SLA</span><div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><Icon name="stars" className="text-[18px]" /></div></div><div className="space-y-1.5"><div className="flex items-center gap-2"><span className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">4.9</span><div className="flex text-amber-500"><Icon name="star" className="text-[18px]" /><Icon name="star" className="text-[18px]" /><Icon name="star" className="text-[18px]" /><Icon name="star" className="text-[18px]" /><Icon name="star" className="text-[18px]" /></div></div><div className="text-[14px] text-slate-500 font-medium">99.4% On-time Boda SLA</div></div><div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[14px] text-slate-600"><span className="">Dispute Ratio</span><span className="font-bold text-emerald-700">0.4% Low Risk</span></div></div></div>

<div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 shadow-sm">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5 sm:mt-0">
<Icon name="notification_important" className="text-[20px]" />
</div>
<div>
<div className="flex items-center gap-2 flex-wrap">
<h3 className="text-xs sm:text-sm font-bold text-slate-900">2 Orders Need Immediate Courier Staging</h3>
<span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] tracking-wider uppercase animate-pulse">
                Action Window: 8m
              </span>
</div>
<p className="text-xs text-slate-600 mt-0.5">
<strong className="text-slate-800">#SC-ORD-9488</strong> (Space One ANC • Kololo) and
              <strong className="text-slate-800">#SC-ORD-9492</strong> (Anker 65W GaN • Makerere Univ Gate)
            </p>
</div>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary-container hover:bg-orange-600 text-white text-xs font-bold whitespace-nowrap shadow transition-all active:scale-[0.98]" type="button">
<Icon name="sports_motorsports" className="text-[17px]" />
          Assign Vetted SafeBoda Rider
        </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"><div className="lg:col-span-7 space-y-4"><div className="flex items-center justify-between px-1"><div className="flex items-center gap-2.5"><span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span><h2 className="text-[16px] font-bold text-slate-900">Live Fulfillment Queue</h2><span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[12px] font-bold">4 active orders</span></div><a className="text-[14px] font-bold text-primary-container hover:underline flex items-center gap-1" href="#">View All Orders (6)<Icon name="arrow_forward" className="text-[16px]" /></a></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2 flex-wrap"><span className="font-mono font-bold text-[14px] text-slate-900">#SC-ORD-9488</span><span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[12px] font-bold"><Icon name="lock" className="text-[13px]" /> Escrow Locked</span><span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200/60 text-[12px] font-bold">1-Hour Boda</span></div><span className="font-mono font-extrabold text-[16px] text-slate-900 whitespace-nowrap">UGX 248,500</span></div><div className="flex items-center gap-4"><div className="w-13 h-13 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 flex items-center justify-center w-12 h-12"><img className="w-full h-full object-cover" data-alt="SoundCore Space One ANC headphones" src="/images/871d3f3112a454bf.webp" /></div><div className="min-w-0 flex-1"><h3 className="text-[14px] font-bold text-slate-900 truncate whitespace-nowrap">SoundCore Space One ANC (Jet Black)</h3><p className="text-[14px] text-slate-500 truncate">Customer: Dennis Mukasa • Plot 14 Acacia Ave Kololo</p><div className="flex items-center gap-1.5 text-[14px] text-emerald-700 font-semibold mt-1 truncate"><Icon name="two_wheeler" className="text-[16px]" /><span className="truncate">Courier Mukasa Brian en route • ETA 14 mins</span></div></div></div><div className="pt-3 border-t border-slate-100 flex items-center justify-between"><details className="group text-[12px] text-slate-500"><summary className="cursor-pointer hover:text-slate-800 font-semibold flex items-center gap-1 text-[12px] text-primary-container">View staging details<Icon name="expand_more" className="text-[14px] group-open:rotate-180 transition-transform" /></summary><p className="mt-1 text-slate-600">Barcoded &amp; Scanned at G-14 station by Sarah N. (14:22 EAT)</p></details><button className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[14px] font-semibold transition-colors flex items-center gap-1" type="button"><Icon name="location_searching" className="text-[16px]" />Track Rider GPS</button></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2 flex-wrap"><span className="font-mono font-bold text-[14px] text-slate-900">#SC-ORD-9490</span><span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[12px] font-bold"><Icon name="lock" className="text-[13px]" /> Escrow Locked</span><span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[12px] font-bold">Acacia Hub Locker</span></div><span className="font-mono font-extrabold text-[16px] text-slate-900 whitespace-nowrap">UGX 280,000</span></div><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 flex items-center justify-center"><img className="w-full h-full object-cover" data-alt="SoundCore Liberty 4 NC Earbuds" src="/images/d0be807754802e6f.webp" /></div><div className="min-w-0 flex-1"><h3 className="text-[14px] font-bold text-slate-900 truncate whitespace-nowrap">Liberty 4 NC Earbuds (Pearl White)</h3><p className="text-[14px] text-slate-500 truncate">Customer: Patricia K. • Acacia Mall Locker Compartment #4B</p><div className="flex items-center gap-1.5 text-[14px] text-slate-600 font-medium mt-1"><Icon name="inventory_2" className="text-[16px] text-orange-500" /><span className="">Packed, Bagged &amp; Barcoded</span></div></div></div><div className="pt-3 border-t border-slate-100 flex items-center justify-between"><details className="group text-[12px] text-slate-500"><summary className="cursor-pointer hover:text-slate-800 font-semibold flex items-center gap-1 text-[12px] text-primary-container">View details<Icon name="expand_more" className="text-[14px] group-open:rotate-180 transition-transform" /></summary><p className="mt-1 text-slate-600">Ready in staging shelf #2. Awaiting driver arrival OTP handshake.</p></details><button className="px-4 py-2 rounded-xl bg-primary-container hover:bg-orange-600 text-white text-[14px] font-bold shadow-sm flex items-center gap-1.5 transition-all active:scale-[0.98]" type="button"><Icon name="pin" className="text-[16px]" />Handover OTP</button></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2 flex-wrap"><span className="font-mono font-bold text-[14px] text-slate-900">#SC-ORD-9491</span><span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[12px] font-bold"><Icon name="lock" className="text-[13px]" /> Escrow Locked</span><span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[12px] font-semibold">Standard Delivery</span></div><span className="font-mono font-extrabold text-[16px] text-slate-900 whitespace-nowrap">UGX 315,000</span></div><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100 flex items-center justify-center"><img className="w-full h-full object-cover" data-alt="SoundCore Motion plus 30W speaker" src="/images/f0ac44b04a782744.webp" /></div><div className="min-w-0 flex-1"><h3 className="text-[14px] font-bold text-slate-900 truncate whitespace-nowrap">Motion+ 30W Hi-Res Speaker</h3><p className="text-[14px] text-slate-500 truncate">Customer: David O. • Ntinda Ministers' Village</p><div className="flex items-center gap-1.5 text-[14px] text-orange-600 font-semibold mt-1"><Icon name="schedule" className="text-[16px]" /><span className="">New Order received 9 mins ago</span></div></div></div><div className="pt-3 border-t border-slate-100 flex items-center justify-between"><span className="text-[14px] text-slate-500">Step 1: Item staging required</span><button className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[14px] font-semibold flex items-center gap-1.5 transition-colors" type="button"><Icon name="print" className="text-[16px]" />Print Shipping Tag</button></div></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3.5"><div className="flex items-center justify-between"><div className="flex items-center gap-2 flex-wrap"><span className="font-mono font-bold text-[14px] text-slate-900">#SC-ORD-9493</span><span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[12px] font-bold"><Icon name="lock" className="text-[13px]" /> Escrow Locked</span><span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[12px] font-bold">Line-Haul Express</span></div><span className="font-mono font-extrabold text-[16px] text-slate-900 whitespace-nowrap">UGX 185,000</span></div><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center flex-shrink-0 text-slate-500"><Icon name="headphones" className="text-[24px]" /></div><div className="min-w-0 flex-1"><h3 className="text-[14px] font-bold text-slate-900 truncate whitespace-nowrap">Life Q30 Hybrid ANC Over-Ear</h3><p className="text-[14px] text-slate-500 truncate">Customer: Grace A. • Entebbe Golf Club Junction</p><div className="flex items-center gap-1.5 text-[14px] text-slate-600 font-medium mt-1"><Icon name="local_shipping" className="text-[16px] text-emerald-600" /><span className="">Dispatched on Entebbe Road Corridor</span></div></div></div><div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[14px]"><span className="font-mono text-[12px] text-slate-500">VAN-TRK-7729</span><span className="text-emerald-700 font-bold text-[14px]">In-Transit via Expressway</span></div></div></div><div className="lg:col-span-5 space-y-5"><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="moped" className="text-orange-600 text-[20px]" /><h3 className="text-[16px] font-bold text-slate-900">Assigned Couriers</h3></div><span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold border border-emerald-200">3 Active</span></div><div className="space-y-3"><div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 font-bold text-[14px] flex items-center justify-center flex-shrink-0">MB</div><div className="min-w-0"><div className="text-[14px] font-bold text-slate-900 truncate">Mukasa Brian</div><div className="text-[12px] text-slate-500 truncate">Bajaj Boxer <span className="font-mono font-semibold text-slate-700">UEF 842X</span></div></div></div><div className="text-right flex-shrink-0"><span className="inline-block px-2.5 py-0.5 rounded bg-orange-100 text-orange-800 text-[12px] font-bold">Delivering</span><div className="text-[12px] text-slate-500 mt-0.5 font-medium">14m away</div></div></div><div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[14px] flex items-center justify-center flex-shrink-0">SJ</div><div className="min-w-0"><div className="text-[14px] font-bold text-slate-900 truncate">Ssewankambo John</div><div className="text-[12px] text-slate-500 truncate">Pioneer Mall Stage-01</div></div></div><div className="text-right flex-shrink-0"><span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[12px] font-bold">Idle &amp; Ready</span><div className="text-[12px] text-slate-500 mt-0.5 font-medium">0m (On-site)</div></div></div><div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[14px] flex items-center justify-center flex-shrink-0">KR</div><div className="min-w-0"><div className="text-[14px] font-bold text-slate-900 truncate">Kato Ronald</div><div className="text-[12px] text-slate-500 truncate">William St Central Hub</div></div></div><div className="text-right flex-shrink-0"><span className="inline-block px-2.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[12px] font-semibold">Staging parcel</span><div className="text-[12px] text-slate-500 mt-0.5 font-medium">Hub Bay 2</div></div></div></div><button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors" type="button"><Icon name="call" className="text-[18px]" />Ping Pioneer Boda Marshall</button></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Icon name="warning" className="text-rose-600 text-[20px]" /><h3 className="text-[16px] font-bold text-slate-900">Low Stock Warnings</h3></div><span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[12px] font-bold border border-rose-200">2 SKUs Critical</span></div><div className="space-y-3.5"><div className="space-y-1.5"><div className="flex items-center justify-between text-[14px]"><span className="font-bold text-slate-800 truncate">SoundCore Space One (Jet Black)</span><span className="text-primary-container font-extrabold flex-shrink-0">4 units left</span></div><div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{"width":"20%"}}></div></div><div className="flex items-center justify-between text-[12px] text-slate-400"><span className="">Safe reorder threshold: 12 units</span><span className="font-mono">SKU-SC-SO-BLK</span></div></div><div className="space-y-1.5"><div className="flex items-center justify-between text-[14px]"><span className="font-bold text-slate-800 truncate">Anker 65W GaN Dual Wall Charger</span><span className="text-rose-600 font-extrabold flex-shrink-0">2 units left</span></div><div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-rose-600 rounded-full" style={{"width":"10%"}}></div></div><div className="flex items-center justify-between text-[12px] text-slate-400"><span className="">Safe reorder threshold: 15 units</span><span className="font-mono">SKU-ANK-65W-WHT</span></div></div></div><button className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-[14px] font-bold flex items-center justify-center gap-2 transition-colors" type="button"><Icon name="inventory" className="text-[18px] text-slate-600" />Update Stock &amp; Inventory</button></div><div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-200"><Icon name="account_balance_wallet" className="text-[20px]" /></div><div><span className="text-[12px] font-bold uppercase tracking-wider text-slate-400 block">Instant Settlement</span><span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold">Auto-cleared</span></div></div></div><div className="space-y-1"><div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">UGX 6,240,000</div><div className="text-[14px] text-slate-600 flex items-center gap-1.5"><span className="">Payout Account:</span><span className="font-semibold text-slate-800 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>MTN MoMo +256 772 ••• 456</span></div></div><button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-container hover:bg-orange-600 text-white font-bold text-[14px] uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98]" type="button"><Icon name="currency_exchange" className="text-[20px]" />Instant Withdraw</button></div></div></div>


</div>
</main>
<footer className="w-full bg-white border-t border-slate-200 py-3.5 mt-6">
<div className="max-w-[834px] lg:max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
<div className="flex items-center gap-2.5 flex-wrap">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="">Latency: 28ms</span>
</div>
<span className="">•</span>
<span className="">William St Central Hub: 99.8% Online</span>
<span className="">•</span>
<span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">Bank of Uganda Escrow Regulated</span>
</div>
<div>
<span className="">© 2024 SwiftCart Uganda Ltd. Pioneer Mall Terminal.</span>
</div>
</div>
</footer>
    </div>
  );
};

export default Tablet;
