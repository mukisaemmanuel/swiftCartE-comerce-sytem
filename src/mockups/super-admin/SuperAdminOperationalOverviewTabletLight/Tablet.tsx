// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/super-admin/super_admin_operational_overview_tablet_light/code.html
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
      
      <div className="pl-64"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="px-space-lg py-space-md flex flex-col gap-space-md">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-1">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">Live Telemetry</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Kampala Metro Command Grid</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<Icon name="sync" className="text-[14px] text-tertiary" />
          Auto-sync 3s
        </span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
<Icon name="schedule" className="text-[16px] text-secondary" />
<span>EAT Timezone: 14:38:12</span>
</div>
<div className="flex items-center gap-2 pl-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md font-bold shadow-sm">
            PN
          </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Denis Mukasa</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Super Admin Level 4</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">24h Platform GMV</span>
<Icon name="payments" className="text-[18px] text-primary" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-primary whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface tracking-tight">148,250,000</span>
</div>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<Icon name="trending_up" className="text-[14px]" />
<span>+14.2% vs yesterday</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary/5 rounded-full blur-xl group-hover:bg-tertiary/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment Reserve Balance</span>
<Icon name="shield_lock" className="text-[18px] text-tertiary" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-1">
<span className="font-currency-code text-currency-code text-tertiary whitespace-nowrap">UGX</span>
<span className="font-price-display text-price-display text-on-surface tracking-tight">842,600,000</span>
</div>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>100% Cashless MTN/Airtel Rails</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Fleet on Road</span>
<Icon name="two_wheeler" className="text-[18px] text-secondary" />
</div>
<div className="my-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-price-display text-price-display text-on-surface tracking-tight">142</span>
<span className="font-label-md text-label-md text-on-surface-variant">SafeBoda Couriers</span>
</div>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<Icon name="verified" className="text-[14px]" />
<span>98.6% On-Time SLA</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary/5 rounded-full blur-xl group-hover:bg-tertiary/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Hub Node Status</span>
<Icon name="hub" className="text-[18px] text-tertiary" />
</div>
<div className="my-space-xs">
<div className="flex items-center gap-1.5">
<span className="font-price-display text-price-display text-on-surface tracking-tight">6 / 6</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Online</span>
</div>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant truncate">
          Nakasero, Ntinda, Kikuubo, Bugolobi+
        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Live Corridor Telemetry &amp; Volume Velocity</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Real-time dispatch flux across urban Kampala sectors</span>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
<span>Today (EAT)</span>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Hourly Order Volume Trajectory</span>
<span className="font-bold text-primary">Peak: 13:00 (1,480 pkgs/hr)</span>
</div>
<div className="h-28 w-full flex items-end">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 460 100">
<defs>
<linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#da3700" stopOpacity="0.9"></stop>
<stop offset="100%" stopColor="#da3700" stopOpacity="0.2"></stop>
</linearGradient>
<linearGradient id="peakGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#00855b" stopOpacity="0.9"></stop>
<stop offset="100%" stopColor="#00855b" stopOpacity="0.3"></stop>
</linearGradient>
</defs>

<line stroke="#e8e1dc" strokeWidth="1" x1="0" x2="460" y1="92" y2="92"></line>

 <rect fill="url(#barGrad)" height="27" rx="3" width="22" x="15" y="65"></rect>
 <rect fill="url(#barGrad)" height="40" rx="3" width="22" x="52" y="52"></rect>
 <rect fill="url(#barGrad)" height="48" rx="3" width="22" x="89" y="44"></rect>
 <rect fill="url(#barGrad)" height="60" rx="3" width="22" x="126" y="32"></rect>
 <rect fill="url(#barGrad)" height="68" rx="3" width="22" x="163" y="24"></rect>
 <rect fill="url(#peakGrad)" height="84" rx="3" width="22" x="200" y="8"></rect>
 <rect fill="url(#barGrad)" height="54" rx="3" width="22" x="237" y="38"></rect>
 <rect fill="url(#barGrad)" height="50" rx="3" width="22" x="274" y="42"></rect>
 <rect fill="url(#barGrad)" height="64" rx="3" width="22" x="311" y="28"></rect>
 <rect fill="url(#peakGrad)" height="78" rx="3" width="22" x="348" y="14"></rect>
 <rect fill="url(#barGrad)" height="56" rx="3" width="22" x="385" y="36"></rect>
 <rect fill="url(#barGrad)" height="34" rx="3" width="22" x="422" y="58"></rect>
