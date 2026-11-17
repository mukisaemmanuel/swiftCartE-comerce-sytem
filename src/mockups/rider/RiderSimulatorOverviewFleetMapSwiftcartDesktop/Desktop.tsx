// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/desktop/rider/rider_simulator_overview_fleet_map_swiftcart_desktop/code.html
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
      
      <div className="pl-0"><main className="w-full pt-16 bg-surface-dark min-h-screen"><div className="flex flex-col w-full">

<div className="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex items-center justify-between text-on-surface shadow-sm">
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-emerald-escrow/10 text-emerald-escrow font-label-sm uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-emerald-escrow animate-ping"></span>
        Socket Live Stream: Connected
      </span>
<span className="text-on-surface-variant font-label-sm">Session ID: <span className="font-code-display text-[11px] text-primary-fixed-dim">WSS-EAT-KLA-9418</span></span>
<span className="text-on-surface-variant text-body-sm font-body-sm">|</span>
<span className="text-on-surface-variant font-body-sm">William St Central Corridor • Stage 04 Gate</span>
</div>
<div className="flex items-center gap-space-lg">
<div className="flex items-center gap-space-sm text-label-sm font-label-sm text-on-surface-variant">
<span>Mock Telemetry Jitter:</span>
<span className="text-tertiary font-code-display text-[11px]">Active (Gaussian ±1.4m)</span>
</div>
<button className="px-space-md py-1 bg-surface-container-high hover:bg-surface-bright rounded text-on-surface font-label-sm transition-colors flex items-center gap-1.5" id="toggle-sim-mode">
<Icon name="sync_saved_locally" className="text-[14px] text-action-gradient-start" />
        Hot Reload Session
      </button>
</div>
</div>

<div className="w-full p-gutter-desktop grid grid-cols-12 gap-gutter-desktop items-start">

<div className="col-span-12 xl:col-span-3 flex flex-col gap-space-lg">

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<Icon name="devices" className="text-action-gradient-start text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Target Device Rig</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary-fixed bg-tertiary-container/30 px-space-sm py-0.5 rounded">Emulated</span>
</div>
<div className="grid grid-cols-2 gap-space-xs p-1 bg-surface-container-lowest rounded-lg">
<button className="py-space-xs text-center rounded font-label-sm text-label-sm bg-surface-container-high text-on-surface font-semibold shadow-inner" id="btn-device-android">
            Tecno Camon 20
          </button>
<button className="py-space-xs text-center rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" id="btn-device-pixel">
            Pixel 8 Pro
          </button>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Network Profile</label>
<div className="grid grid-cols-3 gap-space-xs">
<button className="flex flex-col items-center justify-center p-space-sm rounded bg-primary-container text-on-primary-container shadow-sm">
<Icon name="signal_cellular_4_bar" className="text-[18px]" />
<span className="font-label-sm text-label-sm mt-1">MTN 4G</span>
</button>
<button className="flex flex-col items-center justify-center p-space-sm rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
<Icon name="signal_cellular_alt_2_bar" className="text-[18px]" />
<span className="font-label-sm text-label-sm mt-1">3G Spotty</span>
</button>
<button className="flex flex-col items-center justify-center p-space-sm rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
<Icon name="cloud_off" className="text-[18px]" />
<span className="font-label-sm text-label-sm mt-1">Edge 2G</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-md pt-space-xs">
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Battery Emulation</span>
<span className="text-tertiary font-code-display text-[11px]" id="battery-disp">92% (Fast Discharging)</span>
</div>
<input className="w-full accent-action-gradient-start h-1.5 bg-surface-container-highest rounded-lg cursor-pointer" id="slider-battery" max="100" min="5" type="range" value="92" />
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Base GPS Latency</span>
<span className="text-on-surface font-code-display text-[11px]">140 ms</span>
</div>
<input className="w-full accent-primary-fixed-dim h-1.5 bg-surface-container-highest rounded-lg cursor-pointer" max="600" min="30" type="range" value="140" />
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Hardware Sensor Feeds</span>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface flex items-center gap-1.5">
<Icon name="sensors" className="text-emerald-escrow text-[16px]" /> Gyro Horizon
            </span>
<span className="text-tertiary-fixed font-code-display text-[11px]">+3.2° Pitch</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface flex items-center gap-1.5">
<Icon name="thermostat" className="text-amber-warning text-[16px]" /> Battery Temp
            </span>
