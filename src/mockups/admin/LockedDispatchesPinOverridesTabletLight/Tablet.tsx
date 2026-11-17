// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/admin/locked_dispatches_pin_overrides_tablet_light/code.html
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

      <div className="w-full"><main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">

        <section className="w-full px-space-lg py-space-md">
          <div className="flex flex-col gap-space-md">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-md text-headline-md text-on-surface tracking-tight">Locked Dispatches &amp; Delivery PIN Override Desk</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                    5 Active Lockouts
                  </span>
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">Anti-Fraud Package Lockout &amp; Verified Handover Resolution • Kampala Urban Network</span>
              </div>
              <div className="flex items-center gap-space-xs self-start lg:self-auto">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container shadow-sm">
                  <Icon name="verified" className="text-primary text-[18px]" />
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">Node #UG-HQ-KLA Auth Layer</span>
                  <span className="text-outline text-label-sm">•</span>
                  <span className="font-label-sm text-label-sm text-tertiary font-bold">Denis Mukasa (SA)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm">

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active PIN Lockouts</span>
                  <Icon name="lock_clock" className="text-error text-[20px]" />
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">5</span>
                  <span className="font-label-sm text-label-sm text-error font-bold">Tamper / Mismatch</span>
                </div>
                <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-error h-full rounded-full" style={{ "width": "83%" }}></div>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Time in Lockout</span>
                  <Icon name="timer" className="text-primary text-[20px]" />
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">18m 40s</span>
                  <span className="font-label-sm text-label-sm text-tertiary font-bold">↓ 4m vs target</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">SLA Critical Threshold: 30m</span>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Transit Security</span>
                  <Icon name="shield_locked" className="text-tertiary text-[20px]" />
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-tertiary font-extrabold">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">Payment Vaulted</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">5 of 5 physically secure</span>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Overrides Today</span>
                  <Icon name="fact_check" className="text-secondary text-[20px]" />
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">12</span>
                  <span className="font-label-sm text-label-sm text-tertiary font-bold">0 Fraud Escapes</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">100% audit log signed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-space-lg pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

            <div className="lg:col-span-5 flex flex-col gap-space-md">

              <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
                <button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-sm whitespace-nowrap">
                  All Locked (5)
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
                  3x Failed PIN (3)
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
                  Hardware Lock (1)
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
                  Geo Breach (1)
                </button>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-xs">
                <Icon name="search" className="text-outline text-[20px]" />
                <input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none" placeholder="Filter by Courier, SafeBoda ID, or Order #" type="text" value="" />
                <Icon name="tune" className="text-on-surface-variant text-[18px]" />
              </div>

              <div className="flex flex-col gap-space-sm">

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all relative overflow-hidden" style={{ "boxShadow": "0 0 0 2px #da3700, 0 8px 24px rgba(218, 55, 0, 0.12)" }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
                  <div className="flex items-start justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Selected Dispatch</span>
                      <span className="font-label-sm text-label-sm text-error font-bold">14m Lockout</span>
                    </div>
                    <span className="font-currency-code text-currency-code text-on-surface font-bold whitespace-nowrap">UGX 248,500</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Run #KLA-HUB-04 • Order #SC-9488</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">SoundCore Space One ANC (High Payment)</span>
                    </div>
                  </div>

                  <div className="mt-3 p-space-sm rounded-lg bg-surface-container flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-body-sm">
                      <div className="flex items-center gap-1.5 text-on-surface">
                        <Icon name="two_wheeler" className="text-[16px] text-primary" />
                        <span className="font-label-md text-label-md">Kizito Brian</span>
                        <span className="text-on-surface-variant text-label-sm">(SafeBoda #908 • UFE 219K)</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> In-Corridor
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-sm">
                      <div className="flex items-center gap-1.5 text-on-surface-variant">
                        <Icon name="person_pin" className="text-[16px] text-outline" />
                        <span>Recipient: Sarah Namubiru</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">+256 ••• ••• 714</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-label-sm text-on-surface-variant">
                    <div className="flex items-center gap-1 text-error font-bold">
                      <Icon name="pin_invoke" className="text-[15px]" />
                      <span>3 Incorrect PIN attempts at Acacia Gate 2</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface font-bold">Radius: 18m</span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">Order #SC-9492</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">9m Lockout</span>
                    </div>
                    <span className="font-currency-code text-currency-code text-on-surface font-bold whitespace-nowrap">UGX 145,000</span>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-bold">Oraimo FreePods Pro ANC</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Courier: Paul Kato (SafeBoda #411)</span>
                  </div>
                  <div className="mt-2 p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
                      <Icon name="battery_alert" className="text-[15px] text-outline" />
                      <span>Customer phone dead / Offline code mismatch</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface">Lugogo Bypass</span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">High Value Lock</span>
                      <span className="font-label-sm text-label-sm text-error font-bold">22m Lockout</span>
                    </div>
                    <span className="font-currency-code text-currency-code text-on-surface font-bold whitespace-nowrap">UGX 1,120,000</span>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-bold">Samsung Galaxy A54 5G 256GB</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Courier: Emmanuel B. (Motorbike #UFR 802X)</span>
                  </div>
                  <div className="mt-2 p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-1 text-error text-label-sm font-bold">
                      <Icon name="wrong_location" className="text-[15px]" />
                      <span>Geofence breach &gt; 520m from drop-off</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface">Ntinda Stretcher</span>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">Order #SC-9477</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">4m Lockout</span>
                    </div>
                    <span className="font-currency-code text-currency-code text-on-surface font-bold whitespace-nowrap">UGX 380,000</span>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-bold">JBL Flip 6 Waterproof</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Courier: Mugisha David (SafeBoda #1042)</span>
                  </div>
                  <div className="mt-2 p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-1 text-on-surface-variant text-label-sm">
                      <Icon name="sensors_off" className="text-[15px] text-outline" />
                      <span>NFC Bag Smart-Latch Timeout</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface">Kololo Terrace</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-space-md">

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center">
                      <Icon name="encrypted" className="text-primary text-[20px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Handover Incident Dossier: #SC-9488</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Secure Delivery Verification Stream</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span> payment frozen
                  </span>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Attempt Timestamp &amp; Input Telemetry</span>
                  <div className="space-y-2">

                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest">
                      <div className="flex items-center gap-2">
                        <Icon name="close" className="text-error text-[18px]" />
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-bold">Attempt #1: 842-180</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Hash mismatch against client token</span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:02:11 EAT</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest">
                      <div className="flex items-center gap-2">
                        <Icon name="close" className="text-error text-[18px]" />
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-bold">Attempt #2: 842-199</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Hash mismatch against client token</span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">14:03:04 EAT</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-error-container/40">
                      <div className="flex items-center gap-2">
                        <Icon name="lock_reset" className="text-error text-[18px]" />
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-error font-bold">Attempt #3: 842-100 (Final Lockout)</span>
                          <span className="font-body-sm text-body-sm text-error">NOC Security Interlock Engaged automatically</span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-error font-mono font-bold">14:04:22 EAT</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-on-surface text-body-sm">
                    <Icon name="security_update_good" className="text-tertiary text-[18px]" />
                    <span>Courier handset SafeBoda terminal locked down until supervisor unlock.</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">

                  <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Courier GPS</span>
                      <Icon name="location_on" className="text-tertiary text-[16px]" />
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-bold">0.3341° N, 32.5872° E</span>
                    <span className="font-body-sm text-body-sm text-tertiary font-bold">Acacia Mall (On Site)</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Tamper Ribbon</span>
                      <Icon name="verified" className="text-tertiary text-[16px]" />
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-bold">Seal #SW-9941</span>
                    <span className="font-body-sm text-body-sm text-tertiary font-bold">Intact &amp; Photographed</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Telecom CLI Voice</span>
                      <Icon name="ring_volume" className="text-tertiary text-[16px]" />
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-bold">MTN UG (+256 701)</span>
                    <span className="font-body-sm text-body-sm text-tertiary font-bold">Sarah N. Verified</span>
                  </div>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-label-lg text-on-surface font-bold">Triage Protocol Resolution</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Select Resolution Pathway</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">

                  <label className="p-space-md rounded-xl bg-surface-container-low transition-all cursor-pointer relative flex flex-col justify-between" style={{ "boxShadow": "0 0 0 2px #006947, 0 4px 12px rgba(0, 105, 71, 0.1)" }}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary font-bold text-xs">✓</div>
                        <span className="font-label-md text-label-md text-on-surface font-bold">Option A: Supervisor Override Code</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Recommended</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Generates a secure 1-time emergency 4-digit NOC release key directly to Courier Handset and releases Payment upon physical scan.
                    </p>
                    <div className="mt-3 pt-2 flex items-center justify-between text-on-surface font-mono font-bold text-headline-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-sans uppercase">Release PIN:</span>
                      <span className="text-tertiary tracking-widest">7104</span>
                    </div>
                  </label>

                  <label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex flex-col justify-between opacity-80">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface text-xs">B</div>
                        <span className="font-label-md text-label-md text-on-surface font-bold">Option B: Hub Return</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">High Friction</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Directs courier to cancel handover, repackage in anti-theft bag, and route directly to Nakasero Intake Bay.
                    </p>
                    <div className="mt-3 pt-2 flex items-center justify-between text-on-surface font-mono text-body-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-sans">Return Ticket:</span>
                      <span className="text-outline tracking-wider">#RET-KLA-4029</span>
                    </div>
                  </label>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm mt-1">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider">
                      Officer Override Justification &amp; Audit Log Record
                    </label>
                    <textarea className="w-full p-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary shadow-sm" readOnly={true} rows={2}>Customer provided national ID card CM890123... matching Sarah Namubiru order recipient. Audio CLI check completed with zero coercion indicators. Confirmed genuine SMS delivery confusion.</textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-2">
                    <div className="flex items-center gap-3">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Patricia N. Auth Token:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                      </div>
                      <Icon name="check_circle" className="text-tertiary text-[18px]" />
                    </div>
                    <div className="flex items-center gap-1 text-label-sm text-on-surface-variant">
                      <Icon name="fingerprint" className="text-[16px]" />
                      <span>Biometrics Signed</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">

                    <button className="h-12 w-full px-space-md rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95" style={{ "boxShadow": "0 4px 14px rgba(218, 55, 0, 0.30)" }}>
                      <Icon name="key_vertical" className="text-[20px]" />
                      <span>Authorize OTA Override (PIN: 7104)</span>
                    </button>

                    <button className="h-12 w-full px-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm transition-all">
                      <Icon name="assignment_return" className="text-[20px] text-error" />
                      <span>Abort &amp; Route to Nakasero Bay</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <Icon name="smartphone" className="text-on-surface-variant text-[22px]" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">Kizito Handset • SafeBoda App v4.19.2 (UG)</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">MTN 4G Signal: -78dBm • Battery: 88% • Knox Secure Workspace: Active</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                  Socket Connected
                </span>
              </div>
            </div>
          </div>
        </section>
      </div></main></div>
    </div>
  );
};

export default Tablet;