</svg>
</div>
<div className="flex justify-between text-on-surface-variant font-label-sm text-label-sm px-1">
<span>08:00</span>
<span>10:00</span>
<span className="font-bold text-tertiary">13:00 EAT</span>
<span>15:00</span>
<span className="font-bold text-tertiary">17:00 EAT</span>
<span>19:00</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">Real-time Corridor Distribution</span>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-1">

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Kampala Central</span>
<span className="font-label-md text-label-md text-primary font-bold">44%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"44%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kikuubo / Nakasero</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Nakawa</span>
<span className="font-label-md text-label-md text-secondary font-bold">26%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"26%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ntinda / Bugolobi</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Kawempe</span>
<span className="font-label-md text-label-md text-on-surface font-bold">18%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-on-surface-variant h-full rounded-full" style={{"width":"18%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wandegeya / Bwaise</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Makindye</span>
<span className="font-label-md text-label-md text-on-surface font-bold">12%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style={{"width":"12%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kabalagala / Ggaba</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
<span className="font-label-lg text-label-lg text-on-surface">Critical Exceptions &amp; Escalation Queue</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">3 Pending Clearance</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline">Batch Process</button>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm min-w-0">
<div className="p-2 rounded-lg bg-error-container text-on-error-container mt-0.5 shrink-0">
<Icon name="lock_reset" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Order #SC-9488</span>
<span className="px-1.5 py-0.2 rounded bg-error-container text-on-error-container font-label-sm text-label-sm">Tamper Lockout</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Acacia Mall Hub Point</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    3 consecutive failed PIN attempts at courier locker. Cashless payment on automated hold.
                  </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-dim transition-all">
                  Dispatch Review
                </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-[0_4px_14px_rgba(218,55,0,0.25)] hover:scale-[0.98] transition-all">
                  Override Lock
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm min-w-0">
<div className="p-2 rounded-lg bg-primary-fixed text-on-primary-fixed mt-0.5 shrink-0">
<Icon name="inventory_2" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Discrepancy #RT-309</span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Seal Sliced</span>
<span className="font-label-sm text-label-sm text-on-surface">Victoria Tech Supplies</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    package seal severed during line check. Non-OEM auxiliary cables detected in batch.
                  </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint shadow-sm transition-all">
                  Open Docket
                </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm min-w-0">
<div className="p-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed mt-0.5 shrink-0">
<Icon name="local_shipping" className="text-[20px]" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-md text-label-md text-on-surface font-bold">Line-Haul Transfer Alert</span>
<span className="px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">18m Delay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Jinja to Kampala Hub</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Heavy congestion at Mabira highway corridor. 42 aggregate bulk parcels affected.
                  </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all">
                  Reroute Couriers
                </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Recent High-Value payment transactions</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">payment settlement executions with dual-auth verification</span>
</div>
<Icon name="verified_user" className="text-[20px] text-tertiary" />
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md rounded-l-lg">Order ID</th>
<th className="py-2.5 px-space-md">Item / Merchant</th>
<th className="py-2.5 px-space-md">Payment Amount</th>
<th className="py-2.5 px-space-md">Rail / Auth</th>
<th className="py-2.5 px-space-md rounded-r-lg text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-label-md text-label-md text-on-surface font-bold">
                    #SC-9971
                  </td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Apple iPad Pro 11" M2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">iStore Uganda Kololo</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 1,800,000</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo (Dual-Auth)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[12px]" />
                      Verified
                    </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-label-md text-label-md text-on-surface font-bold">
                    #SC-9952
                  </td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Dell Type-C Ultra Dock</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Victoria Tech Supplies</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 248,500</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm text-on-surface">Airtel money payment</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
<Icon name="check_circle" className="text-[12px]" />
                      Settled
                    </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-label-md text-label-md text-on-surface font-bold">
                    #SC-9948
                  </td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Sony WH-1000XM5 ANC</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kampala Sound Labs</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold whitespace-nowrap">UGX 1,420,000</span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo (Payment)</span>
</div>
</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
<Icon name="hourglass_top" className="text-[12px]" />
                      In Transit
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="admin_panel_settings" className="text-[20px] text-primary" />
<span className="font-label-lg text-label-lg text-on-surface">Emergency Platform Controls</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase">Auth: Super Admin</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Platform Fee Status</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tier 1 Standard Rate</span>
</div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary">8.5%</span>
<button className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-dim text-on-surface-variant transition-colors" title="Adjust Fee Policy">
<Icon name="tune" className="text-[18px]" />
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Merchant Onboarding Gate</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Manual KYC Review Enforced</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                ACTIVE
              </span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Global Marketplace platform pause</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Halts payment releases &amp; cart checkouts</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">
                  DISENGAGED
                </span>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="w-full py-2 px-space-md rounded-xl bg-surface-container-highest hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all">
<Icon name="power_settings_new" className="text-[16px]" />
                  Arm Emergency Lockdown
                </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Node Infrastructure &amp; Edge Health</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
              All Edge Relays Nominal
            </span>
</div>
<div className="flex flex-col gap-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="router" className="text-[18px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Nakasero Hub Station A</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">142 pkgs in rack • 0 pending sync</span>
</div>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-tertiary font-bold">42ms ping</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<Icon name="router" className="text-[18px] text-tertiary" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Ntinda Transit Node</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">88 pkgs in rack • Synced</span>
</div>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-tertiary font-bold">38ms ping</span>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-2 mt-1">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider">Payment Rails Uptime</span>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="text-on-surface font-semibold">MTN MoMo Gateway</span>
</div>
<span className="font-bold text-tertiary">99.98%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"99.98%"}}></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span>
<span className="text-on-surface font-semibold">Airtel Money API</span>
</div>
<span className="font-bold text-tertiary">99.94%</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"99.94%"}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_2px_8px_rgba(14,27,77,0.04),0_1px_2px_rgba(14,27,77,0.02)] flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Governance Ledger</span>
<Icon name="history_edu" className="text-[18px] text-on-surface-variant" />
</div>
<div className="flex flex-col gap-2">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="key" className="text-[16px] text-tertiary mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Last System Token Refresh</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14 Oct 2024 • Lead Security Architect</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2">
<Icon name="event" className="text-[16px] text-secondary mt-0.5" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Next Scheduled Compliance Audit</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">31 Oct 2024 • Pesapal Sandbox Review</span>
</div>
</div>
</div>
<div className="pt-1 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Signed Hash: <span className="font-mono text-on-surface">7f8c...9a2e</span></span>
<button className="text-primary hover:underline font-bold">Audit reserve</button>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
};

export default Tablet;