<span className="text-amber-warning font-code-display text-[11px]">38.4°C</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface flex items-center gap-1.5">
<Icon name="lock" className="text-tertiary text-[16px]" /> Lockbox BX-04-209
            </span>
<span className="text-emerald-escrow font-label-sm font-bold">SECURED</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<Icon name="admin_panel_settings" className="text-danger-penalty text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Dispatcher Interventions</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Live override controls immediately inject operational commands into Brian Kizito's active handset instance.
        </p>
<div className="flex flex-col gap-space-sm">
<button className="w-full h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center justify-between transition-transform active:scale-98" id="btn-reroute">
<span className="flex items-center gap-2">
<Icon name="alt_route" className="text-action-gradient-start text-[18px]" />
              Trigger Corridor Reroute
            </span>
<Icon name="send" className="text-[16px] text-on-surface-variant" />
</button>
<button className="w-full h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center justify-between transition-transform active:scale-98" id="btn-audio-ping">
<span className="flex items-center gap-2">
<Icon name="volume_up" className="text-amber-warning text-[18px]" />
              Send Haptic Urgent Alert
            </span>
<Icon name="notifications_active" className="text-[16px] text-on-surface-variant" />
</button>
<button className="w-full h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center justify-between transition-transform active:scale-98" id="btn-freeze-payment">
<span className="flex items-center gap-2">
<Icon name="lock_clock" className="text-emerald-escrow text-[18px]" />
              Hold Payment Release
            </span>
<span className="font-label-sm text-[10px] text-tertiary-fixed font-bold">LOCKED</span>
</button>
<button className="w-full h-10 px-space-md rounded-lg bg-danger-penalty/15 hover:bg-danger-penalty/25 text-danger-penalty font-label-md text-label-md flex items-center justify-between transition-transform active:scale-98" id="btn-cut-network">
<span className="flex items-center gap-2">
<Icon name="wifi_off" className="text-[18px]" />
              Simulate Dropped Signal
            </span>
<Icon name="signal_disconnected" className="text-[16px]" />
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-mtn-yellow flex items-center justify-center font-black text-surface-dark font-headline-sm text-[12px]">M</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">MTN MoMo API Uganda</span>
<span className="text-tertiary font-code-display text-[10px]">Ping: 22ms • 99.98% SLA</span>
</div>
</div>
<Icon name="check_circle" className="text-emerald-escrow text-[20px]" />
</div>
</div>

<div className="col-span-12 xl:col-span-4 flex flex-col items-center">

<div className="relative w-[390px] h-[812px] bg-surface-dark rounded-[50px] shadow-[0_12px_45px_rgba(0,0,0,0.85)] p-3 overflow-hidden flex flex-col">

<div className="relative w-full h-full bg-surface-dark rounded-[40px] overflow-hidden flex flex-col">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-surface-container-lowest rounded-full z-50 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-surface-dark"></div>
</div>

<div className="w-full h-11 pt-2 px-6 flex items-center justify-between text-on-surface z-40 bg-surface-dark/80 backdrop-blur-sm">
<span className="font-headline-sm text-[13px] font-bold tracking-tight">14:38</span>
<div className="flex items-center gap-2">
<Icon name="signal_cellular_4_bar" className="text-[14px]" />
<span className="font-label-sm text-[11px] font-bold text-mtn-yellow">MTN 4G</span>
<div className="flex items-center gap-0.5">
<span className="font-label-sm text-[11px]" id="phone-battery-level">92%</span>
<Icon name="battery_full" className="text-[16px] text-tertiary" />
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-3 pb-20">

<div className="bg-container-dark-low rounded-2xl p-3 shadow-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of Brian Kizito, an energetic Ugandan professional boda boda driver wearing a matte black certified helmet with yellow trim in bright Kampala afternoon sunlight" src="/images/e3acc1879a0575e6.webp" />
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-escrow rounded-full"></div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-extrabold">Brian Kizito</span>
<span className="px-1.5 py-0.5 rounded bg-mtn-yellow/20 text-mtn-yellow font-label-sm text-[9px] font-bold uppercase">Gold Rider</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[11px]">SafeBoda #RC-8821 • Bajaj UEF 842X</span>
<div className="flex items-center gap-1 mt-0.5">
<Icon name="star" className="text-mtn-yellow text-[13px]" />
<span className="font-label-sm text-label-sm text-on-surface font-bold">4.96</span>
<span className="text-on-surface-variant text-[10px]">(1,420 trips)</span>
</div>
</div>
</div>

<div className="flex flex-col items-end gap-1">
<button className="relative w-12 h-6 rounded-full bg-emerald-escrow p-0.5 flex items-center transition-colors">
<div className="w-5 h-5 rounded-full bg-surface-dark shadow-md ml-auto flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
</button>
<span className="text-[9px] font-bold text-tertiary-fixed tracking-wide uppercase">ONLINE</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">Today's Runs</span>
<span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">14<span className="text-on-surface-variant text-body-sm font-normal">/18</span></span>
<span className="text-[10px] text-tertiary-fixed font-semibold mt-0.5">77% Target</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">Net Earnings</span>
<span className="font-label-lg text-label-lg text-mtn-yellow mt-0.5 font-bold">78,500</span>
<span className="text-[10px] text-on-surface-variant whitespace-nowrap">UGX MoMo</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">On-Time SLA</span>
<span className="font-headline-sm text-headline-sm text-emerald-escrow mt-0.5 font-bold">98.4%</span>
<span className="text-[10px] text-tertiary-fixed font-semibold mt-0.5">Corridor Max</span>
</div>
</div>

<div className="bg-container-dark-high rounded-2xl p-3.5 shadow-lg flex flex-col gap-3 relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-action-gradient-start/10 rounded-full blur-xl pointer-events-none"></div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-action-gradient-end text-on-primary font-code-display text-[10px] font-bold tracking-wider">
                    TASK-KLA-941
                  </span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-escrow/15 text-emerald-escrow font-label-sm text-[9px] font-bold">
<Icon name="verified_user" className="text-[11px]" />
                    PAYMENT UGX 180k
                  </span>
</div>
<span className="text-action-gradient-start font-label-sm text-label-sm font-bold animate-pulse">PICKUP PHASE</span>
</div>

<div className="flex flex-col gap-2.5 relative pl-5">
<div className="absolute left-1.5 top-2 bottom-3 w-0.5 bg-surface-container-highest"></div>

<div className="relative">
<div className="absolute -left-5 top-0.5 w-3 h-3 rounded-full bg-action-gradient-start shadow-sm"></div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">Source Hub</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Kampala Central Phone Hub #04</span>
<span className="text-[11px] text-on-surface-variant">William St Corridor, Shelf B-12 • 1 Parcel</span>
</div>
</div>

<div className="relative pt-1">
<div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-tertiary shadow-sm"></div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">Buyer Destination</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Kololo Terrace, Flat 4B</span>
<span className="text-[11px] text-on-surface-variant">Buyer: Sarah K. (07•• ••• 418) • OTP Required</span>
</div>
</div>
</div>

<div className="bg-surface-dark/70 rounded-xl px-3 py-2 flex items-center justify-between text-body-sm">
<div className="flex items-center gap-1.5 text-on-surface">
<Icon name="navigation" className="text-action-gradient-start text-[16px]" />
<span className="font-label-sm font-bold">2.4 km</span>
<span className="text-on-surface-variant text-[11px]">(via Kampala Rd)</span>
</div>
<div className="flex items-center gap-1 text-tertiary-fixed font-label-sm font-bold">
<Icon name="schedule" className="text-[16px]" />
<span>14 mins est.</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-1">
<button className="w-full h-11 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary font-label-md text-label-md font-bold shadow-[0_4px_18px_rgba(218,55,0,0.35)] flex items-center justify-center gap-2 transition-transform active:scale-98">
<Icon name="turn_sharp_right" className="text-[18px]" />
                  Open Turn-by-Turn GPS Map
                </button>
<div className="grid grid-cols-2 gap-2">
<button className="h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1.5">
<Icon name="call" className="text-[16px] text-emerald-escrow" />
                    Call Masked Buyer
                  </button>
<button className="h-9 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-1.5">
<Icon name="pin" className="text-[16px] text-mtn-yellow" />
                    Verify Blind OTP
                  </button>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">Upcoming Corridor Queue (2)</span>
<span className="text-tertiary font-label-sm text-[10px]">Auto-Batched</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface font-label-sm font-bold">#2</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Nakasero Hill Rd #19</span>
<span className="text-[10px] text-on-surface-variant">Uganda Pharma Supply • 1.1 km away</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-mtn-yellow font-bold whitespace-nowrap">UGX 9,000 Fee</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface font-label-sm font-bold">#3</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Yusuf Lule Rd (Garden City)</span>
<span className="text-[10px] text-on-surface-variant">Electronics Pack • 2.8 km away</span>
</div>
</div>
<span className="font-label-sm text-[10px] text-mtn-yellow font-bold whitespace-nowrap">UGX 12,500 Fee</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-surface-container-low/95 backdrop-blur-md px-4 flex items-center justify-between z-40">
<button className="flex flex-col items-center gap-0.5 text-action-gradient-start">
<Icon name="dashboard" className="text-[20px]" />
<span className="font-label-sm text-[9px] font-bold">Overview</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-on-surface-variant hover:text-on-surface">
<Icon name="local_shipping" className="text-[20px]" />
<span className="font-label-sm text-[9px]">Deliveries</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-on-surface-variant hover:text-on-surface">
<Icon name="map" className="text-[20px]" />
<span className="font-label-sm text-[9px]">Corridor</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-on-surface-variant hover:text-on-surface">
<Icon name="account_balance_wallet" className="text-[20px]" />
<span className="font-label-sm text-[9px]">Earnings</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-on-surface-variant hover:text-on-surface">
<Icon name="support_agent" className="text-[20px]" />
<span className="font-label-sm text-[9px]">Support</span>
</button>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-surface-container-highest rounded-full z-50"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-space-md text-center">
        SwiftCart Driver Native Client • Flutter Web Canvas (390 x 812 dp)
      </span>
</div>

<div className="col-span-12 xl:col-span-5 flex flex-col gap-space-lg">

<div className="bg-container-dark-low rounded-xl overflow-hidden shadow-md flex flex-col">
<div className="p-space-md flex items-center justify-between bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<Icon name="radar" className="text-action-gradient-start text-[20px]" />
<div>
<span className="font-label-lg text-label-lg text-on-surface block leading-tight">Kampala Corridor GPS Telemetry</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">William St → Kampala Rd → Yusuf Lule → Kololo</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-tertiary-container/40 text-tertiary-fixed font-code-display text-[11px] font-bold">
              34 km/h • NE 42°
            </span>
</div>
</div>

<div className="relative w-full h-72 bg-surface-dark overflow-hidden">

<div className="w-full h-full bg-cover bg-center opacity-85" data-location="Kampala Central, William Street, Uganda" style={{"backgroundImage":"url('/images/131a1d2c0029685e.webp')"}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 520 288">

<path className="opacity-75" d="M 60 210 Q 140 180, 210 160 T 340 120 T 450 60" stroke="#FF8A1F" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="4"></path>

<path d="M 60 210 Q 140 180, 210 160" stroke="#4edea3" strokeLinecap="round" strokeWidth="4"></path>

<circle cx="60" cy="210" fill="#080D1F" r="7" stroke="#FF8A1F" strokeWidth="3"></circle>
<text fill="#e5beb4" font-family="Plus Jakarta Sans" font-size="11" font-weight="700" x="65" y="235">Depot #04</text>

<g transform="translate(210, 160)">
<circle className="animate-ping" cx="0" cy="0" fill="#FF8A1F" fillOpacity="0.25" r="14"></circle>
<circle cx="0" cy="0" fill="#DA3700" r="8"></circle>
<polygon fill="#ffffff" points="0,-4 3,4 -3,4" transform="rotate(42)"></polygon>
</g>
<text fill="#ffffff" font-family="Plus Jakarta Sans" font-size="11" font-weight="800" x="225" y="155">Brian Kizito (UEF 842X)</text>

<circle cx="450" cy="60" fill="#080D1F" r="7" stroke="#4edea3" strokeWidth="3"></circle>
<text fill="#4edea3" font-family="Plus Jakarta Sans" font-size="11" font-weight="700" x="410" y="45">Kololo Flat 4B</text>
</svg>

<div className="absolute top-3 right-3 bg-surface-dark/90 backdrop-blur-md rounded-lg p-2 shadow-lg flex flex-col gap-1 w-36">
<div className="flex items-center justify-between text-[10px] font-bold text-on-surface">
<span className="flex items-center gap-1 text-danger-penalty">
<span className="w-2 h-2 rounded-full bg-danger-penalty animate-pulse"></span> REC
              </span>
<span className="text-on-surface-variant font-code-display text-[9px]">1080p</span>
</div>
<div className="w-full h-16 bg-surface-container rounded overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="First-person motorcycle handlebar helmet view speeding along sunlit Kampala road with asphalt and distant acacia trees in Uganda" src="/images/e74b97536d1d4bf9.webp" />
<div className="absolute bottom-1 left-1 bg-surface-dark/80 px-1 rounded text-[9px] text-tertiary font-code-display">Cam #01</div>
</div>
</div>

<div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg p-2 flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-sm text-on-surface">
<Icon name="pin_drop" className="text-action-gradient-start text-[16px]" />
<span className="font-code-display text-[11px]">0.3174° N, 32.5825° E</span>
</div>
<div className="flex items-center gap-3 text-label-sm font-label-sm">
<span className="text-tertiary-fixed font-bold">Lockbox Tamper: SECURE</span>
<span className="text-on-surface-variant font-body-sm text-[11px]">• PSV Validated</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 p-space-md gap-space-sm bg-container-dark-low">
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">Corridor Pace</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">34 km/h</span>
<span className="text-tertiary-fixed text-[10px] font-semibold">Clear Traffic</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">ETA Window</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">14:52 EAT</span>
<span className="text-tertiary text-[10px] font-semibold">On Schedule</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">Fuel Reserve</span>
<span className="font-label-lg text-label-lg text-mtn-yellow font-bold">6.8 L</span>
<span className="text-on-surface-variant text-[10px]">~140 km range</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-sm text-[10px] uppercase">Stage Proximity</span>
<span className="font-label-lg text-label-lg text-tertiary-fixed font-bold">Stage 08</span>
<span className="text-on-surface-variant text-[10px]">350m ahead</span>
</div>
</div>
</div>

<div className="bg-container-dark-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<Icon name="terminal" className="text-action-gradient-start text-[20px]" />
<span className="font-label-lg text-label-lg text-on-surface">Dispatcher WebSocket Trace</span>
</div>
<div className="flex items-center gap-2">
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-[11px] underline" id="btn-clear-log">Clear</button>
<span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
</div>
</div>
<div className="w-full h-52 bg-surface-container-lowest rounded-lg p-space-md overflow-y-auto flex flex-col gap-1.5 font-code-display text-[11px]" id="event-log-container">
<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-primary font-bold">14:38:12</span>
<span className="text-on-surface">[WS_PING] Device heartbeat ACK - latency: 138ms</span>
</div>
<div className="flex items-start gap-2 text-tertiary-fixed">
<span className="text-primary font-bold">14:38:18</span>
<span>[GPS_COORDS] Lat 0.31742 Long 32.58251 • Heading 42° • Vel 9.4 m/s</span>
</div>
<div className="flex items-start gap-2 text-mtn-yellow">
<span className="text-primary font-bold">14:38:22</span>
<span>[STAGE_PROX] Boda rider approaching SafeBoda Stage #08 (Garden City Gate)</span>
</div>
<div className="flex items-start gap-2 text-emerald-escrow">
<span className="text-primary font-bold">14:38:29</span>
<span className="whitespace-nowrap">[ESCROW_VERIFY] UGX 180,000 locked in MTN MoMo nodal holding #ESC-9418</span>
</div>
<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-primary font-bold">14:38:34</span>
<span className="text-on-surface">[TAMPER_POLL] Lockbox #BX-04-209 reed switch integrity: HIGH</span>
</div>
<div className="flex items-start gap-2 text-tertiary">
<span className="text-primary font-bold">14:38:40</span>
<span>[CLIENT_EVENT] Screen rendered: Overview &amp; Turn-by-Turn prompt ready</span>
</div>
</div>

<div className="flex items-center gap-space-sm pt-space-xs">
<span className="font-code-display text-action-gradient-start text-[12px] font-bold">&gt;</span>
<input className="flex-1 bg-surface-container-lowest px-space-md py-1.5 rounded text-on-surface font-code-display text-[11px] placeholder:text-on-surface-variant/50 focus:outline-none" id="cmd-input" placeholder="Inject simulator event (e.g., 'TRIGGER_TRAFFIC_JAM', 'PING_OFFLINE')..." type="text" />
<button className="px-space-md py-1.5 bg-surface-container-high hover:bg-surface-bright rounded text-on-surface font-label-sm text-label-sm" id="cmd-send">
            Push
          </button>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
};

export default Desktop;
